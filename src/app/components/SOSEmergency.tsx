import { motion } from "motion/react";
import { Heart, UserX, Droplets, Flame, MapPin, ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "react-router";
import { GlassCard } from "./GlassCard";
import { useState } from "react";

export function SOSEmergency() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const emergencyTypes = [
    { id: "medical", icon: Heart, label: "Medical Emergency", color: "#EF4444" },
    { id: "trapped", icon: UserX, label: "Trapped Survivor", color: "#F59E0B" },
    { id: "flood", icon: Droplets, label: "Flood / Landslide", color: "#3B82F6" },
    { id: "fire", icon: Flame, label: "Fire", color: "#DC2626" },
  ];

  const handleSendSOS = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSelectedType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4 pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
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
          Emergency SOS
        </h1>
        <p style={{ color: "#94A3B8" }}>
          Select emergency type and send alert
        </p>
      </motion.div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Location Detection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <GlassCard className="p-5">
            <div className="flex items-center gap-3">
              <div 
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(34, 211, 238, 0.1)",
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#22D3EE" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1" style={{ color: "#F8FAFC" }}>
                  GPS Location
                </p>
                <p className="text-xs" style={{ color: "#94A3B8" }}>
                  40.7128°N, 74.0060°W
                </p>
              </div>
              <span 
                className="text-xs px-2 py-1 rounded-full"
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

        {/* Emergency Type Selection */}
        <div className="space-y-3">
          <h3 className="text-sm mb-3" style={{ color: "#94A3B8" }}>
            SELECT EMERGENCY TYPE
          </h3>
          {emergencyTypes.map((type, index) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GlassCard
                  className={`p-5 cursor-pointer transition-all duration-300 ${
                    isSelected ? "scale-[1.02]" : ""
                  }`}
                  style={{
                    background: isSelected
                      ? `rgba(${parseInt(type.color.slice(1, 3), 16)}, ${parseInt(
                          type.color.slice(3, 5),
                          16
                        )}, ${parseInt(type.color.slice(5, 7), 16)}, 0.15)`
                      : "rgba(28, 37, 65, 0.4)",
                    borderColor: isSelected
                      ? `${type.color}40`
                      : "rgba(255, 255, 255, 0.1)",
                  }}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: `${type.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: type.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-base" style={{ color: "#F8FAFC", fontWeight: 600 }}>
                        {type.label}
                      </p>
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background: type.color,
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Send SOS Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button
            onClick={handleSendSOS}
            disabled={!selectedType || isSending}
            className={`w-full p-6 rounded-2xl transition-all duration-300 ${
              !selectedType || isSending ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"
            }`}
            style={{
              background: selectedType && !isSending
                ? "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)"
                : "rgba(239, 68, 68, 0.3)",
              border: "1px solid rgba(239, 68, 68, 0.5)",
              boxShadow: selectedType && !isSending
                ? "0 0 30px rgba(239, 68, 68, 0.4)"
                : "none",
            }}
          >
            <div className="flex items-center justify-center gap-3">
              {isSending ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <AlertCircle className="w-6 h-6" style={{ color: "#FFF" }} />
                  </motion.div>
                  <span className="text-xl" style={{ color: "#FFF", fontWeight: 700 }}>
                    Sending SOS...
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-6 h-6" style={{ color: "#FFF" }} />
                  <span className="text-xl" style={{ color: "#FFF", fontWeight: 700 }}>
                    SEND SOS ALERT
                  </span>
                </>
              )}
            </div>
          </button>
        </motion.div>

        {/* Safety Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <GlassCard className="p-4">
            <p className="text-xs text-center" style={{ color: "#94A3B8" }}>
              Your SOS alert will be broadcast to all nearby devices on the mesh network with your GPS location.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
