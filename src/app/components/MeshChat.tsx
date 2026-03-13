import { motion } from "motion/react";
import { ArrowLeft, Send, Wifi, Check, CheckCheck } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { useState } from "react";

export function MeshChat() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      text: "Is anyone near the shelter on 5th Avenue?",
      sender: "other",
      time: "10:24 AM",
      relayPath: 2,
      status: "delivered",
    },
    {
      id: 2,
      text: "Yes, I'm here. The shelter has food and water available.",
      sender: "me",
      time: "10:26 AM",
      relayPath: 1,
      status: "read",
    },
    {
      id: 3,
      text: "Great! On my way. How many people are there?",
      sender: "other",
      time: "10:28 AM",
      relayPath: 3,
      status: "delivered",
    },
    {
      id: 4,
      text: "Around 50 people. Bring any supplies if you can.",
      sender: "me",
      time: "10:30 AM",
      relayPath: 2,
      status: "read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col p-4 pt-8">
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
        <div className="flex items-center justify-between">
          <div>
            <h1 
              className="text-3xl mb-1"
              style={{
                color: "#F8FAFC",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Mesh Chat
            </h1>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" style={{ color: "#22D3EE" }} />
              <span className="text-sm" style={{ color: "#22D3EE" }}>
                42 nodes connected
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 space-y-4 mb-6 max-w-md mx-auto w-full">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div className="max-w-[80%]">
              <GlassCard
                className="p-4"
                style={{
                  background:
                    msg.sender === "me"
                      ? "rgba(58, 134, 255, 0.2)"
                      : "rgba(28, 37, 65, 0.6)",
                  borderColor:
                    msg.sender === "me"
                      ? "rgba(58, 134, 255, 0.3)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
              >
                <p className="text-sm mb-2" style={{ color: "#F8FAFC" }}>
                  {msg.text}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-3 h-3" style={{ color: "#94A3B8" }} />
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                      {msg.relayPath} {msg.relayPath === 1 ? "hop" : "hops"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: "#94A3B8" }}>
                      {msg.time}
                    </span>
                    {msg.sender === "me" && (
                      <div>
                        {msg.status === "read" ? (
                          <CheckCheck className="w-4 h-4" style={{ color: "#22D3EE" }} />
                        ) : (
                          <Check className="w-4 h-4" style={{ color: "#94A3B8" }} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-md mx-auto w-full"
      >
        <GlassCard className="p-3">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "#F8FAFC" }}
            />
            <button
              className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: message
                  ? "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)"
                  : "rgba(58, 134, 255, 0.2)",
              }}
              disabled={!message}
            >
              <Send className="w-5 h-5" style={{ color: "#FFF" }} />
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
