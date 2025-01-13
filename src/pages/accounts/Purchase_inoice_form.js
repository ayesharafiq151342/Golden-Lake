import React, { useState } from "react";
import { X } from 'lucide-react';
import imagegmail from './images/imagegmail.jpg';
import { useNavigate , Link} from "react-router-dom";
import { Sidebar } from "../../components/slider";

const Purchase_inoice_form = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSalesOpen, setIsSalesOpen] = useState(false); 
    const navigate = useNavigate();  
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

    const [lines, setLines] = useState([
      { item: "", account: "", quantity: 1, unitPrice: 0, tax: "GAT", taxAmount: 0, grossAmount: 0 },
    ]);
  
    const updateLine = (index, field, value) => {
      const newLines = [...lines];
      newLines[index][field] = value;
  
      if (field === "quantity" || field === "unitPrice" || field === "tax") {
        const unitPrice = parseFloat(newLines[index].unitPrice) || 0;
        const quantity = parseInt(newLines[index].quantity) || 0;
        const taxRate = newLines[index].tax === "GAT" ? 0.18 : 0.15;
  
        // Calculate tax amount and gross amount
        newLines[index].taxAmount = unitPrice * quantity * taxRate;
        newLines[index].grossAmount = unitPrice * quantity + newLines[index].taxAmount;
      }
  
      setLines(newLines);
    };
  
    const removeLine = (index) => {
      setLines(lines.filter((_, i) => i !== index));
    };
  
    const addLine = () => {
      setLines([...lines, { item: "", account: "", quantity: 1, unitPrice: 0, tax: "GAT", taxAmount: 0, grossAmount: 0 }]);
    };
   
  
    const [formData, setFormData] = useState({
      customer: "",
      transactionDate: "",
      warehouse: "",
      memo: "",
      referenceNo: "",
      dueDtae:""
    });
  
    const handleCreate = () => {
      // Here, you can handle what happens when the Create button is clicked
      // For now, let's log the form data to the console
      console.log("Form Data:", { ...formData, lines });
      // You can also display the data or send it to an API, etc.
    };
  
    const calculateTotal = (key) => lines.reduce((acc, line) => acc + line[key], 0);
    const [activeTab, setActiveTab] = useState("invoiceLines"); // Default tab is "Invoice Lines"
  
    const renderTabContent = () => {
      if (activeTab === "invoiceLines") {
        return (
          <div className="overflow-x-auto">
  <table className="table-auto lg:w-full sm:w-96 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Item</th>
              <th className="border border-gray-300 p-2">Account</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Unit Price</th>
              <th className="border border-gray-300 p-2">Tax Type</th>
              <th className="border border-gray-300 p-2">Tax Amount</th>
              <th className="border border-gray-300 p-2">Gross Amount</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Item"
                    className="w-full p-1 border rounded"
                    value={line.item}
                    onChange={(e) => updateLine(index, "item", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    placeholder="Account"
                    className="w-full p-1 border rounded"
                    value={line.account}
                    onChange={(e) => updateLine(index, "account", e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={line.quantity}
                    onChange={(e) => updateLine(index, "quantity", +e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={line.unitPrice}
                    onChange={(e) => updateLine(index, "unitPrice", +e.target.value)}
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <select
                    className="w-full p-1 border rounded"
                    value={line.tax}
                    onChange={(e) => updateLine(index, "tax", e.target.value)}
                  >
                    <option value="GAT">GAT (18%)</option>
                    <option value="VAT">VAT (15%)</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2">{line.taxAmount.toFixed(2)}</td>
                <td className="border border-gray-300 p-2">{line.grossAmount.toFixed(2)}</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button className="text-red-500" onClick={() => removeLine(index)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={addLine}>
          Add Line
        </button>
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Terms and Conditions</label>
          <textarea className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <div className="mt-6 text-right">
          <p>Total Amount: {calculateTotal("quantity") * calculateTotal("unitPrice").toFixed(2)}</p>
          <p>Total Tax Amount: {calculateTotal("taxAmount").toFixed(2)}</p>
          <p className="font-bold">Total Gross Amount: {calculateTotal("grossAmount").toFixed(2)}</p>
        </div>
      </div>
        );
      } else if (activeTab === "accountingLines") {
        return (
          <div className="w-full "> 
            <h2 className="text-xl font-bold mb-4">Accounting Lines</h2>
            <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
              Accounting Lines
            </h2>
            <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-md">
      <thead className="">
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
            {/* Add your Accounting Lines table or content here */}
          </div>
        );
      }
    };
  
    return (
        <div className="min-h-screen flex">
            

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
            <div className="min-h-screen ">
      <div className="pt-6 m-4 space-y-6 bg-white">
        {/* Header */}
        <div className="min-h-screen ">
  <div className="p-6   rounded shadow border-2 border-gray-300 space-y-6">
    {/* Header */}
    <div className="p-2 ">
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded shadow"
          onClick={handleCreate}
        >
          Create
        </button>
        <button
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        onClick={() => navigate(-1)} // Navigate back to the previous page
      >
        Back
      </button>
      
      </div>
    </div>

    {/* Form */}
    <div className="  rounded shadow">
    <div className="flex justify-between items-center mb-4 flex-wrap">
  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Sale Invoice Form</h1>
  <div className="flex space-x-4 mt-2 sm:mt-0">
    <button className="px-4 py-2 bg-blue-500 text-white rounded shadow">
      Draft
    </button>
    <button className="px-4 py-2 text-black border border-gray-300 rounded shadow">
      Approved
    </button>
  </div>
</div>


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Customer Field */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="customer">
            Vonder
          </label>
          <input
            id="customer"
            type="text"
            placeholder="Customer"
            value={formData.customer}
            onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Transaction Date Field */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="transactionDate">
            Transaction Date
          </label>
          <input
            id="transactionDate"
            type="datetime-local"
            value={formData.transactionDate}
            onChange={(e) => setFormData({ ...formData, transactionDate: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Warehouse Field */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="warehouse">
            Warehouse
          </label>
          <input
            id="warehouse"
            type="text"
            placeholder="Warehouse"
            value={formData.warehouse}
            onChange={(e) => setFormData({ ...formData, warehouse: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Memo Field */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="memo">
            Memo
          </label>
          <input
            id="memo"
            type="text"
            placeholder="Memo"
            value={formData.memo}
            onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="referenceNo">
            Due Date
          </label>
          <input
            id="DueDate"
            type="date"
            placeholder="due date"
            value={formData.dueDtae}
            onChange={(e) => setFormData({ ...formData, dueDtae: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>
        {/* Reference Number Field */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="referenceNo">
            Reference No
          </label>
          <input
            id="referenceNo"
            type="number"
            placeholder="Reference No"
            value={formData.referenceNo}
            onChange={(e) => setFormData({ ...formData, referenceNo: e.target.value })}
            className="p-2 border rounded w-full"
          />
        </div>
        
      </div>
 </div>

<div className="mt-8 rounded shadow ">
  <div className="flex flex-col space-y-4 w-full sm:flex-row sm:space-x-4">
    <div className=" lg:w-full sm:w-auto p-4 ">
      <div className="flex flex-col   sm:flex-row sm:space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "invoiceLines"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveTab("invoiceLines")}
        >
          Invoice Lines
        </button>
        <button
          className={`px-4 py-2 rounded shadow ${
            activeTab === "accountingLines"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-black"
          }`}
          onClick={() => setActiveTab("accountingLines")}
        >
          Accounting Lines
        </button>
      </div>
      <div className=" lg:w-full sm:w-96 p-4">
        {renderTabContent()}
      </div>
    </div>
  </div>
</div>

     
 </div></div>

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
}
export default Purchase_inoice_form;