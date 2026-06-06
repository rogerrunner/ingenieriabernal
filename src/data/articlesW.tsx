import QuoteFormInline from '../components/QuoteFormInline'

// Articles W — Contenido para cliente ideal: terrateniente, promotor, empresa, alcaldía
const articlesW: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'cuanto-cuesta-estudio-riesgo-inundacion-colombia': {
    title: '¿Cuánto cuesta un estudio de riesgo por inundación en Colombia? Precios reales 2026',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Precios y Costos',
    metaDesc: 'Rangos de precio reales para estudios de amenaza y riesgo por inundación en Colombia 2026. Modelación HEC-RAS 2D, Decreto 1807, planes parciales y licencias de urbanismo. Qué incluye y qué factores afectan el costo.',
    keywords: 'cuánto cuesta estudio riesgo inundación colombia, precio estudio amenaza inundación colombia, costo modelación HEC-RAS 2D colombia, costo estudio decreto 1807 colombia, precio estudio riesgo hídrico plan parcial',
    body: <>
      <p>Si tiene un terreno cerca a un río, está tramitando una licencia de urbanismo o preparando un plan parcial, lo primero que quiere saber es cuánto le va a costar el estudio de riesgo hídrico. Esta guía le da rangos de precio reales basados en proyectos ejecutados en Colombia en 2026, con los factores que hacen que un estudio cueste más o menos.</p>

      <h2>Resumen de rangos de precio (2026)</h2>
      <p>Los precios varían según el tipo de estudio y la complejidad del proyecto:</p>
      <ul>
        <li><strong>Estudio básico de amenaza (Decreto 1807 — licencia de construcción):</strong> $8M – $15M COP. Para un lote urbano o parcelación pequeña. Incluye análisis hidrológico básico, modelo HEC-RAS 1D y zonificación de amenaza.</li>
        <li><strong>Estudio detallado de amenaza con HEC-RAS 2D (plan parcial o POT):</strong> $15M – $35M COP. Para proyectos de 5 a 200 hectáreas. Modelación bidimensional, levantamiento topobatimétrico del cauce, cartografía SIG y concepto de aptitud urbanística firmado COPNIA.</li>
        <li><strong>Estudio PMGR municipal (para alcaldías):</strong> $25M – $60M COP. Zonificación de amenaza y riesgo para todo el perímetro urbano. Incluye visitas de campo, cartografía 1:5.000 y socialización con el Consejo Municipal de Gestión del Riesgo.</li>
        <li><strong>Estudio de torrencialidad (FLO-2D):</strong> $18M – $40M COP. Para zonas de montaña con amenaza de avenidas torrenciales. Muy frecuente en el Eje Cafetero, Antioquia y Nariño.</li>
      </ul>
      <p>Estos rangos aplican para el Eje Cafetero (Caldas, Risaralda, Quindío). Para proyectos en Bogotá, Medellín o ciudades fuera de la región, se agrega un 10–20% por desplazamiento y coordinación remota.</p>

      <h2>¿Qué factores aumentan el costo?</h2>
      <p>El precio final depende de cinco variables principales:</p>
      <ul>
        <li><strong>Tamaño del área de estudio:</strong> Un lote de 1 hectárea cuesta mucho menos que un polígono de plan parcial de 80 hectáreas. El esfuerzo de modelación escala con el área.</li>
        <li><strong>Disponibilidad de información topográfica:</strong> Si existe cartografía LiDAR actualizada (IGAC, municipio o privada), el costo baja. Si hay que contratar un vuelo con dron o una topobatimetría de campo, suma $3M–$8M al total.</li>
        <li><strong>Número de períodos de retorno requeridos:</strong> Algunos proyectos piden solo Tr100; otros exigen Tr10, Tr50, Tr100 y Tr200. Más escenarios = más trabajo.</li>
        <li><strong>Exigencias de la autoridad ambiental:</strong> En zonas con POMCA adoptado, la CAR puede pedir metodologías adicionales o revisión por panel técnico externo. En CORPOCALDAS, por ejemplo, algunos proyectos pasan por comité técnico interno antes de emitir concepto.</li>
        <li><strong>Urgencia:</strong> Si necesita el informe en 2 semanas en lugar de 4, hay un sobrecosto por priorización del equipo.</li>
      </ul>

      <h2>¿Qué debe incluir un estudio de riesgo bien hecho?</h2>
      <p>Para que el estudio sea aceptado por la curaduría urbana y la CAR, debe incluir obligatoriamente:</p>
      <ul>
        <li>Análisis hidrológico con caudales de diseño por período de retorno (HEC-HMS o análisis estadístico con series IDEAM).</li>
        <li>Modelación hidráulica HEC-RAS (1D para ríos simples, 2D para zonas inundables complejas). Para Decreto 1807, la mayoría de las curadurías ya exigen 2D.</li>
        <li>Mapas de mancha de inundación georreferenciados en MAGNA-SIRGAS, con delimitación de zonas de amenaza alta, media y baja.</li>
        <li>Propuesta de medidas de gestión del riesgo (retiros, cotas mínimas de construcción, obras de mitigación).</li>
        <li>Informe técnico completo firmado por ingeniero con matrícula COPNIA vigente.</li>
      </ul>
      <p>Un estudio sin firma COPNIA no es aceptado por las curadurías. Un estudio con solo un mapa de inundación sin análisis hidrológico tampoco. Verifique que la firma que contrata cumpla ambos requisitos.</p>

      <h2>¿Vale la pena hacer el estudio antes de comprar el terreno?</h2>
      <p>Sí, siempre. Un estudio de prefactibilidad hídrica (diagnóstico técnico previo, $1M–$3M) puede evitar que compre un terreno con amenaza alta donde no es posible construir — o donde las medidas de mitigación costarían más que el terreno mismo. BIC ofrece diagnósticos técnicos de prefactibilidad para propietarios e inversionistas que están evaluando un predio antes de tomar la decisión de compra.</p>

      <QuoteFormInline serviceId="decreto1807" />
    </>,
  },

  'que-estudios-pide-la-car-para-construir-cerca-rio-colombia': {
    title: '¿Qué estudios pide la CAR para construir cerca a un río en Colombia?',
    date: 'Junio 2026',
    readTime: '9 min',
    category: 'Trámites CAR',
    metaDesc: '¿La CAR le pidió estudios para construir cerca a un río o quebrada? Esta guía explica qué documentos técnicos exigen CORPOCALDAS, CARDER, CAR Cundinamarca y otras autoridades: ronda hídrica, ocupación de cauce, concesión de aguas y permiso de vertimiento.',
    keywords: 'qué estudios pide la CAR construir cerca río colombia, estudios CAR colombia empresa, ronda hídrica CAR colombia, permiso ocupación cauce colombia, concesión aguas CAR colombia',
    body: <>
      <p>Si tiene un proyecto industrial, comercial o de vivienda cerca a un río o quebrada en Colombia, la CAR (Corporación Autónoma Regional) casi con seguridad le va a pedir uno o varios estudios técnicos antes de otorgarle el permiso. Esta guía le explica exactamente cuáles son, cuándo aplica cada uno y qué información técnica necesita para tramitarlos.</p>

      <h2>Los 4 trámites más comunes ante la CAR para proyectos cerca a cauces</h2>

      <h3>1. Delimitación de ronda hídrica (o franja de retiro)</h3>
      <p>La <strong>ronda hídrica</strong> es la franja de terreno paralela al cauce del río o quebrada que no puede ocuparse con construcciones. En Colombia, el Decreto 2811/1974 y el Decreto 1076/2015 establecen que las CAR son las competentes para delimitar esta ronda. Su extensión depende de la magnitud del cauce, la topografía y las condiciones de la cuenca.</p>
      <p><strong>Cuándo lo piden:</strong> Siempre que el predio está dentro de los 30 metros del borde del cauce (en ríos principales pueden ser hasta 100 metros). Si la curaduría ve en los planos que el proyecto está cerca a una fuente hídrica, solicita el concepto de la CAR sobre la ronda antes de emitir la licencia.</p>
      <p><strong>Qué incluye el estudio:</strong> Levantamiento topográfico del cauce, análisis hidráulico básico para determinar el nivel de creciente ordinaria, y propuesta técnica de la línea de retiro. BIC entrega este estudio en 2–3 semanas.</p>

      <h3>2. Permiso de ocupación de cauce</h3>
      <p>Si su proyecto implica construir <em>dentro</em> del cauce (un puente, un muro de contención, una alcantarilla, un encauzamiento), necesita un <strong>permiso de ocupación de cauce</strong> expedido por la CAR. Este permiso está regulado por el Decreto 1076/2015 (artículo 2.2.3.3.1.1) y es uno de los trámites más complejos en materia ambiental en Colombia.</p>
      <p><strong>Qué incluye el estudio:</strong> Modelación hidráulica HEC-RAS del tramo intervenido, análisis de socavación local y general, planos de diseño de la obra, memoria de cálculo firmada COPNIA, y evaluación de impactos sobre el cauce aguas arriba y aguas abajo. BIC entrega el expediente técnico completo en 6–10 semanas.</p>

      <h3>3. Concesión de aguas superficiales o subterráneas</h3>
      <p>Si su empresa o proyecto necesita tomar agua de un río, quebrada, lago o pozo, requiere una <strong>concesión de aguas</strong> expedida por la CAR. Sin ella, el uso del agua es ilegal y puede resultar en sanciones y cierre de la captación.</p>
      <p><strong>Cuándo aplica:</strong> Procesos industriales que usan agua (lavado, enfriamiento, proceso productivo), sistemas de riego agroindustriales, acueductos privados para parcelaciones campestres, y captaciones para PTAP municipales.</p>
      <p><strong>Qué incluye el estudio:</strong> Aforo del caudal disponible en la fuente, análisis hidrológico de la cuenca para verificar que el caudal solicitado no supera el caudal ambiental mínimo, y memoria técnica según el Decreto 1076/2015. BIC entrega en 3–5 semanas.</p>

      <h3>4. Permiso de vertimiento</h3>
      <p>Si su proyecto va a descargar aguas residuales tratadas al río (una PTAR industrial o una PTAR municipal), necesita un <strong>permiso de vertimiento</strong> ante la CAR. Este permiso establece los límites de carga contaminante que puede verter y los parámetros de control.</p>
      <p><strong>Qué incluye:</strong> Caracterización de las aguas residuales, modelación de asimilación del cuerpo receptor, diseño de la PTAR con los procesos necesarios para cumplir los límites del Decreto 1594/1984 o la Resolución 0631/2015, y propuesta de programa de monitoreo.</p>

      <h2>¿Cuánto tiempo tarda el trámite ante la CAR?</h2>
      <p>El tiempo de la CAR para emitir el permiso (después de que usted radicó el expediente técnico completo) varía:</p>
      <ul>
        <li><strong>Ronda hídrica:</strong> 2–4 meses en CORPOCALDAS y CARDER; hasta 6 meses en CARs con mayor carga.</li>
        <li><strong>Ocupación de cauce:</strong> 4–8 meses. Es un trámite complejo que puede incluir visita de campo de la CAR y comité técnico.</li>
        <li><strong>Concesión de aguas:</strong> 3–6 meses. Depende de si hay oposición de otros usuarios o restricciones en el POMCA.</li>
        <li><strong>Permiso de vertimiento:</strong> 4–8 meses. La CAR evalúa si el cuerpo receptor tiene capacidad de asimilación suficiente.</li>
      </ul>
      <p>El tiempo de elaboración del estudio técnico (que hace BIC) es independiente del tiempo de trámite ante la CAR. BIC puede tener listo el expediente técnico en 3–6 semanas; el reloj de la CAR empieza cuando usted radica.</p>

      <h2>¿Por dónde empezar?</h2>
      <p>Si la CAR o la curaduría le pidió un estudio y no sabe exactamente qué necesita, BIC hace un diagnóstico gratuito: con la ubicación del predio y el uso previsto, en 24 horas le decimos qué trámites aplican, qué estudios técnicos requiere y cuánto cuesta cada uno.</p>

      <QuoteFormInline serviceId="otro" />
    </>,
  },

  'componente-hidrico-plan-parcial-colombia-guia': {
    title: 'El componente hídrico del plan parcial en Colombia: qué es, qué incluye y cuánto cuesta',
    date: 'Junio 2026',
    readTime: '10 min',
    category: 'Plan Parcial',
    metaDesc: 'Guía para promotores y propietarios: qué es el componente hídrico de un plan parcial en Colombia, qué estudios lo conforman, qué exige el Decreto 1807/2014 y cuánto cuesta. Planeación no da concepto favorable sin este estudio.',
    keywords: 'componente hídrico plan parcial colombia, estudios plan parcial colombia decreto 1807, gestión riesgo plan parcial colombia, cuánto cuesta componente hídrico plan parcial, plan parcial cerca a río colombia',
    body: <>
      <p>Si está formulando un plan parcial en Colombia y su predio tiene fuentes hídricas, está en suelo de expansión urbana con amenaza de inundación, o simplemente el POT del municipio clasifica el terreno con restricciones por riesgo hídrico, <strong>Planeación municipal no va a emitir concepto favorable</strong> hasta que entregue el componente hídrico. Esta guía le explica exactamente qué es, qué incluye y cuánto cuesta.</p>

      <h2>¿Qué es el componente hídrico de un plan parcial?</h2>
      <p>El componente hídrico es el conjunto de estudios técnicos de gestión del riesgo por fuentes hídricas (inundaciones, avenidas torrenciales, rondas) que debe acompañar el documento del plan parcial. No es opcional: el <strong>Decreto 1807 de 2014</strong> lo exige explícitamente como requisito previo para la adopción de planes parciales que incluyan áreas con amenaza hídrica.</p>
      <p>En términos prácticos, el componente hídrico debe demostrar tres cosas ante Planeación y la autoridad ambiental:</p>
      <ol>
        <li><strong>Cuál es el nivel de amenaza</strong> en el polígono del plan parcial (alta, media o baja), para cada período de retorno relevante (Tr25, Tr100).</li>
        <li><strong>Qué medidas de gestión del riesgo</strong> se van a adoptar en el proyecto para reducir la amenaza a niveles aceptables (si es amenaza media) o para delimitar las zonas que no se pueden construir (si es amenaza alta).</li>
        <li><strong>Que esas medidas son técnicamente viables</strong>, están soportadas por cálculos hidráulicos e hidrológicos firmados COPNIA, y se pueden incorporar al plan parcial.</li>
      </ol>

      <h2>¿Qué estudios conforman el componente hídrico?</h2>
      <p>Un componente hídrico completo para plan parcial incluye:</p>
      <ul>
        <li><strong>Análisis hidrológico (HEC-HMS):</strong> Caracterización de la cuenca, curvas IDF con datos del IDEAM, y cálculo de los caudales de diseño para los períodos de retorno exigidos por el Decreto 1807 (mínimo Tr100 para licencias de urbanismo).</li>
        <li><strong>Modelación hidráulica HEC-RAS 2D:</strong> Simulación del comportamiento del flujo sobre el terreno en condición de creciente. Genera las manchas de inundación georreferenciadas que muestran qué partes del polígono quedan bajo el agua y con qué tirante hidráulico. La mayoría de los municipios del Eje Cafetero ya exigen 2D; el modelo 1D solo es aceptado en ríos muy simples.</li>
        <li><strong>Topobatimetría del cauce:</strong> Levantamiento topográfico de las secciones transversales del río o quebrada dentro del polígono y en una franja aguas arriba/aguas abajo. Es la base geométrica del modelo HEC-RAS. Sin topobatimetría actualizada, el modelo no tiene validez técnica.</li>
        <li><strong>Zonificación de amenaza y riesgo:</strong> Mapa SIG en MAGNA-SIRGAS con la delimitación de zonas de amenaza alta (no urbanizable), media (urbanizable con condiciones) y baja. Este mapa se incorpora formalmente al documento del plan parcial y a la cartografía de la licencia de urbanismo.</li>
        <li><strong>Medidas de gestión del riesgo:</strong> Propuesta técnica de obras de mitigación (jarillones, muros, revestimiento de orillas, retiros mínimos, cotas de construcción) que permitan viabilizar el proyecto en las zonas de amenaza media y excluir definitivamente las zonas de amenaza alta del polígono urbanizable.</li>
        <li><strong>Informe técnico firmado COPNIA:</strong> Documento completo, con todas las memorias, planos y matrices de resultados, firmado por el ingeniero responsable con matrícula profesional vigente. Sin firma COPNIA, el estudio no es aceptado.</li>
      </ul>

      <h2>¿Cuánto cuesta el componente hídrico?</h2>
      <p>Los rangos para el Eje Cafetero en 2026 son:</p>
      <ul>
        <li><strong>Plan parcial pequeño (5–20 ha, fuente hídrica simple):</strong> $15M – $25M COP. Plazo: 4–5 semanas.</li>
        <li><strong>Plan parcial mediano (20–100 ha, con dos o más fuentes o cauce principal):</strong> $25M – $45M COP. Plazo: 6–8 semanas.</li>
        <li><strong>Plan parcial grande o zona POMCA (más de 100 ha o en cuenca reglamentada):</strong> $45M – $80M COP. Plazo: 8–12 semanas.</li>
      </ul>
      <p>Si el predio no tiene amenaza hídrica significativa (está alejado de cauces y el POT no lo clasifica con restricciones), el componente puede ser un estudio básico de verificación de no-amenaza, que cuesta $8M–$12M COP y tarda 2–3 semanas.</p>

      <h2>¿Qué pasa si el terreno tiene amenaza alta?</h2>
      <p>Un nivel de amenaza alto no significa automáticamente que el proyecto es inviable. Significa que esa parte del polígono no puede ser urbanizable — pero el promotor puede excluirla del área de desarrollo, destinarla a zonas verdes o de manejo ambiental, y urbanizar el resto del polígono con las medidas de mitigación adecuadas. BIC ha viabilizado proyectos con amenaza alta parcial usando esta estrategia. Lo importante es hacer el estudio antes de comprometer la inversión en el desarrollo del plan parcial.</p>

      <QuoteFormInline serviceId="hec-ras-2d" />
    </>,
  },

  'como-conseguir-contratos-ingenieria-hidraulica-municipios-colombia': {
    title: 'Cómo contratar consultoría hidráulica para su municipio con regalías SGR en Colombia',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Municipios y SGR',
    metaDesc: 'Guía para alcaldes y secretarios de planeación: cómo contratar consultoría hidráulica para diseño de acueductos, PTAP y gestión del riesgo con recursos del SGR. Qué exige el OCAD, cómo formular el proyecto en MGA-Web y qué errores evitar.',
    keywords: 'contratar consultoría hidráulica municipio colombia, diseño acueducto municipio regalías SGR, cómo formular proyecto acueducto MGA-Web, consultoría técnica alcaldía colombia, ingeniería hidráulica municipios colombia SGR',
    body: <>
      <p>Si usted es alcalde, secretario de planeación o técnico de una alcaldía colombiana y necesita contratar la consultoría técnica para el diseño de un acueducto, una PTAP o el estudio de gestión del riesgo hídrico con regalías del SGR, esta guía le explica el proceso paso a paso y los errores más comunes que hacen que los proyectos sean devueltos por el OCAD.</p>

      <h2>¿Qué servicios de consultoría hidráulica se financian con regalías SGR?</h2>
      <p>El Sistema General de Regalías (SGR) financia proyectos del sector de agua potable y saneamiento básico a través de sus distintos fondos. Los estudios y diseños que BIC elabora y que son elegibles con regalías incluyen:</p>
      <ul>
        <li><strong>Estudios y diseños de acueducto:</strong> Diagnóstico del sistema existente, diseño de nuevas redes, EPANET, memorias RAS 2017, presupuesto de obra y pliegos técnicos. Es el más contratado con SGR en municipios menores de Colombia.</li>
        <li><strong>Diseño de PTAP:</strong> Para municipios con IRCA alto o sin sistema de tratamiento. Incluye proceso de potabilización según Resolución 0330/2017, diseño estructural y electromecánico, y presupuesto.</li>
        <li><strong>Estudios de gestión del riesgo hídrico:</strong> Para actualización de POT o para el Plan Municipal de Gestión del Riesgo (PMGR). Elegibles con el fondo de adaptación o con regalías del sector de agua.</li>
        <li><strong>Formulación del proyecto en MGA-Web:</strong> BIC puede incluir como parte del contrato la formulación del proyecto en la MGA-Web del DNP, lo que ahorra tiempo y evita la devolución por errores técnicos en la formulación.</li>
      </ul>

      <h2>El proceso de contratación SECOP para una alcaldía</h2>
      <p>Para contratar con una alcaldía colombiana, la firma de consultoría debe cumplir los requisitos habilitantes del proceso de selección. Para BIC, esto incluye:</p>
      <ul>
        <li>RUT activo y al día con obligaciones tributarias.</li>
        <li>Certificado de existencia y representación legal (persona natural — Ing. Rogerio Bernal Ríos).</li>
        <li>Matrícula COPNIA vigente (17202-313228 CLD).</li>
        <li>Experiencia acreditada en proyectos similares (verificable en SECOP: Alcaldía de Puerto Boyacá, Contrato 621/2021).</li>
        <li>Pólizas de cumplimiento según el valor del contrato.</li>
      </ul>
      <p>BIC puede participar en <strong>licitación pública, selección abreviada de menor cuantía, concurso de méritos y contratación directa</strong> (cuando aplica la causal). Para procesos de selección abreviada de menor cuantía (la más frecuente para estudios y diseños en municipios pequeños), BIC tiene tiempo de respuesta de 24 horas para propuesta técnica y económica.</p>

      <h2>Los 5 errores más comunes en proyectos de agua que el OCAD devuelve</h2>
      <p>Basado en la experiencia de BIC formulando proyectos SGR, estos son los errores técnicos que más frecuentemente hacen que el OCAD regional devuelva un proyecto de acueducto o alcantarillado:</p>
      <ol>
        <li><strong>Proyección de población incorrecta:</strong> Usar la proyección del DANE sin cruzarla con los censos municipales y la tasa de crecimiento real del municipio. El OCAD verifica la coherencia entre la proyección de demanda y el diseño de la infraestructura.</li>
        <li><strong>Caudal de diseño subestimado:</strong> Diseñar para el caudal promedio sin considerar las variaciones estacionales y el caudal de punta horario. Esto resulta en sistemas que colapsan en temporada alta.</li>
        <li><strong>Ausencia de diagnóstico del sistema existente:</strong> El MGA-Web exige que el proyecto justifique por qué es necesaria la nueva infraestructura. Sin un diagnóstico técnico del sistema actual, el OCAD pide complementar.</li>
        <li><strong>Presupuesto sin APU (Análisis de Precios Unitarios):</strong> El OCAD cada vez más exige que el presupuesto esté soportado en APU detallados, no solo en precios unitarios globales.</li>
        <li><strong>Falta de aval de la ESP o del operador:</strong> El proyecto debe contar con el aval de la empresa de servicios públicos o del operador del sistema, que asumirá la operación de la nueva infraestructura.</li>
      </ol>

      <h2>¿Qué municipios pueden contratar a BIC directamente?</h2>
      <p>Municipios de categoría 5 y 6 (la mayoría del país) pueden contratar a BIC por contratación directa cuando el valor del contrato está dentro de la mínima cuantía o cuando se trata de un contrato interadministrativo. Para municipios de mayor categoría, BIC participa en los procesos de selección que publica el municipio en SECOP.</p>
      <p>La forma más rápida de empezar es contactar a BIC directamente para hacer una evaluación técnica preliminar sin costo: en 24 horas le informamos qué estudios son prioritarios para su municipio, qué fondo del SGR puede financiarlos y cuánto costaría la consultoría.</p>

      <QuoteFormInline serviceId="regalias" />
    </>,
  },

}

export default articlesW
