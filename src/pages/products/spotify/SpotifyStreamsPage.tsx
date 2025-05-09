
import React from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const SpotifyStreamsPage: React.FC = () => {
  return (
    <ProductPageTemplate
      platform="spotify"
      type="streams"
      displayName="Spotify Streams"
    />
  );
};

export default SpotifyStreamsPage;
