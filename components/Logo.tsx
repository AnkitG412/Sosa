
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", light, src }) => {
  const [error, setError] = useState(false);

  // Using jsDelivr CDN which is optimized for serving files from GitHub and is more reliable than raw links
  const defaultSrc = "https://cdn.jsdelivr.net/gh/AnkitG412/Sosa@main/Public/new%20sosa%20logo.png";
  const logoSrc = src || defaultSrc;

  // Fallback to text if the image fails to load
  if (error) {
    return (
      <div className={`font-serif font-bold text-3xl tracking-widest uppercase ${light ? 'text-white' : 'text-primary-900'} ${className}`}>
        SOSA
      </div>
    );
  }

  return (
    <img 
      src={logoSrc} 
      alt="SOSA Travelz" 
      onError={() => setError(true)}
      className={`h-16 w-auto object-contain select-none transition-opacity duration-300 ${className}`} 
    />
  );
};

export default Logo;
