
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

  // Custom Spotify SVG icon
  const SpotifyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.5 16.5C16.32 16.5 16.15 16.44 16.01 16.31C14.73 15.18 13.06 14.55 11.28 14.55C10.14 14.55 9.01 14.76 7.96 15.17C7.66 15.28 7.33 15.12 7.22 14.82C7.11 14.51 7.27 14.18 7.58 14.07C8.78 13.6 10.05 13.36 11.28 13.36C13.33 13.36 15.25 14.08 16.75 15.38C17 15.6 17.03 15.97 16.82 16.22C16.73 16.41 16.62 16.5 16.5 16.5ZM17.61 13.89C17.39 13.89 17.19 13.8 17.07 13.63C15.53 11.86 13.35 10.86 11.01 10.86C9.6 10.86 8.22 11.16 6.94 11.75C6.59 11.91 6.19 11.75 6.03 11.4C5.87 11.04 6.03 10.64 6.38 10.48C7.87 9.8 9.46 9.45 11.01 9.45C13.71 9.45 16.23 10.6 18.03 12.66C18.26 12.95 18.21 13.36 17.92 13.59C17.83 13.79 17.72 13.89 17.61 13.89ZM18.93 10.68C18.67 10.68 18.43 10.56 18.3 10.34C16.47 7.96 13.34 6.5 10.02 6.5C8.37 6.5 6.73 6.85 5.21 7.57C4.81 7.74 4.36 7.54 4.19 7.14C4.01 6.73 4.22 6.28 4.62 6.11C6.38 5.29 8.28 4.88 10.02 4.88C13.83 4.88 17.45 6.56 19.58 9.34C19.82 9.68 19.75 10.14 19.41 10.38C19.26 10.58 19.09 10.68 18.93 10.68Z" fill="currentColor"/>
    </svg>
  );

  // Custom Twitch SVG icon
  const TwitchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14V11.29Z" fill="currentColor"/>
    </svg>
  );

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
                      <NavLink
                        to="/spotify/follower"
                        onClick={closeMenu}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        <SpotifyIcon />
                        <span className="ml-2">Spotify Follower</span>
                      </NavLink>
                      <NavLink
                        to="/twitch/follower"
                        onClick={closeMenu}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        <TwitchIcon />
                        <span className="ml-2">Twitch Follower</span>
                      </NavLink>
                    </>
                  )}
                  {isHomePage && (
                    <NavLink
                      to="/dienstleistungen"
                      onClick={closeMenu}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Dienstleistungen
                    </NavLink>
                  )}
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
                
                <div className="relative group">
                  <span className="text-sm font-medium text-gray-500 hover:text-primary cursor-pointer transition-colors flex items-center">
                    <SpotifyIcon /> <span className="ml-1">Spotify</span>
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <NavLink to="/spotify/follower" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Spotify Follower
                      </NavLink>
                      <NavLink to="/spotify/streams" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Spotify Streams
                      </NavLink>
                      <NavLink to="/spotify/hoerer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Spotify Hörer
                      </NavLink>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <span className="text-sm font-medium text-gray-500 hover:text-primary cursor-pointer transition-colors flex items-center">
                    <TwitchIcon /> <span className="ml-1">Twitch</span>
                  </span>
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-1">
                      <NavLink to="/twitch/follower" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Twitch Follower
                      </NavLink>
                      <NavLink to="/twitch/zuschauer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Twitch Zuschauer
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            )}
            {isHomePage && (
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
            )}
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
