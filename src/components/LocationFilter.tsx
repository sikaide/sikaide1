import React from 'react';

interface LocationFilterProps {
  selectedLocation: string | null;
  setSelectedLocation: (location: string | null) => void;
}

const locations = [
  'Accra',
  'Kumasi',
  'Tamale',
  'Cape Coast',
  'Takoradi',
  'Sunyani',
  'Ho',
  'Koforidua'
];

const LocationFilter: React.FC<LocationFilterProps> = ({ selectedLocation, setSelectedLocation }) => {
  const handleSelect = (location: string | null) => {
    setSelectedLocation(location);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Locations</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleSelect(null)}
          className={`px-3 py-1.5 text-sm rounded-full transition-all ${
            selectedLocation === null
              ? 'bg-primary-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => handleSelect(location)}
            className={`px-3 py-1.5 text-sm rounded-full transition-all ${
              selectedLocation === location
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationFilter;