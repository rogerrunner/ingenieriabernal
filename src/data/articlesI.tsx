import QuoteFormInline from '../components/QuoteFormInline'

// Category I articles — Mayo 2026 (PTAP/PTAR, inundabilidad, CI NSR-10, POMCA, interventoría)
const articlesI: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'diferencia-ptap-ptar-colombia': {
    title: '¿Cuál es la diferencia entre PTAP y PTAR en Colombia?',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Aprende la diferencia entre planta de tratamiento de agua potable (PTAP) y planta de tratamiento de aguas residuales (PTAR) según el RAS 2017. Guía técnica colombiana.',
    keywords: 'diferencia PTAP PTAR Colombia, planta tratamiento agua potable Colombia, planta tratamiento aguas residuales Colombia, RAS 2017 PTAP PTAR, diseño PTAP Colombia',
    body: <>
      <p>Una de las preguntas más frecuentes que reciben los ingenieros hidráulicos en Colombia —especialmente de parte de alcaldías, promotores de vivienda y funcionarios de planeación— es: <em>¿cuál es la diferencia entre una PTAP y una PTAR, y cuándo necesito cada una?</em> Aunque ambas tienen que ver con el agua, su propósito, su ubicación en el ciclo hídrico y la normativa que las regula son completamente distintos. Esta guía lo explica con claridad, sin jerga innecesaria.</p>

      <h2>¿Qué es una PTAP y para qué sirve?</h2>
      <p>La <strong>Planta de Tratamiento de Agua Potable (PTAP)</strong> es la instalación que convierte el agua cruda —captada de un río, lago, embalse o acuífero— en agua apta para el consumo humano. Su objetivo es eliminar o reducir a niveles seguros los contaminantes físicos (turbiedad, color, sólidos en suspensión), químicos (metales pesados, pesticidas) y microbiológicos (bacterias, virus, parásitos) presentes en la fuente natural.</p>
      <p>Una PTAP típica en Colombia incluye los siguientes procesos en serie: captación del agua cruda desde la fuente, pretratamiento (rejillas y desarenador), coagulación y floculación con sulfato de aluminio u otro coagulante, sedimentación para separar los flóculos formados, filtración en lecho granular de arena y antracita, y desinfección con cloro, ozono o luz ultravioleta. En plantas grandes puede haber también ablandamiento, remoción de hierro y manganeso, o tratamiento avanzado con carbón activado.</p>
      <p>En Colombia, el diseño de PTAP está regulado por el <strong>RAS 2017 — Título C (Sistemas de Potabilización)</strong>, adoptado mediante la Resolución 0330 de 2017 del Ministerio de Vivienda, Ciudad y Territorio. Los parámetros de calidad del agua tratada están definidos en el <strong>Decreto 1575 de 2007</strong> y la <strong>Resolución 2115 de 2007</strong> del Ministerio de Salud, que establecen los valores máximos admisibles (VMA) para los indicadores físicos, químicos y microbiológicos. El indicador de calidad más usado en Colombia es el <strong>IRCA (Índice de Riesgo de la Calidad del Agua para Consumo Humano)</strong>: un municipio con IRCA alto tiene agua que no cumple las normas y necesita mejorar su PTAP.</p>

      <h2>¿Qué es una PTAR y para qué sirve?</h2>
      <p>La <strong>Planta de Tratamiento de Aguas Residuales (PTAR)</strong> recibe el agua ya usada —aguas domésticas e industriales que salen por los desagües— y la trata antes de devolverla a un cuerpo receptor (río, quebrada, embalse o suelo). Su propósito es remover la carga contaminante del agua residual para proteger los ecosistemas acuáticos y cumplir con los límites de vertimiento establecidos por la autoridad ambiental.</p>
      <p>Una PTAR convencional de tratamiento de aguas residuales domésticas incluye: tratamiento preliminar (rejillas gruesas y finas, desarenador), tratamiento primario (sedimentador primario para remover sólidos sedimentables), tratamiento secundario (proceso biológico —reactor de lodos activados, filtro percolador, laguna de estabilización o reactor UASB— para degradar la materia orgánica disuelta) y tratamiento terciario opcional (desinfección, remoción de nutrientes como nitrógeno y fósforo, cuando hay restricciones estrictas de vertimiento).</p>
      <p>En Colombia, el diseño de PTAR está regulado por el <strong>RAS 2017 — Título E (Tratamiento de Aguas Residuales)</strong>. Los límites de vertimiento al cuerpo receptor están definidos en la <strong>Resolución 0631 de 2015</strong> del Ministerio de Ambiente, que fija parámetros máximos para DBO₅, DQO, SST, pH, temperatura y otros según el tipo de industria y el cuerpo receptor. La PTAR debe contar además con el <strong>permiso de vertimientos</strong> otorgado por la Corporación Autónoma Regional (CAR) correspondiente, según el Decreto 1076 de 2015.</p>

      <h2>Diferencias clave entre PTAP y PTAR</h2>
      <p>La diferencia más importante está en <strong>la posición en el ciclo del agua</strong>: la PTAP trabaja al inicio, convirtiendo agua cruda en potable; la PTAR trabaja al final, tratando el agua ya utilizada antes de devolverla a la naturaleza. Esto determina todo lo demás:</p>
      <ul>
        <li><strong>Fuente de agua:</strong> PTAP recibe agua cruda de ríos, lagos o acuíferos; PTAR recibe aguas residuales domésticas o industriales.</li>
        <li><strong>Producto final:</strong> PTAP produce agua potable para distribución; PTAR produce efluente tratado que cumple normas de vertimiento y lodos para disposición final.</li>
        <li><strong>Norma de diseño:</strong> PTAP → RAS Título C + Decreto 1575/2007; PTAR → RAS Título E + Resolución 0631/2015.</li>
        <li><strong>Permiso ambiental:</strong> PTAP requiere concesión de aguas (Decreto 1076/2015); PTAR requiere permiso de vertimientos (Decreto 1076/2015).</li>
        <li><strong>Operador típico:</strong> Ambas son operadas por la Empresa de Servicios Públicos (ESP) municipal; en municipios pequeños puede ser la Alcaldía directamente.</li>
        <li><strong>Costo de construcción:</strong> Una PTAP para 5 L/s (municipio pequeño) puede costar entre $800 millones y $2.500 millones COP según la tecnología; una PTAR equivalente entre $1.200 millones y $3.500 millones COP.</li>
      </ul>

      <h2>¿Cuándo se requiere cada una según la normativa colombiana?</h2>
      <p>La <strong>PTAP es obligatoria</strong> cuando el municipio o el acueducto comunitario capta agua superficial o subterránea para consumo humano. Si se capta directamente de un acuífero de muy buena calidad puede no requerirse tratamiento completo, pero siempre se necesita al menos desinfección. La normativa exige que el 100% de la población urbana y rural dispersa reciba agua con IRCA en nivel sin riesgo.</p>
      <p>La <strong>PTAR es obligatoria</strong> cuando las aguas residuales domésticas se vierten a un cuerpo de agua. El <strong>Plan de Saneamiento y Manejo de Vertimientos (PSMV)</strong>, que deben tener todas las ESP municipales y que es exigido por la CAR, establece las metas de construcción y mejora de PTAR. En la práctica, muchos municipios pequeños de Colombia aún no cuentan con PTAR o tienen plantas en mal estado, lo que convierte la construcción de PTAR en una de las principales fuentes de proyectos de regalías SGR en el sector de agua y saneamiento.</p>
      <p>En proyectos urbanísticos privados, la PTAR puede requerirse cuando la urbanización no tiene conexión a la red de alcantarillado municipal o cuando la red existente no tiene capacidad suficiente. En ese caso, el desarrollador debe construir y operar su propia PTAR y gestionar el permiso de vertimientos ante la CAR.</p>

      <h2>¿Puede un sistema tener PTAP y PTAR simultáneamente?</h2>
      <p>Sí, y de hecho es lo deseable. Un municipio bien gestionado tiene ambas plantas. El agua del río pasa por la PTAP, llega a los hogares como agua potable, los usuarios la usan, y el agua residual que sale por los desagües llega a la PTAR antes de volver al río. Este ciclo completo —llamado ciclo integral del agua— es el estándar al que Colombia debe llegar para cumplir con los Objetivos de Desarrollo Sostenible (ODS 6: agua limpia y saneamiento).</p>
      <p>Cuando se formula un proyecto de regalías para mejoramiento del sistema de acueducto, es común que el proyecto incluya tanto la rehabilitación de la PTAP como la construcción de la PTAR, porque ambas son componentes del mismo sistema de agua y saneamiento básico.</p>

      <h2>Costos típicos en Colombia (2026)</h2>
      <p>Los costos de diseño y construcción varían según la capacidad (L/s o m³/día) y la tecnología seleccionada. Como referencia para municipios pequeños y medianos:</p>
      <ul>
        <li><strong>Diseño de PTAP (5–20 L/s):</strong> $30–$80 millones COP (incluye estudios, memoria de cálculo COPNIA y planos).</li>
        <li><strong>Construcción de PTAP (5 L/s):</strong> $800 millones – $1.500 millones COP.</li>
        <li><strong>Diseño de PTAR doméstica (5–20 L/s):</strong> $40–$100 millones COP.</li>
        <li><strong>Construcción de PTAR (5 L/s), tipo laguna de estabilización:</strong> $1.200 millones – $2.000 millones COP.</li>
        <li><strong>Construcción de PTAR (5 L/s), tipo reactor UASB + filtro biológico:</strong> $2.000 millones – $3.500 millones COP.</li>
      </ul>
      <p>Estos costos son orientativos. El presupuesto real depende de la calidad del agua cruda, el nivel del terreno, la disponibilidad de energía eléctrica, los costos logísticos de la zona y los precios de los materiales al momento de la obra.</p>

      <h2>Conclusión: no son lo mismo, pero se complementan</h2>
      <p>La confusión entre PTAP y PTAR es comprensible —ambas "tratan agua"— pero sus funciones son opuestas en el ciclo hídrico. La PTAP protege la salud pública al inicio del ciclo; la PTAR protege el medio ambiente al final. Un municipio que invierte solo en PTAP sin PTAR soluciona el agua potable pero contamina sus ríos; uno que construye PTAR sin mejorar la PTAP tiene el río limpio pero su población sigue bebiendo agua de mala calidad. La solución integral —y la que financia el SGR— contempla ambas.</p>

      <QuoteFormInline serviceId="hidraulica-general" />

      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos PTAP y PTAR para municipios, acueductos comunitarios y desarrollos urbanísticos en todo Colombia. Elaboramos las memorias de cálculo conforme al RAS 2017, los estudios de pre-diseño para regalías SGR y acompañamos los trámites ante la CAR. Contáctenos en <strong>ingenieriabernal.co</strong> o al <strong>+57 302 477 8910</strong> para una asesoría inicial sin costo.</p>
    </>,
  },

  'estudio-inundabilidad-lote-colombia': {
    title: 'Estudio de inundabilidad para lote en Colombia: qué es y cómo tramitarlo',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Guía completa del estudio de inundabilidad en Colombia: cuándo se exige, qué contiene, normas (Decreto 1807/2014, RAS), costos y plazos. Para constructores y alcaldías.',
    keywords: 'estudio inundabilidad Colombia, estudio amenaza inundación Decreto 1807, HEC-RAS inundabilidad Colombia, riesgo inundación lote Colombia, estudio hidrológico hidráulico Colombia',
    body: <>
      <p>Si tiene un lote en Colombia cerca de un río, quebrada, canal o cualquier cuerpo de agua, es muy probable que la curaduría urbana o la CAR le exijan un <strong>estudio de inundabilidad</strong> antes de otorgar la licencia de urbanismo o construcción. Muchos propietarios y promotores se topan con este requisito sin saber exactamente qué es, cuánto cuesta o cuánto tiempo toma. Esta guía responde todas esas preguntas.</p>

      <h2>¿Qué es un estudio de inundabilidad?</h2>
      <p>Un estudio de inundabilidad —técnicamente llamado <strong>estudio de amenaza, vulnerabilidad y riesgo por inundación</strong>— es el análisis técnico que determina si un predio puede verse afectado por una inundación, con qué frecuencia y con qué profundidad. Su resultado principal es un <strong>mapa de amenaza</strong> que clasifica el lote y sus alrededores en zonas de amenaza alta, media o baja para distintos períodos de retorno (Tr10, Tr25, Tr100 años).</p>
      <p>Con base en ese mapa, la curaduría y la CAR determinan qué parte del predio es apta para construir, qué restricciones se aplican (retiros al cauce, cotas mínimas de piso, obras de protección) y si el proyecto requiere medidas de mitigación estructurales antes de obtener la licencia.</p>

      <h2>¿Cuándo lo exige la norma colombiana?</h2>
      <p>El marco normativo principal es el <strong>Decreto 1807 de 2014</strong> (compilado en el Decreto 1077/2015), que establece los estudios básicos para la revisión y ajuste de Planes de Ordenamiento Territorial (POT) en lo relacionado con la incorporación de la gestión del riesgo. En la práctica, este decreto se aplica también a proyectos privados de urbanismo y construcción cuando:</p>
      <ul>
        <li>El lote se encuentra en la zona de influencia de un cauce (río, quebrada, canal, zanja o cañada).</li>
        <li>El POT del municipio clasifica el área como zona de amenaza hídrica o de expansión urbana en zonas de riesgo.</li>
        <li>La curaduría urbana o la CAR lo solicitan expresamente como requisito previo a la licencia.</li>
        <li>El proyecto requiere permiso de ocupación de cauce o licencia ambiental ante la CAR.</li>
        <li>El predio está en área de influencia de un POMCA (Plan de Ordenación y Manejo de Cuencas Hidrográficas) que exige la zonificación.</li>
      </ul>
      <p>También aplica para proyectos de inversión pública (vías, equipamientos, sistemas de acueducto) que se formulan ante el DNP o el SGR, donde el análisis de riesgo es un componente obligatorio de la evaluación ex ante.</p>

      <h2>¿Qué contiene el estudio? Metodología paso a paso</h2>
      <p>Un estudio de inundabilidad bien elaborado bajo el Decreto 1807 incluye los siguientes componentes:</p>
      <ul>
        <li><strong>Recopilación de información base:</strong> cartografía existente, imágenes satelitales, estudios previos del IDEAM, SGC o la CAR, historial de inundaciones reportadas en el municipio.</li>
        <li><strong>Levantamiento topobatimétrico:</strong> medición de secciones transversales del cauce y la llanura aluvial adyacente con estación total y GPS RTK. Es el insumo más costoso y el que más afecta la calidad del modelo.</li>
        <li><strong>Análisis hidrológico (HEC-HMS o método racional):</strong> cálculo de los caudales máximos para los períodos de retorno de 10, 25 y 100 años, usando datos pluviométricos del IDEAM y la morfometría de la cuenca aportante.</li>
        <li><strong>Modelación hidráulica con HEC-RAS 2D:</strong> simulación del flujo superficial para cada período de retorno, obteniendo profundidades máximas, velocidades y extensión de la mancha de inundación. El modelo 2D es hoy el estándar que exigen las curadurías y las CAR más exigentes.</li>
        <li><strong>Cartografía SIG:</strong> mapas de amenaza alta, media y baja a escala 1:2.000 o 1:5.000 en ArcGIS o QGIS, sobreimpresos sobre la cartografía del proyecto.</li>
        <li><strong>Concepto de aptitud urbanística:</strong> determinación de las zonas aptas para construir, los retiros recomendados y las medidas de mitigación estructurales requeridas.</li>
        <li><strong>Memoria de cálculo firmada:</strong> documento técnico que respalda todos los cálculos, firmado por ingeniero civil con tarjeta COPNIA vigente.</li>
      </ul>

      <h2>Períodos de retorno y su significado práctico</h2>
      <p>El <strong>período de retorno</strong> (Tr) es el número promedio de años que transcurre entre dos eventos de igual o mayor magnitud. En términos prácticos:</p>
      <ul>
        <li><strong>Tr10 años:</strong> Una inundación de esta magnitud ocurre, en promedio, una vez cada 10 años. Se usa para diseñar sistemas de drenaje urbano de baja importancia.</li>
        <li><strong>Tr25 años:</strong> Se usa para infraestructura urbana de mediana importancia (vías locales, zonas industriales).</li>
        <li><strong>Tr100 años:</strong> El más importante para estudios de amenaza hídrica. Una inundación de esta magnitud tiene un 1% de probabilidad de ocurrir en cualquier año. La mancha de inundación del Tr100 define el límite de la zona de amenaza alta en Colombia.</li>
      </ul>
      <p>Un error común es pensar que "Tr100 significa que ocurre una sola vez en 100 años". Eso no es correcto: en un período de 100 años, hay un 63% de probabilidad de que ocurra al menos una vez ese evento.</p>

      <h2>Costos y plazos típicos en Colombia (2026)</h2>
      <p>El costo de un estudio de inundabilidad varía según el tamaño del predio, la complejidad del cauce y los entregables requeridos por la entidad:</p>
      <ul>
        <li><strong>Estudio básico (predio urbano &lt;2 ha, cauce pequeño):</strong> $8–$15 millones COP. Plazo: 3–4 semanas.</li>
        <li><strong>Estudio intermedio (plan parcial 5–20 ha, quebrada o río mediano):</strong> $15–$35 millones COP. Plazo: 4–6 semanas.</li>
        <li><strong>Estudio completo (proyecto grande &gt;20 ha o río principal):</strong> $35–$80 millones COP. Plazo: 6–10 semanas.</li>
      </ul>
      <p>El costo más variable es el levantamiento topobatimétrico: en zonas de difícil acceso o con cauces largos, puede representar el 40–60% del costo total del estudio. Los honorarios de consultoría, el procesamiento del modelo HEC-RAS y la cartografía SIG representan el resto.</p>

      <h2>¿Qué pasa si no hago el estudio?</h2>
      <p>Sin el estudio de inundabilidad, la curaduría no otorga la licencia de urbanismo en zonas con amenaza hídrica. Si se construye sin licencia en zona de riesgo, la autoridad municipal puede ordenar la demolición. Pero el riesgo más grave es la pérdida de vidas y bienes cuando llegue la inundación. En Colombia han ocurrido tragedias por construcciones en zonas de riesgo que no contaban con estudios técnicos ni medidas de mitigación.</p>
      <p>Para proyectos de regalías SGR, la ausencia del estudio de riesgo implica que el proyecto no supera la viabilidad técnica ante el DNP, bloqueando el acceso a recursos públicos para infraestructura.</p>

      <h2>¿Quién puede elaborar un estudio de inundabilidad?</h2>
      <p>El estudio debe ser elaborado y firmado por un <strong>ingeniero civil con tarjeta profesional COPNIA vigente</strong>, idealmente con experiencia en ingeniería hidráulica, modelación HEC-RAS y análisis de riesgo hídrico. Algunos municipios exigen que el profesional tenga especialización o posgrado en hidráulica o recursos hídricos. La memoria técnica sin firma de ingeniero con COPNIA no es aceptada por las curadurías ni por las CAR.</p>

      <QuoteFormInline serviceId="hidraulica-general" />

      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> realizamos estudios de inundabilidad para predios urbanos y rurales en todo Colombia, con modelación HEC-RAS 2D, cartografía SIG y memorias de cálculo firmadas COPNIA. Nuestros estudios son aceptados por Corpocaldas, CARDER, CRQ y curadurías del Eje Cafetero. Contáctenos en <strong>ingenieriabernal.co</strong> o al <strong>+57 302 477 8910</strong> para una propuesta en 24 horas.</p>
    </>,
  },

  'diseno-red-contra-incendio-nsr10-colombia': {
    title: 'Diseño de red contra incendio NSR-10 en Colombia: requisitos y normas',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Sistemas Contra Incendio',
    metaDesc: 'Todo sobre el diseño de redes contra incendio en Colombia según NSR-10 Título J, NTC 1669, NTC 2301 y NFPA 13. Requisitos, cálculo hidráulico y tramitación.',
    keywords: 'diseño red contra incendio NSR-10 Colombia, sistemas contra incendio Colombia, NFPA 13 Colombia, NTC 1669 hidrantes Colombia, rociadores NSR-10 Colombia',
    body: <>
      <p>Diseñar una red contra incendio en Colombia no es simplemente instalar tuberías y rociadores: es cumplir con un entramado de normas técnicas nacionales e internacionales que determinan desde el caudal mínimo hasta la presión de trabajo y los materiales permitidos. Este artículo explica los requisitos de la <strong>NSR-10</strong>, las normas ICONTEC aplicables, los tipos de sistemas y el trámite ante el Cuerpo de Bomberos.</p>

      <h2>¿Cuándo es obligatoria una red contra incendio en Colombia?</h2>
      <p>El <strong>Reglamento Colombiano de Construcción Sismo Resistente NSR-10, Título J</strong> (Requisitos de Protección Contra Incendios en Edificaciones) establece que las siguientes edificaciones deben contar con sistemas de extinción automática o manual:</p>
      <ul>
        <li><strong>Edificaciones de ocupación residencial (R):</strong> viviendas multifamiliares de más de 4 pisos o más de 2.000 m² de área construida.</li>
        <li><strong>Uso comercial y de negocios (C y B):</strong> centros comerciales, oficinas, hoteles con área mayor a 2.000 m².</li>
        <li><strong>Uso institucional (I):</strong> hospitales, colegios, establecimientos de reclusión, independientemente del área.</li>
        <li><strong>Uso industrial (F):</strong> bodegas e industrias con carga combustible alta, según la clasificación de riesgo del Título J.</li>
        <li><strong>Edificaciones de más de 20 pisos o más de 55 m de altura:</strong> siempre requieren sistemas automáticos y columna seca.</li>
      </ul>
      <p>En la práctica, la curaduría urbana exige el diseño del sistema CI como requisito para la radicación de la licencia de construcción. El Cuerpo de Bomberos revisa y certifica el diseño antes de la ocupación del edificio.</p>

      <h2>Normas técnicas aplicables</h2>
      <p>El diseño de sistemas CI en Colombia se rige por las siguientes normas, que deben ser aplicadas conjuntamente:</p>
      <ul>
        <li><strong>NSR-10 Título J:</strong> Norma marco colombiana de protección contra incendios. Define las cargas de ocupación, la clasificación de riesgo, los tipos de sistemas requeridos y los criterios generales de diseño.</li>
        <li><strong>NSR-10 Título K:</strong> Complementa el Título J con requisitos específicos de salidas de emergencia, señalización y compartimentación.</li>
        <li><strong>NTC 1669:</strong> Norma colombiana para hidrantes. Establece los requisitos de los hidrantes contra incendio para instalación en vía pública o predios privados, incluyendo los caudales mínimos y las presiones de trabajo.</li>
        <li><strong>NTC 2301:</strong> Norma para gabinetes y mangueras contra incendio de uso en edificios. Define las dimensiones, el tipo de manguera, la boquilla y el accesorio de conexión.</li>
        <li><strong>NFPA 13 (National Fire Protection Association):</strong> Estándar americano para instalación de rociadores automáticos. La NSR-10 la referencia directamente para el diseño de sistemas de rociadores.</li>
        <li><strong>NFPA 14:</strong> Estándar para sistemas de tuberías verticales (columnas secas y mojadas) en edificios de altura.</li>
        <li><strong>NFPA 20:</strong> Estándar para bombas contra incendio.</li>
        <li><strong>NFPA 72:</strong> Código nacional de alarma de incendio, para los sistemas de detección y alerta.</li>
      </ul>

      <h2>Tipos de sistemas de protección contra incendio</h2>
      <p>Según el uso y las características de la edificación, se puede requerir uno o varios de los siguientes sistemas:</p>
      <ul>
        <li><strong>Sistema de rociadores automáticos (sprinklers):</strong> Red de tuberías con rociadores termosensibles que se activan individualmente al detectar el calor del incendio. Se diseñan según NFPA 13, con densidades de descarga entre 4 y 12 L/min/m² según la clasificación de riesgo. Son los sistemas más eficaces para protección automática.</li>
        <li><strong>Gabinetes contra incendio (mangueras):</strong> Armarios empotrados con manguera semirrígida o plana y boquilla. Diseñados según NTC 2301. Permiten que los ocupantes o los bomberos ataquen un incendio manual. Se exigen como complemento de los rociadores en edificios de uso público.</li>
        <li><strong>Hidrantes exteriores:</strong> Toma de agua en la vía pública o en el predio para uso exclusivo del Cuerpo de Bomberos. Diseñados según NTC 1669, con caudales mínimos de 500 L/min a 7 bar de presión residual.</li>
        <li><strong>Columnas secas:</strong> Tuberías sin agua, conectadas al exterior del edificio para que los bomberos las alimenten desde sus camiones. Obligatorias en edificios de más de 20 m de altura según NSR-10 Título J.</li>
        <li><strong>Columnas mojadas (standpipe):</strong> Tuberías siempre presurizadas con agua, con salidas en cada piso para mangueras. Se usan en edificios de gran altura cuando la presión de la red pública no es suficiente.</li>
        <li><strong>Sistemas de espuma o agentes limpios:</strong> Para bodegas con materiales inflamables o salas de servidores. Diseñados bajo normas NFPA específicas según el agente extintor.</li>
      </ul>

      <h2>Cálculo hidráulico: la parte técnica central</h2>
      <p>El diseño de una red CI es esencialmente un <strong>problema de hidráulica de tuberías</strong>: se debe garantizar que el caudal y la presión requeridos lleguen simultáneamente a todos los puntos de descarga (rociadores o bocas de manguera) en la condición más desfavorable. El procedimiento de cálculo implica:</p>
      <ul>
        <li>Definir la densidad de descarga requerida según la clasificación de riesgo del Título J y NFPA 13 (riesgo leve, ordinario o extra).</li>
        <li>Calcular el <strong>área de operación</strong>: el número de rociadores que se activan simultáneamente en el diseño (generalmente entre 12 y 40 según NFPA 13).</li>
        <li>Calcular el caudal total demandado (Q en L/min o gal/min).</li>
        <li>Dimensionar las tuberías usando la fórmula de Hazen-Williams para pérdidas de fricción, con el coeficiente C apropiado para el material (acero negro C=120, CPVC C=150).</li>
        <li>Verificar que la presión residual en el punto más desfavorable sea al menos 0,5 bar (7 psi) para rociadores, según NFPA 13.</li>
        <li>Dimensionar la <strong>bomba contra incendio</strong> según NFPA 20: caudal nominal, presión de trabajo y arranque automático con eje diesel de emergencia.</li>
        <li>Dimensionar el <strong>tanque de almacenamiento</strong> con la reserva para 30, 60 o 90 minutos de operación según el riesgo.</li>
      </ul>

      <h2>Coordinación con el sistema de acueducto</h2>
      <p>Una decisión crítica en proyectos urbanos es si la red CI se abastece de la <strong>red de acueducto pública</strong> o de un <strong>tanque privado con bomba dedicada</strong>. En Colombia, la red pública rara vez tiene presión y caudal suficientes para sistemas CI de edificios de más de 5 pisos. La ESP puede exigir que el sistema CI tenga su propia fuente de agua (tanque elevado o cisterna con bomba), independiente de la red doméstica, para no afectar el servicio a los demás usuarios.</p>
      <p>El diseñador debe coordinar con la ESP el punto de conexión, el contador separado para el CI y las condiciones de la acometida. Este trámite puede tomar entre 2 y 6 semanas según el municipio.</p>

      <h2>Trámite ante el Cuerpo de Bomberos</h2>
      <p>El Cuerpo de Bomberos Voluntarios o Oficiales del municipio es la entidad que <strong>revisa y certifica</strong> los diseños CI antes de la ocupación del edificio. El proceso típico incluye: radicación de los planos con memoria de cálculo firmada COPNIA, revisión técnica por el oficial de bomberos (plazo 10–30 días según el municipio), expedición de concepto técnico favorable, y visita de inspección durante la instalación y al finalizar la obra. Sin el concepto de bomberos, el edificio no puede obtener el permiso de ocupación.</p>

      <h2>Costos típicos de diseño e instalación (2026)</h2>
      <ul>
        <li><strong>Diseño de sistema CI (edificio residencial 5 pisos, 3.000 m²):</strong> $8–$18 millones COP.</li>
        <li><strong>Diseño de sistema CI (centro comercial 10.000 m²):</strong> $25–$50 millones COP.</li>
        <li><strong>Instalación de rociadores (costo por m²):</strong> $80.000–$150.000 COP/m² instalado.</li>
        <li><strong>Bomba contra incendio (5–20 L/s):</strong> $35–$120 millones COP suministrada e instalada.</li>
        <li><strong>Tanque de reserva CI (50.000 L en concreto):</strong> $80–$150 millones COP.</li>
      </ul>

      <QuoteFormInline serviceId="hidraulica-general" />

      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos sistemas contra incendio para edificios residenciales, comerciales e industriales en Colombia, cumpliendo la NSR-10, NFPA 13, NTC 1669 y NTC 2301. Entregamos memorias de cálculo firmadas COPNIA y acompañamos el trámite ante el Cuerpo de Bomberos. Contáctenos en <strong>ingenieriabernal.co</strong> o al <strong>+57 302 477 8910</strong>.</p>
    </>,
  },

  'que-es-pomca-colombia-para-que-sirve': {
    title: '¿Qué es un POMCA en Colombia y para qué sirve?',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Planificación Ambiental',
    metaDesc: 'Explicación clara de qué es un POMCA (Plan de Ordenación y Manejo de Cuencas Hidrográficas) en Colombia, para qué sirve, quién lo formula y cómo afecta los proyectos.',
    keywords: 'POMCA Colombia qué es, Plan de Ordenación Manejo Cuencas Colombia, POMCA CAR Colombia, zonificación POMCA Colombia, Decreto 1076 POMCA Colombia',
    body: <>
      <p>Si usted es alcalde, secretario de planeación, constructor o propietario de un predio en Colombia, es probable que en algún momento alguien le haya mencionado el POMCA y usted no haya entendido exactamente qué significa o cómo le afecta. Esta guía lo explica en lenguaje claro, sin tecnicismos innecesarios.</p>

      <h2>¿Qué es un POMCA?</h2>
      <p>Un <strong>POMCA</strong> (Plan de Ordenación y Manejo de Cuencas Hidrográficas) es el instrumento de planificación ambiental con el que Colombia ordena el uso del territorio en torno a las cuencas hidrográficas. Dicho de manera simple: es el "plan de vida" de una cuenca —desde las montañas donde nace el agua hasta el río o embalse donde desemboca— que define qué actividades humanas son permitidas, cuáles están restringidas y cuáles están prohibidas en cada parte de ese territorio.</p>
      <p>A diferencia de los Planes de Ordenamiento Territorial (POT), que son elaborados por cada municipio, el POMCA es elaborado por la <strong>Corporación Autónoma Regional (CAR)</strong> competente para la cuenca, que puede abarcar varios municipios o incluso varios departamentos. Esto significa que el POMCA tiene una visión de ecosistema, no de límites político-administrativos.</p>

      <h2>Base legal del POMCA</h2>
      <p>El POMCA tiene su fundamento en varias normas de alto nivel en Colombia:</p>
      <ul>
        <li><strong>Decreto Ley 2811 de 1974</strong> (Código Nacional de Recursos Naturales Renovables): establece la obligación de ordenar y manejar las cuencas hidrográficas.</li>
        <li><strong>Ley 99 de 1993</strong>: crea el Sistema Nacional Ambiental (SINA) y las Corporaciones Autónomas Regionales como las entidades encargadas de la gestión ambiental.</li>
        <li><strong>Decreto 1729 de 2002</strong> (derogado): primer reglamento de cuencas hidrográficas en Colombia.</li>
        <li><strong>Decreto 1640 de 2012</strong>: reglamenta los instrumentos para la planificación, ordenación y manejo de cuencas hidrográficas. Establece las 6 fases del POMCA.</li>
        <li><strong>Decreto 1076 de 2015</strong> (Decreto Único Reglamentario del Sector Ambiente): compila toda la normativa ambiental, incluido lo relativo a cuencas hidrográficas.</li>
        <li><strong>Política Nacional de Gestión del Recurso Hídrico (2010):</strong> establece los objetivos estratégicos del gobierno colombiano para la gestión del agua, incluyendo la ordenación de cuencas.</li>
      </ul>

      <h2>¿Quién formula el POMCA y cuánto dura el proceso?</h2>
      <p>La formulación del POMCA es responsabilidad de la <strong>CAR</strong> (o de varias CAR de forma conjunta cuando la cuenca cruza sus jurisdicciones). El proceso es largo y participativo: involucra a las comunidades, los municipios, las empresas y demás actores del territorio. Las 6 fases del proceso son:</p>
      <ul>
        <li><strong>Fase 1 – Aprestamiento:</strong> organización del equipo técnico, identificación de actores y diseño de la estrategia de participación.</li>
        <li><strong>Fase 2 – Diagnóstico:</strong> análisis del estado actual de la cuenca: calidad y cantidad del agua, biodiversidad, riesgos, conflictos de uso del suelo, condiciones socioeconómicas.</li>
        <li><strong>Fase 3 – Prospectiva:</strong> construcción de escenarios futuros posibles para la cuenca (sin intervención, con intervención moderada, con intervención óptima).</li>
        <li><strong>Fase 4 – Formulación:</strong> definición del escenario apuesta, los programas, proyectos y metas del POMCA, y la zonificación ambiental de la cuenca.</li>
        <li><strong>Fase 5 – Ejecución:</strong> implementación de los proyectos del plan de acción.</li>
        <li><strong>Fase 6 – Seguimiento y evaluación:</strong> monitoreo de los indicadores y ajuste del plan.</li>
      </ul>
      <p>Todo el proceso (fases 1 a 4) suele durar entre 2 y 4 años desde el inicio hasta la aprobación del POMCA por parte del Consejo de Cuenca y la CAR. Una vez aprobado, el POMCA tiene una <strong>vigencia de 10 años</strong>, aunque puede ajustarse antes si hay cambios significativos en la cuenca.</p>

      <h2>¿Qué es la zonificación ambiental del POMCA y por qué importa?</h2>
      <p>El componente más práctico del POMCA para constructores, alcaldías y propietarios es la <strong>zonificación ambiental</strong>: el mapa que divide la cuenca en zonas según su aptitud y sus restricciones de uso. Las categorías típicas son:</p>
      <ul>
        <li><strong>Áreas de conservación y protección ambiental:</strong> rondas hídricas, nacimientos de agua, humedales, zonas de recarga de acuíferos. En estas áreas está prohibido construir, deforestar o realizar actividades que alteren el ciclo hídrico.</li>
        <li><strong>Áreas de restauración:</strong> zonas degradadas que deben ser recuperadas. Se pueden realizar actividades de reforestación y restauración ecológica, pero no construcción ni agricultura intensiva.</li>
        <li><strong>Áreas de uso sostenible:</strong> zonas donde se permiten actividades agropecuarias o forestales con manejo adecuado, y en algunos casos actividades urbanas controladas.</li>
        <li><strong>Áreas de uso múltiple:</strong> zonas con menor sensibilidad ambiental donde se permiten actividades más intensivas, incluida la urbanización bajo ciertas condiciones.</li>
      </ul>
      <p>Esta zonificación es vinculante para los municipios: cuando un municipio actualiza su POT, está obligado a incorporar la zonificación del POMCA como insumo determinante. Esto significa que si su predio queda en zona de conservación del POMCA, el POT municipal no puede reclasificarlo como zona urbana de construcción.</p>

      <h2>¿Cómo afecta el POMCA a los constructores y promotores?</h2>
      <p>Para quien quiere construir o desarrollar un proyecto en Colombia, el POMCA puede tener consecuencias directas:</p>
      <ul>
        <li><strong>Restricciones de uso del suelo:</strong> si el predio está en zona de protección del POMCA, la licencia puede ser negada o condicionada a medidas de compensación ambiental.</li>
        <li><strong>Retiros a cauces:</strong> el POMCA puede establecer retiros adicionales a los del POT municipal, especialmente en cuencas con alta variabilidad hídrica o con problemas de torrencialidad.</li>
        <li><strong>Requisitos adicionales para permisos ambientales:</strong> la CAR puede exigir que los proyectos en la cuenca sean compatibles con el programa de uso eficiente del agua del POMCA.</li>
        <li><strong>Fuente de conflicto en trámites:</strong> muchos proyectos se demoran porque el POT del municipio no está actualizado con el POMCA, y la CAR objeta el uso propuesto. Esto es especialmente frecuente en municipios del Eje Cafetero y Antioquia donde hay POMCAs recién formulados o en ajuste.</li>
      </ul>

      <h2>¿Cómo afecta el POMCA a las obras de acueducto y alcantarillado?</h2>
      <p>Para los proyectos de infraestructura de agua potable y saneamiento, el POMCA es una fuente de información técnica fundamental:</p>
      <ul>
        <li>El POMCA contiene el <strong>balance hídrico</strong> de la cuenca, que es el estudio que determina si hay suficiente agua disponible para otorgar nuevas concesiones. Sin ese balance, la CAR no puede aprobar la concesión de aguas que requiere una nueva PTAP o sistema de acueducto.</li>
        <li>El diagnóstico del POMCA identifica las <strong>fuentes de contaminación</strong> de la cuenca (vertimientos sin tratar, erosión, agroquímicos), lo que orienta el diseño de las PTAR y los programas de reducción de vertimientos.</li>
        <li>El plan de acción del POMCA puede incluir proyectos de acueducto y saneamiento como parte de las metas de mejoramiento de la cuenca, lo que facilita su financiación con regalías SGR o recursos de las CAR.</li>
      </ul>

      <h2>Ejemplos de POMCAs en Colombia que afectan proyectos activos (2026)</h2>
      <p>Algunos POMCAs con alta relevancia para proyectos de construcción e infraestructura en Colombia:</p>
      <ul>
        <li><strong>POMCA Río Chinchiná (Corpocaldas/CARDER):</strong> Afecta directamente a Manizales, Palestina, Villamaría, Chinchiná y Neira. Regula los usos del suelo en la cuenca que abastece buena parte del Eje Cafetero.</li>
        <li><strong>POMCA Río Otún (CARDER):</strong> Cuenca que abastece a Pereira. Tiene restricciones estrictas en la parte alta por ser zona de recarga del acuífero.</li>
        <li><strong>POMCA Río Bogotá (CAR Cundinamarca):</strong> El más complejo del país. Afecta a decenas de municipios de la Sabana de Bogotá con restricciones para la urbanización en rondas del río.</li>
      </ul>

      <QuoteFormInline serviceId="hidraulica-general" />

      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> tenemos experiencia en la interpretación y aplicación de POMCAs para proyectos de urbanismo, acueductos y gestión del riesgo hídrico en el Eje Cafetero y Colombia. Si su proyecto puede verse afectado por un POMCA, le asesoramos sobre las restricciones aplicables y los estudios requeridos. Contáctenos en <strong>ingenieriabernal.co</strong> o al <strong>+57 302 477 8910</strong>.</p>
    </>,
  },

  'interventoria-obras-hidraulicas-colombia': {
    title: 'Interventoría de obras hidráulicas en Colombia: qué es y cuánto cuesta',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Gestión de Proyectos',
    metaDesc: 'Guía completa sobre interventoría de obras hidráulicas en Colombia: obligatoriedad (Ley 80, Ley 1474, SGR), funciones, costos típicos 8-15% y cómo seleccionar un interventor.',
    keywords: 'interventoría obras hidráulicas Colombia, interventoría Ley 80 Colombia, costo interventoría Colombia, interventor obras públicas Colombia, interventoría SGR Colombia',
    body: <>
      <p>La <strong>interventoría de obras</strong> es uno de los mecanismos más importantes —y más mal entendidos— del sistema de contratación pública colombiano. En obras hidráulicas —acueductos, alcantarillados, PTAR, canales, diques— la interventoría no es un lujo ni un trámite burocrático: es la garantía técnica, administrativa y legal de que los recursos públicos se invierten correctamente y que la obra cumple con lo contratado. Esta guía explica qué es, cuándo es obligatoria, qué hace el interventor y cuánto cuesta.</p>

      <h2>¿Qué es la interventoría de obras?</h2>
      <p>La interventoría es el <strong>servicio de vigilancia y control técnico, administrativo, financiero y legal</strong> que se ejerce sobre la ejecución de un contrato de obra. El interventor actúa como representante técnico del contratante (la entidad pública o el propietario privado) ante el contratista, verificando que la obra se ejecute conforme a los planos, las especificaciones técnicas, el presupuesto y el cronograma contratados.</p>
      <p>En Colombia existe una distinción importante:</p>
      <ul>
        <li><strong>Interventoría:</strong> Contrato independiente entre la entidad contratante y un tercero especializado (persona natural o jurídica), que ejerce el control sobre otro contrato (el de obra). Es obligatoria en ciertos casos por la ley.</li>
        <li><strong>Supervisión:</strong> Control ejercido directamente por un funcionario de la entidad contratante (no es un contrato externo). Se usa cuando no se requiere interventoría obligatoria o cuando la entidad tiene capacidad técnica interna.</li>
      </ul>

      <h2>¿Cuándo es obligatoria la interventoría en Colombia?</h2>
      <p>La obligatoriedad de la interventoría está determinada principalmente por tres marcos legales:</p>
      <ul>
        <li><strong>Ley 80 de 1993 (Estatuto General de Contratación):</strong> Exige interventoría en contratos de obra pública. En su artículo 32, establece que los contratos de consultoría incluyen los de interventoría. El Decreto 1082 de 2015 (Estatuto de Contratación) precisa que la interventoría es obligatoria cuando el valor del contrato de obra supera el <strong>10% de la menor cuantía</strong> de la entidad.</li>
        <li><strong>Ley 1474 de 2011 (Estatuto Anticorrupción):</strong> Refuerza la obligatoriedad y las responsabilidades de los interventores. El artículo 83 establece que el interventor es solidariamente responsable con el contratista por los perjuicios que cause a la administración por el incumplimiento de sus obligaciones de vigilancia y control. Esta disposición elevó significativamente las responsabilidades del interventor en Colombia.</li>
        <li><strong>Sistema General de Regalías (SGR):</strong> Los proyectos financiados con regalías están sujetos a <strong>interventoría obligatoria</strong> para todos los contratos de obra, sin excepción de monto. El OCAD (Órgano Colegiado de Administración y Decisión) puede exigir interventoría técnica externa incluso para proyectos pequeños, como garantía adicional de la inversión de recursos públicos.</li>
      </ul>
      <p>En el sector privado, la interventoría no es exigida por ley en todos los casos, pero es recomendada y a veces exigida por los financiadores (bancos, fondos de inversión) cuando el valor de la obra supera ciertos umbrales o cuando la obra es técnicamente compleja.</p>

      <h2>Funciones del interventor en obras hidráulicas</h2>
      <p>El alcance de la interventoría se divide en cuatro componentes, todos igualmente importantes:</p>
      <ul>
        <li><strong>Interventoría técnica:</strong> Verificar que la obra se construya conforme a los planos y especificaciones. En obras hidráulicas esto incluye: control de materiales (ensayos de laboratorio a tuberías, concreto, rellenos), verificación de cotas y alineamientos, control de pruebas hidrostáticas en redes de acueducto y alcantarillado, verificación del funcionamiento de equipos (bombas, válvulas, medidores), inspección de procesos constructivos especiales (instalación de geomembranas, construcción de estructuras de concreto, compactación de rellenos).</li>
        <li><strong>Interventoría administrativa:</strong> Gestión documental del contrato: actas de inicio, actas de avance de obra, actas parciales de pago, control del libro de obra, gestión de adiciones o modificaciones contractuales, elaboración del acta de liquidación final.</li>
        <li><strong>Interventoría financiera:</strong> Verificación de que los pagos al contratista correspondan al avance real de obra, revisión de las cuentas de cobro y soportes, control del presupuesto ejecutado vs. aprobado, y emisión de conceptos para desembolsos.</li>
        <li><strong>Interventoría legal:</strong> Verificación del cumplimiento de las obligaciones laborales y de seguridad social del contratista (afiliaciones a ARL, EPS, pensión), control de las pólizas de seguro del contrato, y verificación del cumplimiento de los requisitos ambientales (permisos CAR, planes de manejo ambiental).</li>
      </ul>

      <h2>Diferencia entre interventoría y supervisión: ¿cuándo usar cada una?</h2>
      <p>La confusión entre supervisión e interventoría es frecuente en alcaldías pequeñas. La regla práctica en Colombia es:</p>
      <ul>
        <li>Si la entidad tiene un ingeniero de planta con la experiencia técnica suficiente y el tiempo disponible → puede supervisar internamente.</li>
        <li>Si la obra supera los umbrales de la Ley 80, si es un proyecto SGR, o si la entidad no tiene capacidad técnica interna → interventoría externa obligatoria.</li>
        <li>Si hay conflicto de interés (el diseñador es también el ejecutor) → siempre interventoría externa.</li>
      </ul>
      <p>En obras hidráulicas de cierta complejidad —PTAR, sistemas de bombeo, encauzamientos— es recomendable la interventoría externa incluso cuando no es obligatoria, porque los errores técnicos en este tipo de obras son costosos de corregir y pueden comprometer la vida útil del sistema.</p>

      <h2>Perfil profesional requerido para el interventor</h2>
      <p>En Colombia, el interventor de obras hidráulicas debe contar con:</p>
      <ul>
        <li><strong>Título de ingeniero civil:</strong> requisito mínimo para firmar documentos técnicos como representante de la interventoría.</li>
        <li><strong>Tarjeta profesional COPNIA vigente:</strong> sin ella no puede firmar actas ni documentos oficiales en el contrato.</li>
        <li><strong>Experiencia específica en obras hidráulicas:</strong> la entidad contratante puede exigir experiencia en acueductos, PTAR, diseño hidráulico u otras especialidades según el tipo de obra.</li>
        <li><strong>Especialización en hidráulica, saneamiento o gerencia de proyectos:</strong> frecuentemente exigida en contratos de mayor valor o complejidad.</li>
      </ul>
      <p>La firma interventora (empresa) debe estar inscrita en el Registro Único de Proponentes (RUP) de la Cámara de Comercio con los códigos UNSPSC que correspondan a los servicios de interventoría y consultoría.</p>

      <h2>Costos típicos de interventoría en Colombia (2026)</h2>
      <p>El costo de la interventoría se expresa generalmente como un <strong>porcentaje del valor del contrato de obra</strong> que se va a intervenir. Los rangos típicos en Colombia para obras hidráulicas son:</p>
      <ul>
        <li><strong>Obras de acueducto y alcantarillado municipales:</strong> 8–12% del valor del contrato de obra.</li>
        <li><strong>PTAR y PTAP:</strong> 10–15% del valor del contrato de obra, por la complejidad técnica.</li>
        <li><strong>Encauzamientos, diques y obras fluviales:</strong> 8–12%.</li>
        <li><strong>Proyectos SGR de alta complejidad (&gt;$5.000 millones COP):</strong> 6–10%, porque la base es mayor.</li>
        <li><strong>Proyectos pequeños (&lt;$500 millones COP):</strong> puede ser un valor fijo o un porcentaje más alto (12–18%) porque los costos fijos del interventor no escalan linealmente.</li>
      </ul>
      <p>Estos porcentajes incluyen los honorarios del interventor, los costos de transporte y desplazamiento, los ensayos de laboratorio y los costos administrativos del contrato de interventoría. El valor final depende de la duración de la obra, el acceso al sitio, el nivel de exigencia de la entidad y la complejidad técnica.</p>

      <h2>¿Por qué BIC ofrece interventoría como servicio?</h2>
      <p>BIC realiza interventoría de obras hidráulicas para municipios, ESP y entidades públicas porque contamos con el perfil técnico necesario: ingeniería civil con especialización en hidráulica, tarjeta COPNIA vigente, experiencia en diseño y supervisión de acueductos, PTAR, sistemas CI y obras fluviales. Esto nos permite no solo verificar que la obra se construya bien, sino detectar problemas técnicos antes de que se conviertan en sobrecostos o fallas estructurales.</p>

      <QuoteFormInline serviceId="hidraulica-general" />

      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> prestamos servicios de interventoría técnica, administrativa y financiera para obras hidráulicas en Colombia: acueductos, alcantarillados, PTAR, encauzamientos y sistemas CI NSR-10. Actuamos ante alcaldías, ESP y entidades del SGR con firma COPNIA vigente. Contáctenos en <strong>ingenieriabernal.co</strong> o al <strong>+57 302 477 8910</strong> para una propuesta en 24 horas.</p>
    </>,
  },

}

export default articlesI
