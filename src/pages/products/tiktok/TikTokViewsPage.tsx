
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ProductForm from "@/components/ProductForm";
import { getProductData, getPlatformColors } from "@/lib/productUtils";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const TikTokViewsPage: React.FC = () => {
  const platform = "tiktok";
  const type = "views";
  
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
          className="py-12"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 text-center"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${bgColor} ${textColor} text-sm font-medium mb-4`}>
                TikTok Aufrufe
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.title}</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default TikTokViewsPage;
