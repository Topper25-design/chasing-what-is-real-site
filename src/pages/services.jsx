import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCamera, FaVideo, FaFish, FaMapMarkedAlt, FaPrint } from 'react-icons/fa';

const Services = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Services - Chasing What Is Real Productions | Wildlife Photography & Videography South Africa';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Professional wildlife photography, hunting videography, freshwater fishing media, expedition packages, and print sales. Full-service media solutions for lodges and charters across Africa.'
    );
  }, []);

  const services = [
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: 'Wildlife Photography',
      description: 'Professional wildlife photography capturing the raw beauty and untamed spirit of Africa\'s diverse fauna.',
      deliverables: [
        'Full-day wildlife photography shoot',
        '80+ edited high-resolution still images',
        'Print-ready files (300 DPI)',
        'Web-optimized images for digital use',
        'Color correction and professional editing',
        'Delivery via secure online gallery',
      ],
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: 'Hunting Photography & Videography',
      description: 'Comprehensive documentation of hunting expeditions with both still photography and cinematic videography.',
      deliverables: [
        'Full-day shoot covering entire expedition',
        '4K video footage (cinematic quality)',
        '100+ edited still images',
        '5-10 minute highlight video',
        'Raw footage available upon request',
        'Professional audio recording',
        'Print-ready and web-ready file formats',
      ],
    },
    {
      icon: <FaFish className="w-8 h-8" />,
      title: 'Freshwater Fishing Photography & Videography',
      description: 'Dynamic media coverage of freshwater fishing adventures, capturing the action and excitement of the catch.',
      deliverables: [
        'Full-day fishing expedition coverage',
        '4K video documentation',
        '90+ edited action stills',
        'Underwater and above-water perspectives',
        '5-8 minute promotional video',
        'Print-ready files for marketing materials',
        'Social media content packages',
      ],
    },
    {
      icon: <FaMapMarkedAlt className="w-8 h-8" />,
      title: 'Expedition Media Packages for Lodges/Hunt/Fishing Charters',
      description: 'Complete media solutions tailored for lodges, hunting operations, and fishing charters across Africa.',
      deliverables: [
        'Multi-day expedition coverage',
        'Comprehensive still photography library (200+ images)',
        '4K video production (10-15 minute documentary)',
        'Promotional video packages (30s, 60s, 90s cuts)',
        'Website and social media content',
        'Marketing material creation',
        'Branded content packages',
        'Regular content updates for ongoing operations',
      ],
    },
    {
      icon: <FaPrint className="w-8 h-8" />,
      title: 'Print Sales & Licensing',
      description: 'High-quality prints and licensing options for wildlife, hunting, and fishing imagery.',
      deliverables: [
        'Fine art prints (various sizes available)',
        'Canvas prints and gallery wraps',
        'Commercial licensing for marketing use',
        'Editorial licensing for publications',
        'Stock photography licensing',
        'Custom print packages',
        'Worldwide shipping available',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/buffalo-client-services.jpg"
              alt="Buffalo in African wilderness"
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-light drop-shadow-lg">
              Professional photography and videography services for wildlife, hunting, and freshwater fishing expeditions across Africa.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16 bg-brand-light-grey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-brand-red mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-red">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">
                      Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start text-gray-800">
                          <span className="text-brand-red mr-2 mt-1">•</span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Ready to Capture Your Adventure?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Let's discuss how we can document your wildlife, hunting, or fishing expedition with professional photography and videography.
              </p>
              <a
                href="/contact"
                className="inline-block bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

