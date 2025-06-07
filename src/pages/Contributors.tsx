import ContributorsSection from "../components/ContributorsSection";
import { NavBar } from "../components/NavBar";

function Contributers() {
  return (

    <>
    <NavBar />
    <div className="flex flex-col items-center justify-center h-screen">
        {/* Contributors Section */}
        <ContributorsSection />
    </div>
    </>
  );
}
export default Contributers;