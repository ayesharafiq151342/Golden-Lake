import React, { useState } from 'react';
import Login from './login & signup/login';
import Home from './pages/home';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adminstrator from './pages/admistraction/addminstrator';
import Application from './pages/admistraction/application';
import Accountspage from './pages/accounts/accont';
import Inventorypage from './pages/admistraction/inventorypage'
import Purchasepage from './pages/admistraction/purchasepage'
import Salepage from './pages/admistraction/salepage';
import Project from './pages/admistraction/projectpage';
import Salereturn from './pages/accounts/salereturn';


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
    <Route path="/addminstrator" element={<Adminstrator/> }/>
    <Route path="/application" element={<Application />} />
    <Route path="/accont" element={<Accountspage />} />
    <Route path="/inventorypage" element={<Inventorypage />} />
    <Route path="/purchasepage" element={<Purchasepage />} />
    <Route path="/salepage" element={<Salepage />} />
    <Route path="/projectpage" element={<Project />} />
    <Route path="/salereturn" element={<Salereturn />} />

    



  
  
   
    {/* Define other routes */}
  </Routes>
</BrowserRouter></>
);
}