
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "", src }) => {
  // Use the new logo from GitHub repository (Raw URL)
  const logoSrc = src || "https://raw.githubusercontent.com/AnkitG412/Sosa/main/Public/new%20sosa%20logo.svg";

  return (
    <img 
      src={logoSrc} 
      alt="SOSA Travelz" 
      className={`h-14 w-auto object-contain select-none ${className}`} 
    />
  );
};

export default Logo;
