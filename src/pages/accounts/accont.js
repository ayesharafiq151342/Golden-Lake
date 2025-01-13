import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { X } from 'lucide-react'; // Assuming you want to use this icon somewhere
import { Sidebar } from '../../components/slider'; // Make sure this component exists
import SalesPurchaseChart from '../../components/sale'; // Assuming this component exists
import imagegmail from './images/imagegmail.jpg'; // Ensure image path is correct

// Ensure Slider is imported if needed
 // This is an assumption of your slider component location

function Accountsmangementpage() {
    const [activeLink, setActiveLink] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);

    const chartData = {
        labels: ['Jan-2025'],
        datasets: [
            {
                label: 'Sales',
                data: [2400000],
                backgroundColor: 'blue',
            },
            {
                label: 'Purchase',
                data: [0],
                backgroundColor: 'red',
            },
        ],
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen);
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
                {/* Cards Section */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                    {[{
                        title: 'Total Revenue', value: '2,132,030.34', icon: '💰',
                    }, {
                        title: 'Total Expense', value: '6,290.69', icon: '👥',
                    }, {
                        title: 'Total Profit', value: '2,125,739.65', icon: '📈',
                    }, {
                        title: 'Cash/Bank Balance', value: '-83,481.36', icon: '🛒',
                    }].map((item, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-md flex items-center">
                            <div className="text-3xl mr-4">{item.icon}</div>
                            <div>
                                <h2 className="text-lg font-bold">{item.title}</h2>
                                <p className="text-xl text-gray-700">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Chart & Highlights Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="font-bold text-lg mb-4">Sales vs Purchase</h2>
                        <SalesPurchaseChart data={chartData} /> {/* Assuming this component exists */}
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="font-bold text-lg mb-4">Highlights</h2>
                        <ul className="space-y-2 text-sm">
                            <li>Last Sales on 05 Jan 2025 - Sales Amount: 60</li>
                            <li>Last Receipt on 03 Jan 2025 - Receipt Amount: 23</li>
                            <li>Last Purchase on 16 Jan 2025 - Purchase Amount: 20</li>
                            <li>Last Payment on 03 Jan 2025 - Payment Amount: 21</li>
                        </ul>
                    </div>
                </section>

                {/* Tables Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    <div className="bg-white p-4 shadow-md rounded-md overflow-x-auto">
                        <h2 className="font-bold text-lg mb-4">Top Selling Products</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="p-2">Product</th>
                                    <th className="p-2">Sales Quantity</th>
                                    <th className="p-2">Amount</th>
                                    <th className="p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">oppo A-57</td>
                                    <td className="p-2">800.00</td>
                                    <td className="p-2">94,400.00</td>
                                    <td className="p-2 text-green-500">In Stock</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Charger</td>
                                    <td className="p-2">100.00</td>
                                    <td className="p-2">1,000.00</td>
                                    <td className="p-2 text-green-500">Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-md overflow-x-auto">
                        <h2 className="font-bold text-lg mb-4">Top Sales by Customers</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="p-2">Customer</th>
                                    <th className="p-2">Sales</th>
                                    <th className="p-2">Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2">Awais</td>
                                    <td className="p-2">2,287,500.00</td>
                                    <td className="p-2">95.95%</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Kashif Ali</td>
                                    <td className="p-2">94,460.00</td>
                                    <td className="p-2">3.96%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Accountsmangementpage;
