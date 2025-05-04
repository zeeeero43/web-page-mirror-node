
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto text-center">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-4"
        >
          <span className="text-gray-800">Nur heute: </span>
          <span className="text-follower-blue">Sonderrabatt</span>
          <span className="text-gray-800"> auf alles!</span>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 mb-8"
        >
          Top-Qualität. Sofortige Lieferung. Lebenslange Garantie.
        </motion.p>
        
        {/* Social Media Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-4 mb-12"
        >
          <Link to="/instagram/follower">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 border border-pink-400 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </motion.div>
          </Link>
          <Link to="/tiktok/follower">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 border border-gray-300 bg-gray-200 rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <path d="M9 12 11 14 15 10" />
                <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5Z" />
              </svg>
            </motion.div>
          </Link>
          <Link to="/youtube/abonnenten">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 border border-red-300 bg-red-100 rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="m22 8-6 4 6 4V8Z" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
            </motion.div>
          </Link>
          <Link to="/facebook/likes">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 border border-blue-300 bg-blue-100 rounded-lg flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
        
        {/* Service Options */}
        <div className="max-w-md mx-auto space-y-4">
          <Link to="/instagram/follower">
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="service-button group w-full"
            >
              <div className="flex items-center">
                <div className="bg-pink-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </div>
                <span className="font-medium">Instagram Follower</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-follower-blue transition-colors" />
            </motion.button>
          </Link>
          
          <Link to="/instagram/likes">
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="service-button group w-full"
            >
              <div className="flex items-center">
                <div className="bg-pink-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </div>
                <span className="font-medium">Instagram Likes</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-follower-blue transition-colors" />
            </motion.button>
          </Link>
          
          <Link to="/instagram/aufrufe">
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="service-button group w-full"
            >
              <div className="flex items-center">
                <div className="bg-pink-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                    <path d="M2 12c0-3.56 0-5.34.68-6.74a8 8 0 0 1 2.58-2.58C6.66 2 8.44 2 12 2c3.56 0 5.34 0 6.74.68a8 8 0 0 1 2.58 2.58C22 6.66 22 8.44 22 12c0 3.56 0 5.34-.68 6.74a8 8 0 0 1-2.58 2.58C17.34 22 15.56 22 12 22c-3.56 0-5.34 0-6.74-.68a8 8 0 0 1-2.58-2.58C2 17.34 2 15.56 2 12Z" />
                    <path d="m15 11-6 4V7l6 4Z" />
                  </svg>
                </div>
                <span className="font-medium">Instagram Views</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-follower-blue transition-colors" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
