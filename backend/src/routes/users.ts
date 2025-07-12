import express from "express";
import Joi from "joi";
import { User } from "../models/User.js";
import { Device } from "../models/Device.js";
import { AuthRequest, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Validation schemas
const updateProfileSchema = Joi.object({
  firstName: Joi.string().max(50).optional(),
  lastName: Joi.string().max(50).optional(),
  address: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
  companyName: Joi.string().optional(),
  businessAddress: Joi.string().optional(),
  contactPerson: Joi.string().optional(),
  businessPhone: Joi.string().optional(),
  taxId: Joi.string().optional(),
});

const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
});

// @route   GET /api/users/profile
// @desc    Get current user profile
// @access  Private
router.get("/profile", async (req: AuthRequest, res) => {
  try {
    const user = await User.findById(req.user!._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Get user's devices count
    const deviceCount = await Device.countDocuments({ userId: user._id });

    res.json({
      success: true,
      data: {
        user: user.toJSON(),
        deviceCount,
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

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put("/profile", async (req: AuthRequest, res) => {
  try {
    const { error, value } = updateProfileSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const user = await User.findByIdAndUpdate(req.user!._id, value, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: { user: user.toJSON() },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
});

// @route   POST /api/users/change-password
// @desc    Change user password
// @access  Private
router.post("/change-password", async (req: AuthRequest, res) => {
  try {
    const { error, value } = changePasswordSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }

    const { currentPassword, newPassword } = value;

    const user = await User.findById(req.user!._id).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Verify current password
    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to change password",
    });
  }
});

// @route   GET /api/users
// @desc    Get all users (admin only)
// @access  Admin
router.get("/", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20, role, isActive, search } = req.query;

    // Build query
    const query: any = {};
    if (role) query.role = role;
    if (isActive !== undefined) query.isActive = isActive === "true";
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { companyName: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [users, total] = await Promise.all([
      User.find(query).sort({ createdAt: -1 }).limit(Number(limit)).skip(skip),
      User.countDocuments(query),
    ]);

    // Get device counts for each user
    const usersWithDeviceCounts = await Promise.all(
      users.map(async (user) => {
        const deviceCount = await Device.countDocuments({ userId: user._id });
        return {
          ...user.toJSON(),
          deviceCount,
        };
      }),
    );

    res.json({
      success: true,
      data: {
        users: usersWithDeviceCounts,
        pagination: {
          current: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      },
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get users",
    });
  }
});

// @route   GET /api/users/:userId
// @desc    Get user details (admin only)
// @access  Admin
router.get("/:userId", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Get user's devices
    const devices = await Device.find({ userId }).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: {
        user: user.toJSON(),
        devices,
      },
    });
  } catch (error) {
    console.error("Get user details error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get user details",
    });
  }
});

// @route   PUT /api/users/:userId/status
// @desc    Update user status (admin only)
// @access  Admin
router.put("/:userId/status", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { userId } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "isActive must be a boolean value",
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { isActive },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: `User ${isActive ? "activated" : "deactivated"} successfully`,
      data: { user: user.toJSON() },
    });
  } catch (error) {
    console.error("Update user status error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update user status",
    });
  }
});

// @route   DELETE /api/users/:userId
// @desc    Delete user (admin only)
// @access  Admin
router.delete("/:userId", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const { userId } = req.params;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Prevent admin from deleting themselves
    if (userId === req.user!._id) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete your own account",
      });
    }

    // Check if user has devices
    const deviceCount = await Device.countDocuments({ userId });
    if (deviceCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete user with ${deviceCount} associated devices. Please reassign or delete devices first.`,
      });
    }

    await User.findByIdAndDelete(userId);

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
});

// @route   GET /api/users/stats/overview
// @desc    Get user statistics overview (admin only)
// @access  Admin
router.get("/stats/overview", requireAdmin, async (req: AuthRequest, res) => {
  try {
    const [userRoleStats, userActivityStats, recentUsers] = await Promise.all([
      // User count by role
      User.aggregate([
        {
          $group: {
            _id: "$role",
            count: { $sum: 1 },
            active: { $sum: { $cond: ["$isActive", 1, 0] } },
          },
        },
      ]),

      // User activity stats
      User.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: 1 },
            active: { $sum: { $cond: ["$isActive", 1, 0] } },
            withDevices: {
              $sum: {
                $cond: [{ $gt: [{ $size: "$devices" }, 0] }, 1, 0],
              },
            },
          },
        },
      ]),

      // Recent users
      User.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("firstName lastName email role createdAt"),
    ]);

    res.json({
      success: true,
      data: {
        roleStats: userRoleStats,
        activityStats: userActivityStats[0] || {
          total: 0,
          active: 0,
          withDevices: 0,
        },
        recentUsers,
      },
    });
  } catch (error) {
    console.error("Get user stats error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get user statistics",
    });
  }
});

export default router;
