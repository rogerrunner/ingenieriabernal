import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero construir cerca a un río o quebrada y necesito orientación sobre los estudios y permisos requeridos.')

const seoConfig = {
  title: 'Construir Cerca a un Río o Quebrada en Colombia — Permisos, Estudios y Ronda Hídrica | BIC',
  description: 'Si quiere construir cerca a un río, quebrada o canal en Colombia, necesita estudio de ronda hídrica, zonificación de amenaza y permiso de ocupación de cauce. BIC elabora todos los estudios requeridos por la CAR y la curaduría. Manizales, Eje Cafetero y todo Colombia.',
  keywords: [
    'construir cerca a un río Colombia',
    'construir cerca a una quebrada',
    'ronda hídrica construcción Colombia',
    'permiso construir cerca cauce',
    'estudio inundabilidad construcción',
    'zona de retiro río Colombia',
    'ocupación de cauce Colombia',
    'curaduría cerca a río',
    'construir en zona de riesgo hídrico',
    'estudio ronda hídrica CAR',
    'licencia construcción cerca río Manizales',
    'amenaza inundación construcción Colombia',
    'retiro de quebrada urbanismo',
    'construir lote cerca quebrada Eje Cafetero',
    'POT ronda hidrica Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/construir-cerca-rio-quebrada-colombia',
}

const CASOS = [
  {
    icon: '🏠',
    tipo: 'Casa o edificio cerca a un cauce',
    subtitulo: 'El caso más frecuente en Colombia',
    desc: 'Muchos lotes residenciales en Colombia colindan con ríos, quebradas o canales de drenaje. Para obtener la licencia de construcción, la curaduría exige demostrar que el predio no está en zona de amenaza alta por inundación ni dentro de la ronda hídrica del cauce. BIC elabora el estudio de inundabilidad y la zonificación de amenaza hídrica con modelación HEC-RAS 2D que cumpla las exigencias del POT y del Decreto 1807 de 2014.',
    cuando: 'Cuando la curaduría solicita concepto técnico sobre ronda hídrica o el predio está a menos de 30–100 metros de un cauce.',
    ejemplos: ['Vivienda urbana con vecindad a quebrada', 'Apartamentos en zonas de ladera con drenajes', 'Locales comerciales junto a canales'],
  },
  {
    icon: '🏭',
    tipo: 'Industria, bodega o infraestructura',
    subtitulo: 'Requiere permiso de ocupación de cauce',
    desc: 'Plantas industriales, bodegas, vías de acceso o cualquier infraestructura que se construya sobre o junto a un cauce necesita permiso de ocupación de cauce ante la Corporación Autónoma Regional (CAR), además del concepto de amenaza hídrica para la licencia. BIC elabora el estudio hidráulico del cauce, el análisis de afectación por la obra y los documentos técnicos para el trámite ante la CAR.',
    cuando: 'Cuando la obra modifica el cauce, construye sobre él o dentro del área inundable para el período de retorno de 100 años.',
    ejemplos: ['Bodegas con muro de contención en orilla', 'Puentes y pasos de vía sobre quebradas', 'Plantas de tratamiento junto a ríos'],
  },
  {
    icon: '🌿',
    tipo: 'Urbanización o parcelación con cauces',
    subtitulo: 'Plan parcial y espacio público hídrico',
    desc: 'Los proyectos de urbanización y parcelación con cauces dentro del predio deben destinar la ronda hídrica como zona de cesión y espacio público, conforme al POT municipal y al Decreto 1807/2014. BIC elabora el plano de zonificación de rondas, la memoria técnica para el curador y el plan de manejo ambiental del cauce para la curaduría y la CAR. El no hacerlo correctamente genera glosas que paralizan el proyecto.',
    cuando: 'Para planes parciales, licencias de urbanismo o parcelación donde el predio incluye quebradas, drenajes o canales.',
    ejemplos: ['Urbanizaciones con quebrada en el predio', 'Parcelaciones rurales con drenajes naturales', 'Conjuntos residenciales con ronda urbana'],
  },
  {
    icon: '🌾',
    tipo: 'Agricultura, ganadería y usos rurales',
    subtitulo: 'Zona rural con retiro obligatorio',
    desc: 'En zona rural también aplica la ronda hídrica. Galpones, establos, bodegas agrícolas, silos y cualquier infraestructura productiva debe respetar el retiro del cauce definido por el POT o el POMCA. Si el proyecto requiere cruzar o encauzar una quebrada para acceder a un área de producción, se necesita permiso de ocupación de cauce ante la CAR y concepto técnico del impacto hidráulico.',
    cuando: 'Para construcciones en predios rurales con quebradas o ríos que limitan o atraviesan el predio.',
    ejemplos: ['Galpones avícolas junto a quebradas', 'Establos y beneficiaderos de café', 'Vías de acceso rural que cruzan cauces'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Definir la ronda hídrica y la zona de amenaza',
    desc: 'El primer paso es establecer dónde termina la ronda hídrica del cauce (la franja de terreno que la norma prohíbe construir) y cuál es la zona de amenaza por inundación. En Colombia, la ronda hídrica mínima es de 30 metros desde la orilla, pero el POT de cada municipio puede ampliarla. BIC revisa el POT, el POMCA de la cuenca y el Decreto 1807/2014 para determinar la restricción aplicable al lote específico, y realiza la visita de campo para identificar el cauce y sus condiciones actuales.',
    herramientas: ['POT y planos de ordenamiento municipal', 'POMCA de la cuenca hidrográfica', 'Decreto 1807/2014 (zonificación amenaza)', 'Visita de campo e inspección del cauce'],
    resultado: 'Delimitación preliminar de ronda hídrica y definición del alcance del estudio técnico',
  },
  {
    paso: '02',
    titulo: 'Topografía y levantamiento del cauce',
    desc: 'Para modelar correctamente el comportamiento hidráulico del río o quebrada se necesita un levantamiento topográfico del cauce y las márgenes. BIC coordina el levantamiento con estación total o drone (fotogrametría), obteniendo el modelo digital de terreno (MDT) del área de estudio. El levantamiento incluye la sección transversal del cauce, la pendiente del tramo, las obras de drenaje existentes y los puntos de referencia para la modelación hidráulica.',
    herramientas: ['Levantamiento con estación total o drone', 'Fotogrametría con drone (MDT de alta resolución)', 'Batimetría del cauce si tiene agua', 'QGIS / ArcGIS para procesamiento'],
    resultado: 'Modelo digital de terreno y secciones transversales del cauce para la modelación HEC-RAS',
  },
  {
    paso: '03',
    titulo: 'Estudio hidrológico: los caudales de diseño',
    desc: 'BIC realiza el estudio hidrológico de la cuenca que drena hacia el cauce para calcular los caudales de avenida para diferentes períodos de retorno (2, 10, 25, 50 y 100 años). Se utilizan datos del IDEAM (pluviografías, caudales registrados), se aplica el método racional modificado o HEC-HMS según el tamaño de la cuenca y se realiza análisis de frecuencia estadística. El caudal de 100 años es el que determina la zona de amenaza alta que la norma prohíbe para uso urbano.',
    herramientas: ['HEC-HMS (modelación hidrológica de cuencas)', 'Datos IDEAM (pluviografías y caudales)', 'Análisis estadístico (Gumbel, Log-Pearson III)', 'Curvas IDF regionales'],
    resultado: 'Caudales de diseño para T=2, 10, 25, 50 y 100 años certificados con metodología IDEAM',
  },
  {
    paso: '04',
    titulo: 'Modelación HEC-RAS 2D y zonificación de amenaza',
    desc: 'Con el modelo del terreno y los caudales calculados, BIC modela el comportamiento hidráulico del cauce con HEC-RAS 2D para obtener los niveles de inundación, las velocidades del flujo y la extensión de las áreas afectadas para cada período de retorno. Los resultados se mapean en QGIS para generar el mapa de amenaza hídrica con las tres zonas requeridas por el Decreto 1807/2014: amenaza alta (rojo), media (amarillo) y baja (verde). Este mapa es el documento central del estudio técnico.',
    herramientas: ['HEC-RAS 2D (modelación hidrodinámica)', 'QGIS / ArcGIS (cartografía de amenaza)', 'Decreto 1807/2014 (criterios de zonificación)', 'Superposición con catastro y predios'],
    resultado: 'Mapa de amenaza hídrica con zonificación trifásica y coordenadas para superposición catastral',
  },
  {
    paso: '05',
    titulo: 'Informe técnico para curaduría y CAR',
    desc: 'BIC elabora el informe técnico completo con todos los análisis, mapas y conclusiones, firmado por el ingeniero especialista con tarjeta COPNIA vigente. El informe incluye la delimitación de la ronda hídrica del predio específico, la zonificación de amenaza, las restricciones de uso aplicables y las condiciones técnicas para el diseño si el proyecto puede construirse. Este documento se presenta ante la curaduría urbana para la solicitud de licencia y, si hay ocupación de cauce, se presenta también ante la CAR.',
    herramientas: ['Informe técnico firmado (COPNIA)', 'Planos de zonificación en formato requerido', 'Memoria de cálculo hidrológica e hidráulica', 'Concepto de viabilidad para construcción'],
    resultado: 'Expediente técnico completo para trámite ante curaduría y/o CAR',
  },
]

const FAQ = [
  {
    q: '¿A cuántos metros de un río o quebrada se puede construir en Colombia?',
    a: 'En Colombia no existe una distancia única fija: depende del municipio y del cauce específico. La Ley 388/1997 y el Decreto 1807/2014 establecen que los POT municipales deben definir la ronda hídrica de cada cauce. Como regla general, la ronda mínima en zona urbana es de 30 metros desde la orilla del cauce hasta el borde construible, pero muchos POT la amplían hasta 50 o 100 metros para cauces más grandes. En zona rural puede ser mayor. Además, independientemente de la ronda, si el predio está dentro de la zona de amenaza alta por inundación (área inundable para período de retorno de 100 años), no se puede construir uso urbano residencial sin medidas de mitigación demostradas. BIC revisa el POT de su municipio y el mapa de amenaza hídrica específico para su lote antes de iniciar cualquier estudio.',
  },
  {
    q: '¿Qué es la ronda hídrica y por qué la curaduría la pide?',
    a: 'La ronda hídrica (también llamada zona de retiro o franja de protección) es la franja de terreno adyacente a un cauce que la norma prohíbe urbanizar o construir, porque es necesaria para la protección ambiental del cauce, el control de inundaciones y el acceso para mantenimiento. Está definida en el POT de cada municipio. La curaduría la pide porque antes de otorgar una licencia de construcción debe verificar que el predio no está dentro de esta zona restringida. Si la curaduría detecta que el predio puede estar cerca de un cauce, solicita un concepto técnico de ronda hídrica elaborado por un ingeniero especialista que demuestre cuál es el límite de la ronda y qué parte del predio queda dentro o fuera de ella.',
  },
  {
    q: '¿La curaduría pidió un "estudio de inundabilidad" para mi predio. ¿Qué es y qué incluye?',
    a: 'El estudio de inundabilidad (o estudio de amenaza hídrica) es el análisis técnico que determina si un predio puede inundarse y con qué frecuencia. Incluye el análisis hidrológico de la cuenca que drena hacia el cauce vecino, la modelación hidráulica del cauce con HEC-RAS para simular cómo se comporta el río en avenidas de diferente magnitud, y la elaboración del mapa de amenaza con las zonas de riesgo alto, medio y bajo superpuestas sobre el predio. El resultado le dice a la curaduría si el lote puede urbanizarse, bajo qué condiciones y qué medidas de protección (muros, rellenos, drenajes) son necesarias. BIC elabora este estudio completo con firma de especialista COPNIA.',
  },
  {
    q: '¿Qué pasa si el predio está dentro de la ronda hídrica?',
    a: 'Si el predio (o parte de él) está dentro de la ronda hídrica, esa área no puede destinarse a construcción de edificaciones ni a usos urbanos según el POT. Sin embargo, esto no necesariamente bloquea todo el proyecto: si solo una parte del predio está afectada, la parte que queda fuera de la ronda puede construirse normalmente. La parte dentro de la ronda puede destinarse a espacio público, zonas verdes, senderos peatonales o equipamientos compatibles con la protección hídrica, dependiendo del POT. BIC determina exactamente qué área del predio es construible y qué área debe cederse como ronda, para que el proyecto se planifique correctamente desde el inicio y no haya sorpresas en la curaduría.',
  },
  {
    q: '¿Qué es el permiso de ocupación de cauce y cuándo se necesita?',
    a: 'El permiso de ocupación de cauce es una autorización que otorga la Corporación Autónoma Regional (CAR) para construir obras dentro del cauce o que afecten su sección hidráulica. Se necesita cuando la construcción implica: cruzar el cauce con una vía o tubería, construir muros de contención en la orilla del cauce, modificar el trazado o la sección del cauce, instalar estructuras dentro del agua (puentes, pasos, rejillas). Sin este permiso, la CAR puede ordenar la demolición de las obras y cobrar multas. BIC elabora los estudios técnicos requeridos por la CAR para este trámite, incluyendo el análisis hidráulico del impacto de la obra sobre el cauce.',
  },
  {
    q: '¿BIC puede hacer el estudio aunque el cauce no tenga nombre en los mapas?',
    a: 'Sí. En Colombia hay miles de drenajes naturales, zanjas de escorrentía y cañadas que no aparecen en los mapas del IGAC o del IDEAM porque son muy pequeños o están en zonas no cartografiadas en detalle. Estos cauces son igualmente reales y sus rondas son igualmente exigibles. BIC hace el levantamiento topográfico del cauce en campo, determina su cuenca de drenaje mediante análisis de modelos digitales de elevación (SRTM, DEM IGAC) y calcula los caudales y la amenaza con la misma metodología que para cauces mayores. El informe técnico identifica el cauce, lo caracteriza y delimita su ronda conforme al POT, aunque no tenga nombre oficial.',
  },
  {
    q: '¿Cuánto tiempo y cuánto cuesta el estudio de ronda hídrica?',
    a: 'El costo y el plazo dependen del tamaño del cauce, la disponibilidad de información topográfica existente y si el proyecto requiere permiso de ocupación de cauce ante la CAR. Para un estudio de ronda hídrica de un cauce urbano pequeño o mediano (sin levantamiento topográfico previo), el plazo típico es de 3 a 6 semanas desde el inicio hasta la entrega del informe firmado. El costo oscila entre $8.000.000 y $25.000.000 COP dependiendo de la complejidad. BIC envía propuesta técnica y económica detallada en menos de 24 horas — sin costo — con base en la información del predio y del cauce que el cliente comparte.',
  },
  {
    q: '¿BIC trabaja en toda Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo Colombia. Aunque la base de operaciones está en Manizales (Eje Cafetero), la mayor parte del trabajo técnico — hidrología, modelación HEC-RAS, elaboración del informe — se puede hacer con información remota: imágenes de drone, vuelos existentes, cartografía IGAC y datos del IDEAM. El levantamiento topográfico de campo se coordina con topógrafos locales certificados. BIC ha elaborado estudios de ronda hídrica y amenaza de inundación en municipios de Antioquia, Cundinamarca, Valle del Cauca, Nariño, Tolima y la Costa Caribe, además del Eje Cafetero.',
  },
]

const CLIENTES = [
  { tipo: 'Propietarios de lote con quebrada vecina', desc: 'Personas que quieren construir su casa y la curaduría les pide el estudio de ronda hídrica o amenaza hídrica.' },
  { tipo: 'Constructoras y promotoras', desc: 'Proyectos de vivienda, oficinas o comercio donde el predio colinda con cauces y se necesita el concepto técnico para la licencia.' },
  { tipo: 'Urbanizadores y parceladores', desc: 'Planes parciales y licencias de urbanismo que incluyen quebradas o drenajes y deben delimitar la ronda para el curador.' },
  { tipo: 'Empresas e industria', desc: 'Plantas, bodegas y centros logísticos que necesitan construir junto a cauces y requieren permiso de ocupación de cauce ante la CAR.' },
  { tipo: 'Municipios y entidades públicas', desc: 'Alcaldías que necesitan zonificar cauces urbanos, elaborar mapas de amenaza o reglamentar rondas hídricas para el POT.' },
  { tipo: 'Propietarios rurales', desc: 'Fincas con quebradas que necesitan saber qué pueden construir y en qué parte del predio sin necesitar permisos especiales.' },
]

const NORMATIVA = [
  { codigo: 'Ley 388/1997', descripcion: 'Ley de Ordenamiento Territorial — base para definición de rondas hídricas y restricciones de construcción' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Incorporación de la gestión del riesgo en los POT — metodología de zonificación de amenaza hídrica' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de permiso de ocupación de cauce ante las CAR' },
  { codigo: 'Decreto 1077/2015', descripcion: 'DUR Sector Vivienda — requisitos técnicos para la licencia de construcción y urbanismo' },
  { codigo: 'Ley 1523/2012', descripcion: 'Política Nacional de Gestión del Riesgo — marco para la gestión de amenaza hídrica' },
  { codigo: 'POMCA de la cuenca', descripcion: 'Plan de Ordenación y Manejo de la Cuenca — determina los usos permitidos y la zonificación ambiental' },
]

export default function ConstruirCercaRioQuebrada() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ronda hídrica · Permisos CAR · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Quiero Construir Cerca a un Río o Quebrada
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Estudio de ronda hídrica, zonificación de amenaza y permiso de ocupación de cauce — lo que la curaduría y la CAR le exigen
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            En Colombia no se puede construir junto a un cauce sin demostrar que el predio no está en zona
            de amenaza alta por inundación ni dentro de la ronda hídrica. BIC elabora el estudio técnico completo
            — con modelación HEC-RAS 2D e informe firmado por especialista COPNIA — que acepta la curaduría
            y la CAR en cualquier municipio del país.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar mi caso por WhatsApp</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Ronda hídrica','Amenaza de inundación','HEC-RAS 2D','Decreto 1807/2014','Permiso CAR','COPNIA vigente'].map(t => (
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
              { num: '30–100m', label: 'de retiro mínimo según el POT y el cauce' },
              { num: 'Decreto\n1807/2014', label: 'metodología obligatoria de zonificación' },
              { num: '24h', label: 'para enviar propuesta técnica detallada' },
              { num: '100%', label: 'de informes aceptados por curaderías y CAR' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#002A50', marginBottom: 4, whiteSpace: 'pre-line' }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Cuál es su situación?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Cada proyecto junto a un cauce tiene sus particularidades. BIC determina exactamente qué estudios
            y permisos necesita su proyecto específico — sin pedirle estudios que no necesita.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {CASOS.map(c => (
              <div key={c.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{c.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{c.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{c.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO APLICA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{c.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>EJEMPLOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.6 }}>
                    {c.ejemplos.map(e => <li key={e}>{e}</li>)}
                  </ul>
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
            Cómo elabora BIC el estudio de ronda hídrica
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del terreno al informe firmado que acepta la curaduría. Metodología conforme al Decreto 1807/2014
            y los criterios técnicos de cada CAR.
          </p>
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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿La curaduría le pidió el estudio de ronda hídrica?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC le dice en 24 horas qué necesita exactamente y cuánto cuesta · Primera consulta sin costo</p>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que trabajan con BIC en proyectos junto a cauces
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Desde particulares con un lote junto a una quebrada hasta grandes constructoras con proyectos
            en zonas de amenaza hídrica, BIC atiende todos los tamaños de proyecto en todo Colombia.
          </p>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige la construcción cerca a cauces en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            Conocer el marco legal evita multas, demoliciones y proyectos bloqueados en la curaduría.
            BIC elabora los estudios bajo las normas vigentes y con la metodología que exige cada autoridad.
          </p>
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
            Otros estudios que puede necesitar su proyecto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Gestión de riesgo en taludes', href: '/gestion-riesgo-taludes-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelación hidráulica HEC-RAS', href: '/servicios/modelacion-hec-ras' },
              { label: 'Diseño de encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Licencia de urbanismo Colombia', href: '/licencia-de-urbanismo' },
              { label: 'Tengo un lote — ¿qué estudios necesito?', href: '/tengo-un-lote-colombia' },
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
            Lo que necesita saber antes de construir cerca a un cauce
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Preguntas reales de propietarios, constructoras y urbanizadores que han consultado a BIC
            sobre construcción junto a ríos y quebradas en Colombia.
          </p>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Su predio está cerca a un río o quebrada?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos la situación: municipio, qué quiere construir y si la curaduría ya le pidió algo.
            BIC le dice qué necesita y cuánto cuesta en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Propuesta técnica en 24 horas · Especialistas COPNIA vigentes
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
