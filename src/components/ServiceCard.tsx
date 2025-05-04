
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, price, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3">
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{price}</p>
          </div>
        </div>
        <div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
