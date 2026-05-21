import React from 'react'

// Batch Q — Blogs buyer-intent: costos y documentos (3 artículos, mayo 2026)
const articlesQ: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  // ─── BLOG #10: Costo estudio HEC-RAS ────────────────────────────────────────

  'costo-estudio-hec-ras-colombia-2026': {
    title: '¿Cuánto cuesta un estudio HEC-RAS en Colombia? Tarifas 2026',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Modelación Hidráulica',
    metaDesc: 'Tarifas reales de modelación HEC-RAS en Colombia 2026: desde $8M COP para estudios 1D básicos hasta $80M para modelos 2D de cuencas grandes. Qué incluye, qué factores mueven el precio y cómo comparar propuestas.',
    keywords: 'costo estudio HEC-RAS Colombia, precio modelación hidráulica HEC-RAS, honorarios consultoría hidráulica Colombia, cuánto cuesta HEC-RAS 2D',
    body: <>
      <p>Una de las preguntas más frecuentes que recibimos en BIC antes de enviar una propuesta es: <strong>"¿Cuánto cuesta un estudio HEC-RAS en Colombia?"</strong> La respuesta depende de varios factores técnicos, pero en este artículo damos rangos reales de 2026 para que el promotor, constructora o alcaldía pueda tomar decisiones informadas antes de cotizar.</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> ejecuta modelaciones hidráulicas HEC-RAS 1D y 2D para estudios de amenaza por inundación, planes parciales, licencias ambientales y diseño de obras de protección en Colombia. Honorarios desde $8 millones COP para estudios básicos hasta $80 millones para modelos 2D en cuencas complejas. Firma COPNIA 17202-313228 CLD. Propuesta en 24 horas: +57 302 477 8910.
      </p>

      <h2>Rangos de precio por tipo de estudio HEC-RAS (2026)</h2>
      <p>Los honorarios de una consultoría de modelación hidráulica dependen del tipo de modelo, la longitud del tramo, la disponibilidad de topobatimetría previa y la complejidad del cauce. Estos son los rangos orientativos en el mercado colombiano para 2026:</p>

      <h3>HEC-RAS 1D — Estudio básico</h3>
      <p><strong>Rango: $8 a $20 millones COP</strong></p>
      <p>Aplica para: POT/EOT municipales, licencias urbanísticas simples, estudios de afectación de retiro para predios con cauce cercano. Incluye análisis hidrológico HEC-HMS, construcción del modelo 1D con secciones transversales, manchas de inundación para Tr 10, 50 y 100 años, e informe técnico conforme a la Guía MVCT. Plazo típico: 3 a 5 semanas cuando existe topobatimetría disponible.</p>

      <h3>HEC-RAS 2D — Plan parcial o cuenca media</h3>
      <p><strong>Rango: $20 a $40 millones COP</strong></p>
      <p>Aplica para: planes parciales con polígonos de 5 a 50 ha, licencias de urbanización en zonas de amenaza media-alta, estudios Decreto 1807 detallados. Incluye malla computacional 2D calibrada, cartografía SIG de amenaza alta/media/baja, perfiles de lámina de agua y concepto técnico para radicación ante la CAR. Plazo: 6 a 10 semanas.</p>

      <h3>HEC-RAS 2D — Gran proyecto o POMCA</h3>
      <p><strong>Rango: $40 a $80 millones COP</strong></p>
      <p>Aplica para: cuencas complejas con múltiples cauces, POMCA de CAR, proyectos de infraestructura vial (INVÍAS, concesiones), estudios de mitigación para proyectos industriales. Incluye calibración completa con eventos históricos documentados, modelación de alternativas de obras de mitigación y entrega en formatos ArcGIS y QGIS. Plazo: 10 a 20 semanas.</p>

      <h2>Qué factores aumentan el costo de un estudio HEC-RAS</h2>
      <p>Estos son los cinco factores que más impactan el precio final de una consultoría HEC-RAS en Colombia:</p>
      <ul>
        <li><strong>Ausencia de topobatimetría:</strong> Si no existe levantamiento topográfico del cauce, la firma debe realizarlo. Un levantamiento batimétrico de 3 a 5 km de cauce puede costar entre $8 y $18 millones adicionales, dependiendo de la accesibilidad del terreno y la tecnología usada (estación total, batímetro acústico, LiDAR).</li>
        <li><strong>Calibración con eventos históricos:</strong> Un modelo calibrado con datos de crecientes documentadas es más confiable y tiene mayor aceptación ante la CAR, pero requiere recopilar y procesar datos del IDEAM, lo que puede añadir 1 a 3 semanas al plazo.</li>
        <li><strong>Número de cauces o tributarios:</strong> Un modelo con varios afluentes y confluencias en el polígono del plan parcial es exponencialmente más complejo que un modelo de cauce único.</li>
        <li><strong>Requerimientos específicos de la entidad revisora:</strong> Algunas CAR y oficinas de planeación tienen formatos y requisitos adicionales que aumentan el trabajo de entrega de documentos.</li>
        <li><strong>Modelación de alternativas de mitigación:</strong> Si el cliente necesita evaluar la efectividad de obras de protección (jarillones, rectificaciones, canales de alivio), el estudio incluye una corrida adicional por cada alternativa analizada.</li>
      </ul>

      <h2>Cómo comparar propuestas de modelación HEC-RAS</h2>
      <p>Al recibir varias propuestas para un estudio HEC-RAS, tenga en cuenta estos puntos para comparar correctamente:</p>
      <ul>
        <li><strong>¿Es 1D o 2D?</strong> Un modelo 1D es más barato pero produce manchas de amenaza menos precisas en llanuras de inundación complejas. Para planes parciales, el Decreto 1807 recomienda el modelo 2D en áreas urbanas.</li>
        <li><strong>¿Incluye topobatimetría?</strong> Una propuesta sin levantamiento de campo que cubre solo el modelado puede parecer económica, pero deja al cliente gestionando por separado el insumo más crítico del modelo.</li>
        <li><strong>¿Incluye SIG entregable?</strong> Los shapefiles de amenaza alta/media/baja son el entregable que Planeación, la CAR y el curador urbano necesitan. Verifique que estén explícitamente incluidos.</li>
        <li><strong>¿Quién firma el informe?</strong> El informe técnico debe estar firmado por un ingeniero con tarjeta COPNIA vigente y especialización en hidráulica o afines. Sin firma profesional, la CAR puede rechazar el documento.</li>
      </ul>

      <h2>¿Qué pasa si contrato un estudio muy barato?</h2>
      <p>En Colombia existe un mercado de estudios HEC-RAS de muy bajo costo (menos de $5 millones) ofrecidos por firmas sin experiencia regional o sin acceso a datos históricos del IDEAM. Los riesgos son concretos: modelos sin calibración que la CAR rechaza en la primera revisión, manchas de amenaza subestimadas que generan licencias urbanísticas cuestionadas, y planos sin firma COPNIA que el curador rechaza en ventanilla. El costo de rehacer un estudio rechazado —más los tiempos perdidos en el cronograma del proyecto— siempre supera el ahorro inicial.</p>

      <p><strong>¿Necesita un estudio HEC-RAS firmado y aceptado por la CAR?</strong> BIC entrega modelos calibrados, informe técnico conforme a la Guía MVCT, cartografía SIG y firma COPNIA 17202-313228 CLD. <a href="/servicios/modelacion-hec-ras" style={{color:'#2E75B6', fontWeight:600}}>Ver servicio de modelación HEC-RAS →</a> o contáctenos por <strong>WhatsApp +57 302 477 8910</strong> — propuesta en 24 horas sin costo.</p>
    </>,
    faqItems: [
      {
        q: '¿Cuánto cuesta un estudio HEC-RAS en Colombia en 2026?',
        a: 'Los honorarios dependen del tipo de modelo y la complejidad del cauce. Un estudio HEC-RAS 1D básico (POT, licencia urbanística simple) cuesta entre $8 y $20 millones COP. Un modelo 2D para plan parcial o cuenca media oscila entre $20 y $40 millones. Modelos 2D para grandes proyectos o POMCA pueden superar los $40 millones. Estos precios no incluyen topobatimetría de campo si no existe información previa.',
      },
      {
        q: '¿Qué está incluido en un estudio HEC-RAS profesional?',
        a: 'Un estudio HEC-RAS profesional incluye: análisis hidrológico HEC-HMS para caudales de diseño, construcción del modelo hidráulico 1D o 2D, calibración con datos disponibles, generación de manchas de inundación para períodos de retorno 10, 50 y 100 años, cartografía SIG (shapefiles de amenaza alta/media/baja), e informe técnico firmado COPNIA apto para radicación ante la CAR y el municipio.',
      },
      {
        q: '¿Cuánto tiempo tarda un estudio HEC-RAS completo?',
        a: 'Un modelo 1D con información topohidrológica disponible se entrega en 3 a 5 semanas. Modelos 2D para planes parciales: 6 a 10 semanas. Cuando se requiere levantamiento topobatimétrico propio, sumar 2 a 4 semanas adicionales. Modelos 2D para grandes cuencas con calibración completa: entre 10 y 20 semanas.',
      },
      {
        q: '¿La firma del informe HEC-RAS requiere matrícula COPNIA?',
        a: 'Sí. En Colombia, el informe técnico de modelación hidráulica debe estar firmado y sellado por un ingeniero con tarjeta profesional COPNIA vigente y con la especialidad correspondiente. Sin firma COPNIA, la CAR y las curadurías urbanas pueden rechazar el documento. BIC firma con matrícula COPNIA 17202-313228 CLD activa.',
      },
    ],
  },

  // ─── BLOG #11: Documentos diseño hidrosanitario ─────────────────────────────

  'documentos-diseno-hidrosanitario-colombia': {
    title: '¿Qué documentos necesita para contratar diseño hidrosanitario en Colombia?',
    date: 'Mayo 2026',
    readTime: '6 min',
    category: 'Diseño Hidrosanitario',
    metaDesc: 'Lista completa de documentos que necesita para contratar el diseño hidrosanitario de su edificio, hotel o planta industrial en Colombia. NSR-10, RAS 2017, NTC 1500. Checklist descargable.',
    keywords: 'documentos diseño hidrosanitario Colombia, requisitos diseño hidrosanitario Colombia, qué necesito para diseño hidrosanitario, contratar ingeniero hidrosanitario Colombia',
    body: <>
      <p>Antes de contratar el diseño hidrosanitario de un edificio comercial, hotel, centro comercial o planta industrial en Colombia, el cliente necesita reunir un conjunto de documentos e información que la firma consultora usará como insumo del diseño. Este artículo explica exactamente qué necesita tener listo antes de pedir una propuesta.</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes hidrosanitarias para edificios comerciales, hoteles, centros comerciales y plantas industriales en Colombia, conforme a NSR-10 Títulos I y K, RAS 2017 y NTC 1500. Planos y memorias firmadas COPNIA 17202-313228 CLD para licencia de construcción. Propuesta en 24 horas: +57 302 477 8910.
      </p>

      <h2>Información básica que necesita tener lista</h2>
      <p>Para que BIC pueda elaborar una propuesta técnica y económica precisa, y luego ejecutar el diseño, necesita estos documentos:</p>

      <h3>1. Planos arquitectónicos del proyecto</h3>
      <p>Los planos arquitectónicos en formato DWG (AutoCAD) o PDF con plantas de cada nivel, fachadas y cortes. Son el insumo principal del diseño hidrosanitario: sin los planos no es posible trazar las redes ni calcular las dotaciones correctamente. Si los planos están incompletos o en versión preliminar, el diseño hidrosanitario deberá revisarse cuando se actualicen — es más eficiente esperar a tener una versión mínimamente estable.</p>

      <h3>2. Uso y ocupación del edificio</h3>
      <p>El tipo de uso determina las dotaciones de agua potable y las cargas de aguas residuales. La NSR-10 y el RAS 2017 establecen dotaciones diferentes para: vivienda, oficinas, comercio, restaurantes, hoteles, hospitales, colegios, industria y parqueaderos. Especifique con claridad si el edificio tiene restaurante, cocina industrial, lavandería, piscina, sistema de riego o cualquier uso con consumo intensivo de agua.</p>

      <h3>3. Número de niveles y número de unidades</h3>
      <p>La presión disponible en la red pública y la altura del edificio determinan si se requiere sistema de bombeo (hidroneumático, tanque elevado o sistema de presión constante). Para edificios de más de 4 pisos en Colombia, casi siempre se requiere sistema de bombeo. Indique también el número de apartamentos, habitaciones de hotel, locales comerciales o puestos de trabajo según el tipo de proyecto.</p>

      <h3>4. Localización y ESP del predio</h3>
      <p>Municipio, barrio o vereda y nombre de la Empresa de Servicios Públicos que presta el servicio de acueducto y alcantarillado. La ESP define las condiciones técnicas de la acometida (diámetro mínimo, presión disponible en la red, restricciones de conexión) que el diseño debe respetar. Para proyectos en zonas rurales sin ESP, indique la fuente de agua disponible.</p>

      <h3>5. Estudio de suelos (si existe)</h3>
      <p>Para el diseño de la red de aguas residuales enterrada y las redes externas de alcantarillado es útil conocer las características del suelo (nivel freático, permeabilidad) para dimensionar correctamente las pendientes y protecciones de tuberías. Si no existe estudio de suelos, el diseñador usará parámetros conservadores o indicará las condiciones que debe verificar el constructor.</p>

      <h3>6. Norma sísmica de la zona (NSR-10)</h3>
      <p>La NSR-10 zonifica el territorio colombiano en zonas de amenaza sísmica alta, intermedia y baja. Esta zonificación afecta los requisitos de soporte y anclaje de las tuberías y los materiales recomendados. BIC consulta directamente la NSR-10 con las coordenadas del predio — usted no necesita tramitar este dato por separado.</p>

      <h2>Documentos adicionales para edificios con sistema contra incendios</h2>
      <p>Si el proyecto requiere sistema contra incendios (obligatorio en Colombia para edificios de más de 12 metros de altura, comercio con más de 500 m², uso industrial o parqueaderos con más de 30 cupos), se necesita adicionalmente:</p>
      <ul>
        <li>Concepto de bomberos del municipio (si ya existe, o BIC lo tramita en paralelo al diseño)</li>
        <li>Clasificación de ocupancia NSR-10 Capítulo K del proyecto</li>
        <li>Área total por nivel y altura total del edificio</li>
      </ul>

      <h2>Lo que NO necesita antes de contratar el diseño</h2>
      <p>Muchos clientes retrasan la contratación esperando tener el proyecto "100% definido". En la práctica, el diseño hidrosanitario puede iniciarse con planos arquitectónicos en versión de anteproyecto, siempre que el número de niveles, el uso principal y la estructura general estén definidos. Los cambios arquitectónicos menores (redistribución interna de baños, por ejemplo) son ajustes normales en el proceso de diseño que la firma puede atender sin necesidad de rehacer el trabajo desde cero.</p>

      <p>Tampoco necesita haber tramitado la licencia de construcción — el diseño hidrosanitario es precisamente uno de los documentos que se presenta ante el curador urbano para obtener la licencia.</p>

      <h2>Checklist resumido</h2>
      <ul>
        <li>✅ Planos arquitectónicos (DWG o PDF), versión de anteproyecto o superior</li>
        <li>✅ Uso y ocupación del edificio (residencial, comercial, industrial, hotelero, etc.)</li>
        <li>✅ Número de niveles y número de unidades funcionales</li>
        <li>✅ Municipio y nombre de la ESP del servicio de acueducto</li>
        <li>✅ Estudio de suelos (si existe — no es bloqueante)</li>
        <li>⚠️ Concepto de bomberos (solo para proyectos con sistema contra incendios obligatorio)</li>
      </ul>

      <p><strong>¿Tiene los documentos listos?</strong> BIC envía propuesta técnica y económica en menos de 24 horas para el diseño hidrosanitario de su proyecto. Planos y memorias firmadas COPNIA para licencia de construcción. <a href="/servicios/redes-hidrosanitarias" style={{color:'#2E75B6', fontWeight:600}}>Ver servicio de diseño hidrosanitario →</a> o contáctenos por <strong>WhatsApp +57 302 477 8910</strong>.</p>
    </>,
    faqItems: [
      {
        q: '¿Qué necesito para contratar el diseño hidrosanitario de mi edificio?',
        a: 'Lo mínimo necesario es: (1) planos arquitectónicos en DWG o PDF con plantas de cada nivel, (2) uso y ocupación del edificio (residencial, comercial, hotelero, industrial), (3) número de pisos y número de unidades, (4) municipio y nombre de la ESP prestadora de acueducto. Con esta información BIC puede elaborar la propuesta técnica y económica en 24 horas.',
      },
      {
        q: '¿Necesito el estudio de suelos antes de contratar el diseño hidrosanitario?',
        a: 'No es obligatorio para iniciar el diseño, pero es útil para el dimensionamiento de las redes enterradas. Si no existe, el diseñador usa parámetros conservadores o indica las condiciones que debe verificar el constructor. Es recomendable tenerlo antes de la fase de construcción.',
      },
      {
        q: '¿Cuándo es obligatorio el sistema contra incendios en Colombia?',
        a: 'Según la NSR-10 Capítulo K, el sistema contra incendios es obligatorio en edificios con más de 12 metros de altura en uso residencial colectivo, edificios comerciales con más de 500 m², edificios industriales, locales de reunión pública con más de 50 personas y parqueaderos con más de 30 cupos.',
      },
      {
        q: '¿El diseño hidrosanitario requiere firma de ingeniero COPNIA para la licencia de construcción?',
        a: 'Sí. En Colombia, las memorias de cálculo y planos hidrosanitarios presentados ante la curaduría urbana para obtener la licencia de construcción deben estar firmados y sellados por un ingeniero con tarjeta profesional COPNIA vigente y con la especialidad en hidráulica o afines. Sin firma COPNIA, el curador puede rechazar los documentos en ventanilla.',
      },
    ],
  },

  // ─── BLOG #15: Decreto 1807 para plan parcial ───────────────────────────────

  'decreto-1807-plan-parcial-colombia': {
    title: 'Decreto 1807 de 2014 — Todo lo que necesita saber para su plan parcial',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Gestión del Riesgo Hídrico',
    metaDesc: 'Guía completa del Decreto 1807 de 2014 para planes parciales en Colombia: estudios básicos y detallados de amenaza, quién debe presentarlos, qué contienen y cuánto cuestan. Actualizado 2026.',
    keywords: 'Decreto 1807 plan parcial Colombia, estudio detallado gestión del riesgo Decreto 1807, amenaza inundación plan parcial Colombia, Decreto 1807 2014 Colombia ingeniería',
    body: <>
      <p>El <strong>Decreto 1807 de 2014</strong> es la norma que más impacto práctico tiene sobre los planes parciales y las licencias de urbanismo en zonas de expansión con amenaza hídrica en Colombia. Sin embargo, muchos promotores y constructoras llegan a la etapa de concertación con Planeación sin tener claro exactamente qué exige este decreto, cuándo aplica y qué debe contener el estudio. Este artículo resuelve esas preguntas con precisión.</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> elabora estudios de gestión del riesgo para planes parciales según el Decreto 1807 de 2014: estudio básico y estudio detallado con modelación HEC-RAS 2D, zonificación de amenaza y concepto firmado COPNIA 17202-313228 CLD para Planeación municipal y la CAR. Costo: desde $18 millones COP. Propuesta en 24 horas: +57 302 477 8910.
      </p>

      <h2>¿Qué establece el Decreto 1807 de 2014?</h2>
      <p>El Decreto 1807 de 2014 del Ministerio de Vivienda, Ciudad y Territorio (MVCT) regula los <strong>estudios básicos y detallados de amenaza, vulnerabilidad y riesgo</strong> que deben realizarse para incorporar suelo al ordenamiento territorial o para desarrollar proyectos urbanísticos en zonas con amenaza de inundación, movimientos en masa o avenidas torrenciales.</p>
      <p>Su objetivo es que ningún plan de ordenamiento territorial ni ningún plan parcial apruebe usos urbanísticos en áreas donde el riesgo no ha sido evaluado y gestionado técnicamente. Antes del Decreto 1807, muchos planes parciales se aprobaban sin este análisis riguroso, lo que generó urbanizaciones en zonas inundables que luego experimentaron pérdidas materiales y humanas.</p>

      <h2>Estudio básico vs. estudio detallado: la diferencia clave</h2>
      <p>El Decreto 1807 establece dos niveles de análisis:</p>

      <h3>Estudio básico de amenaza</h3>
      <p>Lo realiza típicamente el municipio como parte de la formulación o revisión del POT. Identifica las zonas con amenaza de inundación, movimientos en masa o avenidas torrenciales a escala municipal, usando información secundaria (cartografía IGAC, datos IDEAM, geología regional). El resultado es el mapa de zonificación de amenaza del POT que delimita las áreas con amenaza alta, media y baja en todo el territorio municipal.</p>

      <h3>Estudio detallado de amenaza y riesgo</h3>
      <p>Este es el estudio que le interesa al promotor de un plan parcial. Se realiza a escala de predio o polígono de plan parcial, con mayor nivel de detalle técnico que el estudio básico municipal. El Decreto 1807 exige que se elabore cuando:</p>
      <ul>
        <li>El polígono del plan parcial se ubica en zona de amenaza alta o media según el mapa del POT</li>
        <li>El POT incluye restricciones por rondas hídricas o amenaza hídrica en el predio</li>
        <li>Existen cauces o quebradas dentro o adyacentes al polígono del plan parcial</li>
      </ul>

      <h2>¿Qué debe contener el estudio detallado?</h2>
      <p>El artículo 8 del Decreto 1807 y la Guía Técnica del MVCT establecen que el estudio detallado para planes parciales debe incluir como mínimo:</p>
      <ul>
        <li><strong>Caracterización de la fuente de amenaza:</strong> nombre del cauce o sistema hídrico, cuenca hidrográfica, régimen hidrológico, eventos históricos documentados</li>
        <li><strong>Análisis hidrológico:</strong> cálculo de caudales máximos para T=10, 25, 50 y 100 años con metodología HEC-HMS o equivalente, usando datos de estaciones del IDEAM</li>
        <li><strong>Modelación hidráulica:</strong> construcción del modelo HEC-RAS 1D o 2D del cauce (el Decreto recomienda el 2D para áreas urbanas y polígonos complejos), calibración con eventos históricos si existen, y generación de perfiles de lámina de agua</li>
        <li><strong>Mapa de zonificación de amenaza:</strong> en escala 1:2.000 o mayor, con delimitación de zonas de amenaza alta (roja), media (naranja) y baja (amarilla) para el período de retorno de 100 años</li>
        <li><strong>Medidas de gestión del riesgo:</strong> propuesta de obras de mitigación (diques, canales de alivio, retiros obligatorios), cotas mínimas de piso, restricciones de uso e incorporación de estas medidas al documento del plan parcial</li>
        <li><strong>Concepto de aptitud urbanística:</strong> determinación de qué áreas del polígono son aptas para desarrollo, cuáles requieren medidas de mitigación y cuáles deben preservarse como zonas no urbanizables</li>
      </ul>

      <h2>¿Quién puede elaborar el estudio detallado?</h2>
      <p>El estudio detallado debe ser elaborado por una firma o profesional con competencia técnica en ingeniería hidráulica e hidrológica, y el informe debe ir firmado por un ingeniero con tarjeta profesional COPNIA vigente. Las entidades revisoras (Planeación municipal, CAR) verifican la idoneidad del profesional firmante antes de aceptar el documento.</p>
      <p>En la práctica, BIC recomienda que el estudio detallado sea elaborado por la misma firma que formulará el plan parcial, o en estrecha coordinación con ella, para que las medidas de gestión del riesgo queden correctamente incorporadas al esquema básico de ordenamiento del plan.</p>

      <h2>Cuánto cuesta el estudio detallado Decreto 1807</h2>
      <p>Los honorarios para el estudio detallado de gestión del riesgo dependen del área del polígono, la complejidad del sistema hídrico y si ya existe topobatimetría del cauce. Rangos orientativos 2026:</p>
      <ul>
        <li><strong>Polígono pequeño (&lt; 5 ha, cauce simple):</strong> $18 a $30 millones COP — 4 a 6 semanas</li>
        <li><strong>Polígono medio (5–20 ha, HEC-RAS 2D):</strong> $30 a $60 millones COP — 6 a 10 semanas</li>
        <li><strong>Gran desarrollo (+20 ha, múltiples cauces):</strong> propuesta a medida — 10 a 16 semanas</li>
      </ul>

      <h2>¿Qué pasa si no se presenta el estudio?</h2>
      <p>Sin el estudio detallado aprobado, Planeación municipal no puede emitir concepto favorable sobre el plan parcial. El proceso queda detenido hasta que el promotor presente el estudio técnico. En la práctica, esto implica retrasos de 3 a 9 meses en el cronograma del proyecto, mientras se contrata, elabora y revisa el estudio. La recomendación de BIC es siempre iniciar el estudio en paralelo con el diagnóstico del predio, no esperar a que Planeación lo exija.</p>

      <p><strong>¿Su predio está en zona de amenaza?</strong> BIC determina en la primera consulta si su proyecto requiere el estudio detallado Decreto 1807, sin costo. <a href="/plan-parcial-colombia" style={{color:'#2E75B6', fontWeight:600}}>Ver servicio para planes parciales →</a> o contáctenos por <strong>WhatsApp +57 302 477 8910</strong>.</p>
    </>,
    faqItems: [
      {
        q: '¿Qué es el Decreto 1807 de 2014 y cuándo aplica para mi plan parcial?',
        a: 'El Decreto 1807 de 2014 regula los estudios de amenaza, vulnerabilidad y riesgo que deben realizarse para incorporar suelo al ordenamiento o desarrollar proyectos urbanísticos en zonas con amenaza hídrica o de movimientos en masa. Aplica a su plan parcial cuando el polígono está en zona de amenaza alta o media según el mapa del POT municipal, o cuando existen cauces dentro o adyacentes al polígono.',
      },
      {
        q: '¿Cuánto cuesta el estudio detallado de gestión del riesgo para un plan parcial?',
        a: 'Los honorarios dependen del área del polígono y la complejidad del sistema hídrico. Para polígonos menores de 5 ha, el costo oscila entre $18 y $30 millones COP. Para polígonos de 5 a 20 ha con modelación HEC-RAS 2D, entre $30 y $60 millones. Desarrollos mayores de 20 ha tienen propuesta a medida. BIC entrega propuesta técnica y económica en 24 horas sin costo.',
      },
      {
        q: '¿Qué pasa si no presento el estudio detallado Decreto 1807?',
        a: 'Sin el estudio detallado aprobado, Planeación municipal no puede emitir concepto favorable sobre el plan parcial. El proceso queda detenido hasta que se presente el estudio. Esto implica retrasos de 3 a 9 meses en el cronograma del proyecto. La recomendación es iniciar el estudio en paralelo con el diagnóstico del predio.',
      },
      {
        q: '¿Qué diferencia hay entre estudio básico y estudio detallado del Decreto 1807?',
        a: 'El estudio básico lo realiza el municipio a escala territorial para el POT, usando información secundaria. El estudio detallado lo encarga el promotor del plan parcial a escala de predio, con modelación HEC-RAS, topobatimetría de campo y cartografía 1:2.000. El estudio detallado es el que Planeación exige antes de emitir concepto sobre el plan parcial.',
      },
    ],
  },

}

export default articlesQ
