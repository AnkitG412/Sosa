
import React, { useState, useEffect } from 'react';
import { COUNTRY_CODES, DESTINATIONS } from '../constants';
import { ChevronDown, CheckCircle, Loader2, ShieldCheck, Lock, MessageSquare } from 'lucide-react';

interface EnquiryFormProps {
  compact?: boolean;
  initialDestination?: string;
  className?: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ compact = false, initialDestination = '', className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    destination: initialDestination,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // YOUR WHATSAPP NUMBER (For the redirect)
  const OWNER_PHONE = '918986892922'; 

  useEffect(() => {
    if (initialDestination) {
        setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    const text = `*New SOSA Enquiry*%0A%0A*Name:* ${formData.name}%0A*Destination:* ${formData.destination}%0A*Email:* ${formData.email || 'N/A'}%0A*Message:* ${formData.message || 'Interested in a luxury journey.'}`;
    const url = `https://wa.me/${OWNER_PHONE}?text=${text}`;
    window.open(url, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxC2LI1pRCpUw1KJuWkgSQdyl2xvTTgFFcLQK9Apqp-yiDcrmHHACz2tqU_pTvodzKC/exec'; 
    const FORMSPREE_ID = 'xkogvloe'; 

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      destination: formData.destination,
      message: formData.message,
      _subject: `New Lead: ${formData.name} for ${formData.destination}`
    };

    try {
        let googleSuccess = false;
        
        // 1. Log to Google Sheets
        if (GOOGLE_SCRIPT_URL) {
            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    cache: 'no-cache',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                googleSuccess = true;
            } catch (err) {
                console.error("Google Sheets Error:", err);
            }
        }

        // 2. Email Backup
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok || googleSuccess) {
            setIsSubmitted(true);
            // Optionally auto-redirect after a short delay
            setTimeout(() => {
                handleWhatsAppRedirect();
            }, 1500);
        } else {
            setSubmitError('There was a problem submitting your enquiry. Please try again.');
        }
    } catch (error) {
        console.error("Submission Error:", error);
        setSubmitError('Service temporarily unavailable. Please contact us via phone.');
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', countryCode: '+91', phone: '', destination: '', message: '' });
  };

  const inputClasses = "w-full border-b border-gray-300 py-3 h-12 focus:outline-none focus:border-gold-500 transition-colors bg-transparent text-sm placeholder-gray-400";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2";
  const containerClasses = `${compact ? 'bg-white/90 backdrop-blur-md p-6 rounded-[12px] shadow-2xl' : 'bg-white p-8 md:p-14 rounded-[12px] shadow-xl'} ${className}`;

  if (isSubmitted) {
    return (
      <div className={containerClasses}>
         <div className="flex flex-col items-center justify-center h-full min-h-[450px] text-center animate-reveal-up">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
               <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">Enquiry Logged</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed text-sm">
               Your journey has been saved. We are now connecting you to our 24/7 Concierge via WhatsApp.
            </p>
            
            <div className="bg-cream border border-gold-500/30 p-8 rounded-[12px] w-full max-w-sm mb-6">
               <div className="flex justify-center mb-4">
                  <Loader2 className="animate-spin text-gold-500" size={24} />
               </div>
               <p className="text-xs font-bold text-primary-900 uppercase tracking-widest mb-2">Waiting for redirect...</p>
               <p className="text-gray-500 text-xs">If chat doesn't open automatically, click below:</p>
            </div>

            <button 
              onClick={handleWhatsAppRedirect}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg"
            >
              <MessageSquare size={16} /> Open WhatsApp Chat
            </button>

            <button 
              onClick={handleReset}
              className="mt-12 text-gray-400 text-[10px] font-bold uppercase tracking-widest hover:text-primary-900 transition-colors"
            >
              Go Back to Form
            </button>
         </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      {!compact && (
        <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-primary-900 mb-2">Start Your Journey</h3>
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                <Lock size={10} className="text-gold-500" /> Secure Encryption Active
            </div>
        </div>
      )}
      
      <div className="flex flex-col gap-8">
        <div>
          <label className={labelClasses}>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
            disabled={isSubmitting}
          />
        </div>

        <div>
           <label className={labelClasses}>Email (Optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </div>

        <div className="flex gap-6">
          <div className="w-32 flex-shrink-0">
             <label className={labelClasses}>Code</label>
             <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer pr-6`}
                  style={{ backgroundImage: 'none' }}
                  disabled={isSubmitting} 
                >
                  {COUNTRY_CODES.map((country) => (
                    <option key={country.code} value={country.dial_code}>
                      {country.code} ({country.dial_code})
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
             </div>
          </div>
          <div className="flex-grow">
             <label className={labelClasses}>Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="123 456 7890"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
           <label className={labelClasses}>Destination</label>
           <div className="relative">
               <select
                name="destination"
                required
                value={formData.destination}
                onChange={handleChange}
                className={`${inputClasses} appearance-none cursor-pointer pr-6`}
                disabled={isSubmitting}
               >
                <option value="" disabled>Select Destination</option>
                {DESTINATIONS.map((dest) => (
                  <option key={dest.id} value={dest.name}>{dest.name}</option>
                ))}
                <option value="Custom">Other / Custom Journey</option>
               </select>
               <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
           </div>
        </div>

        {!compact && (
          <div>
            <label className={labelClasses}>Message (Optional)</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} h-auto min-h-[50px] resize-none py-3`}
              placeholder="Tell us about your dream trip..."
              disabled={isSubmitting}
            />
          </div>
        )}
      </div>

      {submitError && (
          <div className="mt-6 text-red-500 text-xs text-center bg-red-50 p-2 rounded">
              {submitError}
          </div>
      )}

      <div className="mt-12 space-y-4">
        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold-500 text-white font-bold uppercase tracking-widest py-4 hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-xl text-sm rounded-[6px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {isSubmitting ? (
                <>
                    <Loader2 size={18} className="animate-spin mr-2" /> Encrypting & Saving...
                </>
            ) : (
                compact ? 'Quick Enquiry' : 'Send Enquiry'
            )}
        </button>
        
        <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <ShieldCheck size={12} className="text-green-500" /> Data Protection Enabled
        </div>
      </div>
    </form>
  );
};

export default EnquiryForm;
