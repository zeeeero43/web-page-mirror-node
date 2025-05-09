
import { siteConfig } from "@/lib/siteConfig";

export const useSiteConfig = () => {
  return {
    siteName: siteConfig.name,
    siteDescription: siteConfig.description,
  };
};

export default useSiteConfig;
