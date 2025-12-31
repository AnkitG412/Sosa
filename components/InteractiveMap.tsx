
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';

const InteractiveMap: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  return (
    <div className="w-full bg-cream py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-serif font-bold text-primary-900 mb-2">Global Presence</h2>
           <p className="text-gray-500 text-sm uppercase tracking-widest">Select a destination to explore</p>
        </div>

        <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden bg-[#e5e7eb] border-4 border-white">
          {/* Real World Map Image */}
          <div className="absolute inset-0 w-full h-full">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
               alt="World Map" 
               className="w-full h-full object-cover opacity-60 grayscale sepia-[.3]"
             />
             {/* Gradient Overlay for subtle depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Destination Markers */}
          {DESTINATIONS.filter(d => d.coordinates).map((dest) => (
            <div
              key={dest.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              style={{
                left: `${dest.coordinates?.x}%`,
                top: `${dest.coordinates?.y}%`,
              }}
              onMouseEnter={() => setActivePin(dest.id)}
              onMouseLeave={() => setActivePin(null)}
            >
              <Link to={`/destinations/${dest.id}`}>
                {/* Pulsing Effect */}
                <div className="relative flex items-center justify-center w-6 h-6">
                  <span className="absolute w-full h-full bg-gold-500 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative w-3 h-3 bg-gold-600 border-2 border-white rounded-full shadow-sm"></span>
                </div>
              </Link>
              
              {/* Tooltip */}
              <div 
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-primary-900 text-white text-xs font-bold uppercase tracking-widest px-3 py-2 rounded shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none z-20 ${
                    activePin === dest.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                {dest.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-primary-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
