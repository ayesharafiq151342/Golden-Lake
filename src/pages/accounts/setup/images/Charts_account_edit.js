import React, { useState } from "react";

const EditAccountModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "Accounts Payable",
    accountCode: "201010",
    parentAccount: "Current Liabilities",
    accountType: "Liabilities",
    subType: "Current Liabilities",
    isGroup: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleUpdate = () => {
    console.log("Updated data:", formData);
    onClose();
  };

  const handleDelete = () => {
    console.log("Deleted account:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Edit Account</h2>
          <button
            className="text-gray-400 hover:text-gray-600 text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form className="mt-4">
          {/** Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/** Account Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Account Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="accountCode"
              value={formData.accountCode}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/** Parent Account */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Parent Account <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="parentAccount"
              value={formData.parentAccount}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/** Account Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Account Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="accountType"
              value={formData.accountType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/** Sub Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Sub Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subType"
              value={formData.subType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/** Is Group */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Is Group</label>
            <input
              type="checkbox"
              name="isGroup"
              checked={formData.isGroup}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
        </form>

        {/** Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccountModal;
