import { NavBar } from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import ContributorsSection from '../components/ContributorsSection'

function Home() {

  return (
    <>
    
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contributors Section */}
      <ContributorsSection />
      
  
    
    </>
  );
}

export default Home;
