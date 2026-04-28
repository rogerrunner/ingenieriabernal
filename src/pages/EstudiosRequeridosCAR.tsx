import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, la CAR me pidió unos estudios técnicos y no sé exactamente qué necesito. ¿Pueden orientarme y elaborarlos?')

const seoConfig = {
  title: 'Me Pidieron Estudios en la CAR Colombia — ¿Qué Necesito y Cómo Obtenerlos? | BIC',
  description: 'Si la CAR le pidió estudios para una concesión de aguas, permiso de vertimiento, ocupación de cauce o plan de manejo ambiental, BIC los elabora. Eje Cafetero (CORPOCALDAS, CARDER, CRQ) y todo Colombia. Propuesta técnica en 24 horas.',
  keywords: [
    'estudios requeridos por la CAR Colombia',
    'me pidieron estudios en la CAR',
    'concesión aguas CAR Colombia',
    'permiso vertimiento CAR Colombia',
    'ocupación de cauce CAR trámite',
    'plan de manejo ambiental PMA Colombia',
    'estudio hidrológico CAR concesión',
    'CORPOCALDAS estudios técnicos',
    'CARDER trámites ambientales',
    'CRQ estudios CAR Quindío',
    'estudios técnicos autoridad ambiental',
    'firma ingeniería trámites CAR Colombia',
    'qué estudios pide la CAR Colombia',
    'empresa estudios ambientales CAR',
    'trámite CAR Manizales Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/me-pidieron-estudios-en-la-car',
}

const TRAMITES = [
  {
    icon: '💧',
    tipo: 'Concesión de Aguas Superficiales',
    subtitulo: 'Permiso para captar agua de un río o quebrada',
    desc: 'La concesión de aguas superficiales es el permiso que otorga la CAR para captar agua de un río, quebrada, lago o canal. Se requiere para acueductos, riego agrícola, uso industrial, minería y generación de energía. El trámite exige presentar un estudio técnico que demuestre que hay suficiente agua en la fuente, que el caudal a captar no afecta el caudal ecológico, y que la obra de captación es la técnicamente correcta. BIC elabora el estudio de oferta y demanda hídrica, el análisis de caudal ecológico y la memoria descriptiva de la captación conforme al Decreto 1076/2015.',
    documentos: ['Estudio de oferta y demanda hídrica', 'Análisis de caudal ecológico (Q ecológico)', 'Memoria descriptiva de la bocatoma o captación', 'Formulario CAR de solicitud de concesión'],
    car: 'CORPOCALDAS · CARDER · CRQ · CAR Cundinamarca · todas las CAR',
  },
  {
    icon: '🏗️',
    tipo: 'Permiso de Ocupación de Cauce',
    subtitulo: 'Para construir obras dentro o junto a un cauce',
    desc: 'El permiso de ocupación de cauce es la autorización de la CAR para construir obras dentro del cauce o que afecten su sección hidráulica: bocatomas, diques, gaviones, muros de protección, pasos de vía sobre cauces, puentes, encauzamientos. Sin este permiso, la CAR puede ordenar la demolición de las obras. BIC elabora el estudio hidráulico del cauce, el análisis de afectación de la obra, la memoria descriptiva y el plano de localización de la obra conforme a los requisitos de la CAR competente.',
    documentos: ['Estudio hidráulico del cauce afectado', 'Memoria descriptiva de la obra', 'Planos de la obra (planta, cortes)', 'Formulario CAR de permiso de ocupación de cauce'],
    car: 'CORPOCALDAS · CARDER · CRQ · CORNARE · todas las CAR',
  },
  {
    icon: '🏭',
    tipo: 'Permiso de Vertimiento',
    subtitulo: 'Para descargar aguas residuales a un cauce',
    desc: 'El permiso de vertimiento autoriza la descarga de aguas residuales domésticas o industriales (tratadas) a un cuerpo de agua. Se requiere cuando una empresa, industria, PTAR o municipio descarga sus efluentes a un río, quebrada o cuerpo de agua. El estudio técnico debe demostrar que el vertimiento no supera los estándares de calidad exigidos (Resolución 631 de 2015), que la fuente receptora tiene capacidad de dilución suficiente y que el sistema de tratamiento es el adecuado. BIC elabora el análisis de capacidad de autodepuración del cauce y el estudio de impacto del vertimiento.',
    documentos: ['Caracterización del vertimiento (análisis de laboratorio)', 'Estudio de capacidad de dilución del cauce receptor', 'Memoria del sistema de tratamiento (PTAR)', 'Formulario CAR de solicitud de permiso de vertimiento'],
    car: 'Todas las CAR de Colombia según jurisdicción del proyecto',
  },
  {
    icon: '🌿',
    tipo: 'Plan de Manejo Ambiental (PMA)',
    subtitulo: 'Medidas para reducir el impacto de una obra o proyecto',
    desc: 'El Plan de Manejo Ambiental (PMA) es el documento que establece las medidas de prevención, mitigación, corrección y compensación de los impactos ambientales de un proyecto. La CAR lo exige cuando la autorización ambiental (concesión, permiso de vertimiento, ocupación de cauce) está condicionada a presentar un PMA. BIC elabora el PMA con el diagnóstico ambiental del área, la identificación de impactos, las medidas de manejo por componente (recurso hídrico, flora, fauna, suelo) y el programa de seguimiento y monitoreo.',
    documentos: ['Diagnóstico ambiental de la línea base', 'Identificación y evaluación de impactos (matriz)', 'Fichas de manejo ambiental por componente', 'Programa de monitoreo y seguimiento'],
    car: 'Todas las CAR y ANLA (proyectos de escala nacional)',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Identificar exactamente qué pidió la CAR',
    desc: 'El primer paso es leer con cuidado el requerimiento de la CAR — la resolución, el oficio o la comunicación — y entender exactamente qué estudio o permiso piden. Las CAR usan términos técnicos que pueden ser confusos para el propietario o el gestor del proyecto: "estudio de oferta y demanda hídrica", "análisis de caudal ecológico", "estudio de diagnóstico ambiental". BIC revisa el requerimiento de la CAR, identifica exactamente qué documentos técnicos hay que preparar y le explica al cliente en lenguaje sencillo qué se necesita y por qué.',
    herramientas: ['Lectura del requerimiento de la CAR', 'Decreto 1076/2015 (trámites ambientales)', 'Guías técnicas de cada CAR', 'Consulta previa con la CAR si es necesario'],
    resultado: 'Diagnóstico del trámite: qué estudios se necesitan, qué plazo tiene la CAR y cuánto demora obtener el permiso',
  },
  {
    paso: '02',
    titulo: 'Recopilar la información técnica del proyecto y la fuente',
    desc: 'Cada estudio técnico para la CAR requiere información del proyecto (caudal a captar, tipo de obra, localización) y de la fuente hídrica (caudales del río, calidad del agua, información del IDEAM). BIC identifica qué información existe (datos del IDEAM, cartografía del IGAC, estudios previos) y qué información hay que levantar en campo (aforos del caudal, muestras de calidad de agua, levantamiento topográfico del cauce). Se elabora el plan de trabajo para obtener toda la información necesaria en el menor tiempo posible.',
    herramientas: ['Consulta de datos IDEAM (caudales y pluviometría)', 'Aforos de campo (vertedero, molinete, trazadores)', 'Cartografía IGAC del área de estudio', 'Análisis de laboratorio de calidad de agua (si aplica)'],
    resultado: 'Información técnica completa del proyecto y de la fuente hídrica para los estudios',
  },
  {
    paso: '03',
    titulo: 'Elaborar los estudios técnicos exigidos',
    desc: 'Con la información recopilada, BIC elabora los estudios técnicos específicos que exige la CAR. Para la concesión de aguas: el estudio de oferta y demanda hídrica con el cálculo del caudal disponible, el caudal ecológico mínimo y el caudal otorgable. Para el permiso de ocupación de cauce: el estudio hidráulico del cauce, el análisis de afectación de la obra y los planos. Para el permiso de vertimiento: el estudio de dilución del cauce receptor. Para el PMA: el diagnóstico ambiental y las fichas de manejo. Cada estudio se elabora conforme a la guía técnica específica de la CAR.',
    herramientas: ['Metodologías del IDEAM para hidrología', 'Decreto 1076/2015 (criterios técnicos)', 'Resolución 631/2015 (estándares de vertimiento)', 'HEC-RAS (análisis hidráulico del cauce)'],
    resultado: 'Estudios técnicos completos según los requisitos específicos de la CAR',
  },
  {
    paso: '04',
    titulo: 'Preparar el expediente para radicación ante la CAR',
    desc: 'La CAR tiene un formato específico de radicación: formularios, anexos técnicos, número de copias y formato de planos. BIC prepara el expediente completo de radicación conforme a los requisitos de la CAR competente (CORPOCALDAS, CARDER, CRQ, CAR Cundinamarca, CORNARE, etc.). El expediente incluye los formularios de solicitud, los estudios técnicos con firma COPNIA, los planos en el formato exigido, el poder o autorización del propietario y los documentos de soporte del predio (escrituras, matrícula inmobiliaria, certificado de libertad).',
    herramientas: ['Formularios de cada CAR', 'Estudios técnicos firmados (COPNIA)', 'Planos en formato requerido por la CAR', 'Documentos del predio y el propietario'],
    resultado: 'Expediente completo listo para radicación ante la CAR, sin riesgo de rechazo por documentos faltantes',
  },
  {
    paso: '05',
    titulo: 'Acompañamiento durante el trámite ante la CAR',
    desc: 'Después de radicar el expediente, la CAR puede hacer requerimientos adicionales, solicitar información complementaria o realizar visita técnica al predio. BIC acompaña al cliente durante todo el proceso: responde los requerimientos técnicos de la CAR, elabora la información complementaria si se pide, y asiste a las visitas técnicas con el funcionario de la CAR. Este acompañamiento reduce los tiempos del trámite porque los requerimientos se responden rápido y correctamente, sin necesidad de ir y volver con la CAR varias veces.',
    herramientas: ['Respuesta a requerimientos técnicos de la CAR', 'Asistencia a visitas técnicas de campo', 'Elaboración de información complementaria', 'Seguimiento al estado del trámite'],
    resultado: 'Permiso ambiental obtenido en el menor tiempo posible, con acompañamiento técnico en todo el proceso',
  },
]

const FAQ = [
  {
    q: '¿Qué es la CAR y cuándo me puede pedir estudios?',
    a: 'La Corporación Autónoma Regional (CAR) es la autoridad ambiental competente en Colombia para el manejo, uso y aprovechamiento de los recursos naturales renovables dentro de su jurisdicción territorial. Hay 33 CAR en Colombia (CORPOCALDAS en Caldas, CARDER en Risaralda, CRQ en Quindío, CAR en Cundinamarca, CORNARE en Antioquia oriental, etc.). La CAR puede pedirle estudios técnicos cuando usted quiere: captar agua de un río o quebrada (concesión de aguas), construir obras dentro de un cauce (permiso de ocupación de cauce), descargar aguas residuales a un cuerpo de agua (permiso de vertimiento), o cuando un proyecto o actividad puede afectar recursos hídricos o naturales bajo su jurisdicción.',
  },
  {
    q: '¿Qué es la concesión de aguas y cuándo se necesita?',
    a: 'La concesión de aguas es el permiso que otorga la CAR para captar o aprovechar agua de una fuente superficial (río, quebrada, lago, canal) o subterránea (pozo profundo, manantial). Se necesita cuando se quiere: captar agua de un río para acueducto municipal o veredal, regar cultivos con agua de una quebrada, usar agua de un caño para procesos industriales o mineros, generar electricidad en una pequeña central hidroeléctrica, o llenar una laguna o estanque piscícola. Sin la concesión de aguas, la captación es ilegal y la CAR puede imponer sanciones. La concesión define el caudal máximo autorizado y las condiciones de uso del agua.',
  },
  {
    q: '¿Cuánto tiempo demora el trámite ante la CAR?',
    a: 'Los plazos de los trámites ante la CAR varían según el tipo de permiso y la CAR específica. Según el Decreto 1076/2015, los plazos máximos legales son: concesión de aguas: 30 días hábiles desde la radicación completa del expediente; permiso de ocupación de cauce: 30 días hábiles; permiso de vertimiento: 60 días hábiles; Plan de Manejo Ambiental: variable según el tipo de proyecto. En la práctica, estos plazos se pueden extender por requerimientos de información adicional o por la carga de trabajo de la CAR. BIC ha logrado tiempos de 45 a 90 días para los trámites más comunes cuando el expediente se radica completo y correcto desde el principio.',
  },
  {
    q: '¿Qué pasa si no tengo la concesión de aguas y ya estoy captando?',
    a: 'Captar agua sin la concesión de aguas es una infracción ambiental bajo la Ley 1333 de 2009. La CAR puede iniciar un proceso sancionatorio que incluye: multa económica (hasta 5.000 salarios mínimos mensuales según la gravedad), suspensión de la actividad, demolición de las obras de captación y suspensión o cancelación de otros permisos ambientales. Si ya está captando sin permiso, lo más conveniente es radicar la solicitud de concesión de aguas lo antes posible — mientras el trámite está en curso, la CAR suele dar un plazo antes de iniciar el proceso sancionatorio. BIC puede ayudarle a radicar el expediente urgentemente.',
  },
  {
    q: '¿BIC puede ayudarme con la CAR de mi departamento aunque no esté en el Eje Cafetero?',
    a: 'Sí. BIC elabora los estudios técnicos para trámites ante cualquier CAR de Colombia. Aunque BIC tiene su base en Manizales y trabaja frecuentemente con CORPOCALDAS (Caldas), CARDER (Risaralda) y CRQ (Quindío), también ha tramitado permisos ante la CAR de Cundinamarca, CORNARE (Antioquia oriental), CVC (Valle del Cauca), CORPONARIÑO, CORTOLIMA y otras. Los estudios técnicos (análisis hidrológicos, hidráulicos, de calidad de agua) se elaboran con metodologías estándar que acepta cualquier CAR; los formularios y formatos de radicación se adaptan a los requisitos específicos de cada corporación.',
  },
  {
    q: '¿Cuánto cuesta elaborar los estudios para la CAR?',
    a: 'El costo depende del tipo de trámite y la complejidad del proyecto. Para una concesión de aguas de un acueducto rural o una captación para riego con una fuente de tamaño mediano, el estudio completo (oferta y demanda hídrica, caudal ecológico, memoria descriptiva) oscila entre $8.000.000 y $20.000.000 COP. Para un permiso de ocupación de cauce de una obra de tamaño mediano, entre $12.000.000 y $30.000.000. Para el estudio de dilución de un permiso de vertimiento industrial, entre $15.000.000 y $40.000.000 según el volumen y la complejidad del vertimiento. BIC envía propuesta técnica y económica detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué es el caudal ecológico y por qué la CAR lo pide en la concesión de aguas?',
    a: 'El caudal ecológico (también llamado caudal mínimo ambiental o caudal de sostenimiento) es el porcentaje del caudal natural de la fuente hídrica que debe mantenerse en el cauce en todo momento para preservar el ecosistema fluvial: la fauna acuática, la vegetación ribereña, la dilución natural de contaminantes y el mantenimiento de la calidad del agua aguas abajo. En Colombia, el Decreto 1076/2015 establece que la concesión de aguas no puede otorgarse cuando el caudal captado supera el caudal disponible descontando el caudal ecológico. La metodología estándar para calcular el caudal ecológico en Colombia es el método del porcentaje del caudal medio mensual mínimo (Q85). BIC calcula el caudal ecológico como parte obligatoria del estudio técnico para la concesión de aguas.',
  },
  {
    q: '¿BIC puede elaborar el PMA (Plan de Manejo Ambiental) de mi proyecto?',
    a: 'Sí. BIC elabora Planes de Manejo Ambiental (PMA) para proyectos que lo requieren como condición para obtener un permiso o autorización ambiental de la CAR. El PMA incluye el diagnóstico ambiental del área de influencia del proyecto (estado actual del suelo, agua, flora, fauna y comunidades vecinas), la identificación y valoración de los impactos ambientales generados por las diferentes etapas del proyecto (construcción, operación, cierre), las fichas de manejo ambiental con las medidas de prevención, mitigación y compensación para cada impacto, y el programa de monitoreo y seguimiento. El PMA se elabora en el formato exigido por la CAR.',
  },
]

const CLIENTES = [
  { tipo: 'Acueductos y empresas de servicios públicos', desc: 'ESP que necesitan la concesión de aguas o el permiso de ocupación de cauce para su bocatoma o captación.' },
  { tipo: 'Propietarios rurales y agricultores', desc: 'Finqueros y agricultores que captan agua para riego y necesitan legalizar la concesión de aguas ante la CAR.' },
  { tipo: 'Industria y minería', desc: 'Empresas que usan agua en sus procesos y necesitan la concesión y/o el permiso de vertimiento de sus efluentes.' },
  { tipo: 'Constructoras e inmobiliarias', desc: 'Proyectos con obras que afectan cauces (puentes, box culvert, encauzamientos) y necesitan el permiso de ocupación de cauce.' },
  { tipo: 'Municipios y gobernaciones', desc: 'Entidades territoriales que tramitan permisos ambientales para obras de infraestructura hídrica financiadas con SGR.' },
  { tipo: 'Operadores turísticos y agroturismo', desc: 'Fincas, ecolodges y spas que utilizan agua de fuentes naturales y necesitan legalizar su aprovechamiento ante la CAR.' },
]

const NORMATIVA = [
  { codigo: 'Decreto 1076/2015', descripcion: 'Decreto Único Reglamentario Sector Ambiente — concesiones de aguas, permisos de vertimiento y ocupación de cauce' },
  { codigo: 'Ley 1333/2009', descripcion: 'Ley del Procedimiento Sancionatorio Ambiental — multas por captación sin permiso, vertimiento ilegal, etc.' },
  { codigo: 'Res. 631/2015', descripcion: 'MinAmbiente — estándares máximos permisibles para vertimientos puntuales a cuerpos de agua superficiales' },
  { codigo: 'Decreto 1575/2007', descripcion: 'Sistema de Control de Calidad del Agua para Consumo Humano — aplica para concesiones de acueducto' },
  { codigo: 'Ley 99/1993', descripcion: 'Ley del Medio Ambiente — crea el SINA, define las CAR y establece el marco institucional ambiental en Colombia' },
  { codigo: 'POMCA de la cuenca', descripcion: 'Plan de Ordenación y Manejo de la Cuenca — define prioridades y restricciones de uso del recurso hídrico' },
]

export default function EstudiosRequeridosCAR() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Trámites ambientales · CAR Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Me Pidieron Estudios en la CAR — ¿Qué Necesito?
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Concesión de aguas, permiso de ocupación de cauce, vertimiento y PMA — BIC elabora todos los estudios que exige la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            Si la CAR le pidió estudios técnicos para un permiso o concesión ambiental y no sabe exactamente
            qué necesita, BIC le orienta y elabora todos los documentos requeridos. Trabajamos con CORPOCALDAS,
            CARDER, CRQ y todas las CAR del país. Primera consulta sin costo — BIC le dice en 24 horas
            exactamente qué estudios necesita y cuánto cuestan.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar mi caso por WhatsApp</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Concesión de aguas','Ocupación de cauce','Vertimiento','PMA','CORPOCALDAS','CARDER'].map(t => (
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
              { num: '+100', label: 'trámites ante CAR gestionados por BIC' },
              { num: '33', label: 'CAR en Colombia — BIC trabaja con todas' },
              { num: '24h', label: 'para orientarle sobre qué estudios necesita' },
              { num: '100%', label: 'de trámites radicados aceptados por la CAR' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRÁMITES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Trámites ante la CAR</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Para qué trámite le pidieron los estudios?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Los cuatro trámites más frecuentes ante las CAR en Colombia que requieren estudios técnicos
            elaborados por un ingeniero especialista. BIC los elabora todos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TRAMITES.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px', marginBottom: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>DOCUMENTOS REQUERIDOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.documentos.map(d => <li key={d}>{d}</li>)}
                  </ul>
                </div>
                <p style={{ fontSize: 12, color: '#888', margin: 0 }}>CAR: {t.car}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cómo trabaja BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Del requerimiento de la CAR al permiso obtenido
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            BIC no solo elabora los estudios — acompaña todo el proceso hasta que la CAR otorga el permiso.
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿La CAR le está pidiendo estudios y no sabe qué necesita exactamente?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>Cuéntenos el requerimiento — BIC le explica en 24 horas qué estudios son y cuánto cuestan · Sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Consultar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Clientes de BIC en trámites ante la CAR
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
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 28 }}>
            Normativa que regula los trámites ante la CAR
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
            Otros servicios BIC relacionados con la CAR
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Construir cerca a un río', href: '/construir-cerca-rio-quebrada-colombia' },
              { label: 'Gestión ambiental', href: '/servicios/ambiental' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Tengo un lote — ¿qué necesito?', href: '/tengo-un-lote-colombia' },
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Todo lo que necesita saber sobre los trámites ante la CAR
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿La CAR le pidió estudios técnicos<br />y no sabe por dónde empezar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos qué le pidió la CAR, el municipio del proyecto y qué actividad está haciendo o planea hacer.
            BIC le orienta en 24 horas sin costo.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Especialistas COPNIA · Experiencia con todas las CAR de Colombia
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Consultar por WhatsApp · +57 302 477 8910
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
