import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetSent, setIsResetSent] = useState(false);

  const handleSubmit = (e: React.FormEvent, type: "master" | "user") => {
    e.preventDefault();
    // Handle login logic here
    console.log(`${type} login submitted`);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log(`Password reset requested for: ${resetEmail}`);
    setIsResetSent(true);
    setTimeout(() => {
      setIsResetSent(false);
      setIsForgotPasswordOpen(false);
      setResetEmail("");
    }, 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-meter-gray to-white py-20">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="font-inter font-black text-3xl text-blue-meter-dark mb-2">
                Welcome Back
              </h1>
              <p className="font-inter text-blue-meter-text">
                Sign in to your Blue Meter account
              </p>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger
                  value="user"
                  className="font-inter font-medium data-[state=active]:bg-blue-meter-primary data-[state=active]:text-white"
                >
                  User Login
                </TabsTrigger>
                <TabsTrigger
                  value="master"
                  className="font-inter font-medium data-[state=active]:bg-blue-meter-primary data-[state=active]:text-white"
                >
                  Master Login
                </TabsTrigger>
              </TabsList>

              <TabsContent value="user" className="mt-6">
                <form
                  onSubmit={(e) => handleSubmit(e, "user")}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="user-email"
                      className="font-inter font-medium text-blue-meter-dark"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="user-password"
                      className="font-inter font-medium text-blue-meter-dark"
                    >
                      Password
                    </Label>
                    <Input
                      id="user-password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-meter-primary focus:ring-blue-meter-primary"
                      />
                      <span className="font-inter text-blue-meter-text">
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsForgotPasswordOpen(true)}
                      className="font-inter text-blue-meter-primary hover:underline transition-colors duration-200 hover:text-blue-meter-primary/80"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-meter-primary hover:bg-blue-meter-primary/90 font-inter font-medium text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="master" className="mt-6">
                <form
                  onSubmit={(e) => handleSubmit(e, "master")}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="master-email"
                      className="font-inter font-medium text-blue-meter-dark"
                    >
                      Admin Email
                    </Label>
                    <Input
                      id="master-email"
                      type="email"
                      placeholder="admin@bluemeter.com"
                      required
                      className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="master-password"
                      className="font-inter font-medium text-blue-meter-dark"
                    >
                      Admin Password
                    </Label>
                    <Input
                      id="master-password"
                      type="password"
                      placeholder="Enter admin password"
                      required
                      className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="master-key"
                      className="font-inter font-medium text-blue-meter-dark"
                    >
                      Master Access Key
                    </Label>
                    <Input
                      id="master-key"
                      type="password"
                      placeholder="Enter master access key"
                      required
                      className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                    />
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="text-xs text-orange-800 font-inter">
                      <strong>Admin Access:</strong> Master login provides full
                      system access including user management, system
                      configuration, and analytics.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-meter-dark hover:bg-blue-meter-dark/90 font-inter font-medium text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Master Sign In
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-blue-meter-text-secondary font-inter">
                Don't have an account?{" "}
                <button className="text-blue-meter-primary hover:underline font-medium">
                  Contact your system administrator
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Forgot Password Modal */}
        <Dialog
          open={isForgotPasswordOpen}
          onOpenChange={(open) => {
            setIsForgotPasswordOpen(open);
            if (!open) {
              setIsResetSent(false);
              setResetEmail("");
            }
          }}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-blue-meter-dark font-inter font-bold text-xl">
                {isResetSent ? "Reset Link Sent!" : "Reset Password"}
              </DialogTitle>
            </DialogHeader>

            {!isResetSent ? (
              <form onSubmit={handleForgotPassword} className="space-y-6 mt-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="reset-email"
                    className="font-inter font-medium text-blue-meter-dark"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="reset-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    className="font-inter h-12 rounded-xl border-gray-200 focus:border-blue-meter-primary focus:ring-blue-meter-primary"
                  />
                  <p className="text-sm text-blue-meter-text-secondary font-inter">
                    Enter the email address associated with your account and we'll send you a link to reset your password.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-meter-primary hover:bg-blue-meter-primary/90 font-inter font-medium text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Send Reset Link
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsForgotPasswordOpen(false)}
                  className="w-full h-12 font-inter font-medium rounded-xl border-gray-200 hover:bg-gray-50"
                >
                  Cancel
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 mt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-inter text-blue-meter-dark font-medium">
                  Password reset link sent!
                </p>
                <p className="font-inter text-sm text-blue-meter-text-secondary">
                  We've sent a password reset link to <strong>{resetEmail}</strong>.
                  Please check your email and follow the instructions to reset your password.
                </p>
                <p className="font-inter text-xs text-blue-meter-text-secondary">
                  This modal will close automatically in a few seconds.
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Login;
