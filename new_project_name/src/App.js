import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import './index.css'; // Ensure this line is present to import your CSS

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCarSection, setActiveCarSection] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setActiveCarSection(null);
  };

  const handleCarSectionClick = (section) => {
    setActiveCarSection(section);
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-blue-500 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
            <span className="font-bold text-lg">Aquila</span>
          </div>
          <div className="flex space-x-6">
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
        {currentPage === 'home' && (
          <Card>
            <CardHeader>
              <CardTitle>Home Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
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