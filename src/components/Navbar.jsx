import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Install: npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white text-xl font-bold">MyLogo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-white font-semibold">
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">About</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Service</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">Contact Us</li>
            <li className="hover:text-yellow-300 cursor-pointer transition duration-200">More</li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white font-semibold space-y-4 py-4 px-6">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Service</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact Us</li>
          <li className="hover:text-yellow-300 cursor-pointer">More</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
