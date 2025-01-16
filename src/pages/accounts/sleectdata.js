import React, { useState } from "react";

const InvoiceForm = () => {
  const people = [
    { name: "Ayesha", city: "Lahore", phone: "123-456-7890" },
    { name: "Ali", city: "Karachi", phone: "098-765-4321" },
    { name: "Sara", city: "Islamabad", phone: "555-123-4567" },
  ];

  const [selectedPerson, setSelectedPerson] = useState({});
  const [invoiceLines, setInvoiceLines] = useState([
    { id: 1, item: "", account: "", quantity: 0, unitPrice: 0, tax: "", grossAmount: 0 },
  ]);

  const handlePersonChange = (e) => {
    const person = people.find((p) => p.name === e.target.value);
    setSelectedPerson(person || {});
  };

  const addLine = () => {
    setInvoiceLines([
      ...invoiceLines,
      { id: Date.now(), item: "", account: "", quantity: 0, unitPrice: 0, tax: "", grossAmount: 0 },
    ]);
  };

  const removeLine = (id) => {
    setInvoiceLines(invoiceLines.filter((line) => line.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setInvoiceLines(
      invoiceLines.map((line) =>
        line.id === id ? { ...line, [field]: value, grossAmount: line.quantity * line.unitPrice } : line
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6 space-y-4">
        {/* Dropdown to select person */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Person</label>
          <select
            onChange={handlePersonChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select a person</option>
            {people.map((person, index) => (
              <option key={index} value={person.name}>
                {person.name}
              </option>
            ))}
          </select>
        </div>

        {/* Auto-filled fields */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={selectedPerson.city || ""}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              value={selectedPerson.phone || ""}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Table for invoice lines */}
        <table className="w-full mt-6 border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 border">Item</th>
              <th className="px-4 py-2 border">Account</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Unit Price</th>
              <th className="px-4 py-2 border">Tax</th>
              <th className="px-4 py-2 border">Gross Amount</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoiceLines.map((line) => (
              <tr key={line.id}>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={line.item}
                    onChange={(e) => handleInputChange(line.id, "item", e.target.value)}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={line.account}
                    onChange={(e) => handleInputChange(line.id, "account", e.target.value)}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={line.quantity}
                    onChange={(e) => handleInputChange(line.id, "quantity", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={line.unitPrice}
                    onChange={(e) => handleInputChange(line.id, "unitPrice", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 border">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-1"
                    value={line.tax}
                    onChange={(e) => handleInputChange(line.id, "tax", e.target.value)}
                  />
                </td>
                <td className="px-4 py-2 border text-right">{line.grossAmount.toFixed(2)}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                    onClick={() => removeLine(line.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={addLine}
        >
          Add Line
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
