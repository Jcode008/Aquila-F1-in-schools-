import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import './index.css'; // Ensure this line is present to import your CSS

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeSection, setActiveSection] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setActiveSection(null);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="flex flex-col h-screen overflow-auto">
      <nav className="bg-blue-500 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => handleNavigation('home')} className="focus:outline-none">
              <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
            </button>
            <span className="font-bold text-lg">Aquila F1 In Schools</span>
          </div>
          <div className="flex space-x-6">
            <button
              className={`hover:text-gray-300 ${currentPage === 'home' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </button>
            <button
              className={`hover:text-gray-300 ${currentPage === 'about' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className={`hover:text-gray-300 ${currentPage === 'contact' ? 'font-bold' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-grow p-6 overflow-auto">
        {/* Conditional rendering based on the current page */}
        {currentPage === 'home' && (
          <Card>
            <CardHeader>
              <CardTitle>Home Page</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img src="/car.png" alt="Car" className="w-full h-auto" /> {/* Apply the CSS class */}
                <button
                  onClick={() => toggleSection('frontWing')}
                  className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'frontWing' && (
                  <div
                    className="
                      absolute
                      top-1/4
                      left-1/4
                      mt-14
                      ml-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Front Wing</b>
                      <p> - bla bla aerodynamics</p>
                      <p> - we will add more info about the front wing here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleSection('rearWing')}
                  className="absolute top-1/4 right-1/4 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'rearWing' && (
                  <div
                    className="
                      absolute
                      top-1/4
                      right-1/4
                      mt-14
                      mr-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Rear Wing</b>
                      <p> - bla bla aerodynamics</p>
                      <p> - we will add more info about the rear wing here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleSection('propulsion')}
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'propulsion' && (
                  <div
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      mt-14
                      ml-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Propulsion System</b>
                      <p> - bla bla propulsion</p>
                      <p> - we will add more info about the propulsion system here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleSection('body')}
                  className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'body' && (
                  <div
                    className="
                      absolute
                      bottom-1/4
                      left-1/4
                      mb-14
                      ml-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Body</b>
                      <p> - bla bla body</p>
                      <p> - we will add more info about the body here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleSection('extra1')}
                  className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'extra1' && (
                  <div
                    className="
                      absolute
                      bottom-1/4
                      right-1/4
                      mb-14
                      mr-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Extra Section 1</b>
                      <p> - bla bla extra section 1</p>
                      <p> - we will add more info about this section here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => toggleSection('extra2')}
                  className="absolute bottom-1/2 left-1/2 w-12 h-12 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                />
                {activeSection === 'extra2' && (
                  <div
                    className="
                      absolute
                      bottom-1/2
                      left-1/2
                      mb-14
                      ml-14
                      w-64
                      p-4
                      bg-white
                      shadow-md
                      rounded-lg
                      border
                      border-gray-200
                      transition-all
                      duration-500
                      ease-out
                      opacity-100
                      translate-y-0
                      scale-100
                    "
                  >
                    <div>
                      <img src="/Logo.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */}
                      <b>Extra Section 2</b>
                      <p> - bla bla extra section 2</p>
                      <p> - we will add more info about this section here</p>
                      <p> - still needs to be designed</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
        {currentPage === 'about' && (
          <Card>
            <CardHeader>
              <CardTitle>About Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p>At Aquila, our passion for Formula 1 is driven by a love for science, maths, and engineering. In the F1 in Schools competition, we aim to push the limits of speed and design to achieve peak performance. Our team is dedicated to creating a race-winning car for this year’s challenge, viewing F1 not just as a sport but as a platform to innovate and advance engineering.

              </p>
              <p><b>Our Motivation:</b></p>
              <p>
              As students at the Liverpool Maths School, our shared passion for maths and engineering unites us in our pursuit of innovation and competition. Whether we pursue careers in maths, physics, computer science, or engineering, F1 in Schools has allowed us to express our creativity, explore career paths, and forge lasting connections with sponsors who have been instrumental in helping us achieve our goals.
              </p>
              <p><b>Our Aspirations:</b></p>
              <p>While speed and competition excite us, we also prioritize sustainability and safety for the future of F1. By using sustainable materials and technologies, we aim to reduce our carbon footprint and set a new standard in motorsport. We are committed to continuous safety updates, ensuring that F1 remains thrilling yet safe for participants and fans alike. Our goal is not just to win, but to innovate responsibly, making a positive, lasting impact on the sport.</p>
            </CardContent>
          </Card>
        )}
        {currentPage === 'contact' && (
          <Card>
            <CardHeader>
              <CardTitle>Contact Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p><b>Social Media</b><a href="https://www.instagram.com/aquila_racing1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="/insta.png" alt="F1 in Schools Logo" className="logo rounded-full" /> {/* Apply the CSS class */} </a> </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

export default App;