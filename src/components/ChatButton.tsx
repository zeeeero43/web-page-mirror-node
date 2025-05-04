
import React from "react";
import { MessageCircle } from "lucide-react";

const ChatButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-follower-blue hover:bg-follower-brightblue text-white rounded-full p-3 shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ChatButton;
