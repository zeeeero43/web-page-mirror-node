
import React from 'react';
import { Shield, CreditCard, Clock, BadgeCheck, Trophy } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const trustElements = [
    {
      icon: <Shield className="h-6 w-6 text-follower-blue" />,
      title: "Sicher & Geschützt",
      description: "100% sichere Zahlungsabwicklung"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-follower-blue" />,
      title: "Flexible Zahlungen",
      description: "Kreditkarte, PayPal und mehr"
    },
    {
      icon: <Clock className="h-6 w-6 text-follower-blue" />,
      title: "Schnelle Lieferung",
      description: "Sofortige Bearbeitung"
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-follower-blue" />,
      title: "Qualitätsgarantie",
      description: "Höchste Qualitätsstandards"
    },
    {
      icon: <Trophy className="h-6 w-6 text-follower-blue" />,
      title: "15.000+ zufriedene Kunden",
      description: "Bewiesene Ergebnisse"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mt-6">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {trustElements.map((element, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-3">
              {element.icon}
            </div>
            <div>
              <h4 className="font-medium text-sm">{element.title}</h4>
              <p className="text-xs text-gray-500">{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;
