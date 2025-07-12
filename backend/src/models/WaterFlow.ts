import mongoose, { Document, Schema } from "mongoose";

export interface IWaterFlow extends Document {
  _id: string;
  deviceId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;

  // Water flow measurements
  flowRate: number; // liters per minute
  totalVolume: number; // total liters consumed
  pressure: number; // water pressure in bar
  temperature: number; // water temperature in celsius

  // Water quality measurements
  quality: {
    tds: number; // Total Dissolved Solids (ppm)
    ph: number; // pH level
    turbidity?: number; // water clarity (NTU)
    chlorine?: number; // chlorine level (ppm)
  };

  // System metrics
  batteryLevel?: number; // device battery percentage
  signalStrength?: number; // network signal strength

  // Anomaly detection
  anomalies: {
    isLeak: boolean;
    isPressureDrop: boolean;
    isUnusualUsage: boolean;
    isQualityIssue: boolean;
  };

  // Billing related
  cost?: number; // calculated cost for this reading
  tariffRate?: number; // rate per liter used for billing

  // Timestamp and metadata
  timestamp: Date;
  receivedAt: Date;
  source: "device" | "manual" | "simulated";

  // Geolocation (if mobile device)
  location?: {
    latitude: number;
    longitude: number;
  };
}

const waterFlowSchema = new Schema<IWaterFlow>(
  {
    deviceId: {
      type: Schema.Types.ObjectId,
      ref: "Device",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Measurements
    flowRate: {
      type: Number,
      required: true,
      min: 0,
    },
    totalVolume: {
      type: Number,
      required: true,
      min: 0,
    },
    pressure: {
      type: Number,
      required: true,
      min: 0,
    },
    temperature: {
      type: Number,
      required: true,
    },

    // Water quality
    quality: {
      tds: {
        type: Number,
        required: true,
        min: 0,
      },
      ph: {
        type: Number,
        required: true,
        min: 0,
        max: 14,
      },
      turbidity: {
        type: Number,
        min: 0,
      },
      chlorine: {
        type: Number,
        min: 0,
      },
    },

    // System metrics
    batteryLevel: {
      type: Number,
      min: 0,
      max: 100,
    },
    signalStrength: {
      type: Number,
      min: -120,
      max: 0,
    },

    // Anomalies
    anomalies: {
      isLeak: {
        type: Boolean,
        default: false,
      },
      isPressureDrop: {
        type: Boolean,
        default: false,
      },
      isUnusualUsage: {
        type: Boolean,
        default: false,
      },
      isQualityIssue: {
        type: Boolean,
        default: false,
      },
    },

    // Billing
    cost: {
      type: Number,
      min: 0,
    },
    tariffRate: {
      type: Number,
      min: 0,
    },

    // Timestamps
    timestamp: {
      type: Date,
      required: true,
    },
    receivedAt: {
      type: Date,
      default: Date.now,
    },
    source: {
      type: String,
      enum: ["device", "manual", "simulated"],
      default: "device",
    },

    // Location
    location: {
      latitude: Number,
      longitude: Number,
    },
  },
  {
    timestamps: true,
  },
);

// Indexes for time-series queries and performance
waterFlowSchema.index({ deviceId: 1, timestamp: -1 });
waterFlowSchema.index({ userId: 1, timestamp: -1 });
waterFlowSchema.index({ timestamp: -1 });
waterFlowSchema.index({ "anomalies.isLeak": 1 });
waterFlowSchema.index({ "anomalies.isPressureDrop": 1 });
waterFlowSchema.index({ "anomalies.isUnusualUsage": 1 });
waterFlowSchema.index({ "anomalies.isQualityIssue": 1 });

// Create a compound index for efficient range queries
waterFlowSchema.index({ deviceId: 1, timestamp: -1, userId: 1 });

export const WaterFlow = mongoose.model<IWaterFlow>(
  "WaterFlow",
  waterFlowSchema,
);
