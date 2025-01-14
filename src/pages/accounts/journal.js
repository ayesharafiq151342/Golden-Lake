

import React, { useState } from 'react'
import imagegmail from './images/imagegmail.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/slider';

function Journal() {
  const [searchQuery, setSearchQuery] = useState('')
  const Navigation = useNavigate()
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const navigate = useNavigate();

  const entries = [
    {
      id: 'JE-0002',
      transactionCode: 'JE-0002',
      memo: '',
      referenceNo: '',
      status: 'Approved',
      transactionDate: '19-11-2024',
      totalCredit: 20,
      totalDebit: 20
    },
    {
      id: 'JE-0003',
      transactionCode: 'JE-0003',
      memo: '',
      referenceNo: '',
      status: 'Approved',
      transactionDate: '20-07-2024',
      totalCredit: 10,
      totalDebit: 10
    },
    {
      id: 'JE-0009',
      transactionCode: 'JE-0009',
      memo: 'testing the update time 7',
      referenceNo: 'no refrence number',
      status: 'Draft',
      transactionDate: '03-12-2024',
      totalCredit: 100,
      totalDebit: 100
    },
    {
      id: 'JE-0010',
      transactionCode: 'JE-0010',
      memo: 'test',
      referenceNo: 'test',
      status: 'Approved',
      transactionDate: '02-12-2024',
      totalCredit: 1,
      totalDebit: 1
    },
    {
      id: 'JE-0011',
      transactionCode: 'JE-0011',
      memo: 'testing time',
      referenceNo: 'no',
      status: 'Approved',
      transactionDate: '04-12-2024',
      totalCredit: 1,
      totalDebit: 1
    },
  ]
  const handleHeaderClick = () => {
    Navigation('/form')  // Open the form when the header is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false);  // Close the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entryStructure = Object.fromEntries(formData.entries())
    console.log('New Journal Entry Structure:', entryStructure);
  };


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
              <button
                onClick={() => navigate('/form')} // Navigate to the journal page
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
                placeholder="Search by Name"
                className="pl-10 pr-4 py-2 w-full border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr  >
                      <th
                        className="p-3 text-left font-medium cursor-pointer"
                      // Trigger form opening when clicked
                      >
                        Transaction Code
                      </th>
                      <th className="p-3 text-left font-medium" onClick={handleHeaderClick}>Memo</th>
                      <th className="p-3 text-left font-medium" onClick={handleHeaderClick}>Reference No</th>
                      <th className="p-3 text-left font-medium" onClick={handleHeaderClick}>Status</th>
                      <th className="p-3 text-left font-medium" onClick={handleHeaderClick} >Transaction Date</th>
                      <th className="p-3 text-right font-medium" onClick={handleHeaderClick}>Total Credit</th>
                      <th className="p-3 text-right font-medium" onClick={handleHeaderClick}>Total Debit</th>
                    </tr>
                  </thead>
                  <tbody>

                    {entries.map((entry) => (
                      <tr key={entry.id} className="border-t hover:bg-gray-50">
                        <td className="p-3" onClick={handleHeaderClick}>
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="p-3" onClick={handleHeaderClick}>{entry.transactionCode} </td>
                        <td className="p-3" onClick={handleHeaderClick}>{entry.memo}</td>
                        <td className="p-3" onClick={handleHeaderClick}>{entry.referenceNo}</td>
                        <td className="p-3" onClick={handleHeaderClick}>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${entry.status === 'Approved'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                              }`}
                          >
                            {entry.status}
                          </span>
                        </td>
                        <td className="p-3" onClick={handleHeaderClick}>{entry.transactionDate}</td>
                        <td className="p-3 text-right" onClick={handleHeaderClick}>{entry.totalCredit}</td>
                        <td className="p-3 text-right" onClick={handleHeaderClick}>{entry.totalDebit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {showForm && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-96">
                  <h2 className="text-xl font-semibold mb-4">Transaction Form</h2>
                  <form>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Transaction Code</label>
                      <input
                        type="text"
                        placeholder="Enter Transaction Code"
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Memo</label>
                      <input
                        type="text"
                        placeholder="Enter Memo"
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Reference No</label>
                      <input
                        type="text"
                        placeholder="Enter Reference No"
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleCloseForm}
                        className="bg-red-600 text-white py-2 px-4 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
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
                <button className="px-3 py-1 border rounded-md text-gray-600 bg-white" disabled>
                  Prev
                </button>
                <button className="px-3 py-1 border rounded-md text-gray-600 bg-white">
                  1
                </button>
                <button className="px-3 py-1 border rounded-md text-gray-600 bg-white">
                  Next
                </button>
              </div>
            </div>



          </div>
        </div> </main>

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
export default Journal