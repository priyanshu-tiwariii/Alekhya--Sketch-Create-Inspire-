import Link from "next/link";
import LoginButton from "./LoginButton";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
    const primaryGradient = "bg-gradient-to-r from-[#ff9966] to-[#ff5e62]";
   
  return (
<nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={`w-7 h-7 rounded-full ${primaryGradient}`} />
            <span className="text-xl font-bold text-gray-900">Chitran</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">How It Works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">Use Cases</a>
          </div>

          <div className="flex items-center space-x-4">
           
           <LoginButton name="Start Drawing"/>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transition ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 bg-gray-600 transition ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 bg-gray-600 transition ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 right-4 left-4 bg-white rounded-lg shadow-xl z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="p-2 space-y-1">
            <a 
              href="#features" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#use-cases" 
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
