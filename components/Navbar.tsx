
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Hide Navbar on Destination Detail pages (e.g., /destinations/santorini)
  const isDestinationDetail = /^\/destinations\/[^/]+$/.test(location.pathname);
  if (isDestinationDetail) {
    return null;
  }

  // Updated Navigation Links
  const navLinks = [
    { name: 'Destinations', path: '/destinations' },
    { name: 'Bespoke Journey', path: '/bespoke' },
    { name: 'Corporate MICE', path: '/mice' },
    { name: 'Divya Path', path: '/divya-path' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  
  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar - Hides on scroll */}
      <div 
        className={`bg-gold-500 text-primary-900 transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 py-4 opacity-100'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center text-[10px] md:text-xs tracking-widest uppercase font-sans font-bold">
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="tel:+918986892922" className="flex items-center hover:text-white transition-colors">
              <Phone size={12} className="mr-2" /> <span className="hidden md:inline">+91 89868 92922</span><span className="md:hidden">Call Us</span>
            </a>
            <a href="mailto:concierge@sosatravelz.com" className="flex items-center hover:text-white transition-colors">
              <Mail size={12} className="mr-2" /> <span className="hidden md:inline">concierge@sosatravelz.com</span><span className="md:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
             <a href="#" className="hover:text-white transition-colors"><Instagram size={14} /></a>
             <a href="#" className="hover:text-white transition-colors"><Facebook size={14} /></a>
             <a href="#" className="hover:text-white transition-colors"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-[12px]' 
            : `py-[18px] ${isHome ? 'bg-transparent border-b border-white/0' : 'bg-primary-900 shadow-sm'}`
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-10 relative">
             <Logo light={true} className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Menu - Direct Links - Centered */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto justify-center">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors relative group whitespace-nowrap ${
                    isActive 
                      ? 'text-gold-500' 
                      : 'text-white hover:text-gold-500'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-white" size={32} />
            ) : (
              <Menu className="text-white" size={32} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-primary-900 shadow-xl flex flex-col items-center py-0 transition-all duration-500 ease-in-out origin-top border-t border-white/10 ${
          isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = link.path === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(link.path);

          return (
            <Link
              key={link.name}
              to={link.path}
              className={`font-inter text-sm uppercase tracking-widest font-bold w-full text-center py-5 border-b border-white/10 last:border-0 transition-colors ${
                isActive ? 'text-gold-500' : 'text-white hover:text-gold-500 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Navbar;
