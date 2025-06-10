import { Box, Text, Heading, Button } from "@radix-ui/themes";
import {Users, MessageCircle, GitBranch, Heart} from "lucide-react";





const CommunityPage: React.FC = () => {
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
          padding: "80px 16px 60px",
          textAlign: "center",
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        }}
      >
        <Box style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Heading
            size="9"
            style={{
              marginBottom: "24px",
              color: "white",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
            }}
          >
            Connect with developers, contribute to open source
          </Text>

          {/* Discord Invite */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <a
              href="https://discord.gg/NbJm4Z3C"
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
                className="hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Join Discord Community
              </Button>
            </a>
          </Box>
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
          <Heading
            size="7"
            align="center"
            style={{
              marginBottom: "48px",
              color: "white",
            }}
          >
            How to Contribute
          </Heading>

          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                icon: <GitBranch size={32} />,
                title: "Fork & Clone",
                description:
                  "Start by forking our repository and cloning it locally to begin development.",
              },
              {
                icon: <Users size={32} />,
                title: "Join Discussions",
                description:
                  "Participate in issues, discussions, and code reviews to understand the project better.",
              },
              {
                icon: <Heart size={32} />,
                title: "Submit PR",
                description:
                  "Create meaningful contributions and submit pull requests following our guidelines.",
              },
            ].map((guide, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                className="hover:border-indigo-400 hover:translate-y-[-4px]"
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
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { CommunityPage };
