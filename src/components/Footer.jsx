import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gray-900 text-white p-8 mt-auto relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4 bg-white p-1 rounded">
              {logoError ? (
                <span className="text-lg font-bold text-white">
                  Chasing What Is Real Productions
                </span>
              ) : (
                <img
                  src="/images/logo.png"
                  alt="Chasing what is real Productions"
                  className="h-24 md:h-28 lg:h-32 w-auto max-w-[300px] md:max-w-[350px] lg:max-w-[400px] object-contain"
                  onError={(e) => {
                    console.error('Footer logo failed to load:', e.target.src);
                    setLogoError(true);
                  }}
                />
              )}
            </Link>
            <p className="text-gray-400">Creating authentic visual stories.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="block hover:text-gray-300 transition-colors duration-200 text-gray-400 no-underline relative z-10"
                  style={{ color: '#9ca3af' }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block hover:text-gray-300 transition-colors duration-200 text-gray-400 no-underline relative z-10"
                  style={{ color: '#9ca3af' }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="block hover:text-gray-300 transition-colors duration-200 text-gray-400 no-underline relative z-10"
                  style={{ color: '#9ca3af' }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block hover:text-gray-300 transition-colors duration-200 text-gray-400 no-underline relative z-10"
                  style={{ color: '#9ca3af' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-400">Connect</h4>
            <p className="text-gray-400">Follow us on social media</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chasing What Is Real Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

