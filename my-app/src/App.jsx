import React, { useState } from 'react';
import './index.css';

function App() {
  const [numberPlate, setNumberPlate] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase().replace(/\s/g, '');
    if (value.length <= 7) {
      setNumberPlate(value);
    }
  };

  return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-6 shadow-md flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">🚗 CHECKMYPLATE</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-4 text-white font-medium text-sm md:text-base">
              <li><a href="#reports" className="hover:underline">Reports</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#login" className="hover:underline">Log In</a></li>
              <li><a href="#signup" className="hover:underline">Sign Up</a></li>
              <li><a href="#download" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">Download App</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center mt-20 px-4">
          <label htmlFor="reg-input" className="text-lg font-semibold mb-2">Enter your registration number</label>
          <input
              id="reg-input"
              type="text"
              className="text-center p-3 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-xl tracking-widest uppercase shadow"
              placeholder="ENTER REG"
              value={numberPlate}
              onChange={handleInputChange}
              maxLength="7"
          />
          {numberPlate && (
              <p className="mt-4 text-green-600 font-semibold">
                You entered: <span className="underline">{numberPlate}</span>
              </p>
          )}
        </main>
      </div>
  );
}

export default App;
