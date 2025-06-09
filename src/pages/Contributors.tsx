import { NavBar } from "../components/NavBar";
import {CommunityPage} from "../components/ContributorsSection"
import Footer from "../components/Footer";

function Contributers() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
          {/* Community Page Header */}
          <CommunityPage />
      </div>

      <Footer />
    </>
  );
}

export default Contributers;
