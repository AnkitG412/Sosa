
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, FileText, Handshake, ShieldCheck, ArrowRight, UserCheck, Car, CreditCard, Shield, Share2 } from 'lucide-react';
import { DESTINATIONS, SITE_IMAGES } from '../constants';
import Reveal from '../components/Reveal';

const Mice: React.FC = () => {
  // Select specific destinations suitable for Corporate MICE
  // Added 'cape-town' to ensure 4 cards for the 2x2 tablet grid layout
  const miceDestinations = DESTINATIONS.filter(d => ['swiss', 'paris', 'thailand', 'cape-town'].includes(d.id));

  const microServices = [
    { icon: UserCheck, label: "Dedicated Travel Manager" },
    { icon: Car, label: "Backup Driver & Logistics" },
    { icon: CreditCard, label: "No Pre-payment for Design" },
    { icon: FileText, label: "Secure Invoicing" },
    { icon: Shield, label: "Optional Event Insurance" },
  ];

  const handleShare = (e: React.MouseEvent, dest: typeof DESTINATIONS[0]) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/#/destinations/${dest.id}`;
    const text = `Corporate Event at ${dest.name} with SOSA Travelz`;

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
      <div className="bg-white text-primary-900 py-24 text-center px-6">
        <Reveal>
          <h1 className="text-5xl font-serif font-bold mb-4">Corporate M.I.C.E.</h1>
          <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest">Meetings • Incentives • Conferences • Events</p>
        </Reveal>
      </div>

      <div className="container mx-auto px-6 py-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <img src={SITE_IMAGES.mice.hero} className="w-full h-[400px] object-cover shadow-xl rounded-[12px]" alt="Conference" />
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">Elevate Corporate Travel</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SOSA Travelz specializes in delivering high-impact corporate events. From board meetings in Swiss chalets to large-scale conferences in Dubai, we ensure seamless execution and a premium experience for all delegates.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-gold-500"/> Global Venue Sourcing</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-gold-500"/> End-to-End Logistics Management</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-gold-500"/> Team Building Activities</li>
                  <li className="flex items-center gap-3 text-gray-700"><CheckCircle size={18} className="text-gold-500"/> VIP Executive Handling</li>
                </ul>
                <div className="flex flex-col gap-4">
                  <Link to="/contact" className="inline-block bg-primary-900 text-white text-center px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold-500 transition-colors w-full md:w-fit rounded-[6px]">
                    Talk to Concierge
                  </Link>
                  <Link to="/contact" className="inline-block border border-primary-900 text-primary-900 text-center px-8 py-3 uppercase tracking-widest text-sm hover:bg-primary-900 hover:text-white transition-colors w-full md:w-fit rounded-[6px]">
                    Request Proposal
                  </Link>
                </div>
            </div>
          </div>
        </Reveal>

        {/* Corporate Destinations Section */}
        <div className="mb-24">
           <Reveal>
             <h3 className="text-3xl font-serif font-bold text-primary-900 mb-10 text-center">Top Corporate MICE Destinations</h3>
             {/* Grid updated to display 4 cards: 2 per row on tablet (md), 3 per row on desktop (lg) */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {miceDestinations.map(dest => (
                    <Link key={dest.id} to={`/destinations/${dest.id}`} className="group block bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-[12px] overflow-hidden border border-gray-100">
                      <div className="relative h-64 overflow-hidden">
                          <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                          <div className="absolute top-4 right-4 bg-primary-900/90 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-sm rounded-sm">
                              Corporate Ready
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
                          <div className="flex justify-between items-baseline mb-2">
                            <h4 className="text-xl font-serif font-bold text-primary-900 group-hover:text-gold-500 transition-colors">{dest.name}</h4>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{dest.location?.split(',')[0]}</span>
                          </div>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">{dest.description}</p>
                          <span className="text-gold-600 text-xs font-bold uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform">
                              View Venue Options <ArrowRight size={14} className="ml-1" />
                          </span>
                      </div>
                    </Link>
                ))}
             </div>
             <div className="text-center">
                <Link to="/destinations" className="inline-block border border-primary-900 text-primary-900 px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-primary-900 hover:text-white transition-colors shadow-md hover:shadow-lg rounded-[6px]">
                    View all Corporate mice destinations
                </Link>
             </div>
           </Reveal>
        </div>

        {/* Why Choose SOSA Section - Full Width on Mobile */}
        <div className="bg-cream py-10 px-0 md:p-12 text-center rounded-[12px] mb-16 overflow-hidden">
           <Reveal>
             <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4 px-4">Why Choose SOSA for Business?</h3>
             <p className="text-gray-600 max-w-3xl mx-auto mb-8 px-4">We understand that corporate travel is an investment. Our goal is to maximize ROI through flawless organization and unforgettable experiences that strengthen team bonds and impress clients.</p>
             
             <div className="overflow-x-auto max-w-4xl mx-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 pl-4 pr-2 md:px-6 text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b border-gray-200 w-[35%] md:w-5/12">Typical Agent</th>
                    <th className="py-4 px-2 md:px-6 text-primary-900 font-bold uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-gold-500 bg-white w-[45%] md:w-5/12">SOSA Corporate</th>
                    <th className="py-4 pr-4 pl-2 md:px-6 border-b-2 border-gold-500 bg-white w-[20%] md:w-2/12"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200/50">
                    <td className="py-4 pl-4 pr-2 md:px-6 text-gray-500 text-xs md:text-base">One-time booking</td>
                    <td className="py-4 px-2 md:px-6 text-primary-900 font-bold bg-white shadow-sm text-xs md:text-base">24/7 travel manager</td>
                    <td className="py-4 pr-4 pl-2 md:px-6 text-gold-500 bg-white shadow-sm text-right"><div className="flex justify-end"><Clock size={16} className="md:w-5 md:h-5" /></div></td>
                  </tr>
                  <tr className="border-b border-gray-200/50">
                    <td className="py-4 pl-4 pr-2 md:px-6 text-gray-500 text-xs md:text-base">No reporting</td>
                    <td className="py-4 px-2 md:px-6 text-primary-900 font-bold bg-white shadow-sm text-xs md:text-base">Expense reports & summaries</td>
                    <td className="py-4 pr-4 pl-2 md:px-6 text-gold-500 bg-white shadow-sm text-right"><div className="flex justify-end"><FileText size={16} className="md:w-5 md:h-5" /></div></td>
                  </tr>
                  <tr className="border-b border-gray-200/50">
                    <td className="py-4 pl-4 pr-2 md:px-6 text-gray-500 text-xs md:text-base">Limited options</td>
                    <td className="py-4 px-2 md:px-6 text-primary-900 font-bold bg-white shadow-sm text-xs md:text-base">Partnerships with hotels, airlines</td>
                    <td className="py-4 pr-4 pl-2 md:px-6 text-gold-500 bg-white shadow-sm text-right"><div className="flex justify-end"><Handshake size={16} className="md:w-5 md:h-5" /></div></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-2 md:px-6 text-gray-500 text-xs md:text-base">No control</td>
                    <td className="py-4 px-2 md:px-6 text-primary-900 font-bold bg-white shadow-sm text-xs md:text-base">Contract-based accountability</td>
                    <td className="py-4 pr-4 pl-2 md:px-6 text-gold-500 bg-white shadow-sm text-right"><div className="flex justify-end"><ShieldCheck size={16} className="md:w-5 md:h-5" /></div></td>
                  </tr>
                </tbody>
              </table>
             </div>
           </Reveal>
        </div>

        {/* Corporate Peace of Mind Micro-Section */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {microServices.map((service, index) => (
                  <div key={index} className="bg-transparent border-2 border-dashed border-gold-500 rounded-[12px] p-6 flex flex-col items-center text-center transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-xl hover:border-gold-600 cursor-default group">
                    <service.icon size={32} className="text-primary-900 mb-3 transition-colors duration-300 group-hover:text-gold-600" />
                    <p className="font-bold text-primary-900 text-xs uppercase tracking-wider transition-colors duration-300 group-hover:text-gold-600">{service.label}</p>
                  </div>
              ))}
          </div>
        </Reveal>

      </div>
    </div>
  );
};

export default Mice;
