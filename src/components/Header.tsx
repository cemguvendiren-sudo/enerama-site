import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath?: string;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products' },
  { href: '/how-we-work', label: 'How We Work' },
  { href: '/applications', label: 'Applications' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/investors', label: 'Investors' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ currentPath = '' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(currentPath);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActivePath(window.location.pathname);
    }
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return activePath === '/' || activePath === '';
    return activePath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="https://cdn.prod.website-files.com/69c9538c5e6a6b66c71a24ee/69c992866f0ef04c0f6599ed_Enerama.jpg"
              alt="Enerama Environmental Technologies"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-gray-700 hover:text-[#1B3A6B]'
                }`}
                style={
                  isActive(link.href)
                    ? { backgroundColor: '#1B3A6B' }
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-md shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E07B39' }}
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#1B3A6B] hover:bg-gray-100 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={
                  isActive(link.href)
                    ? { backgroundColor: '#1B3A6B' }
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="block mt-3 px-3 py-2 text-base font-semibold text-white rounded-md text-center"
              style={{ backgroundColor: '#E07B39' }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
