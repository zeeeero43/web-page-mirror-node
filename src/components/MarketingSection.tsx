
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Award, User } from "lucide-react";

const MarketingSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-blue-100 text-follower-blue rounded-full px-4 py-1 text-sm font-medium mb-4">WARUM WIR?</span>
          <h2 className="text-3xl font-bold mb-4">
            Wir sind der <span className="text-follower-blue">beste</span> Shop in Deutschland
          </h2>
          <p className="text-gray-600 mb-2">
            Mehr als 300.000 Kunden vertrauen uns mit über 5.000.000 Bestellungen.
          </p>
          <p className="text-gray-600">
            Unsere Kunden bewerten uns im Durchschnitt mit 4,8 Sternen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold">Sofortige Lieferung</h3>
            </div>
            <p className="text-gray-600">
              Deine Bestellung startet vollautomatisch in 60 Sekunden nach Zahlungseingang.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold">Lebenslange Garantie</h3>
            </div>
            <p className="text-gray-600">
              Wir bieten dir kostenlos eine lebenslange Auffüll-Option an, falls du deine gekauften Services verlieren solltest.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-3">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold">Sicher & diskret</h3>
            </div>
            <p className="text-gray-600">
              Deine Sicherheit steht bei uns an erster Stelle. Das bedeutet, dass alle deine Daten vertraulich und sicher behandelt werden.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg mr-3">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold">Höchste Qualität</h3>
            </div>
            <p className="text-gray-600">
              Wir liefern Dienstleistungen von höchster Qualität. Trotzdem halten wir immer die besten Preise auf dem Markt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
