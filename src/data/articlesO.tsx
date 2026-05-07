import { type ReactNode } from 'react'

// Category O: New Week 3 articles — national technical + commercial
const articlesO: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'cuanto-cuesta-sistema-contra-incendios-nsr10-colombia': {
    title: '¿Cuánto cuesta un sistema contra incendios NSR-10 en Colombia? Rangos reales 2026',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Sistemas Contra Incendio',
    metaDesc: 'Rangos de precio reales para diseño e instalación de sistemas contra incendios NSR-10 en Colombia 2026. Qué factores encarecen el proyecto y cómo obtener una propuesta técnica seria.',
    keywords: 'cuánto cuesta sistema contra incendios Colombia, precio diseño CI NSR-10 Colombia, costo sistema contra incendios edificio Colombia, NSR-10 Título J costos, diseño rociadores NFPA Colombia precio',
    body: <>
      <p>Cuando un arquitecto o promotor inmobiliario llega a la etapa de licencia de construcción y descubre que el edificio requiere un sistema contra incendios NSR-10, la primera pregunta siempre es la misma: <em>¿cuánto vale esto?</em> La respuesta honesta es que depende de varios factores, pero hay rangos reales que permiten hacer presupuesto desde el anteproyecto.</p>
      <p>En este artículo le explicamos qué determina el costo de un sistema CI en Colombia, cuáles son los rangos según tipo y tamaño de edificio, y cómo identificar si una propuesta es técnica y económicamente razonable.</p>

      <h2>¿Qué incluye el costo de un sistema contra incendios NSR-10?</h2>
      <p>Es importante separar dos costos completamente diferentes que se confunden frecuentemente:</p>
      <ul>
        <li><strong>Costo del diseño:</strong> es el honorario profesional por elaborar los planos hidráulicos, la memoria de cálculo y los documentos técnicos requeridos por la Curaduría Urbana. Lo paga el cliente al ingeniero consultor antes de la obra.</li>
        <li><strong>Costo de la instalación:</strong> es el valor de equipos, materiales y mano de obra para construir el sistema físicamente. Lo paga el cliente al contratista especializado durante la obra.</li>
      </ul>
      <p>Un error frecuente es obtener solo cotización de diseño y sorprenderse con el costo de instalación meses después. Lo ideal es presupuestar ambos componentes desde la etapa de anteproyecto.</p>

      <h2>Rangos de costo del diseño CI NSR-10</h2>
      <p>El diseño de ingeniería hidráulica de un sistema CI cubre los cálculos de la red, la selección de rociadores, la dimensión de la cisterna y la bomba, y la memoria de cálculo firmada por un ingeniero con tarjeta COPNIA. Los rangos típicos en Colombia en 2026 son:</p>
      <ul>
        <li><strong>Edificios residenciales hasta 3.000 m²:</strong> entre $2,5 y $5 millones COP. Incluye red de hidrantes, posiblemente sin rociadores si el NSR-10 no los exige según uso y altura.</li>
        <li><strong>Edificios de uso mixto o comercial (3.000–10.000 m²):</strong> entre $5 y $12 millones COP. Incluye sistema de rociadores automáticos NFPA 13, red de hidrantes NFPA 14 y memoria de cálculo completa.</li>
        <li><strong>Centros comerciales, hoteles o edificios de gran envergadura (más de 10.000 m²):</strong> entre $12 y $30 millones COP o más según la complejidad. Pueden requerir sistemas de detección NFPA 72 integrados, supresión especial y sistemas de gestión de alarma.</li>
        <li><strong>Bodegas e industrias:</strong> entre $4 y $15 millones COP, dependiendo del riesgo de ocupación (ordinario, extra peligroso) y si el techo supera los 9 metros de altura, lo que activa el uso de rociadores de mayor caudal.</li>
      </ul>
      <p>Estos rangos aplican para el <strong>diseño solamente</strong>. Las firmas que cobran por debajo del rango mínimo generalmente entregan planos sin memoria de cálculo detallada, lo que resulta en observaciones de la Curaduría y retrasos de hasta varios meses.</p>

      <h2>Rangos de costo de la instalación CI</h2>
      <p>La instalación incluye todos los materiales (tuberías de acero Schedule 40, accesorios, rociadores, cisterna CI, bomba jockey, tablero de control, señalización) y la mano de obra especializada. Los rangos reales en Colombia en 2026 son:</p>
      <ul>
        <li><strong>Edificio residencial sin rociadores (solo hidrantes):</strong> entre $35 y $80 millones COP según área y número de pisos.</li>
        <li><strong>Edificio con rociadores en toda la edificación, área 3.000–8.000 m²:</strong> entre $80 y $200 millones COP. El mayor costo es la tubería de acero negro Schedule 40 y la cisterna de reserva CI.</li>
        <li><strong>Centro comercial o edificio de gran escala:</strong> entre $200 y $600 millones COP o más. Los sistemas de detección y supresión especial (CO₂, agentes limpios) incrementan considerablemente el costo.</li>
      </ul>
      <p>Tenga en cuenta que el volumen de agua de la cisterna CI —independiente de la cisterna doméstica— es uno de los rubros más costosos en edificaciones con rociadores: el RAS 2017 y las normas NFPA exigen reservas que pueden superar los 50.000 litros en edificios de más de 8 pisos.</p>

      <h2>Factores que encarecen el sistema</h2>
      <ul>
        <li><strong>Altura del edificio:</strong> cada zona de presión adicional requiere una bomba de presurización independiente, lo que incrementa el costo de equipos y operación.</li>
        <li><strong>Uso del edificio:</strong> las bodegas con almacenamiento apilado en alto, los hospitales, los hoteles de 5 estrellas y los centros de datos tienen exigencias NFPA especiales que pueden duplicar el costo del sistema básico.</li>
        <li><strong>Integración con otros sistemas:</strong> cuando el sistema CI debe integrarse con detección de humo, alarmas y automatización del edificio (BMS), los costos de ingeniería y control aumentan significativamente.</li>
        <li><strong>Acceso al sitio durante la obra:</strong> en edificaciones en áreas urbanas densas o en municipios remotos, el costo de transporte de materiales pesados (tuberías de 4" y 6" de acero negro) puede representar hasta el 15% del valor de la instalación.</li>
        <li><strong>Presión de red disponible:</strong> si la presión del acueducto no es suficiente para el sistema, se requiere cisterna y grupo de bombeo CI obligatorio, lo que agrega entre $40 y $120 millones COP al costo final.</li>
      </ul>

      <h2>Cómo evaluar una propuesta de diseño CI</h2>
      <p>Una propuesta técnica seria para el diseño de un sistema CI debe incluir explícitamente:</p>
      <ul>
        <li>Alcance detallado: qué sistemas se diseñan (rociadores, hidrantes, detección, extinción especial)</li>
        <li>Normativa aplicable: NSR-10 Título J, capítulos de NFPA aplicables</li>
        <li>Entregables: planos en AutoCAD (planta y cortes), isométricos de la red, memoria de cálculo hidráulico, ficha técnica de equipos principales</li>
        <li>Firma responsable: nombre del ingeniero, número de matrícula COPNIA y vigencia</li>
        <li>Plazo de entrega: en días hábiles desde la recepción de planos arquitectónicos y memorias</li>
      </ul>
      <p>Desconfíe de propuestas que no mencionen los ítems anteriores o que ofrezcan "planos CI" sin memoria de cálculo. La Curaduría Urbana rechazará cualquier presentación sin memoria firmada, y la revisión y corrección puede costar más que el diseño original.</p>

      <h2>¿Cuándo contratar el diseño CI?</h2>
      <p>El momento óptimo es cuando los planos arquitectónicos tienen al menos un 60–70% de definición: áreas por piso, usos, alturas y localización de escaleras de emergencia. Contratar el diseño CI demasiado tarde —cuando ya está en obra gruesa— genera conflictos de interferencia con instalaciones eléctricas e hidrosanitarias que cuestan mucho más en reprocesos que el honorario del ingeniero.</p>
      <p>En proyectos que requieren licencia de construcción, el diseño CI debe presentarse ante la Curaduría junto con los demás estudios técnicos. Iniciar el diseño 3 meses antes de la radicación de la licencia es la práctica recomendada.</p>

      <p><strong>BIC — Bernal Ingeniería Consultores</strong> es especialista en diseño de sistemas CI bajo NSR-10 Título J y normas NFPA para proyectos en todo Colombia. Modalidad 100% remota. Entregamos propuesta técnica y económica en 24 horas hábiles sin costo. <strong>ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
    faqItems: [
      {
        q: '¿Cuánto cuesta el diseño de un sistema contra incendios NSR-10 en Colombia?',
        a: 'El costo del diseño de ingeniería de un sistema CI en Colombia varía según el tamaño y uso del edificio. Para edificios residenciales o comerciales de hasta 3.000 m², el rango típico es de $2,5 a $5 millones COP. Para edificios de 3.000 a 10.000 m², entre $5 y $12 millones COP. Para proyectos de mayor escala (centros comerciales, hoteles), entre $12 y $30 millones COP. BIC entrega propuesta económica gratuita en 24 horas hábiles.'
      },
      {
        q: '¿Qué diferencia hay entre el diseño y la instalación de un sistema CI?',
        a: 'El diseño es el servicio de ingeniería que produce los planos hidráulicos y la memoria de cálculo necesarios para obtener la licencia de construcción — lo realiza un ingeniero consultor antes de la obra. La instalación es la construcción física del sistema: tuberías, rociadores, bomba, cisterna y señalización — la realiza un contratista especializado durante la obra. Ambos costos deben presupuestarse desde el anteproyecto.'
      },
      {
        q: '¿Todo edificio en Colombia necesita sistema contra incendios?',
        a: 'Según el NSR-10 Título J, están obligados los edificios de más de 3 pisos o más de 500 m² de área construida, hospitales, centros comerciales, hoteles, bodegas industriales, edificios de parqueo y cualquier edificación de uso público con más de 50 personas. Los rociadores automáticos son obligatorios a partir de determinadas alturas y según el uso del edificio, conforme a los capítulos de NFPA referenciados en el NSR-10.'
      },
      {
        q: '¿Cuánto tiempo tarda el diseño de un sistema CI en Colombia?',
        a: 'El plazo depende de la complejidad del proyecto. Para edificios de uso residencial o comercial estándar, BIC entrega el diseño CI completo (planos, isométricos y memoria de cálculo) en 10 a 15 días hábiles desde la recepción de los planos arquitectónicos definitivos. Para proyectos de mayor escala o con sistemas integrados, el plazo puede ser de 20 a 30 días hábiles.'
      },
    ],
  },

  'tramites-licencia-ambiental-construccion-colombia': {
    title: 'Trámites ambientales antes de construir en Colombia: guía para promotores y constructores',
    date: 'Mayo 2026',
    readTime: '12 min',
    category: 'Licencias y Permisos',
    metaDesc: 'Guía práctica sobre qué trámites ambientales son obligatorios antes de construir en Colombia: concesiones de agua, permisos de vertimientos, licencias ambientales ANLA y estudios Decreto 1807.',
    keywords: 'trámites ambientales construcción Colombia, concesión de aguas Colombia, permiso vertimientos Colombia, licencia ambiental ANLA Colombia, estudios Decreto 1807 construcción, CAR trámites Colombia',
    body: <>
      <p>En Colombia, todo proyecto de construcción que afecta recursos naturales —aguas, suelo, aire, fauna— debe obtener los permisos ambientales correspondientes antes de iniciar obras. El problema es que muchos promotores y constructores descubren estos requisitos cuando ya tienen el lote comprado, el proyecto diseñado y la presión de los inversores para arrancar. Ese momento es demasiado tarde.</p>
      <p>Esta guía le explica qué trámites ambientales son obligatorios según el tipo de proyecto, quién los otorga, cuánto tiempo toman y qué estudios técnicos se necesitan para respaldarlos.</p>

      <h2>Mapa de trámites ambientales por tipo de proyecto</h2>
      <p>Los trámites ambientales en Colombia se distribuyen entre tres autoridades, según la envergadura del proyecto:</p>
      <ul>
        <li><strong>ANLA (Autoridad Nacional de Licencias Ambientales):</strong> proyectos de gran escala que generan impactos significativos: puertos, aeropuertos, represas, explotaciones mineras, proyectos de hidrocarburos, proyectos viales de categoría 1. Los plazos son de 12 a 30 meses.</li>
        <li><strong>CAR / CAS / Corpocaldas / CDMB y similares (Corporaciones Autónomas Regionales):</strong> proyectos medianos y locales que usan o afectan recursos naturales: acueductos, urbanizaciones que vierten a fuentes, proyectos que requieren concesión de aguas. Plazos de 2 a 12 meses según el trámite.</li>
        <li><strong>Municipio / Curaduría Urbana:</strong> estudios Decreto 1807 para zonas de amenaza hídrica, análisis de riesgo para licencias de construcción. Requisito previo a la licencia urbanística.</li>
      </ul>

      <h2>Los 5 trámites ambientales más frecuentes en proyectos de construcción</h2>

      <h3>1. Concesión de aguas superficiales o subterráneas</h3>
      <p>Obligatoria cuando el proyecto va a captar agua de una fuente natural —río, quebrada, pozo— para cualquier uso: consumo humano en un acueducto veredal, riego en un proyecto agroindustrial, agua industrial en una planta. La concede la CAR del área del proyecto. Requiere un estudio hidrológico que demuestre que el caudal solicitado es compatible con el caudal disponible en la fuente (caudal ecológico mínimo).</p>
      <p>El plazo de trámite varía entre 3 y 12 meses. El estudio hidrológico de soporte generalmente tarda de 2 a 6 semanas.</p>

      <h3>2. Permiso de vertimientos</h3>
      <p>Obligatorio cuando el proyecto va a verter aguas residuales domésticas, industriales o de proceso a cuerpos de agua o al suelo. El vertimiento debe cumplir la Resolución 0631 de 2015 (parámetros máximos de calidad). La solicitud debe incluir el diseño del sistema de tratamiento (PTAR o PTAP) y el estudio de la fuente receptora. También lo otorga la CAR.</p>
      <p>Los proyectos urbanísticos con PTAR propia y conexión al sistema de alcantarillado municipal requieren solo el diseño, no el permiso individual; pero si el vertimiento es directo a fuente, el permiso es obligatorio.</p>

      <h3>3. Estudios de amenaza y riesgo — Decreto 1807 de 2014</h3>
      <p>Para predios en zonas de amenaza de inundación media o alta (según el POT municipal), el Decreto 1807 exige estudios de amenaza, vulnerabilidad y riesgo como condición para otorgar la licencia de construcción. Incluye modelación hidráulica del cauce más cercano (HEC-RAS en la mayoría de casos) y mapas de zonificación de amenaza. La Curaduría Urbana verifica que estos estudios estén incluidos en la solicitud de licencia.</p>

      <h3>4. Plan de manejo ambiental (PMA)</h3>
      <p>Requerido para proyectos que no necesitan licencia ambiental ante la ANLA pero sí generan impactos durante la fase de construcción: remoción de cobertura vegetal, generación de escombros, afectación temporal de drenajes. El PMA debe incluir medidas de manejo de residuos, control de erosión, gestión de aguas lluvias y plan de contingencia. Para proyectos medianos lo exige la CAR; para proyectos pequeños puede exigirlo el municipio.</p>

      <h3>5. Salvoconducto para movilización de flora o fauna silvestre</h3>
      <p>Si el proyecto implica talar árboles de gran porte o desplazar fauna nativa, se requieren permisos específicos de la CAR. La tala de árboles en zonas urbanas también requiere permiso municipal, independientemente de que sean árboles plantados.</p>

      <h2>Tiempos realistas de tramitación</h2>
      <p>Los promotores frecuentemente subestiman los tiempos de tramitación ambiental y los incluyen en el cronograma como si fueran paralelos al diseño arquitectónico. En la práctica, los trámites tienen sus propios tiempos que no dependen del promotor:</p>
      <ul>
        <li><strong>Concesión de aguas CAR:</strong> 3 a 8 meses desde la radicación completa</li>
        <li><strong>Permiso de vertimientos CAR:</strong> 4 a 10 meses</li>
        <li><strong>Estudios Decreto 1807 + revisión Curaduría:</strong> 2 a 4 meses (el estudio tarda 4–8 semanas, la revisión de la Curaduría puede agregar 2–3 meses adicionales)</li>
        <li><strong>Licencia ambiental ANLA:</strong> 12 a 30 meses según la categoría del proyecto</li>
      </ul>
      <p>La recomendación práctica es iniciar los trámites ambientales en paralelo con el diseño arquitectónico, no después de obtener el plano aprobado. Los retrasos ambientales son la principal causa de que proyectos inmobiliarios se entreguen fuera del cronograma en Colombia.</p>

      <h2>Estudios técnicos que soportan los trámites</h2>
      <p>La mayoría de los trámites ambientales require estudios técnicos específicos elaborados por profesionales idóneos. Los más frecuentes son:</p>
      <ul>
        <li><strong>Estudio hidrológico:</strong> para concesiones de agua y modelación del comportamiento de la cuenca</li>
        <li><strong>Modelación hidráulica HEC-RAS:</strong> para estudios Decreto 1807 y análisis de inundabilidad de predios</li>
        <li><strong>Diseño de PTAR:</strong> para permisos de vertimientos con sistema de tratamiento propio</li>
        <li><strong>Diagnóstico de calidad del agua:</strong> para concesiones con uso doméstico y fines de PTAP</li>
        <li><strong>Levantamiento topográfico de la fuente:</strong> para modelaciones hidráulicas y cálculo de caudales</li>
      </ul>
      <p>En BIC elaboramos todos estos estudios técnicos en modalidad remota para proyectos en todo Colombia. La experiencia con CAR regionales (Corpocaldas, CARDER, CRQ, Cornare, CDMB) permite adaptar los estudios a los requisitos específicos de cada autoridad ambiental.</p>

      <p><strong>¿Su proyecto requiere estudios ambientales o modelación hidráulica para trámites?</strong> BIC atiende proyectos en todo el territorio colombiano. Primera consulta sin costo. <strong>ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
    faqItems: [
      {
        q: '¿Qué trámites ambientales necesita un proyecto de construcción en Colombia?',
        a: 'Depende del tipo de proyecto. Los más comunes son: concesión de aguas (cuando se capta de fuente natural), permiso de vertimientos (cuando se vierten aguas residuales a fuentes o suelo), estudios de amenaza hídrica según el Decreto 1807 de 2014 (para predios en zonas de amenaza media o alta), y plan de manejo ambiental durante construcción. Los proyectos de gran escala requieren licencia ambiental ante la ANLA.'
      },
      {
        q: '¿Cuánto tiempo tarda un permiso ambiental en Colombia?',
        a: 'Los tiempos varían: una concesión de aguas ante la CAR tarda entre 3 y 8 meses; un permiso de vertimientos entre 4 y 10 meses; los estudios Decreto 1807 más la revisión de la Curaduría pueden tomar de 2 a 4 meses; una licencia ambiental ante la ANLA entre 12 y 30 meses. Se recomienda iniciar los trámites ambientales en paralelo con el diseño arquitectónico para no retrasar el cronograma del proyecto.'
      },
      {
        q: '¿Qué es el Decreto 1807 y cuándo se aplica?',
        a: 'El Decreto 1807 de 2014 establece que los predios ubicados en zonas de amenaza media o alta de inundación o movimientos en masa deben presentar estudios de amenaza, vulnerabilidad y riesgo como condición para obtener la licencia de construcción. Estos estudios incluyen modelación hidráulica con HEC-RAS, mapas de zonificación de amenaza y concepto técnico firmado por ingeniero COPNIA. Son revisados por la Curaduría Urbana antes de otorgar la licencia.'
      },
    ],
  },

  'estudio-suelos-torres-edificios-colombia': {
    title: 'Estudio de Suelos para Torres y Edificios en Colombia: ¿Qué incluye y cuánto cuesta?',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Geotecnia',
    metaDesc: 'Qué incluye el estudio de suelos para torres y edificios en Colombia. NSR-10 Título H, tipos de ensayos, plazos y costos reales 2026. Pereira, Eje Cafetero y todo el país.',
    keywords: 'estudio de suelos torres Colombia, estudio geotécnico edificios Colombia, NSR-10 Título H estudio suelos, costo estudio suelos torre apartamentos Pereira, estudio suelos licencia construcción Colombia',
    body: <>
      <p>Antes de tramitar la licencia de construcción de una torre de apartamentos o un edificio de más de dos pisos en Colombia, la Curaduría Urbana exige un <strong>estudio de suelos</strong> firmado por un ingeniero civil o geotecnista con tarjeta profesional COPNIA vigente. Este documento no es un trámite burocrático: es la base técnica sobre la que se diseña la cimentación, y cuando se omite o se hace a la ligera, las consecuencias aparecen en obra — asentamientos diferenciales, grietas estructurales, o peor, inestabilidad total del edificio.</p>

      <h2>¿Qué exige la NSR-10 Título H para edificios?</h2>
      <p>La <strong>NSR-10 Título H — Estudios Geotécnicos</strong> es la norma que regula los estudios de suelos en Colombia. Sus requisitos mínimos varían según la magnitud del proyecto:</p>
      <ul>
        <li><strong>Edificios hasta 3 pisos sobre terreno plano:</strong> apiques (calicatas) de al menos 1.5 m de profundidad, ensayos de clasificación de suelos, capacidad portante y recomendación de cimentación.</li>
        <li><strong>Torres de 4 a 6 pisos:</strong> sondeos SPT (Standard Penetration Test) a profundidades de 8 a 12 m, ensayos de laboratorio (granulometría, Atterberg, compresión simple) y análisis de asentamientos.</li>
        <li><strong>Torres de 7 pisos o más:</strong> sondeos SPT profundos (15–25 m), análisis de asentamientos con consolidación, evaluación sísmica del sitio (microzonificación) y, en muchos casos, recomendación de pilotes u otros sistemas de cimentación profunda.</li>
      </ul>
      <p>En ciudades como Pereira y Manizales — ubicadas en zona de amenaza sísmica alta — la NSR-10 exige además un <strong>estudio de microzonificación sísmica o análisis de sitio</strong> para proyectos estratégicos o de alta ocupación.</p>

      <h2>Tipos de exploración del subsuelo</h2>
      <p>El estudio de suelos para un edificio urbano en Colombia combina normalmente:</p>
      <ul>
        <li><strong>Apiques o calicatas:</strong> excavaciones manuales de 1 a 3 m que permiten inspeccionar directamente el suelo y tomar muestras inalteradas. Son el primer paso para proyectos de poca altura.</li>
        <li><strong>Sondeos SPT:</strong> perforaciones con recuperación de muestras cada 1.5 m usando un martillo estándar de 63.5 kg y una caída de 76 cm. El número de golpes (N-SPT) es el parámetro más usado en Colombia para estimar la densidad relativa de arenas y la resistencia al corte de arcillas.</li>
        <li><strong>Ensayos de laboratorio:</strong> sobre las muestras recuperadas se realizan ensayos de clasificación (USCS), límites de Atterberg, granulometría, humedad natural, densidad, compresión simple y, en suelos blandos, consolidación y corte directo.</li>
        <li><strong>Nivel freático:</strong> la profundidad del nivel freático es crítica para el diseño de sótanos, excavaciones y cimentaciones sobre arcillas blandas. Se mide in-situ con piezómetros o durante la perforación.</li>
      </ul>

      <h2>¿Qué contiene el informe geotécnico?</h2>
      <p>El informe que recibe el contratista y que se presenta ante la Curaduría incluye:</p>
      <ol>
        <li>Descripción del perfil estratigráfico del subsuelo.</li>
        <li>Resultados de todos los ensayos in-situ y de laboratorio.</li>
        <li>Parámetros de resistencia y deformabilidad para el diseño.</li>
        <li>Capacidad portante admisible para el tipo de cimentación recomendado.</li>
        <li>Estimación de asentamientos totales y diferenciales.</li>
        <li>Recomendaciones de cimentación: zapatas corridas, losa de cimentación, pilotes o caissons.</li>
        <li>Firma y sello del ingeniero especialista COPNIA.</li>
      </ol>

      <h2>Plazos y costos reales en 2026</h2>
      <p>El plazo de ejecución de un estudio de suelos para una torre en el Eje Cafetero varía entre <strong>2 y 4 semanas</strong>: 3 a 5 días de exploración de campo, 1 a 2 semanas de ensayos de laboratorio y 3 a 5 días de elaboración del informe. Los rangos de costo en 2026 para Colombia son:</p>
      <ul>
        <li><strong>Estudio básico (edificio 3–5 pisos, 2 sondeos SPT):</strong> desde $5 millones hasta $12 millones COP.</li>
        <li><strong>Estudio completo (torre 6–12 pisos, 3–5 sondeos SPT + laboratorio):</strong> desde $15 millones hasta $35 millones COP.</li>
        <li><strong>Estudio con pilotes (torre alta o suelos blandos):</strong> desde $25 millones hasta $60 millones COP, incluyendo la recomendación de cimentación profunda.</li>
      </ul>
      <p>En proyectos en Pereira, Armenia y Manizales, BIC elabora presupuestos personalizados en menos de 24 horas. Primera consulta sin costo.</p>

      <p><strong>¿Necesita el estudio de suelos para su proyecto en el Eje Cafetero o cualquier ciudad de Colombia?</strong> Contáctenos hoy: <strong>ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
    faqItems: [
      {
        q: '¿Es obligatorio el estudio de suelos para obtener la licencia de construcción?',
        a: 'Sí. La NSR-10 Título H establece la obligatoriedad del estudio geotécnico para cualquier edificación que requiera licencia de construcción, excepto para obras muy sencillas de un piso en terreno conocido. La Curaduría Urbana exige el informe geotécnico firmado por ingeniero COPNIA como parte del expediente de licencia.'
      },
      {
        q: '¿Cuántos sondeos SPT necesita mi torre de apartamentos?',
        a: 'El número mínimo de sondeos depende del área del lote y la variabilidad del suelo. La NSR-10 Tabla H.3-1 establece que para áreas entre 200 y 1000 m², son necesarios al menos 2 sondeos; para áreas mayores de 1000 m², al menos 3 sondeos. En terrenos con variabilidad geológica conocida o rellenos, se recomienda un sondeo adicional para cada 500 m² de área.'
      },
      {
        q: '¿El estudio de suelos sirve para toda la vida del edificio?',
        a: 'El informe geotécnico tiene vigencia indefinida para el proyecto para el que fue elaborado, siempre que no hayan cambiado las condiciones del subsuelo (rellenos nuevos, excavaciones vecinas, inundaciones). Si el proyecto cambia de uso, se aumenta el número de pisos o hay modificaciones estructurales significativas, es recomendable actualizar el estudio.'
      },
    ],
  },

  'diseno-aguas-lluvias-cubierta-colegio-colombia': {
    title: 'Diseño de Aguas Lluvias para Cubiertas de Colegios y Edificios en Colombia',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Redes Hidrosanitarias',
    metaDesc: 'Cómo se diseña el sistema de aguas lluvias para cubiertas de colegios y edificios en Colombia. RAS 2017, NSR-10, curvas IDF y método Racional. Manizales y Eje Cafetero.',
    keywords: 'diseño aguas lluvias cubierta colegio Colombia, sistema aguas lluvia cubierta edificio NSR-10, bajantes aguas lluvias colegio Colombia, diseño hidrosanitario colegios Colombia, aguas lluvias cubierta Manizales',
    body: <>
      <p>El diseño del sistema de aguas lluvias de un colegio o edificio educativo en Colombia tiene particularidades que lo diferencian de una vivienda o edificio residencial: cubiertas de gran área, múltiples patios internos, alturas variables y requisitos de la Curaduría Urbana y el Ministerio de Educación Nacional. Un sistema mal diseñado — con bajantes subdimensionados o canales con pendientes insuficientes — se convierte en fuente de filtraciones, daños en aulas y accidentes por acumulación de agua en zonas de circulación de niños.</p>

      <h2>Normas aplicables al diseño de aguas lluvias en colegios</h2>
      <p>En Colombia, el diseño de redes de aguas lluvias para edificaciones educativas se rige principalmente por:</p>
      <ul>
        <li><strong>RAS 2017 — Título D (Sistemas de Drenaje Pluvial):</strong> define los criterios de diseño para redes pluviales internas, incluidas las cubiertas de edificios.</li>
        <li><strong>NSR-10 Título I (Instalaciones Hidráulicas):</strong> regula los diámetros mínimos de bajantes de aguas lluvias, las pendientes de canales y canaletas, y la conexión con la red pública.</li>
        <li><strong>Norma Técnica Colombiana NTC 1500:</strong> código de fontanería para edificaciones, con criterios de diseño para sistemas internos de agua lluvia.</li>
        <li><strong>Normativa de la empresa de servicios públicos local (ESP):</strong> cada municipio puede tener requisitos específicos para la conexión a la red de alcantarillado pluvial o para sistemas de retención.</li>
      </ul>

      <h2>Metodología de cálculo: del área de cubierta al diámetro de bajante</h2>
      <p>El proceso de diseño sigue estos pasos:</p>
      <ol>
        <li><strong>Determinación de la intensidad de diseño:</strong> se usan las curvas Intensidad-Duración-Frecuencia (IDF) del IDEAM para la estación meteorológica más cercana. Para un colegio, el período de retorno típico es de <strong>5 a 10 años</strong>.</li>
        <li><strong>Cálculo del caudal pluvial por el método Racional:</strong> Q = C × I × A / 360, donde C es el coeficiente de escorrentía (para cubiertas de concreto o teja: 0.90–0.95), I es la intensidad en mm/h y A es el área tributaria en hectáreas.</li>
        <li><strong>Diseño de canaletas y canales:</strong> se dimensionan las canaletas perimetrales y los canales internos de la cubierta usando la ecuación de Manning para flujo a superficie libre. La pendiente mínima recomendada es del 0.5%.</li>
        <li><strong>Dimensionamiento de bajantes:</strong> el RAS 2017 y la NTC 1500 establecen las tablas de capacidad de bajantes circulares PVC según el área de cubierta y la intensidad de diseño local. Para Manizales (alta pluviosidad), las intensidades son significativamente más altas que para Bogotá.</li>
        <li><strong>Diseño de la red horizontal de conexión:</strong> colectores enterrados o en superficie que conectan las bases de los bajantes con la caja de inspección o el punto de entrega a la red pública.</li>
      </ol>

      <h2>Particularidades del diseño en colegios</h2>
      <p>Los proyectos educativos presentan desafíos específicos que el diseñador debe prever:</p>
      <ul>
        <li><strong>Cubiertas complejas con múltiples aguas:</strong> los colegios suelen tener cubiertas de varias pendientes, patios techados y corredores cubiertos. Cada tramo de cubierta tiene su propia área tributaria y debe conectarse a un bajante específico.</li>
        <li><strong>Patios internos sin conexión a bajante visible:</strong> los patios pueden tener sumideros enterrados que conectan a la red interna de aguas lluvias del edificio. Estos sumideros deben tener rejas y sifones para evitar malos olores y obstrucciones.</li>
        <li><strong>Zonas de circulación:</strong> las canalizaciones superficiales en zonas de circulación de estudiantes deben estar cubiertas con rejillas galvanizadas o de acero inoxidable y tener acceso para mantenimiento.</li>
        <li><strong>Memoria de cálculo para licencia:</strong> la Curaduría Urbana exige la memoria hidrosanitaria firmada por ingeniero COPNIA que documente el cálculo de cada bajante, canaleta y colector, con las curvas IDF utilizadas y los caudales de diseño.</li>
      </ul>

      <h2>¿Cuándo se requiere tanque de retención de aguas lluvias?</h2>
      <p>Algunas curadurías y ESP municipales — especialmente en ciudades con alta impermeabilización urbana como Manizales, Pereira o Bogotá — exigen que los proyectos grandes (colegios, centros comerciales, conjuntos de más de 50 viviendas) incluyan un <strong>tanque de retención de aguas lluvias</strong> que amortigüe los picos de caudal antes de descargar a la red pública. Este tanque puede ser de concreto, plástico o modular, y se diseña para retener la diferencia entre el caudal generado por el proyecto y el que habría con el terreno sin impermeabilizar.</p>

      <p>En BIC diseñamos la red completa de aguas lluvias para colegios y edificaciones en Colombia. Elaboramos la memoria de cálculo con curvas IDF IDEAM, planos en planta y corte, y firmo el documento para trámite de licencia. Primera consulta sin costo.</p>

      <p><strong>¿Su colegio o proyecto educativo necesita diseño de aguas lluvias en Manizales, Pereira o Armenia?</strong> Escriba a <strong>WhatsApp +57 302 477 8910 | ingenieriabernal.co</strong></p>
    </>,
    faqItems: [
      {
        q: '¿Qué periodo de retorno se usa para el diseño de aguas lluvias en un colegio?',
        a: 'Para edificaciones educativas, el RAS 2017 recomienda un período de retorno de 5 a 10 años para el diseño de la red interna de aguas lluvias. Si el colegio se ubica en zona de amenaza de inundación alta o si la red pública tiene historial de desbordamientos, se puede aumentar a 25 años para garantizar la protección de los ocupantes.'
      },
      {
        q: '¿Cuánto cuesta el diseño hidrosanitario de un colegio en Colombia?',
        a: 'El costo del diseño de redes hidrosanitarias (agua, residuales y lluvias) para un colegio en Colombia varía entre $8 millones y $25 millones COP, dependiendo del área construida, la complejidad de las cubiertas y si se requiere memoria de cálculo para licencia de construcción. En BIC elaboramos propuesta personalizada en 24 horas.'
      },
      {
        q: '¿La memoria de aguas lluvias va separada de la memoria hidrosanitaria?',
        a: 'Generalmente la memoria de aguas lluvias se incluye como un capítulo dentro de la memoria hidrosanitaria general del proyecto. En algunos municipios, la empresa de servicios públicos puede exigir un documento separado que demuestre el manejo de las aguas lluvias y su conexión al sistema de alcantarillado pluvial o su retención en el predio.'
      },
    ],
  },

}

export default articlesO
