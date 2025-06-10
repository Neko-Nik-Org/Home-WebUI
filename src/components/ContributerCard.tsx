
import { Box, Text, Link, Avatar} from "@radix-ui/themes";
import {
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";



interface ContributorCardProps {
  username: string;
  fullName: string;
  role: string;
  techStack: string;
  bio: string;
  avatarUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

const ContributorCard: React.FC<ContributorCardProps> = ({
  fullName,
  role,
  techStack,
  bio,
  avatarUrl,
  githubUrl,
  linkedinUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="custom-card contributor-card"
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "150px",
          background:
            "linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Profile Image with enhanced styling */}
      <div
        style={{
          position: "relative",
          marginBottom: "24px",
          zIndex: 1,
        }}
      >
        <Avatar
          size="8"
          src={avatarUrl}
          alt={`${fullName}'s avatar`}
          fallback={fullName
            .split(" ")
            .map((name) => name[0])
            .join("")}
          radius="full"
          style={{
            border: isHovered ? "4px solid #6366f1" : "4px solid #4f46e5",
            boxShadow: isHovered
              ? "0 8px 32px rgba(99, 102, 241, 0.6), 0 0 0 2px rgba(99, 102, 241, 0.2)"
              : "0 4px 16px rgba(79, 70, 229, 0.4)",
            transition: "all 0.4s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Glow effect behind avatar */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            height: "120px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
            borderRadius: "50%",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            zIndex: -1,
          }}
        />
      </div>

      {/* Name with proper styling for dark theme */}
      <Text
        size="6"
        weight="bold"
        style={{
          color: isHovered ? "#f8fafc" : "#e2e8f0",
          marginBottom: "12px",
          fontSize: "20px",
          fontWeight: "700",
          transition: "color 0.3s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {fullName}
      </Text>

      {/* Role with enhanced styling for dark theme */}
      <Box
        style={{
          backgroundColor: isHovered ? "#4338ca30" : "#4f46e520",
          color: "#c7d2fe",
          padding: "6px 16px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "16px",
          border: isHovered ? "1px solid #4338ca50" : "1px solid #4f46e530",
          transition: "all 0.3s ease",
          backdropFilter: "blur(8px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {role}
      </Box>

      {/* Tech Stack with pill styling for dark theme */}
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "6px",
          marginBottom: "20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {techStack.split("•").map((tech, index) => (
          <Box
            key={index}
            style={{
              backgroundColor: isHovered ? "#374151" : "#2d3748",
              color: "#a5b4fc",
              fontSize: "12px",
              fontWeight: "500",
              padding: "4px 10px",
              borderRadius: "8px",
              border: "1px solid #4b5563",
              transition: "all 0.3s ease",
            }}
          >
            {tech.trim()}
          </Box>
        ))}
      </Box>

      {/* Bio with enhanced typography for dark theme */}
      <Text
        size="3"
        style={{
          color: "#94a3b8",
          marginBottom: "28px",
          lineHeight: "1.6",
          flex: 1,
          fontSize: "14px",
          opacity: "0.9",
          transition: "color 0.3s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {bio}
      </Text>

      {/* Enhanced social links */}
      <Box
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: isHovered ? "#4b5563" : "#374151",
            borderRadius: "12px",
            color: "#93c5fd",
            transition: "all 0.3s ease",
            border: "1px solid #6b7280",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1f2937";
            e.currentTarget.style.color = "#60a5fa";
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isHovered
              ? "#4b5563"
              : "#374151";
            e.currentTarget.style.color = "#93c5fd";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Github size={20} />
        </Link>

        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            backgroundColor: isHovered ? "#4b5563" : "#374151",
            borderRadius: "12px",
            color: "#93c5fd",
            transition: "all 0.3s ease",
            border: "1px solid #6b7280",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1e40af";
            e.currentTarget.style.color = "#dbeafe";
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 8px 16px rgba(30, 64, 175, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = isHovered
              ? "#4b5563"
              : "#374151";
            e.currentTarget.style.color = "#93c5fd";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <Linkedin size={20} />
        </Link>
      </Box>
    </div>
  );
};


export default ContributorCard