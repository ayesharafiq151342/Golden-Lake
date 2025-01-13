import React, { useState } from "react";

function JournalLines() {
  const [entity, setEntity] = useState({
    entityName: "",
    account: "",
    description: "",
    debitAccount: "",
    creditAccount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntity((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entity Data:", entity);
    // Add logic to save the entity
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto w-full"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Journal Entry
      </h2>

      {/* Entity Name and Account Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Entity Name */}
        <div>
          <label
            htmlFor="entityName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Entity Name
          </label>
          <input
            type="text"
            id="entityName"
            name="entityName"
            value={entity.entityName}
            onChange={handleChange}
            required
            placeholder="Enter entity name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Account */}
        <div>
          <label
            htmlFor="account"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Account
          </label>
          <input
            type="text"
            id="account"
            name="account"
            value={entity.account}
            onChange={handleChange}
            required
            placeholder="Enter account "
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Description Field */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={entity.description}
          onChange={handleChange}
          required
          placeholder="Enter description"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        ></textarea>
      </div>

      {/* Debit and Credit Account Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Debit Account */}
        <div>
          <label
            htmlFor="debitAccount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Debit Account
          </label>
          <input
            type="number"
            id="debitAccount"
            name="debitAccount"
            value={entity.debitAccount}
            onChange={handleChange}
            required
            placeholder="Enter debit account"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Credit Account */}
        <div>
          <label
            htmlFor="creditAccount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Credit Account
          </label>
          <input
            type="number"
            id="creditAccount"
            name="creditAccount"
            value={entity.creditAccount}
            onChange={handleChange}
            required
            placeholder="Enter credit account"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save Entry
        </button>
      </div>
    </form>
  );
}

export default JournalLines;