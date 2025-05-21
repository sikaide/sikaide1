import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, MapPin, Tag, MessageSquare } from 'lucide-react';
import { mockIdeas, mockUsers } from '../data/mockData';
import { Idea } from '../types';

const IdeaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showContactForm, setShowContactForm] = useState(false);
  
  const idea = mockIdeas.find(i => i.id === id);
  const creator = idea ? mockUsers.find(u => u.id === idea.createdBy) : null;
  
  if (!idea || !creator) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Idea Not Found</h2>
            <p className="text-gray-600 mb-6">The idea you're looking for doesn't exist or has been removed.</p>
            <Link to="/marketplace" className="btn-primary">
              Return to Marketplace
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {idea.imageUrl && (
                <div className="h-64 md:h-96">
                  <img 
                    src={idea.imageUrl} 
                    alt={idea.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{idea.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-1" />
                    <span>{idea.category}</span>
                  </div>
                  {idea.hasNDA && (
                    <div className="flex items-center text-green-600">
                      <Shield size={16} className="mr-1" />
                      <span>NDA Protected</span>
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold mb-4">{idea.title}</h1>
                
                <div className="prose max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {idea.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2">Type</h3>
                      <p className="text-gray-600">
                        {idea.type === 'funding' ? 'Seeking Funding' : 'For Sale'}
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-medium mb-2">Posted</h3>
                      <p className="text-gray-600">
                        {new Date(idea.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <img
                  src={creator.profilePicture || 'https://via.placeholder.com/40'}
                  alt={creator.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{creator.name}</h3>
                  <p className="text-sm text-gray-500">Idea Creator</p>
                </div>
              </div>
              
              {!showContactForm ? (
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <MessageSquare size={20} className="mr-2" />
                  Request More Information
                </button>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      className="input-field"
                      placeholder="Introduce yourself and explain your interest..."
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="agreeToNDA"
                      className="mr-2"
                    />
                    <label htmlFor="agreeToNDA" className="text-sm text-gray-600">
                      I agree to sign an NDA if required
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full btn-primary">
                    Send Message
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="w-full btn-outline mt-2"
                  >
                    Cancel
                  </button>
                </form>
              )}
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-2">Important Note</h4>
                <p className="text-sm text-gray-600">
                  This idea {idea.hasNDA ? 'requires' : 'may require'} signing an NDA before detailed information can be shared. Communication will be handled through our secure messaging system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetails;