import React, { useState } from 'react';

const InteractiveImageViewer = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  
  const regions = [
    {
      id: 1,
      title: "Mountain Peak",
      description: "The highest point in the range, reaching 3,000 meters above sea level.",
      x: 20,
      y: 20,
      width: 30,
      height: 30
    },
    {
      id: 2,
      title: "Forest Valley",
      description: "Dense pine forest home to diverse wildlife and hiking trails.",
      x: 60,
      y: 40,
      width: 25,
      height: 25
    },
    {
      id: 3,
      title: "Lake Vista",
      description: "Crystal clear alpine lake perfect for fishing and kayaking.",
      x: 40,
      y: 60,
      width: 35,
      height: 25
    }
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(selectedRegion?.id === region.id ? null : region);
  };

  // Calculate transform values for centering the selected region
  const getTransformStyle = (region) => {
    if (!region) return {};
    
    // Calculate the center point of the selected region
    const centerX = region.x + (region.width / 2);
    const centerY = region.y + (region.height / 2);
    
    // Calculate the translation needed to center this point
    const translateX = 50 - centerX;
    const translateY = 50 - centerY;
    
    return {
      transform: `scale(3) translate(${translateX}%, ${translateY}%)`,
      transformOrigin: 'center center'
    };
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Main container */}
      <div 
        className="relative transition-all duration-500 ease-in-out"
        style={selectedRegion ? getTransformStyle(selectedRegion) : {}}
      >
        {/* Placeholder image */}
        <div className="relative w-full h-96 bg-gray-200">
          <img 
            src="/api/placeholder/800/600" 
            alt="Landscape" 
            className="w-full h-full object-cover"
          />
          
          {/* Clickable regions */}
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => handleRegionClick(region)}
              className={`absolute border-2 rounded-md transition-all duration-300 
                ${selectedRegion?.id === region.id 
                  ? 'border-blue-500 bg-blue-100 bg-opacity-50' 
                  : 'border-white hover:border-blue-300 hover:bg-blue-50 hover:bg-opacity-30'}`}
              style={{
                left: `${region.x}%`,
                top: `${region.y}%`,
                width: `${region.width}%`,
                height: `${region.height}%`,
                cursor: 'pointer'
              }}
            >
              <span className="sr-only">{region.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Information panel */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg transition-transform duration-500 p-4 
        ${selectedRegion ? 'translate-y-0' : 'translate-y-full'}`}>
        {selectedRegion && (
          <div>
            <h2 className="text-xl font-bold mb-2">{selectedRegion.title}</h2>
            <p className="text-gray-600">{selectedRegion.description}</p>
            <button 
              onClick={() => setSelectedRegion(null)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reset View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveImageViewer;