
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Reviewer {
  name: string;
  days: number;
  comment: string;
}

const reviewers: Reviewer[] = [
  {
    name: "jakobmann",
    days: 2,
    comment: "Ich war erst skeptisch, aber deutsche Follower waren echt nach ein paar Minuten da"
  },
  {
    name: "schmidt_1995",
    days: 3,
    comment: "5/5 Mega schnell geliefert und richtig netter Support, empfehle ich weiter!"
  },
  {
    name: "hans.weber",
    days: 5,
    comment: "Mega gut 😊 Haha, hundert als Joke bestellt für einen Freund. Hab sogar mehr erhalten"
  },
  {
    name: "julia_k89",
    days: 6,
    comment: "Krass, die deutschen Follower schauen sich sogar meine Stories an 😊 damit hab ich null gerechnet"
  },
  {
    name: "fischer_otto",
    days: 10,
    comment: "Erst war ich sehr skeptisch doch jetzt bin ich echt überzeugt. Danke, immer wieder gerne 😊"
  },
  {
    name: "klaus1337",
    days: 12,
    comment: "schnelle und unkomplizierte Abwicklung, gerne wieder."
  },
  {
    name: "wagner_p",
    days: 12,
    comment: "Hat alles super geklappt, innerhalb weniger Sekunden waren alle Follower da"
  },
  {
    name: "berlinboy23",
    days: 17,
    comment: "Klappt reibungslos. Nicht meine erste und letzte Bestellung ! 😊"
  }
];

const ProductReviewsSection: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kundenrezensionen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tausende zufriedene Kunden vertrauen uns täglich. Hier sind einige der neuesten Bewertungen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-gray-800">4,91</div>
              <div className="flex justify-center md:justify-start mt-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img 
                    key={i} 
                    src="/lovable-uploads/f2b2623d-de2a-4e2f-88bf-91eeeb940cc4.png" 
                    alt="Star" 
                    className="h-6 w-6"
                  />
                ))}
              </div>
              <div className="mt-2 text-gray-600">376+ Bewertungen</div>
            </div>
            
            <div className="flex-1 max-w-sm w-full">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center mb-2">
                  <div className="w-8 text-right mr-2">{rating} <Star className="inline-block h-4 w-4" fill="#00B67A" stroke="#00B67A" /></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-follower-blue" 
                      style={{ 
                        width: rating === 5 ? '85%' : 
                              rating === 4 ? '10%' : 
                              rating === 3 ? '3%' : 
                              rating === 2 ? '1%' : '0.5%' 
                      }}
                    ></div>
                  </div>
                  <div className="w-8 text-left ml-2 text-sm text-gray-600">
                    {rating === 5 ? '316' : 
                     rating === 4 ? '42' : 
                     rating === 3 ? '11' : 
                     rating === 2 ? '3' : '1'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewers.map((reviewer, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={reviewer.name} 
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold">{reviewer.name}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Vor {reviewer.days} Tagen</span>
                </div>
              </div>
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img 
                    key={i} 
                    src="/lovable-uploads/f2b2623d-de2a-4e2f-88bf-91eeeb940cc4.png" 
                    alt="Star" 
                    className="h-5 w-5"
                  />
                ))}
              </div>
              <p className="text-gray-700">{reviewer.comment}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="flex items-center gap-1 mx-auto text-follower-blue hover:underline">
            Mehr anzeigen
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductReviewsSection;
