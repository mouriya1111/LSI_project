import express from "express";
import jwt from "jsonwebtoken";
import Joi from "joi";
import { User, IUser } from "../models/User.js";
import { authenticateToken, AuthRequest } from "../middleware/auth.js";

const router = express.Router();

// Validation schemas
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().max(50).required(),
  lastName: Joi.string().max(50).required(),
  role: Joi.string().valid("residential", "commercial").required(),

  // Residential fields
  address: Joi.when("role", {
    is: "residential",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  phoneNumber: Joi.when("role", {
    is: "residential",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),

  // Commercial fields
  companyName: Joi.when("role", {
    is: "commercial",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  businessAddress: Joi.when("role", {
    is: "commercial",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  contactPerson: Joi.when("role", {
    is: "commercial",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  businessPhone: Joi.when("role", {
    is: "commercial",
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
  taxId: Joi.string().optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Generate JWT token
const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", async (req, res) => {
  try {
    // Validate input
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { email, password, firstName, lastName, role, ...otherFields } =
      value;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new user
    const userData: Partial<IUser> = {
      email,
      password,
      firstName,
      lastName,
      role,
      ...otherFields,
    };

    const user = new User(userData);
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: user.toJSON(),
        token,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", async (req, res) => {
  try {
    // Validate input
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { email, password } = value;

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "Account is deactivated. Please contact support.",
      });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: "Login successful",
      data: {
        user: user.toJSON(),
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get("/me", authenticateToken, async (req: AuthRequest, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user,
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get user profile",
    });
  }
});

// @route   POST /api/auth/refresh
// @desc    Refresh JWT token
// @access  Private
router.post("/refresh", authenticateToken, async (req: AuthRequest, res) => {
  try {
    const newToken = generateToken(req.user!._id);

    res.json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        token: newToken,
      },
    });
  } catch (error) {
    console.error("Token refresh error:", error);
    res.status(500).json({
      success: false,
      message: "Token refresh failed",
    });
  }
});

// @route   POST /api/auth/logout
// @desc    Logout user (mainly for client-side cleanup)
// @access  Private
router.post("/logout", authenticateToken, async (req: AuthRequest, res) => {
  try {
    // In a stateless JWT setup, logout is mainly handled client-side
    // But we can perform any server-side cleanup here if needed

    res.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
});

export default router;
