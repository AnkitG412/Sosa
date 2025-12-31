
import React, { useState, useEffect } from 'react';
import { COUNTRY_CODES, DESTINATIONS } from '../constants';
import { ChevronDown } from 'lucide-react';

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

  useEffect(() => {
    if (initialDestination) {
        setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. We will contact you shortly about your trip to ${formData.destination}!`);
    setFormData({ name: '', email: '', countryCode: '+91', phone: '', destination: '', message: '' });
  };

  const inputClasses = "w-full border-b border-gray-300 py-2 h-10 focus:outline-none focus:border-gold-500 transition-colors bg-transparent text-sm placeholder-gray-400";
  const labelClasses = "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1";

  return (
    <form onSubmit={handleSubmit} className={`${compact ? 'bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-2xl' : 'bg-white p-8 md:p-12 rounded-lg shadow-xl'} ${className}`}>
      {!compact && <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6 text-center">Start Your Journey</h3>}
      
      <div className={`grid gap-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
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
          />
        </div>
        <div>
           <label className={labelClasses}>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className={`grid gap-6 mt-6 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div className="flex gap-4">
          <div className="w-28 flex-shrink-0">
             <label className={labelClasses}>Code</label>
             <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer pr-6`}
                  style={{ backgroundImage: 'none' }} 
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
      </div>

      {!compact && (
        <div className="mt-6">
          <label className={labelClasses}>Message (Optional)</label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} h-auto resize-none`}
            placeholder="Tell us about your dream trip..."
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full mt-8 bg-gold-500 text-white font-bold uppercase tracking-widest py-3 hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
      >
        {compact ? 'Quick Enquiry' : 'Send Enquiry'}
      </button>
    </form>
  );
};

export default EnquiryForm;
