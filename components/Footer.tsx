
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Check, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import FeedbackModal from './FeedbackModal';

const Footer: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCopyEmail = () => {
    const email = "hello.sosa777@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const addressQuery = encodeURIComponent("Kanke road, Lake Avenue, Lane No – 3, near Iskcon, Jharkhand, 834008 India");
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="lg:w-1/3">
            <Link to="/" className="flex items-center gap-2 mb-6 group w-fit">
               <Logo light={true} />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Curating exceptional journeys for the discerning traveler. From spiritual pilgrimages to high-end corporate retreats, we redefine luxury travel.
            </p>
          </div>

          {/* Links Section - Grouped Closer on Right */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-700 pb-2 inline-block">Explore</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-gold-500 transition-colors">Destinations</Link></li>
                <li><Link to="/bespoke" className="text-gray-400 hover:text-gold-500 transition-colors">Bespoke Journeys</Link></li>
                <li><Link to="/divya-path" className="text-gray-400 hover:text-gold-500 transition-colors">Divya Path</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-gold-500 transition-colors">Travel Journal</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-700 pb-2 inline-block">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/mice" className="text-gray-400 hover:text-gold-500 transition-colors">Corporate MICE</Link></li>
                <li><Link to="/bespoke" className="text-gray-400 hover:text-gold-500 transition-colors">Private Jets</Link></li>
                <li><Link to="/destinations" className="text-gray-400 hover:text-gold-500 transition-colors">Luxury Villas</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Event Planning</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-gray-700 pb-2 inline-block">Contact</h3>
              <ul className="space-y-4">
                {/* Address - Opens Map */}
                <li>
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start space-x-3 text-gray-400 hover:text-gold-500 transition-colors group"
                  >
                    <MapPin className="text-gold-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span>Kanke road, Lake Avenue, Lane No – 3, near Iskcon, Jharkhand, 834008 India</span>
                  </a>
                </li>

                {/* Phone - Direct Call */}
                <li>
                  <a 
                    href="tel:+918986892922" 
                    className="flex items-center space-x-3 text-gray-400 hover:text-gold-500 transition-colors group"
                  >
                    <Phone className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    <span>+91 89868 92922</span>
                  </a>
                </li>

                {/* Email - Copy to Clipboard */}
                <li>
                  <button 
                    onClick={handleCopyEmail}
                    className="flex items-center space-x-3 text-gray-400 hover:text-gold-500 transition-colors text-left w-full group"
                    title="Click to copy email"
                  >
                    {emailCopied ? (
                      <Check className="text-green-500 flex-shrink-0 scale-110 transition-transform" size={18} />
                    ) : (
                      <Mail className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" size={18} />
                    )}
                    <span className={emailCopied ? "text-green-500 font-bold" : ""}>
                      {emailCopied ? "Copied to clipboard!" : "hello.sosa777@gmail.com"}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Feedback & Copyright */}
        <div className="relative pt-8 flex flex-col items-center gap-4">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          
          {/* Feedback Trigger */}
          <button 
            onClick={() => setShowFeedback(true)}
            className="group flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-all duration-300 py-1"
          >
             <MessageSquare size={14} className="group-hover:scale-110 transition-transform" />
             <span className="text-xs font-bold uppercase tracking-widest">Share Your Feedback</span>
          </button>

          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} SOSA Travelz. All rights reserved.</p>
        </div>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal isOpen={showFeedback} onClose={() => setShowFeedback(false)} />
    </footer>
  );
};

export default Footer;
