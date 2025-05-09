
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import CartButton from './CartButton';
import { motion } from 'framer-motion';
import { useSiteConfig } from '@/hooks/useSiteConfig';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { siteName } = useSiteConfig();

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
          {siteName}
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
                className="absolute right-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {!isHomePage && (
                    <>
                      <NavLink
                        to="/instagram/follower"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        Instagram Follower
                      </NavLink>
                      <NavLink
                        to="/tiktok/follower"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        TikTok Follower
                      </NavLink>
                      <NavLink
                        to="/youtube/abonnenten"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        YouTube Abonnenten
                      </NavLink>
                    </>
                  )}
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
            {!isHomePage && (
              <>
                <div className="relative group">
                  <span className="text-sm font-medium text-gray-500 hover:text-primary cursor-pointer transition-colors">
                    Instagram
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <NavLink to="/instagram/follower" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Instagram Follower
                      </NavLink>
                      <NavLink to="/instagram/likes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Instagram Likes
                      </NavLink>
                      <NavLink to="/instagram/aufrufe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Instagram Aufrufe
                      </NavLink>
                      <NavLink to="/instagram/kommentare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Instagram Kommentare
                      </NavLink>
                      <NavLink to="/instagram/viral" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Instagram Viral Paket
                      </NavLink>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <span className="text-sm font-medium text-gray-500 hover:text-primary cursor-pointer transition-colors">
                    TikTok
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <NavLink to="/tiktok/follower" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        TikTok Follower
                      </NavLink>
                      <NavLink to="/tiktok/likes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        TikTok Likes
                      </NavLink>
                      <NavLink to="/tiktok/aufrufe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        TikTok Views
                      </NavLink>
                      <NavLink to="/tiktok/kommentare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        TikTok Kommentare
                      </NavLink>
                      <NavLink to="/tiktok/viral" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        TikTok Viral Paket
                      </NavLink>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <span className="text-sm font-medium text-gray-500 hover:text-primary cursor-pointer transition-colors">
                    YouTube
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <NavLink to="/youtube/abonnenten" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        YouTube Abonnenten
                      </NavLink>
                      <NavLink to="/youtube/likes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        YouTube Likes
                      </NavLink>
                      <NavLink to="/youtube/aufrufe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        YouTube Views
                      </NavLink>
                      <NavLink to="/youtube/kommentare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        YouTube Kommentare
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            )}
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
