import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { MapPin } from 'lucide-react';
import { destinationService, handleApiError } from '../../services/api';

const RegionalShowcase = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const response = await destinationService.getDestinations();
        setRegions(response.data);
        setError(null);
      } catch (err) {
        const errorInfo = handleApiError(err);
        setError(errorInfo.message);
        console.error('Error fetching destinations:', errorInfo);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
              Loading holiday destinations...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-red-800 font-semibold mb-2">Error Loading Destinations</h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

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
                  <p className="text-sm opacity-90">{region.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {region.property_count} homes
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