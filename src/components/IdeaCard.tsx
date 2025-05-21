import React from 'react';
import { Link } from 'react-router-dom';
import { Idea } from '../types';
import { ShieldCheck, MapPin, Tag } from 'lucide-react';

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  return (
    <Link to={`/ideas/${idea.id}`} className="block">
      <div className="card group h-full flex flex-col">
        <div className="h-48 overflow-hidden relative">
          {idea.imageUrl ? (
            <img 
              src={idea.imageUrl} 
              alt={idea.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-secondary-700 to-secondary-900 flex items-center justify-center">
              <span className="text-2xl text-white font-semibold">{idea.title.charAt(0)}</span>
            </div>
          )}
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full py-1 px-3 text-xs font-semibold text-secondary-900">
            {idea.type === 'funding' ? 'Seeking Funding' : 'For Sale'}
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{idea.location}</span>
            </div>
            <div className="flex items-center">
              <Tag size={14} className="mr-1" />
              <span>{idea.category}</span>
            </div>
          </div>
          
          <h3 className="heading-md text-lg font-semibold group-hover:text-primary-600 transition-colors mb-2">
            {idea.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {idea.description}
          </p>
          
          <div className="mt-auto flex items-center text-xs text-gray-500">
            {idea.hasNDA && (
              <div className="flex items-center text-green-600 mr-2">
                <ShieldCheck size={14} className="mr-1" />
                <span>NDA Protected</span>
              </div>
            )}
            <span className="ml-auto">
              {new Date(idea.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IdeaCard;