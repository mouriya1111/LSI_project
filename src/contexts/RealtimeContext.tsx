import React, { createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../lib/socket";
import { useAuth } from "./AuthContext";
import { WaterFlow, Alert, Device } from "../lib/api";
import { toast } from "sonner";

interface RealtimeData {
  latestReadings: Map<string, WaterFlow>;
  alerts: Alert[];
  deviceStatuses: Map<string, { isOnline: boolean; lastHeartbeat?: string }>;
  connectedDevices: Set<string>;
}

interface RealtimeContextType {
  data: RealtimeData;
  subscribeToDevice: (deviceId: string) => void;
  unsubscribeFromDevice: (deviceId: string) => void;
  acknowledgeAlert: (alertId: string) => void;
  requestDashboardData: (filters?: any) => void;
  sendDeviceCommand: (
    deviceId: string,
    command: string,
    parameters?: any,
  ) => void;
  isConnected: boolean;
}

const RealtimeContext = createContext<RealtimeContextType | undefined>(
  undefined,
);

export const useRealtime = () => {
  const context = useContext(RealtimeContext);
  if (context === undefined) {
    throw new Error("useRealtime must be used within a RealtimeProvider");
  }
  return context;
};

interface RealtimeProviderProps {
  children: React.ReactNode;
}

export const RealtimeProvider: React.FC<RealtimeProviderProps> = ({
  children,
}) => {
  const { user, isAuthenticated } = useAuth();
  const socket = useSocket();

  const [data, setData] = useState<RealtimeData>({
    latestReadings: new Map(),
    alerts: [],
    deviceStatuses: new Map(),
    connectedDevices: new Set(),
  });

  // Initialize socket connection when authenticated
  useEffect(() => {
    if (isAuthenticated && !socket.connected) {
      socket.connect().catch((error) => {
        console.error("Failed to connect to real-time server:", error);
        toast.error("Failed to connect to real-time updates");
      });
    } else if (!isAuthenticated && socket.connected) {
      socket.disconnect();
    }
  }, [isAuthenticated, socket]);

  // Set up event listeners
  useEffect(() => {
    if (!socket.connected) return;

    // Water flow updates
    const handleWaterFlowUpdate = (data: WaterFlow & { deviceId: string }) => {
      setData((prev) => ({
        ...prev,
        latestReadings: new Map(prev.latestReadings).set(data.deviceId, data),
      }));

      // Show toast for anomalies
      if (Object.values(data.anomalies).some(Boolean)) {
        const anomalyTypes = Object.entries(data.anomalies)
          .filter(([_, value]) => value)
          .map(([key]) => key.replace("is", "").toLowerCase());

        toast.warning(
          `Anomaly detected: ${anomalyTypes.join(", ")} on device ${data.deviceId}`,
        );
      }
    };

    // New alerts
    const handleNewAlert = (alert: Alert) => {
      setData((prev) => ({
        ...prev,
        alerts: [alert, ...prev.alerts.slice(0, 49)], // Keep last 50 alerts
      }));

      // Show toast for critical alerts
      if (alert.severity === "critical") {
        toast.error(`🚨 ${alert.title}: ${alert.description}`);
      } else if (alert.severity === "high") {
        toast.warning(`⚠️ ${alert.title}: ${alert.description}`);
      }
    };

    // Alert acknowledgments
    const handleAlertAcknowledged = (ackData: {
      alertId: string;
      acknowledgedBy: string;
      acknowledgedAt: string;
    }) => {
      setData((prev) => ({
        ...prev,
        alerts: prev.alerts.map((alert) =>
          alert._id === ackData.alertId
            ? {
                ...alert,
                status: "acknowledged",
                isRead: true,
                acknowledgedBy: ackData.acknowledgedBy,
                acknowledgedAt: ackData.acknowledgedAt,
              }
            : alert,
        ),
      }));
    };

    // Device status updates
    const handleDeviceStatus = (statusData: {
      deviceId: string;
      isOnline: boolean;
      lastHeartbeat?: string;
      status: string;
    }) => {
      setData((prev) => ({
        ...prev,
        deviceStatuses: new Map(prev.deviceStatuses).set(statusData.deviceId, {
          isOnline: statusData.isOnline,
          lastHeartbeat: statusData.lastHeartbeat,
        }),
      }));

      // Show notification for device going offline
      if (!statusData.isOnline) {
        toast.warning(`Device ${statusData.deviceId} went offline`);
      }
    };

    // Dashboard data updates
    const handleDashboardData = (dashboardData: any) => {
      // Update multiple data points from dashboard response
      if (dashboardData.currentReadings) {
        const readingsMap = new Map();
        dashboardData.currentReadings.forEach((reading: any) => {
          if (reading.latest) {
            readingsMap.set(reading._id, reading.latest);
          }
        });
        setData((prev) => ({
          ...prev,
          latestReadings: readingsMap,
        }));
      }

      if (dashboardData.alerts) {
        setData((prev) => ({
          ...prev,
          alerts: dashboardData.alerts,
        }));
      }
    };

    // Connection status
    const handleConnect = () => {
      console.log("🔄 Real-time connection established");
      toast.success("Connected to real-time updates");
    };

    const handleDisconnect = () => {
      console.log("🔌 Real-time connection lost");
      toast.warning("Real-time connection lost");
    };

    const handleError = (error: { message: string }) => {
      console.error("Real-time error:", error);
      toast.error(`Real-time error: ${error.message}`);
    };

    // Register event listeners
    const unsubscribers = [
      socket.on("waterFlowUpdate", handleWaterFlowUpdate),
      socket.on("newAlert", handleNewAlert),
      socket.on("alertAcknowledged", handleAlertAcknowledged),
      socket.on("deviceStatus", handleDeviceStatus),
      socket.on("dashboardData", handleDashboardData),
      socket.on("connect", handleConnect),
      socket.on("disconnect", handleDisconnect),
      socket.on("error", handleError),
    ];

    // Cleanup function
    return () => {
      unsubscribers.forEach((unsubscribe) => unsubscribe());
    };
  }, [socket.connected, socket]);

  // Context methods
  const subscribeToDevice = (deviceId: string) => {
    socket.subscribeToDevice(deviceId);
    setData((prev) => ({
      ...prev,
      connectedDevices: new Set(prev.connectedDevices).add(deviceId),
    }));
  };

  const unsubscribeFromDevice = (deviceId: string) => {
    socket.unsubscribeFromDevice(deviceId);
    setData((prev) => {
      const newConnectedDevices = new Set(prev.connectedDevices);
      newConnectedDevices.delete(deviceId);
      return {
        ...prev,
        connectedDevices: newConnectedDevices,
      };
    });
  };

  const acknowledgeAlert = (alertId: string) => {
    socket.acknowledgeAlert(alertId);
  };

  const requestDashboardData = (filters?: any) => {
    socket.requestDashboardData(filters);
  };

  const sendDeviceCommand = (
    deviceId: string,
    command: string,
    parameters?: any,
  ) => {
    if (user?.role !== "admin") {
      toast.error("Admin access required for device control");
      return;
    }
    socket.sendDeviceCommand(deviceId, command, parameters);
  };

  const value: RealtimeContextType = {
    data,
    subscribeToDevice,
    unsubscribeFromDevice,
    acknowledgeAlert,
    requestDashboardData,
    sendDeviceCommand,
    isConnected: socket.connected,
  };

  return (
    <RealtimeContext.Provider value={value}>
      {children}
    </RealtimeContext.Provider>
  );
};

export default RealtimeProvider;
