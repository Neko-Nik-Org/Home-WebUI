import { Box, Text, Flex, Grid, Link as RadixLink } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Box
        style={{
          backgroundColor: '#0f172a',
          borderTop: '1px solid #1e293b',
          padding: '0',
        }}
      >
        {/* Main Footer Content */}
        <Box
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '64px 24px 40px',
          }}
        >
          <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="6">
            {/* Organization Info */}
            <Box>
              <Flex direction="column" gap="3">
                <Text weight="bold" size="5" style={{ color: '#f8fafc', marginBottom: '8px' }}>
                  Neko-Nik Org
                </Text>
                <Text size="2" style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
                  Building innovative open-source solutions and fostering a community of passionate developers.
                </Text>
                <Flex gap="4">
                  {/* GitHub Icon */}
                  <a 
                    href="https://github.com/Neko-Nik-Org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  {/* Twitter/X Icon */}
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  {/* Discord Icon */}
                  <a 
                    href="https://discord.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 9a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2l2 2 2-2h2a5 5 0 0 0 5-5V9z"></path>
                      <path d="M8 12h.01M16 12h.01"></path>
                    </svg>
                  </a>
                </Flex>
              </Flex>
            </Box>

            {/* Projects */}
            <Box>
              <Text weight="bold" size="4" style={{ color: '#f8fafc', marginBottom: '16px' }}>
                Projects
              </Text>
              <Flex direction="column" gap="2">
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    All Projects
                  </Text>
                </Link>
                <a href="https://github.com/Neko-Nik-Org" 
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{ textDecoration: 'none' }}
                >
                  <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    GitHub Repositories
                  </Text>
                </a>
                <RadixLink asChild>
                  <Link to="/community" style={{ textDecoration: 'none' }}>
                    <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                      Contributing Guidelines
                    </Text>
                  </Link>
                </RadixLink>
              </Flex>
            </Box>

            {/* Community */}
            <Box>
              <Text weight="bold" size="4" style={{ color: '#f8fafc', marginBottom: '16px' }}>
                Community
              </Text>
              <Flex direction="column" gap="2">
                <Link to="/team" style={{ textDecoration: 'none' }}>
                  <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    Contributors
                  </Text>
                </Link>
                <RadixLink asChild>
                  <a href="https://discord.com/invite/PYqHVUGdwv" 
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ textDecoration: 'none' }}
                  >
                    <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                      Discord Community
                    </Text>
                  </a>
                </RadixLink>
                <RadixLink asChild>
                  <a href="https://discord.com/invite/PYqHVUGdwv" 
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ textDecoration: 'none' }}
                  >
                    <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                      Events & Meetings
                    </Text>
                  </a>
                </RadixLink>
              </Flex>
            </Box>

            {/* About */}
            <Box>
              <Text weight="bold" size="4" style={{ color: '#f8fafc', marginBottom: '16px' }}>
                About
              </Text>
              <Flex direction="column" gap="2">
                <Link to="/about" style={{ textDecoration: 'none' }}>
                  <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    About Us
                  </Text>
                </Link>
                <RadixLink asChild>
                  <a href="https://www.nekonik.com/contact" 
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{ textDecoration: 'none' }}
                  >
                    <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                      Contact
                    </Text>
                  </a>
                </RadixLink>
                <RadixLink asChild>
                  <a href="https://www.nekonik.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                  >
                    <Text size="2" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                    >
                      Privacy Policy
                    </Text>
                  </a>
                </RadixLink>
              </Flex>
            </Box>
          </Grid>
        </Box>

        {/* Copyright Section */}
        <Box
          style={{
            borderTop: '1px solid #1e293b',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <Flex justify="center" align="center" gap="2">
            <Text size="2" style={{ color: '#64748b' }}>
              © 2025 Neko Nik Organization. All rights reserved.
            </Text>
          </Flex>
          <Text size="2" style={{ color: '#475569', marginTop: '8px' }}>
            Made with ❤️ by our amazing community
          </Text>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
