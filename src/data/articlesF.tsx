import QuoteFormInline from '../components/QuoteFormInline'

// Category F articles — commercial keywords (10) + advanced hydraulic expertise (3)
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
  /* ─────────────────────────────────────────────────────────────────────────
     F-01: Socavación de puentes con HEC-18 en Colombia
  ───────────────────────────────────────────────────────────────────────── */
  'socavacion-puentes-hec18-colombia': {
    title: 'Análisis de socavación en puentes con HEC-18 en Colombia: metodología y costos 2026',
    date: 'Abril 2026',
    readTime: '14 min',
    category: 'Ingeniería de Puentes',
    metaDesc: 'Guía completa sobre el análisis de socavación en puentes en Colombia: metodología HEC-18, HEC-RAS, normativa INVIAS, tipos de socavación y costos del estudio en el Eje Cafetero.',
    keywords: 'socavación puentes Colombia, análisis socavación HEC-18, estudio socavación puente Colombia, socavación general y local Colombia, HEC-18 INVIAS Colombia, consultor socavación puente',
    body: <>
      <p>En Colombia, el <strong>35% de los colapsos de puentes documentados entre 1996 y 2020</strong> fue causado directamente por socavación del lecho, según datos del INVIAS. Puentes que soportaron décadas de carga viva colapsaron en pocas horas durante eventos de creciente porque sus cimientos perdieron el soporte del suelo por erosión hidráulica. Este artículo explica qué es la socavación, cómo se calcula con la metodología HEC-18 y por qué BIC realiza estos estudios para proyectos de infraestructura vial en todo el país.</p>

      <h2>¿Qué es la socavación en puentes y por qué es tan peligrosa?</h2>
      <p>La socavación es la remoción de material del lecho y las márgenes de un río por acción del flujo durante una creciente. Cuando el agua pasa por debajo de un puente, la sección del cauce se contrae — porque los estribos y las pilas ocupan parte del ancho disponible — y la velocidad del flujo aumenta. A mayor velocidad, mayor capacidad de arrastre de sedimentos. El lecho se erosiona hasta que la velocidad del flujo se reduce nuevamente por el aumento del área hidráulica: ese es el nivel final de socavación.</p>
      <p>Lo que hace peligrosa a la socavación es su invisibilidad: ocurre bajo el agua, en minutos o pocas horas durante el pico de la creciente, y puede dejar las pilas o estribos del puente "flotando" sobre un hoyo vacío sin que se note desde arriba. Cuando la creciente baja, el lecho puede rellenarse parcialmente, borrando la evidencia de la erosión máxima.</p>

      <h2>Tipos de socavación que analiza el HEC-18</h2>
      <p>La metodología HEC-18 (Hydraulic Engineering Circular No. 18, FHWA), adoptada por el INVIAS como referencia técnica para el diseño de puentes en Colombia, distingue tres componentes de socavación que deben calcularse por separado y luego sumarse para determinar la profundidad total de diseño de la cimentación:</p>

      <h3>1. Socavación general del cauce</h3>
      <p>Es la bajada general del lecho a lo largo de un tramo del río, sin relación directa con el puente. Puede ser progresiva (el río se está encajando por extracción de material, urbanización de la cuenca o cambios en la pendiente de equilibrio) o cíclica (asociada a eventos de creciente extrema). Se calcula a partir del balance de sedimentos en transporte: si el río lleva más material del que deposita, el lecho baja. En Colombia, los ríos andinos con cuencas en proceso de deforestación y los ríos de la Depresión Momposina muestran tasas de socavación general significativas que se deben cuantificar.</p>

      <h3>2. Socavación por contracción</h3>
      <p>Se produce porque los estribos y las pilas del puente reducen el ancho efectivo del cauce, acelerando el flujo. La metodología HEC-18 aplica las ecuaciones de Laursen para cauces con lecho de arenas o gravas, calculando la profundidad de equilibrio a partir de la relación entre el ancho libre bajo el puente y el ancho natural del cauce. Es la componente más fácil de estimar pero a menudo la de mayor magnitud en ríos de planicie.</p>

      <h3>3. Socavación local en pilas y estribos</h3>
      <p>Es la erosión localizada en torno a cada pila o estribo del puente, causada por los vórtices de herradura que el obstáculo genera en el flujo. La profundidad de socavación local puede superar los 3–5 metros en ríos con lecho de arena y eventos de diseño con caudales de período de retorno 200–500 años (Tr200–Tr500). HEC-18 propone ecuaciones basadas en los resultados de investigación de Colorado State University (ecuación de Richardson-Davis): <strong>ys = 2.0 × K1 × K2 × K3 × K4 × a^0.65 × Fr1^0.43</strong>, donde ys es la profundidad de socavación local, a es el ancho de la pila y Fr1 es el número de Froude del flujo de aproximación.</p>

      <h2>Rol del HEC-RAS en el análisis de socavación</h2>
      <p>HEC-RAS incluye módulos específicos para el cálculo de socavación conforme a la metodología HEC-18. El análisis se realiza en dos fases:</p>
      <p><strong>Fase 1 — Modelación hidráulica:</strong> Se construye el modelo 1D del tramo del río que incluye el puente. El módulo "Bridge Hydraulics" de HEC-RAS permite modelar el puente con su geometría real (sección transversal del tablero, posición de pilas, cotas de estribos). HEC-RAS calcula la velocidad del flujo de aproximación a la pila, el tirante hidráulico y el número de Froude para cada período de retorno analizado.</p>
      <p><strong>Fase 2 — Cálculo de socavación:</strong> Con los resultados hidráulicos, HEC-RAS aplica automáticamente las ecuaciones HEC-18 para cada componente. El usuario debe ingresar los datos geotécnicos (D50, D84, D16 del material del lecho y los estribos) y especificar el tipo de flujo (en vivo o con transporte de sedimentos en suspensión). Los resultados incluyen la profundidad de socavación para cada Tr y la cota mínima segura de la base de la cimentación.</p>

      <h2>Marco normativo en Colombia: INVIAS y el Manual de Drenaje</h2>
      <p>El Manual de Drenaje para Carreteras del INVIAS (actualización 2009, vigente hasta nueva edición) establece que todo diseño de puente debe incluir:</p>
      <ul>
        <li>Caudales de diseño para período de retorno mínimo de <strong>Tr 100 años</strong> en el diseño hidráulico general y <strong>Tr 500 años</strong> para el análisis de socavación de la cimentación.</li>
        <li>Aplicación de la metodología HEC-18 para los tres tipos de socavación.</li>
        <li>Profundidad mínima de la cimentación que exceda en al menos 1 metro la profundidad total de socavación calculada para Tr 500 años.</li>
        <li>Análisis de estabilidad del talud de los estribos considerando la reducción de soporte por la socavación.</li>
      </ul>
      <p>Para puentes sobre vías primarias, el estudio de socavación debe estar firmado por un <strong>ingeniero civil con tarjeta profesional COPNIA</strong> vigente y con experiencia demostrable en hidráulica fluvial.</p>

      <h2>Información de campo necesaria para el estudio</h2>
      <p>Un estudio de socavación en puentes requiere los siguientes insumos:</p>
      <ul>
        <li><strong>Topobatimetría del cauce:</strong> levantamiento del perfil longitudinal y secciones transversales del río en un tramo de al menos 500 metros aguas arriba y aguas abajo del puente, incluyendo la sección bajo el tablero. En BIC realizamos esta topobatimetría con estación total, GNSS y en cauces profundos con ecosonda.</li>
        <li><strong>Granulometría del lecho:</strong> muestreos del material del fondo del cauce para determinar la curva granulométrica (D50, D84, D16). Diferenciamos entre el material del lecho activo y el material de los bancos y planicies.</li>
        <li><strong>Caudales de diseño:</strong> análisis hidrológico de la cuenca para calcular los caudales de creciente para Tr 2, 5, 10, 25, 50, 100 y 500 años, usando análisis estadístico de caudales del IDEAM o modelación HEC-HMS cuando no hay estación hidrométrica.</li>
        <li><strong>Geometría del puente:</strong> planos del puente existente (si hay) o diseño propuesto, con dimensiones de pilas, estribos, tablero y cotas de cimentación.</li>
      </ul>

      <h2>Socavación en ríos de montaña colombianos: particularidades</h2>
      <p>Los ríos andinos del Eje Cafetero, Antioquia y la zona cafetera presentan características que diferencian el análisis de socavación respecto a ríos de planicie:</p>
      <ul>
        <li><strong>Lecho con material grueso heterogéneo:</strong> Los ríos de montaña tienen lechos de grava y cantos rodados con D50 entre 50 y 200 mm. En estos sustratos, la socavación máxima es menor porque el material es más resistente, pero ocurren en eventos de mayor energía (avenidas torrenciales).</li>
        <li><strong>Flujo supercrítico:</strong> En tramos de alta pendiente, el flujo puede ser supercrítico (Fr &gt; 1), lo que cambia las condiciones de borde del modelo hidráulico y las ecuaciones aplicables de HEC-18. La profundidad crítica reemplaza a la ecuación de Laursen para socavación por contracción.</li>
        <li><strong>Transporte de sedimentos gruesos y flujos hiperconcentrados:</strong> En eventos de avenida torrencial, el flujo puede transportar bloques de roca de varios toneladas que impactan directamente las pilas, generando daños estructurales que van más allá de la socavación convencional.</li>
      </ul>

      <h2>¿Cuánto cuesta un estudio de socavación en Colombia?</h2>
      <p>El costo depende de la longitud del tramo a modelar, el número de pilas y estribos del puente, la disponibilidad de datos del IDEAM y si se requiere topobatimetría de campo. Los rangos orientativos en Colombia en 2026 son:</p>
      <ul>
        <li><strong>Puente de 1 pila + 2 estribos, con información hidrológica disponible:</strong> $9–$16 millones COP</li>
        <li><strong>Puente con múltiples pilas, sin estación hidrométrica cercana:</strong> $18–$30 millones COP (incluye análisis hidrológico completo)</li>
        <li><strong>Estudio integral con topobatimetría de campo + granulometría + modelación:</strong> $25–$45 millones COP</li>
      </ul>

      <h2>Preguntas frecuentes sobre socavación en puentes</h2>
      <h3>¿Cuándo es obligatorio el estudio de socavación en Colombia?</h3>
      <p>Es obligatorio para cualquier puente nuevo sobre vía primaria o secundaria según el Manual de Drenaje del INVIAS. Para vías terciarias y puentes artesanales, no hay norma que lo exija explícitamente, pero es una buena práctica de ingeniería y puede ser requerido por la interventoría. También es obligatorio para puentes existentes cuando se detectan signos de socavación activa o cuando se va a ampliar el tablero.</p>
      <h3>¿El HEC-RAS calcula automáticamente la socavación?</h3>
      <p>Sí, HEC-RAS tiene un módulo de socavación integrado que aplica las ecuaciones HEC-18. Sin embargo, el ingeniero debe ingresar correctamente los parámetros geotécnicos del lecho y verificar que los resultados son coherentes con las condiciones de campo. No es un cálculo automático que pueda realizarse sin criterio técnico especializado.</p>
      <h3>¿Qué diferencia hay entre socavación y erosión?</h3>
      <p>La erosión es el proceso general de desgaste del suelo por acción del agua. La socavación es un tipo específico de erosión localizada en el lecho de un cauce, asociada al aumento de velocidad del flujo. La socavación en puentes es erosión hidráulica acelerada por la presencia de la estructura.</p>
      <h3>¿Puede revertirse la socavación?</h3>
      <p>La socavación activa puede frenarse con obras de protección: colchones de roca (riprap), gaviones, fundas de enrocado en pilas y estribos, o umbral de fondo aguas abajo del puente. Sin embargo, el material ya removido no regresa naturalmente. En algunos ríos con alto transporte de sedimentos, el hoyo de socavación puede rellenarse parcialmente cuando baja la creciente, pero esto no significa que la cimentación esté segura para la próxima creciente.</p>

      <QuoteFormInline serviceId="socavacion" />
    </>,
  },

  /* ─────────────────────────────────────────────────────────────────────────
     F-02: Condición de aguas abajo HEC-RAS
  ───────────────────────────────────────────────────────────────────────── */
  'condicion-aguas-abajo-hec-ras': {
    title: 'Condición de aguas abajo en HEC-RAS: guía completa para régimen subcrítico y supercrítico',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Software y Modelación',
    metaDesc: 'Qué es la condición de borde aguas abajo en HEC-RAS, cómo elegirla según el régimen de flujo (subcrítico o supercrítico), opciones disponibles y errores comunes en proyectos colombianos.',
    keywords: 'condición aguas abajo HEC-RAS, condición de borde HEC-RAS Colombia, régimen subcrítico HEC-RAS, pendiente normal HEC-RAS, condición de contorno HEC-RAS, HEC-RAS tutorial Colombia',
    body: <>
      <p>Una de las preguntas más frecuentes entre ingenieros que usan HEC-RAS por primera vez —o que llevan tiempo usándolo pero encuentran resultados inconsistentes— es: <strong>¿qué condición de aguas abajo debo usar en mi modelo?</strong> La elección correcta de la condición de borde aguas abajo es crítica para que los resultados del perfil hidráulico sean realistas. Una condición mal seleccionada puede sobrestimar o subestimar significativamente los tirantes hidráulicos en todo el tramo modelado, afectando directamente los mapas de inundación y el diseño de obras hidráulicas.</p>

      <h2>¿Qué es una condición de borde en HEC-RAS?</h2>
      <p>En hidráulica de canales a superficie libre, el flujo de agua en un cauce es un problema gobernado por una ecuación diferencial que necesita <strong>condiciones de borde</strong> para poder resolverse. Sin ellas, el sistema de ecuaciones tiene infinitas soluciones. HEC-RAS resuelve las ecuaciones de Saint-Venant (régimen no permanente) o la ecuación de energía (régimen permanente) integrando el cálculo desde las secciones transversales donde se conoce el estado del flujo hacia las secciones donde se desconoce.</p>
      <p>La <strong>condición de borde aguas abajo</strong> le dice al modelo cuál es el tirante hidráulico (profundidad del agua) en la sección más baja del tramo modelado. A partir de ese dato conocido, HEC-RAS calcula el perfil hacia arriba (en flujo subcrítico) o hacia abajo (en flujo supercrítico).</p>

      <h2>Régimen subcrítico vs supercrítico: ¿cuál tiene su cauce?</h2>
      <p>El régimen de flujo determina en qué dirección se propagan las perturbaciones hidráulicas y, por tanto, dónde se necesitan condiciones de borde:</p>
      <ul>
        <li><strong>Régimen subcrítico (Fr &lt; 1, lento):</strong> Las perturbaciones aguas abajo se propagan hacia arriba. Por eso, la condición de borde necesaria está <strong>aguas abajo</strong>. El cálculo va de abajo hacia arriba. Es el régimen más común en ríos de planicie y cauces urbanos con pendiente suave (&lt;0.5%). También aplica a ríos de montaña en tramos de baja pendiente o en zonas de remanso (aguas arriba de una presa, confluencia o cambio de sección).</li>
        <li><strong>Régimen supercrítico (Fr &gt; 1, rápido):</strong> Las perturbaciones no pueden propagarse hacia arriba. La condición de borde necesaria está <strong>aguas arriba</strong>. El cálculo va de arriba hacia abajo. Es el régimen de torrentes de montaña en tramos de alta pendiente (&gt;2–3%).</li>
        <li><strong>Régimen mixto (crítico o con transiciones):</strong> El flujo cambia de subcrítico a supercrítico (en un punto de control: cambio de pendiente, resalto hidráulico) o viceversa (en un resalto hidráulico). HEC-RAS puede manejar flujo mixto, pero el modelo necesita condiciones de borde en ambos extremos y el usuario debe interpretar cuidadosamente los resultados en los puntos de transición.</li>
      </ul>
      <p>Para saber el régimen de su cauce, calcule el número de Froude en la sección de interés: <strong>Fr = V / √(g × y)</strong>, donde V es la velocidad media, g es la aceleración gravitacional (9.81 m/s²) y y es el tirante hidráulico. Si Fr &lt; 1: subcrítico. Si Fr &gt; 1: supercrítico.</p>

      <h2>Opciones de condición de borde aguas abajo en HEC-RAS</h2>

      <h3>1. Profundidad normal (Normal Depth)</h3>
      <p>Es la opción más usada y la más apropiada cuando el tramo modelado termina en un cauce con pendiente uniforme, lejos de cualquier estructura o confluencia que genere remanso. HEC-RAS necesita que el usuario ingrese la <strong>pendiente de la línea de energía</strong> (que en flujo uniforme es igual a la pendiente del fondo del cauce). El programa calcula la profundidad normal con la ecuación de Manning.</p>
      <p><strong>Cuándo usarla:</strong> El tramo termina en un río con pendiente relativamente uniforme, sin estructuras aguas abajo que puedan elevar el nivel. Es la opción "por defecto" más robusta para ríos de Colombia cuando el extremo del modelo está suficientemente lejos del área de interés.</p>
      <p><strong>Error frecuente:</strong> Usar la pendiente media del cauce completo en lugar de la pendiente local en la sección aguas abajo. En ríos con cambios de pendiente, esto puede generar tirantes iniciales incorrectos que afectan el perfil en varios kilómetros hacia arriba.</p>

      <h3>2. Profundidad crítica (Critical Depth)</h3>
      <p>HEC-RAS calcula automáticamente la profundidad crítica en la sección aguas abajo (la profundidad para la que el número de Froude es exactamente 1). Es útil cuando el modelo termina en un salto o caída libre — el borde de una cascada, la cresta de un vertedero, la salida de un canal hacia un río mucho más grande — donde el flujo supera el estado crítico.</p>
      <p><strong>Cuándo usarla:</strong> El tramo termina en un punto de control real (salto, caída), o cuando no se tiene información del nivel aguas abajo y se quiere una condición conservadora (la profundidad crítica suele ser la mínima posible para flujo subcrítico).</p>
      <p><strong>Precaución:</strong> No use profundidad crítica en cauces con régimen claramente subcrítico donde hay remanso. El resultado será un perfil de tirantes subestimado con inundaciones menores a las reales.</p>

      <h3>3. Elevación de la lámina de agua conocida (Known Water Surface)</h3>
      <p>Se ingresa directamente la cota de la lámina de agua en la sección aguas abajo, medida en campo (aforo con instrumento de nivel) o obtenida de un modelo de mayor escala. Es la condición más precisa cuando se tiene el dato.</p>
      <p><strong>Cuándo usarla:</strong> El tramo desemboca en un embalse con nivel conocido, o en un río principal del que se tiene un registro de niveles calibrado. También se usa en HEC-RAS para modelar el efecto de remanso de una presa aguas abajo del tramo.</p>
      <p><strong>Aplicación en Colombia:</strong> Para ríos que desembocan en el río Magdalena, Cauca o en embalses regulados (Betania, Miel I, Salvajina), la cota de la lámina del cuerpo receptor puede obtenerse del operador de la regulación o del modelo hídrico del IDEAM.</p>

      <h3>4. Curva de gasto o relación caudal-tirante (Rating Curve)</h3>
      <p>Se ingresa una tabla de pares (Q, y) — caudal vs. tirante — medida en la sección aguas abajo. HEC-RAS interpola en la tabla para obtener el tirante correspondiente al caudal de cada perfil de cálculo. Es la condición más representativa de la realidad cuando se dispone de una curva de aforo calibrada para la estación hidrométrica más cercana al límite del modelo.</p>
      <p><strong>Cuándo usarla:</strong> Hay una estación hidrométrica del IDEAM cerca del extremo aguas abajo del modelo, con curva de aforo publicada. También se puede construir una curva de gasto sintética usando Manning para la sección transversal del río en el extremo del modelo.</p>

      <h2>Condiciones de borde en HEC-RAS régimen no permanente (Unsteady Flow)</h2>
      <p>En el módulo de flujo no permanente (Unsteady Flow Analysis), las condiciones de borde cambian de naturaleza: en lugar de definir un tirante o una pendiente, se definen series de tiempo. Las opciones más usadas son:</p>
      <ul>
        <li><strong>Hidrograma de caudal aguas arriba:</strong> Serie de tiempo Q(t) en la sección aguas arriba. Es la condición de entrada principal de la creciente.</li>
        <li><strong>Hidrograma de nivel aguas abajo:</strong> Serie de tiempo h(t) en la sección aguas abajo. Útil cuando el cauce desemboca en un estuario con mareas o en un embalse con nivel variable.</li>
        <li><strong>Curva de gasto (Rating Curve):</strong> También válida para no permanente cuando el nivel aguas abajo depende del caudal en tiempo real.</li>
        <li><strong>Pendiente normal:</strong> Válida también para no permanente como condición de salida en tramos que se extienden suficientemente hacia el cauce receptor.</li>
      </ul>
      <p>En Colombia, para estudios de amenaza por inundación (Decreto 1807), lo más frecuente es usar el módulo de no permanente con hidrograma aguas arriba (calculado con HEC-HMS) y pendiente normal o curva de gasto aguas abajo.</p>

      <h2>¿Qué pasa si la condición de borde aguas abajo es incorrecta?</h2>
      <p>El efecto de una condición de borde incorrecta se "propaga" hacia arriba a lo largo de varios kilómetros del modelo. Si la condición aguas abajo es demasiado alta (sobreestima el tirante), el perfil completo se levantará artificialmente, generando manchas de inundación mayores a las reales. Si es demasiado baja (subestima el tirante), el perfil será más bajo de lo real y la inundación parecerá menor. Por esta razón, se recomienda que el extremo aguas abajo del modelo esté suficientemente lejos del área de interés (al menos 3–5 veces el tirante normal del cauce), para que el error de la condición de borde se amortigüe antes de llegar a la zona de análisis.</p>

      <h2>Ejemplo práctico: condición aguas abajo para un tramo urbano en Manizales</h2>
      <p>Suponga que se modela un tramo de 2 km de la quebrada El Guamo en Manizales para un estudio de amenaza por inundación según el Decreto 1807. El tramo termina en la confluencia con el río Chinchiná. ¿Cuál es la condición de borde aguas abajo correcta?</p>
      <p>Opciones analizadas: (1) Profundidad normal: la pendiente media del río Chinchiná en ese punto es 0.6%; se calcula la profundidad normal usando Manning con la sección del Chinchiná. Válida si el Chinchiná no genera remanso significativo sobre la quebrada. (2) Rating curve del Chinchiná: si el IDEAM tiene una estación en el Chinchiná cercana a la confluencia, se puede usar su curva de gasto. (3) Known Water Surface: si el modelo del Chinchiná (realizado aparte) entrega el nivel en la confluencia para cada Tr, se puede usar ese valor.</p>
      <p>En este caso, BIC usaría la profundidad normal calibrada con datos del IDEAM y verificaría que el nivel en la confluencia es coherente con los niveles históricos de creciente registrados. Si existe un modelo del Chinchiná disponible, se usaría como condición de borde conocida para mayor precisión.</p>

      <h2>Preguntas frecuentes sobre condición de borde en HEC-RAS</h2>
      <h3>¿Puedo usar profundidad normal en todos los modelos?</h3>
      <p>Para la mayoría de modelos de ríos colombianos en régimen subcrítico, sí. Siempre que el extremo del modelo esté suficientemente alejado del área de interés y la pendiente del cauce sea razonablemente uniforme en esa zona. No es adecuada si el tramo termina justo aguas arriba de una confluencia importante, un embalse o una estructura de control.</p>
      <h3>¿Qué pendiente uso para la profundidad normal?</h3>
      <p>Use la pendiente de la línea de energía en la sección de salida, que en flujo uniforme equivale a la pendiente del fondo del cauce. Calcúlela midiendo la diferencia de cotas del fondo entre dos secciones transversales en la zona de salida, dividida por la distancia entre ellas. No use la pendiente media de toda la cuenca o del tramo completo.</p>
      <h3>¿Por qué HEC-RAS da el aviso "Critical Depth used at downstream"?</h3>
      <p>Este mensaje aparece cuando HEC-RAS no logra converger con la condición de borde especificada y cae a profundidad crítica como solución de respaldo. Generalmente indica que la condición de borde es inconsistente con el régimen de flujo calculado (por ejemplo, se especificó profundidad normal para flujo subcrítico pero el flujo calculado en esa sección es supercrítico). Revise la pendiente del cauce y el tipo de régimen antes de proceder.</p>
      <h3>¿Qué condición de borde usar en flujo mixto?</h3>
      <p>En flujo mixto, HEC-RAS necesita condiciones en ambos extremos. Use "Mixed Flow Regime" en la configuración del plan y defina tanto la condición aguas arriba (para la porción supercrítica) como la aguas abajo (para la porción subcrítica). HEC-RAS identifica el punto de control (profundidad crítica) y calcula el perfil desde ambos extremos hacia el centro.</p>

      <QuoteFormInline serviceId="hec-ras-1d" />
    </>,
  },

  /* ─────────────────────────────────────────────────────────────────────────
     F-03: Modelación de avenidas torrenciales en Colombia
  ───────────────────────────────────────────────────────────────────────── */
  'modelacion-avenidas-torrenciales-colombia': {
    title: 'Modelación de avenidas torrenciales en Colombia: metodología, herramientas y zonificación de amenaza',
    date: 'Abril 2026',
    readTime: '15 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Guía técnica sobre modelación de avenidas torrenciales en Colombia: diferencias con inundación convencional, metodología SGC, software RAMMS y HEC-RAS, y zonificación de amenaza para el Eje Cafetero.',
    keywords: 'avenidas torrenciales Colombia, modelación flujos detritos Colombia, zonificación amenaza torrencial Colombia, flujos de detritos Eje Cafetero, modelación torrencial HEC-RAS, avenida torrencial Manizales Colombia',
    body: <>
      <p>Colombia tiene una de las densidades más altas de eventos de avenidas torrenciales en América del Sur. El Eje Cafetero, la región de Nariño, los flancos de la Sierra Nevada y las cuencas andinas de Antioquia registran decenas de eventos al año, algunos de ellos con consecuencias catastróficas. La tragedia de Armero en 1985 (25.000 muertos), los flujos del 2017 en Mocoa (329 muertos) y los eventos recurrentes en Manizales, Pereira y Armenia demuestran que <strong>modelar y zonificar la amenaza por avenidas torrenciales no es una tarea académica: es una necesidad urgente para salvar vidas y orientar el ordenamiento territorial.</strong></p>

      <h2>¿Qué es una avenida torrencial y en qué se diferencia de una inundación convencional?</h2>
      <p>Una avenida torrencial es un evento de flujo rápido en quebradas y ríos de montaña caracterizado por una <strong>mezcla de agua, sedimentos, rocas, troncos y material orgánico</strong> que se moviliza como un flujo altamente denso (densidades de 1.400–2.200 kg/m³ frente a los 1.000 kg/m³ del agua limpia). Su velocidad puede superar los 10 m/s en tramos con pendiente alta y su frente de onda llega sin previo aviso en cuestión de minutos.</p>
      <p>Las diferencias clave con una inundación convencional son:</p>
      <ul>
        <li><strong>Densidad y viscosidad:</strong> Los flujos de detritos se comportan como un fluido no newtoniano (plástico de Bingham), con alta resistencia interna y capacidad de transportar clastos de varios metros cúbicos. Una inundación convencional es agua limpia o con baja concentración de sedimentos.</li>
        <li><strong>Velocidad:</strong> Las avenidas torrenciales pueden viajar a 5–20 m/s en el canal principal. Las inundaciones convencionales raramente superan 2–3 m/s en terrenos planos.</li>
        <li><strong>Tiempo de concentración:</strong> Cuencas torrenciales de 1–20 km² pueden responder en 15–60 minutos a una lluvia de alta intensidad. Cuencas grandes tienen tiempos de respuesta de horas o días.</li>
        <li><strong>Depósito:</strong> Al reducir la pendiente, las avenidas torrenciales depositan abanicos de material grueso que pueden enterrar edificaciones y cambiar radicalmente la morfología del cauce.</li>
      </ul>

      <h2>Cuencas torrenciales en Colombia: factores de susceptibilidad</h2>
      <p>No todas las quebradas son torrenciales. Los factores que hacen a una cuenca susceptible a generar avenidas torrenciales son:</p>
      <ul>
        <li><strong>Pendiente media de la cuenca superior a 25°:</strong> Las cuencas andinas del Eje Cafetero con pendientes de 40–70% en sus cabeceras generan flujos con alta energía gravitacional.</li>
        <li><strong>Disponibilidad de material sedimentario:</strong> Suelos residuales derivados de cenizas volcánicas (predominantes en Caldas, Risaralda, Quindío y Nariño) tienen alta erodibilidad cuando se saturan.</li>
        <li><strong>Cubierta vegetal degradada:</strong> La deforestación y los pastizales en laderas empinadas eliminan la interceptación de lluvia y la cohesión radicular, facilitando la movilización de suelo.</li>
        <li><strong>Historial de eventos:</strong> Quebradas con registros de avenidas anteriores (visible en depósitos de abanico torrencial en el cono de deyección) tienen mayor probabilidad de recurrencia.</li>
        <li><strong>Lluvias de alta intensidad:</strong> Los registros del IDEAM muestran que en el Eje Cafetero pueden ocurrir lluvias de hasta 80–100 mm en una hora, suficiente para desencadenar flujos en cuencas susceptibles.</li>
      </ul>

      <h2>Metodología del SGC para zonificación de amenaza por avenidas torrenciales</h2>
      <p>El Servicio Geológico Colombiano publicó en 2016 la <em>Guía Metodológica para la Zonificación de la Amenaza por Avenidas Torrenciales</em>, el instrumento técnico oficial para estudios de amenaza en Colombia. Esta guía establece una metodología en cuatro niveles de detalle:</p>

      <h3>Nivel 1 — Inventario histórico de eventos</h3>
      <p>Recopilación sistemática de eventos de avenida torrencial registrados en el área de estudio: fotografías aéreas, noticias históricas, informes del IGAC, CORPOCALDAS, CARDER o UNGRD, testimonios de habitantes locales. El inventario permite determinar el área máxima afectada por eventos pasados y calibrar los modelos.</p>

      <h3>Nivel 2 — Análisis morfométrico de la cuenca</h3>
      <p>Determinación de indicadores morfométricos que permiten clasificar la cuenca según su potencial torrencial: índice de torrencialidad (relación área/longitud del cauce principal), índice de forma (circular vs. alargada), relación de bifurcación de la red de drenaje. Las cuencas con alto potencial torrencial tienen índice de torrencialidad mayor a 2.0 y tiempo de concentración menor a 1 hora.</p>

      <h3>Nivel 3 — Modelación del flujo de detritos</h3>
      <p>Simulación numérica del comportamiento del flujo de detritos mediante software especializado. Los modelos más usados en Colombia son:</p>
      <ul>
        <li><strong>RAMMS (Rapid Mass Movements Simulation):</strong> Desarrollado por el Instituto Federal de Investigación de Bosques, Nieve y Paisaje de Suiza (WSL). Es el modelo de referencia para avenidas torrenciales en Colombia y el adoptado por el SGC. Usa la reología de Voellmy (combinación de fricción de Coulomb y resistencia turbulenta). Requiere datos de volumen de masa potencialmente movilizable y parámetros reológicos calibrados para suelos locales.</li>
        <li><strong>FLO-2D:</strong> Modelo bifásico (agua + sedimentos) ampliamente usado en estudios INVIAS y planes de contingencia. Permite simular inundaciones convencionales y flujos hiperconcentrados con el mismo modelo.</li>
        <li><strong>HEC-RAS con transporte de sedimentos:</strong> La versión 6.x de HEC-RAS incluye módulos de transporte de sedimentos no cohesivos que permiten modelar eventos de alta carga sedimentaria, aunque con menos precisión que RAMMS para flujos de detritos propiamente dichos.</li>
      </ul>

      <h3>Nivel 4 — Mapas de amenaza y zonificación</h3>
      <p>Los mapas de amenaza resultantes de la modelación clasifican el territorio en tres zonas según la combinación de magnitud del evento (profundidad × velocidad) y probabilidad de ocurrencia:</p>
      <ul>
        <li><strong>Amenaza alta (rojo):</strong> Zona de impacto directo del flujo de detritos. Profundidades superiores a 0.5 m con velocidades &gt; 3 m/s. Inapta para construcción. Requiere evaluación de obras de mitigación de alto costo.</li>
        <li><strong>Amenaza media (naranja):</strong> Zona de abanico de deposición con impacto moderado. Profundidades de 0.2–0.5 m. Puede permitirse construcción con restricciones especiales de diseño estructural y sistemas de alerta temprana.</li>
        <li><strong>Amenaza baja (amarillo):</strong> Zona marginal con impacto ocasional solo en eventos de alta recurrencia. Requiere medidas preventivas básicas.</li>
      </ul>

      <h2>Obras de mitigación de avenidas torrenciales</h2>
      <p>El análisis de amenaza por avenidas torrenciales no solo sirve para determinar zonas de exclusión: también orienta el diseño de obras de mitigación que permiten reducir el riesgo en zonas ya ocupadas. Las obras más frecuentes en el Eje Cafetero son:</p>
      <ul>
        <li><strong>Diques de retención (check dams):</strong> Estructuras transversales en el cauce que retienen el material sólido del flujo. Se diseñan en serie, de mayor a menor altura, para acumular los sedimentos y reducir la capacidad erosiva del flujo.</li>
        <li><strong>Deflectores y muros de encauzamiento:</strong> Estructuras longitudinales que dirigen el flujo por el cauce y evitan que se desborde hacia zonas urbanizadas. Combinan gaviones, concreto reforzado y enrocado.</li>
        <li><strong>Obras de control en cabecera:</strong> Estabilización de laderas con sistemas de drenaje, revegetalización y muros de contención que reducen el volumen de material potencialmente movilizable.</li>
        <li><strong>Sistemas de alerta temprana (SAT):</strong> Redes de pluviómetros con umbral de activación que alertan a las comunidades cuando la lluvia supera el nivel crítico que ha desencadenado avenidas históricamente. El IDEAM y las CAR han implementado SAT en varias cuencas del Eje Cafetero.</li>
      </ul>

      <h2>Avenidas torrenciales y el Eje Cafetero: la experiencia de BIC</h2>
      <p>BIC ha realizado estudios de amenaza por avenidas torrenciales en cuencas de Caldas, Risaralda y Quindío, incluyendo quebradas en los municipios de Manizales, Villamaría, Chinchiná, Viterbo y La Dorada. La zona presenta las condiciones de mayor susceptibilidad del país: suelos derivados de cenizas volcánicas del Volcán Nevado del Ruiz, pendientes medias de cuenca de 40–65%, intensidades de lluvia que superan los 60 mm/h en eventos extremos y un historial documentado de avenidas desde 1902.</p>
      <p>Nuestros estudios combinan: inventario histórico con fotografías aéreas del IGAC desde 1950, análisis morfométrico con SIG (QGIS + ArcGIS), modelación con RAMMS calibrado con eventos históricos documentados, y cartografía de amenaza para incorporación en POT, estudios de factibilidad de planes parciales y diseño de obras de mitigación.</p>

      <h2>Marco normativo en Colombia para avenidas torrenciales</h2>
      <ul>
        <li><strong>Ley 1523 de 2012:</strong> Establece la política nacional de gestión del riesgo de desastres. Obliga a los municipios a incorporar el riesgo por avenidas torrenciales en sus planes municipales de gestión del riesgo (PMGRD).</li>
        <li><strong>Decreto 1807 de 2014:</strong> Exige estudios detallados de amenaza por avenidas torrenciales para zonas de expansión urbana y planes parciales en municipios con este tipo de amenaza identificada en el POT.</li>
        <li><strong>Guía SGC 2016:</strong> Metodología oficial para zonificación de amenaza por avenidas torrenciales. Es el referente técnico que deben seguir los estudios presentados ante las corporaciones autónomas y curadurías.</li>
        <li><strong>Guía MVCT 2022:</strong> El Ministerio de Vivienda publicó la guía de estudios básicos de amenaza por avenidas torrenciales para su incorporación en POT, complementaria a la guía del SGC.</li>
      </ul>

      <h2>¿Cuánto cuesta un estudio de amenaza por avenidas torrenciales en Colombia?</h2>
      <ul>
        <li><strong>Estudio básico (cuenca &lt;10 km², metodología SGC niveles 1–3):</strong> $14–$25 millones COP</li>
        <li><strong>Estudio de detalle con RAMMS (cuenca 10–50 km²):</strong> $25–$50 millones COP</li>
        <li><strong>Estudio integral con diseño de obras de mitigación:</strong> $40–$90 millones COP</li>
        <li><strong>Incorporación de resultados en instrumento de POT o plan parcial:</strong> $8–$15 millones COP adicionales</li>
      </ul>

      <h2>Preguntas frecuentes sobre avenidas torrenciales en Colombia</h2>
      <h3>¿Qué diferencia una avenida torrencial de un flujo de lodo?</h3>
      <p>Los flujos de lodo (mudflows) tienen una proporción alta de arcillas y limos finos con agua, mientras que las avenidas torrenciales incluyen material más grueso (gravas, bloques) movilizado por el caudal líquido. En Colombia, los eventos de cuencas con cenizas volcánicas (Eje Cafetero, Nariño) suelen ser flujos hiperconcentrados con características intermedias entre ambos tipos.</p>
      <h3>¿Una avenida torrencial puede ocurrir con lluvia moderada?</h3>
      <p>Sí. Lo determinante no es solo la intensidad de la lluvia, sino la condición previa de saturación del suelo. Un suelo ya saturado por lluvias de días anteriores puede desencadenar un flujo de detritos con una lluvia relativamente moderada (20–30 mm en una hora). Por eso los SAT en Colombia evalúan tanto la lluvia instantánea como la lluvia acumulada en las últimas 24–72 horas.</p>
      <h3>¿Puede prevenirse completamente una avenida torrencial?</h3>
      <p>No completamente. La amenaza torrencial es un proceso natural que ocurre en montañas con determinadas condiciones geológicas y climáticas. Lo que sí puede hacerse es: (1) zonificar el territorio para evitar construir en zonas de impacto directo; (2) diseñar obras de mitigación que reduzcan la magnitud del impacto en zonas ya ocupadas; (3) implementar SAT para reducir el tiempo de exposición de las personas al evento.</p>
      <h3>¿El seguro de inmuebles cubre daños por avenida torrencial en Colombia?</h3>
      <p>Depende de la póliza. Muchas aseguradoras excluyen explícitamente "movimientos en masa" y "flujos de lodo". Una póliza de daños por "inundación" puede no cubrir avenidas torrenciales. Se recomienda revisar el texto completo de la póliza con el asegurador. BIC puede elaborar informes técnicos para procesos de reclamación ante aseguradoras que requieran conceptos de ingeniería sobre la naturaleza del evento.</p>

      <QuoteFormInline serviceId="hec-ras-2d" />
    </>,
  },

}

export default articlesF
