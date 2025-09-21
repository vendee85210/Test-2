import React from 'react';
import { mockDestinations } from '../data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Home } from 'lucide-react';

const DestinationsPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            French Holiday Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the most beautiful regions of France. From the châteaux of the Loire Valley to the lavender fields of Provence, find your perfect holiday destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDestinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-bold text-2xl mb-2">{destination.name}</h3>
                  <p className="text-sm opacity-90 mb-3">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span className="text-sm">{destination.properties} properties</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{destination.region}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Popular Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.features.map((feature, index) => (
                      <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;