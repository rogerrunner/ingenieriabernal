import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, tengo un proyecto de edificio comercial / hotel / centro comercial / planta industrial y necesito el diseño de redes hidrosanitarias para licencia de construcción. ¿Pueden cotizarlo?')

const seoConfig = {
  title: 'Redes Hidrosanitarias para Edificios Comerciales e Industriales — NSR-10 | BIC',
  description: 'BIC diseña redes hidrosanitarias para edificios comerciales, hoteles, centros comerciales y plantas industriales en Colombia. NSR-10, RAS 2017, NTC 1500. Planos y memorias firmadas COPNIA 17202-313228 CLD para licencia de construcción. Propuesta en 24 horas.',
  keywords: [
    'diseño hidrosanitario edificio comercial Colombia',
    'redes hidrosanitarias hotel Colombia',
    'hidrosanitario centro comercial Colombia NSR-10',
    'diseño hidrosanitario planta industrial Colombia',
    'redes hidrosanitarias licencia construcción NSR-10',
    'redes hidrosanitarias Colombia',
    'diseño redes hidrosanitarias',
    'diseño hidrosanitario edificios',
    'memoria hidrosanitaria licencia construcción',
    'hidrosanitario NSR-10',
    'diseño hidrosanitario comercial',
    'redes hidrosanitarias industriales',
    'diseño hidrosanitario constructoras',
    'planos hidrosanitarios COPNIA',
    'diseño hidrosanitario Manizales',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/redes-hidrosanitarias',
}

const FAQ_REDES = [
  {
    q: '¿Cuánto demora el diseño de redes hidrosanitarias?',
    a: 'El plazo depende de la complejidad del proyecto: una vivienda unifamiliar o local comercial se entrega en 1 a 2 semanas; un edificio de 5 a 10 pisos requiere 2 a 4 semanas incluyendo memorias completas y planos constructivos. BIC confirma el plazo exacto en la propuesta técnica, que envía sin costo en 24 horas.',
  },
  {
    q: '¿El diseño incluye firma del plano para la curaduría?',
    a: 'Sí. Todos los planos y memorias de cálculo que entrega BIC van firmados y sellados con tarjeta COPNIA vigente (matrícula 17202-313228 CLD activa) del Ing. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental de la Universidad Nacional. La firma COPNIA es obligatoria para el trámite de licencia de construcción ante cualquier curaduría en Colombia.',
  },
  {
    q: '¿Qué norma regula el diseño hidrosanitario de edificaciones en Colombia?',
    a: 'El diseño hidrosanitario de edificaciones se rige principalmente por la NTC 1500 (Código Colombiano de Fontanería), el RAS 2017 (Resolución 0330/2017) para sistemas de agua potable, y la NSR-10 Títulos I y K para instalaciones internas y sistemas contra incendios. Las curadurías urbanas exigen que las memorias estén firmadas por un ingeniero con tarjeta COPNIA vigente.',
  },
  {
    q: '¿Cuándo es obligatorio el sistema contra incendios en un edificio en Colombia?',
    a: 'Según el NSR-10 Capítulo K, el sistema de protección contra incendios es obligatorio en edificios con altura mayor de 12 metros (aprox. 4 pisos o más) con uso de ocupación residencial colectiva; edificios de comercio o servicio con área mayor a 500 m²; edificios de uso industrial; locales de reunión pública con capacidad mayor a 50 personas; y parqueaderos cubiertos con más de 30 cupos.',
  },
  {
    q: '¿Es obligatorio un especialista para firmar la memoria hidrosanitaria?',
    a: 'Sí. La Ley 400 de 1997 y el Decreto 945 de 2017 (que adopta la NSR-10) exigen que las memorias de diseño de instalaciones hidráulicas estén firmadas por un ingeniero con tarjeta profesional COPNIA vigente. Las curadurías urbanas rechazan expedientes de licencia que no cumplan este requisito. BIC entrega toda la documentación firmada y sellada con matrícula COPNIA 17202-313228.',
  },
  {
    q: '¿Qué documentos entrega el diseño hidrosanitario para licencia de construcción?',
    a: 'La entrega incluye: planos isométricos de red de agua fría y caliente con diámetros y cotas; planos de red de aguas residuales y aguas lluvias en cada nivel; memoria de cálculo con método Hunter, presiones, caudales y verificación de velocidades; especificaciones técnicas de materiales; detalles de aparatos sanitarios y puntos de consumo. Todo firmado y sellado con tarjeta COPNIA vigente.',
  },
]

const QUE_SON = [
  {
    icon: '💧',
    tipo: 'Red de suministro (agua potable)',
    desc: 'Sistema de agua fría y agua caliente desde la acometida del acueducto municipal hasta cada punto de consumo del edificio. Incluye medidor, tanque de almacenamiento, sistema de presurización si aplica, y la red de distribución interna (lavamanos, sanitarios, duchas, lavaplatos).',
    norma: 'NTC 1500 · RAS 2017 · Res. 0330/2017',
  },
  {
    icon: '🚿',
    tipo: 'Red de aguas residuales domésticas',
    desc: 'Recolecta las aguas negras (sanitarios y orinales) y aguas grises (lavamanos, duchas, lavaplatos) y las conduce al colector público de alcantarillado o al sistema de tratamiento en sitio. Diseño de ramales, bajantes, ventilación y cámaras de inspección.',
    norma: 'NTC 1500 · RAS 2017 · Decreto 1076/2015',
  },
  {
    icon: '🌧️',
    tipo: 'Red de aguas lluvias (alcantarillado predial)',
    desc: 'Recolecta el agua de lluvia de cubiertas, terrazas y zonas duras. Diseño de bajantes, canales, sumideros y colectores pluviales con análisis hidrológico usando curvas IDF del IDEAM para el municipio del proyecto.',
    norma: 'NTC 1500 · Manual INVIAS Drenaje · Curvas IDF IDEAM',
  },
  {
    icon: '🔥',
    tipo: 'Sistema contra incendio (CI) — NSR-10 Título K',
    desc: 'Red húmeda con gabinetes, rociadores automáticos (sprinklers NFPA 13), tanque de reserva y bomba de incendio. Obligatorio según NSR-10 para edificios de cierta altura y uso. BIC diseña el sistema hidráulico completo con cálculo de la bomba jockey y bomba principal.',
    norma: 'NSR-10 Cap. K · NFPA 13 · NFPA 14 · NSR-10 Título J',
  },
]

const CUANDO_NECESITAS = [
  {
    caso: 'Licencia de construcción',
    desc: 'Las curadurías urbanas en Colombia exigen memorias de cálculo hidrosanitarias firmadas por especialista COPNIA como requisito para expedir la licencia de construcción de cualquier edificación de más de 1 piso.',
  },
  {
    caso: 'Proyectos multifamiliares y comerciales',
    desc: 'Edificios de apartamentos, conjuntos cerrados, centros comerciales y edificios de oficinas requieren diseño hidrosanitario completo con modelación de presiones y caudales simultáneos.',
  },
  {
    caso: 'Hospitales, clínicas y centros educativos',
    desc: 'Los equipamientos de salud y educación tienen requisitos especiales de dotación y calidad del agua (NTC especiales) que requieren diseño especializado y verificación adicional ante entidades de control.',
  },
  {
    caso: 'Bodegas, parques industriales y plantas',
    desc: 'Las naves industriales con área mayor a 500 m² requieren sistema contra incendios (CI) obligatorio según NSR-10 Capítulo K. BIC diseña tanto el CI como todas las redes sanitarias del proyecto.',
  },
]

const CONTENIDO_DISENO = [
  { entregable: 'Planos de redes', detalle: 'Agua fría, agua caliente, aguas negras y aguas lluvias — en planta por piso e isometrías completas en AutoCAD DWG y PDF' },
  { entregable: 'Memorias de cálculo', detalle: 'Diámetros, velocidades y presiones verificadas en todos los puntos del sistema (método Hunter, Hazen-Williams)' },
  { entregable: 'Especificaciones técnicas', detalle: 'Materiales (PVC, CPVC, PPR, hierro galvanizado), accesorios, válvulas y equipos de bombeo' },
  { entregable: 'Presupuesto de instalación (APU)', detalle: 'Análisis de precios unitarios por actividad, lista de materiales y resumen de costos por sistema' },
  { entregable: 'Gestión ante curaduría o ESP', detalle: 'BIC adapta el expediente al formato específico de la curaduría del municipio y gestiona la viabilidad de conexión ante la ESP local' },
]

const PRECIOS_REDES = [
  {
    tipo: 'Edificio comercial u hotel (5–15 pisos)',
    rango: '$12M – $28M COP',
    detalle: 'Todos los sistemas (AP, ACS, AR, AL) con isometrías completas, memorias Hunter/Hazen-Williams y CI NSR-10 si aplica. Entrega en 3–5 semanas.',
  },
  {
    tipo: 'Centro comercial o planta industrial',
    rango: '$20M – $50M COP',
    detalle: 'Redes completas + sistema CI obligatorio NSR-10 Capítulo K. Incluye diseño de bomba jockey y bomba principal. Entrega en 4–8 semanas.',
  },
  {
    tipo: 'Edificio residencial 5–10 pisos',
    rango: '$6M – $15M COP',
    detalle: 'Todos los sistemas (AP, AR, AL) con isometrías y memorias completas. Entrega en 2–3 semanas.',
  },
]

const INCLUYE = [
  { icon: '🚿', titulo: 'Redes de agua fría y agua caliente', desc: 'Diseño de la red de distribución interna de agua potable fría y caliente. Cálculo de caudales simultáneos (método Hunter), diámetros, presiones en cada punto de consumo y selección de materiales (PVC, CPVC, PPR). Cumplimiento del RAS 2017 Título B.' },
  { icon: '🏗️', titulo: 'Red de aguas residuales domésticas', desc: 'Diseño de la red de desagüe de aparatos sanitarios, trampas, sifones y columnas de ventilación. Cálculo por unidades de descarga (UD), diámetros de ramales, bajantes y colectores de piso. Cumplimiento NSR-10 Título I.' },
  { icon: '🌧️', titulo: 'Red de aguas lluvias y drenaje superficial', desc: 'Cálculo de caudales pluviales por intensidad de diseño local (curvas IDF IDEAM). Diseño de canales, canaletas, bajantes exteriores, tanques de almacenamiento o reutilización de aguas lluvias.' },
  { icon: '♻️', titulo: 'Sistemas de reutilización y ahorro de agua', desc: 'Diseño de sistemas de recolección de aguas lluvias para riego, lavado y descarga de sanitarios. Sistemas de agua caliente solar o por calentadores de paso. Soluciones de eficiencia hídrica para edificios sostenibles.' },
  { icon: '📐', titulo: 'Planos y memorias para licencia de construcción', desc: 'Elaboración de planos hidráulicos (isométricos, plantas, cortes) y memorias de cálculo en formato requerido por la curaduría urbana o entidad territorial para trámite de licencia de construcción.' },
  { icon: '🔍', titulo: 'Revisión y optimización de diseños existentes', desc: 'Auditoría técnica de redes hidrosanitarias diseñadas por terceros. Identificación de deficiencias, incompatibilidades normativas y propuesta de corrección o mejora antes del inicio de obra.' },
]

const PARA_QUIEN = [
  { tipo: 'Promotores de edificios comerciales y hoteles', desc: 'Edificios de 4 o más pisos con uso comercial, hotelero o de servicios. La licencia de construcción exige memorias hidrosanitarias firmadas por especialista COPNIA. BIC entrega planos y memorias listos para curaduría.' },
  { tipo: 'Desarrolladores de centros comerciales', desc: 'Centros comerciales, galerías y nodos comerciales con área mayor a 500 m². Exigen sistema contra incendios NSR-10 Capítulo K adicional al hidrosanitario. BIC diseña ambos en un solo contrato.' },
  { tipo: 'Empresas con plantas industriales y bodegas', desc: 'Plantas de producción, parques industriales y naves logísticas que requieren redes especiales de agua industrial, sistemas de tratamiento de efluentes y CI obligatorio según NSR-10.' },
  { tipo: 'Constructoras y promotores inmobiliarios', desc: 'Proyectos de vivienda multifamiliar, conjuntos cerrados y torres de apartamentos. Diseño completo con isometrías y memorias por cada sistema.' },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño de Redes de Aguas Lluvias para Cubiertas y Colegios',
  description: 'Diseño de redes de aguas lluvias para cubiertas, colegios y edificaciones en Colombia. NSR-10, RAS 2017. Manizales y Eje Cafetero.',
  url: 'https://ingenieriabernal.co/servicios/redes-hidrosanitarias',
  serviceType: 'Diseño Redes Aguas Lluvias y Hidrosanitarias',
  areaServed: ['Colombia', 'Eje Cafetero', 'Manizales', 'Caldas', 'Pereira', 'Armenia'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

export default function ServicioRedesHidrosanitarias() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-redes-hidrosanitarias'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-redes-hidrosanitarias')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Redes Hidrosanitarias para Edificios Comerciales e Industriales — NSR-10 | BIC" />

      <CTABanner service="Diseño de Redes Hidrosanitarias NSR-10" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Redes Hidrosanitarias para Edificaciones"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/redes-hidrosanitarias"
        faqItems={FAQ_REDES}
        priceSpecification={[
          { name: 'Hidrosanitario edificio pequeño (hasta 4 pisos / local comercial)', minPrice: 3500000, maxPrice: 8000000, priceCurrency: 'COP', description: 'Incluye planos de agua fría, agua caliente, aguas residuales, aguas lluvias y memoria de cálculo firmada COPNIA' },
          { name: 'Hidrosanitario edificio mediano (5–12 pisos / hotel / C. comercial)', minPrice: 8000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'NSR-10, RAS 2017, NTC 1500 — con sistema contra incendios si aplica' },
          { name: 'Hidrosanitario planta industrial / gran proyecto', minPrice: 12000000, maxPrice: 25000000, priceCurrency: 'COP', description: 'Incluye redes de proceso, suministro industrial, aguas residuales industriales y coordinación con PTARI' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Redes Hidrosanitarias para Edificios Comerciales<br />
            <span style={{ color: '#17A2B8' }}>Hoteles, Centros Comerciales y Plantas Industriales</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC diseña redes hidrosanitarias para grandes proyectos privados en Colombia: edificios comerciales de más de 4 pisos, hoteles, centros comerciales y plantas industriales. Diseño de redes hidrosanitarias para licencia de construcción conforme a NSR-10 Título I y K, RAS 2017 y NTC 1500. Planos isométricos en AutoCAD y memorias de cálculo firmadas por especialista con COPNIA 17202-313228 CLD y 10 años de experiencia — aceptados por cualquier curaduría urbana de Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Cotizar diseño hidrosanitario
            </Btn>
            <Btn variant="outline" href="/memorias-hidrosanitarias-colombia" dark>
              Memorias para curaduría
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['NSR-10 Título I · K', 'RAS 2017', 'NTC 1500', 'NFPA 13 · 14', 'COPNIA', 'AutoCAD DWG'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── GEO FRAGMENT (AI citation target) ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes hidrosanitarias para edificios comerciales, hoteles, centros comerciales y plantas industriales en Colombia, conforme a NSR-10 Títulos I y K, RAS 2017 y NTC 1500. Honorarios de referencia: desde $3,5 millones COP para locales y edificios pequeños hasta $25 millones para grandes proyectos industriales. Planos y memorias firmadas COPNIA 17202-313228 CLD para licencia de construcción. Sede Manizales — proyectos en todo Colombia. Propuesta en 24 horas sin costo: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── QUÉ SON ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Definición técnica</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué son las redes hidrosanitarias?</h2>
          <ThinLine mb={16} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.75, maxWidth: 760, marginBottom: 40 }}>
            Las redes hidrosanitarias son los sistemas de tuberías, accesorios y equipos que garantizan
            el suministro de agua potable y la evacuación segura de aguas residuales y pluviales en una
            edificación. Son la infraestructura invisible que hace habitable cualquier construcción.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {QUE_SON.map((s) => (
              <div key={s.tipo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 6,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{s.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, marginBottom: 14,
                }}>{s.desc}</p>
                <div style={{ background: '#F0F7FF', borderRadius: 4, padding: '7px 12px' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 11 }}>NORMA: </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 12 }}>{s.norma}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CUÁNDO NECESITAS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Casos de aplicación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Cuándo necesitas diseño profesional de redes hidrosanitarias?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {CUANDO_NECESITAS.map((c) => (
              <div key={c.caso} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '4px solid #17A2B8', borderRadius: '0 6px 6px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{c.caso}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTENIDO DEL DISEÑO BIC ── */}
      <Section bg="#F0F7FF" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Contenido del diseño BIC</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {CONTENIDO_DISENO.map((it) => (
              <div key={it.entregable} style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: 20, alignItems: 'flex-start',
                background: '#fff', borderRadius: 6, padding: '16px 22px', border: '1px solid #D1E9F6',
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 13, margin: 0,
                }}>{it.entregable}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{it.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── QUÉ INCLUYE (alcance detallado) ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el diseño de redes hidrosanitarias?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INCLUYE.map((item) => (
              <div key={item.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{item.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS 2026 ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Inversión</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Precios orientativos 2026</h2>
          <ThinLine mb={12} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 15, lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
            Los valores son aproximados para proyectos típicos en Colombia en 2026. El precio definitivo
            depende del número de pisos, la tipología del proyecto y si requiere sistema contra incendios.
            BIC envía propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {PRECIOS_REDES.map((p, i) => (
              <div key={p.tipo} style={{
                background: i === 1 ? 'linear-gradient(135deg, #002A50, #003B6F)' : '#F8FAFC',
                border: i === 1 ? 'none' : '1px solid #E2E8F0',
                borderRadius: 8, padding: 28,
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                  color: i === 1 ? '#7FDBEA' : '#17A2B8', fontSize: 13, margin: '0 0 8px',
                }}>{p.tipo}</p>
                <p style={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  color: i === 1 ? '#fff' : '#001A33', fontSize: 28, margin: '0 0 12px',
                }}>{p.rango}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  color: i === 1 ? 'rgba(255,255,255,0.8)' : '#475569',
                  fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{p.detalle}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, background: '#F0F7FF', borderRadius: 8, padding: '16px 22px', border: '1px solid #D1E9F6' }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#003B6F', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              <strong>Sistema contra incendios (CI):</strong> el diseño del CI según NSR-10 Título K tiene un costo
              adicional de $4M a $10M COP según la complejidad. BIC lo cotiza por separado cuando aplica.
              La firma COPNIA para todos los planos y memorias está siempre incluida.
            </p>
          </div>
        </div>
      </Section>

      {/* ── PARA QUIÉN ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para quién es este servicio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PARA_QUIEN.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🏆', titulo: 'Proyectos emblemáticos comprobados', desc: 'Diseño hidrosanitario del Makarí Mall en Dosquebradas, Risaralda, y múltiples proyectos residenciales y comerciales en el Eje Cafetero.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Diseños correctamente dimensionados y aceptados por curadurías urbanas. Matrícula COPNIA 17202-313228 CLD activa.' },
              { icon: '⚡', titulo: 'Entrega ágil con trato directo', desc: 'Comunicación directa con el director del proyecto. Presupuesto en 24 horas. Planos y memorias en los plazos pactados sin intermediarios.' },
              { icon: '🌐', titulo: 'Cobertura en toda Colombia', desc: 'Servicios para constructoras en Bogotá, Medellín, Cali, Bucaramanga, Barranquilla y todas las capitales con desplazamientos según el alcance.' },
            ].map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas sobre diseño hidrosanitario</h2>
          <ThinLine mb={40} />
          {FAQ_REDES.map(({ q, a }) => (
            <details key={q} style={{
              borderBottom: '1px solid #E2E8F0', paddingBottom: 20, marginBottom: 20,
            }}>
              <summary style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                fontSize: 15, cursor: 'pointer', paddingBottom: 12, listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                {q}
              </summary>
              <p style={{
                fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15,
                lineHeight: 1.75, marginTop: 8,
              }}>{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/redes-hidrosanitarias-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Redes Hidrosanitarias en Colombia: Diseño según NSR-10 y RAS</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/costos-obras-hidraulicas-colombia-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Costos de Obras Hidráulicas en Colombia 2026: APU y Tendencias</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/nsr-10-sistemas-contra-incendios" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>NSR-10 Capítulos J y K: Todo sobre Sistemas Contra Incendios</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/memorias-hidrosanitarias-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Memorias de cálculo hidrosanitarias para licencia de construcción</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/contra-incendios-nsr10" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Sistemas CI NSR-10 Títulos J y K — rociadores NFPA 13 e hidrantes NFPA 14</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto municipal y veredal conforme RAS 2017</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de redes hidrosanitarias y sistemas CI</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/aguas-lluvias-manizales" style={{ flex: '1 1 220px', background: '#EEF6FB', border: '1px solid #17A2B8', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>¿Proyecto en Manizales o Caldas? Ver página especializada →</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Aguas lluvias Manizales →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section bg="#eef6fb" style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            También disponible en:
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/aguas-lluvias-manizales" style={{
              display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
              borderRadius: 8, padding: '12px 18px', color: '#003B6F',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Diseño de aguas lluvias en Manizales →
            </a>
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO G.3 ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>constructoras, promotores, arquitectos y empresas industriales</strong> que necesitan el diseño hidrosanitario para avanzar su proyecto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              Los precios publicados en este sitio son los que BIC cobra al contratante directo. Si usted es quien decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si está averiguando precios para re-cotizar a un tercero, este servicio probablemente no es el correcto para esa gestión. BIC prioriza relaciones directas con el decisor del proyecto.
            </p>
          </div>
        </div>
      </Section>
      {/* ── FORMULARIO COTIZACIÓN INLINE ── */}
      <Section>
        <QuoteFormInline />
      </Section>



      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Su proyecto necesita diseño hidrosanitario?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de edificación, el número de pisos y la ubicación del proyecto.
            Le enviamos presupuesto y plazo de entrega en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
