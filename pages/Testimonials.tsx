
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS as STATIC_TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [allTestimonials, setAllTestimonials] = useState(STATIC_TESTIMONIALS);

  useEffect(() => {
    const loadReviews = () => {
      try {
          const localReviews = JSON.parse(localStorage.getItem('sosa_user_reviews') || '[]');
          setAllTestimonials([...localReviews, ...STATIC_TESTIMONIALS]);
      } catch (e) {
          console.error("Error loading reviews", e);
      }
    };

    loadReviews();
    window.addEventListener('review-added', loadReviews);
    return () => window.removeEventListener('review-added', loadReviews);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-cream">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-serif font-bold text-center text-primary-900 mb-16">Client Experiences</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-[12px] shadow-lg relative pt-12 flex flex-col justify-between">
              <div className="absolute -top-6 left-8 bg-gold-500 w-12 h-12 flex items-center justify-center rounded-full text-white shadow-md">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 italic leading-relaxed">"{t.quote}"</p>
                {t.imageUrl && t.imageUrl.startsWith('data:') && (
                     <div className="mt-4 w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500 mx-auto md:mx-0">
                         <img src={t.imageUrl} alt="User upload" className="w-full h-full object-cover" />
                     </div>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4">
                 <h4 className="font-bold text-primary-900 font-serif">{t.name}</h4>
                 <p className="text-xs text-gray-400 uppercase tracking-widest">{t.location}</p>
                 <div className="flex text-gold-500 mt-2">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
