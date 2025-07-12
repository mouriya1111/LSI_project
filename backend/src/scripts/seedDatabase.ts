import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../models/User.js";
import { Device } from "../models/Device.js";
import { WaterFlow } from "../models/WaterFlow.js";
import { Alert } from "../models/Alert.js";
import { connectDB, disconnectDB } from "../config/database.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Connect to database
    await connectDB();

    // Clear existing data
    await Promise.all([
      User.deleteMany({}),
      Device.deleteMany({}),
      WaterFlow.deleteMany({}),
      Alert.deleteMany({}),
    ]);
    console.log("🧹 Cleared existing data");

    // Create admin user
    const adminUser = new User({
      email: "admin@bluemeter.com",
      password: "admin123",
      firstName: "System",
      lastName: "Administrator",
      role: "admin",
    });
    await adminUser.save();
    console.log("👑 Created admin user");

    // Create residential users
    const residentialUsers = await User.insertMany([
      {
        email: "john.doe@email.com",
        password: await bcrypt.hash("password123", 12),
        firstName: "John",
        lastName: "Doe",
        role: "residential",
        address: "123 Oak Street, Springfield, IL 62701",
        phoneNumber: "+1-555-0123",
      },
      {
        email: "jane.smith@email.com",
        password: await bcrypt.hash("password123", 12),
        firstName: "Jane",
        lastName: "Smith",
        role: "residential",
        address: "456 Maple Avenue, Springfield, IL 62702",
        phoneNumber: "+1-555-0124",
      },
      {
        email: "mike.johnson@email.com",
        password: await bcrypt.hash("password123", 12),
        firstName: "Mike",
        lastName: "Johnson",
        role: "residential",
        address: "789 Pine Road, Springfield, IL 62703",
        phoneNumber: "+1-555-0125",
      },
    ]);
    console.log("🏠 Created residential users");

    // Create commercial users
    const commercialUsers = await User.insertMany([
      {
        email: "contact@techcorp.com",
        password: await bcrypt.hash("password123", 12),
        firstName: "Sarah",
        lastName: "Wilson",
        role: "commercial",
        companyName: "TechCorp Industries",
        businessAddress: "100 Business Park Drive, Springfield, IL 62704",
        contactPerson: "Sarah Wilson",
        businessPhone: "+1-555-0200",
        taxId: "12-3456789",
      },
      {
        email: "admin@greenmanufacturing.com",
        password: await bcrypt.hash("password123", 12),
        firstName: "David",
        lastName: "Brown",
        role: "commercial",
        companyName: "Green Manufacturing LLC",
        businessAddress: "250 Industrial Boulevard, Springfield, IL 62705",
        contactPerson: "David Brown",
        businessPhone: "+1-555-0201",
        taxId: "98-7654321",
      },
    ]);
    console.log("🏢 Created commercial users");

    // Create devices for residential users
    const residentialDevices = [];
    for (let i = 0; i < residentialUsers.length; i++) {
      const user = residentialUsers[i];
      const device = new Device({
        deviceId: `BM-RES-${String(i + 1).padStart(3, "0")}`,
        name: `${user.firstName}'s Water Meter`,
        type: "residential",
        userId: user._id,
        model: "BlueMeter Residential Pro",
        serialNumber: `BMR${Date.now()}${i}`,
        manufacturer: "BlueMeter Technologies",
        installationDate: new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000,
        ),
        location: {
          address: user.address,
          coordinates: {
            latitude: 39.7817 + (Math.random() - 0.5) * 0.1,
            longitude: -89.6501 + (Math.random() - 0.5) * 0.1,
          },
        },
        networkInfo: {
          macAddress: `AA:BB:CC:DD:EE:${String(i + 1).padStart(2, "0")}`,
          protocol: "wifi",
          ipAddress: `192.168.1.${100 + i}`,
        },
        isOnline: Math.random() > 0.2, // 80% chance of being online
        lastHeartbeat: new Date(Date.now() - Math.random() * 3600000), // Within last hour
      });
      residentialDevices.push(device);
    }
    await Device.insertMany(residentialDevices);
    console.log("💧 Created residential devices");

    // Create devices for commercial users
    const commercialDevices = [];
    for (let i = 0; i < commercialUsers.length; i++) {
      const user = commercialUsers[i];
      const device = new Device({
        deviceId: `BM-COM-${String(i + 1).padStart(3, "0")}`,
        name: `${user.companyName} Main Meter`,
        type: "commercial",
        userId: user._id,
        model: "BlueMeter Commercial Enterprise",
        serialNumber: `BMC${Date.now()}${i}`,
        manufacturer: "BlueMeter Technologies",
        installationDate: new Date(
          Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000,
        ),
        location: {
          address: user.businessAddress,
          coordinates: {
            latitude: 39.7817 + (Math.random() - 0.5) * 0.1,
            longitude: -89.6501 + (Math.random() - 0.5) * 0.1,
          },
          building: "Main Building",
          floor: "Ground Floor",
        },
        networkInfo: {
          macAddress: `BB:CC:DD:EE:FF:${String(i + 1).padStart(2, "0")}`,
          protocol: "ethernet",
          ipAddress: `10.0.1.${10 + i}`,
        },
        alertThresholds: {
          maxFlowRate: 500, // Higher for commercial
          minPressure: 2.0,
          maxPressure: 8.0,
          leakDetectionSensitivity: 2.0,
        },
        isOnline: Math.random() > 0.1, // 90% chance of being online
        lastHeartbeat: new Date(Date.now() - Math.random() * 1800000), // Within last 30 minutes
      });
      commercialDevices.push(device);
    }
    await Device.insertMany(commercialDevices);
    console.log("🏭 Created commercial devices");

    // Create master device for admin
    const masterDevice = new Device({
      deviceId: "BM-MASTER-001",
      name: "System Master Controller",
      type: "master",
      userId: adminUser._id,
      model: "BlueMeter Master Control Unit",
      serialNumber: `BMM${Date.now()}`,
      manufacturer: "BlueMeter Technologies",
      installationDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      location: {
        address:
          "BlueMeter Headquarters, 500 Tech Drive, Springfield, IL 62706",
        coordinates: {
          latitude: 39.7817,
          longitude: -89.6501,
        },
        building: "Data Center",
        floor: "Basement",
        room: "Server Room A",
      },
      networkInfo: {
        macAddress: "CC:DD:EE:FF:AA:BB",
        protocol: "ethernet",
        ipAddress: "10.0.0.1",
      },
      alertThresholds: {
        maxFlowRate: 1000,
        minPressure: 3.0,
        maxPressure: 10.0,
        leakDetectionSensitivity: 1.0,
      },
      isOnline: true,
      lastHeartbeat: new Date(),
    });
    await masterDevice.save();
    console.log("🎛️  Created master device");

    // Generate sample water flow data
    const allDevices = [
      ...residentialDevices,
      ...commercialDevices,
      masterDevice,
    ];
    const waterFlowData = [];

    for (const device of allDevices) {
      // Generate data for the last 7 days
      const now = new Date();
      for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
          if (Math.random() > 0.1) {
            // 90% chance of having data for each hour
            const timestamp = new Date(
              now.getTime() - (day * 24 + (23 - hour)) * 60 * 60 * 1000,
            );

            // Base values depend on device type
            const baseFlowRate =
              device.type === "commercial"
                ? 50
                : device.type === "master"
                  ? 100
                  : 10;
            const basePressure = device.type === "commercial" ? 4.0 : 3.5;

            // Add some realistic variation
            const flowRate = Math.max(
              0,
              baseFlowRate + (Math.random() - 0.5) * baseFlowRate * 0.5,
            );
            const pressure = Math.max(
              1,
              basePressure + (Math.random() - 0.5) * 1.0,
            );
            const temperature = 15 + Math.random() * 10; // 15-25°C

            // Water quality with some variation
            const tds = 200 + Math.random() * 100; // 200-300 ppm
            const ph = 7.0 + (Math.random() - 0.5) * 1.0; // 6.5-7.5

            // Detect anomalies based on thresholds
            const anomalies = {
              isLeak:
                flowRate > device.alertThresholds.leakDetectionSensitivity &&
                pressure < device.alertThresholds.minPressure,
              isPressureDrop: pressure < device.alertThresholds.minPressure,
              isUnusualUsage: flowRate > device.alertThresholds.maxFlowRate,
              isQualityIssue: ph < 6.5 || ph > 8.5 || tds > 400,
            };

            waterFlowData.push({
              deviceId: device._id,
              userId: device.userId,
              flowRate,
              totalVolume: flowRate * 60, // Convert L/min to L/hour
              pressure,
              temperature,
              quality: {
                tds,
                ph,
                turbidity: 0.5 + Math.random() * 0.5,
                chlorine: 0.1 + Math.random() * 0.3,
              },
              anomalies,
              timestamp,
              batteryLevel:
                device.type === "residential"
                  ? 85 + Math.random() * 15
                  : undefined,
              signalStrength:
                device.networkInfo.protocol === "wifi"
                  ? -45 - Math.random() * 20
                  : undefined,
              source: "simulated",
            });
          }
        }
      }
    }

    await WaterFlow.insertMany(waterFlowData);
    console.log(`📊 Created ${waterFlowData.length} water flow readings`);

    // Create sample alerts based on anomalies
    const alerts = [];
    const anomalyReadings = waterFlowData.filter((reading) =>
      Object.values(reading.anomalies).some(Boolean),
    );

    for (const reading of anomalyReadings.slice(0, 20)) {
      // Limit to 20 alerts
      const device = allDevices.find((d) => d._id.equals(reading.deviceId));
      if (!device) continue;

      if (reading.anomalies.isLeak) {
        alerts.push({
          userId: reading.userId,
          deviceId: reading.deviceId,
          type: "leak",
          severity: "critical",
          title: "Potential Leak Detected",
          description: `High flow rate detected at ${device.name}`,
          triggerValue: reading.flowRate,
          thresholdValue: device.alertThresholds.leakDetectionSensitivity,
          unit: "L/min",
          status: Math.random() > 0.5 ? "active" : "acknowledged",
          isRead: Math.random() > 0.3,
          notificationChannels: ["email", "push", "dashboard"],
          createdAt: reading.timestamp,
        });
      }

      if (reading.anomalies.isQualityIssue) {
        alerts.push({
          userId: reading.userId,
          deviceId: reading.deviceId,
          type: "quality_issue",
          severity: "high",
          title: "Water Quality Issue",
          description: `Water quality parameters out of range at ${device.name}`,
          status: Math.random() > 0.7 ? "active" : "resolved",
          isRead: Math.random() > 0.4,
          notificationChannels: ["dashboard"],
          createdAt: reading.timestamp,
        });
      }
    }

    await Alert.insertMany(alerts);
    console.log(`🚨 Created ${alerts.length} sample alerts`);

    console.log("✅ Database seeding completed successfully!");
    console.log("\n📋 Sample Accounts Created:");
    console.log("👑 Admin: admin@bluemeter.com / admin123");
    console.log("🏠 Residential: john.doe@email.com / password123");
    console.log("🏠 Residential: jane.smith@email.com / password123");
    console.log("🏠 Residential: mike.johnson@email.com / password123");
    console.log("🏢 Commercial: contact@techcorp.com / password123");
    console.log("🏢 Commercial: admin@greenmanufacturing.com / password123");

    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase();
}

export { seedDatabase };
