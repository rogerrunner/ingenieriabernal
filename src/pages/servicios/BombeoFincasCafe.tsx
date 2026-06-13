import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar un sistema de bombeo de agua para finca cafetera en Caldas. ¿Pueden enviarme una propuesta técnica?')

const seoConfig = {
  title: 'Sistemas de Bombeo para Fincas Cafeteras | Caldas · Eje Cafetero | BIC',
  description: 'Diseño de sistemas de bombeo para fincas cafeteras en Caldas: Viterbo, Anserma, Riosucio, Supía, Chinchiná, Santuario. Selección de bombas, cálculo hidráulico, beneficiaderos, riego. COPNIA.',
  keywords: [
    'sistema de bombeo finca café Caldas',
    'bomba agua finca cafetera Caldas',
    'diseño hidráulico bombeo finca',
    'sistema bombeo Viterbo Caldas',
    'sistema bombeo Anserma Caldas',
    'sistema bombeo Riosucio Caldas',
    'sistema bombeo Chinchina Caldas',
    'bomba centrifuga finca cafetera',
    'diseño bomba agua beneficiadero café',
    'sistema riego finca cafetera Caldas',
    'bombeo agua potable finca rural',
    'golpe de ariete tuberia finca',
    'seleccion bomba agua Colombia',
    'sistema bomba solar finca café',
    'bombeo agua occidente Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/bombeo-fincas-cafe',
}

const SERVICIOS = [
  {
    icon: '⚙️',
    titulo: 'Selección y dimensionamiento de bombas',
    desc: 'Cálculo de la curva del sistema (pérdidas por fricción, altura estática y pérdidas menores) para determinar el punto de operación ideal. Selección de bomba centrífuga, periférica, sumergible o de eje vertical según la fuente y la topografía. Verificación de NPSH disponible para evitar cavitación en fincas de alta montaña.',
  },
  {
    icon: '🏔️',
    titulo: 'Sistemas de impulsión en terrenos montañosos',
    desc: 'Diseño de líneas de impulsión para fincas en pendiente, incluyendo cálculo de caudales de diseño, selección de diámetros de tubería PVC o HDPE, verificación de presiones máximas y diseño de cámaras quiebragradientes cuando la presión supera los límites de la tubería.',
  },
  {
    icon: '🌊',
    titulo: 'Control de golpe de ariete',
    desc: 'Análisis del transitorio hidráulico (golpe de ariete) en tuberías de impulsión largas o con cierre rápido de válvulas. Diseño de dispositivos de protección: válvulas de alivio, cámaras de aire, volantes de inercia y selección de tuberías con presión de trabajo adecuada para fincas cafeteras en occidente de Caldas.',
  },
  {
    icon: '☀️',
    titulo: 'Sistemas de bombeo solar (off-grid)',
    desc: 'Diseño de sistemas de bombeo fotovoltaico para fincas sin conexión a la red eléctrica o con costos de energía elevados. Cálculo del panel solar, controlador MPPT, bomba DC sumergible y tanque de almacenamiento diurno. Solución rentable para fincas en zonas remotas del occidente de Caldas.',
  },
  {
    icon: '☕',
    titulo: 'Bombeo para beneficiaderos de café',
    desc: 'Diseño del sistema hidráulico del beneficiadero: suministro de agua para despulpado, fermentación y lavado, con cálculo del caudal horario según la capacidad de proceso. Diseño del sistema de recirculación para reducir consumo de agua y cumplir los límites de CORPOCALDAS para vertimientos del proceso cafetero.',
  },
  {
    icon: '🌱',
    titulo: 'Sistemas de riego tecnificado',
    desc: 'Diseño de sistemas de riego por goteo, microaspersión o aspersión para café, plátano, aguacate y cultivos de pan coger en fincas del Eje Cafetero. Cálculo de demanda hídrica de los cultivos, diseño de cabezal de riego, laterales y goteros, y selección de la bomba de presurización.',
  },
]

const MUNICIPIOS = [
  { nombre: 'Viterbo', desc: 'Occidente de Caldas. Sistemas de bombeo para fincas cafeteras en terrenos quebrados del valle del río Risaralda.' },
  { nombre: 'Anserma', desc: 'Bombeo en relieve montañoso del centro-occidente. Diseños con control de golpe de ariete en conducciones largas.' },
  { nombre: 'Riosucio · Supía', desc: 'Fincas cafeteras y mineras en zona alta. Sistemas solares y eléctricos para predios alejados de la red.' },
  { nombre: 'Chinchiná', desc: 'Zona tecnificada de café. Diseños para riego tecnificado y beneficiaderos de alta capacidad.' },
  { nombre: 'Santuario · La Celia (Risaralda)', desc: 'Municipios limítrofes con Caldas. Fincas con topografía escarpada y requerimientos de bombeo multi-etapa.' },
  { nombre: 'Manizales · Villamaría', desc: 'Área metropolitana de Manizales. Sistemas de bombeo para fincas de recreo y urbanizaciones rurales.' },
]

const FAQ = [
  {
    q: '¿Cómo se dimensiona una bomba de agua para una finca cafetera?',
    a: 'Se sigue un proceso de tres pasos: (1) Cálculo de la curva del sistema, que incluye la altura estática total (diferencia de nivel entre la fuente y el punto más alto), más las pérdidas por fricción en la tubería calculadas con la ecuación de Hazen-Williams o Darcy-Weisbach; (2) Determinación del caudal de diseño según el número de usuarios, las actividades del beneficiadero y el sistema de riego; (3) Selección del tipo de bomba (centrífuga, periférica, sumergible) cuya curva característica H-Q cruza la curva del sistema en el punto de operación deseado.',
  },
  {
    q: '¿Qué es el golpe de ariete y por qué es importante en fincas de montaña?',
    a: 'El golpe de ariete es un fenómeno de transitorio hidráulico que ocurre cuando el flujo se interrumpe bruscamente (cierre de válvula, corte de energía de la bomba), generando una onda de presión que puede superar varias veces la presión de trabajo normal de la tubería. En fincas cafeteras de Caldas, donde las conducciones son largas y el desnivel es alto, el golpe de ariete puede causar roturas de tuberías y daños en la bomba. BIC calcula el valor máximo de la sobrepresión y diseña los dispositivos de protección necesarios.',
  },
  {
    q: '¿Conviene un sistema de bombeo solar para una finca cafetera en Caldas?',
    a: 'Depende del perfil de consumo y la disponibilidad de red eléctrica. Los sistemas solares tienen un mayor costo inicial pero cero costo operativo de energía, lo que los hace rentables en 3-5 años para fincas con buen recurso solar (zona cafetera de Caldas: 4.5-5.5 horas pico solar/día). Si la demanda de agua es continua en las 24 horas o durante la cosecha nocturna, se recomienda combinar el sistema solar con un tanque de almacenamiento suficiente para cubrir el consumo nocturno. BIC hace el análisis costo-beneficio en cada caso.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un sistema de bombeo para una finca en Caldas?',
    a: 'Un diseño de sistema de bombeo para finca cafetera (selección de bomba, cálculo de tubería de impulsión, análisis de golpe de ariete y especificación de equipos) cuesta entre $2 y $5 millones de pesos según la complejidad del sistema. Si se incluye el diseño del sistema de riego o del beneficiadero, el costo aumenta proporcionalmente. Enviamos propuesta detallada con plazo de entrega en menos de 24 horas.',
  },
]

export default function BombeoFincasCafe() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Sistemas de Bombeo para Fincas Cafeteras<br />
            <span style={{ color: '#17A2B8' }}>Caldas · Risaralda · Eje Cafetero</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas de bombeo de agua para fincas
            cafeteras en Caldas y el Eje Cafetero: selección y dimensionamiento de bombas,
            impulsión en terrenos montañosos, control de golpe de ariete, bombeo solar,
            beneficiaderos de café y sistemas de riego tecnificado. Atendemos Viterbo,
            Anserma, Riosucio, Supía, Chinchiná, Santuario y toda la región cafetera. COPNIA.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Propuesta en 24 h — sin costo
            </Btn>
            <Btn variant="outline" href="/acueducto-rural-caldas" dark>
              Acueducto rural en Caldas
            </Btn>
          </div>
        </div>
      </section>

      {/* TAGS */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Zona:</span>
          {['Viterbo', 'Anserma', 'Riosucio', 'Supía', 'Chinchiná', 'Santuario', 'Caldas', 'Eje Cafetero'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* SERVICIOS */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diseño de sistemas de bombeo para el Eje Cafetero</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((s) => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{s.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* MUNICIPIOS */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Zonas que atendemos en Caldas y el Eje Cafetero</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {MUNICIPIOS.map((m) => (
              <div key={m.nombre} style={{
                padding: 20, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 6,
                }}>{m.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.55,
                }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Bombeo de agua en fincas cafeteras</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7,
                  margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LINKS */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/acueducto-rural-caldas" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Acueducto Rural y Veredal en Caldas — Fincas Cafeteras</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/diseno-hidraulico-eje-cafetero" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño Hidráulico Eje Cafetero — Caldas, Viterbo, Anserma</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/viterbo-occidente-caldas" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Ingeniería Hidráulica en Viterbo y Occidente de Caldas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver página →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── FORMULARIO DE COTIZACIÓN INLINE ── */}
      <Section>
        <QuoteFormInline />
      </Section>

      {/* CTA */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Su finca necesita un sistema de bombeo en el Eje Cafetero?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Comparta la ubicación de la finca, la fuente de agua, el desnivel aproximado
            y el uso (doméstico, beneficiadero, riego). Le enviamos propuesta técnica
            con presupuesto en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', borderRadius: 8, fontWeight: 700, fontSize: 16 }}
          >
            📱 Propuesta en 24 h — sin costo
          </Btn>
        </div>
      </Section>
    </>
  )
}
