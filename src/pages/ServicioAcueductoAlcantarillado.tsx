import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito diseño de alcantarillado o PTAR. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Diseño Alcantarillado y PTAR Colombia — RAS 2000, Vertimientos CAR | BIC',
  description: 'BIC diseña redes de alcantarillado sanitario y pluvial, plantas de tratamiento de aguas residuales (PTAR — lodos activados, FAFA, humedales) y planes maestros en Colombia. RAS 2000 Título D/E, Decreto 1076/2015, Resolución 0631/2015. Cobertura nacional. Cotización en 24 horas.',
  keywords: [
    'diseño alcantarillado Colombia',
    'diseño red alcantarillado sanitario Colombia',
    'PTAR Colombia diseño',
    'diseño planta tratamiento aguas residuales Colombia',
    'RAS 2000 alcantarillado',
    'diseño PTAR lodos activados Colombia',
    'plan maestro acueducto alcantarillado',
    'SewerGEMS alcantarillado Colombia',
    'EPA SWMM drenaje urbano Colombia',
    'estudio vertimientos CAR Colombia',
    'diseño alcantarillado municipal Colombia',
    'PTAR municipio SGR Colombia',
    'diseño alcantarillado Resolución 0330',
    'planta tratamiento aguas residuales municipio',
    'alcantarillado pluvial drenaje urbano Colombia',
    'diseño FAFA humedal artificial Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/acueducto-alcantarillado',
}

const TIPOS = [
  {
    icon: '🏚️',
    tipo: 'Red de alcantarillado sanitario',
    subtitulo: 'RAS 2017 Título D — colectores, interceptores y emisarios',
    desc: 'Diseño de la red de alcantarillado sanitario para conducir las aguas residuales domésticas e industriales desde las conexiones domiciliarias hasta el punto de tratamiento o vertimiento. BIC realiza el cálculo de caudales de aguas residuales según la dotación per cápita y el coeficiente de retorno K=0.80, el trazado de colectores secundarios e interceptores, el diseño hidráulico de tuberías (Manning, verificación de autolimpieza a sección parcialmente llena), el diseño de pozos de inspección, sifones invertidos y estaciones de bombeo. La modelación se realiza en SewerGEMS o EPA-SWMM para sistemas de mediana y gran complejidad. El diseño cumple el RAS 2017 Título D y la Resolución 0330/2017 del MinVivienda.',
    usos: ['Municipios con cobertura deficiente de alcantarillado sanitario', 'Urbanizaciones y conjuntos residenciales que requieren red interna', 'Proyectos industriales con aguas residuales a colectar', 'Renovación de redes antiguas con problemas de obstrucción o infiltración'],
    norma: ['RAS 2017 Título D', 'Resolución 0330/2017', 'NTC 3721 (tuberías)'],
  },
  {
    icon: '🌧️',
    tipo: 'Red de alcantarillado pluvial y drenaje urbano',
    subtitulo: 'EPA-SWMM, HEC-HMS — diseño para eventos extremos',
    desc: 'Diseño del sistema de recolección y conducción de aguas lluvias en zonas urbanas y periurbanas: cunetas, sumideros, colectores pluviales, canales de alivio y estructuras de descarga. BIC calcula los caudales de diseño con el Método Racional Modificado o el modelo lluvia-escorrentía en HEC-HMS para cuencas mayores de 20 ha, diseña los colectores verificando la capacidad para el evento de diseño (Tr 10 o 25 años según la categoría de la vía, RAS 2017 D.5.3), y modela el comportamiento del sistema en EPA-SWMM para detectar puntos de inundación en la red. Para proyectos de drenaje sostenible (SUDS), BIC diseña pavimentos permeables, zanjas de infiltración, pozos de absorción y humedales de retención que reducen el caudal pico y mejoran la calidad del agua pluvial.',
    usos: ['Proyectos viales urbanos con drenaje transversal y longitudinal', 'Urbanizaciones y parques industriales con requerimiento de drenaje pluvial', 'Municipios con problemas de inundación en vías por insuficiencia del sistema pluvial', 'Estudios de drenaje para planes parciales y licencias urbanísticas'],
    norma: ['RAS 2017 Título D', 'Manual INVIAS (drenaje vial)', 'EPA-SWMM v5 (USEPA)'],
  },
  {
    icon: '🔬',
    tipo: 'Diseño de PTAR — lodos activados, FAFA, humedales',
    subtitulo: 'Para municipios, urbanizaciones y proyectos con vertimientos CAR',
    desc: 'Diseño de plantas de tratamiento de aguas residuales (PTAR) para cumplir los límites de vertimiento de la Resolución 0631/2015 del MinAmbiente. BIC selecciona la tecnología de tratamiento en función del caudal de diseño, los parámetros del agua residual cruda (DBO5, SST, N, P), la calidad del cuerpo receptor y los recursos disponibles para operación: lodos activados de aireación extendida para municipios medios, filtros anaerobios de flujo ascendente (FAFA) para municipios pequeños con bajo presupuesto operativo, humedales artificiales de flujo subsuperficial para proyectos con terreno disponible, o sistemas compactos prefabricados para urbanizaciones aisladas. El diseño incluye el balance de masas, el cálculo de cada unidad de tratamiento y la memoria de cálculo para radicar ante la CAR el permiso de vertimiento.',
    usos: ['Municipios sin PTAR o con planta existente fuera de norma', 'Urbanizaciones y conjuntos en zonas sin alcantarillado público', 'Proyectos industriales y agroindustriales con permiso de vertimiento CAR', 'Formulación de proyectos PTAR con recursos SGR o créditos MinVivienda'],
    norma: ['Resolución 0631/2015', 'Decreto 1076/2015', 'RAS 2017 Título E'],
  },
  {
    icon: '📋',
    tipo: 'Plan maestro de acueducto y alcantarillado',
    subtitulo: 'Instrumento de planificación para municipios y ESP',
    desc: 'El Plan Maestro de Acueducto y Alcantarillado (PMAA) establece las obras necesarias para alcanzar las metas de cobertura y calidad en el horizonte del Plan de Ordenamiento Territorial. BIC formula el PMAA mediante el diagnóstico de la infraestructura existente (inventario, estado, capacidad y déficit), la proyección de la demanda de agua y generación de aguas residuales para los próximos 25 años, el diseño conceptual de las obras de expansión y mejoramiento con estimativos de costo, la evaluación financiera y la propuesta de fases de inversión. El PMAA es requisito para acceder a recursos SGR de agua potable y saneamiento básico y para el reporte al Ministerio de Vivienda y a la Superintendencia de Servicios Públicos.',
    usos: ['Municipios que requieren PMAA para proyectos SGR agua y saneamiento', 'ESP que necesitan actualizar el instrumento de planificación de su sistema', 'Municipios en proceso de revisión o ajuste del Plan de Ordenamiento Territorial', 'Diagnóstico de sistemas para postulación a créditos MinVivienda-Findeter'],
    norma: ['Ley 142/1994 (SPD)', 'Resolución 0330/2017', 'Lineamientos DNP CONPES 3810'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico de la red existente y datos de campo',
    desc: 'Antes de diseñar, BIC diagnostica el estado actual del sistema: inventario de colectores, pozos de inspección y estructuras especiales con coordenadas y cotas actuales; verificación de cobertura y déficit de servicio por barrios o sectores; análisis de los problemas reportados (rebosamiento de pozos, inundaciones, malos olores) e identificación de sus causas técnicas; y evaluación de la capacidad residual de la red existente para soportar el crecimiento urbanístico esperado. Para sistemas que van a recibir aguas residuales industriales, BIC caracteriza el aporte industrial para verificar que no excede los límites de admisión al alcantarillado público (Resolución 0631/2015 Artículo 14). Este diagnóstico justifica el alcance y las inversiones del nuevo diseño.',
    herramientas: ['Levantamiento topográfico de colectores y pozos (GPS diferencial)', 'CCTV o inspección visual de tuberías existentes', 'Aforos de caudal en pozos de inspección (vertedero portátil)', 'Caracterización de aguas residuales (muestras compuestas DBO5/SST)'],
    resultado: 'Diagnóstico de red existente, mapa de cobertura, identificación de déficit y causas de problemas',
  },
  {
    paso: '02',
    titulo: 'Caudales de diseño según RAS 2017',
    desc: 'Los caudales de diseño de un alcantarillado se calculan conforme a la metodología del RAS 2017 Título D: caudal medio diario de aguas residuales basado en la dotación neta per cápita y la población de diseño para un horizonte de 25 años, caudal máximo horario con el factor de mayoración K1×K2 según el nivel de complejidad del sistema, caudal de infiltración al colector en función del tipo de tubería, nivel freático y longitud de la red, y caudal de conexiones erradas. Para la red pluvial, BIC calcula los caudales de escorrentía con el Método Racional Modificado o HEC-HMS para cuencas mayores a 20 ha, usando las curvas IDF del IDEAM para el municipio específico del proyecto.',
    herramientas: ['RAS 2017 Título D (metodología de caudales)', 'Curvas IDF IDEAM (caudales pluviales)', 'HEC-HMS (modelación lluvia-escorrentía cuencas > 20 ha)', 'Proyección de población (censos DANE + tasas de crecimiento)'],
    resultado: 'Caudales de diseño por sector (medio, máximo, infiltración, pluvial), horizonte de diseño 25 años',
  },
  {
    paso: '03',
    titulo: 'Trazado y modelación hidráulica (SewerGEMS / EPA-SWMM)',
    desc: 'Con los caudales definidos, BIC traza la red de colectores sobre el modelo topográfico del área de drenaje: colectores secundarios de barrio, colectores principales e interceptores hasta la PTAR o el punto de descarga. El trazado se optimiza para aprovechar la topografía natural, minimizar las profundidades de excavación y evitar obstáculos estructurales existentes. La modelación hidráulica en SewerGEMS (para alcantarillado sanitario) o EPA-SWMM (para sistemas combinados o pluviales complejos) calcula los tirantes de flujo en cada colector, verifica el cumplimiento de la velocidad mínima de autolimpieza, identifica colectores que operan a presión y diseña los aliviaderos para el escenario de tormenta de diseño.',
    herramientas: ['SewerGEMS (Bentley — modelación alcantarillado sanitario)', 'EPA-SWMM v5 (USEPA — drenaje pluvial y sistema combinado)', 'AutoCAD Civil 3D (trazado, perfiles y planos)', 'QGIS / ArcGIS (procesamiento cartográfico)'],
    resultado: 'Trazado definitivo de colectores con perfiles hidráulicos, velocidades y tirantes verificados',
  },
  {
    paso: '04',
    titulo: 'Diseño de la PTAR — tecnología, unidades y balance de masas',
    desc: 'Para proyectos que incluyen tratamiento de aguas residuales, BIC diseña cada unidad de la PTAR: cribado grueso y fino, trampa de grasas, sedimentador primario, unidad de tratamiento biológico (reactor de lodos activados, FAFA o humedal artificial según la tecnología seleccionada), clarificador secundario, sistema de cloración y lecho de secado de lodos. Para cada unidad se calcula el volumen, las dimensiones, los tiempos de retención hidráulica y de sólidos, la producción de lodos y la calidad del efluente tratado. BIC verifica que el efluente cumple los límites de vertimiento de la Resolución 0631/2015 para DBO5, SST, pH, grasas y aceites, nitrógeno y fósforo.',
    herramientas: ['BioWin / GPS-X (modelación procesos biológicos PTAR)', 'Balance de masas (DBO5, SST, N, P por etapa de tratamiento)', 'Resolución 0631/2015 (límites de vertimiento por sector)', 'RAS 2017 Título E (criterios de diseño PTAR)'],
    resultado: 'Diseño completo de PTAR con dimensiones de unidades, balance de masas y verificación Resolución 0631/2015',
  },
  {
    paso: '05',
    titulo: 'Memorias, planos constructivos y expediente para permiso de vertimiento',
    desc: 'BIC entrega el paquete de documentos completo para construir y obtener los permisos ambientales: memoria de cálculo con toda la metodología, datos de entrada y resultados numéricos, firmada por el ingeniero especialista COPNIA 17202-313228 CLD; planos constructivos en AutoCAD (plantas de la red con cotas de clave y batea, perfiles longitudinales de colectores, detalles de pozos de inspección y estructuras especiales, planos de la PTAR con cortes y detalles de cada unidad); especificaciones técnicas generales y particulares para licitación; y los estudios técnicos para radicar ante la CAR el permiso de vertimiento (Decreto 1076/2015): caracterización del cuerpo receptor, balance hídrico y evaluación de la capacidad de asimilación.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'AutoCAD (planos red + perfiles longitudinales + PTAR)', 'Especificaciones técnicas para licitación y APU', 'Expediente técnico permiso de vertimiento ante CAR'],
    resultado: 'Paquete completo: memoria firmada COPNIA + planos DWG/PDF + expediente para permiso de vertimiento CAR',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de un alcantarillado municipal en Colombia?',
    a: 'El costo depende del tamaño del sistema (longitud de colectores, número de pozos), si incluye o no el diseño de la PTAR, la disponibilidad de información topográfica e hidrológica existente y si requiere permiso de vertimiento ante la CAR. Para una red de alcantarillado sanitario de un municipio pequeño (2.000-5.000 habitantes, 3-5 km de colectores, con diseño de PTAR tipo FAFA) el costo completo con modelación SewerGEMS, planos constructivos y memoria de cálculo firmada oscila entre $45.000.000 y $90.000.000 COP. Para municipios medianos o proyectos con lodos activados, el rango es mayor. BIC envía propuesta técnica detallada en 24 horas sin costo.',
  },
  {
    q: '¿Qué tecnología de PTAR es la más adecuada para un municipio pequeño en Colombia?',
    a: 'Para municipios menores de 10.000 habitantes, las opciones más frecuentes son: el filtro anaerobio de flujo ascendente (FAFA) — bajo costo de operación, resistente a variaciones de caudal, mantenimiento simple — que es la tecnología que el MinVivienda recomienda en el RAS 2017 para municipios pequeños; y el humedal artificial de flujo subsuperficial (HAFSS) — que también tiene bajo costo operativo, no requiere energía eléctrica y produce un efluente de buena calidad, pero requiere terreno disponible. Los sistemas de lodos activados son más eficientes pero tienen un costo operativo más alto (energía, operario calificado) que puede ser insostenible en municipios pequeños. BIC hace el análisis multicriterio para cada proyecto específico y recomienda la tecnología que mejor se adapta a las condiciones locales.',
  },
  {
    q: '¿Qué permisos ambientales se necesitan para construir una PTAR en Colombia?',
    a: 'Para construir y operar una PTAR que descarga al suelo o a una fuente de agua superficial se requieren dos permisos ambientales principales ante la Corporación Autónoma Regional (CAR): el permiso de vertimiento (Decreto 1076/2015 Art. 2.2.3.3.4.3), que autoriza el vertimiento del efluente tratado con los parámetros de calidad definidos en la Resolución 0631/2015; y la concesión de aguas si la PTAR utiliza agua de una fuente superficial o subterránea para el proceso de tratamiento. Para proyectos en zonas de expansión urbana, también puede requerirse la licencia ambiental si la PTAR supera los umbrales de la Ley 99/1993 y el Decreto 2041/2014. BIC elabora todos los estudios técnicos requeridos y puede acompañar a la entidad ante la CAR durante el proceso.',
  },
  {
    q: '¿Qué es la Resolución 0631/2015 y cómo afecta el diseño de la PTAR?',
    a: 'La Resolución 0631 del 17 de marzo de 2015 del MinAmbiente establece los parámetros y los valores máximos permisibles en los vertimientos al recurso hídrico superficial y al alcantarillado público, incluyendo los sistemas de tratamiento de aguas residuales municipales. Para los vertimientos de STAR municipales, la norma define límites específicos de DBO5, sólidos suspendidos totales (SST), pH, grasas y aceites, y en algunos casos nitrógeno y fósforo, según el tamaño del municipio. Estos límites definen directamente los requerimientos de eficiencia de remoción del diseño de la PTAR. BIC verifica que cada unidad de tratamiento diseñada cumple estos requerimientos antes de radicar el expediente ante la CAR.',
  },
  {
    q: '¿Cómo se financia una PTAR municipal con recursos SGR?',
    a: 'Los proyectos de agua potable y saneamiento básico son elegibles para financiación con recursos del Sistema General de Regalías a través de los OCAD Municipales. El proceso requiere: (1) formulación del proyecto en la plataforma MGA-Web del DNP con el alcance completo y el presupuesto; (2) estudios y diseños detallados elaborados por ingenieros especializados con memorias de cálculo firmadas COPNIA, que se incluyen como soportes técnicos del proyecto en el BPIN; (3) aprobación por el OCAD Municipal correspondiente; y (4) ejecución con interventoría técnica, administrativa y financiera. BIC tiene experiencia formulando proyectos de PTAR y alcantarillado en la plataforma MGA-Web y puede prestar el servicio integral.',
  },
  {
    q: '¿Cuánto tiempo dura el diseño de un sistema de alcantarillado municipal?',
    a: 'El plazo depende del tamaño del sistema, la disponibilidad de información topográfica e hidrológica y si incluye diseño de PTAR. Para una red de alcantarillado sanitario de un municipio pequeño a mediano (sin PTAR), el diseño completo con modelación SewerGEMS, planos constructivos y memoria de cálculo toma 8 a 14 semanas. Si incluye diseño de PTAR, el plazo se extiende a 12 a 20 semanas. El factor que más alarga el plazo es la falta de información topográfica actualizada del municipio: si no existe levantamiento con curvas de nivel de 1 metro de equidistancia, hay que levantarlo, lo que agrega 3 a 6 semanas según el tamaño del área. BIC coordina el levantamiento topográfico con firmas locales certificadas para minimizar este tiempo.',
  },
  {
    q: '¿Es posible diseñar alcantarillado combinado (sanitario y pluvial juntos) en Colombia?',
    a: 'En Colombia, el RAS 2017 Título D establece que los nuevos sistemas de alcantarillado deben ser del tipo separado (red sanitaria independiente de la red pluvial) tanto en zonas urbanas como en zonas de expansión. Los sistemas combinados solo están permitidos cuando existe uno ya construido y se va a hacer expansión compatible, o en casos debidamente justificados ante la autoridad ambiental. La razón técnica es que los sistemas combinados generan reboses combinados (CSO) en eventos de lluvia que descargan aguas sin tratar directamente al cuerpo receptor. El MinVivienda y las CAR rechazan proyectos nuevos con alcantarillado combinado. BIC diseña exclusivamente sistemas separados salvo que exista justificación técnica específica aprobada por la autoridad ambiental.',
  },
  {
    q: '¿BIC hace diseño de alcantarillado para urbanizaciones en zonas sin red pública?',
    a: 'Sí. Las urbanizaciones en zonas periurbanas o rurales sin acceso a la red pública de alcantarillado deben construir su propio sistema de tratamiento. BIC diseña el alcantarillado interno de la urbanización más la PTAR compacta para tratar las aguas residuales antes de verterlas al suelo o a una fuente superficial. Para urbanizaciones pequeñas (hasta 200 viviendas), las tecnologías más usadas son el sistema séptico mejorado, el FAFA o el humedal artificial. Para conjuntos más grandes se utilizan sistemas de lodos activados o biodiscos. BIC coordina con la ESP del municipio el punto de conexión del sistema de la urbanización a la red pública cuando ésta llegue en el futuro, para evitar problemas de integración posterior.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios con cobertura deficiente', desc: 'Alcaldías que necesitan expandir la red de alcantarillado sanitario o construir la primera PTAR del municipio para cumplir la meta de cobertura del Plan de Desarrollo y el PGIRS.' },
  { tipo: 'Empresas de Servicios Públicos (ESP)', desc: 'ESP municipales y regionales que operan redes de alcantarillado con déficit de capacidad, componentes deteriorados o PTAR que no cumplen la Resolución 0631/2015.' },
  { tipo: 'Urbanizaciones y promotores inmobiliarios', desc: 'Proyectos de vivienda en zonas sin red pública que deben construir la red interna de alcantarillado y la PTAR como condición para la licencia urbanística.' },
  { tipo: 'Proyectos con exigencia CAR de vertimiento', desc: 'Empresas industriales, agroindustriales y turísticas que requieren el diseño de la PTAR para tramitar el permiso de vertimiento ante la Corporación Autónoma Regional.' },
  { tipo: 'Municipios con proyectos SGR saneamiento', desc: 'Alcaldías y gobernaciones que formulan proyectos de acueducto y alcantarillado con recursos del Sistema General de Regalías y necesitan estudios y diseños detallados.' },
  { tipo: 'Constructoras de infraestructura vial y civil', desc: 'Proyectos viales y de urbanismo que requieren diseño del sistema de drenaje pluvial y conexión al alcantarillado existente como parte de las obras de urbanismo.' },
]

const NORMATIVA = [
  { codigo: 'RAS 2017', descripcion: 'Resolución 0330/2017 MinVivienda — Reglamento Técnico de Agua y Saneamiento. Título D: alcantarillado sanitario y pluvial. Título E: tratamiento de aguas residuales' },
  { codigo: 'Res. 0631/2015', descripcion: 'MinAmbiente — parámetros y valores máximos permisibles en vertimientos al recurso hídrico. Define los límites de DBO5, SST y demás parámetros que debe cumplir el efluente de la PTAR' },
  { codigo: 'Decreto 1076/2015', descripcion: 'Decreto Único Reglamentario Sector Ambiente — régimen de permisos de vertimiento (Art. 2.2.3.3.4.3) y concesiones de aguas superficiales y subterráneas' },
  { codigo: 'Decreto 3930/2010', descripcion: 'Reglamenta el uso del agua y los vertimientos. Establece los objetivos de calidad de las fuentes receptoras y el proceso de evaluación de la capacidad de asimilación' },
  { codigo: 'Ley 142/1994', descripcion: 'Ley de Servicios Públicos Domiciliarios — obliga a los municipios a garantizar la prestación de los servicios de acueducto, alcantarillado y aseo en su territorio' },
  { codigo: 'CONPES 3810', descripcion: 'Política para el suministro de agua potable y saneamiento básico en la zona rural — define lineamientos y fuentes de financiación para proyectos de alcantarillado rural' },
]

export default function ServicioAcueductoAlcantarillado() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A2E1A 0%, #0F4C2A 55%, #166B3C 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Saneamiento básico · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Alcantarillado y PTAR en Colombia
          </h1>
          <p style={{ color: '#5EE0A0', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Redes sanitarias y pluviales, plantas de tratamiento de aguas residuales y planes maestros — RAS 2017, Resolución 0631/2015 y trámite ante la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores diseña redes de alcantarillado sanitario y pluvial,
            plantas de tratamiento de aguas residuales (PTAR) y planes maestros para municipios,
            ESP y proyectos privados en todo Colombia. Modelación con SewerGEMS y EPA-SWMM,
            cumplimiento RAS 2017 y Resolución 0631/2015, y acompañamiento ante la CAR
            para el permiso de vertimiento.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño alcantarillado / PTAR</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['SewerGEMS','EPA-SWMM','RAS 2017','Res. 0631/2015','Decreto 1076','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(94,224,160,0.15)', color: '#8EF0B8', border: '1px solid rgba(94,224,160,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0fdf6', borderBottom: '1px solid #b3e8cc' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+40', label: 'sistemas de alcantarillado diseñados en Colombia' },
              { num: '+20', label: 'PTAR diseñadas (municipios, urbanizaciones, industrias)' },
              { num: 'Nacional', label: 'cobertura: municipios, ESP y promotores en todo el país' },
              { num: '24h', label: 'para propuesta técnica y económica sin costo' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#0A2E1A', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de diseño necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El diseño de saneamiento puede abarcar solo la red de colectores, solo la PTAR,
            o el sistema completo desde la conexión domiciliaria hasta el punto de vertimiento.
            BIC hace el diagnóstico inicial sin costo para definir el alcance exacto del proyecto.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #1A8A5A',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0A2E1A', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#1A8A5A', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0fdf6', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#0A4A28', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#e8f7ef', color: '#0A2E1A', borderRadius: 4,
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
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC un sistema de alcantarillado y PTAR
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el diagnóstico de la red existente hasta el expediente para el permiso de vertimiento ante la CAR.
            Cada diseño BIC cumple el RAS 2017 Título D/E y la Resolución 0631/2015 del MinAmbiente.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1A8A5A, #0F5C3A)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#b3e8cc', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#0A2E1A' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e8f7ef', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e8cc' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#0A4A28', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #0A2E1A, #166B3C)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto de alcantarillado o PTAR?</p>
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
            Clientes que contratan diseño de alcantarillado y PTAR con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con municipios, empresas de servicios públicos, promotores inmobiliarios e industrias
            en todo Colombia que necesitan el diseño de su sistema de saneamiento para cumplir la norma,
            obtener permisos ambientales o acceder a financiación del SGR.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f6fdf9', border: '1px solid #c8e8d6', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #1A8A5A',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0A2E1A', marginBottom: 6 }}>{c.tipo}</h3>
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
            Normativa para alcantarillado y PTAR en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña bajo las normas colombianas vigentes. Conocer el marco normativo evita rechazos
            por parte de las CAR, el MinVivienda y las entidades financiadoras (SGR, Findeter).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#0A2E1A', color: '#fff', borderRadius: 6,
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
            Otros servicios de ingeniería que ofrece BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño redes hidrosanitarias edificios', href: '/servicios/redes-hidrosanitarias' },
              { label: 'Estudios geotécnicos Colombia', href: '/servicios/geotecnia' },
              { label: 'Interventoría técnica de obras', href: '/servicios/interventoria' },
              { label: 'Diseño bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Ingeniería ambiental — permisos CAR', href: '/servicios/ingenieria-ambiental' },
              { label: 'Formulación proyectos SGR MGA-Web', href: '/servicios/formulation-regalias-mga' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0fdf6', border: '1px solid #b3e8cc',
                borderRadius: 10, padding: '14px 18px', color: '#0A2E1A',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5f0e2')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0fdf6')}
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
            Todo lo que necesita saber sobre alcantarillado y PTAR en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen municipios, ESP
            y promotores inmobiliarios antes de contratar el diseño.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#0A2E1A', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #061A0F 0%, #0F4C2A 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔬</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita diseño de alcantarillado o PTAR<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el municipio, el número de habitantes, el tipo de cuerpo receptor
            y si tiene información topográfica del área de drenaje.
          </p>
          <p style={{ color: '#5EE0A0', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
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
