import { Box, Text, Link } from '@radix-ui/themes';
import { useState } from 'react';

interface ProjectCardProps {
  name: string;
  description: string;
  url?: string;
  status: string;
  tags: string[];
}

const ProjectCard = ({ name, description, url, status, tags }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#10b981'; // green
      case 'in progress':
        return '#f59e0b'; // amber
      case 'archived':
        return '#6b7280'; // gray
      default:
        return '#3b82f6'; // blue
    }
  };

  return (
    <Box
      p="4"
      style={{
        border: isHovered ? '1px solid #6366f1' : '1px solid #334155',
        borderRadius: '12px',
        backgroundColor: '#1e293b',
        boxShadow: isHovered
          ? '0 10px 20px rgba(0,0,0,0.35)'
          : '0 4px 10px rgba(0,0,0,0.2)',
        transform: isHovered ? 'translateY(-6px)' : 'none',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: url ? 'pointer' : 'default'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      {/* Title and Status */}
      <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="5" weight="medium" style={{ color: '#a5b4fc' }}>
          {name}
        </Text>
        <Text
          size="2"
          style={{
            backgroundColor: getStatusColor(),
            color: '#fff',
            padding: '2px 8px',
            borderRadius: '8px',
            fontSize: '12px',
            marginLeft: '8px'
          }}
        >
          {status}
        </Text>
      </Box>

      {/* Description */}
      <Text size="3" style={{ color: '#e5e7eb', margin: '12px 0' }}>
        {description}
      </Text>

      {/* Tags */}
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '12px'
        }}
      >
        {tags.map((tag, index) => (
          <Box
            key={index}
            style={{
              backgroundColor: '#374151',
              color: '#d1d5db',
              fontSize: '12px',
              padding: '2px 8px',
              borderRadius: '6px'
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>

      {/* Link */}
      {url ? (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#93c5fd',
            fontWeight: 500,
            fontSize: '15px',
            marginTop: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
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
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Link>
      ) : (
        <Text
          size="2"
          style={{
            marginTop: 'auto',
            color: '#f87171',
            fontStyle: 'italic'
          }}
        >
          🚧 Repo coming soon
        </Text>
      )}

    </Box>
  );
};

export default ProjectCard;
