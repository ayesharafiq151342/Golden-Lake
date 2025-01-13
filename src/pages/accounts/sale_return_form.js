
import { useNavigate , Link} from 'react-router-dom';
import React, { useState } from 'react'
import { X } from 'lucide-react';
import imagegmail from './images/imagegmail.jpg';
import { Sidebar } from '../../components/slider';
function Sale_return_form() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBack = () => {
      navigate(-1); // Navigate to the previous page
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false); 

    
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

    return (
        <div className="min-h-screen flex">
            

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

            <main className="flex-1 lg:ml-60 p-8">
           
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
            <div className=" ">
      <div className="p-6 space-y-6">
        {/* Header */}
         
   
      <div className=" bg-gray-100 flex items-center justify-center ">
        <div className="bg-white shadow-lg rounded-md p-6 w-full">
          {/* Back Button */}
           {/* Back Button */}
           <div className="flex items-center justify-end mb-4">
                  <button onClick={handleBack} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Back
                  </button>
                </div>

          {/* Payment Type */}
          <div className="flex items-center mb-4">
            <label className="font-medium text-gray-700 mr-4">Payment Type:</label>
            <label className="flex items-center mr-4">
              <input
                type="radio"
                name="paymentType"
                className="mr-1"
              />
              Send
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentType"
                className="mr-1"
              />
              Receive
            </label>
          </div>
  
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Customer <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
  
              <label className="block text-gray-700 font-medium mb-1 mt-4">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
  
              <label className="block text-gray-700 font-medium mb-1 mt-4">
                Reference No
              </label>
              <input
                type="text"
                placeholder="Enter reference number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
  
            {/* Right Column */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Transaction Date <span className="text-red-500">*</span>
              </label>
              <input
                type="datetime-local"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
  
              <label className="block text-gray-700 font-medium mb-1 mt-4">
                Cash / Bank <span className="text-red-500">*</span>
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200">
                <option value="">Search</option>
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
              </select>
  
              <label className="block text-gray-700 font-medium mb-1 mt-4">
                Company Bank Account
              </label>
              <input
                type="text"
                placeholder="Enter bank account"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
  
          {/* Memo */}
          <label className="block text-gray-700 font-medium mb-1 mt-6">
            Memo
          </label>
          <textarea
            placeholder="Enter memo"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            rows="3"
          ></textarea>
  
          {/* Accounting Lines */}
         <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
            Accounting Lines
          </h2>
          <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 rounded-md">
    <thead className="bg-gray-200">
      <tr>
        <th className="text-left px-4 py-2 border">S.No</th>
        <th className="text-left px-4 py-2 border">Entity</th>
        <th className="text-left px-4 py-2 border">Account</th>
        <th className="text-left px-4 py-2 border">Debit Amount</th>
        <th className="text-left px-4 py-2 border">Credit Amount</th>
        <th className="text-left px-4 py-2 border">Line Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          colSpan="6"
          className="text-center text-gray-500 py-4"
        >
          No Accounting Details.
        </td>
      </tr>
    </tbody>
  </table>
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
        </div>
    );
}
export default Sale_return_form