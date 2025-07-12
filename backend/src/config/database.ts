import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI =
      process.env.MONGODB_URI ||
      "mongodb://localhost:27017/lsi_water_management";

    // More flexible connection options
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000,
    });

    console.log("✅ MongoDB Connected Successfully");
    console.log(`📁 Database: ${mongoose.connection.name}`);

    // Handle connection events
    mongoose.connection.on("error", (error) => {
      console.error("❌ MongoDB connection error:", error);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️  MongoDB disconnected. Attempting to reconnect...");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("🔄 MongoDB reconnected");
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    console.warn(
      "⚠️  Continuing without database - some features may not work",
    );
    // Don't exit in development, continue without DB
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }
};

export const disconnectDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    console.log("👋 MongoDB disconnected");
  } catch (error) {
    console.error("❌ Error disconnecting from MongoDB:", error);
  }
};
