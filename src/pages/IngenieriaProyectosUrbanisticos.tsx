import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito ingeniería para un proyecto urbanístico — diseño hidráulico, hidrosanitario y estudios técnicos. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Ingeniería para Proyectos Urbanísticos en Colombia — Hidráulica, Hidrosanitario y Estudios | BIC',
  description: 'BIC diseña las redes hidrosanitarias, el sistema de drenaje pluvial y los estudios de amenaza hídrica para proyectos urbanísticos en Colombia. Memorias de cálculo firmadas, planos constructivos y acompañamiento hasta la licencia. Manizales, Eje Cafetero y todo el país.',
  keywords: [
    'ingeniería proyectos urbanísticos Colombia',
    'diseño hidráulico urbanización Colombia',
    'redes hidrosanitarias urbanización',
    'drenaje pluvial urbanización Colombia',
    'estudios técnicos licencia urbanismo',
    'memoria de cálculo hidrosanitario',
    'diseño acueducto alcantarillado urbanización',
    'ingeniería civil urbanización Colombia',
    'plan parcial ingeniería hidráulica',
    'diseño vías urbanización Colombia',
    'estudios amenaza hídrica urbanización',
    'licencia urbanismo ingeniería Manizales',
    'firma ingeniería urbanismo Eje Cafetero',
    'memorias técnicas curaduría urbanismo',
    'empresa ingeniería proyectos urbanísticos',
  ],
  canonical: 'https://ingenieriabernal.co/ingenieria-proyectos-urbanisticos-colombia',
}

const COMPONENTES = [
  {
    icon: '💧',
    tipo: 'Sistema de Acueducto Interno',
    subtitulo: 'Desde la conexión al acueducto público hasta cada apartamento',
    desc: 'BIC diseña la red de acueducto interno del proyecto urbanístico: el punto de entrega desde el acueducto municipal, la red de distribución interna, el tanque de almacenamiento y regulación, el sistema de bombeo si hay presión insuficiente, y las redes secundarias hasta cada unidad. El diseño cumple la Resolución 0330/2017 y el RAS 2017, e incluye cálculo de presiones, velocidades y caudales con la dotación real del proyecto.',
    norma: 'RAS 2017 · Res. 0330/2017 · NTC 1500',
    entregable: 'Planos constructivos + memoria de cálculo firmada COPNIA',
  },
  {
    icon: '🚰',
    tipo: 'Sistema de Alcantarillado y Aguas Residuales',
    subtitulo: 'Redes de aguas residuales domésticas e industriales',
    desc: 'Diseño de la red de alcantarillado sanitario del proyecto: colectores principales y secundarios, cámaras de inspección, conexión al alcantarillado público municipal o sistema de tratamiento propio (PTAR). Para proyectos donde no hay alcantarillado público, BIC diseña el sistema de tratamiento de aguas residuales conforme al RAS 2017 (tanque séptico y campo de infiltración, o PTAR modular). El diseño garantiza pendientes, velocidades y caudales dentro de los rangos admisibles.',
    norma: 'RAS 2017 · Res. 0330/2017 · Decreto 1076/2015',
    entregable: 'Planos sanitarios + cálculo de capacidad y caudales + alternativas de PTAR',
  },
  {
    icon: '🌧️',
    tipo: 'Drenaje Pluvial Urbano',
    subtitulo: 'El sistema que maneja la lluvia dentro del proyecto',
    desc: 'El sistema de drenaje pluvial captura el agua lluvia de las cubiertas, zonas duras y vías internas del proyecto y la conduce de forma controlada hasta el punto de entrega al sistema público o al cauce receptor. BIC diseña el sistema completo: red de sumideros, cunetas, colectores pluviales, pozos de inspección y la estructura de entrega final al cauce. Se aplica análisis hidrológico para la cuenca aportante con curvas IDF del IDEAM y se modelan los caudales de diseño para períodos de retorno de 5, 10 y 25 años según la norma.',
    norma: 'RAS 2017 · INVIAS Manual de Drenaje · Curvas IDF IDEAM',
    entregable: 'Red pluvial diseñada + cálculo de caudales + diseño de entrega al cauce',
  },
  {
    icon: '🗺️',
    tipo: 'Estudios de Amenaza Hídrica y Ronda',
    subtitulo: 'Para la licencia de urbanismo ante la curaduría',
    desc: 'Para proyectos urbanísticos en zonas con cauces cercanos, la curaduría exige el estudio de amenaza hídrica con zonificación conforme al Decreto 1807/2014. BIC realiza la modelación HEC-RAS 2D del cauce vecino, delimita la ronda hídrica del predio y entrega el mapa de amenaza con las tres zonas (alta, media, baja). Este estudio define qué área del predio es construible y cuáles son las condiciones técnicas para el diseño del proyecto.',
    norma: 'Decreto 1807/2014 · Ley 1523/2012 · POT municipal',
    entregable: 'Mapa de amenaza hídrica + informe firmado para curaduría',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico técnico del predio y necesidades del proyecto',
    desc: 'BIC inicia cada proyecto urbanístico con una revisión del predio: normativa POT aplicable, disponibilidad de servicios públicos (acueducto, alcantarillado) en el sector, presencia de cauces o zonas de amenaza, pendiente del terreno y condiciones topográficas. Este diagnóstico determina qué sistemas hay que diseñar, qué restricciones aplican y cuáles son los estudios requeridos para la licencia de urbanismo. Se hace con información catastral, POT, visita de campo y consulta ante las ESP locales.',
    herramientas: ['Revisión POT y normativa urbanística', 'Consulta ante ESP (acueducto y alcantarillado)', 'Visita de campo', 'Revisión de disponibilidad de servicios'],
    resultado: 'Diagnóstico técnico del predio con listado de estudios y diseños necesarios',
  },
  {
    paso: '02',
    titulo: 'Topografía y levantamiento del predio',
    desc: 'BIC coordina el levantamiento topográfico del predio con curvas de nivel, límites del predio, construcciones existentes, fuentes de agua, vías vecinas y puntos de conexión a los servicios públicos. El modelo digital del terreno (MDT) generado es la base para el diseño de todas las redes (acueducto, alcantarillado, pluvial) y para el estudio hidrológico si hay cauces vecinos. Se trabaja con estación total o drone fotogramétrico según el tamaño del predio.',
    herramientas: ['Levantamiento topográfico con estación total', 'Fotogrametría con drone (predios grandes)', 'Modelo digital de terreno (MDT)', 'QGIS / AutoCAD Civil 3D'],
    resultado: 'Topografía completa del predio lista para el diseño de redes y el estudio hídrico',
  },
  {
    paso: '03',
    titulo: 'Diseño de redes hidrosanitarias y pluviales',
    desc: 'Con la topografía y el programa arquitectónico del proyecto, BIC diseña todas las redes: acueducto interno, alcantarillado sanitario y sistema de drenaje pluvial. Se calculan los caudales de diseño para cada sistema (dotación, aguas residuales, escorrentía pluvial), se dimensionan las tuberías, se ubican las cámaras de inspección, sumideros y pozos, y se determinan las cotas de instalación para garantizar el funcionamiento por gravedad. Si hay desnivel insuficiente, se diseña la estación de bombeo.',
    herramientas: ['AutoCAD (redes en planta y perfil)', 'Cálculo hidráulico de tuberías (Manning, Hazen-Williams)', 'RAS 2017 y Resolución 0330/2017', 'Modelación de presiones y caudales'],
    resultado: 'Planos constructivos de redes hidrosanitarias y pluviales en planta y perfil',
  },
  {
    paso: '04',
    titulo: 'Estudios de amenaza hídrica (si aplica)',
    desc: 'Si el predio colinda con un cauce o está en zona de posible inundación, BIC realiza el estudio de amenaza hídrica: análisis hidrológico de la cuenca, modelación HEC-RAS 2D del cauce para diferentes períodos de retorno, y mapa de zonificación de amenaza conforme al Decreto 1807/2014. El informe resultante define qué área del predio es construible, cuáles son las restricciones aplicables y qué medidas de protección son necesarias para la parte construible.',
    herramientas: ['HEC-HMS (hidrología)', 'HEC-RAS 2D (modelación hidráulica)', 'QGIS (cartografía y mapas de amenaza)', 'Decreto 1807/2014 (metodología de zonificación)'],
    resultado: 'Mapa de amenaza hídrica + delimitación de ronda + concepto de viabilidad',
  },
  {
    paso: '05',
    titulo: 'Memorias de cálculo, planos y acompañamiento a la licencia',
    desc: 'BIC entrega el juego completo de documentos técnicos firmados por el ingeniero especialista con tarjeta COPNIA vigente: memorias de cálculo de todos los sistemas diseñados, planos constructivos en AutoCAD, especificaciones técnicas generales y particulares, y lista de materiales. BIC acompaña al cliente durante el trámite de la licencia de urbanismo ante la curaduría, respondiendo las glosas técnicas y ajustando los diseños si la autoridad lo requiere.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'Planos AutoCAD (redes en planta y perfil)', 'Especificaciones técnicas y cantidades de obra', 'Acompañamiento ante curaduría'],
    resultado: 'Expediente técnico completo listo para trámite de licencia de urbanismo',
  },
]

const FAQ = [
  {
    q: '¿Qué estudios e ingeniería necesito para la licencia de urbanismo?',
    a: 'Para la licencia de urbanismo en Colombia, la curaduría exige como mínimo: planos topográficos del predio, diseño de las redes de acueducto y alcantarillado internos con memorias de cálculo, diseño del sistema de drenaje pluvial, y — si el predio tiene cauces vecinos — el estudio de amenaza hídrica con zonificación conforme al Decreto 1807/2014. Además, si el proyecto requiere conexión a los servicios públicos municipales, hay que tramitar la factibilidad y viabilidad ante las ESP. BIC elabora todos estos estudios y diseños en un solo paquete.',
  },
  {
    q: '¿Cuánto cuesta la ingeniería completa para un proyecto urbanístico?',
    a: 'El costo depende del tamaño del proyecto (número de unidades, área del predio), la complejidad del terreno (pendiente, presencia de cauces, disponibilidad de servicios) y los estudios específicos que requiere la curaduría. Para un proyecto residencial urbano de 20 a 50 unidades con todos los estudios y diseños incluidos (acueducto, alcantarillado, pluvial, topografía), el costo de ingeniería oscila entre $35.000.000 y $90.000.000 COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas con base en el programa arquitectónico y la ubicación del proyecto.',
  },
  {
    q: '¿BIC puede hacer los diseños aunque la curaduría ya empezó a pedir glosas?',
    a: 'Sí. Es frecuente que los proyectos urbanísticos llegan a BIC porque la curaduría emitió una glosa técnica que el profesional anterior no pudo resolver — ya sea por faltantes en la memoria de cálculo, errores en el diseño del drenaje pluvial o porque falta el estudio de amenaza hídrica. BIC revisa la glosa, evalúa los diseños existentes e identifica exactamente qué hay que corregir o complementar para superar la observación de la curaduría.',
  },
  {
    q: '¿Qué pasa si el predio no tiene alcantarillado público cerca?',
    a: 'En zonas sin cobertura de alcantarillado público, la norma (RAS 2017) permite el tratamiento de aguas residuales en sitio: sistema de tanque séptico y campo de infiltración (para predios con espacio suficiente y suelo adecuado), o una PTAR (planta de tratamiento de aguas residuales) modular para proyectos más grandes. BIC realiza la prueba de percolación del suelo y diseña la alternativa de tratamiento que cumple los estándares del RAS 2017 y los requisitos de la CAR para el vertimiento.',
  },
  {
    q: '¿Qué es el RAS 2017 y por qué todos los diseños deben cumplirlo?',
    a: 'El RAS 2017 (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico) es la norma técnica colombiana que define los criterios de diseño para todos los sistemas de acueducto, alcantarillado y drenaje en el país. Es una norma de obligatorio cumplimiento emitida por el Ministerio de Vivienda. Cuando la curaduría o la ESP piden que los diseños cumplan el RAS 2017 (y su actualizacion la Resolución 0330/2017), están exigiendo que los cálculos de dotación, caudales, presiones y velocidades se hagan con los parámetros correctos para Colombia. BIC diseña exclusivamente bajo esta normativa.',
  },
  {
    q: '¿Cuánto tiempo toma la ingeniería completa de un proyecto urbanístico?',
    a: 'El plazo depende del tamaño del proyecto y la disponibilidad de información. Para un proyecto de mediana escala (20-50 unidades) con topografía existente, el plazo típico para tener todos los estudios y diseños listos para radicar la licencia es de 8 a 14 semanas. Si hay que hacer topografía desde cero y el proyecto incluye estudio de amenaza hídrica, puede ser 12 a 18 semanas. BIC puede organizar el trabajo en paralelo para optimizar el tiempo: topografía, hidrología y diseños avanzan simultáneamente cuando es posible.',
  },
  {
    q: '¿BIC firma los planos y memorias para la curaduría?',
    a: 'Sí. Todos los documentos técnicos que BIC entrega — memorias de cálculo, planos constructivos, informes de amenaza hídrica — van firmados por el ingeniero especialista con tarjeta profesional COPNIA vigente y póliza de responsabilidad civil profesional. La firma COPNIA es el requisito que exigen las curaderías y las ESP para aceptar los diseños. BIC asume la responsabilidad técnica de los diseños que firma.',
  },
  {
    q: '¿BIC trabaja fuera del Eje Cafetero?',
    a: 'BIC trabaja en todo Colombia. La firma tiene proyectos urbanísticos en Antioquia, Cundinamarca, Valle del Cauca, Nariño, Tolima y el Eje Cafetero. Los diseños de redes, memorias de cálculo y estudios hidrológicos se pueden elaborar con información remota; las visitas de campo para topografía y reconocimiento del predio se coordinan con profesionales locales certificados. BIC gestiona el proyecto completo a distancia para clientes fuera del Eje Cafetero.',
  },
  {
    q: '¿Qué información necesita BIC para hacer la propuesta técnica?',
    a: 'Para preparar una propuesta técnica y económica precisa, BIC necesita: el municipio y la dirección del predio, el área total del lote, el tipo de proyecto (número de unidades, uso — residencial, comercial, industrial), si hay cauces o quebradas dentro o cerca del predio, y cualquier documento que la curaduría o ESP ya haya enviado (factibilidad de servicios, observaciones de la curaduría). Con esta información BIC envía la propuesta en menos de 24 horas sin costo.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras y promotoras inmobiliarias', desc: 'Proyectos de vivienda, oficinas o comercio que necesitan los diseños hidráulicos y los estudios para obtener la licencia de urbanismo.' },
  { tipo: 'Propietarios de lotes urbanos', desc: 'Personas que quieren urbanizar su predio y necesitan orientación sobre qué estudios pedir y qué firma contratar.' },
  { tipo: 'Urbanizadores y parceladores', desc: 'Proyectos de parcelación y urbanización donde se requieren redes de acueducto y alcantarillado propias y estudio de ronda hídrica.' },
  { tipo: 'Planes parciales y proyectos mixtos', desc: 'Desarrollos de mayor escala con múltiples componentes donde BIC integra hidráulica, hidrosanitario y drenaje en un solo paquete.' },
  { tipo: 'Abogados y gestores de licencias', desc: 'Profesionales que coordinan el trámite de licencias para sus clientes y necesitan un firma de ingeniería confiable para los diseños técnicos.' },
  { tipo: 'Municipios y entidades públicas', desc: 'Alcaldías y entidades que desarrollan proyectos de vivienda de interés social o mejoramiento de barrios que requieren ingeniería técnica certificada.' },
]

const NORMATIVA = [
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico del Sector de Agua y Saneamiento — norma base para todos los diseños de redes' },
  { codigo: 'Res. 0330/2017', descripcion: 'MinVivienda — criterios técnicos actualizados para sistemas de acueducto y alcantarillado' },
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — aplicable a estructuras de retención y obras civiles del proyecto' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Incorporación del riesgo en los POT — zonificación de amenaza hídrica para licencias' },
  { codigo: 'Decreto 1077/2015', descripcion: 'DUR Sector Vivienda — requisitos técnicos para licencias de urbanismo y parcelación' },
  { codigo: 'NTC 1500', descripcion: 'Código Colombiano de Fontanería — estándar técnico para instalaciones hidrosanitarias' },
]

export default function IngenieriaProyectosUrbanisticos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería urbanística · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Ingeniería para Proyectos Urbanísticos en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Diseño de redes hidrosanitarias, drenaje pluvial y estudios de amenaza hídrica para licencias de urbanismo
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores elabora todos los estudios e ingeniería que exige la curaduría para
            la licencia de urbanismo: diseño del acueducto interno, alcantarillado sanitario, sistema de drenaje
            pluvial y — si hay cauces vecinos — el estudio de amenaza hídrica con zonificación Decreto 1807/2014.
            Memorias de cálculo firmadas por especialista COPNIA. Atendemos proyectos en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar ingeniería del proyecto</Btn>
            <Btn variant="outline" href="/licencia-de-urbanismo" dark>Licencia de urbanismo Colombia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017','Res. 0330/2017','HEC-RAS 2D','COPNIA vigente','Drenaje pluvial','Amenaza hídrica'].map(t => (
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
              { num: '+80', label: 'proyectos urbanísticos con diseños BIC' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: '100%', label: 'de diseños aprobados por curaduría' },
              { num: '4', label: 'sistemas en un solo paquete (acueducto, alcantarillado, pluvial, amenaza)' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes del proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué ingeniería incluye su proyecto urbanístico?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Un proyecto urbanístico tiene múltiples sistemas de ingeniería que deben diseñarse de forma integrada.
            BIC elabora todos los componentes en un solo paquete, con un solo interlocutor técnico y memorias de cálculo coherentes entre sí.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {COMPONENTES.map(c => (
              <div key={c.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{c.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{c.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 3 }}>NORMA APLICABLE</p>
                  <p style={{ fontSize: 12, color: '#444', margin: 0 }}>{c.norma}</p>
                </div>
                <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 3 }}>ENTREGABLE</p>
                  <p style={{ fontSize: 12, color: '#444', margin: 0 }}>{c.entregable}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo trabaja BIC en proyectos urbanísticos
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del diagnóstico del predio al expediente técnico completo para la curaduría.
            BIC integra todos los estudios y diseños en un proceso coordinado.
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
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto urbanístico que necesita ingeniería?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes de BIC en proyectos urbanísticos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco técnico y legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normas que rigen la ingeniería urbanística en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios BIC para su proyecto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Licencia de urbanismo Colombia', href: '/licencia-de-urbanismo' },
              { label: 'Construir cerca a un río o quebrada', href: '/construir-cerca-rio-quebrada-colombia' },
              { label: 'Tengo un lote — ¿qué necesito?', href: '/tengo-un-lote-colombia' },
              { label: 'Plan parcial Colombia', href: '/plan-parcial-colombia' },
              { label: 'Redes hidrosanitarias', href: '/servicios/redes-hidrosanitarias' },
              { label: 'Diseño de acueductos', href: '/servicios/diseno-acueductos' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 10, padding: '14px 18px', color: '#003B6F', fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4 }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5eef9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f9ff')}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre ingeniería para proyectos urbanísticos en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏗️</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita la ingeniería completa<br />para su proyecto urbanístico?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el municipio, el tamaño del proyecto y qué le está pidiendo la curaduría.
            BIC le envía propuesta técnica y económica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Especialistas COPNIA vigentes · Atención en todo Colombia
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
