import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';  // Use NavLink for active links

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isSalesOpen, setIsSalesOpen] = useState(false);
const [Purchase, setPurchase] = useState(false)
  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen);
  const togglepurchase = () => setPurchase(!isSalesOpen);


  return (
    <aside
      className={`bg-gray-800 text-white shadow-lg z-20 fixed inset-y-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="font-bold text-lg">Golden Lake</div>
        {/* Cross icon to close sidebar on mobile */}
        <button onClick={onClose} className="text-red-400 hover:text-white md:hidden">
          <X size={24} />
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/account"
              className="block px-6 py-2 hover:bg-gray-700"
              activeClassName="bg-red-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/journal"
              className="block px-6 py-2 hover:bg-gray-700"
              activeClassName="bg-red-700"
            >
              JOURNAL ENTRY
            </NavLink>
          </li>
          <li>
            <button onClick={toggleSalesMenu} className="block px-6 py-2 w-full text-left hover:bg-gray-700">
              SALES
            </button>
            {isSalesOpen && (
              <ul className="pl-8 space-y-2">
                <li>
                  <NavLink
                    to="/saleinvoice"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    Sale Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/salereturn"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                   SALE RERURN 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Make_receip"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                   MAKE RECIPT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coustmer"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Itmes_table"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    ITMES
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={togglepurchase} className="block px-6 py-2 w-full text-left hover:bg-gray-700">
            PURCHASE
            </button>
            {Purchase && (
              <ul className="pl-8 space-y-2">
                <li>
                  <NavLink
                    to="/purchase_invoice"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    PURCHASE Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_retutn"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                   PURCHASE RETURN 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_make"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                   MAKE PAYMENT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coustmer"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    VENDORS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Itmes_table"
                    className="block px-6 py-2 hover:bg-gray-700"
                    activeClassName="bg-gray-700"
                  >
                    ITEMS
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
        
          <li>
            <NavLink
              to="/master-accounts"
              className="block px-6 py-2 hover:bg-gray-700"
              activeClassName="bg-red-700"
            >
              SETUP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tokens"
              className="block px-6 py-2 hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              REPORTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
