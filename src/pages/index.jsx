import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="bg-white">
        <HeroSection />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

