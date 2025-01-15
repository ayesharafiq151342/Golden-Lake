import React, { useState } from "react";
import { Sidebar } from "../../../../components/slider";
import { useNavigate, Link } from 'react-router-dom';
import imagegmail from '../images/imagegmail.jpg'
const Reports = () => {
  const sections = [
    {
      title: "Sales / Receivable",
      items: [
        "Sales By Customers",
        "Sales By Month",
        "Sales By Items",
        "Customer Ledger",
        "Customer Closing Balance",
      ],
    },
    {
      title: "Accounts",
      items: [
        "Account Ledger",
        "Trial Balance",
        "Balance Sheet",
        "Profit Loss Statement",
      ],
    },
    {
      title: "Purchase / Payable",
      items: [
        "Purchase By Vendor",
        "Purchase By Month",
        "Purchase By Item",
        "Vendor Ledger",
        "Vendor Closing Balance",
      ],
    },
  ];
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false);
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
    <div className="p-6">
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-lg font-medium">{item}</h3>
                <p className="text-sm text-gray-500">Click to view details</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div></main>
    </div>
  );
};

export default Reports;
