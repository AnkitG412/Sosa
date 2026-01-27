
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", light, src }) => {
  const [error, setError] = useState(false);

  // Updated to use the specific PNG logo provided
  // Using raw.githack.com to ensure the file is served with the correct image headers
  const defaultSrc = "https://raw.githack.com/AnkitG412/Sosa/main/Public/new%20sosa%20logo.png";
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
      // Removed 'brightness-0 invert' to ensure the logo renders with its original colors
      className={`h-16 w-auto object-contain select-none transition-opacity duration-300 ${className}`} 
    />
  );
};

export default Logo;
