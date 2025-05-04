
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, CreditCard, HeartHandshake, ThumbsUp } from "lucide-react";

const BestShopSection: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-follower-blue" />,
      title: "Sicherheit garantiert",
      description: "Alle deine Daten werden sicher verarbeitet und niemals weitergegeben."
    },
    {
      icon: <Clock className="h-10 w-10 text-follower-blue" />,
      title: "Sofortige Lieferung",
      description: "Unsere Systeme liefern in der Regel innerhalb von Minuten."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-follower-blue" />,
      title: "Sichere Zahlung",
      description: "Wir akzeptieren alle gängigen Zahlungsmethoden und Kryptowährungen."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-follower-blue" />,
      title: "24/7 Support",
      description: "Unser Team steht dir rund um die Uhr zur Verfügung."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-follower-blue" />,
      title: "Kundenzufriedenheit",
      description: "98% unserer Kunden sind mit unserem Service zufrieden."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Warum FollowerPulse der beste Shop ist
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Wir setzen auf Qualität, Sicherheit und Kundenzufriedenheit. Über 50.000 zufriedene Kunden vertrauen uns bereits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-follower-blue text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-follower-brightblue transition-colors cursor-pointer">
            Jetzt starten und deine Reichweite erhöhen!
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BestShopSection;
