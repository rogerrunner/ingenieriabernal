import React from 'react'

// Batch P — Clusters de autoridad SEO: 5 servicios con leads recientes (mayo 2026)
// Servicios: modelación hidráulica, acueductos, geotecnia, PTAP, aguas lluvias
const articlesP: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  // ─── CLUSTER 1: Modelación Hidráulica ───────────────────────────────────────

  'caudal-diseno-quebradas-torrenciales-colombia': {
    title: 'Cálculo de Caudal de Diseño en Quebradas Torrenciales de Colombia',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Método racional modificado para calcular el caudal de diseño en quebradas torrenciales de Colombia. TR 100 años, coeficientes C, intensidad IDEAM y ejemplo numérico en Putumayo.',
    keywords: 'caudal de diseño quebrada torrencial, tiempo de retorno hidráulico Colombia, método racional modificado, intensidad lluvia IDEAM Colombia',
    body: <>
      <p>En Colombia, las quebradas torrenciales representan uno de los mayores desafíos para la ingeniería hidráulica. Su comportamiento caracterizado por picos de caudal súbitos, alta energía cinética y transporte masivo de sedimentos exige aplicar metodologías de cálculo rigurosas para dimensionar correctamente las obras de protección y control. Determinar el <strong>caudal de diseño</strong> es el punto de partida de cualquier proyecto en estas cuencas.</p>

      <h2>¿Por qué las quebradas torrenciales son diferentes?</h2>
      <p>A diferencia de los grandes ríos con cuencas extensas, las quebradas torrenciales tienen tiempos de concentración muy cortos (a veces inferiores a 30 minutos), responden casi instantáneamente a la precipitación y pueden multiplicar su caudal base en un factor de 50 a 200 durante un aguacero intenso. En el piedemonte andino colombiano — incluyendo el Putumayo, el Caquetá y los flancos de la Cordillera Occidental — este comportamiento está ampliamente documentado por el IDEAM y el Servicio Geológico Colombiano (SGC).</p>
      <p>Para estas cuencas es necesario seleccionar un <strong>período de retorno (TR)</strong> adecuado según el tipo de obra:</p>
      <ul>
        <li><strong>TR 2-10 años:</strong> obras de drenaje menor (cunetas, bajantes, alcantarillas viales).</li>
        <li><strong>TR 50-100 años:</strong> obras de protección de riberas (espolones, muros de gaviones, revestimientos).</li>
        <li><strong>TR 100-500 años:</strong> obras de infraestructura crítica (puentes, bocatomas, obras de regulación).</li>
      </ul>
      <p>Para obras de protección en quebradas torrenciales la normativa colombiana y la práctica profesional establecen <strong>TR 100 años</strong> como estándar mínimo para estructuras de protección permanentes.</p>

      <h2>Método Racional Modificado: fundamento y aplicación</h2>
      <p>El <strong>Método Racional Modificado</strong> (también llamado Método Racional con factor de frecuencia) es el más utilizado en Colombia para cuencas pequeñas (área menor de 25 km²), como la mayoría de quebradas torrenciales en el país. La fórmula base es:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}><strong>Q = C · I · A / 3.6</strong></p>
      <p>Donde:</p>
      <ul>
        <li><strong>Q</strong> = caudal de diseño (m³/s)</li>
        <li><strong>C</strong> = coeficiente de escorrentía (adimensional, 0 a 1)</li>
        <li><strong>I</strong> = intensidad de lluvia de diseño (mm/h) para el TR seleccionado y la duración igual al tiempo de concentración</li>
        <li><strong>A</strong> = área de la cuenca (km²)</li>
      </ul>

      <h2>Determinación del coeficiente C según cobertura vegetal</h2>
      <p>El coeficiente C es el parámetro más sensible del método. Para cuencas con mezcla de coberturas, se calcula como promedio ponderado. Los valores típicos en Colombia son:</p>
      <ul>
        <li><strong>Bosque denso (selva húmeda Amazónica o Chocó):</strong> C = 0.20 – 0.35</li>
        <li><strong>Pastos y rastrojos (ganadería extensiva):</strong> C = 0.35 – 0.55</li>
        <li><strong>Cultivos de ciclo corto:</strong> C = 0.50 – 0.65</li>
        <li><strong>Zona urbana consolidada:</strong> C = 0.70 – 0.90</li>
        <li><strong>Afloramientos rocosos y zonas desnudas:</strong> C = 0.70 – 0.85</li>
      </ul>
      <p>Para cuencas en Putumayo con cobertura mixta de bosque (60%) y pastos degradados (40%) es común obtener C ponderado entre 0.35 y 0.45.</p>

      <h2>Intensidad de lluvia: curvas IDF del IDEAM</h2>
      <p>La intensidad I se obtiene de las <strong>curvas Intensidad-Duración-Frecuencia (IDF)</strong> del IDEAM, disponibles en el Atlas Climatológico Nacional. Para cuencas torrenciales sin estación pluviográfica cercana se recurre a la regionalización de parámetros IDF mediante los estudios de regionalización hidrológica publicados por el IDEAM (2014) y actualizados regionalmente por algunas CAR.</p>
      <p>La duración de lluvia se toma igual al <strong>tiempo de concentración de la cuenca</strong>, calculado preferiblemente con la fórmula de Kirpich para cuencas de montaña:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>tc = 0.0078 · (L / S^0.5)^0.77</p>
      <p>Donde L es la longitud del cauce principal en metros y S es la pendiente promedio del cauce.</p>

      <h2>Ejemplo numérico: quebrada ficticia en Putumayo</h2>
      <p>Para una quebrada en el piedemonte putumayense con las siguientes características:</p>
      <ul>
        <li>Área de cuenca: 3.2 km²</li>
        <li>Longitud del cauce principal: 4.800 m</li>
        <li>Pendiente promedio: 8%</li>
        <li>Cobertura: 55% bosque secundario, 45% pastos</li>
        <li>Período de retorno: TR = 100 años</li>
      </ul>
      <p>El tiempo de concentración con Kirpich resulta: <strong>tc ≈ 42 minutos</strong>.</p>
      <p>El coeficiente C ponderado: C = 0.28×0.55 + 0.45×0.45 = <strong>C ≈ 0.36</strong>.</p>
      <p>La intensidad para tc = 42 min, TR = 100 años en la región Amazónica alta (dato IDF IDEAM estación Mocoa): <strong>I ≈ 87 mm/h</strong>.</p>
      <p>Caudal de diseño: Q = 0.36 × 87 × 3.2 / 3.6 = <strong>Q ≈ 28 m³/s</strong>.</p>
      <p>Este caudal sirve para dimensionar espolones, muros de gaviones y la sección del cauce encauzado.</p>

      <h2>Limitaciones del Método Racional y cuándo usar HEC-HMS</h2>
      <p>El Método Racional asume lluvia uniforme en tiempo y espacio, lo cual es una simplificación válida solo para cuencas pequeñas. Para cuencas mayores de 25 km², o cuando se requiere modelar la hidrógrafa completa (no solo el pico), es necesario recurrir a modelos como <strong>HEC-HMS</strong> con métodos de pérdidas SCS o Green-Ampt. En proyectos de obras de protección que requieren verificación del tránsito de crecientes, la combinación HEC-HMS + HEC-RAS es el estándar profesional en Colombia.</p>

      <p>En BIC Ingeniería realizamos <a href="/modelacion-hidraulica-colombia" style={{color:'#17A2B8', fontWeight:600}}>modelación hidráulica profesional</a> de quebradas y ríos en Colombia, incluyendo cálculo de caudales de diseño, modelación HEC-RAS 2D y diseño de obras de protección para proyectos en Putumayo, Eje Cafetero, Pacífico y todo el territorio nacional. Contáctenos para una propuesta técnica en 24 horas.</p>
    </>,
  },

  'espolones-obras-proteccion-riberas-rios-colombia': {
    title: 'Espolones y Obras de Protección de Riberas en Ríos Colombianos',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Tipos de espolones (permeable e impermeable), diseño hidráulico, materiales (gaviones, concreto ciclópeo) y normativa colombiana para protección de riberas en ríos.',
    keywords: 'espolones ríos Colombia, protección riberas fluviales, obras de encauzamiento Colombia, gaviones riberas Colombia',
    body: <>
      <p>La protección de riberas en ríos colombianos es una necesidad urgente en muchos municipios del país. La combinación de suelos aluviales erodables, pendientes pronunciadas y regímenes de lluvia bimodal intensa genera procesos de socavación lateral que amenazan vías, viviendas, acueductos y tierras productivas. Los <strong>espolones</strong> son una de las soluciones de ingeniería fluvial más utilizadas para controlar estos procesos.</p>

      <h2>¿Qué es un espolón y cómo funciona?</h2>
      <p>Un espolón es una estructura transversal al eje del río que se proyecta desde una de sus orillas hacia el canal activo. Su función principal es <strong>desviar las líneas de flujo</strong> hacia el centro del cauce, alejándolas de la orilla que se protege, y reducir la velocidad del agua en la zona marginal donde ocurre la erosión.</p>
      <p>Al deflectar el flujo, el espolón genera además una zona de aguas tranquilas (zona de remanso) entre espolones consecutivos donde se depositan sedimentos, favoreciendo la estabilización natural de la orilla. Un sistema bien diseñado de espolones permite que el río mismo construya su propia berma de protección.</p>

      <h2>Tipos de espolones: permeable vs impermeable</h2>
      <p>La clasificación fundamental de los espolones atiende a su permeabilidad:</p>
      <ul>
        <li><strong>Espolones impermeables:</strong> construidos en mampostería de piedra, concreto ciclópeo o gaviones compactos. Bloquean completamente el flujo lateral. Se usan cuando la velocidad de aproximación es muy alta y se requiere deflexión total del flujo.</li>
        <li><strong>Espolones permeables:</strong> construidos con pilotes de madera, acero o concreto, o con estructuras tipo árbol anclado. Permiten el paso de una fracción del caudal a través de su estructura, induciendo deposición de sedimentos entre los elementos y favoreciendo la revegetalización. Son más adecuados para ríos con alta carga de sedimentos finos.</li>
      </ul>
      <p>En Colombia, los espolones de <strong>gaviones</strong> (jaulas de malla hexagonal rellenas de roca) son los más utilizados por su flexibilidad ante asentamientos diferenciales, facilidad de construcción con materiales locales, costo moderado y comportamiento fluvial favorable.</p>

      <h2>Diseño hidráulico de espolones</h2>
      <p>El diseño hidráulico de un sistema de espolones incluye los siguientes parámetros:</p>
      <ul>
        <li><strong>Longitud del espolón (L):</strong> generalmente entre el 15% y el 25% del ancho del cauce activo en aguas altas. Para ríos menores a 50 m de ancho, L típica es 5 a 15 m.</li>
        <li><strong>Separación entre espolones (S):</strong> varía entre 2L y 4L. Separaciones menores reducen la erosión entre espolones pero aumentan el número de estructuras y el costo.</li>
        <li><strong>Ángulo de inclinación:</strong> 60° a 90° respecto al eje del río para espolones rectos. Ángulos menores de 90° (espolones en "L" o en "T") permiten mejor deflexión y menor turbulencia.</li>
        <li><strong>Cota de coronamiento:</strong> igual o superior al nivel de aguas ordinarias (período de retorno 2 años). La estructura puede ser sumergida en crecientes pero su cuerpo principal permanece funcional.</li>
        <li><strong>Protección del pie (apron):</strong> colchonetas de roca o enrocado para evitar la socavación local en la base del espolón, que es el modo de falla más frecuente.</li>
      </ul>

      <h2>Materiales utilizados en Colombia</h2>
      <p>Los materiales más comunes para espolones en ríos colombianos son:</p>
      <ul>
        <li><strong>Gaviones:</strong> la opción más utilizada. Malla hexagonal de alambre galvanizado o PVC-recubierto, rellena de roca local (tamaño mínimo 15 cm para evitar la arrastre). Ventaja: alta adaptabilidad y drenabiidad. Desventaja: corrosión acelerada en aguas ácidas o con alta conductividad.</li>
        <li><strong>Concreto ciclópeo:</strong> mezcla de concreto con fragmentos de roca de tamaño grueso (≥30 cm). Más rígido que los gaviones, se usa en ríos con alta energía y donde los gaviones han fallado por colapso de malla.</li>
        <li><strong>Enrocado libre:</strong> amontonamiento de roca de gran tamaño directamente sobre la ribera. La solución más económica pero requiere roca de tamaño adecuado (D50 calculado con fórmulas de Shields según el esfuerzo cortante del flujo).</li>
        <li><strong>Pilotes de madera tratada:</strong> usados en ríos con baja energía y para espolones permeables temporales. La madera rolliza de eucalipto tratado con CCA es la más utilizada en el Eje Cafetero y el Pacífico.</li>
      </ul>

      <h2>Marco normativo colombiano</h2>
      <p>El diseño y construcción de obras de protección fluvial en Colombia está regulado por:</p>
      <ul>
        <li><strong>Decreto 1076 de 2015:</strong> define el régimen de permisos para ocupación de cauces y autorización de obras hidráulicas. Toda obra de protección en cauces requiere autorización de la Corporación Autónoma Regional (CAR) competente.</li>
        <li><strong>Guías INVIAS:</strong> el Manual de Drenaje para Carreteras incluye criterios para obras de protección fluvial en infraestructura vial.</li>
        <li><strong>Normativa municipal:</strong> varios municipios con POMCA formulado tienen restricciones específicas sobre el tipo de obras permitidas en la ronda hídrica.</li>
      </ul>

      <p>En BIC Ingeniería ofrecemos el diseño completo de sistemas de <a href="/modelacion-hidraulica-colombia" style={{color:'#17A2B8', fontWeight:600}}>modelación hidráulica y obras de protección de riberas</a> en Colombia, incluyendo modelación HEC-RAS 2D para verificación hidráulica, memorias de cálculo COPNIA y gestión del permiso de ocupación de cauce ante la CAR. Solicite su propuesta técnica.</p>
    </>,
  },

  'zonificacion-riesgo-inundacion-municipios-colombia': {
    title: 'Zonificación de Riesgo de Inundación en Municipios Colombianos',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Marco legal (Ley 1523/2012, POMCA), metodología HEC-RAS 2D para mapas de amenaza por inundación y uso en el POT municipal. Categorías alta, media y baja.',
    keywords: 'zonificación riesgo inundación Colombia, POMCA amenaza hídrica, zonas inundación municipios Colombia, HEC-RAS 2D Colombia',
    body: <>
      <p>Colombia es uno de los países con mayor exposición a inundaciones en América Latina. Según el IDEAM, el 40% del territorio nacional presenta algún nivel de amenaza por inundación, y cada año las crecientes de ríos y quebradas generan pérdidas económicas de miles de millones de pesos en municipios de todos los departamentos. La <strong>zonificación del riesgo de inundación</strong> es el instrumento técnico que permite planificar el uso del suelo y reducir la exposición de la población.</p>

      <h2>Marco legal: Ley 1523 de 2012 y POMCA</h2>
      <p>La <strong>Ley 1523 de 2012</strong> (Política Nacional de Gestión del Riesgo de Desastres) es el marco jurídico fundamental. Esta ley establece que la gestión del riesgo es un proceso social orientado a la formulación, ejecución, seguimiento y evaluación de políticas, estrategias, planes, programas, regulaciones, instrumentos, medidas y acciones permanentes para el conocimiento y la reducción del riesgo.</p>
      <p>Para los municipios colombianos, los principales instrumentos de zonificación de amenaza por inundación son:</p>
      <ul>
        <li><strong>POMCA (Plan de Ordenación y Manejo de Cuencas Hidrográficas):</strong> elaborado por las CAR según el Decreto 1640 de 2012, incluye la zonificación ambiental de la cuenca con categorización de zonas de amenaza por inundación. Una vez adoptado, el POMCA determina las áreas de protección y restricción de uso que los municipios deben incorporar en sus POT.</li>
        <li><strong>Decreto 1807 de 2014:</strong> compilado en el Decreto 1077 de 2015, establece la obligación de incorporar la gestión del riesgo en los procesos de revisión y ajuste de los POT. Específicamente exige estudios de amenaza de detalle para licencias de urbanismo en zonas de alto riesgo.</li>
        <li><strong>Ley 388 de 1997:</strong> define el ordenamiento territorial como función pública orientada a lograr el desarrollo socioeconómico en armonía con el medio ambiente y la gestión del riesgo.</li>
      </ul>

      <h2>Metodología: HEC-RAS 2D para mapas de amenaza</h2>
      <p>La metodología estándar en Colombia para elaborar mapas de amenaza por inundación a escala de detalle (1:5.000 o mayor) combina:</p>
      <ol>
        <li><strong>Análisis hidrológico:</strong> determinación de caudales para diferentes períodos de retorno (TR 2.33, 5, 10, 50 y 100 años) usando análisis de frecuencias estadísticas (Gumbel, Log-Pearson III, Log-normal) sobre registros de estaciones IDEAM, o modelación lluvia-escorrentía con HEC-HMS cuando los registros son insuficientes.</li>
        <li><strong>Modelación hidráulica bidimensional (HEC-RAS 2D):</strong> el modelo 2D permite representar el comportamiento del flujo en la llanura de inundación con mucho más detalle que el modelo 1D. Requiere un modelo de terreno de alta resolución (LIDAR o fotogrametría con dron, resolución ≤1 m) y datos de rugosidad del terreno según el uso del suelo.</li>
        <li><strong>Generación de mapas de amenaza:</strong> a partir de los resultados de HEC-RAS 2D se extraen las manchas de inundación y los parámetros de amenaza (tirante h y velocidad v) para cada período de retorno. La amenaza se clasifica combinando h y v en una matriz de amenaza.</li>
      </ol>

      <h2>Categorías de amenaza y su significado</h2>
      <p>La zonificación de amenaza por inundación en Colombia classifica el territorio en tres categorías:</p>
      <ul>
        <li><strong>Amenaza Alta:</strong> tirante h &gt; 1.0 m o velocidad v &gt; 1.0 m/s, o ambos. Implica riesgo para la vida humana y pérdida total de estructuras de baja resistencia. El POT debe prohibir la urbanización y asentamiento en estas zonas.</li>
        <li><strong>Amenaza Media:</strong> h entre 0.30 y 1.0 m con velocidades moderadas. Se permiten usos compatibles (agricultura, parques urbanos) con restricciones para vivienda e industria.</li>
        <li><strong>Amenaza Baja:</strong> h &lt; 0.30 m con velocidades bajas. El uso puede ser urbanizable con medidas de mitigación (cotas mínimas de construcción, diseños adaptados).</li>
      </ul>

      <h2>Uso en el POT municipal</h2>
      <p>Una vez elaborados los mapas de amenaza y riesgo, el municipio los incorpora en el componente de gestión del riesgo del POT. Esto tiene consecuencias directas para la planificación urbana:</p>
      <ul>
        <li>Zonas de amenaza alta se clasifican como suelo de protección, impidiendo la expedición de licencias de construcción y urbanismo.</li>
        <li>Se establecen cotas mínimas de construcción (pisos mínimos sobre terreno) en zonas de amenaza media.</li>
        <li>Se delimitan retiros de protección adicionales a los establecidos por las CAR.</li>
        <li>Se identifican áreas prioritarias para reasentamiento de población en zonas de riesgo no mitigable.</li>
      </ul>

      <p>En BIC Ingeniería somos expertos en <a href="/modelacion-hidraulica-colombia" style={{color:'#17A2B8', fontWeight:600}}>modelación hidráulica HEC-RAS 2D para zonificación de amenaza</a> en municipios colombianos. Elaboramos los estudios requeridos por el Decreto 1807/2014 y el POMCA, con memorias de cálculo COPNIA y entregables listos para incorporar en el POT. Contáctenos para conocer costos y plazos.</p>
    </>,
  },

  // ─── CLUSTER 2: Diseño de Acueductos y Bombeo ────────────────────────────────

  'diseno-acueducto-rural-colombia-paso-a-paso': {
    title: 'Diseño de Acueducto Rural en Colombia: Guía Paso a Paso',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Diseño de Acueductos',
    metaDesc: 'Guía paso a paso para diseñar un acueducto rural en Colombia según RAS 2017: dotación per cápita, caudales de diseño, captación, red de distribución y cloración por goteo.',
    keywords: 'diseño acueducto rural Colombia, RAS 2000 acueducto rural, dotación agua potable rural Colombia, acueducto veredal Colombia',
    body: <>
      <p>Más de 7 millones de colombianos en zonas rurales carecen de acceso a agua potable de calidad. El diseño técnico de acueductos rurales es, por tanto, una de las actividades de mayor impacto social en la ingeniería hidráulica del país. El <strong>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017)</strong> es la norma que regula todos los aspectos del diseño, desde la dotación per cápita hasta los materiales de las tuberías.</p>

      <h2>Paso 1: Determinación de la dotación per cápita</h2>
      <p>La dotación neta (Dn) es el volumen de agua por habitante por día que debe garantizar el acueducto para satisfacer las necesidades básicas. El RAS 2017 establece dotaciones según el nivel de complejidad del sistema:</p>
      <ul>
        <li><strong>Nivel Bajo (menos de 2.500 habitantes):</strong> Dn = 100 L/hab·día</li>
        <li><strong>Nivel Medio (2.500 a 25.000 habitantes):</strong> Dn = 120 L/hab·día</li>
        <li><strong>Nivel Alto (más de 25.000 habitantes):</strong> Dn = 150 a 200 L/hab·día</li>
      </ul>
      <p>Para municipios rurales de nivel bajo en departamentos cálidos, el RAS permite ajustar la dotación hasta 130 L/hab·día por condiciones climáticas. La dotación bruta (Db) se obtiene sumando las pérdidas de la red: Db = Dn / (1 - %p), donde %p es el índice de pérdidas típico (20–30% en sistemas rurales nuevos).</p>

      <h2>Paso 2: Cálculo de caudales de diseño</h2>
      <p>Con la dotación bruta y la población de diseño (proyección a 25 años con tasa de crecimiento DANE) se calculan los caudales de diseño:</p>
      <ul>
        <li><strong>Caudal Medio Diario (QMD):</strong> QMD = Pob × Db / 86.400 (en L/s)</li>
        <li><strong>Caudal Máximo Diario (QMMD):</strong> QMMD = QMD × K1 (K1 = 1.30 nivel bajo)</li>
        <li><strong>Caudal Máximo Horario (QMH):</strong> QMH = QMD × K2 (K2 = 2.00 nivel bajo)</li>
      </ul>
      <p>El QMMD se usa para diseñar la aducción y conducción (desde la captación hasta el tanque de almacenamiento). El QMH se usa para diseñar la red de distribución.</p>

      <h2>Paso 3: Captación de nacimiento (fuente típica rural)</h2>
      <p>La captación de nacimiento es la fuente más utilizada en zonas rurales andinas y de piedemonte. Consiste en una <strong>cámara de recolección</strong> construida sobre el punto de afloramiento, un filtro de grava para impedir el ingreso de sedimentos, y una tubería de rebose para el manejo de excedentes. Los elementos básicos son:</p>
      <ul>
        <li>Cámara húmeda con rejilla o malla de protección</li>
        <li>Cámara seca (caseta de protección) con candado</li>
        <li>Tubería de salida de la conducción</li>
        <li>Tubería de rebose y alivio</li>
        <li>Vallado perimetral de protección del área de recarga</li>
      </ul>
      <p>El RAS 2017 exige que la captación se diseñe para el QMMD más una reserva de 20% para el crecimiento de la demanda.</p>

      <h2>Paso 4: Conducción y aducción</h2>
      <p>La conducción transporta el agua desde la captación hasta el tanque de almacenamiento. Puede ser por gravedad (lo más frecuente en zonas de montaña) o por bombeo. El dimensionamiento hidráulico se hace con la ecuación de Hazen-Williams (para flujo a presión) o Manning (para canales abiertos):</p>
      <p>Para tuberías PVC a presión: <strong>Q = 0.2785 · C · D^2.63 · S^0.54</strong></p>
      <p>Donde C es el coeficiente de rugosidad (C = 150 para PVC nuevo), D es el diámetro interno en metros y S es la pendiente hidráulica. El diámetro mínimo en conducción es 1" (25 mm) para permitir la limpieza.</p>

      <h2>Paso 5: Red de distribución</h2>
      <p>La red de distribución lleva el agua desde el tanque hasta cada vivienda. El diseño debe garantizar presiones mínimas de 10 m.c.a. y máximas de 60 m.c.a. en cualquier punto de la red. Para redes rurales sencillas se usa el método de las tuberías en serie y paralelo; para redes más complejas se recurre a modelación en EPANET.</p>
      <p>Los diámetros típicos en redes rurales van de ¾" a 2" dependiendo del número de conexiones servidas. La tubería más usada es PVC RDE 21 o RDE 32 según la presión de trabajo.</p>

      <h2>Paso 6: Desinfección con cloración por goteo</h2>
      <p>El RAS 2017 y la Resolución 2115 de 2007 exigen que el agua potable tenga un residual de cloro libre entre 0.3 y 2.0 mg/L en cualquier punto de la red. Para acueductos rurales, el sistema de <strong>cloración por goteo con hipoclorito de sodio</strong> es el más económico y fácil de operar. Consiste en un tanque de solución clorada conectado a un tubo gotero que libera la dosis calculada en función del caudal y la dosis de cloro requerida (típicamente 2 mg/L en la entrada del tanque para garantizar el residual en la red).</p>

      <p>En BIC Ingeniería elaboramos el diseño completo de <a href="/servicios/diseno-acueductos" style={{color:'#17A2B8', fontWeight:600}}>acueductos rurales y municipales en Colombia</a>, con todos los documentos requeridos por la CAR y la Curaduría: memoria de cálculo, planos hidráulicos, especificaciones técnicas y presupuesto. Contáctenos para una consulta gratuita.</p>
    </>,
  },

  'seleccion-bomba-centrifuga-acueducto-colombia': {
    title: 'Selección de Bomba Centrífuga para Acueductos en Colombia',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Diseño de Acueductos',
    metaDesc: 'Cómo seleccionar una bomba centrífuga para acueductos en Colombia: altura manométrica total, curva del sistema vs curva de la bomba, NPSH, eficiencia y ejemplo práctico.',
    keywords: 'selección bomba centrífuga acueducto, curva del sistema bomba, punto de operación bomba, NPSH bomba centrifuga',
    body: <>
      <p>Cuando el acueducto no puede operar completamente por gravedad — porque la fuente está a menor elevación que la zona a servir, o porque se requiere presión adicional en la red — se hace necesario incorporar un sistema de bombeo. La <strong>correcta selección de la bomba centrífuga</strong> es fundamental para garantizar la eficiencia energética, la vida útil del equipo y el cumplimiento de los caudales y presiones exigidos por el RAS 2017.</p>

      <h2>Parámetros de diseño del sistema de bombeo</h2>
      <p>Antes de seleccionar la bomba es necesario definir con precisión:</p>
      <ul>
        <li><strong>Caudal de diseño (Q):</strong> para sistemas de acueducto se dimensiona para el Caudal Máximo Diario (QMMD). En sistemas con almacenamiento, la bomba puede operar a QMD si el tanque compensa las variaciones horarias.</li>
        <li><strong>Altura manométrica total (Hm):</strong> la diferencia de nivel geométrica más las pérdidas de carga en la tubería de impulsión.</li>
        <li><strong>Características del fluido:</strong> temperatura, densidad y presencia de sólidos en suspensión que puedan afectar el material del rodete.</li>
      </ul>

      <h2>Cálculo de la altura manométrica total</h2>
      <p>La altura manométrica total es la energía por unidad de peso que debe proporcionar la bomba. Se calcula como:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>Hm = Hgeo + hf_asp + hf_imp + hv</p>
      <p>Donde:</p>
      <ul>
        <li><strong>Hgeo:</strong> diferencia de altura geométrica entre el nivel de succión y el punto de descarga (m)</li>
        <li><strong>hf_asp:</strong> pérdidas de carga en la tubería de succión (m) — incluir accesorios</li>
        <li><strong>hf_imp:</strong> pérdidas de carga en la tubería de impulsión (m)</li>
        <li><strong>hv:</strong> presión de velocidad en la descarga (generalmente pequeña, ≤0.5 m)</li>
      </ul>
      <p>Las pérdidas de carga se calculan con Hazen-Williams. Para la selección definitiva se debe incluir un factor de seguridad del 10–15% sobre las pérdidas calculadas para compensar el envejecimiento de las tuberías.</p>

      <h2>Curva del sistema vs curva de la bomba</h2>
      <p>La <strong>curva del sistema</strong> relaciona el caudal con la altura manométrica requerida. Tiene forma parabólica: a mayor caudal, mayores pérdidas de carga y mayor Hm requerida. La curva del sistema se traza para varios valores de Q:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>Hm(Q) = Hgeo + R · Q²</p>
      <p>Donde R es la resistencia hidráulica del sistema (s²/m⁵) que se calcula con Hazen-Williams.</p>
      <p>La <strong>curva de la bomba</strong> (Q-H) la suministra el fabricante y representa la altura que puede entregar la bomba a diferentes caudales. El <strong>punto de operación</strong> es la intersección de ambas curvas: en ese punto la bomba opera en equilibrio con el sistema.</p>
      <p>Para la selección, el punto de operación debe estar dentro del rango eficiente de la bomba (generalmente entre el 75% y el 115% del caudal de diseño del fabricante) y la eficiencia en ese punto debe ser superior al 65% para evitar sobrecostos energéticos.</p>

      <h2>NPSH disponible: verificación de cavitación</h2>
      <p>El <strong>NPSH disponible (NPSHd)</strong> es la presión absoluta en la succión de la bomba, expresada en metros de columna de agua. Si NPSHd es menor que el NPSH requerido (NPSHr) por la bomba, el agua en la succión entra en ebullición y se produce <strong>cavitación</strong>, que destruye el rodete y los sellos en poco tiempo.</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>NPSHd = (Patm / γ) + Hs_geo - hf_asp - (Pv / γ)</p>
      <p>Donde Patm es la presión atmosférica (varía con la altitud — en Bogotá es ≈8.5 m.c.a., en Manizales ≈8.2 m.c.a.), Hs_geo es la altura de succión positiva o negativa, hf_asp las pérdidas en la succión y Pv la presión de vapor del agua a la temperatura de operación.</p>
      <p>El RAS 2017 y los catálogos de los fabricantes exigen que: <strong>NPSHd ≥ NPSHr + 0.5 m</strong> (margen de seguridad).</p>

      <h2>Ejemplo práctico de selección</h2>
      <p>Para un acueducto veredal en Calarcá, Quindío, con los siguientes datos:</p>
      <ul>
        <li>QMMD = 1.8 L/s = 0.0018 m³/s</li>
        <li>Hgeo = 42 m (tanque a 42 m sobre el nivel del río)</li>
        <li>Longitud tubería impulsión: 380 m, DN 63 mm PVC</li>
        <li>Altitud del sitio: 1.500 m.s.n.m.</li>
      </ul>
      <p>hf_imp (Hazen-Williams, C=150): ≈ 8.3 m | hf_asp ≈ 1.2 m</p>
      <p><strong>Hm = 42 + 1.2 + 8.3 = 51.5 m → seleccionar bomba para Q = 2 L/s, Hm = 57 m (con margen 10%)</strong></p>
      <p>En catálogos estándar (Grundfos, KSB, Pedrollo) esta combinación corresponde a una bomba monoetapa de 1 HP o 1.5 HP con rodete de acero inoxidable para agua potable.</p>

      <p>En BIC Ingeniería diseñamos sistemas de bombeo completos para <a href="/servicios/diseno-acueductos" style={{color:'#17A2B8', fontWeight:600}}>acueductos rurales y municipales en Colombia</a>, incluyendo selección de equipos, diseño eléctrico del sistema de control y arranque, y especificaciones técnicas para la contratación. Solicite propuesta.</p>
    </>,
  },

  'redes-distribucion-agua-potable-calculos-hidraulicos': {
    title: 'Redes de Distribución de Agua Potable: Cálculos Hidráulicos con EPANET',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Diseño de Acueductos',
    metaDesc: 'Modelación de redes de distribución de agua potable con EPANET: nodos de demanda, tuberías PVC y HDD, presiones mínimas RAS 2017 y calibración del modelo hidráulico.',
    keywords: 'EPANET acueducto Colombia, redes distribución agua potable cálculo, presiones mínimas RAS 2017, modelación red acueducto EPANET',
    body: <>
      <p>El diseño de la red de distribución de agua potable es la fase más compleja del diseño de un sistema de acueducto. A diferencia de la conducción (flujo unidireccional), la red de distribución tiene múltiples nodos de demanda, cambios de dirección y circuitos cerrados que generan sistemas de ecuaciones no lineales. El software <strong>EPANET</strong>, desarrollado por la EPA de Estados Unidos y de uso libre, es la herramienta estándar para modelar estas redes en Colombia y el mundo.</p>

      <h2>Principios hidráulicos de redes a presión</h2>
      <p>Una red de distribución de agua potable opera bajo dos principios fundamentales:</p>
      <ul>
        <li><strong>Continuidad en los nodos:</strong> la suma de caudales que entran a un nodo es igual a la suma de caudales que salen (primera ley de Kirchhoff aplicada a fluidos).</li>
        <li><strong>Conservación de energía en los circuitos:</strong> la suma algebraica de pérdidas de carga en un circuito cerrado es cero (segunda ley de Kirchhoff para fluidos).</li>
      </ul>
      <p>EPANET resuelve estas ecuaciones iterativamente usando el método de Hardy-Cross o el método del gradiente, asegurando la convergencia del sistema en pocas iteraciones incluso para redes grandes.</p>

      <h2>Componentes del modelo en EPANET</h2>
      <p>Un modelo de red en EPANET incluye:</p>
      <ul>
        <li><strong>Nodos de demanda:</strong> representan los puntos de consumo (urbanizaciones, viviendas, industrias). La demanda se asigna en L/s. Para diseño se usa la demanda pico horaria (QMH).</li>
        <li><strong>Nodo de depósito (tanque o embalse):</strong> el punto de entrada de agua a la red con nivel piezométrico fijo o variable.</li>
        <li><strong>Tuberías:</strong> cada tramo de tubería se caracteriza por longitud, diámetro, material (rugosidad Hazen-Williams C o Darcy-Weisbach ε) y estado (abierta o cerrada).</li>
        <li><strong>Válvulas:</strong> válvulas reguladoras de presión (PRV), válvulas reguladoras de caudal (FCV), válvulas de retención (check valve).</li>
        <li><strong>Bombas:</strong> introducidas con su curva Q-H para modelar sistemas con estaciones de bombeo.</li>
      </ul>

      <h2>Materiales de tubería: PVC y HDPE (HDD)</h2>
      <p>En Colombia, los materiales predominantes en redes de distribución de agua potable son:</p>
      <ul>
        <li><strong>PVC RDE (RDE 21, RDE 26, RDE 32, RDE 41):</strong> la opción más económica y de mayor uso. El RDE (Relación Diámetro-Espesor) define la presión de trabajo: RDE 21 permite mayor presión que RDE 41. Coeficiente Hazen-Williams: C = 150 (nuevo), C = 120–130 (en servicio).</li>
        <li><strong>HDPE instalado por HDD (Horizontal Directional Drilling):</strong> el polietileno de alta densidad es la mejor opción para instalaciones sin zanja bajo vías pavimentadas, ríos y obstáculos físicos. Mayor vida útil (50+ años) y mayor resistencia a golpe de ariete. Coeficiente C = 150.</li>
        <li><strong>Hierro dúctil:</strong> usado en grandes diámetros (≥6") y en redes expuestas a presiones elevadas o terrenos agresivos. Más costoso pero de mayor durabilidad en condiciones difíciles.</li>
      </ul>

      <h2>Presiones mínimas y máximas según RAS 2017</h2>
      <p>El RAS 2017 Título B establece los límites de presión que debe garantizar la red de distribución en cualquier condición de operación:</p>
      <ul>
        <li><strong>Presión mínima:</strong> 10 m.c.a. en el nodo más desfavorable durante la hora de máxima demanda.</li>
        <li><strong>Presión máxima:</strong> 60 m.c.a. en cualquier nodo de la red. Presiones superiores generan fugas excesivas y aumentan el riesgo de rotura de tuberías.</li>
        <li><strong>Para zonas de alta presión:</strong> se instalan válvulas reguladoras de presión (PRV) que reducen la presión aguas abajo a un valor de ajuste preestablecido.</li>
      </ul>
      <p>En EPANET, los resultados de presión en cada nodo se verifican contra estos límites. Los nodos con presión inferior a 10 m.c.a. indican que la tubería que los alimenta es insuficiente (diámetro a aumentar) o que se requiere una bomba de presurización.</p>

      <h2>Calibración del modelo</h2>
      <p>Un modelo de EPANET bien construido no es suficiente si no ha sido <strong>calibrado</strong> con mediciones de campo. La calibración consiste en ajustar los parámetros del modelo (rugosidades, demandas, estado de válvulas) hasta que las presiones y caudales simulados coincidan con los medidos. El proceso requiere:</p>
      <ul>
        <li>Medición de presiones en puntos representativos de la red con manómetros de aguja o data loggers de presión.</li>
        <li>Aforo de caudales en ramas principales con caudalímetro ultrasónico o magnético.</li>
        <li>Ajuste iterativo de los coeficientes C de Hazen-Williams hasta minimizar el error entre simulación y medición (error ≤10%).</li>
      </ul>

      <p>En BIC Ingeniería modelamos y calibramos redes de distribución de <a href="/servicios/diseno-acueductos" style={{color:'#17A2B8', fontWeight:600}}>acueductos con EPANET</a> para municipios y constructoras en Colombia, cumpliendo los requerimientos del RAS 2017 y la Resolución 0330. Solicite su propuesta técnica.</p>
    </>,
  },

  // ─── CLUSTER 3: Estudio de Suelos ────────────────────────────────────────────

  'ensayo-spt-interpretacion-capacidad-portante': {
    title: 'Ensayo SPT: Interpretación y Cálculo de Capacidad Portante',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Geotecnia',
    metaDesc: 'Procedimiento ASTM D1586 del ensayo SPT, correlaciones N-SPT con ángulo de fricción y cohesión, cálculo de capacidad portante con Terzaghi y factores de seguridad NSR-10.',
    keywords: 'ensayo SPT Colombia, N-SPT capacidad portante, cimentación superficial Colombia, NSR-10 geotecnia',
    body: <>
      <p>El <strong>Ensayo de Penetración Estándar (SPT)</strong> es la prueba geotécnica de campo más utilizada en Colombia y en el mundo para caracterizar la resistencia de los suelos y definir las condiciones de cimentación. Su popularidad se debe a su bajo costo, facilidad de ejecución y la gran cantidad de correlaciones empíricas disponibles que permiten estimar propiedades del suelo a partir del número de golpes N-SPT.</p>

      <h2>Procedimiento del ensayo: ASTM D1586</h2>
      <p>El ensayo SPT se ejecuta durante la perforación de un sondeo geotécnico. El procedimiento según la norma <strong>ASTM D1586</strong> es:</p>
      <ol>
        <li>Se baja el muestreador partido (split spoon sampler, diámetro externo 51 mm, interno 35 mm) hasta el fondo del sondeo.</li>
        <li>Se hace caer un martillo de 63.5 kg desde una altura de 76 cm, golpeando la cabeza de perforación.</li>
        <li>Se cuentan los golpes necesarios para penetrar el muestreador en tres intervalos de 15 cm cada uno.</li>
        <li>El valor N-SPT es la suma de golpes del segundo y tercer intervalo (los primeros 15 cm son de asentamiento y no se cuentan).</li>
        <li>El ensayo se repite a cada metro o en las profundidades indicadas en el plan de exploración.</li>
      </ol>
      <p>En Colombia, los sondeos SPT se ejecutan con equipo rotatorio y sistemas de lavado (agua o lodo bentonítico) para mantener el fondo del sondeo limpio. El número de golpes debe corregirse por eficiencia del sistema de percusión: <strong>N60 = N_campo × ER/60</strong> (donde ER es la eficiencia real del martillo, típicamente 60–80% en equipos colombianos).</p>

      <h2>Correlaciones N-SPT con propiedades del suelo</h2>
      <p>Las correlaciones empíricas más usadas en Colombia para interpretar el N-SPT son:</p>
      <ul>
        <li><strong>Para suelos granulares (arenas y gravas):</strong> la correlación de Peck, Hanson y Thornburn relaciona N-SPT con el ángulo de fricción interna φ: φ (°) ≈ 27.1 + 0.3·N - 0.00054·N². Para N = 15, φ ≈ 30°; para N = 30, φ ≈ 37°.</li>
        <li><strong>Para arcillas:</strong> la correlación con la resistencia al corte no drenado Su: Su (kPa) ≈ 7 × N (en arcillas normalmente consolidadas). Para arcillas blandas de Bogotá con N = 2–5, Su = 14–35 kPa.</li>
        <li><strong>Clasificación general por N-SPT:</strong> N &lt; 4 (suelo muy blando o suelto), N = 4–10 (blando o suelto), N = 10–30 (medio), N = 30–50 (denso o firme), N &gt; 50 (muy denso o duro, el ensayo se detiene por rechazo).</li>
      </ul>

      <h2>Cálculo de capacidad portante con Terzaghi</h2>
      <p>Para cimentaciones superficiales (zapatas corridas y aisladas con profundidad Df &lt; 3B, donde B es el ancho de la zapata), la ecuación de <strong>Terzaghi (1943)</strong> es el método más usado en Colombia:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>qu = c·Nc + γ·Df·Nq + 0.5·γ·B·Nγ</p>
      <p>Donde c es la cohesión del suelo (kPa), γ la densidad del suelo (kN/m³), Df la profundidad de cimentación (m), B el ancho de la zapata (m) y Nc, Nq, Nγ son factores de capacidad portante que dependen del ángulo de fricción φ.</p>
      <p>La <strong>capacidad portante admisible</strong> se obtiene dividiendo la capacidad portante última por el factor de seguridad:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>q_adm = qu / FS</p>

      <h2>Factores de seguridad según NSR-10</h2>
      <p>El <strong>NSR-10 Título H</strong> (Estudios Geotécnicos) establece los factores de seguridad mínimos para el diseño de cimentaciones en Colombia:</p>
      <ul>
        <li><strong>FS = 3.0:</strong> para cargas estáticas permanentes (carga muerta + carga viva reducida).</li>
        <li><strong>FS = 2.0:</strong> para combinaciones de carga que incluyen cargas de viento o sismo (análisis sísmico).</li>
        <li><strong>FS = 1.5:</strong> para condiciones de emergencia o análisis de estabilidad de taludes bajo condición sísmica.</li>
      </ul>
      <p>Para la mayoría de edificaciones residenciales en Colombia, la capacidad portante admisible con FS = 3.0 varía entre 50 kPa (suelos blandos de Bogotá) y 400 kPa (suelos residuales de Medellín o rocas meteorizadas en el Eje Cafetero).</p>

      <h2>Número mínimo de sondeos por tipo de proyecto</h2>
      <p>El NSR-10 Título H establece el número mínimo de sondeos según el tamaño del proyecto y las condiciones del suelo. Para edificios de 1 a 5 pisos se requieren mínimo 3 sondeos; para torres de más de 10 pisos se exigen mínimo 5 sondeos con profundidades que alcancen la roca o suelo competente más 5 m adicionales.</p>

      <p>En BIC Ingeniería realizamos estudios de suelos completos para <a href="/servicios/geotecnia" style={{color:'#17A2B8', fontWeight:600}}>geotecnia y cimentaciones en Colombia</a>, con ensayos SPT, análisis de laboratorio, informe geotécnico completo firmado COPNIA y recomendaciones de cimentación. Solicite presupuesto sin costo.</p>
    </>,
  },

  'clasificacion-suelos-sucs-colombia-ejemplos': {
    title: 'Clasificación de Suelos SUCS en Colombia: Guía con Ejemplos',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Geotecnia',
    metaDesc: 'Sistema Unificado de Clasificación de Suelos (SUCS) aplicado a suelos colombianos: granulometría, límites de Atterberg, árbol de decisión y ejemplos de arcillas blandas de Bogotá y suelos residuales de Medellín.',
    keywords: 'clasificación suelos SUCS Colombia, granulometría suelos, límites de Atterberg, suelos residuales Colombia',
    body: <>
      <p>La clasificación de suelos es el primer paso en cualquier estudio geotécnico. Permite al ingeniero comunicar las características de un suelo de manera estandarizada y tomar decisiones informadas sobre el tipo de cimentación, el riesgo de asentamiento y la necesidad de mejoramiento del suelo. El <strong>Sistema Unificado de Clasificación de Suelos (SUCS)</strong>, adoptado como estándar en Colombia a través del NSR-10, es el sistema más completo y universalmente aceptado.</p>

      <h2>Ensayos de laboratorio requeridos</h2>
      <p>Para clasificar un suelo con el SUCS se requieren dos tipos de ensayos:</p>
      <ul>
        <li><strong>Granulometría (ASTM D422):</strong> determina la distribución del tamaño de partículas. Para suelos gruesos (gravas y arenas) se usa tamizado en seco o lavado. Para suelos finos con partículas menores de 0.075 mm se usa el método del hidrómetro.</li>
        <li><strong>Límites de Atterberg (ASTM D4318):</strong> determinan el Límite Líquido (LL) y el Límite Plástico (LP) de los suelos finos. El Índice de Plasticidad IP = LL - LP indica la susceptibilidad del suelo a cambios de volumen con la humedad.</li>
      </ul>

      <h2>Árbol de decisión SUCS</h2>
      <p>La clasificación SUCS sigue un árbol de decisión:</p>
      <ol>
        <li>¿El suelo retiene más del 50% en el tamiz No. 200 (0.075 mm)? → <strong>Suelo grueso (G o S)</strong></li>
        <li>¿El suelo retiene más del 50% en el tamiz No. 4 (4.75 mm) dentro de los suelos gruesos? → <strong>Grava (G)</strong> | Si no → <strong>Arena (S)</strong></li>
        <li>¿Pasa menos del 5% por el tamiz No. 200? → <strong>Bien graduada (W) o Mal graduada (P)</strong> según los coeficientes Cu y Cc</li>
        <li>¿Pasa más del 12% por el tamiz No. 200? → <strong>Con limos (M) o Con arcilla (C)</strong> según el diagrama de plasticidad de Casagrande</li>
        <li>Para suelos finos (más del 50% pasa el tamiz No. 200): se usa LL y IP para clasificar en Limo (M), Arcilla (C) o Limo orgánico / Arcilla orgánica (O), con sufijo L (baja plasticidad, LL &lt; 50) o H (alta plasticidad, LL &gt; 50).</li>
      </ol>

      <h2>Ejemplo 1: Arcillas blandas de Bogotá (CH)</h2>
      <p>Los suelos lacustres de la Sabana de Bogotá (formación geológica cuaternaria de la antigua laguna) son ampliamente conocidos en la geotecnia colombiana por su comportamiento problemático:</p>
      <ul>
        <li>% pasa tamiz No. 200: 92% → suelo fino</li>
        <li>Límite Líquido (LL): 65–120%</li>
        <li>Índice de Plasticidad (IP): 35–65%</li>
        <li>Clasificación: por encima de la Línea A en el diagrama de Casagrande → <strong>CH (Arcilla de Alta Plasticidad)</strong></li>
      </ul>
      <p>Las arcillas CH de Bogotá tienen resistencia al corte no drenado Su = 20–60 kPa en estado natural y son altamente compresibles, generando asentamientos diferenciales en edificaciones sin cimentación profunda. El NSR-10 exige en zonas con estas arcillas al menos sondeos hasta 20 m de profundidad.</p>

      <h2>Ejemplo 2: Suelos residuales de Medellín (SC/SM)</h2>
      <p>Los suelos residuales de Medellín derivan de la meteorización de rocas ígneas (diabasas, dunitas, serpentinitas). Son suelos heterogéneos con alta variabilidad lateral:</p>
      <ul>
        <li>% grava: 5–15%, % arena: 40–60%, % finos: 25–45%</li>
        <li>LL: 30–45%, IP: 8–18%</li>
        <li>Clasificación: <strong>SC (Arena con Arcilla)</strong> o <strong>SM (Arena con Limo)</strong> según el IP y la posición respecto a la Línea A</li>
      </ul>
      <p>Estos suelos tienen mejor capacidad portante que las arcillas bogotanas (q_adm = 100–250 kPa) pero son susceptibles a la licuación cuando están saturados y el N-SPT es bajo (N &lt; 10).</p>

      <h2>Ejemplo 3: Suelos volcánicos del Eje Cafetero (MH)</h2>
      <p>Las cenizas volcánicas que cubren Caldas, Risaralda y Quindío tienen una estructura metaestable y comportamiento geotécnico particular:</p>
      <ul>
        <li>% pasa No. 200: 60–85%</li>
        <li>LL: 50–100%, IP: 10–30%</li>
        <li>Por debajo de la Línea A en el diagrama de Casagrande → <strong>MH (Limo de Alta Plasticidad)</strong></li>
      </ul>
      <p>Son suelos sensibles al colapso por humedecimiento (suelos colapsibles) y requieren diseños geotécnicos especiales, especialmente en zonas con variaciones estacionales marcadas de precipitación.</p>

      <p>En BIC Ingeniería realizamos estudios geotécnicos con clasificación SUCS, análisis de laboratorio y recomendaciones de cimentación para <a href="/servicios/geotecnia" style={{color:'#17A2B8', fontWeight:600}}>proyectos de construcción en todo Colombia</a>. Entrega de informe completo en 10 días hábiles. Solicite cotización.</p>
    </>,
  },

  'estudio-suelos-edificio-multifamiliar-requisitos-nsr10': {
    title: 'Estudio de Suelos Edificio Multifamiliar Colombia 2026: sondeos NSR-10 y costos reales',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Geotecnia',
    metaDesc: 'Cuántos sondeos exige NSR-10 Título H para edificios multifamiliares en Colombia, a qué profundidad y qué incluye el informe geotécnico. Cotización en 24 h — BIC Bernal Ingeniería Consultores.',
    keywords: 'estudio suelos edificio Colombia, NSR-10 cimentaciones, sondeos geotécnicos edificio, nivel freático construcción Colombia',
    body: <>
      <p>Todo edificio multifamiliar en Colombia requiere, como condición previa para la expedición de la licencia de construcción, un <strong>estudio de suelos o estudio geotécnico</strong> elaborado por un ingeniero civil o geotécnico con tarjeta profesional COPNIA vigente. El NSR-10 Título H (Estudios Geotécnicos) es la norma que regula todos los requisitos de este estudio.</p>

      <h2>¿Por qué es obligatorio el estudio de suelos?</h2>
      <p>La cimentación es el elemento estructural que transfiere las cargas del edificio al suelo. Si el suelo no tiene la capacidad portante suficiente para soportar esas cargas, o si es compresible, se producen asentamientos que pueden causar grietas, daños estructurales e incluso el colapso del edificio. En Colombia, la normativa sísmica NSR-10 exige que el diseño de cimentaciones se base en información geotécnica verificada para garantizar el comportamiento seguro ante sismos.</p>

      <h2>Número mínimo de sondeos según NSR-10</h2>
      <p>El NSR-10 Título H Sección H.3 establece el número mínimo de puntos de exploración geotécnica:</p>
      <ul>
        <li><strong>Edificios de hasta 3 pisos, área &lt; 500 m²:</strong> mínimo 2 sondeos o apiques (se recomienda 3 para cubrir la variabilidad del suelo).</li>
        <li><strong>Edificios de 4 a 10 pisos:</strong> mínimo 3 sondeos distribuidos en la huella del edificio y su área de influencia.</li>
        <li><strong>Edificios de más de 10 pisos o con cargas muy concentradas (pilotes):</strong> mínimo 5 sondeos. Para torres de 20+ pisos es usual realizar 6 a 8 sondeos.</li>
        <li><strong>Separación entre sondeos:</strong> no mayor de 30 m dentro del área del proyecto.</li>
      </ul>
      <p>Además de los sondeos SPT, el NSR-10 puede requerir ensayos de laboratorio adicionales: consolidómetros (para calcular asentamientos en suelos cohesivos), ensayos triaxiales (para determinar la resistencia al corte) y ensayos de permeabilidad (para diseño del sistema de drenaje).</p>

      <h2>Profundidad de exploración</h2>
      <p>La profundidad de los sondeos debe ser suficiente para caracterizar todos los estratos que influyen en el comportamiento de la cimentación:</p>
      <ul>
        <li><strong>Cimentación superficial (zapatas o losa):</strong> profundidad mínima igual a 1.5 veces el ancho de la cimentación o hasta encontrar suelo competente (N-SPT &gt; 30 en suelos granulares o qu &gt; 200 kPa en suelos cohesivos), más 5 m adicionales.</li>
        <li><strong>Pilotes o caissons:</strong> el sondeo debe llegar al menos 5 m por debajo del nivel de apoyo de la punta del pilote.</li>
        <li><strong>Profundidad máxima práctica:</strong> con equipo estándar de perforación rotativa en Colombia se alcanzan rutinariamente los 30–40 m.</li>
      </ul>

      <h2>Contenido mínimo del informe geotécnico</h2>
      <p>El NSR-10 Título H establece que el informe geotécnico debe incluir:</p>
      <ul>
        <li><strong>Introducción y localización:</strong> dirección, municipio, coordenadas geográficas y descripción general del proyecto.</li>
        <li><strong>Descripción del programa de exploración:</strong> número de sondeos, profundidades, ensayos realizados y equipos utilizados.</li>
        <li><strong>Perfil estratigráfico:</strong> descripción visual y táctil de los suelos encontrados en cada sondeo, con clasificación SUCS y correlación entre sondeos.</li>
        <li><strong>Resultados de ensayos:</strong> tablas con N-SPT en cada profundidad, resultados de granulometría y límites de Atterberg, y ensayos adicionales según el caso.</li>
        <li><strong>Nivel freático:</strong> profundidad del nivel de aguas subterráneas medido en los sondeos (en Colombia, el nivel freático varía estacionalmente; el NSR-10 exige reportar el nivel más crítico y el más favorable).</li>
        <li><strong>Capacidad portante y asentamientos:</strong> cálculo de la capacidad portante admisible para el tipo de cimentación recomendada y estimación de asentamientos totales y diferenciales.</li>
        <li><strong>Recomendaciones de cimentación:</strong> tipo de cimentación (zapatas, losa, pilotes), profundidad de desplante, presión admisible de diseño y medidas especiales (mejoramiento de suelo, control del nivel freático durante construcción).</li>
        <li><strong>Firma y tarjeta profesional COPNIA:</strong> el informe debe ser firmado por el profesional responsable con número de tarjeta COPNIA vigente.</li>
      </ul>

      <h2>Nivel freático: implicaciones para el diseño</h2>
      <p>El nivel freático afecta directamente el diseño de la cimentación. En presencia de nivel freático alto:</p>
      <ul>
        <li>La capacidad portante se reduce en suelos granulares (presión efectiva disminuye).</li>
        <li>Se requieren sistemas de agotamiento temporal durante la excavación.</li>
        <li>El diseño debe considerar la subpresión sobre losas de sótano (flotación) y la impermeabilización del sótano.</li>
        <li>En suelos licuables (arenas sueltas con N-SPT &lt; 10 y nivel freático a menos de 10 m), se exige análisis de licuación sísmico.</li>
      </ul>

      <p>En BIC Ingeniería realizamos estudios geotécnicos completos para <a href="/servicios/geotecnia" style={{color:'#17A2B8', fontWeight:600}}>edificios multifamiliares en todo Colombia</a>, cumpliendo todos los requisitos del NSR-10 Título H. Entrega en 10 días hábiles con informe firmado COPNIA. Contacte hoy.</p>
    </>,
  },

  // ─── CLUSTER 4: Diseño PTAP ───────────────────────────────────────────────────

  'procesos-potabilizacion-agua-colombia-resolucion-0330': {
    title: 'Procesos de Potabilización del Agua en Colombia: Resolución 0330',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Diseño PTAP',
    metaDesc: 'Coagulación, floculación, sedimentación, filtración y desinfección con cloro en plantas de potabilización según Resolución 0330 de 2017 y Resolución 2115 en Colombia.',
    keywords: 'potabilización agua Colombia, Resolución 0330 2017, PTAP municipios Colombia, procesos tratamiento agua potable',
    body: <>
      <p>El acceso al agua potable de calidad es un derecho fundamental en Colombia. Para garantizar que el agua que llega a los hogares cumpla los parámetros establecidos en la <strong>Resolución 2115 de 2007</strong> (criterios de calidad para consumo humano), los sistemas de acueducto deben contar con una <strong>Planta de Tratamiento de Agua Potable (PTAP)</strong> que someta el agua cruda a un proceso de potabilización. La <strong>Resolución 0330 de 2017</strong> del Ministerio de Vivienda regula los criterios técnicos para el diseño de estos sistemas.</p>

      <h2>El proceso de potabilización convencional</h2>
      <p>El tratamiento convencional de agua para consumo humano incluye las siguientes etapas en secuencia:</p>

      <h3>1. Coagulación</h3>
      <p>Es la primera etapa del tratamiento. Se añade un coagulante (sulfato de aluminio, policloruro de aluminio PAC, o cloruro férrico) al agua cruda en la cámara de mezcla rápida. El coagulante neutraliza las cargas eléctricas negativas de las partículas coloidales en suspensión, permitiendo que se agrupen. El parámetro de diseño es el <strong>gradiente de velocidad G</strong> (G = 500–1500 s⁻¹ para mezcla rápida) y el tiempo de mezcla (t = 20–60 segundos).</p>

      <h3>2. Floculación</h3>
      <p>En los floculadores, la mezcla agua-coagulante se agita suavemente durante 20 a 40 minutos para que las micropartículas coaguladas colisionen y se unan formando flóculos visibles de mayor tamaño. El gradiente de velocidad en floculación es mucho menor: G = 10–75 s⁻¹ con valores decrecientes en compartimentos sucesivos para favorecer la aglomeración sin romper los flóculos ya formados. Los floculadores pueden ser hidráulicos (deflectores) o mecánicos (paletas).</p>

      <h3>3. Sedimentación</h3>
      <p>Los flóculos formados se separan del agua por efecto de la gravedad en el sedimentador. Para el diseño se calcula la <strong>tasa de desbordamiento superficial (TDS)</strong>: TDS = Q / As, donde As es el área superficial del sedimentador (m²). El RAS 2017 y la Resolución 0330 establecen TDS entre 20 y 60 m³/m²·día para sedimentadores convencionales de flujo horizontal.</p>

      <h3>4. Filtración rápida en arena</h3>
      <p>El agua decantada pasa a través de filtros de arena de grano uniforme (Coeficiente de Uniformidad CU &lt; 1.5) que retienen los flóculos residuales no sedimentados y los microorganismos. La velocidad de filtración varía entre 120 y 360 m³/m²·día según la Resolución 0330. Los filtros se limpian periódicamente por retrolavado (agua y/o aire a contracorriente).</p>

      <h3>5. Desinfección con cloro</h3>
      <p>El cloro (gas, hipoclorito de sodio o hipoclorito de calcio) es el desinfectante más usado en Colombia por su eficacia, bajo costo y capacidad de mantener un residual en la red de distribución. La dosis de cloro se ajusta para garantizar un residual de cloro libre entre 0.3 y 2.0 mg/L en cualquier punto de la red (Resolución 2115). Para municipios con agua de alta turbidez o presencia de materia orgánica, se puede complementar con desinfección UV o dióxido de cloro.</p>

      <h2>Parámetros de calidad: Resolución 2115 y Resolución 0330</h2>
      <p>La <strong>Resolución 2115 de 2007</strong> establece los parámetros de calidad del agua potable en Colombia. Los más relevantes para el control en PTAP son:</p>
      <ul>
        <li>Turbiedad: ≤ 2 NTU en el agua tratada (≤ 1 NTU recomendado).</li>
        <li>Color aparente: ≤ 15 UPC.</li>
        <li>Cloro residual libre: 0.3 – 2.0 mg/L.</li>
        <li>pH: 6.5 – 9.0.</li>
        <li>Coliformes totales: 0 UFC/100 mL.</li>
        <li>E. coli: 0 UFC/100 mL.</li>
      </ul>
      <p>La <strong>Resolución 0330 de 2017</strong> define los criterios técnicos de diseño de los sistemas de acueducto y alcantarillado, incluyendo las tasas de diseño para cada proceso unitario de la PTAP, los materiales aceptables, los criterios de operación y mantenimiento, y los parámetros de control de calidad del proceso.</p>

      <h2>Diseño conceptual de una PTAP municipal</h2>
      <p>Para una población de 5.000 habitantes (municipio nivel bajo de complejidad), el caudal de diseño es aproximadamente:</p>
      <ul>
        <li>QMD = 5.000 × 0.130 / 86.400 ≈ 7.5 L/s</li>
        <li>QMMD = 7.5 × 1.30 ≈ 9.8 L/s → diseño PTAP para Q = 10 L/s</li>
      </ul>
      <p>Para este caudal, una PTAP convencional incluiría: mezcla rápida, 2 unidades de floculación hidráulica, sedimentador de 150 m² de área superficial, 2 filtros de arena de 30 m² cada uno, cámara de contacto de cloro y tanque de almacenamiento de 24 horas.</p>

      <p>En BIC Ingeniería diseñamos PTAP para municipios y acueductos comunitarios según la <a href="/diseno-ptap-colombia" style={{color:'#17A2B8', fontWeight:600}}>Resolución 0330 y el RAS 2017</a>, con todos los estudios requeridos para financiación SGR y trámite ante el Ministerio de Vivienda. Contacte para propuesta.</p>
    </>,
  },

  'diseno-floculadores-sedimentadores-ptap': {
    title: 'Diseño de Floculadores y Sedimentadores para PTAP',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Diseño PTAP',
    metaDesc: 'Criterios de diseño de floculadores hidráulicos y sedimentadores de flujo horizontal para PTAP en Colombia: gradiente G, tiempo de retención, tasa de sedimentación y eficiencia de remoción de turbiedad.',
    keywords: 'diseño floculador PTAP Colombia, sedimentador convencional agua potable, tasa desbordamiento superficial, gradiente velocidad floculación',
    body: <>
      <p>Los floculadores y sedimentadores son el corazón del tratamiento convencional de agua potable. Un diseño deficiente de estas unidades compromete la calidad del agua tratada, genera costos operativos elevados y puede causar incumplimientos de los parámetros de la Resolución 2115. Conocer los principios de diseño y los parámetros de la Resolución 0330 es fundamental para el ingeniero que formula o diseña una PTAP en Colombia.</p>

      <h2>Diseño de floculadores hidráulicos</h2>
      <p>Los floculadores hidráulicos de deflectores (compartimentos con tabiques que inducen flujo serpentino) son los más comunes en Colombia por su bajo costo de operación y mantenimiento. El parámetro de control es el <strong>gradiente de velocidad G</strong>:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>G = √(γ · hf / μ · t)</p>
      <p>Donde γ es el peso específico del agua (9.810 N/m³), hf es la pérdida de carga en el floculador (m), μ es la viscosidad dinámica del agua (Pa·s, varía con la temperatura) y t es el tiempo de retención (s).</p>
      <p>El criterio de diseño es que el producto <strong>G·t</strong> (valor de Camp) esté entre 10.000 y 100.000, con valor óptimo en 50.000–70.000 para agua de turbiedad media (20–200 NTU). Este valor garantiza la colisión suficiente de partículas sin romper los flóculos formados.</p>

      <h3>Procedimiento de diseño del floculador hidráulico</h3>
      <ol>
        <li>Seleccionar tiempo de retención: t = 20–40 minutos (recomendado 30 minutos según Resolución 0330).</li>
        <li>Calcular el volumen del floculador: V = Q × t.</li>
        <li>Dividir en 3 compartimentos con G decreciente: G1 = 60 s⁻¹, G2 = 35 s⁻¹, G3 = 15 s⁻¹.</li>
        <li>Calcular la pérdida de carga en cada compartimento: hf = G² × μ × t / γ.</li>
        <li>Verificar que G·t total ≥ 50.000.</li>
      </ol>

      <h2>Diseño de sedimentadores de flujo horizontal</h2>
      <p>El sedimentador de flujo horizontal es la unidad más robusta y de mejor comportamiento ante variaciones de caudal. Su principio de operación es la teoría de Hazen: una partícula se sedimenta si su velocidad de caída v_s supera la tasa de desbordamiento superficial Q/As.</p>

      <h3>Parámetros de diseño según Resolución 0330</h3>
      <ul>
        <li><strong>Tasa de desbordamiento superficial (TDS):</strong> 20–60 m³/m²·día para sedimentadores convencionales. Se recomienda 30–45 m³/m²·día para agua de alta turbiedad (≥100 NTU).</li>
        <li><strong>Tiempo de retención hidráulica (TRH):</strong> mínimo 2 horas, recomendado 3–4 horas para una buena eficiencia de remoción.</li>
        <li><strong>Relación largo:ancho:</strong> L/W entre 3:1 y 5:1 para garantizar flujo pistón y minimizar cortocircuitos hidráulicos.</li>
        <li><strong>Profundidad útil:</strong> 2.5 a 4.0 m de zona de sedimentación más el volumen de lodos acumulados.</li>
        <li><strong>Velocidad horizontal del flujo:</strong> máximo 0.5 m/min para evitar el arrastre de flóculos sedimentados.</li>
      </ul>

      <h2>Ejemplo de dimensionamiento para Q = 15 L/s</h2>
      <p>Para una PTAP que trata un caudal de diseño de 15 L/s (1.296 m³/día):</p>
      <ul>
        <li>Área superficial requerida: As = Q / TDS = 1.296 / 40 = <strong>32.4 m²</strong> → usar 2 sedimentadores de 18 m² cada uno (6m × 3m).</li>
        <li>Profundidad útil de sedimentación: H = TRH × Q / As = (3h × 3.600s × 0.015m³/s) / 32.4 = <strong>5.0 m</strong></li>
        <li>Velocidad horizontal: v = Q / (W × H) = 0.015 / (3 × 5) = 0.001 m/s = 0.06 m/min ≪ 0.5 m/min ✓</li>
      </ul>

      <h2>Eficiencia de remoción de turbiedad</h2>
      <p>La eficiencia de remoción de turbiedad en el sedimentador depende del tamaño y densidad de los flóculos formados en la floculación. Un buen flóculo (diámetro 0.5–2.0 mm, densidad 1.02–1.05 g/cm³) tiene velocidad de sedimentación de 0.5–2.0 mm/s según la Ley de Stokes, lo que permite tasas de desbordamiento de hasta 60 m³/m²·día manteniendo eficiencias de remoción de turbiedad superiores al 90%.</p>
      <p>En la práctica, los sedimentadores bien diseñados deben producir agua con turbiedad inferior a 5 NTU a la salida, para que los filtros de arena puedan reducirla a menos de 1 NTU antes de la desinfección.</p>

      <h2>Sedimentadores de alta tasa (SAT)</h2>
      <p>Para instalaciones con espacio limitado, los <strong>sedimentadores de alta tasa con módulos laminares</strong> (tubos o placas inclinadas) permiten aumentar la tasa de desbordamiento a 120–200 m³/m²·día, reduciendo el área de sedimentadores hasta en un 70% respecto al diseño convencional. Son recomendados por la Resolución 0330 para ampliaciones de PTAP existentes o instalaciones con restricciones de espacio.</p>

      <p>En BIC Ingeniería diseñamos floculadores, sedimentadores y sistemas completos de <a href="/diseno-ptap-colombia" style={{color:'#17A2B8', fontWeight:600}}>plantas de tratamiento de agua potable</a> para municipios en Colombia, aplicando los criterios de la Resolución 0330 y el RAS 2017. Solicite propuesta técnica hoy.</p>
    </>,
  },

  'ptap-compacta-municipios-rurales-colombia': {
    title: 'PTAP Compacta para Municipios Rurales de Colombia',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Diseño PTAP',
    metaDesc: 'Ventajas de las PTAP compactas vs plantas convencionales para municipios rurales: capacidades 1-50 L/s, operación simplificada, costos referenciales y casos de éxito en municipios menores de Colombia.',
    keywords: 'PTAP compacta rural Colombia, planta potabilizadora prefabricada, agua potable zona rural Colombia, PTAP modular Colombia',
    body: <>
      <p>Más de 1.200 municipios colombianos tienen una población menor de 10.000 habitantes. Para muchos de ellos, construir una planta de tratamiento de agua potable (PTAP) convencional — con floculadores de concreto, sedimentadores de grandes dimensiones y filtros de varios compartimentos — resulta técnicamente sobredimensionado, económicamente prohibitivo y operativamente complejo para los operadores locales. Las <strong>PTAP compactas</strong> ofrecen una alternativa eficaz, económica y adaptada a la realidad de estos municipios.</p>

      <h2>¿Qué es una PTAP compacta?</h2>
      <p>Una PTAP compacta o modular es una unidad de tratamiento de agua potable prefabricada que integra en un solo módulo (o en un conjunto reducido de módulos) todos los procesos de tratamiento: coagulación-floculación, sedimentación (generalmente de alta tasa con placas o tubos) y filtración. Algunas versiones incluyen también la dosificación de coagulante y el sistema de desinfección integrados.</p>
      <p>Pueden ser de acero al carbono con recubrimiento epóxico, acero inoxidable, fibra de vidrio o polietileno de alta densidad, según la agresividad del agua y las condiciones del sitio.</p>

      <h2>Ventajas frente a la PTAP convencional</h2>
      <ul>
        <li><strong>Menor tiempo de construcción:</strong> las PTAP compactas se instalan en 4–8 semanas vs 6–18 meses de una PTAP convencional.</li>
        <li><strong>Menor huella de suelo:</strong> ocupan entre el 20% y el 40% del área de una planta convencional equivalente.</li>
        <li><strong>Transporte posible:</strong> los módulos de hasta 50 L/s pueden transportarse en camión hasta sitios remotos de difícil acceso.</li>
        <li><strong>Operación más sencilla:</strong> requieren menos personal especializado y los sistemas de dosificación suelen ser automatizados o de operación muy intuitiva.</li>
        <li><strong>Escalabilidad:</strong> se pueden añadir módulos adicionales cuando crece la demanda.</li>
      </ul>

      <h2>Desventajas y limitaciones</h2>
      <ul>
        <li>Para caudales mayores de 50–80 L/s, el costo por L/s de una PTAP compacta supera al de una convencional.</li>
        <li>Son más sensibles a variaciones bruscas de la calidad del agua cruda (picos de turbiedad en temporada de lluvias).</li>
        <li>Los repuestos (filtros, tubos de sedimentación, membranas en sistemas más avanzados) pueden ser de importación y difícil consecución en zonas remotas.</li>
        <li>La vida útil puede ser menor (20–25 años vs 30–40 años de una PTAP convencional de concreto bien mantenida).</li>
      </ul>

      <h2>Capacidades disponibles en el mercado colombiano</h2>
      <p>Los fabricantes y distribuidores de PTAP compactas en Colombia ofrecen generalmente las siguientes capacidades estándar:</p>
      <ul>
        <li><strong>1 a 5 L/s:</strong> sistemas para veredas o corregimientos de 200 a 1.500 habitantes. Suelen ser unidades autónomas en tanque único o par de tanques.</li>
        <li><strong>5 a 20 L/s:</strong> para municipios de 1.500 a 6.000 habitantes. Los sistemas más robustos incluyen sedimentadores de placas y filtros de arena rápidos automatizados.</li>
        <li><strong>20 a 50 L/s:</strong> para municipios medianos (6.000 a 15.000 habitantes). En este rango ya compiten directamente con PTAP convencionales y la decisión depende del espacio disponible y los plazos de ejecución.</li>
      </ul>

      <h2>Costos referenciales (2026)</h2>
      <p>Los precios de PTAP compactas en Colombia varían según el fabricante, los materiales y los accesorios incluidos. Rangos referenciales 2026:</p>
      <ul>
        <li><strong>Sistema 1 L/s (acero inoxidable, instalado):</strong> $60M – $90M COP</li>
        <li><strong>Sistema 5 L/s (incluye caseta y sistemas de dosificación):</strong> $180M – $280M COP</li>
        <li><strong>Sistema 10 L/s (modular, con automatización básica):</strong> $350M – $550M COP</li>
        <li><strong>Sistema 30 L/s (con sala de operadores y control):</strong> $900M – $1.500M COP</li>
      </ul>
      <p>Estos valores no incluyen obra civil de cimentación, tanque de almacenamiento, red de distribución ni tramitación de permisos.</p>

      <h2>Financiación: SGR y Ministerio de Vivienda</h2>
      <p>Las PTAP compactas pueden financiarse a través del Sistema General de Regalías (SGR) cuando el municipio presenta un proyecto formulado en MGA-Web. El Ministerio de Vivienda también financia sistemas de agua potable para municipios con IRCA alto (mayor de 35%) a través del programa de saneamiento para asentamientos y comunidades.</p>

      <p>En BIC Ingeniería acompañamos municipios en el diseño, selección y formulación de proyectos de <a href="/diseno-ptap-colombia" style={{color:'#17A2B8', fontWeight:600}}>PTAP para zonas rurales y municipios de Colombia</a>, incluyendo los estudios de calidad del agua cruda, el diseño de la PTAP (compacta o convencional), la formulación en MGA-Web y los documentos para trámite ante el Ministerio. Solicite asesoría.</p>
    </>,
  },

  // ─── CLUSTER 5: Aguas Lluvias ─────────────────────────────────────────────────

  'calculo-caudal-aguas-lluvias-cubierta-edificio': {
    title: 'Cálculo de Caudal de Aguas Lluvias en Cubiertas de Edificios',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Aguas Lluvias',
    metaDesc: 'Método Racional para calcular el caudal de aguas lluvias en cubiertas de edificios: área tributaria, coeficiente C=0.95, intensidad IDF IDEAM, diámetro de bajantes RAS 2017.',
    keywords: 'caudal aguas lluvias cubierta Colombia, método racional cubierta, bajantes aguas lluvias RAS, cálculo caudal pluvial edificio',
    body: <>
      <p>El diseño del sistema de evacuación de aguas lluvias de una cubierta es un componente fundamental de las memorias de cálculo hidrosanitarias que exige la Curaduría Urbana para la expedición de la licencia de construcción en Colombia. Un sistema subdimensionado genera inundaciones en terrazas, filtraciones hacia el interior del edificio y sobrecargas estructurales por el peso del agua acumulada. Un sistema sobredimensionado aumenta innecesariamente los costos de materiales e instalación.</p>

      <h2>Parámetros del cálculo: Método Racional</h2>
      <p>Para cubiertas de edificios, el caudal de aguas lluvias se calcula con el <strong>Método Racional</strong>:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>Q = C · I · A / 3.6</p>
      <p>Donde:</p>
      <ul>
        <li><strong>Q:</strong> caudal de diseño (L/s)</li>
        <li><strong>C:</strong> coeficiente de escorrentía — para cubiertas impermeables (teja, concreto, membrana) C = 0.90 a 0.95. El RAS 2017 y la práctica colombiana usan <strong>C = 0.95</strong> para cubiertas convencionales.</li>
        <li><strong>I:</strong> intensidad de lluvia de diseño (mm/h) para el período de retorno y duración seleccionados</li>
        <li><strong>A:</strong> área tributaria de la cubierta (m²), proyectada horizontalmente</li>
      </ul>

      <h2>Determinación del área tributaria</h2>
      <p>El área tributaria de cubierta que drena a cada bajante es la proyección horizontal del área de techo que contribuye a ese desagüe. En cubiertas inclinadas, se divide la cubierta en sectores según las canaletas colectoras; en cubiertas planas, la división la determinan los drenajes de piso (sumideros o embudos) con sus respectivas áreas de influencia.</p>
      <p>Regla práctica: cada bajante o embudo de cubierta plana no debe recibir un área mayor de <strong>80–120 m²</strong> en zonas de alta pluviosidad (Eje Cafetero, Pacífico, Amazonia) ni mayor de 150 m² en zonas de menor lluvia (Caribe seco, altiplano cundiboyacense).</p>

      <h2>Intensidad de lluvia local: curvas IDF del IDEAM</h2>
      <p>La intensidad I se obtiene de las curvas IDF del IDEAM para la estación pluviométrica más cercana al proyecto. Para el diseño de aguas lluvias en cubiertas, el período de retorno típico es:</p>
      <ul>
        <li><strong>TR = 5 años:</strong> para cubiertas de viviendas y edificios de uso normal.</li>
        <li><strong>TR = 10 años:</strong> para edificios hospitalarios, colegios, centros de datos e industrias con equipos sensibles.</li>
        <li><strong>TR = 25 años:</strong> para infraestructura crítica.</li>
      </ul>
      <p>La duración de la lluvia de diseño para cubiertas pequeñas (&lt;500 m²) se toma igual a 5 minutos, ya que el tiempo de concentración en cubiertas es muy corto.</p>
      <p>Para Manizales (una de las ciudades más lluviosas del país), la intensidad para TR = 5 años, t = 5 min es aproximadamente <strong>I ≈ 180 mm/h</strong> según datos IDEAM estación Manizales. Para Bogotá, I ≈ 100 mm/h para los mismos parámetros.</p>

      <h2>Ejemplo de cálculo en Manizales</h2>
      <p>Cubierta plana de edificio residencial en Manizales:</p>
      <ul>
        <li>Área de cubierta: 320 m²</li>
        <li>Número de bajantes: 4 (áreas tributarias de 80 m² cada una)</li>
        <li>C = 0.95, I = 180 mm/h, A = 0.0080 ha (80 m² = 0.008 ha)</li>
        <li>Q por bajante = 0.95 × 180 × 0.008 / 3.6 = <strong>0.38 L/s</strong></li>
      </ul>

      <h2>Selección del diámetro de bajantes según RAS 2017</h2>
      <p>El RAS 2017 Título D establece los criterios de diseño para bajantes de aguas lluvias. El diámetro se selecciona según el caudal a evacuar y la altura de la bajante (la carga de agua sobre el sumidero aumenta con la altura):</p>
      <ul>
        <li>Para Q = 0.38 L/s en bajante de 4–6 pisos: diámetro <strong>DN 75 mm (3")</strong> es suficiente según las tablas del RAS.</li>
        <li>Para áreas mayores de 100 m² en zona de alta pluviosidad: <strong>DN 100 mm (4")</strong>.</li>
        <li>Para edificios de gran escala con áreas tributarias &gt; 200 m² por bajante: <strong>DN 150 mm (6")</strong>.</li>
      </ul>
      <p>El material estándar para bajantes es PVC sanitario presión (PVC-S), aunque también se usa CPVC en aplicaciones especiales y cobre en obras de arquitectura de alta gama.</p>

      <h2>Número de bajantes requerido</h2>
      <p>El número de bajantes debe ser suficiente para que ninguna área tributaria supere el máximo recomendado por el RAS 2017 para la intensidad local. En edificios con grandes cubiertas planas, se recomienda instalar bajantes cada 10–15 m a lo largo del perímetro y en los puntos más bajos de la cubierta.</p>

      <p>En BIC Ingeniería elaboramos memorias de cálculo completas para <a href="/servicios/redes-hidrosanitarias" style={{color:'#17A2B8', fontWeight:600}}>redes de aguas lluvias y sistemas hidrosanitarios</a> en edificios y proyectos de toda Colombia, cumpliendo los requisitos del RAS 2017 y la NSR-10 para la licencia de construcción. Contáctenos.</p>
    </>,
  },

  'sistemas-drenaje-aguas-lluvias-colegios-colombia': {
    title: 'Sistemas de Drenaje de Aguas Lluvias en Colegios Colombianos',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Aguas Lluvias',
    metaDesc: 'Diseño de sistemas de drenaje pluvial para colegios: áreas impermeables, cunetas perimetrales, rejillas y sumideros, separación aguas lluvias vs residuales según RAS 2017.',
    keywords: 'drenaje aguas lluvias colegio Colombia, canales pluviales colegio, cunetas perimetrales escuela, separación aguas lluvias residuales RAS',
    body: <>
      <p>Los colegios e instituciones educativas presentan características hidráulicas particulares que hacen que su sistema de drenaje de aguas lluvias requiera un diseño cuidadoso. Las extensas zonas pavimentadas de patios y zonas deportivas, las grandes cubiertas y la alta densidad de usuarios en horario pico de lluvia crean condiciones de escorrentía intensa que deben manejarse con seguridad para evitar accidentes, daños a instalaciones y suspensiones de actividades académicas.</p>

      <h2>Caracterización hidrológica de un colegio</h2>
      <p>Los colegios concentran varias de las superficies más impermeables que se pueden encontrar en un predio:</p>
      <ul>
        <li><strong>Cubiertas de salones, auditorios y laboratorios:</strong> coeficiente C = 0.90–0.95</li>
        <li><strong>Patios de concreto o asfalto (patio cívico, canchas deportivas):</strong> C = 0.85–0.90</li>
        <li><strong>Corredores cubiertos y zonas de circulación:</strong> C = 0.80–0.90</li>
        <li><strong>Zonas verdes y jardines (si existen):</strong> C = 0.15–0.30</li>
      </ul>
      <p>Para un colegio con 80% de área impermeable, el coeficiente de escorrentía ponderado puede superar 0.80, lo que genera caudales de diseño significativos incluso para áreas de predio moderadas (1.000–5.000 m²).</p>

      <h2>Diseño de cunetas perimetrales</h2>
      <p>Las <strong>cunetas perimetrales</strong> son canales abiertos de baja profundidad que bordean las zonas pavimentadas y recogen el agua escurrida de patios, corredores y edificaciones. Son el componente más económico y efectivo del sistema de drenaje superficial de un colegio.</p>
      <p>El diseño hidráulico de las cunetas se hace con la ecuación de Manning:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>Q = (1/n) · A · R^(2/3) · S^(1/2)</p>
      <p>Para cunetas de concreto (n = 0.013), sección trapezoidal o rectangular, la velocidad debe estar entre 0.5 y 3.0 m/s (velocidades menores permiten sedimentación y obstrucción; velocidades mayores erosionan el fondo).</p>
      <p>Dimensiones típicas para colegios en zonas de alta pluviosidad: ancho de plantilla 20–30 cm, taludes 1:1, profundidad 15–25 cm.</p>

      <h2>Rejillas y sumideros: criterios de diseño</h2>
      <p>Los sumideros o rejillas son las estructuras que conectan el drenaje superficial con la red de alcantarillado pluvial subterránea. Su diseño debe evitar el rebosamiento y garantizar la captura del caudal de diseño. Los tipos más usados en colegios son:</p>
      <ul>
        <li><strong>Sumidero lateral (en cuneta):</strong> abre en la pared lateral de la cuneta hacia un pozo de inspección. Capacidad de hasta 30–50 L/s por unidad según dimensiones de la abertura.</li>
        <li><strong>Sumidero deprimido (en vía o patio):</strong> instalado en la calzada con rejilla metálica nivelada con el piso. Permite la captura del flujo superficial desde varias direcciones. Área de rejilla mínima 0.20 m².</li>
        <li><strong>Canaleta HDPE prefabricada con rejilla:</strong> solución muy usada en colegios modernos por su facilidad de instalación y mantenimiento. Disponible en anchos de 100, 150 y 200 mm con capacidades desde 5 hasta 50 L/s.</li>
      </ul>

      <h2>Separación aguas lluvias vs aguas residuales: obligación RAS</h2>
      <p>El RAS 2017 Título D es explícito: en todo sistema de alcantarillado nuevo, <strong>las aguas lluvias y las aguas residuales deben manejarse en redes separadas</strong>. La conexión de bajantes de cubierta a la red de aguas residuales está prohibida porque:</p>
      <ul>
        <li>Genera sobrecargas hidráulicas en la PTAR durante los aguaceros, con bypass de agua sin tratar a los cuerpos receptores.</li>
        <li>Diluye las aguas residuales, afectando la eficiencia del tratamiento biológico.</li>
        <li>Puede generar presiones positivas en la red sanitaria que provocan malos olores y reboses en los sifones.</li>
      </ul>
      <p>En colegios existentes con sistema combinado (frecuente en los construidos antes de 1994), la separación de redes es un proyecto de mejoramiento obligatorio cuando se realizan ampliaciones o renovaciones de la planta física.</p>

      <h2>Conexión al alcantarillado pluvial municipal</h2>
      <p>La red pluvial interna del colegio debe conectarse a la red pluvial pública municipal (caja de inspección de la ESP o empresa prestadora) mediante una caja de inspección de empalme. Antes del empalme, es recomendable instalar una <strong>trampa de sedimentos o pozo decantador</strong> que retenga arena, hojas y residuos sólidos arrastrados por la escorrentía, evitando la obstrucción de la red pública.</p>

      <p>En BIC Ingeniería diseñamos sistemas de drenaje pluvial completos para <a href="/servicios/redes-hidrosanitarias" style={{color:'#17A2B8', fontWeight:600}}>colegios, centros educativos y edificaciones en Colombia</a>, con memorias de cálculo NSR-10 y RAS 2017. Solicite cotización sin costo.</p>
    </>,
  },

  'ras-2000-titulo-d-alcantarillado-pluvial-guia': {
    title: 'RAS 2000 Título D: Guía para Diseño de Alcantarillado Pluvial',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Aguas Lluvias',
    metaDesc: 'Criterios del RAS 2000 Título D para diseño de alcantarillado pluvial en Colombia: período de retorno, velocidades mínimas y máximas, Manning, pozos de inspección y conexiones domiciliarias pluviales.',
    keywords: 'RAS 2000 título D Colombia, alcantarillado pluvial diseño, Manning tuberías pluviales, pozos inspección alcantarillado Colombia',
    body: <>
      <p>El <strong>RAS 2000 (actualizado como Reglamento Técnico RAS 2017 mediante la Resolución 0330 de 2017)</strong> es la norma técnica de referencia para el diseño de sistemas de alcantarillado pluvial en Colombia. El <strong>Título D</strong> del RAS cubre específicamente el diseño de redes de alcantarillado pluvial y drenaje urbano, estableciendo los criterios técnicos que debe cumplir cualquier sistema de evacuación de aguas lluvias en el país.</p>

      <h2>Período de retorno de diseño</h2>
      <p>El período de retorno (TR) es el parámetro fundamental que determina la magnitud del evento de lluvia para el cual se diseña el sistema. El RAS 2000 Título D establece los períodos de retorno mínimos según el nivel de complejidad del sistema y el tipo de infraestructura:</p>
      <ul>
        <li><strong>Nivel bajo (menor a 2.500 hab.) y medio bajo (2.500–12.500 hab.):</strong>
          <ul>
            <li>Cunetas y alcantarillas de calzada: TR = 3 años</li>
            <li>Colectores secundarios: TR = 5 años</li>
            <li>Colector principal (interceptor): TR = 10 años</li>
          </ul>
        </li>
        <li><strong>Nivel medio (12.500–60.000 hab.) y medio alto (60.000–360.000 hab.):</strong>
          <ul>
            <li>Colectores secundarios: TR = 5–10 años</li>
            <li>Colector principal: TR = 10–25 años</li>
          </ul>
        </li>
        <li><strong>Nivel alto (mayor a 360.000 hab.):</strong>
          <ul>
            <li>Colectores secundarios: TR = 10–25 años</li>
            <li>Colector principal y canales de alivio: TR = 25–100 años</li>
          </ul>
        </li>
      </ul>

      <h2>Velocidades mínimas y máximas</h2>
      <p>El control de velocidades en las tuberías pluviales es crítico para garantizar el arrastre de sedimentos (velocidad mínima) y evitar la erosión interna de las tuberías (velocidad máxima):</p>
      <ul>
        <li><strong>Velocidad mínima (auto-limpieza):</strong> 0.75 m/s en alcantarillado pluvial cuando la tubería opera a sección llena. Esta velocidad asegura el arrastre de arenas y material fino.</li>
        <li><strong>Velocidad máxima:</strong> depende del material de la tubería:
          <ul>
            <li>PVC: 5.0 m/s</li>
            <li>Concreto simple: 3.0 m/s</li>
            <li>Concreto reforzado: 4.5 m/s</li>
            <li>Gres cerámico: 5.0 m/s</li>
          </ul>
        </li>
      </ul>
      <p>En sistemas de drenaje pluvial con altas pendientes (terrenos de montaña en el Eje Cafetero, Antioquia o Nariño), se debe controlar la velocidad máxima instalando disipadores de energía en la base de los tramos pronunciados o reduciendo el diámetro para aumentar el tirante relativo.</p>

      <h2>Ecuación de Manning para tuberías pluviales</h2>
      <p>El dimensionamiento hidráulico de las tuberías se realiza con la ecuación de Manning para flujo a sección llena:</p>
      <p style={{background:'#F0F7FB', padding:'12px 16px', borderRadius:6, fontFamily:'monospace', fontSize:14}}>Q = (1/n) · A · R^(2/3) · S^(1/2)</p>
      <p>Para tuberías circulares operando a sección llena: A = π·D²/4, R = D/4.</p>
      <p>Los coeficientes de Manning (n) según material son:</p>
      <ul>
        <li>PVC liso: n = 0.009–0.011</li>
        <li>Concreto liso: n = 0.011–0.013</li>
        <li>Concreto prefabricado: n = 0.012–0.015</li>
        <li>Gres cerámico: n = 0.010–0.013</li>
        <li>Metálico corrugado (alcantarillas viales): n = 0.019–0.024</li>
      </ul>
      <p>El RAS 2017 establece diámetros mínimos en alcantarillado pluvial: 250 mm (10") para colectores interiores de urbanizaciones y 300 mm (12") para colectores en vía pública.</p>

      <h2>Pozos de inspección</h2>
      <p>Los pozos de inspección (cámaras de inspección o manholes) son las estructuras que permiten el acceso para mantenimiento y que sirven como punto de unión entre tramos y como alivios de cambio de dirección o pendiente. El RAS 2000 Título D establece:</p>
      <ul>
        <li><strong>Separación máxima entre pozos:</strong> 100 m para tuberías hasta 700 mm; 120 m para diámetros mayores.</li>
        <li><strong>Ubicación obligatoria:</strong> en cambios de dirección (deflexiones mayores a 15°), cambios de pendiente, cambios de diámetro, confluencias de dos o más colectores y al inicio de cada tramo.</li>
        <li><strong>Diámetro mínimo de la cámara:</strong> 1.20 m para tuberías hasta 600 mm; 1.50 m para tuberías mayores.</li>
        <li><strong>Profundidad:</strong> la cota de batea (fondo interior de la tubería) debe garantizar el recubrimiento mínimo exigido (0.80 m en zonas sin tráfico; 1.20 m en calzadas vehiculares).</li>
      </ul>

      <h2>Cámara de entrada y conexiones domiciliarias pluviales</h2>
      <p>Las <strong>conexiones domiciliarias pluviales</strong> (acometidas pluviales) conectan el sistema de drenaje de cada predio con el colector público. El RAS establece que:</p>
      <ul>
        <li>Diámetro mínimo de la acometida pluvial: 150 mm (6").</li>
        <li>Pendiente mínima: 2% para garantizar autolimpieza.</li>
        <li>La conexión al colector se hace mediante caja de inspección domiciliaria o directamente a la batea del pozo de inspección más cercano.</li>
        <li>Se prohíbe la conexión de aguas residuales domésticas a la red pluvial (separación de sistemas).</li>
      </ul>

      <p>En BIC Ingeniería diseñamos redes de alcantarillado pluvial para urbanizaciones, colegios y municipios aplicando los criterios del <a href="/servicios/redes-hidrosanitarias" style={{color:'#17A2B8', fontWeight:600}}>RAS 2017 Título D y la Resolución 0330</a>. Incluimos modelación hidráulica en SWMM cuando el sistema requiere verificación de capacidad ante eventos extremos. Solicite propuesta técnica.</p>
    </>,
  },

  'componente-hidrico-plan-p