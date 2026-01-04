
import React, { useState } from 'react';
import { PILGRIMAGE_SITES } from '../constants';
import { Link } from 'react-router-dom';

// Pilgrimage Card Component with image error handling
const PilgrimageCard: React.FC<{ site: typeof PILGRIMAGE_SITES[0] }> = ({ site }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-[12px] overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
        {!imageError ? (
          <img 
            src={site.imageUrl} 
            alt={site.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-amber-600 font-serif font-bold text-xl text-center px-4">{site.name}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-amber-600 mb-2">{site.name}</h3>
        <p className="text-gray-600 text-base mb-6 line-clamp-3 flex-grow leading-relaxed">{site.description}</p>
        
        <Link to="/contact" className="block w-full text-center border border-amber-500 text-amber-600 py-3 text-sm uppercase tracking-widest font-bold hover:bg-amber-500 hover:text-white transition-colors rounded-[6px]">
          Plan Yatra
        </Link>
      </div>
    </div>
  );
};

const DivyaPath: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] bg-amber-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/temple/1920/600" alt="Spiritual" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-amber-600 font-serif italic text-2xl mb-2 block">Divya Path</span>
          <h1 className="text-5xl font-serif font-bold text-primary-900 mb-6">Sacred Pilgrimages</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Journeys to the holiest shrines, curated with reverence, comfort, and peace of mind.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-xl text-gray-600 leading-relaxed italic font-serif max-w-3xl mx-auto">
          "The journey to the divine is the most important journey of all. Let us handle the worldly details while you focus on the spiritual."
        </p>
      </div>

      {/* Sites Grid */}
      <div className="bg-white pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PILGRIMAGE_SITES.map((site) => (
              <PilgrimageCard key={site.id} site={site} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-600 py-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">Start Your Spiritual Awakening</h2>
          <Link to="/contact" className="bg-white text-amber-600 px-8 py-3 uppercase tracking-widest font-bold hover:bg-primary-900 hover:text-white transition-colors shadow-lg rounded-[6px]">
            Enquire Now
          </Link>
      </div>
    </div>
  );
};

export default DivyaPath;
