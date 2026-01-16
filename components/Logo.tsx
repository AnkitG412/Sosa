
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  src?: string; // If you provide a URL here (e.g. "/logo.png"), it will render that image instead of the SVG.
}

const Logo: React.FC<LogoProps> = ({ className = "", src }) => {
  // If a source image (PNG/JPG) is provided, render it directly.
  if (src) {
    return (
      <img 
        src={src} 
        alt="SOSA DESTINATIONS" 
        className={`h-14 w-auto object-contain select-none ${className}`} 
      />
    );
  }

  // Otherwise, render the corrected SVG
  const gradientId = "sosa_logo_gradient";

  return (
    <svg 
      version="1.1" 
      viewBox="0 0 2627 1794" 
      className={`h-14 w-auto object-contain select-none ${className}`}
      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 1.5 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,238.26,-238.26,0,2154.99,1848.65)">
            <stop offset="0" stopColor="#f3d36e" stopOpacity="1"/>
            <stop offset="0.28" stopColor="#f5d672" stopOpacity="1"/>
            <stop offset="0.37" stopColor="#fadc7c" stopOpacity="1"/>
            <stop offset="0.45" stopColor="#ffe386" stopOpacity="1"/>
            <stop offset="0.73" stopColor="#ddb631" stopOpacity="1"/>
            <stop offset="1" stopColor="#d2a714" stopOpacity="1"/>
        </linearGradient>
      </defs>
      
      {/* 
          Restoring the nested group structure with modified transforms for the text 
          to ensure perfect alignment below the logo.
      */}
      <g transform="translate(-3364.91643, -603.434739)">
        <g transform="translate(3178.16643, 0)">
          <g transform="translate(0, 317.475913)">
            <g transform="translate(0, -963.9034)">
              
              {/* Compass / Icon Group */}
              <g transform="translate(226.205815, -141.098169)">
                 {/* Main Path */}
                 <path d="M651.053,2071.523C676.722,1769.197 917.99,1527.929 1220.316,1502.26M1327.273,1502.26C1629.599,1527.929 1870.866,1769.197 1896.535,2071.523M1896.535,2178.48C1870.866,2480.806 1629.599,2722.074 1327.273,2747.743M1220.316,2747.743C917.99,2722.074 676.722,2480.806 651.053,2178.48" fill="#ebebeb" fillOpacity="0" stroke="#c18b04" strokeWidth="25"/>
              </g>

              {/* Inner Ring */}
              <g transform="matrix(0.860246,0,0,0.860246,404.223784,155.879528)">
                  <path d="M651.852,2062.835C681.073,1767.476 916.269,1532.28 1211.628,1503.059M1335.961,1503.059C1631.32,1532.28 1866.515,1767.476 1895.737,2062.835M1895.737,2187.168C1866.515,2482.527 1631.32,2717.723 1335.961,2746.944M1211.628,2746.944C916.269,2717.723 681.073,2482.527 651.852,2187.168" fillOpacity="0" stroke="#c18b04" strokeWidth="29.06"/>
              </g>

              {/* Decorative Dots */}
              <g>
                <g transform="translate(245.549053, 182.014466)">
                   <circle cx="843.556" cy="2213.275" r="10.788" fill="#c18b04"/>
                </g>
                <g transform="translate(1067.734014, -640.170494)">
                   <circle cx="843.556" cy="2213.275" r="10.788" fill="#c18b04"/>
                </g>
              </g>

              {/* Mirrored Dots */}
              <g transform="matrix(0,1,-1,0,3484.394385,483.999532)">
                <g transform="translate(245.549053, 182.014466)">
                   <circle cx="843.556" cy="2213.275" r="10.788" fill="#c18b04"/>
                </g>
                <g transform="translate(1067.734014, -640.170494)">
                   <circle cx="843.556" cy="2213.275" r="10.788" fill="#c18b04"/>
                </g>
              </g>

              {/* Star / Compass Points */}
              <g id="compass" transform="translate(0, -36.954241)">
                 <g transform="matrix(0.535756,0,0,0.535756,344.592213,880.899938)">
                    <path d="M2636.12,1648L2305.25,2127.76L2636.12,2607.51L2156.59,2276.42L1676.84,2607.51L2007.93,2127.76L1676.84,1648L2156.59,1979.1L2636.12,1648Z" fillOpacity="0"/>
                    <path d="M2572.47,1711.88L2156.59,2127.76L2156.59,2004.14L2572.47,1711.88Z" fill="#fbd990"/>
                    <path d="M2572.47,2543.64L2156.59,2127.76L2280.21,2127.76L2572.47,2543.64Z" fill="#fbd990"/>
                    <path d="M2572.47,1711.88L2156.59,2127.76L2280.21,2127.76L2572.47,1711.88Z" fill="#c18b04"/>
                    <path d="M2572.47,2543.64L2156.59,2127.76L2156.59,2251.37L2572.47,2543.64Z" fill="#c18b04"/>
                    <path d="M1740.71,2543.64L2156.59,2127.76L2032.75,2127.76L1740.71,2543.64Z" fill="#c18b04"/>
                    <path d="M1740.71,1711.88L2156.59,2127.76L2156.59,2004.14L1740.71,1711.88Z" fill="#c18b04"/>
                    <path d="M1740.71,2543.64L2156.59,2127.76L2156.59,2251.37L1740.71,2543.64Z" fill="#fbd990"/>
                    <path d="M1740.71,1711.88L2156.59,2127.76L2032.75,2127.76L1740.71,1711.88Z" fill="#fbd990"/>
                    <path d="M2156.59,757.652L2368.9,1915.45L3526.7,2127.76L2368.9,2340.06L2156.59,3497.86L1944.06,2340.06L786.488,2127.76L1944.06,1915.45L2156.59,757.652Z" fill="#fff" fillOpacity="0"/>
                    <path d="M2156.59,939.858L2156.59,2127.76L1979.9,1951.07L2156.59,939.858Z" fill="#fbd990"/>
                    <path d="M3344.49,2127.76L2156.59,2127.76L2333.28,1951.07L3344.49,2127.76Z" fill="#fbd990"/>
                    <path d="M2156.59,939.858L2156.59,2127.76L2333.28,1951.07L2156.59,939.858Z" fill="#c18b04"/>
                    <path d="M3344.49,2127.76L2156.59,2127.76L2333.28,2304.45L3344.49,2127.76Z" fill="#c18b04"/>
                    <path d="M2156.59,3315.66L2156.59,2127.76L1979.9,2304.45L2156.59,3315.66Z" fill="#c18b04"/>
                    <path d="M968.694,2127.76L2156.59,2127.76L1979.9,1951.07L968.694,2127.76Z" fill="#c18b04"/>
                    <path d="M2156.59,3315.66L2156.59,2127.76L2333.28,2304.45L2156.59,3315.66Z" fill="#fbd990"/>
                    <path d="M968.694,2127.76L2156.59,2127.76L1979.9,2304.45L968.694,2127.76Z" fill="#fbd990"/>
                 </g>
              </g>

              {/* Text Group - Corrected Alignment */}
              <g transform="translate(-654.998057, 850)">
                  <text 
                    x="2155" 
                    y="2080" 
                    textAnchor="middle"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '230px', fontWeight: 'bold', fill: `url(#${gradientId})` }}
                  >
                    SOSA DESTINATIONS
                  </text>
              </g>

            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
