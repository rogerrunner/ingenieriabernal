import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito diseño de redes hidrosanitarias o memorias de cálculo. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño Redes Hidrosanitarias Colombia — Agua, Alcantarillado y Contraincendios | BIC',
  description: 'BIC diseña redes hidrosanitarias para edificios, conjuntos y proyectos industriales en Colombia: agua fría y caliente (NTC 1500), alcantarillado sanitario y pluvial, red contraincendios (NSR-10 Cap. J / NFPA 13) y memorias de cálculo para licencia de construcción. Cotización en 24 horas.',
  keywords: [
    'diseño redes hidrosanitarias Colombia',
    'diseño red agua potable edificio Colombia',
    'diseño red contra incendios RAS 2000',
    'diseño alcantarillado sanitario Colombia',
    'memorias hidrosanitarias licencia construcción',
    'diseño hidrosanitario edificios Colombia',
    'memoria calculo hidrosanitaria curaduría',
    'diseño red CPVC edificio Colombia',
    'hidrosanitario NSR-10 Colombia',
    'red contraincendios NFPA 13 Colombia',
    'diseño hidrosanitario Manizales',
    'diseño hidrosanitario conjunto residencial',
    'redes internas agua potable edificio',
    'alcantarillado sanitario edificio Colombia',
    'planos hidrosanitarios licencia construccion',
    'memoria hidrosanitaria curador urbano',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/redes-hidrosanitarias',
}

const TIPOS = [
  {
    icon: '🚿',
    tipo: 'Red interna de agua fría y caliente',
    subtitulo: 'NTC 1500, RAS 2017 Título B — para edificios y conjuntos',
    desc: 'Diseño de la red de distribución interna de agua potable fría y caliente desde el medidor hasta cada punto de consumo (grifos, duchas, sanitarios, lavaplatos, lavadoras). BIC calcula los caudales simultáneos por el método Hunter o la norma NTC 1500, dimensiona los diámetros de tuberías en cada tramo, verifica presiones mínimas y máximas en todos los aparatos, selecciona los materiales (PVC, CPVC, PPR, cobre) según la temperatura de servicio y entrega los planos isométricos y en planta para cada piso. Para sistemas de agua caliente se diseña el circuito de recirculación para minimizar el tiempo de espera y el consumo de energía.',
    usos: ['Edificios residenciales multifamiliares y torres de apartamentos', 'Conjuntos cerrados y urbanizaciones con red interna compartida', 'Hoteles, clínicas, colegios y centros comerciales', 'Naves industriales con demanda de agua de proceso'],
    norma: ['NTC 1500', 'RAS 2017 Título B', 'NSR-10 Título I'],
  },
  {
    icon: '🏗️',
    tipo: 'Red de aguas residuales sanitarias y lluvias',
    subtitulo: 'RAS 2017 Título D — evacuación eficiente para licencia',
    desc: 'Diseño de la red de desagüe de aparatos sanitarios, columnas de ventilación primaria y secundaria, bajantes, colectores de piso y sistema de conexión al alcantarillado público. BIC calcula las unidades de descarga (UD) por aparato según NTC 1500, dimensiona los ramales, bajantes y colectores, diseña el sistema de sifones y trampas para evitar malos olores, y verifica las pendientes mínimas. En paralelo diseña la red de aguas lluvias: cálculo del caudal de diseño con curvas IDF del IDEAM para la ciudad específica, dimensionamiento de canaletas, canales, bajantes exteriores y conexión al sistema pluvial público o sistema de infiltración/retención.',
    usos: ['Evacuación sanitaria en edificios residenciales y comerciales', 'Sistemas de aguas lluvias para terraza, parqueaderos y áreas exteriores', 'Diseño de cajas de inspección y conexión domiciliaria al alcantarillado', 'Sistemas de retención o reutilización de aguas lluvias'],
    norma: ['NTC 1500', 'RAS 2017 Título D', 'Decreto 1077/2015'],
  },
  {
    icon: '🔥',
    tipo: 'Red contraincendios NSR-10 Cap. J / NFPA 13',
    subtitulo: 'Sistemas de rociadores, gabinetes BIE y redes húmedas',
    desc: 'Diseño de sistemas de protección contra incendios según los requerimientos de la NSR-10 Capítulo J y la norma internacional NFPA 13 (rociadores automáticos) y NFPA 14 (sistemas de mangueras). BIC determina la clasificación de riesgo del edificio (ligero, ordinario I/II/III, extra riesgo), diseña la red principal de suministro desde el hidrante de fachada o tanque de reserva, calcula caudales y presiones requeridas en cada rociador, dimensiona las tuberías, selecciona los rociadores según temperatura de activación y patrón de descarga, y diseña el cuarto de bombas contraincendios. El diseño entrega los planos requeridos por el Cuerpo de Bomberos y la Curaduria para tramitar la licencia de construcción.',
    usos: ['Edificios de más de 5 pisos o con ocupación mayor a 50 personas (NSR-10 J.4)', 'Centros comerciales, bodegas y parques industriales (riesgo ordinario y extra)', 'Hoteles, hospitales y edificios de uso mixto con alta ocupación', 'Ampliación o rehabilitación de sistemas CI existentes'],
    norma: ['NSR-10 Cap. J', 'NFPA 13 / NFPA 14', 'NTC 2301 / NTC 1669'],
  },
  {
    icon: '📐',
    tipo: 'Memorias de cálculo hidrosanitarias para licencia',
    subtitulo: 'Firma COPNIA vigente — aceptadas por toda curaduría en Colombia',
    desc: 'La curaduria urbana o entidad territorial exige la memoria de cálculo hidrosanitaria firmada por ingeniero especialista con tarjeta profesional COPNIA vigente como requisito para otorgar la licencia de construcción. BIC elabora el documento técnico completo: descripción del proyecto, parámetros de diseño (caudales, presiones, materiales), metodología de cálculo con respaldo normativo (NTC 1500, RAS 2017, NSR-10), resultados por sistema (agua fría, agua caliente, aguas residuales, aguas lluvias, contraincendios), verificación del cumplimiento de la norma y conclusiones. La memoria incluye los planos referenciados en formato DWG y PDF en la escala y título block exigidos por la entidad territorial específica.',
    usos: ['Expediente de licencia de construcción ante curaduría urbana', 'Proyectos financiados con SGR o créditos VIS/VIP que exigen revisión técnica', 'Revisión de diseños para actualización o reformas de edificios existentes', 'Peritaje técnico en conflictos o procesos jurídicos sobre instalaciones hidrosanitarias'],
    norma: ['Ley 400/1997 (NSR-10)', 'Decreto 1077/2015 Art. 2.2.1.1', 'Resolución COPNIA'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caudales de diseño — base de todo el sistema',
    desc: 'El primer paso es determinar con precisión cuánta agua necesita el edificio y en qué momentos. BIC analiza el programa arquitectónico (número y tipo de aparatos sanitarios en cada local), clasifica los espacios según la NSR-10 y la NTC 1500, y calcula los caudales de diseño por el método de unidades de descarga (Hunter) para agua fría y caliente. Para la red de aguas lluvias se obtienen las curvas IDF del IDEAM para la ciudad del proyecto (cada ciudad tiene su intensidad de diseño específica: Manizales, Bogotá, Medellín, Cali y Barranquilla tienen parámetros distintos). Para la red contraincendios se establece la densidad de descarga requerida según la clasificación de riesgo NFPA 13. Con los caudales definidos se determina la presión de servicio mínima requerida en el sistema y si es necesario un sistema de bombeo de presurización.',
    herramientas: ['Método Hunter — NTC 1500 (caudales simultáneos)', 'Curvas IDF IDEAM (caudales pluviales por ciudad)', 'Clasificación de riesgo NFPA 13 (red CI)', 'Cálculo de demanda de agua caliente (NTC 1500 Anexo A)'],
    resultado: 'Caudales de diseño por sistema y punto, presión mínima requerida, necesidad de bombeo',
  },
  {
    paso: '02',
    titulo: 'Trazado de redes y predimensionamiento de diámetros',
    desc: 'Con los caudales definidos, BIC traza el recorrido óptimo de cada red sobre los planos arquitectónicos del proyecto: tuberías por contra-pisos y shafts técnicos, con mínima interferencia con la estructura y la ventilación. El trazado define los nodos del sistema (derivaciones, cambios de dirección, accesorios) y permite hacer el predimensionamiento de diámetros por criterio de velocidad (1.0-2.5 m/s para redes de agua potable, según NTC 1500 Tabla 2.1). BIC verifica que el trazado cumpla los requisitos de accesibilidad para mantenimiento y que los shafts sean suficientes para albergar todas las tuberías — un problema frecuente en proyectos mal coordinados donde los planos de fontanería se diseñan sin verificar el espacio disponible.',
    herramientas: ['AutoCAD (trazado sobre planos arquitectónicos)', 'Isométricos 3D por piso y sistema', 'NTC 1500 Tabla de velocidades admisibles', 'RAS 2017 Tabla de pendientes mínimas (red residual)'],
    resultado: 'Isométricos de trazado, predimensionamiento de diámetros, diagrama de nodos del sistema',
  },
  {
    paso: '03',
    titulo: 'Modelación hidráulica — verificación de presiones y velocidades',
    desc: 'El predimensionamiento se verifica con el cálculo hidráulico completo del sistema. BIC calcula las pérdidas de carga en tuberías (fórmula de Hazen-Williams para agua potable, Manning para red residual) y en accesorios (longitudes equivalentes por método de las pérdidas localizadas), construye la envolvente de presiones para el escenario de máximo consumo simultáneo y el escenario de mínimo consumo (para verificar que no se supere la presión máxima admisible). Para la red de rociadores CI se modela el circuito más desfavorable con el mayor número de rociadores activados simultáneamente (área de operación NFPA 13). El resultado de la modelación puede requerir ajustar diámetros, añadir válvulas reductoras de presión o cambiar el punto de suministro.',
    herramientas: ['Hazen-Williams (pérdidas de carga tuberías)', 'Manning (red de aguas residuales)', 'EPANET (modelación red de agua potable compleja)', 'Tablas NFPA 13 (selección curva bomba CI)'],
    resultado: 'Presiones en todos los puntos de consumo verificadas, diámetros definitivos, selección del equipo de bombeo',
  },
  {
    paso: '04',
    titulo: 'Memorias de cálculo y especificaciones técnicas',
    desc: 'Con el diseño hidráulico verificado, BIC elabora la memoria de cálculo completa: el documento técnico que la curaduria exige para emitir la licencia de construcción. La memoria incluye descripción del proyecto, normativa aplicable, metodología de diseño con respaldo en las normas colombianas vigentes (NTC 1500, RAS 2017, NSR-10 Cap. J), parámetros de entrada, resultados detallados por sistema y verificaciones del cumplimiento de cada requisito normativo. Las especificaciones técnicas describen el material de cada tubería, los accesorios permitidos, los métodos de instalación y las pruebas de estanqueidad que debe realizar el contratista. El documento se firma con tarjeta profesional COPNIA 17202-313228 CLD del Ing. Rogerio Bernal Ríos.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA)', 'Especificaciones técnicas por sistema', 'Cuadro de cantidades de materiales (APU)', 'Formato de acta de pruebas hidrostáticas'],
    resultado: 'Memoria de cálculo firmada COPNIA, especificaciones técnicas, cuadro de materiales listo para licencia',
  },
  {
    paso: '05',
    titulo: 'Planos constructivos As-Built y acompañamiento de obra',
    desc: 'Los planos constructivos hidrosanitarios son el conjunto de dibujos que el fontanero y el contratista usan para ejecutar la obra. BIC entrega los planos en planta de cada piso con los trazados de red, los isométricos de cada sistema (agua fría, agua caliente, aguas residuales, aguas lluvias, contraincendios), los detalles de cámaras de inspección, cuartos de bombas, gabinetes contra incendios, y el diagrama esquemático general del sistema. Los planos se entregan en DWG (AutoCAD) y PDF imprimible a escala. Durante la construcción, BIC puede prestar el servicio de acompañamiento técnico de obra para verificar que la instalación se ejecuta conforme al diseño y emitir los planos As-Built (construcción real) al finalizar la obra.',
    herramientas: ['AutoCAD (planos en planta, isométricos, detalles)', 'Plantas piso a piso + isométricos por sistema', 'Detalle cuarto de bombas y tableros de control', 'Planos As-Built al finalizar la obra (opcional)'],
    resultado: 'Juego completo de planos constructivos DWG + PDF, listo para construcción y trámite de licencia',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de redes hidrosanitarias en Colombia?',
    a: 'El costo del diseño hidrosanitario depende del tipo de proyecto (residencial, comercial, industrial), el número de pisos, la complejidad de los sistemas (si incluye red contraincendios, agua caliente con recirculación, reutilización de aguas lluvias) y si se requiere memoria de cálculo firmada para licencia. Para un edificio residencial de 5 a 10 pisos con red de agua fría, agua residual y pluvial, el diseño completo con planos isométricos y memoria de cálculo firmada oscila entre $8.000.000 y $22.000.000 COP. Para proyectos con red contraincendios el rango sube a $18.000.000-$45.000.000 COP. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿Qué documentos hidrosanitarios exige la curaduría urbana para la licencia de construcción?',
    a: 'Los requisitos varían según el municipio y el tipo de licencia (obra nueva, ampliación, refacción). En la mayoría de las curadorías urbanas en Colombia se exigen: (1) planos hidrosanitarios firmados por ingeniero especialista con tarjeta COPNIA vigente, en el juego de escala y título block definido por la curaduría; (2) memoria de cálculo hidrosanitaria con la metodología, los datos de entrada y los resultados, firmada por el mismo especialista; (3) para edificios con red contraincendios, concepto favorable del Cuerpo de Bomberos. En algunos municipios también se exige el certificado de disponibilidad de servicios públicos emitido por la ESP. BIC elabora todos estos documentos en el formato específico de la curaduría del municipio donde se tramita la licencia.',
  },
  {
    q: '¿Cuándo es obligatoria la red contraincendios en un edificio en Colombia?',
    a: 'La NSR-10 Capítulo J establece que los sistemas de supresión de incendios (rociadores, mangueras, espuma) son obligatorios para edificaciones de acuerdo con su clasificación de uso y altura. Los casos más comunes donde es obligatorio en Colombia: edificios de vivienda de 5 o más pisos (J.4.2); edificios comerciales con área mayor a 1.000 m² en cualquier piso (J.4.3); bodegas e industrias con riesgo ordinario o extra (J.4.5); hoteles, hospitales y edificios de ocupación mayor de 50 personas por piso (J.4.4); y cualquier edificio de más de 3.000 m² de área total construida (J.4.6). Adicionalmente, algunos municipios tienen normas más estrictas en su POT. BIC revisa la normativa específica del municipio y la clasificación de uso del proyecto para determinar si la red CI es obligatoria y qué sistema se requiere.',
  },
  {
    q: '¿Qué diferencia hay entre NTC 1500 y RAS 2017 para diseño hidrosanitario?',
    a: 'Son normas complementarias que aplican en contextos diferentes. La NTC 1500 (Código Colombiano de Fontanería) es la norma técnica colombiana que regula las instalaciones hidrosanitarias al interior de las edificaciones: diámetros mínimos de tuberías, presiones de servicio, materiales permitidos, velocidades admisibles, caudales por aparato y método de cálculo de caudales simultáneos (unidades de descarga Hunter). El RAS 2017 (Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico, Resolución 0330/2017) regula el diseño de los sistemas de acueducto y alcantarillado público y de las conexiones domiciliarias — no las instalaciones internas del edificio, sino desde el medidor hacia la red pública. En la práctica, el diseño hidrosanitario de un edificio aplica principalmente la NTC 1500 para la red interna y el RAS 2017 para el empalme domiciliario y la conexión al alcantarillado.',
  },
  {
    q: '¿Es necesario diseño hidrosanitario para una vivienda unifamiliar?',
    a: 'Legalmente, la exigencia depende del municipio y del tipo de licencia. Para viviendas unifamiliares nuevas en zonas urbanas, la mayoría de las curadorías exigen los planos hidrosanitarios como parte del juego de planos constructivos, aunque en algunos municipios pequeños solo se exige para edificaciones de más de un piso o para usos específicos. Más allá de la exigencia legal, un diseño hidrosanitario correcto previene problemas costosos: mal dimensionamiento de tuberías que genera baja presión en los pisos altos, ventilación insuficiente que produce malos olores permanentes, o diámetros subdimensionados que causan ruido en las tuberías. BIC elabora diseños para viviendas unifamiliares a un costo razonable y con los planos en el formato específico de la curaduría del municipio.',
  },
  {
    q: '¿Cuánto tiempo toma el diseño hidrosanitario de un edificio?',
    a: 'El plazo depende del tamaño y la complejidad del proyecto. Para un edificio residencial de 5 a 10 pisos con sistemas convencionales (agua fría, aguas residuales y pluviales), el diseño completo con planos y memoria de cálculo toma 2 a 3 semanas contadas desde que BIC recibe los planos arquitectónicos definitivos en DWG. Si el proyecto incluye red contraincendios con rociadores, el plazo se extiende a 3 a 5 semanas por la mayor complejidad del cálculo hidráulico. Para proyectos urgentes (cuando hay fecha límite de radicación de licencia), BIC puede priorizar la entrega de la memoria de cálculo y los planos principales en primera instancia, con el detalle completo en una segunda entrega.',
  },
  {
    q: '¿BIC hace diseño hidrosanitario para proyectos industriales?',
    a: 'Sí. Los proyectos industriales tienen requerimientos hidrosanitarios más complejos que los residenciales: agua de proceso (calidad, presión y temperatura específicas para cada proceso productivo), sistemas de agua para refrigeración de maquinaria, redes de agua desmineralizada o purificada, sistemas de aguas residuales industriales con pretratamiento antes de conectarse al alcantarillado público (que exige autorización de la autoridad ambiental), y redes contraincendios dimensionadas para riesgo extra (NFPA 13 Clase III). BIC tiene experiencia en diseño hidrosanitario para plantas industriales, bodegas de logística, parques empresariales y zonas francas en Colombia.',
  },
  {
    q: '¿BIC puede revisar y corregir un diseño hidrosanitario elaborado por otra firma?',
    a: 'Sí, es un servicio que BIC presta frecuentemente. Los casos más comunes: un arquitecto recibe de la curaduría un concepto negativo sobre los planos hidrosanitarios y necesita que un ingeniero especialista los revise y corrija; una constructora descubre durante la obra que el diseño tiene errores (tuberías con presiones insuficientes, ventilaciones incorrectas, interferencias con la estructura); o un propietario tiene problemas recurrentes en su edificio (malos olores, baja presión, inundaciones por aguas lluvias) y quiere diagnosticar si son de diseño o de mantenimiento. BIC emite el dictamen técnico con identificación precisa de las deficiencias, propuesta de corrección y nueva memoria de cálculo firmada.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras de edificios y conjuntos', desc: 'Diseño completo de redes hidrosanitarias para proyectos multifamiliares, torres de apartamentos y conjuntos cerrados. Entrega de planos y memorias en el formato exacto de cada curaduría.' },
  { tipo: 'Arquitectos con licencias en trámite', desc: 'Elaboración de la memoria de cálculo y planos hidrosanitarios firmados por especialista COPNIA, listos para completar el expediente de licencia de construcción en cualquier municipio.' },
  { tipo: 'Promotores inmobiliarios', desc: 'Diseño hidrosanitario completo como parte del paquete de diseños técnicos del proyecto, con presupuesto de instalación y especificaciones para licitación de contratistas.' },
  { tipo: 'Propietarios de edificios comerciales', desc: 'Hoteles, clínicas, centros comerciales y edificios de oficinas que requieren redes hidrosanitarias eficientes, sistemas de ahorro de agua y cumplimiento de la NSR-10 Cap. J.' },
  { tipo: 'Constructoras de proyectos industriales', desc: 'Naves industriales, bodegas y parques empresariales con demandas especiales de agua de proceso, sistemas CI de riesgo extra y aguas residuales con pretratamiento.' },
  { tipo: 'Propietarios con problemas en instalaciones existentes', desc: 'Diagnóstico técnico de redes con problemas de presión, malos olores o inundaciones. Diseño de rehabilitación con memoria de cálculo y planos As-Built.' },
]

const NORMATIVA = [
  { codigo: 'NTC 1500', descripcion: 'Código Colombiano de Fontanería — norma principal para diseño de redes internas de agua potable, aguas residuales y aguas lluvias en edificaciones' },
  { codigo: 'RAS 2017', descripcion: 'Resolución 0330/2017 MinVivienda — Reglamento Técnico de Agua y Saneamiento. Aplica para conexiones domiciliarias y empalme a la red pública' },
  { codigo: 'NSR-10 Cap. J', descripcion: 'Norma Sismo Resistente Capítulo J — requisitos para sistemas de extinción de incendios (rociadores, mangueras BIE) según clasificación de uso del edificio' },
  { codigo: 'NFPA 13 / 14', descripcion: 'Normas internacionales NFPA para sistemas de rociadores (13) y sistemas de mangueras (14) — adoptadas por referencia en la NSR-10 Cap. J Colombia' },
  { codigo: 'Decreto 1077/2015', descripcion: 'Decreto Único Reglamentario Sector Vivienda — contiene los requisitos para licencias de construcción y los documentos que debe incluir el expediente técnico' },
  { codigo: 'Resolución COPNIA', descripcion: 'Obligación de firma de especialista con tarjeta COPNIA vigente en memorias de cálculo y planos estructurales, hidrosanitarios y eléctricos para licencias de construcción' },
]

export default function ServicioRedesHidrosanitarias() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #002244 0%, #003A75 55%, #004F9F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Diseño técnico · Edificaciones Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Redes Hidrosanitarias en Colombia
          </h1>
          <p style={{ color: '#5BC8E0', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Agua fría y caliente, alcantarillado sanitario y pluvial, red contraincendios — con memoria de cálculo firmada COPNIA para licencia de construcción
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores diseña redes hidrosanitarias para edificios residenciales,
            comerciales e industriales en todo Colombia. Cada diseño cumple la NTC 1500, el RAS 2017 y
            la NSR-10 Capítulo J, e incluye la memoria de cálculo firmada por especialista COPNIA
            en el formato exacto que exige la curaduría urbana del proyecto. Entrega en 2 a 4 semanas.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño hidrosanitario</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NTC 1500','RAS 2017','NSR-10 Cap. J','NFPA 13','COPNIA vigente','Memoria de cálculo'].map(t => (
              <Tag key={t} style={{ background: 'rgba(91,200,224,0.15)', color: '#8ADCEA', border: '1px solid rgba(91,200,224,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3d9ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+120', label: 'proyectos hidrosanitarios ejecutados en Colombia' },
              { num: '24h', label: 'para enviar propuesta técnica y económica' },
              { num: '100%', label: 'de memorias aprobadas por curadorías urbanas' },
              { num: 'COPNIA', label: 'firma vigente — 17202-313228 CLD activa' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002244', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué sistemas hidrosanitarios diseña BIC?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El diseño hidrosanitario de un edificio abarca cuatro sistemas interconectados: la red de suministro
            de agua potable, la red de evacuación de aguas residuales y lluvias, la red contraincendios
            y la memoria de cálculo para licencia. BIC diseña todos los sistemas de forma coordinada para
            garantizar coherencia entre planos y evitar interferencias en obra.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #0066CC',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002244', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#0066CC', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003A75', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#e8f0ff', color: '#002244', borderRadius: 4,
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
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC las redes hidrosanitarias
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el cálculo de caudales de diseño hasta los planos constructivos y la memoria de cálculo firmada.
            Cada proyecto BIC cumple con la NTC 1500, el RAS 2017 y la NSR-10 Cap. J,
            y se entrega en el formato que exige la curaduría urbana del municipio del proyecto.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0066CC, #004F9F)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#b3d9ea', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002244' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e8f4ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3d9ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003A75', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #002244, #004F9F)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita diseño hidrosanitario o memorias para licencia?</p>
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
            Clientes que contratan diseño hidrosanitario con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con constructoras, arquitectos, promotores inmobiliarios y propietarios de edificios
            en todo Colombia. El diseño hidrosanitario puede ser el único servicio contratado o parte de
            un paquete de diseños técnicos más amplio que incluye estudios hidráulicos, geotécnicos y ambientales.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f8fbff', border: '1px solid #d0e4f5', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #0066CC',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002244', marginBottom: 6 }}>{c.tipo}</h3>
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
            Normativa para diseño hidrosanitario en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña bajo las normas colombianas vigentes. Conocer el marco normativo evita rechazos
            por parte de las curaderías urbanas, el Cuerpo de Bomberos y las ESP al tramitar la licencia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#002244', color: '#fff', borderRadius: 6,
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
            Otros servicios técnicos que ofrece BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño alcantarillado y PTAR', href: '/servicios/acueducto-alcantarillado' },
              { label: 'Estudios geotécnicos Colombia', href: '/servicios/geotecnia' },
              { label: 'Interventoría técnica obras', href: '/servicios/interventoria' },
              { label: 'Diseño bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3d9ea',
                borderRadius: 10, padding: '14px 18px', color: '#002244',
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
            Todo lo que necesita saber sobre diseño hidrosanitario
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen constructoras, arquitectos
            y promotores inmobiliarios antes de contratar el diseño.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002244', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #001833 0%, #003A75 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🚿</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita diseño hidrosanitario<br />o memorias para licencia en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el número de pisos, el municipio y si necesita
            red contraincendios o solo los sistemas convencionales.
          </p>
          <p style={{ color: '#5BC8E0', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
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
