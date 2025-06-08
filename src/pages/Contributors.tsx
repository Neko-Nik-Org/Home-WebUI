import { NavBar } from "../components/NavBar";
import {CommunityPage} from "../components/ContributorsSection"

function Contributers() {
  return (

    <>
    <NavBar />
    <div className="flex flex-col items-center justify-center h-screen">
        {/* Community Page Header */}
        <CommunityPage />
    </div>
    </>
  );
}
export default Contributers;