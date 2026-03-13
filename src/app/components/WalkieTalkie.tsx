import { motion } from "motion/react";
import { ArrowLeft, Radio, Users, Volume2 } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { useState } from "react";

export function WalkieTalkie() {
  const [isTalking, setIsTalking] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState(1);

  const channels = [
    { id: 1, name: "Emergency", users: 42 },
    { id: 2, name: "Medical", users: 18 },
    { id: 3, name: "Resources", users: 25 },
    { id: 4, name: "General", users: 56 },
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
          Walkie Talkie
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Push-to-talk voice communication
        </p>
      </motion.div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="p-5">
            <h3 className="text-sm mb-4" style={{ color: "#94A3B8" }}>
              SELECT CHANNEL
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setSelectedChannel(channel.id)}
                  className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      selectedChannel === channel.id
                        ? "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)"
                        : "rgba(255, 255, 255, 0.05)",
                    borderColor:
                      selectedChannel === channel.id
                        ? "rgba(58, 134, 255, 0.5)"
                        : "rgba(255, 255, 255, 0.1)",
                    border: "1px solid",
                  }}
                >
                  <div className="text-left">
                    <p
                      className="text-sm mb-2"
                      style={{
                        color: selectedChannel === channel.id ? "#FFF" : "#F8FAFC",
                        fontWeight: 600,
                      }}
                    >
                      {channel.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <Users
                        className="w-3 h-3"
                        style={{
                          color: selectedChannel === channel.id ? "#FFF" : "#94A3B8",
                        }}
                      />
                      <span
                        className="text-xs"
                        style={{
                          color: selectedChannel === channel.id ? "#FFF" : "#94A3B8",
                        }}
                      >
                        {channel.users}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Push to Talk Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center py-12"
        >
          <motion.button
            onMouseDown={() => setIsTalking(true)}
            onMouseUp={() => setIsTalking(false)}
            onTouchStart={() => setIsTalking(true)}
            onTouchEnd={() => setIsTalking(false)}
            whileTap={{ scale: 0.95 }}
            className="relative w-64 h-64 rounded-full"
            style={{
              background: isTalking
                ? "linear-gradient(135deg, #22D3EE 0%, #3A86FF 100%)"
                : "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)",
              boxShadow: isTalking
                ? "0 0 60px rgba(34, 211, 238, 0.8)"
                : "0 20px 60px rgba(58, 134, 255, 0.4)",
            }}
          >
            {/* Outer glow ring */}
            {isTalking && (
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  border: "3px solid #22D3EE",
                }}
              />
            )}

            {/* Voice waves */}
            {isTalking && (
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{
                      scale: [0.8, 1.5],
                      opacity: [0.8, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                    className="absolute w-full h-full rounded-full border-2"
                    style={{
                      borderColor: "#FFF",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <motion.div
                animate={
                  isTalking
                    ? {
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  repeat: isTalking ? Infinity : 0,
                }}
              >
                <Radio className="w-16 h-16 mb-3" style={{ color: "#FFF" }} />
              </motion.div>
              <p
                className="text-xl"
                style={{
                  color: "#FFF",
                  fontWeight: 700,
                }}
              >
                {isTalking ? "TALKING..." : "HOLD TO TALK"}
              </p>
            </div>
          </motion.button>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    background: "rgba(34, 211, 238, 0.1)",
                  }}
                >
                  <Volume2 className="w-5 h-5" style={{ color: "#22D3EE" }} />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: "#F8FAFC", fontWeight: 600 }}>
                    Channel {selectedChannel}
                  </p>
                  <p className="text-xs" style={{ color: "#94A3B8" }}>
                    {channels.find((c) => c.id === selectedChannel)?.name}
                  </p>
                </div>
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(34, 211, 238, 0.2)",
                  color: "#22D3EE",
                }}
              >
                Active
              </span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <GlassCard className="p-5">
            <h3 className="text-sm mb-4" style={{ color: "#F8FAFC", fontWeight: 600 }}>
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { user: "Sarah M.", time: "2 min ago", channel: "Emergency" },
                { user: "John D.", time: "5 min ago", channel: "Medical" },
                { user: "Emma R.", time: "8 min ago", channel: "General" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Radio className="w-4 h-4" style={{ color: "#3A86FF" }} />
                    <div>
                      <p className="text-sm mb-1" style={{ color: "#F8FAFC" }}>
                        {activity.user}
                      </p>
                      <p className="text-xs" style={{ color: "#94A3B8" }}>
                        {activity.channel}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs" style={{ color: "#94A3B8" }}>
                    {activity.time}
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
