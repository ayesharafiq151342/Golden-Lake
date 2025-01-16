import React, { useState } from 'react';
import imagegmail from './images/imagegmail.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/slider';

function ExpenseEntity() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState(null); // For modal data
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
    const navigate = useNavigate();
    const [invoiceLines, setInvoiceLines] = useState([
        { id: 1, item: "", account: "", quantity: 0, unitPrice: 0, tax: "", grossAmount: 0 },
    ]);
    const entries = [
        { id: 'EV-0001', transactionCode: 'EV-0001', transactionDate: '19-11-2024', memo: 'Test', RefreneceNo: '3232', status: 'Approved' },
        { id: 'EV-0002', transactionCode: 'EV-0002', transactionDate: '19-11-2024', memo: 'no testing', RefreneceNo: '3223', status: 'Draft' },
        { id: 'EV-0003', transactionCode: 'EV-0003', transactionDate: '19-11-2024', memo: 'testing', RefreneceNo: '323', status: 'Approved' },
        { id: 'EV-0004', transactionCode: 'EV-0004', transactionDate: '19-11-2024', memo: 'testing', RefreneceNo: '323', status: 'Draft' },
        { id: 'EV-0005', transactionCode: 'EV-0005', transactionDate: '19-11-2024', memo: 'testing', RefreneceNo: '122', status: 'Approved' },
    ];

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const filteredEntries = entries.filter(entry =>
        entry.transactionCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleRowClick = (entry) => {
        setSelectedEntry(entry);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEntry(null);
    };

    const addLine = () => {
        setInvoiceLines([
            ...invoiceLines,
            { id: Date.now(), item: "", account: "", quantity: 0, unitPrice: 0, tax: "", grossAmount: 0 },
        ]);
    };

    const removeLine = (id) => {
        setInvoiceLines(invoiceLines.filter((line) => line.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setInvoiceLines(
            invoiceLines.map((line) =>
                line.id === id ? { ...line, [field]: value, grossAmount: line.quantity * line.unitPrice } : line
            )
        );
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <main className="flex-1 lg:ml-60 p-8">
                <header className="flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] rounded-full p-4">
                    <button
                        onClick={toggleSidebar}
                        className="mr-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                    >
                        <span className="text-gray-700 text-2xl">☰</span>
                    </button>
                    <h1 className="text-2xl text-white font-bold">
                        <Link to="/">Accounts Management</Link>
                    </h1>
                    <img
                        src={imagegmail}
                        alt="User Logo"
                        className="h-10 w-10 object-contain rounded-full"
                    />
                </header>

                <section className="mt-10">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">Expense Entry Details</h1>
                        <button
                            onClick={() => navigate('/Expense_form')}
                            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Create Expense Entry
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by Transaction Code"
                            className="pl-10 pr-4 py-2 w-full border rounded-md"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="border rounded-lg bg-white">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-3 text-left font-medium">Transaction Code</th>
                                    <th className="p-3 text-left font-medium">Transaction Date</th>
                                    <th className="p-3 text-left font-medium">Memo</th>
                                    <th className="p-3 text-left font-medium">Reference No</th>
                                    <th className="p-3 text-left font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEntries.map((entry) => (
                                    <tr key={entry.id} className="border-t hover:bg-gray-50 cursor-pointer" onClick={() => handleRowClick(entry)}>
                                        <td className="p-3">{entry.transactionCode}</td>
                                        <td className="p-3">{entry.transactionDate}</td>
                                        <td className="p-3">{entry.memo}</td>
                                        <td className="p-3">{entry.RefreneceNo}</td>
                                        <td className="p-3">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${
                                                    entry.status === 'Approved'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}
                                            >
                                                {entry.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={closeModal} // Clicking outside modal will close it
                >
                    <div
                        className="relative p-6 bg-gray-100 min-h-screen"
                        onClick={(e) => e.stopPropagation()} // Prevents modal from closing if clicked inside
                    >
                        <div className="bg-white shadow-md rounded-md p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Code</label>
                                    <input
                                        type="text"
                                        value={selectedEntry.transactionCode || ""}
                                        readOnly
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Memo</label>
                                    <input
                                        type="text"
                                        value={selectedEntry.memo || ""}
                                        readOnly
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Reference No</label>
                                    <input
                                        type="text"
                                        value={selectedEntry.RefreneceNo || ""}
                                        readOnly
                                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                                    />
                                </div>
                            </div>

                            <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={closeModal}
                            >
                                Close Modal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExpenseEntity;
