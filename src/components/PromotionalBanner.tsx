
import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative bg-follower-blue rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-white mb-8 md:mb-0">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white mr-1" />
                ))}
                <span className="text-sm font-medium">4.8 | 376 Bewertungen</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Nur heute: Exklusives Angebot!</h2>
              <p className="mb-6">
                Nur die beste Qualität. 100% risikofrei und vollkommen anonym.<br />
                Sofortige Lieferung.
              </p>
              
              <Button className="bg-white text-follower-blue hover:bg-gray-100 hover:text-follower-brightblue font-medium">
                Paket wählen
              </Button>
            </div>
            
            <div className="md:w-1/3 md:absolute md:right-0 md:bottom-0">
              <img 
                src="/lovable-uploads/57a34db8-8a6d-42e1-9711-2fe9a07faf62.png" 
                alt="Person using smartphone" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
