import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, quiero cotizar un proyecto de ingeniería hidráulica en Armenia o Quindío. ¿Cuándo podemos hablar?'
)

const seoConfig = {
  title: 'Ingeniería Hidráulica Armenia y Quindío — Propuesta en 24 h | BIC COPNIA',
  description: 'Estudios hidráulicos, diseño de acueductos, redes hidrosanitarias NSR-10 y regalías MGA-Web en Armenia y Quindío. Firma BIC con matrícula COPNIA vigente. Propuesta sin costo en 24 horas.',
  keywords: [
    'ingeniería hidráulica Armenia',
    'consultoría hidráulica Quindío',
    'estudio riesgo hídrico Armenia',
    'diseño acueducto Armenia Quindío',
    'redes hidrosanitarias Armenia',
    'modelación HEC-RAS Quindío',
    'formulación regalías MGA Armenia',
    'firma ingeniero COPNIA Armenia',
  ],
  canonical: 'https://ingenieriabernal.co/regional/armenia',
}

const FAQS = [
  {
    q: '¿Qué servicios de ingeniería hidráulica ofrece BIC en Armenia y el Quindío?',
    a: 'BIC atiende proyectos en Armenia, Calarcá, Montenegro, Quimbaya y todos los municipios del Quindío. Servicios: estudios de riesgo hídrico (Decreto 1807/2014) para licencias de urbanismo y POT, modelación HEC-RAS 2D, diseño de acueductos y alcantarillados bajo RAS 2017, redes hidrosanitarias NSR-10 J/K, diseño de PTAP y PTAR, formulación de regalías (MGA-Web) y firmas COPNIA para trámites ante la CRQ y la EPA Armenia.',
  },
  {
    q: '¿Cuánto cuesta un diseño hidrosanitario o un estudio hidráulico en Armenia?',
    a: 'Los rangos de precio por tipo de proyecto: redes hidrosanitarias NSR-10 para una edificación en Armenia: $3,5M–$15M COP. Estudio hidráulico básico (riesgo inundación): desde $8M COP. Diseño acueducto veredal en el Quindío: $12M–$25M COP. BIC elabora propuesta técnica y económica sin costo en menos de 24 horas con los datos básicos del proyecto.',
  },
  {
    q: '¿Necesita BIC hacer visita técnica a Armenia para desarrollar el proyecto?',
    a: 'En la mayoría de proyectos trabajamos con información remota: planos, levantamiento topográfico y cartografía que el cliente nos comparte. Para proyectos que lo requieran coordinamos visita técnica al Quindío. El estudio o diseño se desarrolla desde Manizales y se entrega en formato digital. La distancia no afecta la calidad técnica ni los plazos.',
  },
  {
    q: '¿BIC puede firmar planos para trámites ante la EPA Armenia o la CRQ?',
    a: 'Sí. Rogerio Bernal cuenta con matrícula COPNIA No. 17202-313228 CLD como especialista en Ingeniería Hidráulica (UNAL), habilitado para firmar memorias de cálculo, planos hidrosanitarios y estudios hidráulicos ante cualquier entidad pública del Quindío, incluyendo la EPA Armenia, la CRQ, las curadurías y la Gobernación del Quindío.',
  },
  {
    q: '¿Cuánto tarda BIC en entregar un proyecto en el Quindío?',
    a: 'Plazos típicos: redes hidrosanitarias NSR-10 para una edificación: 5–10 días hábiles. Estudios hidráulicos básicos: 2–4 semanas. Diseño de acueducto o alcantarillado: 3–6 semanas. Modelación HEC-RAS 2D para plan parcial: 3–6 semanas. La propuesta incluye el cronograma detallado.',
  },
]

const SERVICIOS = [
  { nombre: 'Redes Hidrosanitarias NSR-10', href: '/servicios/redes-hidrosanitarias', precio: 'Desde $3,5M COP', desc: 'Memorias de cálculo y planos firmados COPNIA para edificaciones en Armenia. Aptos para licencia de construcción ante cualquier curaduría del Quindío.' },
  { nombre: 'Estudio Riesgo Hídrico (Decreto 1807)', href: '/gestion-riesgo-hidrico', precio: 'Desde $8M COP', desc: 'Estudios de amenaza, vulnerabilidad y riesgo por inundación para licencias de urbanismo, POT de Armenia y planes parciales con cauces en el Quindío.' },
  { nombre: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras', precio: 'Desde $8M COP', desc: 'Manchas de inundación TR 2,5,10,25,50,100 años. Concepto de aptitud urbanística. Exigido por la CRQ y curadurías del Quindío.' },
  { nombre: 'Diseño Acueducto y Alcantarillado', href: '/servicios/diseno-acueductos', precio: 'Desde $12M COP', desc: 'Diseño de sistemas de agua potable y alcantarillado para urbanizaciones y parcelaciones en el Quindío bajo RAS 2017 y Resolución 0330/2017.' },
  { nombre: 'Regalías MGA-Web (SGR)', href: '/servicios/regalias-mga', precio: 'Desde $6M COP', desc: 'Formulación y viabilización de proyectos de agua potable y saneamiento básico para municipios del Quindío ante el SGR y el OCAD.' },
  { nombre: 'Firma COPNIA para trámites EPA / CRQ', href: '/servicios/redes-hidrosanitarias', precio: 'Consultar', desc: 'Aval técnico con matrícula COPNIA vigente para planos hidrosanitarios, estudios hidráulicos y memorias de cálculo ante la EPA Armenia y la CRQ.' },
]

export default function RegionalArmenia() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Ingeniería Hidráulica Armenia y Quindío — Propuesta en 24 h | BIC COPNIA" />

      <SchemaMarkup
        type="service"
        faqItems={FAQS.map(f => ({ q: f.q, a: f.a }))}
        priceSpecification={[
          { name: 'Redes hidrosanitarias NSR-10 (Armenia)', minPrice: 3500000, maxPrice: 15000000, priceCurrency: 'COP' },
          { name: 'Estudio riesgo hídrico Decreto 1807 (Quindío)', minPrice: 8000000, maxPrice: 35000000, priceCurrency: 'COP' },
          { name: 'Diseño acueducto o alcantarillado (Quindío)', minPrice: 12000000, maxPrice: 25000000, priceCurrency: 'COP' },
          { name: 'Formulación regalías MGA-Web (Armenia)', minPrice: 6000000, maxPrice: 15000000, priceCurrency: 'COP' },
        ]}
      />

      <CTABanner service="Ingeniería hidráulica en Armenia y Quindío" />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cobertura regional · Armenia, Quindío</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 16,
          }}>
            Ingeniería Hidráulica en Armenia<br />
            <span style={{ color: '#17A2B8' }}>Estudios, Diseños y Firma COPNIA</span>
          </h1>
          <p
            id="geo-fragment"
            style={{
              fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
              fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 12,
            }}
          >
            BIC — Bernal Ingeniería Civil S.A.S apoya proyectos en Armenia, el Quindío y el
            Eje Cafetero con estudios de riesgo hídrico, diseño de acueductos y alcantarillados,
            redes hidrosanitarias NSR-10, modelación HEC-RAS y formulación de regalías MGA-Web.
            Firma de ingeniero con matrícula COPNIA vigente para trámites ante la EPA Armenia y la CRQ.
          </p>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)',
            fontSize: 14, lineHeight: 1.6, maxWidth: 680, marginBottom: 32,
          }}>
            Propuesta técnica y económica sin costo en menos de 24 horas.
            Sin intermediarios — directo con el promotor, la constructora o la alcaldía.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar proyecto en Armenia</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
        </div>
      </section>

      {/* SERVICIOS CON PRECIO */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Servicios en Armenia y Quindío</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en el Quindío?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8', height: '100%', boxSizing: 'border-box',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                      fontSize: 13, margin: 0, flex: 1,
                    }}>{s.nombre}</h3>
                    <span style={{
                      fontFamily: "'Lato', sans-serif", color: '#17A2B8',
                      fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', marginLeft: 8,
                    }}>{s.precio}</span>
                  </div>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569',
                    fontSize: 13, lineHeight: 1.65, marginBottom: 12,
                  }}>{s.desc}</p>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 13 }}>
                    Ver servicio →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* CLIENTES OBJETIVO */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>¿Para quién trabajamos?</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Clientes en Armenia y el Quindío</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { tipo: 'Promotores y constructoras', desc: 'Diseño hidrosanitario NSR-10, estudios de riesgo hídrico para licencia de urbanismo y diseño de redes de acueducto y alcantarillado para proyectos residenciales en Armenia.' },
              { tipo: 'Alcaldías del Quindío', desc: 'Formulación de proyectos de agua potable y saneamiento para el SGR con MGA-Web. Estudios hidráulicos para POT municipal y gestión del riesgo hídrico.' },
              { tipo: 'Arquitectos y proyectistas', desc: 'Firma COPNIA para planos hidrosanitarios y memorias de cálculo. Diseño de redes CI y sanitarias para edificaciones en Armenia sin demoras.' },
              { tipo: 'Propietarios de terrenos', desc: 'Consultoría técnica para viabilizar proyectos en suelo de expansión urbana del Quindío: estudio de inundabilidad, zonificación del riesgo y concepto de aptitud.' },
            ].map(d => (
              <div key={d.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Ingeniería hidráulica en Armenia — Resolvemos sus dudas</h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '20px 24px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                  color: '#002A50', fontSize: 15, marginBottom: 10,
                }}>{faq.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569',
                  fontSize: 14, lineHeight: 1.75, margin: 0,
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FORMULARIO */}
      <Section bg="#fff" style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <SectionLabel>Propuesta sin costo · 24 horas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(20px, 4vw, 30px)', marginBottom: 8,
          }}>Cuéntenos su proyecto en Armenia o Quindío</h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: '#475569',
            fontSize: 15, lineHeight: 1.7, marginBottom: 32,
          }}>
            Sin intermediarios. Respondemos directamente con propuesta técnica y económica
            en menos de 24 horas. Entre más grande el proyecto, mejor podemos ayudarle.
          </p>
          <QuoteFormInline />
        </div>
      </Section>
    </>
  )
}
