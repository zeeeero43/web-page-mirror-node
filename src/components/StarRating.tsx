
import React from "react";

interface StarRatingProps {
  rating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating = 5, 
  size = "md",
  className = ""
}) => {
  const starSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  
  const starSize = starSizes[size];
  
  return (
    <div className={`flex ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <img 
          key={star} 
          src="/lovable-uploads/ede65c16-5fb5-47d2-8d69-bc5a41618d25.png" 
          alt="Star" 
          className={`${starSize} ${star <= rating ? 'opacity-100' : 'opacity-50'}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
