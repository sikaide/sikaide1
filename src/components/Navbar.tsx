import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary-900 bg-opacity-95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400" 
                  : "text-white hover:text-primary-300 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/marketplace" 
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400" 
                  : "text-white hover:text-primary-300 transition-colors"
              }
            >
              Marketplace
            </NavLink>
            <NavLink 
              to="/submit" 
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400" 
                  : "text-white hover:text-primary-300 transition-colors"
              }
            >
              Submit Idea
            </NavLink>
            <div className="space-x-4">
              <NavLink 
                to="/auth/login" 
                className="text-white hover:text-primary-300 transition-colors"
              >
                Login
              </NavLink>
              <NavLink 
                to="/auth/register" 
                className="btn-primary text-sm py-1.5"
              >
                Register
              </NavLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-900 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400 py-2" 
                  : "text-white hover:text-primary-300 transition-colors py-2"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/marketplace" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400 py-2" 
                  : "text-white hover:text-primary-300 transition-colors py-2"
              }
            >
              Marketplace
            </NavLink>
            <NavLink 
              to="/submit" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "font-semibold text-primary-400 py-2" 
                  : "text-white hover:text-primary-300 transition-colors py-2"
              }
            >
              Submit Idea
            </NavLink>
            <div className="flex space-x-4 py-2">
              <NavLink 
                to="/auth/login" 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary-300 transition-colors"
              >
                Login
              </NavLink>
              <NavLink 
                to="/auth/register" 
                onClick={() => setIsOpen(false)}
                className="btn-primary text-sm py-1.5"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;