// Category C: Normativa y Regulación Colombiana (7 articles: C-01, C-02, C-04 to C-08)
const articlesC: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'ras-2000-colombia': {
    title: 'RAS 2000: el reglamento técnico que todo ingeniero de agua potable en Colombia debe dominar',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Normativa',
    metaDesc: 'Resumen técnico del RAS 2000 (Reglamento Técnico del Sector de Agua Potable y Saneamiento): títulos, niveles de complejidad, criterios de diseño y novedades de la Resolución 0330 de 2017.',
    keywords: 'RAS 2000 Colombia reglamento técnico agua, Resolución 0330 2017 Colombia acueducto, niveles complejidad RAS 2000, RAS 2017 Colombia acueducto diseño',
    body: <>
      <p>El <strong>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2000)</strong>, actualizado y vigente mediante la <strong>Resolución 0330 de 2017</strong> del Ministerio de Vivienda, Ciudad y Territorio, es la norma técnica colombiana de cumplimiento obligatorio para el diseño, construcción, supervisión, operación y mantenimiento de los sistemas de agua potable y saneamiento básico del país. Todo profesional que trabaje en infraestructura hídrica en Colombia debe conocerlo con profundidad: es la referencia que verifican las Corporaciones Autónomas, las Curadurías, el Ministerio de Vivienda y el DNP en cualquier proyecto del sector.</p>

      <h2>¿Qué es el RAS 2000 y cuál es su alcance legal?</h2>
      <p>El RAS fue expedido originalmente en el año 2000 mediante la Resolución 1096 del Ministerio de Desarrollo Económico. En 2017, el Ministerio de Vivienda, Ciudad y Territorio lo actualizó integralmente a través de la <strong>Resolución 0330 de 2017</strong>, que derogó la versión original. Desde entonces, la Resolución 0330 es el instrumento vigente, aunque en la práctica el sector sigue refiriéndose al documento como "RAS 2000" o "RAS 2017" indistintamente.</p>
      <p>Su alcance cubre todos los sistemas de agua potable y saneamiento básico en Colombia, independientemente de su tamaño: desde acueductos rurales que atienden 50 familias hasta los grandes sistemas de distribución urbana. Es de obligatorio cumplimiento para las empresas de servicios públicos (ESPs), los municipios y los profesionales que diseñen, construyan u operen estos sistemas.</p>

      <h2>Estructura por títulos: qué regula cada uno</h2>
      <ul>
        <li><strong>Título A – Aspectos generales:</strong> Define el marco conceptual, los niveles de complejidad del sistema, los procesos de planeación sectorial y los criterios de sostenibilidad. Es el punto de partida para cualquier proyecto: aquí se determina el nivel de complejidad que aplica y los estándares de diseño que se deben cumplir.</li>
        <li><strong>Título B – Sistemas de acueducto:</strong> Regula el diseño de todos los componentes del sistema de abastecimiento: captación (bocatomas, aljibes, pozos), aducción, conducción, tratamiento (PTAP), almacenamiento y red de distribución. Incluye los criterios de dotación, los caudales de diseño, los períodos de diseño y los materiales admisibles.</li>
        <li><strong>Título C – Sistemas de potabilización:</strong> Especifica los procesos de tratamiento del agua: coagulación, floculación, sedimentación, filtración, desinfección y procesos especiales. Define los parámetros de eficiencia que debe alcanzar cada proceso y los criterios para seleccionar la tecnología apropiada según la calidad de la fuente.</li>
        <li><strong>Título D – Sistemas de recolección y evacuación de aguas residuales domésticas y pluviales:</strong> Regula el diseño de las redes de alcantarillado sanitario y pluvial. Incluye criterios de caudales de diseño, materiales, profundidades mínimas, pendientes, velocidades y estructuras de control.</li>
        <li><strong>Título E – Tratamiento de aguas residuales:</strong> Norma el diseño de plantas de tratamiento de aguas residuales (PTAR), incluyendo sistemas de tratamiento primario, secundario y terciario. Define los estándares de vertimiento y las condiciones de diseño para cada tecnología.</li>
        <li><strong>Título F – Sistemas de aseo urbano:</strong> Regula el manejo de residuos sólidos municipales, incluyendo la recolección, transporte y disposición final en rellenos sanitarios.</li>
      </ul>

      <h2>Niveles de complejidad del sistema: clave para el diseño</h2>
      <p>El concepto más importante del Título A es el <strong>nivel de complejidad del sistema</strong>, que determina todos los estándares técnicos aplicables:</p>
      <ul>
        <li><strong>Nivel Bajo (I):</strong> Población ≤2.500 hab, capacidad económica baja. Dotaciones y requisitos técnicos mínimos.</li>
        <li><strong>Nivel Medio (II):</strong> Población 2.501–12.500 hab, capacidad económica media.</li>
        <li><strong>Nivel Medio Alto (III):</strong> Población 12.501–60.000 hab, capacidad económica media alta.</li>
        <li><strong>Nivel Alto (IV):</strong> Población &gt;60.000 hab, capacidad económica alta. Mayores exigencias técnicas, incluido el análisis de confiabilidad del sistema.</li>
      </ul>
      <p>El nivel de complejidad no solo depende de la población: también considera la capacidad económica del municipio (relacionada con su categoría y su capacidad de pago por el servicio). Un error frecuente es diseñar para el nivel de complejidad incorrecto, lo que lleva a sobredimensionamiento costoso o a sistemas que no cumplen los requisitos mínimos.</p>

      <h2>Novedades de la Resolución 0330 de 2017 frente al RAS original</h2>
      <ul>
        <li>Incorporación explícita de los Sistemas Urbanos de Drenaje Sostenible (SUDS) como componente del diseño de drenaje pluvial.</li>
        <li>Actualización de las dotaciones netas máximas por nivel de complejidad y clima.</li>
        <li>Nuevos criterios de confiabilidad para sistemas de nivel alto (IV).</li>
        <li>Requisitos específicos para sistemas de gestión de la calidad en la operación de los sistemas de agua potable.</li>
        <li>Actualización de los materiales admisibles para tuberías, incorporando el HDPE y acero inoxidable para aplicaciones específicas.</li>
      </ul>
      <p><strong>BIC aplica el RAS 2000 y la Resolución 0330/2017 en todos sus proyectos de diseño de acueducto, alcantarillado y drenaje pluvial. Consulte con nuestros especialistas para garantizar el cumplimiento normativo de su proyecto.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'ley-1523-riesgo-colombia': {
    title: 'Ley 1523 de 2012 y gestión del riesgo hidráulico en Colombia: lo que deben saber los municipios',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Normativa',
    metaDesc: 'Análisis técnico de la Ley 1523 de 2012 (Gestión del Riesgo de Desastres) y su relación con estudios hidrológicos, hidráulicos y zonificación de amenazas en Colombia.',
    keywords: 'Ley 1523 gestión riesgo Colombia hidráulico, zonificación amenaza inundación Colombia POT, estudios básicos riesgo Colombia, UNGRD Colombia municipios riesgo',
    body: <>
      <p>La <strong>Ley 1523 de 2012</strong>, por la cual se adopta la Política Nacional de Gestión del Riesgo de Desastres, transformó la forma en que los municipios colombianos deben abordar las amenazas naturales —incluyendo las inundaciones y avenidas torrenciales. Antes de esta ley, la atención a desastres era fundamentalmente reactiva. Con la Ley 1523, Colombia pasó a un enfoque de <strong>conocimiento, reducción y manejo del riesgo</strong>, con responsabilidades claras para alcaldías, gobernaciones y entidades nacionales. Entender esta ley es indispensable para cualquier ingeniero que trabaje en proyectos de infraestructura hídrica o en planificación territorial.</p>

      <h2>¿Qué establece la Ley 1523 para municipios y proyectos?</h2>
      <p>La ley define tres procesos fundamentales de la gestión del riesgo:</p>
      <ul>
        <li><strong>Conocimiento del riesgo:</strong> Comprende la identificación de los escenarios de riesgo (amenaza × exposición × vulnerabilidad), el análisis y evaluación del riesgo, y el monitoreo y seguimiento de su evolución. Aquí es donde se enmarcan los estudios de amenaza por inundación, movimientos en masa y avenidas torrenciales.</li>
        <li><strong>Reducción del riesgo:</strong> Incluye la intervención prospectiva (evitar que se generen nuevas condiciones de riesgo mediante la regulación del uso del suelo y los estándares constructivos) y la intervención correctiva (reducir el riesgo existente mediante obras de mitigación, reasentamientos y rehabilitación de ecosistemas).</li>
        <li><strong>Manejo del desastre:</strong> Preparación para la respuesta (planes de emergencia, sistemas de alerta temprana) y la recuperación post-desastre.</li>
      </ul>

      <h2>Estudios básicos de riesgo: obligación de las alcaldías</h2>
      <p>La Ley 1523 obliga a los municipios a incorporar en sus Planes de Ordenamiento Territorial (POT) los estudios básicos de amenaza, vulnerabilidad y riesgo para los principales fenómenos que pueden afectar el territorio. El Ministerio de Vivienda, Ciudad y Territorio publicó las <strong>Guías Técnicas de Soporte</strong> para la incorporación de la gestión del riesgo en el POT (2018), que especifican la metodología y el nivel de detalle requerido para cada tipo de amenaza.</p>
      <p>Para la amenaza por inundaciones y avenidas torrenciales, los estudios básicos exigen:</p>
      <ul>
        <li>Análisis hidrológico de las cuencas que atraviesan el municipio (caudales para Tr 10, 50 y 100 años como mínimo).</li>
        <li>Modelación hidráulica (preferiblemente 2D para llanuras de inundación) para definir las manchas de inundación a distintos períodos de retorno.</li>
        <li>Cartografía de amenaza con clasificación en categorías alta, media y baja, a escala mínima 1:25.000 para suelo rural y 1:5.000 para suelo urbano y de expansión.</li>
        <li>Análisis de vulnerabilidad de la infraestructura y la población expuesta.</li>
      </ul>

      <h2>Articulación con el POMCA y el SINPAD</h2>
      <p>Los Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA) son, según la Ley 1523, determinantes ambientales de obligatorio cumplimiento para los POT. El análisis de riesgo del POMCA debe ser incorporado por los municipios en sus instrumentos de planificación. Esto significa que si el POMCA de la cuenca del río Chinchiná (aprobado por CORPOCALDAS) zonifica ciertas áreas ribereñas como de amenaza alta, los municipios de esa cuenca están obligados a restringir el desarrollo urbano en esas áreas.</p>
      <p>El <strong>Sistema Nacional para la Prevención y Atención de Desastres (SINPAD)</strong>, operado por la UNGRD, es la plataforma donde se registran los eventos de emergencia y desastre. Los registros del SINPAD son una fuente invaluable de información sobre eventos históricos de inundación, que los modeladores hidráulicos utilizan para calibrar sus modelos.</p>

      <h2>Cómo impacta la Ley 1523 en la aprobación de licencias de construcción</h2>
      <p>A partir de la Ley 1523 y el <strong>Decreto 1807 de 2014</strong>, las Curadurías Urbanas de Colombia están obligadas a exigir estudios detallados de amenaza, vulnerabilidad y riesgo para cualquier licencia de urbanismo o construcción en suelos catalogados con amenaza media o alta en el POT municipal. Sin ese estudio técnico, la licencia no puede otorgarse. Esto hace que la contratación de estudios de riesgo hidráulico sea un requisito práctico —no solo teórico— para desarrollos inmobiliarios en zonas ribereñas o de montaña en Colombia.</p>
      <p><strong>BIC elabora estudios básicos de riesgo hidráulico para actualización de POT y para licencias de urbanismo, con cumplimiento total de la Ley 1523, el Decreto 1807 y las guías técnicas del MVCT.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'nsr10-titulo-j-incendios-colombia': {
    title: 'NSR-10 Título J: protección contra incendios en edificaciones — guía técnica para proyectos colombianos',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Contra Incendios',
    metaDesc: 'Análisis técnico del Título J del NSR-10 de Colombia: ocupaciones, clasificaciones de riesgo, sistemas requeridos, integración con la norma NFPA y proceso de aprobación ante curaduría.',
    keywords: 'NSR-10 Título J Colombia protección incendios, Título J NSR-10 rociadores Colombia, ocupaciones NSR-10 sistema incendio, NSR-10 contra incendio edificio Colombia',
    body: <>
      <p>El <strong>Título J de la NSR-10</strong> (Norma Sismo Resistente 2010, actualizada por el Decreto 945 de 2017) es el capítulo de la norma colombiana de construcción que regula la protección contra el fuego en las edificaciones. Para los proyectistas y constructoras que trabajan en Colombia, entender el Título J no es opcional: es el requisito que determina qué sistemas de protección contra incendio debe incluir cada proyecto, cuáles son las especificaciones mínimas, y cuál es el proceso de aprobación ante las autoridades de control.</p>

      <h2>Alcance del Título J: ¿qué edificaciones cubre?</h2>
      <p>El Título J aplica a todas las edificaciones nuevas que requieran licencia de construcción en Colombia, así como a las ampliaciones o modificaciones significativas de edificaciones existentes. Están incluidas:</p>
      <ul>
        <li>Edificaciones residenciales multifamiliares de más de tres pisos.</li>
        <li>Edificios de oficinas, negocios, hoteles y centros educativos.</li>
        <li>Centros comerciales, almacenes de grandes superficies y bodegas industriales.</li>
        <li>Hospitales, clínicas y edificios de salud.</li>
        <li>Parqueaderos cubiertos de más de dos niveles.</li>
      </ul>
      <p>Las viviendas unifamiliares y bifamiliares de hasta dos pisos generalmente quedan exentas de los requisitos del Título J, aunque deben cumplir los requisitos básicos de acceso para los equipos de bomberos.</p>

      <h2>Clasificación de ocupaciones y niveles de riesgo</h2>
      <p>El NSR-10 Título J clasifica las edificaciones según su <strong>ocupación</strong> (uso del inmueble), lo que determina el nivel de riesgo de incendio y los sistemas requeridos:</p>
      <ul>
        <li><strong>Uso A (Residencial):</strong> Viviendas, apartamentos, hoteles, hostales. Riesgo bajo a moderado.</li>
        <li><strong>Uso B (Negocios y oficinas):</strong> Oficinas, consultorios, bancos. Riesgo bajo.</li>
        <li><strong>Uso E (Educación):</strong> Colegios, universidades, jardines infantiles. Riesgo bajo con alta densidad de ocupantes.</li>
        <li><strong>Uso F (Industrial):</strong> Fábricas, talleres, plantas industriales. Riesgo variable, puede ser muy alto según el proceso productivo.</li>
        <li><strong>Uso I (Institucional):</strong> Hospitales, clínicas, cárceles. Riesgo alto por limitación de movilidad de los ocupantes.</li>
        <li><strong>Uso M (Mercantil/Almacenamiento):</strong> Centros comerciales, bodegas, supermercados. Riesgo medio a alto.</li>
        <li><strong>Uso S (Almacenamiento):</strong> Bodegas con mercancías variadas. El riesgo depende de la carga de fuego de los materiales almacenados.</li>
      </ul>

      <h2>Sistemas requeridos según ocupación y altura</h2>
      <p>La combinación de <strong>uso + área construida + número de pisos</strong> determina cuáles sistemas de protección contra incendio son obligatorios:</p>
      <ul>
        <li><strong>Detectores de humo y calor:</strong> Obligatorios en todas las edificaciones con Uso A de más de 3 pisos, y en cualquier uso con área mayor a 500 m².</li>
        <li><strong>Extintores portátiles:</strong> Obligatorios en todas las edificaciones cubiertas por el Título J, con la distribución y tipo que establece la NFPA 10.</li>
        <li><strong>Red de hidrantes interiores (gabinetes):</strong> Obligatoria en edificaciones de Uso A con más de 8 pisos; en Uso B, M, F y S con área por piso mayor a 1.000 m².</li>
        <li><strong>Sistema de rociadores automáticos:</strong> Obligatorio en edificaciones de Uso A con más de 12 pisos; en Uso B, M y S con área total mayor a 4.000 m²; en todos los parqueaderos cubiertos de más de 2 niveles o con área mayor a 2.000 m²; en hospitales de cualquier tamaño.</li>
        <li><strong>Red de hidrantes exteriores:</strong> Obligatoria en cualquier edificación con rociadores automáticos o en desarrollos urbanísticos de más de 5 hectáreas.</li>
      </ul>

      <h2>Relación con la norma NFPA 13 en la práctica colombiana</h2>
      <p>El Título J del NSR-10 establece los umbrales de obligatoriedad y los requisitos generales de los sistemas, pero para el diseño técnico detallado remite a las normas NFPA. En la práctica:</p>
      <ul>
        <li><strong>NFPA 13</strong> (Rociadores automáticos): El estándar de diseño hidráulico de referencia en Colombia para sistemas de rociadores.</li>
        <li><strong>NFPA 14</strong> (Hidrantes interiores y mangueras): Para el diseño de la red de gabinetes contra incendio.</li>
        <li><strong>NFPA 20</strong> (Bombas contra incendio): Para la selección y diseño de la bomba del sistema.</li>
        <li><strong>NFPA 72</strong> (Sistemas de alarma): Para los sistemas de detección y alarma de incendios.</li>
      </ul>

      <h2>Proceso de aprobación ante curaduría y bomberos</h2>
      <p>El sistema de protección contra incendio debe incluirse en los planos de la solicitud de licencia de construcción ante la Curaduría Urbana. Los documentos requeridos son: planos de la red con isométricos y detalles, memoria de cálculo hidráulico, y fichas técnicas de los equipos principales. Antes del permiso de ocupación, el Cuerpo de Bomberos verifica la instalación y expide el concepto de seguridad. Sin este concepto, el inmueble no puede ser ocupado ni destinado a su uso.</p>
      <p><strong>BIC diseña sistemas contra incendio con cumplimiento integral del NSR-10 Título J y las normas NFPA referenciadas, con memorias de cálculo hidráulico detalladas aceptadas por Curadurías y Cuerpos de Bomberos en Colombia.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'pomca-colombia': {
    title: 'POMCA en Colombia: impacto en proyectos de infraestructura hídrica y obligaciones municipales',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Normativa',
    metaDesc: 'Guía técnica sobre los Planes de Ordenación y Manejo de Cuencas Hidrográficas (POMCA) en Colombia: contenido, aprobación, efectos sobre POT y proyectos de infraestructura hídrica.',
    keywords: 'POMCA Colombia proyectos hidráulicos, Plan ordenación cuenca Colombia, POMCA POT articulación Colombia, CORPOCALDAS CARDER POMCA',
    body: <>
      <p>Si su proyecto de infraestructura hídrica se ubica dentro de una cuenca con Plan de Ordenación y Manejo de Cuencas Hidrográficas (POMCA) adoptado, ese documento no es un referente opcional que consultar: es un <strong>determinante ambiental de obligatorio cumplimiento</strong> que condiciona los usos del suelo, los caudales concesionables y las restricciones ambientales que aplican a su proyecto. En Colombia, la mayoría de las cuencas hidrográficas principales —incluyendo las del Eje Cafetero— tienen POMCA formulado o en proceso de actualización. Entender qué regula y cómo afecta los proyectos es indispensable para evitar sorpresas en el proceso de licenciamiento.</p>

      <h2>¿Qué es un POMCA y quién lo formula?</h2>
      <p>El <strong>Plan de Ordenación y Manejo de Cuencas Hidrográficas (POMCA)</strong> es el instrumento de planificación y administración de una cuenca hidrográfica que establece la gestión integral del recurso hídrico, el suelo y los demás recursos naturales. Lo formula y adopta la <strong>Corporación Autónoma Regional (CAR)</strong> con jurisdicción sobre la cuenca, en un proceso participativo que incluye a municipios, comunidades y actores sectoriales.</p>
      <p>El marco normativo es el <strong>Decreto 1076 de 2015</strong> (Decreto Único Reglamentario del Sector Ambiente), que integró el Decreto 1640 de 2012. Los POMCA deben actualizarse cada 10 años o cuando se presenten cambios significativos en las condiciones de la cuenca.</p>

      <h2>Estructura del POMCA: fases del proceso</h2>
      <ul>
        <li><strong>Aprestamiento:</strong> Identificación de actores, definición del área de la cuenca, recopilación de información secundaria y diseño de la estrategia de participación.</li>
        <li><strong>Diagnóstico:</strong> Caracterización detallada de los componentes de la cuenca: hidrológico (régimen de caudales, balance hídrico), físico-biótico (ecosistemas, biodiversidad), socioeconómico (población, actividades productivas), y gestión del riesgo (amenazas y vulnerabilidades).</li>
        <li><strong>Prospectiva:</strong> Definición de escenarios de futuro de la cuenca y selección del escenario apuesta concertado con los actores.</li>
        <li><strong>Formulación:</strong> Definición de la zonificación de la cuenca (áreas de preservación, restauración y uso sostenible) y de los programas y proyectos para alcanzar el escenario apuesta.</li>
        <li><strong>Ejecución, seguimiento y evaluación:</strong> Implementación de los programas y monitoreo de indicadores de seguimiento.</li>
      </ul>

      <h2>Implicaciones para proyectos de captación y acueducto</h2>
      <p>El POMCA es el instrumento que determina la <strong>disponibilidad del recurso hídrico</strong> en la cuenca. Sus implicaciones directas para proyectos de acueducto son:</p>
      <ul>
        <li><strong>Índice de Uso del Agua (IUA):</strong> El POMCA calcula el porcentaje del caudal medio anual que ya está concesionado o en uso. En cuencas con IUA alto (&gt;50%), las nuevas concesiones de agua son más difíciles de obtener y pueden ser condicionadas o negadas por la CAR.</li>
        <li><strong>Caudal ecológico:</strong> El POMCA establece el caudal mínimo ecológico que debe mantenerse en el cauce para garantizar el buen estado ecológico. Este caudal no puede ser concesionado y reduce el caudal disponible para la captación.</li>
        <li><strong>Restricciones en zonas de protección:</strong> El POMCA zonifica las áreas de nacimiento y ronda de los ríos como zonas de preservación estricta, donde no se permiten obras de infraestructura permanentes, incluyendo bocatomas.</li>
        <li><strong>Condicionamientos de la CAR:</strong> Cuando el IUA es crítico, la CAR puede imponer condicionamientos como sistemas de recirculación del agua o compensaciones de caudal aguas arriba.</li>
      </ul>

      <h2>Corporaciones del Eje Cafetero: CORPOCALDAS, CARDER y CRQ</h2>
      <p>En el Eje Cafetero, los POMCA son administrados por tres Corporaciones: <strong>CORPOCALDAS</strong> (departamento de Caldas), <strong>CARDER</strong> (Risaralda) y <strong>CRQ</strong> (Quindío). Las tres tienen POMCA adoptados o en actualización para las principales cuencas de la región. Antes de formular cualquier proyecto de acueducto o aprovechamiento hídrico en el Eje Cafetero, se debe consultar el estado del POMCA de la cuenca respectiva con la Corporación competente.</p>
      <p><strong>BIC conoce los POMCA del Eje Cafetero a profundidad y puede orientarle sobre los condicionamientos específicos que aplican a su proyecto antes de iniciar el diseño.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'decreto-1575-agua-colombia': {
    title: 'Decreto 1575 y Resolución 2115: calidad del agua potable en Colombia — guía para operadores de acueducto',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Normativa',
    metaDesc: 'Análisis técnico del Decreto 1575 de 2007 y la Resolución 2115 de 2007 sobre calidad de agua potable en Colombia: parámetros, frecuencias de muestreo, IRCA y responsabilidades de las ESPs.',
    keywords: 'Decreto 1575 Colombia calidad agua acueducto, Resolución 2115 2007 Colombia agua potable, parámetros calidad agua Colombia ESP, IRCA Decreto 1575 Colombia',
    body: <>
      <p>El <strong>Decreto 1575 de 2007</strong> y la <strong>Resolución 2115 de 2007</strong>, expedidos por los ministerios de la Protección Social y de Ambiente, Vivienda y Desarrollo Territorial, son las normas que regulan la calidad del agua para consumo humano en Colombia. Son el marco de referencia que deben conocer con profundidad los operadores de acueductos, los gerentes de ESPs, los alcaldes y los profesionales de salud pública que gestionan la calidad del agua en municipios colombianos. El incumplimiento de estas normas no solo expone a la comunidad a riesgos de salud: también acarrea responsabilidades legales y sanciones para los operadores.</p>

      <h2>Objeto y alcance del Decreto 1575 de 2007</h2>
      <p>El Decreto 1575 establece el sistema para la protección y control de la calidad del agua para consumo humano en Colombia, con el fin de monitorear, prevenir y controlar los riesgos para la salud humana causados por el consumo de agua. Aplica a todas las personas prestadoras del servicio público domiciliario de acueducto que suministren o distribuyan agua para consumo humano en el territorio nacional, independientemente de su tamaño o forma organizativa (empresa pública, empresa privada, asociación comunitaria o municipio directo).</p>

      <h2>Parámetros de calidad del agua y sus valores máximos permisibles</h2>
      <p>La Resolución 2115 de 2007 complementa el Decreto 1575 estableciendo las características, instrumentos básicos y frecuencias del sistema de control y vigilancia. Define tres grupos de parámetros:</p>
      <ul>
        <li><strong>Parámetros microbiológicos:</strong> Coliformes totales (0 UFC/100 mL), <em>Escherichia coli</em> (0 UFC/100 mL), Mesófilos aerobios (100 UFC/mL). La presencia de cualquier coliformes totales o <em>E. coli</em> en el agua de la red es una violación de la norma que activa la categoría de riesgo del IRCA.</li>
        <li><strong>Parámetros físicos:</strong> Color aparente (≤15 UPC), turbiedad (≤2 UNT), pH (6,5–9,0), conductividad eléctrica (≤1.000 µS/cm), olor y sabor (aceptables), temperatura (≤30 °C).</li>
        <li><strong>Parámetros químicos:</strong> Cloro residual libre (0,3–2,0 mg/L), flúor (0,7–1,2 mg/L), nitratos (≤10 mg/L NO₃-N), nitritos (≤0,1 mg/L NO₂-N). Para sistemas con cloración, el cloro residual libre mínimo de 0,3 mg/L es el indicador de que la desinfección está siendo efectiva en toda la red.</li>
      </ul>

      <h2>Frecuencias mínimas de muestreo</h2>
      <p>La Resolución 2115 establece la frecuencia mínima con que la ESP debe realizar muestreos de control de calidad, según el nivel de complejidad del sistema:</p>
      <ul>
        <li><strong>Nivel Bajo (I), ≤2.500 hab:</strong> 1 muestra mensual para coliformes y cloro residual; 1 muestra trimestral para parámetros físicos y químicos básicos.</li>
        <li><strong>Nivel Medio (II), 2.501–12.500 hab:</strong> 2–4 muestras mensuales para microbiológicos; análisis completo semestral.</li>
        <li><strong>Nivel Medio Alto (III), 12.501–60.000 hab:</strong> Muestras semanales para coliformes y cloro en múltiples puntos de la red.</li>
        <li><strong>Nivel Alto (IV), &gt;60.000 hab:</strong> Muestreo continuo de cloro residual y muestras diarias de coliformes en puntos críticos.</li>
      </ul>
      <p>Los laboratorios que realizan los análisis deben estar autorizados por el IDEAM. Los resultados deben reportarse periódicamente al <strong>SIVICAP (Sistema de Información de Vigilancia de la Calidad del Agua Potable)</strong> del INS.</p>

      <h2>Responsabilidades de la ESP, el MVCT y el INS</h2>
      <p>El sistema de control y vigilancia del Decreto 1575 opera en tres niveles: la <strong>ESP</strong> es responsable del control de calidad (muestreos periódicos y planes de mejoramiento cuando hay incumplimientos); el <strong>INS</strong> a través de las Secretarías de Salud ejerce la vigilancia epidemiológica; y el <strong>MVCT</strong> regula técnicamente el sector a través del RAS. La Superintendencia de Servicios Públicos ejerce la inspección, vigilancia y control, con potestad sancionatoria frente al incumplimiento.</p>
      <p><strong>¿Su ESP necesita apoyo técnico para cumplir el Decreto 1575 y reducir el IRCA? BIC elabora diagnósticos del sistema de tratamiento, planes de mejoramiento y ajuste de la operación.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'licencia-ambiental-anla-colombia': {
    title: 'Licencia ambiental ANLA para obras hidráulicas en Colombia: requisitos, estudios y proceso',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Normativa',
    metaDesc: 'Guía técnica sobre licencia ambiental ante la ANLA para obras hidráulicas en Colombia: proyectos que la requieren, estudios necesarios (EIA, PMA), trámites y tiempos.',
    keywords: 'licencia ambiental obras hidráulicas Colombia ANLA, EIA Colombia obras hidráulicas, trámite licencia ambiental acueducto Colombia, permisos ambientales obras hidráulicas',
    body: <>
      <p>Uno de los cuellos de botella más frecuentes en proyectos de infraestructura hídrica en Colombia es el proceso de licenciamiento ambiental. No entender cuándo se requiere licencia ante la <strong>ANLA</strong> (Autoridad Nacional de Licencias Ambientales) versus cuándo es suficiente un permiso ante la <strong>Corporación Autónoma Regional (CAR)</strong>, y no anticipar los estudios y tiempos que cada trámite requiere, puede dejar un proyecto paralizado por meses o años. Este artículo despeja esas dudas con base en el <strong>Decreto 1076 de 2015</strong> y la experiencia en proyectos de acueducto y aprovechamiento hídrico en Colombia.</p>

      <h2>¿Cuándo requiere licencia ambiental una obra hidráulica?</h2>
      <p>El Decreto 1076 de 2015 establece dos categorías de proyectos que requieren licencia ambiental:</p>
      <ul>
        <li><strong>Licencia ante la ANLA (proyectos de impacto nacional):</strong> Proyectos de aprovechamiento de aguas con captación superior a 2 m³/s de un mismo cauce; presas, represas o embalses con capacidad de almacenamiento mayor a 200 millones de m³; trasvases entre cuencas con caudal mayor a 2 m³/s; proyectos de irrigación que demanden más de 2 m³/s.</li>
        <li><strong>Licencia ante la CAR (proyectos de impacto regional o local):</strong> Acueductos que capten entre 0,1 y 2 m³/s; proyectos de aprovechamiento de aguas subterráneas con extracción mayor a 10 L/s; vertimientos de aguas residuales a cuerpos de agua; cualquier proyecto que modifique cauces naturales.</li>
      </ul>
      <p>La mayoría de los proyectos de acueducto municipal en Colombia caben en la segunda categoría (CAR), pero los proyectos de mayor envergadura —sistemas regionales, trasvases o proyectos de agua que atienden ciudades grandes— requieren licencia ante la ANLA.</p>

      <h2>Estudios requeridos: EIA y PMA</h2>
      <p>El instrumento central del proceso de licenciamiento es el <strong>Estudio de Impacto Ambiental (EIA)</strong>, que debe elaborarse siguiendo los <strong>Términos de Referencia</strong> que emite la ANLA o la CAR para el tipo de proyecto específico. Un EIA para obras hidráulicas en Colombia incluye:</p>
      <ul>
        <li><strong>Caracterización del área de influencia:</strong> Medio abiótico (geología, suelos, geomorfología, hidrología, calidad del agua), medio biótico (flora, fauna, ecosistemas acuáticos), y medio socioeconómico (comunidades, actividades productivas, patrimonio arqueológico).</li>
        <li><strong>Demanda de recursos naturales:</strong> Cuantificación de la captación de agua, aprovechamiento forestal (si hay tala de árboles), y uso del suelo.</li>
        <li><strong>Evaluación de impactos:</strong> Identificación y calificación de los impactos ambientales positivos y negativos del proyecto, usando metodologías matriciales o de redes de impacto.</li>
        <li><strong>Plan de Manejo Ambiental (PMA):</strong> Conjunto de programas y medidas de manejo para prevenir, mitigar, corregir o compensar los impactos identificados. Incluye programas de manejo de residuos, control de erosión, manejo del recurso hídrico durante la construcción, monitoreo ambiental y gestión social.</li>
      </ul>

      <h2>Permiso de concesión de aguas: trámite ante la CAR</h2>
      <p>Cualquier obra de captación de agua —bocatoma de acueducto, derivación para riego, aprovechamiento de agua subterránea— requiere <strong>concesión de aguas</strong> expedida por la CAR con jurisdicción sobre la cuenca. Este trámite es independiente de la licencia ambiental (aunque en proyectos grandes se tramitan simultáneamente) y es un requisito previo al inicio de la construcción.</p>
      <p>Para obtener la concesión, la CAR exige: estudio hidrológico que demuestre la disponibilidad del recurso, acreditación del caudal ecológico que quedará en el cauce, y en algunos casos, estudio de calidad del agua de la fuente. El tiempo promedio de tramitación de una concesión de aguas ante las CAR del Eje Cafetero es de 4–12 meses.</p>

      <h2>Tiempos reales del proceso: qué esperar</h2>
      <ul>
        <li><strong>EIA + licencia ante CAR:</strong> 6–18 meses desde la radicación del estudio completo.</li>
        <li><strong>EIA + licencia ante ANLA:</strong> 12–36 meses. La ANLA tiene un término legal de 90 días hábiles, pero los requerimientos de información adicional pueden extender significativamente el proceso.</li>
        <li><strong>Concesión de aguas (CAR):</strong> 4–12 meses.</li>
        <li><strong>Permiso de ocupación de cauce (CAR):</strong> 3–8 meses para obras menores; hasta 18 meses para proyectos complejos.</li>
      </ul>
      <p><strong>BIC acompaña procesos de licenciamiento ambiental ante la ANLA y las Corporaciones Autónomas del Eje Cafetero, desde la elaboración del EIA hasta la respuesta a los requerimientos de la autoridad ambiental.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'contratacion-publica-ingenieria-colombia': {
    title: 'Contratación pública para consultoras de ingeniería en Colombia: guía práctica desde la Ley 80',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Sector Público',
    metaDesc: 'Guía práctica sobre la Ley 80 de 1993 y estatuto de contratación para firmas consultoras de ingeniería en Colombia: RUP, SECOP II, selección abreviada, pliegos tipo y propuestas técnicas.',
    keywords: 'contratación pública ingeniería consultoría Colombia, RUP SECOP II Colombia consultoría, propuesta técnica licitación Colombia ingeniería, ley 80 Colombia consultoría',
    body: <>
      <p>Para las firmas consultoras de ingeniería en Colombia, la contratación pública es el principal mercado. Alcaldías, gobernaciones, ESPs públicas, Corporaciones Autónomas y entidades como el INVIAS y la ANI contratan permanentemente estudios de hidrología, hidráulica, diseño de acueductos, interventorías y formulación de proyectos. Pero el proceso de contratación pública en Colombia es complejo, altamente regulado y lleno de requisitos formales que, si no se cumplen a cabalidad, llevan al rechazo de propuestas que técnicamente podrían ser las mejores del proceso.</p>

      <h2>Marco legal: Ley 80, Decreto 1082 y Colombia Compra Eficiente</h2>
      <p>El estatuto general de la contratación pública en Colombia está conformado por:</p>
      <ul>
        <li><strong>Ley 80 de 1993</strong> (Estatuto General de Contratación de la Administración Pública): Define los principios, modalidades y obligaciones del sistema de contratación estatal.</li>
        <li><strong>Ley 1150 de 2007</strong>: Introdujo eficiencia y transparencia al proceso, estableciendo las modalidades de selección y los principios de publicidad.</li>
        <li><strong>Decreto 1082 de 2015</strong> (Decreto Único Reglamentario del Sector Administrativo de Planeación Nacional): Reglamenta integralmente el estatuto de contratación, incluyendo las modalidades de selección, los estudios previos y los pliegos de condiciones.</li>
        <li><strong>Colombia Compra Eficiente (CCE):</strong> La agencia estatal que publica los lineamientos del sistema, los documentos tipo y administra la plataforma SECOP II.</li>
      </ul>

      <h2>Registro Único de Proponentes (RUP): cómo clasificar su firma</h2>
      <p>Toda empresa que quiera contratar con el Estado colombiano debe estar inscrita en el <strong>Registro Único de Proponentes (RUP)</strong> de la Cámara de Comercio. El RUP certifica la capacidad jurídica, financiera, organizacional y la experiencia de la firma. Para consultoras de ingeniería hidráulica, las clasificaciones UNSPSC relevantes son:</p>
      <ul>
        <li><strong>71101500</strong> – Gestión de proyectos de construcción civil</li>
        <li><strong>71121500</strong> – Servicios de ingeniería hidrológica</li>
        <li><strong>71121600</strong> – Servicios de ingeniería hidráulica</li>
        <li><strong>71101700</strong> – Servicios de ingeniería ambiental</li>
      </ul>
      <p>El RUP debe renovarse anualmente y actualizarse cuando cambia la capacidad financiera o la experiencia de la firma. Un RUP desactualizado puede llevar al rechazo de la oferta antes de la evaluación técnica.</p>

      <h2>SECOP II: cómo encontrar oportunidades</h2>
      <p>El <strong>SECOP II</strong> (secop2.colombiacompra.gov.co) es la plataforma transaccional donde las entidades estatales publican todos sus procesos de contratación y donde los proponentes presentan sus ofertas electrónicamente. Para una firma consultora de ingeniería hidráulica, las búsquedas más relevantes en SECOP II son por clasificador UNSPSC (códigos 7112 para ingeniería hidráulica y ambiental) o por palabras clave como "estudio hidrológico", "diseño acueducto", "interventoría acueducto" o "formulación MGA".</p>

      <h2>Cómo estructurar una propuesta técnica ganadora</h2>
      <p>En los procesos de selección basados en calidad técnica (como la consultoría de estudios), la propuesta técnica es el elemento diferenciador. Los aspectos clave que evalúan los comités de selección:</p>
      <ul>
        <li><strong>Equipo de trabajo:</strong> La formación y experiencia específica de cada profesional propuesto deben superar el mínimo del pliego. Certificar experiencia con contratos verificables (no listas de proyectos sin soporte) es fundamental. Profesionales con maestría o doctorado suman puntos en muchos procesos.</li>
        <li><strong>Metodología:</strong> Debe demostrar comprensión del alcance del proyecto, un enfoque técnico claro (no genérico) y productos verificables. Una metodología copiada de propuestas anteriores sin adaptación al proyecto específico es fácilmente detectada por los evaluadores técnicos.</li>
        <li><strong>Cronograma:</strong> Realista, con la ruta crítica identificada y los hitos de entrega claramente definidos. Un cronograma con fechas imposibles de cumplir puede generar desconfianza o incumplimientos contractuales.</li>
      </ul>
      <p><strong>BIC participa activamente en contratación pública con resultados comprobados en el Eje Cafetero. Si necesita un socio técnico para fortalecer su propuesta o busca asociarse para un proceso específico, contáctenos.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

}

export default articlesC
