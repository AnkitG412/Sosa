
export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  location?: string; // New field
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
  itinerary?: ItineraryItem[]; // New field
  coordinates?: { x: number; y: number }; // Percentage coordinates (0-100)
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
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
