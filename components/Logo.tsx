
import React from 'react';
import { Plane } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
  src?: string; // Optional prop for custom image URL
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false, src }) => {
  // If a source URL is provided, render the image logo
  if (src) {
    return (
      <img 
        src={src} 
        alt="Company Logo" 
        className={`h-12 w-auto object-contain select-none ${className}`} 
      />
    );
  }

  // Fallback to the default SOSA Travelz text/icon logo
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className={`flex items-center justify-center w-10 h-10 border border-current rounded-sm ${light ? 'text-white' : 'text-primary-900'}`}>
        <Plane size={20} className="transform -rotate-45" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <span className={`font-serif font-bold text-2xl leading-none tracking-wide ${light ? 'text-white' : 'text-primary-900'}`}>
          SOSA
        </span>
        <span className={`text-[0.6rem] uppercase tracking-[0.3em] leading-none mt-1 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
          Travelz
        </span>
      </div>
    </div>
  );
};

export default Logo;
