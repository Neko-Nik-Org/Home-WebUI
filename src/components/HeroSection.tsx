import { Box, Flex, Text, Link } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <Box 
      style={{ 
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      px={{ initial: '4', sm: '6', md: '8' }}
      className="relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Gradient */}
      <Box 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
          transition: "all 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Enhanced SVG Background Pattern */}
      <Box style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%2364748b' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E")`,
      }} />
      
      {/* Floating Particles */}
      <Box style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      }}>
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            style={{
              position: "absolute",
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: "#6366f1",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </Box>

      <Flex 
        direction="column" 
        align="center" 
        justify="center" 
        maxWidth="900px" 
        mx="auto" 
        py={{ initial: '8', sm: '10', md: '12' }}
        style={{
          zIndex: 2,
          position: "relative"
        }}
      >
        {/* Enhanced Tagline with Badge */}
        <Box
          mb="4"
          style={{
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            borderRadius: "20px",
            padding: "8px 16px",
            backdropFilter: "blur(10px)",
          }}
          className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <Text 
            size="2" 
            style={{ 
              color: "#a5b4fc",
              fontWeight: 500,
              letterSpacing: "0.5px"
            }}
          >
            🚀 Neko-Nik Open Source
          </Text>
        </Box>
        
        {/* Enhanced Main Heading with Gradient Text */}
        <Text 
          size={{ initial: '8', sm: '9', md: '9' }}
          weight="bold" 
          align="center"
          mb="6" 
          style={{ 
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}
          className={`transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          Empowering Open Source
          <br />
          <span style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Innovation
          </span>
        </Text>
        
        {/* Enhanced Description */}
        <Text 
          size={{ initial: '4', sm: '5' }}
          style={{ 
            color: "#94a3b8", 
            maxWidth: "650px",
            lineHeight: "1.6",
            fontWeight: 400,
            marginBottom: '24px',
          }}  
          align="center" 
          mb={{ initial: '8', sm: '10' }}
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          We build developer tools and libraries that help the community create
          better software. Join us in shaping the future of open source development
          with cutting-edge solutions and collaborative innovation.
        </Text>
        
        {/* Enhanced Action Buttons */}
        <Flex 
          gap="4" 
          direction={{ initial: 'column', sm: 'row' }}
          width={{ initial: '100%', sm: 'auto' }}
          className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link 
            href="/projects" 
            style={{ 
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', 
              color: 'white', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: 600, 
              textDecoration: 'none', 
              display: 'inline-block',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.3)',
              fontSize: '16px',
              letterSpacing: '0.5px',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="hero-button group hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Explore Projects</span>
            <Box
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transition: 'left 0.5s',
              }}
              className="group-hover:left-full"
            />
          </Link>
          
          <Link 
            href="https://github.com/Neko-Nik-Org" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.8)', 
              color: '#ffffff', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: 600, 
              textDecoration: 'none',
              border: '1px solid rgba(100, 116, 139, 0.3)',
              display: 'inline-block',
              textAlign: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              fontSize: '16px',
              letterSpacing: '0.5px',
            }}
            className="hero-button hover:bg-slate-700 hover:border-indigo-400 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Join Us on GitHub
          </Link>
        </Flex>

      </Flex>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .hero-button {
          transform-origin: center;
        }
        
        .group:hover .group-hover\\:left-full {
          left: 100% !important;
        }
      `}</style>
    </Box>
  );
};

export default HeroSection; 
