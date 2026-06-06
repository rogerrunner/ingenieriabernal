import QuoteFormInline from '../components/QuoteFormInline'

// Articles X — Blog semana 2: 4 artículos gaps comerciales (promotores, CAR, drenaje, decisión)
const articlesX: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'cuanto-cuesta-licencia-urbanismo-colombia': {
    title: '¿Cuánto cuesta tramitar una licencia de urbanismo en Colombia? Precios y estudios 2026',
    date: 'Junio 2026',
    readTime: '9 min',
    category: 'Precios y Costos',
    metaDesc: 'Guía de costos reales para tramitar licencia de urbanismo en Colombia 2026: estudios técnicos requeridos, honorarios de curaduría, plazos y lo que el promotor necesita tener listo antes de radicar.',
    keywords: 'cuánto cuesta licencia de urbanismo colombia, precio licencia urbanismo promotor, estudios licencia urbanismo colombia, costo componente hidrico urbanizacion colombia',
    body: <>
      <p>Tramitar una licencia de urbanismo es el paso que convierte un terreno en un proyecto. Para un promotor con presupuesto, el proceso tiene costos que van mucho más allá de las expensas de curaduría: los estudios técnicos que la curaduría exige antes siquiera de recibir la radicación pueden representar entre el 30% y el 60% del costo total del trámite.</p>
      <p>Esta guía desglosa los costos reales del trámite para Colombia en 2026, con énfasis en lo que BIC elabora como parte del componente técnico.</p>

      <h2>Costos del trámite de licencia de urbanismo (resumen)</h2>
      <p>El trámite de una licencia de urbanismo en Colombia involucra tres grandes grupos de costos:</p>
      <ul>
        <li><strong>Estudios técnicos previos:</strong> $18M – $80M COP según el tamaño del proyecto</li>
        <li><strong>Expensas de la curaduría urbana:</strong> calculadas sobre el valor de obra estimado (entre 0.3% y 0.8% del presupuesto de urbanismo)</li>
        <li><strong>Honorarios de arquitecto/urbanista:</strong> quienes elaboran el plano urbanístico y los documentos de solicitud</li>
      </ul>
      <p>El componente más variable —y el que más frecuentemente retrasa el proyecto— es el de los estudios técnicos. La curaduría no recibe radicaciones incompletas: si falta el estudio de riesgo hídrico, el trámite no inicia.</p>

      <h2>Estudios técnicos obligatorios y sus precios reales</h2>
      <p>Para predios en zonas con cuencas hídricas o con amenaza de inundación identificada en el POT, el Decreto 1807 de 2014 exige el siguiente estudio:</p>

      <h3>Estudio de gestión del riesgo por inundación (Decreto 1807)</h3>
      <ul>
        <li><strong>Urbanización pequeña (1–5 ha):</strong> $15M – $28M COP. Incluye análisis hidrológico, modelación HEC-RAS 1D o 2D, delimitación de zonas de amenaza y concepto de aptitud.</li>
        <li><strong>Urbanización mediana (5–30 ha):</strong> $28M – $50M COP. Modelación 2D obligatoria, levantamiento topobatimétrico, cartografía SIG y firma COPNIA.</li>
        <li><strong>Plan parcial grande (+30 ha):</strong> $50M – $80M+ COP. Puede incluir estudios de torrencialidad, gestión del riesgo de taludes y PMGR.</li>
      </ul>
      <p>El tiempo de entrega varía entre 3 y 6 semanas según la complejidad del sistema hídrico y la disponibilidad de datos hidrológicos históricos en la zona.</p>

      <h3>Diseño de redes de acueducto y alcantarillado (RAS 2017)</h3>
      <p>Si la urbanización va a crear nuevas redes de servicios públicos, la curaduría también exige el diseño hidráulico de acueducto y alcantarillado conforme al RAS 2017 y la Resolución 0330 de 2017. Precios:</p>
      <ul>
        <li><strong>Urbanización hasta 50 unidades:</strong> $12M – $25M COP</li>
        <li><strong>50 a 200 unidades:</strong> $25M – $45M COP</li>
        <li><strong>200+ unidades:</strong> cotización específica</li>
      </ul>

      <h3>Memorias hidrosanitarias del proyecto (NSR-10)</h3>
      <p>Para las construcciones dentro de la urbanización se requiere la memoria de cálculo de las redes internas de agua y saneamiento. Este ítem va aparte del diseño de redes maestras. Precio: $8M – $18M COP según número de unidades y tipología.</p>

      <h2>Expensas de curaduría: cómo calcularlas</h2>
      <p>Las expensas se calculan sobre el valor de obra declarado por el solicitante y varían por municipio. Para Manizales, Pereira y Armenia, los rangos aproximados para urbanizaciones son:</p>
      <ul>
        <li><strong>Proyecto de 20 unidades, $3.000M obra:</strong> expensas ~$9M – $15M COP</li>
        <li><strong>Proyecto de 80 unidades, $12.000M obra:</strong> expensas ~$36M – $55M COP</li>
        <li><strong>Proyecto de 200+ unidades:</strong> expensas superiores a $80M COP en ciudades principales</li>
      </ul>
      <p>Las expensas se pagan al momento de la radicación y no son reembolsables si el trámite se abandona o no se aprueba. Por eso, tener los estudios técnicos completos y bien elaborados antes de radicar es crítico.</p>

      <h2>Plazos reales del trámite</h2>
      <p>El Decreto 1077 de 2015 establece plazos máximos de 45 días hábiles para la resolución de una licencia de urbanismo, pero en la práctica los tiempos son mayores:</p>
      <ul>
        <li><strong>Preparación de estudios técnicos:</strong> 4–8 semanas</li>
        <li><strong>Revisión por la curaduría (primera respuesta):</strong> 30–60 días hábiles</li>
        <li><strong>Correcciones y re-radicación:</strong> 2–4 semanas adicionales</li>
        <li><strong>Resolución final:</strong> 15–30 días hábiles más</li>
      </ul>
      <p>Total real: entre 5 y 9 meses desde que se contratan los primeros estudios hasta el acto administrativo de licencia. Esto asumiendo que los estudios técnicos estén bien elaborados desde el primer intento.</p>

      <h2>El error más costoso: estudios que la curaduría rechaza</h2>
      <p>El 40% de las radicaciones de licencia de urbanismo que llegan a las curadurías con componente hídrico tienen algún defecto en el estudio técnico. Los más comunes:</p>
      <ul>
        <li>Modelación HEC-RAS en 1D cuando el predio requiere 2D por la complejidad del sistema hídrico</li>
        <li>Período de retorno de 100 años omitido (el Decreto 1807 lo exige explícitamente)</li>
        <li>Área de influencia mal delimitada: modela solo el cauce y no la llanura de inundación del predio</li>
        <li>Firma de ingeniero sin matrícula COPNIA vigente</li>
        <li>Concepto de aptitud urbanística ausente o incompleto</li>
      </ul>
      <p>Cuando la curaduría rechaza el estudio, el proceso se reinicia desde la corrección. Eso significa semanas o meses adicionales y, en algunos casos, honorarios por corrección que el consultor cobra aparte del contrato original.</p>

      <QuoteFormInline serviceId="decreto1807" />
    </>,
    faqItems: [
      {
        q: '¿Es obligatorio el estudio de riesgo hídrico para toda licencia de urbanismo?',
        a: 'No para todas. El Decreto 1807 de 2014 lo exige cuando el predio se ubica en zona de amenaza hídrica identificada en el POT, cuando colinda con cauces o cuando el POT municipal así lo establece. La curaduría urbana determina en la consulta previa si aplica para su predio específico.',
      },
      {
        q: '¿Puede BIC gestionar todos los estudios técnicos para la licencia o solo el componente hídrico?',
        a: 'BIC se especializa en el componente hídrico: estudio de riesgo Decreto 1807, diseño de acueducto y alcantarillado, y memorias hidrosanitarias. Para el estudio de suelos (NSR-10 Título H) y el levantamiento topográfico nos coordinamos con firmas aliadas según la necesidad del proyecto.',
      },
      {
        q: '¿Cuánto tiempo necesita BIC para entregar el estudio de riesgo hídrico?',
        a: 'Entre 3 y 5 semanas para proyectos estándar (hasta 30 ha). Proyectos mayores o con sistemas hídricos complejos pueden requerir hasta 8 semanas. BIC entrega una propuesta con cronograma específico en 24 horas.',
      },
      {
        q: '¿Qué pasa si Planeación pide correcciones al estudio después de radicarlo?',
        a: 'BIC atiende las observaciones de la curaduría o Planeación sin costo adicional, siempre que sean correcciones al estudio original y no cambios al proyecto que modifiquen el alcance del trabajo. Esto se incluye en el contrato.',
      },
    ],
  },

  'permiso-ocupacion-cauce-colombia': {
    title: 'Permiso de ocupación de cauce en Colombia: qué es, cuándo se necesita y cómo tramitarlo',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Trámites CAR',
    metaDesc: 'Guía completa sobre el permiso de ocupación de cauce en Colombia: definición, casos de obligatoriedad, estudios técnicos requeridos ante la CAR y plazos reales del trámite. CORPOCALDAS, CARDER, CRQ y más.',
    keywords: 'permiso ocupacion cauce colombia, tramite ocupacion cauce CAR colombia, estudio ocupacion cauce rio colombia, CORPOCALDAS permiso cauce, construir en cauce colombia',
    body: <>
      <p>Construir cualquier obra dentro de un cauce, en su ronda hídrica o en la llanura de inundación de un río o quebrada en Colombia requiere un permiso de ocupación de cauce expedido por la Corporación Autónoma Regional (CAR) con jurisdicción en el área. Sin este permiso, la obra es ilegal y puede ser objeto de medida preventiva, demolición y sanción económica.</p>
      <p>Esta guía explica qué obras requieren este permiso, qué estudios hay que presentar ante la CAR y cuánto tiempo y dinero demanda el trámite.</p>

      <h2>¿Qué es el permiso de ocupación de cauce?</h2>
      <p>El permiso de ocupación de cauce es una autorización ambiental regulada por el Decreto 1076 de 2015 (Artículo 2.2.3.2.14.1 y siguientes). Lo otorga la CAR competente a personas naturales o jurídicas que necesitan:</p>
      <ul>
        <li>Construir obras dentro del cauce de un río, quebrada, canal o humedal</li>
        <li>Realizar rellenos o cortes en la ronda hídrica</li>
        <li>Desviar o canalizar cauces</li>
        <li>Instalar estructuras que reduzcan la sección hidráulica del cauce (puentes, box culverts, alcantarillas de diámetro significativo)</li>
        <li>Realizar obras de encauzamiento, protección de riberas o gaviones</li>
      </ul>
      <p>El permiso de ocupación es distinto de la concesión de aguas (que autoriza extraer agua) y del permiso de vertimientos (que autoriza descargar aguas residuales). Son tres permisos independientes aunque pueden tramitarse simultáneamente en algunos casos.</p>

      <h2>¿Cuándo es obligatorio?</h2>
      <p>El permiso es obligatorio siempre que la obra afecte física o hidráulicamente el cauce o su ronda. Los casos más frecuentes en proyectos privados y municipales son:</p>
      <ul>
        <li><strong>Urbanizaciones con cauces dentro del predio:</strong> si el proyecto urbanístico canaliza o desvía una quebrada para aprovechar el terreno</li>
        <li><strong>Vías con cruce de cauces:</strong> puentes, alcantarillas y box culverts sobre ríos y quebradas</li>
        <li><strong>Obras de protección costera o fluvial:</strong> espolones, diques, muros de encauzamiento</li>
        <li><strong>Instalaciones industriales cerca a cauces:</strong> bodegas, plantas y parques industriales que requieren movimientos de tierra en zona de ronda</li>
        <li><strong>Obras municipales:</strong> parques lineales de río, ciclovías en ronda hídrica, plazas de mercado cerca a cauces</li>
      </ul>

      <h2>Estudios técnicos que exige la CAR</h2>
      <p>La radicación del permiso de ocupación de cauce requiere un expediente técnico que demuestra que la obra no agrava la amenaza hídrica ni afecta los derechos de terceros. Los documentos estándar son:</p>
      <ul>
        <li><strong>Memoria técnica descriptiva de la obra:</strong> planos de diseño, secciones transversales, especificaciones de materiales</li>
        <li><strong>Estudio hidrológico del cauce:</strong> caudales de diseño para períodos de retorno de 10, 50 y 100 años</li>
        <li><strong>Modelación hidráulica (HEC-RAS):</strong> comparación de la sección del cauce con y sin la obra, para demostrar que no se incrementa la amenaza aguas arriba ni aguas abajo</li>
        <li><strong>Plano de localización georeferenciado:</strong> indicando la ronda hídrica, el área de ocupación y los predios colindantes</li>
        <li><strong>Estudio de impacto ambiental o documento equivalente:</strong> cuando la CAR lo requiere por el tamaño o sensibilidad del proyecto</li>
        <li><strong>Certificado de tradición y libertad del predio</strong></li>
        <li><strong>Firma de ingeniero civil con matrícula COPNIA vigente</strong></li>
      </ul>

      <h2>¿Cuánto cuesta el trámite?</h2>
      <p>Los costos del permiso de ocupación de cauce tienen dos componentes:</p>
      <ul>
        <li><strong>Elaboración de estudios técnicos (honorarios consultoría):</strong> $15M – $45M COP según la complejidad del cauce y la obra. Incluye hidrología, HEC-RAS y memoria técnica.</li>
        <li><strong>Tasas de la CAR:</strong> varía por entidad. CORPOCALDAS, CARDER y CRQ cobran entre $500K y $3M COP en tasas administrativas para este permiso.</li>
      </ul>

      <h2>¿Cuánto tiempo tarda?</h2>
      <p>El Decreto 1076 establece un plazo máximo de 30 días hábiles para que la CAR resuelva la solicitud de permiso de ocupación de cauce, pero en la práctica:</p>
      <ul>
        <li><strong>Preparación del expediente técnico:</strong> 3–6 semanas</li>
        <li><strong>Revisión y requerimientos de la CAR:</strong> 45–90 días hábiles</li>
        <li><strong>Resolución final:</strong> 15–30 días hábiles adicionales</li>
      </ul>
      <p>Total real: entre 4 y 7 meses desde que se contratan los estudios hasta la resolución de permiso. El tiempo se reduce significativamente cuando el expediente está bien documentado desde el primer intento.</p>

      <h2>CAR competentes por región</h2>
      <p>El permiso lo otorga la CAR con jurisdicción en el municipio donde se ubica el cauce:</p>
      <ul>
        <li><strong>Caldas:</strong> CORPOCALDAS</li>
        <li><strong>Risaralda:</strong> CARDER</li>
        <li><strong>Quindío:</strong> CRQ</li>
        <li><strong>Antioquia:</strong> CORNARE, CORANTIOQUIA, CORPOURABÁ (según subregión)</li>
        <li><strong>Tolima:</strong> CORTOLIMA</li>
        <li><strong>Valle del Cauca:</strong> CVC</li>
        <li><strong>Bogotá D.C.:</strong> SDA (Secretaría Distrital de Ambiente)</li>
      </ul>
      <p>BIC tiene experiencia trabajando ante CORPOCALDAS, CARDER y CRQ. Para otras CAR, coordinamos y acompañamos el proceso.</p>

      <QuoteFormInline serviceId="otro" />
    </>,
    faqItems: [
      {
        q: '¿El permiso de ocupación de cauce puede tramitarse junto con la licencia de construcción?',
        a: 'Son trámites independientes: el permiso lo otorga la CAR ambiental, y la licencia la expide la curaduría urbana. En general, la CAR exige que el permiso de ocupación esté resuelto —o al menos radicado— antes de que la curaduría expida la licencia. Lo más eficiente es tramitarlos en paralelo.',
      },
      {
        q: '¿Qué pasa si construyo sin el permiso de ocupación de cauce?',
        a: 'La CAR puede imponer una medida preventiva de suspensión inmediata de la obra, multas que pueden superar los 5.000 SMLMV (aprox. $600M COP en 2026) y exigir la demolición o restauración del cauce a su estado original. Además, la obra queda sin soporte legal para obtener licencia de construcción.',
      },
      {
        q: '¿BIC puede elaborar los estudios para el permiso y acompañarme ante la CAR?',
        a: 'Sí. BIC elabora el expediente técnico completo (hidrología, HEC-RAS, memoria técnica y planos) y acompaña la radicación ante la CAR. También atiende los requerimientos de información adicional que la corporación solicite durante el trámite.',
      },
    ],
  },

  'diseno-sistema-drenaje-pluvial-urbanizacion-colombia': {
    title: 'Diseño del sistema de drenaje pluvial para urbanizaciones en Colombia — Guía técnica 2026',
    date: 'Junio 2026',
    readTime: '10 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Guía técnica completa sobre diseño de drenaje pluvial para urbanizaciones en Colombia: normas RAS 2017, metodologías de cálculo, tipos de sistemas y lo que la curaduría exige. Con precios reales 2026.',
    keywords: 'diseño drenaje pluvial urbanizacion colombia, sistema aguas lluvias urbanizacion colombia, RAS 2017 alcantarillado pluvial urbanizacion, precio diseño alcantarillado pluvial colombia',
    body: <>
      <p>Todo proyecto de urbanización en Colombia que cree más de 3 unidades prediales o que tenga áreas impermeables significativas debe contar con un diseño de sistema de drenaje pluvial aprobado por la empresa de servicios públicos o la entidad municipal competente. Sin este diseño, la curaduría no puede expedir la licencia de urbanismo.</p>
      <p>El drenaje pluvial es uno de los componentes técnicos más costosos del componente hídrico de una urbanización —y uno de los que más errores de diseño presenta, especialmente en el Eje Cafetero donde la intensidad de lluvias es muy alta.</p>

      <h2>¿Qué normas rigen el diseño de drenaje pluvial en Colombia?</h2>
      <p>El marco normativo aplica en capas. La jerarquía es:</p>
      <ul>
        <li><strong>RAS 2017 — Título D:</strong> Norma nacional de sistemas de alcantarillado, incluyendo el pluvial. Define métodos de cálculo, criterios de diseño y materiales aceptados.</li>
        <li><strong>Resolución 0330 de 2017:</strong> Reglamenta el RAS 2017 y actualiza requisitos de diseño para ESP y entes territoriales.</li>
        <li><strong>POT municipal:</strong> Define los períodos de retorno mínimos exigidos por ciudad, las zonas de retiro de cauces y las restricciones de impermeabilización por cuenca.</li>
        <li><strong>Reglamento de la ESP local:</strong> La empresa de acueducto y alcantarillado de cada municipio puede tener requerimientos adicionales sobre puntos de entrega, caudal máximo de descarga y sistemas de retención.</li>
      </ul>

      <h2>Tipos de sistemas de drenaje pluvial en urbanizaciones</h2>
      <p>No existe un sistema único. La solución depende del tamaño del proyecto, la topografía y las exigencias de la ESP:</p>
      <ul>
        <li><strong>Red convencional de tuberías:</strong> El más común en áreas con alcantarillado pluvial existente. Tuberías de PVC o concreto que colectan las aguas de lluvias de vías y zonas comunales y las conducen al cauce más cercano.</li>
        <li><strong>Cunetas y canales a cielo abierto:</strong> Frecuente en urbanizaciones rurales o de baja densidad. Más económico pero requiere mantenimiento periódico.</li>
        <li><strong>Sistemas de retención y detención:</strong> La ESP o el POT los exigen cuando la urbanización está en una subcuenca con capacidad hídrica limitada. Incluye tanques de retención, humedales artificiales y zanjas de infiltración.</li>
        <li><strong>Sistemas urbanos sostenibles (SUDS):</strong> Cada vez más solicitados en ciudades grandes. Combina superficies permeables, jardines de lluvia y biofiltros para reducir el caudal de escorrentía.</li>
      </ul>

      <h2>Metodología de cálculo — lo que el RAS 2017 exige</h2>
      <p>Para urbanizaciones hasta 2.000 ha de cuenca drenante, el RAS 2017 acepta el <strong>Método Racional Modificado</strong> para el cálculo de caudales de diseño. Para cuencas mayores o cuando la ESP lo requiere, se debe usar HEC-HMS o modelo equivalente.</p>
      <p>Los datos de entrada críticos son:</p>
      <ul>
        <li><strong>Curvas IDF (Intensidad-Duración-Frecuencia):</strong> Construidas a partir del análisis de frecuencias de pluviógrafos cercanos. En el Eje Cafetero, las intensidades de lluvia son de las más altas de Colombia — entre 80 y 150 mm/h para períodos de retorno de 10 años.</li>
        <li><strong>Coeficientes de escorrentía:</strong> Dependen del tipo de uso del suelo del proyecto. Una urbanización densificada puede tener coeficientes de 0.70 a 0.85.</li>
        <li><strong>Período de retorno de diseño:</strong> El RAS 2017 establece mínimo 10 años para vías locales, 25 años para colectores troncales y 100 años para obras de paso bajo cauces principales.</li>
      </ul>

      <h2>¿Qué entrega BIC como parte del diseño de drenaje pluvial?</h2>
      <p>El paquete de diseño que entrega BIC y que acepta la curaduría y la ESP incluye:</p>
      <ul>
        <li>Análisis hidrológico de la cuenca drenante con curvas IDF locales</li>
        <li>Cálculo de caudales de diseño por subcuenca y punto de captación</li>
        <li>Diseño hidráulico de tuberías, cámaras de inspección, sumideros y canales</li>
        <li>Planos en AutoCAD (planta y perfil) con nomenclatura de red</li>
        <li>Memoria de cálculo detallada firmada por Ing. COPNIA</li>
        <li>Presupuesto de obras con APU referenciados en precios del mercado regional</li>
        <li>Especificaciones técnicas de construcción</li>
      </ul>

      <h2>Precios reales del diseño de drenaje pluvial (2026)</h2>
      <ul>
        <li><strong>Urbanización hasta 30 unidades en lote plano:</strong> $12M – $22M COP</li>
        <li><strong>Urbanización de 30 a 100 unidades:</strong> $22M – $38M COP</li>
        <li><strong>Urbanización de 100 a 300 unidades:</strong> $38M – $60M COP</li>
        <li><strong>Urbanización grande (+300 unidades) o topografía compleja:</strong> cotización específica</li>
      </ul>
      <p>Estos precios incluyen el diseño hidráulico completo pero no la topografía del predio. Si BIC necesita la topografía y el proyecto no la tiene, se coordina con topógrafo aliado a un costo adicional de $8M – $15M COP según extensión.</p>

      <h2>Errores frecuentes en diseños de drenaje que rechazan las ESP</h2>
      <ul>
        <li>Curvas IDF genéricas (de tabla de texto) en lugar de calculadas para la estación pluviométrica más cercana</li>
        <li>Período de retorno de 10 años para todos los colectores, sin diferenciar por jerarquía de red</li>
        <li>Velocidades de diseño por fuera de los rangos del RAS (mínimo 0.6 m/s, máximo 5 m/s en PVC)</li>
        <li>Puntos de descarga sin estudio de la capacidad receptora del cauce</li>
        <li>Diseño sin coordinar con el diseño de alcantarillado sanitario, generando interferencias en los planos</li>
      </ul>

      <QuoteFormInline serviceId="hec-ras-2d" />
    </>,
    faqItems: [
      {
        q: '¿El diseño de drenaje pluvial es lo mismo que el diseño de alcantarillado?',
        a: 'No. El alcantarillado sanitario maneja las aguas residuales de las unidades habitacionales; el drenaje pluvial maneja las aguas de lluvia de las vías y zonas comunales. En Colombia, el RAS 2017 exige que los dos sistemas sean separados (sistema separado). Diseñarlos juntos o sin separación es motivo de rechazo por la ESP.',
      },
      {
        q: '¿Cuánto tiempo tarda BIC en entregar el diseño de drenaje pluvial?',
        a: 'Entre 3 y 5 semanas para proyectos estándar de hasta 100 unidades, contando desde que se tiene la topografía del predio. Para proyectos más grandes o con sistemas de retención, entre 5 y 8 semanas. BIC entrega cronograma específico con la propuesta.',
      },
      {
        q: '¿Puede BIC diseñar tanto el drenaje pluvial como el alcantarillado sanitario y las redes de acueducto en un solo contrato?',
        a: 'Sí. Cuando BIC diseña los tres componentes simultáneamente hay eficiencias en la coordinación de redes y se reduce el tiempo total del proyecto. Es la opción más frecuente en urbanizaciones nuevas.',
      },
    ],
  },

  'cuanto-cuesta-consultoria-hidraulica-colombia': {
    title: '¿Cuánto cuesta contratar una consultoría hidráulica en Colombia? Precios reales 2026',
    date: 'Junio 2026',
    readTime: '7 min',
    category: 'Precios y Costos',
    metaDesc: 'Rangos de precio actualizados para contratar consultoría hidráulica en Colombia 2026: estudios de riesgo, modelación HEC-RAS, diseño de acueductos, regalías SGR y más. Qué factores determinan el precio.',
    keywords: 'cuánto cuesta consultoría hidráulica colombia, precio ingeniería hidráulica colombia, costo estudio hidráulico colombia, contratar ingeniero hidráulico colombia precio',
    body: <>
      <p>Una de las preguntas más frecuentes de promotores, empresas, alcaldías y propietarios de predios que necesitan un estudio hidráulico en Colombia es: ¿cuánto cuesta esto? La respuesta honesta es: depende. Pero esa respuesta no es útil si no va acompañada de los rangos reales del mercado.</p>
      <p>Esta guía reúne precios actualizados a 2026 para los principales tipos de consultoría hidráulica que contratan clientes privados y entidades públicas en Colombia, basados en proyectos ejecutados por BIC en el Eje Cafetero y otras regiones del país.</p>

      <h2>Tabla de precios por tipo de consultoría hidráulica</h2>

      <h3>Estudios de riesgo hídrico (Decreto 1807)</h3>
      <ul>
        <li><strong>Estudio básico — predio o lote urbano:</strong> $8M – $15M COP. Para licencias de construcción individuales o diagnósticos de aptitud urbanística.</li>
        <li><strong>Estudio estándar — urbanización hasta 15 ha:</strong> $15M – $35M COP. HEC-RAS 2D, delimitación zonas de amenaza, firma COPNIA.</li>
        <li><strong>Estudio detallado — plan parcial o urbanización grande:</strong> $35M – $80M+ COP. Incluye levantamiento topobatimétrico, calibración del modelo y PMGR.</li>
      </ul>

      <h3>Modelación hidráulica HEC-RAS</h3>
      <ul>
        <li><strong>Modelación 1D (cauce simple):</strong> $10M – $20M COP. Para alcantarillas, box culverts y estructuras de paso.</li>
        <li><strong>Modelación 2D (llanura de inundación):</strong> $18M – $45M COP. Para planes parciales, POT y proyectos cerca a cauces con llanura de inundación significativa.</li>
        <li><strong>Modelación con datos de campo (aforos + batimetría):</strong> $25M – $60M COP. Cuando no hay datos hidrológicos disponibles y hay que generarlos en campo.</li>
      </ul>

      <h3>Diseño de acueductos</h3>
      <ul>
        <li><strong>Acueducto veredal (hasta 50 suscriptores):</strong> $12M – $25M COP. Incluye memoria de cálculo, planos y especificaciones RAS 2017.</li>
        <li><strong>Acueducto rural multiveredal (50–500 suscriptores):</strong> $25M – $55M COP.</li>
        <li><strong>Acueducto urbano municipal:</strong> desde $55M COP. Requiere estudio de fuente, diseño PTAP, redes de distribución EPANET y presupuesto detallado.</li>
      </ul>

      <h3>Diseño de alcantarillado y drenaje pluvial</h3>
      <ul>
        <li><strong>Red sanitaria urbanización hasta 100 unidades:</strong> $15M – $30M COP</li>
        <li><strong>Drenaje pluvial urbanización:</strong> $12M – $45M COP según tamaño</li>
        <li><strong>Alcantarillado municipal (diseño completo):</strong> desde $40M COP</li>
      </ul>

      <h3>Memorias hidrosanitarias (NSR-10 / RAS 2017)</h3>
      <ul>
        <li><strong>Vivienda unifamiliar o bifamiliar:</strong> $3M – $6M COP</li>
        <li><strong>Edificio hasta 10 pisos:</strong> $6M – $15M COP</li>
        <li><strong>Edificio de 10 a 30 pisos o uso mixto:</strong> $15M – $35M COP</li>
        <li><strong>Centro comercial o industria:</strong> $20M – $50M+ COP</li>
      </ul>

      <h3>Trámites ante CAR (permiso de vertimientos, ocupación de cauce, concesión de aguas)</h3>
      <ul>
        <li><strong>Concesión de aguas superficiales:</strong> $15M – $30M COP (estudios + acompañamiento)</li>
        <li><strong>Permiso de vertimientos:</strong> $12M – $25M COP</li>
        <li><strong>Ocupación de cauce:</strong> $15M – $40M COP según complejidad de la obra</li>
      </ul>

      <h3>Formulación de proyectos SGR (MGA-Web)</h3>
      <ul>
        <li><strong>Proyecto de agua potable para municipio categoría 5–6:</strong> $20M – $45M COP</li>
        <li><strong>Proyecto de saneamiento básico:</strong> $20M – $40M COP</li>
        <li><strong>Formulación completa + diseños:</strong> $45M – $90M COP</li>
      </ul>

      <h2>¿Qué factores hacen que el precio suba o baje?</h2>
      <p>Los cuatro factores que más afectan el precio final son:</p>
      <ul>
        <li><strong>Disponibilidad de datos:</strong> Si no hay datos hidrológicos (pluviógrafos, limnígrafos, aforos previos) en la zona, hay que generarlos en campo. Eso puede duplicar el costo.</li>
        <li><strong>Complejidad del sistema hídrico:</strong> Un cauce simple con geometría regular es más barato de modelar que una red de drenaje con múltiples tributarios o cauce meandriforme.</li>
        <li><strong>Plazo de entrega:</strong> Estudios con entrega en 2 semanas o menos tienen sobrecargo del 20–30% sobre el precio estándar.</li>
        <li><strong>Desplazamiento:</strong> Para proyectos fuera del Eje Cafetero se agrega entre el 10% y el 20% por movilización del equipo.</li>
      </ul>

      <h2>¿Cómo obtener una propuesta de BIC?</h2>
      <p>BIC entrega propuestas específicas para cada proyecto en menos de 24 horas hábiles. No se cobra por la consulta inicial. Para preparar la propuesta necesitamos:</p>
      <ul>
        <li>Tipo de estudio o diseño requerido</li>
        <li>Municipio o ubicación del proyecto</li>
        <li>Área aproximada o descripción del cauce o infraestructura</li>
        <li>Entidad que solicita el estudio (curaduría, CAR, ESP, banco de proyectos)</li>
        <li>Plazo estimado de entrega</li>
      </ul>

      <QuoteFormInline serviceId="otro" />
    </>,
    faqItems: [
      {
        q: '¿Los precios de BIC incluyen IVA?',
        a: 'BIC es una consultoría de ingeniería. Los servicios profesionales de ingeniería están exentos de IVA según el Estatuto Tributario colombiano cuando son prestados por personas naturales. Para contratos con personas jurídicas o entidades públicas aplicamos la retención en la fuente y demás retenciones de ley. Se aclara en cada propuesta.',
      },
      {
        q: '¿Se pueden hacer pagos en cuotas?',
        a: 'Sí. BIC trabaja típicamente con un anticipo del 40-50% al inicio y el saldo contra entrega del estudio. Para proyectos de larga duración (más de 3 meses) se acuerdan pagos parciales por hitos de avance.',
      },
      {
        q: '¿Qué incluye el precio y qué queda aparte?',
        a: 'El precio incluye la elaboración del estudio, las visitas de campo necesarias (hasta dos por contrato estándar), la firma COPNIA y la atención de una ronda de observaciones del ente revisor. No incluye: topografía del predio (si no se tiene), aforos de campo adicionales, ni traslados para municipios muy alejados de Manizales (se cotiza aparte).',
      },
      {
        q: '¿BIC trabaja con entidades públicas o solo con clientes privados?',
        a: 'Trabajamos con ambos. Para entidades públicas (alcaldías, gobernaciones, ESP públicas) participamos en procesos de contratación del SECOP. Tenemos contratos verificables en SECOP, como el Contrato 621/2021 con la Alcaldía de Puerto Boyacá. Para clientes privados el proceso es más directo.',
      },
    ],
  },

}

export default articlesX
