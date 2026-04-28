import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio de torrencialidad. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Estudios de Torrencialidad en Colombia — Amenaza Torrencial y Flujos de Escombros | BIC',
  description: 'BIC realiza estudios de torrencialidad en Colombia: mapas de amenaza torrencial, modelación de flujos de escombros (FLO-2D, RAMMS), delimitación de retiros y planes de gestión del riesgo. Decreto 1807/2014, Ley 1523/2012. Cobertura nacional. Cotización en 24 h.',
  keywords: [
    'estudio de torrencialidad Colombia',
    'amenaza torrencial Colombia',
    'mapa de amenaza por flujos torrenciales',
    'estudio torrencial para CAR',
    'flujo de escombros Colombia',
    'evaluacion riesgo torrencial municipio',
    'flujo de lodo Colombia',
    'modelacion FLO-2D Colombia',
    'estudio amenaza torrencial POT',
    'Decreto 1807 torrencialidad',
    'zona de retiro quebrada Colombia',
    'consultor torrencialidad Colombia',
    'riesgo torrencial eje cafetero',
    'RAMMS Colombia flujos',
    'gestion riesgo torrencial municipio',
    'plan parcial amenaza torrencial',
  ],
  canonical: 'https://ingenieriabernal.co/estudios-torrencialidad-colombia',
}

const TIPOS = [
  {
    icon: '🗺️',
    tipo: 'Mapa de Amenaza Torrencial',
    subtitulo: 'Para POT, planes parciales y Decreto 1807/2014',
    desc: 'Es el estudio de base exigido por el Decreto 1807 de 2014 para que municipios y distritos actualicen el componente de gestión del riesgo en el Plan de Ordenamiento Territorial. BIC delimita las zonas de amenaza alta, media y baja por flujos torrenciales, incorporando el análisis de frecuencia (periodo de retorno Tr 10, 100 y 500 años), la modelación hidrodinámica del flujo y la cartografía SIG entregable ante la CAR y la Secretaría de Planeación. El mapa es el instrumento legal que define qué se puede construir cerca de quebradas y torrentes.',
    usos: ['Actualización POT y EOT (Art. 6, Decreto 1807/2014)', 'Estudios de soporte para planes parciales', 'Definición de áreas de protección en suelo urbano y de expansión', 'Licencias urbanísticas en zonas con cauces próximos'],
    norma: ['Decreto 1807/2014', 'Ley 388/1997', 'Guía Técnica UNGRD-MVCT'],
  },
  {
    icon: '🌊',
    tipo: 'Estudio de Flujos de Escombros y Lodo',
    subtitulo: 'Para constructoras, vías 4G e infraestructura',
    desc: 'Cuando el cauce transporta no solo agua sino también sedimentos gruesos (gravas, bloques, madera), el comportamiento es radicalmente diferente al de una inundación convencional: la viscosidad dinámica del flujo aumenta, la velocidad puede superar los 10 m/s y la presión de impacto sobre estructuras es varias veces mayor que la de una creciente de agua limpia. BIC modela estos flujos bifásicos con FLO-2D y RAMMS (módulo DEBRISFLOW), calcula las presiones de diseño (fuerza hidrostática e hidrodinámica, presión de bloque) y determina la concentración volumétrica de sedimentos Cv para definir el régimen (flujo hiperconcentrado o flujo de escombros).',
    usos: ['Diseño de obras de protección (disipadores, diques deflectores)', 'Evaluación de riesgo en proyectos viales 4G near torrentes', 'Análisis de amenaza para parques industriales y logísticos', 'Peritaje técnico en eventos torrenciales pasados'],
    norma: ['NSR-10 Capítulo H', 'RAS 2000 Sección C', 'FEMA Technical Manual FLO-2D'],
  },
  {
    icon: '📏',
    tipo: 'Delimitación de Zonas de Retiro y Restricción',
    subtitulo: 'Para CAR, municipios y propietarios de predios',
    desc: 'La legislación colombiana (Decreto 2811/1974 y Decreto 1076/2015) establece retiros mínimos para construcción desde la orilla de ríos y quebradas, pero estos retiros genéricos no consideran la dinámica torrencial específica de cada cauce. BIC delimita con criterio técnico-hidráulico la franja de retiro efectiva para cada tramo de quebrada: analiza la capacidad hidráulica del cauce, el tirante máximo esperado para Tr 100 años, la zona de influencia de los flujos torrenciales y la geomorfología del corredor fluvial. La delimitación queda respaldada en un informe técnico con firma COPNIA y cartografía SIG que la CAR y los curadores urbanos reconocen como fundamento técnico válido para licencias y permisos.',
    usos: ['Determinación de retiro para licencias de construcción cerca de quebradas', 'Tramite ante CAR de permisos de ocupacion de cauce', 'Insumo técnico para escrituras y actos administrativos municipales', 'Diagnóstico de predios en zonas torrenciales'],
    norma: ['Decreto 1076/2015 (Art. 2.2.3.1.1.8)', 'Decreto 2811/1974', 'Resolución CAR territorial'],
  },
  {
    icon: '📋',
    tipo: 'Plan de Gestión del Riesgo Torrencial',
    subtitulo: 'Para municipios, UNGRD y Ley 1523/2012',
    desc: 'La Ley 1523 de 2012 obliga a los municipios a formular e implementar Planes de Gestión del Riesgo de Desastres que incluyan el componente torrencial cuando el territorio tiene cuencas con historial de eventos. BIC formula el Plan de Gestión del Riesgo Torrencial para el municipio: inventario de eventos históricos con matriz de pérdidas (vidas, bienes, infraestructura), zonificación de riesgo (amenaza × exposición × vulnerabilidad), medidas de reducción del riesgo (intervención correctiva y prospectiva) y fichas de proyectos de inversión para presentar ante la UNGRD y el SGR. El plan es el instrumento que activa la priorización de recursos del Fondo Nacional de Gestión del Riesgo.',
    usos: ['Cumplimiento Ley 1523/2012 y Decreto 1523 (PNGRD)', 'Formulación de proyectos SGR en gestión del riesgo', 'Planes de contingencia para UNGRD y Consejos Departamentales de Riesgo', 'Programas de reasentamiento en zonas de riesgo no mitigable'],
    norma: ['Ley 1523/2012', 'Decreto 1972/2019 (actualización planes)', 'CONPES 4050/2021'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilacion cartografica y de eventos historicos',
    desc: 'El punto de partida de cualquier estudio de torrencialidad es saber qué ha pasado en esa cuenca antes. BIC recopila el inventario de movimientos en masa del Servicio Geológico Colombiano (SGC-SIMMA), los registros de eventos del SIGPAD (UNGRD), las series hidrológicas del IDEAM para estaciones cercanas y los reportes de los Consejos Municipales de Gestión del Riesgo. Simultáneamente se obtiene el modelo de elevación digital (DEM): LiDAR cuando está disponible (IGN, IGAC) o SRTM/ALOS PALSAR con corrección planialtimétrica para resoluciones de 5-12.5 m. Con esta base se caracteriza la cuenca hidrográfica: área, longitud del cauce, pendiente media, índice de Melton (relación entre el desnivel de la cuenca y la raíz cuadrada del área), índice morfométrico que define si la cuenca tiene comportamiento torrencial (Melton > 0.3).',
    herramientas: ['SGC-SIMMA (inventario movimientos en masa)', 'SIGPAD-UNGRD (eventos históricos)', 'IDEAM (series pluviométricas y de caudales)', 'DEM LiDAR / SRTM / ALOS PALSAR', 'QGIS / ArcGIS (procesamiento SIG)'],
    resultado: 'Inventario de eventos torrenciales, caracterizacion morfometrica de la cuenca, DEM procesado',
  },
  {
    paso: '02',
    titulo: 'Modelacion torrencial: FLO-2D, HEC-RAS 2D y RAMMS',
    desc: "Esta es la fase central y la más diferenciadora. A diferencia de la inundación convencional (flujo de agua limpia, viscosidad 1 cP), los flujos torrenciales son mezclas bifásicas sólido-líquido cuya reología varía según la concentración volumétrica de sedimentos Cv. BIC calibra el modelo reológico usando los datos del evento histórico de referencia: si Cv < 0.20 el flujo es hiperconcentrado y se modela con ecuaciones de flujo no newtoniano (modelo O'Brien-Julien en FLO-2D); si Cv > 0.40 es un flujo de escombros y se modela con RAMMS DEBRISFLOW (modelo Voellmy: fricción de Coulomb μ + coeficiente turbulento ξ). Para mapas de inundación fluvial convencional se usa HEC-RAS 2D. Los resultados de la modelación incluyen mapas de tirante hidráulico h (m), velocidad v (m/s), esfuerzo cortante τ (kPa) y presión de impacto P (kPa) para cada período de retorno de diseño.",
    desc: 'Esta es la fase central y la más diferenciadora. A diferencia de la inundación convencional (flujo de agua limpia, viscosidad 1 cP), los flujos torrenciales son mezclas bifásicas sólido-líquido cuya reología varía según la concentración volumétrica de sedimentos Cv. BIC calibra el modelo reológico usando los datos del evento histórico de referencia: si Cv < 0.20 el flujo es hiperconcentrado y se modela con ecuaciones de flujo no newtoniano (modelo O\'Brien-Julien en FLO-2D); si Cv > 0.40 es un flujo de escombros y se modela con RAMMS DEBRISFLOW (modelo Voellmy: fricción de Coulomb μ + coeficiente turbulento ξ). Para mapas de inundación fluvial convencional se usa HEC-RAS 2D. Los resultados de la modelación incluyen mapas de tirante hidráulico h (m), velocidad v (m/s), esfuerzo cortante τ (kPa) y presión de impacto P (kPa) para cada período de retorno de diseño.',
    herramientas: ['FLO-2D (flujo hiperconcentrado, modelo O\'Brien-Julien)', 'RAMMS DEBRISFLOW (flujo de escombros, modelo Voellmy)', 'HEC-RAS 2D (inundación fluvial convencional)', 'QGIS (procesamiento de resultados y cartografia)'],
    resultado: 'Mapas de alcance, tirante, velocidad, esfuerzo cortante y presion de impacto para Tr 10, 100 y 500 años',
  },
  {
    paso: '03',
    titulo: 'Analisis geomorfologico y de susceptibilidad',
    desc: 'El análisis geomorfológico complementa la modelación hidrodinámica con la lectura de las formas del terreno: BIC identifica los abanicos torrenciales activos (donde históricamente se ha depositado el material transportado), los depósitos de flujos anteriores (reconocibles en imagen satelital y levantamiento de campo por su morfología lobular y falta de estratificación), las zonas de arranque de material en la parte alta de la cuenca (escarpes, taludes desnudos, cicatrices de movimientos previos) y los puntos de confinamiento y expansión del flujo. Con este análisis se construye el mapa de susceptibilidad torrencial usando la combinación de indicadores morfométricos (índice de Melton, gradiente del cauce, razón de elongación, factor de forma) con la frecuencia histórica de eventos. La susceptibilidad es la probabilidad relativa de que ocurra un evento en cada sector de la cuenca, independientemente de su magnitud.',
    herramientas: ['Analisis morfometrico (Melton, elongacion, forma)', 'Cartografia geomorfologica (clasificacion Tricart-Cailleux)', 'Imagen satelital de alta resolucion (Google Earth, Sentinel-2)', 'Levantamiento de campo (fichas SGC)', 'QGIS (analisis espacial multicriteria)'],
    resultado: 'Mapa de susceptibilidad torrencial, inventario de depositos y cicatrices, analisis de zonas de arranque',
  },
  {
    paso: '04',
    titulo: 'Zonificacion de amenaza e intensidad',
    desc: 'La amenaza torrencial se define como la combinación de la probabilidad de ocurrencia del evento (frecuencia) y su intensidad (magnitud). BIC construye la matriz de amenaza integrando los resultados de la modelación (tirante y velocidad para cada Tr) con la susceptibilidad geomorfológica: zonas con alta susceptibilidad y alta intensidad modelada quedan clasificadas como amenaza alta (color rojo); zonas de susceptibilidad media con intensidades moderadas, amenaza media (naranja); y zonas de influencia periférica o eventos de baja intensidad, amenaza baja (amarillo). Esta clasificación sigue la metodología del Decreto 1807/2014 Art. 6, la Guía Técnica para la Incorporación de la Gestión del Riesgo en los POT (MVCT-UNGRD, 2015) y los criterios internacionales de la UNDRR (Sendai Framework 2015-2030). El resultado es el mapa oficial que se registra en el POT y que define qué usos del suelo son permitidos en cada zona.',
    herramientas: ['Matriz amenaza (frecuencia × intensidad)', 'Clasificacion Decreto 1807/2014 (alta, media, baja)', 'QGIS (cartografia final, simbologia estandar UNGRD)', 'Revision con Consejo Municipal de Gestion del Riesgo'],
    resultado: 'Mapa de amenaza torrencial en categorias alta, media y baja, listo para incorporar al POT',
  },
  {
    paso: '05',
    titulo: 'Informe tecnico, cartografia SIG y socializacion',
    desc: 'El informe técnico es el documento que presentará ante la CAR, el Ministerio de Vivienda o el organismo financiador (SGR). BIC entrega el informe completo con toda la metodología, los datos de entrada y su fuente, los resultados numéricos de la modelación, las verificaciones de calibración y las conclusiones sobre el nivel de amenaza por sector. El informe incluye la cartografía final en formato SIG (shapefile, KML y PDF imprimible a escala 1:5000-1:10000), los archivos del modelo calibrado (FLO-2D, HEC-RAS o RAMMS, según aplique) y la memoria de cálculo firmada por Rogerio Bernal Ríos con tarjeta profesional COPNIA 17202-313228 CLD vigente. BIC también acompaña la socialización del estudio con la comunidad y las autoridades locales cuando el contrato lo requiere, incluyendo la elaboración de los materiales de comunicación del riesgo.',
    herramientas: ['Informe tecnico completo (firma COPNIA)', 'Cartografia SIG (shapefile + KML + PDF)', 'Archivos del modelo calibrado (FLO-2D / HEC-RAS / RAMMS)', 'Fichas de socializacion y materiales de comunicacion del riesgo'],
    resultado: 'Expediente tecnico completo: informe + cartografia SIG + modelos + firma COPNIA, listo para radicar ante CAR o MVCT',
  },
]

const FAQ = [
  {
    q: '¿Que es un estudio de torrencialidad y cuándo lo necesito?',
    a: 'Un estudio de torrencialidad analiza el peligro que representan los flujos de agua, sedimentos y escombros que se producen en quebradas y torrentes de montaña cuando llueve con alta intensidad. Es diferente a un estudio de inundación fluvial convencional porque los flujos torrenciales transportan sólidos gruesos (gravas, bloques, troncos) y su comportamiento reológico es completamente distinto al del agua limpia. Lo necesita cuando va a construir cerca de una quebrada de montaña y la CAR, el curador urbano o la Secretaría de Planeación le exige el concepto de amenaza torrencial; cuando el municipio está actualizando el componente de gestión del riesgo del POT (Decreto 1807/2014); cuando está desarrollando infraestructura vial (puentes, viaductos, box culverts) que cruza torrentes; o cuando la UNGRD requiere el estudio para la formulación del Plan Municipal de Gestión del Riesgo.',
  },
  {
    q: '¿Cuánto cuesta un estudio torrencial en Colombia?',
    a: 'El costo depende principalmente del tamaño de la cuenca a estudiar, la disponibilidad de información existente (topografía LiDAR, series hidrológicas del IDEAM, inventario de eventos previos) y el alcance del estudio (solo mapa de amenaza, o también delimitación de retiros, plan de gestión del riesgo y socialización). Para un estudio de amenaza torrencial de una cuenca pequeña o media (5-50 km²) con modelación FLO-2D y entregable ante CAR, el rango típico es de $35.000.000 a $85.000.000 COP. Para cuencas grandes o estudios con plan de gestión del riesgo completo, el costo puede superar los $120.000.000 COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas — sin costo y sin compromiso.',
  },
  {
    q: '¿Cuánto tiempo toma el estudio de torrencialidad?',
    a: 'El plazo típico para un estudio de amenaza torrencial completo — desde la recopilación de información hasta la entrega del informe con cartografía SIG y firma COPNIA — es de 8 a 14 semanas. El tiempo depende principalmente de la disponibilidad de información de base (si hay LiDAR del área o hay que trabajar con DEM de menor resolución), de si el IDEAM tiene estaciones con registros suficientes cerca de la cuenca, y del número de eventos históricos disponibles para calibrar el modelo. Para municipios que tienen plazos de entrega ante la Secretaría de Planeación o la CAR, BIC puede estructurar entregas parciales (informe preliminar de susceptibilidad a las 4-5 semanas) para avanzar en el proceso administrativo mientras se termina la modelación.',
  },
  {
    q: '¿Con qué software modelan los flujos torrenciales?',
    a: 'BIC usa tres herramientas de modelación según el tipo de flujo y el objetivo del estudio: FLO-2D (O\'Brien Engineering) para flujos hiperconcentrados — mezclas agua-sedimento con concentraciones volumétricas Cv entre 0.20 y 0.40 — que son los más comunes en quebradas andinas colombianas; RAMMS DEBRISFLOW (SLF Davos, Suiza) para flujos de escombros verdaderos — Cv > 0.40, comportamiento viscoplástico — que se producen en cuencas pequeñas de muy alta pendiente con suelos residuales poco cohesivos; y HEC-RAS 2D (USACE) para la componente de inundación fluvial cuando el flujo torrencial llega a zonas de baja pendiente y se comporta como creciente de agua con alta carga de sedimentos. En todos los casos, los modelos se calibran con eventos históricos registrados y se validan con criterios de error aceptables según los protocolos de la UNDRR y el MVCT.',
  },
  {
    q: '¿Que diferencia hay entre amenaza torrencial y riesgo por inundación?',
    a: 'La diferencia es fundamental y tiene implicaciones directas en el diseño de obras de protección y en las decisiones de uso del suelo. La amenaza por inundación fluvial (creciente) ocurre cuando el caudal del río supera la capacidad del cauce y se desborda: el flujo es esencialmente agua, con velocidades moderadas (0.5-2 m/s en llanura), tirantes que pueden ser altos pero con tiempos de permanencia largos (horas a días) y presiones de impacto relativamente bajas. La amenaza torrencial ocurre en cuencas de alta pendiente y áreas pequeñas: los flujos pueden alcanzar velocidades de 5-15 m/s, transportan bloques de varias toneladas, la mezcla tiene densidades de 1.200-2.000 kg/m³ y la presión de impacto sobre estructuras puede superar los 50 kPa — suficiente para arrasar una casa de mampostería no reforzada. Además, el tiempo de concentración de una cuenca torrencial es muy corto (minutos a horas), lo que hace que sea difícil evacuar a tiempo. Por eso, el mapa de amenaza torrencial define zonas de retiro más amplias y restricciones de uso más severas que el mapa de inundación convencional.',
  },
  {
    q: '¿El estudio sirve para obtener licencia de construccion?',
    a: 'Sí, pero depende del resultado. El estudio de amenaza torrencial determina en qué categoría de amenaza queda el predio (alta, media o baja). Si el predio queda en zona de amenaza baja, el estudio es el soporte técnico que permite al curador urbano otorgar la licencia de construcción con las medidas de mitigación que el ingeniero recomiende. Si el predio queda en zona de amenaza media, el curador puede exigir condicionantes de construcción (retiros adicionales, estructuras de protección). Si el predio queda en zona de amenaza alta, el Decreto 1807/2014 establece que no se pueden otorgar nuevas licencias urbanísticas, y el municipio debe gestionar el reasentamiento si hay construcciones existentes. BIC le informa en la fase de diagnóstico inicial (antes de contratar el estudio completo) cuál es la clasificación preliminar del predio según la información disponible.',
  },
  {
    q: '¿Como se delimitan las zonas de retiro en una quebrada?',
    a: 'La zona de retiro de una quebrada combina dos criterios: el retiro normativo (establecido por la CAR regional y el POT municipal, generalmente 30 metros desde la orilla para quebradas en zona urbana y periurbana, según el Decreto 2811/1974 y las resoluciones CAR) y el retiro hidráulico-torrencial (determinado por el análisis de la dinámica del flujo: tirante máximo esperado para Tr 100 años más el borde libre de seguridad, o la proyección lateral máxima del flujo de escombros modelado). BIC calcula ambos criterios y delimita el retiro adoptando el mayor de los dos: en cuencas torrenciales de alta pendiente, el retiro hidráulico suele superar el normativo, de modo que el retiro efectivo que BIC certifica es mayor al genérico de 30 metros que aparece en el POT. Esto protege al propietario de responsabilidades futuras y al municipio de licencias mal otorgadas en zonas de riesgo.',
  },
  {
    q: '¿Hacen estudios de torrencialidad en todo el país?',
    a: 'Sí. BIC opera en todo el territorio nacional colombiano. La mayor parte del trabajo técnico (modelación, cartografía SIG, análisis hidrológico) se realiza con información de sensores remotos e información oficial del IDEAM, el IGAC y el SGC, de manera que la ubicación geográfica no limita la calidad del estudio. Para el levantamiento de campo (reconocimiento del cauce, toma de muestras granulométricas para calibración del modelo, registro fotográfico de eventos anteriores) BIC coordina visitas técnicas a la zona o trabaja con profesionales locales certificados bajo su supervisión técnica directa. La firma tiene experiencia en cuencas de los Andes, la Sierra Nevada de Santa Marta, la Serranía del Baudó y la vertiente Pacífica — todas con características torrenciales muy marcadas y alta frecuencia de eventos.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios sin mapa torrencial en el POT', desc: 'El Decreto 1807/2014 exige incorporar estudios de amenaza y riesgo en el POT. BIC formula el mapa de amenaza torrencial para cumplir la norma y evitar sanciones de la Contraloría.' },
  { tipo: 'Constructoras en zona de quebradas', desc: 'Cuando la Secretaría de Planeación o la CAR exige el concepto de amenaza torrencial para otorgar licencia urbanística. BIC certifica la categoría de amenaza del predio.' },
  { tipo: 'Proyectos viales 4G y concesiones', desc: 'INVIAS y la ANI requieren análisis de amenaza torrencial para el diseño de obras de drenaje transversal (box culverts, puentes) y la gestión del riesgo en la fase de operación.' },
  { tipo: 'CAR y estudios de permiso ambiental', desc: 'Las Corporaciones Autónomas Regionales exigen estudios de amenaza torrencial como parte de los trámites de concesión de aguas, permisos de ocupación de cauce y licencias ambientales.' },
  { tipo: 'UNGRD, departamentos y gestión del riesgo', desc: 'Formulación de planes municipales de gestión del riesgo, proyectos SGR en reducción del riesgo y estudios para el Fondo Nacional de Gestión del Riesgo de Desastres.' },
  { tipo: 'Propietarios de predios en zona torrencial', desc: 'Cuando el banco, la notaría o la alcaldía exigen la certificación del nivel de amenaza del predio. BIC emite el concepto técnico con firma COPNIA.' },
]

const NORMATIVA = [
  { codigo: 'Ley 388/1997', descripcion: 'Ley de Ordenamiento Territorial — establece la obligación de incorporar la amenaza natural en el POT y los instrumentos de planificación urbana' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Reglamenta el Art. 189 del Decreto 1077/2015 — define cómo incorporar la gestión del riesgo en los POT, incluyendo la amenaza torrencial (Art. 6)' },
  { codigo: 'Ley 1523/2012', descripcion: 'Política Nacional de Gestión del Riesgo de Desastres — obliga a municipios a formular planes de gestión del riesgo con componente torrencial' },
  { codigo: 'NSR-10 Cap. H', descripcion: 'Norma Sismo Resistente — diseño estructural de obras expuestas a presiones hidráulicas y de impacto por flujos torrenciales' },
  { codigo: 'RAS 2000 Sección C', descripcion: 'Reglamento Técnico Agua Potable — criterios de diseño hidrológico e hidráulico para obras en cuencas torrenciales' },
  { codigo: 'Resoluciones CAR regionales', descripcion: 'Cada CAR establece retiros mínimos, condicionantes técnicos y formatos de entregables para su jurisdicción (Corpocaldas, Carder, CRQ, CVC, CDMB, etc.)' },
]

export default function EstudiosTorrencialidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 55%, #243042 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Especialidad tecnica · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Estudios de Torrencialidad en Colombia
          </h1>
          <p style={{ color: '#F4A261', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Mapas de amenaza torrencial, modelacion de flujos de escombros y planes de gestión del riesgo para CAR, municipios y constructoras
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores es la firma de referencia en estudios de torrencialidad en Colombia.
            Con 15 años de experiencia en cuencas andinas, modelamos flujos de escombros y lodo con FLO-2D,
            RAMMS y HEC-RAS 2D, entregamos mapas de amenaza torrencial conforme al Decreto 1807/2014 y
            acompañamos municipios, constructoras y entidades en todo el proceso — desde la recopilación de datos
            hasta la radicación del informe ante la CAR o el Ministerio de Vivienda.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio torrencial</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Ver estudios hidrologicos</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['FLO-2D','RAMMS DEBRISFLOW','HEC-RAS 2D','Decreto 1807/2014','Ley 1523/2012','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(244,162,97,0.15)', color: '#F4A261', border: '1px solid rgba(244,162,97,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+15 años', label: 'experiencia en torrencialidad y riesgo hidrico' },
              { num: '+50', label: 'estudios torrenciales ejecutados en Colombia' },
              { num: 'Nacional', label: 'cobertura: Andes, Pacifico, Sierra Nevada, Orinoquia' },
              { num: 'COPNIA', label: 'firma vigente — 17202-313228 CLD activa' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#1B2838', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE ESTUDIO ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de estudio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de estudio torrencial necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El alcance del estudio depende de quién lo pide (CAR, curador, municipio, INVIAS), para qué se usa
            (POT, licencia de construcción, diseño de obras, plan de gestión del riesgo) y las características
            de la cuenca (tamaño, pendiente, historial de eventos). BIC hace el diagnóstico inicial sin costo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #F4A261',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#1B2838', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#F4A261', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#fff8f0', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#7A3B00', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#f0f4ff', color: '#1B2838', borderRadius: 4,
                        padding: '3px 8px', fontSize: 11, fontWeight: 600,
                      }}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodologia</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo ejecuta BIC un estudio de torrencialidad
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde la caracterización morfométrica de la cuenca hasta el informe con firma COPNIA.
            Cada estudio BIC cumple con el Decreto 1807/2014, la Ley 1523/2012 y los criterios técnicos
            de la CAR territorial y el Ministerio de Vivienda.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F4A261, #E76F51)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#f0d0b0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#1B2838' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#fff8f0', borderRadius: 8, padding: '10px 14px', border: '1px solid #f0d0b0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#7A3B00', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #1B2838, #2E4057)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un estudio de torrencialidad?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta tecnica y economica en menos de 24 horas · Primera consulta sin costo</p>
          </div>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '12px 28px',
              background: '#25D366', color: '#fff', borderRadius: 8,
              fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan estudios de torrencialidad
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con municipios, entidades del Estado, constructoras, empresas de infraestructura
            y propietarios de predios en todo Colombia que necesitan el análisis de amenaza torrencial
            para cumplir una norma, obtener un permiso o tomar una decisión de inversión.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f8fbff', border: '1px solid #d0d8e8', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #F4A261',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1B2838', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal y tecnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige los estudios de torrencialidad en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña cada estudio bajo el marco normativo colombiano vigente. Conocer la norma aplicable
            evita rechazos por parte de las CAR, los curadores urbanos y las entidades financiadoras (DNP, UNGRD, SGR).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#1B2838', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{n.codigo}</div>
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
            Otros estudios hidrologicos e hidraulicos que realiza BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Estudios hidrologicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelacion HEC-RAS 1D y 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Encauzamiento de rios y quebradas', href: '/encauzamiento-rios-colombia' },
              { label: 'Gestion del riesgo hidrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Ingenieria hidraulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#1B2838',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5eef9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f9ff')}
              >
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
            Todo lo que necesita saber sobre estudios de torrencialidad
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen municipios, constructoras
            y propietarios de predios antes de contratar el estudio.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#1B2838', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #243042 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>⛰️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita un estudio de torrencialidad<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos la cuenca, el municipio, el objetivo del estudio
            (POT, licencia, diseño de obras) y el organismo ante el que va a presentar el informe.
          </p>
          <p style={{ color: '#F4A261', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta tecnica y economica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none',
              }}
            >
              📱 Cotizar por WhatsApp · +57 302 477 8910
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
    </>
  )
}
