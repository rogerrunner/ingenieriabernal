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

      // hreflang -- single-language site (es-CO) pointing to canonical
      const hreflangLocales = [
        { hreflang: "es-CO",    href: config.canonical },
        { hreflang: "es",       href: config.canonical },
        { hreflang: "x-default", href: config.canonical },
      ];
      hreflangLocales.forEach(({ hreflang, href }) => {
        let link = document.querySelector(`link[rel='alternate'][hreflang='${hreflang}']`);
        if (!link) {
          link = document.createElement("link");
          link.setAttribute("rel", "alternate");
          link.setAttribute("hreflang", hreflang);
          document.head.appendChild(link);
        }
        link.setAttribute("href", href);
      });
    }

    // Geo meta tags -- company HQ Manizales, Caldas, Colombia
    const geoTags: [string, string][] = [
      ["geo.region",    "CO-CAL"],
      ["geo.placename", "Manizales, Caldas, Colombia"],
      ["geo.position",  "5.0703;-75.5138"],
      ["ICBM",          "5.0703, -75.5138"],
    ];
    geoTags.forEach(([name, content]) => updateMetaTag(name, content));
  }, [config]);

  return null;
}
