

// // export default App;  
// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import Login from './login & signup/login';
// import Signuppage from './login & signup/signuppage';
// import Home from './pages/home';
// import Adminstrator from './pages/admistraction/addminstrator';
// import Application from './pages/admistraction/application';
// import Accountspage from './pages/accounts/accont';
// import Inventorypage from './pages/admistraction/inventorypage'
// import Purchasepage from './pages/admistraction/purchasepage'
// import Salepage from './pages/admistraction/salepage';
// import Project from './pages/admistraction/projectpage';
// import Modules from './pages/admistraction/mdls';
// import Accountsmangementpage from './pages/accounts/accont';
// import Journal from './pages/accounts/journal';
// import Saleinvoice from './pages/accounts/saleinvoice';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isSignup, setIsSignup] = useState(true); // Start with the signup page

//   const navigate = useNavigate();

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     navigate('/home'); // Redirect to Administrator page
//   };

//   const handleSignupSwitch = () => {
//     setIsSignup(false); // Switch to login page after signup
//   };

//   return (
//     <div>
//       {!isLoggedIn ? (
//         // Conditional rendering for Login/Signup
//         isSignup ? (
//           <Signuppage onSignupSwitch={handleSignupSwitch} />
//         ) : (
//           <Login onLoginSuccess={handleLoginSuccess} onSignupSwitch={handleSignupSwitch} />
//         )
//       ) : (
//         // Render Routes if logged in
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/addminstrator" element={<Adminstrator />} />
//           <Route path="/application" element={<Application />} />
//           <Route path="/accont" element={<Accountspage />} />
//           <Route path="/inventorypage" element={<Inventorypage />} />
//           <Route path="/purchasepage" element={<Purchasepage />} />
//           <Route path="/salepage" element={<Salepage />} />
//           <Route path="/projectpage" element={<Project />} />
//           <Route path="/mdls" element={<Modules />} />
//           <Route path="/account" element={<Accountsmangementpage />} />
//           <Route path="/journal" element={<Journal />} />
//           <Route path="/saleinvoice" element={<Saleinvoice />} />

//         </Routes>
//       )}
//     </div>
//   );
// }
// export default App
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
import React, { useState } from 'react';
import Home from './pages/home';
import InvoiceTable from './pages/accounts/sleectdata';
import EditItemModal from './pages/accounts/items_form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminstrator from './pages/admistraction/addminstrator';
import Application from './pages/admistraction/application';
import Accountspage from './pages/accounts/accont';
import Inventorypage from './pages/admistraction/inventorypage'
import Purchasepage from './pages/admistraction/purchasepage'
import Salepage from './pages/admistraction/salepage';
import Project from './pages/admistraction/projectpage';
import Modules from './pages/admistraction/mdls';
import Accountsmangementpage from './pages/accounts/accont';
import Journal from './pages/accounts/journal';
import Saleinvoice from './pages/accounts/saleinvoice';
import Journalentry from './pages/accounts/journal-entry';
import CreateObjectForm from './pages/accounts/form';
import Salereturn from './pages/accounts/salereturn';
import Salerutrn_entry from './pages/accounts/sale_return_form';
import Sale_invoice_form from './pages/accounts/sale_invoice_form';
import Make_receipt from './pages/accounts/make_receipt';
import Coustmer_page from './pages/accounts/coustomer';
import Coustmer_form from './pages/accounts/coustomer_form';
import Expene_Enitity from './pages/accounts/Expene_Enitity';
import { Sidebar } from './components/slider';
import Items_Table from './pages/accounts/Itmes_table';
import Purchase_inoice from './pages/accounts/purchaseinvoice';
import Purchase_inoice_form from './pages/accounts/Purchase_inoice_form';
import Purchase_Retrun from './pages/accounts/Purchase_retutn';
import Purchase_Retrun_form from './pages/accounts/Purchase_retrun_form';
import Purchase_make from './pages/accounts/Purchase_make';
import PaymentForm from './pages/accounts/Purchase_payment_form';
import Purchase_vendor from './pages/accounts/Purchase_vendor';
import Purchase_vendor_form from './pages/accounts/Purchase_vendor_form';
import Purchase_items from './pages/accounts/Purchase_items';
import Purchase_item_form from './pages/accounts/Purchase_item_form';
import ChartofAccount from './pages/accounts/setup/images/ChartofAccount';
import EditAccountModal from './pages/accounts/setup/images/Charts_account_edit';
import Reports from './pages/accounts/setup/images/report';
import Setuptex from './pages/accounts/setup/images/setuptex';
import Expense_form from './pages/accounts/Expense_form';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Start with the signup page
  const [isDashboard, setIsDashboard] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsDashboard(true);
  };

  const handleSignupSwitch = () => {
    setIsSignup(false); // Switch to login page after signup
  };

  return (<>
 

    {/* <div>
      {isSignup && !isLoggedIn && (
        <Signuppage onSignupSwitch={handleSignupSwitch} />
      )}
      {!isLoggedIn && !isSignup && (
        <Login onLoginSuccess={handleLoginSuccess} onSignupSwitch={handleSignupSwitch} />
      )}
      {isLoggedIn && isDashboard && (
           
      )}
    </div> */}


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addminstrator" element={<Adminstrator />} />
        <Route path="/application" element={<Application />} />
        <Route path="/accont" element={<Accountspage />} />
        <Route path="/inventorypage" element={<Inventorypage />} />
        <Route path="/purchasepage" element={<Purchasepage />} />
        <Route path="/salepage" element={<Salepage />} />
        <Route path="/saleinvoice" element={<Saleinvoice />} />   <Route path="/projectpage" element={<Project />} />
        <Route path="/mdls" element={<Modules />} />
        <Route path="/account" element={<Accountsmangementpage />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal-entry" element={<Journalentry />} />
        <Route path="/salereturn" element={<Salereturn />} />
        <Route path="/form" element={<CreateObjectForm/>} />
        <Route path="/Salerutrn_entry" element={<Salerutrn_entry/>} />
        <Route path="/sale_invoice_form" element={<Sale_invoice_form/>} />
        <Route path="/Make_receip" element={<Make_receipt/>} />
        <Route path="/coustmer" element={<Coustmer_page/>} />
        <Route path="/coustomer_form" element={<Coustmer_form/>} />
        <Route path="/Itmes_table" element={<Items_Table/>} />
        <Route path="/items_form" element={<EditItemModal/>} />
        <Route path="/purchase_invoice" element={<Purchase_inoice/>} />
        <Route path="/Purchase_inoice_form" element={<Purchase_inoice_form/>} />
        <Route path="/Purchase_retutn" element={<Purchase_Retrun/>} />
        <Route path="/Purchase_Retrun_form" element={<Purchase_Retrun_form/>} />
        <Route path="/Purchase_make" element={<Purchase_make/>} />
        <Route path="/Purchase_payment_form" element={<PaymentForm/>} />
        <Route path="/Purchase_vendor" element={<Purchase_vendor/>} />
        <Route path="/Purchase_vendor_form" element={<Purchase_vendor_form/>} />
        <Route path="/Purchase_items" element={<Purchase_items/>} />
        <Route path="/Purchase_item_form" element={<Purchase_item_form/>} />
        <Route path="/ChartofAccount" element={<ChartofAccount/>} />

                <Route path="/Charts_account_edit" element={<EditAccountModal/>} />
                <Route path="/Reports" element={<Reports/>} />
                <Route path="/setuptex" element={<Setuptex/>} />
                <Route path="/Expene_Enitity" element={<Expene_Enitity/>} />
                <Route path="/Expense_form" element={<Expense_form/>} />
                <Route path="/sleectdata" element={<InvoiceTable/>} />


                

                




        
    

       
       


















        {/* Define other routes */}
      </Routes>
    </BrowserRouter>
    <div>
      <InvoiceTable/>
   
    </div>
  </>
  );
}
export default App