import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CheckPage() {
    const { reg } = useParams();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/hpi-check/${reg}`);
                if (!res.ok) throw new Error("Failed to fetch report");
                const data = await res.json();
                setReport(data);
            } catch (err) {
                console.warn("Backend fetch failed, using mock data.");

                // 🧪 Test fallback data
                const mockData = {
                    registration: reg,
                    writeOff: true,
                    mileage: '88,420',
                    previousOwners: 4,
                    financeOwed: true,
                    stolen: false,
                    motValid: true,
                    taxValid: false,
                    importExport: 'Imported from EU',
                };

                setReport(mockData);
                setError(null); // clear error since we're mocking it
            } finally {
                setLoading(false);
            }
        };

        fetchReport();
    }, [reg]);

    if (loading) return <div className="p-10 text-xl">Loading...</div>;

    return (
        <div className="p-10">
            {/* ✅ Back to home link */}
            <Link to="/" className="text-2xl font-bold text-black hover:underline mb-6 inline-block">
                ← CheckMyPlate
            </Link>

            <h1 className="text-3xl font-bold mb-4">Report for: {reg}</h1>

            {/* 🔍 UI display for report */}
            <div className="bg-gray-100 p-6 rounded-lg space-y-4 text-lg">
                <p><strong>Registration:</strong> {report.registration}</p>
                <p><strong>Write-Off:</strong> {report.writeOff ? "Yes" : "No"}</p>
                <p><strong>Mileage:</strong> {report.mileage}</p>
                <p><strong>Previous Owners:</strong> {report.previousOwners}</p>
                <p><strong>Finance Owed:</strong> {report.financeOwed ? "Yes" : "No"}</p>
                <p><strong>Stolen:</strong> {report.stolen ? "Yes" : "No"}</p>
                <p><strong>MOT Valid:</strong> {report.motValid ? "Yes" : "No"}</p>
                <p><strong>Tax Valid:</strong> {report.taxValid ? "Yes" : "No"}</p>
                <p><strong>Import/Export:</strong> {report.importExport}</p>
            </div>
        </div>
    );
}
