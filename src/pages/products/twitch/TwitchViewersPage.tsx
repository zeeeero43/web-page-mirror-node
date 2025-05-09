
import React from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const TwitchViewersPage: React.FC = () => {
  return (
    <ProductPageTemplate
      platform="twitch"
      type="zuschauer"
      displayName="Twitch Live Zuschauer"
    />
  );
};

export default TwitchViewersPage;
