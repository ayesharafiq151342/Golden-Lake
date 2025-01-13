import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import imagegmail from './images/imagegmail.jpg';
import { Sidebar } from '../../components/slider';
function CreateObjectForm() {
  const [objectStatus, setObjectStatus] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    viewObjectPath: '',
    entryObjectPath: '',
    objectType: '',
    objectTableName: '',
    objectTableSubType: '',
    codePrefix: '',
    allowCustomFields: false,
  });
  const navigate = useNavigate(); 

  const handleAddLine = () => {
    setObjectStatus([...objectStatus, { transactionStatus: '', accountStatus: '', isDefault: false }]);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false); 

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Journal Entry Structure:', { ...formData, objectStatus });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
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

        <main className="flex-1 w-96 lg:ml-60 p-8">
       
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
          <div className="min-h-screen ">
            <div className="p-6 space-y-6">
              <div className="p-6 mx-auto bg-white rounded-md shadow-md">
                {/* Back Button */}
                <div className="flex items-center justify-end mb-4">
                  <button onClick={handleBack} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                    Back
                  </button>
                </div>

                <h2 className="text-xl font-bold mb-6">Create Object</h2>

                <form onSubmit={handleSubmit} className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-2">Name<span className="text-red-500">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter Name" />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">View Object Path</label>
                      <input type="text" name="viewObjectPath" value={formData.viewObjectPath} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter View Object Path" />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Entry Object Path<span className="text-red-500">*</span></label>
                      <input type="text" name="entryObjectPath" value={formData.entryObjectPath} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter Entry Object Path" />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Object Type<span className="text-red-500">*</span></label>
                      <select name="objectType" value={formData.objectType} onChange={handleChange} className="w-full px-3 py-2 border rounded-md">
                        <option>Select</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Object Table Name<span className="text-red-500">*</span></label>
                      <input type="text" name="objectTableName" value={formData.objectTableName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter Object Table Name" />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Object Table Sub Type<span className="text-red-500">*</span></label>
                      <input type="text" name="objectTableSubType" value={formData.objectTableSubType} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter Object Table Sub Type" />
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Code Prefix</label>
                      <input type="text" name="codePrefix" value={formData.codePrefix} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Enter Code Prefix" />
                    </div>

                    <div className="flex items-center mt-6">
                      <input type="checkbox" name="allowCustomFields" checked={formData.allowCustomFields } onChange={handleChange} className="mr-2" />
                      <label className="font-medium">Allow Custom Fields</label>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mt-8 mb-4">Object Status</h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border">Transaction Status</th>
                          <th className="px-4 py-2 border">Account Status</th>
                          <th className="px-4 py-2 border">Is Default</th>
                          <th className="px-4 py-2 border">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {objectStatus.map((status, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 border"><input type="text" className="w-full px-3 py-2 border rounded-md" value={status.transactionStatus} onChange={(e) => {
                              const newStatus = [...objectStatus];
                              newStatus[index].transactionStatus = e.target.value;
                              setObjectStatus(newStatus);
                            }} /></td>
                            <td className="px-4 py-2 border"><input type="text" className="w-full px-3 py-2 border rounded-md" value={status.accountStatus} onChange={(e) => {
                              const newStatus = [...objectStatus];
                              newStatus[index].accountStatus = e.target.value;
                              setObjectStatus(newStatus);
                            }} /></td>
                            <td className="px-4 py-2 border">
                              <input type="checkbox" checked={status.isDefault} onChange={() => {
                                const newStatus = [...objectStatus];
                                newStatus[index].isDefault = !newStatus[index].isDefault;
                                setObjectStatus(newStatus);
                              }} />
                            </td>
                            <td className="px-4 py-2 border">
                              <button type="button" onClick={() => {
                                const newStatus = objectStatus.filter((_, i) => i !== index);
                                setObjectStatus(newStatus);
                              }} className="text-red-500 hover:text-red-700">Delete</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button type="button" onClick={handleAddLine} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Add Line</button>
                  <div className="flex justify-end mt-8">
  <button type="submit" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">Save Object</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      
      </div>
   
  );
}

export default CreateObjectForm;
