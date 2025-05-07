
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Check, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '@/contexts/CartContext';

interface ProductFormProps {
  productData: any;
  onSubmit: (data: any) => void;
  platform: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ productData, platform }) => {
  const [selectedTab, setSelectedTab] = useState('0');
  const [username, setUsername] = useState('');
  const [link, setLink] = useState('');
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    const selectedOption = productData.options[parseInt(selectedTab)];
    
    if (!selectedOption) {
      return;
    }

    if (!username && !link) {
      toast({
        title: "Fehler",
        description: productData.usernameField === 'link' 
          ? "Bitte gib einen Link ein" 
          : "Bitte gib einen Benutzernamen ein",
        variant: "destructive",
      });
      return;
    }

    const cartItem = {
      id: uuidv4(),
      title: `${selectedOption.quantity} ${productData.title}`,
      platform,
      type: productData.type,
      quantity: 1,
      price: selectedOption.price,
      username: productData.usernameField === 'username' ? username : '',
      link: productData.usernameField === 'link' ? link : '',
    };

    addToCart(cartItem);
    
    toast({
      title: "Zum Warenkorb hinzugefügt",
      description: `${selectedOption.quantity} ${productData.title} für ${selectedOption.price}€`,
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="0" onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-5 mb-4">
              {productData.options.map((option: any, index: number) => (
                <TabsTrigger key={index} value={index.toString()}>
                  {option.quantity}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {productData.options.map((option: any, index: number) => (
              <TabsContent key={index} value={index.toString()}>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="text-xl font-bold">{option.quantity} {productData.title}</div>
                      <div className="text-xl font-bold">{option.price}€</div>
                    </div>
                    
                    {option.bonus > 0 && (
                      <div className="text-green-500 text-sm font-medium mt-1">
                        + {option.bonus} {productData.title} Bonus
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {productData.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6 space-y-4">
          <h3 className="text-lg font-medium">Deine Informationen</h3>
          
          <div className="space-y-3">
            {productData.usernameField === 'username' ? (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Dein {platform} Benutzername
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 px-3 py-2 border"
                  placeholder={`@dein${platform}username`}
                />
              </div>
            ) : (
              <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">
                  Dein {platform} Link
                </label>
                <input
                  id="link"
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 px-3 py-2 border"
                  placeholder={`https://${platform.toLowerCase()}.com/...`}
                />
              </div>
            )}
          </div>
          
          <motion.div
            className="bg-green-50 border border-green-200 rounded-md p-3 text-sm text-green-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-medium">✓ 100% sicher und zuverlässig</p>
            <p>Schnelle Lieferung, keine Passwörter benötigt</p>
          </motion.div>
          
          <Button 
            onClick={handleAddToCart} 
            className="w-full text-lg py-6 mt-4"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            In den Warenkorb
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
            <span>Sichere Bezahlung</span>
            <span>•</span>
            <span>Schnelle Lieferung</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductForm;
