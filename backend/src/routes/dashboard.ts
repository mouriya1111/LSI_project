import express from "express";
import { WaterFlow } from "../models/WaterFlow.js";
import { Device } from "../models/Device.js";
import { Alert } from "../models/Alert.js";
import { User } from "../models/User.js";
import { AuthRequest, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// @route   GET /api/dashboard/overview
// @desc    Get dashboard overview data
// @access  Private
router.get("/overview", async (req: AuthRequest, res) => {
  try {
    const userId = req.user!._id;
    const userRole = req.user!.role;
    const { timeRange = "24h" } = req.query;

    // Calculate time range
    const now = new Date();
    let startTime = new Date();
    switch (timeRange) {
      case "1h":
        startTime.setHours(now.getHours() - 1);
        break;
      case "24h":
        startTime.setDate(now.getDate() - 1);
        break;
      case "7d":
        startTime.setDate(now.getDate() - 7);
        break;
      case "30d":
        startTime.setDate(now.getDate() - 30);
        break;
      default:
        startTime.setDate(now.getDate() - 1);
    }

    // Get user's devices (or all devices for admin)
    const deviceQuery = userRole === "admin" ? {} : { userId };
    const userDevices = await Device.find(deviceQuery);
    const deviceIds = userDevices.map((d) => d._id);

    // Get overview statistics
    const [
      totalDevices,
      activeDevices,
      totalAlerts,
      criticalAlerts,
      currentUsage,
      usageComparison,
      recentAlerts,
      deviceStatus,
    ] = await Promise.all([
      // Total devices count
      Device.countDocuments(deviceQuery),

      // Active devices count
      Device.countDocuments({ ...deviceQuery, isOnline: true }),

      // Total alerts in time range
      Alert.countDocuments({
        ...(userRole === "admin" ? {} : { userId }),
        createdAt: { $gte: startTime },
      }),

      // Critical alerts count
      Alert.countDocuments({
        ...(userRole === "admin" ? {} : { userId }),
        severity: "critical",
        status: "active",
      }),

      // Current total water usage
      WaterFlow.aggregate([
        {
          $match: {
            deviceId: { $in: deviceIds },
            timestamp: { $gte: startTime },
          },
        },
        {
          $group: {
            _id: null,
            totalVolume: { $sum: "$totalVolume" },
            avgFlowRate: { $avg: "$flowRate" },
            avgPressure: { $avg: "$pressure" },
            dataPoints: { $sum: 1 },
          },
        },
      ]),

      // Usage comparison with previous period
      WaterFlow.aggregate([
        {
          $match: {
            deviceId: { $in: deviceIds },
            timestamp: {
              $gte: new Date(
                startTime.getTime() - (now.getTime() - startTime.getTime()),
              ),
              $lt: startTime,
            },
          },
        },
        {
          $group: {
            _id: null,
            totalVolume: { $sum: "$totalVolume" },
            avgFlowRate: { $avg: "$flowRate" },
          },
        },
      ]),

      // Recent alerts
      Alert.find({
        ...(userRole === "admin" ? {} : { userId }),
        createdAt: { $gte: startTime },
      })
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("deviceId", "name deviceId"),

      // Device status breakdown
      Device.aggregate([
        { $match: deviceQuery },
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
      ]),
    ]);

    // Calculate usage change percentage
    const currentTotalUsage = currentUsage[0]?.totalVolume || 0;
    const previousTotalUsage = usageComparison[0]?.totalVolume || 0;
    const usageChange =
      previousTotalUsage > 0
        ? ((currentTotalUsage - previousTotalUsage) / previousTotalUsage) * 100
        : 0;

    res.json({
      success: true,
      data: {
        overview: {
          totalDevices,
          activeDevices,
          totalAlerts,
          criticalAlerts,
          currentUsage: currentUsage[0] || {
            totalVolume: 0,
            avgFlowRate: 0,
            avgPressure: 0,
            dataPoints: 0,
          },
          usageChange,
        },
        recentAlerts,
        deviceStatus,
        timeRange,
        generatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Dashboard overview error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get dashboard overview",
    });
  }
});

// @route   GET /api/dashboard/usage-analytics
// @desc    Get detailed usage analytics
// @access  Private
router.get("/usage-analytics", async (req: AuthRequest, res) => {
  try {
    const userId = req.user!._id;
    const userRole = req.user!.role;
    const { timeRange = "7d", granularity = "hour" } = req.query;

    // Calculate time range
    const now = new Date();
    let startTime = new Date();
    let groupBy: any = {};

    switch (timeRange) {
      case "24h":
        startTime.setDate(now.getDate() - 1);
        break;
      case "7d":
        startTime.setDate(now.getDate() - 7);
        break;
      case "30d":
        startTime.setDate(now.getDate() - 30);
        break;
      default:
        startTime.setDate(now.getDate() - 7);
    }

    // Set grouping based on granularity
    switch (granularity) {
      case "hour":
        groupBy = {
          year: { $year: "$timestamp" },
          month: { $month: "$timestamp" },
          day: { $dayOfMonth: "$timestamp" },
          hour: { $hour: "$timestamp" },
        };
        break;
      case "day":
        groupBy = {
          year: { $year: "$timestamp" },
          month: { $month: "$timestamp" },
          day: { $dayOfMonth: "$timestamp" },
        };
        break;
      case "month":
        groupBy = {
          year: { $year: "$timestamp" },
          month: { $month: "$timestamp" },
        };
        break;
      default:
        groupBy = {
          year: { $year: "$timestamp" },
          month: { $month: "$timestamp" },
          day: { $dayOfMonth: "$timestamp" },
          hour: { $hour: "$timestamp" },
        };
    }

    // Get user's devices
    const deviceQuery = userRole === "admin" ? {} : { userId };
    const userDevices = await Device.find(deviceQuery);
    const deviceIds = userDevices.map((d) => d._id);

    // Get usage analytics
    const [usageTimeSeries, deviceBreakdown, qualityMetrics] =
      await Promise.all([
        // Time series usage data
        WaterFlow.aggregate([
          {
            $match: {
              deviceId: { $in: deviceIds },
              timestamp: { $gte: startTime },
            },
          },
          {
            $group: {
              _id: groupBy,
              totalVolume: { $sum: "$totalVolume" },
              avgFlowRate: { $avg: "$flowRate" },
              avgPressure: { $avg: "$pressure" },
              avgTemperature: { $avg: "$temperature" },
              minTDS: { $min: "$quality.tds" },
              maxTDS: { $max: "$quality.tds" },
              avgTDS: { $avg: "$quality.tds" },
              avgPH: { $avg: "$quality.ph" },
              count: { $sum: 1 },
            },
          },
          {
            $sort: {
              "_id.year": 1,
              "_id.month": 1,
              "_id.day": 1,
              "_id.hour": 1,
            },
          },
        ]),

        // Usage breakdown by device
        WaterFlow.aggregate([
          {
            $match: {
              deviceId: { $in: deviceIds },
              timestamp: { $gte: startTime },
            },
          },
          {
            $group: {
              _id: "$deviceId",
              totalVolume: { $sum: "$totalVolume" },
              avgFlowRate: { $avg: "$flowRate" },
              maxFlowRate: { $max: "$flowRate" },
              readingsCount: { $sum: 1 },
            },
          },
          {
            $lookup: {
              from: "devices",
              localField: "_id",
              foreignField: "_id",
              as: "device",
            },
          },
          {
            $unwind: "$device",
          },
          {
            $sort: { totalVolume: -1 },
          },
        ]),

        // Water quality metrics
        WaterFlow.aggregate([
          {
            $match: {
              deviceId: { $in: deviceIds },
              timestamp: { $gte: startTime },
            },
          },
          {
            $group: {
              _id: null,
              avgTDS: { $avg: "$quality.tds" },
              minTDS: { $min: "$quality.tds" },
              maxTDS: { $max: "$quality.tds" },
              avgPH: { $avg: "$quality.ph" },
              minPH: { $min: "$quality.ph" },
              maxPH: { $max: "$quality.ph" },
              avgTurbidity: { $avg: "$quality.turbidity" },
              avgChlorine: { $avg: "$quality.chlorine" },
              qualityIssues: {
                $sum: {
                  $cond: ["$anomalies.isQualityIssue", 1, 0],
                },
              },
              totalReadings: { $sum: 1 },
            },
          },
        ]),
      ]);

    res.json({
      success: true,
      data: {
        usageTimeSeries,
        deviceBreakdown,
        qualityMetrics: qualityMetrics[0] || {},
        timeRange,
        granularity,
        generatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Usage analytics error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get usage analytics",
    });
  }
});

// @route   GET /api/dashboard/alerts
// @desc    Get alerts with filtering and pagination
// @access  Private
router.get("/alerts", async (req: AuthRequest, res) => {
  try {
    const userId = req.user!._id;
    const userRole = req.user!.role;
    const {
      page = 1,
      limit = 20,
      status,
      severity,
      type,
      startDate,
      endDate,
      deviceId,
    } = req.query;

    // Build query
    const query: any = userRole === "admin" ? {} : { userId };

    if (status) query.status = status;
    if (severity) query.severity = severity;
    if (type) query.type = type;
    if (deviceId) {
      const device = await Device.findOne({ deviceId });
      if (device) query.deviceId = device._id;
    }

    // Date range filter
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate as string);
      if (endDate) query.createdAt.$lte = new Date(endDate as string);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [alerts, total, alertSummary] = await Promise.all([
      Alert.find(query)
        .sort({ createdAt: -1 })
        .limit(Number(limit))
        .skip(skip)
        .populate("deviceId", "name deviceId location")
        .populate("acknowledgedBy", "firstName lastName")
        .populate("resolvedBy", "firstName lastName"),

      Alert.countDocuments(query),

      Alert.aggregate([
        { $match: userRole === "admin" ? {} : { userId } },
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            active: { $sum: { $cond: [{ $eq: ["$status", "active"] }, 1, 0] } },
            critical: {
              $sum: { $cond: [{ $eq: ["$severity", "critical"] }, 1, 0] },
            },
            unread: { $sum: { $cond: [{ $eq: ["$isRead", false] }, 1, 0] } },
          },
        },
      ]),
    ]);

    res.json({
      success: true,
      data: {
        alerts,
        summary: alertSummary[0] || {
          total: 0,
          active: 0,
          critical: 0,
          unread: 0,
        },
        pagination: {
          current: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      },
    });
  } catch (error) {
    console.error("Get alerts error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get alerts",
    });
  }
});

// @route   GET /api/dashboard/admin-stats
// @desc    Get admin-only statistics
// @access  Admin only
router.get("/admin-stats", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { timeRange = "30d" } = req.query;

    // Calculate time range
    const now = new Date();
    let startTime = new Date();
    switch (timeRange) {
      case "7d":
        startTime.setDate(now.getDate() - 7);
        break;
      case "30d":
        startTime.setDate(now.getDate() - 30);
        break;
      case "90d":
        startTime.setDate(now.getDate() - 90);
        break;
      default:
        startTime.setDate(now.getDate() - 30);
    }

    const [
      systemStats,
      userStats,
      deviceStats,
      alertStats,
      usageStats,
      topUsers,
    ] = await Promise.all([
      // System overview
      Promise.resolve({
        totalUsers: await User.countDocuments(),
        activeUsers: await User.countDocuments({ isActive: true }),
        totalDevices: await Device.countDocuments(),
        onlineDevices: await Device.countDocuments({ isOnline: true }),
        totalReadings: await WaterFlow.countDocuments({
          timestamp: { $gte: startTime },
        }),
      }),

      // User statistics by role
      User.aggregate([
        {
          $group: {
            _id: "$role",
            count: { $sum: 1 },
            active: { $sum: { $cond: ["$isActive", 1, 0] } },
          },
        },
      ]),

      // Device statistics
      Device.aggregate([
        {
          $group: {
            _id: "$type",
            count: { $sum: 1 },
            online: { $sum: { $cond: ["$isOnline", 1, 0] } },
          },
        },
      ]),

      // Alert statistics
      Alert.aggregate([
        {
          $match: { createdAt: { $gte: startTime } },
        },
        {
          $group: {
            _id: {
              severity: "$severity",
              type: "$type",
            },
            count: { $sum: 1 },
          },
        },
      ]),

      // Usage statistics
      WaterFlow.aggregate([
        {
          $match: { timestamp: { $gte: startTime } },
        },
        {
          $group: {
            _id: null,
            totalVolume: { $sum: "$totalVolume" },
            avgFlowRate: { $avg: "$flowRate" },
            totalReadings: { $sum: 1 },
            avgPressure: { $avg: "$pressure" },
            avgTemperature: { $avg: "$temperature" },
          },
        },
      ]),

      // Top users by usage
      WaterFlow.aggregate([
        {
          $match: { timestamp: { $gte: startTime } },
        },
        {
          $group: {
            _id: "$userId",
            totalVolume: { $sum: "$totalVolume" },
            readingsCount: { $sum: 1 },
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
        {
          $sort: { totalVolume: -1 },
        },
        {
          $limit: 10,
        },
      ]),
    ]);

    res.json({
      success: true,
      data: {
        systemStats,
        userStats,
        deviceStats,
        alertStats,
        usageStats: usageStats[0] || {},
        topUsers,
        timeRange,
        generatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Admin stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get admin statistics",
    });
  }
});

export default router;
