import { motion } from "motion/react";
import { ArrowLeft, MapPin, AlertCircle, Home, Hospital, Package } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";

export function NetworkMap() {
  const nodes = [
    { id: 1, x: 30, y: 25, type: "node", active: true },
    { id: 2, x: 60, y: 35, type: "node", active: true },
    { id: 3, x: 45, y: 50, type: "node", active: true },
    { id: 4, x: 70, y: 60, type: "node", active: false },
    { id: 5, x: 25, y: 65, type: "node", active: true },
  ];

  const landmarks = [
    { id: 1, x: 50, y: 20, type: "shelter", icon: Home, label: "Shelter" },
    { id: 2, x: 80, y: 40, type: "hospital", icon: Hospital, label: "Hospital" },
    { id: 3, x: 40, y: 75, type: "resource", icon: Package, label: "Resources" },
  ];

  const sosAlerts = [
    { id: 1, x: 55, y: 45, type: "sos" },
  ];

  return (
    <div className="min-h-screen p-4 pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link to="/" className="inline-flex items-center gap-2 mb-4" style={{ color: "#94A3B8" }}>
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        <h1 
          className="text-4xl mb-2"
          style={{
            color: "#F8FAFC",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Network Map
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Mesh nodes and emergency locations
        </p>
      </motion.div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="p-6 aspect-square relative overflow-hidden">
            {/* Grid Background */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #22D3EE 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              {nodes.map((node, index) => {
                if (index < nodes.length - 1 && node.active && nodes[index + 1].active) {
                  return (
                    <motion.line
                      key={`line-${node.id}`}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${nodes[index + 1].x}%`}
                      y2={`${nodes[index + 1].y}%`}
                      stroke="#22D3EE"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />
                  );
                }
                return null;
              })}
            </svg>

            {/* Mesh Nodes */}
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="absolute"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={
                    node.active
                      ? {
                          boxShadow: [
                            "0 0 0 0 rgba(34, 211, 238, 0.4)",
                            "0 0 0 10px rgba(34, 211, 238, 0)",
                            "0 0 0 0 rgba(34, 211, 238, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: node.active
                      ? "linear-gradient(135deg, #22D3EE 0%, #3A86FF 100%)"
                      : "#94A3B8",
                  }}
                />
              </motion.div>
            ))}

            {/* Landmarks */}
            {landmarks.map((landmark, index) => {
              const Icon = landmark.icon;
              return (
                <motion.div
                  key={landmark.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `${landmark.x}%`,
                    top: `${landmark.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "rgba(58, 134, 255, 0.2)",
                      borderColor: "rgba(58, 134, 255, 0.4)",
                      border: "1px solid",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#3A86FF" }} />
                  </div>
                </motion.div>
              );
            })}

            {/* SOS Alerts */}
            {sosAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute"
                style={{
                  left: `${alert.x}%`,
                  top: `${alert.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(239, 68, 68, 0.4)",
                      "0 0 0 15px rgba(239, 68, 68, 0)",
                      "0 0 0 0 rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="p-2 rounded-full"
                  style={{
                    background: "#EF4444",
                  }}
                >
                  <AlertCircle className="w-6 h-6" style={{ color: "#FFF" }} />
                </motion.div>
              </motion.div>
            ))}

            {/* Your Location */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #22D3EE 0%, #3A86FF 100%)",
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
                }}
              >
                <MapPin className="w-6 h-6" style={{ color: "#FFF" }} />
              </motion.div>
            </motion.div>
          </GlassCard>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <GlassCard className="p-5">
            <h3 className="text-sm mb-4" style={{ color: "#F8FAFC", fontWeight: 600 }}>
              Map Legend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ background: "#22D3EE" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  Active Node
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ background: "#94A3B8" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  Inactive Node
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" style={{ color: "#EF4444" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  SOS Alert
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4" style={{ color: "#3A86FF" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  Shelter
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Hospital className="w-4 h-4" style={{ color: "#3A86FF" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  Hospital
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" style={{ color: "#3A86FF" }} />
                <span className="text-xs" style={{ color: "#94A3B8" }}>
                  Resources
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-3 gap-3"
        >
          <GlassCard className="p-4 text-center">
            <p className="text-2xl mb-1" style={{ color: "#22D3EE", fontWeight: 700 }}>
              42
            </p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>
              Active Nodes
            </p>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <p className="text-2xl mb-1" style={{ color: "#EF4444", fontWeight: 700 }}>
              3
            </p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>
              SOS Alerts
            </p>
          </GlassCard>
          <GlassCard className="p-4 text-center">
            <p className="text-2xl mb-1" style={{ color: "#3A86FF", fontWeight: 700 }}>
              8
            </p>
            <p className="text-xs" style={{ color: "#94A3B8" }}>
              Landmarks
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
