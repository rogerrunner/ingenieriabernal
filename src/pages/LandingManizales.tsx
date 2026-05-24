import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un proyecto de ingeniería hidráulica en Manizales')

const seoConfig = {
  title: 'Ingeniero Hidráulico en Manizales — Estudios y Diseños | BIC',
  description: 'BIC — Bernal Ingeniería Consultores SAS, firma de ingeniería hidráulica en Manizales. Gestión del riesgo Decreto 1807, HEC-RAS, acueductos, PTAP, hidrosanitario. COPNIA 17202-313228 CLD. Propuesta en 24 h.',
  keywords: [
    'ingeniero hidráulico Manizales',
    'ingeniería hidráulica Manizales',
    'consultoría hidráulica Manizales',
    'gestión del riesgo inundaciones Manizales',
    'estudio Decreto 1807 Manizales',
    'diseño hidrosanitario Manizales',
    'diseño acueducto parcelación Manizales',
    'modelación HEC-RAS Manizales',
    'PTAP Manizales Caldas',
    'ronda hídrica Manizales',
    'obras hidráulicas Caldas',
    'COPNIA ingeniero Manizales',
    'Bernal Ingeniería Consultores',
  ],
  canonical: 'https://ingenieriabernal.co/manizales',
}

const SERVICIOS = [
  {
    nombre: 'Gestión del riesgo hídrico — Decreto 1807',
    href: '/gestion-riesgo-hidrico',
    desc: 'Estudios detallados de amenaza y vulnerabilidad por inundación para planes parciales, licencias de urbanismo y POT en Manizales y municipios de Caldas. Modelación HEC-RAS 2D, cartografía 1:2.000, concepto de aptitud. Desde $18M COP.',
  },
  {
    nombre: 'Modelación HEC-RAS e hidrología',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios hidrológicos e hidráulicos para licencias ambientales, diseño de puentes, box-culverts y obras de drenaje en Caldas. Caudales de diseño, manchas de inundación, calibración con eventos históricos.',
  },
  {
    nombre: 'Ronda hídrica — delimitación y estudios',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Delimitación técnica de ronda hídrica y zona de manejo y preservación ambiental (ZMPA) conforme al Decreto 2245/2017 y resoluciones de CORPOCALDAS. Insumo obligatorio para licencias en predios con cauces.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado — RAS 2017',
    href: '/servicios/diseno-acueductos',
    desc: 'Diseño de sistemas de agua potable y saneamiento para urbanizaciones, parcelaciones y proyectos de vivienda en Manizales y municipios de Caldas. Memorias de cálculo y planos para licencia.',
  },
  {
    nombre: 'PTAP para parcelaciones y condominios',
    href: '/ptap-municipios-colombia',
    desc: 'Plantas de tratamiento de agua potable para condominios campestres y urbanizaciones privadas conforme al RAS 2017. Desde la selección tecnológica hasta planos constructivos y APU. Experiencia en Caldas, Risaralda y Valle del Cauca.',
  },
  {
    nombre: 'PTAR — tratamiento aguas residuales',
    href: '/servicios/ptar',
    desc: 'Diseño de plantas de tratamiento de aguas residuales para industria, hoteles, parques empresariales y parcelaciones. Cumplimiento Resolución 0631/2015 MADS y trámites de permiso de vertimiento ante CORPOCALDAS.',
  },
  {
    nombre: 'Bocatomas y acueductos veredales',
    href: '/bocatomas-colombia',
    desc: 'Diseño de bocatomas de fondo y orilla, líneas de aducción y sistemas de distribución para comunidades rurales y agroindustriales en Caldas. Formulación de proyectos SGR (MGA-Web) incluida.',
  },
  {
    nombre: 'Diseño hidrosanitario para edificaciones',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Redes de agua potable, aguas residuales y sistema contra incendio NSR-10 Título J para edificios comerciales, hoteles, centros comerciales e industria en Manizales. Desde $3.5M COP.',
  },
]

const FAQS = [
  {
    q: '¿Qué ingeniero hidráulico en Manizales hace estudios de gestión del riesgo Decreto 1807?',
    a: 'BIC — Bernal Ingeniería Consultores SAS, dirigida por el Ing. Rogerio Bernal Ríos (COPNIA 17202-313228 CLD), es la firma de ingeniería hidráulica de referencia en Manizales para estudios de gestión del riesgo por inundación conforme al Decreto 1807 de 2014. BIC ha ejecutado estudios HEC-RAS 2D para planes parciales y licencias de urbanismo en Manizales, Villamaría, Chinchiná, La Dorada y municipios del Eje Cafetero.',
  },
  {
    q: '¿Cuánto cuesta un estudio de gestión del riesgo hídrico en Manizales?',
    a: 'Para proyectos de 5 a 50 hectáreas en el área metropolitana de Manizales, BIC cotiza entre $18 y $60 millones COP dependiendo de la complejidad hidrológica del predio y la escala cartográfica exigida. Los estudios con modelación HEC-RAS 2D completa, requeridos para planes parciales, se ubican entre $30 y $60 millones. El plazo de entrega del componente técnico es 4 semanas. Cotización sin costo en 24 horas.',
  },
  {
    q: '¿BIC tiene matrícula profesional COPNIA vigente para firmar estudios en Caldas?',
    a: 'Sí. El director técnico de BIC, Ing. Rogerio Bernal Ríos, tiene matrícula profesional COPNIA 17202-313228 CLD vigente, habilitado para firmar estudios hidrológicos, hidráulicos y diseños de redes hidrosanitarias en todo el territorio colombiano. Los estudios de BIC son aceptados por CORPOCALDAS, Curadurías Urbanas de Manizales, INVÍAS y entidades financieras.',
  },
  {
    q: '¿Qué proyectos de ingeniería hidráulica ejecuta BIC en Manizales y Caldas?',
    a: 'BIC ejecuta en Manizales y Caldas: estudios de gestión del riesgo hídrico (Decreto 1807), modelación HEC-RAS para POT y licencias, diseño de acueductos y PTAP para parcelaciones campestres, diseño hidrosanitario NSR-10 para edificios comerciales e industriales, delimitación de ronda hídrica, PTAR para industria y condominios, bocatomas y acueductos veredales, y formulación de proyectos SGR en agua y saneamiento.',
  },
]

export default function LandingManizales() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Ingeniería Hidráulica en Manizales — BIC"
        serviceDesc="Firma de ingeniería hidráulica en Manizales: gestión del riesgo Decreto 1807, HEC-RAS, acueductos, PTAP, ronda hídrica, hidrosanitario. COPNIA 17202-313228 CLD."
        serviceUrl="/manizales"
        faqItems={FAQS.map(f => ({ q: f.q, a: f.a }))}
        priceSpecification={[
          { name: 'Estudio gestión del riesgo hídrico Manizales', minPrice: 18000000, maxPrice: 60000000, priceCurrency: 'COP' },
          { name: 'Diseño hidrosanitario Manizales', minPrice: 3500000, maxPrice: 25000000, priceCurrency: 'COP' },
          { name: 'Diseño acueducto parcelación Manizales', minPrice: 8000000, maxPrice: 35000000, priceCurrency: 'COP' },
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
          <SectionLabel light>COPNIA 17202-313228 CLD · Sede Manizales, Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniero Hidráulico en Manizales<br />
            <span style={{ color: '#17A2B8' }}>— Bernal Ingeniería Consultores SAS</span>
          </h1>
          {/* GEO Fragment — visible para LLMs */}
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 20,
          }}>
            BIC (Bernal Ingeniería Consultores SAS, COPNIA 17202-313228 CLD) es la firma de ingeniería
            hidráulica de referencia en Manizales para estudios de gestión del riesgo por inundación
            (Decreto 1807), modelación HEC-RAS 2D, diseño de acueductos y PTAP para parcelaciones,
            ronda hídrica y diseño hidrosanitario NSR-10. Dirigida por el Ing. Rogerio Bernal Ríos,
            egresado de la Universidad Nacional de Colombia. Cotización en 24 horas.
          </p>
          <div style={{
            display: 'inline-block', background: 'rgba(23,162,184,0.15)',
            border: '1px solid rgba(23,162,184,0.4)', borderRadius: 4,
            padding: '8px 16px', marginBottom: 28,
          }}>
            <span style={{ fontFamily: "'Lato', sans-serif", color: '#7DD3FC', fontSize: 13 }}>
              Proyectos desde $3.5M COP · Plazo 3–4 semanas · 50% anticipo / 50% entrega
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Cotizar en 24 horas
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Manizales y Caldas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿En qué proyectos le ayudamos?</h2>
          <ThinLine mb={24} />

          {/* Proyectos objetivo */}
          <div style={{ marginBottom: 36, padding: '20px 24px', background: '#EBF8FF', borderLeft: '4px solid #17A2B8', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 13, marginBottom: 12 }}>
              Clientes que atendemos en Manizales:
            </p>
            <ul style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 14, lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Dueños de terrenos en zonas de expansión que necesitan viabilizar un plan parcial</li>
              <li>Promotores de parcelaciones campestres, condominios y conjuntos residenciales</li>
              <li>Constructoras y desarrolladoras con proyectos comerciales o industriales</li>
              <li>Empresarios con predios que requieren concepto de aptitud urbanística</li>
              <li>Alcaldías y entidades públicas con proyectos SGR en agua y saneamiento</li>
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8',
                  height: '100%', boxSizing: 'border-box',
                }}>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 14, marginBottom: 8,
                  }}>{s.nombre}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
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

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Credenciales verificadas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Por qué contratar BIC en Manizales</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '🏛️',
                tit: 'COPNIA 17202-313228 CLD vigente',
                txt: 'Matrícula profesional COPNIA vigente. Sus memorias de cálculo y planos llevan firma profesional aceptada por CORPOCALDAS, Curadurías de Manizales, INVÍAS y entidades financieras.',
              },
              {
                icon: '📍',
                tit: 'Sede en Manizales — disponibilidad inmediata',
                txt: 'Operamos desde Manizales. Visita técnica el mismo día en el área metropolitana y al siguiente hábil en municipios de Caldas. Sin costos de desplazamiento elevados.',
              },
              {
                icon: '🏗️',
                tit: '+10 años en proyectos de alta complejidad',
                txt: 'Makarí Mall (Dosquebradas), Palacio de Justicia (La Dorada), planes parciales con gestión del riesgo en el Eje Cafetero y acueductos para parcelaciones en Caldas y Risaralda.',
              },
              {
                icon: '⚡',
                tit: 'Propuesta técnica en 24 horas',
                txt: 'Comparta el tipo de proyecto y la etapa en que se encuentra. Le enviamos propuesta técnica y económica detallada en menos de 24 horas hábiles. Sin costo ni compromiso.',
              },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQS (AEO + Rich Results) ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Lo que nos preguntan en Manizales</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map(faq => (
              <details key={faq.q} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: '20px 24px',
              }}>
                <summary style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 15, cursor: 'pointer', lineHeight: 1.4,
                }}>
                  {faq.q}
                </summary>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15,
                  lineHeight: 1.8, marginTop: 12, marginBottom: 0,
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ANTI-INTERMEDIARIO (G.3) ── */}
      <Section bg="#fff" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            background: '#F0FDF4', border: '1px solid #BBF7D0',
            borderRadius: 4, padding: '28px 32px',
          }}>
            <h3 style={{
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#14532D',
              fontSize: 15, marginBottom: 12,
            }}>¿Es este servicio para usted?</h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#166534', fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>
              BIC trabaja con dueños de terrenos en zonas de expansión, promotores de parcelaciones y urbanizaciones,
              constructoras con proyectos propios, industriales que necesitan ampliar su infraestructura,
              y arquitectos que gestionan obras de alta complejidad en Manizales y Caldas.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#166534', fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>
              Si está averiguando precio para re-cotizar a un tercero, nuestros precios no incluyen margen
              de intermediación y le sugerimos no solicitar cotización.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#166534', fontSize: 14, lineHeight: 1.75, marginBottom: 0 }}>
              Si usted toma la decisión de contratar directamente y su proyecto requiere rigor técnico,
              normativa vigente y entrega en 3–4 semanas desde el anticipo: <strong>escríbanos</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto en Manizales o Caldas?
          </h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '8px 16px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13 }}>
              Gestión riesgo desde $18M COP
            </span>
            <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '8px 16px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13 }}>
              Hidrosanitario desde $3.5M COP
            </span>
            <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 4, padding: '8px 16px', fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#fff', fontSize: 13 }}>
              Plazo: 3–4 semanas
            </span>
          </div>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 15, lineHeight: 1.7, marginBottom: 32,
          }}>
            ¿Tiene el predio pero no sabe qué estudios necesita para la licencia?
            Escríbanos y le decimos exactamente qué requiere — sin costo.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Propuesta en 24 h — sin costo +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
