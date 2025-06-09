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
  const getStatusConfig = () => {
    switch (status.toLowerCase()) {
      case 'active':
        return { color: '#10b981', bg: '#065f46', glow: 'rgba(16, 185, 129, 0.3)' };
      case 'in progress':
        return { color: '#f59e0b', bg: '#92400e', glow: 'rgba(245, 158, 11, 0.3)' };
      case 'archived':
        return { color: '#6b7280', bg: '#374151', glow: 'rgba(107, 114, 128, 0.3)' };
      default:
        return { color: '#3b82f6', bg: '#1e40af', glow: 'rgba(59, 130, 246, 0.3)' };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Box
      className="project-card"
      p="5"
      style={{
        position: 'relative',
        border: isHovered ? '1px solid #6366f1' : '1px solid #374151',
        borderRadius: '16px',
        background: isHovered 
          ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
          : 'linear-gradient(135deg, #1f2937 0%, #0f172a 100%)',
        boxShadow: isHovered
          ? `0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
          : '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255, 255, 255, 0.02)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: url ? 'pointer' : 'default',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease'
        }}
      />

      {/* Header with title and status */}
      <Box style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '16px',
        position: 'relative',
        zIndex: 1
      }}>
        <Text 
          size="6" 
          weight="bold" 
          style={{ 
            color: isHovered ? '#c7d2fe' : '#a5b4fc',
            transition: 'color 0.3s ease',
            lineHeight: '1.2',
            maxWidth: '70%'
          }}
        >
          {name}
        </Text>
        <Box
          style={{
            position: 'relative',
            backgroundColor: statusConfig.bg,
            color: statusConfig.color,
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: `0 0 12px ${statusConfig.glow}`,
            border: `1px solid ${statusConfig.color}30`,
            minWidth: 'fit-content'
          }}
        >
          {status}
        </Box>
      </Box>

      {/* Description */}
      <Text 
        size="3" 
        style={{ 
          color: '#d1d5db',
          lineHeight: '1.6',
          marginBottom: '20px',
          transition: 'color 0.3s ease'
        }}
      >
        {description}
      </Text>

      {/* Tags */}
      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px'
        }}
      >
        {tags.map((tag, index) => (
          <Box
            key={index}
            style={{
              backgroundColor: isHovered ? '#4338ca20' : '#374151',
              color: isHovered ? '#c7d2fe' : '#d1d5db',
              fontSize: '12px',
              fontWeight: '500',
              padding: '6px 12px',
              borderRadius: '8px',
              border: isHovered ? '1px solid #4338ca40' : '1px solid transparent',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(8px)'
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>

      {/* Footer - Link or Coming Soon */}
      <Box style={{ marginTop: 'auto' }}>
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: isHovered ? '#818cf8' : '#93c5fd',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
              padding: '8px 0',
              transition: 'all 0.3s ease',
              borderBottom: isHovered ? '2px solid #818cf8' : '2px solid transparent'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: '8px' }}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ 
                marginLeft: '6px',
                transform: isHovered ? 'translate(2px, -2px)' : 'none',
                transition: 'transform 0.3s ease'
              }}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7,7 17,7 17,17" />
            </svg>
          </Link>
        ) : (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#fbbf24',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 12px',
              backgroundColor: '#fbbf2415',
              border: '1px solid #fbbf2430',
              borderRadius: '8px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <span style={{ marginRight: '8px', fontSize: '16px' }}>🚧</span>
            Repository coming soon
          </Box>
        )}
      </Box>
    </Box>
  );
};


export default ProjectCard;
