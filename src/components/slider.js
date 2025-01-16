import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';  // Use NavLink for active links

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [purchase, setPurchase] = useState(false);
  const [setup, setSetup] = useState(false);

  const toggleSalesMenu = () => setIsSalesOpen(!isSalesOpen);
  const togglePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    setPurchase(prevState => !prevState);
  };
  const toggleSetup = () => setSetup(!setup);

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
              className={({ isActive }) =>
                isActive ? 'block px-6 py-2 bg-red-700' : 'block px-6 py-2 hover:bg-gray-700'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                isActive ? 'block px-6 py-2 bg-red-700' : 'block px-6 py-2 hover:bg-gray-700'
              }
            >
              JOURNAL ENTRY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Expene_Enitity"
              className={({ isActive }) =>
                isActive ? 'block px-6 py-2 bg-red-700' : 'block px-6 py-2 hover:bg-gray-700'
              }
            >
            Expene_Enitity
            </NavLink>
          </li>
          <li>
            <button
              aria-expanded={isSalesOpen ? 'true' : 'false'}
              onClick={toggleSalesMenu}
              className="block px-6 py-2 w-full text-left hover:bg-gray-700"
            >
              SALES
            </button>
            {isSalesOpen && (
              <ul className="pl-8 space-y-2">
                <li>
                  <NavLink
                    to="/saleinvoice"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    Sale Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/salereturn"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    SALE RETURN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Make_receip"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    MAKE RECEIPT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coustmer"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Itmes_table"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    ITEMS
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              aria-expanded={purchase ? 'true' : 'false'}
              onClick={togglePurchase}
              className="block px-6 py-2 w-full text-left hover:bg-gray-700"
            >
              PURCHASE
            </button>
            {purchase && (
              <ul className="pl-8 space-y-2">
                <li>
                  <NavLink
                    to="/purchase_invoice"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    PURCHASE Invoice
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_retutn"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    PURCHASE RETURN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_make"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    MAKE PAYMENT
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_vendor"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    VENDORS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Purchase_items"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    ITEMS
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              aria-expanded={setup ? 'true' : 'false'}
              onClick={toggleSetup}
              className="block px-6 py-2 w-full text-left hover:bg-gray-700"
            >
              SET UP
            </button>
            {setup && (
              <ul className="pl-8 space-y-2">
                <li>
                  <NavLink
                    to="/ChartofAccount"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    CHARTS OF ACCOUNTS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/setuptex"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    TAX CODE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/customer_reconcile"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    CUSTOMER RECONCILE
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Vendor"
                    className={({ isActive }) =>
                      isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
                    }
                  >
                    VENDOOR RECONCILE
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/Reports"
              className={({ isActive }) =>
                isActive ? 'block px-6 py-2 bg-gray-700' : 'block px-6 py-2 hover:bg-gray-700'
              }
            >
              REPORTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

