import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-brand-black sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded -mx-2 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="Chasing what is real Productions - African wildlife photography and videography"
              className={`h-12 sm:h-16 md:h-24 lg:h-28 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[400px] lg:max-w-[500px] object-contain ${logoError ? 'hidden' : ''}`}
              onError={(e) => {
                console.error('❌ Logo failed to load');
                console.error('Attempted URL:', e.target.src);
                console.error('Expected path: /images/logo.png');
                console.error('Please verify the file exists at: public/images/logo.png');
                setLogoError(true);
              }}
              onLoad={() => {
                console.log('✅ Logo loaded successfully!');
                setLogoLoaded(true);
              }}
            />
            {logoError && (
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                Chasing What Is Real Productions
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="text-white hover:text-brand-red transition-colors duration-200 font-medium text-base lg:text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded p-2 transition-colors duration-200 flex-shrink-0"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-700 mt-2 pt-4 animate-fadeIn">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="block text-white hover:text-brand-red transition-colors duration-200 py-3 px-2 font-medium text-lg rounded hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

