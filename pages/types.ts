
export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  location?: string;
  description: string;
  imageUrl: string;
  priceStart?: string;
  duration?: string;
  tag?: string;
  longDescription?: string;
  highlights?: string[];
  gallery?: string[];
  bestTime?: string;
  climate?: string;
  timeZone?: string;
  currency?: string;
  language?: string;
  itinerary?: ItineraryItem[];
  coordinates?: { x: number; y: number };
  lat?: number;
  lng?: number;
  // New detailed insights fields
  idealFor?: string;
  visaPolicy?: string;
  foodOption?: string;
  cultureEtiquette?: string;
  safety?: string;
  transportation?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl?: string;
  designation?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface CountryCode {
  code: string;
  name: string;
  dial_code: string;
}
