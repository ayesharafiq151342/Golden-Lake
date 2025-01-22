import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { InventorySidebar } from "../../../components/Inventorysidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function LocationUse() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCode = queryParams.get("code") || "";
  const initialdate = queryParams.get("date") || "";
  const initialMemo = queryParams.get("memo") || "";
  const [code, setCode] = useState(initialCode);
  const [wearhouse, setWearhouse] = useState('')
  const [transactionDate, settransactionDate] = useState(initialdate);
  const [memo, setMemo] = useState(initialMemo);
  const [cashAccount, setCashAccount] = useState('')
  const [refrence, SetRefrence] = useState('')
  const [isEditing, setIsEditing] = useState(false);

  const [status, setStatus] = useState("approved"); // Initial status is "approved"
  const [isResetClicked, setIsResetClicked] = useState(false); // Tracks Reset click
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("invoiceLines");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lines, setLines] = useState([
    { item: "", account: "", quantity: 1, unitPrice: 0, tax: "GAT", taxAmount: 0, grossAmount: 0 },
  ]);
  const [formData, setFormData] = useState({
    customer: "",
    transactionDate: "",
    warehouse: "",
    memo: "",
    duedate: "",
  });



  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", {wearhouse, transactionDate, memo, cashAccount ,refrence  });
    setIsEditing(false);
  };
  const handleReset = () => {
    // Reset status
    setStatus("draft");
    setIsResetClicked(true);
    setIsCreateClicked(true); // Disable Create button
    console.log("Reset clicked. Status cleared.");
    setIsEditing(true);
  };

  const handleCreate = (e) => {
    // Activate Draft

    e.preventDefault();
    console.log("Updated Data:", { wearhouse, transactionDate, memo, cashAccount ,refrence });



    setIsResetClicked(false); // Hide Create button
    setIsCreateClicked(true);
    // Enable Approve button
    setStatus("approved"); // Activate draft
    setIsEditing(false); // Disable editing
    console.log("Create clicked. Draft status activated.");
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  const handleDraft = () => {
    setStatus("draft"); // Keep status as draft
    console.log("Draft clicked. Status: Draft.");
  };

  const handleApprove = () => {
    setStatus("approved"); // Activate Approve
    console.log("Approve clicked. Status: Approved.");
  };

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
    setLines([
      ...lines,
      { item: "", account: "", quantity: 1, unitPrice: 0, tax: "GAT", taxAmount: 0, grossAmount: 0 },
    ]);
  };

  const calculateTotal = (key) => lines.reduce((acc, line) => acc + line[key], 0);

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
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4">Accounting Lines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-md">
              <thead>
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
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <InventorySidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <main className="flex-1 w-96 lg:ml-60 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center h-16 bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4 md:p-6">
          <button
            onClick={toggleSidebar}
            className="md:hidden w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-gray-700 text-xl">☰</span>
          </button>

          <div className="flex items-center space-x-2">
            <img
              src={"imagegmail"}
              alt="Golden Lake Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-full"
            />
          </div>
        </header>
        <div className="p-4 bg-white mt-4 rounded-md shadow-lg">

          {/* Update Button */}
          <div className="flex justify-between items-center flex-wrap text-sm text-gray-500">
            {/* Left Side */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500 transition duration-200">
                Update
              </button>
              <h1 className="text-sm md:text-sm text-green-400 ml-2">
                <Link to="/Inventory" className="hover:underline hover:text-green-600">
                  Inventory Management {code}
                </Link>
              </h1>
            </div>

            {/* Right Side */}
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-black rounded text-black w-full sm:w-auto"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
              Back
            </button>

          </div>

          <hr className="mt-2 border-gray-400" />


          <form onSubmit={handleSubmit}>

            <div className="flex flex-wrap justify-between items-center mt-4">
              {/* Left Side Buttons */}
              <div className="flex gap-2">
                {!isResetClicked && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                  >
                    Reset
                  </button>
                )}
                {isResetClicked && (
                  <button
                    type="button"
                    onClick={handleCreate}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                  >
                    Create
                  </button>
                )}
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-black rounded text-black w-full sm:w-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.016.02-.033.035-.048.055a9.973 9.973 0 01-.216.324C19.268 16.057 15.477 19 12 19c-4.477 0-8.268-2.943-9.542-7a9.953 9.953 0 01-.048-.055c-.062-.108-.135-.213-.216-.324z"
                    />
                  </svg>
                  Preview
                </button>
              </div>

              {/* Right Side Buttons */}
              <div className="flex gap-2 mt-4 sm:mt-0">
                <button
                  type="button"
                  onClick={handleDraft}
                  className={`px-4 py-2 rounded ${status === "draft"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={handleApprove}
                  className={`px-4 py-2 rounded ${status === "approved"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                  disabled={status !== "approved"}
                >
                  Approve
                </button>
              </div>
            </div>

            <h2 className="text-lg font-bold mt-8">Edit Invoice</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
              <label className="block">Warehouse
                <select
                name="warehouse"
                  value={wearhouse}
                  onChange={(e) => setWearhouse(e.target.value)}
                  className={`p-2 border rounded w-full ${!isEditing ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                  placeholder="Wearhouse"
                  disabled={!isEditing}
                >

                  <option value="Main">Main</option>
                  <option value="Secondary">Secondary</option>
                </select>
              </label>
              <label>TransactionDate
                <input
                  type="text"
                  name="transactionDate"
                  value={transactionDate}
                  onChange={(e) => settransactionDate(e.target.value)}
                  className="p-2 border rounded w-full"
                  placeholder="Transaction Date"
                  disabled={!isEditing}
                /></label>
              <label>
                Memo
                <input
                  type="text"
              name="memo"
                  
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="p-2 border rounded w-full col-span-1 sm:col-span-2"
                  placeholder="Memo"
                  disabled={!isEditing}
                /></label>
                 <label className="block text-sm mb-1">
            CashAccount Account <span className="text-red-500">*</span>

            <select
              value={cashAccount}
              name="cashAccount"

              onChange={(e) => setCashAccount(e.target.value)}
              className={`p-2 border rounded w-full ${!isEditing ? "bg-gray-200 cursor-not-allowed" : ""
                }`}
              placeholder="Wearhouse"
              disabled={!isEditing}      >
              <option value="assets">Current Assets</option>
              <option value="nonCurrentAssets">Non-Current Assets</option>
              <option value="liabilities">Liabilities</option>
              <option value="currentLiabilities">Current Liabilities</option>
              <option value="equity">Equity</option>
              <option value="revenues">Revenues</option>
              <option value="expenses">Expenses</option>
              <option value="operatingExpenses">Operating Expenses</option>
              <option value="nonOperatingExpenses">Non-Operating Expenses</option>
              <option value="cashAndBank">Cash and Bank</option>
              <option value="costOfGoods">Cost of Goods</option>
            </select>   </label>
            <label>
                Refrence
                <input
                  type="Refrence No"
                  name="Refrence"
                  value={refrence}
                  onChange={(e) => SetRefrence(e.target.value)}
                  className="p-2 border rounded w-full col-span-1 sm:col-span-2"
                  placeholder="Refrence"
                  disabled={!isEditing}
                /></label>
            </div>
          </form>
         
          {/* Tabs Section */}
          <div className="flex-1 mt-8 border-t pt-4">
            <button
              className={`px-4 py-2 flex-1 ${activeTab === "invoiceLines"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
                } rounded-l`}
              onClick={() => setActiveTab("invoiceLines")}
            >
              Invoice Lines
            </button>
            <button
              className={`px-4 py-2 flex-1 ${activeTab === "accountingLines"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
                } rounded-r`}
              onClick={() => setActiveTab("accountingLines")}
            >
              Accounting Lines
            </button>
          </div>
          <div className="mt-4">{renderTabContent()}</div>
        </div>

      </main>
    </div>
  );
}

export default LocationUse;
