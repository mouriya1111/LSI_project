import mongoose, { Document, Schema } from "mongoose";

export interface IAlert extends Document {
  _id: string;
  userId: mongoose.Types.ObjectId;
  deviceId: mongoose.Types.ObjectId;
  waterFlowId?: mongoose.Types.ObjectId;

  // Alert details
  type:
    | "leak"
    | "pressure_drop"
    | "unusual_usage"
    | "quality_issue"
    | "device_offline"
    | "low_battery"
    | "maintenance_due";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;

  // Alert data
  triggerValue?: number;
  thresholdValue?: number;
  unit?: string;

  // Status
  status: "active" | "acknowledged" | "resolved" | "dismissed";
  isRead: boolean;

  // Actions taken
  acknowledgedBy?: mongoose.Types.ObjectId;
  acknowledgedAt?: Date;
  resolvedBy?: mongoose.Types.ObjectId;
  resolvedAt?: Date;
  resolutionNotes?: string;

  // Notification settings
  notificationSent: boolean;
  notificationChannels: ("email" | "sms" | "push" | "dashboard")[];

  createdAt: Date;
  updatedAt: Date;
}

const alertSchema = new Schema<IAlert>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deviceId: {
      type: Schema.Types.ObjectId,
      ref: "Device",
      required: true,
    },
    waterFlowId: {
      type: Schema.Types.ObjectId,
      ref: "WaterFlow",
    },

    // Alert details
    type: {
      type: String,
      enum: [
        "leak",
        "pressure_drop",
        "unusual_usage",
        "quality_issue",
        "device_offline",
        "low_battery",
        "maintenance_due",
      ],
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000,
    },

    // Alert data
    triggerValue: Number,
    thresholdValue: Number,
    unit: String,

    // Status
    status: {
      type: String,
      enum: ["active", "acknowledged", "resolved", "dismissed"],
      default: "active",
    },
    isRead: {
      type: Boolean,
      default: false,
    },

    // Actions
    acknowledgedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    acknowledgedAt: Date,
    resolvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    resolvedAt: Date,
    resolutionNotes: {
      type: String,
      maxlength: 500,
    },

    // Notifications
    notificationSent: {
      type: Boolean,
      default: false,
    },
    notificationChannels: [
      {
        type: String,
        enum: ["email", "sms", "push", "dashboard"],
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Indexes for performance
alertSchema.index({ userId: 1, createdAt: -1 });
alertSchema.index({ deviceId: 1, createdAt: -1 });
alertSchema.index({ status: 1 });
alertSchema.index({ severity: 1 });
alertSchema.index({ type: 1 });
alertSchema.index({ isRead: 1 });

export const Alert = mongoose.model<IAlert>("Alert", alertSchema);
