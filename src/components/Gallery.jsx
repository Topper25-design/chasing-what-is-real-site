import React, { useState, useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// List of all gallery images (excluding logo.png)
const galleryImages = [
  { src: '/images/Braai and Lightening.jpg', alt: 'Braai and lightning scene' },
  { src: '/images/buffalo-client-services.jpg', alt: 'Buffalo client services' },
  { src: '/images/Clipspringer.jpg', alt: 'Clipspringer wildlife photograph' },
  { src: '/images/hero-sunset-african-landscape.jpg', alt: 'Sunset African landscape' },
  { src: '/images/hero-tiger-about.jpg', alt: 'Tiger wildlife photograph' },
  { src: '/images/Hippo.jpg', alt: 'Hippo wildlife photograph' },
  { src: '/images/Kudu Hunt.jpg', alt: 'Kudu hunting expedition' },
  { src: '/images/late afternoon trout session East Griqualand.jpg', alt: 'Late afternoon trout fishing session in East Griqualand' },
];

const Gallery = ({ images = [] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  
  // Use provided images prop if available, otherwise use default gallery images
  const displayImages = images.length > 0 ? images : galleryImages;

  const openFullscreen = (index) => {
    setSelectedImageIndex(index);
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const navigateImage = (direction) => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev + 1) % displayImages.length);
    } else {
      setSelectedImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFullscreenOpen) return;
      
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % displayImages.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen, displayImages.length]);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayImages.length > 0 ? (
              displayImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                  onClick={() => openFullscreen(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                      Click to view
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No images to display</p>
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreenOpen && selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
            aria-label="Close fullscreen"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          {displayImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70"
                aria-label="Next image"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayImages[selectedImageIndex].src}
              alt={displayImages[selectedImageIndex].alt || `Gallery image ${selectedImageIndex + 1}`}
              className="max-w-[100vw] max-h-[100vh] w-auto h-auto object-contain"
            />
            
            {/* Logo Watermark - No background canvas */}
            <div className="absolute bottom-4 right-4 opacity-60 pointer-events-none z-10">
              <img
                src="/images/logo.png"
                alt="Chasing what is real Productions logo"
                className="h-16 md:h-20 lg:h-24 w-auto"
              />
            </div>
          </div>

          {/* Image Counter */}
          {displayImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded z-20">
              {selectedImageIndex + 1} / {displayImages.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;

