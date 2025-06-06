import { Box, Text, Link } from '@radix-ui/themes';
import { useState } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
}

const ProjectCard = ({ name, description, url }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Box 
      className="project-card"
      p="4" 
      style={{
        border: isHovered ? '1px solid #6366f1' : '1px solid #374151',
        borderRadius: '8px',
        backgroundColor: '#1f2937',
        boxShadow: isHovered ? '0 8px 12px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.2)',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    >
      <Text 
        size="5" 
        weight="medium" 
        mb="2" 
        style={{ color: '#a5b4fc' }} // Lighter indigo color for dark background
      >
        {name}
      </Text>
      
      <Text 
        size="3" 
        style={{ color: '#d1d5db', marginBottom: '12px', fontSize: '16px' }} // Lighter text for dark background
      >
        {description}
      </Text>
      
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="project-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          color: '#93c5fd', // Light blue for better contrast on dark
          fontWeight: 500,
          fontSize: '15px',
          marginTop: 'auto' // Push link to bottom of card
        }}
      >
        View on GitHub
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ marginLeft: '6px' }}
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </Link>
    </Box>
  );
};

export default ProjectCard;
