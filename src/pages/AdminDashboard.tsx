import React, { useState } from 'react';
import { Flag, Trash2, Eye, Search } from 'lucide-react';
import { mockIdeas, mockUsers } from '../data/mockData';
import { Idea } from '../types';

const AdminDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'flagged' | 'active'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // In a real app, these would be managed through a backend
  const [flaggedIdeas, setFlaggedIdeas] = useState<Set<string>>(new Set());
  
  const handleFlag = (ideaId: string) => {
    setFlaggedIdeas(prev => {
      const newSet = new Set(prev);
      if (newSet.has(ideaId)) {
        newSet.delete(ideaId);
      } else {
        newSet.add(ideaId);
      }
      return newSet;
    });
  };
  
  const handleDelete = (ideaId: string) => {
    // In a real app, this would send a request to the backend
    console.log('Deleting idea:', ideaId);
  };
  
  const filteredIdeas = mockIdeas.filter(idea => {
    const matchesSearch = 
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = 
      selectedStatus === 'all' ||
      (selectedStatus === 'flagged' && flaggedIdeas.has(idea.id)) ||
      (selectedStatus === 'active' && !flaggedIdeas.has(idea.id));
      
    const matchesCategory =
      selectedCategory === 'all' || idea.category === selectedCategory;
      
    return matchesSearch && matchesStatus && matchesCategory;
  });
  
  const categories = Array.from(new Set(mockIdeas.map(idea => idea.category)));
  
  const stats = {
    totalIdeas: mockIdeas.length,
    flaggedIdeas: flaggedIdeas.size,
    activeUsers: mockUsers.length,
    pendingReview: Math.floor(mockIdeas.length * 0.3) // Simulated stat
  };
  
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="heading-xl mb-6">Admin Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Ideas</h3>
              <p className="text-3xl font-bold text-primary-600">{stats.totalIdeas}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flagged Ideas</h3>
              <p className="text-3xl font-bold text-red-600">{stats.flaggedIdeas}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Users</h3>
              <p className="text-3xl font-bold text-green-600">{stats.activeUsers}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Review</h3>
              <p className="text-3xl font-bold text-yellow-600">{stats.pendingReview}</p>
            </div>
          </div>
          
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Ideas
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title or description..."
                    className="input-field pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value as 'all' | 'flagged' | 'active')}
                  className="input-field"
                >
                  <option value="all">All Ideas</option>
                  <option value="flagged">Flagged</option>
                  <option value="active">Active</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ideas Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Idea
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Creator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredIdeas.map((idea) => {
                  const creator = mockUsers.find(u => u.id === idea.createdBy);
                  
                  return (
                    <tr key={idea.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {idea.imageUrl ? (
                            <img
                              src={idea.imageUrl}
                              alt={idea.title}
                              className="w-10 h-10 rounded object-cover mr-3"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded bg-primary-100 flex items-center justify-center mr-3">
                              <span className="text-primary-600 font-semibold">
                                {idea.title.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{idea.title}</div>
                            <div className="text-sm text-gray-500">
                              {new Date(idea.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={creator?.profilePicture}
                            alt={creator?.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          <span className="text-sm text-gray-900">{creator?.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                          {idea.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {idea.location}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          flaggedIdeas.has(idea.id)
                            ? 'bg-red-100 text-red-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {flaggedIdeas.has(idea.id) ? 'Flagged' : 'Active'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleFlag(idea.id)}
                            className={`p-1 rounded-full ${
                              flaggedIdeas.has(idea.id)
                                ? 'text-red-600 hover:bg-red-100'
                                : 'text-gray-400 hover:bg-gray-100'
                            }`}
                          >
                            <Flag size={18} />
                          </button>
                          <button
                            onClick={() => window.location.href = `/ideas/${idea.id}`}
                            className="p-1 rounded-full text-blue-600 hover:bg-blue-100"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(idea.id)}
                            className="p-1 rounded-full text-red-600 hover:bg-red-100"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;