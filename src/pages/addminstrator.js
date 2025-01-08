import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import SalesPurchaseChart from '../components/sale';  // Assuming this is the correct path
import imagegmail from '../images/imagegmail.jpg'

function Addminstrator() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    return (
        <div className="min-h-screen min-w-full flex bg-gray-100">
            {/* Sidebar */}
            <aside className={`w-64 bg-white shadow-md ${isSidebarOpen ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
  <div className="px-6 py-4 font-bold text-lg border-b">AXON ERP</div>
  <nav className="mt-4">
    <ul className="space-y-2">
      <li>
        <a href="/Accountspage" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Dashboard</a>
      </li>
      <li>
        <a href="/modules" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Modules</a>
      </li>
      <li>
        <a href="/objects" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Objects</a>
      </li>
      <li>
        <a href="/currency" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Currency</a>
      </li>
      <li>
        <a href="/master-accounts" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Master Accounts</a>
      </li>
      <li>
        <a href="/tokens" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Tokens</a>
      </li>
      <li>
        <a href="/lov" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">LOV</a>
      </li>
      <li>
        <a href="/upload-reports" className="block px-6 py-2 hover:bg-gray-200 cursor-pointer">Upload Reports</a>
      </li>
    </ul>
  </nav>
</aside>


            {/* Main Content */}
            <main className="flex-1 p-8 justify-center items-center ">
                {/* Header */}
                <header className="flex justify-between items-center rounded-full bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b">
  <h1 className="text-2xl text-white mx-6 my-2 font-bold">Administration</h1>

  <div className="flex items-center space-x-2">
    {/* Logo Container */}
    <div className=" rounded-full  ">
      <img
        src={imagegmail}
        alt="Golden Lake Logo"
        className="h-10 w-10 object-contain rounded-full mx-5 my-2 "
      />
    </div>

    {/* Hamburger Menu Button */}
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="lg:hidden w-8 h-8  bg-white rounded-full flex items-center justify-center shadow-lg"
    >
      <span className="text-gray-700 text-2xl">☰</span>
    </button>
  </div>
</header>


                {/* Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                    {[{ title: 'Total Revenue', value: '2,132,030.34', icon: '💰' },
                    { title: 'Total Expense', value: '6,290.69', icon: '👥' },
                    { title: 'Total Profit', value: '2,125,739.65', icon: '📈' },
                    { title: 'Cash/Bank Balance', value: '-83,481.36', icon: '🛒' }]
                    .map((item, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded-md flex items-center">
                            <div className="text-3xl mr-4">{item.icon}</div>
                            <div>
                                <h2 className="text-lg font-bold">{item.title}</h2>
                                <p className="text-xl text-gray-700">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Chart & Highlights */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="font-bold text-lg mb-4">Sales vs Purchase</h2>
                        <SalesPurchaseChart data={chartData} />
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

                {/* Tables */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="font-bold text-lg mb-4">Top Selling Products</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Sales Quantity</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>oppo A-57</td>
                                    <td>800.00</td>
                                    <td>94,400.00</td>
                                    <td className="text-green-500">In Stock</td>
                                </tr>
                                <tr>
                                    <td>Charger</td>
                                    <td>100.00</td>
                                    <td>1,000.00</td>
                                    <td className="text-green-500">Available</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="font-bold text-lg mb-4">Top Sales by Customers</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Sales</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Awais</td>
                                    <td>2,287,500.00</td>
                                    <td>95.95%</td>
                                </tr>
                                <tr>
                                    <td>Kashif Ali</td>
                                    <td>94,460.00</td>
                                    <td>3.96%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Addminstrator;
