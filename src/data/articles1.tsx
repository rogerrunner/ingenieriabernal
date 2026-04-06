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

}

export default articles1
