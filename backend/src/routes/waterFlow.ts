import express from "express";
import Joi from "joi";
import { WaterFlow } from "../models/WaterFlow.js";
import { Device } from "../models/Device.js";
import { Alert } from "../models/Alert.js";
import {
  authenticateToken,
  authenticateDevice,
  AuthRequest,
} from "../middleware/auth.js";
// Note: Socket.io instance will be passed to routes or accessed via dependency injection

const router = express.Router();

// Validation schema for water flow data
const waterFlowSchema = Joi.object({
  deviceId: Joi.string().required(),
  flowRate: Joi.number().min(0).required(),
  totalVolume: Joi.number().min(0).required(),
  pressure: Joi.number().min(0).required(),
  temperature: Joi.number().required(),
  quality: Joi.object({
    tds: Joi.number().min(0).required(),
    ph: Joi.number().min(0).max(14).required(),
    turbidity: Joi.number().min(0).optional(),
    chlorine: Joi.number().min(0).optional(),
  }).required(),
  batteryLevel: Joi.number().min(0).max(100).optional(),
  signalStrength: Joi.number().min(-120).max(0).optional(),
  timestamp: Joi.date().optional(),
  location: Joi.object({
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
  }).optional(),
});

// Function to detect anomalies
const detectAnomalies = (data: any, device: any) => {
  const anomalies = {
    isLeak: false,
    isPressureDrop: false,
    isUnusualUsage: false,
    isQualityIssue: false,
  };

  // Leak detection
  if (
    data.flowRate > device.alertThresholds.leakDetectionSensitivity &&
    data.pressure < device.alertThresholds.minPressure
  ) {
    anomalies.isLeak = true;
  }

  // Pressure drop detection
  if (data.pressure < device.alertThresholds.minPressure) {
    anomalies.isPressureDrop = true;
  }

  // Unusual usage (flow rate too high)
  if (data.flowRate > device.alertThresholds.maxFlowRate) {
    anomalies.isUnusualUsage = true;
  }

  // Water quality issues
  if (
    data.quality.ph < 6.5 ||
    data.quality.ph > 8.5 ||
    data.quality.tds > 500
  ) {
    anomalies.isQualityIssue = true;
  }

  return anomalies;
};

// Function to create alerts based on anomalies
const createAlertsForAnomalies = async (
  waterFlow: any,
  device: any,
  anomalies: any,
) => {
  const alerts = [];

  if (anomalies.isLeak) {
    const alert = new Alert({
      userId: device.userId,
      deviceId: device._id,
      waterFlowId: waterFlow._id,
      type: "leak",
      severity: "critical",
      title: "Potential Leak Detected",
      description: `High flow rate (${waterFlow.flowRate} L/min) with low pressure detected at ${device.name}`,
      triggerValue: waterFlow.flowRate,
      thresholdValue: device.alertThresholds.leakDetectionSensitivity,
      unit: "L/min",
      notificationChannels: ["email", "push", "dashboard"],
    });
    alerts.push(alert);
  }

  if (anomalies.isPressureDrop) {
    const alert = new Alert({
      userId: device.userId,
      deviceId: device._id,
      waterFlowId: waterFlow._id,
      type: "pressure_drop",
      severity: "high",
      title: "Low Water Pressure",
      description: `Water pressure (${waterFlow.pressure} bar) below minimum threshold at ${device.name}`,
      triggerValue: waterFlow.pressure,
      thresholdValue: device.alertThresholds.minPressure,
      unit: "bar",
      notificationChannels: ["dashboard"],
    });
    alerts.push(alert);
  }

  if (anomalies.isUnusualUsage) {
    const alert = new Alert({
      userId: device.userId,
      deviceId: device._id,
      waterFlowId: waterFlow._id,
      type: "unusual_usage",
      severity: "medium",
      title: "High Water Usage",
      description: `Unusually high flow rate (${waterFlow.flowRate} L/min) detected at ${device.name}`,
      triggerValue: waterFlow.flowRate,
      thresholdValue: device.alertThresholds.maxFlowRate,
      unit: "L/min",
      notificationChannels: ["dashboard"],
    });
    alerts.push(alert);
  }

  if (anomalies.isQualityIssue) {
    const alert = new Alert({
      userId: device.userId,
      deviceId: device._id,
      waterFlowId: waterFlow._id,
      type: "quality_issue",
      severity: "high",
      title: "Water Quality Issue",
      description: `Water quality parameters out of range (pH: ${waterFlow.quality.ph}, TDS: ${waterFlow.quality.tds} ppm) at ${device.name}`,
      notificationChannels: ["email", "dashboard"],
    });
    alerts.push(alert);
  }

  // Save all alerts
  if (alerts.length > 0) {
    await Alert.insertMany(alerts);

    // Emit real-time alerts
    try {
      const io = req.app?.get("io");
      if (io) {
        alerts.forEach((alert) => {
          io.to(`user_${device.userId}`).emit("newAlert", alert);
        });
      }
    } catch (ioError) {
      console.warn("Failed to emit alert updates:", ioError);
    }
  }

  return alerts;
};

// @route   POST /api/water-flow/data
// @desc    Receive water flow data from hardware devices
// @access  Device API Key required
router.post("/data", authenticateDevice, async (req, res) => {
  try {
    // Validate input
    const { error, value } = waterFlowSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { deviceId: deviceIdString, ...waterFlowData } = value;

    // Find device by deviceId string
    const device = await Device.findOne({ deviceId: deviceIdString }).populate(
      "userId",
    );
    if (!device) {
      return res.status(404).json({
        success: false,
        message: "Device not found",
      });
    }

    // Update device status
    device.isOnline = true;
    device.lastHeartbeat = new Date();
    await device.save();

    // Detect anomalies
    const anomalies = detectAnomalies(waterFlowData, device);

    // Create water flow record
    const waterFlow = new WaterFlow({
      deviceId: device._id,
      userId: device.userId,
      ...waterFlowData,
      anomalies,
      timestamp: waterFlowData.timestamp || new Date(),
      source: "device",
    });

    await waterFlow.save();

    // Create alerts for any detected anomalies
    await createAlertsForAnomalies(waterFlow, device, anomalies);

    // Emit real-time data to connected users
    try {
      const io = req.app.get("io");
      if (io) {
        io.to(`user_${device.userId._id}`).emit("waterFlowUpdate", {
          deviceId: device.deviceId,
          ...waterFlow.toJSON(),
        });

        // Emit to device-specific room
        io.to(`device_${device.deviceId}`).emit("dataReceived", {
          success: true,
          timestamp: new Date(),
        });
      }
    } catch (ioError) {
      console.warn("Failed to emit real-time updates:", ioError);
    }

    res.json({
      success: true,
      message: "Water flow data received successfully",
      data: {
        id: waterFlow._id,
        anomaliesDetected: Object.values(anomalies).some(Boolean),
        anomalies,
      },
    });
  } catch (error) {
    console.error("Water flow data error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process water flow data",
    });
  }
});

// @route   GET /api/water-flow/device/:deviceId
// @desc    Get water flow history for a specific device
// @access  Private
router.get(
  "/device/:deviceId",
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const { deviceId } = req.params;
      const {
        limit = 100,
        page = 1,
        startDate,
        endDate,
        anomaliesOnly = false,
      } = req.query;

      // Find device
      const device = await Device.findOne({ deviceId });
      if (!device) {
        return res.status(404).json({
          success: false,
          message: "Device not found",
        });
      }

      // Check if user has access to this device
      if (
        req.user!.role !== "admin" &&
        device.userId.toString() !== req.user!._id
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied to this device",
        });
      }

      // Build query
      const query: any = { deviceId: device._id };

      // Date range filter
      if (startDate || endDate) {
        query.timestamp = {};
        if (startDate) query.timestamp.$gte = new Date(startDate as string);
        if (endDate) query.timestamp.$lte = new Date(endDate as string);
      }

      // Anomalies filter
      if (anomaliesOnly === "true") {
        query.$or = [
          { "anomalies.isLeak": true },
          { "anomalies.isPressureDrop": true },
          { "anomalies.isUnusualUsage": true },
          { "anomalies.isQualityIssue": true },
        ];
      }

      const skip = (Number(page) - 1) * Number(limit);

      const [waterFlowData, total] = await Promise.all([
        WaterFlow.find(query)
          .sort({ timestamp: -1 })
          .limit(Number(limit))
          .skip(skip)
          .populate("deviceId", "name deviceId location"),
        WaterFlow.countDocuments(query),
      ]);

      res.json({
        success: true,
        data: {
          waterFlowData,
          pagination: {
            current: Number(page),
            limit: Number(limit),
            total,
            pages: Math.ceil(total / Number(limit)),
          },
        },
      });
    } catch (error) {
      console.error("Get water flow history error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get water flow history",
      });
    }
  },
);

// @route   GET /api/water-flow/latest/:deviceId
// @desc    Get latest water flow reading for a device
// @access  Private
router.get(
  "/latest/:deviceId",
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const { deviceId } = req.params;

      const device = await Device.findOne({ deviceId });
      if (!device) {
        return res.status(404).json({
          success: false,
          message: "Device not found",
        });
      }

      // Check access
      if (
        req.user!.role !== "admin" &&
        device.userId.toString() !== req.user!._id
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied to this device",
        });
      }

      const latestReading = await WaterFlow.findOne({ deviceId: device._id })
        .sort({ timestamp: -1 })
        .populate("deviceId", "name deviceId location");

      if (!latestReading) {
        return res.status(404).json({
          success: false,
          message: "No readings found for this device",
        });
      }

      res.json({
        success: true,
        data: latestReading,
      });
    } catch (error) {
      console.error("Get latest reading error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get latest reading",
      });
    }
  },
);

export default router;
