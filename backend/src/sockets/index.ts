import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Device } from "../models/Device.js";
import { WaterFlow } from "../models/WaterFlow.js";
import { Alert } from "../models/Alert.js";

interface AuthenticatedSocket extends any {
  userId?: string;
  userRole?: string;
}

export const initializeSocketHandlers = (io: Server) => {
  // Authentication middleware for sockets
  io.use(async (socket: AuthenticatedSocket, next) => {
    try {
      const token =
        socket.handshake.auth.token ||
        socket.handshake.headers.authorization?.replace("Bearer ", "");

      if (!token) {
        return next(new Error("Authentication token required"));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: string;
      };
      const user = await User.findById(decoded.userId);

      if (!user || !user.isActive) {
        return next(new Error("Invalid token or user not active"));
      }

      socket.userId = user._id.toString();
      socket.userRole = user.role;
      next();
    } catch (error) {
      next(new Error("Authentication failed"));
    }
  });

  io.on("connection", (socket: AuthenticatedSocket) => {
    console.log(`👤 User ${socket.userId} connected via WebSocket`);

    // Join user-specific room for targeted updates
    socket.join(`user_${socket.userId}`);

    // Join role-based rooms
    if (socket.userRole === "admin") {
      socket.join("admins");
    }

    // Handle device subscription
    socket.on("subscribeToDevice", async (deviceId: string) => {
      try {
        const device = await Device.findOne({ deviceId });

        if (!device) {
          socket.emit("error", { message: "Device not found" });
          return;
        }

        // Check if user has access to this device
        if (
          socket.userRole !== "admin" &&
          device.userId.toString() !== socket.userId
        ) {
          socket.emit("error", { message: "Access denied to this device" });
          return;
        }

        socket.join(`device_${deviceId}`);
        console.log(
          `📱 User ${socket.userId} subscribed to device ${deviceId}`,
        );

        // Send latest reading immediately upon subscription
        const latestReading = await WaterFlow.findOne({ deviceId: device._id })
          .sort({ timestamp: -1 })
          .populate("deviceId", "name deviceId location");

        if (latestReading) {
          socket.emit("waterFlowUpdate", {
            deviceId,
            ...latestReading.toJSON(),
          });
        }

        // Send device status
        socket.emit("deviceStatus", {
          deviceId,
          isOnline: device.isOnline,
          lastHeartbeat: device.lastHeartbeat,
          status: device.status,
        });
      } catch (error) {
        console.error("Device subscription error:", error);
        socket.emit("error", { message: "Failed to subscribe to device" });
      }
    });

    // Handle device unsubscription
    socket.on("unsubscribeFromDevice", (deviceId: string) => {
      socket.leave(`device_${deviceId}`);
      console.log(
        `📱 User ${socket.userId} unsubscribed from device ${deviceId}`,
      );
    });

    // Handle alert acknowledgment
    socket.on("acknowledgeAlert", async (data: { alertId: string }) => {
      try {
        const alert = await Alert.findById(data.alertId);

        if (!alert) {
          socket.emit("error", { message: "Alert not found" });
          return;
        }

        // Check if user has access to this alert
        if (
          socket.userRole !== "admin" &&
          alert.userId.toString() !== socket.userId
        ) {
          socket.emit("error", { message: "Access denied to this alert" });
          return;
        }

        alert.status = "acknowledged";
        alert.isRead = true;
        alert.acknowledgedBy = socket.userId as any;
        alert.acknowledgedAt = new Date();
        await alert.save();

        // Emit acknowledgment to all connected clients for this user
        io.to(`user_${alert.userId}`).emit("alertAcknowledged", {
          alertId: alert._id,
          acknowledgedBy: socket.userId,
          acknowledgedAt: alert.acknowledgedAt,
        });
      } catch (error) {
        console.error("Alert acknowledgment error:", error);
        socket.emit("error", { message: "Failed to acknowledge alert" });
      }
    });

    // Handle real-time dashboard data request
    socket.on("requestDashboardData", async (filters: any = {}) => {
      try {
        const { deviceIds = [], timeRange = "24h" } = filters;

        // Get user's devices if not admin
        let userDevices;
        if (socket.userRole === "admin") {
          userDevices = await Device.find();
        } else {
          userDevices = await Device.find({ userId: socket.userId });
        }

        // Filter devices if specific ones requested
        const targetDevices =
          deviceIds.length > 0
            ? userDevices.filter((d) => deviceIds.includes(d.deviceId))
            : userDevices;

        const deviceObjectIds = targetDevices.map((d) => d._id);

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

        // Get aggregated data
        const [currentReadings, alerts, usageStats] = await Promise.all([
          // Latest readings for each device
          WaterFlow.aggregate([
            {
              $match: {
                deviceId: { $in: deviceObjectIds },
                timestamp: { $gte: startTime },
              },
            },
            {
              $sort: { deviceId: 1, timestamp: -1 },
            },
            {
              $group: {
                _id: "$deviceId",
                latest: { $first: "$$ROOT" },
              },
            },
          ]),

          // Active alerts
          Alert.find({
            userId: socket.userId,
            status: { $in: ["active", "acknowledged"] },
            createdAt: { $gte: startTime },
          }).sort({ createdAt: -1 }),

          // Usage statistics
          WaterFlow.aggregate([
            {
              $match: {
                deviceId: { $in: deviceObjectIds },
                timestamp: { $gte: startTime },
              },
            },
            {
              $group: {
                _id: "$deviceId",
                totalVolume: { $sum: "$totalVolume" },
                avgFlowRate: { $avg: "$flowRate" },
                avgPressure: { $avg: "$pressure" },
                avgTemperature: { $avg: "$temperature" },
                dataPoints: { $sum: 1 },
              },
            },
          ]),
        ]);

        socket.emit("dashboardData", {
          devices: targetDevices,
          currentReadings,
          alerts,
          usageStats,
          timestamp: new Date(),
        });
      } catch (error) {
        console.error("Dashboard data request error:", error);
        socket.emit("error", { message: "Failed to get dashboard data" });
      }
    });

    // Handle device control commands (for admin users)
    socket.on(
      "deviceControl",
      async (data: { deviceId: string; command: string; parameters?: any }) => {
        try {
          if (socket.userRole !== "admin") {
            socket.emit("error", {
              message: "Admin access required for device control",
            });
            return;
          }

          const device = await Device.findOne({ deviceId: data.deviceId });
          if (!device) {
            socket.emit("error", { message: "Device not found" });
            return;
          }

          // Emit command to device (if device is listening)
          io.to(`device_${data.deviceId}`).emit("deviceCommand", {
            command: data.command,
            parameters: data.parameters,
            timestamp: new Date(),
            issuedBy: socket.userId,
          });

          // Log the command
          console.log(
            `🎛️  Admin ${socket.userId} issued command '${data.command}' to device ${data.deviceId}`,
          );

          socket.emit("commandSent", {
            deviceId: data.deviceId,
            command: data.command,
            timestamp: new Date(),
          });
        } catch (error) {
          console.error("Device control error:", error);
          socket.emit("error", { message: "Failed to control device" });
        }
      },
    );

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`👋 User ${socket.userId} disconnected from WebSocket`);
    });
  });

  // Periodic updates for all connected clients
  setInterval(() => {
    // Send server time to keep connections alive
    io.emit("serverTime", new Date());
  }, 30000); // Every 30 seconds

  console.log("🔄 Socket.IO handlers initialized");
};
