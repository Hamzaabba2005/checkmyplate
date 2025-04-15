import { useState } from "react";


export default function App() {
    const [reg, setReg] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            {/* Header */}
            <header className="bg-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight">CheckMyPlate</h1>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 text-base text-gray-600">
                        <a href="#pricing" className="hover:text-black">Pricing</a>
                        <a href="#faq" className="hover:text-black">FAQ</a>
                        <a href="#login" className="hover:text-black">Log In</a>
                        <a href="#signup" className="hover:text-black">Sign Up</a>
                        <a
                            href="https://apps.apple.com/gb/app/checkmyplate/id6683283815"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-black"
                        >
                            
                        </a>
                    </nav>

                    {/* Mobile Hamburger Menu */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-3xl text-gray-600"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden px-6 pb-4 space-y-4 text-base text-gray-600">
                        <a href="#login" className="block hover:text-black">Log In</a>
                        <a href="#signup" className="block hover:text-black">Sign Up</a>
                        <a
                            href="https://apps.apple.com/gb/app/checkmyplate/id6683283815"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-black"
                        >
                             App Store
                        </a>
                    </div>
                )}
            </header>

            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-0 py-20 grid md:grid-cols-2 gap-20 items-center">
                    <div className="md:ml-0">
                        <h2 className="text-6xl font-extrabold leading-tight mb-10">
                            1 in 3 UK cars <br />
                            <span className="text-red-600">have a hidden past</span>
                        </h2>
                        <p className="text-2xl text-gray-600 mb-10">
                            Including accidents, theft, write-offs or finance owed. Enter your reg to check your vehicle now.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={reg}
                                onChange={(e) => setReg(e.target.value.toUpperCase())}
                                placeholder="ENTER REG"
                                className="flex-1 px-6 py-5 rounded-md border border-gray-300 text-xl tracking-widest text-center"
                            />
                            <button className="bg-black text-white px-10 py-5 rounded-md hover:bg-gray-800 transition text-xl font-semibold">
                                Check Now
                            </button>
                        </div>
                    </div>

                    {/* Car Icon */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2137/2137894.png"
                            alt="Car icon"
                            className="w-96 h-auto"
                        />
                    </div>
                </div>
            </section>



            <section id="pricing" className="max-w-7xl mx-auto px-6 py-28">
                <div className="flex flex-col md:flex-row justify-center items-center gap-14">

                    {/* Full Report */}
                    <div className="bg-green-100 rounded-2xl w-full max-w-[600px] h-[360px] flex items-center justify-center text-center px-12">
                        <div>
                            <h4 className="text-4xl font-bold mb-3">Full Report</h4>
                            <p className="text-xl text-gray-700 mb-1">50% Off – £4.99</p>
                            <p className="text-xl text-gray-700 mb-8">Covers all vital information</p>
                            <button className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 text-lg font-semibold transition">
                                Get Full Report
                            </button>
                        </div>
                    </div>

                    {/* Sample Report */}
                    <div className="bg-yellow-100 rounded-2xl w-full max-w-[600px] h-[360px] flex items-center justify-center text-center px-12">
                        <div>
                            <h4 className="text-4xl font-bold mb-3">Sample Full Report</h4>
                            <p className="text-xl text-gray-700 mb-8">See what's included</p>
                            <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 text-lg font-semibold transition">
                                View Sample
                            </button>
                        </div>
                    </div>

                </div>
            </section>




            {/* Reviews Section */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-4xl font-bold mb-12">What People Are Saying</h3>

                    <div className="grid gap-10 md:grid-cols-3">
                        {/* Review 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-left">
                            <p className="text-xl italic text-gray-700 mb-4">“Saved me from buying a write-off. Worth every penny.”</p>
                            <div className="font-semibold text-gray-900">— Emma R.</div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-left">
                            <p className="text-xl italic text-gray-700 mb-4">“Quick, simple and super clear. Found finance issues I didn’t know about.”</p>
                            <div className="font-semibold text-gray-900">— Jake M.</div>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md text-left">
                            <p className="text-xl italic text-gray-700 mb-4">“Better than other sites I’ve used. Great layout and easy to understand.”</p>
                            <div className="font-semibold text-gray-900">— Priya K.</div>
                        </div>


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
