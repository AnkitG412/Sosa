
import { Destination, Testimonial, BlogPost, CountryCode } from './types';

export const COUNTRY_CODES: CountryCode[] = [
  { code: 'US', name: 'United States', dial_code: '+1' },
  { code: 'GB', name: 'United Kingdom', dial_code: '+44' },
  { code: 'IN', name: 'India', dial_code: '+91' },
  { code: 'AE', name: 'UAE', dial_code: '+971' },
  { code: 'SG', name: 'Singapore', dial_code: '+65' },
  { code: 'AU', name: 'Australia', dial_code: '+61' },
  { code: 'CA', name: 'Canada', dial_code: '+1' },
  { code: 'FR', name: 'France', dial_code: '+33' },
  { code: 'DE', name: 'Germany', dial_code: '+49' },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    location: 'Southeast Asia',
    description: 'Experience the perfect blend of vibrant street life, sacred temples, and pristine beaches.',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$2,500',
    duration: '7 Nights / 8 Days',
    tag: 'Popular',
    longDescription: 'Thailand is a tapestry of diversity, where ancient traditions blend seamlessly with modern luxury. From the bustling streets of Bangkok to the serene hills of Chiang Mai and the limestone karsts of Krabi, our curated journey invites you to explore the Land of Smiles in unparalleled comfort. Stay in private pool villas, enjoy exclusive after-hours temple tours, and dine on Michelin-starred street food.',
    highlights: ['Private yacht tour of Phang Nga Bay', 'Exclusive dinner at Wat Arun', 'Elephant sanctuary volunteer experience', 'Luxury spa retreat in Chiang Mai'],
    gallery: [
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'November to early April',
    climate: 'Tropical, warm and humid year-round',
    timeZone: 'GMT+7',
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', description: 'VIP Meet & Greet at Suvarnabhumi Airport. Private transfer to The Mandarin Oriental. Evening dinner cruise on the Chao Phraya River.' },
      { day: 2, title: 'Temples & Palaces', description: 'Private guided tour of the Grand Palace and Wat Arun. Exclusive access to the Emerald Buddha. Traditional Thai massage in the afternoon.' },
      { day: 3, title: 'Flight to Chiang Mai', description: 'Fly to the cultural heart of the north. Check into Four Seasons Resort. Evening visit to the Night Bazaar.' },
      { day: 4, title: 'Gentle Giants', description: 'Ethical elephant sanctuary experience. Learn about conservation and feed the elephants. Private picnic lunch by a waterfall.' },
      { day: 5, title: 'South to Krabi', description: 'Flight to Krabi. Speedboat transfer to Rayavadee Resort, accessible only by sea. Sunset cocktails on Phranang Beach.' },
      { day: 6, title: 'Island Hopping', description: 'Private yacht charter around Phi Phi Islands. Snorkeling in crystal clear waters. Gourmet lunch served on board.' },
      { day: 7, title: 'Leisure & Departure', description: 'Morning at leisure to enjoy the spa or kayaking. Late afternoon private transfer to the airport for your onward journey.' },
      { day: 8, title: 'Departure', description: 'Private transfer to the airport for your return flight home, refreshed and inspired.' }
    ],
    coordinates: { x: 77.9, y: 42.3 }
  },
  {
    id: 'bali',
    name: 'Bali',
    location: 'Indonesia',
    description: 'A tropical paradise offering spiritual retreats, lush rice terraces, and volcanic coastlines.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$1,800',
    duration: '6 Nights / 7 Days',
    longDescription: 'Bali is more than a destination; it is a mood, an aspiration, and a tropical state of mind. Beyond the beaches lies a rich cultural heart in Ubud, where art, spirituality, and nature converge. Our bespoke itinerary takes you from the sacred water temples to the cliffside luxury of Uluwatu. Experience a private purification ceremony with a high priest and witness the Kecak fire dance against a sunset backdrop.',
    highlights: ['Sunrise trek to Mount Batur', 'Private purification ceremony', 'Ubud art village tour', 'Luxury cliffside dining in Uluwatu'],
    gallery: [
      'https://images.unsplash.com/photo-1559628233-eb1b1ee29aa3?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1537953773345-d1727908c0f3?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'April to October',
    climate: 'Tropical monsoon',
    timeZone: 'GMT+8',
    itinerary: [
      { day: 1, title: 'Welcome to Ubud', description: 'Arrival and private transfer to Mandapa, a Ritz-Carlton Reserve. Welcome foot ritual and dinner overlooking the Ayung River.' },
      { day: 2, title: 'Spiritual Awakening', description: 'Morning yoga session. Visit Tirta Empul for a purification ritual. Afternoon exploration of the Tegalalang Rice Terraces.' },
      { day: 3, title: 'Volcanic Sunrise', description: 'Early morning trek to Mount Batur for sunrise (optional) or a scenic helicopter tour over the crater. Afternoon spa treatment.' },
      { day: 4, title: 'Move to Uluwatu', description: 'Transfer to the southern coast. Check into Alila Villas Uluwatu. Sunset drinks at the iconic cliff-edge cabana.' },
      { day: 5, title: 'Culture & Cliffs', description: 'Private surfing lesson or beach relaxation. Evening visit to Uluwatu Temple for the Kecak Fire Dance performance.' },
      { day: 6, title: 'Seminyak Style', description: 'Day trip to Seminyak for high-end boutique shopping and lunch at a famous beach club. Farewell dinner at a cliffside restaurant.' },
      { day: 7, title: 'Departure', description: 'Morning leisure before your VIP airport transfer.' }
    ],
    coordinates: { x: 81.9, y: 54.6 }
  },
  {
    id: 'kerala',
    name: 'Kerala',
    location: 'Southern India',
    description: 'God’s Own Country. Serene backwaters, Ayurvedic healing, and emerald tea plantations.',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$1,200',
    duration: '5 Nights / 6 Days',
    tag: 'Nature',
    longDescription: 'Drift through the silent backwaters of Alleppey on a private ultra-luxury houseboat, waking up to the sounds of nature in God\'s Own Country. Kerala offers a slower pace of life, dedicated to wellness and nature. Visit the misty tea gardens of Munnar, indulge in authentic Ayurvedic treatments, and taste the spicy, coconut-rich cuisine that defines this coastal paradise.',
    highlights: ['Private luxury houseboat cruise', 'Authentic Ayurvedic rejuvenation therapy', 'Tea plantation heritage stay', 'Kathakali cultural performance'],
    gallery: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1589136777351-943288137361?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1625624773824-34305c120286?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'September to March',
    climate: 'Tropical, heavy monsoons in June-August',
    timeZone: 'GMT+5:30',
    itinerary: [
      { day: 1, title: 'Cochin Colonial Heritage', description: 'Arrive in Cochin. Stay at Brunton Boatyard. Sunset harbour cruise viewing Chinese fishing nets.' },
      { day: 2, title: 'Munnar Hills', description: 'Drive to the tea hills of Munnar. Stay in a colonial tea bungalow. Visit the Tea Museum.' },
      { day: 3, title: 'The Backwaters', description: 'Transfer to Alleppey. Board your private luxury houseboat (Kettuvallam). Cruise through canals and dine on deck.' },
      { day: 4, title: 'Kumarakom Wellness', description: 'Disembark and transfer to Kumarakom Lake Resort. Consultation with an Ayurvedic physician and therapeutic massage.' },
      { day: 5, title: 'Culture & Cuisine', description: 'Cooking class with a local family. Evening Kathakali dance performance.' },
      { day: 6, title: 'Departure', description: 'Transfer to Cochin airport for departure.' }
    ],
    coordinates: { x: 71.1, y: 44.5 }
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    location: 'Archipelago',
    description: 'Beyond Bali – explore Komodo Island, Raja Ampat, and cultural heritage sites.',
    imageUrl: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$2,200',
    duration: '9 Nights / 10 Days',
    longDescription: 'Venture beyond the ordinary into the vast archipelago of Indonesia. Discover the prehistoric dragons of Komodo National Park or dive into the world’s most biodiverse marine habitats in Raja Ampat. This journey is for the explorer who refuses to compromise on luxury, offering private phinisi schooner charters and eco-resorts on uninhabited islands.',
    highlights: ['Komodo dragon private tour', 'Diving in Raja Ampat', 'Borobudur sunrise experience', 'Private Phinisi sailing charter'],
    gallery: [
      'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1571573037233-a3d1354b9d04?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1596423736737-25e2254e0c38?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'May to September',
    climate: 'Tropical rainforest',
    timeZone: 'GMT+7',
    itinerary: [
      { day: 1, title: 'Arrival Java', description: 'Arrive Yogyakarta. Stay at Amanjiwo overlooking Borobudur.' },
      { day: 2, title: 'Borobudur Sunrise', description: 'Private sunrise access to the world’s largest Buddhist temple. Village cycling tour.' },
      { day: 3, title: 'Flight to Labuan Bajo', description: 'Fly to Flores. Board your private Phinisi yacht.' },
      { day: 4, title: 'Komodo National Park', description: 'Trek on Rinca Island to see Komodo Dragons. Snorkel at Pink Beach.' },
      { day: 5, title: 'Padar Island', description: 'Hiking Padar Island for iconic views. Swim with Manta Rays at Manta Point.' },
      { day: 6, title: 'Sailing & Seclusion', description: 'Cruise to uninhabited islands. Beach BBQ under the stars.' },
      { day: 7, title: 'Disembark & Fly', description: 'Return to port. Fly to Bali for a transit night in Jimbaran.' },
      { day: 8, title: 'Raja Ampat (Optional Ext)', description: 'Or conclude journey. If continuing: Fly to Sorong for Raja Ampat eco-resort.' },
      { day: 9, title: 'Marine Biodiversity', description: 'World-class diving or snorkeling in the Coral Triangle.' },
      { day: 10, title: 'Departure', description: 'Transfer to Sorong and flight back to Jakarta/Bali for international departure.' }
    ],
    coordinates: { x: 83.0, y: 55.0 }
  },
  {
    id: 'santorini',
    name: 'Santorini',
    location: 'Greece',
    description: 'Iconic white-washed buildings, blue domes, and breathtaking sunsets over the Aegean.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4c79e42d0?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$3,500',
    duration: '4 Nights / 5 Days',
    tag: 'Romantic',
    longDescription: 'The jewel of the Aegean, Santorini creates a dramatic canvas of white Cycladic architecture against volcanic cliffs and the deep blue sea. Our exclusive package secures you the finest caldera-view suites in Oia. Enjoy private wine tastings in ancient vineyards, catamaran cruises to the Red Beach, and history walks through Akrotiri.',
    highlights: ['Sunset yacht cruise', 'Private wine tasting tour', 'Helicopter tour over the Caldera', 'Luxury cave suite accommodation'],
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed92?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'Late April to early November',
    climate: 'Mediterranean',
    timeZone: 'GMT+2',
    itinerary: [
      { day: 1, title: 'Arrival in Oia', description: 'Private helicopter transfer from Athens (optional) or VIP airport pick-up. Check into Canaves Oia. Sunset dinner.' },
      { day: 2, title: 'Sailing the Caldera', description: 'Private catamaran cruise. Visit the Hot Springs, Red Beach, and White Beach. BBQ lunch on board.' },
      { day: 3, title: 'Wines of Santorini', description: 'Guided tour of three ancient wineries with a sommelier. Tasting of volcanic Assyrtiko wines.' },
      { day: 4, title: 'History & Heights', description: 'Visit the Akrotiri excavations. Hike from Fira to Oia (optional) or enjoy a private photo session.' },
      { day: 5, title: 'Departure', description: 'Morning breakfast with caldera views. Private transfer to the airport.' }
    ],
    coordinates: { x: 57.0, y: 29.8 }
  },
  {
    id: 'maldives',
    name: 'Maldives',
    location: 'Indian Ocean',
    description: 'Unrivaled luxury in overwater villas surrounded by crystal-clear turquoise lagoons.',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$4,000',
    duration: '5 Nights / 6 Days',
    tag: 'Luxury',
    longDescription: 'Escape to a world where the ocean acts as your private playground. The Maldives defines barefoot luxury. We partner with the most exclusive private islands to offer you overwater villas with glass floors, underwater dining experiences, and personalized butler service. Perfect for honeymooners or anyone seeking absolute seclusion.',
    highlights: ['Private island picnic', 'Underwater restaurant dining', 'Sunset dolphin cruise', 'Overwater spa treatments'],
    gallery: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'November to April',
    climate: 'Tropical',
    timeZone: 'GMT+5',
    itinerary: [
      { day: 1, title: 'Seaplane Arrival', description: 'VIP arrival at Velana Airport. Scenic seaplane transfer to Soneva Jani or similar private island.' },
      { day: 2, title: 'Lagoon Life', description: 'Relax in your overwater villa. Snorkel directly from your deck. Sunset dolphin watching cruise.' },
      { day: 3, title: 'Sandbank Picnic', description: 'Private boat drops you at a secluded sandbank for a chef-prepared lunch alone in the middle of the ocean.' },
      { day: 4, title: 'Underwater Dining', description: 'Spa treatment in an overwater pavilion. Dinner at an underwater restaurant surrounded by marine life.' },
      { day: 5, title: 'Marine Biology', description: 'Guided snorkeling with the resort’s marine biologist to plant coral. Stargazing at the observatory.' },
      { day: 6, title: 'Departure', description: 'Seaplane transfer back to the international airport.' }
    ],
    coordinates: { x: 70.3, y: 48.2 }
  },
  {
    id: 'swiss',
    name: 'Swiss Alps',
    location: 'Switzerland',
    description: 'Majestic peaks, pristine lakes, and world-class skiing in a winter wonderland.',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$5,000',
    duration: '6 Nights / 7 Days',
    longDescription: 'Breath in the crisp alpine air of Switzerland. Whether you prefer the glitz of St. Moritz in winter or the blooming meadows of Interlaken in summer, the Swiss Alps offer grandeur on a massive scale. Travel via the Glacier Express in excellence class, stay in historic grand hotels, and indulge in private chocolate and cheese tasting workshops.',
    highlights: ['Glacier Express Excellence Class', 'Private ski instructor in Zermatt', 'Lake Geneva luxury cruise', 'Chocolate making workshop'],
    gallery: [
      'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'Dec-Mar (Skiing), Jun-Sep (Hiking)',
    climate: 'Alpine',
    timeZone: 'GMT+1',
    itinerary: [
      { day: 1, title: 'Arrival Zurich', description: 'Private transfer to Lucerne. Stay at Bürgenstock Resort. Evening lake view dining.' },
      { day: 2, title: 'Mount Pilatus', description: 'Golden Round Trip: Boat, Cogwheel railway, and cable car to the summit of Mt. Pilatus.' },
      { day: 3, title: 'Interlaken & Jungfrau', description: 'Train to Interlaken. Private excursion to Jungfraujoch - Top of Europe.' },
      { day: 4, title: 'Glacier Express', description: 'Board the Glacier Express in Excellence Class (full service dining) from Andermatt to Zermatt.' },
      { day: 5, title: 'Zermatt & Matterhorn', description: 'Gornergrat railway for Matterhorn views. Private skiing or hiking guide depending on season.' },
      { day: 6, title: 'Geneva Luxury', description: 'Transfer to Geneva. Private watchmaking workshop or chocolate tasting tour.' },
      { day: 7, title: 'Departure', description: 'Private transfer to Geneva Airport.' }
    ],
    coordinates: { x: 52.3, y: 23.7 }
  },
  {
    id: 'paris',
    name: 'Paris',
    location: 'France',
    description: 'The city of lights, love, art, and fashion. A timeless European classic.',
    imageUrl: 'https://images.unsplash.com/photo-1499856871940-b09fe758151b?q=80&w=1920&auto=format&fit=crop',
    priceStart: '$3,200',
    duration: '5 Nights / 6 Days',
    longDescription: 'Paris is an emotion. We invite you to see the French capital through the eyes of a local connoisseur. Skip the lines at the Louvre with a private art historian, enjoy a dinner cruise on the Seine, and shop with a personal stylist in Le Marais. Stay in a palace hotel with views of the Eiffel Tower and experience the epitome of romance and sophistication.',
    highlights: ['Private Louvre tour', 'Seine River dinner cruise', 'Personal shopper experience', 'Versailles after-hours tour'],
    gallery: [
      'https://images.unsplash.com/photo-1565881606991-789a8dff9625?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1509040216641-05d97d25c65e?q=80&w=800&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=800&auto=format&fit=crop'
    ],
    bestTime: 'April to June, September to November',
    climate: 'Temperate',
    timeZone: 'GMT+1',
    itinerary: [
      { day: 1, title: 'Bienvenue à Paris', description: 'VIP Meet & Greet at CDG. Transfer to Hotel Ritz or Shangri-La. Evening Seine River champagne cruise.' },
      { day: 2, title: 'The Louvre Exclusive', description: 'Private tour of the Louvre with an art historian avoiding the crowds. Afternoon tea at Angelina.' },
      { day: 3, title: 'Fashion & Flavors', description: 'Morning with a personal stylist in Le Marais or Saint-Germain. Evening gastronomic food tour.' },
      { day: 4, title: 'Versailles Royal', description: 'Private transfer to Versailles. Exclusive after-hours tour of the Hall of Mirrors and gardens.' },
      { day: 5, title: 'Montmartre & Cabaret', description: 'Walking tour of Montmartre artists\' quarter. Farewell dinner at the Eiffel Tower (Jules Verne). Optional Moulin Rouge show.' },
      { day: 6, title: 'Au Revoir', description: 'Private transfer to the airport.' }
    ],
    coordinates: { x: 50.6, y: 22.8 }
  },
];

export const PILGRIMAGE_SITES: Destination[] = [
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    location: 'Uttarakhand, India',
    description: 'The Yoga Capital of the World, by the holy banks of the Ganges.',
    imageUrl: 'https://images.unsplash.com/photo-1565355610266-963d72ba252e?q=80&w=800&auto=format&fit=crop',
    duration: '5 Nights / 6 Days'
  },
  {
    id: 'golden-temple',
    name: 'Golden Temple',
    location: 'Punjab, India',
    description: 'Amritsar’s spiritual sanctuary representing human brotherhood and equality.',
    imageUrl: 'https://images.unsplash.com/photo-1582555627230-0eb2c3325603?q=80&w=800&auto=format&fit=crop',
    duration: '3 Nights / 4 Days'
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    location: 'Andhra Pradesh, India',
    description: 'The sacred abode of Lord Venkateswara nestled in the Seshachalam Hills.',
    imageUrl: 'https://images.unsplash.com/photo-1628151016625-f772ba9c8496?q=80&w=800&auto=format&fit=crop',
    duration: '2 Nights / 3 Days'
  },
  {
    id: 'himalaya',
    name: 'Himalayan Temples',
    location: 'Uttarakhand, India',
    description: 'Ancient shrines of Kedarnath and Badrinath amidst majestic snowy peaks.',
    imageUrl: 'https://images.unsplash.com/photo-1616428782352-793a38890250?q=80&w=800&auto=format&fit=crop',
    duration: '9 Nights / 10 Days'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Eleanor Sterling',
    location: 'London, UK',
    quote: 'SOSA Travelz curated the most exquisite anniversary trip to the Maldives. Every detail was handled with grace and precision.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rajesh Gupta',
    location: 'Mumbai, India',
    quote: 'Our corporate retreat in Bali was flawless. The MICE team understood our needs perfectly. Highly recommended.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    location: 'New York, USA',
    quote: 'The Divya Path journey to Rishikesh was transformative. Luxurious yet deeply spiritual.',
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Hidden Gems in Southeast Asia',
    excerpt: 'Discover the untouched paradises that offer seclusion and luxury away from the crowds.',
    date: 'Oct 15, 2023',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'The Art of Mindful Travel',
    excerpt: 'How spiritual journeys can reset your mind and soul in the modern world.',
    date: 'Nov 02, 2023',
    category: 'Wellness',
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Planning the Perfect Corporate Retreat',
    excerpt: 'Why location and logistics matter when organizing executive MICE travel.',
    date: 'Nov 20, 2023',
    category: 'Corporate',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
  },
];
