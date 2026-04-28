import { useEffect } from "react";
import { SEOConfig, generateMetaTags } from "@/lib/seo";

interface SEOHeadProps {
  config: SEOConfig;
}

export default function SEOHead({ config }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) ||
                document.querySelector(`meta[property="${name}"]`);
      
      if (!tag) {
        tag = document.createElement("meta");
        const attrName = name.startsWith("og:") ? "property" : "name";
        tag.setAttribute(attrName, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const metaTags = generateMetaTags(config, config.canonical);
    Object.entries(metaTags).forEach(([key, value]) => {
      if (key !== "title") {
        updateMetaTag(key, value);
      }
    });

    // Update canonical URL if provided
    if (config.canonical) {
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonical);
    }
  }, [config]);

  return null;
}
