import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño Hidráulico en Pereira')

const seoConfig = {
  title: 'Diseño Hidráulico en Pereira | BIC Ingeniería',
  description: 'Diseño hidráulico en Pereira: redes de acueducto, alcantarillado, canales. Cumplimos RAS 2000 y normativa CARDER. +57 302 477 8910',
  keywords: [
    'diseño hidráulico Pereira',
    'diseño acueducto Pereira',
    'diseño alcantarillado Pereira',
    'CARDER diseño hidráulico',
    'RAS 2000 Pereira',
    'diseño canales Risaralda',
    'redes hidrosanitarias Pereira',
    'ingeniería hidráulica Pereira',
    'EPANET Pereira',
    'estructuras hidráulicas Risaralda',
    'BIC ingeniería Pereira',
    'diseño drenaje pluvial Pereira',
  ],
  canonical: 'https://www.ingenieriabernal.co/diseno-hidraulico-pereira/',
}

const SERVICIOS = [
  {
    icon: '🚰',
    titulo: 'Diseño de redes de acueducto',
    desc: 'Modelación y diseño de redes de distribución de agua potable con EPANET. Análisis de presiones, caudales y velocidades. Dimensionamiento de tuberías, válvulas reguladoras de presión, hidrantes y tanques de distribución según el RAS 2000 Título B y la Resolución 0330/2017. Memorias de cálculo y planos en AutoCAD.',
  },
  {
    icon: '🔧',
    titulo: 'Diseño de alcantarillado sanitario y pluvial',
    desc: 'Diseño de redes de alcantarillado combinado, separado y semiunitario. Cálculo hidráulico de colectores, pozos de inspección, sumideros y obras de alivio. Diseño de estructuras de conexión con fuentes receptoras y criterios de autodepuración según el RAS 2000 Título D.',
  },
  {
    icon: '🌊',
    titulo: 'Diseño de canales y obras de encauzamiento',
    desc: 'Diseño hidráulico de canales de sección trapezoidal, rectangular y circular en tierra, concreto y roca. Control de erosión y sedimentación. Obras de protección de márgenes, muros de contención y corrección de corrientes en el contexto de la regulación de CARDER para cuencas de Risaralda.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de estructuras hidráulicas especiales',
    desc: 'Diseño de vertederos, compuertas, gradas, saltos, disipadores de energía, alcantarillas de cajón y alcantarillas de tubo. Análisis de cavitación, aireación y transporte de sedimentos para estructuras de alta velocidad. Integración con el diseño estructural.',
  },
  {
    icon: '💧',
    titulo: 'Redes hidrosanitarias para edificaciones',
    desc: 'Diseño de redes internas de agua fría, agua caliente, aguas residuales y aguas lluvias para edificios residenciales, comerciales e industriales en Pereira. Cumplimiento de la NSR-10 Título H y el RAS 2000. Memorias de cálculo y planos para licencia de construcción en las curadurías de Pereira.',
  },
  {
    icon: '🚒',
    titulo: 'Sistemas contra incendio',
    desc: 'Diseño de sistemas de protección contra incendio NSR-10 Títulos J y K para edificaciones en Pereira: redes de rociadores automáticos, gabinetes, BIE, hidrantes y siamesas. Memorias de cálculo NFPA 13 y NFPA 14 para licencias de construcción en Risaralda.',
  },
]

const NORMATIVA = [
  { norma: 'CARDER — Corporación Autónoma Regional de Risaralda', desc: 'Autoridad ambiental que regula las intervenciones en cauces, rondas hídricas y zonas de protección en Pereira y el departamento de Risaralda. El diseño hidráulico en Pereira debe cumplir los lineamientos de CARDER para concesiones de agua, permiso de vertimientos y obras en cauce.' },
  { norma: 'RAS 2000 / Resolución 0330/2017', desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Establece las especificaciones de diseño, materiales y construcción de los sistemas de acueducto y alcantarillado en Colombia.' },
  { norma: 'NSR-10 Título H e I', desc: 'Norma Sismo Resistente que regula el diseño de instalaciones hidrosanitarias (Título H) y sistemas contra incendio (Título I) en edificaciones. Pereira, como ciudad de amenaza sísmica alta, aplica los espectros de diseño sísmico definidos por el estudio de microzonificación del Eje Cafetero.' },
  { norma: 'POT de Pereira', desc: 'El Plan de Ordenamiento Territorial de Pereira define las determinantes de gestión del riesgo hídrico, los retiros a cauces y las condiciones para el desarrollo urbano en zonas próximas a los ríos Otún, Consotá y sus tributarios.' },
]

const SOFTWARE = [
  { nombre: 'EPANET', desc: 'Modelación de redes de distribución de agua potable. Análisis en estado estacionario y en período extendido. Calibración de la red con datos de campo.' },
  { nombre: 'AutoCAD / Civil 3D', desc: 'Elaboración de planos de diseño para trámites de licencia en las curadurías de Pereira. Modelación 3D del terreno para diseño de redes enterradas.' },
  { nombre: 'HEC-RAS / QGIS', desc: 'Modelación hidráulica de canales y verificación de capacidad de estructuras. Procesamiento cartográfico de cuencas y redes de drenaje.' },
  { nombre: 'SewerCAD / SWMM', desc: 'Modelación de redes de alcantarillado pluvial y sanitario. Análisis de la respuesta de la red frente a eventos de lluvia de diseño.' },
]

const PROYECTOS_TIPO = [
  { tipo: 'Urbanización residencial', desc: 'Diseño completo de redes de acueducto, alcantarillado sanitario y pluvial para planes de vivienda en Pereira y los municipios de Risaralda. Incluye conexión a las redes matrices y trámite ante AGUAS Y AGUAS de Pereira.' },
  { tipo: 'Vías y obras de infraestructura', desc: 'Diseño de obras de drenaje transversal (alcantarillas, box culverts) y longitudinal (cunetas, colectores) para vías municipales y departamentales en Risaralda. Cumplimiento del Manual de Drenaje del INVIAS.' },
  { tipo: 'Proyectos de expansión del sistema de alcantarillado', desc: 'Extensión de redes colectoras y diseño de estructuras de conexión a los interceptores existentes de la CARDER y la ESP de Pereira.' },
  { tipo: 'Plantas de tratamiento de aguas residuales', desc: 'Diseño hidráulico y sanitario de PTAR para municipios de Risaralda, con tratamiento primario, secundario y disposición final según los parámetros de la Resolución 631/2015 del MADS.' },
]

const FAQ = [
  {
    q: '¿Qué es el diseño hidráulico y por qué lo necesito en Pereira?',
    a: 'El diseño hidráulico es la ingeniería que define las dimensiones, materiales y especificaciones de las redes y estructuras que conducen, almacenan o tratan el agua. En Pereira, toda construcción que requiera licencia de construcción ante las curadurías debe presentar planos hidráulicos y sanitarios elaborados por un profesional competente. Además, los proyectos de urbanización y loteo deben diseñar las redes públicas de acueducto y alcantarillado para su entrega a la ESP local.',
  },
  {
    q: '¿Qué permisos de CARDER necesito para un proyecto hidráulico en Pereira?',
    a: 'CARDER es la autoridad ambiental en Risaralda. Los proyectos que requieren permisos ante CARDER incluyen: a) concesión de agua para captaciones de fuentes superficiales o subterráneas; b) permiso de vertimientos para descarga de aguas residuales en cuerpos de agua; c) permiso de ocupación de cauce para obras en el lecho o margen de ríos y quebradas; d) licencia ambiental para proyectos de mayor impacto. BIC tiene experiencia en la preparación de los expedientes técnicos para estos trámites.',
  },
  {
    q: '¿Cuánto cuesta el diseño hidráulico en Pereira?',
    a: 'El costo depende de la escala del proyecto, la complejidad de las redes y el número de planos requeridos. Para un diseño hidrosanitario de una vivienda unifamiliar, el rango está entre $1.200.000 y $2.500.000 COP. Para un proyecto de urbanización con redes públicas de acueducto y alcantarillado, el costo es proporcional al número de lotes y la longitud de las redes. BIC envía cotización detallada en menos de 24 horas tras recibir los planos del proyecto.',
  },
  {
    q: '¿Los planos de BIC son aceptados por las curadurías de Pereira?',
    a: 'Sí. Los planos hidráulicos de BIC son elaborados por ingenieros con matrícula COPNIA vigente y cumplen los requisitos exigidos por las curadurías primera y segunda de Pereira para el trámite de licencias de construcción, urbanismo y subdivisión. Los planos se entregan en formato DWG y PDF con firmas profesionales y número de matrícula.',
  },
  {
    q: '¿BIC puede hacer el diseño hidrosanitario y también el diseño estructural?',
    a: 'BIC se especializa en diseño hidráulico y sanitario. Para el diseño estructural, trabajamos en coordinación con ingenieros estructurales de confianza que colaboran en nuestros proyectos, garantizando coherencia entre los diseños. Si el cliente ya tiene su ingeniero estructural, BIC se integra al equipo de diseño para coordinar los puntos de paso de redes y los requerimientos de estructuras especiales.',
  },
]

export default function DisenoHidraulicoPereira() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Pereira</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño Hidráulico en Pereira:<br />
            <span style={{ color: '#17A2B8' }}>Redes, Canales y Estructuras Hidráulicas para Risaralda</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores ofrece diseño hidráulico integral en Pereira y
            Risaralda: redes de acueducto y alcantarillado, canales de encauzamiento, estructuras
            hidráulicas especiales y diseño hidrosanitario para edificaciones. Nuestros diseños
            cumplen el RAS 2000, la Resolución 0330/2017, los lineamientos de CARDER y la NSR-10,
            y son aceptados por las curadurías de Pereira.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2000', 'CARDER', 'NSR-10', 'EPANET', 'Curadurías Pereira'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios integrales</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Servicios de diseño hidráulico en Pereira</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((item) => (
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

      {/* ── NORMATIVA ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Regulación vigente</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa CARDER y RAS 2000 para Risaralda</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {NORMATIVA.map((n) => (
              <div key={n.norma} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 24,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 13, marginBottom: 8,
                }}>{n.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6,
                }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SOFTWARE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Herramientas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software de diseño: EPANET, AutoCAD y HEC-RAS</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {SOFTWARE.map((s) => (
              <div key={s.nombre} style={{
                padding: 24, background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, borderTop: '3px solid #17A2B8',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROYECTOS TIPO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proyectos en Risaralda</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos hidráulicos en Pereira y Risaralda</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS_TIPO.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
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

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Diseño hidráulico en Pereira</h2>
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

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita diseño hidráulico para su proyecto en Pereira?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos los planos arquitectónicos, el tipo de proyecto y la ubicación en Pereira.
            Le enviamos propuesta técnica con alcance y costo en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
