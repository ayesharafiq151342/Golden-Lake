import React, { memo, useState } from "react";
import ColumnSelectorModal from "./ColumnManager";
import { InventorySidebar } from "../../../components/Inventorysidebar";
import { Link, useNavigate } from "react-router-dom";
import imagegmail from '../images/imagegmail.jpg'; // Ensure image path is correct
import { id } from "date-fns/locale";

function Inventory() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
//for id fatch
const [Idfatch, setIdfatch] = useState(null)
  const [visibleColumns, setVisibleColumns] = useState([
    "Reference No",
    "Transaction Code",
    "Memo",
    "Status",
    "Transaction Date",

  ]);

  const data = [
    {
      reference: "Ref1",
      code: "IA-0001",
      memo: "Note 1",
      status: "Approved",
      date: "2024-11-20",

    },
    {
      reference: "Ref2",
      code: "IA-0002",
      memo: "Note 2",
      status: "Draft",
      date: "2024-11-20",

    },
    {
      reference: "Ref3",
      code: "IA-0003",
      memo: "Note 3",
      status: "Approved",
      date: "2024-11-20",

    },
    {
      reference: "Ref4",
      code: "IA-0004",
      memo: "Note 4",
      status: "Draft",
      date: "2024-4-20",

    }, {
      reference: "Ref5",
      code: "IA-0005",
      memo: "Note 5",
      status: "Approved",
      date: "2024-1-20",

    }, {
      reference: "Ref6",
      code: "IA-0006",
      memo: "Note 6",
      status: "Draft",
      date: "2024-11-20",

    },
  ];

  const handleclick = (code, reference ,memo) => {
    navigate(`/Uselocation?code=${code}&reference=${reference}&memo=${memo}`); // Redirect to another page with query parameters
  };
  
  // Filtered data based on search query
  const filteredData = data.filter(
    (row) =>
      row.code.toLowerCase().includes(searchQuery.toLowerCase()) || // Search by Transaction Code
      row.reference.toLowerCase().includes(searchQuery.toLowerCase()) // Search by Reference No
  );

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
        <header className="flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4 md:p-6">
          <button
            onClick={toggleSidebar}
            className="md:hidden w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-gray-700 text-xl">☰</span>
          </button>
          <div className="flex items-center">
            <h1 className="text-lg md:text-2xl text-white font-bold">
              <Link to="/">Inventory Management </Link>
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src={imagegmail}
              alt="Golden Lake Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-full"
            />
          </div>
        </header>

        <div className="min-h-screen bg-white mt-6 p-4 md:p-6">
          <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <h1 className="text-xl md:text-2xl font-semibold">Inventory Adjustment Details</h1>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                <div className="flex items-center">
            <h1 className="text-sm md:text-sm text-gray-400">
              <Link to="/DashBorad">Inventory Management </Link>
            </h1>
          </div>
                  <span className="text-gray-400">/</span>
                  <span>Inventory Adjustment</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/InventoryCreateForm")}
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm md:text-base">Create Sale Entry</span>
              </button>
            </div>



            {/* Modal Button and Search Bar */}
            <div className="flex justify-between items-center w-full mb-4">
              {/* Search Bar on the left */}
              <div className="flex-1 mr-4">
                <input
                  type="text"
                  placeholder="Search by ID or Reference No..."
                  className="lg:w-96 px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Button on the right */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-black border-2 w-12 hover:bg-gray-200 border-black px-2 py-1 rounded-md"

              >
                <span className="text-gray-700 text-lg ">☰</span>
              </button>
            </div>


            {/* Table Section */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-200 font-bold h-16 ">
                    {visibleColumns.map((col) => (
                      <th
                        key={col}
                        className="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-700"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
  {filteredData.map((row, index) => (
    <tr
      key={index}
      className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
      onClick={() => handleclick(row.code , row.reference ,row.memo)} // Pass the row code (ID) to the function
    >
      {visibleColumns.includes("Reference No") && (
        <td className="px-4 py-2">{row.reference}</td>
      )}
      {visibleColumns.includes("Transaction Code") && (
        <td className="px-4 py-2">{row.code}</td>
      )}
      {visibleColumns.includes("Memo") && (
        <td className="px-4 py-2">{row.memo}</td>
      )}
      {visibleColumns.includes("Status") && (
        <td
          className={`px-2 py-4 w-16 text-white font-semibold rounded ${
            row.status === "Approved"
              ? "bg-green-300"
              : row.status === "Draft"
              ? "bg-yellow-300"
              : "bg-gray-300"
          }`}
        >
          {row.status}
        </td>
      )}
      {visibleColumns.includes("Transaction Date") && (
        <td className="px-4 py-2">{row.date}</td>
      )}
    </tr>
  ))}
</tbody>

              </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <ColumnSelectorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onApply={(columns) => {
                  setVisibleColumns(columns);
                  setIsModalOpen(false);
                }}
                selectedColumns={visibleColumns}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inventory;
