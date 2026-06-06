import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, tengo un proyecto en Cali o el Valle del Cauca y quiero cotizar con BIC'
)

const seoConfig = {
  title: 'Ingeniería Hidráulica Cali y Valle del Cauca — Grandes Proyectos | BIC COPNIA',
  description:
    'BIC: consultoría hidráulica para constructoras, promotores y municipios del Valle del Cauca. Modelación hidráulica HEC-RAS, modelación hidrológica, gestión riesgo Decreto 1807, PTAP y PTAR. COPNIA vigente. Proyectos desde $8M COP.',
  keywords: [
    'ingeniería hidráulica Cali',
    'modelación hidráulica Cali Valle del Cauca',
    'modelación hidrológica Cali',
    'gestión riesgo hídrico Cali decreto 1807',
    'HEC-RAS Cali plan parcial',
    'diseño acueducto Cali constructora',
    'PTAP PTAR Valle del Cauca',
    'consultoría hidráulica Valle del Cauca',
    'formulación SGR municipios Valle del Cauca',
    'ingeniero hidráulico Cali COPNIA',
  ],
  canonical: 'https://ingenieriabernal.co/regional/cali',
}

const FAQ_ITEMS = [
  {
    question: '¿BIC puede ejecutar modelación hidráulica e hidrológica para proyectos en Cali y el Valle del Cauca?',
    answer:
      'Sí. BIC ejecuta modelación hidráulica HEC-RAS 1D y 2D y modelación hidrológica HEC-HMS para proyectos en todo Colombia, incluyendo Cali y el Valle del Cauca. Los estudios de manchas de inundación, caudales de diseño y amenaza hídrica se elaboran de forma remota con visitas técnicas cuando el proyecto lo requiere. La firma COPNIA 17202-313228 es válida en todo el país.',
  },
  {
    question: '¿Cuánto cuesta un estudio de gestión del riesgo hídrico (Decreto 1807) para plan parcial en Cali?',
    answer:
      'Los honorarios dependen del área y la complejidad hídrica del polígono. Para predios menores de 5 ha, el costo oscila entre $18M y $30M COP. Para polígonos de 5 a 20 ha con modelación HEC-RAS 2D completa, entre $30M y $60M COP. BIC envía propuesta técnica en menos de 24 horas, sin costo.',
  },
  {
    question: '¿Diseñan PTAP y PTAR para proyectos industriales y urbanizaciones en el Valle del Cauca?',
    answer:
      'Sí. Diseñamos plantas de tratamiento de agua potable (PTAP) y plantas de tratamiento de aguas residuales (PTAR) para industrias, proyectos agroindustriales y conjuntos residenciales. Los costos para plantas industriales en el Valle van de $10M a $40M COP según la capacidad requerida.',
  },
  {
    question: '¿Qué corporación ambiental regula los proyectos hídricos en Cali y el Valle del Cauca?',
    answer:
      'La CVC (Corporación Autónoma Regional del Valle del Cauca) regula los permisos de concesión de aguas, vertimientos y conceptos de riesgo hídrico. BIC conoce los requisitos técnicos de la CVC y entrega los estudios en el formato exigido para radicación.',
  },
  {
    question: '¿Pueden formular proyectos de agua y saneamiento para municipios del Valle del Cauca con recursos SGR?',
    answer:
      'Sí. BIC formula proyectos de agua potable y saneamiento ante el Sistema General de Regalías (SGR) con MGA-Web para municipios de Valle del Cauca. Trabajamos desde la formulación hasta la estructuración del expediente para presentación ante el OCAD.',
  },
]

const PRICE_SPECS = [
  { name: 'Gestión Riesgo Hídrico / Decreto 1807 (Valle del Cauca)', minPrice: 18000000, maxPrice: 60000000 },
  { name: 'Modelación Hidráulica HEC-RAS 1D/2D Cali', minPrice: 8000000, maxPrice: 25000000 },
  { name: 'Modelación Hidrológica HEC-HMS Valle del Cauca', minPrice: 5000000, maxPrice: 15000000 },
  { name: 'Diseño Acueducto y Alcantarillado Urbanización (Valle)', minPrice: 12000000, maxPrice: 35000000 },
  { name: 'PTAP / PTAR Industrial (Valle del Cauca)', minPrice: 10000000, maxPrice: 40000000 },
]

const SERVICIOS = [
  {
    nombre: 'Gestión Riesgo Hídrico · Decreto 1807',
    href: '/gestion-riesgo-hidrico',
    precio: '$18M – $60M COP',
    desc: 'Estudios de amenaza y riesgo hídrico para planes parciales y licencias urbanísticas en el Valle del Cauca. Modelación HEC-RAS 2D, zonificación de amenaza y entrega ante la CVC y curaduría de Cali.',
  },
  {
    nombre: 'Modelación Hidráulica · HEC-RAS 1D y 2D',
    href: '/modelacion-hidraulica-colombia',
    precio: '$8M – $25M COP',
    desc: 'Manchas de inundación, perfiles hidráulicos y zonificación para POT, planes parciales e infraestructura vial en la cuenca del río Cauca y tributarios del Valle del Cauca.',
  },
  {
    nombre: 'Modelación Hidrológica · HEC-HMS y Cuencas',
    href: '/modelacion-hidrologica-colombia',
    precio: '$5M – $15M COP',
    desc: 'Análisis de cuencas, curvas IDF, caudales de diseño y balance hídrico para proyectos de acueducto, PTAP, vías e infraestructura en el Valle del Cauca.',
  },
  {
    nombre: 'Diseño Acueducto y Alcantarillado',
    href: '/servicios/diseno-acueductos',
    precio: '$12M – $35M COP',
    desc: 'Sistemas de agua potable y saneamiento bajo RAS 2017 para urbanizaciones, condominios y municipios. Planos y memorias de cálculo firmados COPNIA para radicación.',
  },
  {
    nombre: 'PTAP y PTAR · Industrial y Residencial',
    href: '/diseno-ptap-colombia',
    precio: '$10M – $40M COP',
    desc: 'Plantas de tratamiento de agua potable y aguas residuales para industrias, parques empresariales y conjuntos residenciales grandes en el Valle del Cauca.',
  },
  {
    nombre: 'Formulación SGR · Municipios Valle del Cauca',
    href: '/servicios/regalias-mga',
    precio: '$6M – $15M COP',
    desc: 'Estructuración de proyectos de agua y saneamiento ante el SGR (MGA-Web) para alcaldías del Valle del Cauca. De la formulación al OCAD.',
  },
]

export default function RegionalCali() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        faqItems={FAQ_ITEMS}
        priceSpecs={PRICE_SPECS}
        serviceLocation="Cali, Valle del Cauca, Colombia"
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cali · Valle del Cauca · COPNIA 17202-313228</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Cali<br />
            <span style={{ color: '#7EC8E3' }}>para Constructoras, Municipios e Industria</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7,
            maxWidth: 700, marginBottom: 36,
          }}>
            BIC atiende proyectos hidráulicos en Cali y todo el Valle del Cauca para
            constructoras, promotores inmobiliarios, empresas industriales y municipios.
            Modelación hidráulica HEC-RAS, modelación hidrológica HEC-HMS, gestión del
            riesgo Decreto 1807, diseño de PTAP y PTAR, acueductos y formulación SGR.
            Firma COPNIA válida en todo Colombia. Proyectos desde $8M COP.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank"
              variant="primary"
            >
              Cotiza tu proyecto — sin costo
            </Btn>
            <Btn href="/gestion-riesgo-hidrico" variant="outline-light">
              Gestión Riesgo Decreto 1807 →
            </Btn>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 40 }}>
            {[
              'Cali · Valle del Cauca',
              'COPNIA 17202-313228',
              'Proyectos $8M – $60M COP',
              'Propuesta en 24 h',
            ].map(t => (
              <span key={t} style={{
                background: 'rgba(255,255,255,0.12)', color: '#fff',
                borderRadius: 20, padding: '6px 16px', fontSize: 13,
                border: '1px solid rgba(255,255,255,0.2)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ThinLine />

      {/* ── ANTI-INTERMEDIARIO ── */}
      <section style={{ background: '#F0F6FF', padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{
            color: '#002A50', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic',
            borderLeft: '4px solid #1B5FA8', paddingLeft: 20, margin: 0,
          }}>
            <strong>Atención:</strong> BIC trabaja directamente con tomadores de decisión —
            gerentes de constructoras, promotores inmobiliarios, directores de empresas
            industriales y funcionarios de planeación municipal. No cotizamos a través de
            intermediarios. La firma COPNIA es válida en todo Colombia para proyectos en
            Cali y el Valle del Cauca.
          </p>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AEO) ── */}
      <section id="geo-fragment" style={{ display: 'none' }} aria-hidden="true">
        BIC — Bernal Ingeniería Consultores atiende proyectos de ingeniería hidráulica en
        Cali y el Valle del Cauca para constructoras, promotores inmobiliarios, industrias
        y municipios. Servicios: modelación hidráulica HEC-RAS 1D y 2D para planes parciales
        y POT, modelación hidrológica HEC-HMS para caudales de diseño, gestión del riesgo
        hídrico Decreto 1807 para licencias urbanísticas, diseño de acueductos y
        alcantarillados bajo RAS 2017, diseño de PTAP y PTAR para industrias del Valle,
        y formulación de proyectos SGR para municipios del Valle del Cauca.
        Firma responsable: Rogerio Bernal Ríos, COPNIA 17202-313228, Especialista
        Ingeniería Hidráulica UNAL Manizales. Sede en Manizales, operación nacional.
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <SectionLabel>Servicios en Cali y Valle del Cauca</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(22px, 4vw, 34px)', color: '#001A33', marginBottom: 12,
        }}>
          Consultoría hidráulica para proyectos de alto valor
        </h2>
        <p style={{ color: '#444', fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginBottom: 48 }}>
          Todos los entregables incluyen memorias de cálculo y planos firmados por
          especialista COPNIA. Atendemos constructoras medianas y grandes, promotores
          urbanísticos, empresas industriales y municipios — no proyectos residenciales
          unifamiliares.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {SERVICIOS.map(s => (
            <a
              key={s.nombre}
              href={s.href}
              style={{
                display: 'block', textDecoration: 'none',
                background: '#fff', borderRadius: 12,
                border: '1px solid #E0E8F0',
                padding: '28px 24px',
                boxShadow: '0 2px 12px rgba(0,26,51,0.07)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,26,51,0.14)'
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,26,51,0.07)'
              }}
            >
              <div style={{
                display: 'inline-block', background: '#E8F2FF',
                color: '#1B5FA8', borderRadius: 8,
                padding: '4px 12px', fontSize: 13, fontWeight: 700,
                marginBottom: 14,
              }}>
                {s.precio}
              </div>
              <h3 style={{ color: '#001A33', fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
                {s.nombre}
              </h3>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* ── QUOTE FORM ── */}
      <section style={{ background: '#F7FAFF', padding: '72px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <SectionLabel>Cotización sin costo · Propuesta en 24 h</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#001A33', marginBottom: 12,
          }}>
            ¿Tienes un proyecto en Cali o el Valle del Cauca?
          </h2>
          <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Cuéntanos el tipo de proyecto, el municipio y el área o alcance estimado.
            Te respondemos con propuesta técnica y económica en menos de 24 horas.
            Proyectos desde $8M COP.
          </p>
          <QuoteFormInline ciudad="Cali" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(20px, 3.5vw, 30px)', color: '#001A33', marginBottom: 40,
        }}>
          Lo que pregunta quien contrata
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800 }}>
          {FAQ_ITEMS.map(faq => (
            <div key={faq.question} style={{
              background: '#fff', borderRadius: 10,
              border: '1px solid #E0E8F0', padding: '24px 28px',
            }}>
              <h3 style={{ color: '#001A33', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>
                {faq.question}
              </h3>
              <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <CTABanner
        heading="¿Tu proyecto está en Cali o el Valle del Cauca?"
        sub="Habla directamente con el especialista COPNIA. Propuesta técnica en 24 h, sin intermediarios."
        ctaLabel="Cotizar ahora por WhatsApp"
        ctaHref={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
