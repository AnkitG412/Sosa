
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DESTINATIONS } from '../constants';
import { 
  Calendar, CheckCircle, MapPin, ArrowLeft,
  BedDouble, Plane, Car, Map, User, Headphones, 
  Utensils, ShieldCheck, ChevronDown, ChevronLeft, ChevronRight,
  Grid, X, Globe, Coins, Languages, FileCheck, Handshake, Heart, Clock, CloudSun
} from 'lucide-react';
import Reveal from '../components/Reveal';

interface ItineraryItemProps {
    item: {
        day: number;
        title: string;
        description: string;
    };
}

// Robust Logo Component to handle broken images
const PartnerLogo = ({ name, url }: { name: string; url: string }) => {
  const [error, setError] = useState(false);

  // If external image fails, render a stylish text fallback
  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full text-center border-2 border-dashed border-gray-200 rounded-[12px] p-2 bg-gray-50 group-hover:border-gold-500/50 transition-colors">
        <span className="text-gray-400 font-serif font-bold text-xs uppercase tracking-widest group-hover:text-gold-600 transition-colors">{name}</span>
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={name}
      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 hover:brightness-110 transition-all duration-300 opacity-70 hover:opacity-100"
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const ItineraryAccordionItem: React.FC<ItineraryItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="relative pl-8 pb-6 last:pb-0">
        {/* Timeline Dot */}
        <div className={`absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-white border-4 transition-colors duration-300 z-10 ${isOpen ? 'border-gold-500 scale-110' : 'border-gray-300'}`}></div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left group focus:outline-none"
        >
           <h4 className={`text-xl font-serif font-bold transition-colors ${isOpen ? 'text-gold-600' : 'text-primary-900 group-hover:text-gold-600'}`}>
              {item.title}
           </h4>
           <ChevronDown size={20} className={`text-gray-400 group-hover:text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-500' : ''}`} />
        </button>
        
        <div 
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    );
};

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  
  const destination = DESTINATIONS.find(d => d.id === id);

  // Combine main image and gallery for the slider
  const heroImages = destination 
    ? [destination.imageUrl, ...(destination.gallery || [])] 
    : [];

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isGalleryOpen]);

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
    navigate(-1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const services = [
    { icon: BedDouble, label: "Handpicked Hotels" },
    { icon: Plane, label: "Flight Assistance" },
    { icon: Car, label: "Luxury Transfers (Pick-up & Drop)" },
    { icon: Map, label: "Custom Itinerary" },
    { icon: User, label: "Personal Tour Guide" },
    { icon: Headphones, label: "24/7 Concierge Support" },
    { icon: Utensils, label: "Curated Dining" },
    { icon: ShieldCheck, label: "Verified Vendors" },
  ];

  const partners = [
    { name: 'Emirates', logo: 'https://cdn.worldvectorlogo.com/logos/emirates-airlines.svg' },
    { name: 'Qatar Airways', logo: 'https://cdn.worldvectorlogo.com/logos/qatar-airways.svg' },
    { name: 'Marriott', logo: 'https://cdn.worldvectorlogo.com/logos/marriott.svg' },
    { name: 'Taj Hotels', logo: 'https://cdn.worldvectorlogo.com/logos/taj-hotels-resorts-and-palaces.svg' },
    { name: 'Hilton', logo: 'https://cdn.worldvectorlogo.com/logos/hilton-hotels-1.svg' },
    { name: 'Four Seasons', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Four_Seasons_Hotels_and_Resorts_logo.svg' },
    { name: 'ITC Hotels', logo: 'https://cdn.worldvectorlogo.com/logos/itc-limited.svg' },
  ];

  const faqs = [
    {
      question: "Can I customize this itinerary?",
      answer: "Absolutely. This itinerary is just a starting point. Our travel designers will work with you to tailor every aspect—from the duration and hotels to specific activities—to match your personal preferences."
    },
    {
      question: "What is included in the price?",
      answer: "Our prices typically include luxury accommodation, daily breakfast, private transfers, guided tours with expert local guides, and 24/7 concierge support. International flights and visas are usually quoted separately unless specified."
    },
    {
      question: "Do you assist with flights and visas?",
      answer: "Yes, our concierge team provides full support for international flight bookings (commercial or private jet) and assists with the visa application process to ensure a seamless pre-departure experience."
    },
    {
      question: "Is this trip suitable for families?",
      answer: "Most of our destinations are family-friendly. We can arrange age-appropriate activities, interconnecting suites, and vetted nanny services to ensure a relaxing vacation for all generations."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation terms vary depending on the destination and booking time. We provide a transparent breakdown of terms during the proposal stage and highly recommend our comprehensive travel insurance options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const InsightCard = ({ icon: Icon, label, value }: { icon: any, label: string, value?: string }) => {
    if (!value) return null;
    return (
        <div className="bg-white border border-gray-100 p-5 rounded-[12px] shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-cream rounded-full text-gold-500">
                    <Icon size={20} />
                </div>
                <p className="text-xs font-serif font-bold text-gray-400 uppercase tracking-widest">{label}</p>
            </div>
            <p className="text-primary-900 font-inter font-medium pl-11 text-sm leading-relaxed">{value}</p>
        </div>
    );
  };

  return (
    <div className="min-h-screen">
      
      {/* Lightbox Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col animate-fade-in">
          <div className="flex justify-between items-center p-6 text-white bg-gradient-to-b from-black/80 to-transparent z-10">
            <h3 className="text-xl font-serif tracking-wide">{destination.name} <span className="text-gold-500 text-sm font-sans font-bold uppercase tracking-widest ml-2">Gallery</span></h3>
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors group"
            >
              <X size={28} className="text-gray-300 group-hover:text-white transition-colors" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 md:p-8 scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto pb-20">
              {heroImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-[12px] bg-gray-900 shadow-lg cursor-zoom-in">
                  <img 
                    src={img} 
                    alt={`${destination.name} ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0 animate-reveal-up" 
                    loading="lazy"
                    onLoad={(e) => (e.target as HTMLImageElement).classList.remove('opacity-0')}
                    style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Slider */}
      <div className="relative h-[70vh] w-full overflow-hidden group bg-gray-900">
        {/* Slider Track */}
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroImages.map((img, index) => (
              <div 
                  key={index}
                  className="min-w-full h-full relative"
              >
                  <img 
                    src={img} 
                    alt={`${destination.name} ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  {/* Clean image, no heavy overlay here */}
              </div>
          ))}
        </div>

        {/* Bottom Text Gradient Overlay - Only at the bottom for readability */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

        {/* View All Photos Button */}
        <button 
            onClick={() => setIsGalleryOpen(true)}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 md:bottom-20 md:right-12 md:left-auto md:translate-x-0 z-30 flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-primary-900 border border-white/30 px-5 py-2.5 rounded-[6px] backdrop-blur-md transition-all duration-300 text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl group whitespace-nowrap"
        >
            <Grid size={16} className="group-hover:scale-110 transition-transform duration-300" />
            <span>View Gallery</span>
        </button>

        {heroImages.length > 1 && (
            <>
                <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                >
                    <ChevronLeft size={32} />
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                >
                    <ChevronRight size={32} />
                </button>
                
                {/* Indicators - Bottom Center on Mobile, Bottom Right on Desktop */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-8 md:right-12 z-20 flex gap-2">
                    {heroImages.map((_, idx) => (
                         <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                                idx === currentSlide ? 'w-8 bg-gold-500' : 'w-1.5 bg-white/50 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>
            </>
        )}
        
        {/* Back Button positioned at top */}
        <div className="absolute top-0 left-0 w-full pt-8 px-6 md:px-12 z-30 pointer-events-none">
            <button 
                onClick={handleBack} 
                className="inline-flex items-center text-white/90 hover:text-gold-500 text-sm uppercase tracking-widest transition-colors font-bold pointer-events-auto drop-shadow-lg"
            >
                <ArrowLeft size={16} className="mr-2" /> Back
            </button>
        </div>

        {/* Text Container - Increased pb for mobile (pb-32) to push text up above controls */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-32 md:p-12 md:pb-12 text-white container mx-auto z-10 pointer-events-none">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                    {destination.tag && (
                        <span className="bg-gold-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block shadow-sm">
                            {destination.tag}
                        </span>
                    )}
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-2 drop-shadow-lg">{destination.name}</h1>
                    <div className="flex items-center text-gray-300 text-sm">
                        <MapPin size={16} className="text-gold-500 mr-2" />
                        <span className="uppercase tracking-widest font-bold drop-shadow-md">{destination.location || 'Premium Destination'}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Included Services Row */}
      <div className="bg-white border-b border-gray-100 overflow-hidden">
         <div className="container mx-auto px-6">
             <div 
                className="flex items-center gap-12 overflow-x-auto py-8 no-scrollbar scroll-smooth" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {services.map((service, index) => (
                    <div key={index} className="flex-shrink-0 group cursor-default" title={service.label}>
                        <div className="p-3 rounded-full border border-primary-900/20 bg-cream group-hover:bg-primary-900 group-hover:border-primary-900 transition-all duration-300">
                             <service.icon size={24} className="text-primary-900 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                    </div>
                ))}
             </div>
         </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Overview */}
                <section>
                    <Reveal>
                      <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">The Experience</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                          {destination.longDescription || destination.description}
                      </p>
                    </Reveal>
                </section>

                {/* Highlights */}
                {destination.highlights && (
                    <section>
                        <Reveal>
                          <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Journey Highlights</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {destination.highlights.map((highlight, idx) => (
                                  <div key={idx} className="flex items-start bg-white p-4 shadow-sm border border-gray-100 rounded-[12px]">
                                      <CheckCircle size={20} className="text-gold-500 mt-1 mr-3 flex-shrink-0" />
                                      <span className="text-gray-700">{highlight}</span>
                                  </div>
                              ))}
                          </div>
                        </Reveal>
                    </section>
                )}

                {/* Day-by-Day Itinerary */}
                {destination.itinerary && destination.itinerary.length > 0 && (
                  <section>
                    <Reveal>
                      <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8">Daily Itinerary</h3>
                      <div className="space-y-0 border-l border-gray-200 ml-3">
                        {destination.itinerary.map((item, idx) => (
                          <ItineraryAccordionItem key={idx} item={item} />
                        ))}
                      </div>
                    </Reveal>
                  </section>
                )}

                {/* Destination Insights Grid */}
                <div className="pt-12 border-t border-gray-100">
                     <Reveal>
                       <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6">Destination Insights</h3>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <InsightCard icon={Calendar} label="Best Time to Visit" value={destination.bestTime} />
                          {/* Ideal Duration removed as per request */}
                          <InsightCard icon={Heart} label="Ideal For" value={destination.idealFor} />
                          <InsightCard icon={FileCheck} label="Visa & Entry" value={destination.visaPolicy} />
                          <InsightCard icon={CloudSun} label="Weather Overview" value={destination.climate} />
                          <InsightCard icon={Utensils} label="Food & Dietary" value={destination.foodOption} />
                          <InsightCard icon={Handshake} label="Culture & Etiquette" value={destination.cultureEtiquette} />
                          <InsightCard icon={ShieldCheck} label="Safety & Support" value={destination.safety} />
                          <InsightCard icon={Car} label="Getting Around" value={destination.transportation} />
                          <InsightCard icon={Globe} label="Time Zone" value={destination.timeZone} />
                          <InsightCard icon={Coins} label="Currency" value={destination.currency} />
                          <InsightCard icon={Languages} label="Language" value={destination.language} />
                       </div>
                     </Reveal>
                </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                    <div className="bg-primary-900 text-white p-8 rounded-[12px] text-center shadow-xl">
                        <h3 className="text-2xl font-serif font-bold mb-2">Ready to Book?</h3>
                        <p className="text-gray-400 mb-6 text-sm">Our concierge team is ready to tailor this itinerary to your exact preferences.</p>
                        
                        <a href="tel:+918986892922" className="block bg-white/10 p-4 rounded-[6px] mb-6 hover:bg-white/20 transition-colors cursor-pointer group">
                            <p className="text-xs uppercase tracking-widest text-gold-500 mb-1 group-hover:text-gold-400">Direct Line</p>
                            <p className="font-bold text-lg text-white group-hover:text-gold-100">+91 89868 92922</p>
                        </a>

                        <div className="space-y-4">
                            <Link to="/contact" className="block w-full bg-gold-500 text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-gold-600 transition-colors rounded-[6px]">
                                Request Proposal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Partners Section */}
      <section className="py-20 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-12">
          <Reveal>
            <p className="text-sm font-bold text-gold-500 uppercase tracking-widest mb-3">Preferred Partners</p>
            <h3 className="text-2xl font-serif font-bold text-primary-900">Luxury Travel Alliances</h3>
          </Reveal>
        </div>
        
        {/* 
           Using w-max ensures the track width is equal to the content width (set 1 + set 2).
           This prevents the logos from wrapping or overlapping due to insufficient parent width.
           animate-scroll translates by -50%, which corresponds exactly to the width of one set.
        */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll hover:pause">
            {/* First Set */}
            <div className="flex items-center gap-16 px-8">
              {partners.map((partner, idx) => (
                <div key={`p1-${idx}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center cursor-pointer select-none group" title={partner.name}>
                  <PartnerLogo name={partner.name} url={partner.logo} />
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Scroll */}
            <div className="flex items-center gap-16 px-8">
              {partners.map((partner, idx) => (
                <div key={`p2-${idx}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center cursor-pointer select-none group" title={partner.name}>
                  <PartnerLogo name={partner.name} url={partner.logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
           <Reveal>
             <div className="text-center mb-12">
               <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">Frequently Asked Questions</h3>
               <p className="text-gray-600">Everything you need to know about this journey.</p>
             </div>
             
             <div className="bg-white rounded-[12px] p-8 md:p-12 shadow-xl border border-gray-100">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0">
                    <button
                      className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className={`text-lg md:text-xl font-serif font-bold transition-colors ${openFAQIndex === index ? 'text-gold-500' : 'text-primary-900 group-hover:text-gold-500'}`}>
                        {faq.question}
                      </span>
                      <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openFAQIndex === index ? 'bg-gold-500 border-gold-500 text-white -rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-gold-500 group-hover:text-gold-500'}`}>
                         <ChevronDown size={16} />
                      </span>
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQIndex === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                ))}
             </div>
           </Reveal>
        </div>
      </section>

    </div>
  );
};

export default DestinationDetail;
