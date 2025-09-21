import React from 'react';
import { mockBlogPosts } from '../data/mockData';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Input } from '../ui/input';

const BlogPage = () => {
  // Extended blog posts for demonstration
  const allBlogPosts = [
    ...mockBlogPosts,
    {
      id: 4,
      title: "Wine Tasting in Burgundy: A Complete Guide",
      excerpt: "Explore the renowned wine regions of Burgundy and discover the best vineyards and tasting experiences.",
      author: "Antoine Rousseau",
      date: "2024-01-20",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Food & Wine"
    },
    {
      id: 5,
      title: "Cycling Through the French Countryside",
      excerpt: "Discover the best cycling routes through France's most beautiful rural landscapes and charming villages.",
      author: "Marie Leblanc",
      date: "2024-01-18",
      image: "https://images.unsplash.com/photo-1558618186-ffc7c884c8b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Adventure"
    },
    {
      id: 6,
      title: "French Holiday Home Interior Design Trends",
      excerpt: "Get inspired by the latest interior design trends in French holiday homes, from rustic charm to modern elegance.",
      author: "Sophie Moreau",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Interior Design"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Pure France Magazine
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your guide to French culture, travel tips, and holiday inspiration. Discover the authentic France through our expert insights and local knowledge.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              type="search" 
              placeholder="Search articles..."
              className="pl-10 pr-4 py-3 w-full border-gray-300 focus:border-amber-400 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={allBlogPosts[0].image}
                  alt={allBlogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {allBlogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {allBlogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{allBlogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(allBlogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
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
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="hover:bg-amber-400 hover:text-black hover:border-amber-400">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;