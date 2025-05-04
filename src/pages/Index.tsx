
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import MarketingSection from "@/components/MarketingSection";
import PromotionalBanner from "@/components/PromotionalBanner";
import InformationSection from "@/components/InformationSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div variants={sectionVariants}>
            <FeaturesSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <TestimonialSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <MarketingSection />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PromotionalBanner />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <InformationSection />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
