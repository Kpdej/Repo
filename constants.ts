import { Shoe } from './types';

export const SHOES: Shoe[] = [
  {
    id: '1',
    name: 'Air VaporMax Plus',
    brand: 'Nike',
    price: 210,
    description: 'The Nike Air VaporMax Plus looks to the past to propel you into the future. Nodding to the 1998 Air Max Plus with its floating cage, padded upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up the comfort.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    colors: ['Red', 'Black', 'White'],
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: '2',
    name: 'Ultraboost Light',
    brand: 'Adidas',
    price: 190,
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of Adidas BOOST.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
    colors: ['Green', 'Black', 'Blue'],
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: '3',
    name: 'Jordan 1 Retro High',
    brand: 'Jordan',
    price: 180,
    description: 'Familiar but always fresh, the iconic Air Jordan 1 is remastered for today\'s sneakerhead culture. This Retro High OG version goes with premium leather, comfortable cushioning and classic design details.',
    category: 'Basketball',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
    colors: ['Red/White', 'Blue/Black'],
    sizes: [8, 9, 10, 11, 12, 13]
  },
  {
    id: '4',
    name: 'Yeezy Boost 350',
    brand: 'Adidas',
    price: 230,
    description: 'The Yeezy Boost 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. Reflective threads are woven into the laces.',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&q=80&w=1000',
    colors: ['Cream', 'Black', 'Zebra'],
    sizes: [4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: '5',
    name: 'Chuck 70 Vintage Canvas',
    brand: 'Converse',
    price: 85,
    description: 'The Chuck 70 is built from that original 1970s design, with premium materials and an extraordinary attention to detail. A shoe so rooted in tradition that it has its own instant history.',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000',
    colors: ['Black', 'White', 'Sunflower'],
    sizes: [5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: '6',
    name: 'Old Skool',
    brand: 'Vans',
    price: 70,
    description: 'First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the "jazz stripe".',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000',
    colors: ['Black', 'Navy', 'Red'],
    sizes: [6, 7, 8, 9, 10, 11, 12]
  }
];

export const CATEGORIES = ['All', 'Running', 'Basketball', 'Casual', 'Formal'];
