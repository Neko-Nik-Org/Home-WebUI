import React  from 'react';
import { Box, Text, Heading, Grid } from '@radix-ui/themes';
import ProjectCard from './ProjectCard'; // Assuming you have a ProjectCard component


const projects = [
  {
    name: "Nik-Lang",
    description:
      "A modern programming language designed for learning and real-world development.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org/NIKL-Core",
    tags: ["Language", "Education", "Interpreter"],
    liveUrl: "https://nikl.nekonik.org/"
  },
  {
    name: "N-Ops",
    description:
      "Developer tools and automation workflows for modern teams and individuals.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org/N-Ops-UI",
    tags: ["DevTools", "Automation", "Workflows"]
  },
  {
    name: "N-Sync",
    description:
      "Simple, secure file syncing across devices with real-time watch mode.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org/N-Sync",
    liveUrl: "https://n-sync.nekonik.org/",
    tags: ["Sync", "Security", "Cross-platform", "Watch"]
  },
  {
    name: "Invoice-N",
    description: "A simple, self-hosted invoicing system for freelancers and small businesses.",
    status: "On Hold",
    url: "https://github.com/Neko-Nik-Org/Invoice-N-API",
    tags: ["Invoicing", "Self-hosted", "Freelancers", "Small Business"],
  },
  {
    name: "Operating System",
    description:
      "Lightweight, educational OS experiments based on Debian — for tinkerers & learners.",
    status: "Not Started",
    tags: ["OS", "Linux", "Systems", "Education"]
  },
  {
    name: "Short-N",
    description:
      "A privacy-first, self-hosted URL shortener. Simple. Clean. Yours.",
    status: "Not Started",
    tags: ["Privacy", "URL", "Self-hosted", "Shortener"]
  },
  {
    name: "Stream Deck",
    description:
      "Affordable, fully open-source stream deck including PCB, case, and software.",
    status: "In Progress",
    tags: ["Stream Deck", "PCB Design", "Hardware", "3D Printing"]
  },
  {
    name: "Fit-N",
    description:
      "Mobile App for tracking fitness activities with backend sync and user management.",
    status: "In Progress",
    tags: ["Fitness", "Mobile App", "Tracking", "Sync", "Kotlin"]
  },
];


// Enhanced ProjectsSection component
const ProjectsSection: React.FC = () => {
  return (
    <Box
      id="projects"
      style={{ 
        width: '100%',
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #111827 0%, #0f172a 50%, #1f2937 100%)',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 25%),
                           radial-gradient(circle at 75% 75%, rgba(167, 139, 250, 0.1) 0%, transparent 25%)`,
          pointerEvents: 'none'
        }}
      />
      
      <Box style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Enhanced heading with subtitle */}
        <Box style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Heading 
            size="9" 
            style={{ 
              color: '#f8fafc',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #a5b4fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              paddingBottom: '8px',
            }}
          >
            Our Projects
          </Heading>
          <Text 
            size="5" 
            style={{ 
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              marginTop: '8px',
            }}
          >
            Innovative solutions and tools built with passion for developers and learners
          </Text>
        </Box>
        
        {/* Enhanced grid layout */}
        <Grid 
          columns={{ initial: '1', sm: '2', lg: '3' }} 
          gap="6"
          style={{
            alignItems: 'stretch'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                url={project.url}
                status={project.status}
                tags={project.tags}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </Grid>
      </Box>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default ProjectsSection;
