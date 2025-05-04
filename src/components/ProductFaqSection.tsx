
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface ProductFaqSectionProps {
  platform: string;
  type: string;
}

const ProductFaqSection: React.FC<ProductFaqSectionProps> = ({ platform, type }) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  
  const handleAccordionChange = (value: string) => {
    setActiveIndex(value === activeIndex ? null : value);
  };

  // Dynamic FAQs based on platform and product type
  const getFaqs = (): FaqItem[] => {
    const commonFaqs: FaqItem[] = [
      {
        question: "Wie schnell werden die Dienste geliefert?",
        answer: "Die Lieferung beginnt in der Regel innerhalb von 30 Minuten nach dem Kauf. Die Geschwindigkeit kann je nach Größe der Bestellung und aktueller Systemauslastung variieren."
      },
      {
        question: "Sind die Profile echt und aktiv?",
        answer: "Ja, wir bieten hochwertige Accounts, die von echten Menschen genutzt werden. Unsere Dienste sind so konzipiert, dass sie natürlich erscheinen und den Algorithmen der Plattformen entsprechen."
      },
      {
        question: "Kann ich nach dem Kauf mehr bestellen?",
        answer: "Selbstverständlich! Du kannst jederzeit mehr bestellen. Wir empfehlen einen schrittweisen Aufbau für die natürlichste Wachstumsrate."
      },
      {
        question: "Welche Zahlungsmethoden werden akzeptiert?",
        answer: "Wir akzeptieren alle gängigen Kreditkarten, PayPal, Sofortüberweisung und verschiedene Kryptowährungen für maximale Flexibilität und Sicherheit."
      },
      {
        question: "Ist mein Konto sicher?",
        answer: "Absolut! Wir benötigen niemals dein Passwort oder andere sensible Daten. Unsere Dienste sind 100% konform mit den Richtlinien der jeweiligen Plattformen."
      }
    ];

    // Add specific FAQs based on platform and type
    const specificFaqs: Record<string, Record<string, FaqItem[]>> = {
      instagram: {
        follower: [
          {
            question: "Sind die Instagram Follower aus Deutschland?",
            answer: "Ja, unsere Instagram Follower sind größtenteils aus dem deutschsprachigen Raum, was die Engagement-Rate deines Accounts deutlich verbessert."
          },
          {
            question: "Werden die Follower abfallen?",
            answer: "Wir bieten eine Garantie für unsere Dienste. Sollten Follower innerhalb des Garantiezeitraums abfallen, ersetzen wir diese kostenlos."
          }
        ],
        likes: [
          {
            question: "Kann ich die Likes auf verschiedene Posts aufteilen?",
            answer: "Das ist bei den größeren Paketen möglich. Bitte kontaktiere nach dem Kauf unseren Support, um die genaue Verteilung zu besprechen."
          }
        ]
      },
      youtube: {
        subscriber: [
          {
            question: "Beeinflussen mehr Abonnenten meine Monetarisierung?",
            answer: "Mehr Abonnenten können dir helfen, die Monetarisierungsanforderungen von YouTube zu erfüllen, aber beachte, dass auch Watch-Time und Engagement wichtig sind."
          },
          {
            question: "Sind die Abonnenten real und aktiv?",
            answer: "Unsere YouTube-Abonnenten sind echte Accounts. Die Aktivitätsrate variiert, aber sie sind so konzipiert, dass sie deinem Kanal Glaubwürdigkeit verleihen."
          }
        ]
      }
    };

    // Combine common FAQs with platform/type specific FAQs if they exist
    const platformFaqs = specificFaqs[platform]?.[type] || [];
    return [...platformFaqs, ...commonFaqs];
  };

  const faqs = getFaqs();
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Häufig gestellte Fragen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Hier findest du Antworten auf die häufigsten Fragen zu unseren {platform.charAt(0).toUpperCase() + platform.slice(1)} {type.charAt(0).toUpperCase() + type.slice(1)} Diensten.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">Noch Fragen? Kontaktiere uns direkt!</p>
            <Link to="/kontakt" className="inline-block bg-follower-blue text-white px-6 py-2 rounded-full hover:bg-follower-brightblue transition-colors">
              Zum Support
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Add missing import
import { Link } from "react-router-dom";

export default ProductFaqSection;
