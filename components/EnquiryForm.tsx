
import React, { useState, useEffect } from 'react';
import { COUNTRY_CODES, DESTINATIONS } from '../constants';
import { ChevronDown, CheckCircle, Loader2 } from 'lucide-react';

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

  useEffect(() => {
    if (initialDestination) {
        setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // ************************************************************************
    // Current Form ID: xkogvloe
    // ************************************************************************
    const FORMSPREE_ID = 'xkogvloe'; 

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: `${formData.countryCode} ${formData.phone}`,
                destination: formData.destination,
                message: formData.message,
                // Optimized Subject line for Mobile Email Notifications
                _subject: `New Trip Enquiry: ${formData.name} for ${formData.destination || 'Custom Trip'}`
            })
        });

        if (response.ok) {
            setIsSubmitted(true);
        } else {
            const data = await response.json();
            if (data.errors) {
                setSubmitError(data.errors.map((err: any) => err.message).join(', '));
            } else {
                setSubmitError('There was a problem submitting your form');
            }
        }
    } catch (error) {
        console.error("Submission Error:", error);
        setSubmitError('Unable to send enquiry. Please try again later.');
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
         <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-reveal-up">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
               <CheckCircle className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">Enquiry Sent Successfully</h3>
            <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed text-sm">
               Thank you, <span className="font-bold">{formData.name}</span>. We have received your details via email.
            </p>
            
            <div className="bg-cream border border-gold-500/30 p-6 rounded-[12px] w-full max-w-sm">
               <p className="text-xs font-bold text-primary-900 uppercase tracking-widest mb-2">Expected Response Time</p>
               <p className="text-primary-900 font-inter text-lg">You will receive a response within <br/> 2–4 working hours</p>
            </div>

            <button 
              onClick={handleReset}
              className="mt-8 text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-primary-900 transition-colors"
            >
              Send Another Enquiry
            </button>
         </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      {!compact && <h3 className="text-3xl font-serif font-bold text-primary-900 mb-10 text-center">Start Your Journey</h3>}
      
      <div className="flex flex-col gap-8">
        
        {/* Row 1: Name */}
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

        {/* Row 2: Email */}
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

        {/* Row 3: Code + Phone */}
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

        {/* Row 4: Destination */}
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

        {/* Row 5: Message (Optional) */}
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-12 bg-gold-500 text-white font-bold uppercase tracking-widest py-4 hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm rounded-[6px] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
            <>
                <Loader2 size={18} className="animate-spin mr-2" /> Sending...
            </>
        ) : (
            compact ? 'Quick Enquiry' : 'Send Enquiry'
        )}
      </button>
    </form>
  );
};

export default EnquiryForm;
