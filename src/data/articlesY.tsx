import React from 'react'
import QuoteFormInline from '../components/QuoteFormInline'

// Articles Y — Junio 2026: buyer-intent trámites ambientales (permiso vertimiento + concesión aguas)
const articlesY: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'documentos-permiso-vertimiento-corpocaldas-2026': {
    title: 'Qué documentos necesito para tramitar permiso de vertimiento ante CORPOCALDAS 2026',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Trámites Ambientales / CORPOCALDAS',
    metaDesc: 'Lista completa de documentos para tramitar permiso de vertimiento ante CORPOCALDAS en 2026. Requisitos técnicos, diferencias PSMV y PTARD, y cómo evitar que devuelvan el expediente.',
    keywords: 'documentos permiso vertimiento CORPOCALDAS, requisitos permiso vertimiento Colombia, trámite ambiental vertimientos Caldas 2026',
    faqItems: [
      {
        q: '¿Cuánto tiempo tiene CORPOCALDAS para pronunciarse sobre el permiso de vertimiento?',
        a: 'Según el Decreto 1076 de 2015, CORPOCALDAS tiene hasta 60 días hábiles para admitir el expediente y 120 días hábiles para expedir el acto administrativo una vez admitida la solicitud. En la práctica, los expedientes completos con estudios sólidos tienen respuesta en 4 a 8 meses; los incompletos pueden superar los 18 meses por devoluciones.',
      },
      {
        q: '¿Es obligatorio contratar un ingeniero para tramitar el permiso de vertimiento ante CORPOCALDAS?',
        a: 'Los documentos técnicos exigidos —caracterización de vertimientos, memoria técnica del PSMV o PTARD, y plano de localización georreferenciado— deben estar firmados por un profesional habilitado (ingeniero civil, sanitario o ambiental con tarjeta profesional vigente). Sin esta firma, CORPOCALDAS rechaza el expediente en la etapa de admisión.',
      },
      {
        q: '¿Qué diferencia hay entre el PSMV y el PTARD en el trámite de permiso de vertimiento?',
        a: 'El PSMV (Plan de Saneamiento y Manejo de Vertimientos) aplica a prestadores del servicio público de alcantarillado; es un instrumento de gestión con metas progresivas. El PTARD (Planta de Tratamiento de Aguas Residuales Domésticas) es el diseño técnico de la solución de tratamiento para un predio o empresa puntual. Para vertimientos industriales se exige el PCV (Plan de Cumplimiento de Vertimientos), no el PSMV.',
      },
      {
        q: '¿Qué pasa si CORPOCALDAS devuelve el expediente?',
        a: 'Si el expediente no cumple los requisitos, CORPOCALDAS lo devuelve dentro de los primeros 30 días hábiles mediante auto de inadmisión. El solicitante tiene 10 días hábiles para subsanar las deficiencias; si no lo hace en ese plazo, se entiende que desiste y debe comenzar el trámite desde cero. Por eso es crítico entregar el expediente completo desde la primera radicación.',
      },
    ],
    body: (
      <>
        <p>Tramitar un permiso de vertimiento ante <strong>CORPOCALDAS</strong> es un proceso técnico-jurídico que puede durar entre 4 y 18 meses, dependiendo de un factor determinante: la completitud del expediente en la primera radicación. Una solicitud con documentos faltantes o estudios deficientes es devuelta por CORPOCALDAS —perdiendo meses y generando sobrecostos— mientras que un expediente bien preparado entra directamente a evaluación técnica. Esta guía describe cada documento requerido, en qué orden prepararlo y qué errores comunes causan las devoluciones.</p>

        <h2>Marco legal: ¿qué norma regula el permiso de vertimiento en Caldas?</h2>
        <p>El permiso de vertimiento en Colombia está regulado principalmente por el <strong>Decreto 1076 de 2015</strong> (Decreto Único Reglamentario del sector Ambiente), que compila los requisitos del Decreto 3930 de 2010 y el Decreto 4728 de 2010. Los estándares de calidad que debe cumplir el vertimiento se establecen en la <strong>Resolución 0631 de 2015</strong> del MADS, que fija los límites máximos permisibles para cada parámetro según el tipo de actividad productiva. CORPOCALDAS aplica estas normas nacionales más sus propios lineamientos regionales, que en algunos casos son más estrictos para cuencas con declaratoria de ordenación.</p>

        <h2>Lista completa de documentos requeridos</h2>
        <p>Los siguientes documentos son exigidos por CORPOCALDAS para tramitar un permiso de vertimiento a cuerpo de agua superficial o al suelo (Artículo 2.2.3.3.5.3 del Decreto 1076 de 2015):</p>

        <h3>1. Formulario único nacional de solicitud de permiso de vertimiento</h3>
        <p>Disponible en el portal de CORPOCALDAS o en ventanilla. Debe diligenciarse completo, con coordenadas del punto de descarga en el sistema de referencia oficial MAGNA-SIRGAS, caudal estimado del vertimiento y características del cuerpo receptor. Cualquier campo vacío es causal de devolución inmediata.</p>

        <h3>2. Certificado de uso del suelo</h3>
        <p>Expedido por el municipio donde se ubica el predio (Alcaldía — Oficina de Planeación). Debe confirmar que la actividad generadora del vertimiento es compatible con el uso del suelo asignado en el POT o PBOT del municipio. Si el predio está en suelo rural, se requiere concepto de uso condicionado. Sin este certificado, CORPOCALDAS no puede verificar la legalidad de la actividad.</p>

        <h3>3. Certificado de libertad y tradición del predio</h3>
        <p>Expedido por la Superintendencia de Notariado y Registro, con antigüedad no mayor a 30 días calendario. Acredita que el solicitante es propietario o poseedor del predio desde donde se genera el vertimiento. Si el solicitante es arrendatario, debe presentar adicionalmente el contrato de arrendamiento vigente y el poder del propietario.</p>

        <h3>4. Registro Único Tributario (RUT) y documento de identidad</h3>
        <p>Para personas naturales: cédula de ciudadanía. Para personas jurídicas: NIT, cámara de comercio con fecha de expedición no mayor a 90 días y acta de nombramiento del representante legal vigente. Si el trámite lo gestiona un apoderado, se requiere poder autenticado ante notario.</p>

        <h3>5. Caracterización del vertimiento</h3>
        <p>Es el documento técnico más exigente del expediente. Debe incluir los resultados de un análisis fisicoquímico y microbiológico del efluente generado, realizado por un <strong>laboratorio acreditado ante el IDEAM</strong>. Los parámetros mínimos son los establecidos en la Resolución 0631 de 2015 para el sector o actividad específica. Para vertimientos domésticos: pH, DBO5, DQO, SST, grasas y aceites, coliformes totales y fecales. Para vertimientos industriales se añaden los parámetros específicos del sector (metales pesados, compuestos orgánicos, etc.). <strong>Una caracterización de laboratorio no acreditado no es válida ante CORPOCALDAS.</strong></p>

        <h3>6. Plano de localización georreferenciado</h3>
        <p>Debe mostrar la ubicación del predio, el punto exacto de descarga del vertimiento (con coordenadas MAGNA-SIRGAS), el cuerpo de agua receptor identificado por nombre y corriente según el catálogo del IDEAM, y la distancia al cauce. El plano debe estar elaborado a escala legible (mínimo 1:5.000 para predios rurales) y firmado por un profesional habilitado. En zonas con POMCA adoptado, debe verificarse que el punto de descarga no esté en zona de ronda hídrica protegida.</p>

        <h3>7. Memoria técnica del sistema de tratamiento (PSMV, PTARD o PCV)</h3>
        <p>Este es el documento que explica cómo se va a tratar el vertimiento para cumplir los estándares de la Resolución 0631:</p>
        <ul>
          <li><strong>PTARD</strong> (Planta de Tratamiento de Aguas Residuales Domésticas): para predios residenciales, conjuntos o establecimientos con vertimientos de origen doméstico. Debe incluir cálculos hidráulicos, selección y dimensionamiento de unidades de tratamiento, y proyección de carga contaminante.</li>
          <li><strong>PSMV</strong> (Plan de Saneamiento y Manejo de Vertimientos): aplica exclusivamente a prestadores del servicio público de alcantarillado. Incluye diagnóstico de la red, metas de reducción de carga contaminante y cronograma de inversiones.</li>
          <li><strong>PCV</strong> (Plan de Cumplimiento de Vertimientos): para vertimientos industriales que no cumplen los límites de la Resolución 0631 en el momento de la solicitud y deben presentar un plan de ajuste con fechas compromisos.</li>
        </ul>
        <p>Todos estos documentos deben estar firmados por un <strong>ingeniero civil, sanitario o ambiental con tarjeta profesional vigente</strong>. La firma del profesional implica responsabilidad técnica sobre la información presentada.</p>

        <h3>8. Aforo del cuerpo receptor (cuando aplica)</h3>
        <p>CORPOCALDAS puede exigir un aforo del cuerpo de agua receptor para verificar la capacidad de autodepuración del cauce. Esto aplica especialmente cuando el caudal del vertimiento supera el 10% del caudal mínimo del cuerpo receptor (Q95 o caudal de estiaje), o cuando el tramo receptor tiene declaratoria de ordenación por saturación de carga contaminante. El aforo debe realizarse en época de verano (caudal mínimo) y presentarse con metodología hidráulica validada.</p>

        <QuoteFormInline serviceId="permiso" />

        <h2>Vertimiento puntual vs. vertimiento difuso: diferencias en el trámite</h2>
        <p>El <strong>vertimiento puntual</strong> es aquel que se descarga al cuerpo de agua por un punto de salida definido y geolocalizable (tubo, canal, desagüe). Es el más común en industrias, predios residenciales y proyectos de infraestructura. El trámite descrito arriba aplica a este tipo.</p>
        <p>El <strong>vertimiento difuso</strong> no tiene un punto de descarga único —ocurre a través del suelo o en áreas extensas— y es típico de actividades agrícolas con uso de fertilizantes o pesticidas. Para este tipo, CORPOCALDAS generalmente exige un Plan de Manejo Ambiental (PMA) en lugar del permiso de vertimiento convencional, con medidas de control en campo. No requiere caracterización de laboratorio en el mismo sentido, pero sí un diagnóstico técnico de impacto sobre acuíferos y suelos.</p>

        <h2>Cómo evitar que devuelvan su expediente</h2>
        <p>Las causas más frecuentes de devolución por parte de CORPOCALDAS son: formulario incompleto o con coordenadas erradas, certificado de uso del suelo vencido (más de 60 días), caracterización realizada por laboratorio no acreditado ante IDEAM, memoria técnica sin firma profesional o sin número de tarjeta profesional, y plano sin escala ni coordenadas MAGNA-SIRGAS. Preparar el expediente con un profesional que conozca los criterios específicos de CORPOCALDAS reduce el riesgo de devolución a casi cero.</p>

        <h2>BIC acompaña el trámite ante CORPOCALDAS</h2>
        <p>En <strong>BIC — Bernal Ingeniería Consultores</strong> elaboramos todos los documentos técnicos requeridos: la memoria técnica del PTARD o el PCV, el plano georreferenciado, el análisis del cuerpo receptor y la revisión del expediente completo antes de radicar. Nuestros ingenieros tienen experiencia directa en trámites ante CORPOCALDAS, CARDER y otras Corporaciones del Eje Cafetero. <strong>¿Necesita el permiso de vertimiento para su proyecto en Caldas o el Eje Cafetero?</strong> Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
      </>
    ),
  },

  'cuanto-demora-concesion-aguas-superficiales-colombia-2026': {
    title: 'Cuánto demora una concesión de aguas superficiales en Colombia 2026',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Trámites Ambientales / Concesiones de Agua',
    metaDesc: 'Guía real de plazos para tramitar una concesión de aguas superficiales en Colombia 2026. Fases del trámite, tiempos por CAR, factores de demora y cómo acelerar el proceso ante CORPOCALDAS.',
    keywords: 'cuánto demora concesión aguas superficiales Colombia, plazos concesión aguas CORPOCALDAS, tiempo trámite concesión agua Colombia 2026',
    faqItems: [
      {
        q: '¿Cuánto tiempo demora una concesión de aguas superficiales ante CORPOCALDAS?',
        a: 'En CORPOCALDAS, una concesión de aguas superficiales para proyectos simples (caudales menores, sin oposición) demora entre 4 y 8 meses desde la radicación hasta la resolución de otorgamiento. Proyectos con alto caudal, oposición de terceros o cuerpos de agua en ordenación pueden superar los 12-18 meses.',
      },
      {
        q: '¿Qué es la concesión provisional y cuándo aplica?',
        a: 'La concesión provisional es una autorización temporal que algunas CARs otorgan mientras se adelanta el estudio técnico completo de la solicitud. Permite usar el recurso hídrico por un período limitado (generalmente 1-2 años) y puede convertirse en concesión definitiva si el estudio confirma disponibilidad del recurso. No todas las CARs la otorgan; CORPOCALDAS la concede en casos debidamente justificados con urgencia demostrada.',
      },
      {
        q: '¿Qué pasa si el caudal disponible en el cauce es insuficiente?',
        a: 'Si el estudio hidrológico demuestra que el caudal disponible (Q95 o caudal ecológico mínimo) no es suficiente para satisfacer la demanda solicitada sin afectar otros usuarios aguas abajo, CORPOCALDAS puede negar la concesión, otorgarla por un caudal menor al solicitado, o condicionarla a períodos de uso restringido (por ejemplo, solo en épocas de lluvias). Por eso es crítico que el estudio hidrológico previo sea realista.',
      },
      {
        q: '¿Necesito contratar un estudio hidrológico para pedir la concesión?',
        a: 'Sí. CORPOCALDAS exige un estudio de disponibilidad hídrica que incluya aforo del cuerpo de agua, análisis de caudales mínimos (Q95) y comparación con la demanda solicitada. Este estudio debe estar firmado por un ingeniero habilitado. Sin él, el expediente no es admitido.',
      },
    ],
    body: (
      <>
        <p>La respuesta directa: una concesión de aguas superficiales en Colombia demora entre <strong>3 y 18 meses</strong>, dependiendo de la CAR, la complejidad del proyecto y —sobre todo— la calidad del expediente que se presente. Este rango tan amplio no es caprichoso: refleja la diferencia entre un expediente técnico sólido que entra directo a evaluación, y uno con estudios deficientes que regresa varias veces por subsanaciones. Esta guía explica cada fase del trámite, los tiempos reales por corporación y qué factores puede controlar el solicitante para no quedar atrapado en el extremo superior de ese rango.</p>

        <h2>¿Qué es una concesión de aguas superficiales y cuándo se necesita?</h2>
        <p>La <strong>concesión de aguas superficiales</strong> es el permiso que otorga la Corporación Autónoma Regional (CAR) para usar el agua de un río, quebrada, lago o embalse con un fin específico: riego agrícola, abastecimiento de acueductos rurales, uso industrial, generación eléctrica o recreación. En Colombia, el agua es un recurso de uso público y ningún particular puede usarla sin autorización de la CAR competente, según el <strong>Artículo 88 del Decreto Ley 2811 de 1974</strong> (Código Nacional de Recursos Naturales) y el <strong>Decreto 1076 de 2015</strong>.</p>
        <p>La concesión es necesaria siempre que se capte agua de un cauce natural, incluso en predios propios. La única excepción son los usos mínimos de subsistencia (consumo doméstico de una familia campesina en predio rural) que algunos decretos eximen de permiso, pero con estrictos límites de caudal.</p>

        <h2>Fases del trámite y tiempos reales</h2>

        <h3>Fase 1 — Preparación del expediente: 4 a 8 semanas</h3>
        <p>Antes de radicar, el solicitante debe preparar: el estudio hidrológico con aforo del cauce (requiere salida de campo y laboratorio), el formulario único de solicitud, los documentos legales del predio, el certificado de uso del suelo y la memoria técnica del sistema de captación. Esta fase depende completamente del solicitante y de qué tan rápido trabaje el equipo técnico. Con un profesional dedicado, 4 semanas son suficientes para proyectos simples; proyectos con captaciones complejas o en zonas de difícil acceso pueden requerir 8 semanas.</p>

        <h3>Fase 2 — Radicación y admisión: 15 a 30 días hábiles</h3>
        <p>Una vez radicado el expediente, CORPOCALDAS y demás CARs tienen <strong>30 días hábiles para admitirlo o inadmitirlo</strong> (Decreto 1076 de 2015, Art. 2.2.3.2.15.8). Si hay deficiencias en los documentos, la CAR expide un auto de inadmisión y otorga 10 días hábiles para subsanar. Un expediente bien preparado pasa a evaluación en menos de 2 semanas.</p>

        <h3>Fase 3 — Visita técnica: 1 a 3 meses después de la admisión</h3>
        <p>Después de la admisión, los técnicos de la CAR realizan una visita al predio y al punto de captación para verificar en campo la información del expediente. Esta es la fase con mayor variabilidad en los tiempos reales: en CORPOCALDAS, la visita suele programarse entre 4 y 12 semanas después de la admisión, según la carga de trabajo del equipo técnico y la accesibilidad del predio. Proyectos en zonas remotas de Caldas (alto Oriente, sur del departamento) pueden esperar más.</p>

        <h3>Fase 4 — Concepto técnico y oposiciones: 2 a 4 meses</h3>
        <p>Con la visita realizada, el equipo técnico elabora el concepto de viabilidad hídrica. En paralelo, la CAR debe publicar la solicitud para que terceros afectados puedan oponerse (por ejemplo, usuarios aguas abajo con concesiones previas, acueductos veredales, comunidades étnicas con derechos sobre el agua). Si hay oposiciones, el trámite puede extenderse 3 a 6 meses adicionales para resolver las controversias.</p>

        <h3>Fase 5 — Resolución de otorgamiento: 30 a 60 días hábiles tras el concepto</h3>
        <p>Si el concepto técnico es favorable, la dirección jurídica de la CAR elabora la resolución de otorgamiento. Esta fase raramente se demora más de 2 meses si no hay oposiciones pendientes. La resolución establece el caudal autorizado, el período de la concesión (generalmente 10 años renovables), las condiciones de uso y las obligaciones de medición y reporte.</p>

        <h2>Tiempos reales por CAR en la región</h2>
        <p>Los tiempos legales y los tiempos reales difieren significativamente. Basado en experiencia directa en trámites recientes:</p>
        <ul>
          <li><strong>CORPOCALDAS (Caldas):</strong> 4 a 8 meses para proyectos simples con expediente completo. 12 a 18 meses con oposiciones o en cuencas con POMCA que limita caudales disponibles.</li>
          <li><strong>CARDER (Risaralda):</strong> Tiempos similares a CORPOCALDAS, 5 a 9 meses para proyectos de bajo impacto. CARDER es conocida por ser rigurosa en la verificación de caudales ecológicos mínimos.</li>
          <li><strong>CRQ (Quindío):</strong> 4 a 7 meses en promedio, con mejor tiempo de respuesta en la fase de admisión. El departamento tiene menor presión sobre el recurso hídrico que Caldas.</li>
          <li><strong>CORNARE (oriente antioqueño):</strong> 6 a 12 meses. Cuencas muy demandadas (zona minera, industrial) pueden superar los 18 meses por saturación de caudales concesionados.</li>
        </ul>

        <h2>Qué factores hacen que la concesión se demore más</h2>
        <p><strong>Expediente incompleto:</strong> Es la causa número uno de demoras. Documentos faltantes, estudios sin firma profesional o datos inconsistentes generan el ciclo devolución-subsanación que puede repetirse dos o tres veces y añadir 6 meses al trámite.</p>
        <p><strong>Estudio hidrológico deficiente:</strong> Si el estudio no incluye aforo en campo en época de estiaje, o si los cálculos de disponibilidad hídrica son cuestionados por el técnico de la CAR, se exige información complementaria antes de la visita. Esto añade 2 a 4 meses.</p>
        <p><strong>Oposición de terceros:</strong> Acueductos veredales, propietarios aguas abajo o comunidades con derechos sobre el recurso pueden oponerse formalmente. Cada oposición abre un proceso de audiencia que puede durar 3 a 6 meses adicionales.</p>
        <p><strong>Cuencas en ordenación o con POMCA vigente:</strong> En cuencas donde el POMCA ha identificado déficit hídrico o conflictos de uso, la CAR aplica restricciones adicionales. CORPOCALDAS tiene cuencas con esta condición en la cuenca del río Chinchiná y afluentes del Cauca caldense.</p>
        <p><strong>Reprogramación de visitas técnicas:</strong> La capacidad operativa de las CARs es limitada. Si el predio es de difícil acceso o la solicitud se radica en épocas de alto volumen (fin de año fiscal, inicio de proyectos SGR), la visita puede programarse con 4 a 6 meses de espera.</p>

        <h2>Cómo acelerar el trámite</h2>
        <p>La estrategia más efectiva es <strong>entregar el expediente completo y técnicamente sólido desde la primera radicación</strong>, eliminando el ciclo de devoluciones. Esto implica:</p>
        <ul>
          <li>Realizar el aforo del cauce en época de estiaje (no en temporada de lluvias), para que los caudales mínimos sean verificables y representativos.</li>
          <li>Solicitar la caudal solo lo que el proyecto realmente necesita — solicitar más caudal del necesario levanta alertas en la evaluación técnica.</li>
          <li>Verificar previamente si la cuenca tiene ordenación vigente y cuáles son los límites de concesión aplicables.</li>
          <li>Incluir en la memoria técnica la justificación del uso del agua y el balance hídrico del predio, anticipando las preguntas del técnico evaluador.</li>
          <li>Mantener actualizados los documentos legales (cámara de comercio, poderes, certificados) para que no venzan durante el trámite.</li>
        </ul>

        <QuoteFormInline serviceId="concesion" />

        <h2>Concesión provisional vs. concesión definitiva</h2>
        <p>La <strong>concesión definitiva</strong> es el instrumento normal: se otorga por 10 años renovables, establece el caudal exacto autorizado y las condiciones de medición. La <strong>concesión provisional</strong> es una autorización temporal que algunas CARs otorgan por 1 o 2 años mientras completan el estudio técnico, especialmente en proyectos de acueductos rurales con urgencia de abastecimiento demostrada. No todas las CARs la otorgan de manera sistemática, y en CORPOCALDAS se concede solo con justificación expresa de urgencia. La concesión provisional no reemplaza la definitiva — el solicitante debe continuar el trámite ordinario mientras usa el recurso con la autorización temporal.</p>

        <h2>BIC realiza el estudio hidrológico y acompaña el trámite</h2>
        <p>En <strong>BIC — Bernal Ingeniería Consultores</strong> realizamos el estudio hidrológico completo (aforo en campo, análisis de caudales Q95, cálculo de caudal ecológico mínimo) y elaboramos el expediente técnico para la solicitud de concesión ante CORPOCALDAS, CARDER, CRQ y CORNARE. Nuestro equipo conoce los requisitos específicos de cada corporación y prepara el expediente para minimizar el riesgo de devolución. <strong>¿Necesita la concesión de aguas para su proyecto en Caldas o el Eje Cafetero?</strong> Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
      </>
    ),
  },
}

export default articlesY
