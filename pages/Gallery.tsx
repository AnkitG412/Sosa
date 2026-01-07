
import React from 'react';
import { SITE_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const images = SITE_IMAGES.gallery;

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white text-primary-900 py-16 text-center">
        <h1 className="text-5xl font-serif font-bold">Visual Stories</h1>
        <p className="text-gray-500 mt-4">Glimpses of the unforgettable.</p>
      </div>
      <div className="container mx-auto px-6 py-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-[12px] shadow-xl">
            <img src={src} alt={`Gallery ${index}`} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif italic text-lg tracking-wider">Explore</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
