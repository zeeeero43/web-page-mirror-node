
import React, { useEffect } from 'react';
import { useSiteConfig } from '@/hooks/useSiteConfig';

interface PageTitleProps {
  title?: string;
  description?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ 
  title,
  description,
}) => {
  const { siteName } = useSiteConfig();
  
  useEffect(() => {
    // Update the document title when the component mounts
    if (title) {
      document.title = `${title} | ${siteName}`;
    } else {
      document.title = siteName;
    }
    
    // Optionally update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    // Cleanup when component unmounts
    return () => {
      document.title = siteName;
    };
  }, [title, description, siteName]);
  
  // This component doesn't render anything visible
  return null;
};

export default PageTitle;
