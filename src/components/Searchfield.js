import React, { useState } from "react";
import { X } from "lucide-react";
import imagegmail from "./images/imagegmail.jpg";
import { useNavigate, Link } from "react-router-dom";
import { Sidebar } from "../../components/slider";
import { SearchableField } from "../../components/Searchfield";

function CreateObjectForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entryStructure = Object.fromEntries(formData.entries());
    console.log("New Journal Entry Structure:", entryStructure);
  };

  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [lines, setLines] = useState([
    { entity: "", account: "", quantity: 1, unitPrice: 0, tax: "GAT", description: "", grossAmount: 0 },
  ]);

  const updateLine = (index, field, value) => {
    const newLines = [...lines];
    newLines[index][field] = value;

    if (field === "quantity" || field === "unitPrice" || field === "tax") {
      const unitPrice = parseFloat(newLines[index].unitPrice) || 0;
      const quantity = parseInt(newLines[index].quantity) || 0;
      const taxRate = newLines[index].tax === "GAT" ? 0.18 : 0.15;

      newLines[index].taxAmount = unitPrice * quantity * taxRate;
      newLines[index].grossAmount = unitPrice * quantity + newLines[index].taxAmount;
    }

    setLines(newLines);
  };

  const removeLine = (index) => {
    setLines(lines.filter((_, i) => i !== index));
  };

  const addLine = () => {
    setLines([...lines, { entity: "", account: "", description: "", quantity: 1, unitPrice: 0 }]);
  };

  const [formData, setFormData] = useState({
    customer: "",
    transactionDate: "",
    warehouse: "",
    memo: "",
    referenceNo: "",
  });

  const handleCreate = () => {
    console.log("Form Data:", { ...formData, lines });
  };

  const calculateTotal = (key) => lines.reduce((acc, line) => acc + (line[key] || 0), 0);

  const [activeTab, setActiveTab] = useState("invoiceLines");

  const renderTabContent = () => {
    if (activeTab === "invoiceLines") {
      return (
        <div className="overflow-x-auto">
          <table className="table-auto lg:w-full sm:w-96 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Entity</th>
                <th className="border border-gray-300 p-2">Account</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Unit Price</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lines.map((line, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">
                    <SearchableField
                      type="entity"
                      value={line.entity}
                      onChange={(value) => updateLine(index, "entity", value)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <SearchableField
                      type="account"
                      value={line.account}
                      onChange={(value) => updateLine(index, "account", value)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      placeholder="Description"
                      className="w-full p-1 border rounded"
                      value={line.description}
                      onChange={(e) => updateLine(index, "description", e.target.value)}
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
            <p>Total Quantity: {calculateTotal("quantity").toFixed(2)}</p>
            <p>Total Unit Price: {calculateTotal("unitPrice").toFixed(2)}</p>
          </div>
        </div>
      );
    } else if (activeTab === "accountingLines") {
      return (
        <div className="w-full">
          <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">Accounting Lines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 border">Entity</th>
                  <th className="text-left px-4 py-2 border">Account</th>
                  <th className="text-left px-4 py-2 border">Description</th>
                  <th className="text-left px-4 py-2 border">Debit Amount</th>
                  <th className="text-left px-4 py-2 border">Credit Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4">
                    No Accounting Details.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
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
              <Link to="/">Accounts Management</Link>
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
        <div className="min-h-screen">
          <div className="pt-6 m-4 space-y-6 bg-white">
            <div className="p-6 rounded shadow border-2 border-gray-300 space-y-6">
              <div className="p-2">
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center mb-4">
                  <button
                    className="bg-blue-500 px-4 py-2 text-white rounded-lg"
                    onClick={toggleSalesMenu}
                  >
                    ➕New Sales Journal Entry
                  </button>
                  {isSalesOpen && (
                    <button
                      className="p-2 rounded-full border border-gray-300 ml-auto"
                      onClick={() => setIsSalesOpen(false)}
                    >
                      <X size={24} />
                    </button>
                  )}
                </div>
                <div>
                  <label className="font-bold">Filter Invoice :</label>
                  <SearchableField
                    type="default"
                    value={searchQuery}
                    onChange={(value) => setSearchQuery(value)}
                  />
                  <div className="flex items-center">
                    <p className="font-bold mr-2">Invoice No :</p>
                    <SearchableField
                      type="invoicing"
                      value={searchQuery}
                      onChange={(value) => setSearchQuery(value)}
                    />
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="w-full rounded p-2 space-y-2">
                  {renderTabContent()}
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                >
                  Submit Journal
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateObjectForm;
