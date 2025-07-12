import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import { connectDB } from "./config/database.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { authenticateToken } from "./middleware/auth.js";

// Routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import deviceRoutes from "./routes/devices.js";
import waterFlowRoutes from "./routes/waterFlow.js";
import dashboardRoutes from "./routes/dashboard.js";

// Socket handlers
import { initializeSocketHandlers } from "./sockets/index.js";

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"), // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan("combined"));
app.use(limiter);
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:8080",
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB().catch((error) => {
  console.warn("⚠️  MongoDB connection failed, continuing without database");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/devices", authenticateToken, deviceRoutes);
app.use("/api/water-flow", waterFlowRoutes);
app.use("/api/dashboard", authenticateToken, dashboardRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
  });
});

// Store io instance in app for access in routes
app.set("io", io);

// Initialize Socket.IO handlers
initializeSocketHandlers(io);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Dashboard available at http://localhost:${PORT}/api/health`);
  console.log(`🔄 WebSocket server is ready for real-time updates`);
});

export { io };
