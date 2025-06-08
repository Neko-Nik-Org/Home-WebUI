import ProjectsSection from '../components/ProjectsSection'
import { NavBar  } from '../components/NavBar';
import Footer from '../components/Footer';
function Projects() {
  return (

    <>
    <NavBar/>
    <div className="flex flex-col items-center justify-center h-full">
       {/* Projects Section */}
      <ProjectsSection />

    </div>
    <Footer />
    </>

  );
}
export default Projects;
