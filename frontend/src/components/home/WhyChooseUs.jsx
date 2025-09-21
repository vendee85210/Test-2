import React from 'react';
import { Button } from '../ui/button';
import { Shield, Clock, Users, Home } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality & Trust",
      description: "First and foremost is our huge range of quality holiday homes, which have all been personally visited by our team for your peace of mind."
    },
    {
      icon: Clock,
      title: "Simple Booking",
      description: "We offer secure and user friendly online booking and card payment facilities with Visa and MasterCard."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "We have many customers who return to us year after year and recommend us to their friends and family as they appreciate our excellent customer service."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Features */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center md:text-left">
              <p className="text-gray-600 mb-2">
                Secondly, we keep things simple, so the advertised price is the price you pay with no hidden charges, booking fees, cleaning charges or card fees.
              </p>
              <p className="text-gray-600">
                We know how important it is to find the perfect holiday home for you and your family and we are here to help you every step of the way, with our office open from early to late, 7 days a week.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Home className="h-16 w-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                So why book your French villa holiday with anyone else?
              </h3>
              <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3">
                🏠 SEARCH HOLIDAY HOMES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;