import { NavBar } from "../components/NavBar";
import { Box, Text, Separator } from "@radix-ui/themes";
import { useEffect, useState } from "react";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <NavBar />
      <Box
        style={{
          // minHeight: "100vh",
          backgroundColor: "#111827",
          color: "white",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <Box
          style={{
            maxWidth: "720px",
            width: "100%",
          }}
          className={`transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Title */}
          <Text
            size={{ initial: "8", sm: "9", md: "9" }}
            weight="bold"
            style={{ marginBottom: "1.5rem", textAlign: "center" }}
          >
            🐾 About Neko Nik Org
          </Text>

          <Separator size="1" style={{ marginBottom: "0.5rem", borderColor: "#374151" }} />

          {/* Intro */}
          <Text
            size={{ initial: "4", sm: "5" }}
            style={{ lineHeight: 1.7, marginBottom: "2.5rem", textAlign: "left", color: "#d1d5db" }}
          >
            Neko Nik is a community-driven open-source organization focused on building powerful
            tools, languages, and systems — all fully open source and designed for learning,
            growth, and public good. Our mission is to empower students and developers by
            creating real-world projects that are inclusive, impactful, and collaborative.
          </Text>

          <Separator size="4" style={{ marginBottom: "2.5rem", borderColor: "#374151" }} />

          {/* Mission */}
          <Box style={{ marginBottom: "2.5rem" }}>
            <Text size="6" weight="bold" style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
              🎯 Our Mission
            </Text>
            <Separator size="1" style={{ marginBottom: "0.5rem", borderColor: "#374151" }} />
            <Text
              size="4"
              style={{ lineHeight: 1.6, color: "#9ca3af" }}
            >
              To build free and open-source software that empowers developers and provides real,
              hands-on learning opportunities for students — while promoting the values of open
              collaboration, community, and knowledge sharing.
            </Text>
          </Box>

          {/* Why Neko Nik */}
          <Box style={{ marginBottom: "2.5rem" }}>
            <Text size="6" weight="bold" style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
              💡 Why Neko Nik?
            </Text>
            <Separator size="1" style={{ marginBottom: "0.5rem", borderColor: "#374151" }} />
            <Text
              size="4"
              style={{ lineHeight: 1.6, color: "#9ca3af", marginBottom: "1rem" }}
            >
              We’re not a startup. We’re not here to sell. We’re here to{" "}
              <strong>build</strong>, <strong>learn</strong>, and <strong>share</strong>.
            </Text>
            <ul
              style={{
                paddingLeft: "1.2rem",
                color: "#9ca3af",
                lineHeight: 1.5,
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <li>✅ 100% open source</li>
              <li>✅ Student-friendly</li>
              <li>✅ Community-led</li>
              <li>✅ Non-profit by spirit (and soon, legally!)</li>
            </ul>
          </Box>

          {/* How to Get Involved */}
          <Box style={{ marginBottom: "2.5rem" }}>
            <Text size="6" weight="bold" style={{ marginBottom: "0.75rem", color: "#60a5fa" }}>
              🙌 How to Get Involved
            </Text>
            <Separator size="1" style={{ marginBottom: "0.5rem", borderColor: "#374151" }} />
            <Text
              size="4"
              style={{ lineHeight: 1.6, color: "#9ca3af", marginBottom: "1rem" }}
            >
              Whether you're a student, contributor, writer, or designer — we welcome all skills
              and backgrounds!
            </Text>
            <ul
              style={{
                paddingLeft: "1.2rem",
                color: "#9ca3af",
                lineHeight: 1.5,
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              <li>
                Sign our{" "}
                <a
                  href="https://sign.nekonik.com/d/FqXLvn6D39yXJG"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Contributor License Agreement (CLA)
                </a>
              </li>
              <li>
                Join our{" "}
                <a
                  href="https://discord.com/invite/PYqHVUGdwv"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Discord community
                </a>
              </li>
              <li>
                Contribute on{" "}
                <a
                  href="https://github.com/Neko-Nik-Org"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  GitHub
                </a>{" "}
                — look for issues labeled "good first issue"
              </li>
              <li>Write docs, tutorials, or blog posts</li>
              <li>Share ideas and feedback</li>
            </ul>
          </Box>

          <Text
            size="4"
            style={{
              color: "#6b7280",
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            "The best way to learn is by building with others. That’s what Neko Nik is all about."
            <br />
            — Neko Nik 🐾
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
