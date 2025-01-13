'use client'

import { useState } from "react"
import compnyimage from './images/companyproifle.webp'

export default function CustomerForm() {
 
  const [customerCategory, setCustomerCategory] = useState("")
  const [showModal, setShowModal] = useState(false) // For modal visibility
  const [newCategory, setNewCategory] = useState("") // For new category form data

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setCustomerCategory(value)
    if (value === "newCreate") {
      setShowModal(true) // Show modal if "New Create" is selected
    }
  }

  const handleNewCategorySubmit = (e) => {
    e.preventDefault()
    console.log("New Category Created:", newCategory)
    setShowModal(false) // Close modal after submission
  }
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    customerCode: "",
    address: "",
    phone: "",
    cnic: "",
    Email:'',
    
  })
 

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Data Submitted:", formData, customerCategory)
  }
 

  return (<>
<div className="w-full  h-96 bg-cover bg-center" style={{ backgroundImage: `url(${compnyimage})` }}>
  {/* You can add content inside if needed */}
</div>



    <div className="max-w-7xl m-6 w-full mx-auto p-6 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Customer Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="w-full border rounded px-3 py-2"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="category" className="block font-medium">
                Customer Category <span className="text-red-500">*</span>
              </label>
              <select
            id="category"
            className="w-full border rounded px-3 py-2"
            value={customerCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="finish">Finish</option>
            <option value="kniting">Kniting</option>
            <option value="newCreate">New Create</option>
          </select>
            </div>
             {/* Modal Popup */}
      {showModal && (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-4">Create New Category</h3>
            <form
        onSubmit={(e) => {
          handleNewCategorySubmit(e); // Call the submit function
          setShowModal(false); // Close the modal after submit
        }}
        className="space-y-4"
      >
              <div>
                <label htmlFor="newCategory" className="block font-medium">
                  New Category Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="newCategory"
                  type="text"
                  placeholder="Enter new category name"
                  className="w-full border rounded px-3 py-2"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  required
                />
              </div>
              <div>
              <label htmlFor="category" className="block font-medium">
              Receivable Account <span className="text-red-500">*</span>
              </label>
              <select
            id=" Receivable Account"
            className="w-full border rounded px-3 py-2"
            value={customerCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="finish">Accounts Payable</option>
            <option value="kniting">Accounts Receivable</option>
            <option value="newCreate">Account Depreciation</option>
            <option value="newCreate">Account Depreciation</option>
            <option value="newCreate">Additional Paid-in Captial </option>
            <option value="newCreate">Amortization Expense </option>
            <option value="newCreate">Assets </option>


          </select>
            </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)} // Close modal
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
            <div>
              <label htmlFor="dob" className="block font-medium">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full border rounded px-3 py-2"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>   <div>
              <label htmlFor="Email" className="block font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="Email"
                type="Email"
                placeholder="Enter Email"
                className="w-full border rounded px-3 py-2"
                required
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="customerCode" className="block font-medium">
                Customer Code
              </label>
              <input
                id="customerCode"
                type="text"
                placeholder="Enter Customer Code"
                className="w-full border rounded px-3 py-2"
                value={formData.customerCode}
                onChange={handleChange}
              />
            </div>
           
         
            <div>
              <label htmlFor="phone" className="block font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter Phone"
                className="w-full border rounded px-3 py-2"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="cnic" className="block font-medium">
                CNIC <span className="text-red-500">*</span>
              </label>
              <input
                id="cnic"
                type="text"
                placeholder="Enter CNIC"
                className="w-full border rounded px-3 py-2"
                required
                value={formData.cnic}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="block font-medium">
                Address
              </label>
              <textarea
                id="address"
                placeholder="Enter Address"
                rows="3"
                className="w-full border rounded px-3 py-2"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>
        </div>
      </form>
    </div> </>
  )
}
