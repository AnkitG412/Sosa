
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <div key={dest.id} className="group relative h-[500px] rounded-[12px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-900">
                <Link to={`/destinations/${dest.id}`} className="block h-full w-full relative">
                    
                    {/* Background Image */}
                    <img 
                      src={dest.imageUrl} 
                      alt={dest.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Content Layer */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {/* Tag */}
                            {dest.tag ? (
                                <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 inline-block">
                                    {dest.tag}
                                </span>
                            ) : (
                                <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3 inline-block">
                                    Premium
                                </span>
                            )}
                            
                            {/* Title */}
                            <h3 className="text-4xl font-serif font-bold text-white mb-3 drop-shadow-md">
                                {dest.name}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-2 opacity-90">
                                {dest.description}
                            </p>
                            
                            {/* CTA */}
                            <div className="inline-block border-b border-gold-500 pb-1 text-white text-xs font-bold uppercase tracking-widest group-hover:text-gold-400 group-hover:border-gold-400 transition-colors">
                                Discover More
                            </div>
                        </div>
                    </div>
                </Link>
                
                {/* Share Button (Top Right) */}
                <button
                    onClick={(e) => handleShare(e, dest)}
                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-white hover:text-primary-900 transition-all shadow-lg z-30 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 duration-300 border border-white/20"
                    title="Share"
                >
                    <Share2 size={18} />
                </button>
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
