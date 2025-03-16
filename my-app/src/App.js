import React from "react";

export default function App() {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">CheckMyPlate</h1>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
          Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Check the history of any used car
          </h2>
          <p className="mb-6 text-gray-700">
            Enter your registration plate below to get an instant vehicle report.
          </p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter Reg"
              className="p-3 rounded-l-md border border-gray-300 flex-grow"
            />
            <button className="bg-yellow-400 px-5 rounded-r-md font-semibold">
              Check vehicle
            </button>
          </div>
        </div>
        <img
          src="https://via.placeholder.com/400x250"
          alt="Car Visual"
          className="mt-10 md:mt-0 rounded-lg shadow-lg"
        />
      </section>

      {/* Scrollable Sections */}
      <section className="bg-white p-10 space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Why CheckMyPlate?</h3>
          <p>✔️ Check for damage, theft records, mileage rollbacks & more.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Our Guarantee</h3>
          <p>✔️ Trusted by thousands of users with accurate data reports.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Partners</h3>
          <p>✔️ Data sourced from reputable partners across the UK & EU.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 text-gray-600">
        © {new Date().getFullYear()} CheckMyPlate Ltd.
      </footer>
    </div>
  );
}
