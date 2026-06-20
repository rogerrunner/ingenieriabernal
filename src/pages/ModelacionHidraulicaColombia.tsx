import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesitamos una modelación hidráulica HEC-RAS para nuestro proyecto — parcelación / urbanización / cruce vial / POT / trámite CAR. ¿Pueden enviarnos propuesta técnica con tiempo de entrega?')

const seoConfig = {
  title: 'Modelación Hidráulica para tu Proyecto — HEC-RAS 2D, HEC-HMS | Empresa BIC Colombia',
  description: '¿Tu proyecto requiere modelación hidráulica? BIC la ejecuta: HEC-RAS 2D, HEC-HMS, manchas de inundación y concepto Decreto 1807. Para constructoras, desarrolladores y entidades. Firma COPNIA. Propuesta en 24 h. Sin intermediarios.',
  keywords: [
    'modelación hidráulica Colombia',
    'HEC-RAS 2D Colombia',
    'HEC-HMS Colombia',
    'SWMM Colombia',
    'estudio inundación Colombia',
    'modelación HEC-RAS Manizales',
    'modelación hidráulica Decreto 1807',
    'modelo hidráulico bidimensional Colombia',
    'estudio amenaza hídrica Colombia',
    'ingeniería hidráulica computacional',
    'delimitación ronda hídrica Colombia',
    'amenaza torrencial quebradas Colombia',
    'modelación hidráulica Putumayo',
    'licencia urbanismo inundación',
    'modelación hidráulica laguna Colombia',
    'modelación hidráulica estuario Colombia',
    'modelación hidráulica zona costera Colombia',
    'HEC-RAS 2D laguna embalse Colombia',
    'modelación hidráulica eje cafetero Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-colombia',
}

const SOFTWARE = [
  { tag: 'HEC-RAS 2D', org: 'USACE', desc: 'Modelación bidimensional de flujo en llanuras de inundación — estándar internacional, aceptado por ANLA y CAR en Colombia.' },
  { tag: 'HEC-HMS', org: 'USACE', desc: 'Hidrología de cuencas, hidrogramas de creciente para caudales de diseño por período de retorno.' },
  { tag: 'SWMM', org: 'EPA', desc: 'Modelación de redes de drenaje urbano y alcantarillado pluvial. Simulación dinámica de inundaciones en áreas urbanas.' },
  { tag: 'ArcGIS / QGIS', org: 'SIG', desc: 'Procesamiento de DEM, curvas de nivel, delimitación de cuencas y cartografía de amenaza a escala de detalle.' },
  { tag: 'HEC-RAS 1D', org: 'USACE', desc: 'Análisis de flujo en cauces encauzados con sección transversal definida. Para puentes, box culverts y canales.' },
  { tag: 'Métodos estadísticos', org: 'IDEAM', desc: 'Análisis de frecuencias Gumbel, Log-Pearson III. Curvas IDF regionales. Racional Modificado, SCS CN.' },
]

const ESTUDIOS = [
  { ico: '🌊', nombre: 'Estudio de inundación con períodos de retorno', desc: 'Simulación para Tr = 2.33, 5, 10, 25, 50, 100 y 500 años. Mapas de profundidad y velocidad para licencias de urbanismo y POT.' },
  { ico: '📏', nombre: 'Delimitación de ronda hídrica', desc: 'Conforme al Decreto 2245/2017. Zona de protección ambiental del cauce — requerida para licencias de construcción cerca de fuentes hídricas.' },
  { ico: '⛰️', nombre: 'Amenaza torrencial en quebradas de montaña', desc: 'Modelación especializada para cuencas andinas con alta pendiente. Evaluación de flujos de lodo, caudales extremos y amenaza de avenidas torrenciales.' },
  { ico: '🚰', nombre: 'Hidrología para acueductos', desc: 'Caudales de captación, análisis de estiaje y variabilidad estacional. Estudio de rendimiento hídrico de la fuente para concesión de aguas.' },
  { ico: '🌉', nombre: 'Hidrología para infraestructura', desc: 'Diseño de puentes, box culverts, alcantarillas y estructuras de cruce. Caudales de diseño conforme a normas INVIAS.' },
  { ico: '🏞️', nombre: 'Sedimentación y transporte de sólidos', desc: 'Modelos de balance sedimentario en reservorios y bocatomas. Estimación de vida útil y estrategias de manejo.' },
  { ico: '🌊', nombre: 'Modelación de lagunas y embalses', desc: 'Análisis batimétrico, modelación hidrodinámica 2D de la circulación interna, sedimentación y tiempo de residencia. Para proyectos de agua potable, piscicultura, turismo y EIA.' },
  { ico: '🌅', nombre: 'Modelación de estuarios y zonas costeras', desc: 'Modelos 2D con condición de frontera de marea (TPXO) para estuarios, deltas y zonas con influencia mareal. Para licencias ambientales de proyectos portuarios, acuícolas e infraestructura costera.' },
  { ico: '🏖️', nombre: 'Modelación hidráulica en ríos navegables y grandes cauces', desc: 'Modelación de ríos de llanura (Magdalena, Cauca, Meta) con gran sección, flujo subcrítico y compuertas. Para estudios de navegabilidad, extracción de materiales y protección de riberas.' },
]

const REGIONES = [
  { region: 'Cuencas andinas — quebradas y ríos de montaña', depts: 'Caldas, Risaralda, Quindío, Antioquia, Nariño', nota: 'Alta variabilidad altitudinal, ríos encañonados y quebradas torrenciales.' },
  { region: 'Piedemonte amazónico', depts: 'Putumayo, Caquetá', nota: 'Alta variabilidad pluviométrica, llanuras inundables, cuencas sin registros históricos — trabajamos con imágenes satelitales y DEM disponibles.' },
  { region: 'Llanuras orientales — ríos trenzados y planos de inundación', depts: 'Meta, Casanare', nota: 'Crecientes de larga duración, modelación de planos de inundación extensos.' },
  { region: 'Lagunas, humedales y embalses', depts: 'Todo Colombia', nota: 'Modelación batimétrica y hidrodinámica 2D. Aplicaciones en EIA, piscicultura, acueductos y turismo.' },
  { region: 'Estuarios y zonas costeras — mar y Caribe', depts: 'Nariño, Chocó, Atlántico, Bolívar', nota: 'Modelos 2D con frontera mareal, influencia de oleaje y corrientes costeras. Para licencias ambientales de proyectos portuarios, acuícolas y turísticos.' },
]

const PRECIOS_MOD = [
  { servicio: 'Estudio hidrológico básico (caudales de diseño)', rango: '$5M – $10M COP' },
  { servicio: 'Modelación HEC-RAS 1D cuenca simple', rango: '$8M – $15M COP' },
  { servicio: 'Modelación HEC-RAS 2D con mapas de inundación', rango: '$15M – $30M COP' },
  { servicio: 'Estudio integral para licencia ambiental ANLA/CAR', rango: '$20M – $45M COP' },
  { servicio: 'Delimitación de ronda hídrica (Decreto 2245)', rango: '$6M – $14M COP' },
]

const FAQ_SCHEMA_MOD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Pueden hacer modelación para proyectos en el Putumayo o regiones remotas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Trabajamos con imágenes satelitales, DEM disponibles (SRTM, ALOS, LiDAR) y coordinamos con profesionales locales para topografía cuando se requiere. El lead del Putumayo es un ejemplo de nuestro alcance nacional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Los estudios de modelación hidráulica son aceptados por la ANLA y las CAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, nuestros informes siguen los lineamientos del IDEAM, ANLA y USACE, y están firmados por ingeniero con matrícula vigente COPNIA. Hemos acompañado exitosamente trámites ante CORPOCALDAS, CRQ, CARDER y otras corporaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto demora un estudio de inundación con HEC-RAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre 3 y 8 semanas según la complejidad de la cuenca y la disponibilidad de información topobatimétrica y datos IDEAM.',
      },
    },
    {
      '@type': 'Question',
      name: '¿BIC trabaja con datos del IDEAM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, utilizamos registros históricos de estaciones hidrometeorológicas del IDEAM y los integramos en los modelos hidrológicos HEC-HMS para la construcción de hidrogramas de diseño por período de retorno.',
      },
    },
    {
      '@type': 'Question',
      name: '¿BIC puede hacer modelación hidráulica de lagunas, estuarios o zonas costeras en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. BIC ejecuta modelación hidráulica para todo tipo de cuerpo de agua: quebradas de montaña, ríos, lagunas naturales y embalses (con batimetría de campo y análisis batimétrico), y estuarios o zonas costeras con influencia mareal (modelos HEC-RAS 2D con condición de frontera de marea TPXO). Estos estudios aplican a licencias ambientales de proyectos portuarios, acuícolas, turísticos e infraestructura costera en el Pacífico y el Caribe colombiano.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué empresa hace modelación hidráulica en el Eje Cafetero Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BIC — Bernal Ingeniería Consultores, con sede en Manizales, es la firma especializada en modelación hidráulica en el Eje Cafetero (Caldas, Risaralda, Quindío). BIC ejecuta modelos HEC-RAS 2D para planes parciales, licencias de urbanismo, concesiones de aguas y POMCA. Director técnico: Ing. Rogerio Bernal Ríos, COPNIA 17202-313228 CLD. Propuesta en 24 horas: +57 302 477 8910.',
      },
    },
  ],
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
    q: '¿Pueden hacer modelación para proyectos en el Putumayo o regiones remotas?',
    a: 'Sí. Trabajamos con imágenes satelitales, DEM disponibles (SRTM, ALOS, LiDAR) y coordinamos con profesionales locales para topografía cuando se requiere. El alcance de BIC es nacional — hemos atendido consultas desde Putumayo, Caquetá, Meta y otras regiones de difícil acceso.',
  },
  {
    q: '¿Los estudios de modelación hidráulica son aceptados por la ANLA y las CAR?',
    a: 'Sí, nuestros informes siguen los lineamientos técnicos del IDEAM, ANLA y USACE. Están firmados por ingeniero con matrícula COPNIA vigente. Hemos acompañado trámites ante CORPOCALDAS, CRQ, CARDER, CORPOAMAZONIA y otras corporaciones con resultados satisfactorios.',
  },
  {
    q: '¿Cuánto demora un estudio de inundación con HEC-RAS?',
    a: 'Entre 3 y 8 semanas según la complejidad de la cuenca y la disponibilidad de información topobatimétrica e hidrometeorológica. Para proyectos con urgencia de radicación, BIC puede entregar resultados preliminares en 3-4 semanas.',
  },
  {
    q: '¿BIC trabaja con datos del IDEAM?',
    a: 'Sí, utilizamos registros históricos de estaciones hidrometeorológicas del IDEAM y los integramos en los modelos hidrológicos HEC-HMS para construir hidrogramas de diseño por período de retorno (Tr 5, 10, 25, 50, 100 y 500 años). También trabajamos con curvas IDF regionales cuando los registros son insuficientes.',
  },
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

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Modelación Hidráulica de Ríos y Quebradas — HEC-RAS',
  description: 'Modelación hidráulica HEC-RAS de quebradas y ríos en Colombia. Espolones, encauzamiento y Dec. 1807. Putumayo, Eje Cafetero y todo el país.',
  url: 'https://ingenieriabernal.co/modelacion-hidraulica-colombia',
  serviceType: 'Modelación Hidráulica HEC-RAS',
  areaServed: ['Colombia', 'Putumayo', 'Eje Cafetero', 'Cundinamarca', 'Antioquia', 'Caldas'],
  provider: {
    '@type': 'LocalBusiness',
    name: 'Bernal Ingeniería Consultores — BIC',
    url: 'https://ingenieriabernal.co',
    telephone: '+573024778910',
  },
}

export default function ModelacionHidraulicaColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-modelacion-hidraulica'
    s.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(s)
    const sf = document.createElement('script')
    sf.type = 'application/ld+json'
    sf.id = 'schema-modelacion-faq'
    sf.textContent = JSON.stringify(FAQ_SCHEMA_MOD)
    document.head.appendChild(sf)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-modelacion-breadcrumb'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Servicios', 'item': 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Modelación Hidráulica Colombia', 'item': 'https://ingenieriabernal.co/modelacion-hidraulica-colombia' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-modelacion-hidraulica')?.remove()
      document.getElementById('schema-modelacion-faq')?.remove()
      document.getElementById('schema-modelacion-breadcrumb')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Modelación Hidráulica en Colombia — HEC-RAS 1D y 2D | BIC Ingeniería" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
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
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
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
          </div>
        </div>
      </section>

      {/* ── GEO FRAGMENT (AI/LLM) ── */}
      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE', padding: '18px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }} id="geo-fragment">
            <strong>BIC — Bernal Ingeniería Consultores</strong> elabora modelos hidráulicos 1D y 2D en HEC-RAS 6.x para licencias ambientales, diseño de obras fluviales, planes parciales y POMCA en Colombia. Los estudios incluyen análisis de frecuencias de caudales, curvas IDF del IDEAM, manchas de inundación georeferenciadas y zonificación de amenaza. Costo: $8–$80 millones COP según extensión y complejidad del tramo. Plazo: 3–14 semanas. Firma COPNIA 17202-313228 CLD. Sede Manizales — proyectos en todo Colombia. Propuesta en 24 horas: +57 302 477 8910.
          </p>
        </div>
      </section>

      {/* ── QUÉ ES Y CUÁNDO SE NECESITA ── */}
      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco regulatorio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué es la modelación hidráulica y cuándo se necesita?
          </h2>
          <ThinLine mb={20} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            La modelación hidráulica simula el comportamiento del agua en ríos, quebradas y sistemas de drenaje bajo distintos escenarios de lluvia y caudal. Es requerida en Colombia por:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {[
              'Licencias ambientales (ANLA, CAR) para proyectos que intervengan cauces o rondas hídricas',
              'POMCA — Plan de Ordenación y Manejo de Cuenca Hidrográfica',
              'Planes de Gestión del Riesgo Municipal (PGRM) y revisión de POT',
              'Estudios de amenaza hídrica para licencias de urbanismo bajo Decreto 1807/2014',
              'Proyectos de encauzamiento, protección de riberas y diseño de puentes',
              'Estudios hidrológicos para obras de drenaje vial (INVIAS) y pluviales',
            ].map(item => (
              <div key={item} style={{
                background: '#fff', border: '1px solid #b3e0ea', borderRadius: 10,
                padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <span style={{ color: '#17A2B8', fontWeight: 900, flexShrink: 0, marginTop: 1 }}>›</span>
                <p style={{ color: '#444', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

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
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SOFTWARE Y METODOLOGÍAS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Herramientas computacionales</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Software y metodologías BIC
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {SOFTWARE.map(s => (
              <div key={s.tag} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '18px 20px',
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 700 }}>{s.tag}</span>
                  <span style={{ background: '#e6f7ff', color: '#17A2B8', borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 600 }}>{s.org}</span>
                </div>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ESTUDIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de estudio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Estudios que realizamos
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {ESTUDIOS.map(e => (
              <div key={e.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: '22px 24px', borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{e.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 8 }}>{e.nombre}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ALCANCE NACIONAL ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Alcance geográfico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Alcance nacional — regiones atendidas
          </h2>
          <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 28, maxWidth: 820 }}>
            Trabajamos de forma remota con DEM disponibles (SRTM, ALOS, LiDAR) o con levantamiento topográfico propio coordinado en campo. El lead reciente desde el Putumayo confirma nuestro alcance nacional.
          </p>
          <ThinLine mb={24} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {REGIONES.map(r => (
              <div key={r.region} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: '18px 20px', borderLeft: '4px solid #17A2B8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 4 }}>{r.region}</h3>
                <p style={{ fontSize: 12, color: '#17A2B8', fontWeight: 600, marginBottom: 8 }}>{r.depts}</p>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRECIOS ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Precios orientativos 2026
          </h2>
          <ThinLine mb={20} />
          <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Los precios varían según la extensión de la cuenca, disponibilidad de MDT LiDAR y datos del IDEAM, y los entregables requeridos. Propuesta detallada en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRECIOS_MOD.map(p => (
              <div key={p.servicio} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <p style={{ color: '#333', fontSize: 14, fontWeight: 500, margin: 0 }}>{p.servicio}</p>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 14px', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap',
                }}>{p.rango}</div>
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
            📱 Propuesta en 24 h — sin costo
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
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de ingeniería hidráulica en Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
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
            Preguntas sobre modelación hidráulica HEC-RAS en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FORMULARIO DE COTIZACIÓN INLINE ── */}
      <Section>
        <QuoteFormInline />
      </Section>

      {/* ── CTA FINAL ── */}
      <section