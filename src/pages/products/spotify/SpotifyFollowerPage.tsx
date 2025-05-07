
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ProductForm from "@/components/ProductForm";
import ProductReviewsSection from "@/components/ProductReviewsSection";
import BestShopSection from "@/components/BestShopSection";
import ProductFaqSection from "@/components/ProductFaqSection";
import { getProductData, getPlatformColors } from "@/lib/productUtils";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const SpotifyFollowerPage: React.FC = () => {
  const platform = "spotify";
  const type = "follower";
  
  const productData = getProductData(platform, type);
  const { bgColor, textColor } = getPlatformColors(platform);
  
  const handleProductSubmit = (data: any) => {
    toast({
      title: "Zum Warenkorb hinzugefügt",
      description: `${data.quantity} ${productData.title} für ${data.price}€`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-6 md:py-10" // Reduced padding
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 text-center" // Reduced margin
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${bgColor} ${textColor} text-sm font-medium mb-3`}>
                Spotify Follower
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                {productData.title}
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                {productData.description}
              </p>
            </motion.div>
            
            <ProductForm 
              productData={productData} 
              onSubmit={handleProductSubmit}
              platform={platform}
            />
          </div>
        </motion.section>
        
        {/* Additional sections */}
        <BestShopSection />
        <ProductReviewsSection />
        <ProductFaqSection platform={platform} type={type} />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default SpotifyFollowerPage;
