
import React, { useState, useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { getPlatformColors } from "@/lib/productUtils";
import { ArrowRight, Users, Check, Clock, Shield } from "lucide-react";

interface ProductFormProps {
  productData: any;
  onSubmit: (data: any) => void;
  platform: string;
}

const formSchema = z.object({
  quantity: z.string(),
  username: z.string().min(1, "Benutzername/Link ist erforderlich")
});

const ProductForm: React.FC<ProductFormProps> = ({ productData, onSubmit, platform }) => {
  const [selectedPackage, setSelectedPackage] = useState(productData.packages[0]);
  const [price, setPrice] = useState(selectedPackage.price);
  const [quantity, setQuantity] = useState(selectedPackage.amount);
  
  const { bgColor, bgHoverColor } = getPlatformColors(platform);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: selectedPackage.amount.toString(),
      username: ""
    },
  });
  
  useEffect(() => {
    form.setValue("quantity", selectedPackage.amount.toString());
    setQuantity(selectedPackage.amount);
    setPrice(selectedPackage.price);
  }, [selectedPackage, form]);
  
  const handlePackageChange = (value: string) => {
    const newPackage = productData.packages.find((pkg: any) => pkg.amount.toString() === value);
    if (newPackage) {
      setSelectedPackage(newPackage);
    }
  };
  
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    onSubmit({
      ...data,
      price: price,
      packageName: `${selectedPackage.amount} ${productData.unitName}`,
    });
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Calculate bonus amount (10% of the selected quantity)
  const bonusAmount = Math.round(selectedPackage.amount * 0.1);
  
  // Random numbers for FOMO effect
  const [randomNumbers] = useState({
    viewing: Math.floor(Math.random() * 15) + 5,
    purchased: Math.floor(Math.random() * 12) + 3,
    remaining: Math.floor(Math.random() * 10) + 5
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 p-8 bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-6">Wähle dein Paket</h2>
          
          <div className="space-y-3 mb-8">
            {productData.packages.map((pkg: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedPackage.amount === pkg.amount 
                    ? `border-2 ${bgColor} bg-opacity-5` 
                    : "border-gray-200"
                }`}
                onClick={() => handlePackageChange(pkg.amount.toString())}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{pkg.amount} {productData.unitName}</p>
                    <p className="text-sm text-green-500 font-medium">{Math.round(pkg.amount * 0.1)} {productData.unitName} Bonus</p>
                  </div>
                  <div className="text-lg font-semibold">{pkg.price}€</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-follower-blue" />
              Features & Vorteile
            </h3>
            <ul className="space-y-3">
              {productData.features.map((feature: string, index: number) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 p-8 border-t md:border-t-0 md:border-l"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Deine Details</h2>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              Angebot endet bald
            </span>
          </div>
          
          {/* FOMO elements */}
          <div className="mb-6 bg-amber-50 border border-amber-100 p-3 rounded-lg text-sm text-amber-800">
            <div className="flex items-center mb-2">
              <Users className="w-4 h-4 mr-2" />
              <span>{randomNumbers.viewing} Personen schauen sich das gerade an</span>
            </div>
            <div className="text-xs">
              {randomNumbers.purchased} Personen haben das in den letzten 24 Stunden gekauft
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Menge</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          handlePackageChange(value);
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Wähle die Menge" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {productData.packages.map((pkg: any, index: number) => (
                            <SelectItem key={index} value={pkg.amount.toString()}>
                              {pkg.amount} {productData.unitName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{productData.usernameLabel || "Benutzername/Link"}</FormLabel>
                      <FormControl>
                        <Input placeholder={`Dein ${platform} ${productData.usernameLabel || "Benutzername"}`} {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="pt-4 border-t"
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Preis</p>
                    <p className="text-xl font-bold">{price}€</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Du erhältst</p>
                    <p className="text-xl font-bold">{quantity} <span className="text-green-500">+{bonusAmount}</span> {productData.unitName}</p>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className={`w-full py-6 ${bgColor} ${bgHoverColor} group`}
                >
                  <span className="mr-2">Jetzt kaufen</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="mt-4 text-center text-xs text-gray-500">
                  <p>100% sichere Zahlung & schnelle Lieferung</p>
                  <p className="mt-1">Nur noch {randomNumbers.remaining} zum aktuellen Preis verfügbar</p>
                </div>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductForm;
