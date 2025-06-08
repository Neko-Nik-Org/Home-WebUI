import React from 'react';
import { Box, Text, Link, Avatar  ,Heading} from '@radix-ui/themes';

// Enhanced contributor data structure with matching details from screenshot
const contributors = [
	{
		username: 'Neko-Nik',
		fullName: 'Nikhil Raj',
		role: 'Organization Owner',
    bio: 'Leads the project and oversees development.',
		avatarUrl: 'https://avatars.githubusercontent.com/u/214764123?s=160&v=4'
	},
	{
		username: 'webwizard',
		fullName: 'Michael Chen',
		role: 'DevOps Engineer',
		bio: 'Manages CI/CD pipelines and deployment workflows.',
		avatarUrl: 'https://github.com/identicons/app/assets/placeholder_3.png', // Light blue pattern avatar
	},
	{
		username: 'techguru',
		fullName: 'Jamie Martinez',
		role: 'Documentation Lead',
		bio: 'Ensures comprehensive and clear documentation.',
		avatarUrl: 'https://github.com/identicons/app/assets/placeholder_4.png', // Purple pattern avatar
	},
	{
		username: 'opensourcefan',
		fullName: 'Taylor Wilson',
		role: 'Backend Developer',
		bio: 'Works on API design and server performance.',
		avatarUrl: 'https://github.com/identicons/app/assets/placeholder_5.png', // Black face avatar
	},
	{
		username: 'codecraft',
		fullName: 'Jordan Smith',
		role: 'UX Designer',
		bio: 'Focuses on creating intuitive user experiences.',
		avatarUrl: 'https://github.com/identicons/app/assets/placeholder_6.png', // Light green square avatar
	},
];

interface ContributorCardProps {
	username: string;
	fullName: string;
	role: string;
	bio: string;
	avatarUrl: string;
}

const ContributorCard: React.FC<ContributorCardProps> = ({
	username,
	fullName,
	role,
	bio,
	avatarUrl,
}) => {
	return (
		<Box
			style={{
				padding: '20px',
				backgroundColor: '#1f2937',
				borderRadius: '12px',
				border: '1px solid #374151',
				transition:
					'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
				height: '100%',
			}}
			className="contributor-card hover:border-indigo-500 hover:translate-y-[-4px] hover:shadow-lg"
		>
			<Avatar
				size="6"
				src={avatarUrl}
				alt={`${fullName}'s avatar`}
				fallback={fullName
					.split(' ')
					.map((name) => name[0])
					.join('')}
				radius="full"
				style={{ marginBottom: '16px' }}
			/>

			<Text
				size="5"
				weight="bold"
				style={{ color: 'white', marginBottom: '4px' }}
			>
				{fullName}
			</Text>

			<Text
				size="2"
				style={{ color: '#9ca3af', marginBottom: '12px' }}
			>
				{role}
			</Text>

			<Text
				size="2"
				style={{
					color: '#d1d5db',
					marginBottom: '16px',
					lineHeight: '1.5',
				}}
			>
				{bio}
			</Text>

			<Link
				href={`https://github.com/${username}`}
				target="_blank"
				rel="noopener noreferrer"
				style={{
					display: 'flex',
					alignItems: 'center',
					color: '#93c5fd',
					fontWeight: 500,
					fontSize: '14px',
					marginTop: 'auto',
				}}
				className="hover:text-blue-300"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					width="16"
					height="16"
					fill="currentColor"
					style={{ marginRight: '6px' }}
				>
					<path
						fillRule="evenodd"
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
					></path>
				</svg>
				{username}
			</Link>
		</Box>
	);
};

const ContributorsSection: React.FC = () => {
	return (
		<Box
			id="contributors"
			style={{
				width: '100%',
				padding: '60px 16px',
				backgroundColor: '#111827',
				minHeight: '100vh',
			}}
		>
			<Box style={{ maxWidth: '1200px', margin: '0 auto' }}>
				<Heading 
          size="8" 
          align="center" 
          style={{ 
            marginBottom: '32px',
            color: 'white'
          }}
        >
          Meet Our Contributors
        </Heading>


				<Box
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
						gap: '24px',
						marginBottom: '40px',
                        marginTop: '24px',
					}}
				>
					{contributors.map((contributor) => (
						<Link
							key={contributor.username}
							href={`https://github.com/${contributor.username}`}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<ContributorCard {...contributor} />
						</Link>
					))}
				</Box>

			
			</Box>
		</Box>
	);
};

export default ContributorsSection;
