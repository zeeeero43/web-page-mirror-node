import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';
import CartButton from '@/components/CartButton';
import { Menu, X } from 'lucide-react';

interface DropdownOption {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useMobile();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownHover = (dropdownName: string | null) => {
    if (!isMobile) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownClick = (dropdownName: string) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    }
  };

  const dropdownOptions: { [key: string]: DropdownOption[] } = {
    Instagram: [
      { name: 'Follower', path: '/instagram/follower' },
      { name: 'Likes', path: '/instagram/likes' },
      { name: 'Aufrufe', path: '/instagram/aufrufe' },
      { name: 'Kommentare', path: '/instagram/kommentare' },
      { name: 'Viral Paket', path: '/instagram/viral' },
    ],
    TikTok: [
      { name: 'Follower', path: '/tiktok/follower' },
      { name: 'Likes', path: '/tiktok/likes' },
      { name: 'Aufrufe', path: '/tiktok/aufrufe' },
      { name: 'Kommentare', path: '/tiktok/kommentare' },
      { name: 'Viral Paket', path: '/tiktok/viral' },
    ],
    YouTube: [
      { name: 'Abonnenten', path: '/youtube/abonnenten' },
      { name: 'Likes', path: '/youtube/likes' },
      { name: 'Aufrufe', path: '/youtube/aufrufe' },
      { name: 'Kommentare', path: '/youtube/kommentare' },
    ],
    Spotify: [
      { name: 'Follower', path: '/spotify/follower' },
      { name: 'Streams', path: '/spotify/streams' },
      { name: 'Monatliche Hörer', path: '/spotify/hoerer' },
    ],
    Twitch: [
      { name: 'Follower', path: '/twitch/follower' },
      { name: 'Live Zuschauer', path: '/twitch/zuschauer' },
    ],
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white'
      } transition-all duration-200`}
    >
      <div className="container mx-auto px-4 flex justify-between h-16 items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="text-follower-blue">FollowerKaufen</span>
          <span className="text-black">.de</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {Object.entries(dropdownOptions).map(([key, options]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleDropdownHover(key)}
              onMouseLeave={() => handleDropdownHover(null)}
              onClick={() => handleDropdownClick(key)}
            >
              <button className="flex items-center space-x-1 py-2">
                <span className="capitalize">{key}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${
                    activeDropdown === key ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeDropdown === key && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {options.map((option) => (
                    <Link
                      key={option.path}
                      to={option.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CartButton />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-gray-500 hover:text-gray-700"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(dropdownOptions).map(([key, options]) => (
              <div key={key} className="block">
                <button
                  onClick={() => handleDropdownClick(key)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                >
                  <span className="capitalize">{key}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      activeDropdown === key ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {activeDropdown === key && (
                  <div className="pl-4 py-2 space-y-1">
                    {options.map((option) => (
                      <Link
                        key={option.path}
                        to={option.path}
                        className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        {option.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
