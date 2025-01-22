import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function LocationUse() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCode = queryParams.get("code") || "";
  const initialdate = queryParams.get("date") || "";
  const initialMemo = queryParams.get("memo") || "";
  const [code, setCode] = useState(initialCode);
  const [transactionDate, settransactionDate] = useState(initialdate);
  const [memo, setMemo] = useState(initialMemo);
  const [status, setStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
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
  const [activeTab, setActiveTab] = useState("invoiceLines");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", { code, transactionDate, memo });
    alert(`Saved: Code=${code}, Reference=${transactionDate}, Memo=${memo}`);
    setIsEditing(false);
  };

  const handleApprove = () => {
    if (!isEditing) {
      setStatus("approved");
      setIsEditing(false);
    }
  };

  const handleDraft = () => {
    setIsEditing(true);
    setStatus("draft");
  };

  const handleReset = () => {
    setStatus("");
    setIsEditing(false);
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
    <div className="min-h-screen flex">
      <main className="flex-1 w-96 p-8">
        <header className="flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4">
          <button onClick={toggleSidebar} className="mr-4 w-8 h-8 bg-white rounded-full shadow-lg">
            <span className="text-gray-700 text-2xl">☰</span>
          </button>
          <h1 className="text-2xl text-white font-bold">
            <Link to="/">Accounts Management</Link>
          </h1>
          <div className="flex items-center">
            <p className="text-white text-lg mr-2">Ref#: {transactionDate || "N/A"}</p>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="p-4 bg-white rounded-md shadow-lg">
            <h2 className="text-lg font-bold">Edit Invoice</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="p-2 border rounded"
                placeholder="Code"
              />
              <input
                type="text"
                value={transactionDate}
                onChange={(e) => settransactionDate(e.target.value)}
                className="p-2 border rounded"
                placeholder="transactionDate"
              />
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                className="p-2 border rounded"
                placeholder="Memo"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={handleDraft} className="bg-yellow-500 text-white px-4 py-2 rounded">
              Draft
            </button>
            <button type="button" onClick={handleApprove} className="bg-green-500 text-white px-4 py-2 rounded">
              Approve
            </button>
            <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">
              Reset
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
        <div className="flex mt-4">
          <button
            className={`px-4 py-2 ${activeTab === "invoiceLines" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-l`}
            onClick={() => setActiveTab("invoiceLines")}
          >
            Invoice Lines
          </button>
          <button
            className={`px-4 py-2 ${activeTab === "accountingLines" ? "bg-blue-500 text-white" : "bg-gray-200"} rounded-r`}
            onClick={() => setActiveTab("accountingLines")}
          >
            Accounting Lines
          </button>
        </div>
        <div className="mt-4">{renderTabContent()}</div>
      </main>
    </div>
  );
}

export default LocationUse;
