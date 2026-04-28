import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudios de gestión de riesgo en taludes o deslizamientos. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Gestión de Riesgo en Taludes Colombia — Estabilidad, Deslizamientos y Amenaza | BIC',
  description: 'BIC elabora estudios de gestión de riesgo en taludes para Colombia: análisis de estabilidad, zonificación de amenaza por movimientos en masa, Plan de Emergencias y diseño de obras de estabilización. Manizales, Eje Cafetero, zonas andinas y todo el país.',
  keywords: [
    'gestión de riesgo taludes Colombia',
    'estabilidad de taludes Colombia',
    'deslizamientos Colombia estudio',
    'amenaza movimientos en masa Colombia',
    'zonificación amenaza deslizamiento',
    'plan de emergencias deslizamiento',
    'obras estabilización taludes Colombia',
    'estudio geotécnico talud Colombia',
    'riesgo deslizamiento construcción Colombia',
    'talud inestable Colombia ingeniería',
    'geotecnia taludes Manizales Eje Cafetero',
    'análisis estabilidad ladera Colombia',
    'muro de contención Colombia diseño',
    'firma ingeniería taludes Colombia',
    'empresa gestión riesgo taludes Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/gestion-riesgo-taludes-colombia',
}

const TIPOS = [
  {
    icon: '🏔️',
    tipo: 'Análisis de Estabilidad de Taludes',
    subtitulo: 'Verificar si el talud es estable y qué tan seguro es',
    desc: 'El análisis de estabilidad de taludes determina el factor de seguridad del talud (qué tan lejos está de fallar) para las condiciones estáticas, pseudoestáticas (sismo) y saturadas (lluvias intensas). BIC aplica los métodos de equilibrio límite (Bishop, Janbu, Morgenstern-Price) en el software SLOPE/W y determina el tipo de falla potencial (superficial, traslacional, rotacional, cuña), la superficie de falla crítica y las condiciones de activación del deslizamiento (nivel freático crítico, aceleración sísmica de diseño). Este análisis es la base para cualquier decisión técnica sobre el talud.',
    cuando: 'Cuando hay un talud natural o construido en el que se quiere construir, hay señales de movimiento (grietas, hundimientos) o se necesita un concepto técnico de estabilidad.',
    norma: 'NSR-10 · Guías SGC · Manual INVIAS taludes',
  },
  {
    icon: '🗺️',
    tipo: 'Zonificación de Amenaza por Movimientos en Masa',
    subtitulo: 'Mapeo del riesgo en una zona o corredor',
    desc: 'La zonificación de amenaza por movimientos en masa mapea el nivel de amenaza de una zona territorial: cuáles áreas tienen alta probabilidad de deslizamiento, cuáles tienen amenaza media y cuáles son estables. BIC elabora esta zonificación con análisis geomorfológico (identificación de rasgos de inestabilidad), análisis de precipitación (relación lluvia-deslizamiento), modelación de susceptibilidad y campo de inventario de eventos. El resultado es el mapa de amenaza que exigen los POT, los planes de gestión del riesgo y las autoridades ambientales.',
    cuando: 'Para POT municipales, planes de reducción del riesgo, proyectos de infraestructura en zonas montañosas y evaluaciones de vulnerabilidad territorial.',
    norma: 'Ley 1523/2012 · Guías SGC · Decreto 1807/2014',
  },
  {
    icon: '🔧',
    tipo: 'Diseño de Obras de Estabilización',
    subtitulo: 'Muros de contención, anclajes, drenes y gaviones',
    desc: 'Cuando el análisis de estabilidad determina que el factor de seguridad es insuficiente, BIC diseña las obras de estabilización necesarias: muros de gravedad, muros en cantilever o anclados, sistemas de drenaje superficial y profundo (drenes subhorizontales, trinchos), anclajes activos o pasivos (bulones, micropilotes), gaviones de contención y obras de bioingeniería. El diseño optimiza la solución técnica para maximizar el factor de seguridad con el menor costo de construcción.',
    cuando: 'Cuando el análisis de estabilidad indica riesgo de falla o cuando hay que construir junto a un talud que no tiene factor de seguridad suficiente.',
    norma: 'NSR-10 · Manual INVIAS · NTC 4013 (gaviones)',
  },
  {
    icon: '🚨',
    tipo: 'Plan de Emergencia y Evacuación por Deslizamientos',
    subtitulo: 'Protocolo legal de respuesta ante eventos',
    desc: 'La Ley 1523 de 2012 exige que las entidades territoriales y los grandes proyectos de infraestructura tengan un Plan de Emergencia que incluya el protocolo de respuesta ante deslizamientos. BIC elabora el Plan de Emergencia y Evacuación para comunidades, proyectos de construcción e infraestructura en zonas de amenaza alta por movimientos en masa: identifica las zonas de evacuación, los puntos de encuentro, los umbrales de alerta (lluvia acumulada que activa la evacuación) y el protocolo de comunicación con las autoridades.',
    cuando: 'Obligatorio para alcaldías y UNGRD en zonas de alta amenaza. Recomendado para proyectos de construcción e infraestructura en zonas de ladera.',
    norma: 'Ley 1523/2012 · UNGRD · Decreto 2157/2017',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Reconocimiento de campo y diagnóstico geomorfológico',
    desc: 'BIC inicia cada proyecto de gestión del riesgo en taludes con el reconocimiento de campo: visita al talud para identificar señales de inestabilidad (grietas de tensión, escarpes, zonas húmedas, inclinación de árboles o postes, ondulaciones del terreno), caracterizar la litología (tipo de roca o suelo), establecer la geometría del talud (pendiente, altura, orientación) y documentar con fotografías y levantamiento GPS. Este reconocimiento permite establecer el alcance correcto del estudio antes de diseñar los ensayos de laboratorio.',
    herramientas: ['Inspección visual y reconocimiento geomorfológico', 'Registro fotográfico y GPS', 'Consulta de imágenes satelitales (Google Earth, Sentinel)', 'Inventario de movimientos en masa SGC'],
    resultado: 'Diagnóstico preliminar de la condición del talud y plan de exploración del subsuelo',
  },
  {
    paso: '02',
    titulo: 'Exploración geotécnica del subsuelo',
    desc: 'Para calcular la estabilidad del talud se necesita conocer las propiedades mecánicas del suelo o roca: ángulo de fricción interna, cohesión, peso unitario, permeabilidad. BIC planifica y ejecuta la campaña de exploración: perforaciones con recuperación de muestras (en las que se hacen ensayos SPT), apiques de exploración manual para obtener muestras inalteradas, ensayos de laboratorio de resistencia al cortante (triaxial CU, CD o UU según el problema), determinación del nivel freático y ensayos de permeabilidad si hay problemas de drenaje.',
    herramientas: ['Perforaciones con SPT (exploración profunda)', 'Apiques manuales (exploración superficial)', 'Ensayos triaxiales de resistencia al cortante', 'Determinación de nivel freático'],
    resultado: 'Parámetros geotécnicos de resistencia del suelo para el análisis de estabilidad',
  },
  {
    paso: '03',
    titulo: 'Análisis de estabilidad y factor de seguridad',
    desc: 'Con la geometría del talud y los parámetros de resistencia del suelo, BIC realiza el análisis de estabilidad con el software SLOPE/W (Geo-Studio): se modela la sección transversal del talud, se aplican los métodos de equilibrio límite (Bishop Simplificado, Janbu, Morgenstern-Price) y se calcula el factor de seguridad para tres escenarios: condición estática (sin sismo ni saturación), condición pseudoestática (con el coeficiente sísmico de la zona), y condición saturada (nivel freático en la superficie, que representa las lluvias extremas). El factor de seguridad mínimo exigido por la NSR-10 es 1.5 para condición estática y 1.1 para condición sísmica.',
    herramientas: ['SLOPE/W (Geo-Studio) — análisis de estabilidad', 'Métodos de equilibrio límite (Bishop, Janbu, M-P)', 'NSR-10 (factores de seguridad mínimos)', 'Análisis de sensibilidad (variación de parámetros)'],
    resultado: 'Factor de seguridad del talud para los tres escenarios críticos con identificación de la superficie de falla',
  },
  {
    paso: '04',
    titulo: 'Diseño de obras de estabilización (si el talud es inestable)',
    desc: 'Si el análisis de estabilidad indica que el factor de seguridad es inferior al mínimo requerido, BIC diseña las obras de estabilización necesarias. La elección de la obra depende del tipo de falla, la geometría del talud, el nivel freático y el presupuesto disponible. BIC evalúa varias alternativas de estabilización y presenta su análisis costo-beneficio: drenaje profundo (drenes subhorizontales), reconformación de la geometría del talud (reducción de pendiente), muros de concreto (gravedad, cantilever, anclado), sistemas de anclaje activos (tensores) o pasivos (bulones), y combinaciones de estas soluciones.',
    herramientas: ['SLOPE/W (verificación de la solución)', 'AutoCAD (planos de las obras de estabilización)', 'NSR-10 y Manual INVIAS (diseño estructural)', 'Análisis de costo-beneficio de alternativas'],
    resultado: 'Diseño de obras de estabilización con planos constructivos, memorias de cálculo y presupuesto',
  },
  {
    paso: '05',
    titulo: 'Informe técnico y plan de gestión del riesgo',
    desc: 'BIC entrega el informe técnico completo del estudio de estabilidad: diagnóstico geomorfológico, resultados de la exploración geotécnica, análisis de estabilidad con factor de seguridad para cada escenario, diseño de las obras de estabilización (si aplica), plan de instrumentación y monitoreo del talud (piezómetros, inclinómetros, pluviógrafos de umbral de alerta), y las recomendaciones de construcción. El informe va firmado por el especialista COPNIA y puede incluir el Plan de Emergencia y Evacuación si la CAR o el municipio lo requiere.',
    herramientas: ['Informe técnico completo (firma COPNIA)', 'Planos constructivos de las obras', 'Plan de instrumentación y monitoreo', 'Plan de Emergencia y Evacuación (si aplica)'],
    resultado: 'Expediente técnico completo de gestión del riesgo en taludes para toma de decisiones',
  },
]

const FAQ = [
  {
    q: '¿Qué es el factor de seguridad de un talud y qué valor mínimo exige la norma colombiana?',
    a: 'El factor de seguridad (FS) de un talud es la relación entre las fuerzas estabilizadoras (cohesión del suelo, fricción interna) y las fuerzas desestabilizadoras (peso propio, presión del agua, fuerzas sísmicas). Un FS mayor a 1.0 indica que el talud es estable; un FS de exactamente 1.0 indica que está en el límite de la falla; un FS menor a 1.0 indica que el talud ya debería estar fallando. La NSR-10 colombiana exige factores de seguridad mínimos de 1.5 para la condición estática (sin lluvia extrema ni sismo), 1.3 para la condición con nivel freático alto (lluvias extremas) y 1.1 para la condición pseudoestática (con el coeficiente sísmico de la zona). Estos valores mínimos aplican para nuevas construcciones; para taludes existentes que ya presentan signos de inestabilidad se puede adoptar un FS objetivo mayor.',
  },
  {
    q: '¿Cuándo hay que hacer un estudio de estabilidad de taludes?',
    a: 'El estudio de estabilidad de taludes es necesario en varios casos: cuando se va a construir sobre o junto a un talud natural o un corte de terreno; cuando el talud presenta signos de inestabilidad (grietas, hundimientos, desniveles anómalos, humedad excesiva, inclinación de árboles o construcciones); cuando la curaduría o la CAR lo exige como condición para la licencia o el permiso ambiental; cuando hay una vía o infraestructura junto a un talud que ha fallado o que está en zona de alta amenaza; y cuando el municipio o la UNGRD requieren una zonificación de amenaza por deslizamiento en el POT o el plan de gestión del riesgo.',
  },
  {
    q: '¿Qué señales visibles indica que un talud puede estar fallando?',
    a: 'Las señales de advertencia más importantes de inestabilidad en un talud son: grietas de tensión en la corona del talud (parte superior), paralelas al borde de la ladera; hundimientos o depresiones en la superficie del terreno; zonas de humedad anormal o surgencias de agua en el talud; inclinación progresiva de árboles, postes o muros que estaban verticales; movimiento de estructuras construidas sobre o junto al talud (fisuras en paredes, puertas o ventanas que no cierran correctamente, escalas desniveladas); y ondulaciones o abollonamientos en la superficie del terreno en la base del talud. Si observa alguna de estas señales, debe contactar un ingeniero especialista para una evaluación urgente.',
  },
  {
    q: '¿Cuánto cuesta el estudio de estabilidad de un talud en Colombia?',
    a: 'El costo depende de la altura y extensión del talud, la complejidad del suelo, el número de perforaciones de exploración necesarias y si el proyecto requiere diseño de obras de estabilización. Para un talud de tamaño mediano (5 a 15 metros de altura, en suelo residual típico de los Andes colombianos) con dos perforaciones de exploración, ensayos de laboratorio y análisis de estabilidad, el costo del estudio oscila entre $18.000.000 y $40.000.000 COP. Si se requiere diseño de obras de estabilización (muro, drenaje, gaviones), se añade entre $10.000.000 y $30.000.000 adicionales dependiendo de la complejidad. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué son los drenes subhorizontales y cuándo se usan para estabilizar taludes?',
    a: 'Los drenes subhorizontales son perforaciones inclinadas (generalmente 5 a 10 grados hacia arriba desde la horizontal) que se hacen en el talud para evacuar el agua subsuperficial y bajar el nivel freático. Son una de las herramientas más eficientes y económicas para mejorar la estabilidad de un talud porque el agua es el principal factor desestabilizador: la presión del agua reduce la fricción efectiva del suelo y puede triplicar el peso que el talud tiene que soportar en condiciones de saturación. BIC recomienda drenes subhorizontales cuando el análisis de estabilidad indica que el factor de seguridad es insuficiente principalmente por nivel freático alto y el talud tiene suficiente profundidad para perforarlos. Son mucho más baratos que un muro de concreto y a menudo igualmente efectivos.',
  },
  {
    q: '¿La Ley 1523 obliga a tener un Plan de Emergencia por deslizamientos?',
    a: 'Sí. La Ley 1523 de 2012 (Política Nacional de Gestión del Riesgo) establece que todas las entidades territoriales (municipios, departamentos) deben incorporar la gestión del riesgo en sus instrumentos de planificación (POT, POMCA, planes de desarrollo) y elaborar planes de emergencia y contingencia para los eventos que afectan su territorio. Para municipios en zonas de alta amenaza por movimientos en masa (una gran parte de los municipios andinos colombianos), el Plan Municipal de Gestión del Riesgo debe incluir los protocolos de alerta, evacuación y respuesta ante deslizamientos. El Decreto 2157 de 2017 además exige que las grandes empresas (más de 200 trabajadores) tengan planes de emergencia empresarial. BIC elabora ambos tipos de planes.',
  },
  {
    q: '¿BIC puede evaluar un talud de emergencia urgentemente?',
    a: 'Sí. BIC tiene la capacidad de movilizarse para inspecciones de emergencia cuando un talud ha fallado o presenta señales activas de movimiento que generan riesgo inminente para personas o infraestructura. La evaluación de emergencia incluye: inspección visual del talud y su área de influencia, evaluación preliminar del tipo y mecanismo de falla, recomendaciones de evacuación o confinamiento preventivo de la zona de riesgo, y plan de acción inmediato para reducir el riesgo mientras se elabora el estudio técnico completo. En situaciones de emergencia, BIC prioriza la visita y entrega el concepto técnico preliminar en el menor tiempo posible.',
  },
  {
    q: '¿BIC trabaja en toda Colombia para estudios de taludes?',
    a: 'Sí. BIC tiene experiencia en análisis de estabilidad de taludes en toda la zona andina colombiana: Eje Cafetero (Caldas, Risaralda, Quindío), Antioquia, Cundinamarca, Boyacá, Nariño, Cauca y Tolima — todos territorios con alta concentración de taludes inestables por la combinación de litología volcánica o metamórfica, alta pluviosidad y actividad sísmica. BIC conoce los tipos de suelo más comunes de cada región (saprolitos de andesita en el Eje Cafetero, arcillas expansivas en el altiplano cundiboyacense, cangahua en Nariño) y los mecanismos de falla típicos de cada zona geológica.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y alcaldías', desc: 'Zonificación de amenaza por movimientos en masa para el POT, Plan Municipal de Gestión del Riesgo y evaluación de taludes en zonas urbanas.' },
  { tipo: 'INVIAS y concesiones viales', desc: 'Análisis de estabilidad de taludes en corredores viales, diseño de obras de estabilización y acompañamiento durante la construcción en zonas de ladera.' },
  { tipo: 'Constructoras e inmobiliarias', desc: 'Estudio de estabilidad de taludes para proyectos de construcción en zonas de ladera, con diseño de las obras de contención necesarias.' },
  { tipo: 'Propietarios de predios en ladera', desc: 'Evaluación técnica de un talud que genera preocupación por su estabilidad, con recomendaciones de medidas preventivas o correctivas.' },
  { tipo: 'Aseguradoras y ajustadores', desc: 'Concepto técnico independiente sobre la causa y mecanismo de un deslizamiento para determinar responsabilidades y daños asegurables.' },
  { tipo: 'Empresas de servicios públicos', desc: 'Evaluación de taludes que amenazan infraestructura de acueducto, energía, gas o telecomunicaciones en zonas de ladera.' },
]

const NORMATIVA = [
  { codigo: 'NSR-10 (A.3)', descripcion: 'Norma Sismo Resistente — factores de seguridad mínimos y clasificación sísmica de sitios para diseño en taludes' },
  { codigo: 'Ley 1523/2012', descripcion: 'Política Nacional de Gestión del Riesgo — marco para la gestión de amenaza por movimientos en masa en Colombia' },
  { codigo: 'Decreto 1807/2014', descripcion: 'Incorporación del riesgo en los POT — metodología de zonificación de amenaza por movimientos en masa' },
  { codigo: 'Guías SGC', descripcion: 'Servicio Geológico Colombiano — guías técnicas para inventario y zonificación de movimientos en masa' },
  { codigo: 'Manual INVIAS', descripcion: 'Manual de Diseño Geométrico y Drenaje — criterios de diseño de taludes en proyectos viales' },
  { codigo: 'Decreto 2157/2017', descripcion: 'Obligatoriedad de planes de emergencia y contingencia para empresas con más de 200 trabajadores' },
]

export default function GestionRiesgoTaludes() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Geotecnia · Riesgo · Taludes · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Gestión de Riesgo en Taludes Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Análisis de estabilidad, zonificación de amenaza por deslizamientos y diseño de obras de estabilización
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores elabora estudios de gestión del riesgo en taludes para Colombia:
            análisis de estabilidad con SLOPE/W, zonificación de amenaza por movimientos en masa,
            diseño de muros, drenes subhorizontales, gaviones y ancla jes, y Planes de Emergencia y Evacuación
            conforme a la Ley 1523. Especialistas en zonas andinas de alta pluviosidad y sismicidad.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar mi caso de talud</Btn>
            <Btn variant="outline" href="/obras-civiles-hidraulicas-colombia" dark>Obras civiles y geotecnia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['SLOPE/W','Análisis de estabilidad','Deslizamientos','NSR-10','Ley 1523','COPNIA'].map(t => (
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
              { num: '+70', label: 'taludes analizados en zonas andinas colombianas' },
              { num: 'SLOPE/W', label: 'software de análisis de estabilidad' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: 'Nacional', label: 'zonas andinas en todo Colombia' },
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
          <SectionLabel>Servicios en gestión del riesgo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué servicio de taludes necesita?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            En los Andes colombianos, los taludes son uno de los riesgos técnicos más frecuentes. BIC tiene
            la experiencia y las herramientas para evaluar, cuantificar y manejar ese riesgo correctamente.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px', marginBottom: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO APLICAR</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <p style={{ fontSize: 12, color: '#888', margin: 0 }}>Norma: {t.norma}</p>
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
            Cómo elabora BIC el estudio de riesgo en taludes
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del reconocimiento de campo al informe firmado con el factor de seguridad calculado y
            las recomendaciones de obra. Metodología NSR-10 y guías del Servicio Geológico Colombiano.
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un talud que le genera preocupación?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC evalúa su situación en 24 horas · Primera consulta sin costo</p>
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
            Clientes de BIC en gestión del riesgo en taludes
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 28 }}>
            Normativa para gestión del riesgo en taludes en Colombia
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
            Otros estudios de riesgo e ingeniería BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Estudios hidrológicos para vías', href: '/estudios-hidrologicos-vias-colombia' },
              { label: 'Construir cerca a un río', href: '/construir-cerca-rio-quebrada-colombia' },
              { label: 'Obras civiles hidráulicas', href: '/obras-civiles-hidraulicas-colombia' },
              { label: 'Estudios torrencialidad', href: '/estudios-torrencialidad-colombia' },
              { label: 'Geotecnia especializada', href: '/servicios/geotecnia' },
              { label: 'Gestión del riesgo hídrico', href: '/servicios/ambiental' },
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
            Todo sobre gestión del riesgo en taludes en Colombia
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>⛰️</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita el estudio de estabilidad<br />de un talud en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos la situación: el municipio, la altura y condición del talud y si ya hay señales de movimiento.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Especialistas COPNIA · Análisis con SLOPE/W · Todo Colombia
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
