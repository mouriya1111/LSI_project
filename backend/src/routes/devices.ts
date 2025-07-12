import express from "express";
import Joi from "joi";
import { Device } from "../models/Device.js";
import { WaterFlow } from "../models/WaterFlow.js";
import { AuthRequest, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Validation schema for device creation
const deviceSchema = Joi.object({
  deviceId: Joi.string().required(),
  name: Joi.string().max(100).required(),
  type: Joi.string().valid("residential", "commercial", "master").required(),
  model: Joi.string().required(),
  serialNumber: Joi.string().required(),
  manufacturer: Joi.string().default("BlueMeter Technologies"),
  installationDate: Joi.date().required(),
  location: Joi.object({
    address: Joi.string().required(),
    coordinates: Joi.object({
      latitude: Joi.number(),
      longitude: Joi.number(),
    }).optional(),
    building: Joi.string().optional(),
    floor: Joi.string().optional(),
    room: Joi.string().optional(),
  }).required(),
  networkInfo: Joi.object({
    macAddress: Joi.string().required(),
    protocol: Joi.string()
      .valid("wifi", "ethernet", "cellular", "lora")
      .default("wifi"),
    ipAddress: Joi.string().optional(),
  }).required(),
  alertThresholds: Joi.object({
    maxFlowRate: Joi.number().default(100),
    minPressure: Joi.number().default(1.0),
    maxPressure: Joi.number().default(6.0),
    leakDetectionSensitivity: Joi.number().default(0.5),
  }).optional(),
});

// @route   GET /api/devices
// @desc    Get user's devices or all devices (admin)
// @access  Private
router.get("/", async (req: AuthRequest, res) => {
  try {
    const userId = req.user!._id;
    const userRole = req.user!.role;
    const { status, type, limit = 50, page = 1 } = req.query;

    // Build query
    const query: any = userRole === "admin" ? {} : { userId };
    if (status) query.status = status;
    if (type) query.type = type;

    const skip = (Number(page) - 1) * Number(limit);

    const [devices, total] = await Promise.all([
      Device.find(query)
        .sort({ createdAt: -1 })
        .limit(Number(limit))
        .skip(skip)
        .populate("userId", "firstName lastName email companyName"),
      Device.countDocuments(query),
    ]);

    res.json({
      success: true,
      data: {
        devices,
        pagination: {
          current: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      },
    });
  } catch (error) {
    console.error("Get devices error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get devices",
    });
  }
});

// @route   GET /api/devices/:deviceId
// @desc    Get device details
// @access  Private
router.get("/:deviceId", async (req: AuthRequest, res) => {
  try {
    const { deviceId } = req.params;
    const userId = req.user!._id;
    const userRole = req.user!.role;

    const device = await Device.findOne({ deviceId }).populate(
      "userId",
      "firstName lastName email companyName",
    );

    if (!device) {
      return res.status(404).json({
        success: false,
        message: "Device not found",
      });
    }

    // Check access
    if (userRole !== "admin" && device.userId._id.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Access denied to this device",
      });
    }

    // Get latest readings
    const latestReading = await WaterFlow.findOne({
      deviceId: device._id,
    }).sort({ timestamp: -1 });

    // Get device statistics
    const deviceStats = await WaterFlow.aggregate([
      { $match: { deviceId: device._id } },
      {
        $group: {
          _id: null,
          totalReadings: { $sum: 1 },
          totalVolume: { $sum: "$totalVolume" },
          avgFlowRate: { $avg: "$flowRate" },
          maxFlowRate: { $max: "$flowRate" },
          avgPressure: { $avg: "$pressure" },
          firstReading: { $min: "$timestamp" },
          lastReading: { $max: "$timestamp" },
        },
      },
    ]);

    res.json({
      success: true,
      data: {
        device,
        latestReading,
        statistics: deviceStats[0] || null,
      },
    });
  } catch (error) {
    console.error("Get device details error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get device details",
    });
  }
});

// @route   POST /api/devices
// @desc    Create a new device (admin only)
// @access  Admin
router.post("/", requireAdmin, async (req: AuthRequest, res) => {
  try {
    // Validate input
    const { error, value } = deviceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { userId, ...deviceData } = value;

    // Check if device ID already exists
    const existingDevice = await Device.findOne({
      deviceId: deviceData.deviceId,
    });
    if (existingDevice) {
      return res.status(400).json({
        success: false,
        message: "Device with this ID already exists",
      });
    }

    // Check if serial number already exists
    const existingSerial = await Device.findOne({
      serialNumber: deviceData.serialNumber,
    });
    if (existingSerial) {
      return res.status(400).json({
        success: false,
        message: "Device with this serial number already exists",
      });
    }

    // Create device
    const device = new Device({
      ...deviceData,
      userId: userId || req.user!._id, // Allow admin to assign to specific user
    });

    await device.save();

    res.status(201).json({
      success: true,
      message: "Device created successfully",
      data: { device },
    });
  } catch (error) {
    console.error("Create device error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create device",
    });
  }
});

// @route   PUT /api/devices/:deviceId
// @desc    Update device
// @access  Admin or device owner
router.put("/:deviceId", async (req: AuthRequest, res) => {
  try {
    const { deviceId } = req.params;
    const userId = req.user!._id;
    const userRole = req.user!.role;

    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({
        success: false,
        message: "Device not found",
      });
    }

    // Check access
    if (userRole !== "admin" && device.userId.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "Access denied to this device",
      });
    }

    // Define allowed fields based on user role
    const allowedFields =
      userRole === "admin"
        ? Object.keys(req.body) // Admin can update all fields
        : ["name", "location", "alertThresholds"]; // Regular users can only update limited fields

    const updateData: any = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    const updatedDevice = await Device.findByIdAndUpdate(
      device._id,
      updateData,
      { new: true, runValidators: true },
    ).populate("userId", "firstName lastName email companyName");

    res.json({
      success: true,
      message: "Device updated successfully",
      data: { device: updatedDevice },
    });
  } catch (error) {
    console.error("Update device error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update device",
    });
  }
});

// @route   DELETE /api/devices/:deviceId
// @desc    Delete device (admin only)
// @access  Admin
router.delete("/:deviceId", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { deviceId } = req.params;

    const device = await Device.findOne({ deviceId });
    if (!device) {
      return res.status(404).json({
        success: false,
        message: "Device not found",
      });
    }

    // Delete associated data
    await Promise.all([
      WaterFlow.deleteMany({ deviceId: device._id }),
      Device.findByIdAndDelete(device._id),
    ]);

    res.json({
      success: true,
      message: "Device and associated data deleted successfully",
    });
  } catch (error) {
    console.error("Delete device error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete device",
    });
  }
});

// @route   POST /api/devices/:deviceId/calibrate
// @desc    Calibrate device (admin only)
// @access  Admin
router.post(
  "/:deviceId/calibrate",
  requireAdmin,
  async (req: AuthRequest, res) => {
    try {
      const { deviceId } = req.params;
      const { flowRateMultiplier, pressureOffset, temperatureOffset } =
        req.body;

      const device = await Device.findOne({ deviceId });
      if (!device) {
        return res.status(404).json({
          success: false,
          message: "Device not found",
        });
      }

      // Update calibration settings
      device.calibration = {
        flowRateMultiplier:
          flowRateMultiplier ?? device.calibration.flowRateMultiplier,
        pressureOffset: pressureOffset ?? device.calibration.pressureOffset,
        temperatureOffset:
          temperatureOffset ?? device.calibration.temperatureOffset,
        lastCalibrationDate: new Date(),
      };

      await device.save();

      res.json({
        success: true,
        message: "Device calibrated successfully",
        data: {
          calibration: device.calibration,
        },
      });
    } catch (error) {
      console.error("Calibrate device error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to calibrate device",
      });
    }
  },
);

// @route   POST /api/devices/:deviceId/maintenance
// @desc    Set device maintenance mode
// @access  Admin
router.post(
  "/:deviceId/maintenance",
  requireAdmin,
  async (req: AuthRequest, res) => {
    try {
      const { deviceId } = req.params;
      const { maintenanceMode = true } = req.body;

      const device = await Device.findOne({ deviceId });
      if (!device) {
        return res.status(404).json({
          success: false,
          message: "Device not found",
        });
      }

      device.status = maintenanceMode ? "maintenance" : "active";
      await device.save();

      res.json({
        success: true,
        message: `Device ${maintenanceMode ? "entered" : "exited"} maintenance mode`,
        data: {
          status: device.status,
        },
      });
    } catch (error) {
      console.error("Device maintenance error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update device maintenance status",
      });
    }
  },
);

export default router;
