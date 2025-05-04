
import React from "react";
import { Star } from "lucide-react";

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#00B67A" stroke="#00B67A" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-xl font-bold ml-2">Trustpilot</span>
        </div>
        
        <div className="flex justify-center mb-2">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#00B67A" stroke="#00B67A" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
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
