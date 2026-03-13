import { Outlet, useLocation, Link } from "react-router";
import { Home, AlertCircle, MessageCircle, Package, Map, Radio, Bot } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/sos", icon: AlertCircle, label: "SOS" },
    { path: "/chat", icon: MessageCircle, label: "Chat" },
    { path: "/resources", icon: Package, label: "Resources" },
    { path: "/map", icon: Map, label: "Map" },
    { path: "/walkie", icon: Radio, label: "Walkie" },
    { path: "/ai", icon: Bot, label: "AI" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #0B132B 0%, #020617 100%)",
        }}
      />
      
      {/* Cinematic light rays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3A86FF 0%, transparent 70%)",
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 pb-24">
        <Outlet />
      </div>

      {/* Bottom navigation */}
      <nav 
        className="fixed bottom-0 left-0 right-0 z-50 border-t backdrop-blur-2xl"
        style={{
          background: "rgba(28, 37, 65, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="flex items-center justify-around px-2 py-3 max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all duration-300"
                style={{
                  color: isActive ? "#3A86FF" : "#94A3B8",
                }}
              >
                <Icon 
                  className="w-5 h-5" 
                  style={{
                    filter: isActive ? "drop-shadow(0 0 8px rgba(58, 134, 255, 0.6))" : "none",
                  }}
                />
                <span className="text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
