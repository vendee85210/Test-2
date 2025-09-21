export const mockDestinations = [
  {
    id: 1,
    name: "Loire Valley",
    region: "Central France",
    description: "Famous châteaux, vineyards and royal history in the heart of France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 89,
    features: ["Châteaux", "Vineyards", "Historic Sites", "River Views"]
  },
  {
    id: 2,
    name: "Provence",
    region: "South of France", 
    description: "Lavender fields, hilltop villages and Mediterranean charm",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 156,
    features: ["Lavender Fields", "Markets", "Medieval Villages", "Art Galleries"]
  },
  {
    id: 3,
    name: "Dordogne", 
    region: "Southwest France",
    description: "Prehistoric caves, medieval castles and gastronomic delights",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 134,
    features: ["Medieval Castles", "Caves", "River Canoeing", "Truffle Markets"]
  },
  {
    id: 4,
    name: "Occitanie",
    region: "Southern France",
    description: "From Toulouse to the Mediterranean with Cathar castles and canals",
    image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    properties: 203,
    features: ["Cathar Castles", "Canal du Midi", "Pink City", "Wine Regions"]
  },
  {
    id: 5,
    name: "Brittany",
    region: "Northwest France",
    description: "Dramatic coastlines, Celtic culture and charming fishing villages", 
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 67,
    features: ["Coastal Walks", "Celtic Heritage", "Fishing Villages", "Crêperies"]
  },
  {
    id: 6,
    name: "Côte d'Azur",
    region: "French Riviera",
    description: "Glamorous beaches, luxury resorts and artistic heritage",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    properties: 98,
    features: ["Luxury Beaches", "Art Museums", "Designer Shopping", "Yacht Harbors"]
  }
];

export const mockProperties = [
  {
    id: 1,
    name: "Villa Rosalie",
    location: "Provence, France",
    price: "€2,450",
    period: "per week",
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    pool: true,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Private Pool", "WiFi", "Air Conditioning", "Garden", "BBQ"],
    description: "Beautiful Provençal villa with stunning countryside views, private pool and traditional stone architecture."
  },
  {
    id: 2, 
    name: "Château de Lumière",
    location: "Loire Valley, France",
    price: "€3,200",
    period: "per week",
    bedrooms: 6,
    bathrooms: 4,
    guests: 12,
    pool: false,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Historic Château", "WiFi", "Vineyard Views", "Library", "Tennis Court"],
    description: "Magnificent 18th-century château in the heart of Loire Valley with vineyard views and historic charm."
  },
  {
    id: 3,
    name: "Maison des Oliviers", 
    location: "Occitanie, France",
    price: "€1,890",
    period: "per week",
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    pool: true,
    image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Private Pool", "WiFi", "Olive Grove", "Terrace", "Mountain Views"],
    description: "Charming stone house surrounded by olive groves with stunning mountain views and private pool."
  }
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Châteaux in the Loire Valley",
    excerpt: "Discover the most spectacular châteaux that make the Loire Valley a UNESCO World Heritage site.",
    author: "Sarah Mitchell",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Destinations"
  },
  {
    id: 2,
    title: "Provence Market Guide: From Lavender to Local Delicacies", 
    excerpt: "Your complete guide to the best markets in Provence for authentic French experiences.",
    author: "Jean-Pierre Dubois",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Travel Tips"
  },
  {
    id: 3,
    title: "Family Fun in Dordogne: Activities for All Ages",
    excerpt: "From prehistoric caves to river adventures, discover family-friendly activities in Dordogne.",
    author: "Claire Thompson",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Family Travel"
  }
];