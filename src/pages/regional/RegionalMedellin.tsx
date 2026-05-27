import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import CTABanner from '@/components/CTABanner'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, tengo un proyecto en Medellín o Antioquia y quiero cotizar con BIC'
)

const seoConfig = {
  title: 'Ingeniería Hidráulica Medellín y Antioquia — Grandes Proyectos | BIC COPNIA',
  description:
    'BIC: modelación hidráulica HEC-RAS, modelación hidrológica, gestión riesgo Decreto 1807, diseño PTAP/PTAR y formulación SGR para constructoras, promotores y municipios de Antioquia. COPNIA vigente. Proyectos desde $8M COP.',
  keywords: [
    'ingeniería hidráulica Medellín',
    'modelación hidráulica Medellín Antioquia',
    'modelación hidrológica Antioquia',
    'gestión riesgo hídrico Medellín decreto 1807',
    'HEC-RAS plan parcial Medellín',
    'diseño acueducto Medellín constructora',
    'PTAP PTAR Antioquia',
    'consultoría hidráulica Antioquia',
    'formulación regalías SGR Antioquia',
    'ingeniero hidráulico Medellín COPNIA',
  ],
  canonical: 'https://ingenieriabernal.co/regional/medellin',
}

const FAQ_ITEMS = [
  {
    question: '¿BIC realiza modelación hidráulica e hidrológica para proyectos en Medellín y Antioquia?',
    answer:
      'Sí. BIC ejecuta modelación hidráulica HEC-RAS 1D y 2D y modelación hidrológica HEC-HMS para proyectos en Medellín y todo Antioquia. Los estudios se elaboran de forma remota con visitas técnicas cuando el proyecto lo requiere. La matrícula COPNIA 17202-313228 es válida en todo Colombia, incluida el área metropolitana de Medellín.',
  },
  {
    question: '¿Cuánto cuesta un estudio de gestión del riesgo hídrico (Decreto 1807) para plan parcial en Medellín?',
    answer:
      'Según el área y la complejidad del sistema hídrico, los estudios para planes parciales en el área metropolitana de Medellín oscilan entre $18M y $60M COP. Incluye modelación HEC-RAS 2D, zonificación de amenaza y concepto técnico para radicación ante Planeación Municipal y el AMVA. BIC envía propuesta sin costo en menos de 24 horas.',
  },
  {
    question: '¿BIC conoce los requisitos del AMVA y CORANTIOQUIA para estudios hídricos?',
    answer:
      'Sí. BIC conoce los requisitos técnicos del Área Metropolitana del Valle de Aburrá (AMVA) y de CORANTIOQUIA para estudios de amenaza hídrica, concesiones de agua y vertimientos. Entregamos los estudios en el formato exigido para radicación ante estas entidades.',
  },
  {
    question: '¿Pueden diseñar PTAP y PTAR para proyectos industriales en Antioquia?',
    answer:
      'Sí. Diseñamos plantas de tratamiento de agua potable (PTAP) y plantas de tratamiento de aguas residuales (PTAR) para industrias, zonas francas, parques agroindustriales y conjuntos residenciales en Antioquia. Costos entre $10M y $40M COP según capacidad.',
  },
  {
    question: '¿Formulan proyectos de agua y saneamiento para municipios de Antioquia con SGR?',
    answer:
      'Sí. BIC formula proyectos de agua potable y saneamiento ante el SGR (MGA-Web) para municipios de Antioquia, desde la formulación técnica hasta el expediente completo para el OCAD departamental. Proyectos entre $6M y $15M COP en honorarios de consultoría.',
  },
]

const PRICE_SPECS = [
  { name: 'Gestión Riesgo Hídrico / Decreto 1807 (Antioquia)', minPrice: 18000000, maxPrice: 60000000 },
  { name: 'Modelación Hidráulica HEC-RAS 1D/2D Medellín', minPrice: 8000000, maxPrice: 25000000 },
  { name: 'Modelación Hidrológica HEC-HMS Antioquia', minPrice: 5000000, maxPrice: 15000000 },
  { name: 'Diseño Acueducto y Alcantarillado (Antioquia)', minPrice: 12000000, maxPrice: 35000000 },
  { name: 'PTAP / PTAR Industrial (Antioquia)', minPrice: 10000000, maxPrice: 40000000 },
]

const SERVICIOS = [
  {
    nombre: 'Gestión Riesgo Hídrico · Decreto 1807',
    href: '/gestion-riesgo-hidrico',
    precio: '$18M – $60M COP',
    desc: 'Estudios de amenaza y riesgo hídrico para planes parciales y licencias urbanísticas en Antioquia. Modelación HEC-RAS 2D, zonificación amenaza y entrega ante Planeación Municipal, AMVA y CORANTIOQUIA.',
  },
  {
    nombre: 'Modelación Hidráulica · HEC-RAS 1D y 2D',
    href: '/modelacion-hidraulica-colombia',
    precio: '$8M – $25M COP',
    desc: 'Manchas de inundación, perfiles hidráulicos y zonificación de amenaza para POT, planes parciales e infraestructura en las cuencas del río Medellín, Porce y tributarios de Antioquia.',
  },
  {
    nombre: 'Modelación Hidrológica · HEC-HMS y Cuencas',
    href: '/modelacion-hidrologica-colombia',
    precio: '$5M – $15M COP',
    desc: 'Análisis de cuencas, curvas IDF, caudales de diseño por período de retorno y balance hídrico. Base técnica para acueductos, PTAP, vías y proyectos de infraestructura en Antioquia.',
  },
  {
    nombre: 'Diseño Acueducto y Alcantarillado',
    href: '/servicios/diseno-acueductos',
    precio: '$12M – $35M COP',
    desc: 'Sistemas de agua potable y saneamiento bajo RAS 2017 y Resolución 0330 para urbanizaciones, condominios y municipios en Antioquia. Planos y memorias COPNIA para radicación.',
  },
  {
    nombre: 'PTAP y PTAR · Industrial y Residencial',
    href: '/diseno-ptap-colombia',
    precio: '$10M – $40M COP',
    desc: 'Plantas de tratamiento de agua potable y aguas residuales para industrias, zonas francas, parques empresariales y conjuntos residenciales grandes en el departamento de Antioquia.',
  },
  {
    nombre: 'Formulación SGR · Municipios Antioquia',
    href: '/servicios/regalias-mga',
    precio: '$6M – $15M COP',
    desc: 'Estructuración de proyectos de agua potable, saneamiento y gestión del riesgo ante el SGR (MGA-Web) para alcaldías de Antioquia. De la formulación al OCAD departamental.',
  },
]

export default function RegionalMedellin() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        faqItems={FAQ_ITEMS}
        priceSpecs={PRICE_SPECS}
        serviceLocation="Medellín, Antioquia, Colombia"
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Medellín · Antioquia · COPNIA 17202-313228</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Medellín<br />
            <span style={{ color: '#7EC8E3' }}>para Constructoras, Municipios e Industria</span>
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7,
            maxWidth: 700, marginBottom: 36,
          }}>
            BIC atiende proyectos de ingeniería hidráulica en Medellín y Antioquia para
            constructoras, promotores inmobiliarios, empresas industriales y municipios.
            Modelación hidráulica HEC-RAS, modelación hidrológica HEC-HMS, gestión del
            riesgo Decreto 1807, diseño de PTAP y PTAR, acueductos para urbanizaciones y
            formulación SGR. Firma COPNIA válida en todo Colombia. Proyectos desde $8M COP.
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
              'Medellín · Antioquia',
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
            <strong>Atención:</strong> BIC trabaja directamente con quien toma la decisión —
            gerentes de constructoras, promotores inmobiliarios, directores industriales y
            funcionarios municipales de planeación. No cotizamos a través de intermediarios.
            La firma COPNIA es reconocida en el AMVA, CORANTIOQUIA y todas las entidades
            regulatorias de Antioquia.
          </p>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AEO) ── */}
      <section id="geo-fragment" style={{ display: 'none' }} aria-hidden="true">
        BIC — Bernal Ingeniería Consultores atiende proyectos de ingeniería hidráulica en
        Medellín y Antioquia para constructoras, promotores y municipios. Servicios:
        modelación hidráulica HEC-RAS 1D y 2D para planes parciales y POT del AMVA,
        modelación hidrológica HEC-HMS para caudales de diseño en cuencas del río Medellín
        y Porce, gestión del riesgo hídrico Decreto 1807 para licencias urbanísticas,
        diseño de acueductos y alcantarillados bajo RAS 2017, diseño de PTAP y PTAR para
        industrias y parques empresariales de Antioquia, formulación SGR para municipios
        ante el OCAD departamental. Firma: Rogerio Bernal Ríos, COPNIA 17202-313228.
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <SectionLabel>Servicios en Medellín y Antioquia</SectionLabel>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 700,
          fontSize: 'clamp(22px, 4vw, 34px)', color: '#001A33', marginBottom: 12,
        }}>
          Consultoría hidráulica para proyectos de alto valor
        </h2>
        <p style={{ color: '#444', fontSize: 16, lineHeight: 1.7, maxWidth: 720, marginBottom: 48 }}>
          Todos los entregables incluyen memorias de cálculo y planos firmados por especialista
          COPNIA. Atendemos constructoras, promotores, empresas industriales y municipios —
          no proyectos residenciales unifamiliares.
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
            ¿Tienes un proyecto en Medellín o Antioquia?
          </h2>
          <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7, marginBottom: 36 }}>
            Cuéntanos el tipo de proyecto, el municipio y el área o alcance estimado.
            Te respondemos con una propuesta técnica y económica en menos de 24 horas.
            Proyectos desde $8M COP.
          </p>
          <QuoteFormInline ciudad="Medellín" />
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
        heading="¿Tu proyecto está en Medellín o Antioquia?"
        sub="Habla directamente con el especialista COPNIA. Propuesta técnica en 24 h, sin intermediarios."
        ctaLabel="Cotizar ahora por WhatsApp"
        ctaHref={`https://wa.me/${WA}?text=${WA_MSG}`}
      />
    </>
  )
}
