import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito ingeniería hidráulica para un proyecto en Colombia. Encontré a BIC en Manizales y quiero cotizar.')

const seoConfig = {
  title: 'Ingeniería Hidráulica en Colombia desde Manizales — BIC Bernal Ingeniería | Nacional',
  description: 'BIC Bernal Ingeniería Consultores opera desde Manizales con ingeniería hidráulica para toda Colombia. Hidrología, HEC-RAS 2D, bocatomas, encauzamientos, PTAR y estudios ambientales para proyectos en Bogotá, Medellín, Cali, Barranquilla y todo el país. Graduados UN Manizales, 15+ años de experiencia.',
  keywords: [
    'ingeniería hidráulica Colombia desde Manizales',
    'consultoría hidráulica nacional Colombia',
    'firma ingeniería hidráulica Manizales Colombia',
    'BIC Bernal Ingeniería Consultores',
    'ingeniería hidráulica toda Colombia',
    'ingeniería ambiental hidráulica Colombia',
    'consultor hidráulico Colombia HEC-RAS',
    'firma ingeniería HEC-RAS Colombia nacional',
    'estudios hidrológicos nacionales Colombia',
    'UN Manizales ingeniería hidráulica',
    'ingeniería civil hidráulica Colombia',
    'empresa hidrología Colombia',
    'consultoría ambiental hidráulica Colombia',
    'modelación HEC-RAS Colombia nacional',
    'especialistas en hidrología Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/ingenieria-hidraulica-colombia-desde-manizales',
}

const VENTAJAS = [
  {
    icon: '🎓',
    titulo: 'Formación UN Manizales: la mejor ingeniería civil de Colombia',
    desc: 'La Universidad Nacional de Colombia sede Manizales es reconocida como una de las mejores instituciones de ingeniería civil del país, con una tradición de más de 60 años formando ingenieros hidráulicos que trabajan en los proyectos más exigentes de Colombia y América Latina. BIC es dirigida por un egresado del programa de Ingeniería Civil de la UN Manizales con énfasis en hidráulica e hidrología, con más de 15 años de experiencia en proyectos de todas las escalas. La formación académica rigorosa de la UN Manizales es el fundamento técnico de cada estudio que BIC entrega.',
    detalle: 'Ingeniería Civil UN Manizales · Especialización en Recursos Hídricos · 15+ años de práctica profesional',
  },
  {
    icon: '🌎',
    titulo: 'Capacidad de trabajo remoto en todo Colombia',
    desc: 'La mayor parte del trabajo técnico de ingeniería hidráulica — análisis hidrológico, modelación HEC-RAS, memorias de cálculo, diseño de redes — se puede hacer de forma remota con información digital: DEM del IGAC, datos del IDEAM, cartografía, imágenes satelitales y planos del cliente. BIC ha perfeccionado la metodología de trabajo remoto para atender proyectos en cualquier municipio de Colombia sin que el cliente tenga que desplazarse a Manizales ni esperar visitas costosas. Los levantamientos topográficos y la exploración de suelos se coordinan con profesionales locales certificados.',
    detalle: 'Proyectos en más de 15 departamentos · Trabajo remoto + coordinación local · Entrega 100% digital',
  },
  {
    icon: '🏔️',
    titulo: 'Conocimiento del territorio colombiano: los Andes y más allá',
    desc: 'El Eje Cafetero es uno de los territorios hidrológicamente más complejos de Colombia: alta pluviosidad (hasta 4.000 mm/año), ríos torrenciales con altas cargas de sedimentos, suelos de origen volcánico, sismicidad moderada a alta, y un mosaico de cuencas hidrográficas que drenan hacia los ríos Cauca y Magdalena. Los ingenieros formados en este territorio tienen un conocimiento profundo de los retos específicos de los Andes colombianos que no es fácil de replicar. BIC exporta ese conocimiento a proyectos en toda Colombia.',
    detalle: 'Experiencia en zonas andinas, Caribe, Pacífico y Orinoquía · Conocimiento de suelos y regímenes de lluvia regionales',
  },
  {
    icon: '⚡',
    titulo: 'Tecnología de punta: HEC-RAS 2D, HEC-HMS, QGIS, AutoCAD',
    desc: 'BIC trabaja con el software técnico más avanzado disponible para ingeniería hidráulica: HEC-RAS 2D (modelación bidimensional de flujo), HEC-HMS (modelación hidrológica de cuencas), SLOPE/W (análisis de estabilidad de taludes), QGIS y ArcGIS (análisis espacial y cartografía), AutoCAD Civil 3D (diseño de infraestructura). Esta combinación de herramientas permite a BIC entregar estudios de la misma calidad técnica que las grandes firmas de consultoría, con la agilidad y el costo de una firma especializada.',
    detalle: 'HEC-RAS 2D · HEC-HMS · SLOPE/W · QGIS · ArcGIS · AutoCAD Civil 3D',
  },
]

const SERVICIOS_NACIONALES = [
  { icon: '💧', nombre: 'Estudios Hidrológicos e Hidráulicos', desc: 'Análisis de cuencas, caudales de diseño, modelación HEC-RAS 2D para cualquier proyecto en Colombia.', href: '/servicios/estudios-hidrologicos' },
  { icon: '🏗️', nombre: 'Diseño de Bocatomas', desc: 'Bocatomas laterales, tipo Tirol, de fondo y sumergidas con permisos CAR en toda Colombia.', href: '/bocatomas-colombia' },
  { icon: '🌊', nombre: 'Encauzamiento de Ríos', desc: 'Diseño de encauzamientos, diques y gaviones con modelación HEC-RAS 2D en todo el país.', href: '/encauzamiento-rios-colombia' },
  { icon: '⛰️', nombre: 'Gestión de Riesgo en Taludes', desc: 'Análisis de estabilidad SLOPE/W, zonificación de amenaza y obras de estabilización.', href: '/gestion-riesgo-taludes-colombia' },
  { icon: '🛣️', nombre: 'Hidrología para Vías', desc: 'Drenaje vial, alcantarillas y box culvert con metodología Manual INVIAS para proyectos nacionales.', href: '/estudios-hidrologicos-vias-colombia' },
  { icon: '🌿', nombre: 'Estudios Ambientales CAR', desc: 'Concesiones de aguas, permisos de vertimiento y ocupación de cauce ante cualquier CAR.', href: '/me-pidieron-estudios-en-la-car' },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recepción del proyecto y diagnóstico técnico inicial',
    desc: 'El proceso comienza cuando el cliente contacta a BIC — por WhatsApp, correo o el formulario de la web — con la descripción del proyecto: municipio, tipo de obra o estudio, entidad que recibirá los estudios y cualquier documento previo disponible (planos, estudios anteriores, requerimientos de la CAR o la curaduría). BIC revisa la información en menos de 24 horas y envía una propuesta técnica y económica detallada que define exactamente qué se va a hacer, en qué plazo y con qué costo.',
    herramientas: ['Revisión de documentos previos del cliente', 'Consulta de información remota (IDEAM, IGAC, SRTM)', 'Diagnóstico técnico del alcance del estudio', 'Propuesta técnica y económica detallada'],
    resultado: 'Propuesta técnica clara con alcance, metodología, plazo y costo — en menos de 24 horas',
  },
  {
    paso: '02',
    titulo: 'Coordinación de levantamientos de campo (cuando aplica)',
    desc: 'Para los estudios que requieren información de campo — topografía, aforos de caudal, muestras de suelo, reconocimiento geomorfológico — BIC coordina la operación de campo con profesionales locales certificados cerca del área del proyecto. BIC diseña el plan de trabajo de campo (qué se levanta, con qué precisión, en qué formato), capacita al equipo local y supervisa la calidad de la información recibida. Este esquema es más eficiente que desplazar el equipo completo de Manizales para proyectos en regiones distantes.',
    herramientas: ['Red de topógrafos locales en todo Colombia', 'Protocolos de control de calidad de campo', 'Supervisión remota de levantamientos', 'Aforos y muestreo de calidad de agua'],
    resultado: 'Información de campo de calidad técnica certificada, sin necesidad de desplazamiento completo',
  },
  {
    paso: '03',
    titulo: 'Análisis y modelación técnica desde Manizales',
    desc: 'Con la información de campo y la información remota disponible, BIC realiza el análisis técnico completo: hidrología de la cuenca, modelación hidráulica HEC-RAS 2D, diseño hidráulico y estructural de las obras, análisis de amenaza, memorias de cálculo. Esta etapa se realiza íntegramente en las instalaciones de BIC en Manizales, con el software técnico especializado y la supervisión directa del ingeniero a cargo del proyecto. El análisis remote permite a BIC atender múltiples proyectos simultáneamente en diferentes regiones de Colombia.',
    herramientas: ['HEC-HMS y HEC-RAS 2D (modelación)', 'QGIS / ArcGIS (análisis espacial)', 'SLOPE/W (taludes)', 'AutoCAD Civil 3D (diseño)'],
    resultado: 'Estudio técnico completo elaborado con las mejores herramientas disponibles en el mercado',
  },
  {
    paso: '04',
    titulo: 'Revisión, firma y entrega del expediente técnico',
    desc: 'Antes de la entrega, el estudio pasa por una revisión técnica interna: verificación de los cálculos, coherencia entre la memoria de cálculo y los planos, cumplimiento de la normativa aplicable y adecuación al formato exigido por la entidad receptora (CAR, curaduría, INVIAS, ESP, SGR). Después de la revisión, el estudio va firmado por el ingeniero especialista con tarjeta profesional COPNIA vigente. La entrega se hace en formato digital (PDF y DWG), con la posibilidad de copias físicas si la entidad las exige.',
    herramientas: ['Revisión técnica interna de los estudios', 'Verificación de normativa aplicable', 'Firma COPNIA del especialista', 'Formato digital (PDF, DWG) + copias físicas si aplica'],
    resultado: 'Expediente técnico completo y firmado, listo para presentar ante cualquier entidad en Colombia',
  },
  {
    paso: '05',
    titulo: 'Acompañamiento hasta la aprobación de los estudios',
    desc: 'BIC acompaña al cliente después de la entrega: responde los requerimientos técnicos que haga la CAR, la curaduría, el INVIAS o la entidad receptora de los estudios, hace los ajustes que se soliciten y elabora documentos complementarios si son necesarios. Este acompañamiento post-entrega garantiza que los estudios sean aprobados — no solo que se entreguen. La comunicación con la entidad receptora puede ser directa (BIC responde por escrito) o coordinada con el cliente (BIC prepara la respuesta y el cliente la radica).',
    herramientas: ['Respuesta a requerimientos técnicos de la CAR o la curaduría', 'Ajuste de estudios según observaciones', 'Elaboración de documentos complementarios', 'Coordinación con el cliente en el trámite'],
    resultado: 'Estudios aprobados por la entidad competente — BIC no termina su trabajo hasta que el cliente tiene la aprobación',
  },
]

const FAQ = [
  {
    q: '¿BIC puede atender proyectos fuera del Eje Cafetero si está en Manizales?',
    a: 'Sí, y lo hace regularmente. La naturaleza del trabajo de ingeniería hidráulica es predominantemente analítica: análisis de datos hidrológicos del IDEAM, procesamiento de modelos de terreno del IGAC, modelación numérica con HEC-RAS y HEC-HMS, diseño de redes en AutoCAD, elaboración de memorias de cálculo. Todo esto se hace con información digital, independientemente de dónde esté el proyecto. Las visitas de campo necesarias (reconocimiento del cauce, aforos, inspección de obras) se coordinan con profesionales locales certificados o con desplazamientos focalizados. BIC tiene proyectos activos en Bogotá, Medellín, Barranquilla, Cali, Pasto, Villavicencio, Bucaramanga y múltiples municipios de todo el país.',
  },
  {
    q: '¿Por qué contratar una firma de Manizales para un proyecto en Bogotá o Medellín?',
    a: 'La selección de una firma de ingeniería debe basarse en la calidad técnica, la experiencia específica en el tipo de estudio que se necesita y la transparencia en el proceso de trabajo — no en la ubicación geográfica. BIC tiene experiencia específica en hidrología, hidráulica y gestión del riesgo que pocas firmas colombianas tienen con la misma profundidad técnica. Manizales, sede de la Universidad Nacional, es uno de los principales centros de formación de ingenieros hidráulicos del país. Trabajar con BIC da acceso a ese nivel de especialización con la agilidad de una firma de tamaño medio y sin los costos adicionales de una gran consultora con oficinas en múltiples ciudades.',
  },
  {
    q: '¿Los estudios de BIC son aceptados por entidades en otras ciudades?',
    a: 'Sí. Los estudios técnicos de BIC van firmados por el ingeniero especialista con tarjeta profesional COPNIA vigente — el COPNIA (Consejo Profesional Nacional de Ingeniería) es el ente de regulación profesional nacional y su registro de tarjeta profesional tiene validez en todo Colombia. No importa en qué ciudad está la firma: lo que valida el documento técnico ante cualquier entidad pública o privada en Colombia es la firma COPNIA, no la ubicación de la oficina. BIC ha presentado estudios técnicos ante la CAR de Cundinamarca, ANLA, INVIAS, alcaldías de Bogotá y Medellín, curaderías de varias ciudades, y todas los han aceptado.',
  },
  {
    q: '¿Qué servicios de ingeniería hidráulica ofrece BIC con alcance nacional?',
    a: 'BIC ofrece el portafolio completo de ingeniería hidráulica para clientes en todo Colombia: estudios hidrológicos de cuencas (HEC-HMS), modelación hidráulica con HEC-RAS 2D (inundaciones, encauzamientos, bocatomas), diseño de bocatomas (laterales, Tirol, de fondo, sumergidas), diseño de encauzamientos y obras civiles hidráulicas (gaviones, diques, box culvert), memorias de cálculo hidrosanitarias para licencias de construcción, estudios de ronda hídrica y amenaza de inundación para curaderías, estudios ambientales para trámites ante las CAR (concesiones de aguas, permisos de vertimiento, ocupación de cauce), y gestión del riesgo en taludes (análisis de estabilidad SLOPE/W, zonificación de amenaza, obras de estabilización).',
  },
  {
    q: '¿Cómo funciona el proceso de trabajo remoto con BIC?',
    a: 'El proceso es simple: el cliente contacta a BIC y describe el proyecto (municipio, tipo de obra o estudio, entidad que recibe los estudios). BIC revisa la información en menos de 24 horas y envía una propuesta técnica con alcance, plazo y costo. Si el cliente acepta, BIC inicia el trabajo: recopila la información remota disponible, coordina los levantamientos de campo necesarios con profesionales locales, realiza el análisis y la modelación en Manizales, y entrega el expediente técnico en formato digital. La comunicación durante el proyecto es por correo, WhatsApp y videoconferencia. El cliente no necesita desplazarse a Manizales — BIC lleva el trabajo donde está el proyecto.',
  },
  {
    q: '¿BIC subcontrata los levantamientos de campo en otras regiones?',
    a: 'BIC trabaja con una red de topógrafos, laboratoristas geotécnicos y aforadores certificados en diferentes regiones de Colombia. BIC diseña el plan de trabajo de campo, especifica la precisión y el formato de la información que se necesita, y supervisa la calidad de los datos antes de usarlos en los análisis. El trabajo de campo subcontratado cumple los mismos estándares de calidad que el trabajo propio de BIC. Para proyectos de alta complejidad o cuando el cliente así lo prefiere, BIC desplaza su propio equipo técnico al sitio del proyecto.',
  },
  {
    q: '¿Cuánto tiempo toma recibir la propuesta técnica de BIC para un proyecto en otra ciudad?',
    a: 'BIC envía la propuesta técnica y económica para cualquier proyecto en Colombia en menos de 24 horas hábiles después de recibir la descripción del proyecto. Para proyectos muy complejos o en zonas remotas donde se necesita más información, el plazo puede ser de 48 horas. La propuesta incluye el alcance detallado de los estudios, la metodología, el plazo de ejecución y el costo total. La primera consulta y la propuesta son siempre sin costo para el cliente.',
  },
  {
    q: '¿Qué ventaja tiene trabajar con una firma especializada en hidráulica frente a una firma de ingeniería general?',
    a: 'La ingeniería hidráulica es una disciplina técnica muy específica: el análisis hidrológico, la modelación con HEC-RAS, el diseño de bocatomas, el análisis de estabilidad de taludes o la gestión del riesgo por inundación requieren conocimientos, software y experiencia que un ingeniero generalista no tiene en la misma profundidad. Una firma especializada en hidráulica como BIC tiene: software técnico especializado (HEC-RAS 2D, HEC-HMS, SLOPE/W), experiencia en decenas de proyectos similares, conocimiento profundo de la normativa (RAS 2017, Manual INVIAS, NSR-10, Decreto 1076), y la capacidad de resolver problemas técnicos complejos que superan el alcance de la ingeniería general. Los estudios técnicos entregados por un especialista generan mucha más confianza en las entidades receptoras (CAR, curaduría, INVIAS) que los de un generalista.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras y promotoras nacionales', desc: 'Empresas con proyectos en múltiples ciudades que necesitan un aliado técnico especializado en hidráulica para todo el país.' },
  { tipo: 'Municipios de toda Colombia', desc: 'Alcaldías que necesitan estudios hidrológicos, diseño de obras hidráulicas o gestión del riesgo con financiación SGR.' },
  { tipo: 'Concesiones viales 4G/5G', desc: 'Proyectos de infraestructura vial nacional que requieren hidrología e hidráulica con metodología INVIAS en todos los corredores.' },
  { tipo: 'Empresas del sector energético', desc: 'Pequeñas centrales hidroeléctricas (PCH), proyectos de riego y aprovechamiento hídrico en cualquier parte del país.' },
  { tipo: 'Colombianos en el exterior', desc: 'Personas con proyectos en Colombia que necesitan ingeniería confiable y pueden gestionar el proceso 100% en línea.' },
  { tipo: 'Firmas de consultoría aliadas', desc: 'Grandes consultoras que requieren el componente hidrológico e hidráulico especializado para sus proyectos multidisciplinarios.' },
]

const REGIONES = [
  { region: 'Eje Cafetero', desc: 'Caldas, Risaralda, Quindío — área de mayor concentración de proyectos BIC, con conocimiento profundo del territorio' },
  { region: 'Antioquia', desc: 'Medellín, Oriente, Urabá, Bajo Cauca — proyectos viales, bocatomas y gestión del riesgo en zonas de ladera' },
  { region: 'Cundinamarca y Bogotá', desc: 'Proyectos de licencia, cuenca del río Bogotá, estudios para curaderías de Bogotá y municipios aledaños' },
  { region: 'Valle del Cauca y Cauca', desc: 'Cuencas del Cauca, encauzamientos, PTAR y bocatomas en la región del Pacífico colombiano' },
  { region: 'Costa Caribe', desc: 'Barranquilla, Cartagena, Santa Marta — proyectos de drenaje urbano, alcantarillado y control de inundaciones' },
  { region: 'Resto de Colombia', desc: 'Nariño, Tolima, Boyacá, Meta, Santanderes y la Orinoquía — consulte el alcance de BIC en su departamento' },
]

export default function IngenieriaManizalesNacional() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería hidráulica · Nacional · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Ingeniería Hidráulica para Toda Colombia desde Manizales
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            BIC Bernal Ingeniería Consultores — egresados UN Manizales con proyectos en todo el territorio nacional
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            La ingeniería hidráulica especializada no tiene fronteras geográficas. BIC opera desde Manizales —
            uno de los centros de formación de ingeniería civil más reconocidos de Colombia, con la Universidad
            Nacional — y atiende proyectos en todo el país: Bogotá, Medellín, Cali, Barranquilla, Costa Caribe,
            Pacífico, Llanos y Amazonía. La mayor parte del trabajo técnico (hidrología, HEC-RAS, memorias de
            cálculo) se hace de forma remota; los levantamientos de campo se coordinan localmente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar proyecto en mi ciudad</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['UN Manizales','HEC-RAS 2D','COPNIA nacional','Eje Cafetero','Toda Colombia','15+ años'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '15+', label: 'años de experiencia en ingeniería hidráulica' },
              { num: '+15', label: 'departamentos con proyectos BIC' },
              { num: 'UN', label: 'Manizales — formación académica de primer nivel' },
              { num: '24h', label: 'para enviar propuesta técnica a cualquier ciudad' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTAJAS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Por qué BIC desde Manizales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            La ventaja técnica de la ingeniería hidráulica del Eje Cafetero
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Manizales es el corazón de la ingeniería de recursos hídricos en Colombia.
            BIC combina esa tradición académica con tecnología de punta y capacidad de trabajo en todo el país.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {VENTAJAS.map(v => (
              <div key={v.titulo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, alignItems: 'start' }}>
                <div style={{ fontSize: 36 }}>{v.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 8 }}>{v.titulo}</h3>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 10 }}>{v.desc}</p>
                  <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '8px 12px' }}>
                    <p style={{ fontSize: 12, color: '#003B6F', fontWeight: 600, margin: 0 }}>{v.detalle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS NACIONALES ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Portafolio nacional</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Servicios de BIC disponibles en todo Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {SERVICIOS_NACIONALES.map(s => (
              <a key={s.nombre} href={s.href} style={{ display: 'block', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 22, textDecoration: 'none', borderTop: '3px solid #17A2B8' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#0d8fa3')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#e2e8f0')}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{s.nombre}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                <p style={{ color: '#17A2B8', fontSize: 13, fontWeight: 600, marginTop: 10, marginBottom: 0 }}>Ver servicio →</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Proceso de trabajo de BIC para proyectos nacionales
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            De la consulta inicial a los estudios aprobados — completamente gestionable en línea.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#f8f9fa', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>RESULTADO</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto de ingeniería hidráulica en cualquier parte de Colombia?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC le envía propuesta técnica en 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── REGIONES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura nacional</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Regiones de Colombia donde BIC ha trabajado
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {REGIONES.map(r => (
              <div key={r.region} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{r.region}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CLIENTES ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Clientes de BIC en toda Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#fff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Lo que le pregunta quien está en otra ciudad y quiere contratar BIC
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)', padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🇨🇴</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Tiene un proyecto de ingeniería hidráulica<br />en cualquier parte de Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el municipio o departamento y qué entidad recibirá los estudios.
            BIC le envía propuesta técnica en menos de 24 horas — sin importar dónde esté el proyecto.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Egresados UN Manizales · Firma COPNIA · Toda Colombia
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto" style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
