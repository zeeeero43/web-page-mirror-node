
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      {/* Special Offer Banner */}
      <div className="bg-follower-blue text-white text-center py-3 flex items-center justify-center">
        <div className="flex-grow text-center">
          <span className="inline-block bg-white/20 rounded px-2 py-1 text-xs mr-2">SPEZIAL-AKTION</span>
          <span className="font-semibold">10% Rabatt mit dem Code PULSE10</span>
        </div>
        <div className="flex gap-1 mr-4">
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">00</div>
            <div className="text-xs">STD</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">06</div>
            <div className="text-xs">MIN</div>
          </div>
          <div className="bg-white/20 rounded px-2 py-0.5 text-center">
            <div className="text-sm font-bold">46</div>
            <div className="text-xs">SEK</div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className="border-b">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1">
              <div className="bg-follower-blue rounded p-0.5 text-white text-sm font-bold">FP</div>
              <span className="font-bold text-lg">FollowerPulse</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-follower-blue">
              Startseite
            </Link>
            <Link to="/dienstleistungen" className="hover:text-follower-blue">
              Alle Dienstleistungen
            </Link>
            <Link to="/kontakt" className="hover:text-follower-blue">
              Kontakt
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-follower-blue text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
