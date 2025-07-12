# LSI Smart Water Management System

A complete full-stack application for smart water flow monitoring and management with real-time data updates, multi-tier authentication, and hardware device integration.

## 🚀 Features

### Real-time Water Flow Monitoring

- Live water flow data from hardware devices
- Real-time pressure, temperature, and quality monitoring
- Instant anomaly detection (leaks, pressure drops, unusual usage)
- WebSocket-based live dashboard updates

### Multi-tier Authentication

- **Residential Users**: Home water monitoring
- **Commercial Users**: Business/industrial water management
- **Admin Users**: System-wide management and control

### Smart Analytics

- Usage analytics with time-series data
- Water quality monitoring (TDS, pH, turbidity, chlorine)
- Predictive leak detection
- Cost tracking and billing integration

### Alert System

- Real-time alerts for anomalies
- Multi-channel notifications (dashboard, email, push)
- Alert acknowledgment and resolution tracking

### Device Management

- Remote device monitoring and control
- Device calibration and maintenance scheduling
- Network status and signal strength monitoring

## 🏗️ Technology Stack

### Backend

- **Node.js + Express + TypeScript**
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time communication
- **JWT** authentication with role-based access
- **bcryptjs** for password hashing
- **Joi** for input validation

### Frontend

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Radix UI** components
- **Socket.io Client** for real-time updates
- **React Query** for data fetching
- **Recharts** for data visualization

### Database Schema

- **Users**: Multi-role user management
- **Devices**: Water meter device information
- **WaterFlow**: Time-series water flow data
- **Alerts**: Notification and alert management

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 2. Configure Environment

```bash
# Copy backend environment file
cp backend/.env.example backend/.env

# Edit backend/.env with your MongoDB URI and other settings
```

### 3. Start MongoDB

Make sure MongoDB is running locally or update the `MONGODB_URI` in `backend/.env`.

### 4. Seed the Database

```bash
cd backend
npm run seed
cd ..
```

### 5. Start the Application

```bash
# Start both frontend and backend
npm run fullstack

# Or start them separately:
# Terminal 1: Backend
npm run backend

# Terminal 2: Frontend
npm run dev
```

The application will be available at:

- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## 👥 Sample Accounts

After seeding the database, you can log in with these accounts:

### Admin Account

- **Email**: admin@bluemeter.com
- **Password**: admin123
- **Role**: System Administrator

### Residential Accounts

- **Email**: john.doe@email.com / **Password**: password123
- **Email**: jane.smith@email.com / **Password**: password123
- **Email**: mike.johnson@email.com / **Password**: password123

### Commercial Accounts

- **Email**: contact@techcorp.com / **Password**: password123
- **Email**: admin@greenmanufacturing.com / **Password**: password123

## 📊 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user profile
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - Logout user

### Dashboard

- `GET /api/dashboard/overview` - Dashboard overview data
- `GET /api/dashboard/usage-analytics` - Detailed usage analytics
- `GET /api/dashboard/alerts` - Get alerts with filtering
- `GET /api/dashboard/admin-stats` - Admin-only statistics

### Devices

- `GET /api/devices` - Get user's devices
- `GET /api/devices/:deviceId` - Get device details
- `POST /api/devices` - Create new device (admin)
- `PUT /api/devices/:deviceId` - Update device
- `DELETE /api/devices/:deviceId` - Delete device (admin)
- `POST /api/devices/:deviceId/calibrate` - Calibrate device (admin)

### Water Flow Data

- `POST /api/water-flow/data` - Submit data from hardware (API key)
- `GET /api/water-flow/device/:deviceId` - Get device history
- `GET /api/water-flow/latest/:deviceId` - Get latest reading

### Users

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/change-password` - Change password
- `GET /api/users` - Get all users (admin)
- `PUT /api/users/:userId/status` - Update user status (admin)

## 🔌 WebSocket Events

### Client → Server

- `subscribeToDevice` - Subscribe to device updates
- `unsubscribeFromDevice` - Unsubscribe from device
- `acknowledgeAlert` - Acknowledge an alert
- `requestDashboardData` - Request dashboard data
- `deviceControl` - Send command to device (admin)

### Server → Client

- `waterFlowUpdate` - Real-time water flow data
- `newAlert` - New alert notification
- `alertAcknowledged` - Alert acknowledgment confirmation
- `deviceStatus` - Device online/offline status
- `dashboardData` - Dashboard data update

## 🔧 Hardware Integration

### Device Data Format

Send water flow data to `/api/water-flow/data` with API key:

```json
{
  "deviceId": "BM-RES-001",
  "flowRate": 12.5,
  "totalVolume": 750.0,
  "pressure": 3.2,
  "temperature": 18.5,
  "quality": {
    "tds": 250,
    "ph": 7.2,
    "turbidity": 0.8,
    "chlorine": 0.2
  },
  "batteryLevel": 85,
  "signalStrength": -45,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### API Key Authentication

Include in headers:

```
X-API-Key: device-api-key-lsi-2024
```

## 🛡️ Security Features

- JWT-based authentication with auto-refresh
- Role-based access control (RBAC)
- Rate limiting on API endpoints
- Input validation with Joi schemas
- Password hashing with bcrypt
- CORS configuration
- Helmet.js security headers

## 📱 Real-time Features

- Live water flow monitoring
- Instant anomaly alerts
- Real-time device status updates
- Live dashboard data refresh
- WebSocket connection with auto-reconnect
- Toast notifications for critical events

## 🔧 Development

### Project Structure

```
Lsi_project/
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── middleware/     # Auth and error handling
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── scripts/        # Database seeding
│   │   ├── sockets/        # Socket.io handlers
│   │   └── server.ts       # Main server file
│   ├── package.json
│   └── .env
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── contexts/          # React contexts
│   ├── lib/               # API client and utilities
│   ├── pages/             # Route components
│   └── hooks/             # Custom hooks
├── package.json
└── README.md
```

### Scripts

- `npm run dev` - Start frontend development server
- `npm run backend` - Start backend development server
- `npm run fullstack` - Start both frontend and backend
- `npm run build` - Build frontend for production
- `npm run seed` - Seed database with sample data

## 🚀 Deployment

### Backend Deployment

1. Set production environment variables
2. Build TypeScript: `npm run build`
3. Start server: `npm start`

### Frontend Deployment

1. Build for production: `npm run build`
2. Serve the `dist` folder with a web server

### Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS

## 📈 Monitoring & Analytics

- Real-time device status monitoring
- Usage analytics with time-based aggregation
- Water quality trend analysis
- Anomaly detection algorithms
- Cost calculation and billing integration
- System performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Check the API documentation
- Review the sample data and test accounts

---

**Built with ❤️ for Smart Water Management**
