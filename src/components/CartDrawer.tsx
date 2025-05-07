
import React from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { MinusCircle, PlusCircle, ShoppingCart, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    totalPrice 
  } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="border-b pb-4 mb-4">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span>Warenkorb ({totalItems})</span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              Dein Warenkorb ist leer
            </div>
          ) : (
            items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex-1">
                  <h4 className="font-medium">
                    <span className="capitalize">{item.platform}</span> {item.type}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.username || item.link}
                  </p>
                  <div className="text-sm font-medium mt-1">
                    {item.price.toFixed(2)}€
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <MinusCircle className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        {items.length > 0 && (
          <SheetFooter className="mt-4 flex-col gap-4 sm:flex-row sm:justify-between">
            <div className="text-lg font-semibold">
              Gesamt: {totalPrice.toFixed(2)}€
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setIsCartOpen(false)}>
                Weiter einkaufen
              </Button>
              <Button>
                Zur Kasse
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
