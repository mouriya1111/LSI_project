import { io, Socket } from "socket.io-client";
import { WaterFlow, Alert, Device } from "./api";

export interface SocketEvents {
  // Incoming events from server
  waterFlowUpdate: (data: WaterFlow & { deviceId: string }) => void;
  newAlert: (alert: Alert) => void;
  alertAcknowledged: (data: {
    alertId: string;
    acknowledgedBy: string;
    acknowledgedAt: string;
  }) => void;
  deviceStatus: (data: {
    deviceId: string;
    isOnline: boolean;
    lastHeartbeat?: string;
    status: string;
  }) => void;
  dashboardData: (data: any) => void;
  commandSent: (data: {
    deviceId: string;
    command: string;
    timestamp: string;
  }) => void;
  serverTime: (time: string) => void;
  error: (error: { message: string }) => void;
  connect: () => void;
  disconnect: () => void;
  connect_error: (error: Error) => void;

  // Outgoing events to server
  subscribeToDevice: (deviceId: string) => void;
  unsubscribeFromDevice: (deviceId: string) => void;
  acknowledgeAlert: (data: { alertId: string }) => void;
  requestDashboardData: (filters?: {
    deviceIds?: string[];
    timeRange?: string;
  }) => void;
  deviceControl: (data: {
    deviceId: string;
    command: string;
    parameters?: any;
  }) => void;
}

class SocketService {
  private socket: Socket | null = null;
  private eventListeners: Map<string, Function[]> = new Map();
  private isConnected = false;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  constructor() {
    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.emit = this.emit.bind(this);
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
  }

  connect(token?: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isConnected) {
        resolve();
        return;
      }

      const authToken = token || localStorage.getItem("authToken");
      if (!authToken) {
        reject(new Error("No authentication token available"));
        return;
      }

      this.socket = io("http://localhost:5001", {
        auth: {
          token: authToken,
        },
        transports: ["websocket", "polling"],
        timeout: 10000,
      });

      this.socket.on("connect", () => {
        console.log("🔄 Socket.IO connected");
        this.isConnected = true;
        this.reconnectAttempts = 0;
        this.reattachListeners();
        resolve();
      });

      this.socket.on("disconnect", (reason) => {
        console.log("🔌 Socket.IO disconnected:", reason);
        this.isConnected = false;

        // Attempt to reconnect if not manually disconnected
        if (reason === "io server disconnect") {
          // Server initiated disconnect, don't reconnect
          return;
        }

        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++;
          console.log(
            `🔄 Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`,
          );
          setTimeout(() => {
            this.connect(authToken);
          }, 1000 * this.reconnectAttempts);
        }
      });

      this.socket.on("connect_error", (error) => {
        console.error("❌ Socket.IO connection error:", error);
        this.isConnected = false;
        reject(error);
      });

      // Handle authentication errors
      this.socket.on("error", (error) => {
        console.error("❌ Socket.IO error:", error);
        if (error.message?.includes("Authentication")) {
          // Clear token and redirect to login
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }
      });

      // Server time for keepalive
      this.socket.on("serverTime", (time) => {
        // Keep connection alive
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
      console.log("👋 Socket.IO manually disconnected");
    }
  }

  emit<K extends keyof SocketEvents>(event: K, ...args: any[]): void {
    if (this.socket && this.isConnected) {
      this.socket.emit(event as string, ...args);
    } else {
      console.warn(`⚠️  Cannot emit '${event}' - socket not connected`);
    }
  }

  on<K extends keyof SocketEvents>(
    event: K,
    callback: SocketEvents[K],
  ): () => void {
    // Store listener for reattachment
    if (!this.eventListeners.has(event as string)) {
      this.eventListeners.set(event as string, []);
    }
    this.eventListeners.get(event as string)!.push(callback);

    // Attach to current socket if connected
    if (this.socket) {
      this.socket.on(event as string, callback as any);
    }

    // Return cleanup function
    return () => this.off(event, callback);
  }

  off<K extends keyof SocketEvents>(
    event: K,
    callback?: SocketEvents[K],
  ): void {
    if (this.socket) {
      if (callback) {
        this.socket.off(event as string, callback as any);
      } else {
        this.socket.off(event as string);
      }
    }

    // Remove from stored listeners
    if (callback && this.eventListeners.has(event as string)) {
      const listeners = this.eventListeners.get(event as string)!;
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  private reattachListeners(): void {
    if (!this.socket) return;

    // Reattach all stored event listeners
    for (const [event, listeners] of this.eventListeners.entries()) {
      for (const listener of listeners) {
        this.socket.on(event, listener as any);
      }
    }
  }

  // Convenience methods for common operations

  subscribeToDevice(deviceId: string): void {
    this.emit("subscribeToDevice", deviceId);
  }

  unsubscribeFromDevice(deviceId: string): void {
    this.emit("unsubscribeFromDevice", deviceId);
  }

  acknowledgeAlert(alertId: string): void {
    this.emit("acknowledgeAlert", { alertId });
  }

  requestDashboardData(filters?: {
    deviceIds?: string[];
    timeRange?: string;
  }): void {
    this.emit("requestDashboardData", filters || {});
  }

  sendDeviceCommand(deviceId: string, command: string, parameters?: any): void {
    this.emit("deviceControl", { deviceId, command, parameters });
  }

  // Status getters
  get connected(): boolean {
    return this.isConnected;
  }

  get socketId(): string | undefined {
    return this.socket?.id;
  }
}

// Create singleton instance
export const socketService = new SocketService();

// React hooks for easier integration
export const useSocket = () => {
  return {
    socket: socketService,
    connected: socketService.connected,
    connect: socketService.connect,
    disconnect: socketService.disconnect,
    emit: socketService.emit,
    on: socketService.on,
    off: socketService.off,
    subscribeToDevice: socketService.subscribeToDevice,
    unsubscribeFromDevice: socketService.unsubscribeFromDevice,
    acknowledgeAlert: socketService.acknowledgeAlert,
    requestDashboardData: socketService.requestDashboardData,
    sendDeviceCommand: socketService.sendDeviceCommand,
  };
};

export default socketService;
