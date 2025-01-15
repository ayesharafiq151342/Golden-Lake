
import React, { useState } from 'react';

import imagegmail from '../images/imagegmail.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../../../components/slider';
function ChartofAccount() {

    // State to control the visibility of the popup
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Function to open the popup
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setIsPopupVisible(false);
    };




    const Navigation = useNavigate()
    const [showForm, setShowForm] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        accountCode: '',
        parentAccount: '',
        accountType: '',
        subType: '',
        isGroup: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1); // Initial page is 1

    const totalPages = 10; // Total number of pages

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };



    const entries = [
        {
            id: '20101010',
            AccountCode: "201200220",
            AccountName: "accountspayable",
            Parenstaccount: "Current Liabilities",
            Accounttype: "Liabilities",
            Subtype: " current Liabilities",
            createdDate: "1-2-24" ,
            isGroup: " no ",
            companyname: "Multi-Techno Integrated S"
        },    {
            id: '21323123',
            AccountCode: "123232131",
            AccountName: "Accounts Receivable",
            Parenstaccount: "Current Liabilities",
            Accounttype: "Liabilities",
            Subtype: " current Liabilities",
            createdDate: "1-2-24" ,

            isGroup: " no ",
            companyname: "Multi-Techno Integrated S"
        },
        {
            id: '231231',
            AccountCode: "1232321311",
            AccountName: "	Accumulated Depreciation",
            Parenstaccount: "Current Liabilities",
            Accounttype: "Liabilities",
            Subtype: " current Liabilities",
            createdDate: "1-2-24" ,

            isGroup: " no ",
            companyname: "Multi-Techno Integrated S"
        },
        {
            id: '231231',
            AccountCode: "1232321311",
            AccountName: "Assets",
            Parenstaccount: "Current Liabilities",
            Accounttype: "Liabilities",
            Subtype: " current Liabilities",
            createdDate: "1-2-24" ,

            isGroup: " no ",
            companyname: "Multi-Techno Integrated S"
        },
        {
            id: '1231231',
            AccountCode: "213213",
            AccountName: "Cash and Bank",
            Parenstaccount: "Current Liabilities",
            Accounttype: "Liabilities",
            Subtype: " current Liabilities",
            createdDate: "1-2-24" ,

            isGroup: " no ",
            companyname: "Multi-Techno Integrated S"
        },
    ]


    const handleHeaderClick = () => {
        Navigation('/form')  // Open the form when the header is clicked
    };

    const handleCloseForm = () => {
        setShowForm(false);  // Close the form
    };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const entryStructure = Object.fromEntries(formData.entries())
    //     console.log('New Journal Entry Structure:', entryStructure);
    //   };

    const filteredEntries = entries.filter(entry =>
        entry.AccountName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
                <div className="min-h-screen mt-10 bg-gray-50">
                    <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-2xl font-semibold">Journal Entry Details</h1>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <span>Accounts Management</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span>Journal Entry</span>
                                </div>
                            </div>


                            <div>
                                {/* Button to trigger the popup */}
                                <button
                                    onClick={openPopup}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                >
                                    Show Popup
                                </button>

                                {/* Popup Modal */}
                                {isPopupVisible && (
                                    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
                                        <div className="bg-white p-8 rounded-lg shadow-lg w-96 md:w-1/2 lg:w-1/2 xl:w-1/2">
                                            <h2 className="text-xl font-bold mb-4">This is a Popup!</h2>  <button
                                                onClick={closePopup}
                                                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 absolute top-4 right-4"
                                            >
                                                x
                                            </button>

                                            <p className="mb-4">You clicked the button, and now the popup is showing.</p>
                                            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                                                {/* Name and Account Code (side by side on larger screens) */}
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                    {/* Name */}
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="Enter Name"
                                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>

                                                    {/* Account Code */}
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Account Code <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="accountCode"
                                                            value={formData.accountCode}
                                                            onChange={handleChange}
                                                            placeholder="Enter Account Code"
                                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Parent Account, Account Type, and Sub Type (side by side on larger screens) */}
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                    {/* Parent Account */}
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Parent Account <span className="text-red-500">*</span>
                                                        </label>
                                                        <select
                                                            name="parentAccount"
                                                            value={formData.parentAccount}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="assets">Current Assets</option>
                                                            <option value="nonCurrentAssets">Non-Current Assets</option>
                                                            <option value="liabilities">Liabilities</option>
                                                            <option value="currentLiabilities">Current Liabilities</option>
                                                            <option value="equity">Equity</option>
                                                            <option value="revenues">Revenues</option>
                                                            <option value="expenses">Expenses</option>
                                                            <option value="operatingExpenses">Operating Expenses</option>
                                                            <option value="nonOperatingExpenses">Non-Operating Expenses</option>
                                                            <option value="cashAndBank">Cash and Bank</option>
                                                            <option value="costOfGoods">Cost of Goods</option>
                                                        </select>
                                                    </div>

                                                    {/* Account Type */}
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Account Type <span className="text-red-500">*</span>
                                                        </label>
                                                        <select
                                                            name="accountType"
                                                            value={formData.accountType}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="">Search</option>
                                                            <option value="assets">Assets</option>
                                                            <option value="equity">Equity</option>
                                                            <option value="revenues">Revenues</option>
                                                            <option value="expenses">Expenses</option>
                                                        </select>
                                                    </div>

                                                    {/* Sub Type */}
                                                    <div>
                                                        <label className="block text-sm mb-1">
                                                            Sub Type <span className="text-red-500">*</span>
                                                        </label>
                                                        <select
                                                            name="subType"
                                                            value={formData.subType}
                                                            onChange={handleChange}
                                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        >
                                                            <option value="">Search</option>
                                                            <option value="assets">Current Assets</option>
                                                            <option value="nonCurrentAssets">Non-Current Assets</option>
                                                            <option value="liabilities">Liabilities</option>
                                                            <option value="currentLiabilities">Current Liabilities</option>
                                                            <option value="equity">Equity</option>
                                                            <option value="revenues">Revenues</option>
                                                            <option value="expenses">Expenses</option>
                                                            <option value="operatingExpenses">Operating Expenses</option>
                                                            <option value="nonOperatingExpenses">Non-Operating Expenses</option>
                                                            <option value="cashAndBank">Cash and Bank</option>
                                                            <option value="costOfGoods">Cost of Goods</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                {/* Is Group Checkbox */}
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id="isGroup"
                                                        name="isGroup"
                                                        checked={formData.isGroup}
                                                        onChange={handleChange}
                                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                    <label htmlFor="isGroup" className="ml-2 text-sm">
                                                        Is Group
                                                    </label>
                                                </div>

                                                {/* Create Button */}
                                                <div className="text-right">
                                                    <button
                                                        type="submit"
                                                        className="w-120 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
                                                    >
                                                        Create
                                                    </button>

                                                </div>
                                            </form>


                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

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
                                            <th className="p-3 text-left font-medium">Accout Code</th>
                                            <th className="p-3 text-left font-medium">Account Name</th>
                                            <th className="p-3 text-left font-medium">Parents Account</th>
                                           
                                            <th className="p-3 text-left font-medium">Account type </th>
                                            <th className="p-3 text-left font-medium bg-green">Subtype</th>
                                            <th className="p-3 text-left font-medium bg-green">Created Date</th>
                                            <th className="p-3 text-left font-medium bg-green">Is Group</th>
                                            <th className="p-3 text-left font-medium bg-green">Company Name</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEntries.map((entry) => (
                                            <tr key={entry.id} className="border-t hover:bg-gray-50">
                                                <td className="p-3">
                                                    <input type="checkbox" className="rounded" />
                                                </td>
                                                <td className="p-3">{entry.AccountCode}</td>
                                                <td className="p-3">{entry.AccountName}</td>
                                                <td className="p-3">{entry.Parenstaccount}</td>
                                                <td className="p-3">{entry.Accounttype}</td>
                                                <td className="p-3">{entry.Subtype}</td>
                                                <td className="p-3">{entry.createdDate}</td>
                                              

                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs ${entry.isGroup === 'Yes' ? 'bg-black text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                        {entry.isGroup}
                                                    </span>
                                                </td>
                                                <td className="p-3">{entry.companyname}</td>


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

export default ChartofAccount

