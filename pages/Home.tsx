
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { ArrowRight, Star, Briefcase, MapPin, Sparkles, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use the first 5 destinations for the hero slider
  const heroDestinations = DESTINATIONS.slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroDestinations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroDestinations.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        
        {/* Background Images Layer */}
        {heroDestinations.map((dest, index) => (
          <div 
            key={dest.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img 
              src={dest.imageUrl} 
              alt={dest.name} 
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          </div>
        ))}

        {/* Navigation Arrows - Desktop Only */}
        <button 
          onClick={prevSlide}
          className="hidden md:block absolute left-8 z-20 text-white/50 hover:text-white hover:scale-110 transition-all p-2 rounded-full border border-white/20 hover:border-white/80 bg-black/10 backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="hidden md:block absolute right-8 z-20 text-white/50 hover:text-white hover:scale-110 transition-all p-2 rounded-full border border-white/20 hover:border-white/80 bg-black/10 backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center pt-12">
          
          {/* Text Content */}
          <div className="text-white space-y-8 max-w-5xl mx-auto">
            <div className="overflow-hidden">
                <h2 className="text-gold-400 font-bold tracking-[0.2em] uppercase text-sm animate-fade-in-up mb-4">
                    SOSA Travelz Collections
                </h2>
                
                {/* Dynamic Content */}
                {heroDestinations.map((dest, index) => (
                    index === currentSlide && (
                        <div key={dest.id} className="animate-fade-in-up">
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight mb-6 drop-shadow-2xl">
                                {dest.name}
                            </h1>
                            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-200 mb-8 font-light tracking-wide">
                                <span className="flex items-center gap-2 border px-4 py-1.5 rounded-full border-white/30 backdrop-blur-sm text-sm bg-black/10">
                                    <Clock size={16} className="text-gold-500" />
                                    {dest.timeZone || 'GMT'}
                                </span>
                                {dest.tag && (
                                  <span className="bg-gold-500 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg">
                                      {dest.tag}
                                  </span>
                                )}
                            </div>
                            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-serif italic">
                                "{dest.description}"
                            </p>
                        </div>
                    )
                ))}
            </div>
            
            <div className="pt-8 flex flex-col md:flex-row justify-center gap-6 animate-fade-in-up">
              <Link to={`/destinations/${heroDestinations[currentSlide].id}`} className="inline-flex justify-center items-center gap-2 bg-gold-500 text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gold-600 transition-all duration-300 font-bold shadow-xl hover:-translate-y-1 rounded-sm">
                View Itinerary <ArrowRight size={18} />
              </Link>
               <Link to="/destinations" className="inline-flex justify-center items-center gap-2 border-2 border-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all duration-300 font-bold hover:-translate-y-1 rounded-sm backdrop-blur-sm bg-white/5">
                Explore All
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Container */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-4 z-20 px-4">
            {/* Mobile Prev Button */}
            <button 
                onClick={prevSlide}
                className="md:hidden text-white/70 hover:text-gold-500 p-2 transition-colors"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Dots Indicators */}
            <div className="flex gap-3">
                {heroDestinations.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                            index === currentSlide ? 'w-12 bg-gold-500' : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Mobile Next Button */}
            <button 
                onClick={nextSlide}
                className="md:hidden text-white/70 hover:text-gold-500 p-2 transition-colors"
                aria-label="Next Slide"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </section>

      {/* Intro Stats / Trust */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-serif font-bold text-gold-500">10+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-gold-500">50+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Global Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-gold-500">1k+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Happy Travelers</p>
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-gold-500">24/7</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Concierge Service</p>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Curated Destinations</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Handpicked locations offering the pinnacle of luxury, culture, and relaxation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map((dest) => (
              <Link key={dest.id} to={`/destinations/${dest.id}`} className="block">
                <div className="group relative overflow-hidden rounded-sm shadow-lg cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={dest.imageUrl} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 block">{dest.tag || 'Luxury'}</span>
                    <h3 className="text-3xl font-serif font-bold mb-2">{dest.name}</h3>
                    <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">{dest.description}</p>
                    <span className="text-xs uppercase tracking-widest border-b border-gold-500 pb-1 inline-block">Discover More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/destinations" className="bg-primary-900 text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary-800 transition-colors">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 z-0"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-500 z-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop" 
                        alt="Luxury Travel Experience" 
                        className="w-full h-[500px] object-cover rounded-sm shadow-2xl relative z-10"
                    />
                </div>
                <div className="lg:w-1/2 space-y-8">
                    <div>
                        <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 leading-tight">
                            Crafting Memories <br/> Beyond the <span className="text-gold-500 italic">Ordinary</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        SOSA Travelz is more than a travel agency; we are architects of dreams. With a legacy of excellence and a network of global connections, we open doors to experiences inaccessible to the ordinary traveler.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                         From private island retreats to cultural immersions led by local experts, every journey we design is a masterpiece of personalization, ensuring your travels are as unique as your signature.
                    </p>
                    <div className="pt-4">
                        <Link to="/about" className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gold-500 transition-all duration-300 shadow-lg rounded-sm">
                            Discover Our Story 
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="text-center group p-6 rounded-lg hover:bg-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-primary-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">Bespoke Journeys</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tailor-made itineraries designed exclusively for you. Private jets, secluded villas, and unique experiences.
              </p>
              <Link to="/bespoke" className="text-gold-600 font-bold uppercase text-xs tracking-widest hover:text-primary-900">Learn More</Link>
            </div>

            {/* Service 2 */}
            <div className="text-center group p-6 rounded-lg hover:bg-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-primary-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">Corporate MICE</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Seamless Meetings, Incentives, Conferences, and Exhibitions. Elevate your corporate events globally.
              </p>
              <Link to="/mice" className="text-gold-600 font-bold uppercase text-xs tracking-widest hover:text-primary-900">Learn More</Link>
            </div>

             {/* Service 3 */}
             <div className="text-center group p-6 rounded-lg hover:bg-cream transition-colors duration-300">
              <div className="w-16 h-16 bg-primary-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">Divya Path</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Spiritual pilgrimages to sacred sites. Reconnect with your soul in Rishikesh, Tirupati, and beyond.
              </p>
              <Link to="/divya-path" className="text-gold-600 font-bold uppercase text-xs tracking-widest hover:text-primary-900">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Enquiry Section */}
      <section className="relative py-24 flex items-center justify-center bg-cream">
         <div className="container mx-auto px-6 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-6">
                     <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Concierge Service</span>
                     <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-primary-900">Let Us Craft Your<br/>Perfect Itinerary</h2>
                     <p className="text-gray-600 text-lg leading-relaxed">
                         From the moment you contact us until you return home, our dedicated travel managers ensure every detail is flawless. Experience the luxury of stress-free travel planning.
                     </p>
                     <div className="flex flex-col gap-4 mt-4">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-white border border-gold-500/30 flex items-center justify-center text-gold-500">
                                 <Clock size={20} />
                             </div>
                             <div>
                                 <p className="font-bold uppercase text-xs tracking-wider text-primary-900">Rapid Response</p>
                                 <p className="text-gray-500 text-sm">Proposals within 24 hours</p>
                             </div>
                         </div>
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-white border border-gold-500/30 flex items-center justify-center text-gold-500">
                                 <Briefcase size={20} />
                             </div>
                             <div>
                                 <p className="font-bold uppercase text-xs tracking-wider text-primary-900">Expert Planning</p>
                                 <p className="text-gray-500 text-sm">Decades of industry experience</p>
                             </div>
                         </div>
                     </div>
                 </div>
                 
                 <div>
                     <EnquiryForm />
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
