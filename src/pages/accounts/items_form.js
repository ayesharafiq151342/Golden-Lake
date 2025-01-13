import React, { useState } from "react";

const EditItemModal = () => {
  const [activeTab, setActiveTab] = useState("general");

  // State for form data
  const [formData, setFormData] = useState({
    itemCode: "",
    name: "",
    isSale: false,
    isPurchase: false,
    salePrice: "",
    tax: "",
    minStockLevel: "",
  });

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
    console.log(formData); // Log the form data in console
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Modal */}
      <div className="bg-white w-[600px] rounded-lg shadow-lg">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Create item</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              {/* Sidebar Tabs */}
              <div className="w-1/3 border-r p-4">
                <button
                  type="button"
                  onClick={() => handleTabClick("general")}
                  className={`block w-full text-left p-2 rounded-lg mb-2 ${
                    activeTab === "general"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  General Information
                </button>
                <button
                  type="button"
                  onClick={() => handleTabClick("sales")}
                  className={`block w-full text-left p-2 rounded-lg ${
                    activeTab === "sales"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Sales
                </button>
              </div>

              {/* Tab Content */}
              <div className="w-2/3 p-4">
                {activeTab === "general" && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Item Code</label>
                      <input
                        type="text"
                        name="itemCode"
                        value={formData.itemCode}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter item code"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 mt-1"
                        placeholder="Enter item name"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="isSale"
                          checked={formData.isSale}
                          onChange={handleInputChange}
                        />
                        <span>Is Sale Item</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="isPurchase"
                          checked={formData.isPurchase}
                          onChange={handleInputChange}
                        />
                        <span>Is Purchase Item</span>
                      </label>
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
                Update
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
