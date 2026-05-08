import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Modelación Hidráulica HEC-RAS en Putumayo')

const seoConfig = {
  title: 'Modelación Hidráulica de Quebradas en Putumayo y Colombia | BIC',
  description: 'Modelación hidráulica HEC-RAS para ríos y quebradas en Putumayo, Amazonia y Colombia rural. Diseño de espolones, encauzamientos y obras de protección. Consulta gratuita.',
  keywords: [
    'modelación hidráulica Putumayo',
    'HEC-RAS Putumayo',
    'estudio inundación Mocoa',
    'encauzamiento quebradas Putumayo',
    'diseño espolones ríos Colombia',
    'obras protección hídrica Amazonia',
    'modelación HEC-RAS Colombia rural',
    'caudales diseño Q100 Putumayo',
    'riesgo hídrico Putumayo',
    'consultoría hidráulica Amazonia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/modelacion-hidraulica-putumayo',
}

const INCLUYE = [
  {
    icon: '📐',
    titulo: 'Levantamiento batimétrico y topográfico',
    desc: 'Levantamiento batimétrico del cauce (profundidades, secciones transversales) y topografía de la llanura de inundación con equipos GPS de precisión. Generación del MDT (Modelo Digital de Terreno) base para HEC-RAS en zonas selváticas y de difícil acceso.',
  },
  {
    icon: '🖥️',
    titulo: 'Modelo HEC-RAS 1D y 2D',
    desc: 'Construcción del modelo hidráulico 1D (secciones transversales) o 2D (malla computacional) del cauce. Análisis de flujo permanente e impermanente (tránsito de crecientes) con HEC-RAS versión 6.x, calibrado con registros IDEAM de estaciones de la cuenca Putumayo.',
  },
  {
    icon: '🗺️',
    titulo: 'Mapas de inundación y amenaza',
    desc: 'Generación de polígonos de inundación para Tr = 10, 25, 50 y 100 años, clasificados por amenaza alta, media y baja según Decreto 1807/2014. Compatibles con SIG (ArcGIS, QGIS) para radicación ante Corpoamazonía, UNGRD y municipios del Putumayo.',
  },
  {
    icon: '💧',
    titulo: 'Caudales de diseño Q10/Q50/Q100',
    desc: 'Cálculo de caudales máximos por análisis de frecuencias (Gumbel, Log-Pearson III) y regionalización hidrológica RAS 2017. Períodos de retorno Q10, Q50 y Q100 para diseño de obras de encauzamiento, puentes y defensas fluviales.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño de obras de encauzamiento',
    desc: 'Prediseño hidráulico de espolones, muros de contención, gaviones, diques y canales de alivio para ríos y quebradas del Putumayo. Dimensionamiento conforme a Manual de Diseño Geométrico INVÍAS y normas de obras fluviales.',
  },
  {
    icon: '📋',
    titulo: 'Informe técnico para trámites',
    desc: 'Informe completo con memorias de cálculo, planos hidráulicos, archivos HEC-RAS y capas SIG. Apto para radicación ante Corpoamazonía, gobernación, municipios, UNGRD y financiadoras SGR. Firmado por ingeniero con matrícula COPNIA vigente.',
  },
]

const OBRAS = [
  {
    tipo: 'Espolones de encauzamiento',
    desc: 'Estructuras transversales al cauce que redirigen el flujo y protegen márgenes. Diseño hidráulico basado en velocidades de impacto, longitud de influencia y caudal de diseño Q100. Materiales: concreto ciclópeo, enrocado o gaviones según disponibilidad local en Putumayo.',
  },
  {
    tipo: 'Muros de contención y diques',
    desc: 'Muros de gravedad o gavionados para confinamiento lateral del cauce en tramos de alta amenaza. Dimensionados contra presiones hidrostáticas, hidrodinámica y subpresión. Aplicación en márgenes de quebradas afluentes al río Putumayo y Mocoa.',
  },
  {
    tipo: 'Gaviones y colchonetas',
    desc: 'Estructuras de protección de fondo y márgenes con malla metálica de piedra. Resistentes a velocidades máximas de 3–6 m/s. Ideales en ríos del piedemonte amazónico con alta carga de sedimentos y fluctuaciones extremas de nivel.',
  },
  {
    tipo: 'Canales de alivio y derivación',
    desc: 'Canal diseñado para derivar parte del caudal de crecida y reducir calados en zonas pobladas o de infraestructura crítica. Prediseño hidráulico con sección óptima (Manning), estructura de captación y restitución al cauce principal.',
  },
]

const CONTEXTO_PUTUMAYO = [
  {
    icon: '🌊',
    titulo: 'Régimen hidrológico amazónico',
    desc: 'Los ríos del Putumayo presentan crecientes abruptas con coeficientes de variación de caudal superiores a 15. El río Mocoa registró en 2017 una creciente de 2.000 m³/s en menos de 2 horas — un evento Q500 que dejó más de 320 víctimas. La modelación 2D es crítica en este contexto.',
  },
  {
    icon: '🏞️',
    titulo: 'Ríos y quebradas principales',
    desc: 'Río Putumayo (1.813 km), río Mocoa, río Mulato, quebrada La Taruca, quebrada La Mochilera y múltiples afluentes de piedemonte con comportamiento torrencial. BIC tiene experiencia en modelación de cuencas andino-amazónicas de alta pendiente.',
  },
  {
    icon: '📍',
    titulo: 'Municipios de cobertura',
    desc: 'Mocoa, Puerto Asís, Villagarzón, Puerto Guzmán, Puerto Leguízamo, Orito, Valle del Guamuez y San Miguel. Cobertura en toda la cuenca del Putumayo con operación remota desde Manizales y desplazamientos de campo programados.',
  },
  {
    icon: '📜',
    titulo: 'Normativa y entidades competentes',
    desc: 'Corpoamazonía (CAR del Putumayo), UNGRD, IDEAM y municipios. Estudios conforme al Decreto 1807/2014, Ley 1523/2012 y el RAS 2017. BIC entrega informes en formatos aceptados para radicación ante estas entidades.',
  },
]

const ALCANCE_TIPICO = [
  { etapa: 'Diagnóstico', descripcion: 'Recopilación de información: cartografía, registros IDEAM, eventos históricos. Visita técnica de campo al tramo crítico. Definición del alcance y metodología.' },
  { etapa: 'Levantamiento topobatimétrico', descripcion: 'Batimetría del cauce con ecosondas o varillas en zonas vadeable. Topografía del área de inundación. Generación de MDT con resolución 1–2 m.' },
  { etapa: 'Modelación hidrológica', descripcion: 'Análisis de frecuencias con datos IDEAM. Caudales Q10, Q50, Q100. Correlación regional RAS 2017 para cuencas sin información suficiente.' },
  { etapa: 'Modelación HEC-RAS', descripcion: 'Construcción del modelo 1D o 2D. Calibración con eventos históricos. Corrida hidráulica para cada período de retorno. Manchas de inundación y calados.' },
  { etapa: 'Diseño de obras', descripcion: 'Alternativas de encauzamiento o protección. Prediseño hidráulico con memorias de cálculo. Especificaciones técnicas para contratación de obra.' },
  { etapa: 'Informe y entregables', descripcion: 'Informe técnico completo. Archivos HEC-RAS. Capas SIG (shapefile). Planos hidráulicos en AutoCAD. Memorias de cálculo. Apto para radicación ante CAR.' },
]

const FAQ = [
  {
    q: '¿Por qué es crítica la modelación HEC-RAS 2D en Putumayo?',
    a: 'El piedemonte amazónico del Putumayo tiene cauces con pendientes de 0.5–5% que combinan comportamiento fluvial y torrencial. Las quebradas de Mocoa y los afluentes del río Putumayo generan desbordamientos rápidos con alta carga de sedimentos. El modelo 2D captura la dinámica bidimensional del flujo sobre la llanura de inundación con precisión superior al 1D, lo que es crítico para localizar zonas de amenaza alta y diseñar obras de protección efectivas. Después de la tragedia de Mocoa (2017), Corpoamazonía y la UNGRD exigen modelos de alta resolución para cualquier estudio de gestión del riesgo en la región.',
  },
  {
    q: '¿Qué tipo de obras de protección se pueden diseñar en ríos del Putumayo?',
    a: 'Para ríos del piedemonte amazónico como los del Putumayo, BIC diseña: espolones de enrocado o concreto ciclópeo para proteger márgenes y redirigir el flujo, gaviones y colchonetas para revestimiento de fondo y taludes, diques laterales en zonas planas para confinar el cauce, muros de gravedad en tramos urbanos (Mocoa, Puerto Asís) y canales de alivio para desviar caudales de crecida. El diseño parte del modelo HEC-RAS calibrado para garantizar que las obras sean hidráulicamente efectivas.',
  },
  {
    q: '¿Cuánto cuesta un estudio de modelación hidráulica en el Putumayo?',
    a: 'El costo depende del tipo de cauce (quebrada pequeña vs. río principal), longitud del tramo, disponibilidad de información hidrológica y si se requiere levantamiento batimétrico. Para quebradas menores (2–5 km, modelo 1D) con fines de licencia o POT, el rango orientativo es $8–18 millones COP. Para tramos de río principal con modelo 2D y diseño de obras incluido, el rango es $25–60 millones COP. BIC entrega propuesta técnica y económica detallada en menos de 24 horas hábiles sin costo.',
  },
  {
    q: '¿BIC puede desplazarse al Putumayo para el levantamiento topobatimétrico?',
    a: 'Sí. BIC opera desde Manizales con desplazamientos programados a cualquier punto del país. Los costos de desplazamiento se cotizan por separado según ubicación y duración del trabajo de campo. En algunos casos, cuando existe información topohidrológica disponible (LIDAR IGAC, batimetría previa, planos del municipio), el estudio puede elaborarse completamente en modalidad remota, reduciendo costos y tiempos.',
  },
  {
    q: '¿Qué organismos aprueban los estudios hidráulicos en el Putumayo?',
    a: 'Los estudios hidráulicos en el Putumayo son revisados por Corpoamazonía (Corporación para el Desarrollo Sostenible del Sur de la Amazonia), la UNGRD para proyectos de gestión del riesgo, los municipios para licencias urbanísticas y planes de ordenamiento, y el DNP/SGR para proyectos de inversión pública financiados con regalías. BIC entrega informes en el formato técnico exigido por cada entidad.',
  },
]

export default function ServicioModelacionHidraulicaPutumayo() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Modelación Hidráulica HEC-RAS — Putumayo y Amazonia',
      description: seoConfig.description,
      url: 'https://ingenieriabernal.co/servicios/modelacion-hidraulica-putumayo',
      serviceType: 'Modelación Hidráulica HEC-RAS',
      provider: {
        '@type': 'ProfessionalService',
        name: 'BIC Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Putumayo' },
        { '@type': 'City', name: 'Mocoa' },
        { '@type': 'Country', name: 'Colombia' },
      ],
    }
    let el = document.getElementById('schema-service-geo')
    if (!el) {
      el = document.createElement('script')
      el.id = 'schema-service-geo'
      el.setAttribute('type', 'application/ld+json')
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(schema)
    return () => { document.getElementById('schema-service-geo')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Modelación Hidráulica HEC-RAS — Putumayo y Amazonia"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/modelacion-hidraulica-putumayo"
        faqItems={FAQ}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado — Putumayo y Amazonia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Modelación Hidráulica de Ríos y Quebradas en Putumayo
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC realiza modelaciones hidráulicas HEC-RAS 1D y 2D para ríos y quebradas
            del departamento del Putumayo, la Amazonia colombiana y zonas rurales de Colombia.
            Levantamiento batimétrico, caudales de diseño Q10/Q50/Q100, mapas de amenaza hídrica
            y diseño de espolones, gaviones y obras de encauzamiento. Ingenieros certificados
            COPNIA con experiencia en cuencas andino-amazónicas de alta complejidad hidráulica.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización para Putumayo
            </Btn>
            <Btn variant="outline" href="/servicios/modelacion-hec-ras" dark>
              Ver servicio HEC-RAS nacional →
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Cobertura:</span>
          {['Putumayo', 'Mocoa', 'Amazonia', 'HEC-RAS 6.x', 'Corpoamazonía', 'COPNIA vigente'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── ENLACE INTERNO SERVICIO PRINCIPAL ── */}
      <div style={{ background: '#EEF6FB', padding: '18px 24px', borderBottom: '1px solid #D1E9F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', margin: 0 }}>
            Esta es una página especializada para el Putumayo.{' '}
            <a href="/servicios/modelacion-hec-ras" style={{ color: '#17A2B8', fontWeight: 700, textDecoration: 'none' }}>
              Ver página principal del servicio de Modelación HEC-RAS en Colombia →
            </a>
          </p>
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye la modelación hidráulica en Putumayo?</h2>
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

      {/* ── OBRAS DE ENCAUZAMIENTO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Obras de protección fluvial</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diseño de obras de encauzamiento para ríos del Putumayo</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {OBRAS.map((o) => (
              <div key={o.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{o.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO PUTUMAYO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Ingeniería hidráulica en el Putumayo: contexto técnico</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {CONTEXTO_PUTUMAYO.map(c => (
              <div key={c.titulo} style={{ padding: '20px 22px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 13, color: '#001A33', margin: '0 0 6px' }}>{c.titulo}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TABLA DE ALCANCE ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Etapas típicas de un proyecto hidráulico en Putumayo
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ALCANCE_TIPICO.map((a, i) => (
              <div key={a.etapa} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, padding: '20px 0', borderBottom: i < ALCANCE_TIPICO.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ background: '#003B6F', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 12, textAlign: 'center', lineHeight: 1.3 }}>{a.etapa}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{a.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores BIC</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué contratar BIC para su proyecto en Putumayo?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Matrícula COPNIA 17202-313228 CLD activa. Todos los informes firmados por profesional legalmente habilitado.' },
              { icon: '🌿', titulo: 'Experiencia en cuencas andino-amazónicas', desc: 'Proyectos ejecutados en cuencas de piedemonte con comportamiento mixto fluvial-torrencial. Conocimiento de la dinámica hidrológica de la Amazonia colombiana y sus afluentes andinos.' },
              { icon: '📡', titulo: 'Operación remota + trabajo de campo', desc: 'BIC opera desde Manizales con capacidad de desplazamiento a Putumayo. Uso de LIDAR IGAC, imágenes satelitales de alta resolución y datos IDEAM para reducir costos de campo cuando la información previa es suficiente.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas · Trato directo', desc: 'Comunicación directa con el director técnico. Propuesta técnica y económica detallada en menos de 24 horas hábiles, sin costo. Seguimiento permanente hasta aprobación ante la entidad competente.' },
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Preguntas frecuentes — modelación hidráulica en Putumayo
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQ.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '22px 26px' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 10px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
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
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS Colombia — página principal del servicio</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico — Decreto 1807 para POT y licencias</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/encauzamiento-rios-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Encauzamiento de ríos y obras de defensa fluvial en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
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
            ¿Proyecto en Putumayo o la Amazonia colombiana?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el río o quebrada, el municipio y el objetivo del estudio.
            Le respondemos con propuesta técnica y presupuesto en menos de 24 horas hábiles.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Solicitar cotización para su proyecto en Putumayo
          </Btn>
        </div>
      </Section>
    </>
  )
}
