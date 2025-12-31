
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { Calendar, Sun, CheckCircle, MapPin, ArrowLeft } from 'lucide-react';

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = DESTINATIONS.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center bg-cream">
        <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Destination Not Found</h2>
        <p className="text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
        <Link to="/destinations" className="text-gold-500 font-bold uppercase tracking-widest hover:text-gold-600">
          Back to Destinations
        </Link>
      </div>
    );
  }

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
    } else {
        navigate('/destinations');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img 
          src={destination.imageUrl} 
          alt={destination.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Back Button positioned at top - adjusted padding since navbar is gone */}
        <div className="absolute top-0 left-0 w-full pt-8 px-6 md:px-12 z-10 pointer-events-none">
            <button 
                onClick={handleBack} 
                className="inline-flex items-center text-white/90 hover:text-gold-500 text-sm uppercase tracking-widest transition-colors font-bold pointer-events-auto drop-shadow-lg"
            >
                <ArrowLeft size={16} className="mr-2" /> Back
            </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                    {destination.tag && (
                        <span className="bg-gold-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                            {destination.tag}
                        </span>
                    )}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2">{destination.name}</h1>
                    <div className="flex items-center text-gray-300 text-sm">
                        <MapPin size={16} className="text-gold-500 mr-2" />
                        <span className="uppercase tracking-widest font-bold">{destination.location || 'Premium Destination'}</span>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-6 py-4 border-l-4 border-gold-500">
                    <p className="text-gray-300 text-xs uppercase tracking-widest mb-1">Starting From</p>
                    <p className="text-3xl font-serif font-bold">{destination.priceStart}</p>
                    <p className="text-xs text-gray-300 mt-1">{destination.duration}</p>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Overview */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">The Experience</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {destination.longDescription || destination.description}
                    </p>
                </section>

                {/* Highlights */}
                {destination.highlights && (
                    <section>
                        <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Journey Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {destination.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start bg-white p-4 shadow-sm border border-gray-100 rounded-sm">
                                    <CheckCircle size={20} className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Day-by-Day Itinerary */}
                {destination.itinerary && destination.itinerary.length > 0 && (
                  <section>
                    <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8">Daily Itinerary</h3>
                    <div className="space-y-0 border-l border-gray-200 ml-3">
                      {destination.itinerary.map((item, idx) => (
                        <div key={idx} className="relative pl-8 pb-10 last:pb-0 group">
                          {/* Timeline Dot */}
                          <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white border-4 border-gold-500 group-hover:scale-125 transition-transform duration-300"></div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                             <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Day {item.day}</span>
                             <h4 className="text-xl font-serif font-bold text-primary-900">{item.title}</h4>
                          </div>
                          
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Facts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.bestTime && (
                         <div className="bg-cream p-6 rounded-sm border-l-2 border-gold-500">
                            <div className="flex items-center mb-2">
                                <Calendar className="text-primary-900 mr-2" size={20} />
                                <h4 className="font-bold text-primary-900 uppercase tracking-widest text-sm">Best Time To Visit</h4>
                            </div>
                            <p className="text-gray-600">{destination.bestTime}</p>
                         </div>
                    )}
                    {destination.climate && (
                         <div className="bg-cream p-6 rounded-sm border-l-2 border-gold-500">
                            <div className="flex items-center mb-2">
                                <Sun className="text-primary-900 mr-2" size={20} />
                                <h4 className="font-bold text-primary-900 uppercase tracking-widest text-sm">Climate</h4>
                            </div>
                            <p className="text-gray-600">{destination.climate}</p>
                         </div>
                    )}
                </div>

                {/* Gallery */}
                {destination.gallery && destination.gallery.length > 0 && (
                     <section className="pt-8 border-t border-gray-100">
                        <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Featured large image (first one) */}
                            <div className="md:col-span-2 aspect-[2/1] overflow-hidden rounded-sm group cursor-pointer shadow-lg">
                                 <img src={destination.gallery[0]} alt={`${destination.name} Main`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            {/* Other images */}
                            {destination.gallery.slice(1).map((img, idx) => (
                                <div key={idx} className="aspect-video overflow-hidden rounded-sm group cursor-pointer shadow-md">
                                    <img src={img} alt={`${destination.name} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            ))}
                        </div>
                     </section>
                )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                    <div className="bg-primary-900 text-white p-8 rounded-lg text-center shadow-xl">
                        <h3 className="text-2xl font-serif font-bold mb-2">Ready to Book?</h3>
                        <p className="text-gray-400 mb-6 text-sm">Our concierge team is ready to tailor this itinerary to your exact preferences.</p>
                        
                        <a href="tel:+918986892922" className="block bg-white/10 p-4 rounded mb-6 hover:bg-white/20 transition-colors cursor-pointer group">
                            <p className="text-xs uppercase tracking-widest text-gold-500 mb-1 group-hover:text-gold-400">Direct Line</p>
                            <p className="font-bold text-lg text-white group-hover:text-gold-100">+91 89868 92922</p>
                        </a>

                        <div className="space-y-4">
                            <Link to="/contact" className="block w-full bg-gold-500 text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors">
                                Request Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
