import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un levantamiento topográfico en Manizales')

const seoConfig = {
  title: 'Topografía en Manizales | BIC Ingeniería',
  description: 'Levantamientos topográficos en Manizales para diseño hidráulico, licencias de construcción y estudios de suelos. +57 302 477 8910',
  keywords: [
    'topografía Manizales',
    'levantamiento topográfico Manizales',
    'estación total Manizales',
    'GPS diferencial Manizales',
    'levantamiento dron Manizales',
    'planimetría altimetría Caldas',
    'planos topográficos licencia construcción',
    'batimetría cauce Manizales',
    'MDT modelo digital terreno Manizales',
    'MAGNA-SIRGAS Colombia topografía',
  ],
  canonical: 'https://ingenieriabernal.co/topografia-manizales',
}

const TIPOS_LEVANTAMIENTO = [
  {
    icon: '📐',
    titulo: 'Levantamiento planimétrico y altimétrico',
    desc: 'Topografía convencional con estación total para determinar con precisión las coordenadas y cotas de los puntos relevantes del predio: linderos, construcciones existentes, elementos de infraestructura, vías, cursos de agua y vegetación significativa. En Manizales, las fuertes pendientes de ladera exigen metodología de campo adaptada al terreno irregular.',
  },
  {
    icon: '🛰️',
    titulo: 'GPS diferencial — posicionamiento de alta precisión',
    desc: 'Posicionamiento de control geodésico con GPS diferencial referido al sistema MAGNA-SIRGAS, el datum oficial de Colombia. Garantiza que los planos topográficos puedan integrarse con la cartografía predial del IGAC, los datos LiDAR del Instituto Geográfico y los planos de urbanismo del municipio de Manizales.',
  },
  {
    icon: '🚁',
    titulo: 'Levantamiento con dron — fotogrametría aérea',
    desc: 'Para predios grandes o de difícil acceso en Manizales y Caldas, BIC utiliza aeronaves no tripuladas (drones) equipadas con cámaras de alta resolución para generar ortofotografías, modelos digitales de superficie (MDS) y modelos digitales de terreno (MDT) mediante procesamiento fotogramétrico en Agisoft Metashape o Pix4D. Ideal para proyectos de infraestructura, planes parciales y estudios de inundabilidad.',
  },
  {
    icon: '🌊',
    titulo: 'Batimetría de cauces',
    desc: 'Levantamiento de la geometría del cauce (secciones transversales, perfil longitudinal del fondo) para ríos y quebradas de Manizales. Insumo fundamental para la modelación HEC-RAS 2D en estudios de inundabilidad y diseño de obras hidráulicas. Se realizan con ecosonda o con jalón y cinta en cauces accesibles de ancho moderado.',
  },
  {
    icon: '🗺️',
    titulo: 'Levantamiento para diseño hidráulico',
    desc: 'Topografía especializada para el diseño de acueductos, alcantarillados, canales y estructuras hidráulicas. Incluye nivelación de la red de distribución, perfil de la línea de conducción, curvas de nivel de la cuenca aportante y replanteo de obras de arte. BIC integra el levantamiento topográfico con el diseño hidráulico cuando ambos son contratados conjuntamente.',
  },
  {
    icon: '🏗️',
    titulo: 'Topografía para licencias de construcción',
    desc: 'Plano topográfico del predio con curvas de nivel a intervalos adecuados (generalmente 0.5 m en ladera y 1 m en terreno ondulado), referenciado a MAGNA-SIRGAS. Incluye localización de linderos, construcciones existentes, servidumbres, vías y cotas de pisos terminados. Formato exigido por las curadurías urbanas de Manizales para tramitar licencias de urbanismo y construcción.',
  },
]

const EQUIPOS = [
  {
    equipo: 'Estación total electrónica',
    desc: 'Instrumento de medición angular y de distancia con precisión milimétrica. Permite medir ángulos horizontales y verticales, y distancias hasta varios centenares de metros con reflector activo. Estándar de la industria para levantamientos urbanos en Manizales.',
  },
  {
    equipo: 'GPS diferencial (GNSS)',
    desc: 'Receptor GNSS de doble frecuencia que, combinado con corrección diferencial o RTK (Real Time Kinematic), logra precisiones submilimétricas en posición y cota. Utilizado para el control geodésico del levantamiento y para posicionar puntos en zonas sin obstrucción satelital.',
  },
  {
    equipo: 'Dron fotogramétrico',
    desc: 'Aeronave no tripulada con cámara multiespectral o RGB de alta resolución. Permite levantar áreas extensas en tiempos cortos con resolución de hasta 2-3 cm/pixel. El procesamiento fotogramétrico genera ortofotografías, MDT y nubes de puntos en formato LAS. Requiere autorización AEROCIVIL para vuelos en zonas urbanas de Manizales.',
  },
  {
    equipo: 'Software de procesamiento SIG',
    desc: 'Procesamiento de datos en AutoCAD Civil 3D para generación de planos y MDT, QGIS para análisis espacial y ArcGIS para integración con cartografía institucional del IGAC, el DANE y el municipio de Manizales. Todos los productos se entregan en sistemas de coordenadas MAGNA-SIRGAS.',
  },
]

const FAQ = [
  {
    q: '¿Qué es MAGNA-SIRGAS y por qué es importante en la topografía de Manizales?',
    a: 'MAGNA-SIRGAS (Marco Geocéntrico Nacional de Referencia - Sistema de Referencia Geocéntrico para las Américas) es el sistema de referencia geodésico oficial de Colombia, adoptado como datum nacional desde el año 2000. Todos los planos topográficos presentados ante entidades públicas en Colombia —incluyendo curadurías, Corpocaldas y el municipio de Manizales— deben estar referenciados a MAGNA-SIRGAS para ser válidos. BIC garantiza que todos sus levantamientos estén en este sistema.',
  },
  {
    q: '¿Cuándo es obligatorio incluir plano topográfico en una licencia de construcción?',
    a: 'Las curadurías urbanas de Manizales exigen plano topográfico del predio para licencias de urbanismo (urbanizaciones, planes parciales) y para licencias de construcción en terrenos con pendiente significativa, en predios afectados por ronda hídrica o en proyectos que impliquen movimientos de tierra. Para edificaciones nuevas en lotes urbanos ya desarrollados, el plano topográfico simplificado generalmente es suficiente.',
  },
  {
    q: '¿Qué diferencia hay entre un MDT y un MDS?',
    a: 'El Modelo Digital de Terreno (MDT) representa únicamente la superficie del suelo desnudo, sin vegetación ni edificaciones. El Modelo Digital de Superficie (MDS) incluye todos los objetos sobre el terreno: vegetación, edificaciones, puentes y obras. Para estudios de inundabilidad con HEC-RAS 2D, el MDT es el insumo requerido. Para los estudios de inundabilidad, BIC procesa los datos del dron para eliminar la vegetación y generar un MDT de alta resolución compatible con el modelo hidráulico.',
  },
  {
    q: '¿Los levantamientos con dron son precisos para proyectos de ingeniería en Manizales?',
    a: 'Sí, con la metodología correcta. La precisión planimétrica y altimétrica de un levantamiento fotogramétrico con dron depende de la resolución de la cámara, la altura de vuelo, el número y distribución de puntos de control en tierra (GCP), y el software de procesamiento utilizado. Con 5-6 GCP bien distribuidos medidos con GPS diferencial, BIC logra precisiones de 3-5 cm en posición y cota, suficientes para diseño hidráulico, estudios de inundabilidad y planos de licencia de construcción.',
  },
  {
    q: '¿BIC puede integrar el levantamiento topográfico con el diseño hidráulico?',
    a: 'Sí, y es la opción más eficiente. Cuando BIC realiza tanto el levantamiento topográfico como el diseño hidráulico (o el estudio de inundabilidad), el mismo equipo que hace el campo procesa los datos y los integra directamente al modelo de diseño. Esto reduce tiempos, elimina inconsistencias entre el plano topográfico y los cálculos hidráulicos, y garantiza que la topografía tenga el detalle exacto que el diseño requiere.',
  },
]

export default function TopografiaManizales() {
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
            Topografía en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Levantamientos para Proyectos de Ingeniería Civil</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza levantamientos topográficos en Manizales y
            Caldas para proyectos de ingeniería civil: estudios de inundabilidad (batimetría de
            cauces y MDT), diseño hidráulico, licencias de construcción y estudios de suelos. Estación
            total, GPS diferencial y fotogrametría con dron. Entrega en MAGNA-SIRGAS y AutoCAD Civil 3D.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Equipos:</span>
          {['Estación total', 'GPS diferencial', 'Dron fotogramétrico', 'MAGNA-SIRGAS', 'Civil 3D'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── TIPOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de levantamiento</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de levantamiento topográfico que realiza BIC en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS_LEVANTAMIENTO.map((item) => (
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

      {/* ── EQUIPOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tecnología</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Equipos: estación total, GPS diferencial y dron</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {EQUIPOS.map((e) => (
              <div key={e.equipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{e.equipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROYECTOS ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para qué proyectos se usa la topografía de BIC en Manizales?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🌊', titulo: 'Estudios de inundabilidad HEC-RAS 2D', desc: 'El MDT y la batimetría del cauce son insumos fundamentales del modelo hidráulico. BIC integra el levantamiento topográfico con la modelación HEC-RAS para reducir tiempos y garantizar coherencia entre el terreno y el modelo.' },
              { icon: '🚰', titulo: 'Diseño de acueductos y alcantarillados', desc: 'El perfil longitudinal del trazado, las cotas de terreno y los planos de planta son la base del diseño hidráulico de redes. BIC realiza el levantamiento topográfico previo al diseño y entrega perfil de proyecto en AutoCAD Civil 3D.' },
              { icon: '🏗️', titulo: 'Licencias de construcción', desc: 'Las curadurías de Manizales exigen plano topográfico con curvas de nivel para licencias en terreno con pendiente. BIC entrega plano en PDF y DWG con curvas de nivel, linderos y localización de construcciones.' },
              { icon: '🪨', titulo: 'Estudios de suelos', desc: 'La localización precisa de los sondeos SPT sobre el plano topográfico del predio y la correlación de cotas de boca del sondeo con la topografía son requisitos del informe geotécnico NSR-10.' },
              { icon: '📐', titulo: 'Planes parciales y urbanizaciones', desc: 'BIC realiza el levantamiento topográfico del área del plan parcial para la elaboración del plano urbanístico, el diseño de vías, el diseño del alcantarillado y la evaluación de la gestión del riesgo del sector.' },
              { icon: '🌿', titulo: 'Gestión del riesgo y POMCA', desc: 'Los estudios de riesgo hídrico y de torrencialidad para el POMCA Río Chinchiná y el POT de Manizales requieren MDT de alta resolución. BIC genera MDT desde levantamientos con dron y datos LiDAR del IGAC.' },
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
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Topografía en Manizales</h2>
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
            ¿Necesita un levantamiento topográfico en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos la dirección del predio, el área aproximada y el uso que dará al levantamiento.
            Le enviamos propuesta con costo y tiempo de entrega en menos de 24 horas.
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
