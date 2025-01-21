import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function LocationUse() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Extract initial values from URL parameters
  const initialCode = queryParams.get("code") || "";
  const initialReference = queryParams.get("reference") || "";
  const initialMemo = queryParams.get("memo") || "";
  const intialStatus = queryParams.get("status") || "";


  // State for input fields
  const [code, setCode] = useState(initialCode);
  const [reference, setReference] = useState(initialReference);
  const [memo, setMemo] = useState(initialMemo);
 

  const [isEditing, setIsEditing] = useState(false); // Controls edit mode

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", { code, reference, memo });
    alert(`Saved: Code=${code}, Reference=${reference}, Memo=${memo}`);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Details Form</h1>
      
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mb-4"
        >
          Switch to Draft
        </button>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="transactionCode"
            className="block text-sm font-medium text-gray-700"
          >
            Transaction Code:
          </label>
          <input
            type="text"
            id="transactionCode"
            name="transactionCode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={!isEditing} // Input is read-only if not in editing mode
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm ${
              isEditing
                ? "focus:ring-black focus:border-black"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="referenceNo"
            className="block text-sm font-medium text-gray-700"
          >
            Reference No:
          </label>
          <input
            type="text"
            id="referenceNo"
            name="referenceNo"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            readOnly={!isEditing}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm ${
              isEditing
                ? "focus:ring-black focus:border-black"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>
        <div>
          <label
            htmlFor="memo"
            className="block text-sm font-medium text-gray-700"
          >
            Memo:
          </label>
          <input
            type="text"
            id="memo"
            name="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            readOnly={!isEditing}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm ${
              isEditing
                ? "focus:ring-black focus:border-black"
                : "bg-gray-100 cursor-not-allowed"
            }`}
          />
        </div>

        {isEditing && (
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)} // Cancel editing
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default LocationUse;
