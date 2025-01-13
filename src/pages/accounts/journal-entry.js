import { useState } from "react";
import { Plus, Trash2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Sidebar } from 'lucide-react'


import { Bar } from 'react-chartjs-2';
import { X } from 'lucide-react';
import SalesPurchaseChart from '../../components/sale';  // Assuming this is the correct path
import imagegmail from './images/imagegmail.jpg';

// Custom Button Component

function Journalentry() {
  const [entries, setEntries] = useState([
    { entity: "", account: "", description: "", debit: "", credit: "" },
  ]);
  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen); 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


  const navigate = useNavigate(); // Initialize the navigate function

  const addEntry = () => {
    setEntries([
      ...entries,
      { entity: "", account: "", description: "", debit: "", credit: "" },
    ]);
  };

  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const updateEntry = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: value };
    setEntries(newEntries);
  };







    const [isFormOpen, setIsFormOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')



    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false); 

    const Button = ({ children, variant = "default", size = "md", onClick }) => {
      const baseClasses =
        "inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";
      const variantClasses = {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      };
      const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-md",
        icon: "p-2",
      };
     
        <button
          className={`${baseClasses} ${variantClasses[variant] || ""} ${
            sizeClasses[size] || ""
          }`}
          onClick={onClick}
        >
          {children}
        </button>
    
  
    
    // Custom Input Component
    const Input = ({ className, ...props }) => (
      <input
        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
    
  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen); 
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen flex bg-gray-100">
            

            <div className="flex-1 flex">
                
                {/* Sidebar */}
                <aside
                    className={`bg-white shadow-md z-20 fixed md:relative inset-y-0 transition-all duration-300 ease-in-out
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                        md:translate-x-0 md:w-64`}
                >
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <div className="font-bold text-lg">Golden Lake</div>
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-500 hover:text-gray-700 md:hidden"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="mt-4">
                        <ul className="space-y-2">
                            {[
                                { name: 'Dashboard', href: '/account' },
                                { name: 'JOURNAL ENTRY', href: '/journal' },
                                {
                                    name: 'SALES',
                                    href: '#',
                                    onClick: toggleSalesMenu,
                                    hasSubMenu: true
                                },
                                { name: 'PURCHASE', href: '/currency' },
                                { name: 'SETUP', href: '/master-accounts' },
                                { name: 'REPORTS', href: '/tokens' },
                            ].map((item, index) => (
                                <li key={index}>
                                    {item.hasSubMenu ? (
                                        <div>
                                            <button
                                                className="block px-6 py-2 hover:bg-gray-200 w-full text-left"
                                                onClick={item.onClick}
                                            >
                                                {item.name}
                                            </button>
                                            {isSalesOpen && (
                                                <ul className="pl-8 space-y-2">
                                                    <li>
                                                        <a
                                                            href="/saleinvoice"
                                                            className="block px-6 py-2 hover:bg-gray-200"
                                                        >
                                                            Sale Invoice
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/sales/page2"
                                                            className="block px-6 py-2 hover:bg-gray-200"
                                                        >
                                                            Sale Page 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="/sales/page3"
                                                            className="block px-6 py-2 hover:bg-gray-200"
                                                        >
                                                            Sale Page 3
                                                        </a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="block px-6 py-2 hover:bg-gray-200"
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8 overflow-auto">
                  {/* Header */}
            <header className=" flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4">
            <button
                        onClick={toggleSidebar}
                        className="mr-4 w-8  ml-4 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                    >
                        <span className="text-gray-700 text-2xl">☰</span>
                    </button> <div className="flex items-center">
                    {/* Hamburger Menu */}
                  
                    <h1 className="text-2xl text-white font-bold">Administration</h1>
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
           
       <div></div>
    
    </main>  </div>  <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Journal Entry</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="flex items-center"
        >
          <XCircle className="mr-1 h-4 w-4 text-red-500" />
          Back
        </Button>
      </header>

      {/* Transaction Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input type="datetime-local" placeholder="Transaction Date" />
        <Input placeholder="Reference No" />
      </div>

      <Input placeholder="Memo" className="mb-4" />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Entity</th>
              <th className="p-2 text-left">Account</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-right">Debit</th>
              <th className="p-2 text-right">Credit</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">
                  <Input
                    value={entry.entity}
                    onChange={(e) =>
                      updateEntry(index, "entity", e.target.value)
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={entry.account}
                    onChange={(e) =>
                      updateEntry(index, "account", e.target.value)
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    value={entry.description}
                    onChange={(e) =>
                      updateEntry(index, "description", e.target.value)
                    }
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={entry.debit}
                    onChange={(e) =>
                      updateEntry(index, "debit", e.target.value)
                    }
                    className="text-right"
                  />
                </td>
                <td className="p-2">
                  <Input
                    type="number"
                    value={entry.credit}
                    onChange={(e) =>
                      updateEntry(index, "credit", e.target.value)
                    }
                    className="text-right"
                  />
                </td>
                <td className="p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeEntry(index)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="p-2">
                <Button variant="outline" size="sm" onClick={addEntry}>
                  <Plus className="mr-2 h-4 w-4 text-blue-500" />
                  Add Line
                </Button>
              </td>
              <td className="p-2 text-right font-medium">
                {entries
                  .reduce((sum, entry) => sum + Number(entry.debit || 0), 0)
                  .toFixed(2)}
              </td>
              <td className="p-2 text-right font-medium">
                {entries
                  .reduce((sum, entry) => sum + Number(entry.credit || 0), 0)
                  .toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
       
    );}}
    export default Journalentry;