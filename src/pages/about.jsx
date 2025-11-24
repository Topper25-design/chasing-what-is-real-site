import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCamera, FaVideo, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'About Us - Chasing What Is Real Productions | Wildlife Photography & Videography South Africa';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Based in Eastern Cape, South Africa. Professional wildlife, hunting & freshwater fishing photography and videography services for lodges and expeditions across Africa.'
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-tiger-about.jpg"
              alt="Tiger in African wilderness"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Hero image failed to load:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
            {/* Darker overlay to push image further into background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              About Us
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light drop-shadow-lg">
              Capturing the Real Moments of African Wilderness
            </p>
          </div>
        </section>

        {/* Section 1: Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                  Chasing What Is Real Productions was founded with a singular mission: to capture 
                  the raw, untamed beauty of Africa's wildlife, hunting expeditions, and freshwater 
                  fishing adventures through authentic visual storytelling.
                </p>
                <p>
                  Based in the Eastern Cape, South Africa, we are deeply rooted in the African 
                  wilderness. Our location places us at the heart of some of the continent's most 
                  spectacular wildlife habitats and fishing destinations, allowing us to document 
                  experiences that are truly authentic to the region.
                </p>
                <p>
                  Our mission is to provide wild game and fishing lodges, as well as expedition 
                  operators, with professional still photography and videography that captures 
                  the real moments—the early morning pursuit, the patient wait, the thrill of 
                  the catch, and the raw intensity of the African wilderness. We believe in 
                  capturing experiences as they happen, without artifice, letting the natural 
                  drama and beauty of each moment speak for itself.
                </p>
                <div className="flex items-center mt-8 text-gray-700">
                  <FaMapMarkerAlt className="text-brand-red mr-2" />
                  <span className="font-semibold">Eastern Cape, South Africa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Unique Value Proposition */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Unique Value Proposition
              </h2>
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                  We specialize in providing <strong>full-service still photography and videography</strong> 
                  solutions specifically tailored for wild game lodges and expedition operators across Africa. 
                  Unlike general media production companies, we understand the unique challenges and 
                  opportunities that come with documenting wildlife, hunting, and fishing experiences.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="flex items-start">
                    <FaCamera className="text-brand-red text-3xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Still Photography</h3>
                      <p className="text-gray-700">
                        High-resolution wildlife, hunting, and fishing photography that captures 
                        the intensity and beauty of each moment. Perfect for marketing materials, 
                        lodge websites, and expedition documentation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaVideo className="text-brand-red text-3xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Videography</h3>
                      <p className="text-gray-700">
                        Cinematic video production that tells the complete story of expeditions 
                        and experiences. From promotional content to full expedition documentaries, 
                        we deliver professional-grade footage.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-6">
                  Our comprehensive approach means you get both still images and video from a single 
                  shoot, ensuring consistency in style and narrative across all your media assets. 
                  We work seamlessly with lodge operations, understanding the need to document 
                  experiences without disrupting the natural flow of expeditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Gear & Process */}
        <section className="py-16 md:py-24 bg-brand-light-grey">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Gear & Field Approach
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Professional Equipment</h3>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-black mb-2">Still Photography</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Full-frame DSLR and mirrorless cameras</li>
                          <li>• Professional wildlife and telephoto lenses</li>
                          <li>• High-speed memory cards for rapid capture</li>
                          <li>• Weather-sealed equipment for field conditions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-2">Videography</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 4K and 6K video cameras</li>
                          <li>• Cinema-grade lenses and stabilization systems</li>
                          <li>• Professional audio recording equipment</li>
                          <li>• Drone capabilities for aerial footage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Our Field Approach</h3>
                  <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
                    <p>
                      Our field approach is built on understanding the rhythms of wildlife, hunting, 
                      and fishing expeditions. We work unobtrusively, positioning ourselves to 
                      capture authentic moments without interfering with the natural progression 
                      of events.
                    </p>
                    <p>
                      For <strong>still photography</strong>, we focus on composition, lighting, 
                      and timing to create images that tell a complete story. We capture the 
                      anticipation, the action, and the aftermath—creating a visual narrative 
                      that showcases the full experience.
                    </p>
                    <p>
                      For <strong>videography</strong>, we employ a documentary-style approach, 
                      capturing both wide establishing shots and intimate close-ups. We record 
                      natural audio, conduct brief interviews when appropriate, and ensure we 
                      document the complete journey from start to finish.
          </p>
          <p>
                      Whether documenting a trophy hunt, a wildlife safari, or a freshwater fishing 
                      expedition, our goal remains the same: to create media that authentically 
                      represents the experience and can be used effectively for marketing, 
                      documentation, and storytelling purposes.
          </p>
        </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

