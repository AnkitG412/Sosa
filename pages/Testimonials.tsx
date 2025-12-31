import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-cream">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-serif font-bold text-center text-primary-900 mb-16">Client Experiences</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-lg shadow-lg relative pt-12">
              <div className="absolute -top-6 left-8 bg-gold-500 w-12 h-12 flex items-center justify-center rounded-full text-white shadow-md">
                <Quote size={20} fill="currentColor" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
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