import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-sunset-african-landscape.jpg"
          alt="Sunset over African landscape with camera"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Hero image failed to load:', e.target.src);
            e.target.style.display = 'none';
          }}
        />
        {/* Darker overlay to push image further into background while preserving sunset colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
          Chasing What Is Real Productions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 sm:mb-8 font-light drop-shadow-lg px-2">
          Wildlife, Hunting & Freshwater Fishing Photography & Videography (Africa)
        </p>
        <Link 
          to="/portfolio" 
          className="inline-block bg-brand-red hover:bg-brand-dark-red text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-300 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[44px] flex items-center justify-center"
        >
          View Portfolio
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

