import { Box, Text, Heading, Button } from "@radix-ui/themes";
import {Users, MessageCircle, GitBranch, Heart, BookOpen, Star, Lightbulb, FileText, ExternalLink, ArrowRight} from "lucide-react";
import { motion } from "framer-motion";

const CommunityPage: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 60,
        duration: 0.8
      }
    }
  };

  const buttonAnimation = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <Box
      style={{
        width: "100%",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <Box
        style={{
          padding: "80px 16px 0px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <Heading
            size="9"
            style={{
              marginBottom: "24px",
              color: "white",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "8px",
            }}
          >
            Join Our Community
          </Heading>

          <Text
            size="5"
            style={{
              color: "#94a3b8",
              marginBottom: "40px",
              lineHeight: "1.6",
              textAlign: "center",
              maxWidth: "60ch",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "16px",
            }}
          >
            Connect with developers, contribute to open source, and build amazing things together
          </Text>

          {/* Discord Invite */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonAnimation}
            >
              <a
                href="https://discord.com/invite/PYqHVUGdwv"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="4"
                  style={{
                    background:
                      "linear-gradient(135deg, #5865f2 0%, #7289da 100%)",
                    color: "white",
                    padding: "16px 32px",
                    fontSize: "16px",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <MessageCircle size={20} />
                  Join Discord Community
                </Button>
              </a>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      {/* How to Get Involved - Highlighted Section */}
      <Box
        style={{
          padding: "80px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <Box
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            pointerEvents: "none",
          }}
        />
        
        <Box style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ textAlign: "center", marginBottom: "60px" }}
          >
            <Text
              size="2"
              style={{
                color: "#8b5cf6",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: "600",
                marginBottom: "16px",
                display: "block",
              }}
            >
              🙌 Get Started Today
            </Text>
            <Heading
              size="8"
              style={{
                marginBottom: "24px",
                color: "white",
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              How to Get Involved
            </Heading>
            <Text
              size="4"
              style={{
                color: "#cbd5e1",
                maxWidth: "70ch",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Whether you're a student, contributor, writer, or designer — we welcome all skills and backgrounds!
            </Text>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                icon: <FileText size={28} />,
                title: "Sign the CLA",
                description: "First sign the Contributor License Agreement (CLA) to contribute to our projects",
                highlight: true,
                link: "https://sign.nekonik.com/d/FqXLvn6D39yXJG",
                buttonText: "Sign Now",
              },
              {
                icon: <MessageCircle size={28} />,
                title: "Join Discord",
                description: "Join our Discord community to connect with us and other contributors",
                highlight: false,
                link: "https://discord.com/invite/PYqHVUGdwv",
                buttonText: "Join Discord",
              },
              {
                icon: <GitBranch size={28} />,
                title: "Contribute on GitHub",
                description: "We have issues labeled 'good first issue' for newcomers to get started",
                highlight: false,
                link: "https://github.com/orgs/Neko-Nik-Org/repositories",
                buttonText: "View Repositories",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Write & Document",
                description: "Write documentation, tutorials, or blog posts to help others learn",
                highlight: false,
              },
              {
                icon: <Lightbulb size={28} />,
                title: "Share Ideas",
                description: "Share your ideas and feedback — we're always looking for ways to improve",
                highlight: false,
              },
              {
                icon: <Star size={28} />,
                title: "Every Contribution Counts",
                description: "Star a repo, fix a bug, suggest an idea — all contributions matter",
                highlight: false,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: "#818cf8",
                  transition: { duration: 0.3 }
                }}
              >
                <Box
                  style={{
                    padding: "28px",
                    backgroundColor: item.highlight ? "rgba(139, 92, 246, 0.1)" : "#1e293b",
                    border: item.highlight ? "2px solid #8b5cf6" : "1px solid #334155",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {item.highlight && (
                    <Box
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                        color: "#1e293b",
                        padding: "4px 12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        borderBottomLeftRadius: "8px",
                      }}
                    >
                      START HERE
                    </Box>
                  )}
                  
                  <Box
                    style={{
                      color: item.highlight ? "#a855f7" : "#8b5cf6",
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Heading
                    size="5"
                    style={{ 
                      color: "white", 
                      marginBottom: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Heading>
                  <Text 
                    size="3" 
                    style={{ 
                      color: "#94a3b8", 
                      lineHeight: "1.6",
                      marginBottom: item.link ? "20px" : "0",
                    }}
                  >
                    {item.description}
                  </Text>
                  
                  {/* Action Button for items with links */}
                  {item.link && (
                    <Box style={{ marginTop: "20px" }}>
                      <motion.div
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonAnimation}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            size="2"
                            style={{
                              background: item.highlight 
                                ? "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                                : "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "14px",
                              fontWeight: "500",
                              padding: "8px 16px",
                            }}
                          >
                            {item.buttonText}
                            <ArrowRight size={14} />
                          </Button>
                        </a>
                      </motion.div>
                    </Box>
                  )}

                  {/* Link indicator for clickable cards */}
                  {item.link && (
                    <Box
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        color: "#64748b",
                        opacity: "0.6",
                      }}
                    >
                      <ExternalLink size={16} />
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>
      
      {/* Contribution Guides */}
      <Box
        style={{
          padding: "80px 16px",
          backgroundColor: "#0f172a",
        }}
      >
        <Box style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Heading
              size="7"
              style={{
                marginBottom: "24px",
                color: "white",
                textAlign: "center",
              }}
            >
              Quick Start Guide
            </Heading>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              marginTop: "40px",
            }}
          >
            {[
              {
                icon: <GitBranch size={32} />,
                title: "1. Fork & Clone",
                description:
                  "Start by forking our repository and cloning it locally to begin development.",
              },
              {
                icon: <Users size={32} />,
                title: "2. Join Discussions",
                description:
                  "Participate in issues, discussions, and code reviews to understand the project better.",
              },
              {
                icon: <Heart size={32} />,
                title: "3. Submit PR",
                description:
                  "Create meaningful contributions and submit pull requests following our guidelines.",
              },
            ].map((guide, index) => (
              <motion.div 
                key={index}
                variants={itemVariant}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  borderColor: "#818cf8",
                  transition: { duration: 0.3 }
                }}
              >
                <Box
                  style={{
                    padding: "32px",
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "16px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    style={{
                      color: "#8b5cf6",
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {guide.icon}
                  </Box>
                  <Heading
                    size="5"
                    style={{ color: "white", marginBottom: "16px" }}
                  >
                    {guide.title}
                  </Heading>
                  <Text size="3" style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                    {guide.description}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export { CommunityPage };