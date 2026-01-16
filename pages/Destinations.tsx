
import React from 'react';
import { DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';
import Reveal from '../components/Reveal';

const Destinations: React.FC = () => {
  const handleShare = (e: React.MouseEvent, dest: typeof DESTINATIONS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/#/destinations/${dest.id}`;
    const text = `Explore ${dest.name} with SOSA Travelz`;

    if (navigator.share) {
      navigator.share({
        title: dest.name,
        text: text,
        url: url,
      }).catch((err) => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-white text-primary-900 py-20 text-center">
        <Reveal>
          <h1 className="text-5xl font-serif font-bold mb-4">Our Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore the world's most breathtaking locations, curated for the ultimate luxury experience.</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DESTINATIONS.map((dest) => (
              <div key={dest.id} className="bg-white shadow-lg rounded-[12px] overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="relative h-80 overflow-hidden">
                  <Link to={`/destinations/${dest.id}`}>
                      <img 
                      src={dest.imageUrl} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </Link>
                  <button
                    onClick={(e) => handleShare(e, dest)}
                    className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full text-primary-900 hover:text-gold-500 hover:bg-white transition-all shadow-md z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300"
                    title="Share"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">
                      <Link to={`/destinations/${dest.id}`} className="hover:text-gold-500 transition-colors">{dest.name}</Link>
                  </h3>
                  <p className="text-gray-600 text-base mb-8 line-clamp-3 flex-grow">{dest.description}</p>
                  
                  <Link to={`/destinations/${dest.id}`} className="block w-full text-center border border-gold-500 text-gold-600 py-3 text-sm uppercase tracking-widest font-bold hover:bg-gold-500 hover:text-white transition-colors rounded-[6px]">
                    View Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal>
        <InteractiveMap />
      </Reveal>
    </div>
  );
};

export default Destinations;
