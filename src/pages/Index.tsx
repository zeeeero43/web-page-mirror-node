
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import MarketingSection from "@/components/MarketingSection";
import PromotionalBanner from "@/components/PromotionalBanner";
import InformationSection from "@/components/InformationSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <MarketingSection />
        <PromotionalBanner />
        <InformationSection />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
