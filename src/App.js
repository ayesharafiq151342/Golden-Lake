import React, { useState } from 'react';
import Login from './login';
import Signuppage from './signuppage';
import Dashboard from './dashborad';

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

  return (
    <div>
      {isSignup && !isLoggedIn && (
        <Signuppage onSignupSwitch={handleSignupSwitch} />
      )}
      {!isLoggedIn && !isSignup && (
        <Login onLoginSuccess={handleLoginSuccess} onSignupSwitch={handleSignupSwitch} />
      )}
      {isLoggedIn && isDashboard && (
        <Dashboard />
      )}
    </div>
  );
}

export default App;  