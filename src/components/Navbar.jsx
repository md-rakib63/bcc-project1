import React, { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // রাউটিং এর জন্য

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- Left: Logo --- */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#E44232] p-1 rounded-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                   <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <span className="text-[#E44232] text-xl font-bold tracking-tight">todoist</span>
            </Link>
          </div>

          {/* --- Center: Desktop Menu --- */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center gap-1 text-[15px] text-gray-700 hover:text-black">
              Features <FiChevronDown />
            </button>
            <button className="flex items-center gap-1 text-[15px] text-gray-700 hover:text-black">
              Resources <FiChevronDown />
            </button>
            <Link to="/pricing" className="text-[15px] text-gray-700 hover:text-black">Pricing</Link>
          </div>

          {/* --- Right: Auth Buttons (Login & Register) --- */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-[15px] font-medium text-gray-600 hover:text-black px-3 py-2"
            >
              Log in
            </Link>
            
            {/* Register Button - Todoist Style */}
            <Link 
              to="/register" 
              className="bg-[#E44232] text-white px-5 py-2.5 rounded-lg text-[15px] font-bold hover:bg-[#c3392b] transition-all shadow-sm active:scale-95"
            >
              Start for free
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4">
          <Link to="/features" className="text-gray-700 font-medium">Features</Link>
          <Link to="/pricing" className="text-gray-700 font-medium">Pricing</Link>
          <hr />
          <Link to="/login" className="text-gray-600 font-medium">Log in</Link>
          <Link to="/register" className="bg-[#E44232] text-white text-center py-3 rounded-lg font-bold">
            Start for free
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;