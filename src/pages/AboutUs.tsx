import { NavBar } from "../components/NavBar";
import { Flex, Text, Box, Grid } from '@radix-ui/themes';
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div  className="lex flex-col items-center justify-center h-full mb-20">
        <Box 
          style={{ 
            minHeight: "100vh",
            backgroundColor: "#111827",
            position: "relative",
            overflow: "hidden",
          }}
          px={{ initial: '2', sm: '4', md: '6' }}
        >
          {/* Hero Section */}
          <Flex 
            direction="column" 
            align="center" 
            justify="center" 
            maxWidth="900px" 
            mx="auto" 
            py={{ initial: '10', sm: '14', md: '18' }}
            style={{ zIndex: 1, position: "relative" }}
          >
            <Text 
              size={{ initial: '8', sm: '9', md: '9' }}
              weight="bold" 
              align="center"
              mb="7" 
              style={{ 
                color: "white",
                background: "linear-gradient(to right, #4f46e5, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.025em",
                marginTop: "24px",  
                paddingBottom: "8px",
              }}
              className="animate-fadeInUp"
            >
              About Neko-Nik Organization
            </Text>
            
            <Text 
              size={{ initial: '4', sm: '5' }}
              style={{ color: "#d1d5db", maxWidth: "700px",marginBottom: "24px" }}  
              align="center" 
              mb={{ initial: '8', sm: '10' }}
              className="animate-fadeInUp delay-200"
            >             
              Building innovative solutions and fostering a community of developers passionate about creating impactful technology.
            </Text>
          </Flex>

          {/* Vision & Mission Cards */}
          <Box maxWidth="1200px" mx="auto" pb="16">
            <Grid columns={{ initial: '1', md: '2' }} gap="6" mb="18">
              {/* Vision div */}
              <div 
                className="about-card animate-fadeInUp delay-300"
                style={{ 
                  backgroundColor: "#1f2937", 
                  border: "1px solid #374151",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.02)",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s"
                }}
              >
                <Flex direction="column" gap="4">
                  <Flex align="center" gap="3">
                    <div style={{ 
                      backgroundColor: "rgba(16, 185, 129, 0.2)", 
                      borderRadius: "50%", 
                      padding: "8px"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </div>
                    <Text 
                      size="6" 
                      weight="bold" 
                      style={{ color: "#10b981" }}
                    >
                      Our Vision
                    </Text>
                  </Flex>
                  <Text 
                    size="4" 
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    To be a leading organization in the open-source community, empowering developers worldwide to create innovative solutions that make technology more accessible and beneficial for everyone.
                  </Text>
                </Flex>
              </div>

              {/* Mission div */}
              <div 
                className="about-card animate-fadeInUp delay-400"
                style={{ 
                  backgroundColor: "#1f2937", 
                  border: "1px solid #374151",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.02)",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s"
                }}
              >
                <Flex direction="column" gap="4">
                  <Flex align="center" gap="3">
                    <div style={{ 
                      backgroundColor: "rgba(59, 130, 246, 0.2)", 
                      borderRadius: "50%", 
                      padding: "8px"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <Text 
                      size="6" 
                      weight="bold" 
                      style={{ color: "#3b82f6" }}
                    >
                      Our Mission
                    </Text>
                  </Flex>
                  <Text 
                    size="4" 
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    We strive to develop high-quality software solutions, foster collaboration among developers, and contribute to the open-source ecosystem through innovation, education, and community building.
                  </Text>
                </Flex>
              </div>
            </Grid>

            {/* Values Section */}
            <Box mt="16" style={{
              textAlign: "center",
            }}>
              <br />
              <br />
              <Text 
                size="8" 
                weight="bold" 
                align="center"
                className="animate-fadeInUp delay-500"
                style={{ 
                  color: "white",
                  marginBottom: "2.5rem",
                  paddingBottom: "8px",
                }} 
              >
                Our Core Values
              </Text>
              <br />
              <br />
              <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="6">
                {/* Innovation */}
                <div 
                  className="about-card value-card"
                  style={{ 
                    backgroundColor: "#1f2937", 
                    border: "1px solid #374151",
                    padding: "1.75rem",
                    borderRadius: "16px",
                    borderLeft: "4px solid #f59e0b",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.02)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Flex direction="column" align="center" gap="3">
                    <div style={{ 
                      backgroundColor: "rgba(245, 158, 11, 0.2)", 
                      borderRadius: "50%", 
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                    <Text 
                      size="5" 
                      weight="bold" 
                      style={{ color: "#f59e0b" }} 
                      mb="2"
                    >
                      Innovation
                    </Text>
                    <Text 
                      size="3" 
                      style={{ color: "#d1d5db", lineHeight: "1.5", textAlign: "center" }}
                    >
                      Continuously pushing boundaries and exploring new technologies to solve complex problems.
                    </Text>
                  </Flex>
                </div>

                {/* Collaboration */}
                <div 
                  className="about-card value-card"
                  style={{ 
                    backgroundColor: "#1f2937", 
                    border: "1px solid #374151",
                    padding: "1.75rem",
                    borderRadius: "16px",
                    borderLeft: "4px solid #ec4899",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.02)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Flex direction="column" align="center" gap="3">
                    <div style={{ 
                      backgroundColor: "rgba(236, 72, 153, 0.2)", 
                      borderRadius: "50%", 
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <Text 
                      size="5" 
                      weight="bold" 
                      style={{ color: "#ec4899" }} 
                      mb="2"
                    >
                      Collaboration
                    </Text>
                    <Text 
                      size="3" 
                      style={{ color: "#d1d5db", lineHeight: "1.5", textAlign: "center" }}
                    >
                      Building strong partnerships and fostering teamwork to achieve shared goals.
                    </Text>
                  </Flex>
                </div>

                {/* Excellence */}
                <div 
                  className="about-card value-card"
                  style={{ 
                    backgroundColor: "#1f2937", 
                    border: "1px solid #374151",
                    padding: "1.75rem",
                    borderRadius: "16px",
                    borderLeft: "4px solid #8b5cf6",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25), 0 1px 0 rgba(255, 255, 255, 0.02)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  <Flex direction="column" align="center" gap="3">
                    <div style={{ 
                      backgroundColor: "rgba(139, 92, 246, 0.2)", 
                      borderRadius: "50%", 
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                    <Text 
                      size="5" 
                      weight="bold" 
                      style={{ color: "#8b5cf6" }} 
                      mb="2"
                    >
                      Excellence
                    </Text>
                    <Text 
                      size="3" 
                      style={{ color: "#d1d5db", lineHeight: "1.5", textAlign: "center" }}
                    >
                      Maintaining high standards in code quality, documentation, and user experience.
                    </Text>
                  </Flex>
                </div>
              </Grid>
            </Box>

            {/* What We Do Section */}
            <Box mt="16"
            style={{
              textAlign: "center",
            }}>
                 <br />
              <br />
              <Text 
                size="8" 
                weight="bold" 
                align="center" 
                style={{ 
                  background: "linear-gradient(to right, #4f46e5, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "2rem"
                }}
              >
                What We Do
              </Text>
                 <br />
              <br />
              
              <div 
                className="about-card"
                style={{ 
                  backgroundColor: "#1f2937", 
                  border: "1px solid #374151",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.02)",
                  marginBottom: "2rem",
                }}
              >
                <Grid columns={{ initial: '1', md: '2' }} gap="8">
                  <Flex direction="column" gap="4">
                    <Flex align="center" gap="3">
                      <div style={{ 
                        backgroundColor: "rgba(16, 185, 129, 0.2)", 
                        borderRadius: "50%", 
                        padding: "8px"
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                          <path d="M12 11v6"></path>
                          <path d="M9 14h6"></path>
                        </svg>
                      </div>
                      <Text size="5" weight="bold" style={{ color: "#10b981" }}>
                        Open Source Development
                      </Text>
                    </Flex>
                    <Text size="4" style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                      We create and maintain open-source projects that benefit the developer community, ranging from tools and libraries to full-scale applications. Our code is always well-documented, tested, and maintained.
                    </Text>
                  </Flex>
                  
                  <Flex direction="column" gap="4">
                    <Flex align="center" gap="3">
                      <div style={{ 
                        backgroundColor: "rgba(59, 130, 246, 0.2)", 
                        borderRadius: "50%", 
                        padding: "8px"
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <Text size="5" weight="bold" style={{ color: "#3b82f6" }}>
                        Community Building
                      </Text>
                    </Flex>
                    <Text size="4" style={{ color: "#d1d5db", lineHeight: "1.6" }}>
                      We foster a welcoming environment for developers of all skill levels to learn, collaborate, and contribute to meaningful projects. Our community values diversity and inclusivity in tech.
                    </Text>
                  </Flex>
                </Grid>

              </div>
            </Box>

            {/* Join Us Section */}
            <Box
              mt="20" 
              mb="12"
              style={{
                textAlign: "center",
                backgroundColor: "#1f2937",
                borderRadius: "16px",
                padding: "2.5rem",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.02)",
                border: "1px solid #374151",
              }}
            >
              <Text 
                size="6" 
                weight="bold" 
                style={{ 
                  background: "linear-gradient(to right, #4f46e5, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "1rem" 
                }}
              >
                Join Our Journey
              </Text>
              <br />
              <br />
              <Text 
                size="4" 
                style={{ color: "#d1d5db", maxWidth: "700px", margin: "0 auto 1.5rem" }}
              >
                Whether you're a seasoned developer or just starting your coding journey, we welcome you to be part of our growing community. Together, we can build something amazing.
              </Text>
               <br />
              <br />
              <Flex justify="center" gap="4">
                <a 
                  href="https://github.com/Neko-Nik-org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "#4f46e5",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.375rem",
                    fontWeight: "600",
                    transition: "background-color 0.2s",
                    textDecoration: "none"
                  }}
                  className="hero-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
               
              </Flex>
            </Box>
            <br />
            <br />
          </Box>
        </Box>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs;
