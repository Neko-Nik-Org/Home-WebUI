import { NavBar  } from "../components/NavBar";
import { Text, Box, Heading } from '@radix-ui/themes';
import ContributorCard from "../components/ContributerCard";
import contributors from "../data/contributors.json";
import { motion } from "framer-motion";

function OurTeam() {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  // Container animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5
      }
    }
  };

  // Individual card animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 70,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <NavBar/>
      {/* Contributors Section */}
      <Box
        id="contributors"
        style={{
          padding: "80px 16px",
          backgroundColor: "#111827",
        }}
      >
        <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <Box style={{ textAlign: "center", marginBottom: "60px" }}>
              <Heading
                size="9"
                style={{
                  color : "#f3f4f6",	
                  marginBottom: "16px",
                }}
              >
                Meet Our Team
              </Heading>
              <Text
                size="4"
                style={{
                  color: "#9ca3af",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Talented individuals who make this project possible through their
                dedication and expertise
              </Text>
            </Box>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
              }}
            >
              {contributors.map((contributor) => (
                <motion.div key={contributor.username} variants={itemVariants}>
                  <ContributorCard {...contributor} />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default OurTeam;