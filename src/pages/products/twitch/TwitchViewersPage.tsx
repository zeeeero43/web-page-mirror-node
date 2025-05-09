
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
import { useCart } from "@/contexts/CartContext";

const TwitchViewersPage: React.FC = () => {
  const platform = "twitch";
  const type = "zuschauer"; // Changed from "viewers" to match data structure
  
  const productData = getProductData(platform, type);
  
  if (!productData) {
    console.error("Product data not found for:", platform, type);
    return <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-xl">Produkt nicht gefunden</p>
    </div>;
  }
  
  const { bgColor, textColor } = getPlatformColors(platform);
  const { addToCart } = useCart();
  
  // Transform product data to match the format expected by ProductForm
  const formattedProductData = {
    ...productData,
    options: productData.packages.map(pkg => ({
      quantity: pkg.amount,
      price: pkg.price,
      bonus: 0, // Add default bonus if not present
    })),
    type: type,
    usernameField: productData.usernameLabel?.toLowerCase().includes('url') ? 'link' : 'username',
  };
  
  const handleProductSubmit = (data: any) => {
    addToCart(data);
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
          className="py-6 md:py-10"
        >
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 text-center"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${bgColor} ${textColor} text-sm font-medium mb-3`}>
                Twitch Live Zuschauer
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                {productData.title}
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                {productData.description}
              </p>
            </motion.div>
            
            <ProductForm 
              productData={formattedProductData} 
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

export default TwitchViewersPage;
