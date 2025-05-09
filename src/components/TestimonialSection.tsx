
import React from "react";
import StarRating from "./StarRating";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const TestimonialSection: React.FC = () => {
  const { siteName } = useSiteConfig();
  
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-2">
          <img 
            src="/lovable-uploads/ede65c16-5fb5-47d2-8d69-bc5a41618d25.png" 
            alt="Star" 
            className="h-5 w-5"
          />
          <span className="text-xl font-bold ml-2">Trustpilot</span>
        </div>
        
        <div className="flex justify-center mb-2">
          <StarRating size="md" rating={4.8} />
        </div>
        
        <div className="flex justify-center items-center mb-8">
          <span className="font-bold text-2xl mr-2">4.8</span>
          <span className="text-gray-500 text-sm">376 Bewertungen | Hervorragend</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
