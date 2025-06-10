import React, { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, style, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        padding: "32px",
        background: isHovered
          ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
          : "linear-gradient(135deg, #1f2937 0%, #0f172a 100%)",
        borderRadius: "16px",
        border: isHovered ? "1px solid #6366f1" : "1px solid #374151",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        overflow: "hidden",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default GlowCard;
