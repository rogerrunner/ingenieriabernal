import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito estudios hidrológicos para un proyecto vial — drenaje transversal, alcantarillas o diseño hidráulico de vía. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Estudios Hidrológicos para Vías en Colombia — Drenaje Vial, INVIAS y Proyectos 4G | BIC',
  description: 'BIC elabora estudios hidrológicos e hidráulicos para vías en Colombia: diseño de drenaje transversal y longitudinal, alcantarillas, box culvert y obras de protección. Metodología INVIAS, HEC-HMS, HEC-RAS. Memorias de cálculo firmadas COPNIA para proyectos nacionales, departamentales y municipales.',
  keywords: [
    'estudios hidrológicos vías Colombia',
    'drenaje vial Colombia diseño',
    'hidrología vial INVIAS',
    'diseño alcantarillas vías Colombia',
    'estudios hidráulicos proyectos viales',
    'drenaje transversal carretera Colombia',
    'diseño box culvert vía Colombia',
    'hidrología proyectos 4G Colombia',
    'estudios hidrológicos carretera Colombia',
    'manual drenaje INVIAS estudio',
    'firma ingeniería vial Colombia',
    'diseño obras drenaje vías Colombia',
    'empresa estudios hidrológicos viales',
    'hidrología vial Manizales Eje Cafetero',
    'drenaje longitudinal carreteras Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/estudios-hidrologicos-vias-colombia',
}

const TIPOS = [
  {
    icon: '🌊',
    tipo: 'Drenaje Transversal de Vías',
    subtitulo: 'Alcantarillas y box culvert: dimensionar correctamente para que no falle la vía',
    desc: 'El drenaje transversal de una vía es el sistema de alcantarillas, box culvert y pasos de quebrada que permiten que el agua de lluvia y los cauces naturales crucen bajo la carretera sin afectarla. Un subdimensionamiento genera rebosamiento y socavación de la vía; un sobredimensionamiento eleva costos innecesariamente. BIC calcula los caudales de diseño para el período de retorno correcto según el tipo de vía (T=25 años para secundarias, T=50 para primarias), modela hidráulicamente la estructura y dimensiona el tipo y tamaño de la alcantarilla o box culvert.',
    aplicaciones: ['Vías secundarias y terciarias municipales', 'Carreteras departamentales con quebradas frecuentes', 'Proyectos de mejoramiento y rehabilitación vial'],
  },
  {
    icon: '💧',
    tipo: 'Drenaje Longitudinal',
    subtitulo: 'Cunetas, zanjas y canales para llevar el agua a lo largo de la vía',
    desc: 'El drenaje longitudinal conduce el agua de lluvia a lo largo del eje vial hasta los puntos de descarga. BIC diseña cunetas, canales laterales, zanjas interceptoras y bermas de protección, calculando su sección hidráulica para el caudal de escorrentía que genera la superficie de la vía y el área de influencia. El diseño incluye el tipo de cuneta (triangular, trapezoidal, revestida), la velocidad del flujo (verificación de erosión), los puntos de entrega al drenaje transversal y las obras de disipación de energía en los puntos de caída.',
    aplicaciones: ['Carreteras con taludes que aportan agua a la vía', 'Vías en ladera con pendiente pronunciada', 'Proyectos de mejoramiento de drenaje en vías existentes'],
  },
  {
    icon: '⚡',
    tipo: 'Drenaje en Zonas de Alta Pendiente y Torrencialidad',
    subtitulo: 'El reto hidráulico en el territorio colombiano',
    desc: 'Colombia tiene una de las redes viales más complejas hidrológicamente del mundo: vías que cruzan zonas de alta pluviosidad, cuencas torrenciales, macizos montañosos con cientos de quebradas. BIC tiene experiencia específica en el diseño de drenaje vial en zonas de alta torrencialidad — Eje Cafetero, Andes colombianos, zona Pacífico — donde los caudales de avenida son extremos, los tiempos de concentración son muy cortos y las estructuras de drenaje deben ser sobredimensionadas respecto a criterios de zonas planas.',
    aplicaciones: ['Vías en el Eje Cafetero y zonas andinas', 'Corredores del Pacífico (alta pluviosidad)', 'Carreteras en zona de influencia de volcanes y lahares'],
  },
  {
    icon: '🗺️',
    tipo: 'Estudios de Amenaza Hídrica para Trazados Viales',
    subtitulo: 'Zonificación de riesgo a lo largo del corredor',
    desc: 'Para proyectos viales nuevos o de ampliación, BIC elabora la zonificación de amenaza hídrica a lo largo del corredor: identifica los puntos de cruce con cauces, las zonas de inundación lateral, los tramos con riesgo de socavación y los puntos de alta torrencialidad. Este análisis informa las decisiones de trazado (evitar zonas de riesgo extremo), el diseño de las obras de protección (diques, muros de concreto, gaviones) y el análisis de vulnerabilidad de la infraestructura existente.',
    aplicaciones: ['Estudios previos para concesiones 4G y 5G', 'Evaluación de vulnerabilidad vial ante eventos extremos', 'Planes de manejo de riesgo en corredores viales'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Delimitación de cuencas de drenaje a lo largo del corredor',
    desc: 'El primer paso del estudio hidrológico vial es identificar y delimitar todas las cuencas que drenan hacia la vía a lo largo del corredor. BIC utiliza modelos digitales de elevación (DEM del IGAC, SRTM) en QGIS para delimitar automáticamente cada cuenca aportante a cada punto de drenaje transversal, calcula el área y la morfometría de cada cuenca (pendiente, tiempo de concentración) y prepara la base de datos hidrológica para el cálculo de caudales.',
    herramientas: ['DEM del IGAC (30m y 12.5m resolución)', 'QGIS — delimitación automática de cuencas', 'ArcGIS / GRASS GIS', 'Datos pluviométricos del IDEAM'],
    resultado: 'Mapa de cuencas de drenaje y base de datos morfométrica para cálculo de caudales',
  },
  {
    paso: '02',
    titulo: 'Análisis hidrológico: caudales de diseño por cuenca',
    desc: 'Con las cuencas delimitadas, BIC calcula los caudales de diseño para cada alcantarilla o box culvert usando la metodología del Manual de Drenaje del INVIAS. Para cuencas pequeñas (< 25 km²) se usa el método racional modificado con curvas IDF del IDEAM. Para cuencas medianas y grandes se usa HEC-HMS con calibración. Se calculan los caudales para los períodos de retorno exigidos por el tipo de vía: T=25 para secundarias, T=50 para primarias y T=100 para obras especiales.',
    herramientas: ['Método racional modificado (Manual INVIAS)', 'HEC-HMS (cuencas medianas y grandes)', 'Curvas IDF del IDEAM por región', 'Análisis de frecuencia estadística'],
    resultado: 'Caudales de diseño para cada estructura de drenaje transversal del corredor',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico de alcantarillas y box culvert',
    desc: 'Con los caudales de diseño, BIC dimensiona cada estructura de drenaje transversal: selecciona el tipo de alcantarilla (circular, arco, cajón) o box culvert (sencillo o múltiple), calcula el diámetro o dimensiones del cajón, verifica el comportamiento hidráulico en control de entrada y control de salida (metodología del HDS-5 del FHWA), y determina la cota de la rasante de la vía en el punto de cruce. El diseño incluye las obras de cabezal, protección contra la socavación en la salida (disipadores de energía, rip-rap) y la transición aguas abajo.',
    herramientas: ['Manual de Drenaje INVIAS (capítulos de alcantarillas)', 'HDS-5 FHWA (diseño hidráulico de alcantarillas)', 'AutoCAD (planos de diseño)', 'HEC-RAS (verificación hidráulica en cauces con aguas arriba)'],
    resultado: 'Diseño hidráulico de cada estructura con tipo, dimensiones, cotas y obras accesorias',
  },
  {
    paso: '04',
    titulo: 'Diseño de cunetas y drenaje longitudinal',
    desc: 'BIC calcula la escorrentía que llega a la vía desde los taludes y el área de la plataforma vial para diseñar las cunetas longitudinales. Se calcula el caudal por tramo, se dimensiona la sección de la cuneta (verificando que la velocidad del flujo no erosione el material), se ubican los puntos de descarga al drenaje transversal y se diseñan las obras de protección en los puntos de caída (rápidas, pozos disipadores, contra-apiques). Para cunetas revestidas, se especifica el tipo de revestimiento (concreto, emparadado, prefabricado).',
    herramientas: ['Fórmula de Manning (diseño de sección)', 'Manual de Drenaje INVIAS', 'AutoCAD Civil 3D (perfiles longitudinales)', 'Criterios de velocidades máximas sin erosión'],
    resultado: 'Diseño de cunetas longitudinales con sección, tipo de revestimiento y puntos de descarga',
  },
  {
    paso: '05',
    titulo: 'Memoria de cálculo, planos y entregables para INVIAS o concedente',
    desc: 'BIC entrega el conjunto completo de documentos técnicos del estudio hidrológico e hidráulico vial: la memoria de cálculo hidrológico (delimitación de cuencas, cálculo de caudales, selección de períodos de retorno), el diseño hidráulico de cada estructura de drenaje, los planos constructivos en AutoCAD, las especificaciones técnicas y el presupuesto estimado de las obras de drenaje. Todo el documento va firmado por el ingeniero especialista con tarjeta COPNIA vigente y en el formato exigido por INVIAS, la Gobernación o el municipio.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'Planos en AutoCAD (plantas, perfiles, detalles)', 'Formato de entrega INVIAS / SGR / Gobernación', 'Especificaciones técnicas y presupuesto de drenaje'],
    resultado: 'Estudio hidrológico completo listo para aprobación INVIAS, SGR o entidad territorial',
  },
]

const FAQ = [
  {
    q: '¿Qué exige el Manual de Drenaje del INVIAS para los estudios hidrológicos viales?',
    a: 'El Manual de Drenaje para Carreteras del INVIAS es el documento técnico de referencia para el diseño de obras de drenaje en vías nacionales y departamentales en Colombia. Exige que todos los estudios hidrológicos viales incluyan: delimitación de cuencas de drenaje con cartografía oficial del IGAC, cálculo de caudales de diseño con el método racional modificado para cuencas pequeñas (< 25 km²) y HEC-HMS para cuencas mayores, uso de datos pluviométricos del IDEAM (estaciones cercanas al proyecto), verificación hidráulica de cada alcantarilla en control de entrada y control de salida conforme al HDS-5, y diseño de las obras de protección aguas abajo. BIC conoce estos requisitos en detalle y elabora los estudios en el formato técnico que aprueba el INVIAS.',
  },
  {
    q: '¿Para qué período de retorno se diseñan las obras de drenaje vial?',
    a: 'El período de retorno de diseño depende del tipo y jerarquía de la vía. Según el Manual de Drenaje del INVIAS: vías terciarias y caminos rurales, T = 10 a 25 años; vías secundarias y departamentales, T = 25 años; vías primarias nacionales, T = 50 años; obras especiales (viaductos, pasos bajo líneas de alta tensión, estructuras en zonas críticas), T = 100 años. Para drenaje longitudinal (cunetas) se usa T = 10 años en general. BIC selecciona el período de retorno correcto según el tipo de vía del proyecto y lo justifica en la memoria de cálculo.',
  },
  {
    q: '¿BIC puede elaborar el estudio hidrológico de un corredor vial de varios kilómetros?',
    a: 'Sí. BIC tiene experiencia en estudios hidrológicos de corredores viales de 5 a más de 80 kilómetros. La metodología es la misma independientemente de la longitud del corredor: se delimitan todas las cuencas de drenaje, se calculan los caudales para cada estructura, se diseñan las obras de drenaje transversal y longitudinal y se consolida en un único informe técnico con el inventario de estructuras y sus diseños. Para proyectos viales de mayor escala (4G, corredores departamentales), BIC puede integrar el equipo necesario para cumplir los plazos.',
  },
  {
    q: '¿Qué diferencia hay entre un estudio hidrológico vial y un estudio de inundabilidad?',
    a: 'Son estudios con propósitos diferentes aunque usan metodologías similares. El estudio hidrológico vial se enfoca en calcular los caudales de diseño de las alcantarillas y el drenaje de la vía — cuánta agua pasa por cada punto y qué tamaño de estructura se necesita para manejarla. El estudio de inundabilidad analiza el área que queda bajo el nivel de inundación para un evento de cierta magnitud — qué zonas se inundan, a qué profundidad y con qué velocidad. Para proyectos viales en zonas con ríos importantes, puede ser necesario hacer ambos estudios: el hidrológico vial para el drenaje y el de inundabilidad para evaluar si la rasante de la vía queda sobre o bajo el nivel de inundación del río vecino.',
  },
  {
    q: '¿Cuánto cuesta el estudio hidrológico de un proyecto vial?',
    a: 'El costo depende principalmente de la longitud del corredor, el número de estructuras de drenaje transversal y la disponibilidad de información hidrológica (estaciones del IDEAM cercanas). Para un corredor vial de 10 a 20 kilómetros en zona andina con 15 a 30 alcantarillas o pasos de quebrada, el costo del estudio hidrológico completo (incluyendo delimitación de cuencas, cálculos, diseño de estructuras y memorias de cálculo firmadas) oscila entre $18.000.000 y $45.000.000 COP. BIC envía propuesta técnica detallada en menos de 24 horas con base en la descripción del corredor.',
  },
  {
    q: '¿BIC puede hacer el diseño de un box culvert o alcantarilla específica?',
    a: 'Sí. BIC puede elaborar el diseño puntual de una o varias estructuras de drenaje transversal sin necesidad de un estudio de todo el corredor. Esto es frecuente en proyectos de mejoramiento vial donde solo se va a intervenir un número limitado de estructuras existentes que están fallando o son insuficientes. BIC realiza el levantamiento hidrológico del punto específico, calcula el caudal de diseño, dimensiona la estructura y entrega los planos constructivos y la memoria de cálculo firmada.',
  },
  {
    q: '¿Los estudios de BIC son aceptados por INVIAS y las gobernaciones?',
    a: 'Sí. Los estudios hidrológicos e hidráulicos de BIC se elaboran siguiendo estrictamente el Manual de Drenaje del INVIAS y la metodología técnica vigente en Colombia. Las memorias de cálculo van firmadas por el ingeniero especialista con tarjeta COPNIA vigente. BIC ha elaborado estudios que han sido aprobados por INVIAS, gobernaciones departamentales y municipios en todo el país. Si la entidad tiene un formato específico de entrega, BIC adapta el informe a ese formato.',
  },
  {
    q: '¿BIC trabaja fuera del Eje Cafetero para proyectos viales?',
    a: 'Sí. BIC trabaja en todo Colombia para proyectos viales. La delimitación de cuencas, el análisis hidrológico y el diseño hidráulico de estructuras se pueden hacer con información remota (DEM, datos del IDEAM, cartografía del IGAC). Las visitas de campo se coordinan con el cliente cuando se necesitan reconocimientos específicos. BIC ha elaborado estudios hidrológicos viales en Antioquia, Cundinamarca, Nariño, Cauca, Valle del Cauca, Meta, Boyacá y el Eje Cafetero.',
  },
]

const CLIENTES = [
  { tipo: 'INVIAS y Concesiones 4G/5G', desc: 'Estudios hidrológicos para diseño y revisión de obras de drenaje en proyectos de carreteras nacionales concesionadas.' },
  { tipo: 'Gobernaciones Departamentales', desc: 'Diseño de drenaje para proyectos de mejoramiento y pavimentación de vías secundarias financiados con SGR o presupuesto departamental.' },
  { tipo: 'Municipios y Secretarías de Obras', desc: 'Estudios hidrológicos para alcantarillas y drenaje de vías terciarias y caminos rurales, con proyectos financiados con SGR.' },
  { tipo: 'Constructoras Viales', desc: 'Firmas constructoras que necesitan los diseños de drenaje como parte de los estudios previos o definitivos de sus proyectos.' },
  { tipo: 'Interventorías de proyectos viales', desc: 'Firmas de interventoría que requieren revisión técnica de los diseños de drenaje presentados por el constructor.' },
  { tipo: 'Consultoras de ingeniería', desc: 'Firmas de consultoría que subcontratan la componente hidrológica e hidráulica de proyectos viales de mayor escala.' },
]

const NORMATIVA = [
  { codigo: 'Manual INVIAS', descripcion: 'Manual de Drenaje para Carreteras — referencia técnica principal para el diseño de obras de drenaje vial en Colombia' },
  { codigo: 'HDS-5 FHWA', descripcion: 'Hydraulic Design of Highway Culverts — metodología internacional para diseño de alcantarillas y box culvert' },
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — diseño estructural de las obras de drenaje (cabezales, muros, box culvert de concreto)' },
  { codigo: 'Manual IDEAM', descripcion: 'Protocolos para análisis hidrológico y uso de datos de estaciones pluviométricas e hidrométricas' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — permiso de ocupación de cauce para obras dentro del cauce de ríos y quebradas' },
  { codigo: 'IGAC Cartografía', descripcion: 'Cartografía oficial de Colombia (escala 1:25.000) para delimitación de cuencas de drenaje' },
]

export default function EstudiosHidrologicosVias() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Hidrología vial · INVIAS · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Estudios Hidrológicos para Vías en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Drenaje transversal y longitudinal, diseño de alcantarillas y box culvert — metodología Manual INVIAS y firma COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores elabora los estudios hidrológicos e hidráulicos requeridos por INVIAS,
            gobernaciones y municipios para proyectos viales en Colombia: diseño de alcantarillas y box culvert,
            drenaje longitudinal, zonificación de amenaza hídrica en corredores y estudios para proyectos
            4G y 5G. Toda la memoria de cálculo firmada por especialista COPNIA vigente.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio hidrológico vial</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Estudios hidrológicos Colombia</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Manual INVIAS','HEC-HMS','HEC-RAS','Alcantarillas','Box Culvert','COPNIA'].map(t => (
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
              { num: '+40', label: 'corredores viales con estudios BIC' },
              { num: 'INVIAS', label: 'metodología Manual de Drenaje para Carreteras' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: 'Nacional', label: 'proyectos en toda Colombia' },
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
          <SectionLabel>Componentes del estudio vial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Estudios y diseños para el drenaje de vías
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El agua es el principal factor de deterioro de las vías en Colombia. Un sistema de drenaje bien
            diseñado es la diferencia entre una carretera que dura 20 años y una que falla en el primer invierno.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA EN</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.aplicaciones.map(a => <li key={a}>{a}</li>)}
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
            Cómo elabora BIC el estudio hidrológico vial
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del análisis de cuencas al diseño de cada estructura de drenaje, siguiendo el Manual INVIAS.
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto vial que necesita estudios hidrológicos?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica en 24 horas · Metodología Manual INVIAS · Primera consulta sin costo</p>
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
            Clientes de BIC en proyectos viales
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
            Normativa para estudios hidrológicos viales en Colombia
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
            Otros estudios de ingeniería hidráulica BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Gestión de riesgo en taludes', href: '/gestion-riesgo-taludes-colombia' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Obras civiles hidráulicas', href: '/obras-civiles-hidraulicas-colombia' },
              { label: 'Estudios torrencialidad', href: '/estudios-torrencialidad-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
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
            Todo sobre estudios hidrológicos para vías en Colombia
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🛣️</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita el estudio hidrológico<br />de su proyecto vial?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de vía, la longitud del corredor, el municipio o departamento
            y qué entidad va a recibir los estudios.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC envía propuesta técnica en menos de 24 horas · Metodología INVIAS · Firma COPNIA
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
