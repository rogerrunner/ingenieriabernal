import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito información sobre concesión de aguas en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Concesión de Aguas en Colombia — Trámite ante CAR | BIC Ingeniería',
  description: 'BIC elabora los estudios técnicos para tramitar concesiones de aguas superficiales y subterráneas ante las CAR en Colombia. Decreto 1076/2015. Aforos, hidrología y oferta hídrica. Cotice en 24 horas.',
  keywords: [
    'concesión de aguas Colombia',
    'concesión aguas superficiales Colombia',
    'concesión aguas subterráneas Colombia',
    'trámite concesión aguas CAR Colombia',
    'CORPOCALDAS concesión aguas',
    'CARDER concesión aguas',
    'estudio oferta demanda hídrica Colombia',
    'permiso captación agua Colombia',
    'Decreto 1076 2015 concesión aguas',
    'aforo caudales Colombia concesión',
    'caudal ecológico Colombia',
    'ingeniería hídrica ambiental Colombia',
const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero asesoría para tramitar una Concesión de Aguas en Colombia')

const seoConfig = {
  title: 'Concesión de Aguas en Colombia | Trámites y Estudios Técnicos',
  description: 'Tramitación de concesión de aguas en Colombia. Estudios técnicos, aforos, memorias de cálculo y radicación ante corporaciones ambientales (CAR, CORPOCALDAS, CRQ, CARDER).',
  keywords: [
    'concesion aguas colombia',
    'tramite concesion aguas colombia',
    'corporacion autonoma regional concesion',
    'concesion aguas superficiales colombia',
    'permiso aprovechamiento hidrico colombia',
    'concesion aguas corpocaldas',
    'concesion aguas crq',
    'estudio tecnico concesion aguas',
    'aforo caudal concesion aguas',
    'consultoría concesión hídrica colombia',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-colombia',
}

const TIPOS = [
  {
    icon: '🌊',
    tipo: 'Concesión de Aguas Superficiales',
    desc: 'Autorización para captar agua de ríos, quebradas, arroyos o ciénagas. El trámite se realiza ante la Corporación Autónoma Regional competente según el Decreto 1076/2015. BIC elabora el estudio hidrológico de la fuente, el balance oferta-demanda, el análisis de caudal ecológico y la memoria descriptiva del proyecto de captación.',
    car: ['CORPOCALDAS (Caldas)', 'CARDER (Risaralda)', 'CRQ (Quindío)', 'CDMB (Santander)', 'CAR (Cundinamarca)', 'Demás CAR del país'],
  },
  {
    icon: '⬇️',
    tipo: 'Concesión de Aguas Subterráneas',
    desc: 'Autorización para perforar pozos y captar agua del subsuelo. Requiere estudio hidrogeológico del acuífero, prueba de bombeo, análisis de calidad del agua y evaluación del impacto sobre otros usuarios. BIC realiza el estudio técnico completo e interpreta los ensayos de campo para determinar la capacidad sostenible de extracción.',
    car: ['Toda CAR con acuíferos en su jurisdicción', 'Zonas costeras y valles interandinos', 'Regiones con restricción de agua superficial'],
  },
  {
    icon: '🏗️',
    tipo: 'Permiso de Ocupación de Cauce',
    desc: 'Requerido para construir cualquier estructura dentro del cauce o en la ronda hídrica de un río o quebrada: bocatomas, puentes, boxcúlverts, muros de encauzamiento, obras de protección. BIC elabora la memoria descriptiva, planos y modelación hidráulica exigidos por la CAR para este permiso.',
    car: ['Obligatorio en todo el territorio nacional', 'Articulado con la concesión de aguas', 'Previo a cualquier obra en cauce'],
  },
  {
    icon: '🔄',
    tipo: 'Renovación y Modificación de Concesión',
    desc: 'Las concesiones de aguas tienen vigencia limitada (entre 2 y 10 años según el uso). BIC elabora los estudios técnicos para la renovación, incluyendo la actualización del aforo de caudales, el análisis de cumplimiento de la concesión vigente y las condicionantes ambientales impuestas por la CAR.',
    car: ['Acueductos municipales con concesiones vencidas', 'Sistemas de riego con expansión de área', 'Industrias con cambio en el proceso productivo'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Aforo de caudales y caracterización de la fuente',
    desc: 'Medición del caudal de la fuente hídrica en diferentes períodos del año (temporada seca y lluviosa) para determinar la disponibilidad real de agua. BIC realiza aforos con molinete, velocímetro acústico Doppler o método volumétrico según las condiciones del cauce.',
    herramientas: ['Molinete hidrométrico', 'ADCP (Doppler acústico)', 'Método volumétrico', 'Estaciones IDEAM cercanas'],
    resultado: 'Caudales medios mensuales + caudal mínimo absoluto',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico y balance oferta-demanda',
    desc: 'Con base en los aforos y la información hidrológica del IDEAM, se determina la oferta hídrica de la fuente en condiciones de año seco (período de retorno 10 años). Se compara con la demanda del proyecto para verificar que la fuente puede suministrar el caudal solicitado sin comprometer el caudal ecológico.',
    herramientas: ['HEC-HMS (hidrología)', 'Datos IDEAM (climatología)', 'Análisis de frecuencia hidrológica', 'Curvas de duración de caudales'],
    resultado: 'Balance oferta-demanda + viabilidad hidrológica de la concesión',
  },
  {
    paso: '03',
    titulo: 'Cálculo del caudal ecológico',
    desc: 'El Decreto 1076/2015 establece que se debe mantener en el cauce el caudal ecológico necesario para preservar el ecosistema fluvial. BIC calcula el caudal ecológico mediante los métodos aceptados por la CAR (método del porcentaje del caudal medio mensual mínimo) y verifica que el caudal solicitado no supere el 50% del caudal disponible.',
    herramientas: ['Método IDEAM (caudal ecológico)', 'Análisis curva de permanencia', 'Resolución 865/2004 MAVDT', 'Protocolo CAR regional'],
    resultado: 'Caudal ecológico certificado + caudal máximo concesionable',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente técnico para la CAR',
    desc: 'BIC elabora el expediente técnico completo para radicar ante la CAR: memoria descriptiva del proyecto, estudio de oferta y demanda hídrica, análisis del caudal ecológico, planos del sistema de captación, localización georreferenciada y formularios de solicitud exigidos por cada Corporación.',
    herramientas: ['AutoCAD (planos)', 'ArcGIS (localización)', 'Formularios SINA', 'Informe técnico firmado COPNIA'],
    resultado: 'Expediente completo listo para radicación ante la CAR',
  },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — procedimiento y requisitos para concesiones de aguas superficiales y subterráneas' },
  { codigo: 'Resolución 865/2004', descripcion: 'MAVDT — metodología para el cálculo del índice de escasez y el caudal ecológico en Colombia' },
  { codigo: 'Ley 99/1993', descripcion: 'Ley general ambiental — principios y funciones de las Corporaciones Autónomas Regionales' },
  { codigo: 'Código de Recursos Naturales (Decreto 2811/1974)', descripcion: 'Marco original del régimen de concesiones de aguas en Colombia' },
  { codigo: 'Resoluciones CAR vigentes', descripcion: 'Cada CAR tiene resoluciones específicas sobre criterios técnicos y tarifas para concesiones en su jurisdicción' },
const SERVICIOS = [
  {
    icon: '💧',
    titulo: 'Estudios técnicos para concesión de aguas superficiales',
    desc: 'Elaboración del estudio técnico que sustenta la solicitud de concesión ante la CAR: aforo de caudales en la fuente, balance hídrico de la cuenca, cálculo del caudal ecológico mínimo, justificación del volumen solicitado y evaluación de la disponibilidad hídrica. Cumplimiento del Decreto 1076 de 2015 y los protocolos de cada corporación autónoma regional.',
  },
  {
    icon: '📊',
    titulo: 'Aforos y caracterización de la fuente hídrica',
    desc: 'Medición de caudales mediante métodos directos (molinete, flotadores, estructuras de aforo) e indirectos (curva de gasto). Monitoreo de caudales en período de estiaje y lluvia para determinar la disponibilidad real de la fuente. Análisis de series históricas del IDEAM y modelación hidrológica para proyección de caudales a largo plazo.',
  },
  {
    icon: '📋',
    titulo: 'Radicación y trámite ante la corporación ambiental',
    desc: 'Preparación del expediente completo para radicación: solicitud formal, estudio técnico firmado por especialista, planos de localización georreferenciados, certificado de propiedad o autorización del predio, y pago de tasas de uso. BIC conoce los requisitos específicos de CORPOCALDAS, CRQ, CARDER, CAR Cundinamarca, CDMB, CORMACARENA y demás corporaciones del país.',
  },
  {
    icon: '🔄',
    titulo: 'Renovación, modificación y seguimiento de concesión',
    desc: 'Tramitación de renovaciones de concesiones vencidas, modificaciones de caudal o punto de captación, y elaboración de informes de monitoreo requeridos por la resolución de concesión. BIC acompaña a titulares de concesión en el cumplimiento de las condiciones establecidas por la autoridad ambiental para mantener vigente el permiso de aprovechamiento hídrico.',
  },
]

const NORMATIVA = [
  {
    norma: 'Decreto 1076 de 2015 — Decreto Único Reglamentario Sector Ambiente',
    desc: 'Compila toda la normativa de aprovechamiento del recurso hídrico en Colombia. Establece los requisitos para solicitar concesión de aguas superficiales y subterráneas, los documentos exigidos, los plazos de respuesta de la CAR, las causales de caducidad y los criterios para el cálculo del caudal ecológico mínimo que debe permanecer en la fuente.',
  },
  {
    norma: 'Política Nacional para la Gestión Integral del Recurso Hídrico',
    desc: 'Define los lineamientos para el ordenamiento, uso eficiente y protección del agua en Colombia. Establece que las concesiones deben otorgarse respetando el caudal ambiental y la disponibilidad real de la fuente, lo cual requiere un estudio técnico detallado con aforos de campo y análisis hidrológico de la cuenca aportante.',
  },
  {
    norma: 'Resolución 865 de 2004 — caudal ambiental',
    desc: 'Adopta la metodología para el cálculo del índice de escasez para aguas superficiales y subterráneas en Colombia. Este índice determina si una fuente puede soportar la concesión solicitada sin comprometer el caudal ecológico ni los derechos de terceros. BIC calcula el índice de escasez como parte del estudio técnico de cada concesión.',
  },
  {
    norma: 'Ley 99 de 1993 — Sistema Nacional Ambiental (SINA)',
    desc: 'Crea las Corporaciones Autónomas Regionales como autoridades ambientales con competencia para otorgar concesiones de agua. Cada CAR tiene autonomía para establecer requisitos adicionales y criterios técnicos específicos para su jurisdicción. BIC conoce las particularidades de cada corporación en el Eje Cafetero y otras regiones del país.',
  },
]

const CORPORACIONES = [
  { nombre: 'CORPOCALDAS', region: 'Caldas', desc: 'Corporación Autónoma Regional de Caldas. Jurisdicción sobre toda la cuenca del río Cauca en Caldas, quebradas del Eje Cafetero y afluentes del río Magdalena en el departamento.' },
  { nombre: 'CRQ', region: 'Quindío', desc: 'Corporación Autónoma Regional del Quindío. Trámites de concesión en cuencas del río La Vieja, quebradas de Armenia y municipios del departamento del Quindío.' },
  { nombre: 'CARDER', region: 'Risaralda', desc: 'Corporación Autónoma Regional de Risaralda. Concesiones en cuencas del río Otún, Consotá y afluentes en Pereira, Dosquebradas, Santa Rosa y municipios de Risaralda.' },
  { nombre: 'CAR Cundinamarca', region: 'Cundinamarca y Bogotá', desc: 'Corporación Autónoma Regional de Cundinamarca. Mayor volumen de trámites del país. Concesiones en cuencas de los ríos Bogotá, Sumapaz, Magdalena y sus afluentes en Cundinamarca.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Diagnóstico del predio y la fuente', desc: 'Visita de campo para identificar el punto de captación, estimar caudales iniciales, verificar la fuente y recopilar antecedentes existentes de concesiones aguas arriba y aguas abajo.' },
  { paso: '02', titulo: 'Aforos y estudio técnico', desc: 'Medición de caudales, análisis de información hidrológica del IDEAM, cálculo del caudal ecológico, balance hídrico de la cuenca y justificación técnica del volumen solicitado.' },
  { paso: '03', titulo: 'Elaboración del expediente', desc: 'Preparación de todos los documentos requeridos por la CAR: solicitud formal, estudio técnico firmado, planos georreferenciados, certificados de predio y pago de tasas de radicación.' },
  { paso: '04', titulo: 'Radicación y seguimiento', desc: 'Presentación del expediente ante la corporación, respuesta a requerimientos técnicos de los funcionarios y acompañamiento hasta la expedición de la resolución de concesión.' },
]

const FAQ = [
  {
    q: '¿Cuánto tiempo tarda tramitar una concesión de aguas en Colombia?',
    a: 'El plazo del trámite ante la CAR varía entre 3 y 12 meses según la Corporación, la complejidad del caso y la carga de trabajo de la entidad. CORPOCALDAS y CARDER tienen tiempos típicos de 4-6 meses para concesiones de uso doméstico o agrícola. Para uso industrial o municipal los tiempos pueden ser mayores. BIC puede elaborar los estudios técnicos en 4-8 semanas para que el expediente esté listo para radicar cuanto antes.',
  },
  {
    q: '¿Qué pasa si captamos agua sin concesión?',
    a: 'Captar agua de cualquier fuente pública sin concesión es una infracción ambiental en Colombia, sancionable con multas de hasta 5.000 salarios mínimos mensuales, la demolición de las obras de captación y la suspensión del suministro. Además, si el proyecto es financiado con recursos públicos (SGR, SGP, MinVivienda), la ausencia de concesión impide el desembolso. BIC tramita la concesión antes de iniciar las obras para evitar estas consecuencias.',
  },
  {
    q: '¿Cuánto cuesta elaborar el estudio para una concesión de aguas?',
    a: 'El costo del estudio técnico depende del tipo de fuente (superficial o subterránea), si se requiere campaña de aforos de campo, el uso del agua y los entregables exigidos por la CAR. Para una concesión de aguas superficiales para acueducto o riego de mediana escala, el estudio técnico completo oscila entre $8 y $20 millones COP. BIC envía propuesta detallada en 24 horas.',
  },
  {
    q: '¿La concesión de aguas es necesaria para diseñar una bocatoma?',
    a: 'Sí, y ambos trámites están directamente relacionados. La concesión de aguas autoriza a captar el caudal; el permiso de ocupación de cauce autoriza a construir las obras (bocatoma, barraje). BIC tramita simultáneamente los dos permisos ante la CAR para optimizar el tiempo del proceso. El diseño de la bocatoma es el documento técnico principal para solicitar el permiso de ocupación de cauce.',
  },
  {
    q: '¿BIC gestiona concesiones en toda Colombia?',
    a: 'BIC elabora los estudios técnicos para concesiones ante todas las CAR del país: CORPOCALDAS, CARDER, CRQ, CDMB, CAR Cundinamarca, CORNARE, CORANTIOQUIA, CVC, CRC, CORPONARIÑO, entre otras. La mayor parte del trabajo técnico (hidrología, análisis de oferta-demanda, informes) se realiza desde Manizales con desplazamientos de campo focalizados para los aforos.',
  },
]

const ARTICULOS = [
  { href: '/blog/estudios-car-corpocaldas-colombia', title: 'Estudios ante CAR y CORPOCALDAS en Colombia' },
  { href: '/blog/bocatoma-caudal-riego-colombia', title: 'Bocatoma y Caudal para Riego en Colombia' },
  { href: '/blog/aforo-caudales-colombia', title: 'Aforo de Caudales en Colombia' },
]
    q: '¿Qué es una concesión de aguas y cuándo se necesita en Colombia?',
    a: 'La concesión de aguas es el derecho que otorga una Corporación Autónoma Regional para aprovechar el agua de una fuente superficial o subterránea. En Colombia se requiere para: (1) captar agua de ríos, quebradas o manantiales para acueductos rurales o urbanos; (2) derivar agua para sistemas de riego agrícola; (3) abastecer plantas industriales que consumen agua en sus procesos; (4) recargar tanques para ganadería en zonas rurales. Cualquier aprovechamiento de agua sin concesión es ilegal y puede generar multas por parte de la CAR.',
  },
  {
    q: '¿Cuáles son los documentos requeridos para tramitar una concesión de aguas?',
    a: 'Los requisitos básicos en la mayoría de corporaciones son: solicitud formal con datos del solicitante y del predio, estudio técnico firmado por un profesional (ingeniería civil, ambiental o afines) que incluya aforos de caudal, balance hídrico y justificación del volumen, planos de localización del predio y del punto de captación georreferenciados, certificado de tradición y libertad del predio o autorización del propietario, y comprobante de pago de las tasas de radicación. Algunas CAR exigen documentos adicionales según la fuente y el uso del agua.',
  },
  {
    q: '¿Cuánto tiempo demora el trámite de concesión de aguas en Colombia?',
    a: 'El tiempo depende de la corporación y la complejidad del caso. El Decreto 1076 de 2015 establece que la CAR debe resolver la solicitud en un plazo máximo de 60 días hábiles después de expedida la licencia de trámite. En la práctica, los tiempos reales en el Eje Cafetero son: CORPOCALDAS: 3–8 meses; CRQ: 3–6 meses; CARDER: 4–9 meses. Los principales factores que prolongan el trámite son la solicitud de información adicional por parte de la CAR y la complejidad de la fuente (ríos con múltiples concesiones otorgadas).',
  },
  {
    q: '¿Cuánto cuesta el estudio técnico para la concesión de aguas?',
    a: 'El costo del estudio técnico en Colombia en 2026 varía según la complejidad: para concesión de fuente simple con caudal pequeño (< 1 L/s), predio accesible y fuente sin conflictos conocidos: $5–12 millones COP. Para concesión con aforo de campo, análisis hidrológico y balance de cuenca para caudales medios: $12–25 millones COP. Para proyectos de acueducto rural con estudios de disponibilidad hídrica a largo plazo y múltiples fuentes alternativas: $20–50 millones COP. El costo de la radicación (tasas de la CAR) es independiente y varía según la corporación.',
  },
  {
    q: '¿BIC puede tramitar la concesión ante cualquier CAR del país?',
    a: 'Sí. BIC elabora estudios técnicos para concesiones de agua ante cualquier corporación autónoma regional del país. Conocemos los requisitos específicos y los formatos de CORPOCALDAS, CRQ, CARDER, CAR Cundinamarca, CDMB, CORTOLIMA, CORMACARENA, CVC, CORNARE y otras. El trámite de radicación puede hacerse de forma remota en muchas corporaciones, lo que nos permite atender proyectos en todo el territorio nacional desde nuestra oficina en Manizales.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'BIC — Bernal Ingeniería Consultores',
      url: 'https://ingenieriabernal.co',
      telephone: '+573162888989',
      address: { '@type': 'PostalAddress', addressLocality: 'Manizales', addressRegion: 'Caldas', addressCountry: 'CO' },
      areaServed: 'Colombia',
      description: 'Consultoría en ingeniería hidráulica e hidrológica en Colombia. Tramitación de concesiones de agua, estudios hidrológicos y diseño de sistemas hídricos.',
    },
    {
      '@type': 'Service',
      name: 'Concesión de Aguas en Colombia — Trámites y Estudios Técnicos',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Tramitación de concesión de aguas superficiales ante corporaciones autónomas en Colombia. Estudios técnicos, aforos y acompañamiento ante CAR.',
      serviceType: 'Ingeniería Hidrológica y Ambiental',
    },
  ],
}

export default function ConcesionAguasColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Permisos ambientales · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Concesión de Aguas en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Estudios técnicos para tramitar concesiones ante las CAR — Decreto 1076/2015
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores elabora los estudios hidrológicos, aforos de caudales
            y análisis de oferta-demanda hídrica requeridos para tramitar concesiones de aguas
            superficiales y subterráneas ante las Corporaciones Autónomas Regionales en Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre concesión de aguas</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver diseño de bocatomas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Decreto 1076/2015','Aforo caudales','Oferta hídrica','Caudal ecológico','CORPOCALDAS','CARDER · CRQ'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Trámite especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Concesión de Aguas en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Trámites Técnicos ante CAR, CORPOCALDAS, CRQ y CARDER</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores elabora los estudios técnicos y gestiona el trámite
            de concesión de aguas superficiales ante corporaciones autónomas regionales en toda
            Colombia. Aforos de caudal, balances hídricos, memorias de cálculo firmadas por
            especialista y acompañamiento hasta la expedición de la resolución.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Consultar trámite
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de permiso</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Tipos de concesión y permisos hídricos en Colombia
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>CAR COMPETENTES</p>
                  <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                    {t.car.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Corporaciones:</span>
          {['CORPOCALDAS', 'CRQ', 'CARDER', 'CAR', 'CDMB', 'CORTOLIMA', 'Decreto 1076/2015'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el trámite de concesión de aguas?</h2>
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

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo BIC prepara el estudio para su concesión
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
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
      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa: Decreto 1076/2015, Ley 99/1993 y caudal ambiental</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {NORMATIVA.map((item) => (
              <div key={item.norma} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 10,
                }}>{item.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa de concesiones de aguas en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 11,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
      {/* ── CORPORACIONES ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Corporaciones autónomas</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tramitación ante CORPOCALDAS, CRQ, CARDER y CAR</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {CORPORACIONES.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 6,
                }}>{s.nombre}</h3>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(23,162,184,0.7)',
                  marginBottom: 10,
                }}>{s.region}</div>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
      {/* ── PROCESO ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>4 pasos para tramitar su concesión de aguas</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#17A2B8',
                  fontSize: 32, marginBottom: 8,
                }}>{p.paso}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Preguntas sobre concesiones de aguas en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Concesión de aguas en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita tramitar una concesión<br />de aguas en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de fuente, el caudal que necesita y la CAR de su región.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              }}
            >
              📱 Consultar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita tramitar una concesión de aguas?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el uso del agua (acueducto, riego, industria), el municipio, la fuente
            hídrica y la corporación autónoma competente. Le orientamos sobre los requisitos
            específicos y le cotizamos el estudio técnico en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 316 288 8989
          </Btn>
        </div>
      </Section>
    </>
  )
}
