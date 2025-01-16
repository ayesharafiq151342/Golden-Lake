import { useState  , useEffect} from "react"

const MyModel = ({ closemodel }) => {


    return (

        <>
            <div className="fixed inset-0 bg-gray-700 bg-opacity-50 overflow-hidden">
                {/* Your content here */}
            </div>
            <div className="fixed bg-white p-6 w-96 lg:w-full max-w-lg rounded shadow-lg  left-1/2 transform top-36 -translate-x-1/2 -translate-y-1/2"    style={{ marginTop: window.innerWidth <= 768 ? '40vh' : '40vh' }}   >
            <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-bold">Create Tex Item</h1>
    <button 
      onClick={closemodel} 
      className="bg-blue-500 text-white p-2 rounded-full w-10 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      x
    </button>
  </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = {
                        name: e.target.name.value,
                        taxRate: e.target.taxRate.value,
                 
                        selection: e.target.selection.value,
                    };
                    console.log("Form Data:", formData);
                }}>
                    <div className="p-4 space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="taxRate" className="block mb-2 font-medium">Tax Rate</label>
                            <input
                                id="taxRate"
                                type="text"
                                name="taxRate"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                     
                        <div>
                            <label htmlFor="selection" className="block mb-2 font-medium">Account</label>
                            <select
                                id="selection"
                                name="selection"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
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
                            </select>
                        </div>
                        <div className="text-right">
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Submit
      </button>
    </div>
                    </div>
                </form>

                
            </div></>
    )
}
export default MyModel 
export const MySellectpop = ({ mysellectclose, selectedData }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    taxRate: "",
    selection: "assets", // Default value
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can trigger the form submission logic here, like API calls
  };

  // Handle Update button click
  const handleUpdate = () => {
    console.log("Updating with form data:", formData);
    // Add your update logic here
    // For example, you can call an API to update the data in your backend
  };

  // Handle Delete button click
  const handleDelete = () => {
    console.log("Delete action triggered");
    // Add your delete logic here
  };

  // Handle modal close
  const handleClose = () => {
    console.log("Close modal");
    mysellectclose(); // Close the modal when the user clicks the close button
  };

  // Populate form data if selectedData is provided (for update)
  useEffect(() => {
    if (selectedData) {
      setFormData({
        name: selectedData.name || "",
        taxRate: selectedData.taxRate || "",
        selection: selectedData.selection || "assets",
      });
    }
  }, [selectedData]);

  return (
    <div>
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 overflow-hidden">
        {/* Overlay background */}
      </div>

      <div className="fixed bg-white p-6 w-96 lg:w-full max-w-lg rounded shadow-lg  left-1/2 transform top-36 -translate-x-1/2 -translate-y-1/2"    style={{ marginTop: window.innerWidth <= 768 ? '40vh' : '40vh' }}   >

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Create Tax Item</h1>
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white p-2 rounded-full w-10 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            x
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-4 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="taxRate" className="block mb-2 font-medium">Tax Rate</label>
              <input
                id="taxRate"
                type="text"
                name="taxRate"
                value={formData.taxRate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label htmlFor="selection" className="block mb-2 font-medium">Account</label>
              <select
                id="selection"
                name="selection"
                value={formData.selection}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
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
              </select>
            </div>

            <div className="text-right space-x-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Submit
              </button>

              {/* Update Button */}
              <button
                type="button"
                onClick={handleUpdate}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Update
              </button>

              {/* Delete Button */}
              <button
                type="button"
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
