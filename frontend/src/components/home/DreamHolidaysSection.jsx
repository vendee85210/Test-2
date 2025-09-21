import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const DreamHolidaysSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            <span className="text-amber-400">"</span>
            Dream Holidays, Dream Prices
            <span className="text-amber-400">"</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover amazing discounts and special offers on many of our fabulous properties all over France.
          </p>
          
          <Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-4 rounded-full text-lg">
            ✅ SPECIAL OFFERS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DreamHolidaysSection;