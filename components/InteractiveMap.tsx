
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { DESTINATIONS } from '../constants';
import L from 'leaflet';

// Fix for TypeScript error: Cannot find name 'google'.
declare var google: any;

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Please replace with your actual API key

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);
  const [isGoogleMap, setIsGoogleMap] = useState(false);

  useEffect(() => {
    if (!mapRef.current) return;

    // Check if we have a valid Google Maps Key (simple check to see if it's still the placeholder)
    const hasValidGoogleKey = GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== "YOUR_GOOGLE_MAPS_API_KEY";

    if (hasValidGoogleKey) {
        setIsGoogleMap(true);
        const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"]
        });

        loader.importLibrary("maps").then(async ({ Map }) => {
        const { Marker } = await loader.importLibrary("marker") as any;

        const map = new Map(mapRef.current!, {
            center: { lat: 20, lng: 70 },
            zoom: 3,
            mapTypeId: 'roadmap',
            disableDefaultUI: false,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
            styles: [
            {
                "elementType": "geometry",
                "stylers": [{ "color": "#f9f9f7" }] // Cream background matching brand
            },
            {
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#bdbdbd" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "color": "#dadada" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#616161" }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{ "color": "#e5e5e5" }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{ "color": "#eeeeee" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#0B3B2D" }] // Primary-900 for water
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#9e9e9e" }]
            }
            ]
        });

        const infoWindow = new google.maps.InfoWindow();

        DESTINATIONS.forEach((dest) => {
            if (dest.lat && dest.lng) {
            const marker = new Marker({
                position: { lat: dest.lat, lng: dest.lng },
                map: map,
                title: dest.name,
                animation: google.maps.Animation.DROP,
            });

            marker.addListener("click", () => {
                const contentString = `
                <div style="padding: 12px; font-family: 'Playfair Display', serif; text-align: center;">
                    <h3 style="margin: 0 0 8px; color: #0B3B2D; font-size: 18px; font-weight: bold;">${dest.name}</h3>
                    <p style="margin: 0 0 12px; font-family: 'Lato', sans-serif; font-size: 13px; color: #555;">${dest.location}</p>
                    <a href="#/destinations/${dest.id}" style="display: inline-block; background-color: #c5a028; color: white; text-decoration: none; padding: 6px 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; border-radius: 2px;">View Itinerary</a>
                </div>
                `;
                infoWindow.setContent(contentString);
                infoWindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
                });
            });
            }
        });
        }).catch((e) => {
        console.error("Google Maps failed to load", e);
        setMapError(true);
        });
    } else {
        // Fallback to Leaflet
        setIsGoogleMap(false);
        
        // Prevent re-initialization
        if ((mapRef.current as any)._leaflet_id) return;

        const map = L.map(mapRef.current!).setView([20, 70], 3);

        // Light/Cream colored map style (CartoDB Positron)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Custom Gold Icon
        const goldIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c5a028" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 drop-shadow-md" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        DESTINATIONS.forEach((dest) => {
            if (dest.lat && dest.lng) {
                const marker = L.marker([dest.lat, dest.lng], { icon: goldIcon }).addTo(map);
                
                const popupContent = `
                    <div style="font-family: 'Playfair Display', serif; text-align: center; min-width: 160px;">
                        <h3 style="margin: 0 0 5px; color: #0B3B2D; font-size: 16px; font-weight: bold;">${dest.name}</h3>
                        <p style="margin: 0 0 10px; font-family: 'Lato', sans-serif; font-size: 12px; color: #555;">${dest.location}</p>
                        <a href="#/destinations/${dest.id}" style="display: inline-block; background-color: #c5a028; color: white; text-decoration: none; padding: 5px 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; border-radius: 2px;">View Itinerary</a>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
            }
        });

        return () => {
            map.remove();
        };
    }

  }, []);

  return (
    <div className="w-full bg-cream py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-serif font-bold text-primary-900 mb-2">Global Presence</h2>
           <p className="text-gray-500 text-sm uppercase tracking-widest">Select a destination to explore</p>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[2.5/1] shadow-2xl rounded-xl overflow-hidden border-4 border-white bg-[#e5e7eb] z-0">
          {mapError ? (
             <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
               <p>Map could not be loaded. Please check your API configuration.</p>
             </div>
          ) : (
             <div ref={mapRef} className="w-full h-full z-0" style={{ isolation: 'isolate' }} />
          )}
          
          {!isGoogleMap && !mapError && GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY" && (
             <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 text-[10px] text-gray-500 rounded z-[1000] pointer-events-none">
               Using OpenStreetMap (Leaflet)
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
