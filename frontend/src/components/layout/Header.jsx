import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../ui/dropdown-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-400 transform rotate-45 flex items-center justify-center">
              <div className="w-6 h-6 bg-amber-500 transform -rotate-45"></div>
            </div>
            <span className="text-xl font-semibold tracking-wide text-gray-800">
              PURE FRANCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                  <span>English</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Owner Login */}
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Owner Login
            </Button>

            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <Search className="h-5 w-5" />
            </Button>

            {/* Shortlist */}
            <Button className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded-md flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Shortlist</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex items-center justify-end space-x-8 py-3 border-t border-gray-100">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                <span>Destinations</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Loire Valley</DropdownMenuItem>
              <DropdownMenuItem>Provence</DropdownMenuItem>
              <DropdownMenuItem>Dordogne</DropdownMenuItem>
              <DropdownMenuItem>Occitanie</DropdownMenuItem>
              <DropdownMenuItem>Brittany</DropdownMenuItem>
              <DropdownMenuItem>Côte d'Azur</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                <span>Inspiration</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Holiday Ideas</DropdownMenuItem>
              <DropdownMenuItem>Travel Tips</DropdownMenuItem>
              <DropdownMenuItem>Local Guides</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/blog">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
              Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            <Button variant="ghost" className="w-full justify-start">Destinations</Button>
            <Button variant="ghost" className="w-full justify-start">Inspiration</Button>
            <Button variant="ghost" className="w-full justify-start">Blog</Button>
            <div className="border-t pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start">English</Button>
              <Button variant="ghost" className="w-full justify-start">Owner Login</Button>
              <Button className="w-full bg-amber-400 hover:bg-amber-500 text-black">
                <Heart className="h-4 w-4 mr-2" />
                Shortlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;