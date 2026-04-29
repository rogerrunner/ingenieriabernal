// Articles 1-3: Pre-written articles converted to TSX format
const articles1: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'irca-municipio-colombia': {
    title: 'Cómo bajar el IRCA de un municipio en Colombia: guía técnica para alcaldes y ESP',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Aprenda qué es el IRCA, por qué sube, cuáles son las causas más comunes en municipios colombianos y qué pasos concretos puede tomar para reducirlo. Información técnica con respaldo normativo.',
    keywords: 'cómo bajar el IRCA de un municipio Colombia, índice de riesgo de calidad del agua IRCA, IRCA alto qué hacer Colombia, calidad agua acueducto Colombia, Decreto 1575 2007',
    body: <>
      <p>Cuando el IRCA de su municipio aparece en los reportes del INS con categoría <strong>"alto"</strong> o <strong>"inviable sanitariamente"</strong>, el problema no es solo técnico: es político, legal y de salud pública al mismo tiempo. Las multas de la Superintendencia de Servicios Públicos pueden llegar, y lo que es peor, el agua que consume la comunidad representa un riesgo real.</p>
      <p>La pregunta que llega a los escritorios de alcaldes, gerentes de ESP y secretarios de salud es siempre la misma: <em>¿por dónde empezamos?</em> Este artículo le da una respuesta concreta.</p>

      <h2>Qué es el IRCA y cómo se calcula</h2>
      <p>El <strong>Índice de Riesgo de la Calidad del Agua para Consumo Humano (IRCA)</strong> es el indicador oficial que mide qué tan segura es el agua que distribuye un acueducto. Lo regula la <strong>Resolución 2115 de 2007</strong>, articulada con el <strong>Decreto 1575 de 2007</strong>. El cálculo toma entre 19 características fisicoquímicas y microbiológicas —turbidez, color aparente, cloro residual libre, coliformes totales y <em>E. coli</em>, entre otras— y les asigna un puntaje ponderado. El resultado se expresa en porcentaje de 0 a 100:</p>
      <ul>
        <li><strong>Sin riesgo (0–5):</strong> Agua apta para consumo humano</li>
        <li><strong>Riesgo bajo (5,1–14):</strong> Agua apta, vigilancia requerida</li>
        <li><strong>Riesgo medio (14,1–35):</strong> Agua no apta, gestión correctiva</li>
        <li><strong>Riesgo alto (35,1–80):</strong> Agua no apta, medidas inmediatas</li>
        <li><strong>Inviable sanitariamente (80,1–100):</strong> Riesgo gravísimo para la salud</li>
      </ul>
      <p>El IRCA no es un dato estático: se calcula con cada muestreo que realizan laboratorios autorizados y la información se reporta al <strong>Sistema de Información de la Vigilancia de la Calidad del Agua Potable (SIVICAP)</strong> del INS. Un municipio puede tener un IRCA diferente cada mes, dependiendo de la calidad de la operación del sistema.</p>

      <h2>Las causas más comunes de IRCA alto en municipios colombianos</h2>
      <p>Antes de diseñar un plan de acción, hay que entender por qué sube el indicador. En la práctica, las causas se agrupan en cinco categorías:</p>
      <ul>
        <li><strong>Contaminación microbiológica por déficit de desinfección:</strong> Es la causa número uno en municipios pequeños y rurales. El cloro residual llega al usuario por debajo del mínimo exigido (0,3 mg/L según la Resolución 2115), ya sea porque la dosificación es incorrecta, porque el sistema de cloración está en mal estado o porque hay tiempos de contacto insuficientes.</li>
        <li><strong>Alta turbidez en la fuente abastecedora:</strong> En el Eje Cafetero y zonas de ladera, las temporadas de lluvia elevan drásticamente la carga de sedimentos. Si la PTAP no tiene capacidad de coagulación-floculación-sedimentación adecuada, la turbidez superará los 2 UNT permitidos.</li>
        <li><strong>Infraestructura obsoleta o deteriorada:</strong> Redes antiguas con materiales inadecuados (asbesto-cemento, PVC de baja calidad), juntas deterioradas o tanques sin protección son puntos de recontaminación dentro del sistema de distribución.</li>
        <li><strong>Ausencia o debilidad del PGCAP:</strong> Muchos municipios incumplen la frecuencia de muestreo que exige la Resolución 2115. El <strong>Plan de Gestión de la Calidad del Agua Potable (PGCAP)</strong> es obligatorio pero en muchos municipios es un documento de archivo sin implementación real.</li>
        <li><strong>Problemas en la fuente de captación:</strong> Captaciones sin protección de microcuenca, explotaciones agropecuarias sin control, o vertimientos aguas arriba de la bocatoma comprometen la calidad desde el origen.</li>
      </ul>

      <h2>Pasos concretos para reducir el IRCA</h2>
      <p>Reducir el IRCA requiere un diagnóstico preciso antes que cualquier inversión. Estas son las acciones ordenadas por impacto y urgencia:</p>
      <ul>
        <li><strong>Paso 1 – Diagnóstico integral del sistema:</strong> No invierta sin datos. Un diagnóstico técnico debe cubrir estado de la fuente, condición de la PTAP, red de distribución (modelación hidráulica si aplica), capacidad del operador y registros históricos del SIVICAP.</li>
        <li><strong>Paso 2 – Ajuste inmediato de la desinfección:</strong> Si la causa es microbiológica, el ajuste del sistema de cloración puede mostrar resultados en semanas. Revisar dosificación, punto de aplicación y bombas de cloración es la intervención de menor costo y mayor retorno inmediato.</li>
        <li><strong>Paso 3 – Mejoras en la PTAP:</strong> Si la planta no tiene capacidad para manejar la turbiedad de la fuente, las opciones incluyen ajuste de dosis de coagulante, mejora de sistemas de mezcla rápida, revisión de decantadores y modernización de filtros. El RAS 2017 (Título C) es la referencia técnica obligatoria.</li>
        <li><strong>Paso 4 – Rehabilitación de redes prioritarias:</strong> Identifique los sectores de mayor recontaminación mediante modelación hidráulica y muestreos sectoriales. La sustitución de tramos críticos de red reduce el IRCA de distribución.</li>
        <li><strong>Paso 5 – Fortalecimiento del PGCAP y del operador:</strong> Actualice el PGCAP, capacite al equipo y asegure la frecuencia de muestreo según el rango de población del municipio.</li>
        <li><strong>Paso 6 – Protección de la microcuenca abastecedora:</strong> Los acuerdos con propietarios, las servidumbres de acueducto y los planes de manejo de microcuenca son inversiones de largo plazo que la mayoría de municipios posterga hasta que es demasiado tarde.</li>
      </ul>

      <h2>Cuándo necesita un estudio hidrológico o de calidad de agua</h2>
      <p>Hay situaciones en que el municipio necesita ir más allá de ajustes operativos y encargar estudios especializados:</p>
      <ul>
        <li><strong>IRCA recurrentemente alto pese a buena operación:</strong> puede ser señal de que la fuente está comprometida. Se requiere estudio de calidad de agua con monitoreo periódico.</li>
        <li><strong>Ampliación o reemplazo del sistema de potabilización:</strong> si el municipio va a formular un proyecto ante el SGR o el Ministerio de Vivienda, el diseño de la PTAP requiere estudio hidrológico de la fuente (caudales mínimos, curvas de duración, análisis de calidad).</li>
        <li><strong>Cuenca con alta variabilidad estacional:</strong> en zonas del Eje Cafetero y Pacífico, los caudales pueden variar en relaciones de 1 a 50 entre temporada seca y húmeda. Un estudio hidrológico determina el caudal de diseño confiable para la concesión.</li>
        <li><strong>Conflictos por el uso del agua:</strong> si hay múltiples usuarios aguas arriba y el municipio necesita defender su concesión ante la Corporación Autónoma Regional, un estudio técnico respaldado por datos es indispensable.</li>
      </ul>
      <p>Cada mes con IRCA alto es un mes en que la comunidad asume un riesgo de salud que no debería. Además, las autoridades sanitarias y la Superservicios tienen potestad de iniciar procesos sancionatorios. La mayoría de los municipios colombianos con IRCA alto pueden mejorar significativamente su indicador con intervenciones de mediana inversión, siempre que el diagnóstico sea correcto y las soluciones estén bien formuladas.</p>
      <p><strong>¿Su municipio tiene IRCA alto y necesita un diagnóstico técnico o un proyecto para el SGR?</strong> En BIC hemos trabajado con municipios del Eje Cafetero y otras regiones del país en la identificación de causas y la formulación de proyectos de mejoramiento de agua potable. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'mga-web-regalias-agua-potable': {
    title: 'Formulación de proyectos de agua potable con regalías y MGA Web en Colombia: cómo no perder el cupo',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Regalías SGR',
    metaDesc: 'Guía práctica para alcaldes, secretarios de planeación y gestores del SGR sobre cómo formular proyectos de acueducto en la MGA Web sin cometer los errores que hacen devolver los proyectos.',
    keywords: 'formulación proyectos agua potable regalías MGA Web Colombia, proyectos acueducto SGR Colombia, MGA Web agua potable municipios, Sistema General de Regalías agua, OCAD proyectos acueducto',
    body: <>
      <p>Cada bienio del Sistema General de Regalías (SGR) hay municipios que llegan a los OCAD con proyectos de agua potable que parecen listos, y que son devueltos. No por falta de necesidad —esa existe y está documentada—, sino porque la formulación tiene vacíos técnicos, inconsistencias financieras o documentos de soporte que no cumplen con lo que exige el DNP. El resultado es doble: el municipio pierde tiempo de gestión que no tiene, y la comunidad sigue sin acceso a agua potable de calidad.</p>

      <h2>Qué exige el SGR para proyectos de agua potable y saneamiento</h2>
      <p>El SGR financia proyectos de inversión en sectores prioritarios. El agua potable y el saneamiento básico son de los más relevantes en municipios de categoría 4, 5 y 6, y en zonas rurales dispersas. Sin embargo, la financiación no es automática: el proyecto debe cumplir un conjunto de requisitos que van desde la identificación del problema hasta la viabilidad técnica, financiera, ambiental y jurídica.</p>
      <ul>
        <li><strong>Elegibilidad:</strong> El proyecto debe estar inscrito en el Banco de Proyectos del municipio o departamento, contar con concepto de viabilidad sectorial y no tener proyectos aprobados pendientes de ejecución sin justificación.</li>
        <li><strong>Requisitos técnicos:</strong> Diagnóstico del sistema existente con datos verificables (cobertura, continuidad, calidad IRCA, pérdidas), alternativas de solución evaluadas, diseños básicos acordes al RAS 2017 y presupuesto detallado con análisis de precios unitarios.</li>
        <li><strong>Requisitos ambientales y prediales:</strong> Si el proyecto afecta cuerpos de agua o implica nuevas captaciones, requiere permiso o concesión de agua ante la Corporación Autónoma Regional. Los proyectos que requieren licencia ambiental ante la ANLA deben anticipar procesos que pueden tardar meses.</li>
        <li><strong>Formulación en MGA Web:</strong> La MGA Web no es solo un formulario en línea, es la estructura lógica del proyecto. Cada módulo —identificación, preparación, evaluación y programación— debe ser internamente consistente. Un error en la cadena de valor hace que el proyecto sea devuelto desde el concepto técnico del DNP.</li>
      </ul>

      <h2>Los errores más comunes en la formulación MGA Web para agua potable</h2>
      <ul>
        <li><strong>Error 1 – Diagnóstico sin datos primarios:</strong> La MGA Web exige cuantificar el problema. Si el municipio pone "el 40% de la población no tiene acceso a agua potable" sin mostrar de dónde sale ese dato, el revisor lo cuestionará. Los datos deben provenir de fuentes verificables: censo DANE, encuestas aplicadas, reportes del SIVICAP, balances hídricos de la PTAP.</li>
        <li><strong>Error 2 – Alternativas no evaluadas comparativamente:</strong> La MGA requiere presentar al menos dos alternativas y justificar por qué se seleccionó la óptima. Esto implica comparar, por ejemplo, mejora de la PTAP existente versus nueva planta, con evaluación técnica y económica (relación costo-beneficio o costo-eficiencia).</li>
        <li><strong>Error 3 – Presupuesto sin soporte de diseño:</strong> Un proyecto con presupuesto de 2.000 millones de pesos que no tiene planos de diseño básico ni memoria de cálculo es inviable en revisión. Los precios unitarios deben referenciarse en el banco de precios del municipio o departamento.</li>
        <li><strong>Error 4 – Indicadores desconectados de la cadena de valor:</strong> Si el proyecto plantea construir 5 km de red de distribución, el indicador debe decir exactamente eso, con unidad de medida correcta y metas por año de ejecución. Indicadores genéricos no pasan el filtro.</li>
        <li><strong>Error 5 – No anticipar cuellos de botella ambientales y prediales:</strong> Proyectos que llegan a OCAD sin la concesión de agua tramitada, o sin haber iniciado la gestión predial, generan condicionamientos que retrasan o bloquean el desembolso. Algunos trámites toman entre 6 y 18 meses.</li>
        <li><strong>Error 6 – Sostenibilidad financiera del operador no demostrada:</strong> El SGR exige que el proyecto sea sostenible en el tiempo. Si la ESP o el municipio no puede demostrar capacidad operativa y financiera para mantener la infraestructura, el proyecto puede ser condicionado o negado.</li>
      </ul>

      <h2>Cómo un consultor especializado acelera el proceso</h2>
      <p>La formulación de un proyecto de agua potable en la MGA Web requiere conocimiento simultáneo de ingeniería sanitaria e hidráulica, normativa del sector (RAS 2017, Decreto 1575, Decreto 1467 del SGR) y la lógica interna de la MGA. Un equipo consultor especializado aporta:</p>
      <ul>
        <li><strong>Diagnóstico técnico de campo:</strong> levantamiento real del estado del sistema, no solo revisión de documentos. Incluye aforos, muestreos de calidad, inspección de infraestructura e identificación de pérdidas.</li>
        <li><strong>Diseño básico soportado:</strong> los diseños no tienen que ser los definitivos, pero sí deben ser suficientes para justificar el presupuesto. Un consultor con experiencia sabe hasta qué nivel de detalle llegar para cumplir los requisitos sin incurrir en costos innecesarios en esta fase.</li>
        <li><strong>Gestión de permisos y licencias:</strong> acompañamiento en la solicitud de concesión de agua, permiso de vertimientos o trámites ante la ANLA o la CAR, con tiempos realistas integrados al cronograma del proyecto.</li>
        <li><strong>Formulación MGA consistente:</strong> la cadena de valor, los indicadores, el presupuesto y el cronograma deben ser un solo documento coherente. Un error de consistencia interna puede devolver el proyecto meses después de presentado.</li>
      </ul>

      <h2>Casos típicos que BIC ha resuelto</h2>
      <p><strong>Municipio con IRCA alto y proyecto devuelto:</strong> El proyecto original tenía diagnóstico incompleto y presupuesto sin soporte. El trabajo de reformulación incluyó muestreos de calidad del agua, revisión del sistema de desinfección y rediseño de la PTAP con base en el RAS 2017. El proyecto ajustado fue aprobado en el siguiente OCAD.</p>
      <p><strong>Proyecto de ampliación de acueducto rural sin concesión de agua:</strong> La concesión ante la CAR no había sido tramitada. Identificamos la situación a tiempo, iniciamos el trámite con los estudios hidrológicos requeridos y formulamos el proyecto con la concesión como condición suspensiva claramente documentada.</p>
      <p><strong>Presupuesto subestimado en fase de formulación:</strong> Un municipio llegó con estimaciones de costo muy por debajo de lo real para una línea de conducción de 12 km. La revisión técnica con análisis de precios unitarios actualizados permitió formular con un presupuesto realista, evitando adiciones posteriores que habrían puesto en riesgo la ejecución.</p>
      <p><strong>¿Tiene un proyecto de agua potable o saneamiento básico que necesita formulación o ajuste para el SGR?</strong> Un diagnóstico previo puede evitar meses de retrasos. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'hec-ras-2d-modelacion-hidraulica-colombia': {
    title: 'Contratar modelación hidráulica HEC-RAS 2D en Colombia: qué debe exigirle a su consultor',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Software y Modelación',
    metaDesc: 'Guía técnica para constructoras, promotores e ingenieros de proyectos sobre qué es la modelación HEC-RAS 2D, cuándo es obligatoria en Colombia, qué debe entregarse y por qué la calibración define la validez del modelo.',
    keywords: 'contratar modelación hidráulica HEC-RAS 2D Colombia, modelación HEC-RAS 2D para licencia ambiental, estudio hidráulico para permiso ANLA, HEC-RAS 2D zonas inundación Colombia',
    body: <>
      <p>Si está gestionando una licencia ambiental, un plan parcial de desarrollo urbano o un diseño de obras de protección contra inundaciones, es probable que alguien ya le haya mencionado el HEC-RAS 2D. Y es probable también que el primer presupuesto que recibió fuera difícil de evaluar porque no tenía claro qué incluye un modelo bien hecho versus uno que solo parece serlo. Este artículo es para ingenieros de proyectos, interventores técnicos, constructoras y promotores que necesitan contratar una modelación hidráulica y quieren saber exactamente qué están comprando.</p>

      <h2>Qué es la modelación HEC-RAS 2D y cuándo es obligatoria</h2>
      <p>HEC-RAS (Hydrologic Engineering Center – River Analysis System) es el software de modelación hidráulica desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos (USACE). Es la herramienta de referencia técnica a nivel mundial y en Colombia es la más usada —y en muchos casos exigida— para análisis de inundaciones y diseño de obras hidráulicas.</p>
      <p>La modelación hidráulica 2D no está codificada en una única norma, pero los términos de referencia de la ANLA y las exigencias de las Corporaciones Autónomas Regionales la requieren en varios escenarios:</p>
      <ul>
        <li><strong>Licencias ambientales</strong> para proyectos que implican intervención de rondas hídricas, ocupación de cauce o derivación de aguas (Decreto 1076 de 2015).</li>
        <li><strong>Permisos de ocupación de cauce</strong> cuando se construyen puentes, box-culverts, muros de encauzamiento o cualquier estructura que modifique la sección hidráulica.</li>
        <li><strong>Planes parciales de desarrollo urbano</strong> en zonas con amenaza de inundación, donde la Ley 388 de 1997 y el POT exigen delinear la ronda hídrica y las áreas de protección.</li>
        <li><strong>Estudios de amenaza por inundación</strong> para incorporar zonas al Plan Municipal de Gestión del Riesgo de Desastres, según la Ley 1523 de 2012.</li>
        <li><strong>Diseño de obras de control de inundaciones</strong> como diques, canales de alivio o presas de control de sedimentos.</li>
      </ul>

      <h2>Diferencia entre HEC-RAS 1D y HEC-RAS 2D</h2>
      <p>El <strong>modelo 1D</strong> simula el flujo a lo largo del eje del cauce. Calcula niveles de agua, caudales y velocidades en secciones transversales definidas manualmente. Es adecuado para cauces bien definidos, canales con geometría simple y estudios donde la planicie de inundación es estrecha.</p>
      <p>El <strong>modelo 2D</strong> simula el flujo sobre toda la superficie del terreno mediante una malla de celdas. Captura la dirección real del flujo en zonas de llanura, el efecto de barreras transversales (vías, terraplenes, edificaciones) y los patrones de inundación con detalle espacial. Es imprescindible cuando: la llanura de inundación es amplia, hay estructuras que modifican la dirección del flujo, se requiere calcular calados y velocidades sobre toda la planicie, o la ANLA o la CAR exige la delimitación de zonas de amenaza con categorías sobre toda el área de influencia.</p>

      <h2>Qué entrega un modelo HEC-RAS 2D completo</h2>
      <ul>
        <li><strong>Informe técnico con memoria de cálculo:</strong> descripción de la metodología, fuentes de información, hipótesis del modelo, criterios de diseño y análisis de resultados. Debe ser reproducible.</li>
        <li><strong>Análisis hidrológico:</strong> caudales de entrada calculados para períodos de retorno de 2,33, 5, 10, 25, 50, 100 y hasta 500 años, según lo que exija el proyecto.</li>
        <li><strong>Topografía y batimetría de alta resolución:</strong> Modelo Digital de Elevación (MDE) con resolución mínima de 1 metro, obtenido idealmente de vuelo LIDAR. En zonas de cauce activo, la batimetría es indispensable.</li>
        <li><strong>Construcción y configuración de la malla computacional:</strong> definición del dominio 2D, tamaño de celdas adaptado a la geometría del terreno, condiciones de contorno.</li>
        <li><strong>Calibración y validación del modelo:</strong> el punto crítico que separa un modelo válido de uno que es solo una imagen convincente.</li>
        <li><strong>Resultados espaciales procesados:</strong> mapas de inundación para cada período de retorno, con calados, velocidades y zonificación de amenaza (alta, media, baja) en formato SIG.</li>
        <li><strong>Análisis de escenarios:</strong> comparación entre situación sin proyecto y con proyecto, demostración del efecto de las obras propuestas.</li>
      </ul>

      <h2>Por qué la calibración del modelo es crítica</h2>
      <p>Calibrar un modelo hidráulico significa ajustar sus parámetros (principalmente la rugosidad del cauce y la llanura, representada por el coeficiente de Manning) hasta que el modelo reproduce eventos históricos de inundación con datos observados. Sin calibración, el modelo puede estar produciendo resultados con errores del 30, 50 o más por ciento en los niveles calculados, y nadie lo sabrá mirando los mapas de inundación.</p>
      <p>Para calibrar se necesitan registros de niveles históricos (marcas de inundación en estructuras, datos de limnígrafos del IDEAM), eventos de calibración y validación independientes, y criterios de aceptación claros (diferencia entre nivel observado y calculado no mayor a 10-15 cm en zonas de cauce). Si el proyecto no tiene datos históricos suficientes, el estudio debe documentar explícitamente la incertidumbre del modelo y aplicar análisis de sensibilidad.</p>
      <p><strong>Un modelo sin calibración no es un modelo: es una simulación sin validación.</strong> Y una simulación sin validación no debería soportar decisiones de diseño de obras, delimitaciones de ronda hídrica ni argumentos ante la ANLA. Cuando contrate un estudio hidráulico, exija ver el proceso de calibración.</p>
      <p><strong>¿Tiene un proyecto que requiere modelación hidráulica HEC-RAS 2D para licencia ambiental, diseño de obras o zonificación de amenaza?</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },


  'cuando-se-requiere-hec-ras-colombia': {
    title: '¿Cuándo se requiere modelación hidráulica HEC-RAS en Colombia? Guía normativa completa',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Software y Modelación',
    metaDesc: 'Guía normativa completa sobre cuándo es obligatorio el modelo hidráulico HEC-RAS en Colombia: POT, licencias, planes parciales, Decreto 1807/2014, RAS 2017. Diferencias 1D vs 2D y entregables.',
    keywords: 'modelación HEC-RAS Colombia obligatorio, cuando se requiere HEC-RAS Colombia, RAS 2017 modelación hidráulica, Decreto 1807 2014 HEC-RAS, estudio hidráulico Colombia normativa',
    body: <>
      <p>En Colombia, el nombre HEC-RAS aparece cada vez con más frecuencia en los términos de referencia de alcaldías, curadurías urbanas, Corporaciones Autónomas Regionales (CAR) y entidades del Ministerio de Vivienda. Sin embargo, muchos profesionales, constructoras y municipios no tienen claro cuándo es exactamente obligatorio contratar este tipo de estudio, qué diferencia hace usar un modelo 1D o 2D, y qué entregables debe exigir al consultor. Esta guía responde todas esas preguntas con referencia directa a la normativa vigente.</p>

      <h2>¿Qué es la modelación hidráulica con HEC-RAS?</h2>
      <p>HEC-RAS (Hydrologic Engineering Center – River Analysis System) es el software de modelación hidráulica desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos (USACE). Permite simular el comportamiento del agua en cauces, ríos y planicies de inundación bajo diferentes condiciones de caudal, determinar los niveles de inundación para distintos períodos de retorno, y evaluar el efecto de obras de infraestructura sobre el régimen hidráulico.</p>
      <p>En Colombia es la herramienta de referencia para estudios de amenaza hídrica y diseño de obras fluviales, y su uso está implícitamente exigido por varias normas que requieren "modelación hidráulica" o "determinación de manchas de inundación" sin especificar el software — aunque en la práctica los revisores técnicos de CORPOCALDAS, CARDER, CVC y las Curadurías aceptan principalmente modelos en HEC-RAS o Iber.</p>

      <h2>Marco normativo: cuándo es obligatorio el modelo hidráulico</h2>
      <p>No existe un único decreto que diga "use HEC-RAS". La obligatoriedad surge de la combinación de varias normas que exigen caracterizar la amenaza hídrica, delimitar rondas hídricas o demostrar que una obra no agrava el régimen de inundación. Los escenarios más frecuentes son:</p>

      <h2>1. Planes de Ordenamiento Territorial — Ley 388 de 1997 y Decreto 1807 de 2014</h2>
      <p>El <strong>Decreto 1807 de 2014</strong> es la norma central que regula la incorporación del riesgo hídrico en los instrumentos de ordenamiento territorial. Establece dos niveles de estudio:</p>
      <ul>
        <li><strong>Estudios básicos:</strong> Obligatorios para la revisión o formulación de todos los POT y EOT del país. Deben identificar las zonas con amenaza por inundación a escala 1:25.000 o 1:10.000. Incluyen análisis hidrológico y modelación hidráulica simplificada del régimen de caudales.</li>
        <li><strong>Estudios detallados:</strong> Obligatorios para suelos de expansión urbana, suelo suburbano y áreas con amenaza media o alta identificadas en los estudios básicos. Exigen modelación hidráulica HEC-RAS 2D (o equivalente) a escala 1:2.000 o 1:5.000, con generación de manchas de inundación para Tr 10, 25, 50 y 100 años y concepto de aptitud urbanística.</li>
      </ul>
      <p>En la práctica, cualquier municipio que esté revisando su POT o formulando un EOT necesita un estudio básico de amenaza hídrica con modelación. Los municipios del Eje Cafetero, con ríos activos y cuencas de respuesta rápida, casi siempre requieren estudios detallados en sus zonas urbanas.</p>

      <h2>2. Licencias de urbanismo en zonas con amenaza — Decreto 1807 de 2014</h2>
      <p>Para obtener una licencia de urbanismo en predios ubicados en suelo de expansión, suburbano o rural que colinden con cauces o que tengan amenaza hídrica identificada en el POT, el tramitador debe presentar un <strong>estudio de amenaza y riesgo hídrico detallado</strong> ante la Curaduría Urbana o la oficina de planeación municipal. Sin este estudio, la licencia no puede expedirse.</p>
      <p>Las Curadurías de Manizales, Pereira, Armenia y Bogotá tienen criterios estrictos sobre la escala, el contenido y la firma del profesional que elabora el estudio. Exigen modelo hidráulico calibrado, cartografía SIG y concepto de aptitud urbanística firmado por ingeniero con tarjeta COPNIA vigente.</p>

      <h2>3. Diseño de acueductos y obras de drenaje — RAS 2017</h2>
      <p>El <strong>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017, Resolución 0330 de 2017)</strong> exige modelación hidráulica en varios componentes del diseño de sistemas de agua y saneamiento:</p>
      <ul>
        <li>Diseño de bocatomas y obras de captación: el perfil hidráulico del cauce y la curva de duración de caudales deben determinarse con análisis hidrológico-hidráulico que justifique la cota de captación y el caudal de diseño.</li>
        <li>Diseño de obras de cruce de cauces (puentes, sifones): el caudal de diseño y el nivel de aguas máximas extraordinarias (NAME) deben calcularse con modelo hidráulico.</li>
        <li>Diseño de sistemas de alcantarillado pluvial: el RAS 2017 Título D exige verificación hidráulica de estructuras con criterios de período de retorno según el nivel de complejidad del sistema.</li>
      </ul>

      <h2>4. Permisos ambientales — Decreto 1076 de 2015</h2>
      <p>Los proyectos que requieren licencia ambiental ante la ANLA o permiso de ocupación de cauce ante la CAR deben presentar un análisis de alteración del régimen hidráulico del cuerpo de agua intervenido. En términos prácticos, esto significa:</p>
      <ul>
        <li>Para puentes y box-culverts: verificación de que la obra no produce represamiento significativo ni incremento de velocidades que genere erosión aguas abajo.</li>
        <li>Para obras de encauzamiento y dragados: modelación antes y después de la intervención para demostrar que la sección hidráulica resultante tiene capacidad para el caudal de diseño sin generar inundaciones en predios vecinos.</li>
        <li>Para obras de derivación y trasvases: cálculo del caudal ecológico y verificación del nivel mínimo aguas abajo de la captación.</li>
      </ul>

      <h2>5. Gestión del riesgo municipal — Ley 1523 de 2012</h2>
      <p>La <strong>Ley 1523 de 2012</strong> establece como obligación de todos los municipios colombianos la formulación y actualización permanente del <strong>Plan Municipal de Gestión del Riesgo (PMGR)</strong>. El componente de riesgo hídrico de este plan — que debe identificar zonas de inundación, estimar la probabilidad de afectación y proponer medidas de reducción del riesgo — requiere modelación hidráulica para ser técnicamente válido ante la UNGRD, el DNP y las contralorías que auditan los recursos del SGR.</p>

      <h2>Diferencia entre HEC-RAS 1D y HEC-RAS 2D: cuándo usar cada uno</h2>
      <p>El <strong>modelo 1D</strong> simula el flujo a lo largo del eje longitudinal del cauce mediante secciones transversales. Es adecuado cuando el cauce está bien definido, la planicie de inundación es estrecha y el flujo no cambia significativamente de dirección. Costo computacional bajo, resultados rápidos. Apropiado para: diseño de puentes y alcantarillas, perfiles hidráulicos de acueductos, diseño de canales.</p>
      <p>El <strong>modelo 2D</strong> simula el flujo sobre toda la superficie del terreno mediante una malla computacional. Captura la dirección real del flujo sobre la llanura de inundación, el efecto de barreras transversales (vías, edificaciones, terraplenes) y la distribución espacial de calados y velocidades. Es obligatorio cuando la Curaduría o la CAR exigen manchas de inundación categorizadas (amenaza alta, media, baja) sobre el área de estudio, o cuando hay estructuras que modifican el patrón de flujo sobre la llanura.</p>
      <p>Una solución intermedia es el <strong>modelo acoplado 1D-2D</strong>, donde el cauce principal se modela en 1D (con buena batimetría) y la llanura en 2D. Es computacionalmente eficiente y técnicamente apropiado para ríos grandes con planicie amplia.</p>

      <h2>Entregables típicos de un modelo HEC-RAS bien ejecutado</h2>
      <ul>
        <li><strong>Informe técnico completo:</strong> descripción de la metodología, fuentes de datos, análisis hidrológico previo (HEC-HMS o método racional), criterios de calibración y análisis de resultados.</li>
        <li><strong>Modelo digital de elevación (MDE):</strong> topobatimetría de precisión del cauce y la planicie, con resolución mínima de 1 m en zonas urbanas.</li>
        <li><strong>Modelo HEC-RAS calibrado y validado:</strong> archivos del proyecto con geometría, condiciones de contorno e hidrogramas de entrada. La calibración contra eventos históricos es indispensable.</li>
        <li><strong>Mapas de amenaza hídrica en SIG:</strong> manchas de inundación para Tr 10, 25, 50, 100 y 500 años según el nivel de estudio. Polígonos de amenaza alta, media y baja en formato shapefile o GeoJSON.</li>
        <li><strong>Concepto de aptitud urbanística:</strong> cuando el estudio soporta un plan parcial o licencia de urbanismo, el informe debe concluir qué zonas son aptas, condicionadas o no aptas para urbanización.</li>
        <li><strong>Análisis de medidas de mitigación:</strong> si se proponen obras de reducción del riesgo, el modelo debe comparar los escenarios antes y después de la intervención.</li>
      </ul>

      <h2>Plazos y costos orientativos en Colombia (2026)</h2>
      <p>Los costos varían según la extensión del área de estudio, la disponibilidad de topobatimetría existente y el tipo de entregable requerido:</p>
      <ul>
        <li><strong>Estudio 1D para diseño de puente o alcantarilla:</strong> $6–$18 millones COP · plazo 3–4 semanas</li>
        <li><strong>Estudio 2D para plan parcial (&lt;20 ha):</strong> $18–$40 millones COP · plazo 4–6 semanas</li>
        <li><strong>Estudio básico para POT municipal (cuenca principal):</strong> $30–$70 millones COP · plazo 6–10 semanas</li>
        <li><strong>Estudio detallado para licencia ambiental (ANLA):</strong> $50–$120 millones COP · plazo 8–14 semanas</li>
        <li><strong>Análisis de torrencialidad para PMGR (8 municipios):</strong> $80–$200 millones COP · plazo 12–20 semanas</li>
      </ul>
      <p>Los plazos incluyen el levantamiento topobatimétrico de campo cuando no existe información previa. Si el cliente provee el MDE con resolución suficiente, los plazos se reducen entre 2 y 4 semanas.</p>

      <h2>Conclusión: contratar bien desde el principio ahorra tiempo y dinero</h2>
      <p>Un modelo HEC-RAS mal ejecutado — sin calibración, con topografía insuficiente o con períodos de retorno incorrectos — no superará la revisión técnica de la Curaduría, la CAR o el DNP. El costo de rehacer un modelo es siempre mayor que el de hacerlo bien desde el principio. Antes de contratar, exija ver al menos dos estudios similares ejecutados en la misma región, el proceso de calibración documentado y una propuesta técnica que especifique las estaciones hidrológicas del IDEAM que se consultarán.</p>
      <p>BIC — Bernal Ingeniería Consultores ha ejecutado modelos HEC-RAS 2D para municipios del Eje Cafetero, planes parciales en Dosquebradas y Manizales, y análisis de torrencialidad para 8 municipios simultáneamente. Todos los modelos están calibrados y han sido aceptados por CORPOCALDAS, CARDER y las Curadurías Urbanas de la región. <strong>Contacte a BIC: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'diseno-redes-hidrosanitarias-nsr-10-colombia': {
    title: 'Diseño de redes hidrosanitarias según NSR-10: requisitos, normas y proceso paso a paso',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía técnica completa sobre el diseño de redes hidrosanitarias en Colombia según NSR-10, NTC 1500 y RAS 2017: método Hunter, sistemas de presión, documentos para licencia de construcción.',
    keywords: 'diseño redes hidrosanitarias NSR-10 Colombia, instalaciones hidráulicas edificaciones Colombia, NTC 1500 diseño fontanería Colombia, método Hunter cálculo hidrosanitario, memoria hidrosanitaria licencia construcción',
    body: <>
      <p>Cada vez que se construye un edificio residencial, un centro comercial, una clínica o una planta industrial en Colombia, alguien debe diseñar las redes internas de agua: las tuberías que llevan agua fría y caliente a cada punto de consumo, las redes de desagüe de aguas residuales y las bajantes de aguas lluvias. Este diseño no es opcional ni puede hacerse sin metodología: la normativa colombiana es explícita sobre quién puede firmarlo, qué debe calcular y qué documentos entrega para el trámite de licencia de construcción. Esta guía explica el proceso completo.</p>

      <h2>¿Qué dice la NSR-10 Título I sobre instalaciones hidrosanitarias?</h2>
      <p>La <strong>Norma Sismo Resistente NSR-10</strong>, adoptada mediante el Decreto 926 de 2010 (actualizado por Decretos 945/2017 y 2555/2010), dedica el <strong>Título I</strong> a las instalaciones hidráulicas, sanitarias, gas y ventilación en edificaciones. Este título establece:</p>
      <ul>
        <li><strong>Responsabilidad profesional:</strong> Las memorias de diseño de instalaciones hidráulicas deben ser elaboradas y firmadas por un ingeniero civil o sanitario con tarjeta profesional COPNIA vigente. Sin esta firma, la curaduría urbana no acepta el expediente de licencia de construcción.</li>
        <li><strong>Alcance del diseño:</strong> Incluye redes de suministro de agua potable (fría y caliente), redes de evacuación de aguas residuales domésticas, redes de aguas lluvias y sistemas de presión.</li>
        <li><strong>Remisión a normas técnicas:</strong> La NSR-10 Título I remite explícitamente a la <strong>NTC 1500</strong> (Código Colombiano de Fontanería) para los criterios técnicos de diseño y a la <strong>NTC 1669</strong> para instalaciones de gas. Para edificaciones de uso industrial, aplica adicionalmente la <strong>NTC 2301</strong>.</li>
        <li><strong>Coordinación con estructura:</strong> Las tuberías y sus soportes deben diseñarse para resistir las fuerzas sísmicas definidas en el Título A de la NSR-10, especialmente en zonas de amenaza sísmica alta e intermedia (la mayor parte del territorio colombiano).</li>
      </ul>

      <h2>NTC 1500 vs NTC 1669: diferencias y alcance</h2>
      <p>Una confusión frecuente en el gremio constructor es la diferencia entre estas dos normas, que a menudo se mencionan juntas pero tienen objetos distintos:</p>
      <ul>
        <li><strong>NTC 1500 — Código Colombiano de Fontanería:</strong> Es la norma de referencia para el diseño e instalación de sistemas de suministro de agua potable (agua fría y caliente sanitaria) y sistemas de evacuación de aguas residuales en edificaciones. Define los materiales aceptados (PVC, CPVC, PPR, cobre), los diámetros mínimos para cada tipo de aparato sanitario, los métodos de cálculo de caudal simultáneo (incluyendo el método Hunter), las presiones mínimas y máximas en los puntos de consumo, y los requisitos de instalación.</li>
        <li><strong>NTC 1669 — Instalaciones de gas combustible:</strong> Regula el diseño e instalación de redes de distribución de gas natural y GLP en edificaciones. No aplica para redes de agua.</li>
        <li><strong>RAS 2017 Título B:</strong> Aplica a los sistemas externos de distribución de agua potable (redes municipales), no a las instalaciones internas de edificaciones. Sin embargo, el diseño hidrosanitario interno debe verificar que la presión disponible en el punto de empalme con la red municipal es suficiente para el sistema propuesto.</li>
      </ul>
      <p>En resumen: para el diseño hidrosanitario de edificaciones en Colombia, la norma técnica principal es la <strong>NTC 1500</strong>, con referencia obligatoria a la <strong>NSR-10 Título I</strong> para los aspectos estructurales y de responsabilidad profesional.</p>

      <h2>El método Hunter: cálculo de demanda paso a paso</h2>
      <p>El <strong>método Hunter</strong> es el procedimiento estándar para calcular el caudal de diseño en las redes internas de suministro de agua de edificaciones. Se basa en la teoría de probabilidad de uso simultáneo de los aparatos sanitarios. Su lógica: en un edificio con 50 sanitarios, nunca todos estarán en uso al mismo tiempo. El método cuantifica el gasto simultáneo máximo probable asignando <strong>Unidades de Gasto (UG)</strong> a cada tipo de aparato.</p>
      <p>Los pasos del método Hunter son:</p>
      <ul>
        <li><strong>Paso 1 — Inventario de aparatos:</strong> Liste todos los aparatos sanitarios del edificio: sanitarios, lavamanos, duchas, tinas, lavaplatos, lavadoras, orinales. Incluya tanto los de uso privado (en apartamentos u oficinas) como los de uso público.</li>
        <li><strong>Paso 2 — Asignación de Unidades de Gasto:</strong> La NTC 1500 Tabla 6.1 asigna UG a cada tipo de aparato según su tipo (uso privado o público) y su conexión (agua fría, caliente o total). Por ejemplo: sanitario con tanque de uso privado = 2,5 UG; ducha de uso privado = 2 UG; lavamanos de uso público = 2 UG.</li>
        <li><strong>Paso 3 — Suma de UG por ramal y columna:</strong> Sume las UG de todos los aparatos que alimenta cada tramo de tubería, comenzando desde los ramales más alejados hasta la acometida.</li>
        <li><strong>Paso 4 — Conversión UG → caudal simultáneo:</strong> Con el total de UG por ramal, use la curva de Hunter (o la tabla de la NTC 1500) para obtener el caudal simultáneo máximo probable en litros por segundo. Esta curva tiene forma de raíz cuadrada: a mayor número de UG, el incremento proporcional del caudal disminuye, porque la probabilidad de uso simultáneo al 100% es imposible.</li>
        <li><strong>Paso 5 — Dimensionamiento de tuberías:</strong> Con el caudal de diseño para cada tramo, seleccione el diámetro que garantice una velocidad de flujo entre 0,6 y 3,0 m/s (NTC 1500) y una presión residual mínima de 10 m.c.a. (metros de columna de agua) en el punto de consumo más desfavorable.</li>
        <li><strong>Paso 6 — Verificación de presiones:</strong> Con la presión disponible en la acometida, descuente las pérdidas por fricción (Darcy-Weisbach o Hazen-Williams), los accesorios (codos, tés, válvulas) y la diferencia de elevación hasta cada punto de consumo. Si la presión residual es insuficiente, se requiere sistema de presión.</li>
      </ul>

      <h2>Sistemas de presión: cuándo y cómo dimensionarlos</h2>
      <p>La NTC 1500 establece una presión mínima de 10 m.c.a. en los puntos de consumo. En edificios de 4 pisos o más, la presión disponible en la red pública generalmente no es suficiente para garantizar este mínimo en los pisos superiores sin sistema de presión. Las soluciones más usadas en Colombia son:</p>
      <ul>
        <li><strong>Tanque de almacenamiento + sistema de bombeo:</strong> El agua de la red municipal llena un tanque inferior (generalmente en el sótano o primer piso). Un equipo de bombeo eleva el agua hasta un tanque elevado o directamente a la red con presión constante. Es el sistema más económico en edificios de hasta 10 pisos.</li>
        <li><strong>Hidroneumático:</strong> Sistema de bombeo con tanque a presión que regula la presión en la red sin necesidad de tanque elevado. Apropiado para edificios donde el espacio para tanque elevado es limitado.</li>
        <li><strong>Bomba de velocidad variable (variador de frecuencia):</strong> Mantiene presión constante con consumo energético variable según la demanda. Es la solución más eficiente en edificios de alto consumo.</li>
      </ul>
      <p>El dimensionamiento del sistema de presión debe incluir: cálculo del volumen del tanque de almacenamiento (autonomía mínima de 12 horas según NTC 1500), selección de la bomba con curva característica H-Q, verificación de la NPSH disponible, y diseño de las tuberías de succión y descarga.</p>

      <h2>Documentos para licencia de construcción: qué entrega el diseñador</h2>
      <p>Para tramitar la licencia de construcción ante la curaduría urbana o la entidad territorial competente, el expediente debe incluir la memoria técnica hidrosanitaria. Los documentos estándar que debe entregar el diseñador son:</p>
      <ul>
        <li><strong>Planos isométricos de red de agua fría y caliente:</strong> Vista tridimensional de todas las tuberías de suministro con diámetros, pendientes, cotas y ubicación de válvulas de corte.</li>
        <li><strong>Planos de planta de redes de aguas residuales y lluvias por nivel:</strong> Localización de puntos de desagüe, cajas de inspección, bajantes y colectores de piso.</li>
        <li><strong>Memoria de cálculo:</strong> Hojas de cálculo del método Hunter, presiones, velocidades y selección de diámetros para cada ramal. Incluye verificación de presiones en el punto más desfavorable.</li>
        <li><strong>Especificaciones técnicas de materiales:</strong> Tipo de tubería (PVC, CPVC, PPR), clase de presión, accesorios y métodos de instalación aceptados por la NTC correspondiente.</li>
        <li><strong>Memoria de sistema de presión:</strong> Si aplica, cálculo del tanque, curva de la bomba, selección del equipo y detalles de la sala de máquinas.</li>
        <li><strong>Firma y sello del profesional responsable:</strong> Toda la documentación debe llevar la firma del ingeniero con tarjeta COPNIA vigente y el número de matrícula profesional.</li>
      </ul>

      <h2>Errores comunes que demoran la licencia de construcción</h2>
      <ul>
        <li><strong>Planos sin cotas ni diámetros:</strong> Un esquema sin dimensionamiento técnico no es una memoria de cálculo. La curaduría lo devolverá.</li>
        <li><strong>Memoria firmada por arquitecto sin tarjeta COPNIA de ingeniero:</strong> La NSR-10 es explícita: requiere firma de ingeniero. Sin ella, el trámite no procede.</li>
        <li><strong>No verificar la presión disponible en la acometida:</strong> Diseñar sin conocer la presión real de la red pública puede resultar en un sistema que no funciona en obra.</li>
        <li><strong>Olvidar la ventilación de la red de aguas residuales:</strong> La NTC 1500 exige ventilación primaria y secundaria en redes de desagüe para evitar el vaciado de sifones por presiones negativas.</li>
      </ul>
      <p>BIC — Bernal Ingeniería Consultores diseña redes hidrosanitarias para edificios residenciales, comerciales e industriales en Colombia con la metodología correcta y documentación completa para tramitar su licencia sin reprocesos. <strong>Contacte a BIC: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'estudio-amenaza-inundaciones-pot-colombia': {
    title: 'Estudios de amenaza por inundaciones para planes de ordenamiento territorial (POT) en Colombia',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Guía técnica sobre estudios de amenaza por inundación para POT en Colombia: obligatoriedad Decreto 1807/2014, metodología hidrología + HEC-RAS 2D, categorías de amenaza e integración al ordenamiento.',
    keywords: 'estudio amenaza inundaciones Colombia POT, Decreto 1807 2014 amenaza hídrica, incorporar riesgo POT Colombia, estudio básico detallado inundación, manchas inundación POT municipio',
    body: <>
      <p>En Colombia, la planificación del uso del suelo municipal está obligada por ley a incorporar el riesgo hídrico como condicionante del ordenamiento territorial. No es una opción técnica ni una recomendación: es una obligación explícita del <strong>Decreto 1807 de 2014</strong> y la <strong>Ley 388 de 1997</strong> que tiene consecuencias directas sobre qué se puede construir, dónde y con qué condiciones. Este artículo explica la base normativa, la metodología técnica y cómo estos estudios se integran en los Planes de Ordenamiento Territorial.</p>

      <h2>Marco legal: por qué es obligatorio el estudio de amenaza hídrica en el POT</h2>
      <p>La <strong>Ley 388 de 1997</strong> — la Ley de Desarrollo Territorial — estableció en su artículo 3 que el ordenamiento territorial tiene como uno de sus fines "mejorar la seguridad de los asentamientos humanos ante los riesgos naturales". Su artículo 35 clasifica las áreas de amenaza y riesgo como suelo de protección, no urbanizable.</p>
      <p>Sin embargo, fue el <strong>Decreto 1807 de 2014</strong> el que operacionalizó esta obligación, al establecer la metodología para incorporar la gestión del riesgo en los Planes de Ordenamiento Territorial. El decreto distingue tres tipos de estudios:</p>
      <ul>
        <li><strong>Estudios básicos de amenaza:</strong> Obligatorios para la formulación o revisión de cualquier POT, EOT o PBOT en Colombia. Identifican las zonas con potencial de amenaza por inundación y avenidas torrenciales a escala general, y determinan si se requieren estudios detallados.</li>
        <li><strong>Estudios detallados de amenaza y riesgo:</strong> Obligatorios para suelos de expansión urbana, suelos suburbanos y sectores urbanos con amenaza media o alta identificada en los estudios básicos. Requieren modelación hidráulica completa con HEC-RAS 2D o equivalente.</li>
        <li><strong>Estudios para licencias de urbanismo:</strong> Cuando un predio en suelo de expansión o rural colinda con cauces o tiene amenaza identificada en el POT, el tramitador debe presentar un estudio detallado antes de obtener la licencia.</li>
      </ul>
      <p>La <strong>Ley 1523 de 2012</strong> (Política Nacional de Gestión del Riesgo de Desastres) complementa esta obligación: los municipios deben formular y mantener actualizado su <strong>Plan Municipal de Gestión del Riesgo (PMGR)</strong>, y los estudios de amenaza del POT son el insumo técnico fundamental de ese plan.</p>

      <h2>Diferencia entre estudio básico y estudio detallado</h2>
      <p>La confusión más frecuente en la contratación de estos estudios es no saber qué nivel de detalle se necesita. La distinción del Decreto 1807/2014 es clara:</p>
      <ul>
        <li><strong>Estudio básico:</strong> Escala 1:25.000 o 1:10.000. Usa cartografía existente (IGAC, IDEAM), datos hidrológicos históricos del IDEAM y métodos hidrológicos simplificados para estimar caudales máximos. La modelación hidráulica puede ser 1D simplificada. El resultado es un mapa de áreas con potencial de amenaza, que identifica cuáles sectores requieren estudio detallado.</li>
        <li><strong>Estudio detallado:</strong> Escala 1:2.000 o 1:5.000 (según el nivel de detalle requerido). Requiere topobatimetría de precisión del cauce y la llanura de inundación, modelación hidrológica con HEC-HMS o análisis estadístico de frecuencias, modelación hidráulica 2D con HEC-RAS para generar manchas de inundación por período de retorno, y concepto de aptitud urbanística que clasifica las zonas del área de estudio como aptas, condicionadas o no aptas para urbanización.</li>
      </ul>
      <p>Un estudio básico no puede usarse para tramitar una licencia de urbanismo ni para decidir si una zona de expansión es urbanizable. Para eso se necesita siempre el estudio detallado.</p>

      <h2>Metodología técnica: tres componentes que no pueden faltar</h2>

      <h2>Componente 1 — Análisis hidrológico</h2>
      <p>El análisis hidrológico es el punto de partida. Su objetivo es obtener los caudales máximos para los períodos de retorno requeridos por la norma: Tr 10, 25, 50 y 100 años como mínimo (algunos estudios para ANLA exigen hasta Tr 500 años).</p>
      <p>Los pasos típicos son: delimitación automática de la cuenca a partir de un Modelo Digital de Elevación (MDE), cálculo de parámetros morfométricos (área, pendiente, tiempo de concentración), recopilación y procesamiento de series pluviométricas de estaciones del IDEAM, ajuste de distribuciones estadísticas (Gumbel, Log-Pearson III, GEV) para análisis de frecuencias, construcción de curvas IDF y generación de hidrogramas de diseño con HEC-HMS. El informe debe documentar las estaciones usadas, la longitud del registro, el método de análisis de frecuencias y las pruebas de bondad de ajuste aplicadas.</p>

      <h2>Componente 2 — Modelación hidráulica HEC-RAS 2D</h2>
      <p>Con los hidrogramas o caudales pico del análisis hidrológico como entrada, se construye el modelo hidráulico HEC-RAS 2D para simular la inundación sobre la llanura aluvial. Los elementos críticos del modelo son:</p>
      <ul>
        <li><strong>Topobatimetría de alta resolución:</strong> El Modelo Digital de Elevación (MDE) debe tener resolución de 1 metro o mejor en zonas urbanas. La batimetría del cauce activo (la parte sumergida del río) es indispensable para representar correctamente la capacidad de transporte del cauce. Sin batimetría, el modelo subestima la capacidad del canal y sobreestima las inundaciones.</li>
        <li><strong>Construcción de la malla computacional:</strong> El dominio 2D cubre la llanura de inundación. El tamaño de las celdas (típicamente 1–5 metros en zonas críticas) determina el nivel de detalle de los resultados. Celdas más pequeñas implican mayor costo computacional pero mejores resultados en zonas con estructuras hidráulicas complejas.</li>
        <li><strong>Calibración del modelo:</strong> El modelo se calibra ajustando los coeficientes de rugosidad de Manning hasta reproducir niveles de agua observados durante eventos históricos documentados. Sin calibración, el modelo produce resultados con incertidumbres del 20–40% en los niveles calculados.</li>
        <li><strong>Simulaciones por período de retorno:</strong> Se corre el modelo para Tr 10, 25, 50 y 100 años. Cada simulación produce mapas de profundidades máximas de inundación, velocidades máximas y extensión de la mancha de inundación.</li>
      </ul>

      <h2>Componente 3 — Cartografía SIG y manchas de inundación</h2>
      <p>Los resultados de HEC-RAS se procesan en un Sistema de Información Geográfica (ArcGIS Pro o QGIS) para producir las manchas de inundación y los mapas de amenaza que requiere el Decreto 1807/2014. El estándar técnico del MVCT y la UNGRD exige:</p>
      <ul>
        <li>Mapas de profundidad máxima de inundación para cada período de retorno.</li>
        <li>Mapa de velocidades máximas para el escenario de mayor caudal.</li>
        <li>Mapa de categorías de amenaza: alta, media y baja.</li>
        <li>Mapa de riesgo (cuando el estudio incluye análisis de vulnerabilidad): cruce cartográfico entre amenaza y elementos expuestos.</li>
      </ul>
      <p>Los entregables cartográficos se presentan en formato shapefile o GeoJSON, en el sistema de referencia MAGNA-SIRGAS (EPSG:3116 a 3120 según la región), y en formato PDF georeferenciado para presentación al municipio y la CAR.</p>

      <h2>Categorías de amenaza: alta, media y baja</h2>
      <p>El Decreto 1807 de 2014 y las guías técnicas del MVCT establecen la siguiente clasificación de amenaza hídrica basada en los resultados del modelo hidráulico:</p>
      <ul>
        <li><strong>Amenaza alta:</strong> Zonas que se inundan con períodos de retorno iguales o menores a 25 años, o que presentan velocidades de flujo superiores a 1 m/s con profundidades mayores a 0,5 m. En estas zonas el suelo es de protección y no puede urbanizarse. Si ya están urbanizadas, el municipio debe considerar programas de reasentamiento.</li>
        <li><strong>Amenaza media:</strong> Zonas que se inundan con períodos de retorno entre 25 y 100 años, con profundidades y velocidades moderadas. Urbanizable condicionada a obras de mitigación que demuestren reducción del riesgo mediante modelación.</li>
        <li><strong>Amenaza baja:</strong> Zonas que se inundan solo con períodos de retorno superiores a 100 años, con profundidades menores a 0,3 m. Urbanizable con medidas de adaptación (cotas de piso mínimas, diseño de drenajes).</li>
      </ul>
      <p>Esta clasificación es la que el POT adopta como norma de uso del suelo. Una vez incorporada al acuerdo municipal que adopta el POT, tiene fuerza de ley y vincula a todos los propietarios y constructores del municipio.</p>

      <h2>Integración al POT: cómo se incorporan los resultados</h2>
      <p>El municipio, a través de la Secretaría de Planeación o la Oficina de Gestión del Riesgo, incorpora los resultados del estudio en el diagnóstico del POT y en la normativa urbanística:</p>
      <ul>
        <li>Las zonas de amenaza alta quedan clasificadas como suelo de protección en el mapa de clasificación del suelo.</li>
        <li>Las zonas de amenaza media y baja con condicionamientos se incorporan como suelo con restricciones especiales que se detallan en las fichas normativas de cada zona homogénea.</li>
        <li>Las obras de mitigación propuestas en el estudio se incluyen en el plan de inversión del POT para su ejecución con recursos de regalías SGR u otras fuentes.</li>
        <li>La cartografía de amenaza hídrica se convierte en parte del sistema de información geográfica municipal y alimenta la plataforma SIGER (Sistema de Información para la Gestión del Riesgo) del DNP.</li>
      </ul>

      <h2>¿Qué municipios están obligados y qué plazos tienen?</h2>
      <p>Todos los municipios colombianos que estén en proceso de revisión o formulación de su POT están obligados a incorporar los estudios de amenaza hídrica. En 2026, los municipios en esta situación son principalmente los que completaron el primer período de vigencia de sus POT (formulados entre 2000 y 2004 con base en la Ley 388/1997) y los que tienen POT condicionados por conceptos de la CAR o el MVCT.</p>
      <p>Los municipios con proyectos de planes parciales en zonas de expansión no pueden esperar: el estudio detallado de amenaza hídrica es un prerrequisito para que la curaduría urbana o la oficina de planeación apruebe el plan parcial y, posteriormente, las licencias de urbanismo.</p>
      <p>BIC — Bernal Ingeniería Consultores ha elaborado estudios de amenaza hídrica para municipios del Eje Cafetero, planes parciales en Dosquebradas y Manizales, y análisis de torrencialidad para 8 municipios simultáneamente. Nuestros estudios son aceptados por CORPOCALDAS, CARDER, CRQ y las Curadurías Urbanas de la región. <strong>Contacte a BIC: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

}

export default articles1
