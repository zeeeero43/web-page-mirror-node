
import React from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const TwitchFollowerPage: React.FC = () => {
  return (
    <ProductPageTemplate
      platform="twitch"
      type="follower"
      displayName="Twitch Follower"
    />
  );
};

export default TwitchFollowerPage;
