import Layout from "@/components/Layout";

const MyDevice = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-meter-gray py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="font-inter font-black text-5xl text-blue-meter-dark leading-tight">
              My Device
            </h1>
            <p className="font-inter font-normal text-xl text-blue-meter-text max-w-2xl mx-auto">
              Monitor and manage your Blue Meter smart water devices from one
              central dashboard.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {/* Device Status */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="font-inter font-bold text-2xl text-blue-meter-dark mb-6">
                Device Status
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h3 className="font-inter font-bold text-lg text-blue-meter-dark">
                    Online
                  </h3>
                  <p className="font-inter text-sm text-blue-meter-text">
                    Device ID: BM-2024-001
                  </p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-meter-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">💧</span>
                  </div>
                  <h3 className="font-inter font-bold text-lg text-blue-meter-dark">
                    Quality: Good
                  </h3>
                  <p className="font-inter text-sm text-blue-meter-text">
                    TDS: 150 ppm
                  </p>
                </div>

                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h3 className="font-inter font-bold text-lg text-blue-meter-dark">
                    Battery: 85%
                  </h3>
                  <p className="font-inter text-sm text-blue-meter-text">
                    Last charged: 2 days ago
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="font-inter font-bold text-2xl text-blue-meter-dark mb-6">
                Usage Statistics
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-inter font-bold text-lg text-blue-meter-dark mb-4">
                    Today's Usage
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        Total consumption:
                      </span>
                      <span className="font-inter font-bold text-blue-meter-dark">
                        245 liters
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        Peak hour:
                      </span>
                      <span className="font-inter font-bold text-blue-meter-dark">
                        8:00 AM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        Current flow:
                      </span>
                      <span className="font-inter font-bold text-blue-meter-dark">
                        12.5 L/min
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-inter font-bold text-lg text-blue-meter-dark mb-4">
                    This Month
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        Total consumption:
                      </span>
                      <span className="font-inter font-bold text-blue-meter-dark">
                        7,350 liters
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        Average daily:
                      </span>
                      <span className="font-inter font-bold text-blue-meter-dark">
                        245 liters
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-inter text-blue-meter-text">
                        vs Last month:
                      </span>
                      <span className="font-inter font-bold text-green-600">
                        -12% ↓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="font-inter font-bold text-2xl text-blue-meter-dark mb-6">
                Quick Actions
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                <button className="p-4 bg-blue-meter-primary text-white rounded-lg hover:bg-blue-meter-primary/90 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <span className="font-inter font-medium">View Reports</span>
                  </div>
                </button>

                <button className="p-4 bg-blue-meter-dark text-white rounded-lg hover:bg-blue-meter-dark/90 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <span className="font-inter font-medium">Settings</span>
                  </div>
                </button>

                <button className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔔</div>
                    <span className="font-inter font-medium">Alerts</span>
                  </div>
                </button>

                <button className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛠️</div>
                    <span className="font-inter font-medium">Support</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="font-inter font-bold text-2xl text-blue-meter-dark mb-6">
                Recent Alerts
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-inter font-medium text-blue-meter-dark">
                      System Status Normal
                    </p>
                    <p className="font-inter text-sm text-blue-meter-text">
                      All systems operating normally - 2 hours ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-meter-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-inter font-medium text-blue-meter-dark">
                      Water Quality Check Completed
                    </p>
                    <p className="font-inter text-sm text-blue-meter-text">
                      TDS levels within normal range - 6 hours ago
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-inter font-medium text-blue-meter-dark">
                      Scheduled Maintenance Reminder
                    </p>
                    <p className="font-inter text-sm text-blue-meter-text">
                      Next maintenance due in 15 days - 1 day ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyDevice;