import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una bocatoma. ¿Pueden ayudarme con más información?')

const seoConfig = {
  title: 'Diseño de Bocatomas en Colombia — Ingeniería Hidráulica Especializada | BIC',
  description: 'BIC diseña bocatomas laterales, frontales, de fondo y sumergidas en Colombia. Análisis hidrológico, modelación HEC-RAS, memoria de cálculo COPNIA y permisos CAR para acueductos, riego e industria. Cotización en 24 horas.',
  keywords: [
    'diseño de bocatoma Colombia',
    'bocatoma lateral Colombia',
    'bocatoma frontal Colombia',
    'bocatoma de fondo Colombia',
    'bocatoma acueducto Colombia',
    'diseño bocatoma acueducto rural',
    'empresa bocatomas Colombia',
    'firma ingeniería bocatoma',
    'consultor bocatoma HEC-RAS',
    'bocatoma canal riego Colombia',
    'diseño bocatoma Caldas',
    'bocatoma Eje Cafetero ingeniería',
    'captación agua río Colombia diseño',
    'concesión aguas bocatoma CAR',
    'bocatoma tipo Tirol Colombia',
    'estudio hidrológico bocatoma Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/bocatomas-colombia',
}

const TIPOS = [
  {
    icon: '↙️',
    tipo: 'Bocatoma Lateral',
    subtitulo: 'La más común en ríos de Colombia',
    desc: 'Capta agua mediante una ventana lateral en la margen del río, con un muro o barraje que eleva el nivel de agua para garantizar la captación. Es la solución más frecuente en acueductos municipales y distritos de riego en ríos de pendiente moderada. BIC diseña la compuerta de captación, la cámara de recolección, la rejilla de limpieza y el disipador de entrada al canal de aducción.',
    cuando: 'Ideal para ríos con caudal estable, baja carga de sedimentos gruesos y terreno que permite construir el canal de aducción en la margen.',
    rios: ['Ríos cafeteros (Caldas, Risaralda, Quindío)', 'Ríos andinos de pendiente media', 'Quebradas con caudal perenne'],
  },
  {
    icon: '⬇️',
    tipo: 'Bocatoma de Fondo (Tirol)',
    subtitulo: 'Para ríos torrenciales y alta carga de sedimentos',
    desc: 'Capta agua a través de una rejilla horizontal instalada en el fondo del cauce, que permite el paso del agua limpia mientras los sedimentos gruesos se deslizan sobre la rejilla y siguen su curso. Es la solución técnica correcta para ríos de montaña con alta carga de gravas y bloques, frecuentes en el Eje Cafetero y zonas andinas. El diseño incluye rejilla de Tyrolean, canal de captación y cámara de desarenado.',
    cuando: 'Obligatoria en ríos torrenciales, con pendiente >3%, alta carga de sedimentos gruesos y régimen irregular. Reduce el mantenimiento y evita colmatación.',
    rios: ['Ríos de ladera con gran pendiente', 'Zonas de alta torrencialidad', 'Cuencas con torrentes estacionales'],
  },
  {
    icon: '🌊',
    tipo: 'Bocatoma Sumergida',
    subtitulo: 'Para ríos grandes y variaciones extremas de nivel',
    desc: 'La estructura de captación queda por debajo del nivel mínimo del río. Es la solución para ríos grandes donde el nivel de agua varía muchos metros entre temporada seca y lluviosa (como el Magdalena, Cauca o sus tributarios principales). BIC diseña la tubería o canal de captación, el sistema de izaje de compuertas y la cámara de recolección con sistema de control de caudal.',
    cuando: 'Necesaria en ríos con variación de nivel >5 metros, donde una captación lateral convencional quedaría seca en verano o inundada en invierno.',
    rios: ['Ríos principales (Magdalena, Cauca)', 'Embalses con variación de nivel', 'Ríos de llanura con régimen irregular'],
  },
  {
    icon: '🔒',
    tipo: 'Bocatoma de Embalse',
    subtitulo: 'Captación desde reservorios artificiales',
    desc: 'Diseño de la obra de toma para embalses de regulación, microcentales eléctricas y sistemas de almacenamiento de agua para riego. Incluye la torre de toma con compuertas a diferentes alturas (para captar agua con mejor calidad según profundidad), túnel o tubería de aducción, y válvulas de control y emergencia conforme a la NSR-10 y normas Icontec.',
    cuando: 'Cuando existe un embalse, presa o reservorio y se necesita diseñar el sistema para extraer agua de forma controlada.',
    rios: ['Embalses de riego', 'Microcentratas eléctricas', 'Reservorios para agua potable'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Hidrología: Los caudales que definen todo',
    desc: 'El primer paso es calcular cuánta agua hay en el río y cuánta se necesita. BIC realiza el análisis de la cuenca hidrográfica usando datos pluviométricos del IDEAM (estaciones hidrométricas cercanas), caracteriza la morfometría de la cuenca (área, pendiente, tiempo de concentración) y calcula los caudales de diseño para múltiples períodos de retorno: el caudal mínimo para dimensionar la captación y los caudales de 25, 50 y 100 años para diseñar el barraje y las obras de protección.',
    herramientas: ['HEC-HMS (modelación hidrológica)', 'Curvas IDF (IDEAM)', 'Método racional modificado', 'Análisis de frecuencia Log-Pearson III'],
    resultado: 'Caudal de captación de diseño + caudal de avenida para diseño del barraje',
  },
  {
    paso: '02',
    titulo: 'Modelación Hidráulica HEC-RAS 2D',
    desc: 'Con los caudales definidos, BIC modela el comportamiento del río en el tramo de la bocatoma antes y después de construir las obras. La modelación bidimensional con HEC-RAS 2D permite ver la distribución de velocidades, niveles de agua y esfuerzos cortantes sobre el lecho para validar que la estructura funciona hidráulicamente para todos los escenarios. Los resultados se mapean en QGIS para entregar mapas de inundación y perfiles hidráulicos.',
    herramientas: ['HEC-RAS 2D (modelación bidimensional)', 'QGIS / ArcGIS (mapeo)', 'Levantamiento topográfico batimétrico'],
    resultado: 'Perfiles hidráulicos, mapas de inundación, velocidades y niveles validados',
  },
  {
    paso: '03',
    titulo: 'Diseño Hidráulico y Estructural de la Bocatoma',
    desc: 'Con la hidráulica validada, BIC dimensiona cada componente de la bocatoma: el barraje o umbral de captación (cota de la cresta, longitud, tipo de perfil), la ventana o rejilla de captación (área necesaria, coeficiente de paso, velocidad de entrada), la cámara de recolección y el canal de aducción hasta el desarenador. Para bocatomas tipo Tirol se diseña la rejilla autolimpiante. Para barrajes se calculan fuerzas hidrostáticas, subpresión y estabilidad al deslizamiento y volteo.',
    herramientas: ['AutoCAD Civil 3D (diseño y planos)', 'Cálculo estructural (RAS 2017)', 'Norma NSR-10 para concreto', 'Manual MAVDT criterios'],
    resultado: 'Geometría final de la bocatoma, cálculo de estabilidad, especificación de materiales',
  },
  {
    paso: '04',
    titulo: 'Memoria de Cálculo y Planos Constructivos',
    desc: 'BIC entrega la memoria de cálculo completa — el documento técnico con toda la metodología, los datos de entrada, los resultados numéricos y las verificaciones de diseño — firmada por el ingeniero especialista con tarjeta profesional COPNIA vigente. Los planos constructivos en AutoCAD incluyen planta, cortes, detalles estructurales, armado del barraje y especificaciones de materiales. El juego de planos es completo para licitar y construir.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'Planos AutoCAD (planta, cortes, detalles)', 'Especificaciones técnicas generales y particulares', 'APU y presupuesto de obra'],
    resultado: 'Expediente técnico completo listo para licitar, obtener permisos o construir',
  },
  {
    paso: '05',
    titulo: 'Permiso de Concesión de Aguas y Ocupación de Cauce',
    desc: 'Para construir cualquier bocatoma en Colombia se requieren dos permisos ambientales ante la Corporación Autónoma Regional (CAR): la concesión de aguas (autorización para captar el caudal) y el permiso de ocupación de cauce (autorización para construir obras en el cauce). BIC elabora los estudios técnicos exigidos por la CAR para ambos trámites, incluyendo el estudio de oferta y demanda hídrica, el análisis de caudal ecológico y la memoria descriptiva del proyecto.',
    herramientas: ['Estudio de oferta y demanda hídrica', 'Análisis de caudal ecológico (Decreto 1076/2015)', 'Memoria descriptiva para la CAR', 'Formularios de trámite ante la autoridad ambiental'],
    resultado: 'Expediente de permiso ambiental listo para radicar ante la CAR correspondiente',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una bocatoma en Colombia?',
    a: 'El costo del diseño depende del tipo de bocatoma, el tamaño del río, la disponibilidad de información topográfica e hidrológica existente y si el proyecto requiere trámite de permisos ambientales. Para una bocatoma lateral de acueducto municipal de tamaño medio (con barraje, cámara de captación y canal de aducción hasta 200 metros), el diseño completo — incluyendo hidrología, modelación HEC-RAS, planos constructivos y memoria de cálculo firmada — oscila entre $22.000.000 y $50.000.000 COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo. El alcance y el precio se ajustan exactamente a las condiciones del proyecto.',
  },
  {
    q: '¿Qué diferencia hay entre una bocatoma lateral y una bocatoma tipo Tirol?',
    a: 'La diferencia fundamental es cómo captan el agua y para qué tipo de río están diseñadas. La bocatoma lateral tiene una ventana en la margen del río que se abre para captar: es eficiente en ríos con caudal estable y poca carga de sedimentos gruesos. La bocatoma tipo Tirol (o de fondo) tiene una rejilla horizontal en el lecho del río por donde pasa el agua limpia mientras las gravas y bloques siguen su curso río abajo. El Tirol es la solución correcta para ríos torrenciales de montaña — muy comunes en Caldas, Risaralda, Quindío y el Eje Cafetero — donde una bocatoma lateral se colmataría de sedimentos constantemente. BIC selecciona el tipo de bocatoma en función del análisis hidrológico y granulométrico del río específico.',
  },
  {
    q: '¿Se puede diseñar una bocatoma sin concesión de aguas?',
    a: 'No legalmente. En Colombia, captar agua de cualquier fuente superficial (río, quebrada, caño) requiere una concesión de aguas otorgada por la Corporación Autónoma Regional competente, según el Decreto 1076 de 2015 (Decreto Único Reglamentario del Sector Ambiente). Construir una bocatoma sin este permiso puede resultar en sanciones, demolición de las obras y suspensión del suministro. Además, para construir obras en el cauce (barraje, muros) se requiere también un permiso de ocupación de cauce. BIC elabora todos los estudios técnicos necesarios para ambos trámites y puede asesorar en el proceso ante la CAR.',
  },
  {
    q: '¿Cuánto tiempo toma el diseño de una bocatoma?',
    a: 'El plazo típico para el diseño completo — desde el inicio hasta la entrega del expediente con planos, memoria de cálculo y propuesta de permiso ambiental — es de 6 a 12 semanas. Depende principalmente de si existe información topográfica y batimétrica del río (si no existe, hay que levantarla, lo que agrega 2-3 semanas) y de si hay información hidrométrica suficiente del IDEAM para el análisis hidrológico. BIC puede priorizar proyectos urgentes con entregas parciales (hidrología y diseño preliminar primero) para no bloquear el proceso de aprobación o licitación.',
  },
  {
    q: '¿BIC diseña bocatomas para acueductos financiados con regalías (SGR)?',
    a: 'Sí, y es una de las especialidades de BIC. Los proyectos de agua potable y saneamiento financiados con recursos del Sistema General de Regalías (SGR) requieren diseños detallados elaborados por ingenieros especializados, con memorias de cálculo firmadas y planos constructivos como parte del expediente técnico que se presenta ante el OCAD. BIC elabora el diseño completo de la bocatoma y el sistema de aducción, con toda la documentación exigida por el DNP, el Ministerio de Vivienda (RAS 2017) y la Resolución 0330 de 2017.',
  },
  {
    q: '¿Qué pasa si la bocatoma existente se colmata o se daña? ¿BIC puede hacer el diagnóstico?',
    a: 'Sí. BIC realiza diagnósticos técnicos de bocatomas existentes cuando presentan problemas de colmatación, socavación, daño estructural o insuficiencia de caudal. El diagnóstico incluye inspección de campo, análisis del comportamiento hidráulico actual, identificación de la causa del problema (mal dimensionamiento original, cambio en el régimen del río, mantenimiento insuficiente) y recomendaciones técnicas con presupuesto de rehabilitación o rediseño. Es habitual que bocatomas diseñadas hace 20-30 años ya no sean suficientes porque el caudal de la fuente ha cambiado o la demanda de agua ha crecido.',
  },
  {
    q: '¿BIC trabaja en toda Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo el territorio nacional. La firma tiene su base de operaciones en el Eje Cafetero (Manizales, Pereira, Armenia) y tiene experiencia en proyectos en Antioquia, Cundinamarca, Boyacá, Nariño, Cauca, Valle del Cauca y la región Caribe. La mayor parte del trabajo de diseño (hidrología, modelación, memorias de cálculo) se realiza con información remota y herramientas de análisis espacial, con visitas de campo focalizadas para el levantamiento topográfico y la toma de muestras. Para proyectos fuera del Eje Cafetero se coordina con topógrafos locales certificados.',
  },
  {
    q: '¿Qué es el caudal ecológico y por qué afecta el diseño de una bocatoma?',
    a: 'El caudal ecológico (o caudal mínimo ambiental) es el porcentaje del caudal natural del río que debe mantenerse en el cauce en todo momento para preservar el ecosistema fluvial: fauna íctica, vegetación ribereña, calidad del agua aguas abajo. En Colombia, la norma (Decreto 1076/2015) establece que la concesión de aguas no puede otorgarse por más del 50% del caudal medio mínimo mensual del río. Esto significa que si el río tiene 100 L/s en su mes más seco, la bocatoma solo puede captar hasta 50 L/s. BIC calcula el caudal ecológico como parte del análisis hidrológico y lo incorpora en el estudio de oferta-demanda requerido por la CAR.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y Alcaldías', desc: 'Ampliación o rehabilitación del acueducto municipal. Proyectos SGR y presupuesto municipal.' },
  { tipo: 'Empresas de Servicios Públicos (ESP)', desc: 'Bocatomas para acueductos regionales, sistemas de distribución y agua industrial.' },
  { tipo: 'Distritos y Asociaciones de Riego', desc: 'Captaciones para canales de riego agrícola, sistemas de riego tecnificado y reservorios.' },
  { tipo: 'Empresas Mineras y Agroindustriales', desc: 'Captaciones para procesos industriales, sistemas de enfriamiento y uso en producción.' },
  { tipo: 'Constructoras e Interventoras', desc: 'Diseños para proyectos de infraestructura donde la bocatoma es componente de una obra mayor.' },
  { tipo: 'Propietarios Rurales y Fincas', desc: 'Captaciones para acueductos veredales, riego de cultivos y uso doméstico con permiso CAR.' },
]

const NORMATIVA = [
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico de Agua y Saneamiento — norma base para diseño de captaciones y conducción' },
  { codigo: 'Resolución 0330/2017', descripcion: 'MinVivienda — requisitos técnicos para sistemas de acueducto, incluyendo bocatomas' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — régimen de concesiones de aguas y permisos de ocupación de cauce' },
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — diseño estructural del barraje y obras de concreto' },
  { codigo: 'ICONTEC NTC 813', descripcion: 'Norma técnica colombiana para calidad de agua potable en el punto de captación' },
  { codigo: 'Manual IDEAM', descripcion: 'Protocolos para análisis hidrológico y uso de información de estaciones hidrométricas' },
]

export default function BocatomasColombia() {
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
          <SectionLabel light>Obras hidráulicas · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Bocatomas en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Bocatomas laterales, tipo Tirol, de fondo y sumergidas — con análisis hidrológico, modelación HEC-RAS y trámite ante la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña bocatomas para acueductos municipales,
            distritos de riego e industria en todo Colombia. Cada proyecto incluye estudio hidrológico
            completo, modelación HEC-RAS 2D, memoria de cálculo firmada por especialista COPNIA
            y los estudios técnicos para tramitar la concesión de aguas y el permiso de ocupación de cauce ante la CAR.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de bocatoma</Btn>
            <Btn variant="outline" href="/obras-hidraulicas-colombia" dark>Ver todas las obras hidráulicas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 2D','HEC-HMS','AutoCAD Civil 3D','COPNIA vigente','Concesión de aguas','Permiso CAR'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPUESTA DE VALOR RÁPIDA ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+50', label: 'bocatomas diseñadas en Colombia' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: '100%', label: 'de diseños aprobados por la CAR' },
              { num: 'HEC-RAS 2D', label: 'modelación hidráulica bidimensional' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE BOCATOMA ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de bocatoma</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de bocatoma necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El tipo de bocatoma correcto depende del régimen del río, la carga de sedimentos, la variación estacional
            del nivel y el caudal necesario. Seleccionar mal el tipo de bocatoma es la causa más frecuente de fallas
            en captaciones en Colombia. BIC hace el análisis hidrológico y granulométrico del río antes de recomendar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO USARLA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>APLICA EN</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.6 }}>
                    {t.rios.map(r => <li key={r}>{r}</li>)}
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
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC una bocatoma en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el análisis hidrológico de la cuenca hasta el expediente técnico para la CAR.
            Cada bocatoma que BIC diseña cumple con el RAS 2017, la Resolución 0330 de 2017
            y los requisitos técnicos de la Corporación Autónoma Regional correspondiente.
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto de bocatoma?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
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
            Clientes que contratan diseño de bocatomas
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con entidades públicas, empresas privadas y propietarios rurales en todo Colombia.
            El diseño de bocatoma puede ser el componente principal del proyecto o parte de un sistema
            de acueducto o riego más amplio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #17A2B8',
              }}>
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
          <SectionLabel>Marco legal y técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige el diseño de bocatomas en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña bajo las normas colombianas vigentes. Conocer el marco normativo evita rechazos
            por parte de las CAR, curadores y entidades financiadoras (DNP, SGR, MinVivienda).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENLACE A OBRAS RELACIONADAS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otras obras hidráulicas que diseña BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Canales de riego y conducción', href: '/obras-hidraulicas-colombia' },
              { label: 'Encauzamiento de ríos y quebradas', href: '/obras-hidraulicas-colombia' },
              { label: 'Diques y protección contra inundaciones', href: '/obras-hidraulicas-colombia' },
              { label: 'Gaviones y obras de estabilización', href: '/obras-hidraulicas-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
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
            Todo lo que necesita saber sobre bocatomas en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen municipios, empresas de acueducto
            y constructoras antes de contratar el diseño.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
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
            ¿Necesita el diseño de una bocatoma<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de río, la región, el caudal que necesita captar
            y el uso del agua (acueducto, riego, industrial).
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
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
