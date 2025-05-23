
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import ProductForm from "@/components/ProductForm";
import ProductReviewsSection from "@/components/ProductReviewsSection";
import BestShopSection from "@/components/BestShopSection";
import ProductFaqSection from "@/components/ProductFaqSection";
import { getPlatformColors, getProductData } from "@/lib/productUtils";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

// Map for type translations used in routes
const typeMap: Record<string, string> = {
  // German to internal data structure mapping
  "abonnenten": "abonnenten",
  "aufrufe": "aufrufe", 
  "kommentare": "kommentare",
  "likes": "likes",
  "follower": "follower",
  "streams": "streams",
  "hoerer": "hoerer", 
  "zuschauer": "zuschauer",
  "viral": "viral",
  // English fallbacks for legacy routes
  "views": "aufrufe",
  "comments": "kommentare",
  "subscriber": "abonnenten",
  "listeners": "hoerer",
  "viewers": "zuschauer"
};

const ProductPage: React.FC = () => {
  const { platform, type } = useParams<{ platform: string; type: string }>();
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [platform, type]);
  
  // Check if platform and type are valid
  if (!platform || !type) {
    console.error("Missing platform or type parameters");
    return <Navigate to="/dienstleistungen" />;
  }
  
  // Map the type from the URL to the correct key in the product data
  const dataType = typeMap[type.toLowerCase()] || type;
  
  // Get the raw product data using the mapped type
  const productData = getProductData(platform, dataType);
  
  if (!productData) {
    console.error("Product data not found for:", platform, dataType);
    return <Navigate to="/dienstleistungen" />;
  }
  
  // Transform product data to match the format expected by ProductForm
  const formattedProductData = {
    ...productData,
    options: productData.packages.map(pkg => ({
      quantity: pkg.amount,
      price: pkg.price,
      bonus: 0, // Add default bonus if not present
    })),
    type: dataType,
    usernameField: productData.usernameLabel?.toLowerCase().includes('url') ? 'link' : 'username',
  };
  
  const { bgColor, textColor } = getPlatformColors(platform);
  
  const handleProductSubmit = (data: any) => {
    addToCart(data);
    toast({
      title: "Zum Warenkorb hinzugefügt",
      description: `${data.quantity} ${productData.title} für ${data.price}€`,
    });
  };

  // Create a display name for the badge
  const displayName = `${platform.charAt(0).toUpperCase() + platform.slice(1)} ${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {loading ? (
          <div className="h-[300px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-follower-blue"></div>
          </div>
        ) : (
          <>
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
                    {displayName}
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
            <ProductFaqSection platform={platform} type={dataType} />
          </>
        )}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default ProductPage;
