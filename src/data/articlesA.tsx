// Category A: Hidrología e Hidráulica Técnica (9 articles: A-01, A-03 to A-10)
const articlesA: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'estudio-hidrologico-colombia': {
    title: '¿Qué es un estudio hidrológico y cuándo es obligatorio en Colombia?',
    date: 'Abril 2026',
    readTime: '9 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Guía técnica completa sobre estudios hidrológicos en Colombia: definición, metodologías, entidades que los exigen y cómo contratar una consultoría especializada. Actualizado 2026.',
    keywords: 'estudio hidrológico Colombia, contratar estudio hidrológico, estudio hidrológico para POT, empresa estudios hidrológicos Colombia',
    body: <>
      <p>En Colombia, la palabra "estudio hidrológico" aparece en los pliegos de condiciones de alcaldías, en los requisitos de las Corporaciones Autónomas Regionales y en los documentos del DNP para proyectos de regalías. Pero no siempre queda claro qué es exactamente, qué debe contener y cuándo es realmente obligatorio. Este artículo resuelve esas preguntas con precisión técnica y normativa.</p>

      <h2>Definición técnica y alcance de un estudio hidrológico</h2>
      <p>Un <strong>estudio hidrológico</strong> es el análisis cuantitativo del ciclo del agua en una cuenca hidrográfica determinada. Su objetivo central es caracterizar el comportamiento de los caudales —cómo llueve, cuánta agua escurre, cuándo y con qué frecuencia ocurren eventos extremos— para que los diseñadores de infraestructura puedan tomar decisiones fundamentadas.</p>
      <p>Es importante distinguirlo de otros estudios relacionados: el <strong>estudio hidráulico</strong> analiza el movimiento del agua en cauces y estructuras ya construidas o proyectadas (complementa al hidrológico); el <strong>estudio hidrogeológico</strong> se ocupa del agua subterránea. Los tres pueden ser necesarios en un mismo proyecto, pero responden a preguntas diferentes.</p>
      <p>Un estudio hidrológico bien elaborado incluye: delimitación y caracterización morfométrica de la cuenca, análisis de información climatológica e hidrométrica del IDEAM, cálculo de caudales medios y de creciente para distintos períodos de retorno, modelación lluvia-escorrentía con software especializado (HEC-HMS, TR-20) y curvas de duración de caudales para evaluación de disponibilidad hídrica.</p>

      <h2>Marco normativo colombiano: cuándo es obligatorio</h2>
      <p>En Colombia, el estudio hidrológico es un requisito explícito o implícito en múltiples instrumentos normativos:</p>
      <ul>
        <li><strong>POT (Ley 388 de 1997):</strong> Los planes de ordenamiento territorial deben incorporar la delimitación de rondas hídricas y zonas de amenaza por inundación. La zonificación de amenaza requiere, como insumo fundamental, el análisis hidrológico de las cuencas que atraviesan el municipio.</li>
        <li><strong>POMCA (Decreto 1076 de 2015):</strong> Los Planes de Ordenación y Manejo de Cuencas Hidrográficas exigen caracterización hidrológica detallada de las cuencas objeto del plan. Si su proyecto se encuentra en una cuenca con POMCA adoptado, las condiciones hidrológicas que este establece son vinculantes para el diseño.</li>
        <li><strong>Estudios básicos de riesgo (Ley 1523 de 2012):</strong> Para incorporar zonas al Plan Municipal de Gestión del Riesgo, se requieren estudios de amenaza, vulnerabilidad y riesgo que incluyen análisis hidrológico e hidráulico.</li>
        <li><strong>Diseño de acueductos (RAS 2017):</strong> Todo diseño de sistema de abastecimiento de agua potable requiere estudio hidrológico de la fuente para determinar caudales de diseño, caudal mínimo de concesión y variabilidad estacional.</li>
        <li><strong>Licencia ambiental (ANLA):</strong> Los proyectos que requieren licencia ambiental ante la ANLA o la CAR deben caracterizar los recursos hídricos del área de influencia, incluyendo análisis de caudales, balances hídricos y evaluación de impactos sobre la disponibilidad del recurso.</li>
      </ul>

      <h2>Cuánto cuesta un estudio hidrológico en Colombia</h2>
      <p>Los rangos orientativos en el mercado colombiano (2026) para estudios hidrológicos en el Eje Cafetero y regiones andinas son:</p>
      <ul>
        <li><strong>Estudio básico para diseño de acueducto rural (cuenca &lt;50 km²):</strong> $8–$18 millones COP</li>
        <li><strong>Estudio para licencia ambiental o permiso de concesión (cuenca media):</strong> $15–$35 millones COP</li>
        <li><strong>Estudio de amenaza por inundación para POT o plan parcial:</strong> $20–$50 millones COP</li>
        <li><strong>Estudio integral con modelación HEC-HMS + HEC-RAS 2D:</strong> $40–$90 millones COP</li>
      </ul>
      <p>Estos valores dependen de la disponibilidad de información histórica del IDEAM, la extensión del área de estudio, el nivel de detalle requerido por la entidad contratante y si se requiere levantamiento topobatimétrico de campo.</p>

      <h2>Cómo seleccionar la firma consultora adecuada</h2>
      <p>Un estudio hidrológico bien hecho requiere experiencia específica en la región, acceso a datos históricos de estaciones del IDEAM, software especializado calibrado y un equipo con formación en hidrología aplicada. Al solicitar propuestas, verifique que la firma pueda mostrar estudios similares realizados en cuencas de la misma región, y que su propuesta incluya un plan de trabajo con fuentes de datos identificadas —no un cronograma genérico.</p>
      <p>Desconfíe de propuestas de muy bajo costo que no especifican la metodología de análisis de frecuencias ni las estaciones del IDEAM que se consultarán. En hidrología, los resultados dependen directamente de la calidad de los datos y del criterio técnico en su interpretación.</p>
      <p><strong>¿Su municipio o proyecto requiere un estudio hidrológico certificado?</strong> BIC cuenta con más de 10 años de experiencia en cuencas del Eje Cafetero y ha elaborado estudios para proyectos de acueducto, alcantarillado, licencias ambientales y planes de ordenamiento en Caldas, Risaralda y Quindío. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'crecientes-eje-cafetero-colombia': {
    title: 'Hidrología de los ríos del Eje Cafetero: amenazas, caudales y zonificación',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Análisis técnico de la hidrología de los principales ríos del Eje Cafetero colombiano: regímenes de caudal, períodos de retorno, eventos históricos y metodologías de análisis vigentes.',
    keywords: 'hidrología ríos Eje Cafetero Colombia, crecientes inundaciones Manizales Caldas, análisis caudales ríos cafeteros, amenaza inundación Caldas Risaralda',
    body: <>
      <p>El Eje Cafetero colombiano —conformado por los departamentos de Caldas, Risaralda y Quindío— presenta una de las hidrologías más dinámicas y complejas del país. Sus cuencas, enclavadas en los flancos occidentales de la Cordillera Central, combinan precipitaciones elevadas, topografía escarpada y suelos volcánicos que pueden comportarse como esponjas o como materiales deslizantes según el estado de saturación. Entender este régimen hidrológico es indispensable para diseñar cualquier infraestructura hidráulica o gestionar el riesgo en la región.</p>

      <h2>Caracterización hidrológica de la región cafetera</h2>
      <p>La región exhibe un régimen bimodal de lluvias: dos temporadas húmedas (marzo-mayo y septiembre-noviembre) y dos temporadas relativamente secas (diciembre-febrero y junio-agosto). La precipitación media anual varía entre 1.800 mm en los valles más secos y más de 4.000 mm en las cimas de las cordilleras. Manizales registra precipitaciones promedio de 2.200–2.600 mm/año, con marcada variabilidad interanual.</p>
      <p>El fenómeno ENSO (El Niño – La Niña) amplifica dramáticamente esta variabilidad. Durante los eventos de La Niña (fase fría del Pacífico), las lluvias en el Eje Cafetero pueden superar en un 40–60% los valores históricos promedio, incrementando proporcionalmente el riesgo de crecientes. El episodio de La Niña 2010–2011 dejó en Caldas más de 2.200 familias damnificadas y pérdidas que superaron los $180 mil millones COP en infraestructura pública.</p>

      <h2>Principales cuencas: Chinchiná, Risaralda, Otún y Consota</h2>
      <p>Las cuatro cuencas más relevantes para el diseño de infraestructura en la región son:</p>
      <ul>
        <li><strong>Río Chinchiná (Caldas):</strong> cuenca de 1.080 km², vertiente occidental de la Cordillera Central. Alimenta el acueducto de Manizales y ha presentado avenidas históricas con caudales máximos que superan 800 m³/s en estación Palestina. Alta carga de sedimentos en eventos de creciente.</li>
        <li><strong>Río Risaralda (Caldas/Risaralda):</strong> cuenca de ~2.400 km², afluente del río Cauca. Sus planicies de inundación en el sector de La Virginia presentan alta vulnerabilidad por urbanización en zona inundable.</li>
        <li><strong>Río Otún (Risaralda):</strong> cuenca de 480 km², fuente de abastecimiento de Pereira. Caudales máximos registrados de hasta 600 m³/s en la estación Libaré. Régimen torrentoso característico de cuencas de montaña.</li>
        <li><strong>Río Consota (Risaralda):</strong> cuenca urbana de Pereira, con alta impermeabilización que genera rápidos y frecuentes picos de inundación pluvial. Área crítica para gestión del riesgo urbano.</li>
      </ul>

      <h2>Metodologías de análisis de frecuencias en Colombia</h2>
      <p>El análisis de frecuencias hidrológicas busca estimar la probabilidad de ocurrencia de caudales extremos para distintos períodos de retorno. En Colombia, el protocolo técnico del IDEAM y el RAS 2017 recomiendan las siguientes distribuciones estadísticas para ajuste de series de caudales máximos anuales:</p>
      <ul>
        <li><strong>Distribución de Gumbel (Valor Extremo Tipo I):</strong> ampliamente usada para series de caudales máximos en cuencas andinas. Su aplicación requiere al menos 20 años de datos.</li>
        <li><strong>Log-Pearson Tipo III:</strong> distribución estándar del IDEAM para análisis de frecuencias en Colombia. Requiere el cálculo del coeficiente de asimetría de la serie logarítmica.</li>
        <li><strong>Distribución GEV (Valor Extremo Generalizado):</strong> recomendada para series cortas o con alta asimetría. Se ajusta bien a cuencas con régimen torrencial como las del Eje Cafetero.</li>
      </ul>
      <p>Las curvas IDF (Intensidad-Duración-Frecuencia) para municipios del Eje Cafetero están disponibles en el DHIME del IDEAM (dhime.ideam.gov.co). Muchos municipios de la región tienen estaciones pluviográficas con registros desde los años 1970, lo que permite construir curvas IDF confiables.</p>

      <h2>Implicaciones para diseño de infraestructura hidráulica</h2>
      <p>Las condiciones hidrológicas del Eje Cafetero imponen consideraciones de diseño específicas que no se aplican a cuencas de llanura: el tiempo de concentración de las cuencas de montaña es muy corto (2–8 horas para cuencas de 50–200 km²), lo que significa que las crecientes se desarrollan con gran velocidad. Un diseñador que use metodologías calibradas para cuencas planas subestimará los caudales de diseño y expondrá la infraestructura a fallas prematuras.</p>
      <p>Los coeficientes de escorrentía en suelos de ceniza volcánica saturada pueden llegar a 0,8–0,9 durante eventos de lluvia intensa sobre suelo húmedo. El uso de tablas genéricas de coeficientes sin análisis de la condición antecedente de humedad es uno de los errores más comunes y costosos en los estudios hidrológicos de la región.</p>
      <p><strong>¿Necesita análisis hidrológico específico para cuencas del Eje Cafetero?</strong> BIC cuenta con datos históricos, modelos calibrados y más de 10 años de experiencia en ríos de Caldas, Risaralda y Quindío. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'analisis-frecuencias-hidrologicas-colombia': {
    title: 'Análisis de frecuencias hidrológicas: metodología y aplicación en proyectos colombianos',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Guía técnica sobre análisis de frecuencias para cálculo de caudales de diseño en Colombia: distribuciones estadísticas, períodos de retorno y normativa IDEAM aplicable.',
    keywords: 'análisis frecuencias hidrológicas Colombia, caudal de diseño período retorno Colombia, distribuciones estadísticas hidrología, IDEAM hidrología Colombia',
    body: <>
      <p>El análisis de frecuencias hidrológicas es el procedimiento estadístico que permite estimar con qué frecuencia puede ocurrir un evento hidrológico extremo —una creciente, una sequía prolongada, un aguacero de alta intensidad— en una cuenca determinada. Es el fundamento técnico de cualquier diseño de infraestructura hidráulica: sin un análisis de frecuencias riguroso, el caudal de diseño es una estimación sin soporte y la estructura resultante puede fallar antes de su vida útil o ser innecesariamente sobredimensionada.</p>

      <h2>Fundamentos del análisis de frecuencias en hidrología</h2>
      <p>El análisis parte de una <strong>serie histórica de datos</strong>: registros de caudales máximos anuales, precipitaciones máximas diarias o caudales mínimos, registrados en estaciones hidrométrica o pluviométricas del IDEAM. A esta serie se le ajusta una distribución de probabilidad estadística, y con ella se estiman los valores correspondientes a distintos períodos de retorno (Tr): el número de años, en promedio, que transcurre entre eventos iguales o superiores a un valor dado.</p>
      <p>Un caudal con Tr = 100 años no significa que ocurra una sola vez cada siglo: significa que tiene una probabilidad de excedencia del 1% en cualquier año dado. Dicho de otra forma, hay un 63% de probabilidad de que ese caudal sea igualado o superado al menos una vez durante los 100 años de vida útil de la obra. Esta distinción es fundamental para comunicar el riesgo a los tomadores de decisiones.</p>

      <h2>Distribuciones estadísticas más usadas en Colombia</h2>
      <ul>
        <li><strong>Gumbel (Valor Extremo Tipo I):</strong> La más utilizada en la práctica colombiana para series de caudales máximos anuales. Su ajuste se realiza por el método de momentos (media y desviación estándar de la serie). Es apropiada cuando el coeficiente de asimetría es cercano a 1,14. Ventaja: cálculo simple y resultados robustos para series de más de 20 años.</li>
        <li><strong>Log-Pearson Tipo III:</strong> Distribución estándar recomendada por el IDEAM en sus protocolos técnicos. Se aplica a los logaritmos de la serie de caudales. Requiere el cálculo del coeficiente de asimetría (Cs) de la serie logarítmica, que determina el sesgo de la distribución. Es más flexible que Gumbel y puede ajustarse mejor a series con alta variabilidad.</li>
        <li><strong>GEV (Valor Extremo Generalizado):</strong> Distribución que engloba como casos particulares la Gumbel (ξ=0), Fréchet (ξ&gt;0) y Weibull negativa (ξ&lt;0). Recomendada para series cortas o con comportamiento atípico. Se ajusta por el método de L-momentos, que es más robusto frente a valores extremos que el método de momentos tradicional.</li>
      </ul>

      <h2>Selección del período de retorno según tipo de obra</h2>
      <p>El RAS 2017 y el Manual de Drenaje para Carreteras del INVIAS establecen períodos de retorno mínimos según el tipo de infraestructura y el nivel de riesgo aceptable:</p>
      <ul>
        <li><strong>Alcantarillado pluvial residencial:</strong> Tr = 5–10 años</li>
        <li><strong>Alcantarillado pluvial comercial/industrial:</strong> Tr = 10–25 años</li>
        <li><strong>Drenaje vial rural:</strong> Tr = 25–50 años</li>
        <li><strong>Bocatomas y captaciones:</strong> Tr = 50–100 años para el diseño de obras de protección</li>
        <li><strong>Obras de control de inundaciones en zonas urbanas:</strong> Tr = 100 años mínimo</li>
        <li><strong>Presas de almacenamiento (aliviadero):</strong> Tr = 1.000–10.000 años según la categoría de la presa</li>
      </ul>

      <h2>Pruebas de bondad de ajuste</h2>
      <p>Antes de usar una distribución de probabilidad para estimar caudales de diseño, es obligatorio verificar estadísticamente que la distribución elegida se ajusta razonablemente a los datos observados. Las pruebas más usadas en Colombia son:</p>
      <ul>
        <li><strong>Kolmogorov-Smirnov:</strong> compara la función de distribución acumulada empírica con la teórica. No requiere agrupación de datos. Es la prueba recomendada por el IDEAM para muestras de cualquier tamaño.</li>
        <li><strong>Chi-cuadrado (χ²):</strong> requiere agrupación de los datos en intervalos y un tamaño de muestra suficiente (mínimo 30 datos). Menos potente que K-S para muestras pequeñas.</li>
        <li><strong>Anderson-Darling:</strong> más sensible en las colas de la distribución, lo que es especialmente relevante para análisis de eventos extremos.</li>
      </ul>

      <h2>Software especializado disponible</h2>
      <p>Los programas más usados en Colombia para análisis de frecuencias hidrológicas son: <strong>HEC-SSP</strong> (USACE, gratuito) para análisis de caudales con ajuste automático de distribuciones; <strong>HYFRAN-PLUS</strong> (INRS, Canadá) para análisis avanzado con L-momentos; y el lenguaje <strong>R</strong> con paquetes como <em>lmomco</em> y <em>evd</em> para análisis estadístico robusto y reproducible.</p>
      <p><strong>BIC elabora análisis de frecuencias hidrológicas rigurosos con herramientas certificadas para proyectos de acueducto, alcantarillado, drenaje vial y licencias ambientales.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'curvas-idf-colombia': {
    title: 'Curvas IDF en Colombia: metodología, fuentes de datos y uso en diseño de infraestructura',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Guía técnica completa sobre curvas Intensidad-Duración-Frecuencia (IDF) en Colombia: metodología IDEAM, estaciones disponibles, ajuste regional y aplicación en diseño de drenajes.',
    keywords: 'curvas IDF Colombia diseño hidráulico, intensidad lluvia diseño Colombia IDEAM, IDF municipios Colombia, precipitación diseño Colombia',
    body: <>
      <p>Las curvas Intensidad-Duración-Frecuencia (IDF) son la herramienta estadística fundamental para el diseño de sistemas de drenaje urbano, vial y de control de inundaciones en Colombia. Relacionan la intensidad de la lluvia (mm/h), la duración del evento lluvioso (minutos u horas) y la frecuencia o período de retorno (años) para una estación pluviométrica o una región específica. Sin una curva IDF confiable y representativa de la zona del proyecto, el diseño del sistema de drenaje no tiene base técnica sólida.</p>

      <h2>¿Qué son las curvas IDF y por qué son críticas?</h2>
      <p>Imagine un aguacero de 30 minutos en Manizales: ¿cuántos milímetros de lluvia caen? ¿Qué tan frecuente es ese evento? Una curva IDF responde estas preguntas en forma de familia de curvas, una por cada período de retorno. Con estos datos, el ingeniero hidráulico puede calcular el caudal de diseño que debe manejar un canal, una tubería o un sumidero, sin necesidad de esperar a que ocurra el evento real.</p>
      <p>En el diseño de alcantarillado pluvial según el RAS 2017 (Título D), la intensidad de lluvia de diseño se extrae de la curva IDF correspondiente al período de retorno adoptado y al tiempo de concentración de la cuenca. Un error en la curva IDF se propaga directamente al caudal de diseño y al diámetro de las tuberías, comprometiendo la capacidad del sistema.</p>

      <h2>Fuentes oficiales de datos en Colombia</h2>
      <ul>
        <li><strong>DHIME (IDEAM):</strong> Sistema de Información Hidrometeorológico del IDEAM (dhime.ideam.gov.co). Es la fuente primaria de datos de precipitación en Colombia. Cuenta con más de 2.000 estaciones pluviométricas y pluviográficas distribuidas en todo el territorio nacional, con registros históricos desde la década de 1960 en muchas estaciones.</li>
        <li><strong>SIAC (Sistema de Información Ambiental de Colombia):</strong> Integra información ambiental de múltiples entidades. Útil para datos de precipitación en cuencas con POMCA adoptado.</li>
        <li><strong>Atlas de Precipitación del IDEAM:</strong> Publicaciones del IDEAM que incluyen isoyetas de precipitación media multianual para todo el país. Útil para la regionalización cuando no hay estación cercana al proyecto.</li>
        <li><strong>Corporaciones Autónomas Regionales:</strong> Algunas CAR, como CORPOCALDAS y CARDER, mantienen redes pluviométricas propias con datos complementarios a los del IDEAM.</li>
      </ul>

      <h2>Cómo construir una curva IDF cuando no hay estación cercana</h2>
      <p>En Colombia, muchas zonas rurales y municipios pequeños no tienen una estación pluviográfica cercana con registros suficientes para construir una curva IDF local. En estos casos, el profesional hidrológo tiene dos opciones técnicas válidas:</p>
      <ul>
        <li><strong>Regionalización hidrológica:</strong> Identificar estaciones en cuencas hidrográficamente homogéneas con la zona de estudio, construir curvas IDF para esas estaciones y transferir los resultados mediante relaciones de escala o funciones de regionalización. El IDEAM publicó en 2016 una regionalización de curvas IDF para las principales regiones hidrológicas de Colombia.</li>
        <li><strong>Uso de pluviometría:</strong> Con pluviómetros (que solo registran totales diarios) se pueden construir curvas IDF aproximadas usando relaciones entre precipitación de 24 horas y duraciones menores, calibradas con las estaciones pluviográficas más cercanas. El método requiere más supuestos y agrega incertidumbre.</li>
      </ul>

      <h2>Precauciones frente al cambio climático</h2>
      <p>Las curvas IDF construidas con datos históricos representan el régimen de precipitación del pasado. El cambio climático está modificando los patrones de lluvia en Colombia: mayor frecuencia de eventos extremos, incremento de la precipitación máxima en 24 horas, y alteración de los períodos de retorno efectivos. El IDEAM ha publicado proyecciones climáticas regionales que anticipan incrementos de hasta el 30% en las precipitaciones extremas en el Eje Cafetero para 2050–2070.</p>
      <p>Para proyectos con horizonte de diseño mayor a 30 años (embalses, sistemas de alcantarillado, obras de protección permanentes), se recomienda aplicar factores de ajuste climático o usar escenarios de precipitación proyectados, en lugar de confiar exclusivamente en los registros históricos.</p>
      <p><strong>BIC dispone de curvas IDF calibradas para el Eje Cafetero y puede elaborar análisis de frecuencias con datos actualizados del IDEAM para cualquier municipio de Colombia.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'hec-hms-colombia': {
    title: 'HEC-HMS en Colombia: modelación lluvia-escorrentía para estudios hidrológicos',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Software y Modelación',
    metaDesc: 'Guía técnica sobre el uso de HEC-HMS en proyectos de hidrología colombiana: configuración de cuencas, métodos de pérdidas, tránsito de crecientes y exportación a HEC-RAS.',
    keywords: 'HEC-HMS Colombia modelación hidrológica, lluvia escorrentía cuenca Colombia, HEC-HMS HEC-RAS integración, modelación hidrológica acueducto Colombia',
    body: <>
      <p>HEC-HMS (Hydrologic Modeling System) es el software de modelación hidrológica desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos, y es la herramienta estándar en Colombia para el análisis lluvia-escorrentía en proyectos de infraestructura hidráulica. Cuando no existen suficientes datos de caudales observados para un análisis de frecuencias directo, o cuando se necesita simular la respuesta hidrológica de una cuenca ante diferentes escenarios de precipitación, HEC-HMS es la solución técnica más apropiada y reconocida por las entidades reguladoras colombianas.</p>

      <h2>¿Qué es HEC-HMS y cuándo se usa en Colombia?</h2>
      <p>HEC-HMS transforma una tormenta de diseño (definida por la curva IDF y el período de retorno adoptado) en un hidrograma de creciente, es decir, en la variación del caudal a lo largo del tiempo en la sección de interés del río. Este hidrograma es el insumo que alimenta el modelo hidráulico (HEC-RAS) para simular las inundaciones resultantes.</p>
      <p>En Colombia, HEC-HMS se usa principalmente en: cuencas sin estaciones hidrométricas con datos suficientes para análisis de frecuencias directo; estudios de diseño de acueductos (caudal de diseño de la bocatoma); análisis de amenaza por inundación para POT y planes parciales; diseño de obras de control de crecientes; y estudios de impacto ambiental que requieren evaluar cambios en el régimen hidrológico.</p>

      <h2>Configuración de una cuenca en HEC-HMS</h2>
      <p>La construcción de un modelo HEC-HMS comienza con la delimitación automática de la cuenca hidrográfica a partir de un Modelo Digital de Elevación (MDE) usando ArcGIS/QGIS con la extensión HEC-GeoHMS. Este proceso define automáticamente los elementos del modelo: subcuencas, tramos de río, confluencias y puntos de salida (outlets).</p>
      <p>Los parámetros más importantes del modelo son:</p>
      <ul>
        <li><strong>Curva Número (CN) del SCS:</strong> parámetro adimensional que representa la capacidad de retención de agua del suelo según su tipo (A, B, C, D), el uso del suelo y la condición antecedente de humedad. En Colombia, los valores CN para suelos volcánicos del Eje Cafetero tienen características específicas que deben calibrarse frente a datos observados.</li>
        <li><strong>Tiempo de concentración (Tc):</strong> tiempo que tarda el agua en desplazarse desde el punto más alejado de la cuenca hasta la sección de análisis. En cuencas de montaña colombianas, el método de Kirpich suele dar buenos resultados para cuencas pequeñas (&lt;25 km²).</li>
        <li><strong>Coeficiente de almacenamiento (R) para el método de Clark:</strong> representa el retardo que produce la cuenca sobre el hidrograma de escorrentía directa.</li>
      </ul>

      <h2>Métodos de transformación precipitación-escorrentía</h2>
      <p>HEC-HMS ofrece múltiples métodos para transformar el exceso de precipitación en escorrentía directa. En Colombia se usan principalmente:</p>
      <ul>
        <li><strong>SCS Unit Hydrograph:</strong> el más utilizado en proyectos colombianos. Requiere el CN, el área de la cuenca y el tiempo de retardo. Es el método estándar del RAS 2017 para cuencas rurales.</li>
        <li><strong>Clark Unit Hydrograph:</strong> adecuado para cuencas con geometría compleja. Requiere la función de tiempo-área (tiempo de viaje a la sección de salida desde distintos puntos de la cuenca) y el coeficiente de almacenamiento R.</li>
        <li><strong>Kinematic Wave:</strong> método basado en física del flujo superficial. Más apropiado para cuencas urbanas con alta impermeabilización, como las de Manizales o Pereira.</li>
      </ul>

      <h2>Integración HEC-HMS → HEC-RAS para modelación completa</h2>
      <p>El flujo de trabajo típico en un estudio de amenaza por inundación en Colombia combina ambas herramientas: HEC-HMS calcula los hidrogramas de entrada para distintos períodos de retorno (Tr 10, 25, 50, 100 años), y estos hidrogramas se importan directamente como condiciones de contorno de caudal en el modelo HEC-RAS. HEC-RAS simula cómo esos caudales se mueven por el cauce y la planicie, produciendo los mapas de inundación.</p>
      <p>La integración es directa a través del formato DSS (Data Storage System) que comparten ambos programas. HEC-GeoRAS y RAS Mapper facilitan la preparación de las geometrías y la visualización de resultados en entornos SIG.</p>
      <p><strong>¿Necesita una modelación hidrológica integral con HEC-HMS y HEC-RAS para su proyecto en Colombia?</strong> BIC cuenta con el equipo técnico especializado y la experiencia en cuencas andinas para garantizar resultados técnicamente válidos. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'diseno-canales-colombia': {
    title: 'Diseño hidráulico de canales: fundamentos, fórmulas y normativa colombiana',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Manual técnico de diseño hidráulico de canales en Colombia: ecuación de Manning, diseño de canales en tierra y concreto, criterios de velocidad y tirante según RAS 2000.',
    keywords: 'diseño hidráulico canales Colombia, Manning canal Colombia RAS 2000, canal concreto tierra diseño hidráulico, diseño canal drenaje Colombia',
    body: <>
      <p>El diseño hidráulico de canales es una de las competencias fundamentales de la ingeniería hidráulica en Colombia, aplicable desde pequeñas obras de drenaje vial hasta grandes canales de riego, conducción de agua potable o evacuación de avenidas urbanas. Conocer los fundamentos del flujo en canales, los coeficientes de rugosidad apropiados para las condiciones del país y los criterios del RAS 2000 es indispensable para cualquier ingeniero que trabaje en infraestructura hídrica en Colombia.</p>

      <h2>Tipos de flujo en canales: uniforme, variado y crítico</h2>
      <p>El comportamiento hidráulico de un canal se clasifica según la variación del caudal y las características geométricas a lo largo del canal:</p>
      <ul>
        <li><strong>Flujo uniforme:</strong> el tirante hidráulico (profundidad del agua) y la velocidad son constantes a lo largo del canal. Ocurre cuando la pendiente de la solera es igual a la pendiente de la línea de energía. Es el caso de diseño más frecuente para canales de conducción de longitud significativa.</li>
        <li><strong>Flujo variado gradualmente:</strong> el tirante cambia lentamente a lo largo del canal. Ocurre en zonas de transición entre tramos de diferente pendiente, en el remanso generado aguas arriba de una compuerta o en la curva de descenso aguas abajo de una caída libre.</li>
        <li><strong>Flujo crítico:</strong> se presenta cuando el número de Froude (Fr) es igual a 1. En este estado, pequeñas perturbaciones generan grandes variaciones en el tirante. Debe evitarse como condición de diseño permanente, pues es inestable y puede generar oscilaciones.</li>
      </ul>

      <h2>Ecuación de Manning: coeficientes n para materiales colombianos</h2>
      <p>La ecuación de Manning es la herramienta de cálculo universal para flujo uniforme en canales abiertos: V = (1/n) × R^(2/3) × S^(1/2), donde V es la velocidad media (m/s), n es el coeficiente de rugosidad de Manning, R es el radio hidráulico (m) y S es la pendiente de la solera (m/m).</p>
      <p>Los valores del coeficiente n más usados en proyectos colombianos:</p>
      <ul>
        <li><strong>Concreto liso (forma lisa de encofrado):</strong> n = 0,012–0,014</li>
        <li><strong>Concreto vibrado (acabado normal):</strong> n = 0,014–0,016</li>
        <li><strong>Mampostería de piedra:</strong> n = 0,017–0,025</li>
        <li><strong>Canal en tierra sin revestimiento, limpio:</strong> n = 0,022–0,028</li>
        <li><strong>Canal en tierra con vegetación media:</strong> n = 0,030–0,040</li>
        <li><strong>Cauce natural de río andino con grava y bloques:</strong> n = 0,035–0,060</li>
      </ul>

      <h2>Criterios de diseño según RAS 2000 Título B</h2>
      <p>El RAS 2000 y la Resolución 0330 de 2017 establecen los criterios técnicos que deben cumplir los canales en proyectos de acueducto y saneamiento en Colombia:</p>
      <ul>
        <li><strong>Velocidad mínima:</strong> 0,60 m/s para evitar sedimentación y crecimiento de algas en canales de conducción de agua potable.</li>
        <li><strong>Velocidad máxima:</strong> 3,0–5,0 m/s para canales revestidos en concreto. En canales no revestidos en tierra, la velocidad máxima depende del tipo de suelo (0,6–1,2 m/s para suelos granulares).</li>
        <li><strong>Borde libre:</strong> Distancia vertical entre la lámina de agua de diseño y el borde superior del canal. El RAS recomienda mínimo 15% del tirante de diseño, con un mínimo de 0,30 m para canales con caudal mayor a 0,5 m³/s.</li>
        <li><strong>Pendiente mínima:</strong> 0,001 m/m para garantizar velocidades de autolimpieza en canales de alcantarillado.</li>
      </ul>

      <h2>Diseño de canales en tierra: consideraciones de erosión</h2>
      <p>Los canales no revestidos en tierra son frecuentes en obras de riego y drenaje rural en Colombia. Su diseño debe verificar que la tensión cortante en el fondo del canal no supere la tensión crítica del suelo, para evitar erosión progresiva. En suelos tropicales del Eje Cafetero (suelos de ceniza volcánica con baja cohesión), los límites de velocidad son más restrictivos y suele recomendarse revestimiento mínimo en los tramos con mayores pendientes.</p>
      <p><strong>BIC realiza diseños hidráulicos de canales con cumplimiento estricto del RAS 2000 y la Resolución 0330/2017 para proyectos de acueducto, alcantarillado pluvial y drenaje vial en Colombia.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'ronda-hidrica-colombia': {
    title: 'Ronda hídrica en Colombia: qué es, cómo se delimita y qué implica para su municipio',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Normativa',
    metaDesc: 'Guía jurídico-técnica sobre ronda hídrica en Colombia: definición según el Decreto 2245 de 2017, metodología de delimitación, obligaciones de alcaldías y ESPs. Con ejemplos prácticos.',
    keywords: 'ronda hídrica Colombia delimitación, Decreto 2245 Colombia ronda hídrica, delimitación ronda hídrica municipio, ronda hídrica POT Colombia',
    body: <>
      <p>La ronda hídrica es uno de los conceptos más importantes —y más mal aplicados— en el ordenamiento territorial colombiano. Miles de construcciones en el país se ubican dentro de áreas que legalmente corresponden a la ronda hídrica de ríos, quebradas o humedales, sin que sus propietarios ni las autoridades municipales tengan plena conciencia de las implicaciones legales y técnicas. Este artículo explica qué es la ronda hídrica, quién la delimita y qué consecuencias tiene para municipios, propietarios y proyectos de infraestructura.</p>

      <h2>Marco legal: Decreto 2245 de 2017 y antecedentes normativos</h2>
      <p>El <strong>Decreto 2245 de 2017</strong> del Ministerio de Ambiente y Desarrollo Sostenible es la norma vigente que regula la delimitación de rondas hídricas en Colombia. Establece que la ronda hídrica es la zona de protección ambiental e hidráulica no edificable de uso público, constituida por una faja paralela a la línea de mareas máximas o de cauce permanente de ríos y lagos, hasta de treinta metros de ancho.</p>
      <p>Sin embargo, el Decreto 2245 también permite que las Corporaciones Autónomas Regionales, mediante acto administrativo motivado técnicamente, fijen una ronda hídrica diferente a los 30 metros cuando las condiciones geomorfológicas, hidrológicas o de riesgo así lo justifiquen. En la práctica, esto significa que la ronda hídrica puede ser mayor a 30 metros en cuencas con alta dinámica fluvial o en zonas de planicie de inundación activa.</p>

      <h2>Diferencia entre ronda hídrica, faja de retiro y zona de manejo y preservación ambiental</h2>
      <ul>
        <li><strong>Ronda hídrica:</strong> La franja de protección inmediata al cuerpo de agua. No edificable. Puede ser de dominio público (si pertenece al cauce) o privado con afectación de uso.</li>
        <li><strong>Zona de manejo y preservación ambiental (ZMPA):</strong> Franja adicional contigua a la ronda hídrica, definida por las CAR, orientada a la protección del ecosistema ripario. Puede admitir usos compatibles con la conservación.</li>
        <li><strong>Faja de retiro municipal:</strong> Establecida en el POT, puede coincidir con la ronda hídrica o ser más amplia. Es el instrumento de planificación que operativiza la ronda hídrica a nivel urbano.</li>
      </ul>

      <h2>¿Quién debe delimitar la ronda hídrica en Colombia?</h2>
      <p>La competencia para delimitar la ronda hídrica de los cuerpos de agua no urbanos corresponde a las <strong>Corporaciones Autónomas Regionales</strong> (CORPOCALDAS, CARDER, CRQ en el Eje Cafetero). Para cuerpos de agua urbanos, la competencia es de las CAR en coordinación con los municipios. Los Planes de Ordenamiento Territorial (POT) deben incorporar las rondas hídricas delimitadas por las CAR como determinantes ambientales de obligatorio cumplimiento.</p>

      <h2>Metodología técnica para la delimitación</h2>
      <p>La delimitación técnica de la ronda hídrica combina análisis geomorfológico, hidrológico e hidráulico:</p>
      <ul>
        <li><strong>Topografía y levantamiento batimétrico:</strong> definición precisa de la sección transversal del cauce y la planicie adyacente, con estación total y GPS RTK o fotogrametría con drone.</li>
        <li><strong>Análisis morfológico del cauce:</strong> identificación de la línea de cauce permanente (bancas llenas), terrazas fluviales y señales de inundación histórica en la vegetación y suelos.</li>
        <li><strong>Modelación hidráulica para determinación de área de inundación:</strong> el área inundable para el caudal de aguas máximas ordinarias (período de retorno 2,33 años) define la extensión mínima de la ronda hídrica según criterio hidráulico.</li>
        <li><strong>Criterio de vulnerabilidad geotécnica:</strong> en zonas de ladera, la ronda puede extenderse hasta los límites de estabilidad de los taludes ribereños.</li>
      </ul>

      <h2>Consecuencias legales de construir en ronda hídrica</h2>
      <p>Construir en zona de ronda hídrica sin autorización de la CAR constituye una infracción ambiental que puede acarrear: multas hasta de 5.000 salarios mínimos mensuales legales vigentes (Ley 1333 de 2009), demolición de obras construidas en infracción, imposibilidad de obtener licencia de construcción o uso del suelo para el predio afectado, y en casos graves, medidas preventivas como sellamiento de obras.</p>
      <p><strong>BIC ha delimitado rondas hídricas en más de 15 municipios del Eje Cafetero, con aceptación de CORPOCALDAS, CARDER y CRQ.</strong> Si su municipio o proyecto necesita este estudio, contáctenos. <strong>ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'aforo-caudales-colombia': {
    title: 'Aforo de caudales: métodos, equipos y aplicación en proyectos hidráulicos colombianos',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Guía técnica sobre aforo de caudales en Colombia: método del flotador, molinete, ADCP, dilución de trazadores. Cuándo usar cada método y cómo interpretar los datos.',
    keywords: 'aforo caudales Colombia métodos, medición caudal río Colombia, ADCP aforo hidrológico Colombia, aforo hidrométrico Colombia',
    body: <>
      <p>El aforo hidrométrico —la medición directa del caudal de un río o quebrada en un punto específico— es la base de todo estudio hidrológico serio en Colombia. Sin datos de caudal medidos en campo, los modelos hidrológicos dependen de estimaciones indirectas con mayor incertidumbre. Pero más allá del dato numérico, un aforo bien ejecutado aporta información sobre el régimen del río, la distribución de velocidades en la sección y las condiciones de sedimento en transporte, información que los algoritmos no pueden reemplazar.</p>

      <h2>¿Por qué es fundamental el aforo en estudios hidrológicos?</h2>
      <p>Los registros históricos del IDEAM, que son la principal fuente de datos hidrológicos en Colombia, tienen cobertura limitada: existen poco más de 1.500 estaciones hidrométricas activas para un territorio de 1.1 millones de km². En cuencas sin estaciones cercanas —la mayoría de las cuencas que atienden acueductos municipales pequeños— el aforo de campo es la única forma de obtener datos de caudal representativos.</p>
      <p>Además, los aforos de campo son indispensables para: calibrar modelos lluvia-escorrentía (HEC-HMS), verificar el caudal concesionado ante la Corporación Autónoma Regional, diseñar la bocatoma con el caudal real disponible en estiaje, y monitorear el impacto ambiental de obras que modifican el cauce.</p>

      <h2>Métodos de aforo: ventajas y limitaciones</h2>
      <ul>
        <li><strong>Método del flotador:</strong> El más simple. Se lanza un objeto flotante (botella plástica a media carga de agua) en el centro del cauce y se mide el tiempo de recorrido entre dos secciones conocidas. La velocidad superficial se multiplica por un factor de corrección (0,80–0,85) para obtener la velocidad media. Apropiado para quebradas torrentosas de montaña donde no es seguro ingresar al agua. Precisión: ±15–25%.</li>
        <li><strong>Molinete hidrométrico:</strong> Instrumento que mide la velocidad del agua en puntos específicos de la sección mediante hélices calibradas. El método de los dos puntos (0,2y y 0,8y de la profundidad) o el método del punto (0,6y) permite calcular la velocidad media en cada vertical. Es el método estándar del IDEAM para aforos en condiciones normales. Precisión: ±5–10%.</li>
        <li><strong>ADCP (Acoustic Doppler Current Profiler):</strong> El método más moderno y preciso. El dispositivo se desplaza transversalmente al cauce desde una embarcación o bote inflable y mide la velocidad en toda la columna de agua mediante el efecto Doppler. Ideal para ríos grandes como el Cauca, Magdalena, Chinchiná o Risaralda. Precisión: ±2–5%. Su principal limitación es el costo del equipo y la necesidad de condiciones de operación seguras.</li>
        <li><strong>Dilución de trazadores:</strong> Se inyecta una sustancia trazadora (sal de cloruro de sodio, fluoresceína) en el cauce y se mide su concentración aguas abajo hasta recuperar el balance de masa. Ideal para quebradas de difícil acceso, con flujo torrentoso o con sección muy irregular donde los otros métodos no son aplicables. Muy usado en estudios de cuencas de alta montaña en el Eje Cafetero.</li>
      </ul>

      <h2>Curvas de descarga y estaciones limnigráficas del IDEAM</h2>
      <p>Una estación limnimétrica registra continuamente el nivel del agua (limnímetro o limnigráfo). Para convertir estos niveles continuos en caudales continuos, se construye la <strong>curva de descarga</strong> (relación nivel-caudal): se realizan aforos en distintos niveles del río y se ajusta una curva matemática que relaciona nivel con caudal.</p>
      <p>Las estaciones del IDEAM con curva de descarga calibrada son los puntos más valiosos de información hidrológica del país. En el Eje Cafetero, estaciones como Palestina (Chinchiná), Libaré (Otún) y La Virginia (Risaralda) tienen registros desde los años 1960 y son fundamentales para los estudios de la región.</p>
      <p><strong>¿Necesita aforos hidrométricos certificados para su estudio de hidrología, diseño de acueducto o concesión de agua?</strong> BIC cuenta con equipos ADCP y molinetes calibrados, y personal técnico especializado. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'modelacion-1d-2d-colombia': {
    title: 'Modelación hidráulica 1D vs 2D en Colombia: guía técnica para tomar la decisión correcta',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Software y Modelación',
    metaDesc: 'Comparación técnica entre modelación hidráulica 1D (HEC-RAS, ISIS) y 2D (HEC-RAS 2D, MIKE FLOOD) para proyectos colombianos: criterios de selección, costos y resultados.',
    keywords: 'modelación hidráulica 1D 2D Colombia diferencias, HEC-RAS 1D 2D comparativa, cuándo usar modelación bidimensional, modelación hidráulica Colombia',
    body: <>
      <p>Cuando un proyecto en Colombia requiere un estudio de amenaza por inundación, la primera pregunta que surge es si se necesita un modelo hidráulico 1D o 2D. La respuesta influye directamente en el costo del estudio, los datos requeridos y la validez técnica del análisis ante la ANLA, las Corporaciones Autónomas o las Curadurías Urbanas. Elegir mal —proponer un modelo 1D donde se requiere 2D, o contratar un 2D innecesario— tiene consecuencias en el presupuesto y en los tiempos del proyecto.</p>

      <h2>¿Qué información produce cada tipo de modelo?</h2>
      <p>Ambos tipos de modelo simulan el comportamiento del agua en el cauce y la planicie de inundación, pero con diferente nivel de detalle espacial:</p>
      <ul>
        <li><strong>Modelo 1D:</strong> calcula nivel de agua, velocidad media y caudal en secciones transversales definidas por el modelador. Produce perfiles longitudinales de nivel de agua. No captura la dirección del flujo en la planicie: asume que el flujo es esencialmente paralelo al eje del cauce.</li>
        <li><strong>Modelo 2D:</strong> calcula nivel de agua, velocidad y dirección del flujo en cada celda de una malla que cubre toda el área de inundación. Produce mapas de calado (profundidad de agua), velocidad y amenaza sobre todo el dominio. Captura la dinámica lateral del flujo con resolución espacial.</li>
      </ul>

      <h2>Modelo 1D: aplicaciones ideales en Colombia</h2>
      <p>El modelo 1D es técnicamente apropiado y suficiente en los siguientes casos:</p>
      <ul>
        <li>Diseño de obras puntuales: puentes, alcantarillas, azudes, compuertas. La geometría está bien definida y el flujo es esencialmente longitudinal.</li>
        <li>Análisis de perfil de la línea de agua en canales de conducción o irrigación de geometría regular.</li>
        <li>Cauces de montaña con llanura de inundación estrecha (menos de 3–5 veces el ancho del cauce), donde el flujo lateral es despreciable.</li>
        <li>Pre-diseño y estudios de prefactibilidad donde se necesitan resultados rápidos con datos limitados.</li>
      </ul>

      <h2>Modelo 2D: cuándo es imprescindible</h2>
      <p>El modelo 2D es necesario cuando la física del flujo no puede simplificarse a una dimensión:</p>
      <ul>
        <li><strong>Llanuras de inundación amplias:</strong> cuando el agua puede moverse en múltiples direcciones sobre la planicie (ríos de piedemonte, sectores de confluencia).</li>
        <li><strong>Zonas urbanas:</strong> edificaciones, vías elevadas y muros forman barreras que desvían el flujo. Solo un modelo 2D captura estos efectos con realismo.</li>
        <li><strong>Exigencias de ANLA y CAR:</strong> los términos de referencia para licencias ambientales de proyectos con intervención de rondas hídricas en áreas mayores a 1 km² generalmente exigen modelación 2D.</li>
        <li><strong>Zonificación de amenaza para POT:</strong> los mapas de amenaza (alta, media, baja) que exige el MVCT para actualización de POT requieren información espacial de calado y velocidad que solo produce el modelo 2D.</li>
        <li><strong>Diseño de obras de mitigación:</strong> cuando se necesita demostrar que una obra (jarillón, canal de alivio) reduce la inundación aguas arriba y aguas abajo, el modelo 2D es el único que puede hacerlo con rigor.</li>
      </ul>

      <h2>Modelo acoplado 1D-2D: la solución híbrida</h2>
      <p>HEC-RAS permite acoplar tramos 1D (el cauce principal con sección bien definida) con dominios 2D (la planicie de inundación). Esta solución es eficiente computacionalmente y técnicamente apropiada cuando el cauce tiene una geometría bien definida pero la planicie es compleja. Es muy utilizada en estudios de ríos grandes colombianos donde los datos batimétricos del cauce son buenos pero el terreno de la planicie es extenso y variable.</p>

      <h2>Comparativa de costos orientativos en Colombia</h2>
      <ul>
        <li><strong>Estudio 1D para diseño de puente o alcantarilla:</strong> $5–$15 millones COP</li>
        <li><strong>Estudio 1D para análisis de perfil hidráulico:</strong> $10–$25 millones COP</li>
        <li><strong>Estudio 2D para zonificación de amenaza (área 200 ha):</strong> $25–$60 millones COP</li>
        <li><strong>Estudio 2D para licencia ambiental (ANLA):</strong> $40–$100 millones COP</li>
      </ul>
      <p><strong>El equipo de BIC selecciona la metodología óptima según su presupuesto, los requisitos normativos y las características de la cuenca.</strong> Solicite una consulta técnica gratuita. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

}

export default articlesA
