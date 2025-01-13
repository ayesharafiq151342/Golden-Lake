
import React, { useState } from 'react'
import { X } from 'lucide-react';
import imagegmail from './images/imagegmail.jpg';
import { useNavigate , Link } from "react-router-dom";
import { Sidebar } from '../../components/slider';
function Saleinvoice() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const totalPages = 5; // Example: Total pages are 5 for demonstration
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrev = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleEntriesChange = (event) => {
      setEntriesPerPage(Number(event.target.value));
      setCurrentPage(1); // Reset to the first page when entries per page change
    };
  
    const entries = [
        {
          id: 'JE-0002',
          transactionCode: 'JE-0002',
          memo: 'b',
          status: 'Approved',
          WearHouse:"as",
          Coustmer:"ALI",
          transactionDate: '19-11-2024',
          duedate: '19-11-2024',

        },
        {
            id: 'JE-0002',
            transactionCode: 'JE-0002',
            memo: 'b',
        
            status: 'Approved',
            WearHouse:"as",
            Coustmer:"AHMAD",
            transactionDate: '19-11-2024',
           
            duedate: '19-11-2024',
        },
        {
            id: 'JE-0002',
            transactionCode: 'JE-0002',
            memo: 'a',
        
            status: 'Approved',
            WearHouse:"as",
            Coustmer:"As",
            transactionDate: '19-11-2024',
           
            duedate: '19-11-2024',
        },
        {
            id: 'JE-0002',
            transactionCode: 'JE-0002',
            memo: 'a',
        
            status: 'Approved',
            WearHouse:"as",
            Coustmer:"AYESHA",
            transactionDate: '19-11-2024',
           
            duedate: '19-11-2024',
        },
        {
            id: 'JE-0002',
            transactionCode: 'JE-0002',
            memo: 'a',
        
            status: 'Approved',
            WearHouse:"as",
            Coustmer:"BILAL",
            transactionDate: '19-11-2024',
           
            duedate: '19-11-2024',
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

  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen); 
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

        <main className="flex-1 lg:ml-60 w-96 p-8">
       
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

                    <div className="min-h-screen bg-white mt-10 ">
                        <div className="p-6 space-y-6">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-semibold">Sale Invoice</h1>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span>Accounts Management</span>
                                        <span className="text-gray-400">/</span>
                                        <span>Sale Invoice </span>
                                    </div>
                                </div>
                                <button 
      onClick={() => navigate('/sale_invoice_form')} // Navigate to the journal page
      className="bg-black w-54 hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
      <h1 className='sm:text-sm text-sm'>Create Journal Entry</h1>
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
                                                
                                                <th className="p-3 text-left font-medium">Transaction Code</th>
                                                <th className="p-3 text-left font-medium">Memo</th>
                                                <th className="p-3 text-left font-medium">Status</th>
                                                <th className="p-3 text-left font-medium">Wearhouse</th>
                                                <th className="p-3 text-left font-medium">Customer</th>
                                                <th className="p-3 text-left font-medium">Transaction Date</th>
                                                <th className="p-3 text-left font-medium">Due Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredEntries.map((entry) => (
                                                <tr key={entry.id} className="border-t hover:bg-gray-50">
                                                   
                                                    <td className="p-3">{entry.transactionCode}</td>
                                                    <td className="p-3">{entry.memo}</td>
                                                    <td className="p-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs ${entry.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                            {entry.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-3">{entry.WearHouse}</td>
                                                    <td className="p-3">{entry.Coustmer}</td>
                                                    <td className="p-3">{entry.transactionDate}</td>
                                                    <td className="p-3">{entry.duedate}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between">
      {/* Entries Limit */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Show</span>
        <select
          className="border rounded px-2 py-1"
          value={entriesPerPage}
          onChange={handleEntriesChange}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span className="text-sm text-gray-500">Entries</span>
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 border rounded-md text-gray-600 bg-white"
          disabled={currentPage === 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 border rounded-md text-gray-600 bg-white"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
                        </div>
                    </div>
                </main>
           
       
          </div>
          
      )    }
    


export default Saleinvoice;
