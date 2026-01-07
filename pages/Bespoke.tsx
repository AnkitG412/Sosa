
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Calendar, UserCheck, Shield, ArrowRight, Share2 } from 'lucide-react';
import { DESTINATIONS, SITE_IMAGES } from '../constants';

const Bespoke: React.FC = () => {
  const handleShare = (e: React.MouseEvent, dest: typeof DESTINATIONS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/#/destinations/${dest.id}`;
    const text = `Bespoke journey idea: ${dest.name} on SOSA Travelz`;

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
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img src={SITE_IMAGES.bespoke.hero} className="absolute inset-0 w-full h-full object-cover" alt="Bespoke" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="text-gold-400 uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Tailored For You</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Bespoke Journeys</h1>
          <p className="text-xl max-w-2xl mx-auto font-light">Your desires, our blueprint. We craft unique itineraries that reflect your personal style of travel.</p>
        </div>
      </div>

      {/* Process */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">How We Design Your Trip</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              At SOSA Travelz, we believe no two travelers are alike. Our Bespoke service is dedicated to crafting a journey that fits you like a glove. Whether it's a private island takeover, a culinary tour of Italy, or an expedition to Antarctica, we make it happen.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-gold-600">
                  <UserCheck />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 uppercase tracking-wide">1. Consultation</h4>
                  <p className="text-gray-500 text-sm">We listen to your dreams, preferences, and pace.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-gold-600">
                  <Compass />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 uppercase tracking-wide">2. Curation</h4>
                  <p className="text-gray-500 text-sm">Our experts design a preliminary itinerary for your review.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-gold-600">
                  <Calendar />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 uppercase tracking-wide">3. Execution</h4>
                  <p className="text-gray-500 text-sm">We handle all bookings, logistics, and special requests.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cream rounded-full flex items-center justify-center text-gold-600">
                  <Shield />
                </div>
                <div>
                  <h4 className="font-bold text-primary-900 uppercase tracking-wide">4. Support</h4>
                  <p className="text-gray-500 text-sm">24/7 concierge support throughout your journey.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/contact" className="bg-primary-900 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-gold-500 transition-colors shadow-lg rounded-[6px]">
                Request Custom Planning
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <img src={SITE_IMAGES.bespoke.process1} className="w-full h-full object-cover rounded-[12px] shadow-lg mt-12" alt="Details" />
             <img src={SITE_IMAGES.bespoke.process2} className="w-full h-full object-cover rounded-[12px] shadow-lg" alt="Details" />
          </div>
        </div>
      </div>

      {/* Curated Inspirations Section */}
      <div className="bg-cream py-24">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Curated Inspirations</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore some of our most requested bespoke experiences. Use these as a starting point for your own unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map((dest) => (
               <Link key={dest.id} to={`/destinations/${dest.id}`} className="group block bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[12px] overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                     <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                     <div className="absolute top-4 right-4 bg-primary-900/90 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-sm rounded-sm">
                        Customize
                     </div>
                     <button
                        onClick={(e) => handleShare(e, dest)}
                        className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full text-primary-900 hover:text-gold-500 hover:bg-white transition-all shadow-md z-10 opacity-0 group-hover:opacity-100 duration-300"
                        title="Share"
                      >
                        <Share2 size={16} />
                      </button>
                  </div>
                  <div className="p-6">
                     <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2 group-hover:text-gold-500 transition-colors">{dest.name}</h3>
                     <p className="text-gray-600 mb-4 line-clamp-2">{dest.longDescription || dest.description}</p>
                     <span className="flex items-center text-sm font-bold uppercase tracking-widest text-gold-600 group-hover:text-primary-900 transition-colors">
                        View Sample Itinerary <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform"/>
                     </span>
                  </div>
               </Link>
            ))}
          </div>
           
           <div className="text-center mt-12">
            <Link to="/destinations" className="inline-block border border-primary-900 text-primary-900 px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-primary-900 hover:text-white transition-colors rounded-[6px]">
               Explore All Destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bespoke;
