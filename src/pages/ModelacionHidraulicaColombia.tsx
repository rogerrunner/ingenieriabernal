import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar una modelación hidráulica en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Modelación Hidráulica en Colombia — HEC-RAS 1D y 2D | BIC Ingeniería',
  description: 'BIC realiza modelación hidráulica con HEC-RAS 1D y 2D para estudios de inundación, licencias de urbanismo y Decreto 1807 en Colombia. Resultados verificables. Cotice en 24 horas.',
  keywords: [
    'modelación hidráulica Colombia',
    'HEC-RAS 2D Colombia',
    'HEC-RAS 1D Colombia',
    'estudio inundación Colombia',
    'modelación HEC-RAS Manizales',
    'modelación hidráulica Decreto 1807',
    'modelo hidráulico bidimensional Colombia',
    'HEC-HMS Colombia',
    'estudio amenaza hídrica Colombia',
    'ingeniería hidráulica computacional',
    'modelación ríos Colombia',
    'licencia urbanismo inundación',
const WA = '573162888989'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar una Modelación Hidráulica en Colombia')

const seoConfig = {
  title: 'Modelación Hidráulica en Colombia | HEC-RAS 1D y 2D',
  description: 'Modelación hidráulica 1D y 2D con HEC-RAS en Colombia. Estudios de inundabilidad, manejo de crecientes y diseño de obras hidráulicas para proyectos de construcción.',
  keywords: [
    'modelacion hidraulica colombia',
    'hec-ras colombia',
    'modelacion hec-ras 2d colombia',
    'estudio inundabilidad colombia',
    'modelacion hidraulica eje cafetero',
    'hec-ras 1d colombia',
    'mapa inundacion colombia decreto 1807',
    'modelacion cauces colombia',
    'hidraulica fluvial colombia',
    'consultoría modelación hidráulica colombia',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-colombia',
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Modelación HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo superficial para determinar profundidades, velocidades y extensión de la mancha de inundación. Requerida por Decreto 1807/2014 para licencias de urbanismo en zonas con amenaza hídrica media o alta.',
  },
  {
    icon: '📏',
    titulo: 'Modelación HEC-RAS 1D',
    desc: 'Análisis de flujo en cauces encauzados con sección transversal definida. Ideal para diseño de estructuras hidráulicas (puentes, boxcúlverts, bordillos) y verificación de capacidad de canales y colectores.',
  },
  {
    icon: '🌧️',
    titulo: 'Modelación Hidrológica HEC-HMS',
    desc: 'Cálculo de hidrogramas de diseño para cuencas hidrográficas. Determina los caudales pico para períodos de retorno de 10, 25, 50 y 100 años que alimentan los modelos hidráulicos.',
  },
  {
    icon: '🗺️',
    titulo: 'Mapas de Amenaza y Riesgo Hídrico',
    desc: 'Cartografía SIG de zonas de amenaza alta, media y baja conforme al Decreto 1807/2014. Escala 1:2000 o 1:5000 según requerimiento de la Curaduría Urbana o la CAR. Entregables en ArcGIS y QGIS.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilación de información y análisis hidrológico',
    desc: 'Levantamiento de datos topobatimétricos del cauce, recopilación de información hidrometeorológica del IDEAM y caracterización morfométrica de la cuenca. Con HEC-HMS se calculan los hidrogramas de diseño para múltiples períodos de retorno.',
    herramientas: ['HEC-HMS', 'IDEAM (datos hidrológicos)', 'GPS RTK + estación total', 'Curvas IDF regionales'],
    resultado: 'Caudales de diseño por período de retorno',
  },
  {
    paso: '02',
    titulo: 'Construcción del modelo hidráulico',
    desc: 'Se define la geometría del modelo: malla de cálculo 2D a partir de MDT LiDAR o levantamiento propio, secciones transversales del cauce, condiciones de contorno y coeficientes de Manning por uso del suelo.',
    herramientas: ['HEC-RAS 6.x (versión vigente)', 'MDT LiDAR 1m', 'ArcGIS / QGIS', 'AutoCAD Civil 3D'],
    resultado: 'Modelo hidráulico calibrado y listo para corrida',
  },
  {
    paso: '03',
    titulo: 'Corrida del modelo y resultados',
    desc: 'HEC-RAS genera mapas de profundidad máxima, velocidad máxima y extensión de la mancha de inundación para cada período de retorno. Los resultados se exportan a SIG para la elaboración de la cartografía de amenaza.',
    herramientas: ['HEC-RAS 2D solver', 'Post-procesamiento RAS Mapper', 'ArcGIS Pro', 'Georreferenciación'],
    resultado: 'Mapas de profundidad, velocidad y mancha de inundación',
  },
  {
    paso: '04',
    titulo: 'Cartografía y concepto de aptitud urbanística',
    desc: 'Con los resultados del modelo se clasifican las zonas en amenaza alta, media y baja según la metodología del Decreto 1807/2014. Se elabora el concepto de aptitud urbanística con las restricciones y medidas de mitigación requeridas para el proyecto.',
    herramientas: ['ArcGIS Pro / QGIS', 'AutoCAD (planos)', 'Informe técnico Decreto 1807', 'Firma COPNIA vigente'],
    resultado: 'Mapa de amenaza + concepto de aptitud urbanística',
  },
]

const FAQ = [
  {
    q: '¿Cuándo se requiere modelación hidráulica HEC-RAS 2D en Colombia?',
    a: 'La modelación 2D es necesaria cuando el proyecto se ubica en zona con amenaza hídrica media o alta, el área supera 5 hectáreas, la llanura de inundación tiene ancho mayor a 100 metros, o cuando la Curaduría Urbana o la CAR exigen mapas separados de profundidad y velocidad del flujo. Para licencias de urbanismo bajo Decreto 1807/2014, las Curadurías de Manizales, Pereira y Armenia exigen el modelo 2D como estándar.',
  },
  {
    q: '¿Cuánto cuesta una modelación HEC-RAS 2D en Colombia?',
    a: 'El costo depende del tamaño de la cuenca, la disponibilidad de MDT LiDAR o levantamiento topobatimétrico, el número de períodos de retorno requeridos y los entregables exigidos por la Curaduría o la CAR. Para un plan parcial de 10-50 ha en el Eje Cafetero, el estudio completo (hidrología + modelo HEC-RAS 2D + mapa de amenaza + concepto Decreto 1807) oscila entre $15 y $40 millones COP. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué diferencia hay entre HEC-RAS 1D y HEC-RAS 2D?',
    a: 'El modelo 1D simula el flujo a lo largo de secciones transversales predefinidas del cauce — es preciso para ríos encauzados con sección bien definida y sin desbordamiento lateral significativo. El modelo 2D resuelve las ecuaciones de flujo en toda la llanura aluvial, generando mapas de profundidad y velocidad con resolución métrica. Para licencias de urbanismo en zonas con posible desbordamiento, el 2D es el estándar requerido. BIC realiza ambos tipos según el proyecto.',
  },
  {
    q: '¿BIC tramita los permisos ante la CAR para estudios de riesgo?',
    a: 'BIC elabora toda la documentación técnica requerida por la CAR (CORPOCALDAS, CARDER, CRQ, CDMB, CAR Cundinamarca, etc.): memoria descriptiva, modelación hidráulica, mapas de amenaza, concepto de aptitud urbanística y medidas de mitigación propuestas. El radicado formal lo realiza el cliente, pero BIC acompaña el proceso respondiendo observaciones técnicas de la autoridad ambiental.',
  },
  {
    q: '¿Cuánto tiempo toma una modelación HEC-RAS 2D?',
    a: 'El plazo típico es de 6 a 12 semanas, dependiendo de si existe información topobatimétrica del cauce (si no, hay que levantarla en campo), la disponibilidad de datos hidrométricos del IDEAM y la complejidad del área de inundación. Para proyectos urgentes, BIC puede entregar resultados preliminares en 3-4 semanas para no bloquear la radicación de la licencia.',
  },
  {
    q: '¿BIC realiza modelaciones en todo Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo el territorio nacional. La mayor parte del trabajo de modelación se realiza con información remota (MDT, datos IDEAM, imágenes satelitales), con visitas de campo para levantamientos topobatimétricos cuando es necesario. Contamos con experiencia en proyectos en Caldas, Risaralda, Quindío, Antioquia, Cundinamarca, Boyacá, Valle del Cauca y Ecuador.',
  },
]

const ARTICULOS = [
  { href: '/blog/hec-ras-1d-vs-2d-colombia', title: 'HEC-RAS 1D vs 2D: ¿Cuál elegir para tu proyecto?' },
  { href: '/blog/hec-ras-2d-colombia', title: 'Modelación HEC-RAS 2D en Colombia: Guía Práctica' },
  { href: '/blog/modelacion-1d-2d-colombia', title: 'Modelación 1D y 2D en Colombia' },
]
    icon: '📏',
    titulo: 'Modelación 1D con HEC-RAS — perfil hidráulico en cauces',
    desc: 'Análisis del perfil de la lámina de agua a lo largo del eje de cauces y canales en régimen permanente y no permanente. Discretización de secciones transversales, cálculo de tirantes, velocidades y números de Froude para cada período de retorno. Obligatorio para diseño de puentes, alcantarillas y obras de arte bajo normativa INVIAS y para trámites ante corporaciones autónomas (CAR).',
  },
  {
    icon: '🌊',
    titulo: 'Modelación 2D con HEC-RAS — mapas de inundación',
    desc: 'Simulación de la propagación del flujo sobre la llanura de inundación mediante malla de elementos finitos. Genera mapas de profundidad, velocidad, fuerza tractiva y tiempo de llegada del frente de onda para períodos de retorno de 10, 50 y 100 años. Requerida por el Decreto 1807 de 2014 para estudios de amenaza hídrica en zonas de expansión urbana y planes parciales en Colombia.',
  },
  {
    icon: '🔀',
    titulo: 'Modelación acoplada 1D-2D — cauces urbanos complejos',
    desc: 'Combina la precisión del modelo 1D en el cauce principal con la capacidad 2D para representar la dinámica de inundación en planicies urbanas. Aplicado en zonas donde la red de alcantarillado interactúa con el drenaje superficial o en tramos con estructuras transversales como presas, compuertas y disipadores de energía.',
  },
  {
    icon: '💨',
    titulo: 'Modelación de avenidas torrenciales con sedimentos',
    desc: 'Análisis de flujos hiperconcentrados y de detritos en quebradas de montaña. Aplicado en el Eje Cafetero para cuencas con historial de avenidas torrenciales. BIC utiliza HEC-RAS con módulo de transporte de sedimentos y modelos complementarios para establecer zonas de amenaza alta y determinar obras de control torrencial.',
  },
]

const NORMATIVA = [
  {
    norma: 'Decreto 1807 de 2014 — amenaza hídrica en POT',
    desc: 'Establece que los municipios deben incorporar estudios de amenaza, vulnerabilidad y riesgo de inundación en sus POT. Para zonas de expansión urbana y planes parciales, exige estudios de detalle con modelación hidráulica 2D. El decreto define los períodos de retorno mínimos (10, 50 y 100 años) y las metodologías aceptadas por el MVCT y las CAR.',
  },
  {
    norma: 'Resolución 0549 de 2015 — zonificación de amenaza',
    desc: 'Complementa el Decreto 1807 definiendo los criterios técnicos para clasificar zonas en amenaza alta, media y baja por inundación. Los mapas resultantes de la modelación hidráulica 2D se utilizan directamente para la delimitación de estas zonas en los instrumentos de planificación territorial.',
  },
  {
    norma: 'Guía metodológica MVCT — estudios básicos de riesgo',
    desc: 'El Ministerio de Vivienda, Ciudad y Territorio publicó guías metodológicas para la elaboración de estudios básicos de amenaza por inundación y avenidas torrenciales. BIC aplica esta metodología oficial para garantizar que los estudios sean aceptados por las curadurías urbanas, alcaldías y corporaciones autónomas en todo el país.',
  },
  {
    norma: 'Normas INVIAS — obras de arte en vías',
    desc: 'El Manual de Diseño Geométrico y los Manuales de Drenaje de INVIAS establecen los criterios para el diseño hidráulico de alcantarillas, boxcoulverts y puentes en proyectos viales. La modelación HEC-RAS 1D es la herramienta estándar para verificar la capacidad hidráulica de estas estructuras y justificar los caudales de diseño.',
  },
]

const SOFTWARE = [
  { nombre: 'HEC-RAS 6.x', uso: 'Herramienta principal para modelación 1D y 2D. Desarrollado por el USACE (US Army Corps of Engineers). Estándar en Colombia para trámites ante CAR y MVCT.' },
  { nombre: 'HEC-HMS', uso: 'Modelación lluvia-escorrentía para obtener los hidrogramas de diseño que se introducen como condiciones de borde en HEC-RAS. Permite simular cuencas complejas con múltiples subcuencas y estructuras de control.' },
  { nombre: 'ArcGIS / QGIS + HEC-GeoRAS', uso: 'Procesamiento de modelos de elevación digital (DEM o LiDAR), extracción de geometría de secciones transversales, mallas 2D y generación de mapas de inundación georreferenciados.' },
  { nombre: 'Global Mapper / AutoCAD Civil 3D', uso: 'Procesamiento de nubes de puntos LiDAR, generación de MDT de alta resolución y diseño de secciones transversales para zonas urbanas con infraestructura compleja.' },
]

const PROYECTOS = [
  { tipo: 'Estudios de amenaza para POT y planes parciales', desc: 'Modelación hidráulica 2D para zonificar amenaza por inundación en zonas de expansión urbana. Requerida por el Decreto 1807/2014 para aprobación de planes parciales ante curadurías y alcaldías.' },
  { tipo: 'Diseño de obras de protección fluvial', desc: 'Modelación de alternativas de encauzamiento, jarillones, espigones y revestimientos de cauce para evaluar su efecto sobre la mancha de inundación y la dinámica del flujo en el cauce.' },
  { tipo: 'Alcantarillas y puentes — INVIAS', desc: 'Análisis hidráulico de estructuras de cruce vial: cálculo del caudal de diseño, verificación de la capacidad de descarga, socavación general y local, y diseño del colchón de protección.' },
  { tipo: 'Ronda hídrica y retiros de construcción', desc: 'Delimitación de la ronda hídrica de ríos y quebradas usando modelación hidráulica y criterios de las corporaciones autónomas. Determina el retiro mínimo de construcción exigido por la CAR.' },
  { tipo: 'Evaluación de inundación para pólizas de seguro', desc: 'Modelación hidráulica para determinar la probabilidad de inundación en predios de interés para aseguradoras o compradores de inmuebles en zonas de planicie aluvial.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Recopilación de información', desc: 'Levantamiento o procesamiento de LiDAR/DEM, secciones transversales de campo, datos de precipitación del IDEAM, aforos de caudal y antecedentes históricos de inundación.' },
  { paso: '02', titulo: 'Modelación lluvia-escorrentía (HEC-HMS)', desc: 'Delimitación y caracterización de subcuencas, obtención de hietogramas de diseño con curvas IDF regionales y cálculo de hidrogramas de creciente para múltiples períodos de retorno.' },
  { paso: '03', titulo: 'Modelación hidráulica (HEC-RAS 1D/2D)', desc: 'Construcción del modelo hidráulico, calibración con eventos históricos documentados, simulación de escenarios de diseño y generación de mapas de profundidad y velocidad.' },
  { paso: '04', titulo: 'Informe técnico y cartografía', desc: 'Elaboración del informe con metodología, resultados y mapas de amenaza por inundación georreferenciados, listos para incorporar al POT, plan parcial o expediente de licencia ambiental.' },
]

const FAQ = [
  {
    q: '¿Qué es la modelación hidráulica 2D y cuándo es obligatoria en Colombia?',
    a: 'La modelación hidráulica 2D simula cómo se extiende el agua sobre la llanura de inundación en caso de creciente, generando mapas detallados de profundidad, velocidad y área afectada. En Colombia, el Decreto 1807 de 2014 la exige para: (1) estudios de amenaza hídrica en zonas de expansión urbana del POT; (2) planes parciales que requieran estudio de detalle por inundación; (3) proyectos que soliciten licencia ambiental ante ANLA en zonas con cuerpos de agua. Muchas corporaciones autónomas también la exigen para permisos de ocupación de cauce.',
  },
  {
    q: '¿Cuánto cuesta un estudio de modelación hidráulica en Colombia?',
    a: 'El costo depende del tipo de modelación (1D o 2D), la longitud del tramo analizado, la disponibilidad de cartografía LiDAR, el número de períodos de retorno requeridos y el nivel de detalle del informe. Orientativamente en Colombia para 2026: modelación 1D de un tramo urbano simple (1–3 km): $8–20 millones COP; modelación 2D para plan parcial o POT (cuenca media): $20–60 millones COP; estudio integral con levantamiento topobatimétrico + HEC-HMS + HEC-RAS 2D: $40–120 millones COP. BIC elabora propuesta detallada con el alcance específico de cada proyecto.',
  },
  {
    q: '¿Qué diferencia hay entre HEC-RAS 1D y 2D?',
    a: 'HEC-RAS 1D calcula el perfil hidráulico a lo largo del eje del cauce: tirante, velocidad y energía en secciones transversales. Es eficiente para cauces bien definidos, obras de arte y cálculos de socavación. HEC-RAS 2D simula el flujo en toda la superficie: genera mapas que muestran exactamente dónde llega el agua y con qué profundidad y velocidad. Para estudios de amenaza por inundación requeridos por el Decreto 1807, el Ministerio de Vivienda recomienda la modelación 2D o acoplada 1D-2D por su mayor precisión espacial.',
  },
  {
    q: '¿Se puede usar la modelación hidráulica para delimitar la ronda hídrica?',
    a: 'Sí. La ronda hídrica en Colombia se delimita según criterios hidrológicos, hidráulicos y de estabilidad de laderas. La modelación hidráulica determina la mancha de inundación para creciente de 100 años, que es uno de los insumos principales para trazar el límite de la ronda hídrica ante la corporación autónoma regional. Otras corporaciones complementan este criterio con un retiro mínimo fijo (10–30 metros desde la orilla del cauce) y el análisis de inestabilidad de las márgenes.',
  },
  {
    q: '¿BIC puede elaborar estudios de modelación hidráulica para proyectos fuera del Eje Cafetero?',
    a: 'Sí. BIC elabora estudios de modelación hidráulica para proyectos en cualquier región de Colombia. Trabajamos con información del IDEAM (precipitación, caudales), modelos de elevación digital nacionales (DEM 12.5m del IGAC, LiDAR donde esté disponible) y visitas de campo puntuales para verificación de geometría y calibración. Hemos desarrollado proyectos en Caldas, Risaralda, Quindío, Cundinamarca, Boyacá y otras regiones del país.',
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
      description: 'Consultoría en modelación hidráulica e hidrológica en Colombia. HEC-RAS 1D y 2D, estudios de inundabilidad y diseño de obras hidráulicas.',
    },
    {
      '@type': 'Service',
      name: 'Modelación Hidráulica en Colombia — HEC-RAS 1D y 2D',
      provider: { '@type': 'LocalBusiness', name: 'BIC — Bernal Ingeniería Consultores' },
      areaServed: 'Colombia',
      description: 'Modelación hidráulica 1D y 2D con HEC-RAS para estudios de inundabilidad, planes parciales, POT y diseño de obras en toda Colombia.',
      serviceType: 'Ingeniería Hidráulica',
    },
  ],
}

export default function ModelacionHidraulicaColombia() {
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
          <SectionLabel light>Modelación computacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Modelación Hidráulica en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            HEC-RAS 1D y 2D para estudios de inundación, licencias de urbanismo y Decreto 1807/2014
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza modelaciones hidráulicas con HEC-RAS en todo Colombia.
            Cada estudio incluye análisis hidrológico con HEC-HMS, modelo hidráulico calibrado y mapas de
            amenaza para licencias de urbanismo, planes parciales y revisiones de POT.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar modelación hidráulica</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Ver estudios hidrológicos</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 2D','HEC-HMS','ArcGIS','Decreto 1807','LiDAR','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Servicio especializado · Nacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Modelación Hidráulica en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>HEC-RAS 1D y 2D — Estudios de Inundabilidad</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza modelación hidráulica 1D y 2D con HEC-RAS
            en toda Colombia. Estudios de inundabilidad para POT y planes parciales (Decreto 1807),
            diseño de obras de protección fluvial, análisis de socavación en puentes y delimitación
            de rondas hídricas ante corporaciones autónomas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios/modelacion-hec-ras" dark>
              Ver servicio HEC-RAS
            </Btn>
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+80', label: 'modelos HEC-RAS ejecutados en Colombia' },
              { num: '2D', label: 'modelación bidimensional estándar' },
              { num: 'Decreto 1807', label: 'compatible con licencias de urbanismo' },
              { num: '24h', label: 'para enviar propuesta técnica' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Herramientas:</span>
          {['HEC-RAS 1D/2D', 'HEC-HMS', 'Decreto 1807/2014', 'LiDAR', 'QGIS', 'ArcGIS', 'HEC-GeoRAS'].map(t => (
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
          }}>¿Qué incluye la modelación hidráulica?</h2>
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
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Modelaciones hidráulicas que realiza BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Desde la determinación de los caudales de diseño hasta la cartografía de amenaza hídrica
            para Curadurías Urbanas y CAR. BIC integra hidrología, hidráulica y SIG en un único estudio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa: Decreto 1807, MVCT, INVIAS y CAR</h2>
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

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo realiza BIC una modelación HEC-RAS 2D
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
      {/* ── SOFTWARE ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Herramientas de modelación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software: HEC-RAS, HEC-HMS, ArcGIS y Civil 3D</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {SOFTWARE.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 10,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un estudio de inundación?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica en menos de 24 horas · Primera consulta sin costo</p>
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', margin: '0 0 2rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
      {/* ── TIPOS DE PROYECTOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Aplicaciones</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de estudios de modelación hidráulica</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8',
                border: '1px solid #E2E8F0', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Proceso de trabajo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>4 fases del estudio de modelación hidráulica</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {PROCESO.map(p => (
              <div key={p.paso} style={{
                background: '#F8FAFC', border: '1px solid #E2E8F0',
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Preguntas sobre modelación hidráulica HEC-RAS en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Modelación hidráulica en Colombia</h2>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita modelación hidráulica<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, la región y lo que requiere la entidad (Curaduría, CAR, DNP).
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica en menos de 24 horas · Primera consulta sin costo.
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
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita modelación hidráulica en Colombia?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, el tipo de cauce o proyecto, si tiene LiDAR disponible
            y qué entidad solicita el estudio. Le enviamos propuesta técnica y cotización
            en menos de 24 horas hábiles.
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
