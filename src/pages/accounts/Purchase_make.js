import React, { useState } from 'react';
import imagegmail from './images/imagegmail.jpg';
import { useNavigate, Link } from "react-router-dom";
import { Sidebar } from '../../components/slider';

function Purchase_make() {
    const navigate = useNavigate();
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1); // Initial page is 1
    const totalPages = 10; // Total number of pages
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };  const handleHeaderClick = () => {
        navigate('/Purchase_payment_form')  // Open the form when the header is clicked
      };
    
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);

    const entries = [
        {
            id: 'RV-0001',
            transactionCode: 'SR-0001',
            transactionDate: '19-11-2024',
            status: 'Approved',
            PaymentAmount: "3028103",
            PaymentType: 'reacived',
            Coustmer: "ALI",


        },
        {
            id: 'RV-0002',
            transactionCode: 'RV-0002',
            Coustmer: "bilal",
            transactionDate: '9-11-2024',
            status: 'Approved',
            PaymentAmount: "3028103",
            PaymentType: 'reacived',
         


        },
        {
            id: 'RV-0003',
            transactionCode: 'RV-0003',
            Coustmer: "Shahzaib",
            transactionDate: '9-11-2024',
            status: 'Approved',
            PaymentAmount: "3028103",
            PaymentType: 'reacived',
    


        },
        {
            id: 'RV-0004',
            transactionCode: 'RV-0004',
            Coustmer: "ayesha",
            transactionDate: '29-11-2024',
            status: 'Approved',
            PaymentAmount: "3028103",
            PaymentType: 'reacived',
      


        },
        {
            id: 'RV-0005',
            transactionCode: 'RV-0005',
            Coustmer: "Bilal",
            transactionDate: '3-11-2024',
            status: 'Approved',
            PaymentAmount: "3028103",
            PaymentType: 'reacived',
            


        },
    ]



    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Convert FormData to an object with keys and values
        const entryStructure = Object.fromEntries(formData.entries());

        console.log('New Journal Entry Structure:', entryStructure);
        // Close form modal after logging (uncomment if needed)
        // setIsFormOpen(false);
    };


    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const filteredEntries = entries.filter(entry =>
        entry.Coustmer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}

            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <main className="flex-1 w-96 lg:ml-60 p-8">

                <header className=" flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4">
                    <button
                        onClick={toggleSidebar}
                        className="mr-4 w-8  ml-4 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                    >
                        <span className="text-gray-700 text-2xl">☰</span>
                    </button> <div className="flex items-center">
                        {/* Hamburger Menu */}

                        <h1 className="text-2xl text-white font-bold"><Link to='/'>Accounts Management</Link></h1>
                    </div>
                    {/* Logo */}
                    <div className="flex items-center space-x-4">
                        <img
                            src={imagegmail}
                            alt="Golden Lake Logo"
                            className="h-10 w-10 object-contain rounded-full"
                        />
                    </div>

                </header>
                <div className="min-h-52 bg-gray-50 rounded-xl">
                    <div className=" m-7  ">

                        <div className="p-5  space-y-6">
                            {/* Header */}


                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-semibold">Sale Return  Details</h1>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>Accounts Management</span>
                                    <span className="text-gray-400">/</span>
                                    <span>Sale  Return</span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/Salerutrn_entry")}
                                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md  flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Create Journal Entry
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by Customer"
                                className="pl-10 pr-4 py-2 w-full border rounded-md"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Table */}
                        <div className="border rounded-lg overflow-hidden bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-3">
                                                <input type="checkbox" className="rounded" />
                                            </th>
                                            <th className="p-3 text-left font-medium">TransactionCode</th>
                                            <th className="p-3 text-left font-medium">Vendor</th>
                                            <th className="p-3 text-left font-medium bg-green">Status</th>
                                            <th className="p-3 text-left font-medium bg-green">Payment Ammount</th>
                                            <th className="p-3 text-left font-medium bg-green">Payment Type</th>

                                            <th className="p-3 text-left font-medium bg-green">transaction Date</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEntries.map((entry) => (
                                            <tr key={entry.id} className="border-t hover:bg-gray-50">
                                                <td className="p-3" onClick={handleHeaderClick}>
                                                    <input type="checkbox" className="rounded" />
                                                </td>
                                                <td className="p-3" onClick={handleHeaderClick}>{entry.transactionCode}</td>
                                                <td className="p-3" onClick={handleHeaderClick}>{entry.Coustmer}</td>
                                               
                                                <td className="p-3" onClick={handleHeaderClick}>
                                                    <span className={`px-2 py-1 rounded-full text-xs ${entry.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {entry.status}
                                                    </span>
                                                </td>
                                                <td className="p-3" onClick={handleHeaderClick}>{entry.PaymentAmount}</td>
                                                <td className="p-3"onClick={handleHeaderClick}>{entry.PaymentType}</td>
                                                <td className="p-3"onClick={handleHeaderClick}>{entry.transactionDate}</td>
                                              

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Show</span>
                                <select className="border rounded px-2 py-1">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>
                                <span className="text-sm text-gray-500">Entries</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center space-x-2">
                                    <button
                                        className="px-3 py-1 border rounded-md text-gray-600 bg-white"
                                        onClick={handlePrev}
                                        disabled={currentPage === 1} // Disable when on the first page
                                    >
                                        Prev
                                    </button>
                                    <span className="px-3 py-1 border rounded-md bg-white">
                                        {currentPage}
                                    </span>
                                    <button
                                        className="px-3 py-1 border rounded-md text-gray-600 bg-white"
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages} // Disable when on the last page
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>

    );
}
export default Purchase_make