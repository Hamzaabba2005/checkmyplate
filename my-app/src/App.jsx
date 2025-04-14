import { useState } from "react";

export default function App() {
    const [reg, setReg] = useState("");

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight">CheckMyPlate</h1>
                    <nav className="hidden md:flex gap-8 text-base text-gray-600">
                        <a href="#how" className="hover:text-black">How it Works</a>
                        <a href="#pricing" className="hover:text-black">Pricing</a>
                        <a href="#faq" className="hover:text-black">FAQ</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="">
                <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div>
                        <h2 className="text-6xl font-extrabold leading-tight mb-8">
                            1 in 3 UK cars <br />
                            <span className="text-red-600">have a hidden past</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Including accidents, theft, write-offs or finance owed. Enter your reg to check your vehicle now.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={reg}
                                onChange={(e) => setReg(e.target.value.toUpperCase())}
                                placeholder="ENTER REG"
                                className="flex-1 px-6 py-4 rounded-md border border-gray-300 text-xl tracking-widest text-center"
                            />
                            <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition text-lg font-semibold">
                                Check Now
                            </button>
                        </div>
                    </div>

                    {/* Car Icon */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2137/2137894.png"
                            alt="Car icon"
                            className="w-72 h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 text-center">
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
                    {/* Full Report */}
                    <div className="bg-green-100 p-12 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col justify-between">
                        <div>
                            <h4 className="text-3xl font-bold mb-3">Full Report</h4>
                            <p className="text-lg text-gray-600 mb-2">50% Off – £4.99</p>
                            <p className="text-lg text-gray-600 mb-6">Covers all vital information</p>
                        </div>
                        <button className="bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 w-full text-xl font-semibold transition">
                            Get Full Report
                        </button>
                    </div>

                    {/* Sample Report */}
                    <div className="bg-yellow-100 p-12 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col justify-between">
                        <div>
                            <h4 className="text-3xl font-bold mb-3">Sample Full Report</h4>
                            <p className="text-lg text-gray-600 mb-6">See what's included</p>
                        </div>
                        <button className="bg-yellow-500 text-white px-6 py-4 rounded-lg hover:bg-yellow-600 w-full text-xl font-semibold transition">
                            View Sample
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 text-base text-gray-500 py-8 text-center mt-auto">
                © {new Date().getFullYear()} CheckMyPlate. All rights reserved.
            </footer>
        </div>
    );
}
