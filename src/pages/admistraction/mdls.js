

'use client'

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { X } from 'lucide-react';
import SalesPurchaseChart from '../../components/sale';  // Assuming this is the correct path
import imagegmail from './iamges/imagegmail.jpg';
function Modules() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen flex bg-gray-100">
            

            <div className="flex-1 flex">
                
                {/* Sidebar */}
                <aside
                    className={`bg-white shadow-md z-20 fixed md:relative inset-y-0 transition-all duration-300 ease-in-out
                        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                        md:translate-x-0 md:w-64`}
                >
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <div className="font-bold text-lg">AXON ERP</div>
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-500 hover:text-gray-700 md:hidden"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="mt-4">
                        <ul className="space-y-2">
                            {[
                                { name: 'Dashboard', href: '/addminstrator' },
                                { name: 'Modules', href: '/mdls' },
                                { name: 'Objects', href: '/objects' },
                                { name: 'Currency', href: '/currency' },
                                { name: 'Master Accounts', href: '/master-accounts' },
                                { name: 'Tokens', href: '/tokens' },
                                { name: 'LOV', href: '/lov' },
                                { name: 'Upload Reports', href: '/upload-reports' },
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block px-6 py-2 hover:bg-gray-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 md:p-8 overflow-auto">
                  {/* Header */}
            <header className=" flex justify-between items-center bg-gradient-to-r from-[#044f8c] via-[#098bc2] to-[#07bbd6] border-b rounded-full p-4">
            <button
                        onClick={toggleSidebar}
                        className="mr-4 w-8  ml-4 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                    >
                        <span className="text-gray-700 text-2xl">☰</span>
                    </button> <div className="flex items-center">
                    {/* Hamburger Menu */}
                  
                    <h1 className="text-2xl text-white font-bold">Administration</h1>
                </div>
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img
                        src={imagegmail}
                        alt="Golden Lake Logo"
                        className="h-10 w-10 object-contain rounded-full"
                    />
                </div>
            </header>
                    {/* Cards */}
                    

                    {/* Chart & Highlights */}
                    

                    {/* Tables */}
                    
                </main>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}
            </div>
        </div>
    );
}

export default Modules
