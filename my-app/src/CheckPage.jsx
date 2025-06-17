import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HpiCheckReport() {
    const { reg } = useParams();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState(null);

    useEffect(() => {
        const generateMockReport = () => {
            const randomBool = () => Math.random() < 0.5;
            const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

            const mockData = {
                registration: reg,
                writeOff: randomBool(),
                mileage: `${randomInt(20000, 150000).toLocaleString()}`,
                previousOwners: randomInt(1, 6),
                financeOwed: randomBool(),
                stolen: randomBool(),
                motValid: randomBool(),
                taxValid: randomBool(),
                importExport: Math.random() < 0.3 ? 'Imported from EU' : 'No import/export activity recorded',
            };

            setReport(mockData);
            setLoading(false);
        };

        // Simulate delay
        setTimeout(generateMockReport, 800);
    }, [reg]);

    if (loading) {
        return <div className="p-10 text-xl">Generating report...</div>;
    }

    return (
        <div className="p-10 max-w-3xl mx-auto">
            <Link to="/" className="text-lg text-blue-600 hover:underline block mb-6">
                ← Back to CheckMyPlate
            </Link>

            <h1 className="text-4xl font-bold mb-6">Vehicle History Report</h1>
            <div className="mb-6 text-xl font-semibold">Registration Number: <span className="text-black">{report.registration}</span></div>

            <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200 text-base">
                <ReportItem label="Write-Off Status" value={report.writeOff ? "⚠️ Yes – Vehicle has been written off" : "✅ No issues reported"} />
                <ReportItem label="Recorded Mileage" value={`${report.mileage} miles`} />
                <ReportItem label="Number of Previous Owners" value={report.previousOwners} />
                <ReportItem label="Outstanding Finance" value={report.financeOwed ? "⚠️ Finance agreement found" : "✅ Clear"} />
                <ReportItem label="Stolen Status" value={report.stolen ? "⚠️ Reported stolen" : "✅ Not stolen"} />
                <ReportItem label="MOT Status" value={report.motValid ? "✅ Valid" : "❌ Invalid or expired"} />
                <ReportItem label="Road Tax Status" value={report.taxValid ? "✅ Taxed" : "❌ Untaxed"} />
                <ReportItem label="Import / Export History" value={report.importExport} />
            </div>
        </div>
    );
}

function ReportItem({ label, value }) {
    return (
        <div className="flex justify-between items-start border-b pb-2 last:border-b-0">
            <span className="font-medium text-gray-700">{label}:</span>
            <span className="text-right text-gray-900">{value}</span>
        </div>
    );
}
