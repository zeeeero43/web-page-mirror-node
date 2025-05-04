
import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-follower-blue rounded p-1 text-white text-sm font-bold mr-2">FP</div>
              <span className="font-bold text-lg">FollowerPulse</span>
            </div>
            <p className="text-gray-600 mb-4">Wir sind die Nr. 1 auf dem deutschen Markt.</p>
            <div className="flex items-center mb-3">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
              ))}
              <span className="ml-2 font-medium">4.8</span>
            </div>
            <p className="text-green-600 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Alle Services aktiv
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold mb-4">Informationen</h3>
            <ul className="space-y-2">
              <li><Link to="/kontakt" className="text-gray-600 hover:text-follower-blue">Kontakt</Link></li>
              <li><Link to="/bewertungen" className="text-gray-600 hover:text-follower-blue">Bewertungen</Link></li>
              <li><Link to="/agb" className="text-gray-600 hover:text-follower-blue">AGB</Link></li>
              <li><Link to="/datenschutz" className="text-gray-600 hover:text-follower-blue">Datenschutz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li><Link to="/dienstleistungen" className="text-gray-600 hover:text-follower-blue">Alle Dienstleistungen</Link></li>
            </ul>

            <h3 className="font-semibold mt-6 mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">E-Mail Support</li>
              <li className="text-gray-600">Mo - Fr: 9.00 Uhr – 18.00 Uhr</li>
              <li className="text-gray-600">Live Chat Support</li>
              <li className="text-gray-600">24/7 Kundenservice</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 - Alle Rechte vorbehalten.</p>
          
          <div className="flex space-x-4">
            <img src="/lovable-uploads/7f9cae24-41a5-49ee-9a6f-62eed01d1f5c.png" alt="Payment methods" className="h-6" />
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-follower-blue hover:bg-follower-brightblue text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
          Service wählen
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
