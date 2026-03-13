import { motion } from "motion/react";
import { ArrowLeft, MapPin, User } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { useState } from "react";

export function ResourceBoard() {
  const [activeTab, setActiveTab] = useState<"needs" | "has">("needs");

  const [needsData, setNeedsData] = useState([
    {
      id: 1,
      resource: "Medical Supplies",
      user: "Sarah M.",
      distance: "0.3 km",
      priority: "High",
      time: "5 min ago",
    },
    {
      id: 2,
      resource: "Water Bottles",
      user: "John D.",
      distance: "0.8 km",
      priority: "High",
      time: "12 min ago",
    },
    {
      id: 3,
      resource: "Blankets",
      user: "Emma R.",
      distance: "1.2 km",
      priority: "Medium",
      time: "20 min ago",
    },
    {
      id: 4,
      resource: "Flashlights",
      user: "Mike T.",
      distance: "1.5 km",
      priority: "Low",
      time: "35 min ago",
    },
  ]);

  const [hasData, setHasData] = useState([
    {
      id: 1,
      resource: "Canned Food (20 units)",
      user: "Lisa K.",
      distance: "0.5 km",
      available: true,
      time: "8 min ago",
    },
    {
      id: 2,
      resource: "First Aid Kit",
      user: "David P.",
      distance: "0.7 km",
      available: true,
      time: "15 min ago",
    },
    {
      id: 3,
      resource: "Sleeping Bags (5)",
      user: "Anna L.",
      distance: "1.0 km",
      available: true,
      time: "22 min ago",
    },
    {
      id: 4,
      resource: "Generator",
      user: "Tom S.",
      distance: "1.8 km",
      available: false,
      time: "1 hour ago",
    },
  ]);

  const data = activeTab === "needs" ? needsData : hasData;

  const handleAdd = () => {
    if (activeTab === "needs") {
      const resource = prompt("What resource do you need?");
      if (resource) {
        setNeedsData([{
          id: Date.now(),
          resource,
          user: "Me",
          distance: "0 km",
          priority: "High",
          time: "Just now"
        }, ...needsData]);
      }
    } else {
      const resource = prompt("What resource do you have?");
      if (resource) {
        setHasData([{
          id: Date.now(),
          resource,
          user: "Me",
          distance: "0 km",
          available: true,
          time: "Just now"
        }, ...hasData]);
      }
    }
  };



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
          Resource Board
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Share and find resources nearby
        </p>
      </motion.div>

      <div className="max-w-md mx-auto">
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <GlassCard className="p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("needs")}
              className="flex-1 py-3 px-4 rounded-xl transition-all duration-300"
              style={{
                background: activeTab === "needs"
                  ? "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"
                  : "transparent",
                color: activeTab === "needs" ? "#FFF" : "#94A3B8",
                fontWeight: 600,
              }}
            >
              NEEDS
            </button>
            <button
              onClick={() => setActiveTab("has")}
              className="flex-1 py-3 px-4 rounded-xl transition-all duration-300"
              style={{
                background: activeTab === "has"
                  ? "linear-gradient(135deg, #22D3EE 0%, #3A86FF 100%)"
                  : "transparent",
                color: activeTab === "has" ? "#FFF" : "#94A3B8",
                fontWeight: 600,
              }}
            >
              HAS
            </button>
          </GlassCard>
        </motion.div>

        {/* Resource Cards */}
        <div className="space-y-3">
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className="p-5 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-base mb-2" style={{ color: "#F8FAFC", fontWeight: 600 }}>
                      {item.resource}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" style={{ color: "#94A3B8" }} />
                      <span className="text-sm" style={{ color: "#94A3B8" }}>
                        {item.user}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" style={{ color: "#22D3EE" }} />
                      <span className="text-sm" style={{ color: "#22D3EE" }}>
                        {item.distance}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {activeTab === "needs" && "priority" in item && (
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          background:
                            item.priority === "High"
                              ? "rgba(239, 68, 68, 0.2)"
                              : item.priority === "Medium"
                              ? "rgba(245, 158, 11, 0.2)"
                              : "rgba(34, 211, 238, 0.2)",
                          color:
                            item.priority === "High"
                              ? "#EF4444"
                              : item.priority === "Medium"
                              ? "#F59E0B"
                              : "#22D3EE",
                        }}
                      >
                        {item.priority}
                      </span>
                    )}
                    {activeTab === "has" && "available" in item && (
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          background: item.available
                            ? "rgba(34, 211, 238, 0.2)"
                            : "rgba(239, 68, 68, 0.2)",
                          color: item.available ? "#22D3EE" : "#EF4444",
                        }}
                      >
                        {item.available ? "Available" : "Reserved"}
                      </span>
                    )}
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                      {item.time}
                    </span>
                  </div>
                </div>
                <button
                  className="w-full py-2 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      activeTab === "needs"
                        ? "rgba(239, 68, 68, 0.2)"
                        : "rgba(34, 211, 238, 0.2)",
                    color: activeTab === "needs" ? "#EF4444" : "#22D3EE",
                    borderColor:
                      activeTab === "needs"
                        ? "rgba(239, 68, 68, 0.3)"
                        : "rgba(34, 211, 238, 0.3)",
                    border: "1px solid",
                  }}
                >
                  {activeTab === "needs" ? "I Can Help" : "Request"}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6"
        >
          <button
            onClick={handleAdd}
            className="w-full py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background:
                activeTab === "needs"
                  ? "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"
                  : "linear-gradient(135deg, #22D3EE 0%, #3A86FF 100%)",
              color: "#FFF",
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(58, 134, 255, 0.3)",
            }}
          >
            + Add {activeTab === "needs" ? "Need" : "Resource"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
