import React, { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { Calendar as CalendarComponent } from '../ui/calendar';

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState(2);

  return (
    <section className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
              Find your perfect French holiday home
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90">
              Holiday villas and rental châteaux throughout France
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-2xl max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Check-in Date */}
              <div className="space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12 bg-white border-gray-300 text-gray-700"
                    >
                      <Calendar className="mr-3 h-5 w-5 text-gray-400" />
                      {checkIn ? checkIn.toLocaleDateString() : "Choose your dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12 bg-white border-gray-300 text-gray-700"
                    >
                      <Calendar className="mr-3 h-5 w-5 text-gray-400" />
                      {checkOut ? checkOut.toLocaleDateString() : "Choose your dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal h-12 bg-white border-gray-300 text-gray-700"
                >
                  <Users className="mr-3 h-5 w-5 text-gray-400" />
                  <span>{guests} Guests</span>
                </Button>
              </div>

              {/* Search Button */}
              <Button className="h-12 bg-amber-400 hover:bg-amber-500 text-black font-semibold text-lg">
                <Search className="mr-2 h-5 w-5" />
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;