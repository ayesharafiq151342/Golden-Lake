import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { account } from './config/appwrite';

function Verify() {
  const navigate = useNavigate(); // Corrected `useNavigate` call
  const [params] = useSearchParams(); // Corrected `useSearchParams` call
  const secret = params.get("secret"); // Fixed parameter name typo
  const userId = params.get("userId"); // Fixed parameter name typo

  useEffect(() => {
    const updateVerification = async () => {
      try {
        if (userId && secret) {
          await account.updateVerification(userId, secret);
          alert("User verified successfully!");
          navigate("/login"); // Navigate to the login page
        } else {
          console.error("Missing userId or secret in query params.");
        }
      } catch (error) {
        console.error("Error during verification:", error);
      }
    };

    updateVerification();
  }, [userId, secret, navigate]); // Added dependencies for useEffect

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Verification in Progress</h2>
      <p className="text-center text-gray-600">Please wait while we verify your account...</p>
    </div>
  );
}

export default Verify;
