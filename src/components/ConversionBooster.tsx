
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ShoppingCart, Check } from "lucide-react";

const ConversionBooster: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [isVisible, setIsVisible] = useState(false);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Countdown effect
  useEffect(() => {
    // Show the offer after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    
    // Set up countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(showTimer);
    };
  }, []);
  
  const conversionPoints = [
    "100% authentische Accounts",
    "Schnelle Lieferung",
    "Support rund um die Uhr",
    "Garantierte Ergebnisse"
  ];
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg p-4 shadow-md mb-6"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-blue-600">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-bold">Sonderangebot endet in: {formatTime(timeLeft)}</span>
            </div>
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              -20% HEUTE
            </div>
          </div>
          
          <h3 className="text-lg font-bold mb-2">Sichere dir jetzt einen extra Boost!</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            {conversionPoints.map((point, index) => (
              <div key={index} className="flex items-center">
                <Check className="text-green-500 mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-full flex items-center"
              onClick={() => document.getElementById('product-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Angebot sichern
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConversionBooster;
