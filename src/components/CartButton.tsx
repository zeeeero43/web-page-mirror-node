
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartButton: React.FC = () => {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <Button 
      onClick={() => setIsCartOpen(true)}
      variant="outline" 
      size="icon"
      className="relative"
    >
      <ShoppingCart className="h-[1.2rem] w-[1.2rem]" />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default CartButton;
