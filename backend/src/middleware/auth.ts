import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/User.js";

interface AuthRequest extends Request {
  user?: IUser;
}

export const authenticateToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access token is required",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({
        success: false,
        message: "JWT secret is not configured",
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, jwtSecret) as { userId: string };

    // Find the user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid token or user not active",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Token verification failed",
    });
  }
};

// Role-based access control middleware
export const requireRole = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions",
      });
    }

    next();
  };
};

// Admin-only access
export const requireAdmin = requireRole("admin");

// Device API key authentication (for hardware devices)
export const authenticateDevice = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const apiKey = req.headers["x-api-key"] as string;

    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: "API key is required",
      });
    }

    // Check if it's the device API key
    if (apiKey !== process.env.DEVICE_API_KEY) {
      return res.status(401).json({
        success: false,
        message: "Invalid API key",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "API key verification failed",
    });
  }
};

export { AuthRequest };
