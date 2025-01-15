import React, { useState } from 'react'

import imagegmail from './images/imagegmail.jpg';
import { useNavigate , Link } from "react-router-dom";
import { Sidebar } from '../../components/slider';

function Purchase_item_form() {
  const [activeTab, setActiveTab] = useState("general");
  const [customerCategory, setCustomerCategory] = useState("");
  const [showModal, setShowModal] = useState(false); // For modal visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 const [isSalesOpen, setIsSalesOpen] = useState(false); 
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
  // State for form data
  const [formData, setFormData] = useState({
    itemType: "",
    itemUOM: "",
    itemcatagroy: "",
    CarBrands: "",
    Quailty: "",
    isSale: false,
    isPurchase: false,
    salePrice: "",
    tax: "",
    minStockLevel: "",
  });

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCustomerCategory(value);
    setFormData({
      ...formData,
      itemcatagroy: value, // Update item category in formData
    });

    if (value === "newCreate") {
      setShowModal(true); // Show modal if "New Create" is selected
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine formData with customerCategory before logging
    const dataToLog = { ...formData, customerCategory };
    
    console.log(dataToLog); // Log all form data including customerCategory
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

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Modal */}
      <div className="bg-white w-full sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-[800px] rounded-lg shadow-lg p-6">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Create item</h2>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-6">
              <div className="w-full sm:w-1/2">
                <label className="text-sm">
                  Item Code
                  <input
                    placeholder="Optional"
                    className="mt-1 border ml-2 w-full rounded-md p-2"
                  />
                </label>
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-sm">
                  Name <span className="text-red-500">*</span>
                  <input
                    placeholder="Enter Name"
                    className="mt-1 border ml-2 w-full rounded-md p-2"
                  />
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 w-full sm:w-1/2">
                <input
                  id="saleItem"
                  type="checkbox"
                  className="form-checkbox"
                  checked={formData.isSale}
                  onChange={handleInputChange}
                  name="isSale"
                />
                <label htmlFor="saleItem">Is Sale Item</label>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-1/2">
                <input
                  id="purchaseItem"
                  type="checkbox"
                  className="form-checkbox"
                  checked={formData.isPurchase}
                  onChange={handleInputChange}
                  name="isPurchase"
                />
                <label htmlFor="purchaseItem">Is Purchase Item</label>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              {/* Sidebar Tabs */}
              <div className="w-full sm:w-1/3 border-r p-4">
                <button
                  type="button"
                  onClick={() => handleTabClick("general")}
                  className={`block w-full text-left p-2 rounded-lg mb-2 ${activeTab === "general"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  General Information
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick("sales")}
                  className={`block w-full text-left p-2 rounded-lg ${activeTab === "sales"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  Sales
                </button>
              </div>

              {/* Tab Content */}
              <div className="w-full sm:w-2/3 p-4">
                {activeTab === "general" && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Item Type</label>
                      <input
                        type="text"
                        name="itemType"
                        value={formData.itemType}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter item type"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Item UOM</label>
                      <input
                        type="text"
                        name="itemUOM"
                        value={formData.itemUOM}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter unit of measure"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Item Category</label>
                      <select
                        id="Receivable Account"
                        className="w-full border rounded px-3 py-2"
                        value={customerCategory}
                        onChange={(e) => {
                          handleCategoryChange(e);
                          handleInputChange(e);
                        }}
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option value="finish">Mobile</option>
                        <option value="kniting">Car</option>
                        <option value="newCreate">Watch</option>
                        <option value="newCreate">Chair</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeTab === "sales" && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Sale Price</label>
                      <input
                        type="text"
                        name="salePrice"
                        value={formData.salePrice}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter sale price"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Tax</label>
                      <input
                        type="text"
                        name="tax"
                        value={formData.tax}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter tax"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Minimum Stock Level</label>
                      <input
                        type="text"
                        name="minStockLevel"
                        value={formData.minStockLevel}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter stock level"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-4 p-4 border-t">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
 </main>
  </div>);
};



export default Purchase_item_form