import { NavBar  } from "../components/NavBar";
import { Text,Box ,Heading} from '@radix-ui/themes';
import ContributorCard from "../components/ContributerCard"
import contributors from "../data/contributors.json"; 
function OurTeam() {
  return (

    <>
    <NavBar/>
    {/* Contributors Section */}
      <Box
        id="contributors"
        style={{
          padding: "80px 16px",
          backgroundColor: "#111827",
        }}
      >
        <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Box style={{ textAlign: "center", marginBottom: "60px" }}>
            <Heading
              size="9"
              style={{
                marginBottom: "16px",
                color: "white",
              }}
            >
              Meet Our Team
            </Heading>
            <Text
              size="4"
              style={{
                color: "#9ca3af",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Talented individuals who make this project possible through their
              dedication and expertise
            </Text>
          </Box>

          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {contributors.map((contributor) => (
              <ContributorCard key={contributor.username} {...contributor} />
            ))}
          </Box>
        </Box>
      </Box>

    </>
    
  );
}
export default OurTeam;