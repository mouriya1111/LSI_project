import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api";

// Create axios instance with default config
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

// Types
export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "residential" | "commercial" | "admin";
  isActive: boolean;
  address?: string;
  phoneNumber?: string;
  companyName?: string;
  businessAddress?: string;
  contactPerson?: string;
  businessPhone?: string;
  taxId?: string;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
}

export interface Device {
  _id: string;
  deviceId: string;
  name: string;
  type: "residential" | "commercial" | "master";
  userId: string;
  model: string;
  serialNumber: string;
  manufacturer: string;
  installationDate: string;
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
  status: "active" | "inactive" | "maintenance" | "error";
  isOnline: boolean;
  lastHeartbeat?: string;
  calibration: {
    flowRateMultiplier: number;
    pressureOffset: number;
    temperatureOffset: number;
    lastCalibrationDate: string;
  };
  alertThresholds: {
    maxFlowRate: number;
    minPressure: number;
    maxPressure: number;
    leakDetectionSensitivity: number;
  };
  networkInfo: {
    ipAddress?: string;
    macAddress: string;
    signalStrength?: number;
    protocol: "wifi" | "ethernet" | "cellular" | "lora";
  };
  createdAt: string;
  updatedAt: string;
}

export interface WaterFlow {
  _id: string;
  deviceId: string;
  userId: string;
  flowRate: number;
  totalVolume: number;
  pressure: number;
  temperature: number;
  quality: {
    tds: number;
    ph: number;
    turbidity?: number;
    chlorine?: number;
  };
  batteryLevel?: number;
  signalStrength?: number;
  anomalies: {
    isLeak: boolean;
    isPressureDrop: boolean;
    isUnusualUsage: boolean;
    isQualityIssue: boolean;
  };
  cost?: number;
  tariffRate?: number;
  timestamp: string;
  receivedAt: string;
  source: "device" | "manual" | "simulated";
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface Alert {
  _id: string;
  userId: string;
  deviceId: string;
  waterFlowId?: string;
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
  triggerValue?: number;
  thresholdValue?: number;
  unit?: string;
  status: "active" | "acknowledged" | "resolved" | "dismissed";
  isRead: boolean;
  acknowledgedBy?: string;
  acknowledgedAt?: string;
  resolvedBy?: string;
  resolvedAt?: string;
  resolutionNotes?: string;
  notificationSent: boolean;
  notificationChannels: ("email" | "sms" | "push" | "dashboard")[];
  createdAt: string;
  updatedAt: string;
}

// API Functions

// Auth
export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },

  register: async (userData: any) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  refreshToken: async () => {
    const response = await api.post("/auth/refresh");
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout");
    return response.data;
  },
};

// Dashboard
export const dashboard = {
  getOverview: async (timeRange = "24h") => {
    const response = await api.get(
      `/dashboard/overview?timeRange=${timeRange}`,
    );
    return response.data;
  },

  getUsageAnalytics: async (timeRange = "7d", granularity = "hour") => {
    const response = await api.get(
      `/dashboard/usage-analytics?timeRange=${timeRange}&granularity=${granularity}`,
    );
    return response.data;
  },

  getAlerts: async (params: any = {}) => {
    const response = await api.get("/dashboard/alerts", { params });
    return response.data;
  },

  getAdminStats: async (timeRange = "30d") => {
    const response = await api.get(
      `/dashboard/admin-stats?timeRange=${timeRange}`,
    );
    return response.data;
  },
};

// Devices
export const devices = {
  getAll: async (params: any = {}) => {
    const response = await api.get("/devices", { params });
    return response.data;
  },

  getById: async (deviceId: string) => {
    const response = await api.get(`/devices/${deviceId}`);
    return response.data;
  },

  create: async (deviceData: any) => {
    const response = await api.post("/devices", deviceData);
    return response.data;
  },

  update: async (deviceId: string, updateData: any) => {
    const response = await api.put(`/devices/${deviceId}`, updateData);
    return response.data;
  },

  delete: async (deviceId: string) => {
    const response = await api.delete(`/devices/${deviceId}`);
    return response.data;
  },

  calibrate: async (deviceId: string, calibrationData: any) => {
    const response = await api.post(
      `/devices/${deviceId}/calibrate`,
      calibrationData,
    );
    return response.data;
  },

  setMaintenance: async (deviceId: string, maintenanceMode: boolean) => {
    const response = await api.post(`/devices/${deviceId}/maintenance`, {
      maintenanceMode,
    });
    return response.data;
  },
};

// Water Flow
export const waterFlow = {
  getByDevice: async (deviceId: string, params: any = {}) => {
    const response = await api.get(`/water-flow/device/${deviceId}`, {
      params,
    });
    return response.data;
  },

  getLatest: async (deviceId: string) => {
    const response = await api.get(`/water-flow/latest/${deviceId}`);
    return response.data;
  },

  submitData: async (waterFlowData: any) => {
    const response = await api.post("/water-flow/data", waterFlowData, {
      headers: {
        "X-API-Key": "device-api-key-lsi-2024", // Should be passed from device
      },
    });
    return response.data;
  },
};

// Users
export const users = {
  getProfile: async () => {
    const response = await api.get("/users/profile");
    return response.data;
  },

  updateProfile: async (updateData: any) => {
    const response = await api.put("/users/profile", updateData);
    return response.data;
  },

  changePassword: async (passwordData: any) => {
    const response = await api.post("/users/change-password", passwordData);
    return response.data;
  },

  getAll: async (params: any = {}) => {
    const response = await api.get("/users", { params });
    return response.data;
  },

  getById: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  updateStatus: async (userId: string, isActive: boolean) => {
    const response = await api.put(`/users/${userId}/status`, { isActive });
    return response.data;
  },

  delete: async (userId: string) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  },

  getStats: async () => {
    const response = await api.get("/users/stats/overview");
    return response.data;
  },
};

export default api;
