import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre Gestión del Riesgo Hídrico en Manizales')

const seoConfig = {
  title: 'Gestión del Riesgo Hídrico Manizales | BIC Ingeniería',
  description: 'Gestión del riesgo por inundaciones y avenidas torrenciales en Manizales y Caldas. Planes de contingencia y mitigación. +57 302 477 8910',
  keywords: [
    'gestión del riesgo hídrico Manizales',
    'inundaciones Manizales',
    'avenidas torrenciales Caldas',
    'plan gestión riesgo Manizales',
    'PMGRD Manizales',
    'Ley 1523 2012 Caldas',
    'POMCA riesgo hídrico',
    'Corpocaldas gestión riesgo',
    'amenaza torrencialidad Manizales',
    'mitigación riesgo hídrico',
  ],
  canonical: 'https://ingenieriabernal.co/gestion-riesgo-hidrico-manizales',
}

const AMENAZAS = [
  {
    icon: '🌊',
    titulo: 'Inundaciones lentas por desbordamiento',
    desc: 'Ocurren cuando el caudal del cauce supera la capacidad hidráulica de la sección y desborda hacia la llanura de inundación. En Manizales, el Río Chinchiná y sus afluentes presentan este tipo de inundación en sectores de La Enea, Malta y Bosques del Norte. La modelación HEC-RAS 2D permite mapear la extensión y profundidad de la mancha de inundación para diferentes períodos de retorno.',
  },
  {
    icon: '⚡',
    titulo: 'Avenidas torrenciales e inundaciones súbitas',
    desc: 'Crecidas de alta velocidad en quebradas de montaña con arrastre de sedimentos, troncos y escombros. Son el tipo de evento más destructivo en Manizales por la alta pendiente de sus microcuencas. Las quebradas Manizales, Olivares, La Niza y Minitas han registrado eventos torrenciales históricos. Requieren modelación FLO-2D o HEC-RAS con transporte de sedimentos.',
  },
  {
    icon: '🪨',
    titulo: 'Flujos de lodo y lahares volcánicos',
    desc: 'Amenaza específica de la cuenca del Río Chinchiná por la actividad del Nevado del Ruiz. Los lahares del volcán en erupción pueden alcanzar el Río Chinchiná y generar crecidas catastróficas aguas abajo. El PMGRD de Manizales incorpora este escenario y BIC elabora los estudios hidráulicos de referencia para la planificación de evacuación y obras de protección.',
  },
  {
    icon: '🌧️',
    titulo: 'Inundaciones urbanas por drenaje insuficiente',
    desc: 'Anegamiento de vías y zonas residenciales por capacidad insuficiente del sistema de alcantarillado pluvial durante eventos de lluvia intensa. Frecuente en sectores de expansión de Manizales con sistemas de drenaje subdimensionados o con obstrucción de sumideros. El análisis de esta amenaza requiere modelación integrada de la cuenca urbana con SWMM o InfoWorks.',
  },
]

const PRODUCTOS = [
  { titulo: 'Estudios de amenaza hídrica', desc: 'Mapas de amenaza por inundación y torrencialidad para períodos de retorno de 10, 25, 50 y 100 años con categorización alta-media-baja según Decreto 1807/2014.' },
  { titulo: 'Estudios de vulnerabilidad y riesgo', desc: 'Inventario de elementos expuestos (predios, infraestructura, población) en zona de amenaza. Estimación de daños potenciales y cálculo del riesgo específico y residual.' },
  { titulo: 'Planes de Gestión del Riesgo (PMGRD)', desc: 'Componentes del Plan Municipal de Gestión del Riesgo: conocimiento, reducción del riesgo y manejo de desastres. Alineados con la Ley 1523/2012 y la UNGRD.' },
  { titulo: 'Medidas de mitigación estructural', desc: 'Diseño de obras de encauzamiento, muros de contención, disipadores de energía, presas de retención de sedimentos y revegetalización de rondas hídricas.' },
  { titulo: 'Planes de contingencia', desc: 'Procedimientos de alerta, evacuación y respuesta para eventos hidrometeorológicos extremos. Integrados con el CDGRD de Caldas y los organismos de socorro.' },
  { titulo: 'Vinculación con POMCA y POT', desc: 'Integración de los estudios de riesgo con el POMCA Río Chinchiná y el POT de Manizales. Insumos técnicos para la zonificación de amenaza municipal y las restricciones de uso del suelo.' },
]

const FAQ = [
  {
    q: '¿Qué establece la Ley 1523/2012 en materia de gestión del riesgo hídrico?',
    a: 'La Ley 1523/2012 —que adoptó la Política Nacional de Gestión del Riesgo— establece que la gestión del riesgo es una responsabilidad compartida entre la Nación, los departamentos, los municipios y la ciudadanía. Define tres procesos fundamentales: conocimiento del riesgo (identificación y análisis), reducción del riesgo (intervención correctiva y prospectiva) y manejo de desastres (preparación y respuesta). Manizales, como municipio en zona de alta amenaza hídrica y volcánica, está obligado a mantener actualizado su PMGRD e incorporar la gestión del riesgo en el POT.',
  },
  {
    q: '¿Qué diferencia hay entre gestión del riesgo hídrico y un estudio de inundabilidad?',
    a: 'El estudio de inundabilidad es un insumo técnico específico que determina la extensión y profundidad de la mancha de inundación para distintos períodos de retorno. La gestión del riesgo hídrico es un proceso más amplio que incluye el estudio de inundabilidad pero también comprende el análisis de vulnerabilidad y riesgo, la evaluación de medidas de mitigación, los planes de contingencia y la vinculación con instrumentos de planificación como el POT y el POMCA. BIC puede elaborar desde el estudio de inundabilidad puntual hasta el componente completo de gestión del riesgo hídrico de un proyecto.',
  },
  {
    q: '¿Qué es una avenida torrencial y cómo se diferencia de una inundación?',
    a: 'Una avenida torrencial es una crecida súbita de alta energía en una quebrada de montaña, con velocidades de flujo superiores a 2-3 m/s y arrastre significativo de sedimentos, troncos y escombros. Se diferencia de una inundación lenta (desbordamiento de ríos en llanura) por su velocidad de inicio —a veces menos de 30 minutos después de la lluvia— y su poder destructivo. Manizales tiene alta susceptibilidad a avenidas torrenciales por sus quebradas de alta pendiente. La modelación de estos eventos requiere métodos especializados como HEC-RAS con transporte de sedimentos o FLO-2D.',
  },
  {
    q: '¿Para qué trámites se exige el estudio de gestión del riesgo hídrico en Manizales?',
    a: 'El estudio de amenaza y riesgo hídrico es exigido por el Decreto 1807/2014 para licencias de construcción en zonas de amenaza media o alta, para planes parciales, para revisión del POT y para permisos ambientales ante Corpocaldas. Adicionalmente, los proyectos de infraestructura financiados con recursos del SGR deben incluir el análisis de riesgo como componente obligatorio del expediente MGA-Web.',
  },
  {
    q: '¿Cuál es el papel del POMCA Río Chinchiná en la gestión del riesgo de Manizales?',
    a: 'El POMCA (Plan de Ordenación y Manejo de la Cuenca Hidrográfica) del Río Chinchiná, formulado por Corpocaldas, es el instrumento de planificación de nivel superior que define la zonificación ambiental y de amenaza de la cuenca. El POT de Manizales debe ser coherente con el POMCA. Los estudios de riesgo hídrico para proyectos en Manizales deben alinearse con la cartografía y las directrices del POMCA vigente.',
  },
]

export default function GestionRiesgoHidricoManizales() {
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
          <SectionLabel light>Servicio especializado · Manizales</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Gestión del Riesgo Hídrico en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Inundaciones, Torrencialidad y Planes de Mitigación</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores elabora estudios y planes de gestión del riesgo hídrico
            en Manizales y Caldas conforme a la Ley 1523/2012, el Decreto 1807/2014 y los lineamientos
            de la UNGRD. Incluimos análisis de amenaza por inundación y avenidas torrenciales, estudios
            de vulnerabilidad y riesgo, modelación HEC-RAS 2D, y propuestas de medidas de mitigación
            estructural y no estructural integradas al POMCA Río Chinchiná y al POT de Manizales.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar información
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Marco legal:</span>
          {['Ley 1523/2012', 'Decreto 1807/2014', 'PMGRD', 'POMCA Chinchiná', 'Corpocaldas', 'UNGRD'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── AMENAZAS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de amenaza</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de amenaza hídrica en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {AMENAZAS.map((item) => (
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

      {/* ── MARCO NORMATIVO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Marco normativo: Ley 1523/2012 y Decreto 1807/2014</h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            <div>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                Colombia adoptó en 2012 la Política Nacional de Gestión del Riesgo de Desastres mediante
                la Ley 1523, que creó el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD)
                bajo coordinación de la UNGRD. Esta ley estableció que la gestión del riesgo es un
                proceso social y una política de desarrollo que debe integrarse en todos los instrumentos
                de planificación territorial y sectorial.
              </p>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8 }}>
                El Decreto 1807/2014, recopilado en el Decreto 1077/2015, operacionalizó esta política
                en el ordenamiento territorial al definir los estudios técnicos requeridos para
                incorporar la gestión del riesgo en los POT y para tramitar licencias urbanísticas en
                zonas de amenaza. En Manizales, ciudad con alta exposición a amenazas hídricas y
                volcánicas, este decreto es de aplicación cotidiana en los procesos de licenciamiento.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, marginBottom: 12 }}>
                Obligaciones del municipio de Manizales:
              </h3>
              <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.9, paddingLeft: 20 }}>
                <li>Actualizar y ejecutar el Plan Municipal de Gestión del Riesgo (PMGRD)</li>
                <li>Incorporar la gestión del riesgo en la revisión del POT</li>
                <li>Exigir estudios de detalle de amenaza antes de licenciar en zonas de riesgo</li>
                <li>Articular con Corpocaldas en la gestión de cuencas y rondas hídricas</li>
                <li>Mantener y actualizar el inventario de asentamientos en riesgo</li>
                <li>Coordinar con el CDGRD de Caldas los planes de contingencia</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── PRODUCTOS ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Productos de gestión del riesgo hídrico que elabora BIC</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {PRODUCTOS.map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
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
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Gestión del riesgo hídrico en Manizales</h2>
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
            ¿Necesita un estudio de gestión del riesgo hídrico en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el predio, el proyecto o el trámite. BIC le explica qué estudios necesita y
            le envía propuesta en menos de 24 horas.
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
