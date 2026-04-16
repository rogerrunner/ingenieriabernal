/**
 * SEO Configuration for Rogerio Bernal - Ingeniería Hidráulica
 * Optimized for local search in Manizales, Caldas and Eje Cafetero
 * 
 * Primary Keywords:
 * - Ingeniero hidráulico Manizales
 * - Consultor riesgo hidráulico Caldas
 * - Diseño hidrosanitario Dosquebradas
 * - Modelación HEC-RAS 2D
 * - Estudios inundación Colombia
 */

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería Consultores",
  description: "Consultoría especializada en ingeniería hidráulica, diseño hidrosanitario, modelación HEC-RAS 2D, acueductos y gestión del riesgo hídrico en Colombia. Manizales. COPNIA 17202-313228.",
  keywords: [
    "ingeniero hidráulico Manizales",
    "consultor riesgo hidráulico Caldas",
    "diseño hidrosanitario Dosquebradas",
    "modelación HEC-RAS 2D",
    "gestión riesgo inundación",
    "estudios inundación Colombia",
    "RAS 2017 cumplimiento",
    "drenaje urbano sostenible",
    "sistemas contraincendios",
    "agua potable saneamiento",
    "consultoría ingeniería hidráulica",
    "ordenamiento territorial"
  ],
  ogType: "website",
};

export const pagesSEO: Record<string, SEOConfig> = {
  home: {
    title: "Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería Consultores",
    description: "Consultoría en ingeniería hidráulica, modelación HEC-RAS 2D, diseño hidrosanitario NSR-10, acueductos RAS 2017 y gestión del riesgo hídrico en Colombia. Especialista UNAL · COPNIA vigente.",
    keywords: [
      "ingeniero hidráulico",
      "consultor riesgo",
      "diseño hidrosanitario",
      "Manizales",
      "Caldas",
      "HEC-RAS",
      "gestión del riesgo",
      "agua saneamiento",
      "drenaje urbano",
      "sistemas contraincendios",
      "modelación hidráulica",
      "Eje Cafetero"
    ],
    ogType: "website",
  },
  about: {
    title: "Rogerio Bernal Ríos — Ingeniero Hidráulico | BIC Manizales",
    description: "Ingeniero Civil Especialista en Hidráulica y Ambiental (UNAL). +10 años en modelación HEC-RAS, diseño hidrosanitario y gestión del riesgo. COPNIA 17202-313228. Colombia, Ecuador y México.",
    keywords: [
      "Rogerio Bernal",
      "ingeniero civil",
      "especialista hidráulica",
      "HEC-RAS",
      "gestión riesgo",
      "modelación hidrológica",
      "ingeniería ambiental",
      "proyectos agua",
      "UNAL",
      "COPNIA 17202-313228",
      "experiencia profesional"
    ],
  },
  services: {
    title: "Servicios Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería",
    description: "Diseño hidrosanitario NSR-10, modelación HEC-RAS 2D, acueductos RAS 2017, sistemas contra incendios, gestión del riesgo hídrico, regalías MGA-Web. Manizales · Colombia. Cotice hoy.",
    keywords: [
      "diseño hidrosanitario",
      "estudios inundación",
      "modelación HEC-RAS",
      "gestión riesgo hidráulico",
      "drenaje sostenible SUDS",
      "sistemas contraincendios",
      "RAS 2017",
      "Resolución 0330",
      "ingeniería hidráulica servicios",
      "consultoría agua",
      "formulación proyectos inversión",
      "residencia obra"
    ],
  },
  projects: {
    title: "Proyectos Ejecutados — Ingeniería Hidráulica | BIC Bernal",
    description: "Portafolio verificado: Makarí Mall Dosquebradas, Palacio de Justicia La Dorada, EPANET Manizales, torrencialidad 8 municipios Eje Cafetero, Guayaquil Ecuador. +10 años de experiencia.",
    keywords: [
      "proyectos hidráulica",
      "casos éxito",
      "Makarí Mall",
      "Primavera Real",
      "Guayaquil",
      "gestión riesgo proyectos",
      "drenaje urbano",
      "diseño sistemas agua",
      "ordenamiento territorial",
      "modelación hidráulica proyectos"
    ],
  },
  clients: {
    title: "Clientes | Empresas que Confían en Rogerio Bernal",
    description: "Trabajamos con empresas líderes en desarrollo, construcción, consultoría e instituciones públicas en Colombia, México y Ecuador. Aguas de Manizales, PSI Ingeniería, VHZ Ingeniería.",
    keywords: [
      "clientes",
      "empresas",
      "desarrolladores",
      "constructoras",
      "municipios",
      "servicios públicos",
      "consultoría",
      "Aguas de Manizales",
      "PSI Ingeniería",
      "VHZ Ingeniería"
    ],
  },
  contact: {
    title: "Contacto — BIC Bernal Ingeniería | Manizales, Colombia",
    description: "Contáctenos para consultoría en ingeniería hidráulica, hidrosanitaria y gestión del riesgo. Manizales, Caldas. +57 302 477-8910. Primera consulta sin costo. Respuesta en 24 horas.",
    keywords: [
      "contacto",
      "consultoría",
      "Manizales",
      "Caldas",
      "ingeniería hidráulica",
      "agendar cita",
      "solicitar consulta",
      "WhatsApp",
      "email"
    ],
  },
  blog: {
    title: "Blog Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería",
    description: "Artículos técnicos: modelación HEC-RAS 2D, NSR-10 sistemas CI, costos obras 2026, regalías MGA-Web, IRCA municipios, normativa hídrica colombiana. Por Rogerio Bernal Ríos.",
    keywords: [
      "blog",
      "ingeniería hidráulica",
      "gestión riesgo",
      "RAS 2017",
      "costos obras",
      "normativa",
      "artículos técnicos",
      "agua saneamiento",
      "HEC-RAS",
      "drenaje urbano"
    ],
  },
  credentials: {
    title: "Credenciales Profesionales | Rogerio Bernal — UNAL · COPNIA",
    description: "Ingeniero Civil UNAL, Especialista en Ingeniería Hidráulica y Ambiental, Tarjeta Profesional COPNIA 17202-313228 CLD vigente. TOEFL 98/120. Experiencia en Colombia, Ecuador y México.",
    keywords: [
      "credenciales",
      "UNAL",
      "COPNIA",
      "certificaciones",
      "ingeniero civil",
      "especialista",
      "HEC-RAS",
      "formación profesional"
    ],
  },
};

/**
 * Generate Schema Markup for Local Business
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rogerio Bernal - Ingeniería Hidráulica",
    "image": "https://ingenieriabernal.co/logo.png",
    "description": "Consultoría especializada en ingeniería hidráulica, modelación HEC-RAS y gestión del riesgo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Manizales",
      "addressLocality": "Manizales",
      "addressRegion": "Caldas",
      "postalCode": "170001",
      "addressCountry": "CO"
    },
    "telephone": "+57 302 477-8910",
    "email": "robernalri@unal.edu.co",
    "url": "https://ingenieriabernal.co",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Manizales"
      },
      {
        "@type": "City",
        "name": "Dosquebradas"
      },
      {
        "@type": "City",
        "name": "Villamaría"
      },
      {
        "@type": "City",
        "name": "La Dorada"
      },
      {
        "@type": "City",
        "name": "Pereira"
      },
      {
        "@type": "City",
        "name": "Viterbo"
      },
      {
        "@type": "City",
        "name": "Puerto Boyacá"
      }
    ],
    "serviceArea": {
      "@type": "GeoShape",
      "areaServed": "Caldas, Colombia"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+57 302 477-8910",
      "email": "robernalri@unal.edu.co",
      "areaServed": "CO",
      "availableLanguage": ["es"]
    }
  };
}

/**
 * Generate Schema Markup for Professional
 */
export function generateProfessionalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rogerio Bernal Ríos",
    "jobTitle": "Ingeniero Civil - Especialista en Ingeniería Hidráulica",
    "image": "https://ingenieriabernal.co/rogerio.jpg",
    "email": "robernalri@unal.edu.co",
    "telephone": "+57 302 477-8910",
    "url": "https://ingenieriabernal.co",
    "sameAs": [
      "https://www.linkedin.com/in/rogerio-bernal",
      "https://www.researchgate.net/profile/Rogerio-Bernal"
    ],
    "affiliation": {
      "@type": "Organization",
      "name": "Rogerio Bernal - Ingeniería Hidráulica"
    },
    "knowsAbout": [
      "Ingeniería Hidráulica",
      "Modelación HEC-RAS",
      "Gestión del Riesgo",
      "Diseño Hidrosanitario",
      "RAS 2017",
      "SUDS",
      "Drenaje Urbano",
      "Ordenamiento Territorial",
      "Agua Potable",
      "Saneamiento Básico"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Rogerio Bernal - Ingeniería Hidráulica",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manizales",
        "addressRegion": "Caldas",
        "addressCountry": "CO"
      }
    }
  };
}

/**
 * Generate Service Schema Markup
 */
export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Consultoría en Ingeniería Hidráulica",
    "description": "Servicios especializados en diseño hidrosanitario, modelación HEC-RAS, gestión del riesgo y ordenamiento territorial",
    "provider": {
      "@type": "Person",
      "name": "Rogerio Bernal Ríos",
      "email": "robernalri@unal.edu.co",
      "telephone": "+57 302 477-8910"
    },
    "areaServed": {
      "@type": "GeoShape",
      "areaServed": "Caldas, Colombia"
    },
    "availableLanguage": "es"
  };
}

/**
 * Generate FAQ Schema Markup
 */
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta un estudio de riesgo hidráulico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo varía según la complejidad del proyecto, tamaño del área y datos disponibles. Típicamente oscila entre $30-80 millones para estudios completos. Primera consulta gratuita."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma una modelación HEC-RAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dependiendo de la complejidad, entre 2-6 semanas. Incluye recopilación de datos, calibración del modelo, validación y generación de reportes técnicos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es RAS 2017?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RAS 2017 es el Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico en Colombia. Establece estándares para diseño, construcción y operación de sistemas de agua."
        }
      },
      {
        "@type": "Question",
        "name": "¿Dónde está ubicado Rogerio Bernal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ubicado en Manizales, Caldas, Colombia. Atiende proyectos en el Eje Cafetero, Colombia, México y Ecuador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las credenciales de Rogerio Bernal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ingeniero Civil de la Universidad Nacional de Colombia (UNAL), Especialista en Ingeniería Hidráulica, Tarjeta Profesional COPNIA 17202-313228, con +10 años de experiencia."
        }
      }
    ]
  };
}

/**
 * Local Keywords by City
 */
export const localKeywords = {
  manizales: [
    "ingeniero hidráulico Manizales",
    "consultor riesgo Manizales",
    "diseño hidrosanitario Manizales",
    "estudios inundación Manizales",
    "HEC-RAS Manizales",
    "drenaje urbano Manizales",
    "gestión riesgo Manizales",
    "modelación hidráulica Manizales",
    "agua potable Manizales",
    "saneamiento Manizales"
  ],
  dosquebradas: [
    "ingeniero hidráulico Dosquebradas",
    "consultor riesgo Dosquebradas",
    "diseño hidrosanitario Dosquebradas",
    "estudios inundación Dosquebradas",
    "modelación HEC-RAS Dosquebradas"
  ],
  caldas: [
    "ingeniero hidráulico Caldas",
    "consultor riesgo Caldas",
    "ingeniería hidráulica Caldas",
    "gestión riesgo Caldas",
    "diseño sistemas agua Caldas",
    "modelación hidráulica Caldas"
  ],
  ejecafetero: [
    "ingeniero hidráulico Eje Cafetero",
    "consultor riesgo Eje Cafetero",
    "HEC-RAS Eje Cafetero",
    "modelación hidráulica Eje Cafetero",
    "gestión riesgo Eje Cafetero",
    "drenaje urbano Eje Cafetero"
  ]
};

/**
 * Meta Tags Helper
 */
export function generateMetaTags(seo: SEOConfig) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(", "),
    "og:title": seo.title,
    "og:description": seo.description,
    "og:type": seo.ogType || "website",
    "og:image": seo.ogImage || "https://ingenieriabernal.co/og-image.png",
    "og:url": "https://ingenieriabernal.co",
    "twitter:card": "summary_large_image",
    "twitter:title": seo.title,
    "twitter:description": seo.description,
    "twitter:image": seo.ogImage || "https://ingenieriabernal.co/og-image.png",
    "author": "Rogerio Bernal",
    "robots": "index, follow",
    "viewport": "width=device-width, initial-scale=1.0",
    "language": "Spanish"
  };
}
