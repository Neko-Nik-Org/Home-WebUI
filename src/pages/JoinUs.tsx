import { NavBar  } from "../components/NavBar";
import { Flex, Text, Link,Box} from '@radix-ui/themes';
function JoinUs() {
  return (

    <>
    <NavBar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Box
      id="projects"
      style={{ 
        width: '100%',
        padding: '32px 16px',
        backgroundColor: '#111827',
        minHeight: '100vh',
      }}
    >
      <Flex
					direction="column"
					align="center"
					style={{
						padding: '24px',
						backgroundColor: '#1f2937',
						borderRadius: '12px',
						maxWidth: '700px',
						margin: '0 auto',
					}}
				>
					<Text
						size="5"
						weight="medium"
						align="center"
						style={{
							color: 'white',
							marginBottom: '12px',
						}}
					>
						Want to join our community?
					</Text>

					<Text
						size="3"
						align="center"
						style={{
							color: '#d1d5db',
							marginBottom: '20px',
						}}
					>
						We welcome contributors of all experience levels. From code to
						documentation, every contribution matters!
					</Text>

					<Link
						href="https://github.com/Neko-Nik-Org"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'inline-flex',
							alignItems: 'center',
							backgroundColor: '#6366f1',
							color: 'white',
							padding: '12px 24px',
							borderRadius: '8px',
							textDecoration: 'none',
							fontWeight: 500,
							transition: 'background-color 0.2s ease',
						}}
						className="hover:bg-indigo-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							width="18"
							height="18"
							fill="currentColor"
							style={{ marginRight: '8px' }}
						>
							<path
								fillRule="evenodd"
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path>
						</svg>
						Contribute on GitHub
					</Link>
	</Flex>
    </Box>
          

    </div>
    </>
    
  );
}
export default JoinUs;