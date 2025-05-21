import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
}

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

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  const handleSelect = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleSelect(null)}
          className={`px-3 py-1.5 text-sm rounded-full transition-all ${
            selectedCategory === null
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleSelect(category)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;