import { useState } from 'react';

export default function App() {
    const [reg, setReg] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (!reg || reg.length < 4) {
            setError("Please enter a valid registration number.");
            setResult(null);
            return;
        }

        setError('');

        // Mock result (simulate API call)
        setResult({
            reg: reg.toUpperCase(),
            make: 'BMW',
            model: '3 Series',
            year: 2020,
            mileage: '45,000 miles',
            status: 'No outstanding finance',
            stolen: false,
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">CheckMyPlate 🚗</h1>

            <div className="w-full max-w-md flex flex-col items-center">
                <input
                    type="text"
                    placeholder="Enter Reg Number (e.g. AB12 CDE)"
                    value={reg}
                    onChange={(e) => setReg(e.target.value.toUpperCase())}
                    className="text-black w-full p-3 rounded-lg shadow mb-3 text-center text-lg tracking-widest"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-800 transition text-white px-6 py-2 rounded-lg shadow w-full"
                >
                    Check Vehicle
                </button>

                {error && <p className="text-red-400 mt-4">{error}</p>}

                {result && (
                    <div className="mt-6 p-6 bg-white text-black rounded-lg shadow w-full">
                        <h2 className="text-xl font-bold mb-2">🔍 HPI Report</h2>
                        <p><strong>Reg:</strong> {result.reg}</p>
                        <p><strong>Make:</strong> {result.make}</p>
                        <p><strong>Model:</strong> {result.model}</p>
                        <p><strong>Year:</strong> {result.year}</p>
                        <p><strong>Mileage:</strong> {result.mileage}</p>
                        <p><strong>Status:</strong> {result.status}</p>
                        <p><strong>Stolen:</strong> {result.stolen ? 'Yes 🚨' : 'No ✅'}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
