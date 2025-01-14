import React, { useState } from "react";
import { Sidebar } from "../../components/slider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import imagegmail from './images/imagegmail.jpg';
 
const PaymentForm = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate= useNavigate()
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
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <label
            htmlFor="fileUpload"
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 focus:outline-none cursor-pointer"
          >
            Upload File
          </label>
          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => console.log(e.target.files[0])} // Replace with your file handling logic
          />
          <h1 className="text-xl font-bold text-green-600">Payment</h1>
          <span className="text-gray-500">PV-0008</span>
        </div>
        <button   onClick={() => navigate(-1)}
        
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Back
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Confirm
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300 focus:outline-none">
          Preview
        </button>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-md shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Payment Type
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentType"
                className="form-radio text-blue-500"
              />
              <span>Send</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentType"
                className="form-radio text-blue-500"
              />
              <span>Receive</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Vendor
          </label>
          <input
            type="text"
            placeholder="Vendor Name"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            placeholder="5000"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Transaction Date
          </label>
          <input
            type="datetime-local"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reference No
          </label>
          <input
            type="text"
            placeholder="Reference No"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cash / Bank
          </label>
          <input
            type="text"
            placeholder="Cash In Hand Abbas"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Bank Account
          </label>
          <input
            type="text"
            placeholder="Company Bank Account"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Memo
          </label>
          <textarea
            rows="3"
            placeholder="Memo"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
      </div>

      {/* Accounting Lines Table */}
      <div className="mt-6 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Accounting Lines
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                S.No
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Entity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Account
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Debit Amount
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Credit Amount
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Line Type
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border border-gray-300 px-4 py-2 text-center"
                colSpan="6"
              >
                No Accounting Details.
              </td>
            </tr>
          </tbody>
        </table>
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
};

export default PaymentForm;
