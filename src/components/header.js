import React, { useState } from "react";
import { X } from 'lucide-react';

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <div className="min-h-screen flex bg-gray-100">
                <div className="flex flex">
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
                    <main className="flex-1 p-4 md:p-8 overflow-auto pt-20"> {/* Adjust padding to leave space for header */}
                        {/* Overlay for mobile */}
                        <button
                            onClick={toggleSidebar}
                            className="mr-4 w-8 ml-4 h-8 bg-white rounded-full flex items-center justify-center shadow-lg md:hidden"
                        >
                            <span className="text-gray-700 text-2xl">☰</span>
                        </button>
                        {isSidebarOpen && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
                                onClick={toggleSidebar}
                            ></div>
                        )}
                    </main>
                    
                </div>
            </div>
        </>
    );
};

export default Header;
