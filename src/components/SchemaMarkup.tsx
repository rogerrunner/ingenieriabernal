import { useEffect } from 'react'

const BASE_URL = 'https://ingenieriabernal.co'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': BASE_URL + '/#firma',
  name: 'Bernal Ingeniería Consultores — BIC',
  alternateName: 'BIC',
  url: BASE_URL,
  logo: BASE_URL + '/logo.png',
  image: BASE_URL + '/og-default.jpg',
  description: 'Consultoría en ingeniería hidráulica y saneamiento básico. Diseño de acueductos, PTAP, modelación HEC-RAS, redes contra incendio NSR-10 y proyectos SGR. Manizales, Colombia. Egresados UNAL — COPNIA 17202-313228.',
  telephone: '+573024778910',
  email: 'robernalri@unal.edu.co',
  foundingDate: '2015',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 5 },
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Ingeniero Hidráulico',
    alumniOf: 'Universidad Nacional de Colombia',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle 65A #23B-24',
    addressLocality: 'Manizales',
    addressRegion: 'Caldas',
    postalCode: '170004',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.0703,
    longitude: -75.5138,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Manizales' },
    { '@type': 'AdministrativeArea', name: 'Caldas' },
    { '@type': 'AdministrativeArea', name: 'Eje Cafetero' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Ecuador' },
    { '@type': 'Country', name: 'México' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ingeniería Hidráulica BIC',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de Acueductos Rurales y Veredales' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de PTAP' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modelación HEC-RAS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Red Contra Incendio NSR-10' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Proyectos SGR — Formulación MGA-Web' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estudios Hidrológicos e Hidráulicos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño hidrosanitario NSR-10 Títulos J y K' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestión del riesgo hídrico y POT' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ingeniería ambiental y trámites CAR' } },
    ],
  },
  paymentAccepted: 'Transferencia bancaria, Nequi, Bancolombia',
  sameAs: [
    'https://wa.me/573024778910',
  ],
  priceRange: '$$',
}

const HOME_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es BIC Bernal Ingeniería Consultores?',
      acceptedAnswer: { '@type': 'Answer', text: 'BIC es una firma colombiana de consultoría en ingeniería hidráulica, hidrosanitaria, ambiental y gestión del riesgo con sede en Manizales, Caldas. Fundada por el ingeniero Rogerio Bernal Ríos, egresado de la Universidad Nacional de Colombia, con más de 10 años de experiencia y presencia en Colombia, Ecuador y México.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un estudio hidrológico en Colombia?',
      acceptedAnswer: { '@type': 'Answer', text: 'El costo de un estudio hidrológico en Colombia varía según el alcance. Para proyectos básicos (cuencas pequeñas, municipios rurales), el rango típico es de $3 a $8 millones COP. Para modelación HEC-RAS 2D con mapas de inundación, entre $8 y $25 millones. BIC ofrece valoración técnica gratuita en menos de 24 horas hábiles — sin compromiso.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué estudios exige el Decreto 1807 para construir?',
      acceptedAnswer: { '@type': 'Answer', text: 'El Decreto 1807 de 2014 exige estudios de amenaza, vulnerabilidad y riesgo de inundación y movimientos en masa para predios en zonas de amenaza alta o media. Incluye modelación hidráulica (generalmente HEC-RAS), análisis geotécnico y mapas de zonificación. Son obligatorios para licencias urbanísticas y planes parciales en municipios colombianos.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye un diseño hidrosanitario NSR-10?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un diseño hidrosanitario conforme a la NSR-10 incluye: redes de agua potable (fría y caliente), redes de aguas residuales (sanitarias y pluviales), sistema contra incendios (rociadores, red húmeda/seca, detección) y memorias de cálculo hidráulico. BIC es la única firma del Eje Cafetero especializada exclusivamente en CI NSR-10 Capítulo J y K.' },
    },
    {
      '@type': 'Question',
      name: '¿Trabajan en todo Colombia desde Manizales?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. BIC opera 100% en modalidad remota desde Manizales para proyectos en todo el territorio colombiano. Hemos ejecutado proyectos en Bogotá, Medellín, Barranquilla, Bucaramanga, La Dorada, Santa Marta, Boyacá y los Llanos. Las visitas al sitio se cotizan por separado si el cliente las requiere.' },
    },
  ],
}

const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacto — BIC Bernal Ingeniería Consultores',
  url: BASE_URL + '/contacto',
  description: 'Contacta a BIC para consultoría en ingeniería hidráulica, hidrosanitaria y ambiental. Primera consulta sin costo. Respuesta en menos de 2 horas hábiles.',
  mainEntity: LOCAL_BUSINESS_SCHEMA,
}

function injectSchema(id: string, schema: object) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.setAttribute('type', 'application/ld+json')
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(schema)
}

function removeSchema(id: string) {
  const el = document.getElementById(id)
  if (el) el.remove()
}

interface PriceSpec {
  name: string
  minPrice: number
  maxPrice: number
  priceCurrency?: string
  description?: string
}

interface Props {
  type: 'home' | 'contact' | 'service'
  serviceName?: string
  serviceDesc?: string
  serviceUrl?: string
  faqItems?: Array<{ q: string; a: string }>
  priceSpecification?: PriceSpec[]
}

export default function SchemaMarkup({ type, serviceName, serviceDesc, serviceUrl, faqItems, priceSpecification }: Props) {
  useEffect(() => {
    // Always inject LocalBusiness on every page
    injectSchema('schema-local-business', LOCAL_BUSINESS_SCHEMA)

    if (type === 'home') {
      injectSchema('schema-faq', HOME_FAQ_SCHEMA)
    }

    if (type === 'contact') {
      injectSchema('schema-contact-page', CONTACT_SCHEMA)
    }

    if (type === 'service' && serviceName) {
      const offers = priceSpecification && priceSpecification.length > 0
        ? priceSpecification.map(ps => ({
            '@type': 'Offer',
            name: ps.name,
            priceCurrency: ps.priceCurrency || 'COP',
            priceSpecification: {
              '@type': 'PriceSpecification',
              name: ps.name,
              minPrice: ps.minPrice,
              maxPrice: ps.maxPrice,
              priceCurrency: ps.priceCurrency || 'COP',
              ...(ps.description ? { description: ps.description } : {}),
            },
          }))
        : undefined

      const serviceSchema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        description: serviceDesc || serviceName,
        url: serviceUrl ? BASE_URL + serviceUrl : BASE_URL,
        provider: {
          '@type': 'ProfessionalService',
          name: 'BIC Bernal Ingeniería Consultores',
          url: BASE_URL,
          telephone: '+573024778910',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Manizales',
            addressRegion: 'Caldas',
            addressCountry: 'CO',
          },
        },
        areaServed: { '@type': 'Country', name: 'Colombia' },
      }
      if (offers) serviceSchema.offers = offers
      injectSchema('schema-service', serviceSchema)

      if (faqItems && faqItems.length > 0) {
        const faqSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        }
        injectSchema('schema-faq', faqSchema)
      }
    }

    return () => {
      removeSchema('schema-local-business')
      removeSchema('schema-faq')
      removeSchema('schema-contact-page')
      removeSchema('schema-service')
    }
  }, [type, serviceName, serviceDesc, serviceUrl, priceSpecification])

  return null
}
