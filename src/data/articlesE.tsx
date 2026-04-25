// Category E: High-conversion keyword articles (8 articles: E-01 to E-08)
const articlesE: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'bocatoma-caudal-riego-colombia': {
    title: '¿Cuánto caudal necesita una bocatoma para riego en Colombia?',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Hidráulica',
    metaDesc: 'Cómo calcular el caudal de diseño para una bocatoma de riego en Colombia: método de áreas, demanda hídrica de cultivos, caudal ecológico y normas IDEAM. Ejemplos prácticos.',
    keywords: 'caudal bocatoma riego Colombia, diseño bocatoma riego Colombia, caudal concesión agua riego Colombia, bocatoma lateral riego eje cafetero',
    body: <>
      <p>Una de las preguntas más frecuentes cuando un propietario rural quiere diseñar un sistema de riego es: <strong>¿cuánto caudal necesito captar de la quebrada o el río?</strong> La respuesta depende de varios factores técnicos — el tipo de cultivo, el área a regar, la eficiencia del sistema de distribución y la disponibilidad real de agua en la fuente — y tiene implicaciones legales directas: en Colombia, toda captación de agua requiere una <strong>concesión de aguas</strong> otorgada por la Corporación Autónoma Regional (CAR) correspondiente, y el caudal concesionado debe basarse en un estudio técnico.</p>

      <h2>Paso 1: calcular la demanda hídrica del cultivo (módulo de riego)</h2>
      <p>El módulo de riego (MR) es el caudal de agua por unidad de área que requiere un cultivo para satisfacer su evapotranspiración en el período de máxima demanda. Se expresa en L/s/hectárea y depende del cultivo, el clima y la eficiencia del sistema de riego.</p>
      <p>Para Colombia, los valores de referencia del <strong>IDEAM</strong> y del <strong>INAT</strong> (hoy absorbido por el MADR) para los cultivos más comunes en clima medio andino (zonas cafeteras, 1.000–2.000 m.s.n.m.) son aproximadamente:</p>
      <ul>
        <li><strong>Café:</strong> 0,5–0,8 L/s/ha (zonas con déficit hídrico de 2–3 meses)</li>
        <li><strong>Caña panelera:</strong> 0,4–0,6 L/s/ha</li>
        <li><strong>Plátano y banano:</strong> 0,6–1,0 L/s/ha (mayor demanda en zonas cálidas)</li>
        <li><strong>Hortalizas bajo invernadero:</strong> 0,3–0,5 L/s/ha con goteo eficiente</li>
        <li><strong>Pastos para ganadería (aspersión):</strong> 0,8–1,2 L/s/ha</li>
        <li><strong>Frutales (aguacate, cítricos):</strong> 0,5–0,9 L/s/ha según el estadio del cultivo</li>
      </ul>
      <p>La fórmula básica para estimar el caudal de concesión es: <strong>Q = MR × Área (ha) / η</strong>, donde η es la eficiencia global del sistema de riego (0,60–0,75 para aspersión, 0,85–0,92 para goteo, 0,40–0,55 para riego por gravedad con surcos).</p>

      <h2>Ejemplo de cálculo práctico</h2>
      <p>Un propietario en Anserma (Caldas) quiere regar 8 hectáreas de café y plátano intercalado con un sistema de microaspersión. La eficiencia del sistema es 0,70 y el módulo de riego promedio para el mix de cultivos es 0,65 L/s/ha.</p>
      <p>Caudal requerido: Q = 0,65 × 8 / 0,70 = <strong>7,43 L/s ≈ 7,5 L/s</strong>. Este es el caudal que se debe solicitar en la concesión a CORPOCALDAS, pero solo si la quebrada lo tiene disponible sin afectar el caudal ecológico.</p>

      <h2>Paso 2: verificar disponibilidad en la fuente — caudal ecológico</h2>
      <p>En Colombia, toda concesión de agua para riego debe respetar el <strong>caudal ambiental o ecológico</strong>, que es el mínimo que debe permanecer en la fuente para sostener los ecosistemas acuáticos. La metodología del IDEAM establece que el caudal ambiental es el <strong>25% del caudal medio mensual mínimo</strong> en años secos (con probabilidad de excedencia del 75%).</p>
      <p>Para obtener este dato, es necesario un <strong>estudio hidrológico de la fuente</strong> que incluya: aforos de campo en época seca y lluviosa, análisis de registros históricos del IDEAM (estaciones pluviométricas cercanas) y cálculo de la curva de duración de caudales. La concesión solo puede aprobarse si el caudal solicitado más el caudal ecológico no supera el caudal mínimo de estiaje.</p>

      <h2>Paso 3: diseño hidráulico de la bocatoma lateral</h2>
      <p>La bocatoma lateral es el tipo de estructura de captación más común para riego en quebradas y ríos medianos en Colombia. Sus componentes principales son la presa de derivación (azud), el canal de captación con rejilla de fondo, la cámara de recolección y el canal de conducción hacia el sistema de riego.</p>
      <p>Los parámetros de diseño clave según el RAS 2000 y las guías del INAT son:</p>
      <ul>
        <li><strong>Caudal de diseño de la presa:</strong> Se usa el caudal de creciente con período de retorno de 25–50 años (Tr25 o Tr50) calculado mediante análisis de frecuencia de caudales máximos.</li>
        <li><strong>Longitud de la rejilla de captación:</strong> Calculada para captar el caudal de concesión con velocidades de entrada entre 0,10 y 0,15 m/s para evitar arrastre de sedimentos.</li>
        <li><strong>Cámara de recolección y canal de conducción:</strong> Diseñados para el caudal de concesión con velocidades de 0,6–1,5 m/s y tirante hidráulico que evite desbordamiento.</li>
      </ul>
      <p><strong>BIC diseña bocatomas de riego y tramita concesiones de agua ante CORPOCALDAS, CARDER, CRQ y otras CAR del país.</strong> Garantizamos el cumplimiento técnico y legal desde el estudio hasta la memoria de cálculo. <strong>WhatsApp +57 302 477 8910 | ingenieriabernal.co</strong></p>
    </>,
  },

  'estudio-hidrologico-decreto-1807': {
    title: '¿Qué entrega un estudio hidrológico para el Decreto 1807 en Colombia?',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Estudios Técnicos',
    metaDesc: 'Contenido mínimo del estudio hidrológico e hidráulico exigido por el Decreto 1807 de 2014 para licencias de construcción cerca de fuentes hídricas en Colombia. Qué entrega el ingeniero.',
    keywords: 'estudio hidrológico decreto 1807 Colombia, estudio hidráulico licencia construcción Colombia, decreto 1807 2014 Colombia riesgo hídrico, qué entrega estudio hidrológico decreto 1807',
    body: <>
      <p>Si su predio está cerca de una quebrada, río o cualquier fuente hídrica en Colombia, es probable que la curaduría urbana o la oficina de planeación municipal le haya pedido un <strong>"estudio de amenaza y riesgo por inundación conforme al Decreto 1807 de 2014"</strong> como requisito para tramitar la licencia de construcción. Muchos propietarios reciben este requisito sin saber exactamente qué contiene ese estudio, cuánto tiempo toma obtenerlo o cuánto cuesta. Este artículo lo explica en detalle.</p>

      <h2>¿Qué es el Decreto 1807 de 2014?</h2>
      <p>El Decreto 1807 de 2014 del Ministerio de Vivienda, Ciudad y Territorio (hoy compilado en el Decreto 1077 de 2015, artículos 2.2.2.1.3.1.3 y siguientes) establece las condiciones y escalas para la incorporación en los Planes de Ordenamiento Territorial (POT) de las amenazas por inundación, avenidas torrenciales y movimientos en masa. Para los predios en estas zonas, exige que las licencias de construcción se otorguen con base en estudios técnicos detallados de amenaza y riesgo.</p>
      <p>En términos prácticos: si su lote está en una zona donde el POT del municipio identifica amenaza <strong>media o alta</strong> por inundación o avenida torrencial, necesita un estudio técnico de detalle para demostrar que la construcción es viable y segura.</p>

      <h2>¿Qué debe contener el estudio según el Decreto 1807?</h2>
      <p>El Decreto 1807 (art. 6 y siguientes) exige que los estudios detallados de amenaza por inundación y avenidas torrenciales incluyan:</p>
      <ul>
        <li><strong>Caracterización de la cuenca hidrográfica:</strong> Área drenante, pendiente media, cobertura vegetal, forma de la cuenca (coeficiente de compacidad), tiempo de concentración. Se calcula con base en cartografía IGAC o topografía de detalle y el modelo digital de elevación.</li>
        <li><strong>Análisis hidrológico:</strong> Estimación de caudales máximos de diseño para períodos de retorno de 10, 25, 50 y 100 años, usando métodos estadísticos (Gumbel, Log-Pearson III) sobre registros de la estación hidrométrica más cercana del IDEAM, o métodos de lluvia-escorrentía (SCS-CN, racional modificado) cuando no hay datos de caudal disponibles.</li>
        <li><strong>Modelación hidráulica:</strong> Cálculo de los niveles de agua (láminas de inundación) y velocidades de flujo para cada período de retorno, usando modelos hidráulicos reconocidos (HEC-RAS 1D/2D, IBER, Mike FLOOD). Los resultados se presentan en mapas de inundación con curvas de nivel y delimitación de la zona inundable.</li>
        <li><strong>Definición de la zona de retiro o franja de protección:</strong> El estudio debe definir la distancia de retiro a la orilla que garantice que la construcción propuesta queda fuera de la lámina de inundación del período de retorno de 100 años (Tr100) con un borde libre mínimo de 0,5 m.</li>
        <li><strong>Evaluación de amenaza por avenida torrencial</strong> (si aplica): Para corrientes con alta pendiente (>3%) y cuencas con evidencia de arrastre de sedimentos, el decreto exige también modelar el comportamiento de las avenidas torrenciales con el modelo de flujo bimodal (agua + sedimentos).</li>
        <li><strong>Recomendaciones de mitigación:</strong> Si el predio presenta amenaza residual, el estudio debe proponer medidas de mitigación (muros de contención, jarillones, obras de canalización) y estimar su costo.</li>
      </ul>

      <h2>¿Qué documentos entrega el ingeniero al finalizar?</h2>
      <p>Un estudio hidrológico e hidráulico conforme al Decreto 1807 entrega típicamente:</p>
      <ul>
        <li>Informe técnico en PDF (30–80 páginas según complejidad) con toda la metodología, cálculos, resultados y recomendaciones.</li>
        <li>Memoria de cálculo hidrológico (hojas de cálculo o informe de resultados del modelo estadístico).</li>
        <li>Archivos del modelo hidráulico HEC-RAS o equivalente (.prj, .g01, .f01, etc.).</li>
        <li>Planos y mapas: plano de localización del predio, perfil longitudinal de la fuente, mapas de inundación (láminas de agua Tr25, Tr50, Tr100) en formato CAD o GIS exportable a PDF.</li>
        <li>Concepto técnico firmado por el ingeniero con su tarjeta profesional COPNIA, apto para ser presentado ante la curaduría.</li>
      </ul>

      <h2>Tiempos y costos en Colombia (2026)</h2>
      <p>El tiempo de elaboración de un estudio hidrológico Decreto 1807 varía entre <strong>2 y 6 semanas</strong> según la disponibilidad de información de la cuenca, la complejidad del tramo a modelar y la carga de trabajo del consultor. Los costos en el Eje Cafetero y el país oscilan entre $3.500.000 y $15.000.000 COP, dependiendo de si la fuente tiene registro histórico de caudales, la extensión del tramo a modelar y si se requiere levantamiento topográfico de la sección del cauce.</p>
      <p><strong>BIC elabora estudios hidrológicos e hidráulicos Decreto 1807 para todo Colombia, con modelos HEC-RAS 1D/2D y aprobación garantizada ante curadorías y planeación municipal.</strong> <strong>Contáctenos: ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

  'hec-ras-1d-vs-2d-colombia': {
    title: 'HEC-RAS 1D vs 2D en Colombia: ¿cuál necesita su estudio?',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Diferencias técnicas entre HEC-RAS 1D y HEC-RAS 2D para estudios de inundación en Colombia. Cuándo usar cada modelo según Decreto 1807, POMCA y FOPAE. Criterios de selección.',
    keywords: 'HEC-RAS 1D 2D Colombia diferencia, modelación hidráulica HEC-RAS Colombia, estudio inundación HEC-RAS 2D Colombia, HEC-RAS decreto 1807 Colombia',
    body: <>
      <p><strong>HEC-RAS</strong> (Hydrologic Engineering Center — River Analysis System) es el software de modelación hidráulica desarrollado por el Cuerpo de Ingenieros del Ejército de los EE.UU. y es el estándar de facto en Colombia para estudios de inundación exigidos por el Decreto 1807 de 2014, los POMCA y estudios de amenaza de las CAR. Existe en dos modalidades de simulación: <strong>1D (unidimensional)</strong> y <strong>2D (bidimensional)</strong>, y elegir la incorrecta puede significar que el estudio no sea aceptado o que subestime las zonas de inundación.</p>

      <h2>¿Qué modela HEC-RAS 1D?</h2>
      <p>En el modo 1D, HEC-RAS calcula el perfil de la superficie del agua a lo largo del eje del cauce, asumiendo que el flujo se mueve principalmente en una dirección (aguas abajo). El modelo se construye con <strong>secciones transversales</strong> del cauce levantadas a intervalos regulares (cada 50–200 m según la pendiente y variabilidad del cauce) y la geometría de la planicie de inundación a ambos lados.</p>
      <p>HEC-RAS 1D es apropiado cuando:</p>
      <ul>
        <li>El cauce es relativamente recto y la llanura de inundación es estrecha y uniforme.</li>
        <li>El flujo en la planicie de inundación sigue predominantemente la dirección del cauce.</li>
        <li>El estudio requiere un tramo largo de río (>5 km) con muchas secciones transversales.</li>
        <li>Se busca un modelo rápido y computacionalmente ligero para análisis de escenarios múltiples.</li>
        <li>Los datos disponibles son secciones transversales levantadas en campo (sin DTM de alta resolución).</li>
      </ul>

      <h2>¿Qué agrega HEC-RAS 2D?</h2>
      <p>El módulo 2D de HEC-RAS (disponible desde la versión 5.0) resuelve las ecuaciones de Saint-Venant en dos dimensiones sobre una malla de celdas que representa la topografía de la llanura de inundación. Esto permite modelar flujos que se propagan en todas las direcciones sobre la planicie, incluyendo flujos que bordean obstáculos, entran por quebradas tributarias o inundan zonas urbanas con calles como canales.</p>
      <p>HEC-RAS 2D es necesario cuando:</p>
      <ul>
        <li>La llanura de inundación es amplia y el flujo no sigue claramente la dirección del cauce (por ejemplo, en valles aluviales planos o en confluencias de ríos).</li>
        <li>El área de estudio incluye zonas urbanas donde las calles funcionan como canales durante eventos de inundación.</li>
        <li>Se requiere calcular velocidades y direcciones del flujo en la planicie (exigido para estudios de amenaza alta con cálculo de fuerza hidrodinámica sobre estructuras).</li>
        <li>Se dispone de un Modelo Digital de Terreno (MDT/DTM) de alta resolución: LiDAR (≤1 m de resolución) o fotogrametría con drone (≤0,3 m).</li>
        <li>El Decreto 1807, la CAR o la entidad contratante exigen explícitamente modelación 2D.</li>
      </ul>

      <h2>Diferencias técnicas clave</h2>
      <ul>
        <li><strong>Datos de entrada:</strong> 1D requiere secciones transversales y coeficientes de Manning para cauce y planicie. 2D requiere un MDT de alta resolución, polígono de malla y condiciones de contorno.</li>
        <li><strong>Tiempo de cómputo:</strong> 1D: segundos a minutos. 2D: minutos a horas según el tamaño de la malla y el intervalo de tiempo.</li>
        <li><strong>Resultados:</strong> 1D produce perfiles de agua longitudinales y láminas de inundación extruidas desde las secciones. 2D produce mapas de profundidad y velocidad en toda la planicie con resolución de la malla.</li>
        <li><strong>Costo del estudio:</strong> Los estudios 2D son un 30–60% más costosos debido al mayor requerimiento de datos topográficos y tiempo de modelación.</li>
      </ul>

      <h2>¿Qué exige Colombia según el tipo de estudio?</h2>
      <p>En la práctica colombiana, las entidades aceptan ambas modalidades siempre que se justifique la elección. Sin embargo:</p>
      <ul>
        <li><strong>Decreto 1807 — amenaza media:</strong> Generalmente se acepta HEC-RAS 1D con buenas secciones transversales y justificación de la unidimensionalidad del flujo.</li>
        <li><strong>Decreto 1807 — amenaza alta o zonas urbanas:</strong> La mayoría de curadorías y planeación municipal en ciudades como Manizales, Pereira y Armenia están exigiendo HEC-RAS 2D con MDT LiDAR o fotogramétrico.</li>
        <li><strong>POMCA (Planes de Ordenación y Manejo de Cuencas):</strong> Las CAR especifican en los términos de referencia si aceptan 1D o exigen 2D. En los POMCA de segunda generación (post 2018) se está estandarizando 2D.</li>
        <li><strong>Estudios FOPAE / IDIGER (Bogotá):</strong> Exigen HEC-RAS 2D con malla de alta resolución y validación con eventos históricos.</li>
      </ul>
      <p><strong>BIC tiene experiencia en modelación HEC-RAS 1D y 2D para estudios Decreto 1807, POMCA y diseño de obras de protección contra inundaciones en el Eje Cafetero y toda Colombia.</strong> <strong>ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

  'ptar-industrial-colombia': {
    title: 'PTAR industrial en Colombia: diseño, costos y permisos en 2026',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía completa sobre Plantas de Tratamiento de Aguas Residuales (PTAR) industriales en Colombia: tecnologías, costos de construcción, normativa Decreto 3930 y permiso de vertimientos.',
    keywords: 'PTAR industrial Colombia diseño costo, planta tratamiento aguas residuales industrial Colombia, diseño PTAR Colombia normativa, permiso vertimientos PTAR Colombia',
    body: <>
      <p>Cualquier empresa en Colombia que vierta sus aguas residuales industriales a un cuerpo de agua o al alcantarillado está obligada a tratarlas previamente hasta cumplir los estándares establecidos en el <strong>Decreto 3930 de 2010</strong> y la <strong>Resolución 0631 de 2015</strong> del Ministerio de Ambiente (hoy MADS). El incumplimiento no solo genera multas de hasta 5.000 SMLMV por parte de la CAR, sino que puede derivar en suspensión de actividades. Este artículo explica cómo diseñar una PTAR industrial en Colombia, qué tecnologías existen y cuánto cuesta.</p>

      <h2>Normativa aplicable: Decreto 3930/2010 y Resolución 0631/2015</h2>
      <p>La <strong>Resolución 0631 de 2015</strong> estableció los límites máximos permisibles de contaminantes en los vertimientos industriales a cuerpos de agua superficiales y alcantarillados municipales, reemplazando el anterior Decreto 1594 de 1984. Para cada sector industrial (agroindustria, manufactura, minería, alimentos, textiles, etc.) define parámetros específicos: DBO5, DQO, SST, grasas y aceites, metales pesados, pH, temperatura y otros.</p>
      <p>Antes de diseñar la PTAR, es indispensable caracterizar el agua residual industrial mediante muestreos compuestos y analítica de laboratorio certificado (IDEAM), comparar los resultados con la Resolución 0631 para identificar los parámetros que requieren tratamiento, y dimensionar el sistema para lograr las eficiencias de remoción necesarias.</p>

      <h2>Tecnologías de tratamiento según tipo de industria</h2>
      <ul>
        <li><strong>Trampa de grasas + sedimentador + filtro biológico:</strong> Para industrias de alimentos (restaurantes industriales, lácteos pequeños, carnicerías). Bajo costo, operación simple. Eficiencia en DBO5: 60–75%.</li>
        <li><strong>Sistema de lodos activados (convencional o SBR):</strong> Para industrias con alta carga orgánica biodegradable (agroindustria, alimentos, bebidas, textiles). Eficiencia en DBO5: 85–95%. Requiere operadores técnicos capacitados y laboratorio de control de proceso.</li>
        <li><strong>Reactor anaerobio UASB + post-tratamiento aerobio:</strong> Para industrias con alta concentración de materia orgánica y baja relación DBO/DQO (aguas de lavado de café, vinazas de caña, efluentes de curtiembres). Ventaja: genera biogás aprovechable como energía. Eficiencia en DQO: 75–90% en la etapa anaerobia.</li>
        <li><strong>Coagulación-floculación + sedimentación:</strong> Para industrias con alta turbidez o sólidos en suspensión (lavado de vehículos, industria cerámica, minería). Complementa otros procesos biológicos para alcanzar los límites de SST.</li>
        <li><strong>Tratamiento fisicoquímico + precipitación química:</strong> Para efluentes con metales pesados (galvanoplastia, minería metálica, pinturas). Precipita los metales como hidróxidos mediante ajuste de pH.</li>
        <li><strong>Membranas (MBR — Membrane Bioreactor):</strong> Para industrias que requieren reutilizar el agua tratada. Combina reactor biológico de lodos activados con membrana de ultrafiltración. Alta calidad del efluente, huella pequeña, alto costo de mantenimiento.</li>
      </ul>

      <h2>Costos de construcción de PTAR industrial en Colombia (2026)</h2>
      <p>Los costos varían ampliamente según el caudal a tratar, el tipo de agua residual y la tecnología seleccionada. A modo de referencia para el Eje Cafetero:</p>
      <ul>
        <li><strong>PTAR pequeña (1–5 m³/día, restaurante o pequeña empresa):</strong> $15.000.000–$50.000.000 COP incluido diseño y construcción.</li>
        <li><strong>PTAR mediana (10–50 m³/día, agroindustria o finca cafetera):</strong> $80.000.000–$300.000.000 COP según tecnología.</li>
        <li><strong>PTAR industrial media (50–500 m³/día):</strong> $300.000.000–$2.000.000.000 COP dependiendo de la complejidad del tratamiento.</li>
        <li><strong>PTAR grande (>500 m³/día):</strong> >$2.000.000.000 COP, requiere estudio de factibilidad específico.</li>
      </ul>

      <h2>Permiso de vertimientos: tramitación ante la CAR</h2>
      <p>El <strong>permiso de vertimientos</strong> se tramita ante la CAR del departamento (CORPOCALDAS en Caldas, CARDER en Risaralda, CRQ en Quindío, etc.) según el Decreto 3930 de 2010. Requiere: caracterización del vertimiento actual, diseño de la PTAR con memoria de cálculo, plan de monitoreo y cumplimiento, y pago de tasas retributivas. El tiempo de trámite es de 3–6 meses si la documentación está completa.</p>
      <p><strong>BIC diseña PTAR industriales para agroindustria, fincas cafeteras, lavaderos y empresas en toda Colombia, tramita el permiso de vertimientos ante la CAR e incluye acompañamiento durante el período de arranque del sistema.</strong> <strong>ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

  'ingeniero-hidraulico-para-mi-proyecto': {
    title: 'Cómo contratar un ingeniero hidráulico para su proyecto en Colombia',
    date: 'Abril 2026',
    readTime: '9 min',
    category: 'Consultoría',
    metaDesc: 'Guía práctica para contratar un ingeniero hidráulico en Colombia: qué servicios ofrece, cómo verificar su idoneidad (COPNIA), qué preguntar antes de contratar y qué debe incluir el contrato.',
    keywords: 'contratar ingeniero hidráulico Colombia, ingeniero hidráulico proyecto Colombia, consultor hidráulico Colombia precio, cómo contratar ingeniero para estudio hidrológico Colombia',
    body: <>
      <p>Si necesita un estudio hidrológico, el diseño de un sistema de acueducto, una PTAR o un análisis de riesgo por inundación, necesita contratar un <strong>ingeniero civil especializado en hidráulica e hidrología</strong>. En Colombia, cualquier persona puede llamarse "consultor técnico", pero solo los ingenieros civiles con matrícula profesional vigente en el COPNIA están habilitados por ley para firmar estudios técnicos con validez ante entidades como las CAR, curadorías o planeación municipal. Este artículo le explica cómo encontrar al profesional correcto y qué preguntar antes de firmar el contrato.</p>

      <h2>¿Qué hace un ingeniero hidráulico en Colombia?</h2>
      <p>Un ingeniero hidráulico o hidrológico en Colombia diseña y analiza sistemas que involucran el agua: acueductos, alcantarillados, PTAR, bocatomas, canales de riego, obras de protección contra inundaciones y estudios para el Decreto 1807. Específicamente, sus servicios incluyen:</p>
      <ul>
        <li>Estudios hidrológicos (análisis de caudales, curvas IDF, caudales máximos)</li>
        <li>Modelación hidráulica (HEC-RAS, EPANET, SWMM) para estudios de inundación o diseño de redes</li>
        <li>Diseño de acueductos y alcantarillados según el RAS 2000</li>
        <li>Diseño de bocatomas, canales y obras hidráulicas menores</li>
        <li>PTAR y sistemas de tratamiento de aguas residuales</li>
        <li>Gestión de trámites ante CAR (concesiones de agua, permisos de vertimientos, licencias ambientales)</li>
        <li>Memorias hidrosanitarias para urbanizaciones y edificaciones</li>
      </ul>

      <h2>Cómo verificar la idoneidad: COPNIA y registro profesional</h2>
      <p>Antes de contratar a cualquier ingeniero, verifique que tiene matrícula profesional vigente en el <strong>COPNIA</strong> (Consejo Profesional de Ingeniería, de sus Profesiones Afines y de sus Ocupaciones Complementarias). Puede hacerlo gratis en <em>copnia.gov.co → Consulta de matrícula</em> ingresando el número de cédula del profesional. Un estudio firmado por alguien sin matrícula vigente no tiene validez legal y puede generar nulidades en sus trámites.</p>
      <p>Además de la matrícula, verifique que el profesional tenga experiencia específica en el tipo de proyecto que necesita. No es lo mismo un ingeniero especialista en acueductos urbanos que uno con experiencia en estudios Decreto 1807 o en modelación de avenidas torrenciales. Pida una hoja de vida con proyectos similares anteriores.</p>

      <h2>Preguntas clave antes de contratar</h2>
      <ul>
        <li><strong>¿Tiene experiencia en proyectos similares en la región?</strong> El conocimiento local (fuentes de datos IDEAM disponibles, criterios de las CAR del departamento, usos del suelo) marca una diferencia real en la calidad del estudio.</li>
        <li><strong>¿El estudio incluye visita de campo?</strong> Un estudio hidrológico serio requiere al menos una visita al predio para reconocer la fuente, tomar fotografías y confirmar que la información cartográfica corresponde a la realidad.</li>
        <li><strong>¿Qué entregables incluye y en qué formato?</strong> Exija informe técnico en PDF, archivos del modelo hidráulico, planos en DWG y concepto técnico firmado.</li>
        <li><strong>¿Qué pasa si la CAR o la curaduría pide ajustes?</strong> Defina en el contrato si las observaciones de las entidades están incluidas en el precio o tienen costo adicional.</li>
        <li><strong>¿Cuál es el tiempo de entrega?</strong> Desconfíe de tiempos irrealmente cortos (menos de 2 semanas para estudios complejos) o de promesas sin soporte técnico claro.</li>
      </ul>

      <h2>Qué debe incluir el contrato de consultoría</h2>
      <p>Un buen contrato de consultoría debe especificar: el alcance detallado del servicio, los entregables exactos con sus formatos, el plazo de entrega con hitos parciales, el precio y la forma de pago (típicamente 50% anticipo + 50% a entrega), las condiciones de revisión y el manejo de observaciones de entidades.</p>
      <p><strong>BIC — Ingeniería Bernal Ingenieros Consultores</strong> es una firma con matrícula COPNIA activa (#17202-313228), con más de 10 años de experiencia en proyectos hidráulicos en el Eje Cafetero y todo Colombia. <strong>Contáctenos hoy: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'retiro-quebrada-construccion-colombia': {
    title: '¿Cuántos metros de retiro de quebrada exige la ley en Colombia?',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Normativa',
    metaDesc: 'Distancias de retiro de quebradas, ríos y fuentes hídricas para construcción en Colombia: normas nacionales (Ley 1450, Decreto 2372) y POT municipal. Cómo medirlo y qué hacer si su predio está en retiro.',
    keywords: 'retiro quebrada construcción Colombia, metros retiro río Colombia norma, franja protección fuente hídrica Colombia ley, distancia mínima quebrada predio Colombia',
    body: <>
      <p>Una de las preguntas más frecuentes de propietarios de predios en zonas rurales y periurbanas es: <strong>¿a cuántos metros de la quebrada puedo construir legalmente?</strong> La respuesta no es única: en Colombia existen varias normas —nacionales y locales— que definen las distancias de retiro o franja de protección de fuentes hídricas, y en algunos casos se superponen. Conocerlas puede ahorrarle una multa o la demolición de una construcción.</p>

      <h2>Norma nacional: Código de Recursos Naturales (Decreto 2811 de 1974)</h2>
      <p>El <strong>Decreto 2811 de 1974</strong> (Código Nacional de Recursos Naturales Renovables), en su artículo 83, establece que son bienes inalienables e imprescriptibles del Estado y no pueden ser objeto de construcción las <strong>fajas paralelas a las líneas de mareas máximas y a ambos lados de los cauces permanentes</strong>. El artículo 83 literal d) fija un retiro mínimo de <strong>30 metros a cada lado del cauce</strong> de los ríos y quebradas, medidos horizontalmente desde la orilla del cauce en condición de aguas medias.</p>
      <p>Este retiro de 30 metros es la referencia histórica que aún usan muchas entidades, aunque normas posteriores lo han complementado.</p>

      <h2>Plan de Ordenamiento Territorial (POT): la norma que aplica en su municipio</h2>
      <p>En la práctica, el retiro que le exige la curaduría al tramitar su licencia es el que define el <strong>POT o PBOT del municipio</strong>. Los municipios tienen autonomía para establecer retiros mayores al mínimo nacional según las condiciones locales de riesgo. Por ejemplo:</p>
      <ul>
        <li>Manizales (Caldas): el POT establece retiros que varían entre 30 y 50 metros según la clasificación de la corriente.</li>
        <li>Pereira (Risaralda): el Plan de Ordenamiento define franjas de protección de 30 metros para quebradas y hasta 100 metros para el río Otún.</li>
        <li>Municipios cafeteros pequeños: muchos tienen retiros de 15–30 metros para quebradas secundarias.</li>
      </ul>
      <p>Consulte el POT de su municipio en la página de planeación o solicite en la secretaría de planeación el mapa de franjas de protección hídrica del predio de su interés.</p>

      <h2>Ley 1450 de 2011 y Decreto 2372 de 2010: Rondas Hídricas</h2>
      <p>La <strong>Ley 1450 de 2011</strong> (Plan Nacional de Desarrollo) y el <strong>Decreto 2372 de 2010</strong> introdujeron el concepto de <strong>ronda hídrica</strong>, que las CAR deben delimitar técnicamente para cada fuente hídrica. La ronda hídrica incluye la zona de protección hídrica propiamente dicha (cauce y orillas) más la zona de manejo y preservación ambiental (franja de vegetación y amortiguamiento).</p>
      <p>Una vez que la CAR delimita la ronda hídrica de un cauce, esa delimitación técnica (que puede superar los 30 metros del Código de Recursos Naturales) se convierte en la referencia legal. CORPOCALDAS, CARDER y otras CAR han avanzado en la delimitación de rondas en los principales ríos y quebradas de sus jurisdicciones.</p>

      <h2>¿Qué pasa si mi predio está dentro del retiro?</h2>
      <p>Si el predio o la construcción que quiere hacer se ubica dentro de la franja de retiro, existen varias opciones:</p>
      <ul>
        <li><strong>Estudio técnico de riesgo (Decreto 1807):</strong> Si el POT del municipio permite tramitar la licencia con un estudio técnico que demuestre que el predio no está en zona de amenaza alta, un estudio hidrológico e hidráulico puede respaldar la viabilidad de la construcción fuera de la lámina de inundación Tr100.</li>
        <li><strong>Obras de mitigación:</strong> En algunos casos, la entidad puede aceptar que la construcción se realice si se incorporan obras de protección (muros de encauzamiento, gaviones) que reducen la amenaza sobre el predio.</li>
        <li><strong>Restricción absoluta:</strong> Si el predio está en zona de amenaza alta no mitigable según el Decreto 1807, no se otorgará licencia de construcción. En ese caso, el único camino es la reubicación.</li>
      </ul>
      <p><strong>BIC elabora estudios técnicos Decreto 1807 que permiten tramitar licencias en predios cercanos a fuentes hídricas en Colombia, con modelos hidráulicos HEC-RAS reconocidos por curadorías y planeación municipal.</strong> <strong>ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

  'que-necesito-para-urbanizar-un-lote-colombia': {
    title: '¿Qué necesito para urbanizar un lote en Colombia en 2026?',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Urbanismo',
    metaDesc: 'Requisitos para urbanizar un lote en Colombia: licencia de urbanización, estudios técnicos (memoria hidrosanitaria, estudio de suelos, hidrología), trámites ante CAR y municipio. Guía 2026.',
    keywords: 'urbanizar lote Colombia requisitos 2026, licencia urbanización Colombia trámites, qué estudios necesito para urbanizar Colombia, memoria hidrosanitaria urbanización Colombia',
    body: <>
      <p>Urbanizar un lote en Colombia — es decir, convertir un terreno bruto en un proyecto con vías, redes de servicios públicos, parques y lotes listos para construcción — es un proceso que involucra trámites ante el municipio, la CAR y varias entidades de servicios públicos. Sin conocer la ruta completa, los propietarios suelen perder meses (y dinero) yendo de entidad en entidad. Esta guía consolida los requisitos más comunes para 2026.</p>

      <h2>1. Verificar la clasificación del suelo en el POT</h2>
      <p>El primer paso, antes de cualquier trámite, es verificar que el lote está clasificado como <strong>suelo urbano o de expansión urbana</strong> en el Plan de Ordenamiento Territorial (POT) del municipio. Si el lote está en suelo rural no suburbano, la urbanización no es posible sin un proceso previo de revisión del POT (que tarda años). En la secretaría de planeación o en el visor urbano del municipio puede consultar:</p>
      <ul>
        <li>Clasificación del suelo (urbano, de expansión, rural)</li>
        <li>Tratamiento urbanístico (desarrollo, consolidación, renovación)</li>
        <li>Norma de usos del suelo (residencial, comercial, mixto) y edificabilidad (índices de construcción, alturas máximas)</li>
        <li>Afectaciones por vías, retiros de quebradas, zonas de riesgo o bienes de interés cultural</li>
      </ul>

      <h2>2. Estudios técnicos necesarios</h2>
      <p>Para tramitar la <strong>licencia de urbanización</strong> ante la curaduría urbana, se requieren varios estudios técnicos:</p>
      <ul>
        <li><strong>Levantamiento topográfico:</strong> Plano topográfico del lote con curvas de nivel cada 1 m, linderos y construcciones existentes. Es la base de todos los demás estudios.</li>
        <li><strong>Estudio de suelos y geotécnico:</strong> Sondeos de suelo, clasificación geotécnica y capacidad portante para el diseño de cimentaciones. Requerido por el Reglamento NSR-10 para proyectos de vivienda.</li>
        <li><strong>Memoria de diseño urbanístico:</strong> Plano del proyecto de urbanización con distribución de lotes, vías, zonas verdes, cesiones (al municipio) y cuadro de áreas. Debe cumplir los porcentajes de cesión establecidos en el POT (típicamente 17–25% del área neta para zonas verdes y equipamientos).</li>
        <li><strong>Memoria hidrosanitaria:</strong> Diseño de las redes de acueducto y alcantarillado del proyecto: dimensionamiento de tuberías, velocidades, presiones y conexión a las redes existentes de la empresa de servicios públicos. Es uno de los estudios más importantes y el que con más frecuencia es devuelto por errores técnicos.</li>
        <li><strong>Diseño de aguas lluvias:</strong> Diseño del sistema de drenaje pluvial de las vías, incluida la cuneta, los sumideros y la conexión al sistema de alcantarillado pluvial municipal o la descarga a una fuente hídrica (con permiso de vertimientos de la CAR).</li>
        <li><strong>Estudio hidrológico (si hay fuente hídrica):</strong> Si el lote colinda con o está cerca de una quebrada o río, se requiere el estudio Decreto 1807 para demostrar que las zonas construibles no están en amenaza por inundación.</li>
        <li><strong>Plan de manejo de residuos sólidos durante construcción:</strong> Cada vez más solicitado por las alcaldías.</li>
      </ul>

      <h2>3. Trámites ante la empresa de servicios públicos</h2>
      <p>Antes de que la curaduría radique la licencia, la empresa de acueducto y alcantarillado del municipio (o la EAAB en Bogotá) debe emitir una <strong>viabilidad de servicios</strong> que confirme que la capacidad de las redes existentes es suficiente para abastecer el proyecto. En algunos municipios pequeños con redes sin capacidad, esto puede ser un cuello de botella que retrase meses el proyecto.</p>

      <h2>4. Trámites ante la CAR (si aplica)</h2>
      <p>Si el proyecto implica descarga de aguas lluvias o residuales a una fuente hídrica, o si el lote está dentro de zonas de influencia de la CAR (cerca de humedales, fuentes o áreas protegidas), se requiere trámite ante la Corporación Autónoma Regional correspondiente para obtener el permiso de vertimientos o la certificación de no afectación a ecosistemas estratégicos.</p>

      <h2>5. Radicación y tiempos de la licencia de urbanización</h2>
      <p>Con todos los documentos listos, se radica la solicitud ante la curaduría urbana. Por ley (Decreto 1469 de 2010), la curaduría tiene <strong>45 días hábiles</strong> para emitir la licencia de urbanización en municipios hasta 100.000 habitantes, y 60 días hábiles en municipios más grandes. En la práctica, si la documentación tiene errores o falta información, la curaduría emite requerimientos que reinician el plazo.</p>
      <p><strong>BIC elabora todos los estudios técnicos para licencias de urbanización: memoria hidrosanitaria, diseño de aguas lluvias, estudio hidrológico Decreto 1807 y acompañamiento en los trámites ante curaduría y CAR en todo Colombia.</strong> <strong>ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

  'estudios-car-corpocaldas-colombia': {
    title: '¿Qué estudios exige CORPOCALDAS para construir cerca de una fuente hídrica?',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Normativa',
    metaDesc: 'Estudios técnicos que exige CORPOCALDAS para tramitar concesiones de agua, permisos de vertimientos y construcción en rondas hídricas en Caldas. Requisitos 2026 actualizados.',
    keywords: 'CORPOCALDAS estudios requisitos construcción, CORPOCALDAS concesión agua Caldas requisitos, permiso vertimientos CORPOCALDAS Caldas, estudios hidrológicos CORPOCALDAS Colombia',
    body: <>
      <p><strong>CORPOCALDAS</strong> (Corporación Autónoma Regional de Caldas) es la autoridad ambiental que regula el uso del agua, la construcción cerca de fuentes hídricas, las concesiones de agua y los permisos de vertimiento en todo el departamento de Caldas. Si su proyecto —vivienda, finca, agroindustria, urbanización o infraestructura— requiere intervenir, construir cerca o usar una fuente hídrica en Caldas, es muy probable que necesite uno o varios trámites ante CORPOCALDAS. Esta guía describe los estudios más exigidos.</p>

      <h2>Concesión de aguas superficiales o subterráneas</h2>
      <p>Si necesita captar agua de una quebrada, río, nacimiento o pozo en Caldas para uso doméstico, agrícola, pecuario o industrial, debe tramitar una <strong>concesión de aguas</strong> ante CORPOCALDAS. Los documentos técnicos requeridos son:</p>
      <ul>
        <li><strong>Estudio hidrológico de la fuente:</strong> Aforo del caudal en época seca y época lluviosa, análisis histórico de caudales (usando datos IDEAM), estimación del caudal mínimo de estiaje y verificación del caudal ecológico disponible para concesionar.</li>
        <li><strong>Justificación de la demanda hídrica:</strong> Cálculo del caudal requerido según el uso (litros/habitante/día para uso doméstico, módulo de riego en L/s/ha para uso agrícola, consumo del proceso industrial).</li>
        <li><strong>Descripción de la obra de captación:</strong> Planos y memoria de la bocatoma o sistema de captación que se instalará, con especificaciones técnicas.</li>
        <li><strong>Análisis de calidad del agua:</strong> Para uso doméstico, resultados de análisis fisicoquímico y bacteriológico de la fuente por laboratorio acreditado.</li>
      </ul>
      <p>El tiempo de trámite ante CORPOCALDAS para una concesión de aguas es de <strong>2 a 6 meses</strong> según la complejidad y la carga de la entidad.</p>

      <h2>Permiso de vertimientos</h2>
      <p>Si su proyecto genera aguas residuales que serán descargadas a una fuente hídrica o al suelo (no al alcantarillado municipal), debe tramitar un <strong>permiso de vertimientos</strong> ante CORPOCALDAS. Los estudios requeridos incluyen:</p>
      <ul>
        <li><strong>Caracterización del vertimiento:</strong> Análisis de laboratorio del agua residual que se va a verter, comparado con los límites de la Resolución 0631 de 2015.</li>
        <li><strong>Diseño de la PTAR:</strong> Memoria de cálculo del sistema de tratamiento que garantice que el efluente cumple la Resolución 0631 antes de ser vertido.</li>
        <li><strong>Estudio de dilución en la fuente receptora:</strong> CORPOCALDAS exige verificar que la fuente receptora tiene capacidad de asimilar la carga del vertimiento sin superar los objetivos de calidad del POMCA.</li>
        <li><strong>Plan de contingencia:</strong> Protocolo de acción ante fallas del sistema de tratamiento.</li>
      </ul>

      <h2>Construcción en ronda hídrica o zona de influencia</h2>
      <p>Si el proyecto está ubicado en la ronda hídrica de una fuente (dentro de los 30–100 metros según la corriente) o en zonas identificadas en los POMCA como de alta amenaza, CORPOCALDAS puede exigir:</p>
      <ul>
        <li><strong>Estudio hidrológico e hidráulico Decreto 1807:</strong> Con modelación HEC-RAS para definir la lámina de inundación Tr100 y verificar que la construcción queda fuera de la zona inundable.</li>
        <li><strong>Evaluación de impacto sobre el ecosistema acuático:</strong> Descripción del estado actual de la corriente, fauna íctiaca presente y evaluación de si la intervención afecta el caudal ecológico.</li>
        <li><strong>Plan de revegetalización de la ronda:</strong> Si el proyecto requiere intervenir la vegetación riparia existente, CORPOCALDAS exige un plan de restauración ecológica.</li>
      </ul>

      <h2>Aprovechamiento de materiales de arrastre (gravas y arenas de río)</h2>
      <p>La extracción de materiales de arrastre de los cauces (gravas, arenas, gravillas) requiere autorización especial de CORPOCALDAS, que incluye un estudio geomorfológico del cauce para determinar el volumen de material aprovechable sin afectar la dinámica fluvial.</p>

      <h2>Consejos para agilizar los trámites ante CORPOCALDAS</h2>
      <ul>
        <li>Radicación completa desde el inicio: CORPOCALDAS devuelve los expedientes incompletos, reiniciando los plazos. Verifique la lista de requisitos en su portal web antes de radicar.</li>
        <li>Use profesionales con experiencia en trámites ante CORPOCALDAS: los criterios técnicos de cada CAR tienen particularidades propias que solo conocen quienes han tramitado permisos similares.</li>
        <li>Agenda citas de asesoría técnica previa: CORPOCALDAS ofrece reuniones de orientación previas a la radicación para grandes proyectos.</li>
      </ul>
      <p><strong>BIC tiene amplia experiencia tramitando concesiones de agua, permisos de vertimientos y estudios técnicos Decreto 1807 ante CORPOCALDAS, CARDER, CRQ y otras CAR en Colombia.</strong> Elaboramos los estudios con los criterios específicos de cada entidad para minimizar observaciones. <strong>ingenieriabernal.co | +57 302 477 8910</strong></p>
    </>,
  },

}

export default articlesE
