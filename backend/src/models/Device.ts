import mongoose, { Document, Schema } from "mongoose";

export interface IDevice extends Document {
  _id: string;
  deviceId: string;
  name: string;
  type: "residential" | "commercial" | "master";
  userId: mongoose.Types.ObjectId;

  // Device specifications
  model: string;
  serialNumber: string;
  manufacturer: string;
  installationDate: Date;

  // Location information
  location: {
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
    building?: string;
    floor?: string;
    room?: string;
  };

  // Device status
  status: "active" | "inactive" | "maintenance" | "error";
  isOnline: boolean;
  lastHeartbeat?: Date;

  // Configuration
  calibration: {
    flowRateMultiplier: number;
    pressureOffset: number;
    temperatureOffset: number;
    lastCalibrationDate: Date;
  };

  // Thresholds for alerts
  alertThresholds: {
    maxFlowRate: number;
    minPressure: number;
    maxPressure: number;
    leakDetectionSensitivity: number;
  };

  // Network information
  networkInfo: {
    ipAddress?: string;
    macAddress: string;
    signalStrength?: number;
    protocol: "wifi" | "ethernet" | "cellular" | "lora";
  };

  createdAt: Date;
  updatedAt: Date;
}

const deviceSchema = new Schema<IDevice>(
  {
    deviceId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    type: {
      type: String,
      enum: ["residential", "commercial", "master"],
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Device specifications
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    manufacturer: {
      type: String,
      required: true,
      default: "BlueMeter Technologies",
    },
    installationDate: {
      type: Date,
      required: true,
    },

    // Location
    location: {
      address: {
        type: String,
        required: true,
      },
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
      building: String,
      floor: String,
      room: String,
    },

    // Status
    status: {
      type: String,
      enum: ["active", "inactive", "maintenance", "error"],
      default: "active",
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
    lastHeartbeat: {
      type: Date,
    },

    // Calibration settings
    calibration: {
      flowRateMultiplier: {
        type: Number,
        default: 1.0,
      },
      pressureOffset: {
        type: Number,
        default: 0.0,
      },
      temperatureOffset: {
        type: Number,
        default: 0.0,
      },
      lastCalibrationDate: {
        type: Date,
        default: Date.now,
      },
    },

    // Alert thresholds
    alertThresholds: {
      maxFlowRate: {
        type: Number,
        default: 100, // liters per minute
      },
      minPressure: {
        type: Number,
        default: 1.0, // bar
      },
      maxPressure: {
        type: Number,
        default: 6.0, // bar
      },
      leakDetectionSensitivity: {
        type: Number,
        default: 0.5, // liters per minute threshold
      },
    },

    // Network information
    networkInfo: {
      ipAddress: String,
      macAddress: {
        type: String,
        required: true,
      },
      signalStrength: Number,
      protocol: {
        type: String,
        enum: ["wifi", "ethernet", "cellular", "lora"],
        default: "wifi",
      },
    },
  },
  {
    timestamps: true,
  },
);

// Indexes for performance
deviceSchema.index({ deviceId: 1 });
deviceSchema.index({ userId: 1 });
deviceSchema.index({ type: 1 });
deviceSchema.index({ status: 1 });
deviceSchema.index({ isOnline: 1 });
deviceSchema.index({ "networkInfo.macAddress": 1 });

export const Device = mongoose.model<IDevice>("Device", deviceSchema);
