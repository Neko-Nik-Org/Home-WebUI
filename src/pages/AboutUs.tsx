import { NavBar  } from "../components/NavBar";
import { Flex, Text, Box } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
function AboutUs() {
     const [isVisible, setIsVisible] = useState(false);
     useEffect(() => {
        setIsVisible(true);
      }, []);
  return (

    <>
   <NavBar />
    <div>
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
       backgroundColor: '#111827',
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
      
        
        <Text 
          size={{ initial: '7', sm: '8', md: '9' }}
          weight="bold" 
          align="center"
          mb="4" 
          style={{ color: "white" }}
          className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          What  is Our Vision 
        </Text>
        
        <Text 
          size={{ initial: '3', sm: '4' }}
          style={{ color: "#d1d5db", maxWidth: "600px" }}  
          align="center" 
          mb={{ initial: '5', sm: '6' }}
          className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >             
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis doloremque odit modi nostrum debitis, maxime officia neque cupiditate accusamus beatae facilis quod nisi, illo dolor obcaecati nesciunt ab ullam harum.
        </Text>
        
       
      </Flex>
    </Box>
    </div>
     </>
  );
}
export default AboutUs;