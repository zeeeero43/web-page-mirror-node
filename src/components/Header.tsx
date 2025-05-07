
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import CartButton from './CartButton';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b">
      <div className="container flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-bold text-2xl">
          DeinShop
        </Link>

        {isMobile ? (
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <NavLink
                    to="/dienstleistungen"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Dienstleistungen
                  </NavLink>
                  <NavLink
                    to="/uber-uns"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Über uns
                  </NavLink>
                  <NavLink
                    to="/kontakt"
                    onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Kontakt
                  </NavLink>
                </div>
              </motion.div>
            )}
          </div>
        ) : (
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/dienstleistungen"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`
              }
            >
              Dienstleistungen
            </NavLink>
            <NavLink
              to="/uber-uns"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`
              }
            >
              Über uns
            </NavLink>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-gray-500'
                }`
              }
            >
              Kontakt
            </NavLink>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
