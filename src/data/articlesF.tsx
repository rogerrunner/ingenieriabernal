// Category F: High-intent commercial keyword articles (10 articles: F-01 to F-10)
const articlesF: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'cuanto-cuesta-estudio-hidrologico': {
    title: '¿Cuánto cuesta un estudio hidrológico en Colombia 2025?',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Estudios Técnicos',
    metaDesc: 'Costos reales de estudios hidrológicos en Colombia 2025: rangos de precio por tipo de estudio, qué factores los encarecen y cómo obtener una propuesta justa. Con valores del Eje Cafetero.',
    keywords: 'cuánto cuesta un estudio hidrológico Colombia, precio estudio hidrológico Colombia, costo estudio hidrológico decreto 1807, estudio hidrológico cuánto vale Colombia 2025',
    body: <>
      <p>Una de las preguntas más frecuentes que recibimos en <strong>BIC – Bernal Ingeniería Consultores</strong> es: <em>¿cuánto cuesta un estudio hidrológico en Colombia?</em> La respuesta no es única, porque el precio depende del tipo de estudio, la disponibilidad de información de la cuenca y la complejidad del tramo a analizar. En este artículo le explicamos los rangos de costo reales para 2025–2026, qué factores los afectan y qué debe incluir un estudio bien hecho.</p>

      <h2>Tipos de estudios hidrológicos y sus costos en Colombia</h2>
      <p>En Colombia existen varios tipos de estudios hidrológicos con propósitos y costos distintos:</p>
      <ul>
        <li><strong>Estudio hidrológico básico para licencia de construcción (Decreto 1807):</strong> Es el más solicitado. Incluye caracterización de la cuenca, caudales de diseño para Tr25, Tr50 y Tr100, y modelación hidráulica del tramo. Costo típico: <strong>$3.500.000 – $10.000.000 COP</strong> para cuencas con información disponible en el IDEAM. Si no hay estación hidrométrica cercana y se requiere análisis de lluvia-escorrentía, el costo puede llegar a $15.000.000 COP.</li>
        <li><strong>Estudio hidrológico para concesión de aguas:</strong> Incluye aforos de campo en época seca y lluviosa, cálculo del caudal ecológico y memoria de cálculo para la CAR. Costo: <strong>$2.500.000 – $6.000.000 COP</strong>, dependiendo de la distancia a la fuente y el número de aforos requeridos.</li>
        <li><strong>Estudio hidrológico para diseño de acueducto o alcantarillado:</strong> Cálculo de caudales de diseño para dimensionamiento de redes. Costo: <strong>$2.000.000 – $5.000.000 COP</strong>. Generalmente se incluye dentro del contrato de diseño hidrosanitario y no se cotiza por separado.</li>
        <li><strong>Estudio hidrológico para vías (INVIAS):</strong> Cálculo de caudales para alcantarillas, box culvert y obras de drenaje vial. Costo: <strong>$3.000.000 – $12.000.000 COP</strong> según el número de cuencas a analizar y la longitud del corredor vial.</li>
        <li><strong>Estudio POMCA o de cuenca completa:</strong> Estudios hidrológicos integrales para ordenación de cuencas, requeridos por las CAR. Costo: <strong>$15.000.000 – $80.000.000 COP</strong> o más, según el área y la exigencia de modelación 2D.</li>
      </ul>

      <h2>Factores que afectan el costo de un estudio hidrológico</h2>
      <p>El precio final de un estudio hidrológico en Colombia depende principalmente de estos factores:</p>
      <ul>
        <li><strong>Disponibilidad de información hidrométrica:</strong> Si existe una estación del IDEAM con registros históricos de caudales cerca de la cuenca de interés, el análisis estadístico es directo. Si no hay datos de caudal y se debe hacer análisis lluvia-escorrentía con pluviógrafos o modelos de precipitación, el costo se incrementa entre un 30% y un 60%.</li>
        <li><strong>Complejidad del tramo a modelar:</strong> Una quebrada de cuenca pequeña (menor de 10 km²) con sección regular es más rápida de modelar que un río de planicie con zonas inundables extensas que requieren HEC-RAS 2D con malla de elementos finitos.</li>
        <li><strong>Necesidad de levantamiento topográfico:</strong> La modelación hidráulica requiere el perfil longitudinal del cauce y secciones transversales. Si no existe topografía del tramo o debe hacerse batimetría, el costo del levantamiento topográfico (entre $1.500.000 y $6.000.000 COP adicionales) se suma al estudio.</li>
        <li><strong>Urgencia del entregable:</strong> Un estudio en tiempo normal toma entre 2 y 6 semanas. Si el cliente necesita el informe en menos de 10 días hábiles, la tarifa puede incrementarse un 20–30% por trabajo en modalidad de prioridad.</li>
        <li><strong>Número de períodos de retorno:</strong> El Decreto 1807 exige Tr25, Tr50 y Tr100. Estudios que requieren además Tr10, Tr200 o Tr500 (para presas o infraestructura crítica) tienen mayor alcance y costo.</li>
      </ul>

      <h2>¿Qué debe incluir un estudio hidrológico bien elaborado?</h2>
      <p>Antes de contratar, verifique que la propuesta incluya al menos los siguientes entregables:</p>
      <ul>
        <li>Informe técnico en PDF con metodología completa, fuentes de información y análisis de resultados.</li>
        <li>Caracterización morfométrica de la cuenca (área, pendiente media, tiempo de concentración, coeficiente de compacidad).</li>
        <li>Análisis estadístico de frecuencias (Gumbel, Log-Pearson III u otro) con ajuste de bondad (chi-cuadrado, Kolmogorov-Smirnov).</li>
        <li>Caudales de diseño para los períodos de retorno exigidos.</li>
        <li>Memoria de cálculo hidráulico con resultados de láminas de inundación en planos CAD o GIS.</li>
        <li>Concepto técnico firmado con tarjeta profesional COPNIA vigente.</li>
      </ul>

      <h2>¿Cómo obtener un precio justo?</h2>
      <p>Compare al menos dos o tres propuestas. Desconfíe de estudios a precios muy bajos (menos de $1.500.000 COP para un Decreto 1807) que probablemente no incluyen modelación hidráulica real ni planos de inundación. Una propuesta seria siempre especifica el alcance, los entregables y el plazo de entrega antes de firmar el contrato.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong>, elaboramos estudios hidrológicos para el Decreto 1807, concesiones de agua, diseño de acueductos y vías en todo Colombia. Nuestros estudios son aceptados por curadurías, CAR y ESP en el Eje Cafetero y el país. <strong>Solicite su propuesta en ingenieriabernal.co o al WhatsApp +57 302 477 8910.</strong> Entregamos propuesta técnica y económica en 24 horas hábiles sin costo.</p>
    </>,
  },

  'requisitos-ptar-licencia-construccion': {
    title: 'Requisitos PTAR para licencia de construcción en Colombia',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'PTAR y PTAP',
    metaDesc: 'Qué requisitos técnicos y documentales exige una PTAR para tramitar licencia de construcción en Colombia. Normativa RAS 2017, permiso de vertimientos y quién puede firmar la memoria.',
    keywords: 'requisitos PTAR licencia construcción Colombia, PTAR para licencia de construcción Colombia, diseño PTAR licencia urbanismo Colombia, permiso vertimientos licencia construcción',
    body: <>
      <p>Si está tramitando una licencia de construcción o de urbanismo para un conjunto residencial, parque industrial o edificio comercial en Colombia y su predio no tiene acceso a la red de alcantarillado público, la curaduría urbana o la oficina de planeación municipal le exigirá un <strong>sistema de tratamiento de aguas residuales (PTAR)</strong> como condición para otorgar la licencia. En este artículo explicamos qué requisitos técnicos y documentales debe cumplir esa PTAR, qué normas aplican y quién puede firmar la memoria de cálculo.</p>

      <h2>¿Cuándo es obligatoria una PTAR para la licencia de construcción?</h2>
      <p>Una planta de tratamiento de aguas residuales es requisito para la licencia de construcción cuando se cumple alguna de estas condiciones:</p>
      <ul>
        <li>El predio está fuera del perímetro urbano o en zona donde la empresa de servicios públicos no tiene red de alcantarillado disponible.</li>
        <li>El municipio no tiene capacidad en su PTAR existente para recibir el caudal adicional del nuevo desarrollo.</li>
        <li>El uso propuesto genera aguas residuales con características industriales o especiales que no pueden verterse a la red sanitaria sin pretratamiento.</li>
        <li>La curaduría o planeación municipal exige demostrar el manejo autónomo de aguas residuales por normativa local.</li>
      </ul>

      <h2>Marco normativo que aplica</h2>
      <p>El diseño de una PTAR para licencia de construcción en Colombia debe cumplir principalmente:</p>
      <ul>
        <li><strong>Resolución 0330 de 2017 (RAS actualizado):</strong> Establece los criterios técnicos mínimos para el diseño de sistemas de tratamiento de aguas residuales domésticas e industriales. Define los procesos de tratamiento aceptados, parámetros de diseño y cargas contaminantes de referencia.</li>
        <li><strong>Decreto 1076 de 2015 (compilatorio ambiental), artículos sobre vertimientos:</strong> Reglamenta los permisos de vertimiento y los estándares de calidad del efluente tratado según el cuerpo receptor.</li>
        <li><strong>Resolución 0631 de 2015 (MADS):</strong> Establece los parámetros y valores límite máximos permisibles en los vertimientos puntuales a cuerpos de agua superficiales y a los alcantarillados. Es la norma que define qué tan limpia debe salir el agua de la PTAR.</li>
        <li><strong>NTC 3823 y normas complementarias:</strong> Para sistemas de tratamiento individuales (fosas sépticas, filtros anaerobios) en viviendas o pequeños desarrollos.</li>
      </ul>

      <h2>Requisitos técnicos para la memoria de cálculo de la PTAR</h2>
      <p>La memoria de cálculo de la PTAR que se presenta ante la curaduría o planeación debe incluir:</p>
      <ul>
        <li><strong>Caracterización del afluente:</strong> Caudal de diseño (Qmd, Qmh, Qmáx) calculado en función de la población o el área construida. Cargas contaminantes estimadas: DBO5, SST, coliformes fecales, grasas y aceites (para uso comercial).</li>
        <li><strong>Selección y justificación del proceso de tratamiento:</strong> Tratamiento primario (sedimentación, trampa de grasas), secundario (lodos activados, filtros percoladores, reactores UASB, humedales artificiales) y desinfección (cloración, UV). La selección debe justificarse en función del caudal, la calidad requerida del efluente y las condiciones del sitio.</li>
        <li><strong>Dimensionamiento de cada unidad de tratamiento:</strong> Cálculo de volúmenes, áreas superficiales, tiempos de retención, cargas hidráulicas y orgánicas para cada componente. Todo con referencia a la Resolución 0330/2017 o bibliografía técnica reconocida (Metcalf & Eddy, OPS).</li>
        <li><strong>Manejo de lodos:</strong> Descripción del sistema de deshidratación y disposición final de lodos (compostaje, relleno sanitario autorizado). Este punto suele olvidarse y genera observaciones de la curaduría.</li>
        <li><strong>Planos de la PTAR:</strong> Plano de localización, planta y perfil hidráulico de todas las unidades, detalles estructurales y de tubería. En formato CAD exportable a PDF.</li>
        <li><strong>Concepto de vertimiento:</strong> Carta de la autoridad ambiental (CAR o AMVA) indicando a qué cuerpo se puede verter y qué calidad de efluente se requiere. Idealmente se debe obtener el permiso de vertimiento antes de la licencia de construcción, o al menos radicar la solicitud.</li>
      </ul>

      <h2>¿Quién puede firmar la memoria de la PTAR?</h2>
      <p>La memoria de cálculo de sistemas de tratamiento de aguas residuales debe ser firmada por un <strong>ingeniero civil o sanitario con tarjeta profesional COPNIA vigente</strong>. Muchas curadurías también aceptan la firma de ingenieros ambientales con especialización en saneamiento. Verifique siempre que el consultor tenga la tarjeta vigente en <strong>copnia.edu.co</strong> antes de contratar.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos PTAR para licencias de construcción en todo Colombia: conjuntos residenciales, parques industriales, hoteles, colegios y desarrollos comerciales. Elaboramos la memoria de cálculo, los planos y gestionamos el permiso de vertimientos ante la CAR. <strong>Contáctenos en ingenieriabernal.co o al +57 302 477 8910 para una propuesta sin costo en 24 horas.</strong></p>
    </>,
  },

  'estudio-hidraulico-urbanizacion': {
    title: '¿Qué incluye un estudio hidráulico para urbanización?',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Componentes de un estudio hidráulico para urbanización en Colombia: redes de alcantarillado pluvial y sanitario, estudios de amenaza hídrica Decreto 1807 y entregables para la curaduría.',
    keywords: 'estudio hidráulico urbanización Colombia, estudio hidráulico para licencia urbanismo, qué incluye estudio hidráulico urbanización, diseño hidráulico urbanización Colombia',
    body: <>
      <p>Cuando un promotor o propietario quiere urbanizar un terreno en Colombia, debe obtener una <strong>licencia de urbanismo</strong> ante la curaduría urbana o la oficina de planeación municipal. Entre los estudios técnicos exigidos, el componente hidráulico es uno de los más complejos y el que más frecuentemente genera observaciones que retrasan el proceso. En este artículo explicamos qué incluye un estudio hidráulico completo para urbanización, qué normas aplican y qué entrega el ingeniero al final.</p>

      <h2>¿Por qué se exige un estudio hidráulico para urbanizar?</h2>
      <p>El objetivo principal del estudio hidráulico para urbanización es demostrar que el nuevo desarrollo:</p>
      <ul>
        <li>No va a incrementar el riesgo de inundación aguas abajo al aumentar la impermeabilización del suelo.</li>
        <li>Tiene un sistema de drenaje pluvial y sanitario correctamente dimensionado para manejar las lluvias de diseño y las aguas residuales generadas.</li>
        <li>Cumple con las exigencias de la empresa de servicios públicos (acueducto y alcantarillado) para la conexión al sistema existente.</li>
        <li>No construye en zonas de riesgo por inundación, avenida torrencial o retiro de fuente hídrica si el predio está cerca de una quebrada o río.</li>
      </ul>

      <h2>Componentes del estudio hidráulico para urbanización</h2>
      <p>Un estudio hidráulico completo para licencia de urbanismo en Colombia tiene los siguientes componentes:</p>

      <h2>1. Estudio hidrológico de la cuenca aferente</h2>
      <p>Se calcula la lluvia de diseño para el período de retorno que exige la norma local (generalmente Tr5 a Tr25 para el diseño de redes internas, y Tr100 para el análisis de amenaza). Se construye la curva IDF del municipio usando datos del IDEAM o del operador del acueducto, y se calculan los caudales de aporte al sistema de alcantarillado pluvial mediante el <strong>método racional modificado</strong> o el método del <strong>SCS-CN</strong> para cuencas mayores.</p>

      <h2>2. Diseño del sistema de alcantarillado pluvial</h2>
      <p>Se diseña la red de colectores, cunetas, sumideros y estructuras de conexión que captarán el agua lluvia de vías, zonas duras y techos del desarrollo. Según la Resolución 0330/2017, el dimensionamiento debe garantizar que la red funcione a sección libre (sin presión) para el caudal de diseño, con velocidades mínimas de autolimpieza (0,45 m/s) y velocidades máximas que no erosionen la tubería.</p>

      <h2>3. Diseño del sistema de alcantarillado sanitario</h2>
      <p>Se diseña la red de recolección de aguas residuales domésticas basada en la dotación neta de agua potable, el coeficiente de retorno (generalmente 0,85) y los caudales de infiltración e ilícitos. La red debe cumplir los criterios del RAS 2017: diámetros mínimos, pendientes mínimas de autolimpieza y revisión de la capacidad de la acometida a la red pública existente.</p>

      <h2>4. Estudio de amenaza por inundación (Decreto 1807/2014)</h2>
      <p>Si el predio o alguna parte de él está dentro de la zona de amenaza media o alta por inundación según el POT municipal, o si tiene una fuente hídrica dentro o colindante, la curaduría exigirá adicionalmente el <strong>estudio de amenaza y riesgo por inundación</strong> conforme al Decreto 1807. Este incluye modelación hidráulica del tramo de fuente hídrica con HEC-RAS 1D o 2D, definición de la zona de retiro y verificación de que la urbanización no ocupa la lámina de inundación del Tr100.</p>

      <h2>5. Verificación de la capacidad de conexión a la red pública</h2>
      <p>Antes de diseñar la red interna, es necesario obtener de la empresa de servicios públicos la <strong>viabilidad de servicios</strong>, que confirma si existe capacidad en el colector público de alcantarillado para recibir el caudal adicional de la urbanización. Si no hay capacidad, el promotor debe financiar las obras de ampliación del colector.</p>

      <h2>Entregables del estudio hidráulico para urbanización</h2>
      <p>Al finalizar, el consultor debe entregar:</p>
      <ul>
        <li>Memoria de cálculo hidrológico e hidráulico en PDF.</li>
        <li>Planos de redes pluviales y sanitarias en formato CAD (escala 1:500 o 1:1000).</li>
        <li>Perfil hidráulico de los colectores principales.</li>
        <li>Planos de detalles de pozos de inspección, sumideros y conexiones domiciliarias.</li>
        <li>Informe de amenaza por inundación (si aplica) con mapas de láminas de agua.</li>
        <li>Memoria firmada con tarjeta profesional COPNIA vigente.</li>
      </ul>
      <p><strong>BIC – Bernal Ingeniería Consultores</strong> elabora estudios hidráulicos completos para urbanizaciones en todo Colombia. Desde el estudio hidrológico hasta los planos de red y el concepto de amenaza hídrica, preparamos todos los documentos que exige la curaduría. <strong>Escríbanos a ingenieriabernal.co o al WhatsApp +57 302 477 8910 para cotizar su proyecto sin compromiso.</strong></p>
    </>,
  },

  'calcular-caudal-diseno-alcantarillado': {
    title: 'Cómo calcular el caudal de diseño para alcantarillado',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Métodos para calcular el caudal de diseño en sistemas de alcantarillado sanitario y pluvial en Colombia según el RAS 2017. Método racional, SCS-CN y ejemplos prácticos.',
    keywords: 'calcular caudal diseño alcantarillado Colombia, caudal diseño alcantarillado pluvial, método racional alcantarillado Colombia, RAS 2017 caudal diseño alcantarillado',
    body: <>
      <p>El cálculo del <strong>caudal de diseño</strong> es el paso fundamental en el diseño de cualquier sistema de alcantarillado, ya sea sanitario o pluvial. Un caudal subestimado genera desbordamientos y encharcamientos; uno sobredimensionado encarece innecesariamente la obra. En Colombia, la <strong>Resolución 0330 de 2017 (RAS actualizado)</strong> establece los métodos y criterios que deben usarse. En este artículo explicamos el procedimiento paso a paso para alcantarillado pluvial y sanitario.</p>

      <h2>Caudal de diseño para alcantarillado sanitario</h2>
      <p>El caudal de diseño de una red sanitaria se calcula sumando cuatro componentes:</p>
      <ul>
        <li><strong>Caudal medio diario (Qmd):</strong> Es el caudal promedio producido por la población servida. Se calcula como: Qmd = P × d × C / 86.400, donde P es la población de diseño (personas), d es la dotación neta de agua potable (L/persona/día) y C es el coeficiente de retorno (generalmente 0,85 según el RAS). Para uso industrial o comercial se usa el caudal de agua consumida multiplicado por el coeficiente de retorno.</li>
        <li><strong>Caudal máximo horario (QMH):</strong> Es el caudal pico que se genera en la hora de mayor consumo. Se calcula multiplicando Qmd por el coeficiente de mayoración (M), que según el RAS 2017 varía entre 1,3 y 4,0 según la población. Para poblaciones menores de 1.000 habitantes, M = 4,0; para más de 1.000.000, M = 1,3.</li>
        <li><strong>Caudal de infiltración (Qi):</strong> Es el agua subterránea que se infiltra en las tuberías por fisuras, uniones defectuosas o pozos de inspección. El RAS 2017 especifica valores entre 0,1 y 0,4 L/s por hectárea o por km de tubería, según el nivel freático y el tipo de suelo.</li>
        <li><strong>Caudal de conexiones erradas (Qce):</strong> Corresponde al agua lluvia que ingresa ilegalmente a la red sanitaria. El RAS establece un caudal de 0,1 a 0,2 L/s por hectárea como estimación.</li>
      </ul>
      <p>El caudal de diseño final es: <strong>Qd = QMH + Qi + Qce</strong>. La tubería se dimensiona para que fluya a sección llena con el caudal de diseño, verificando las condiciones de autolimpieza (velocidad ≥ 0,45 m/s) y de no erosión (velocidad ≤ 5,0 m/s para tubería de PVC).</p>

      <h2>Caudal de diseño para alcantarillado pluvial: método racional</h2>
      <p>Para cuencas urbanas pequeñas (área menor de 10 km²), el <strong>método racional</strong> es el más utilizado en Colombia y aceptado por el RAS 2017:</p>
      <p><strong>Q = C × I × A / 360</strong></p>
      <p>donde Q es el caudal pico en m³/s, C es el coeficiente de escorrentía (adimensional), I es la intensidad de lluvia en mm/h para el período de retorno y el tiempo de concentración de la cuenca, y A es el área de la cuenca en hectáreas.</p>

      <h2>Paso 1: determinar el coeficiente de escorrentía (C)</h2>
      <p>El coeficiente C depende del tipo de superficie y del uso del suelo. Valores típicos para Colombia:</p>
      <ul>
        <li>Zonas comerciales densas: 0,70 – 0,95</li>
        <li>Zonas residenciales multifamiliar: 0,50 – 0,70</li>
        <li>Zonas residenciales unifamiliar con jardines: 0,35 – 0,55</li>
        <li>Parques y zonas verdes: 0,10 – 0,30</li>
        <li>Vías en concreto o asfalto: 0,70 – 0,90</li>
      </ul>
      <p>Para cuencas con múltiples tipos de superficie se calcula un C compuesto ponderando por área: C_comp = Σ(Ci × Ai) / A_total.</p>

      <h2>Paso 2: calcular el tiempo de concentración (tc)</h2>
      <p>El tiempo de concentración es el tiempo que tarda el agua en fluir desde el punto más lejano de la cuenca hasta el punto de interés. Para cuencas urbanas pequeñas se usan la <strong>fórmula de Kirpich</strong> o la de <strong>Temez</strong>. El RAS 2017 recomienda el método de la fórmula de flujo en canal y superficie para cuencas compuestas por vías, zonas verdes y superficies impermeables.</p>

      <h2>Paso 3: obtener la intensidad de diseño (I)</h2>
      <p>Con el tiempo de concentración y el período de retorno definido (Tr5 para redes locales, Tr10–Tr25 para colectores principales, según el RAS y la norma municipal), se obtiene la intensidad de diseño de la <strong>curva IDF del municipio</strong>. Estas curvas son elaboradas por el IDEAM o por la empresa de acueducto municipal. Si no existe curva IDF local, se construye con los registros del pluviógrafo más cercano.</p>

      <h2>Método SCS-CN para cuencas mayores</h2>
      <p>Para cuencas mayores de 2 km² o con coberturas heterogéneas, el <strong>método del Número de Curva (SCS-CN)</strong> es más preciso. Requiere conocer el tipo de suelo hidrológico (A, B, C o D según la permeabilidad), el uso del suelo y la cobertura vegetal. La curva número CN se obtiene de las tablas del TR-55 del USDA-SCS y permite calcular el volumen de escorrentía directa para una tormenta de diseño de duración determinada.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> realizamos el cálculo de caudales de diseño y el dimensionamiento completo de redes de alcantarillado sanitario y pluvial para urbanizaciones, municipios y proyectos industriales en todo Colombia, cumpliendo la Resolución 0330/2017. <strong>Solicite una propuesta en ingenieriabernal.co o al +57 302 477 8910.</strong></p>
    </>,
  },

  'diseno-ptap-municipio-costos': {
    title: 'Tiempo y costos de un diseño PTAP para municipio',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'PTAR y PTAP',
    metaDesc: 'Cuánto cuesta y cuánto tarda el diseño de una PTAP para municipio en Colombia: rangos de precios por capacidad, fases del diseño y qué incluye cada entregable según el RAS 2017.',
    keywords: 'costo diseño PTAP municipio Colombia, cuánto cuesta una PTAP para municipio Colombia, tiempo diseño planta agua potable municipio, diseño PTAP Colombia precio 2025',
    body: <>
      <p>Los municipios colombianos que tienen sistemas de acueducto con agua sin tratar o con agua que no cumple los parámetros del Decreto 1575 de 2007 deben construir o mejorar su <strong>Planta de Tratamiento de Agua Potable (PTAP)</strong>. Pero antes de construir, necesitan un <strong>diseño técnico detallado</strong> que cumpla la Resolución 0330 de 2017 y que sirva como base para la licitación de la obra y para el trámite de los permisos. En este artículo explicamos cuánto cuesta ese diseño, cuánto tiempo toma y qué debe incluir.</p>

      <h2>Fases del diseño de una PTAP para municipio</h2>
      <p>El diseño de una PTAP se desarrolla normalmente en dos o tres fases:</p>
      <ul>
        <li><strong>Fase 1 – Diagnóstico y diseño conceptual:</strong> Se evalúa la calidad del agua cruda (análisis fisicoquímico y microbiológico completo), la capacidad y el estado del sistema de captación y conducción existente, y las proyecciones de demanda para el horizonte de diseño (generalmente 20–25 años). Se propone el tren de tratamiento más adecuado para la calidad del agua cruda y el volumen a tratar.</li>
        <li><strong>Fase 2 – Diseño de detalle:</strong> Se dimensionan todas las unidades de tratamiento (coagulación-floculación, sedimentación, filtración, desinfección, almacenamiento), se elaboran los planos arquitectónicos, estructurales y de proceso, y se preparan los pliegos técnicos para la licitación de obra.</li>
        <li><strong>Fase 3 – Interventoría del diseño durante la construcción (opcional):</strong> El diseñador acompaña la ejecución de la obra verificando que la construcción cumple el diseño y ajustando especificaciones ante imprevistos de campo.</li>
      </ul>

      <h2>Costos de diseño de una PTAP para municipio en Colombia (2025–2026)</h2>
      <p>El costo del diseño varía principalmente en función de la capacidad de la planta (caudal de diseño en litros por segundo) y la complejidad de la calidad del agua cruda:</p>
      <ul>
        <li><strong>PTAP para 1–5 L/s (acueducto rural o municipio pequeño &lt;5.000 hab.):</strong> Diseño básico con sedimentador, filtro y cloración. Costo: <strong>$8.000.000 – $18.000.000 COP</strong>. Tiempo: 4–8 semanas.</li>
        <li><strong>PTAP para 5–20 L/s (municipio intermedio 5.000–20.000 hab.):</strong> Tren de tratamiento convencional (coagulación, floculación, sedimentación, filtración, desinfección). Costo: <strong>$18.000.000 – $45.000.000 COP</strong>. Tiempo: 6–12 semanas.</li>
        <li><strong>PTAP para 20–60 L/s (municipio mediano o cabecera subregional):</strong> Diseño con unidades múltiples, back-up operacional y automatización básica. Costo: <strong>$45.000.000 – $120.000.000 COP</strong>. Tiempo: 10–20 semanas.</li>
        <li><strong>PTAP para más de 60 L/s (ciudad intermedia):</strong> Diseño complejo con múltiples trenes, laboratorio de calidad de agua, sala de operaciones y telemetría. Costo: <strong>$120.000.000 – $300.000.000 COP o más</strong>, dependiendo del nivel de detalle y los estudios complementarios (suelos, hidráulica).</li>
      </ul>

      <h2>¿Qué deben incluir los entregables del diseño de la PTAP?</h2>
      <p>Un diseño de PTAP completo para un municipio colombiano debe incluir:</p>
      <ul>
        <li>Informe de diagnóstico de la calidad del agua cruda (con laboratorio certificado) y proyección de demanda.</li>
        <li>Memoria de cálculo del proceso de tratamiento, con dosificaciones de coagulante y desinfectante.</li>
        <li>Dimensionamiento hidráulico de todas las unidades: floculadores, sedimentadores, filtros, tanques de almacenamiento.</li>
        <li>Planos arquitectónicos y estructurales de las obras civiles de la planta.</li>
        <li>Planos de proceso: diagramas de flujo, isométricos de tuberías, válvulas e instrumentación (P&ID).</li>
        <li>Especificaciones técnicas de materiales y equipos (bombas dosificadoras, válvulas, compuertas).</li>
        <li>Presupuesto de obra estimado (APU) y programa de obra tentativo.</li>
        <li>Pliegos técnicos para la licitación.</li>
        <li>Memoria firmada con tarjeta profesional COPNIA vigente.</li>
      </ul>

      <h2>¿Cómo financiar el diseño de la PTAP?</h2>
      <p>En Colombia, los municipios pueden financiar el diseño de su PTAP con recursos del <strong>Sistema General de Regalías (SGR)</strong>, el <strong>Sistema General de Participaciones (SGP) – componente agua potable y saneamiento básico</strong>, recursos propios del municipio o recursos de crédito con el Findeter. La formulación del proyecto en la <strong>MGA Web</strong> del DNP es el primer paso para acceder al SGR.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos PTAP para municipios, ESP rurales y proyectos agroindustriales en todo Colombia. También apoyamos la formulación del proyecto en la MGA Web para acceder a regalías. <strong>Contáctenos en ingenieriabernal.co o al WhatsApp +57 302 477 8910 para una propuesta técnica sin costo.</strong></p>
    </>,
  },

  'modelacion-hec-ras-colombia': {
    title: 'Modelación HEC-RAS: guía para proyectos en Colombia',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Guía práctica de modelación HEC-RAS para proyectos en Colombia: cuándo se exige, qué datos se necesitan, diferencia 1D y 2D, y qué entrega el modelo según el Decreto 1807 y las CAR.',
    keywords: 'modelación HEC-RAS Colombia guía, HEC-RAS Colombia proyectos, modelación hidráulica Colombia HEC-RAS, HEC-RAS decreto 1807 Colombia qué necesita',
    body: <>
      <p><strong>HEC-RAS</strong> (Hydrologic Engineering Center – River Analysis System) es el software de modelación hidráulica más utilizado en Colombia para estudios de amenaza por inundación, diseño de obras fluviales y análisis de riesgo hídrico. Es desarrollado por el Cuerpo de Ingenieros del Ejército de los EE.UU. (USACE) y es de descarga gratuita, lo que lo convierte en el estándar de facto para los estudios exigidos por el <strong>Decreto 1807 de 2014</strong>, los POMCA y los permisos de ocupación de cauce ante las CAR. Esta guía explica cuándo se necesita, qué datos requiere y qué entrega.</p>

      <h2>¿Cuándo se exige modelación HEC-RAS en Colombia?</h2>
      <p>La modelación hidráulica con HEC-RAS (u otro software equivalente) es obligatoria en los siguientes casos:</p>
      <ul>
        <li><strong>Licencia de construcción cerca de fuente hídrica (Decreto 1807/2014):</strong> Si el predio está en zona de amenaza media o alta por inundación según el POT, se requiere un estudio de detalle que incluya modelación hidráulica para definir la zona inundable y el retiro de construcción.</li>
        <li><strong>Permiso de ocupación de cauce ante la CAR:</strong> Toda obra que modifique el cauce de un río o quebrada (puentes, box culvert, muros de contención, canalizaciones) debe demostrar mediante modelación que no incrementa el nivel de inundación aguas arriba ni aguas abajo.</li>
        <li><strong>Planes de Ordenación y Manejo de Cuencas (POMCA):</strong> Las CAR exigen modelación hidráulica para determinar las zonas de ronda hídrica y las manchas de inundación que deben incorporarse al POT municipal.</li>
        <li><strong>Estudios de torrencialidad:</strong> Cuencas con alta pendiente y riesgo de flujos de escombros o avenidas torrenciales requieren modelación con HEC-RAS o software especializado (FLO-2D, RAMMS).</li>
        <li><strong>Diseño de obras de protección fluvial:</strong> Espigones, diques, jarillones y encauzamientos deben diseñarse con base en la modelación hidráulica del tramo para verificar que cumplen su función de protección.</li>
      </ul>

      <h2>HEC-RAS 1D vs HEC-RAS 2D: ¿cuál usar?</h2>
      <p>HEC-RAS ofrece dos modalidades de simulación hidráulica:</p>
      <ul>
        <li><strong>Modelación 1D (unidimensional):</strong> Calcula niveles de agua y velocidades en secciones transversales del cauce. Es adecuada para ríos con cauce definido y llanura de inundación relativamente estrecha. Es más rápida y requiere menos datos, pero no captura bien la distribución espacial del flujo en llanuras anchas.</li>
        <li><strong>Modelación 2D (bidimensional):</strong> Calcula el flujo en una malla de elementos finitos que cubre todo el área inundable. Genera mapas de profundidad, velocidad y esfuerzo cortante en cada punto. Es más precisa para llanuras amplias, zonas urbanas y análisis de riesgo detallado. El Decreto 1807 y muchas CAR ya exigen el 2D para estudios de detalle.</li>
      </ul>

      <h2>¿Qué datos se necesitan para la modelación HEC-RAS?</h2>
      <p>Los datos de entrada mínimos para un modelo HEC-RAS son:</p>
      <ul>
        <li><strong>Topografía del cauce y la llanura de inundación:</strong> Perfil longitudinal y secciones transversales del río o quebrada, incluyendo la llanura de inundación a ambos lados. Para HEC-RAS 2D se necesita un Modelo Digital de Elevación (MDE o DEM) de resolución adecuada: 1 m para cuencas urbanas, 5–10 m para cuencas rurales.</li>
        <li><strong>Caudales de diseño:</strong> Resultado del análisis hidrológico previo para los períodos de retorno de interés (Tr25, Tr50, Tr100 y otros).</li>
        <li><strong>Coeficiente de Manning (n):</strong> Parámetro de rugosidad del cauce y las márgenes, que depende del material del lecho, la vegetación y la pendiente. Para HEC-RAS 2D se asigna un valor de n a cada tipo de cobertura del terreno en la malla.</li>
        <li><strong>Condiciones de contorno:</strong> Nivel de agua o caudal conocido en la sección de inicio y fin del tramo modelado.</li>
      </ul>

      <h2>¿Qué entrega la modelación HEC-RAS?</h2>
      <p>Los resultados del modelo HEC-RAS se presentan en:</p>
      <ul>
        <li>Perfil longitudinal del agua para cada caudal de diseño.</li>
        <li>Secciones transversales con nivel de agua, área hidráulica y velocidad.</li>
        <li>Mapas de inundación: manchas de agua (profundidad) para Tr25, Tr50 y Tr100 superpuestas sobre la cartografía del predio.</li>
        <li>Mapas de velocidad y energía cinética (para análisis de riesgo).</li>
        <li>Definición de la zona de retiro o faja de protección recomendada.</li>
      </ul>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong>, nuestro equipo realiza modelaciones HEC-RAS 1D y 2D para proyectos en todo Colombia. Los modelos son aceptados por CORPOCALDAS, CARDER, CRQ, CAR Cundinamarca, CORANTIOQUIA y otras autoridades ambientales. <strong>Solicite cotización en ingenieriabernal.co o al +57 302 477 8910.</strong></p>
    </>,
  },

  'plan-manejo-aguas-lluvias-colombia': {
    title: '¿Cuándo se requiere plan de manejo de aguas lluvias?',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Agua y Saneamiento',
    metaDesc: '¿Cuándo exige Colombia un plan de manejo de aguas lluvias? Normas aplicables (RAS 2017, SUDS, POT), qué contiene el plan y en qué tipos de proyectos es obligatorio.',
    keywords: 'plan manejo aguas lluvias Colombia, cuándo se requiere plan aguas lluvia Colombia, plan manejo aguas lluvias urbanización Colombia, SUDS plan aguas lluvias Colombia',
    body: <>
      <p>Cada vez más curadurías, empresas de servicios públicos y oficinas de planeación municipal en Colombia están exigiendo un <strong>plan de manejo de aguas lluvias</strong> como requisito para otorgar licencias de construcción, licencias de urbanismo o conceptos de factibilidad de servicios públicos. Pero muchos promotores y constructoras no saben exactamente cuándo aplica este requisito, qué norma lo exige ni qué debe contener ese plan. En este artículo lo aclaramos.</p>

      <h2>¿Qué es un plan de manejo de aguas lluvias?</h2>
      <p>Un plan de manejo de aguas lluvias es un documento técnico que describe y justifica cómo el proyecto va a manejar el agua de lluvia que cae sobre su área, de forma que no aumente el riesgo de inundación aguas abajo ni genere problemas de drenaje en vías y zonas vecinas. Incluye el diseño del sistema de captación, conducción y disposición final de las aguas lluvia, y puede incorporar soluciones de <strong>drenaje sostenible (SUDS)</strong> para retener parte del caudal antes de descargarlo.</p>

      <h2>¿Cuándo es obligatorio en Colombia?</h2>
      <p>El plan de manejo de aguas lluvias es obligatorio o fuertemente recomendado en los siguientes casos:</p>
      <ul>
        <li><strong>Nuevas urbanizaciones y conjuntos residenciales:</strong> La Resolución 0330 de 2017 (RAS) establece que el diseño del sistema de alcantarillado pluvial de toda nueva urbanización debe contemplar el manejo de las aguas lluvia de forma separada del alcantarillado sanitario. En municipios que ya exigen SUDS (como Bogotá con su Decreto 528 de 2014 y la Resolución 5443 de 2021), el plan debe incluir medidas de retención en sitio.</li>
        <li><strong>Proyectos con gran área impermeabilizable:</strong> Parques industriales, bodegas logísticas, centros comerciales y urbanizaciones grandes que van a impermeabilizar más de 1 hectárea de suelo natural. La empresa de servicios públicos puede condicionar la factibilidad de alcantarillado a la presentación de un plan de manejo de aguas lluvias que demuestre que el caudal de aporte a la red pública no supera el valor actual (antes de la urbanización) o el valor de diseño del colector existente.</li>
        <li><strong>Proyectos en zonas con déficit de alcantarillado pluvial:</strong> En municipios donde el colector principal ya trabaja al límite de su capacidad, la empresa de servicios públicos exige que el nuevo proyecto demuestre que puede manejar su propia escorrentía sin incrementar la carga al colector.</li>
        <li><strong>Proyectos en suelo de expansión urbana incorporados al POT con exigencia de SUDS:</strong> Algunos POT ya incorporan la obligación de incluir sistemas de drenaje sostenible en las nuevas urbanizaciones en suelo de expansión.</li>
        <li><strong>Proyectos bajo certificación LEED o EDGE:</strong> Las certificaciones de construcción sostenible exigen un manejo eficiente de las aguas lluvia que vaya más allá del simple colector.</li>
      </ul>

      <h2>¿Qué debe contener el plan de manejo de aguas lluvias?</h2>
      <p>Un plan de manejo de aguas lluvias bien elaborado incluye:</p>
      <ul>
        <li>Caracterización de la cuenca aferente y del área del proyecto: área total, coeficiente de escorrentía antes y después del desarrollo, pendiente media.</li>
        <li>Cálculo del caudal de escorrentía para el período de retorno de diseño (generalmente Tr5 para redes locales y Tr25 para colectores primarios), antes y después de la urbanización.</li>
        <li>Diseño del sistema de captación de aguas lluvia: cunetas, sumideros, bajantes de techos y canaletas.</li>
        <li>Diseño del sistema de conducción: colectores internos con diámetros, pendientes y velocidades verificados según el RAS 2017.</li>
        <li>Medidas de retención o laminación (si se exigen): tanques de retención, zanjas de infiltración, jardines de lluvia, techos verdes o pavimentos permeables. Se calcula el volumen de laminación necesario para que el caudal de salida no supere el límite fijado por la ESP.</li>
        <li>Punto y condiciones de descarga al colector público o al cuerpo de agua receptor.</li>
        <li>Planos de la red pluvial interna y de las estructuras de retención.</li>
      </ul>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> elaboramos planes de manejo de aguas lluvias para urbanizaciones, parques industriales y edificios en Colombia, incluyendo el diseño de SUDS y la verificación de cumplimiento con el RAS 2017 y la norma municipal aplicable. <strong>Escríbanos a ingenieriabernal.co o al +57 302 477 8910 para cotizar su proyecto.</strong></p>
    </>,
  },

  'diferencias-ptar-ptap': {
    title: 'Diferencias entre PTAR y PTAP: ¿cuál necesito?',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'PTAR y PTAP',
    metaDesc: 'Diferencias técnicas y legales entre una PTAR (aguas residuales) y una PTAP (agua potable) en Colombia: para qué sirve cada una, cuándo es obligatoria y cuánto cuesta diseñarla.',
    keywords: 'diferencias PTAR PTAP Colombia, PTAR vs PTAP Colombia qué es, cuándo necesito PTAR Colombia, cuándo necesito PTAP Colombia, planta tratamiento agua residual potable Colombia',
    body: <>
      <p>Dos siglas que generan confusión frecuente en proyectos de ingeniería en Colombia son <strong>PTAR</strong> y <strong>PTAP</strong>. Aunque suenan similar, son sistemas completamente distintos con propósitos opuestos. Entender la diferencia es fundamental para saber cuál necesita su proyecto y no incurrir en errores costosos al solicitar la licencia de construcción o el permiso ambiental.</p>

      <h2>¿Qué es una PTAR?</h2>
      <p>Una <strong>PTAR</strong> (Planta de Tratamiento de Aguas Residuales) es un sistema que recibe el <strong>agua sucia</strong> — proveniente de inodoros, lavaderos, duchas, cocinas o procesos industriales — y la trata para reducir su carga contaminante antes de devolverla al ambiente (a un río, quebrada, lago o el suelo, mediante infiltración). El objetivo es proteger los cuerpos de agua receptores y cumplir con los estándares de calidad del efluente establecidos en la <strong>Resolución 0631 de 2015</strong> del Ministerio de Ambiente.</p>
      <p>Los procesos de tratamiento de una PTAR incluyen:</p>
      <ul>
        <li>Tratamiento preliminar: cribado (rejillas) para retener sólidos gruesos y trampa de grasas.</li>
        <li>Tratamiento primario: sedimentación primaria para remover sólidos sedimentables y parte de la DBO.</li>
        <li>Tratamiento secundario (biológico): remoción de materia orgánica disuelta mediante lodos activados, reactor UASB, filtros percoladores o humedales artificiales.</li>
        <li>Desinfección: cloración o UV para eliminar microorganismos patógenos antes de la descarga.</li>
        <li>Tratamiento de lodos: espesamiento, digestión y deshidratación de los lodos generados.</li>
      </ul>

      <h2>¿Qué es una PTAP?</h2>
      <p>Una <strong>PTAP</strong> (Planta de Tratamiento de Agua Potable) es un sistema que recibe el <strong>agua cruda</strong> — captada de un río, quebrada, embalse o pozo — y la trata para convertirla en <strong>agua potable</strong> apta para el consumo humano, cumpliendo los parámetros del <strong>Decreto 1575 de 2007</strong> y la Resolución 2115 de 2007. El objetivo es proteger la salud pública.</p>
      <p>El tren de tratamiento convencional de una PTAP incluye:</p>
      <ul>
        <li>Pretratamiento: remoción de arena y sólidos gruesos con desarenadores y cribas.</li>
        <li>Coagulación y floculación: adición de coagulante (sulfato de aluminio, policloruro de aluminio) para aglomerar partículas finas en flóculos.</li>
        <li>Sedimentación (clarificación): deposición de los flóculos en sedimentadores de flujo horizontal o de alta tasa (lamelas).</li>
        <li>Filtración: paso del agua por filtros de arena y antracita para retener partículas finas residuales.</li>
        <li>Desinfección: cloración para garantizar la inocuidad microbiológica del agua distribuida.</li>
        <li>Estabilización: ajuste de pH y dureza si el agua es muy agresiva para las redes de distribución.</li>
      </ul>

      <h2>Diferencias clave en una tabla</h2>
      <ul>
        <li><strong>Propósito:</strong> La PTAR trata agua sucia para proteger el ambiente. La PTAP trata agua cruda para producir agua potable.</li>
        <li><strong>Agua de entrada:</strong> PTAR: agua residual doméstica o industrial. PTAP: agua superficial o subterránea cruda.</li>
        <li><strong>Agua de salida:</strong> PTAR: efluente tratado que se vierte al ambiente. PTAP: agua potable que se distribuye a los usuarios.</li>
        <li><strong>Norma que regula la calidad de salida:</strong> PTAR: Resolución 0631/2015. PTAP: Decreto 1575/2007 y Resolución 2115/2007.</li>
        <li><strong>Permiso requerido:</strong> PTAR: permiso de vertimiento ante la CAR. PTAP: concesión de aguas ante la CAR.</li>
      </ul>

      <h2>¿Cuál necesita su proyecto?</h2>
      <p>La regla es simple: si su proyecto <strong>genera aguas residuales</strong> (residencias, hoteles, industria) y no tiene acceso a la red de alcantarillado, necesita una <strong>PTAR</strong>. Si su proyecto <strong>requiere agua potable</strong> y no tiene conexión al acueducto público, necesita una <strong>PTAP</strong>. Si es un municipio con acueducto propio que capta de fuente superficial, necesita una PTAP. Si es ese mismo municipio y también tiene que tratar sus aguas residuales antes de verterlas al río, necesita ambas.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos tanto PTAR como PTAP para municipios, conjuntos residenciales, hoteles, agroindustrias e industrias en toda Colombia. También tramitamos los permisos de vertimiento y las concesiones de aguas ante las CAR. <strong>Contáctenos en ingenieriabernal.co o al +57 302 477 8910.</strong></p>
    </>,
  },

  'permiso-vertimientos-colombia': {
    title: 'Requisitos para permiso de vertimientos en Colombia',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Ingeniería Ambiental',
    metaDesc: 'Requisitos, documentos y pasos para obtener el permiso de vertimientos en Colombia ante la CAR. Normas aplicables (Decreto 1076, Resolución 0631) y tiempos de trámite actualizados.',
    keywords: 'permiso vertimientos Colombia requisitos, cómo tramitar permiso vertimientos Colombia, permiso vertimientos CAR Colombia, requisitos permiso vertimientos Colombia 2025',
    body: <>
      <p>Si su empresa, proyecto de construcción, municipio o establecimiento genera aguas residuales que van a ser vertidas a un cuerpo de agua superficial (río, quebrada, lago) o al suelo, necesita un <strong>permiso de vertimientos</strong> otorgado por la Corporación Autónoma Regional (CAR) competente o por la autoridad ambiental urbana. Sin este permiso, el vertimiento es ilegal y puede acarrear sanciones de hasta 5.000 SMMLV según la Ley 1333 de 2009. En este artículo explicamos los requisitos, documentos y pasos del trámite.</p>

      <h2>Marco normativo del permiso de vertimientos en Colombia</h2>
      <p>El permiso de vertimientos está regulado principalmente por:</p>
      <ul>
        <li><strong>Decreto 1076 de 2015 (Decreto Único Reglamentario Ambiental):</strong> Artículos 2.2.3.3.1.1 y siguientes, que compilaron el Decreto 3930 de 2010. Establece qué es un vertimiento, quiénes deben obtener permiso y los criterios de calidad para los cuerpos receptores.</li>
        <li><strong>Resolución 0631 de 2015 del Ministerio de Ambiente:</strong> Define los parámetros y valores límite máximos permisibles en los vertimientos puntuales a aguas superficiales y a alcantarillados. Esta resolución establece los estándares que debe cumplir el efluente de su PTAR.</li>
        <li><strong>Ley 99 de 1993 y Ley 1333 de 2009:</strong> Marco general de la política ambiental y del régimen sancionatorio por infracciones ambientales.</li>
      </ul>

      <h2>¿Quiénes deben obtener permiso de vertimientos?</h2>
      <p>Deben tramitar permiso de vertimientos ante la CAR:</p>
      <ul>
        <li>Municipios y operadores de sistemas de alcantarillado y PTAR que viertan efluentes tratados a ríos o quebradas.</li>
        <li>Industrias, empresas mineras, petroleras, agroindustriales y alimenticias que viertan aguas residuales a cuerpos de agua o al suelo.</li>
        <li>Proyectos de construcción que temporalmente generen vertimientos de aguas de excavación o escorrentía con sedimentos a cuerpos de agua.</li>
        <li>Hoteles, centros comerciales, parques industriales y conjuntos residenciales sin acceso al alcantarillado público.</li>
        <li>Hospitales y clínicas que generan aguas residuales hospitalarias con características especiales.</li>
      </ul>

      <h2>Documentos requeridos para el permiso de vertimientos</h2>
      <p>Los documentos que exige la CAR para iniciar el trámite varían por entidad, pero en general son:</p>
      <ul>
        <li><strong>Formulario único nacional de solicitud de permiso de vertimientos</strong> (disponible en el portal de la CAR correspondiente).</li>
        <li><strong>Caracterización del vertimiento:</strong> Análisis fisicoquímico y microbiológico del agua residual a verter, realizado por un laboratorio acreditado por el IDEAM. Los parámetros mínimos exigidos están listados en la Resolución 0631/2015 según el tipo de actividad.</li>
        <li><strong>Descripción del sistema de tratamiento (PTAR):</strong> Memoria de cálculo del sistema de tratamiento que garantizará que el efluente cumplirá los estándares de la Resolución 0631. Si ya tiene la PTAR construida, se adjunta el diagrama de proceso y los datos operacionales. Si es un proyecto nuevo, se adjunta el diseño preliminar o definitivo.</li>
        <li><strong>Plano de localización del punto de vertimiento</strong> sobre cartografía IGAC a escala 1:25.000 o mayor.</li>
        <li><strong>Estudio de caracterización del cuerpo receptor:</strong> Calidad del agua del cuerpo de agua receptor aguas arriba y aguas abajo del punto de vertimiento. Algunas CAR exigen el modelo de asimilación de la carga contaminante.</li>
        <li><strong>Copia del certificado de existencia y representación legal</strong> de la persona jurídica solicitante.</li>
        <li><strong>Acreditación del derecho de dominio o tenencia del predio</strong> donde se genera el vertimiento.</li>
        <li><strong>Plan de contingencia</strong> para derrames o fallas del sistema de tratamiento (exigido por algunas CAR para industrias de mayor riesgo).</li>
      </ul>

      <h2>Tiempos del trámite ante la CAR</h2>
      <p>Según el Decreto 1076 de 2015, la CAR tiene <strong>60 días hábiles</strong> para resolver la solicitud de permiso de vertimientos desde la fecha en que el expediente está completo. En la práctica, este tiempo puede extenderse entre 3 y 12 meses en CAR con alta carga de solicitudes, como CORPOCALDAS, CARDER, CAR Cundinamarca o el AMVA, dependiendo de la complejidad del caso y de la completitud de la documentación radicada.</p>

      <h2>¿Se puede construir y operar antes de tener el permiso?</h2>
      <p>No. El permiso de vertimientos debe obtenerse antes de iniciar operaciones que generen el vertimiento. Sin embargo, para proyectos nuevos que van a construir su PTAR, la CAR puede otorgar un <strong>permiso provisional</strong> o de <strong>construcción</strong> mientras la planta se construye y se pone en operación. Lo importante es haber radicado la solicitud y contar con el diseño aprobado de la PTAR.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> preparamos toda la documentación técnica para el trámite de permisos de vertimientos ante las CAR de Colombia: caracterización del afluente, diseño de la PTAR, memoria técnica y acompañamiento durante la evaluación de la CAR. <strong>Contáctenos en ingenieriabernal.co o al WhatsApp +57 302 477 8910 para asesoría técnica sin costo.</strong></p>
    </>,
  },

  'estudio-amenaza-inundacion': {
    title: 'Estudio de amenaza por inundación: paso a paso',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Cómo se elabora un estudio de amenaza por inundación en Colombia: metodología paso a paso según el Decreto 1807/2014, Ley 1523 y el protocolo de las CAR. Tiempos y entregables.',
    keywords: 'estudio amenaza inundación Colombia paso a paso, cómo se hace estudio amenaza inundación Colombia, estudio inundación decreto 1807 metodología, estudio amenaza hídrica Colombia',
    body: <>
      <p>El <strong>estudio de amenaza por inundación</strong> es uno de los documentos técnicos más exigidos en Colombia para proyectos de construcción, planes de ordenamiento territorial y gestión del riesgo municipal. Lo solicitan las curadurías urbanas bajo el <strong>Decreto 1807 de 2014</strong>, las CAR para la delimitación de rondas hídricas, y los municipios para actualizar sus POT conforme a la <strong>Ley 1523 de 2012</strong>. En este artículo explicamos la metodología paso a paso que sigue un ingeniero especializado para elaborarlo.</p>

      <h2>¿Qué es la amenaza por inundación?</h2>
      <p>La amenaza por inundación es la probabilidad de que un área determinada sea cubierta por agua en un período de tiempo dado, como consecuencia del desbordamiento de un cuerpo de agua (río, quebrada, canal) durante un evento de lluvia de cierta magnitud. Se clasifica en tres niveles según el Decreto 1807:</p>
      <ul>
        <li><strong>Amenaza alta:</strong> Zona que puede inundarse con un evento de lluvia con período de retorno de 25 años o menos (Tr ≤ 25 años).</li>
        <li><strong>Amenaza media:</strong> Zona que puede inundarse con eventos entre Tr26 y Tr100 años.</li>
        <li><strong>Amenaza baja:</strong> Zona que solo se inunda para eventos extremos mayores al Tr100, con profundidades y velocidades bajas.</li>
      </ul>

      <h2>Paso 1: recopilación y revisión de información existente</h2>
      <p>El primer paso es recopilar toda la información disponible sobre la cuenca y el tramo de interés:</p>
      <ul>
        <li>Cartografía IGAC a escala 1:25.000 o 1:10.000 del área de estudio.</li>
        <li>Modelo Digital de Elevación (MDE o DEM) disponible: LiDAR de alta resolución si existe (1 m), o imágenes de satélite estéreo o dron si no hay.</li>
        <li>Registros hidrométricos del IDEAM en la red de estaciones de la cuenca: caudales medios diarios, caudales máximos instantáneos, años de registro.</li>
        <li>Registros pluviométricos para el análisis de lluvias extremas cuando no hay datos de caudal.</li>
        <li>Información histórica de inundaciones: registros del UNGRD, del Sistema Nacional de Gestión del Riesgo, noticias y estudios previos.</li>
        <li>POMCA del área si existe, y el mapa de amenaza hídrica adoptado por el POT municipal.</li>
      </ul>

      <h2>Paso 2: caracterización morfométrica de la cuenca</h2>
      <p>Se delimita la cuenca hidrográfica que drena al punto de interés usando el MDE. Se calculan sus parámetros morfométricos: área, perímetro, longitud del cauce principal, pendiente media del cauce y de la cuenca, tiempo de concentración, índice de compacidad (Gravelius) y densidad de drenaje. Estos parámetros son esenciales para seleccionar el método hidrológico y para interpretar la respuesta hidrológica de la cuenca.</p>

      <h2>Paso 3: análisis hidrológico — caudales de diseño</h2>
      <p>Se calculan los caudales máximos de diseño para los períodos de retorno requeridos (Tr25, Tr50, Tr100 y opcionalmente Tr10 y Tr200). Según la disponibilidad de datos:</p>
      <ul>
        <li><strong>Con datos de caudal:</strong> Se aplica análisis estadístico de valores extremos (distribuciones Gumbel, Log-Normal, Log-Pearson III o GEV) a la serie de caudales máximos anuales de la estación más cercana. Se selecciona la distribución de mejor ajuste mediante pruebas de bondad (chi-cuadrado, Kolmogorov-Smirnov).</li>
        <li><strong>Sin datos de caudal:</strong> Se usa análisis de lluvia-escorrentía: se obtiene la tormenta de diseño de la curva IDF del IDEAM para el período de retorno de interés, y se transforma en caudal usando el modelo HEC-HMS (método del hidrograma unitario del SCS o el método racional modificado según el área de la cuenca).</li>
      </ul>

      <h2>Paso 4: modelación hidráulica con HEC-RAS</h2>
      <p>Con los caudales de diseño calculados, se construye el modelo hidráulico del tramo de fuente hídrica de interés en HEC-RAS. El modelo puede ser:</p>
      <ul>
        <li><strong>1D:</strong> Se definen secciones transversales del cauce y las márgenes cada 20–100 m, se asigna el coeficiente de Manning y se corre el modelo en régimen permanente (steady state) para cada caudal de diseño.</li>
        <li><strong>2D:</strong> Se genera una malla de elementos finitos sobre el MDE de la zona inundable, se asignan los coeficientes de Manning por tipo de cobertura y se corre la simulación en régimen no permanente (unsteady flow) con el hidrograma de diseño.</li>
      </ul>
      <p>El resultado del modelo son los niveles de agua (láminas de inundación) y las velocidades en cada punto del tramo para cada período de retorno.</p>

      <h2>Paso 5: elaboración del mapa de amenaza</h2>
      <p>Con los resultados de la modelación hidráulica se generan los mapas de inundación para Tr25, Tr50 y Tr100. La intersección de estas manchas de agua con el área de estudio permite clasificar cada zona del terreno en nivel de amenaza alta, media o baja. Los mapas se generan en SIG (ArcGIS, QGIS) y se exportan a PDF para el informe y en formato shapefile para el municipio.</p>

      <h2>Paso 6: definición de la faja de protección hídrica</h2>
      <p>Con base en la lámina de inundación del Tr100 y los criterios del Código de Recursos Naturales y el POT municipal, se define la faja de protección o zona de retiro recomendada para el predio o el área de estudio. Esta faja es la que la curaduría utiliza para definir el polígono edificable del predio.</p>

      <h2>Entregables del estudio de amenaza por inundación</h2>
      <p>Al finalizar, el ingeniero entrega: informe técnico completo en PDF, mapas de amenaza en PDF y SHP, archivos del modelo HEC-RAS (.prj, .g01, .f01), planos de localización y sección hidráulica, y concepto técnico firmado con tarjeta COPNIA vigente.</p>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> elaboramos estudios de amenaza por inundación para predios, municipios y grandes proyectos en todo Colombia. Nuestros estudios son aceptados por curadurías, CAR y planeación municipal en el Eje Cafetero y todo el país. <strong>Solicite cotización en ingenieriabernal.co o al +57 302 477 8910.</strong></p>
    </>,
  },

}

export default articlesF
