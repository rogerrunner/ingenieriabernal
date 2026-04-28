import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar obras civiles hidráulicas — diseño o interventoría. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Obras Civiles Hidráulicas en Colombia — Diseño, Modelación e Interventoría | BIC',
  description: 'BIC diseña y hace interventoría de obras civiles hidráulicas en Colombia: encauzamientos, diques, gaviones, disipadores de energía, box culvert, alcantarillas y estructuras de control de crecientes. HEC-RAS 2D, planos AutoCAD, firma COPNIA. Eje Cafetero y todo el país.',
  keywords: [
    'obras civiles hidráulicas Colombia',
    'diseño obras hidráulicas Colombia',
    'encauzamiento ríos Colombia',
    'diques de protección contra inundaciones',
    'gaviones Colombia diseño',
    'box culvert diseño Colombia',
    'alcantarilla hidráulica Colombia',
    'disipador de energía hidráulico',
    'estructura de control crecientes',
    'interventoría obras hidráulicas',
    'firma ingeniería hidráulica Colombia',
    'diseño obras hidráulicas Manizales',
    'obras de control de inundaciones Colombia',
    'protección ribereña Colombia ingeniería',
    'empresa obras hidráulicas Eje Cafetero',
  ],
  canonical: 'https://ingenieriabernal.co/obras-civiles-hidraulicas-colombia',
}

const TIPOS = [
  {
    icon: '🌊',
    tipo: 'Encauzamiento y Canalización de Cauces',
    subtitulo: 'Control de crecientes y protección de márgenes',
    desc: 'El encauzamiento consiste en rectificar, ampliar o proteger el cauce de un río o quebrada para que conduzca los caudales de avenida sin desbordar ni erosionar las márgenes. BIC diseña el nuevo trazado del cauce, calcula la sección hidráulica eficiente para el caudal de diseño (T=100 años), diseña las obras de protección de orillas (muros, gaviones, rip-rap) y modela el comportamiento hidráulico con HEC-RAS 2D antes y después de las obras.',
    aplicaciones: ['Protección de zonas urbanas frente a inundaciones', 'Recuperación de márgenes erosionadas', 'Adecuación hidráulica para nuevos desarrollos'],
    normativa: 'HEC-RAS 2D · NSR-10 · Manual INVIAS',
  },
  {
    icon: '🧱',
    tipo: 'Diques y Jarillones de Protección',
    subtitulo: 'Barreras físicas contra inundaciones',
    desc: 'Los diques y jarillones son estructuras de tierra o concreto que impiden el desbordamiento del río sobre zonas de interés (áreas urbanas, infraestructura vial, zonas industriales o agrícolas). BIC diseña la geometría del dique, calcula la estabilidad geotécnica, verifica que no se generen inundaciones aguas arriba o aguas abajo como consecuencia de la obra, y entrega planos constructivos con especificaciones de materiales y procedimiento de compactación.',
    aplicaciones: ['Protección de zonas habitadas en llanuras de inundación', 'Protección de vías e infraestructura junto a ríos', 'Defensa contra inundaciones en zonas agrícolas'],
    normativa: 'HEC-RAS 2D · Manual de Diques IDEAM · NSR-10',
  },
  {
    icon: '🔩',
    tipo: 'Gaviones y Obras de Bioingeniería',
    subtitulo: 'Protección natural y estructural de taludes y márgenes',
    desc: 'Los gaviones son estructuras flexibles de malla de alambre rellenas de roca que protegen las márgenes de los cauces contra la erosión hídrica. BIC diseña el sistema de gaviones (tipo caja, colchoneta, sacos), calcula los esfuerzos cortantes del flujo sobre el lecho y las márgenes, dimensiona el tamaño y peso de la roca de relleno y verifica la estabilidad del conjunto. Para cauces con menor energía, se complementa con obras de bioingeniería (revegetalización, trinchos) que reducen costos y mejoran el hábitat.',
    aplicaciones: ['Protección de orillas en ríos torrenciales', 'Estabilización de taludes hídricos', 'Complemento ecológico a obras de concreto'],
    normativa: 'NTC 4013 (gaviones) · Manual INVIAS · NSR-10',
  },
  {
    icon: '🚧',
    tipo: 'Box Culvert, Alcantarillas y Pasos de Vía',
    subtitulo: 'Cruce hidráulico bajo vías y terraplenes',
    desc: 'El box culvert y las alcantarillas permiten que los cauces pasen por debajo de vías, terraplenes y estructuras. Un subdimensionamiento de la alcantarilla genera inundaciones y falla de la vía; un sobredimensionamiento genera sedimentación y costos innecesarios. BIC diseña el tipo y tamaño de la estructura de cruce (alcantarilla circular, box culvert rectangular o arco), verifica el comportamiento hidráulico con caudales de diseño para múltiples períodos de retorno, y diseña las obras de entrada y salida (cabezales, disipadores).',
    aplicaciones: ['Cruces de quebradas bajo vías secundarias y terciarias', 'Cruce de canales bajo carreteras principales', 'Obras de drenaje transversal en proyectos viales INVIAS'],
    normativa: 'Manual de Drenaje INVIAS · HEC-RAS · NSR-10 Capítulo C',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Análisis hidrológico: caudales de diseño para cada estructura',
    desc: 'El diseño de toda obra hidráulica comienza por saber cuánta agua debe manejar. BIC realiza el estudio hidrológico de la cuenca que aporta al punto de interés, calculando los caudales de diseño para períodos de retorno de 2, 5, 10, 25, 50 y 100 años según la obra. Para encauzamientos urbanos se diseña para T=100 años; para alcantarillas de vías secundarias, T=25 años; para vías primarias, T=50 o 100 años. La metodología se ajusta al tamaño de la cuenca y la disponibilidad de información del IDEAM.',
    herramientas: ['HEC-HMS (modelación hidrológica)', 'Curvas IDF del IDEAM', 'Método racional modificado', 'Análisis de frecuencia (Gumbel, Log-Pearson III)'],
    resultado: 'Caudales de diseño para todos los períodos de retorno requeridos por la obra',
  },
  {
    paso: '02',
    titulo: 'Levantamiento topográfico y batimétrico del cauce',
    desc: 'Para diseñar una obra hidráulica se necesita conocer con precisión la geometría actual del cauce: pendiente, sección transversal, ancho de la llanura de inundación y obras existentes. BIC coordina el levantamiento con estación total o drone fotogramétrico, obteniendo el MDT del área de influencia. Para la modelación HEC-RAS se necesitan secciones transversales cada 20 a 50 metros a lo largo del tramo de estudio, incluyendo la geometría batimétrica del cauce si tiene agua permanente.',
    herramientas: ['Estación total (levantamiento de precisión)', 'Drone fotogramétrico (área amplia)', 'Batimetría de cauces con agua', 'QGIS / AutoCAD Civil 3D'],
    resultado: 'Topografía del tramo + secciones transversales del cauce para modelación hidráulica',
  },
  {
    paso: '03',
    titulo: 'Modelación HEC-RAS 2D: diagnóstico y diseño',
    desc: 'BIC modelará el cauce en su condición actual (sin obras) con HEC-RAS 2D para entender cómo se comporta en avenida — dónde desborda, a qué velocidad fluye, qué esfuerzos cortantes hay sobre el lecho. Con este diagnóstico se diseña la solución técnica: la sección hidráulica del encauzamiento, la altura del dique, el tipo de gavión o el tamaño del box culvert. Luego se modela con las obras para verificar que la solución funciona y no genera problemas aguas arriba ni aguas abajo.',
    herramientas: ['HEC-RAS 2D (modelación hidrodinámica)', 'QGIS (mapeo de inundaciones y velocidades)', 'Perfil hidráulico antes y después de obras'],
    resultado: 'Diagnóstico hidráulico actual + verificación de la solución diseñada',
  },
  {
    paso: '04',
    titulo: 'Diseño estructural de la obra',
    desc: 'Con la geometría hidráulica definida, BIC realiza el diseño estructural de la obra: cálculo de empujes hidrostáticos y de sedimentos, análisis de subpresión, verificación de estabilidad al deslizamiento y al volteo, diseño del armado de concreto, especificación de materiales de protección (roca, geotextil, concreto). Para gaviones se calcula el peso de la roca, el acomodo y las dimensiones de la malla. Para box culvert se verifica la resistencia estructural a las cargas vivas y muertas.',
    herramientas: ['AutoCAD Civil 3D (planos)', 'Cálculo estructural (NSR-10, RAS 2017)', 'Análisis de estabilidad geotécnica', 'Manual INVIAS para drenaje vial'],
    resultado: 'Diseño estructural completo con planos de detalle, armado y especificaciones',
  },
  {
    paso: '05',
    titulo: 'Entrega: planos, memorias y permisos',
    desc: 'BIC entrega el expediente técnico completo: planos constructivos en AutoCAD (planta, cortes, detalles constructivos), memoria de cálculo hidrológica, hidráulica y estructural firmada por especialista COPNIA, especificaciones técnicas generales y particulares, APU y presupuesto de obra. Si la obra requiere permiso de ocupación de cauce ante la CAR (encauzamientos, diques dentro del cauce, gaviones en orillas), BIC elabora los estudios técnicos para el trámite ambiental.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'Planos AutoCAD constructivos', 'Especificaciones técnicas y APU', 'Estudios para permiso CAR (si aplica)'],
    resultado: 'Expediente técnico completo listo para licitar, obtener permisos y construir',
  },
]

const FAQ = [
  {
    q: '¿Qué diferencia hay entre encauzamiento, canalización y rectificación de un río?',
    a: 'Son términos relacionados que se usan de forma diferente según el contexto. El encauzamiento es el proceso general de intervenir un cauce para controlar su comportamiento hidráulico: puede incluir rectificación, ampliación, protección de márgenes o combinaciones de estas acciones. La canalización implica revestir el cauce con concreto o gaviones para aumentar su capacidad y reducir la erosión. La rectificación es la corrección del trazado del cauce cuando tiene meandros o curvas que reducen su eficiencia hidráulica. BIC determina qué tipo de intervención es técnicamente correcta para cada caso después de la modelación HEC-RAS del cauce.',
  },
  {
    q: '¿Para qué período de retorno se diseñan las obras hidráulicas en Colombia?',
    a: 'El período de retorno de diseño depende del tipo de obra y la consecuencia de la falla. En Colombia, las guías técnicas (INVIAS, RAS 2017, NSR-10) establecen períodos mínimos según la obra: drenaje pluvial urbano menor T=10 años, alcantarillas de vías secundarias T=25 años, vías primarias T=50 años, estructuras de control de inundaciones urbanas T=100 años, presas pequeñas T=500 a 1000 años. BIC selecciona el período de retorno correcto para cada obra basándose en el uso, la vida útil esperada y la consecuencia de la falla, que en zonas urbanas o infraestructura crítica puede ser catastrófica.',
  },
  {
    q: '¿Cuánto cuesta el diseño de un encauzamiento o dique de protección?',
    a: 'El costo del diseño depende de la longitud del tramo a encauzar, la disponibilidad de información topográfica e hidrológica existente y si el proyecto requiere tramitar el permiso de ocupación de cauce ante la CAR. Para un encauzamiento urbano de 200 a 500 metros con modelación HEC-RAS, diseño de gaviones o muros y memoria de cálculo firmada, el costo de ingeniería oscila entre $25.000.000 y $70.000.000 COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo, con base en la descripción del cauce y el objetivo del proyecto.',
  },
  {
    q: '¿Necesito permiso de la CAR para hacer un encauzamiento o colocar gaviones?',
    a: 'Sí, en la mayoría de los casos. Cualquier obra que se construya dentro del cauce (gaviones en las orillas, muros de concreto en las márgenes, muros de gaviones para encauzar) requiere el permiso de ocupación de cauce ante la Corporación Autónoma Regional competente, según el Decreto 1076 de 2015. Si el proyecto además desvía o modifica el trazado del cauce, puede requerir también el permiso de concesión de aguas. Sin estos permisos, la CAR puede ordenar la demolición de las obras y imponer multas. BIC elabora los estudios técnicos necesarios para ambos trámites.',
  },
  {
    q: '¿Cómo sé si necesito un encauzamiento, un dique o un gavión?',
    a: 'La solución técnica correcta depende del problema específico: si el cauce tiene capacidad insuficiente para los caudales de avenida, lo que hay que hacer es ampliar la sección hidráulica (encauzamiento o canalización). Si el cauce tiene capacidad suficiente pero desborda en zonas planas por el nivel de la llanura de inundación, la solución es un dique lateral que impida el desbordamiento. Si el problema es la erosión de las márgenes, la solución es la protección con gaviones, rip-rap o bioingeniería. Muchos proyectos requieren combinación de varias soluciones. BIC determina la solución correcta después de la modelación HEC-RAS del cauce.',
  },
  {
    q: '¿BIC puede hacer interventoría de obras hidráulicas en ejecución?',
    a: 'Sí. BIC ofrece interventoría técnica de obras hidráulicas para verificar que la construcción se ejecute conforme al diseño: revisión de secciones transversales del encauzamiento durante la construcción, control de calidad de materiales (roca para gaviones, concreto, geotextiles), verificación de cotas de instalación de alcantarillas y box culvert, revisión de compactación de rellenos en diques. La interventoría de BIC da tranquilidad al propietario de que la obra se construye correctamente y reduce el riesgo de fallas prematuras.',
  },
  {
    q: '¿Cuánto tiempo toma el diseño de una obra hidráulica?',
    a: 'El plazo varía según el tamaño y la complejidad. Para una alcantarilla o box culvert en una vía secundaria, el diseño completo puede estar listo en 3 a 5 semanas. Para un encauzamiento de un tramo urbano de 300 a 500 metros con modelación HEC-RAS 2D, diseño de gaviones o muro y gestión del permiso CAR, el plazo típico es de 8 a 14 semanas. BIC puede priorizar componentes específicos (diseño hidráulico primero, diseño estructural después) para no bloquear el proceso de licitación o de permiso.',
  },
  {
    q: '¿BIC trabaja en toda Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo Colombia. La firma tiene proyectos de encauzamiento, diques y gaviones en Antioquia, Cundinamarca, Valle del Cauca, Nariño, Tolima, Cauca y la región Caribe, además del Eje Cafetero. La mayor parte del trabajo de diseño (hidrología, modelación HEC-RAS, memorias de cálculo) se hace con información remota. El levantamiento topográfico se coordina con firmas locales certificadas cuando el cliente no tiene esta información. BIC entrega el proyecto completo desde Manizales para clientes en cualquier parte del país.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y Gobernaciones', desc: 'Obras de control de inundaciones en zonas urbanas, protección de infraestructura pública y rehabilitación de cauces intervenidos.' },
  { tipo: 'INVIAS y concesiones viales', desc: 'Diseño de alcantarillas, box culvert, drenaje transversal y obras de protección en proyectos de carreteras nacionales y 4G.' },
  { tipo: 'Constructoras e Inmobiliarias', desc: 'Protección hidráulica de proyectos de vivienda y urbanización con cauces vecinos, y obras de drenaje del predio.' },
  { tipo: 'Empresas Mineras y Agroindustriales', desc: 'Manejo de aguas en predios productivos, protección de infraestructura junto a ríos y rehabilitación de cauces afectados por la actividad.' },
  { tipo: 'Empresas de Servicios Públicos', desc: 'Protección de infraestructura de acueducto y energía junto a cauces: tuberías, captaciones, líneas de transmisión.' },
  { tipo: 'Propietarios privados', desc: 'Protección de predios contra inundación o erosión fluvial, con soluciones técnicas correctas y permisos CAR en regla.' },
]

const NORMATIVA = [
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — diseño estructural de muros de retención, disipadores y estructuras de concreto' },
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico de Agua y Saneamiento — criterios hidráulicos para estructuras de control de caudal' },
  { codigo: 'Manual INVIAS', descripcion: 'Manual de Drenaje para Carreteras — criterios de diseño de alcantarillas y obras de drenaje vial' },
  { codigo: 'NTC 4013', descripcion: 'Norma colombiana para gaviones — especificaciones de malla, roca y armado' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de permiso de ocupación de cauce ante las CAR' },
  { codigo: 'Manual IDEAM', descripcion: 'Protocolos para análisis hidrológico y uso de datos de estaciones del IDEAM' },
]

export default function ObrasCivilesHidraulicas() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería hidráulica · Obras civiles · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Obras Civiles Hidráulicas en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Encauzamientos, diques, gaviones, box culvert y estructuras de control — diseño con HEC-RAS 2D y firma COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña obras civiles hidráulicas en todo Colombia: encauzamientos
            de ríos y quebradas, diques de protección contra inundaciones, sistemas de gaviones, box culvert y
            alcantarillas para vías. Cada obra se diseña con modelación HEC-RAS 2D del cauce, análisis hidrológico
            completo y planos constructivos firmados por especialista con tarjeta COPNIA vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de obra hidráulica</Btn>
            <Btn variant="outline" href="/encauzamiento-rios-colombia" dark>Encauzamiento de ríos</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 2D','Gaviones','Box culvert','Encauzamiento','Diques','COPNIA'].map(t => (
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
              { num: '+60', label: 'obras hidráulicas diseñadas en Colombia' },
              { num: 'HEC-RAS 2D', label: 'modelación hidrodinámica bidimensional' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: 'Nacional', label: 'proyectos en todo Colombia' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de obra hidráulica</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Obras civiles hidráulicas que diseña BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            BIC selecciona la solución técnica correcta para cada problema hidráulico después de modelar el
            cauce con HEC-RAS. La solución equivocada cuesta más o no funciona — o las dos cosas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICACIONES</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.aplicaciones.map(a => <li key={a}>{a}</li>)}
                  </ul>
                </div>
                <p style={{ fontSize: 12, color: '#888', margin: 0 }}>Normativa: {t.normativa}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC una obra hidráulica
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del análisis hidrológico al expediente constructivo listo para licitar y obtener permisos.
            Todas las obras se verifican hidráulicamente con modelación antes de diseñar.
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un problema hidráulico que resolver?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica en menos de 24 horas · Primera consulta sin costo</p>
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Clientes de BIC en obras civiles hidráulicas
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
          <SectionLabel>Marco técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 28 }}>
            Normativa aplicable a obras civiles hidráulicas
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
            Otros servicios de ingeniería hidráulica BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Encauzamiento de ríos Colombia', href: '/encauzamiento-rios-colombia' },
              { label: 'Bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Diseño canales de riego', href: '/diseno-canal-riego-colombia' },
              { label: 'Modelación HEC-RAS', href: '/servicios/modelacion-hec-ras' },
              { label: 'Gestión de riesgo en taludes', href: '/gestion-riesgo-taludes-colombia' },
              { label: 'Estudios hidrológicos', href: '/servicios/estudios-hidrologicos' },
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
            Todo sobre obras civiles hidráulicas en Colombia
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita el diseño de una obra<br />hidráulica en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el problema: el cauce, la zona, el tipo de infraestructura a proteger y si ya tiene topografía.
            BIC le envía propuesta técnica y económica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Especialistas COPNIA · Proyectos en todo Colombia
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
