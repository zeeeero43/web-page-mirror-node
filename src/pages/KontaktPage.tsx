
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const KontaktPage = () => {
  const faqItems = [
    {
      question: "Wie lange dauert es, bis meine gesamte Bestellung geliefert wird?",
      answer: "Die Lieferung beginnt in der Regel sofort nach dem Kauf und wird innerhalb von 24-48 Stunden abgeschlossen. Bei größeren Bestellungen kann es etwas länger dauern."
    },
    {
      question: "Welche Zahlungsmethoden stehen zur Verfügung?",
      answer: "Wir akzeptieren verschiedene Zahlungsmethoden wie PayPal, Kreditkarte, Sofortüberweisung und mehr. Alle Zahlungen sind sicher und verschlüsselt."
    },
    {
      question: "Ist das absolut sicher? Kann es meinem Profil schaden?",
      answer: "Unsere Dienstleistungen sind 100% sicher. Wir verwenden keine Bots oder gefälschte Konten, sondern echte Menschen mit aktiven Accounts. Ihr Profil ist bei uns in sicheren Händen."
    },
    {
      question: "Schließe ich ein Abonnement ab?",
      answer: "Nein, alle unsere Dienstleistungen sind einmalige Käufe. Sie schließen kein Abonnement ab und müssen sich nicht um wiederkehrende Zahlungen sorgen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto mt-10 mb-16 px-4">
          {/* Kontakt Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                <div className="h-12 w-12 bg-yellow-200 rounded-full border-2 border-white flex items-center justify-center text-yellow-800 text-xl font-bold">
                  💁
                </div>
                <div className="h-12 w-12 bg-blue-200 rounded-full border-2 border-white flex items-center justify-center text-blue-800 text-xl font-bold">
                  👨‍💼
                </div>
                <div className="h-12 w-12 bg-green-200 rounded-full border-2 border-white flex items-center justify-center text-green-800 text-xl font-bold">
                  👩‍💼
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontaktiere uns</h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Du hast Fragen zu einem Produkt oder Probleme mit einer Bestellung? Unser Team steht dir gerne zu Verfügung.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* FAQ */}
            <div className="bg-white border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <HelpCircle className="h-8 w-8 text-follower-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4">Schau dir erst unsere FAQ an - dort findest du alle wichtigen Infos.</p>
              <p className="font-semibold mb-2">Verfügbar von:</p>
              <p className="mb-4">24/7</p>
              <Button className="bg-follower-blue hover:bg-follower-brightblue w-full">FAQ anzeigen</Button>
            </div>

            {/* Live-Chat */}
            <div className="bg-white border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <MessageCircle className="h-8 w-8 text-follower-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live-Chat</h3>
              <p className="text-gray-600 mb-4">Unser Live-Chat Team hilft dir sofort bei allen Fragen weiter.</p>
              <p className="font-semibold mb-2">Verfügbar von:</p>
              <p className="mb-4">24/7</p>
              <Button className="bg-follower-blue hover:bg-follower-brightblue w-full">Chat starten</Button>
            </div>

            {/* E-Mail */}
            <div className="bg-white border rounded-lg p-6 flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-4 mb-4">
                <Mail className="h-8 w-8 text-follower-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
              <p className="text-gray-600 mb-4">Unser E-Mail-Support hilft dir schnell bei allen Anfragen.</p>
              <p className="font-semibold mb-2">Verfügbar von:</p>
              <p className="mb-4">Mo.-Fr.: 9:00 Uhr — 18:00 Uhr</p>
              <Button className="bg-follower-blue hover:bg-follower-brightblue w-full">E-Mail senden</Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-sm font-medium text-follower-blue uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Häufig gestellte Fragen</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Wir haben für dich Antworten auf die Fragen zusammengestellt, die du am häufigsten stellst.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="bg-follower-blue text-white rounded-xl overflow-hidden">
            <div className="container mx-auto p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white">4.8 | 376 Bewertungen</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Erhalte echte und aktive Follower in wenigen Sekunden!</h3>
                <p className="text-white/90 mb-6">
                  Nur die beste Qualität. 100% risikofrei und vollkommen anonym. Sofortige Lieferung.
                </p>
                <Button className="bg-white text-follower-blue hover:bg-gray-100">Paket wählen</Button>
              </div>
              <div className="md:w-1/3">
                <img src="/lovable-uploads/b12184e9-1b32-4aa8-9e64-47980addf16b.png" alt="Person mit Smartphone" className="max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KontaktPage;
