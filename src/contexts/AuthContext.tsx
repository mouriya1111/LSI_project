import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, User } from "../lib/api";
import { socketService } from "../lib/socket";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));

          // Verify token with server
          try {
            const response = await auth.getProfile();
            if (response.success) {
              setUser(response.data.user);
              // Connect to socket
              await socketService.connect(storedToken);
            } else {
              throw new Error("Invalid token");
            }
          } catch (error) {
            console.error("Token verification failed:", error);
            // Clear invalid token
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            setToken(null);
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await auth.login(email, password);

      if (response.success) {
        const { user: userData, token: authToken } = response.data;

        setUser(userData);
        setToken(authToken);

        // Store in localStorage
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user", JSON.stringify(userData));

        // Connect to socket
        await socketService.connect(authToken);

        toast.success("Login successful!");
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Login failed";
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await auth.register(userData);

      if (response.success) {
        const { user: newUser, token: authToken } = response.data;

        setUser(newUser);
        setToken(authToken);

        // Store in localStorage
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user", JSON.stringify(newUser));

        // Connect to socket
        await socketService.connect(authToken);

        toast.success("Registration successful!");
      } else {
        throw new Error(response.message || "Registration failed");
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Registration failed";
      toast.error(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    try {
      // Call logout API
      auth.logout().catch(() => {
        // Ignore errors during logout
      });

      // Clear state
      setUser(null);
      setToken(null);

      // Clear localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      // Disconnect socket
      socketService.disconnect();

      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Auto-refresh token before expiry
  useEffect(() => {
    if (!token) return;

    const refreshInterval = setInterval(
      async () => {
        try {
          const response = await auth.refreshToken();
          if (response.success) {
            const newToken = response.data.token;
            setToken(newToken);
            localStorage.setItem("authToken", newToken);
          }
        } catch (error) {
          console.error("Token refresh failed:", error);
          // Don't logout automatically, let the response interceptor handle it
        }
      },
      6 * 60 * 60 * 1000,
    ); // Refresh every 6 hours

    return () => clearInterval(refreshInterval);
  }, [token]);

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    isLoading,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
