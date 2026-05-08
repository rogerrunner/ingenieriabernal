import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Acueducto en Quindío')

const seoConfig = {
  title: 'Diseño de Acueductos y Sistemas de Bombeo en Quindío y Eje Cafetero | BIC',
  description: 'Diseño de acueductos veredales y urbanos, sistemas de bombeo y PTAP en Quindío, Calarcá, Cartago y Eje Cafetero. Ingenieros COPNIA. Cotice hoy.',
  keywords: [
    'diseño acueducto Quindío',
    'acueducto veredal Calarcá',
    'sistema bombeo Eje Cafetero',
    'diseño PTAP Quindío',
    'acueducto rural Armenia',
    'RAS 2017 Quindío',
    'red distribución agua potable Quindío',
    'ingeniería hidráulica Quindío',
    'acueducto Montenegro Quindío',
    'diseño hidráulico Cartago',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/diseno-acueducto-quindio',
}

const INCLUYE = [
  {
    icon: '💧',
    titulo: 'Diseño hidráulico RAS 2017',
    desc: 'Cálculo del caudal de diseño (Qmd, Qmh, Qmx) conforme al RAS 2017 Título B. Modelación de la red con EPANET: presiones en nodos (10–50 mca), velocidades (0.3–1.5 m/s), pérdidas de carga. Verificación de coeficientes de rugosidad Hazen-Williams para tuberías PVC y HDPE.',
  },
  {
    icon: '⚙️',
    titulo: 'Selección y diseño de sistemas de bombeo',
    desc: 'Curvas H-Q del sistema, punto de operación, selección de bomba (centrífuga, periférica o sumergible) y motor. Análisis del golpe de ariete con tiempo de cierre de válvulas y alternativas de protección (válvulas alivio, cámaras de aire). Consumo energético y costos de operación.',
  },
  {
    icon: '🏗️',
    titulo: 'Acueductos veredales — captación y PTAP',
    desc: 'Bocatoma lateral o de fondo, canal de aducción, desarenador, conducción en tubería y red de distribución. PTAP compacta para caudales de 1–10 l/s: filtración lenta, cloración, tanque de almacenamiento. Conforme Resolución 0330/2017 y decreto 1575/2007.',
  },
  {
    icon: '🗺️',
    titulo: 'Redes de distribución y catastro',
    desc: 'Trazado de redes con criterios de presión mínima (10 mca) y máxima (50 mca). Ubicación de hidrantes, válvulas de sectorización, purgas y ventosas. Catastro de redes en SIG (QGIS/ArcGIS) y esquema de operación hidráulica por sectores.',
  },
  {
    icon: '📐',
    titulo: 'Memorias de cálculo y planos',
    desc: 'Memoria de cálculo hidráulico completa: caudales de diseño, modelación EPANET, selección de tuberías, perfiles hidráulicos y predimensionamiento de obras. Planos en AutoCAD a escala apropiada para contratación de obra y radicación ante CRQ o municipio.',
  },
  {
    icon: '📋',
    titulo: 'Interventoría de obra',
    desc: 'Supervisión técnica de la construcción del acueducto. Revisión de materiales, control de instalación de tuberías (uniones, profundidades, rellenos), pruebas de presión y funcionamiento hidráulico. Informes mensuales de avance y acta de recibo final.',
  },
]

const SISTEMAS_BOMBEO = [
  {
    tipo: 'Curvas H-Q y punto de operación',
    desc: 'Construcción de la curva de la red hidráulica (H-Q sistema) por superposición de pérdidas de carga y altura estática. Intersección con la curva del fabricante para determinar el punto de operación real. Verificación de eficiencia y NPSH disponible para evitar cavitación.',
  },
  {
    tipo: 'Análisis de golpe de ariete',
    desc: 'Cálculo de la sobrepresión por cierre brusco de válvulas con la ecuación de Joukowsky. Definición del tiempo de cierre seguro y selección de elementos de protección: válvulas de alivio, juntas de expansión, cámaras de aire o tanques de quiebre de presión.',
  },
  {
    tipo: 'Bombas en paralelo o serie',
    desc: 'Evaluación de configuraciones de bombeo para caudales variables: bombas en paralelo para ampliar caudal manteniendo altura, bombas en serie para aumentar la altura manométrica. Análisis de variadores de frecuencia para optimizar consumo energético en zonas rurales del Quindío.',
  },
  {
    tipo: 'Tanques de almacenamiento',
    desc: 'Diseño del volumen de regulación (consumo de 8–12 horas), volumen de incendio y volumen de reserva. Estructuras en concreto reforzado o acero. Verificación de llenado por gravedad o bombeo y autonomía del sistema ante falla eléctrica.',
  },
]

const CONTEXTO_QUINDIO = [
  { icon: '☕', titulo: 'Quindío: zona cafetera en expansión', desc: 'Armenia, Calarcá, Montenegro, La Tebaida y Quimbaya concentran el mayor desarrollo inmobiliario residencial del Eje Cafetero. La expansión urbanística genera demanda constante de nuevas redes de distribución y refuerzos hidráulicos. BIC tiene presencia activa en el Eje Cafetero.' },
  { icon: '🌱', titulo: 'Acueductos veredales en el Quindío', desc: 'Más de 120 acueductos veredales en el Quindío presentan rezago en infraestructura y requieren actualización o ampliación conforme al RAS 2017. La Resolución 0330/2017 del MVCT exige diseños firmados por ingeniero habilitado COPNIA para proyectos financiados con SGR o recursos municipales.' },
  { icon: '🏭', titulo: 'Cartago y la agroindustria del norte del Valle', desc: 'Cartago concentra zonas industriales con alta demanda de agua para procesos y sistemas contra incendios. BIC diseña sistemas de suministro de agua para industria alimentaria, frigoríficos, bodegas logísticas y parques agroindustriales en el corredor Quindío–Norte Valle.' },
  { icon: '💧', titulo: 'Alta pluviosidad y fuentes hídricas', desc: 'El Quindío tiene pluviosidades de 1.800–3.200 mm/año, lo que garantiza caudales en fuentes superficiales. Sin embargo, la variabilidad hidrológica exige diseños que contemplen caudales mínimos en época seca (Qmín verano). BIC dimensiona sistemas con factor de seguridad para sequías históricas.' },
]

const ETAPAS = [
  { etapa: 'Diagnóstico', descripcion: 'Reconocimiento del área de servicio, estudio socioeconómico, análisis de la fuente hídrica disponible (caudal, calidad, distancia). Revisión del EOT o POT municipal para compatibilidad del trazado.' },
  { etapa: 'Diseño preliminar', descripcion: 'Trazado de alternativas de conducción y distribución. Predimensionamiento de captación, PTAP, red principal y secundaria. Estimativo de costos para aprobación del cliente o entidad financiadora.' },
  { etapa: 'Diseño definitivo', descripcion: 'Modelación EPANET con demanda de diseño. Memoria de cálculo hidráulico completa. Especificaciones técnicas de materiales y equipos. Presupuesto y programa de obra.' },
  { etapa: 'Planos constructivos', descripcion: 'Planos de planta y perfil de conducción principal. Detalles de bocatoma, PTAP, tanques y red de distribución. Esquemas de conexiones domiciliarias y hidrantes. Formato AutoCAD y PDF.' },
  { etapa: 'Interventoría', descripcion: 'Supervisión de la construcción por BIC o firma contratada. Control de calidad de materiales, pruebas hidráulicas a presión, cloración inicial y puesta en marcha. Acta de recibo definitivo.' },
]

const FAQ = [
  {
    q: '¿Qué normativa aplica para diseñar un acueducto en el Quindío?',
    a: 'Los acueductos en el Quindío se diseñan conforme al RAS 2017 (Resolución 0330 del MVCT) para infraestructura de agua potable y saneamiento básico. Para proyectos financiados con regalías del SGR, se aplican adicionalmente los lineamientos del DNP para formulación de proyectos en MGA-Web. La Corporación Autónoma Regional del Quindío (CRQ) es la autoridad ambiental para concesiones de agua superficial y permisos de aprovechamiento.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de un acueducto veredal en el Quindío?',
    a: 'Un diseño completo de acueducto veredal (captación + conducción + PTAP básica + red de distribución) para una vereda de 50–150 viviendas tarda entre 4 y 8 semanas, dependiendo de la disponibilidad de información topográfica y el proceso de concesión de agua ante la CRQ. Si se requiere topografía de campo, el plazo puede extenderse 2–3 semanas adicionales. BIC establece el cronograma detallado en la propuesta técnica.',
  },
  {
    q: '¿Qué incluye un diseño de sistema de bombeo para un acueducto rural?',
    a: 'BIC entrega: memoria de cálculo hidráulico (curvas H-Q, punto de operación, análisis de golpe de ariete), especificaciones técnicas de la bomba y motor seleccionados, planos de la caseta de bombeo, especificaciones eléctricas básicas (arrancador, protecciones), y procedimiento de mantenimiento preventivo. Para proyectos con SGR, se incluye análisis de costos de operación y vida útil del equipo conforme a los requisitos del DNP.',
  },
  {
    q: '¿Cómo se calcula la tarifa de un acueducto veredal para una junta administradora?',
    a: 'BIC puede elaborar el estudio tarifario conforme a la metodología CRA (Comisión de Regulación de Agua Potable). Se calculan los costos medios de administración, operación, mantenimiento e inversión para determinar la tarifa mínima de sostenibilidad. Este análisis es requerido por algunas entidades financiadoras (SGR, municipios) como componente del proyecto. Se entrega como módulo complementario al diseño.',
  },
  {
    q: '¿Qué diferencia hay entre un acueducto veredal y un sistema multiveredal?',
    a: 'Un acueducto veredal sirve a una sola vereda o centro poblado, típicamente con caudales de 0.5–5 l/s y red de distribución inferior a 5 km. Un sistema multiveredal sirve a varias veredas desde una captación y PTAP central, con caudales de 5–50 l/s y red ramificada de 10–50 km. El diseño multiveredal es más complejo en términos de modelación hidráulica (EPANET con múltiples nodos de demanda y variación horaria) y requiere mayor análisis de presiones y sectorización.',
  },
]

export default function ServicioAcueductoQuindio() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Diseño de Acueductos — Quindío y Eje Cafetero',
      description: seoConfig.description,
      url: 'https://ingenieriabernal.co/servicios/diseno-acueducto-quindio',
      serviceType: 'Diseño de Acueductos y Redes de Distribución',
      provider: {
        '@type': 'ProfessionalService',
        name: 'BIC Bernal Ingeniería Consultores',
        url: 'https://ingenieriabernal.co',
        telephone: '+573024778910',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Quindío' },
        { '@type': 'City', name: 'Calarcá' },
        { '@type': 'City', name: 'Cartago' },
        { '@type': 'City', name: 'Armenia' },
        { '@type': 'AdministrativeArea', name: 'Eje Cafetero' },
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
        serviceName="Diseño de Acueductos y Sistemas de Bombeo — Quindío y Eje Cafetero"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/diseno-acueducto-quindio"
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
          <SectionLabel light>Servicio especializado — Quindío y Eje Cafetero</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Acueductos y Redes de Distribución en Quindío
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC diseña acueductos veredales y urbanos, sistemas de bombeo y plantas de
            tratamiento de agua potable (PTAP) en Quindío, Calarcá, Cartago, Armenia,
            Montenegro y el Eje Cafetero. Diseño hidráulico RAS 2017, modelación EPANET,
            curvas H-Q, análisis de golpe de ariete y memorias de cálculo para contratación
            con SGR, municipios o privados. Ingenieros COPNIA con experiencia verificable.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Cotizar diseño de acueducto en Quindío
            </Btn>
            <Btn variant="outline" href="/servicios/diseno-acueductos" dark>
              Ver servicio de acueductos nacional →
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Cobertura:</span>
          {['Quindío', 'Calarcá', 'Armenia', 'Cartago', 'Eje Cafetero', 'RAS 2017', 'COPNIA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── ENLACE INTERNO ── */}
      <div style={{ background: '#EEF6FB', padding: '18px 24px', borderBottom: '1px solid #D1E9F5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: '#475569', margin: 0 }}>
            Página especializada para el Quindío y Eje Cafetero.{' '}
            <a href="/servicios/diseno-acueductos" style={{ color: '#17A2B8', fontWeight: 700, textDecoration: 'none' }}>
              Ver página principal del servicio de Diseño de Acueductos en Colombia →
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
          }}>¿Qué incluye el diseño de acueducto en Quindío?</h2>
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

      {/* ── SISTEMAS DE BOMBEO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Diseño especializado</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sistemas de bombeo: componentes del diseño hidráulico</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {SISTEMAS_BOMBEO.map((s) => (
              <div key={s.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{s.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CONTEXTO QUINDÍO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Diseño de acueductos en el Quindío: contexto técnico y territorial</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 20 }}>
            {CONTEXTO_QUINDIO.map(c => (
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

      {/* ── ETAPAS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8 }}>
            Etapas del diseño de acueducto en Quindío
          </h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ETAPAS.map((e, i) => (
              <div key={e.etapa} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, padding: '20px 0', borderBottom: i < ETAPAS.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                <div style={{ background: '#003B6F', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 12, textAlign: 'center', lineHeight: 1.3 }}>{e.etapa}</span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{e.descripcion}</p>
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
          }}>¿Por qué contratar BIC para su acueducto en Quindío?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, egresado UNAL, especialista en Ingeniería Hidráulica y Ambiental. Matrícula COPNIA 17202-313228 CLD activa. Diseños firmados y radicables ante CRQ, municipios y SGR.' },
              { icon: '☕', titulo: 'Presencia verificada en el Eje Cafetero', desc: 'BIC ejecutó el diseño hidrosanitario y CI del Makarí Mall en Dosquebradas y tiene proyectos activos en Manizales, Pereira y Armenia. Conocimiento directo del contexto territorial del Eje Cafetero.' },
              { icon: '📊', titulo: 'RAS 2017 y Resolución 0330/2017', desc: 'Diseños conformes a la normativa técnica colombiana vigente. Memorias de cálculo aceptadas por municipios, CRQ, SSPD y SGR. Experiencia en formulación de proyectos de agua potable para regalías MGA-Web.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas · Trato directo', desc: 'Comunicación directa con el director técnico. Propuesta técnica y presupuesto en menos de 24 horas hábiles, sin costo. Acompañamiento durante todo el proceso hasta aprobación y recibo de obra.' },
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
            Preguntas frecuentes — acueductos en el Quindío
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
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueductos y alcantarillado — página nacional</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/diseno-ptap-colombia" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de Plantas de Tratamiento de Agua Potable (PTAP)</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/redes-hidrosanitarias" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Redes hidrosanitarias para edificios y proyectos inmobiliarios</span>
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
            ¿Proyecto de acueducto en Quindío o el Eje Cafetero?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, el número de viviendas o usuarios y la fuente hídrica disponible.
            Le respondemos con propuesta técnica y presupuesto en menos de 24 horas hábiles.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Cotizar diseño de acueducto en Quindío
          </Btn>
        </div>
      </Section>
    </>
  )
}
