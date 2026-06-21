// All content for Villa Presolana B&B – replace placeholders with real data later

export const content = {
  // BASIC INFO
  name: 'Villa Presolana',
  rating: 4.5,
  reviewsCount: 21,
  tagline: 'Charming B&B in the Heart of Bergamo Hills',
  description: 'Nestled in the picturesque village of Castione della Presolana, Villa Presolana offers a tranquil retreat with breathtaking mountain views. Our family-run B&B combines traditional Lombardy hospitality with modern comforts, making it the perfect base for exploring the Bergamo Alps.',
  founded: '2005', // replace with actual year

  // CONTACT
  address: 'Via Cantoniera, Castione della Presolana, Province of Bergamo, Italy',
  phone: '+39 349 313 1690',
  email: 'info@villapresolana.it', // placeholder
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.7861999225192!2d10.1022556!3d45.9298739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4783c53521cfc89b%3A0x922d8ad51454ff0c!2sVilla%20presolana!5e1!3m2!1sen!2stn!4v1781972411548!5m2!1sen!2stn',

  // HERO IMAGE (place in public/)
  heroImage: '/hero.jpg',

  // ROOMS
  rooms: [
    {
      id: 1,
      name: 'Double Room with Mountain View',
      description: 'Spacious double room with large windows overlooking the valley. Includes en-suite bathroom, free Wi-Fi, and satellite TV.',
      price: '€80 / night',
      capacity: '2 guests',
      image: '/room1.jpg',
    },
    {
      id: 2,
      name: 'Family Suite',
      description: 'Two connecting rooms perfect for families, with a private terrace and garden view. Includes kitchenette and extra bedding.',
      price: '€120 / night',
      capacity: '4 guests',
      image: '/room2.jpg',
    },
    {
      id: 3,
      name: 'Single Room – Cozy',
      description: 'Comfortable single room with all essentials – ideal for solo travelers seeking peace and quiet.',
      price: '€50 / night',
      capacity: '1 guest',
      image: '/room3.jpg',
    },
  ],

  // GALLERY IMAGES (place in public/)
  galleryImages: [
    { id: 1, title: 'Front Exterior', category: 'property', url: '/ext1.jpg' },
    { id: 2, title: 'Garden', category: 'property', url: '/ext2.jpg' },
    { id: 3, title: 'Mountain Surroundings', category: 'surroundings', url: '/ext3.jpg' },
    { id: 4, title: 'Terrace', category: 'property', url: '/ext4.jpg' },
    { id: 5, title: 'Entrance', category: 'property', url: '/ext5.jpg' },
    { id: 6, title: 'Sunset View', category: 'surroundings', url: '/ext6.jpg' },
  ],

  // FEATURES / AMENITIES (icons or badges)
  amenities: [
    'Free Wi-Fi',
    'Breakfast included',
    'Free parking',
    'Pet-friendly',
    'Garden',
    'Mountain views',
  ],

  // NEARBY ATTRACTIONS
  attractions: [
    'Presolana Mountain – hiking trails',
    'Lago di Endine – lake activities',
    'Bergamo Città Alta – historical center',
    'Canto Alto – panoramic viewpoint',
  ],
};