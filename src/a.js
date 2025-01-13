import React, { useState } from 'react';
import { Sidebar } from './components/slider'; // Assuming Sidebar component is in the same directory
import { X } from 'lucide-react';

export function A() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {/* Toggle Sidebar Button */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden p-4 bg-blue-500 text-white fixed top-4 left-4 z-50"
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>

        {/* Account Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Account Dashboard</h1>
          <div className="mt-4">
            <p className="text-lg">Welcome to your account dashboard! Here you can manage your settings, view reports, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
