import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: "residential" | "commercial" | "admin";
  isActive: boolean;

  // Residential specific fields
  address?: string;
  phoneNumber?: string;

  // Commercial specific fields
  companyName?: string;
  businessAddress?: string;
  contactPerson?: string;
  businessPhone?: string;
  taxId?: string;

  // Tracking
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;

  // Methods
  comparePassword(candidatePassword: string): Promise<boolean>;
  getFullName(): string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    role: {
      type: String,
      enum: ["residential", "commercial", "admin"],
      required: true,
      default: "residential",
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    // Residential fields
    address: {
      type: String,
      required: function (this: IUser) {
        return this.role === "residential";
      },
    },
    phoneNumber: {
      type: String,
      required: function (this: IUser) {
        return this.role === "residential";
      },
    },

    // Commercial fields
    companyName: {
      type: String,
      required: function (this: IUser) {
        return this.role === "commercial";
      },
    },
    businessAddress: {
      type: String,
      required: function (this: IUser) {
        return this.role === "commercial";
      },
    },
    contactPerson: {
      type: String,
      required: function (this: IUser) {
        return this.role === "commercial";
      },
    },
    businessPhone: {
      type: String,
      required: function (this: IUser) {
        return this.role === "commercial";
      },
    },
    taxId: {
      type: String,
    },

    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

// Index for performance
userSchema.index({ email: 1 });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Get full name method
userSchema.methods.getFullName = function (): string {
  return `${this.firstName} ${this.lastName}`;
};

// Remove password from JSON output
userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

export const User = mongoose.model<IUser>("User", userSchema);
