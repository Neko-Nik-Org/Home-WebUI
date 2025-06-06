import React from 'react';
import { Box, Heading, Grid } from '@radix-ui/themes';
import ProjectCard from './ProjectCard';

// ProjectsSection now using the ProjectCard component
const ProjectsSection: React.FC = () => {
  // Sample project data
  const projects = [
    {
      name: "Project Alpha",
      description: "Our flagship project for modern development workflows",
      url: "https://github.com/your-org/project-alpha"
    },
    {
      name: "Data Toolkit",
      description: "Comprehensive tools for data processing and analysis",
      url: "https://github.com/your-org/data-toolkit"
    },
    {
      name: "UI Components",
      description: "A library of reusable React components with accessibility built-in",
      url: "https://github.com/your-org/ui-components"
    }
  ];

  return (
    <Box
      id="projects"
      style={{ 
        width: '100%',
        padding: '32px 16px',
        backgroundColor: '#111827' // Matching the hero section background
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
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
