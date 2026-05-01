// Category H: Acueductos — Diseño, Costos, Concesiones y SGR (5 articles, Mayo 2026)
const articlesH: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'calculo-caudal-diseno-acueducto-rural-colombia': {
    title: 'Cómo calcular el caudal de diseño para un acueducto rural en Colombia (RAS 2017)',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía práctica con fórmulas y ejemplos reales para calcular QMD, QMMD y QMH según el RAS 2017. Dotaciones, factores K1 y K2, período de diseño 25 años.',
    keywords: 'cálculo caudal diseño acueducto rural Colombia, QMD QMMD QMH acueducto RAS 2017, dotación agua potable rural Colombia, diseño acueducto parcelación Colombia, factor K1 K2 acueducto',
    body: <>
      <p>Uno de los errores más costosos en el diseño de un acueducto rural en Colombia es arrancar con un caudal de diseño equivocado. Si el caudal se subestima, el sistema quedará corto desde el primer año; si se sobredimensiona, se despilfarran recursos en tuberías y equipos de bombeo innecesarios. El RAS 2017 (Resolución 0330 del Ministerio de Vivienda) establece el procedimiento técnico que debe seguirse, y en BIC lo aplicamos rigurosamente en cada proyecto de acueducto que diseñamos para parcelaciones en Valle del Cauca, Caldas y Tolima.</p>

      <h2>Primer paso: definir el período de diseño y la población futura</h2>
      <p>El RAS 2017 establece un período de diseño de <strong>25 años</strong> para todos los componentes del sistema de acueducto (captación, conducción, tratamiento y red de distribución), con excepción de los equipos electromecánicos y las tuberías de conexiones domiciliarias, cuyo horizonte puede ser menor. Esto significa que el caudal de diseño debe cubrir la demanda proyectada al año 2051 si se diseña en 2026.</p>
      <p>Para una parcelación campestre, la proyección de población se basa en el número total de lotes del proyecto multiplicado por la densidad habitacional promedio. En parcelaciones de uso residencial campestre, en BIC usamos entre 3,5 y 4,5 personas por lote según la tipología del proyecto. Para una parcelación de <strong>60 lotes</strong> con densidad de 4 personas/lote, la población de diseño es:</p>
      <p style={{background:'#EBF5F9', padding:'0.8rem 1rem', borderRadius:6, fontFamily:'monospace', fontSize:14}}>
        Población diseño = 60 lotes × 4 personas/lote = <strong>240 personas</strong>
      </p>

      <h2>Segundo paso: seleccionar la dotación neta según nivel de complejidad</h2>
      <p>La dotación neta es el volumen de agua que un habitante consume por día, expresado en litros por habitante por día (L/hab·día). El RAS 2017 Artículo 43 define los rangos de dotación según el nivel de complejidad del sistema:</p>
      <ul>
        <li><strong>Nivel bajo (población &lt; 2.500 hab):</strong> dotación neta entre 100 y 150 L/hab·día</li>
        <li><strong>Nivel medio (2.500–25.000 hab):</strong> dotación neta entre 120 y 175 L/hab·día</li>
        <li><strong>Nivel medio alto (25.000–60.000 hab):</strong> dotación neta entre 130 y 185 L/hab·día</li>
        <li><strong>Nivel alto (+60.000 hab):</strong> dotación neta entre 150 y 200 L/hab·día</li>
      </ul>
      <p>Para una parcelación campestre de nivel bajo-medio, en BIC adoptamos <strong>120 L/hab·día</strong> como dotación neta de diseño. Este valor es técnicamente conservador pero adecuado para usos residenciales de fin de semana y permanentes en zonas suburbanas del Eje Cafetero y el Valle del Cauca.</p>

      <h2>Tercer paso: calcular la dotación bruta incorporando pérdidas técnicas</h2>
      <p>La dotación bruta incorpora el agua no registrada (ANR), también llamada pérdidas técnicas, que corresponde al volumen que el sistema produce pero que no llega a ser facturado: fugas en la red, reboses en tanques, conexiones ilícitas. El RAS 2017 establece que el porcentaje máximo de ANR admisible para sistemas nuevos es del <strong>25%</strong>.</p>
      <p>La dotación bruta se calcula así:</p>
      <p style={{background:'#EBF5F9', padding:'0.8rem 1rem', borderRadius:6, fontFamily:'monospace', fontSize:14}}>
        Dotación bruta = Dotación neta / (1 – %ANR) = 120 / (1 – 0,25) = <strong>160 L/hab·día</strong>
      </p>

      <h2>Cuarto paso: calcular el caudal medio diario (Qmd)</h2>
      <p>El caudal medio diario es el volumen promedio que el sistema debe producir por segundo a lo largo de un día típico. Es el caudal base sobre el que se aplican los factores de máximo diario y máximo horario:</p>
      <p style={{background:'#EBF5F9', padding:'0.8rem 1rem', borderRadius:6, fontFamily:'monospace', fontSize:14}}>
        Qmd = (Población × Dotación bruta) / 86.400 seg<br/>
        Qmd = (240 × 160) / 86.400 = 38.400 / 86.400 = <strong>0,444 L/s</strong>
      </p>

      <h2>Quinto paso: aplicar los factores K1 y K2</h2>
      <p>Los factores de mayoración K1 y K2 reconocen que el consumo no es constante: hay días más exigentes que el promedio (factor K1) y horas del día con picos de demanda (factor K2). El RAS 2017 fija estos valores según el nivel de complejidad del sistema:</p>
      <ul>
        <li><strong>K1 (factor de máximo día):</strong> para nivel bajo, K1 = 1,30. Este factor se aplica sobre el Qmd para obtener el caudal máximo diario (QMD), que es el caudal de diseño de la captación, la conducción y la PTAP.</li>
        <li><strong>K2 (factor de máximo hora):</strong> para nivel bajo, K2 = 1,60. Se aplica sobre el QMD para obtener el caudal máximo horario (QMH), que es el caudal de diseño de la red de distribución y el almacenamiento.</li>
      </ul>
      <p style={{background:'#EBF5F9', padding:'0.8rem 1rem', borderRadius:6, fontFamily:'monospace', fontSize:14}}>
        QMD = Qmd × K1 = 0,444 × 1,30 = <strong>0,578 L/s</strong><br/>
        QMH = QMD × K2 = 0,578 × 1,60 = <strong>0,924 L/s</strong>
      </p>
      <p>En la práctica, la captación (bocatoma o pozo) y la PTAP se diseñan para el QMD. La red de distribución y el tanque de almacenamiento se diseñan para el QMH. El volumen del tanque debe garantizar autonomía mínima de 12 horas según el RAS 2017.</p>

      <h2>Resumen del ejemplo: parcelación 60 lotes</h2>
      <ul>
        <li><strong>Población de diseño:</strong> 240 personas</li>
        <li><strong>Dotación bruta:</strong> 160 L/hab·día</li>
        <li><strong>Qmd:</strong> 0,444 L/s → caudal de referencia</li>
        <li><strong>QMD (diseño captación y PTAP):</strong> 0,578 L/s</li>
        <li><strong>QMH (diseño red de distribución):</strong> 0,924 L/s</li>
        <li><strong>Volumen tanque de almacenamiento (12 h):</strong> V = QMD × 12 × 3.600 = 24,96 m³ → adoptar <strong>25 m³ mínimo</strong></li>
      </ul>
      <p>Con estos caudales ya es posible dimensionar las tuberías de la red de distribución usando EPANET, verificar que la presión en todos los nodos esté entre 10 y 60 m.c.a., y diseñar la bocatoma o el pozo de captación con el margen de seguridad adecuado.</p>

      <h2>Errores frecuentes que encarecen el proyecto</h2>
      <ul>
        <li><strong>Usar dotaciones de nivel alto en sistemas rurales:</strong> adoptar 200 L/hab·día en una parcelación de 60 lotes sobredimensiona todas las tuberías y el tanque. El costo de la red puede ser un 30–40% mayor al necesario.</li>
        <li><strong>Olvidar el factor ANR:</strong> diseñar sin pérdidas técnicas significa que el sistema funcionará al límite desde el primer día. El ANR mínimo del 25% debe incorporarse siempre en sistemas nuevos.</li>
        <li><strong>Aplicar K2 a toda la red:</strong> el caudal máximo horario aplica para los ramales de distribución, no para la captación ni la conducción. Aplicarlo a toda la red resulta en tuberías primarias innecesariamente grandes.</li>
        <li><strong>No verificar la disponibilidad hídrica de la fuente:</strong> el caudal de diseño calculado debe ser inferior al caudal concesionado por la Corporación Autónoma Regional. Si la fuente no tiene disponibilidad suficiente, el diseño resulta inviable desde el punto de vista legal y ambiental.</li>
      </ul>

      <h2>Diferencias entre nivel de complejidad bajo, medio y alto</h2>
      <p>El nivel de complejidad del sistema condiciona todos los parámetros de diseño: dotación, factores K, período de diseño, requerimientos de la PTAP y criterios de la red. Para sistemas de parcelaciones campestres en municipios menores, el nivel bajo es el aplicable cuando la población proyectada al horizonte de diseño es inferior a 2.500 habitantes. En nuestros proyectos en el Valle del Cauca (parcelaciones en Palmira, Yumbo, Ginebra) y en Caldas (zona rural de Manizales, Villamaría), la mayoría de los sistemas de acueducto corresponde a nivel bajo con los parámetros expuestos aquí.</p>

      <h2>¿Por qué contratar el diseño con BIC?</h2>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos acueductos rurales y para parcelaciones en todo Colombia. Nuestros diseños incluyen memoria de cálculo completa firmada por ingeniero con matrícula COPNIA vigente, planos en AutoCAD, modelación hidráulica en EPANET, especificaciones técnicas y presupuesto con APU. Todos los diseños son aceptados por las Empresas de Servicios Públicos y las Corporaciones Autónomas Regionales. <strong>Contáctenos para una propuesta sin costo: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>

      <p>Si su proyecto además requiere la concesión de aguas, vea nuestra guía sobre <a href="/blog/tramitar-concesion-aguas-colombia-guia" style={{color:'#17A2B8'}}>cómo tramitar una concesión de aguas en Colombia</a>. Si está formulando el proyecto para el SGR, consulte nuestra guía sobre <a href="/servicios/regalias-mga" style={{color:'#17A2B8'}}>formulación de proyectos de regalías MGA-Web</a>.</p>
    </>,
  },

  'tramitar-concesion-aguas-colombia-guia': {
    title: 'Cómo tramitar una concesión de aguas en Colombia: guía paso a paso 2026',
    date: 'Mayo 2026',
    readTime: '12 min',
    category: 'Normativa',
    metaDesc: 'Requisitos, tiempos y costos para obtener concesión de aguas en Colombia. Decreto 1076/2015, solicitud ante CAR/CORPOCALDAS, documentos técnicos requeridos.',
    keywords: 'concesión de aguas Colombia trámite, Decreto 1076 2015 concesión aguas, CORPOCALDAS CVC CORNARE concesión, cómo obtener concesión aguas Colombia, documentos concesión aguas CAR',
    body: <>
      <p>Sin una concesión de aguas vigente, un acueducto rural, una bocatoma para riego o una captación industrial operan en la ilegalidad. En Colombia, la concesión de aguas es el acto administrativo mediante el cual el Estado, a través de las Corporaciones Autónomas Regionales (CAR), otorga a un particular o a una entidad el derecho a utilizar un cuerpo de agua superficial o subterráneo para un fin específico, durante un tiempo determinado y en un caudal máximo autorizado. Es el punto de partida de cualquier sistema de aprovechamiento hídrico, y su trámite toma entre <strong>3 y 8 meses</strong> según la CAR y la complejidad del caso.</p>

      <h2>Marco normativo: Decreto 1076 de 2015</h2>
      <p>El <strong>Decreto 1076 de 2015</strong> (Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible) compila toda la normativa ambiental colombiana, incluido el régimen de concesiones de agua. Los artículos más relevantes para quien tramita una concesión son:</p>
      <ul>
        <li><strong>Artículo 2.2.3.2.1.1:</strong> Define la concesión de aguas como el permiso para usar recursos hídricos públicos, con condiciones de uso, caudal, plazo y obligaciones del concesionario.</li>
        <li><strong>Artículo 2.2.3.2.1.3:</strong> Establece que toda persona natural o jurídica que desee usar recursos hídricos para cualquier fin distinto al consumo doméstico de subsistencia requiere concesión.</li>
        <li><strong>Artículo 2.2.3.2.2.1:</strong> Enumera los documentos que debe acompañar la solicitud de concesión, incluyendo la memoria técnica que justifica el caudal solicitado y el aforo de la fuente.</li>
        <li><strong>Artículo 2.2.3.2.1.6:</strong> Fija los plazos máximos de las concesiones: hasta 10 años para uso doméstico y hasta 50 años para generación de energía. Para acueductos municipales y rurales, el plazo usual es de 10 años con posibilidad de renovación.</li>
      </ul>
      <p>El incumplimiento de la obligación de contar con concesión puede acarrear multas hasta de 5.000 salarios mínimos mensuales (Ley 1333 de 2009) y la suspensión de la captación.</p>

      <h2>¿Ante qué autoridad se tramita?</h2>
      <p>La competencia para otorgar concesiones de aguas superficiales corresponde a la <strong>Corporación Autónoma Regional</strong> de la jurisdicción donde se ubica el cuerpo de agua. Las principales CAR del país y las regiones donde operan son:</p>
      <ul>
        <li><strong>CORPOCALDAS:</strong> Caldas (Manizales, Villamaría, La Dorada, Chinchiná, Palestina, Viterbo, Anserma)</li>
        <li><strong>CARDER:</strong> Risaralda (Pereira, Dosquebradas, La Virginia, Santuario)</li>
        <li><strong>CRQ:</strong> Quindío (Armenia, Calarcá, Montenegro, Quimbaya)</li>
        <li><strong>CVC:</strong> Valle del Cauca (Cali, Palmira, Tulúa, Buenaventura, Cartago)</li>
        <li><strong>CORNARE:</strong> Oriente Antioqueño (Rionegro, La Ceja, El Retiro, Guarne)</li>
        <li><strong>CAR Cundinamarca:</strong> Cundinamarca y Bogotá (Sabana de Bogotá, Cundinamarca)</li>
        <li><strong>CORTOLIMA:</strong> Tolima (Ibagué, Espinal, Honda, Mariquita, Líbano)</li>
      </ul>
      <p>Para aguas subterráneas, la competencia también radica en las CAR pero el trámite es diferente y requiere prueba de bombeo y estudio hidrogeológico. Este artículo se enfoca en aguas superficiales.</p>

      <h2>Documentos técnicos requeridos para la solicitud</h2>
      <p>El Decreto 1076/2015 y los manuales de cada CAR exigen un conjunto de documentos técnicos que deben acompañar la solicitud formal:</p>
      <ul>
        <li><strong>Formulario de solicitud de concesión:</strong> disponible en la sede de la CAR o en su portal web. Incluye datos del solicitante, localización de la captación, caudal solicitado en L/s, tipo de uso (doméstico, agropecuario, industrial) y plazo solicitado.</li>
        <li><strong>Aforo de caudal de la fuente:</strong> medición directa del caudal del río o quebrada en el punto de captación, realizado por un profesional competente. El aforo debe realizarse preferiblemente en temporada seca para determinar el caudal mínimo disponible. El método del molinete hidrométrico o el ADCP para ríos mayores son los más aceptados por las CAR.</li>
        <li><strong>Memoria técnica de justificación del caudal:</strong> cálculo de la demanda hídrica del proyecto según el RAS 2017 (para acueductos) o según los requerimientos del proceso productivo (para uso industrial o agrícola). En BIC preparamos estas memorias con detalle suficiente para responder observaciones técnicas de la CAR.</li>
        <li><strong>Plano de localización de la captación:</strong> plancha IGAC a escala 1:25.000 o imagen satelital georeferenciada con la ubicación exacta del punto de captación, coordenadas MAGNA-SIRGAS, nombre de la fuente y municipio.</li>
        <li><strong>Estudio de disponibilidad hídrica:</strong> análisis de los caudales históricos de la fuente, determinación del caudal ambiental (también llamado caudal ecológico) y verificación de que el caudal solicitado es compatible con la disponibilidad de la fuente. Este es el documento técnico más exigente y el que con mayor frecuencia genera observaciones por parte de la CAR.</li>
        <li><strong>Certificado de libertad y tradición del predio:</strong> para verificar que el solicitante tiene derecho real sobre el predio donde se ubica la captación.</li>
        <li><strong>Paz y salvo de la CAR:</strong> acredita que el solicitante no tiene procesos sancionatorios pendientes ante la autoridad ambiental.</li>
      </ul>

      <h2>Paso a paso del trámite ante la CAR</h2>
      <p>El proceso de tramitación sigue estas etapas, cuya duración aproximada indicamos según nuestra experiencia en CORPOCALDAS, CVC y CARDER:</p>
      <ul>
        <li><strong>Paso 1 — Preparación de documentos:</strong> 3–6 semanas. Incluye el aforo de campo, la memoria técnica y el estudio de disponibilidad hídrica. Si la fuente no tiene datos históricos del IDEAM cercanos, el estudio de disponibilidad puede requerir modelación hidrológica con HEC-HMS y análisis de frecuencias, lo que eleva el tiempo y el costo.</li>
        <li><strong>Paso 2 — Radicación de la solicitud:</strong> La solicitud con todos los documentos se radica en la sede de la CAR competente. Algunas CAR permiten radicación virtual. Al momento de la radicación se asigna un número de expediente y un técnico evaluador.</li>
        <li><strong>Paso 3 — Visita técnica de campo:</strong> 1–3 meses después de la radicación. Un funcionario de la CAR visita el sitio de captación para verificar las condiciones del cauce, la compatibilidad del caudal solicitado con la disponibilidad de la fuente y la ausencia de usos conflictivos aguas abajo. Es fundamental que los documentos técnicos hayan sido preparados con rigor, porque el funcionario puede solicitar información complementaria.</li>
        <li><strong>Paso 4 — Concepto técnico y visita de control:</strong> La CAR emite un concepto técnico interno que aprueba, condiciona o niega la solicitud. Si hay observaciones, el solicitante tiene un plazo para subsanarlas. Este paso puede tomar 2–4 meses adicionales si hay observaciones.</li>
        <li><strong>Paso 5 — Resolución de otorgamiento:</strong> La CAR expide la resolución que otorga la concesión, con las condiciones específicas: caudal máximo en L/s, punto de captación, tipo de uso, plazo de vigencia y obligaciones ambientales (plan de uso eficiente del agua, monitoreo de caudal, etc.).</li>
      </ul>
      <p>En total, desde la preparación de documentos hasta la resolución de otorgamiento, el proceso típico toma entre <strong>3 y 8 meses</strong>. En casos con disponibilidad hídrica muy ajustada o conflictos con otros usuarios, puede extenderse hasta 12–18 meses.</p>

      <h2>Costos aproximados del trámite (2026)</h2>
      <p>Los costos del trámite se dividen en dos categorías: los estudios técnicos externos (a cargo del solicitante) y las tasas de la CAR:</p>
      <ul>
        <li><strong>Aforo de caudal de campo:</strong> $1,5–$4 millones COP, dependiendo de la dificultad de acceso y el equipo utilizado (molinete, ADCP, dilución).</li>
        <li><strong>Memoria técnica + estudio de disponibilidad hídrica:</strong> $3–$12 millones COP para sistemas pequeños (Q &lt; 5 L/s). Para sistemas mayores o cuencas sin datos del IDEAM, el estudio puede costar $15–$30 millones COP.</li>
        <li><strong>Tasa de cobro de la CAR:</strong> varía por entidad. CORPOCALDAS y CARDER cobran entre $300.000 y $2.000.000 COP por la evaluación de la solicitud según el caudal solicitado. Algunas CAR actualizan estas tarifas anualmente.</li>
        <li><strong>Tasa por uso del agua:</strong> una vez otorgada la concesión, el concesionario debe pagar anualmente la tasa por uso del agua, calculada según el caudal concesionado, la escasez de la cuenca y el factor de ajuste regional. Para sistemas rurales pequeños (&lt;1 L/s), la tasa anual es típicamente inferior a $500.000 COP.</li>
      </ul>

      <h2>Errores que demoran o bloquean la concesión</h2>
      <ul>
        <li><strong>Solicitar un caudal mayor al disponible en estiaje:</strong> la CAR siempre verifica que el caudal solicitado no supere el 50% del caudal mínimo de la fuente (criterio de caudal ambiental mínimo). Un aforo en temporada seca es indispensable.</li>
        <li><strong>No acreditar la disponibilidad de la fuente con datos históricos:</strong> una memoria técnica sin análisis de series históricas del IDEAM es devuelta rutinariamente.</li>
        <li><strong>Conflictos con concesiones previas:</strong> si la fuente ya tiene concesiones que agotan el caudal disponible, la nueva solicitud será negada. Antes de diseñar el sistema, verifique el estado de cargas de la cuenca en la CAR.</li>
      </ul>

      <p><strong>En BIC preparamos todos los estudios técnicos requeridos para tramitar su concesión de aguas ante cualquier CAR del país.</strong> También diseñamos el <a href="/servicios/diseno-acueductos" style={{color:'#17A2B8'}}>sistema de acueducto</a> una vez obtenida la concesión. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'cuanto-cuesta-diseno-acueducto-colombia-2026': {
    title: '¿Cuánto cuesta el diseño de un acueducto en Colombia en 2026?',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Costos y Presupuestos',
    metaDesc: 'Rangos de precio reales para diseño de acueductos en Colombia: desde estudios básicos hasta diseños integrales para parcelaciones y municipios. Factores que afectan el costo.',
    keywords: 'costo diseño acueducto Colombia 2026, precio diseño acueducto rural Colombia, diseño acueducto parcelación costo, honorarios ingeniería acueducto Colombia, presupuesto diseño acueducto municipio',
    body: <>
      <p>La primera pregunta que hace casi cualquier alcalde, promotor de parcelación o gerente de empresa de servicios públicos cuando comienza a pensar en un acueducto es: "¿cuánto me cuesta el diseño?". La respuesta honesta es que el rango de precios en Colombia en 2026 va desde menos de $4 millones COP para estudios puntuales hasta $80 millones o más para un diseño integral de acueducto municipal. La diferencia no es arbitraria: depende de factores concretos que este artículo explica con precisión.</p>

      <h2>Qué está incluido en un diseño de acueducto</h2>
      <p>Antes de comparar precios, es fundamental entender que "diseño de acueducto" puede significar cosas muy diferentes según el alcance del contrato. Un diseño completo según el RAS 2017 (Resolución 0330 de 2017) debe incluir:</p>
      <ul>
        <li><strong>Estudio hidrológico de la fuente:</strong> análisis de caudales, curva de duración, caudal mínimo disponible, verificación de disponibilidad hídrica para la concesión.</li>
        <li><strong>Estudio de calidad de agua cruda:</strong> caracterización fisicoquímica y microbiológica de la fuente para definir el proceso de tratamiento necesario.</li>
        <li><strong>Diseño de la captación (bocatoma):</strong> tipo de bocatoma según la fuente (lateral, fondo, sumergida), dimensionamiento hidráulico, obras de protección.</li>
        <li><strong>Diseño de la línea de conducción:</strong> tubería, pendientes, cámaras quiebrapresión, cruces de quebradas y vías, verificación de presiones.</li>
        <li><strong>Diseño de la planta de tratamiento (PTAP):</strong> coagulación-floculación-sedimentación-filtración-desinfección según el RAS 2017 Título C.</li>
        <li><strong>Diseño de la red de distribución:</strong> modelación hidráulica en EPANET, verificación de presiones en todos los nodos, dimensionamiento de tuberías.</li>
        <li><strong>Diseño del tanque de almacenamiento:</strong> volumen, tipo estructural, ubicación, tuberías de entrada/salida y rebose.</li>
        <li><strong>Memoria de cálculo y planos en AutoCAD:</strong> documentación técnica completa, firmada por ingeniero con matrícula COPNIA vigente, para radicación ante la ESP y la CAR.</li>
      </ul>
      <p>No todas las propuestas de mercado incluyen todos estos componentes. Una propuesta de bajo precio puede estar excluyendo el estudio hidrológico, la modelación EPANET o el diseño de la PTAP, lo que obliga a contratos adicionales posteriores con costos mayores al total de una propuesta integral.</p>

      <h2>Rangos de precio por tipo de proyecto</h2>
      <p>Los siguientes rangos son orientativos para el mercado colombiano en 2026, basados en proyectos similares ejecutados por BIC y en el mercado de consultoría técnica del Eje Cafetero y otras regiones:</p>
      <ul>
        <li>
          <strong>Estudios puntuales (sin diseño completo):</strong> $3–$8 millones COP
          <br/>Incluye un componente específico: solo el estudio hidrológico, solo el aforo de caudal, solo la modelación EPANET de una red existente, o solo el dimensionamiento del tanque. Útil para proyectos en prefactibilidad o cuando el municipio ya cuenta con diseño parcial.
        </li>
        <li>
          <strong>Diseño de acueducto para parcelación (20–60 lotes):</strong> $12–$20 millones COP
          <br/>Diseño completo para una parcelación campestre o residencial de pequeña escala, con captación superficial o pozo, PTAP simplificada o desinfección únicamente si la calidad del agua lo permite, red de distribución modelada en EPANET y memoria de cálculo para radicación. El rango varía según la complejidad topográfica y la presencia o ausencia de bombeo.
        </li>
        <li>
          <strong>Diseño de acueducto veredal o comunitario (60–300 usuarios):</strong> $15–$30 millones COP
          <br/>Sistemas para acueductos comunitarios inscritos en el registro de prestadores. Incluye estudio hidrológico completo con aforo de campo, diseño de bocatoma, conducción, PTAP completa (cuando aplica), red de distribución y tanque. La memoria de cálculo debe cumplir los requisitos del RAS 2017 para tramitación ante la ESP o la CAR.
        </li>
        <li>
          <strong>Diseño de acueducto municipal (municipios cat. 5 y 6, 300–2.500 usuarios):</strong> $30–$80 millones COP
          <br/>Proyectos para municipios pequeños, típicamente financiados con regalías SGR o recursos del Ministerio de Vivienda. El rango depende del número de componentes del sistema, la complejidad de la PTAP, la longitud de la red de distribución y si incluye diseño de alcantarillado. Proyectos con PTAP de más de 10 L/s pueden superar los $80 millones.
        </li>
        <li>
          <strong>Interventoría del diseño o de la obra:</strong> Se contrata por separado, usualmente entre el 5% y el 12% del valor del contrato de obra. La interventoría del diseño (revisión técnica independiente de los planos y memorias) cuesta entre $3 y $10 millones COP dependiendo de la complejidad.
        </li>
      </ul>

      <h2>Factores que más afectan el costo del diseño</h2>
      <ul>
        <li>
          <strong>Complejidad topográfica:</strong> terrenos con pendientes pronunciadas (zona andina, Eje Cafetero) requieren más cámaras quiebrapresión en la conducción, análisis de golpe de ariete en tuberías a presión y mayor detalle en planos de perfil. En zonas planas (Llanos, Costa), el diseño suele ser más sencillo y económico.
        </li>
        <li>
          <strong>Número de componentes del sistema:</strong> un sistema que solo requiere bombeo desde pozo y red de distribución es más económico que uno con bocatoma, conducción por gravedad, PTAP completa, tanques de almacenamiento en altura y red de distribución con variaciones de presión significativas.
        </li>
        <li>
          <strong>Nivel de complejidad RAS:</strong> los sistemas de nivel medio alto y alto (municipios grandes) exigen mayor detalle en la memoria de cálculo, pruebas de laboratorio adicionales y verificaciones normativas más exhaustivas, lo que eleva el costo del diseño.
        </li>
        <li>
          <strong>Disponibilidad de información existente:</strong> si el municipio o la ESP ya cuentan con topografía reciente, estudio de suelos y datos de calidad del agua, el consultor puede enfocarse en el diseño y reducir el costo. Si hay que levantar topografía desde cero, los costos de campo se suman al diseño.
        </li>
        <li>
          <strong>Exigencias específicas del financiador:</strong> proyectos con financiación del SGR exigen que la memoria de cálculo sea coherente con la formulación MGA-Web, que el presupuesto tenga APU detallados y que los planos estén en escala y formato específicos. Esto agrega trabajo al diseñador y eleva el costo respecto a un diseño para uso privado.
        </li>
      </ul>

      <h2>Cómo evaluar una propuesta económica de diseño</h2>
      <p>Ante cualquier propuesta de diseño de acueducto, verifique que el alcance incluya explícitamente:</p>
      <ul>
        <li>Estudio hidrológico con aforo de campo incluido (no solo revisión documental)</li>
        <li>Modelación hidráulica en EPANET con verificación de presiones en todos los nodos</li>
        <li>Memoria de cálculo firmada por ingeniero con matrícula COPNIA vigente</li>
        <li>Planos en AutoCAD (DWG) y PDF de todos los componentes</li>
        <li>Presupuesto con APU (análisis de precios unitarios)</li>
        <li>Número de rondas de revisión incluidas en el precio</li>
      </ul>
      <p>Una propuesta sin estos elementos no es un diseño completo según el RAS 2017 y no será aceptada por las curadurías, ESP ni entidades financiadoras como el Ministerio de Vivienda o el DNP.</p>

      <p><strong>¿Tiene un proyecto de acueducto y necesita una propuesta técnica y económica con alcance detallado?</strong> En BIC entregamos propuesta en 24 horas hábiles con desglose preciso de alcance y costo. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>

      <p>Si su proyecto va a financiarse con regalías, consulte también nuestra guía sobre <a href="/blog/como-formular-proyecto-agua-potable-sgr-colombia" style={{color:'#17A2B8'}}>cómo formular un proyecto de agua potable para el SGR</a> y la sección de <a href="/servicios/diseno-acueductos" style={{color:'#17A2B8'}}>diseño de acueductos en BIC</a>.</p>
    </>,
  },

  'requisitos-car-acueducto-veredal-colombia': {
    title: 'Qué exige la CAR para aprobar un acueducto veredal en Colombia',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Normativa',
    metaDesc: 'Documentos técnicos, estudios y trámites ambientales requeridos ante la CAR para legalizar un acueducto comunitario o veredal. RAS 2017, Decreto 1575/2007.',
    keywords: 'requisitos CAR acueducto veredal Colombia, legalizar acueducto comunitario CAR, CORPOCALDAS acueducto veredal documentos, acueducto rural Colombia trámites, Decreto 1575 2007 agua potable',
    body: <>
      <p>Cientos de acueductos veredales y comunitarios en Colombia operan sin los permisos ambientales requeridos por la ley. No siempre es por negligencia: muchos llevan décadas funcionando bajo una realidad institucional precaria, donde las comunidades simplemente captaron el agua de la quebrada para sobrevivir. Pero en 2026, cuando el municipio necesita legalizar el sistema para acceder a recursos del SGR, cuando la comunidad quiere formalizar la prestación del servicio, o cuando la CAR inicia un proceso de verificación, la pregunta se vuelve urgente: ¿qué documentos y estudios son necesarios para obtener la aprobación?</p>

      <h2>Dos trámites distintos que se confunden frecuentemente</h2>
      <p>Antes de hablar de requisitos, es crítico distinguir dos trámites que con frecuencia se confunden:</p>
      <ul>
        <li>
          <strong>Concesión de aguas (ante la CAR):</strong> Es el permiso de uso del recurso hídrico. Autoriza al solicitante a captar un caudal máximo de una fuente superficial o subterránea durante un plazo determinado. Sin concesión vigente, la captación es ilegal independientemente de la antigüedad del sistema. La competencia es de la Corporación Autónoma Regional de la jurisdicción.
        </li>
        <li>
          <strong>Permiso de construcción y funcionamiento del sistema de acueducto (ante el municipio y la Superintendencia de Servicios Públicos):</strong> Es el permiso para operar como prestador del servicio público de acueducto. Se tramita ante la Superintendencia de Servicios Públicos Domiciliarios (registro en el SUI) y la Empresa de Servicios Públicos del municipio. Requiere que el sistema cumpla los estándares técnicos del RAS 2017 y que el agua suministrada cumpla los parámetros de calidad del Decreto 1575 de 2007.
        </li>
      </ul>
      <p>Un acueducto veredal necesita <strong>ambos trámites</strong> para operar legalmente. La confusión entre los dos puede resultar en que el sistema tenga concesión pero no pueda facturar el servicio, o viceversa.</p>

      <h2>Documentos técnicos exigidos por la CAR para la concesión</h2>
      <p>El Decreto 1076 de 2015 y los manuales de procedimientos de las principales CAR establecen los siguientes documentos técnicos:</p>
      <ul>
        <li>
          <strong>Estudio hidrológico de la fuente:</strong> análisis de caudales históricos usando datos del IDEAM de estaciones cercanas, cálculo del caudal ambiental mínimo (usualmente el 25–30% del caudal mínimo registrado) y verificación de que el caudal solicitado no excede la disponibilidad de la fuente.
        </li>
        <li>
          <strong>Aforo de caudal en temporada seca:</strong> medición directa del caudal en el punto de captación usando molinete hidrométrico, método del flotador o dilución de trazadores. El aforo debe realizarse entre diciembre y febrero o entre junio y agosto, dependiendo del régimen hidrológico de la región.
        </li>
        <li>
          <strong>Análisis de calidad del agua cruda:</strong> muestreo y análisis de laboratorio del agua en el punto de captación, con los parámetros exigidos por la Resolución 2115 de 2007. Incluye parámetros fisicoquímicos (turbidez, color, pH, conductividad, dureza, metales), microbiológicos (coliformes totales, E. coli) y, en zonas con actividad agrícola, plaguicidas organoclorados.
        </li>
        <li>
          <strong>Memoria técnica del sistema:</strong> descripción del sistema de captación, conducción y tratamiento propuesto o existente, con los caudales de diseño calculados según el RAS 2017, justificación de la dotación adoptada y descripción de los procesos de tratamiento.
        </li>
        <li>
          <strong>Plano de localización:</strong> ubicación del punto de captación en plancha IGAC o imagen satelital georeferenciada, con coordenadas MAGNA-SIRGAS, nombre de la fuente y descripción del tramo de captación.
        </li>
        <li>
          <strong>Diseño hidráulico firmado por MP del COPNIA:</strong> planos de la bocatoma, la conducción y el sistema de tratamiento, con memoria de cálculo firmada por un ingeniero con matrícula profesional COPNIA vigente. Este es un requisito no negociable: sin firma de ingeniero, la CAR no acepta los documentos técnicos.
        </li>
      </ul>

      <h2>El Decreto 1575 de 2007 y la calidad del agua para consumo humano</h2>
      <p>El <strong>Decreto 1575 de 2007</strong> (Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano) y su Resolución complementaria <strong>2115 de 2007</strong> establecen los parámetros y valores máximos permisibles que debe cumplir el agua distribuida a los usuarios. Este marco normativo tiene implicaciones directas para el diseño del sistema de tratamiento del acueducto veredal:</p>
      <ul>
        <li><strong>Turbidez máxima en agua tratada:</strong> 2 UNT (unidades nefelométricas de turbidez). Esto implica que si la fuente presenta turbiedades elevadas en temporada de lluvias (común en cuencas andinas), el sistema de tratamiento debe tener sedimentador y filtros capaces de reducir la turbidez a este nivel.</li>
        <li><strong>Cloro residual libre:</strong> mínimo 0,3 mg/L en cualquier punto de la red de distribución. El sistema de desinfección debe garantizar este residual hasta el usuario más alejado, lo que condiciona el volumen del tanque de almacenamiento y la dosificación de cloro.</li>
        <li><strong>Coliformes totales y E. coli:</strong> ausencia en 100 mL de muestra. La presencia de coliformes es la causa más frecuente de IRCA alto en acueductos veredales.</li>
        <li><strong>IRCA (Índice de Riesgo de Calidad del Agua):</strong> el prestador del servicio debe monitorear el IRCA con la frecuencia establecida según el rango de población. Para sistemas de nivel bajo (&lt;2.500 usuarios), la frecuencia de muestreo es mensual en los puntos de captación, tratamiento y distribución.</li>
      </ul>
      <p>La Superintendencia de Servicios Públicos puede iniciar procesos sancionatorios contra los prestadores que suministren agua con IRCA alto de manera reiterada. Las sanciones van desde multas hasta la intervención del sistema por incumplimiento.</p>

      <h2>Coordinación con la empresa de servicios públicos del municipio</h2>
      <p>Un acueducto veredal no opera en aislamiento: en muchos municipios colombianos, la ESP municipal tiene jurisdicción sobre los sistemas rurales del municipio o presta asistencia técnica obligatoria. Antes de iniciar el diseño y la gestión de la concesión, es importante verificar:</p>
      <ul>
        <li>Si el sistema veredal será operado como ESP independiente, como organización autorizada o como extensión del sistema municipal</li>
        <li>Si la ESP municipal tiene exigencias técnicas adicionales a las del RAS 2017 para las redes y materiales del sistema</li>
        <li>Si hay proyectos municipales de ampliación o mejora del sistema de acueducto que puedan absorber el sistema veredal</li>
      </ul>
      <p>En Caldas, CORPOCALDAS exige que los diseños de acueductos veredales que utilicen caudales superiores a 1 L/s incluyan concepto de articulación con la ESP municipal o con el Plan Departamental de Agua. Esta exigencia es importante al momento de preparar los documentos de solicitud de concesión.</p>

      <h2>Acueductos en zonas con POMCA adoptado</h2>
      <p>Si el acueducto veredal se ubica en una cuenca con <strong>Plan de Ordenación y Manejo de Cuencas (POMCA)</strong> adoptado por la CAR, los diseños del sistema deben articularse con las determinantes ambientales del POMCA. Esto incluye el caudal ambiental fijado en el POMCA, las restricciones de uso del recurso hídrico en la zona de captación y las medidas de protección de la microcuenca abastecedora. Las cuencas del Chinchiná, Risaralda y Otún en el Eje Cafetero tienen POMCA adoptados con determinantes específicas para acueductos comunitarios.</p>

      <p><strong>En BIC preparamos todos los estudios técnicos requeridos por CORPOCALDAS, CARDER, CVC y las demás CAR para tramitar la concesión de aguas de su acueducto veredal o comunitario.</strong> También elaboramos los diseños según el RAS 2017 con firma COPNIA. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>

      <p>Para entender el proceso completo de tramitación ante la CAR, vea nuestra guía de <a href="/blog/tramitar-concesion-aguas-colombia-guia" style={{color:'#17A2B8'}}>cómo tramitar una concesión de aguas en Colombia</a>. Si además necesita diseño del sistema, consulte el <a href="/servicios/acueducto-alcantarillado" style={{color:'#17A2B8'}}>servicio de diseño de acueductos y alcantarillados de BIC</a>.</p>
    </>,
  },

  'como-formular-proyecto-agua-potable-sgr-colombia': {
    title: 'Cómo formular un proyecto de agua potable para el SGR en Colombia',
    date: 'Mayo 2026',
    readTime: '13 min',
    category: 'Regalías SGR',
    metaDesc: 'Guía para alcaldías y municipios: cómo estructurar un proyecto de acueducto o agua potable en el Sistema General de Regalías usando MGA-Web y Gesproy.',
    keywords: 'formular proyecto agua potable SGR Colombia, MGA-Web acueducto Colombia, Gesproy seguimiento proyectos, OCAD paz Colombia agua potable, proyectos regalías acueducto municipios categoría 5 6',
    body: <>
      <p>Cada bienio del Sistema General de Regalías (SGR) hay recursos disponibles para proyectos de agua potable y saneamiento básico en municipios colombianos — y una fracción importante de esos recursos no se ejecuta porque los municipios no logran formular proyectos técnicamente viables que pasen el filtro del DNP. No es por falta de necesidad: las necesidades son evidentes. Es por falta de capacidad técnica para estructurar un proyecto que cumpla con la lógica de la MGA-Web y los requisitos del Decreto 1467 de 2012 y sus modificaciones. Esta guía explica el proceso completo, desde la idea hasta la radicación ante el OCAD.</p>

      <h2>Las fases de un proyecto de inversión pública en Colombia</h2>
      <p>Todo proyecto de inversión pública en Colombia, incluidos los de agua potable financiados con regalías, debe seguir el ciclo de proyecto que establece el DNP. Las fases son:</p>
      <ul>
        <li>
          <strong>Idea:</strong> identificación del problema o necesidad. En MGA-Web corresponde al primer nivel de formulación. Para agua potable, la idea se materializa en un diagnóstico del sistema existente: cobertura actual, calidad (IRCA), continuidad del servicio, pérdidas técnicas. El diagnóstico debe tener datos verificables del DANE, el INS (SIVICAP), la ESP y el SUI de la Superintendencia de Servicios Públicos.
        </li>
        <li>
          <strong>Perfil:</strong> definición del problema, sus causas y efectos, y una o más alternativas de solución. En la MGA-Web, el módulo de identificación captura el árbol de problemas y el árbol de objetivos. Para que el perfil sea sólido, el árbol de problemas debe reflejar causas reales verificadas en campo, no causas genéricas copiadas de otros proyectos.
        </li>
        <li>
          <strong>Prefactibilidad:</strong> análisis comparativo de alternativas técnicas y financieras. El DNP exige que se evalúen mínimo dos alternativas con criterios técnicos, económicos y sociales. Para un proyecto de mejoramiento de PTAP, las alternativas típicas son: (a) rehabilitación de la planta existente vs. (b) construcción de nueva planta en otro sitio. La selección debe justificarse con análisis costo-beneficio o costo-eficiencia.
        </li>
        <li>
          <strong>Factibilidad:</strong> diseños técnicos a nivel definitivo, presupuesto detallado con APU, cronograma de ejecución y análisis de sostenibilidad. Este nivel exige la mayor profundidad técnica y es donde la mayoría de los proyectos fallan o son devueltos por el evaluador del DNP.
        </li>
      </ul>
      <p>La MGA-Web estructura el proyecto en cuatro módulos que corresponden a estas fases: identificación, preparación, evaluación y programación. Cada módulo alimenta al siguiente y debe ser internamente consistente: el presupuesto del módulo de evaluación debe coincidir con los indicadores de producto del módulo de programación, que a su vez deben derivarse de los estudios técnicos del módulo de preparación.</p>

      <h2>Los indicadores sectoriales que exige el DNP para agua potable</h2>
      <p>Los proyectos de agua potable y saneamiento básico en MGA-Web deben articularse con los indicadores del <strong>Marco de Gasto de Mediano Plazo</strong> del sector y con las metas del Plan Nacional de Desarrollo. Los indicadores de producto más frecuentes en proyectos de acueducto son:</p>
      <ul>
        <li><strong>Personas con acceso a agua potable mejorada (número):</strong> el indicador más básico y el que el evaluador verifica con mayor rigor contra los datos del DANE y la ESP.</li>
        <li><strong>Sistemas de acueducto construidos o mejorados (número):</strong> para proyectos de nuevas PTAP o redes.</li>
        <li><strong>Kilómetros de red de acueducto instalados (km):</strong> para proyectos de extensión de redes de distribución.</li>
        <li><strong>Reducción del IRCA (puntos porcentuales):</strong> indicador de resultado que vincula la inversión con la mejora en calidad del agua. Requiere IRCA base documentado en el SIVICAP.</li>
        <li><strong>Cobertura del servicio de acueducto (porcentaje):</strong> cobertura actual vs. cobertura esperada con el proyecto, verificable en el SUI.</li>
      </ul>
      <p>Los indicadores deben tener unidad de medida definida, línea base verificable, meta cuantificada y año de cumplimiento. Un indicador genérico sin línea base es la causa más frecuente de devolución en la etapa de concepto técnico del DNP.</p>

      <h2>Fuentes de financiación: OCAD paz vs. OCAD departamental</h2>
      <p>El SGR tiene dos mecanismos principales para financiar proyectos de agua potable en municipios pequeños:</p>
      <ul>
        <li>
          <strong>OCAD Paz (Órgano Colegiado de Administración y Decisión para la Paz):</strong> Financia proyectos en municipios priorizados por el PDET (Programas de Desarrollo con Enfoque Territorial) y en zonas ZOMAC (Zonas Más Afectadas por el Conflicto). Los proyectos tienen un proceso de aprobación más ágil y los requisitos técnicos, aunque rigurosos, se acompañan de mayor asistencia técnica del DNP. Los plazos de aprobación suelen ser de 2–4 meses desde la radicación.
        </li>
        <li>
          <strong>OCAD Departamental:</strong> Financia proyectos en municipios no priorizados por el PDET, usando recursos del Fondo de Compensación Regional o del Fondo de Desarrollo Regional. El proceso pasa por el DNP, el gobernador del departamento y los alcaldes de los municipios beneficiarios. Los plazos son más largos (4–8 meses) y la exigencia técnica es mayor.
        </li>
      </ul>
      <p>Para municipios de <strong>categorías 5 y 6</strong> (los más pequeños del país, con presupuestos anuales inferiores a $10.000 millones COP), el OCAD Paz es generalmente el mecanismo más accesible cuando el municipio está en zona de priorización. Los municipios que no están en zona PDET deben usar el OCAD departamental, donde la competencia por los recursos es mayor y la formulación técnica del proyecto tiene que ser más sólida para destacar frente a otros proyectos del departamento.</p>

      <h2>Gesproy: el sistema de seguimiento que no puede ignorarse</h2>
      <p>Una vez aprobado el proyecto por el OCAD y en ejecución, el municipio debe reportar el avance físico y financiero en <strong>Gesproy</strong> (Sistema de Gestión y Seguimiento a los Proyectos del Estado). Este sistema del DNP permite al Ministerio de Hacienda, a la Contraloría y al propio DNP verificar que los recursos del SGR se están ejecutando correctamente y en los plazos programados. Las inconsistencias entre el Gesproy y los contratos suscritos son causal de auditoría y pueden generar hallazgos de la Contraloría General de la República.</p>
      <p>La clave para usar Gesproy correctamente es que el cronograma de ejecución formulado en la MGA-Web durante la fase de prefactibilidad debe ser realista. Proyectos cuya ejecución se atrasa más del 20% respecto al cronograma original son automáticamente marcados por el sistema como proyectos en alerta, lo que puede afectar el acceso a futuras vigencias de regalías para el municipio.</p>

      <h2>Por qué los municipios pequeños necesitan consultor externo</h2>
      <p>Los municipios de categorías 5 y 6 en Colombia tienen, en promedio, entre 1 y 3 funcionarios en las secretarías técnicas (planeación, obras públicas o ambiente). Ninguno de ellos puede dedicar los 3–6 meses de trabajo técnico que requiere la formulación completa de un proyecto de acueducto en MGA-Web mientras simultáneamente atiende todas las demás responsabilidades del cargo. Las razones concretas por las que un consultor externo especializado es indispensable:</p>
      <ul>
        <li><strong>Conocimiento técnico específico:</strong> la formulación requiere simultáneamente conocimientos de ingeniería hidráulica (RAS 2017, diseño de bocatomas, PTAP), de evaluación económica de proyectos públicos (relación costo-beneficio, VPN social), y del funcionamiento de la MGA-Web y sus módulos. Muy pocos funcionarios municipales dominan los tres ámbitos.</li>
        <li><strong>Experiencia en observaciones del DNP:</strong> un consultor con proyectos aprobados sabe qué argumentos técnicos responder ante las observaciones más frecuentes del evaluador. Un proyecto formulado por primera vez suele recibir múltiples rondas de observaciones que demoran 3–6 meses adicionales.</li>
        <li><strong>Coordinación con la CAR para permisos:</strong> si el proyecto requiere concesión de aguas o permiso de vertimientos, el consultor puede iniciar esos trámites en paralelo con la formulación, evitando el cuello de botella que representa esperar la concesión después de que el OCAD ya aprobó el proyecto.</li>
        <li><strong>Articulación con el Plan Departamental de Agua:</strong> en muchos departamentos, el agua potable rural se coordina con el Plan Departamental de Agua (PDA), que puede cofinanciar el proyecto. El consultor conoce los mecanismos y puede gestionar esta articulación.</li>
      </ul>

      <h2>Experiencia de BIC en formulación de proyectos de agua potable para el SGR</h2>
      <p>En BIC hemos formulado y acompañado proyectos de agua potable y saneamiento básico para municipios de Caldas y Boyacá, incluyendo el Contrato 621/2021 con la Alcaldía de Puerto Boyacá (verificable en SECOP), donde ejecutamos la formulación de proyectos de inversión pública en 44 días. Nuestra experiencia incluye proyectos para OCAD Paz en municipios PDET y para OCAD departamental en el corredor cafetero.</p>
      <p>El alcance típico de nuestros servicios de formulación para el SGR incluye: diagnóstico técnico de campo del sistema existente, elaboración de estudios técnicos soportes (hidrología, calidad del agua, diseño básico), formulación completa en MGA-Web módulos I a IV, acompañamiento en la visita de verificación del DNP y ajuste del proyecto hasta su aprobación por el OCAD.</p>

      <p><strong>¿Su municipio tiene recursos del SGR asignados para agua potable y necesita formular el proyecto correctamente?</strong> En BIC entregamos propuesta técnica en 24 horas con plazo, alcance y costo definidos. <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>

      <p>Para entender los costos del diseño técnico que soporta la formulación, consulte nuestra guía sobre <a href="/blog/cuanto-cuesta-diseno-acueducto-colombia-2026" style={{color:'#17A2B8'}}>cuánto cuesta el diseño de un acueducto en Colombia</a>. Para el servicio completo de regalías y MGA-Web, visite la sección de <a href="/servicios/regalias-mga" style={{color:'#17A2B8'}}>formulación de proyectos de regalías SGR en BIC</a>.</p>
    </>,
  },

}

export default articlesH
