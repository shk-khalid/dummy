import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isStorefront: boolean;
}

const Header: React.FC<HeaderProps> = ({ isStorefront }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClass = isStorefront
    ? 'fixed w-full z-50 transition-all duration-300 bg-opacity-50 backdrop-blur-lg bg-cyan-800'
    : 'bg-gray-900 border-b border-gray-800';

  const textClass = 'text-gray-100';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/storefront" className="flex items-center group">
              <ShieldCheck className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className={`ml-2 text-xl font-bold ${textClass} group-hover:text-cyan-400 transition-colors`}>
                Protega
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isStorefront ? (
              <>
                <Link to="/merchant" className="bg-protega-600 text-white px-4 py-2 rounded-md font-medium hover:bg-protega-700 transition-colors">
                  Merchant Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/storefront" className="bg-protega-600 text-white px-4 py-2 rounded-md font-medium hover:bg-protega-700 transition-colors">
                  View Storefront
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${textClass} focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {isStorefront ? (
              <>
                <Link to="/merchant" className="block bg-protega-600 text-white px-4 py-2 rounded-md font-medium hover:bg-protega-700 transition-colors text-center">
                  Merchant Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/storefront" className="block bg-protega-600 text-white px-4 py-2 rounded-md font-medium hover:bg-protega-700 transition-colors text-center">
                  View Storefront
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;