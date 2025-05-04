
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

interface ProductFormProps {
  productData: any;
  onSubmit: (data: any) => void;
  platform: string;
}

const formSchema = z.object({
  quantity: z.string(),
  username: z.string().min(1, "Benutzername/Link ist erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
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
      username: "",
      email: "",
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
      packageName: selectedPackage.name,
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
                    <p className="font-medium">{pkg.name}</p>
                    <p className="text-sm text-gray-500">{pkg.amount} {productData.unitName}</p>
                  </div>
                  <div className="text-lg font-semibold">{pkg.price}€</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Features:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              {productData.features.map((feature: string, index: number) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 p-8 border-t md:border-t-0 md:border-l"
        >
          <h2 className="text-xl font-semibold mb-6">Deine Details</h2>
          
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
                          <SelectTrigger>
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
              
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Deine E-Mail-Adresse" {...field} />
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
                    <p className="text-sm text-gray-500">Menge</p>
                    <p className="text-xl font-bold">{quantity} {productData.unitName}</p>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className={`w-full py-6 ${bgColor} ${bgHoverColor}`}
                >
                  Jetzt kaufen
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductForm;
