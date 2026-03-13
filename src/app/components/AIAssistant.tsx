import { motion } from "motion/react";
import { ArrowLeft, Send, Bot, User } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { useState } from "react";

export function AIAssistant() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      text: "Hello! I'm your disaster assistance AI. How can I help you today?",
      sender: "ai",
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "I need guidance on treating a minor burn injury",
      sender: "user",
      time: "10:01 AM",
    },
    {
      id: 3,
      text: "I can help with that. Here's what you should do:\n\n1. Cool the burn under cool (not cold) running water for 10-20 minutes\n2. Remove any jewelry or tight items from the burned area\n3. Don't break blisters\n4. Apply a moisturizing lotion or aloe vera gel\n5. Cover with a sterile, non-stick bandage\n\nSeek immediate medical attention if:\n- The burn is larger than 3 inches\n- It's on the face, hands, feet, or genitals\n- The person is a child or elderly",
      sender: "ai",
      time: "10:01 AM",
    },
    {
      id: 4,
      text: "Thank you! What supplies do I need from the first aid kit?",
      sender: "user",
      time: "10:03 AM",
    },
    {
      id: 5,
      text: "For burn treatment, you'll need:\n\n✓ Sterile gauze pads\n✓ Non-stick bandages\n✓ Medical tape\n✓ Antibiotic ointment (optional)\n✓ Pain relievers (ibuprofen/acetaminophen)\n\nAvoid using:\n✗ Ice directly on the burn\n✗ Cotton balls (fibers can stick)\n✗ Butter or oils",
      sender: "ai",
      time: "10:03 AM",
    },
  ];

  const quickActions = [
    "First Aid Guide",
    "Shelter Locations",
    "Emergency Contacts",
    "Water Purification",
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
              AI Assistant
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#22D3EE" }} />
              <span className="text-sm" style={{ color: "#22D3EE" }}>
                Online
              </span>
            </div>
          </div>
          <div
            className="p-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)",
              boxShadow: "0 8px 24px rgba(58, 134, 255, 0.4)",
            }}
          >
            <Bot className="w-6 h-6" style={{ color: "#FFF" }} />
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 max-w-md mx-auto w-full"
      >
        <p className="text-xs mb-3" style={{ color: "#94A3B8" }}>
          QUICK ACTIONS
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickActions.map((action, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(58, 134, 255, 0.15)",
                color: "#3A86FF",
                borderColor: "rgba(58, 134, 255, 0.3)",
                border: "1px solid",
              }}
            >
              {action}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 space-y-4 mb-6 max-w-md mx-auto w-full">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background:
                  msg.sender === "ai"
                    ? "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)"
                    : "rgba(58, 134, 255, 0.2)",
              }}
            >
              {msg.sender === "ai" ? (
                <Bot className="w-5 h-5" style={{ color: "#FFF" }} />
              ) : (
                <User className="w-5 h-5" style={{ color: "#3A86FF" }} />
              )}
            </div>

            {/* Message bubble */}
            <div className={`flex-1 ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col`}>
              <GlassCard
                className="p-4 max-w-[85%]"
                style={{
                  background:
                    msg.sender === "ai"
                      ? "rgba(28, 37, 65, 0.6)"
                      : "rgba(58, 134, 255, 0.15)",
                  borderColor:
                    msg.sender === "ai"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(58, 134, 255, 0.3)",
                }}
              >
                <p className="text-sm whitespace-pre-line" style={{ color: "#F8FAFC" }}>
                  {msg.text}
                </p>
              </GlassCard>
              <span className="text-xs mt-2 px-2" style={{ color: "#94A3B8" }}>
                {msg.time}
              </span>
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
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "#F8FAFC" }}
            />
            <button
              className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: message
                  ? "linear-gradient(135deg, #3A86FF 0%, #22D3EE 100%)"
                  : "rgba(58, 134, 255, 0.2)",
                boxShadow: message ? "0 4px 16px rgba(58, 134, 255, 0.3)" : "none",
              }}
              disabled={!message}
            >
              <Send className="w-5 h-5" style={{ color: "#FFF" }} />
            </button>
          </div>
        </GlassCard>
        <p className="text-xs text-center mt-3" style={{ color: "#94A3B8" }}>
          AI responses are guidance only. Seek professional help for serious emergencies.
        </p>
      </motion.div>
    </div>
  );
}
