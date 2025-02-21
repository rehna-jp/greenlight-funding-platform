
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wallet, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const location = useLocation();

  const connectWallet = async () => {
    // Wallet connection logic will go here
    setWalletConnected(true);
    setWalletAddress("0x1234...5678"); // Example address
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Validate", path: "/validate" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold text-green-600">
              GreenLight
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    location.pathname === item.path
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {walletConnected ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 text-white font-medium text-sm transition-all hover:bg-green-700">
                    <span className="mr-2">{walletAddress}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link to="/profile" className="w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  onClick={connectWallet}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-green-600 text-white font-medium text-sm transition-all hover:bg-green-700"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? "text-green-600 bg-green-50"
                      : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {walletConnected ? (
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {walletAddress}
                </Link>
              ) : (
                <button
                  onClick={connectWallet}
                  className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 rounded-full bg-green-600 text-white font-medium text-sm transition-all hover:bg-green-700"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} GreenLight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
