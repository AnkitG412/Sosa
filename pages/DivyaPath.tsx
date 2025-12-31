
import React from 'react';
import { PILGRIMAGE_SITES } from '../constants';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PILGRIMAGE_SITES.map((site) => (
              <div key={site.id} className="group bg-white rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                   <img 
                    src={site.imageUrl} 
                    alt={site.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-amber-600 mb-3">{site.name}</h3>
                  <div className="w-12 h-0.5 bg-amber-200 mx-auto mb-4"></div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{site.description}</p>
                  
                  {site.duration && (
                    <div className="flex items-center justify-center text-gray-500 mb-6 font-sans">
                      <Clock size={16} className="text-amber-500 mr-2" />
                      <span className="text-xs font-bold uppercase tracking-widest">{site.duration}</span>
                    </div>
                  )}

                  <div>
                    <Link to="/contact" className="inline-block text-primary-900 font-bold uppercase text-xs tracking-widest border-b-2 border-amber-500 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">
                        Plan Yatra
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-600 py-16 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-6">Start Your Spiritual Awakening</h2>
          <Link to="/contact" className="bg-white text-amber-600 px-8 py-3 uppercase tracking-widest font-bold hover:bg-primary-900 hover:text-white transition-colors shadow-lg">
            Enquire Now
          </Link>
      </div>
    </div>
  );
};

export default DivyaPath;
