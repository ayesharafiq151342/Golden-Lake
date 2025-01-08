import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './login & signup/login';
import Signuppage from './login & signup/signuppage';
import Home from './pages/home';

import Adminstrator from './pages/addminstrator';
import Application from './pages/application';
import Accountspage from './pages/accont';
import Inventorypage from './pages/inventorypage';
import Purchasepage from './pages/purchasepage';
import Salepage from './pages/salepage';
import Project from './pages/projectpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(true); // Start with the signup page

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/home'); // Redirect to Administrator page
  };

  const handleSignupSwitch = () => {
    setIsSignup(false); // Switch to login page after signup
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Conditional rendering for Login/Signup
        isSignup ? (
          <Signuppage onSignupSwitch={handleSignupSwitch} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} onSignupSwitch={handleSignupSwitch} />
        )
      ) : (
        // Render Routes if logged in
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addminstrator" element={<Adminstrator />} />
          <Route path="/application" element={<Application />} />
          <Route path="/accont" element={<Accountspage />} />
          <Route path="/inventorypage" element={<Inventorypage />} />
          <Route path="/purchasepage" element={<Purchasepage />} />
          <Route path="/salepage" element={<Salepage />} />
          <Route path="/projectpage" element={<Project />} />
        </Routes>
      )}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
