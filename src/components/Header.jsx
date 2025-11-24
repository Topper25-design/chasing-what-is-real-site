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
    <header className="bg-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded -mx-2">
            <img
              src="/images/logo.png"
              alt="Chasing what is real Productions - African wildlife photography and videography"
              className={`h-20 md:h-28 lg:h-32 w-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain ${logoError ? 'hidden' : ''}`}
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
              <span className="text-xl md:text-2xl font-bold text-brand-black">
                Chasing What Is Real Productions
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  to={link.href} 
                  className="text-brand-black hover:text-brand-red transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="block text-brand-black hover:text-brand-red transition-colors duration-200 py-2 font-medium"
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

