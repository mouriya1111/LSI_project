import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [activeTab, setActiveTab] = useState("user");

  const handleSubmit = (e: React.FormEvent, type: "master" | "user") => {
    e.preventDefault();
    // Handle login logic here
    console.log(`${type} login submitted`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-blue-meter-dark font-inter font-bold text-xl">
            Welcome to Blue Meter
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="user" className="font-inter font-medium">
              User Login
            </TabsTrigger>
            <TabsTrigger value="master" className="font-inter font-medium">
              Master Login
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="mt-6">
            <form
              onSubmit={(e) => handleSubmit(e, "user")}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="user-email" className="font-inter font-medium">
                  Email
                </Label>
                <Input
                  id="user-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="font-inter"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="user-password"
                  className="font-inter font-medium"
                >
                  Password
                </Label>
                <Input
                  id="user-password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="font-inter"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-meter-primary hover:bg-blue-meter-primary/90 font-inter font-medium"
              >
                Sign In as User
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="master" className="mt-6">
            <form
              onSubmit={(e) => handleSubmit(e, "master")}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label
                  htmlFor="master-email"
                  className="font-inter font-medium"
                >
                  Admin Email
                </Label>
                <Input
                  id="master-email"
                  type="email"
                  placeholder="Enter admin email"
                  required
                  className="font-inter"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="master-password"
                  className="font-inter font-medium"
                >
                  Admin Password
                </Label>
                <Input
                  id="master-password"
                  type="password"
                  placeholder="Enter admin password"
                  required
                  className="font-inter"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="master-key" className="font-inter font-medium">
                  Master Key
                </Label>
                <Input
                  id="master-key"
                  type="password"
                  placeholder="Enter master key"
                  required
                  className="font-inter"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-meter-dark hover:bg-blue-meter-dark/90 font-inter font-medium"
              >
                Sign In as Master
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-4">
          <p className="text-sm text-blue-meter-text-secondary font-inter">
            Don't have an account?{" "}
            <button className="text-blue-meter-primary hover:underline font-medium">
              Contact your administrator
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
