
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl p-4 mb-4 w-72 border"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Live Chat</h3>
              <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
                <X size={18} />
              </button>
            </div>
            <div className="bg-gray-50 h-64 rounded-md p-3 mb-4 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                <div className="bg-follower-blue text-white p-2 rounded-lg rounded-bl-none self-start max-w-[80%]">
                  <p className="text-sm">Willkommen bei FollowerPulse! Wie können wir dir helfen?</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Schreib uns..." 
                className="flex-grow border rounded-l-md p-2 focus:outline-none focus:ring-1 focus:ring-follower-blue"
              />
              <button className="bg-follower-blue text-white p-2 rounded-r-md hover:bg-follower-brightblue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-follower-blue hover:bg-follower-brightblue text-white rounded-full p-3 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default ChatButton;
