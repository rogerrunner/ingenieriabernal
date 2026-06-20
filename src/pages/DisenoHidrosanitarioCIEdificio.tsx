import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito el diseño hidrosanitario completo con sistema contra incendio para un edificio. ¿Pueden cotizar?')

const seoConfig = {
  title: 'Diseño Hidrosanitario + Sistema Contra Incendio Edificio Colombia — NSR-10 | BIC COPNIA',
  description: '¿Necesita el diseño hidrosanitario completo con sistema contra incendio NSR-10 para su edificio en Colombia? BIC diseña AP, AR, AL y CI (rociadores NFPA 13, gabinetes, detección) en un solo paquete. Firma COPNIA. Propuesta en 24 h.',
  canonical: 'https://ingenieriabernal.co/diseno-hidrosanitario-sistema-contra-incendio-edificio-colombia',
  noindex: false,
  keywords: [
    'diseño hidrosanitario sistema contra incendio edificio colombia',
    'diseño hidrosanitario y CI NSR-10 edificio',
    'sistema contra incendio edificio NSR-10 Título J',
    'redes hidrosanitarias más contra incendio edificio multifamiliar colombia',
    'diseño instalaciones hidráulicas edificio colombia',
    'NFPA 13 rociadores edificio colombia firma COPNIA',
    'memoria hidráulica contra incendio edificio licencia construcción',
    'diseño red CI NSR-10 hotel edificio comercial colombia',
  ],
}

const FAQ = [
  {
    q: '¿Qué incluye el diseño hidrosanitario completo con sistema contra incendio para un edificio?',
    a: 'El paquete completo BIC incluye: (1) red de agua potable interna (AP) con cálculo de presiones, caudales y dimensionamiento de tuberías; (2) red de aguas residuales domésticas (AR) por gravedad con trampa de grasas si aplica; (3) red de aguas lluvias (AL) con bajantes y sumideros; (4) sistema contra incendio NSR-10 Título K y NFPA 13: rociadores automáticos, gabinetes manguera tipo 1 o 2, tanque de reserva CI, bomba principal y bomba jockey, detector de flujo y panel de control; (5) memorias de cálculo hidráulico y planos en AutoCAD, firmados por Ing. COPNIA 17202-313228 CLD para radicación en curaduría.',
  },
  {
    q: '¿Cuánto cuesta el diseño hidrosanitario con sistema contra incendio para un edificio en Colombia?',
    a: 'Los rangos de costo según tipo de edificio son: edificio residencial multifamiliar (4-8 pisos, 20-60 apartamentos): $8M–$18M COP; edificio residencial alto (9-20 pisos): $15M–$30M COP; hotel o edificio comercial (4-15 pisos): $12M–$28M COP; centro comercial o bodega con rociadores NFPA 13 de alta densidad: $25M–$55M COP; clínica u hospital con CI húmedo y seco: $30M–$65M COP. El costo depende del número de pisos, área construida, tipo de ocupación y complejidad del sistema CI requerido. BIC entrega cotización en 24 horas sin costo.',
  },
  {
    q: '¿Cuándo es obligatorio el sistema contra incendio NSR-10 en un edificio?',
    a: 'Según NSR-10 Título K, el sistema contra incendio activo (rociadores automáticos y/o red húmeda) es obligatorio cuando el edificio tiene: área total construida mayor a 1.000 m², más de 100 ocupantes simultáneos, o usos de alta peligrosidad (cocinas industriales, bodegas, auditorios, hospitales, hoteles de 4+ pisos). Los gabinetes manuales tipo I (con manguera de 1½") son obligatorios en edificios residenciales de 5 o más pisos o más de 3.000 m². BIC evalúa cuál sistema aplica a su proyecto antes de cotizar.',
  },
  {
    q: '¿BIC diseña el sistema CI bajo NFPA 13 o bajo NSR-10 Título K?',
    a: 'BIC diseña bajo NSR-10 Título K (obligatorio en Colombia) que adopta los lineamientos de NFPA 13 (rociadores automáticos), NFPA 14 (red de mangueras) y NFPA 20 (bombas contraincendios). Para proyectos con inversionistas extranjeros o certificaciones LEED/EDGE, BIC puede preparar el diseño con cumplimiento doble NSR-10 / NFPA a solicitud del cliente.',
  },
  {
    q: '¿Cuánto tiempo tarda BIC en entregar el diseño hidrosanitario y CI de un edificio?',
    a: 'El plazo estándar desde la recepción de planos arquitectónicos definitivos en AutoCAD es: edificio hasta 10 pisos: 15-25 días hábiles; edificio de 10-20 pisos o con sistema CI complejo: 25-40 días hábiles. BIC puede acelerar el plazo con entrega por etapas (primero AP+AR+AL, luego CI) si el cliente requiere radicar en curaduría por partes. Todos los documentos llevan firma COPNIA y sello del ingeniero responsable.',
  },
  {
    q: '¿Qué empresa hace el diseño hidrosanitario con CI para edificios en el Eje Cafetero?',
    a: 'En el Eje Cafetero (Caldas, Risaralda, Quindío), BIC — Bernal Ingeniería Consultores es la firma especializada en diseño hidrosanitario más sistema contra incendio para edificios. Con sede en Manizales y cobertura en Pereira, Armenia, Dosquebradas y municipios del Eje Cafetero. Director: Ing. Rogerio Bernal Ríos, COPNIA 17202-313228 CLD. BIC opera además en Bogotá, Medellín, Cali y todo Colombia en modalidad remota. Contacto: +57 302 477 8910.',
  },
]

const SERVICIOS = [
  {
    ico: '🚰',
    titulo: 'Red Agua Potable (AP)',
    desc: 'Dimensionamiento de tuberías, presiones, tanques de almacenamiento y bombas de presurización. Conforme a NSR-10 Título J y RAS 2017.',
  },
  {
    ico: '🔄',
    titulo: 'Red Aguas Residuales (AR)',
    desc: 'Colectores por gravedad, bajantes, ventilaciones, trampa de grasas y conexión al alcantarillado del operador local. RAS Título D.',
  },
  {
    ico: '🌧️',
    titulo: 'Red Aguas Lluvias (AL)',
    desc: 'Captación de cubiertas y zonas duras: bajantes, canaletas, sumideros. Cálculo de curvas IDF y caudales por nivel.',
  },
  {
    ico: '🔥',
    titulo: 'Sistema Contra Incendio (CI)',
    desc: 'Rociadores NFPA 13, gabinetes tipo I/II, tanque reserva CI, bomba principal + jockey, detección y control. NSR-10 Título K.',
  },
]

const PRECIOS = [
  { tipo: 'Edificio residencial 4-8 pisos', rango: '$8M – $18M COP' },
  { tipo: 'Edificio residencial 9-20 pisos', rango: '$15M – $30M COP' },
  { tipo: 'Hotel o comercio 4-15 pisos', rango: '$12M – $28M COP' },
  { tipo: 'Centro comercial / bodega NFPA 13', rango: '$25M – $55M COP' },
  { tipo: 'Clínica / hospital CI húmedo + seco', rango: '$30M – $65M COP' },
]

export default function DisenoHidrosanitarioCIEdificio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Diseño Hidrosanitario con Sistema Contra Incendio para Edificios — Colombia"
        serviceDesc="Diseño de redes AP, AR, AL y sistema contra incendio NSR-10/NFPA 13 para edificios residenciales, hoteles y comercios en Colombia. Firma COPNIA 17202-313228. Manizales, Pereira, Armenia y todo Colombia."
        serviceUrl="/diseno-hidrosanitario-sistema-contra-incendio-edificio-colombia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Edificio residencial 4-8 pisos', minPrice: 8000000, maxPrice: 18000000 },
          { name: 'Edificio residencial 9-20 pisos', minPrice: 15000000, maxPrice: 30000000 },
          { name: 'Hotel o edificio comercial 4-15 pisos', minPrice: 12000000, maxPrice: 28000000 },
          { name: 'Centro comercial / bodega NFPA 13', minPrice: 25000000, maxPrice: 55000000 },
          { name: 'Clínica u hospital CI húmedo y seco', minPrice: 30000000, maxPrice: 65000000 },
        ]}
      />

      <BlueprintBg>
        <Section>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '80px 24px 60px' }}>
            <SectionLabel>Edificios — Paquete Completo</SectionLabel>
            <h1 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Diseño Hidrosanitario + Sistema Contra Incendio<br />
              <span style={{ color: 'var(--accent)' }}>para Edificios en Colombia</span>
            </h1>
            <p style={{ fontSize: 18, maxWidth: 660, marginBottom: 32, opacity: 0.85 }}>
              AP · AR · AL · CI en un solo paquete. Memorias de cálculo y planos AutoCAD firmados COPNIA para licencia de construcción. Propuesta en 24 horas.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener">
                Cotizar ahora — WhatsApp
              </Btn>
              <Tag>COPNIA 17202-313228</Tag>
              <Tag>NSR-10 Título J + K</Tag>
              <Tag>NFPA 13 / 14 / 20</Tag>
            </div>

            <ThinLine />

            <div style={{ margin: '48px 0' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>¿Qué incluye el paquete?</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                {SERVICIOS.map(s => (
                  <div key={s.titulo} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '20px 18px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{s.ico}</div>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>{s.titulo}</div>
                    <div style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <ThinLine />

            <div style={{ margin: '48px 0' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Tarifas orientativas</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {PRECIOS.map(p => (
                  <div key={p.tipo} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: 'rgba(255,255,255,0.05)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontWeight: 500 }}>{p.tipo}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{p.rango}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, opacity: 0.6, marginTop: 12 }}>Precios dependen de número de pisos, área construida y complejidad del CI. Cotización exacta gratuita en 24 h.</p>
            </div>

            <ThinLine />

            <div style={{ margin: '48px 0' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Preguntas frecuentes</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {FAQ.map((f, i) => (
                  <div key={i} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 18 }}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>{f.q}</div>
                    <div style={{ fontSize: 15, opacity: 0.85, lineHeight: 1.6 }}>{f.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <ThinLine />

            <div style={{ margin: '48px 0' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Solicite cotización gratuita</h2>
              <p style={{ opacity: 0.8, marginBottom: 28 }}>Adjunte planos arquitectónicos (AutoCAD o PDF) y número de pisos. Respuesta en menos de 24 horas hábiles.</p>
              <QuoteFormInline service="diseno-hidrosanitario-ci-edificio" />
            </div>
          </div>
        </Section>
      </BlueprintBg>

      <CTABanner service="Diseño Hidrosanitario + Sistema Contra Incendio para Edificios" />
    </>
  )
}
