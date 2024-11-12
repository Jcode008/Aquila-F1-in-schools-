import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import './index.css'; // Ensure this line is present to import your CSS

function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('home');
  // State to track the active car section
  const [activeCarSection, setActiveCarSection] = useState(null);

  // Function to handle navigation between pages
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setActiveCarSection(null); // Reset active car section when navigating
  };

  // Function to handle clicking on a car section
  const handleCarSectionClick = (section) => {
    setActiveCarSection(section);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation bar */}
      <nav className="bg-blue-500 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo button to navigate to home */}
            <button onClick={() => handleNavigation('home')}>
              <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
            </button>
            <span className="font-bold text-lg">Aquila F1 In Schools</span>
          </div>
          <div className="flex space-x-6">
            {/* Navigation buttons */}
            <button
              className={`hover:text-gray-300 ${
                currentPage === 'home' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </button>
            <button
              className={`hover:text-gray-300 ${
                currentPage === 'about' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className={`hover:text-gray-300 ${
                currentPage === 'contact' ? 'font-bold' : ''
              }`}
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-grow p-6">
        {/* Conditional rendering based on the current page */}
        {currentPage === 'home' && (
          <Card>
            <CardHeader>
              <CardTitle>Home Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {/* Car section buttons */}
                <button
                  className={`border rounded p-4 hover:bg-blue-500 hover:text-white ${
                    activeCarSection === 'engine' ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleCarSectionClick('engine')}
                >
                  Engine
                </button>
                <button
                  className={`border rounded p-4 hover:bg-blue-500 hover:text-white ${
                    activeCarSection === 'chassis' ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleCarSectionClick('chassis')}
                >
                  Chassis
                </button>
                <button
                  className={`border rounded p-4 hover:bg-blue-500 hover:text-white ${
                    activeCarSection === 'aerodynamics' ? 'bg-blue-500 text-white' : ''
                  }`}
                  onClick={() => handleCarSectionClick('aerodynamics')}
                >
                  Aerodynamics
                </button>
              </div>
              {/* Conditional rendering based on the active car section */}
              {activeCarSection === 'engine' && (
                <div className="mt-4">
                  {/* Content for the engine section */}
                </div>
              )}
              {activeCarSection === 'chassis' && (
                <div className="mt-4">
                  {/* Content for the chassis section */}
                </div>
              )}
              {activeCarSection === 'aerodynamics' && (
                <div className="mt-4">
                  {/* Content for the aerodynamics section */}
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {currentPage === 'about' && (
          <Card>
            <CardHeader>
              <CardTitle>About Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p>About content goes here.</p>
            </CardContent>
          </Card>
        )}
        {currentPage === 'contact' && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Contact content goes here.</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

export default App;