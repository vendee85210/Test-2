import React from 'react';
import { mockBlogPosts } from '../data/mockData';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, User, Tag } from 'lucide-react';

const InspirationPage = () => {
  const inspirationCategories = [
    { name: "Holiday Ideas", count: 24 },
    { name: "Travel Tips", count: 18 },
    { name: "Local Guides", count: 32 },
    { name: "Interior Design", count: 15 },
    { name: "Food & Wine", count: 21 }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Holiday Inspiration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover insider tips, travel guides, and inspiration for your perfect French holiday. From local culture to hidden gems, we share everything you need to know.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {inspirationCategories.map((category, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-colors"
            >
              <Tag className="h-4 w-4 mr-2" />
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockBlogPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get Inspiration Delivered
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest travel tips, hidden gems, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;