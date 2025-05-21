import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import IdeaCard from '../components/IdeaCard';
import CategoryFilter from '../components/CategoryFilter';
import LocationFilter from '../components/LocationFilter';
import { Idea, Category } from '../types';
import { mockIdeas } from '../data/mockData';

const IdeaMarketplace: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Simulate fetching ideas
  useEffect(() => {
    const fetchIdeas = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIdeas(mockIdeas);
        setFilteredIdeas(mockIdeas);
        setLoading(false);
      }, 1000);
    };
    
    fetchIdeas();
  }, []);
  
  // Apply filters when they change
  useEffect(() => {
    let result = ideas;
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(idea => idea.category === selectedCategory);
    }
    
    // Apply location filter
    if (selectedLocation) {
      result = result.filter(idea => idea.location === selectedLocation);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        idea =>
          idea.title.toLowerCase().includes(query) ||
          idea.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredIdeas(result);
  }, [selectedCategory, selectedLocation, searchQuery, ideas]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering happens in the useEffect
  };
  
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSearchQuery('');
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h1 className="heading-xl mb-3">Idea Marketplace</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover innovative ideas from Ghanaian entrepreneurs seeking funding or open to selling their ideas.
          </p>
        </div>
        
        <div className="mb-8">
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent shadow-sm"
              placeholder="Search for ideas by keywords..."
            />
            <button type="submit" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-xl">Filters</h2>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-primary-600 hover:text-primary-800"
                >
                  Clear All
                </button>
              </div>
              
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              
              <LocationFilter
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            ) : filteredIdeas.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No ideas found</h3>
                <p className="text-gray-600 mb-4">
                  No ideas match your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 text-gray-600">
                  Showing {filteredIdeas.length} of {ideas.length} ideas
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredIdeas.map(idea => (
                    <IdeaCard key={idea.id} idea={idea} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaMarketplace;