
import React from "react";
import { Clock, ShieldCheck, Award, CreditCard } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg border shadow-sm">
          <div className="space-y-4">
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Sofortige Lieferung</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Lebenslange Garantie</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award className="w-5 h-5 text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">Höchste Qualität auf dem Markt</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <ShieldCheck className="w-5 h-5 text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">100% Sicher & diskret</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CreditCard className="w-5 h-5 text-blue-500 mt-1 mr-3" />
              <div>
                <p className="font-medium">PayPal, Apple Pay und Kartenzahlung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
