// filepath: /run/media/viraj-dev/Viraj Local Drive/Open Source/NIKL-Packages-UI (Copy)/src/components/HeroSection.tsx
import { Box, Flex, Text, Link } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box 
      style={{ 
        minHeight: "100vh",
        backgroundColor: "#111827",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
      px={{ initial: '2', sm: '4', md: '6' }}
      className="relative"
    >
      {/* SVG Background Pattern */}
      <Box style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.07,
        zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />
      
      <Flex 
        direction="column" 
        align="center" 
        justify="center" 
        maxWidth="800px" 
        mx="auto" 
        py={{ initial: '6', sm: '8', md: '9' }}
        style={{
          zIndex: 1,
          position: "relative"
        }}
      >
        {/* Added tagline */}
        <Text 
          size="2" 
          style={{ color: "#6b7280" }}
          mb="2"
          className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          Neko-Nik Open Source
        </Text>
        
        <Text 
          size={{ initial: '7', sm: '8', md: '9' }}
          weight="bold" 
          align="center"
          mb="4" 
          style={{ color: "white" }}
          className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          Empowering Open Source Innovation
        </Text>
        
        <Text 
          size={{ initial: '3', sm: '4' }}
          style={{ color: "#d1d5db", maxWidth: "600px" }}  
          align="center" 
          mb={{ initial: '5', sm: '6' }}
          className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          We build developer tools and libraries that help the community create
          better software. Join us in shaping the future of open source development.
        </Text>
        
        <Flex 
          gap="4" 
          direction={{ initial: 'column', sm: 'row' }}
          width={{ initial: '100%', sm: 'auto' }}
          className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link 
            href="/projects" 
            style={{ 
              backgroundColor: '#4f46e5', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: 500, 
              textDecoration: 'none', 
              display: 'inline-block',
              textAlign: 'center',
              transition: 'background-color 0.2s ease-in-out',
            }}
            className="hero-button hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Explore Projects
          </Link>
          
          <Link 
            href="https://github.com/Neko-Nik-Org" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: '#1f2937', 
              color: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: 500, 
              textDecoration: 'none',
              border: '1px solid #374151',
              display: 'inline-block',
              textAlign: 'center',
              transition: 'all 0.2s ease-in-out',
            }}
            className="hero-button hover:bg-gray-800 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Join Us on GitHub
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;
