
    import React, { useState } from "react";
    import imagegmail from '../images/imagegmail.jpg'; // Ensure image path is correct

    import { useNavigate, Link } from "react-router-dom";

import { InventorySidebar } from '../../../components/Inventorysidebar';
    function InventoryCreateForm() {

        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        const navigate = useNavigate();
    
        const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
        const [formData, setFormData] = useState({
            customer: "",
            transactionDate: "",
            warehouse: "",
            memo: "",
            referenceNo: "",
            duedate: ""
        });
    
        const handleCreate = () => {
            console.log("Form Data:", formData);
        };
    
        return (
            <div className="min-h-screen flex">
                <InventorySidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}
    
                <main className="flex-1 w-96 lg:ml-60 p-8">
                    <header className="flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4">
                        <button
                            onClick={toggleSidebar}
                            className="mr-4 w-8 ml-4 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                        >
                            <span className="text-gray-700 text-2xl">☰</span>
                        </button>
                        <div className="flex items-center">
                            <h1 className="text-2xl text-white font-bold">
                                <Link to='/'>Accounts Management</Link>
                            </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img
                                src={imagegmail}
                                alt="Golden Lake Logo"
                                className="h-10 w-10 object-contain rounded-full"
                            />
                        </div>
                    </header>
    
                    <div className="min-h-screen pt-6 m-4 space-y-6 bg-white rounded shadow-lg p-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">Sale Invoice Form</h1>
                            <div className="flex space-x-4">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
                                    Draft
                                </button>
                                <button className="px-4 py-2 text-black border border-gray-300 rounded shadow">
                                    Approved
                                </button>
                            </div>
                        </div>
    
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCreate();
                            }}
                            className="space-y-4"
                        >
                            {/* Customer */}
                            <div>
                                <label className="block mb-1 font-medium">Customer</label>
                                <input
                                    type="text"
                                    placeholder="Enter customer name"
                                    value={formData.customer}
                                    onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            {/* Transaction Date */}
                            <div>
                                <label className="block mb-1 font-medium">Transaction Date</label>
                                <input
                                    type="datetime-local"
                                    value={formData.transactionDate}
                                    onChange={(e) => setFormData({ ...formData, transactionDate: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            {/* Warehouse */}
                            <div>
                                <label className="block mb-1 font-medium">Warehouse</label>
                                <input
                                    type="text"
                                    placeholder="Enter warehouse"
                                    value={formData.warehouse}
                                    onChange={(e) => setFormData({ ...formData, warehouse: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            {/* Memo */}
                            <div>
                                <label className="block mb-1 font-medium">Memo</label>
                                <input
                                    type="text"
                                    placeholder="Enter memo"
                                    value={formData.memo}
                                    onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            {/* Due Date */}
                            <div>
                                <label className="block mb-1 font-medium">Due Date</label>
                                <input
                                    type="datetime-local"
                                    value={formData.duedate}
                                    onChange={(e) => setFormData({ ...formData, duedate: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            {/* Reference Number */}
                            <div>
                                <label className="block mb-1 font-medium">Reference No</label>
                                <input
                                    type="number"
                                    placeholder="Enter reference number"
                                    value={formData.referenceNo}
                                    onChange={(e) => setFormData({ ...formData, referenceNo: e.target.value })}
                                    className="p-2 border rounded w-full"
                                />
                            </div>
    
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded shadow"
                                >
                                    Create
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate(-1)}
                                    className="px-4 py-2 bg-gray-300 text-black rounded shadow"
                                >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    };
    
  
    

export default InventoryCreateForm
