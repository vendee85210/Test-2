import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { MapPin } from 'lucide-react';

const RegionalShowcase = () => {
  const regions = [
    {
      id: 1,
      name: "Loire, Vendée, Brittany and Burgundy",
      subtitle: "The beautiful heart of Central France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: 245
    },
    {
      id: 2,
      name: "Dordogne and South-West",
      subtitle: "The much-loved South-West",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: 189
    },
    {
      id: 3,
      name: "Occitanie (inc. Languedoc)",
      subtitle: "The sun-drenched Mediterranean",
      image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: 312
    },
    {
      id: 4,
      name: "Provence, Côte d'Azur and Corsica",
      subtitle: "Picturesque villages and the French Riviera",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: 156
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            View our holiday homes in...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region) => (
            <Card key={region.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={region.image}
                  alt={region.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 leading-tight">{region.name}</h3>
                  <p className="text-sm opacity-90">{region.subtitle}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {region.properties} homes
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-slate-600 hover:bg-slate-700 text-white font-medium px-8 py-3 rounded-md flex items-center mx-auto">
            <MapPin className="mr-2 h-5 w-5" />
            VIEW PROPERTIES ON MAP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegionalShowcase;