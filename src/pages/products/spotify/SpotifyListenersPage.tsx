
import React from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

const SpotifyListenersPage: React.FC = () => {
  return (
    <ProductPageTemplate
      platform="spotify"
      type="hoerer"
      displayName="Spotify Monatliche Hörer"
    />
  );
};

export default SpotifyListenersPage;
