import React from 'react';
import { Box, Heading, Grid } from '@radix-ui/themes';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: "Nik-Lang",
    description:
      "A modern programming language designed for learning and real-world development.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org",
    tags: ["Language", "Education", "Interpreter"]
  },
  {
    name: "N-Ops",
    description:
      "Developer tools and automation workflows for modern teams and individuals.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org",
    tags: ["DevTools", "Automation", "Workflows"]
  },
  {
    name: "N-Sync",
    description:
      "Simple, secure file syncing across devices with real-time watch mode.",
    status: "Active",
    url: "https://github.com/Neko-Nik-Org/N-Sync",
    tags: ["Sync", "Security", "Cross-platform", "Watch"]
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
  }
];

// ProjectsSection now using the ProjectCard component
const ProjectsSection: React.FC = () => {
  return (
    <Box
      id="projects"
      style={{ 
        width: '100%',
        padding: '32px 16px',
        backgroundColor: '#111827', 
        minHeight: '100vh'
      }}
    >
      <Box style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Heading 
          size="8" 
          align="center" 
          style={{ 
            marginBottom: '32px',
            color: 'white'
          }}
        >
          Our Projects
        </Heading>
        
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              url={project.url}
              status={project.status}
              tags={project.tags}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
