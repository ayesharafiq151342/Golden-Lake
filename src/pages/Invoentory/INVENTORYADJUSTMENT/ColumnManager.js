import React, { useState } from "react";

const ColumnSelectorModal = ({ isOpen, onClose, onApply, selectedColumns }) => {
  const allColumns = [
    "Transaction Code",
    "Transaction Date",
    "Memo",
    "Status",
    "Reference No",
  ];

  const [columns, setColumns] = useState(selectedColumns);

  const toggleColumn = (column) => {
    if (columns.includes(column)) {
      setColumns(columns.filter((item) => item !== column));
    } else {
      setColumns([...columns, column]);
    }
  };

  const handleSelectAll = () => {
    setColumns(allColumns);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
          {/* Modal Header */}
          <h2 className="text-lg font-semibold mb-4">Select Table Columns</h2>

          {/* Column Selection */}
          <div>
            <ul className="space-y-2">
              {allColumns.map((col) => (
                <li key={col}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={columns.includes(col)}
                      onChange={() => toggleColumn(col)}
                      className="form-checkbox text-blue-500"
                    />
                    <span>{col}</span>
                  </label>
                </li>
              ))}
            </ul>
            <button
              onClick={handleSelectAll}
              className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Select All
            </button>
          </div>

          {/* Modal Footer */}
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={() => onApply(columns)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ColumnSelectorModal;
