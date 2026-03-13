import { motion } from "motion/react";
import { Users, Wifi, Bell, Package, Activity, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";

export function Dashboard() {
  return (
    <div className="min-h-screen p-4 pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 
          className="text-4xl mb-2"
          style={{
            color: "#F8FAFC",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          PulseLink
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Disaster Communication System
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {/* Mesh Network Status - Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-2"
        >
          <Link to="/map">
            <GlassCard className="p-6 cursor-pointer hover:scale-[1.02] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm mb-2" style={{ color: "#94A3B8" }}>
                    Mesh Network
                  </p>
                  <h2 className="text-3xl" style={{ color: "#22D3EE", fontWeight: 700 }}>
                    Active
                  </h2>
                </div>
                <div 
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(34, 211, 238, 0.1)",
                  }}
                >
                  <Wifi className="w-6 h-6" style={{ color: "#22D3EE" }} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #22D3EE 0%, #3A86FF 100%)",
                    }}
                  />
                </div>
                <span className="text-sm" style={{ color: "#22D3EE" }}>87%</span>
              </div>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Active Devices */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/chat">
            <GlassCard className="p-5 h-full cursor-pointer hover:scale-[1.02] transition-all">
              <div 
                className="p-2 rounded-lg mb-3 w-fit"
                style={{
                  background: "rgba(58, 134, 255, 0.1)",
                }}
              >
                <Users className="w-5 h-5" style={{ color: "#3A86FF" }} />
              </div>
              <p className="text-xs mb-1" style={{ color: "#94A3B8" }}>
                Active Devices
              </p>
              <h3 className="text-2xl" style={{ color: "#F8FAFC", fontWeight: 700 }}>
                42
              </h3>
            </GlassCard>
          </Link>
        </motion.div>

        {/* SOS Alerts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GlassCard className="p-5 h-full">
            <div 
              className="p-2 rounded-lg mb-3 w-fit"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
              }}
            >
              <Bell className="w-5 h-5" style={{ color: "#EF4444" }} />
            </div>
            <p className="text-xs mb-1" style={{ color: "#94A3B8" }}>
              SOS Alerts
            </p>
            <h3 className="text-2xl" style={{ color: "#F8FAFC", fontWeight: 700 }}>
              3
            </h3>
          </GlassCard>
        </motion.div>

        {/* Emergency SOS Button - Large Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-2"
        >
          <Link to="/sos">
            <GlassCard 
              className="p-8 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                borderColor: "rgba(239, 68, 68, 0.3)",
              }}
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 40px rgba(239, 68, 68, 0.6)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-8 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                  }}
                >
                  <AlertCircle className="w-12 h-12" style={{ color: "#FFF" }} />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-2xl mb-1" style={{ color: "#F8FAFC", fontWeight: 700 }}>
                    Emergency SOS
                  </h3>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    Tap to send emergency alert
                  </p>
                </div>
              </div>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Resources Available */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="/resources">
            <GlassCard className="p-5 h-full cursor-pointer hover:scale-[1.02] transition-all">
              <div 
                className="p-2 rounded-lg mb-3 w-fit"
                style={{
                  background: "rgba(34, 211, 238, 0.1)",
                }}
              >
                <Package className="w-5 h-5" style={{ color: "#22D3EE" }} />
              </div>
              <p className="text-xs mb-1" style={{ color: "#94A3B8" }}>
                Resources
              </p>
              <h3 className="text-2xl" style={{ color: "#F8FAFC", fontWeight: 700 }}>
                18
              </h3>
            </GlassCard>
          </Link>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/ai">
            <GlassCard className="p-5 h-full cursor-pointer hover:scale-[1.02] transition-all">
              <div 
                className="p-2 rounded-lg mb-3 w-fit"
                style={{
                  background: "rgba(34, 211, 238, 0.1)",
                }}
              >
                <Activity className="w-5 h-5" style={{ color: "#22D3EE" }} />
              </div>
              <p className="text-xs mb-1" style={{ color: "#94A3B8" }}>
                System Health
              </p>
              <h3 className="text-xl" style={{ color: "#22D3EE", fontWeight: 700 }}>
                Good
              </h3>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="col-span-2"
        >
          <GlassCard className="p-5">
            <h4 className="mb-4" style={{ color: "#F8FAFC", fontWeight: 600 }}>
              Recent Alerts
            </h4>
            <div className="space-y-3">
              {[
                { type: "Medical", time: "2 min ago", status: "Active" },
                { type: "Resource Request", time: "15 min ago", status: "Fulfilled" },
                { type: "Shelter Info", time: "1 hour ago", status: "Info" },
              ].map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <div>
                    <p className="text-sm mb-1" style={{ color: "#F8FAFC" }}>
                      {alert.type}
                    </p>
                    <p className="text-xs" style={{ color: "#94A3B8" }}>
                      {alert.time}
                    </p>
                  </div>
                  <span 
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      background: alert.status === "Active" 
                        ? "rgba(239, 68, 68, 0.2)"
                        : "rgba(34, 211, 238, 0.2)",
                      color: alert.status === "Active" ? "#EF4444" : "#22D3EE",
                    }}
                  >
                    {alert.status}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
