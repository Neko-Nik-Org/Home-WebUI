import { NavBar } from "../components/NavBar";
import {CommunityPage} from "../components/CommunitySection"
import Footer from "../components/Footer";

function Community() {
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

export default Community;
