import React, { useState } from 'react';
import { Lightbulb, Upload, Info } from 'lucide-react';

type IdeaType = 'sell' | 'funding';
type Category = 'Health' | 'Agriculture' | 'Finance' | 'Construction' | 'Tech' | 'Retail' | 'AI' | 'Food' | 'Social Enterprise';

const IdeaSubmission: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    ideaType: 'funding' as IdeaType,
    hasNDA: false,
    image: null as File | null,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const locations = [
    'Accra',
    'Kumasi',
    'Tamale',
    'Cape Coast',
    'Takoradi',
    'Sunyani',
    'Ho',
    'Koforidua',
    'Other'
  ];
  
  const categories: Category[] = [
    'Health',
    'Agriculture',
    'Finance',
    'Construction',
    'Tech',
    'Retail',
    'AI',
    'Food',
    'Social Enterprise'
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };
  
  const handleIdeaTypeChange = (type: IdeaType) => {
    setFormData(prev => ({ ...prev, ideaType: type }));
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.category) newErrors.category = 'Category is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          title: '',
          description: '',
          location: '',
          category: '',
          ideaType: 'funding',
          hasNDA: false,
          image: null,
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="heading-xl mb-3">Submit Your Idea</h1>
            <p className="text-gray-600">
              Share your innovative concept with investors and turn your vision into reality.
            </p>
          </div>
          
          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-3">Idea Submitted Successfully!</h2>
              <p className="mb-4">
                Your idea has been submitted and will be reviewed by our team. You will be notified when investors show interest.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-secondary-900 p-6">
                <h2 className="text-xl font-bold text-white">Idea Submission Form</h2>
                <p className="text-gray-300 mt-1">
                  Fill out the details below to submit your innovative idea
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                {/* Idea Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you want to do with your idea?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleIdeaTypeChange('funding')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-all ${
                        formData.ideaType === 'funding'
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        formData.ideaType === 'funding' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Lightbulb size={24} />
                      </div>
                      <h3 className="font-semibold">Seek Funding</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Find investors to fund your idea while maintaining ownership
                      </p>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleIdeaTypeChange('sell')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-all ${
                        formData.ideaType === 'sell'
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        formData.ideaType === 'sell' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Info size={24} />
                      </div>
                      <h3 className="font-semibold">Sell Idea</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Sell your idea outright to interested buyers
                      </p>
                    </button>
                  </div>
                </div>
                
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Idea Title*
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className={`input-field ${errors.title ? 'border-red-500' : ''}`}
                      placeholder="A concise, catchy title for your idea"
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className={`input-field ${errors.description ? 'border-red-500' : ''}`}
                      placeholder="Provide a detailed description of your idea, including problems it solves and its potential impact"
                    />
                    {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location*
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`input-field ${errors.location ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select a location</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                      Category*
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`input-field ${errors.category ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label htmlFor="image" className="cursor-pointer block">
                      <Upload className="w-10 h-10 mx-auto text-gray-400" />
                      <span className="mt-2 block text-sm font-medium text-gray-700">
                        {formData.image ? formData.image.name : 'Click to upload an image'}
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">PNG, JPG up to 5MB</span>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="hasNDA"
                      checked={formData.hasNDA}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      Request NDA (Non-Disclosure Agreement) before sharing detailed information with interested investors
                    </span>
                  </label>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Idea'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmission;