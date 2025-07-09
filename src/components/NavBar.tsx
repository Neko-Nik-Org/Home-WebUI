import { useState } from 'react';
import { Box, Flex, Text, Link } from '@radix-ui/themes';
import NikLPkgMgrLogo from '/cat.png';


type NavButtonProps = {
  name: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const DisplayNavButton = ({ name, href, external = false, onClick }: NavButtonProps) => {
    const isActive = !external && window.location.pathname === href;
    return (
      <Link 
        href={href}
        underline="none"
        weight="medium"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        style={{ 
          padding: '8px 12px',
          borderRadius: '6px',
          color: isActive ? '#6366f1' : '#d1d5db',
          backgroundColor: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
          transition: 'all 0.2s ease'
        }}
        className="hover:text-indigo-400 hover:bg-gray-800"
      >
        {name}
      </Link>
    );
  };

  return (
    <Box
      as="div"
      width="100%"
      px="4"
      py="3"
      position="sticky"
      top="0"
      style={{
        backgroundColor: '#111827',
        borderBottom: '1px solid #1f2937',
        zIndex: 50,
      }}>
      <Flex justify="between" align="center">
        {/* Logo and Title */}
        <Flex align="center" gap="2" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
          <img src={NikLPkgMgrLogo} alt="Nik-Lang Package Manager Logo" style={{ height: '24px', width: '24px' }} />
          <Text as="span" weight="bold" size="4" style={{ color: 'white' }}>
            Neko Nik Organization
          </Text>
        </Flex>

        {/* Desktop Navigation */}
        <Flex gap="4" align="center" display={{ initial: 'none', md: 'flex' }}>
          <DisplayNavButton name="Home" href="/" />
          <DisplayNavButton name="Projects" href="/projects" />
          <DisplayNavButton name="Our Team" href="/team" />
          <DisplayNavButton name="Community" href="/community" />
          <DisplayNavButton name="About Us" href="/about" />
          <Link 
            href="https://github.com/Neko-Nik-Org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: '#4f46e5',
              color: 'white',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
            className="hover:bg-indigo-600"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            GitHub
          </Link>
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ initial: 'block', md: 'none' }}>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'white',
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                // X icon when menu is open
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                // Hamburger icon when menu is closed
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </Box>
      </Flex>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <Box 
          py="3" 
          display={{ initial: 'block', md: 'none' }}
          style={{
            borderTop: '1px solid #1f2937',
            backgroundColor: '#151e2c',
          }}
        >
          <Flex direction="column" gap="2">

             <DisplayNavButton name="Home" href="/" onClick={closeMenu} />
          <DisplayNavButton name="Projects" href="/projects" onClick={closeMenu} />
          <DisplayNavButton name="Our Team" href="/team" />
          <DisplayNavButton name="Community" href="/community" onClick={closeMenu} />
          <DisplayNavButton name="About Us" href="/about" />
            <DisplayNavButton 
              name="GitHub" 
              href="https://github.com/Neko-Nik-Org" 
              external={true} 
              onClick={closeMenu} 
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
}
