// Category D: Gestión del Riesgo, Territorio y Casos Prácticos (6 articles: D-01 to D-06)
const articlesD: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'riesgo-inundacion-eje-cafetero': {
    title: 'Riesgo de inundación en el Eje Cafetero colombiano: diagnóstico técnico y estrategias de reducción',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Análisis técnico de la amenaza por inundación en municipios de Caldas, Risaralda y Quindío: eventos históricos, metodologías de zonificación y herramientas para la reducción del riesgo.',
    keywords: 'riesgo inundación Eje Cafetero Colombia, amenaza inundación Caldas Risaralda municipios, gestión riesgo hidráulico Manizales, inundaciones Eje Cafetero Colombia',
    body: <>
      <p>El Eje Cafetero colombiano —Caldas, Risaralda y Quindío— concentra algunas de las condiciones más complejas de riesgo por inundación del país: cuencas cortas y empinadas que generan crecientes rápidas y violentas, suelos volcánicos que pueden pasar de alta permeabilidad a comportamiento impermeable en cuestión de horas cuando se saturan, y una dinámica urbana que ha expandido las ciudades sobre antiguas planicies de inundación sin la evaluación de riesgo correspondiente. Este artículo presenta el diagnóstico técnico y las herramientas disponibles para reducir el riesgo en la región.</p>

      <h2>Caracterización del riesgo hídrico en el Eje Cafetero</h2>
      <p>Las cuencas del Eje Cafetero presentan un conjunto de características que amplifican el riesgo de inundación frente a otras regiones del país:</p>
      <ul>
        <li><strong>Régimen bimodal de lluvias:</strong> Dos temporadas lluviosas al año (abril-mayo y octubre-noviembre), con precipitaciones intensas que en eventos extremos pueden superar los 80 mm/hora en menos de 30 minutos.</li>
        <li><strong>Tiempos de concentración cortos:</strong> Las cuencas urbanas de Manizales, Pereira y Armenia tienen tiempos de concentración de 15–90 minutos, lo que significa que una creciente puede desarrollarse antes de que los sistemas de alerta tempranas puedan activarse.</li>
        <li><strong>Alta carga de sedimentos:</strong> Los ríos del Eje Cafetero transportan entre 500 y 5.000 mg/L de sedimentos en suspensión durante eventos de creciente, lo que produce colmatación de canales y reducción de la capacidad hidráulica de las infraestructuras existentes.</li>
        <li><strong>Suelos volcánicos sensibles:</strong> Los suelos de ceniza volcánica del Eje Cafetero tienen una alta capacidad de infiltración cuando están secos (lo que puede llevar a subestimar los coeficientes de escorrentía), pero se comportan como arcillas plásticas cuando se saturan, generando escorrentía superficial masiva y movimientos en masa.</li>
      </ul>

      <h2>Eventos históricos documentados: 2010–2011 y sus lecciones</h2>
      <p>El Fenómeno de La Niña 2010–2011 —el más intenso registrado en Colombia en los últimos 50 años— fue el evento que evidenció la magnitud del problema. En el Eje Cafetero, la emergencia dejó:</p>
      <ul>
        <li>Más de 45.000 familias damnificadas en Caldas, Risaralda y Quindío combinados.</li>
        <li>Pérdidas en infraestructura vial superiores a $350 mil millones COP solo en Caldas.</li>
        <li>Daños en sistemas de acueducto y alcantarillado en más de 20 municipios.</li>
        <li>Desbordamientos del río Chinchiná que afectaron sectores urbanizados de la zona industrial de Manizales.</li>
      </ul>
      <p>El evento confirmó una realidad que los estudios hidrológicos venían advirtiendo: los sistemas de drenaje existentes en las ciudades del Eje Cafetero fueron diseñados para períodos de retorno de 5–10 años, insuficientes para los eventos que el cambio climático está haciendo más frecuentes.</p>

      <h2>Metodologías de zonificación vigentes (Decreto 1807 de 2014)</h2>
      <p>El <strong>Decreto 1807 de 2014</strong> establece la metodología para incorporar la gestión del riesgo en los POT municipales. Para la amenaza por inundación, exige:</p>
      <ul>
        <li>Cartografía de amenaza alta (Tr 25–50 años), media (Tr 50–100 años) y baja (Tr 100–500 años) a escala 1:5.000 en suelo urbano.</li>
        <li>Análisis de vulnerabilidad de la infraestructura expuesta.</li>
        <li>Mapa de riesgo resultante de la superposición de amenaza y vulnerabilidad.</li>
        <li>Definición de las medidas de mitigación aceptadas (obras de protección, reglamentación del uso del suelo o reasentamientos) para cada zona de riesgo.</li>
      </ul>

      <h2>Obras de mitigación: jarillones, espolones y rectificaciones</h2>
      <p>Las obras de control de inundaciones más usadas en el Eje Cafetero son:</p>
      <ul>
        <li><strong>Jarillones o diques de protección:</strong> Terraplenes longitudinales paralelos al cauce que confinan la creciente dentro del corredor del río. Requieren diseño cuidadoso de estabilidad geotécnica (suelos volcánicos) y mantenimiento permanente para evitar erosión interna.</li>
        <li><strong>Espolones de protección de orillas:</strong> Estructuras perpendiculares o en ángulo al cauce que desvían el flujo del río hacia el centro del cauce, protegiendo las orillas de la socavación lateral.</li>
        <li><strong>Canales de alivio:</strong> Canales paralelos al cauce que derivan parte del caudal de creciente hacia zonas de menor vulnerabilidad, reduciendo el pico de la creciente en el sector crítico.</li>
        <li><strong>Tanques de detención:</strong> Estructuras de almacenamiento temporal que capturan el volumen de la creciente y lo liberan lentamente una vez ha pasado el pico.</li>
      </ul>
      <p><strong>BIC ha desarrollado estudios de amenaza y riesgo hídrico en más de 10 municipios del Eje Cafetero, con modelos HEC-RAS 2D calibrados y aceptados por CORPOCALDAS, CARDER y las Curadurías Urbanas de la región.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'estabilidad-taludes-eje-cafetero': {
    title: 'Geotecnia de laderas en el Eje Cafetero: análisis de estabilidad y medidas de mitigación',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Hidrología Técnica',
    metaDesc: 'Análisis técnico de estabilidad de taludes en zonas de ladera del Eje Cafetero colombiano: suelos tropicales residuales, metodologías de análisis (Bishop, Spencer) y medidas de estabilización.',
    keywords: 'estabilidad taludes Eje Cafetero geotecnia Colombia, movimientos en masa Caldas Colombia, geotecnia suelos tropicales Colombia, análisis estabilidad ladera Colombia',
    body: <>
      <p>El Eje Cafetero colombiano es una de las regiones del mundo con mayor densidad de movimientos en masa por unidad de área. Sus laderas, modeladas en suelos de ceniza volcánica y materiales de alteración tropical de alta profundidad, combinadas con lluvias intensas y frecuentes, generan un ambiente propicio para deslizamientos, flujos de lodo y caídas de roca que representan el segundo mayor factor de riesgo natural en la región, después de las inundaciones. En BIC integramos el análisis geotécnico de laderas con los estudios hidrológicos, porque los dos fenómenos están íntimamente conectados: las lluvias que generan crecientes son las mismas que saturan los suelos y desencadenan los deslizamientos.</p>

      <h2>Contexto geomorfológico: el Eje Cafetero como zona de alta susceptibilidad</h2>
      <p>La región cafetera se asienta sobre un paisaje de laderas con pendientes entre 30° y 60°, talladas en materiales piroclásticos (cenizas volcánicas, lapilli) depositados por los volcanes de la Cordillera Central durante los últimos 30.000 años. Estos materiales tienen características geotécnicas peculiares:</p>
      <ul>
        <li><strong>Alta porosidad y permeabilidad en estado seco:</strong> Los suelos de ceniza absorben rápidamente el agua de lluvia, lo que puede llevar a subestimar el coeficiente de escorrentía en períodos secos.</li>
        <li><strong>Rápida pérdida de resistencia al saturarse:</strong> Cuando el suelo alcanza la saturación completa (generalmente en eventos de lluvia acumulada superior a 80–120 mm en 24 horas), la resistencia al corte disminuye drásticamente y se activan los mecanismos de falla.</li>
        <li><strong>Alta sensibilidad a la vibración:</strong> Algunos suelos volcánicos del Eje Cafetero son sensibles a la vibración (licuables ante sacudidas sísmicas), lo que hace que el análisis sísmico sea relevante en las zonas de mayor amenaza sísmica.</li>
        <li><strong>Perfiles de alteración profundos:</strong> La roca fresca puede encontrarse a profundidades de 20–60 metros bajo la superficie. Las fallas ocurren generalmente en la interfaz entre el material residual de alta porosidad y el material más compacto subyacente, donde se acumula la presión de poros.</li>
      </ul>

      <h2>Métodos de análisis de estabilidad de taludes</h2>
      <p>El análisis de estabilidad de un talud busca calcular el <strong>Factor de Seguridad (FS)</strong>: la relación entre las fuerzas estabilizadoras y las fuerzas desestabilizadoras actuantes sobre una superficie de falla potencial. FS &gt; 1,5 se considera estable; FS &lt; 1,0 indica falla inminente. Los métodos más usados en Colombia son:</p>
      <ul>
        <li><strong>Método de Bishop Simplificado:</strong> Análisis de equilibrio límite para superficies de falla circulares. Es el más usado en la práctica porque tiene buena precisión con bajo costo computacional. Requiere: perfil del talud, parámetros geotécnicos (cohesión c y ángulo de fricción φ del suelo) y nivel freático.</li>
        <li><strong>Método de Spencer:</strong> Más riguroso que Bishop para superficies no circulares. Satisface todas las condiciones de equilibrio. Recomendado cuando la superficie de falla tiene forma compleja o cuando se analiza taludes con materiales estratificados.</li>
        <li><strong>Análisis probabilístico:</strong> Incorpora la variabilidad de los parámetros geotécnicos mediante distribuciones estadísticas y calcula la probabilidad de falla (Pf). Especialmente útil en taludes críticos donde la incertidumbre en los parámetros es alta.</li>
      </ul>
      <p>El software más usado en Colombia para estos análisis es <strong>SLIDE</strong> y <strong>SLOPE/W</strong> (parte de la suite GeoStudio). Ambos permiten análisis estáticos, pseudoestáticos (sismo) y de flujo de agua en el talud.</p>

      <h2>Articulación con estudios hidrológicos</h2>
      <p>La conexión entre hidrología y estabilidad de taludes es directa: las presiones de poros en el talud dependen de los patrones de infiltración y del nivel freático, que a su vez dependen del régimen de lluvias. Un análisis de estabilidad riguroso en el Eje Cafetero debe incorporar:</p>
      <ul>
        <li>El análisis de lluvia acumulada antecedente que desencadena los deslizamientos (basado en registros históricos del IDEAM).</li>
        <li>El modelado del flujo transitorio de agua en el suelo (usando SEEP/W o software equivalente) para calcular cómo evoluciona el nivel freático durante una tormenta.</li>
        <li>El análisis de estabilidad para las condiciones de nivel freático máximo, que es la condición crítica para el diseño de medidas de mitigación.</li>
      </ul>
      <p><strong>BIC integra geotecnia e hidrología para análisis de estabilidad de taludes en laderas del Eje Cafetero, con enfoque multidisciplinario que garantiza resultados técnicamente sólidos.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'regalias-acueducto-colombia': {
    title: 'Financiar un acueducto con regalías en Colombia: guía para alcaldes y secretarios de planeación',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Regalías SGR',
    metaDesc: 'Guía práctica sobre el uso de regalías SGR para proyectos de agua potable y saneamiento básico en Colombia: criterios de elegibilidad, formulación MGA Web, OCAD y banco de proyectos.',
    keywords: 'regalías agua potable acueducto Colombia municipios, SGR Colombia acueducto financiación, OCAD agua saneamiento Colombia, financiar acueducto regalías Colombia',
    body: <>
      <p>El <strong>Sistema General de Regalías (SGR)</strong> es la principal fuente de financiación de infraestructura de agua potable y saneamiento en los municipios colombianos de categoría 4, 5 y 6. En el período 2023–2024, el SGR aprobó proyectos de agua y saneamiento por más de $1,2 billones COP en todo el país. Sin embargo, acceder a esos recursos no es automático: requiere un proceso de formulación técnica rigurosa, aprobación ante los OCAD y gestión de documentos que muchos municipios pequeños no pueden asumir solos. Esta guía explica el proceso desde el inicio.</p>

      <h2>¿Cuánto dinero del SGR puede destinarse a agua potable?</h2>
      <p>La distribución del SGR en Colombia está regulada por el Acto Legislativo 05 de 2011 y sus decretos reglamentarios. Los recursos disponibles para infraestructura de agua potable y saneamiento provienen principalmente de:</p>
      <ul>
        <li><strong>Fondos de Asignaciones Directas:</strong> Para municipios y departamentos productores de hidrocarburos o minerales. Pueden usarse para cualquier proyecto de inversión, incluyendo agua y saneamiento.</li>
        <li><strong>Fondo de Compensación Regional:</strong> Dirigido específicamente a municipios con necesidades básicas insatisfechas y menor desarrollo relativo. El agua potable es uno de los sectores prioritarios.</li>
        <li><strong>Fondo de Desarrollo Regional:</strong> Para proyectos de impacto regional. Los sistemas de acueducto que atienden varios municipios son elegibles.</li>
        <li><strong>Fondo de Paz:</strong> En municipios priorizados por el Acuerdo de Paz. Proyectos de agua rural tienen alta prioridad.</li>
      </ul>

      <h2>Tipos de proyectos elegibles: qué puede financiar el SGR</h2>
      <p>En el sector de agua potable y saneamiento básico, el SGR financia:</p>
      <ul>
        <li>Construcción de nuevos sistemas de acueducto (captación, conducción, PTAP, almacenamiento, red de distribución).</li>
        <li>Ampliación y mejoramiento de sistemas existentes (incremento de cobertura, mejora de la calidad del agua, reducción del IRCA).</li>
        <li>Rehabilitación de redes de distribución con alto índice de pérdidas (agua no contaminada).</li>
        <li>Construcción o mejoramiento de PTAP (plantas de tratamiento de agua potable).</li>
        <li>Sistemas de alcantarillado sanitario y pluvial.</li>
        <li>Plantas de tratamiento de aguas residuales (PTAR).</li>
        <li>Acueductos veredales y sistemas de abastecimiento rural.</li>
      </ul>

      <h2>Paso a paso para acceder a regalías para agua</h2>
      <ul>
        <li><strong>Paso 1 – Identificación de la fuente de recursos:</strong> Determine si su municipio tiene asignaciones directas, o si debe concursar ante el OCAD departamental o regional. El DNP (mapa de inversiones SGR) tiene esta información disponible en línea.</li>
        <li><strong>Paso 2 – Formulación en MGA Web:</strong> El proyecto debe formularse en la Metodología General Ajustada (MGA Web) del DNP, siguiendo el sector de "Agua Potable y Saneamiento Básico" y los lineamientos técnicos del Ministerio de Vivienda. Esta es la etapa más técnica y donde más proyectos fallan.</li>
        <li><strong>Paso 3 – Concepto de viabilidad sectorial:</strong> El Ministerio de Vivienda emite el concepto de viabilidad técnica del proyecto antes de que pueda ser presentado al OCAD. Para obtenerlo, se necesitan diseños básicos, estudios de alternativas y presupuesto con APU detallados.</li>
        <li><strong>Paso 4 – Inscripción en el BPIN:</strong> El proyecto debe registrarse en el Banco de Proyectos de Inversión Nacional (BPIN) del DNP antes de ser presentado al OCAD.</li>
        <li><strong>Paso 5 – Sesión del OCAD y aprobación:</strong> El OCAD (Órgano Colegiado de Administración y Decisión) revisa el proyecto, escucha a los delegados del DNP y el Ministerio de Vivienda, y decide si lo aprueba, lo devuelve con condicionamientos o lo rechaza.</li>
      </ul>

      <h2>Tiempos realistas y errores frecuentes</h2>
      <p>El proceso completo, desde el inicio de la formulación hasta la aprobación en OCAD, toma en promedio entre 12 y 24 meses para proyectos de acueducto de tamaño medio. Los errores que más alargan o bloquean el proceso son: diagnóstico incompleto o sin fuentes verificables; presupuesto sin soporte de diseño técnico; falta de concesión de agua tramitada ante la CAR; indicadores de producto desconectados de la cadena de valor en la MGA; y sostenibilidad financiera del operador no demostrada.</p>
      <p><strong>BIC acompaña municipios del Eje Cafetero desde la primera revisión del diagnóstico hasta la sesión del OCAD, con experiencia comprobada en proyectos aprobados en Caldas, Risaralda y Quindío.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'caso-estudio-acueducto-rural': {
    title: 'De la fuente al grifo: caso de estudio de diseño de acueducto rural en el Eje Cafetero',
    date: 'Abril 2026',
    readTime: '14 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Caso de estudio técnico del diseño integral de un sistema de acueducto rural en Colombia: estudio hidrológico de la fuente, diseño de bocatoma lateral, conducción y red de distribución.',
    keywords: 'diseño acueducto rural caso estudio Colombia, bocatoma acueducto municipal Colombia, sistema acueducto veredal Colombia diseño, acueducto rural Eje Cafetero Colombia',
    body: <>
      <p>Presentamos el proceso metodológico de un proyecto real de diseño de acueducto rural en el Eje Cafetero colombiano, anonimizado por razones de confidencialidad. El proyecto atendió a una población de aproximadamente 1.800 habitantes en una vereda del departamento de Caldas, que llevaba más de 10 años con un sistema de acueducto obsoleto, intermitente y con IRCA clasificado en riesgo alto (42 puntos). El resultado fue un sistema completamente nuevo, con IRCA proyectado inferior a 5 puntos al finalizar la construcción.</p>

      <h2>Descripción del proyecto: municipio, población y problemática</h2>
      <p>El sistema original fue construido en la década de 1980 con tubería de asbesto-cemento (AC), en su mayor parte deteriorada. La bocatoma de captación era una simple derivación sin estructura de control, que en cada creciente del río se colmataba con sedimentos y dejaba al acueducto sin agua por períodos de 1–5 días. La planta de tratamiento existente era una unidad compacta de los años 1990 que operaba con eficiencia inferior al 50%, sin desinfección confiable y sin operador capacitado. El IRCA promedio del último año era 42 puntos (riesgo alto), con picos de hasta 68 puntos en temporadas de lluvia.</p>

      <h2>Estudio hidrológico de la fuente hídrica</h2>
      <p>El primer paso fue caracterizar hidrológicamente la fuente: una quebrada con cuenca de 28 km². El estudio incluyó:</p>
      <ul>
        <li><strong>Recopilación de datos:</strong> Se identificaron dos estaciones pluviométricas del IDEAM en cuencas vecinas con régimen hidrológico similar. Con 32 años de datos (1990–2022) se construyeron las curvas IDF para el municipio.</li>
        <li><strong>Aforos de campo:</strong> Se realizaron 8 aforos con molinete hidrométrico en diferentes épocas del año (dos en temporada seca, cuatro en temporada de transición, dos en temporada húmeda). El caudal mínimo registrado fue Q = 6,8 L/s en el mes de agosto.</li>
        <li><strong>Análisis de frecuencias:</strong> Con el registro histórico de la estación más cercana se calcularon caudales de creciente para Tr 5, 10, 25 y 100 años (Q100 = 48,3 m³/s). Estos caudales definieron el dimensionamiento de la presa de derivación.</li>
        <li><strong>Caudal de diseño del acueducto:</strong> Con una población de diseño de 2.100 hab para el año 2045, dotación neta de 100 L/hab/día (nivel de complejidad bajo), y factor de mayoración de 1,3 para caudal máximo diario, el caudal de diseño resultó Q = 2,98 L/s. Con el caudal mínimo de la fuente de 6,8 L/s, la relación Q_captación/Q_disponible es del 44%, inferior al 50% máximo recomendado por el RAS 2000.</li>
      </ul>

      <h2>Diseño de la bocatoma lateral</h2>
      <p>Con base en los estudios hidrológicos y el análisis de transporte de sedimentos (concentración media de 2.800 mg/L en crecientes), se diseñó una bocatoma lateral con los siguientes componentes:</p>
      <ul>
        <li><strong>Presa de derivación en concreto ciclópeo:</strong> Altura 1,20 m, longitud 18 m. Diseñada para soportar el caudal de Tr 100 años sin desbordamiento lateral. Umbral de captación a 0,80 m sobre la solera del río.</li>
        <li><strong>Rejilla de captación:</strong> Área útil 0,8 m², barras de 10 mm con separación de 25 mm. Ángulo de inclinación 15°. Capacidad de captación máxima: 8 L/s.</li>
        <li><strong>Desripiador:</strong> Cámara de 3,0 m × 1,5 m × 1,2 m (longitud × ancho × profundidad) con umbral de rebose a 0,60 m de altura. Eficiencia de remoción de partículas &gt;0,5 mm: 85%.</li>
        <li><strong>Compuertas:</strong> Dos compuertas de acero inoxidable de 0,3 m × 0,4 m: una en la entrada de la bocatoma y una en la purga del desripiador.</li>
      </ul>

      <h2>Red de distribución modelada en EPANET</h2>
      <p>La red de distribución se diseñó en PVC RDE 21 para las tuberías principales y RDE 32 para las secundarias. El modelo EPANET incluyó 48 nodos de demanda, 52 tramos de tubería (longitud total: 6,4 km), 2 tanques de almacenamiento y 1 punto de bombeo de respaldo para el sector de mayor cota. Resultados del análisis hidráulico en condición de máxima demanda:</p>
      <ul>
        <li>Presión mínima en red: 12,4 m.c.a. (nodo más desfavorable, cota más alta)</li>
        <li>Presión máxima en red: 54,8 m.c.a. (sector bajo)</li>
        <li>Velocidad máxima: 1,8 m/s en la tubería de conducción principal</li>
        <li>Todos los criterios del RAS 2000 nivel de complejidad bajo cumplidos</li>
      </ul>

      <h2>Lecciones aprendidas</h2>
      <p>Los aspectos más relevantes de este proyecto para otros municipios en situación similar: (1) El estudio hidrológico previo al diseño evitó sobredimensionar la bocatoma, reduciendo el costo de la obra en un 18%. (2) La incorporación del FIME como tecnología de tratamiento (en lugar de la planta convencional originalmente propuesta) redujo los costos de operación proyectados en un 40%. (3) La participación activa del operador comunitario desde la fase de diseño garantizó que el sistema resultante sea operable con los recursos humanos locales disponibles.</p>
      <p><strong>¿Tiene un proyecto similar en su municipio? BIC puede diseñar su acueducto rural con la misma metodología, con toda la documentación técnica para formulación SGR o Minvivienda.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'plan-mejoramiento-irca-colombia': {
    title: 'Plan de mejoramiento de calidad del agua: guía técnica para municipios con IRCA alto en Colombia',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía técnica para alcaldes y gerentes de ESP en Colombia: cómo elaborar un plan de mejoramiento de calidad del agua cuando el IRCA está en nivel medio o alto, con pasos y responsables.',
    keywords: 'plan mejoramiento calidad agua IRCA Colombia, reducir IRCA municipio Colombia ESP, IRCA alto Colombia qué hacer, plan mejoramiento acueducto Colombia',
    body: <>
      <p>Cuando el <strong>IRCA</strong> de un municipio se mantiene en nivel medio (14,1–35) o alto (35,1–80) por dos o más períodos de muestreo consecutivos, el <strong>Decreto 1575 de 2007</strong> y la <strong>Resolución 2115 de 2007</strong> obligan a la ESP y a la alcaldía a elaborar e implementar un <strong>Plan de Mejoramiento de la Calidad del Agua (PMCA)</strong>. Este plan no es un documento para cumplir un requisito formal: es la hoja de ruta técnica que, si se ejecuta correctamente, puede reducir el IRCA a nivel sin riesgo en un período de 6–24 meses, dependiendo de la gravedad del problema y de la disponibilidad de recursos.</p>

      <h2>¿Qué significa tener IRCA en nivel de riesgo medio o alto?</h2>
      <p>Un IRCA en riesgo medio indica que el agua distribuida no es apta para consumo humano según los estándares del Decreto 1575 y que la comunidad está siendo expuesta a un riesgo de salud real, aunque no inmediato. En nivel alto, el riesgo es inminente: la exposición prolongada a agua con IRCA alto está asociada en la literatura epidemiológica con enfermedades gastrointestinales, diarrea en niños menores de 5 años y, en casos extremos, brotes de enfermedades de transmisión hídrica (fiebre tifoidea, hepatitis A, cólera).</p>
      <p>El INS reporta que en Colombia el 15–20% de los municipios pequeños registra IRCA en nivel de riesgo medio o alto en al menos uno de los trimestres del año, con concentración en municipios de las regiones Pacífico, Caribe y Orinoquía, pero también en zonas rurales del Eje Cafetero y los Andes.</p>

      <h2>Diagnóstico técnico del sistema: dónde están las fallas</h2>
      <p>El primer paso —y el más importante— del PMCA es identificar con precisión dónde en el sistema se está generando el problema. Los tres grupos de causas más frecuentes son:</p>
      <ul>
        <li><strong>Problemas en la fuente:</strong> Turbiedades altas en temporada de lluvias que superan la capacidad de tratamiento de la PTAP, contaminación microbiológica de la fuente por vertimientos aguas arriba, o alta variabilidad estacional de la calidad que la planta no puede manejar.</li>
        <li><strong>Problemas en el tratamiento:</strong> Dosificación incorrecta o insuficiente de coagulante (el error más común), desinfección deficiente por cloro residual bajo al final de la red, filtros saturados o sin mantenimiento, o PTAP sin capacidad para los caudales máximos.</li>
        <li><strong>Problemas en la distribución:</strong> Fugas en tuberías con ingreso de agua contaminada del suelo (especialmente en redes con presión deficiente), tanques de almacenamiento sin tapa o con fauna dentro, conexiones cruzadas que mezclan agua tratada con agua sin tratar, o tiempos de residencia excesivamente largos en sectores de baja demanda que agotan el cloro residual.</li>
      </ul>

      <h2>Medidas correctivas prioritarias según tipo de falla</h2>
      <ul>
        <li><strong>Para problemas de desinfección:</strong> Ajuste inmediato del sistema de cloración (dosificador, punto de aplicación, tiempo de contacto). Esta es la intervención de menor costo y mayor impacto en el corto plazo. Un operador capacitado puede lograr mejoras significativas en el IRCA microbiológico en 2–4 semanas.</li>
        <li><strong>Para problemas de turbiedad en la PTAP:</strong> Optimización de la dosis de coagulante (prueba de jarras), revisión del sistema de mezcla rápida, limpieza y rehabilitación de decantadores y filtros. Puede realizarse sin obras civiles en la mayoría de los casos.</li>
        <li><strong>Para problemas de distribución:</strong> Sectorización de la red con medición de presiones, detección de fugas con correlatómetro, sustitución prioritaria de tramos con alta frecuencia de roturas, y elevación de la presión en sectores con valores inferiores a 5 m.c.a.</li>
        <li><strong>Para problemas estructurales de la fuente o la PTAP:</strong> Aquí se requiere formulación de un proyecto de inversión ante el SGR o el Ministerio de Vivienda, con diseños de ingeniería y presupuesto detallado. El PMCA debe incluir el cronograma de gestión de ese proyecto como medida de largo plazo.</li>
      </ul>

      <h2>Cómo presentar el plan de mejoramiento ante las autoridades</h2>
      <p>El PMCA debe presentarse ante la Secretaría Departamental de Salud y ante la Superintendencia de Servicios Públicos dentro de los 30 días hábiles siguientes al momento en que el IRCA supera el umbral de riesgo. El documento debe incluir: diagnóstico técnico con causas identificadas, cronograma de medidas correctivas con responsables, metas de IRCA a 3, 6 y 12 meses, y mecanismo de seguimiento y reporte.</p>
      <p><strong>BIC elabora planes de mejoramiento de calidad del agua para ESPs y alcaldías con diagnóstico de campo, medidas de corto y largo plazo, y proyectos de inversión formulados para SGR o Minvivienda.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'contratar-consultoria-hidraulica-colombia': {
    title: 'Cómo contratar la consultora de ingeniería hidráulica adecuada para su proyecto en Colombia',
    date: 'Abril 2026',
    readTime: '9 min',
    category: 'Sector Público',
    metaDesc: 'Criterios técnicos y prácticos para seleccionar una firma consultora de ingeniería hidráulica en Colombia: experiencia comprobada, equipo técnico, RUP, propuesta metodológica y referencias.',
    keywords: 'consultoría ingeniería hidráulica Colombia contratar, firma consultora hidrología Colombia, contratar ingeniería civil Colombia municipios, consultoría hidráulica Eje Cafetero',
    body: <>
      <p>Contratar una firma consultora de ingeniería hidráulica en Colombia es una decisión que tiene consecuencias que se extienden décadas: el estudio hidrológico que fundamenta el diseño de una bocatoma determinará si el acueducto tendrá agua suficiente o no durante los próximos 25 años; el modelo hidráulico que sustenta una licencia de urbanismo determinará si el proyecto es viable o no. Elegir mal no es solo un error costoso: puede ser un riesgo de seguridad para la comunidad. Este artículo ofrece los criterios técnicos y prácticos para hacer una selección informada.</p>

      <h2>Errores frecuentes al contratar una firma consultora de hidráulica</h2>
      <ul>
        <li><strong>Seleccionar por precio más bajo:</strong> En servicios profesionales de consultoría técnica, el precio más bajo generalmente refleja menor dedicación de horas profesionales calificadas, no mayor eficiencia. Un estudio hidrológico que "cuesta muy poco" probablemente tiene una metodología simplificada, datos insuficientes o profesionales con experiencia limitada.</li>
        <li><strong>No verificar la experiencia específica:</strong> Tener RUP activo y estar clasificado en ingeniería hidráulica no significa tener experiencia en el tipo de estudio que usted necesita. Un consultor excelente en diseño de redes urbanas puede no tener experiencia en modelación de cuencas de alta montaña, y viceversa.</li>
        <li><strong>Ignorar la especialización regional:</strong> La hidrología es una disciplina fuertemente regional. Un consultor con experiencia exclusiva en cuencas de llanura (Orinoquía, costa Caribe) no necesariamente tiene los datos, los modelos calibrados o el conocimiento del comportamiento hidrológico de las cuencas andinas del Eje Cafetero.</li>
        <li><strong>No pedir referencias verificables:</strong> Una lista de proyectos en la propuesta no es suficiente. Pida los datos de contacto del supervisor técnico de al menos dos proyectos similares y verifique la calidad del trabajo entregado.</li>
      </ul>

      <h2>Criterios técnicos de evaluación</h2>
      <ul>
        <li><strong>Formación y experiencia del director técnico:</strong> Para estudios de hidrología aplicada y diseño de sistemas complejos, la formación de posgrado marca una diferencia real en la calidad metodológica de los resultados. Rogerio Bernal Ríos, director de BIC, cuenta con Especialización en Ingeniería Hidráulica y Ambiental de la Universidad Nacional de Colombia y matrícula profesional COPNIA 17202-313228.</li>
        <li><strong>Software y equipos de campo disponibles:</strong> Verifique que la firma cuente con las licencias o versiones actualizadas del software relevante (HEC-HMS, HEC-RAS, EPANET, ArcGIS/QGIS) y con los equipos de campo necesarios para el proyecto (estación total, GPS RTK, molinete o ADCP para aforos).</li>
        <li><strong>Datos e información regional:</strong> Las mejores firmas consultoras en hidrología tienen acceso a bases de datos propias de estudios anteriores en la región, que complementan la información oficial del IDEAM y aportan conocimiento de campo imposible de obtener sin años de presencia en el territorio.</li>
        <li><strong>Metodología propuesta:</strong> La propuesta técnica debe especificar la metodología de análisis (no solo listar "usaremos HEC-HMS y HEC-RAS"), las estaciones del IDEAM que se consultarán, los métodos de análisis de frecuencias que se aplicarán y los criterios de calibración del modelo.</li>
      </ul>

      <h2>Señales de advertencia</h2>
      <p>Desconfíe de propuestas que: no identifican las estaciones del IDEAM a consultar; proponen cronogramas de menos de 4 semanas para un estudio hidrológico completo (tiempo insuficiente para aforos de campo y análisis riguroso); presentan una metodología genérica sin relación con las condiciones específicas del proyecto; o tienen un precio inferior al 50% de las demás propuestas sin justificación técnica.</p>

      <h2>Perfil de BIC: Especialistas en Ingeniería Hidráulica en el Eje Cafetero</h2>
      <p>BIC – Bernal Ingeniería Consultores cuenta con más de 10 años de trayectoria verificable en hidrología e hidráulica aplicada en Colombia, con proyectos en Caldas, Risaralda, Quindío y otras regiones del país. Su director, Rogerio Bernal Ríos, Ingeniero Civil con Especialización en Ingeniería Hidráulica y Ambiental de la Universidad Nacional de Colombia (COPNIA 17202-313228), combina formación académica de posgrado con experiencia práctica en proyectos de acueducto, alcantarillado, gestión del riesgo, formulación SGR y modelación hidráulica avanzada.</p>
      <p><strong>Antes de contratar, solicite una consulta técnica gratuita con Rogerio Bernal para evaluar los requerimientos específicos de su proyecto sin ningún compromiso.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

}

export default articlesD
