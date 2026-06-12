import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesitamos propuesta para diseño de acueducto en Colombia. Es para municipio / ESP / urbanización / parcelación. ¿Pueden enviarnos una propuesta técnica?')

const seoConfig = {
  title: 'Diseño de Acueducto Colombia — Municipios · ESP · Urbanizaciones · Res. 0330 · EPANET | BIC',
  description: 'Diseño de sistemas de acueducto para municipios y ESP en Colombia. EPANET 2.2, RAS 2017 Res. 0330, memorias de cálculo COPNIA para SGR, PDA y Plan Departamental de Aguas. Firma COPNIA 17202-313228. Propuesta técnica sin costo.',
  keywords: [
    'diseño acueducto municipal Colombia',
    'diseño acueducto ESP Colombia',
    'diseño acueducto urbanización Colombia',
    'diseño sistema agua potable municipio Colombia',
    'EPANET acueducto Colombia',
    'RAS 2017 Resolución 0330 acueducto',
    'diseño acueducto SGR Colombia',
    'diseño acueducto PDA Colombia',
    'diseño acueducto Ley 142 Colombia',
    'consultoría diseño acueducto COPNIA Colombia',
    'memorias cálculo acueducto COPNIA',
    'diseño captación conducción distribución Colombia',
    'diseño acueducto veredal municipal Colombia',
    'ingeniero diseño acueducto Colombia COPNIA',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/diseno-acueductos',
}

const INCLUYE_DISENO = [
  { item: 'Estudio de demanda hídrica', detalle: 'QMD, QMMD y QMH proyectados a 25 años según RAS 2017 Título B' },
  { item: 'Aforo de fuentes', detalle: 'Medición de caudales en fuentes superficiales y subterráneas; análisis físicoquímico y bacteriológico' },
  { item: 'Diseño hidráulico de la línea de conducción', detalle: 'Diámetros, pérdidas de carga, cámaras rompe-presión, ventosas y purgas' },
  { item: 'Selección del sistema de tratamiento', detalle: 'PTAP convencional, filtración lenta o cloración directa según calidad de la fuente' },
  { item: 'Diseño de redes de distribución', detalle: 'Modelación con método Hardy-Cross o EPANET; presiones mínimas de 15 m.c.a.' },
  { item: 'Cálculo de presiones y VRP', detalle: 'Válvulas reductoras de presión cuando P > 50 m.c.a. en la red de distribución' },
  { item: 'Tanques de almacenamiento', detalle: 'Capacidad mínima equivalente a 1/3 del consumo diario; diseño geométrico y estructural básico' },
  { item: 'Plantas de bombeo y estaciones elevadoras', detalle: 'Selección de equipos, curvas de operación y cuarto de máquinas' },
  { item: 'Especificaciones técnicas y APU', detalle: 'Análisis de precios unitarios y presupuesto de obra listos para licitación' },
  { item: 'Memorias de cálculo para trámites', detalle: 'Documentación para licencia ambiental, registro SSPD y formulación ante el SGR (MGA-Web)' },
]

const ETAPAS = [
  {
    num: '01',
    titulo: 'Diagnóstico de la fuente y demanda',
    desc: 'Caracterización de la fuente de abastecimiento (superficial o subterránea), aforo de caudales, análisis de calidad del agua (físico-química y bacteriológica) y proyección de demanda poblacional a 25 años conforme al RAS 2017 Capítulo B.3.',
  },
  {
    num: '02',
    titulo: 'Diseño de obras de captación',
    desc: 'Dimensionamiento de bocatoma lateral, de fondo o captación de manantial según el tipo de fuente. Cálculo de caudal de diseño con periodo de retorno apropiado, diseño hidráulico de estructuras y obras de control de sedimentos.',
  },
  {
    num: '03',
    titulo: 'Línea de aducción y conducción',
    desc: 'Diseño de la tubería que conduce el agua desde la captación hasta el sistema de tratamiento. Cálculo de diámetros, presiones, pérdidas de carga, selección de material (acero, ductil, HDPE) y estructuras especiales (cámaras rompe-presión, ventosas, purgas).',
  },
  {
    num: '04',
    titulo: 'Diseño de planta de tratamiento PTAP',
    desc: 'Selección del tren de tratamiento según la calidad de la fuente: coagulación-floculación, sedimentación, filtración lenta o rápida, desinfección. Dimensionamiento de unidades, cálculo estructural básico y especificaciones de equipos conforme al RAS 2017 Título E.',
  },
  {
    num: '05',
    titulo: 'Tanque de almacenamiento',
    desc: 'Cálculo del volumen de regulación (variación horaria de consumo), volumen de reserva (incendio y emergencias) y diseño geométrico del tanque elevado o semienterrado. Verificación de presiones mínimas y máximas en la red conforme a la Resolución 0330/2017.',
  },
  {
    num: '06',
    titulo: 'Red de distribución de agua potable',
    desc: 'Diseño en malla cerrada o ramificada con modelación EPANET. Selección de diámetros garantizando presión mínima de 15 m.c.a. y máxima de 60 m.c.a. en todos los nodos de consumo. Localización de válvulas de seccionamiento, hidrantes y medidores sectoriales.',
  },
]

const NORMATIVA = [
  { norma: 'RAS 2017 Título B', desc: 'Sistemas de acueducto — captación, conducción, distribución' },
  { norma: 'RAS 2017 Título C', desc: 'Potabilización del agua — PTAP, procesos de tratamiento' },
  { norma: 'RAS 2017 Título D', desc: 'Saneamiento básico rural y sistemas de bajo costo' },
  { norma: 'Resolución 0330/2017', desc: 'Reglamento técnico para el sector APS — MVCT' },
  { norma: 'Resolución 2115/2007', desc: 'Calidad del agua para consumo humano' },
  { norma: 'Decreto 1575/2007', desc: 'Sistema para la protección y control de calidad del agua' },
  { norma: 'Resolución 844/2018', desc: 'Sistemas de agua potable rurales — MVCT' },
  { norma: 'Registro SSPD', desc: 'Registro de prestadores rurales y comunidades veredales ante la SSPD' },
  { norma: 'Marco JAC / comunidades veredales', desc: 'Acueductos comunitarios — personería jurídica, estatutos y tarifas RAS 2017' },
  { norma: 'SGR · MinVivienda · FINDETER', desc: 'Fuentes de financiación: regalías, recursos propios, crédito blando y cooperación internacional' },
]

const PRECIOS_ACUEDUCTO = [
  {
    tipo: 'Acueducto veredal 50–200 usuarios',
    rango: 'Propuesta personalizada',
    include: 'Diseño completo (captación, conducción, PTAP básica, almacenamiento, red). Memorias, planos DWG y presupuesto APU.',
    tiempo: '4–6 semanas',
    color: '#17A2B8',
  },
  {
    tipo: 'Sistema municipal 200–500 usuarios',
    rango: 'Propuesta personalizada',
    include: 'Diseño con PTAP completa, modelación EPANET, planos constructivos para licitación y fichas técnicas MGA-Web.',
    tiempo: '6–8 semanas',
    color: '#003B6F',
  },
  {
    tipo: 'Diseño con gestión SGR (MGA-Web)',
    rango: '+20–30% sobre el diseño base',
    include: 'Incluye formulación del proyecto en MGA-Web, fichas del DNP, acompañamiento OCAD y documentos de radicación.',
    tiempo: '8–12 semanas',
    color: '#0d5c8a',
  },
]

const PROYECTOS_REF = [
  {
    tag: 'Caldas — SGR aprobado',
    titulo: 'Sistemas de acueducto veredal con financiación SGR',
    desc: 'BIC diseñó varios sistemas de acueducto veredal en municipios de Caldas, incluyendo captación en fuentes superficiales, PTAP de filtración lenta y redes de distribución ramificadas. Todos los proyectos fueron formulados en MGA-Web y aprobados por el OCAD Regional.',
  },
  {
    tag: 'Eje Cafetero',
    titulo: 'Diseño de PTAP para municipios del Eje Cafetero',
    desc: 'Diseño de plantas de tratamiento de agua potable para municipios con caudales entre 2 y 15 L/s, incluyendo coagulación-floculación, sedimentación, filtración rápida y desinfección con cloro gaseoso y UV.',
  },
  {
    tag: 'Zonas urbanas',
    titulo: 'Optimización de redes de distribución en cabeceras municipales',
    desc: 'Diagnóstico hidráulico y rediseño de redes de distribución existentes con modelación EPANET, sectorización y localización de VRP, logrando reducciones del agua no contabilizada (IANC) superiores al 20%.',
  },
]

const FAQ_ACUEDUCTOS = [
  {
    q: '¿Cuántos usuarios necesita un acueducto para requerir diseño profesional?',
    a: 'A partir de 5 conexiones domiciliarias, el RAS 2017 y la Resolución 0330/2017 exigen que el sistema de acueducto cuente con un diseño firmado por un ingeniero con tarjeta profesional COPNIA vigente. Sin importar el tamaño del sistema, la entidad financiadora (SGR, MinVivienda) o la autoridad sanitaria exigirán este requisito.',
  },
  {
    q: '¿Qué estudios previos necesito antes del diseño de acueducto?',
    a: 'Los estudios previos mínimos son: levantamiento topográfico del área del proyecto, aforo de la fuente de captación (mínimo en época seca), y análisis físicoquímico y bacteriológico del agua fuente. BIC puede orientar la contratación de estos estudios o realizarlos directamente según el municipio.',
  },
  {
    q: '¿Pueden gestionar el trámite ante la SSPD?',
    a: 'Sí. BIC acompaña el proceso completo de registro ante la Superintendencia de Servicios Públicos Domiciliarios (SSPD), incluyendo la preparación de los documentos técnicos del sistema, el manual de operación y los estatutos para acueductos comunitarios administrados por JAC.',
  },
  {
    q: '¿Trabajan con regalías del SGR?',
    a: 'Sí. BIC elabora la documentación técnica para el Sistema General de Regalías: diseño conforme al RAS 2017, memorias de cálculo, planos constructivos, presupuesto APU, cronograma y fichas técnicas en MGA-Web. Acompañamos la formulación del proyecto hasta la aprobación por el OCAD, sin costo adicional.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un acueducto rural en Colombia?',
    a: 'El costo depende del número de usuarios, la extensión de la red, la fuente de abastecimiento y los entregables requeridos por la entidad financiadora (SGR, MinVivienda, PDA). BIC entrega propuesta técnica personalizada sin costo en 24 horas.',
  },
  {
    q: '¿Qué norma rige el diseño de acueductos en Colombia?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico — RAS 2017 (Resolución 0330 de 2017) es la norma vigente para el diseño de acueductos en Colombia. Sus Títulos B (acueductos), C (PTAP) y D (saneamiento rural) aplican según el tipo de sistema.',
  },
  {
    q: '¿Cuánto tiempo demora el diseño de un acueducto veredal?',
    a: 'BIC entrega diseños de acueductos veredales en 4 a 8 semanas una vez firmado el contrato y recibidos los datos de campo (topografía y análisis de agua). Proyectos con gestión SGR (MGA-Web) pueden requerir 8 a 12 semanas por los trámites adicionales.',
  },
]

const CASO_ESTUDIO = {
  tag: 'Referencias verificables — Proyectos ejecutados',
  titulo: 'Diseño de acueducto rural y formulación SGR — proyectos reales con contrato',
  contexto: 'Dos proyectos representativos ejecutados por BIC: diseño completo del acueducto Guaduales para la Alcaldía de Santa Rosa de Cabal (Risaralda, 2020), y formulación del proyecto de agua potable ante el OCAD SGR para la Alcaldía de Puerto Boyacá — Contrato No. 621 de 2021, verificable en SECOP I.',
  solucion: 'En Santa Rosa de Cabal, BIC diseñó la red de distribución del acueducto conforme al RAS 2017. En Puerto Boyacá, BIC formuló el proyecto de agua potable en MGA-Web del DNP, elaboró los estudios técnicos de soporte y acompañó la presentación ante el OCAD. El contrato (621/2021) es de consulta pública en el SECOP I.',
  metricas: [
    { valor: '2020', label: 'Diseño acueducto Santa Rosa de Cabal' },
    { valor: '621/2021', label: 'Contrato verificable Alcaldía Puerto Boyacá' },
    { valor: 'SECOP I', label: 'Contrato de consulta pública' },
    { valor: '+10 años', label: 'Experiencia en proyectos de agua y saneamiento' },
  ],
  resultado: 'Ambos proyectos son verificables. El contrato con la Alcaldía de Puerto Boyacá (Boyacá) puede consultarse en SECOP I. BIC cuenta con experiencia acreditada en diseño de acueductos rurales y formulación MGA-Web para el SGR en Caldas, Risaralda, Quindío y Boyacá.',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Diseño de Acueductos y Sistemas de Bombeo',
  description: 'Diseño de acueductos rurales, municipales y sistemas de bombeo en Colombia. RAS 2017 y SGR. Calarcá, Cartago y Eje Cafetero.',
  url: 'https://ingenieriabernal.co/servicios/diseno-acueductos',
  serviceType: 'Diseño de Acueductos y Sistemas de Bombeo',
  areaServed: ['Colombia', 'Eje Cafetero', 'Quindío', 'Valle del Cauca', 'Caldas', 'Risaralda'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

export default function ServicioDisenoAcueductos() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-diseno-acueductos'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    return () => { document.getElementById('schema-diseno-acueductos')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Acueducto para tu Proyecto — Rural, Urbano o Regalías SGR | BIC Colombia" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Acueductos Rurales y Veredales"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/diseno-acueductos"
        faqItems={FAQ_ACUEDUCTOS}
        priceSpecification={[
          { name: 'Diagnóstico hidráulico EPANET / optimización red existente', minPrice: 6000000, maxPrice: 8000000, priceCurrency: 'COP', description: 'Modelación EPANET de red de distribución existente, sectorización y VRP' },
          { name: 'Acueducto veredal / comunitario (< 500 hab)', minPrice: 8000000, maxPrice: 18000000, priceCurrency: 'COP', description: 'Captación, conducción, PTAP básica y red de distribución conforme a RAS 2017' },
          { name: 'Acueducto urbanización o parcelación (20–200 viviendas)', minPrice: 18000000, maxPrice: 40000000, priceCurrency: 'COP', description: 'Diseño completo con PTAP, bombeo, red de distribución y memorias para licencia' },
          { name: 'Acueducto municipal con formulación SGR (MGA-Web)', minPrice: 35000000, maxPrice: 80000000, priceCurrency: 'COP', description: 'Diseño firmado COPNIA + formulación en MGA-Web DNP para presentación ante OCAD' },
        ]}
      />

      <CTABanner service="Diseño de acueducto y alcantarillado para municipios y ESP" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Sistemas de Acueducto<br />
            <span style={{ color: '#17A2B8' }}>para Municipios, ESP y Constructoras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas completos de agua potable conforme al
            RAS 2017 y la Resolución 0330/2017: desde la captación y la línea de conducción hasta la
            planta de tratamiento (PTAP), el tanque de almacenamiento y la red de distribución en
            malla. Entregamos memorias de cálculo, modelos EPANET, planos constructivos DWG y
            presupuestos APU listos para licitación, interventoría y aprobación ante el Ministerio
            de Vivienda. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental
            (UNAL), COPNIA 17202-313228, ha diseñado sistemas de agua en más de 20 municipios
            del Eje Cafetero, Boyacá y los Llanos.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Propuesta en 24 h — sin costo
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
          <div style={{ marginTop: 20 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)',
              borderRadius: 100, padding: '7px 16px',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              color: '#4ADE80', fontSize: 13,
            }}>
              ✓ Firma COPNIA 17202-313228 CLD
            </span>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2017', 'Resolución 0330/2017', 'EPANET', 'Resolución 2115/2007', 'PTAP', 'SGR · MGA-Web'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

            {/* ── GEO FRAGMENT (AI citation target) ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña sistemas de acueducto para municipios, ESP y entidades territoriales en Colombia, conforme al RAS 2017 y Resolución 0330/2017. COPNIA 17202-313228 CLD. Sede Manizales — proyectos en todo Colombia. Propuesta técnica en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F0F7FF" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye un diseño de acueducto en Colombia?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {INCLUYE_DISENO.map((it) => (
              <div key={it.item} style={{
                background: '#fff', border: '1px solid #D1E9F6', borderRadius: 6,
                padding: '18px 20px', borderLeft: '4px solid #17A2B8',
              }}>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 6,
                }}>{it.item}</p>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.65, margin: 0,
                }}>{it.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── METODOLOGÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Etapas del diseño de acueducto</h2>
          <ThinLine mb={48} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {ETAPAS.map((e) => (
              <div key={e.num} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 52, height: 52, borderRadius: '50%',
                  background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 15,
                  flexShrink: 0,
                }}>
                  {e.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 15, marginBottom: 8,
                  }}>{e.titulo}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.75,
                  }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MARCO NORMATIVO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa colombiana para diseño de acueductos</h2>
          <ThinLine mb={40} />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
                            <caption style={{position:'absolute',left:'-9999px'}}>Normativa diseno de acueductos Colombia</caption>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Norma / Fuente</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Aplicación</th>
                </tr>
              </thead>
              <tbody>
                {NORMATIVA.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#17A2B8', fontSize: 14, whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: 14 }}>{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section bg="#F0F7FF" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Inversión</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Cuánto cuesta el diseño de un acueducto en Colombia?</h2>
          <ThinLine mb={12} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 15, lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
            Los valores son orientativos para 2026. El precio definitivo depende de la longitud de la red,
            la complejidad del sistema de tratamiento y si se requiere gestión SGR. BIC entrega propuesta
            sin costo en 24 horas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {PRECIOS_ACUEDUCTO.map((p) => (
              <div key={p.tipo} style={{
                background: '#fff', border: `2px solid ${p.color}`,
                borderRadius: 8, padding: 28, display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: p.color, fontSize: 13, margin: 0 }}>{p.tipo}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 26, margin: 0 }}>{p.rango}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{p.include}</p>
                <div style={{ background: '#F8FAFC', borderRadius: 4, padding: '8px 12px', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#475569', fontSize: 12 }}>Plazo típico:</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#002A50', fontSize: 12 }}>{p.tiempo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CASO DE ESTUDIO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 100%)', padding: '52px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(23,162,184,0.2)', border: '1px solid rgba(23,162,184,0.4)', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
            <span style={{ color: '#7FDBEA', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' }}>{CASO_ESTUDIO.tag}</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(20px, 2.8vw, 30px)', marginBottom: 16, lineHeight: 1.3 }}>
            {CASO_ESTUDIO.titulo}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 28 }}>
            {CASO_ESTUDIO.metricas.map(m => (
              <div key={m.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 24, color: '#17A2B8', marginBottom: 4 }}>{m.valor}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, lineHeight: 1.4 }}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <p style={{ color: '#7FDBEA', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>CONTEXTO</p>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{CASO_ESTUDIO.contexto}</p>
            </div>
            <div>
              <p style={{ color: '#7FDBEA', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>SOLUCIÓN BIC</p>
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{CASO_ESTUDIO.solucion}</p>
            </div>
          </div>
          <div style={{ marginTop: 20, background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: 8, padding: '12px 16px' }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#25D366' }}>Resultado: </strong>{CASO_ESTUDIO.resultado}
            </p>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS DE REFERENCIA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Experiencia BIC</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Proyectos de referencia en diseño de acueductos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {PROYECTOS_REF.map((pr) => (
              <div key={pr.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 6, padding: 28,
                borderTop: '4px solid #17A2B8',
              }}>
                <div style={{
                  display: 'inline-block', background: 'rgba(23,162,184,0.1)',
                  border: '1px solid rgba(23,162,184,0.3)', borderRadius: 14,
                  padding: '3px 12px', marginBottom: 12,
                }}>
                  <span style={{ color: '#17A2B8', fontSize: 11, fontWeight: 700 }}>{pr.tag}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10, lineHeight: 1.4,
                }}>{pr.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC para el diseño de su acueducto?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Diseños firmados con matrícula COPNIA 17202-313228 CLD activa, válidos ante cualquier entidad territorial o financiadora.' },
              { icon: '🔬', titulo: 'Modelación EPANET en red de distribución', desc: 'Cada diseño de red de distribución se calibra con EPANET, verificando presiones mínimas (15 m.c.a.) y máximas (60 m.c.a.) en condiciones de máximo consumo diario y horario.' },
              { icon: '📜', titulo: 'Cero observaciones ante el MVCT', desc: 'Diseños estructurados para superar la revisión técnica del Ministerio de Vivienda sin reprocesos. Experiencia en proyectos financiados con regalías SGR y FINDETER.' },
              { icon: '🗺️', titulo: 'Cobertura nacional desde el Eje Cafetero', desc: 'Base en Manizales. Proyectos ejecutados en Caldas, Risaralda, Quindío, Boyacá, Santander y Llanos. Desplazamientos a todo el país según el alcance del proyecto.' },
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
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas frecuentes sobre diseño de acueductos</h2>
          <ThinLine mb={40} />
          {[
            ...FAQ_ACUEDUCTOS,
            {
              q: '¿Qué diferencia hay entre RAS 2017 y Resolución 0330/2017?',
              a: 'La Resolución 0330 de 2017 del Ministerio de Vivienda, Ciudad y Territorio es el reglamento que adopta el RAS 2017 como norma técnica obligatoria para el sector de agua potable y saneamiento básico en Colombia. El RAS 2017 es el documento técnico con los criterios de diseño (caudales, presiones, materiales), mientras que la Resolución 0330 es el instrumento jurídico que le da fuerza legal. Ambos deben citarse en las memorias de diseño de acueducto.',
            },
            {
              q: '¿Cuándo es obligatorio diseñar una PTAP?',
              a: 'El diseño de una Planta de Tratamiento de Agua Potable (PTAP) es obligatorio cuando la calidad del agua de la fuente de captación no cumple los valores máximos aceptables del Decreto 1575/2007 y la Resolución 2115/2007 sin tratamiento. Todo proyecto de acueducto que capte agua superficial requiere tratamiento. Los acueductos que capten agua subterránea (pozos) pueden requerir solo desinfección si el agua cumple los parámetros físico-químicos requeridos.',
            },
            {
              q: '¿Cuál es el periodo de diseño recomendado para un acueducto?',
              a: 'La Resolución 0330/2017 establece periodos de diseño según el nivel de complejidad y el componente del sistema: para redes de distribución el periodo mínimo es 20 años; para estructuras de captación, conducción y plantas de tratamiento, el periodo es de 25 años. La proyección de población se realiza según los métodos definidos en el RAS 2017.',
            },
            {
              q: '¿Qué es el modelo EPANET y por qué se usa en diseño de acueductos?',
              a: 'EPANET es un software de dominio público desarrollado por la EPA de los Estados Unidos para modelar el comportamiento hidráulico y la calidad del agua en redes de distribución a presión. Permite simular los caudales en tuberías, presiones en nodos y la variación de calidad del agua bajo diferentes condiciones de demanda. El RAS 2017 recomienda su uso para el análisis y diseño de redes de distribución, especialmente en sistemas de nivel de complejidad alto. BIC incluye el modelo EPANET como entregable en todos sus diseños de redes.',
            },
          ].map(({ q, a }) => (
            <details key={q} style={{
              borderBottom: '1px solid #E2E8F0', paddingBottom: 20, marginBottom: 20,
            }}>
              <summary style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                fontSize: 15, cursor: 'pointer', paddingBottom: 12, listStyle: 'none',
              }}>
                {q}
              </summary>
              <p style={{
                fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15,
                lineHeight: 1.75, marginTop: 8,
              }}>{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo bajar el IRCA de un municipio en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>MGA-Web y Regalías: Cómo formular un proyecto de agua potable</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/normas-tecnicas-diseno-acueductos-colombia-ras-2017" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Normas técnicas para diseño de acueductos en Colombia: RAS 2017</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
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
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de alcantarillado sanitario, pluvial y plantas de tratamiento PTAP/PTAR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos para caudales de captación y diseño de bocatomas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/ambiental" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Concesión de aguas y permisos de vertimientos ante CAR y ANLA</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras de acueducto y plantas de tratamiento</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/diseno-acueducto-quindio" style={{ flex: '1 1 220px', background: '#EEF6FB', border: '1px solid #17A2B8', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>¿Proyecto en Quindío o Eje Cafetero? Ver página especializada →</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Acueductos Quindío y Eje Cafetero →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── TAMBIÉN DISPONIBLE EN ── */}
      <Section bg="#eef6fb" style={{ padding: '36px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 12, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 14 }}>
            También disponible en:
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/acueducto-quindio" style={{
              display: 'inline-block', background: '#fff', border: '1px solid #b3d4e8',
              borderRadius: 8, padding: '12px 18px', color: '#003B6F',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Diseño de acueductos en el Quindío →
            </a>
          </div>
        </div>
      </Section>

            {/* ── ANTI-INTERMEDIARIO G.3 ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', border: '2px solid #e2e8f0', borderRadius: 14, padding: '28px 32px', borderLeft: '5px solid #17A2B8' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#001A33', marginBottom: 14 }}>
              ¿Es este servicio para usted?
            </h3>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              BIC trabaja directamente con <strong>municipios, ESP, gobernaciones e INVÍAS</strong> que tienen un proyecto concreto — no con intermediarios que re-cotizan a terceros.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, marginBottom: 12 }}>
              Los precios publicados en este sitio son los que BIC cobra al contratante directo. Si usted es quien decide contratar y tiene el proyecto, la propuesta llega en menos de 24 horas.
            </p>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: 15, margin: 0 }}>
              Si está averiguando precios para re-cotizar a un tercero, este servicio probablemente no es el correcto para esa gestión. BIC prioriza relaciones directas con el decisor del proyecto.
            </p>
          </div>
        </div>
      </Section>
      {/* ── FORMULARIO COTIZACIÓN INLINE ── */}
      <Section>
        <QuoteFormInline />
      </Section>



      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            Cuéntenos su proyecto de acueducto
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, la población a servir, la fuente disponible y la fuente de
            financiación. Le enviamos propuesta técnica y económica en 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
            >
              📱 Propuesta en 24 h — sin costo
            </Btn>
            <Btn variant="outline" href="/contacto" style={{ borderColor: '#fff', color: '#fff' }}>
              Ver formulario de contacto
            </Btn>
          </div>
        </div>
      </Section>
    </>
  )
}
