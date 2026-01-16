
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DESTINATIONS, TESTIMONIALS, SITE_IMAGES } from '../constants';
import { ArrowRight, Star, Briefcase, MapPin, Sparkles, ChevronLeft, ChevronRight, ChevronDown, Clock, Share2, Plane } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import Reveal from '../components/Reveal';

const Counter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  formatValue 
}: { 
  end: number, 
  duration?: number, 
  suffix?: string, 
  prefix?: string,
  formatValue?: (value: number) => string | number
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeOut));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  const display = formatValue ? formatValue(count) : count;

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use the first 5 destinations for the hero slider
  const heroDestinations = DESTINATIONS.slice(0, 5);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroDestinations.length - 1 ? 0 : prev + 1));
  };

  const prevSlideAction = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroDestinations.length - 1 : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroDestinations.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

  // Testimonial Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };
    
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleTestimonials;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => {
      const maxIndex = TESTIMONIALS.length - visibleTestimonials;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // FAQ State
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What defines a 'Bespoke Journey' with SOSA?",
      answer: "A bespoke journey is built entirely around you. Unlike standard packages, we start with a blank canvas, designing every transfer, accommodation, and experience to match your personal tastes, pace, and interests."
    },
    {
      question: "Do you handle flights and visa processing?",
      answer: "Absolutely. Our concierge team manages every aspect of your logistics, including commercial or private jet bookings, visa assistance, and fast-track airport services to ensure a seamless experience."
    },
    {
      question: "How does the pricing work for custom trips?",
      answer: "We charge a planning fee which is credited towards your final booking. Since every itinerary is unique, costs vary based on destination, duration, and level of luxury. We provide transparent pricing with no hidden costs."
    },
    {
      question: "Is support available during my trip?",
      answer: "Yes, you will have access to 24/7 concierge support via WhatsApp or phone throughout your journey. Whether you need a last-minute dinner reservation or a change of plans, we are just a message away."
    },
    {
      question: "Can I customize the sample itineraries shown on the website?",
      answer: "Absolutely. The itineraries presented are merely inspirations. We believe in co-creating your journey. You can modify durations, change hotels, swap activities, or build a completely new route from scratch with our travel designers."
    },
    {
      question: "How do you handle flight cancellations or delays during the trip?",
      answer: "Our 24/7 concierge team proactively monitors your flights. In the event of a disruption, we immediately arrange alternative connections, update transfer logistics, and adjust your itinerary so you can relax while we handle the stress."
    },
    {
      question: "Are your journeys suitable for families with young children?",
      answer: "Yes, we specialize in multi-generational travel. We handpick family-friendly luxury resorts, arrange age-appropriate activities (from junior ranger programs to cultural workshops), and can provide vetted nanny services upon request."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major international credit cards (Visa, Mastercard, Amex), bank wire transfers, and verified secure online payment gateways. For high-value bookings, we offer secure split-payment options."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary-900">
        
        {/* Images Layer */}
        {heroDestinations.map((dest, index) => (
            <div 
                key={dest.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
                {/* Image with Ken Burns effect when active */}
                <img 
                    src={dest.imageUrl} 
                    alt={dest.name} 
                    className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`} 
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlideAction}
          className="hidden md:block absolute left-8 z-30 text-white/50 hover:text-white hover:scale-110 transition-all p-3 rounded-full border border-white/20 hover:border-white/80 bg-black/10 backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="hidden md:block absolute right-8 z-30 text-white/50 hover:text-white hover:scale-110 transition-all p-3 rounded-full border border-white/20 hover:border-white/80 bg-black/10 backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </button>

        {/* Content Layer */}
        <div className="container mx-auto px-6 relative z-20 h-full">
            {heroDestinations.map((dest, index) => (
                <div 
                    key={`content-${dest.id}`}
                    className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-1000 ${
                        index === currentSlide 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 translate-y-8 pointer-events-none'
                    }`}
                >
                    <div className="max-w-4xl mx-auto px-4 pt-20">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-tight mb-4 drop-shadow-2xl text-white">
                            {dest.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md font-serif italic mb-8">
                            "{dest.description}"
                        </p>
                        <Link 
                            to={`/destinations/${dest.id}`} 
                            className="inline-flex justify-center items-center gap-2 bg-gold-500 text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-gold-600 transition-all duration-300 font-bold shadow-xl hover:-translate-y-1 rounded-[6px]"
                        >
                            Plan my Journey 
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom Navigation Indicators */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-4 z-30">
            <button onClick={prevSlideAction} className="md:hidden text-white/70 p-2"><ChevronLeft size={24}/></button>
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
            <button onClick={nextSlide} className="md:hidden text-white/70 p-2"><ChevronRight size={24}/></button>
        </div>
      </section>

      {/* Intro Stats / Trust */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Reveal>
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold-500">
                <Counter end={10} suffix="+" />
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold-500">
                <Counter end={50} suffix="+" />
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Global Partners</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold-500">
                <Counter end={1000} suffix="+" formatValue={(v) => v >= 1000 ? '1k' : v} />
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Happy Travelers</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-gold-500">
                <Counter end={24} suffix="/7" />
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Concierge Service</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Curated Destinations</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Handpicked locations offering the pinnacle of luxury, culture, and relaxation.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DESTINATIONS.slice(0, 3).map((dest) => (
                <Link key={dest.id} to={`/destinations/${dest.id}`} className="block">
                  <div className="group relative overflow-hidden rounded-[12px] shadow-lg cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={dest.imageUrl} 
                        alt={dest.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity"></div>
                    
                    <button
                      onClick={(e) => handleShare(e, dest)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-gold-500 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 z-20"
                      title="Share"
                    >
                      <Share2 size={18} />
                    </button>

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
          </Reveal>
          <Reveal delay={400}>
            <div className="text-center mt-12">
              <Link to="/destinations" className="inline-block bg-primary-900 text-white px-14 py-5 uppercase tracking-widest text-base font-bold hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl rounded-[8px] hover:-translate-y-1">
                View All Destinations
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
            <Reveal>
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 relative">
                      <img 
                          src={SITE_IMAGES.home.about} 
                          alt="Luxury Travel Experience" 
                          className="w-full h-[500px] object-cover rounded-[12px] shadow-2xl relative z-10"
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
                          <Link to="/about" className="group flex w-full justify-center items-center gap-3 px-8 py-4 bg-primary-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gold-500 transition-all duration-300 shadow-lg rounded-[6px]">
                              Discover Our Story 
                              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </div>
                  </div>
              </div>
            </Reveal>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service 1 */}
              <div className="text-center group p-6 rounded-[12px] hover:bg-cream transition-colors duration-300 border border-transparent hover:border-gray-100">
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
              <div className="text-center group p-6 rounded-[12px] hover:bg-cream transition-colors duration-300 border border-transparent hover:border-gray-100">
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
              <div className="text-center group p-6 rounded-[12px] hover:bg-cream transition-colors duration-300 border border-transparent hover:border-gray-100">
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
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Voices</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">What Our Travelers Say</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            </div>

            <div className="relative px-6 md:px-12">
              {/* Navigation Arrows */}
              <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-gold-500 transition-all">
                  <ChevronLeft size={20} />
              </button>
              <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-gold-500 transition-all">
                  <ChevronRight size={20} />
              </button>

              <div className="overflow-hidden">
                  <div 
                      className="flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${testimonialIndex * (100 / visibleTestimonials)}%)` }}
                  >
                      {TESTIMONIALS.map((testimonial) => (
                      <div 
                          key={testimonial.id} 
                          className="flex-shrink-0 px-4 pt-16"
                          style={{ width: `${100 / visibleTestimonials}%` }}
                      >
                          <div className="bg-white rounded-[12px] p-8 relative text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300 h-full">
                              {/* User Image - Overlapping Top */}
                              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                                      <img 
                                      src={testimonial.imageUrl || `https://ui-avatars.com/api/?name=${testimonial.name}&background=d4af37&color=fff`} 
                                      alt={testimonial.name} 
                                      className="w-full h-full object-cover"
                                      />
                                  </div>
                              </div>
                              
                              <h3 className="text-xl font-bold text-primary-900 mb-1 mt-6">{testimonial.name}</h3>
                              <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">{testimonial.designation || testimonial.location}</p>
                              
                              <div className="flex justify-center gap-1 mb-6 text-gold-500">
                                  {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-300"} />
                                  ))}
                              </div>

                              <p className="text-gray-600 leading-relaxed italic">
                                  "{testimonial.quote}"
                              </p>
                          </div>
                      </div>
                      ))}
                  </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
           <Reveal>
            <div className="text-center mb-16">
              <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Common Queries</span>
              <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
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

      {/* Contact / Enquiry Section */}
      <section className="relative py-24 flex items-center justify-center bg-cream">
         <div className="container mx-auto px-6 relative z-10">
             <Reveal>
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
                                   <p className="text-gray-500 text-sm">Proposals within 2 hours</p>
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
             </Reveal>
         </div>
      </section>
    </div>
  );
};

export default Home;
