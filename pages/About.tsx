
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Car, CreditCard, FileText, Shield, Map, Sliders, Plane, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const About: React.FC = () => {
  const features = [
    { icon: UserCheck, label: "Dedicated Travel Manager" },
    { icon: Car, label: "Backup Driver & Logistics" },
    { icon: CreditCard, label: "No Pre-payment for Design" },
    { icon: FileText, label: "Secure Invoicing" },
    { icon: Shield, label: "Optional Event Insurance" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            SOSA Travelz was born from a passion for the extraordinary. We saw a world where travel had become commoditized, and we wanted to bring back the magic, the personalization, and the sheer luxury of true exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
           <div className="relative h-full min-h-[500px]">
               <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" alt="The Journey" className="w-full h-full object-cover rounded-[12px] shadow-xl" />
           </div>
           
           <div className="flex flex-col justify-center space-y-10">
              {/* The Narrative / Origin */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-primary-900 mb-4">The Spark</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  SOSA began with a single observation in a crowded departure lounge: luxury travel had lost its soul to standardization. We saw high-net-worth travelers being sold "exclusive" packages that were indistinguishable from one another.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mt-4">
                  We founded SOSA to bridge the gap between logistical perfection and emotional resonance. We stripped away the cookie-cutter itineraries to focus on what truly matters: access to the inaccessible, seamless execution, and the belief that a journey should be crafted around the traveler, not the destination.
                </p>
              </div>

              <div className="w-16 h-0.5 bg-gray-200"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <h4 className="text-lg font-serif font-bold text-gold-500 mb-2">Our Mission</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">To open the world to our clients in ways they never imagined, providing seamless, luxurious, and transformative travel experiences.</p>
                </div>
                <div>
                    <h4 className="text-lg font-serif font-bold text-gold-500 mb-2">The Standard</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">We personally vet every hotel, guide, and experience we recommend. You travel with the assurance of absolute quality.</p>
                </div>
              </div>
           </div>
        </div>

        {/* Features / Guarantees Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
            {features.map((feature, index) => (
                <div key={index} className="border-2 border-dashed border-gold-500 rounded-[12px] py-10 px-4 flex flex-col items-center text-center h-full justify-center hover:bg-cream transition-all duration-300 group hover:-translate-y-1">
                    <feature.icon size={36} className="text-primary-900 mb-4 group-hover:text-gold-600 transition-colors" strokeWidth={1.5} />
                    <p className="font-bold text-primary-900 text-xs uppercase tracking-widest leading-relaxed group-hover:text-gold-600 transition-colors">
                        {feature.label}
                    </p>
                </div>
            ))}
        </div>

        {/* Process Section */}
        <div className="max-w-5xl mx-auto mb-24">
            <h2 className="text-3xl font-serif font-bold text-primary-900 text-center mb-10">Our Process</h2>
            <div className="bg-white border border-gray-200 shadow-sm rounded-[12px] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-8 text-center hover:bg-cream transition-colors duration-300">
                        <Map size={40} className="mx-auto text-gold-500 mb-4" strokeWidth={1.5} />
                        <h3 className="font-bold text-primary-900 uppercase tracking-widest text-sm mb-4">Step 1</h3>
                        <p className="text-lg font-serif text-gray-700">We curate 3–5 tailored plans</p>
                    </div>
                    <div className="p-8 text-center hover:bg-cream transition-colors duration-300">
                        <Sliders size={40} className="mx-auto text-gold-500 mb-4" strokeWidth={1.5} />
                        <h3 className="font-bold text-primary-900 uppercase tracking-widest text-sm mb-4">Step 2</h3>
                        <p className="text-lg font-serif text-gray-700">You refine &rarr; we finalize</p>
                    </div>
                    <div className="p-8 text-center hover:bg-cream transition-colors duration-300">
                        <Plane size={40} className="mx-auto text-gold-500 mb-4" strokeWidth={1.5} />
                        <h3 className="font-bold text-primary-900 uppercase tracking-widest text-sm mb-4">Step 3</h3>
                        <p className="text-lg font-serif text-gray-700">Your journey begins</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Destinations Preview Section */}
        <div className="border-t border-gray-200 pt-20">
            <div className="text-center mb-12">
               <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">Wanderlust</span>
               <h2 className="text-4xl font-serif font-bold text-primary-900">Explore Our World</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {DESTINATIONS.slice(0, 3).map((dest) => (
                <Link key={dest.id} to={`/destinations/${dest.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-[12px] shadow-lg aspect-[4/5] mb-6">
                    <img 
                      src={dest.imageUrl} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-0 transition-transform">
                       <span className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2 block">{dest.tag || 'Luxury'}</span>
                       <h3 className="text-2xl font-serif font-bold group-hover:text-gold-400 transition-colors">{dest.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/destinations" className="group inline-flex items-center gap-2 text-primary-900 font-bold uppercase tracking-widest text-sm hover:text-gold-600 transition-colors">
                 View All Collections <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
