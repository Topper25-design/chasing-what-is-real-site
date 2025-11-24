import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';
import { createStructuredGallery } from '../utils/structuredData';

const categories = [
  'Stills',
  'Video Highlights',
  'Hunting Expeditions',
  'Freshwater Fishing Adventures',
  'Wildlife Expeditions',
];

const portfolioItems = [
  {
    id: 'still-1',
    category: 'Stills',
    type: 'image',
    src: '/images/Braai and Lightening.jpg',
    alt: 'Braai and lightning scene',
    caption: 'Braai and lightning',
  },
  {
    id: 'still-2',
    category: 'Stills',
    type: 'image',
    src: '/images/late afternoon trout session East Griqualand.jpg',
    alt: 'Late afternoon trout fishing session in East Griqualand',
    caption: 'Late afternoon trout session East Griqualand',
  },
  {
    id: 'still-3',
    category: 'Stills',
    type: 'image',
    src: '/images/Clipspringer.jpg',
    alt: 'Clipspringer wildlife photograph',
    caption: 'Clipspringer',
  },
  {
    id: 'video-1',
    category: 'Video Highlights',
    type: 'video',
    src: '/videos/Sunset timelapse.mp4',
    alt: 'Sunset timelapse',
    caption: 'Sunset timelapse',
  },
  {
    id: 'hunt-1',
    category: 'Hunting Expeditions',
    type: 'image',
    src: '/images/Buffalo hunt.jpg',
    alt: 'Buffalo hunting expedition in the African wilderness',
    caption: 'Buffalo hunt - A challenging pursuit through dense bushveld, capturing the intensity and skill required for one of Africa\'s most dangerous game animals.',
  },
  {
    id: 'hunt-2',
    category: 'Hunting Expeditions',
    type: 'image',
    src: '/images/buffalo-client-services.jpg',
    alt: 'Professional hunting expedition client services',
    caption: 'Buffalo client services - Documenting the complete hunting experience from tracking to trophy preparation, showcasing our comprehensive expedition coverage.',
  },
  {
    id: 'hunt-3',
    category: 'Hunting Expeditions',
    type: 'image',
    src: '/images/Hippo.jpg',
    alt: 'Hippo hunting expedition',
    caption: 'Hippo hunt - Capturing the unique challenges and ethical considerations of hunting one of Africa\'s most formidable aquatic mammals.',
  },
  {
    id: 'hunt-4',
    category: 'Hunting Expeditions',
    type: 'image',
    src: '/images/Kudu Hunt.jpg',
    alt: 'Kudu hunting expedition in the African bushveld',
    caption: 'Kudu hunt - Tracking the majestic greater kudu through its natural habitat, showcasing the patience and expertise required for this iconic African game species.',
  },
  {
    id: 'freshwater-1',
    category: 'Freshwater Fishing Adventures',
    type: 'image',
    src: '/images/portfolio/freshwater-catch-release.jpg',
    alt: 'Angler releasing a yellowfish back into the Orange River',
    caption: 'Catch and release yellowfish on the Orange River',
  },
  {
    id: 'freshwater-2',
    category: 'Freshwater Fishing Adventures',
    type: 'image',
    src: '/images/portfolio/freshwater-boat-dawn.jpg',
    alt: 'Fishing boat cutting across misty dam waters at dawn',
    caption: 'Mist rising off the dam at dawn',
  },
  {
    id: 'wildlife-1',
    category: 'Wildlife Expeditions',
    type: 'image',
    src: '/images/portfolio/wildlife-elephants-delta.jpg',
    alt: 'Elephant herd moving through the Okavango Delta',
    caption: 'Elephant herd in the Okavango Delta',
  },
  {
    id: 'wildlife-2',
    category: 'Wildlife Expeditions',
    type: 'image',
    src: '/images/portfolio/wildlife-riverbank-birds.jpg',
    alt: 'Bird watchers observing kingfishers on a riverbank',
    caption: 'Birdwatching along a lively riverbank',
  },
];

const siteUrl = 'https://chasingwhatisreal.com';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Stills');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const handleItemClick = (item) => {
    if (item.type === 'image') {
      setLightboxItem(item);
    }
  };

  const closeLightbox = () => setLightboxItem(null);

  const renderGrid = () => {
    if (activeCategory === 'Video Highlights') {
      return (
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filteredItems.map((item) => (
            <figure
              key={item.id}
              className="break-inside-avoid mb-6 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative">
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls
                  className="w-full h-auto"
                  aria-label={item.alt}
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 text-[#C1272D] rounded">
                  {item.category}
                </span>
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-700">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      );
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
            onClick={() => handleItemClick(item)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 text-[#C1272D] rounded">
              {item.category}
            </span>
            <figcaption className="px-4 py-3 text-sm text-gray-700">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  };

  const structuredData = useMemo(
    () => createStructuredGallery(
      portfolioItems.map((item) => ({
        ...item,
        poster: item.poster || item.src,
        uploadDate: item.uploadDate || '2025-01-01',
      })),
    ),
    [],
  );

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={structuredData} />
      <Header />
      <main className="flex-grow bg-[#D3D3D3]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#C1272D]">
            Portfolio
          </h1>
          <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12">
            Explore signature hunting expeditions, freshwater fishing adventures, and
            immersive wildlife storytelling captured through stills and cinematic video
            highlights.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-full border border-[#C1272D] transition-colors duration-200 ${
                    isActive
                      ? 'bg-[#C1272D] text-white shadow-lg'
                      : 'bg-white text-[#C1272D] hover:bg-[#C1272D] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          {renderGrid()}
        </div>
      </main>
      <Footer />

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt}
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-3 right-3 text-white text-2xl font-bold"
              aria-label="Close lightbox"
            >
              ×
            </button>
            <img
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="mt-4 text-center text-white">{lightboxItem.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
