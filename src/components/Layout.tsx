import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Our Products", path: "/our-products" },
    { label: "Future plan", path: "/future-plan" },
    { label: "Residential", path: "/residential" },
    { label: "Commercial", path: "/commercial" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="w-full h-16 bg-white/95 backdrop-blur-md flex items-center justify-center px-6 border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center justify-between w-full max-w-6xl">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-blue-meter-dark font-inter font-semibold text-lg flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <div className="w-[22px] h-[22px] flex items-center justify-center">
              <svg
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.8125 4.47656C11.6545 3.13916 10.3511 1.93486 8.92656 0.885938C8.66823 0.704968 8.32427 0.704968 8.06594 0.885938C6.64399 1.9353 5.34317 3.13958 4.1875 4.47656C1.61031 7.43625 0.25 10.5562 0.25 13.5C0.25 18.0563 3.94365 21.75 8.5 21.75C13.0563 21.75 16.75 18.0563 16.75 13.5C16.75 10.5562 15.3897 7.43625 12.8125 4.47656ZM8.5 20.25C4.77379 20.2459 1.75413 17.2262 1.75 13.5C1.75 8.13469 6.95031 3.65625 8.5 2.4375C10.0497 3.65625 15.25 8.13281 15.25 13.5C15.2459 17.2262 12.2262 20.2459 8.5 20.25ZM13.7397 14.3756C13.3414 16.6005 11.5996 18.3419 9.37469 18.7397C9.33345 18.7463 9.29176 18.7497 9.25 18.75C8.85993 18.7499 8.53506 18.4508 8.50277 18.0621C8.47048 17.6734 8.74155 17.3248 9.12625 17.2603C10.6797 16.9988 11.9978 15.6806 12.2612 14.1244C12.3306 13.7159 12.718 13.4409 13.1266 13.5103C13.5351 13.5797 13.81 13.9671 13.7406 14.3756H13.7397Z"
                  fill="#121217"
                />
              </svg>
            </div>
            <span className="hidden sm:block">Blue Meter</span>
          </Link>

          {/* Navigation Items - Hidden on mobile, shown on larger screens */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-inter font-medium text-sm transition-all duration-200 whitespace-nowrap rounded-full ${
                  isActivePath(item.path)
                    ? "text-white bg-blue-meter-primary shadow-lg transform scale-105"
                    : "text-gray-700 hover:text-blue-meter-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
                {isActivePath(item.path) && (
                  <div className="absolute inset-0 bg-blue-meter-primary rounded-full opacity-20 animate-pulse"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-4 py-2 rounded-full bg-blue-meter-primary font-inter font-medium text-sm text-white hover:bg-blue-meter-primary/90 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-6 h-0.5 bg-blue-meter-dark"></span>
                <span className="block w-6 h-0.5 bg-blue-meter-dark"></span>
                <span className="block w-6 h-0.5 bg-blue-meter-dark"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute top-16 left-0 right-0 z-50 shadow-lg">
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-full font-inter font-medium text-sm transition-all duration-200 ${
                    isActivePath(item.path)
                      ? "bg-blue-meter-primary text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-meter-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
