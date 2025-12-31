
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';

const Destinations: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white text-primary-900 py-20 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">Our Destinations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore the world's most breathtaking locations, curated for the ultimate luxury experience.</p>
      </div>

      <InteractiveMap />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DESTINATIONS.map((dest) => (
            <div key={dest.id} className="bg-white shadow-lg rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative h-80 overflow-hidden">
                <Link to={`/destinations/${dest.id}`}>
                    <img 
                    src={dest.imageUrl} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </Link>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">
                    <Link to={`/destinations/${dest.id}`} className="hover:text-gold-500 transition-colors">{dest.name}</Link>
                </h3>
                <p className="text-gray-600 text-base mb-4 line-clamp-3 flex-grow">{dest.description}</p>
                
                {dest.duration && (
                  <div className="flex items-center text-gray-500 mb-6">
                    <Clock size={16} className="text-gold-500 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest">{dest.duration}</span>
                  </div>
                )}

                <Link to={`/destinations/${dest.id}`} className="block w-full text-center border border-gold-500 text-gold-600 py-3 text-sm uppercase tracking-widest font-bold hover:bg-gold-500 hover:text-white transition-colors">
                  View Itinerary
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
