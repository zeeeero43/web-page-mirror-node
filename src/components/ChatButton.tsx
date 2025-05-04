
import React from "react";
import { MessageCircle } from "lucide-react";

const ChatButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ChatButton;
