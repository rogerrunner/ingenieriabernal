// Category B: Infraestructura de Agua y Saneamiento (8 articles: B-01, B-02, B-04 to B-09)
const articlesB: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'acueducto-rural-colombia': {
    title: 'Diseño de acueductos rurales en Colombia: paso a paso según el RAS 2000',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Manual técnico para diseño de acueductos rurales en Colombia: captación, conducción, PTAP, almacenamiento y distribución. Cumplimiento del Reglamento Técnico RAS 2000 paso a paso.',
    keywords: 'diseño acueducto rural Colombia RAS 2000, acueducto veredal Colombia diseño, captación conducción PTAP Colombia, diseño sistema acueducto municipio Colombia',
    body: <>
      <p>En Colombia, más de 11 millones de personas en zonas rurales y semiurbanas dependen de sistemas de acueducto que en muchos casos tienen décadas de antigüedad, carecen de tratamiento adecuado o simplemente fueron construidos sin el rigor técnico que exige el <strong>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2000)</strong>. Diseñar un nuevo acueducto rural —o rehabilitar uno existente— requiere un proceso metodológico que va desde el estudio de la fuente hasta la modelación de la red de distribución, siguiendo los criterios técnicos del RAS vigente.</p>

      <h2>Marco normativo: RAS 2000 Título B y Resolución 0330 de 2017</h2>
      <p>El RAS 2000 y su actualización mediante la <strong>Resolución 0330 de 2017</strong> del Ministerio de Vivienda, Ciudad y Territorio son las normas técnicas de cumplimiento obligatorio para el diseño de sistemas de abastecimiento de agua potable en Colombia. El nivel de complejidad del sistema (I: ≤2.500 hab, II: 2.500–12.500 hab, III: 12.500–60.000 hab, IV: {'>'}60.000 hab) determina los estándares mínimos de diseño: dotaciones, períodos de diseño, materiales admisibles y niveles de tratamiento requeridos.</p>
      <p>Para acueductos rurales (nivel de complejidad I o bajo) los períodos de diseño recomendados son 15–20 años para la red de distribución y 25–30 años para las obras de infraestructura mayor (bocatoma, PTAP, tanques de almacenamiento).</p>

      <h2>Estudio de demanda: proyección de población y consumo</h2>
      <p>El primer paso técnico es estimar la demanda futura de agua. El RAS 2000 establece los métodos de proyección de población y las dotaciones netas por nivel de complejidad:</p>
      <ul>
        <li><strong>Método aritmético:</strong> adecuado para poblaciones rurales estables o en declive, con tasas de crecimiento históricas menores al 1% anual.</li>
        <li><strong>Método geométrico:</strong> recomendado para zonas con crecimiento moderado (1–4% anual). Es el método estándar en la mayoría de municipios colombianos nivel I y II.</li>
        <li><strong>Dotación neta:</strong> Para nivel de complejidad bajo, el RAS establece una dotación neta máxima de 100 L/hab/día. En zonas con pisos térmicos calientes (zonas cafeteras a menos de 1.000 m.s.n.m.) se puede aumentar hasta 120 L/hab/día.</li>
      </ul>

      <h2>Diseño de la captación</h2>
      <p>La captación es la estructura que toma el agua de la fuente natural y la entrega al sistema de conducción. El RAS 2000 regula los criterios técnicos según el tipo de fuente:</p>
      <ul>
        <li><strong>Bocatoma lateral en río:</strong> Requiere estudio hidrológico de la fuente para definir el caudal mínimo de estiaje (Q97,5%), el caudal de diseño de la presa deflectora y las dimensiones de las rejillas. La relación entre caudal de captación y caudal del río en estiaje debe ser menor al 50% para no afectar el caudal ecológico.</li>
        <li><strong>Captación de manantial:</strong> Requiere aforo del manantial en período seco y protección sanitaria de la zona de afloramiento. El caudal de diseño es el mínimo registrado con factor de seguridad de 1,2.</li>
        <li><strong>Captación de aguas lluvias:</strong> Aplica en zonas con precipitaciones superiores a 1.500 mm/año sin otras fuentes disponibles. Requiere cálculo de área de captación y volumen de almacenamiento.</li>
      </ul>

      <h2>Diseño de la conducción</h2>
      <p>La línea de conducción lleva el agua desde la captación hasta la PTAP o el tanque de almacenamiento. En sistemas por gravedad (los más comunes en zonas andinas colombianas), el diseño hidráulico verifica que la línea piezométrica quede siempre por encima de la tubería y que las presiones máximas no superen los límites admisibles de los materiales (600 kPa para PVC según las normas NTC aplicables).</p>
      <p>El diámetro de diseño se determina con la ecuación de Hazen-Williams para flujo a presión, verificando que la velocidad esté entre 0,6 y 2,5 m/s. Los materiales más usados en Colombia son PVC RDE 21 o RDE 32, y HDPE PE100 para terrenos con movimientos diferenciales o zonas sísmicas.</p>

      <h2>Red de distribución: modelo hidráulico con EPANET</h2>
      <p>La red de distribución es el conjunto de tuberías, válvulas y accesorios que llevan el agua desde los tanques de almacenamiento hasta las conexiones domiciliarias. Su diseño en Colombia se basa en el RAS 2000 Título B, con verificación mediante modelación hidráulica en <strong>EPANET 2.2</strong> (software gratuito del EPA de los EE.UU.).</p>
      <p>Los criterios de diseño clave son: presión mínima de servicio de 10 m.c.a. en cualquier nodo de la red, presión máxima de 60 m.c.a. para nivel I (70 m.c.a. para nivel II-IV), y velocidad entre 0,6 y 2,5 m/s en las tuberías principales.</p>
      <p><strong>BIC ha diseñado más de 20 acueductos rurales en el Eje Cafetero con estándares RAS 2000, aprobados por CORPOCALDAS, CARDER y el Ministerio de Vivienda.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'ptap-colombia': {
    title: 'PTAP en Colombia: cómo seleccionar la tecnología adecuada para su municipio',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía técnica sobre Plantas de Tratamiento de Agua Potable (PTAP) en Colombia: tipos, selección tecnológica, requisitos del IRCA y normativa Decreto 1575. Para alcaldías y ESPs.',
    keywords: 'PTAP Colombia diseño tecnología municipios, planta tratamiento agua potable Colombia, tecnología PTAP municipios rurales, diseño PTAP Colombia',
    body: <>
      <p>Elegir la tecnología adecuada para una Planta de Tratamiento de Agua Potable (PTAP) es una decisión que determina no solo la calidad del agua que recibirá la comunidad durante los próximos 20–30 años, sino también los costos de operación y la complejidad de gestión que deberá asumir el operador del sistema. En Colombia, muchos municipios han invertido en tecnologías de tratamiento que superan su capacidad de operación, o al contrario, han instalado plantas de baja eficiencia que no cumplen los parámetros del <strong>Decreto 1575 de 2007</strong>.</p>

      <h2>¿Cuándo es obligatoria una PTAP según la normativa colombiana?</h2>
      <p>El Decreto 1575 de 2007 y la Resolución 2115 de 2007 establecen que el agua distribuida por un acueducto debe cumplir con los parámetros de calidad establecidos para consumo humano. La obligación de tratamiento es implícita: si la fuente no cumple los parámetros en crudo, la ESP debe tratar el agua para cumplirlos. El <strong>IRCA</strong> es el indicador que verifica periódicamente si el agua distribuida es apta.</p>
      <p>En la práctica, la mayoría de fuentes superficiales en Colombia (ríos y quebradas) requieren tratamiento completo de coagulación, floculación, sedimentación, filtración y desinfección. Solo algunas fuentes subterráneas de excelente calidad pueden tratarse únicamente con desinfección.</p>

      <h2>Caracterización de la fuente: parámetros críticos</h2>
      <p>Antes de seleccionar la tecnología de tratamiento, es indispensable caracterizar la fuente mediante monitoreo en diferentes épocas del año. Los parámetros más relevantes para la selección tecnológica son:</p>
      <ul>
        <li><strong>Turbiedad (NTU):</strong> Es el parámetro que más influye en la selección tecnológica. Fuentes con turbiedad habitualmente menor a 5 NTU pueden usar filtración lenta; fuentes con turbiedad que supere los 100 NTU regularmente requieren tratamiento convencional con decantación o flotación.</li>
        <li><strong>Color verdadero (UC Pt-Co):</strong> Indica materia orgánica disuelta. Fuentes con alto color requieren etapas de oxidación (cloro o permanganato) previas a la filtración para no saturar los filtros.</li>
        <li><strong>pH y alcalinidad:</strong> Determinan la dosis de coagulante requerida. Fuentes con baja alcalinidad (como muchas del Eje Cafetero con suelos volcánicos) requieren ajuste de pH o coagulantes específicos.</li>
        <li><strong>Coliformes totales y E. coli:</strong> Determinan el nivel de desinfección requerido. Alta carga microbiológica puede requerir desinfección doble (pre-cloración + post-cloración) o tratamiento UV.</li>
      </ul>

      <h2>Tecnologías de tratamiento según calidad de la fuente</h2>
      <ul>
        <li><strong>Filtración Lenta en Arena (FLA):</strong> Adecuada para fuentes de baja turbiedad (&lt;5 NTU en el 80% del tiempo) y bajo color. Opera sin coagulantes químicos, a través de la acción biológica de la capa biológica superficial (schmutzdecke). Bajo costo de operación, alta eficiencia microbiológica. Es la tecnología más apropiada para acueductos rurales con operadores sin formación técnica avanzada.</li>
        <li><strong>FIME (Filtración en Múltiples Etapas):</strong> Combina filtros gruesos de grava (prefiltros dinámicos y en lecho) con filtros lentos de arena. Maneja fuentes con turbiedad hasta 200 NTU sin coagulantes químicos. Muy usada en Colombia rural por su robustez operativa y bajo requerimiento de insumos.</li>
        <li><strong>Tratamiento convencional (Coagulación-Floculación-Sedimentación-Filtración):</strong> Para fuentes con alta variabilidad de turbiedad o color. Requiere operadores calificados y suministro continuo de sulfato de aluminio u otros coagulantes. Es la tecnología predominante en los acueductos municipales de nivel II–IV en Colombia.</li>
        <li><strong>Tratamiento avanzado (Membrana de ultrafiltración, ósmosis inversa):</strong> Para fuentes con contaminación química específica (arsénico, flúor, hierro, manganeso) que los procesos convencionales no remueven eficientemente. De alto costo de inversión y operación.</li>
      </ul>

      <h2>Costos referenciales de construcción de PTAP en Colombia (2026)</h2>
      <ul>
        <li><strong>FLA (5–10 L/s):</strong> $150–$280 millones COP instalada</li>
        <li><strong>FIME (5–20 L/s):</strong> $200–$400 millones COP instalada</li>
        <li><strong>Convencional compacta (10–30 L/s):</strong> $350–$700 millones COP</li>
        <li><strong>Convencional tradicional (&gt;30 L/s):</strong> $700 millones–$2.500 millones COP</li>
      </ul>
      <p><strong>BIC diseña PTAP adaptadas a la calidad del agua de la fuente, la capacidad operativa del municipio y el presupuesto disponible, con cumplimiento integral del Decreto 1575 y la Resolución 2115.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'redes-hidrosanitarias-colombia': {
    title: 'Redes hidrosanitarias en Colombia: diseño técnico con cumplimiento normativo',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía técnica para diseño de redes hidrosanitarias en Colombia: normativa aplicable (RAS, NSR-10, NTC), metodología de cálculo de red de agua fría, caliente y desagüe.',
    keywords: 'diseño redes hidrosanitarias Colombia normativa, RAS 2000 instalaciones hidráulicas, memoria cálculo hidrosanitario Colombia, redes hidrosanitarias edificio Colombia',
    body: <>
      <p>Las instalaciones hidrosanitarias —las redes de agua potable fría y caliente, desagüe y ventilación dentro de una edificación— son una de las disciplinas de diseño más demandadas en proyectos de construcción en Colombia, y al mismo tiempo una de las que con mayor frecuencia presentan errores técnicos que generan problemas durante la operación: baja presión en pisos superiores, bloqueos recurrentes en la red de desagüe, o sistemas de ventilación deficientes que producen malos olores. El origen de muchos de estos problemas está en el diseño.</p>

      <h2>Marco normativo colombiano para instalaciones hidrosanitarias</h2>
      <p>En Colombia, el diseño de redes hidrosanitarias está regulado por tres instrumentos normativos principales que deben aplicarse de manera complementaria:</p>
      <ul>
        <li><strong>RAS 2017 (Resolución 0330) Título B:</strong> Regula el diseño de los sistemas de abastecimiento de agua potable, incluyendo las redes de distribución urbana y las conexiones domiciliarias. Define presiones mínimas y máximas de servicio, dotaciones y parámetros de calidad del agua.</li>
        <li><strong>NSR-10 Título I (Instalaciones):</strong> La Norma Sismo Resistente 2010 regula las instalaciones hidráulicas y sanitarias en edificaciones sujetas al cumplimiento del reglamento, estableciendo criterios de diseño sísmico para las redes y sus soportes.</li>
        <li><strong>NTC 1500 (Código Colombiano de Fontanería):</strong> Norma Técnica Colombiana que establece los requerimientos técnicos para instalaciones de agua potable y aguas residuales en edificaciones. Es la norma de referencia para el diseño de redes internas de los edificios.</li>
      </ul>

      <h2>Metodología de diseño de red de agua fría</h2>
      <p>El diseño de la red de agua fría interna de una edificación parte del cálculo del <strong>gasto probable</strong>, es decir, el caudal máximo simultáneo que puede presentarse en la red. En Colombia, el método más usado es el de <strong>Hunter</strong> (adoptado por la NTC 1500), que asigna unidades de descarga (UH) a cada artefacto sanitario y luego convierte el total de UH a caudal probable mediante tablas de conversión.</p>
      <p>Los artefactos sanitarios más comunes en Colombia y sus UH según NTC 1500:</p>
      <ul>
        <li><strong>Sanitario con fluxómetro:</strong> 6 UH (uso privado), 10 UH (uso público)</li>
        <li><strong>Sanitario con tanque:</strong> 3 UH (uso privado), 5 UH (uso público)</li>
        <li><strong>Lavamanos:</strong> 1 UH (uso privado), 2 UH (uso público)</li>
        <li><strong>Ducha:</strong> 2 UH (uso privado)</li>
        <li><strong>Lavaplatos:</strong> 2 UH (uso privado)</li>
      </ul>
      <p>Con el gasto probable calculado, se dimensionan las tuberías de la red verificando que la presión en el artefacto más desfavorable sea mínimo de 7 m.c.a. (o 10 m.c.a. para fluxómetros), y que la velocidad en las tuberías no supere 2,5 m/s para evitar golpe de ariete y ruido excesivo.</p>

      <h2>Red de desagüe y ventilación: pendientes y diámetros mínimos</h2>
      <p>La red de desagüe funciona por gravedad y debe diseñarse con pendientes y diámetros que garanticen velocidades de autolimpieza:</p>
      <ul>
        <li><strong>Pendiente mínima:</strong> 1% para diámetros de 4" (100 mm); 0,5% para diámetros de 6" (150 mm) o mayores.</li>
        <li><strong>Diámetros mínimos:</strong> 4" (100 mm) para ramales de piso en baterías sanitarias; 6" (150 mm) para bajantes verticales en edificios de más de 5 pisos.</li>
        <li><strong>Ventilación:</strong> Cada bajante debe ventilarse en su extremo superior. Los artefactos sanitarios ubicados a más de 1,8 m del bajante requieren ventilación individual o en circuito para evitar rotura del sello hidráulico del sifón.</li>
      </ul>

      <h2>Errores más frecuentes en proyectos colombianos</h2>
      <ul>
        <li>Subestimar la demanda de agua en edificios de uso mixto (residencial + comercial), generando baja presión en los pisos altos.</li>
        <li>Usar diámetros de tuberías de agua fría sin verificar las pérdidas de carga en accesorios (codos, tees, válvulas), lo que resulta en presiones reales menores a las calculadas.</li>
        <li>Diseñar redes de desagüe sin pendientes suficientes por limitaciones de entrepiso, generando taponamientos recurrentes.</li>
        <li>Omitir la ventilación de artefactos sanitarios en pisos intermedios, produciendo succión del sello del sifón y problemas de olores.</li>
      </ul>
      <p><strong>BIC ofrece diseño integral de redes hidrosanitarias para conjuntos residenciales, edificios de uso mixto, centros comerciales y hospitales en Colombia, con memorias de cálculo detalladas y cumplimiento de la NTC 1500 y el NSR-10.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'sistemas-contra-incendio-nsr10': {
    title: 'Sistemas contra incendio en Colombia: NSR-10 Título J vs NFPA 13 — guía técnica para proyectistas',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Contra Incendios',
    metaDesc: 'Guía técnica completa sobre sistemas de protección contra incendio según NSR-10 Título J en Colombia: tipos de sistemas, cuándo son obligatorios, diseño hidráulico y diferencias con NFPA 13.',
    keywords: 'sistema contra incendio NSR-10 Colombia diseño, NFPA 13 Colombia NSR-10 diferencias, diseño rociadores incendio Colombia, protección incendios edificio Colombia NSR-10',
    body: <>
      <p>El <strong>NSR-10 Título J</strong> (Protección contra el Fuego) es la norma técnica colombiana que establece los requisitos mínimos de protección contra incendio en edificaciones. Junto con la <strong>Ley 1575 de 2012</strong> (Ley General de Bomberos de Colombia), constituye el marco legal que obliga a constructores, promotores y propietarios a implementar sistemas de protección en una amplia variedad de edificaciones. Sin embargo, el Título J remite en muchos aspectos técnicos a las normas NFPA americanas, creando un marco normativo que combina requisitos locales e internacionales que no siempre son fáciles de conciliar.</p>

      <h2>Marco normativo: cuándo es obligatorio el sistema de protección contra incendio</h2>
      <p>El NSR-10 Título J establece la obligatoriedad según la ocupación, el área y la altura de la edificación:</p>
      <ul>
        <li><strong>Edificios de ocupación residencial (Uso A):</strong> Se exige sistema de rociadores automáticos en edificios de más de 12 pisos o altura total superior a 35 metros. Para edificios entre 8 y 12 pisos se exigen hidrantes interiores en cada piso.</li>
        <li><strong>Edificios de negocios, oficinas y hoteles (Uso B):</strong> Sistema de rociadores obligatorio para áreas de piso mayores a 2.000 m² por nivel o en edificios de más de 8 pisos.</li>
        <li><strong>Centros comerciales y almacenes de gran superficie (Uso M y S):</strong> Sistema de rociadores obligatorio para cualquier área mayor a 4.000 m² total del establecimiento.</li>
        <li><strong>Industria (Uso F):</strong> Los requisitos dependen del tipo de actividad y de la carga de fuego calculada. En muchos casos se requiere sistema de rociadores independientemente del tamaño.</li>
        <li><strong>Hospitales, clínicas y centros de salud (Uso I-1):</strong> Sistema de rociadores en todas las áreas excepto las que albergan equipos médicos sensibles al agua, donde se usan sistemas de gases limpios o CO₂.</li>
      </ul>

      <h2>Tipos de sistemas de protección contra incendio</h2>
      <ul>
        <li><strong>Rociadores automáticos (wet pipe):</strong> El sistema estándar. Las tuberías permanecen llenas de agua bajo presión. Al activarse el rociador por calor, descarga agua inmediatamente. Apropiado para la gran mayoría de ocupaciones en Colombia.</li>
        <li><strong>Sistema pre-acción (pre-action):</strong> Las tuberías están vacías. Se requiere doble señal (detector + activación del rociador) para abrir la válvula. Usado en salas de cómputo, archivos históricos y museos donde el agua podría causar daños inaceptables.</li>
        <li><strong>Sistema de diluvio (deluge):</strong> Todos los rociadores (sin fusibles) están abiertos simultáneamente. Se activa por un sistema de detección externo. Para almacenamiento de líquidos inflamables, hangares de aeronaves y plantas industriales de alto riesgo.</li>
        <li><strong>Red de hidrantes interiores y exteriores:</strong> Obligatoria como sistema complementario en la mayoría de edificaciones que requieren protección. Los hidrantes exteriores deben conectarse a la red pública o a una cisterna dedicada.</li>
      </ul>

      <h2>Diseño hidráulico del sistema de rociadores</h2>
      <p>El diseño hidráulico de un sistema de rociadores en Colombia se realiza según el estándar <strong>NFPA 13</strong> (Standard for the Installation of Sprinkler Systems), al que remite el NSR-10. Los pasos principales son:</p>
      <ul>
        <li><strong>Clasificación de la ocupación:</strong> Ligera (residencial, oficinas), Ordinaria Grupo 1 (negocios, hoteles), Ordinaria Grupo 2 (manufacturas), Extra Riesgo Grupo 1 y 2 (industria pesada, pintura, almacenamiento alto). Esta clasificación determina la densidad de descarga y el área de operación.</li>
        <li><strong>Cálculo de la demanda hidráulica:</strong> Con la densidad de descarga (mm/min) y el área de operación (m²) del área de diseño, se determina el caudal total requerido. A esto se suma el flujo de los hidrantes interiores en simultáneo.</li>
        <li><strong>Selección de la bomba contra incendio:</strong> La bomba debe satisfacer el caudal y la presión de la demanda más el caudal del sistema de hidrantes. Se diseña según NFPA 20. En Colombia, la mayoría de sistemas utilizan bombas diesel o eléctrica + diesel de respaldo.</li>
        <li><strong>Cisterna de reserva:</strong> El volumen mínimo se calcula como la demanda total del sistema por 30–60 minutos de autonomía (según NFPA 13 y los requisitos del Cuerpo de Bomberos local).</li>
      </ul>

      <h2>Proceso de aprobación en Colombia</h2>
      <p>El sistema de protección contra incendio debe ser aprobado por la Curaduría Urbana como parte del proceso de licencia de construcción, y posteriormente verificado por el Cuerpo de Bomberos local antes del permiso de ocupación. Los documentos requeridos incluyen: planos de la red con isométricos, memoria de cálculo hidráulico, ficha técnica de los rociadores, bomba y cisterna, y certificado de que los materiales cumplen con los estándares NFPA referenciados.</p>
      <p><strong>BIC diseña sistemas contra incendio con rigor hidráulico y cumplimiento total del NSR-10 Título J y las normas NFPA para edificaciones en Colombia.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'interventoria-hidraulica-colombia': {
    title: 'Interventoría técnica de obras hidráulicas en Colombia: lo que todo contratante debe saber',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Sector Público',
    metaDesc: 'Guía completa sobre interventoría técnica de obras hidráulicas en Colombia: Ley 1474, Ley 80, funciones del interventor, responsabilidades legales y diferencia con supervisión.',
    keywords: 'interventoría obras hidráulicas Colombia, Ley 1474 interventoría Colombia, interventor obras acueducto responsabilidades, interventoría SGR Colombia',
    body: <>
      <p>La interventoría técnica es un mecanismo de control y aseguramiento de calidad que en Colombia tiene carácter legal en los contratos de obra pública. Sin embargo, existe una confusión frecuente entre el papel del interventor externo y el supervisor interno, y muchas alcaldías y ESPs contratan interventorías sin entender claramente qué funciones deben cumplirse ni qué responsabilidades asume el interventor ante la ley. Este artículo aclara el marco legal y las obligaciones técnicas de la interventoría en obras hidráulicas.</p>

      <h2>¿Qué es la interventoría y cuándo es obligatoria en Colombia?</h2>
      <p>La <strong>Ley 1474 de 2011</strong> (Estatuto Anticorrupción) introdujo una distinción fundamental en el sistema de contratación pública colombiana: mientras la <strong>supervisión</strong> es ejercida por un funcionario de la entidad contratante sobre cualquier contrato, la <strong>interventoría</strong> es contratada con un tercero externo especializado, y es obligatoria en dos casos:</p>
      <ul>
        <li>Cuando la entidad estatal contrata la ejecución de un proyecto de cierta complejidad técnica que requiere seguimiento especializado (la norma no define un umbral específico, pero la práctica del DNP y las CAR establece como referencia contratos de obra mayores a $500 millones COP).</li>
        <li>Cuando el supervisor interno no tiene la formación técnica específica para controlar el tipo de obra contratada.</li>
      </ul>
      <p>En proyectos financiados con regalías (SGR), el DNP exige interventoría externa como requisito de elegibilidad para el desembolso de recursos. El valor de la interventoría generalmente oscila entre el 3% y el 8% del valor de la obra, según su complejidad.</p>

      <h2>Componentes de la interventoría técnica en obras hidráulicas</h2>
      <ul>
        <li><strong>Interventoría técnica:</strong> Verificación de que la obra se construye según los diseños aprobados, con los materiales especificados y las normas técnicas aplicables (RAS 2017, NTC de materiales, NSR-10 donde aplique). Incluye control de calidad de materiales (ensayos de laboratorio), verificación de procedimientos constructivos y aprobación de cada etapa antes de avanzar.</li>
        <li><strong>Interventoría administrativa:</strong> Control del avance financiero y contractual. Verificación de que los pagos corresponden al avance real de obra, control de la bitácora, aprobación de actas de obra e informes periódicos.</li>
        <li><strong>Interventoría ambiental:</strong> Verificación del cumplimiento del Plan de Manejo Ambiental (PMA) durante la construcción. En obras de acueducto incluye control de sedimentos en quebradas aledañas, manejo de escombros, ruido y vibración.</li>
        <li><strong>Interventoría social:</strong> Gestión de la relación con las comunidades afectadas por la construcción, atención a PQRS, y verificación del cumplimiento de compromisos sociales del contratista.</li>
      </ul>

      <h2>Obligaciones del interventor en proyectos de agua y saneamiento</h2>
      <p>En obras de acueducto y alcantarillado, las obligaciones técnicas específicas del interventor incluyen:</p>
      <ul>
        <li>Verificar que las tuberías y accesorios instalados cumplen con las normas NTC vigentes y las especificaciones del diseño (diámetros, presión de trabajo, materiales).</li>
        <li>Presenciar y aprobar las pruebas hidrostáticas de las tuberías antes de rellenar las zanjas.</li>
        <li>Controlar la compactación de rellenos mediante ensayos de densidad de campo, conforme a los valores especificados en el diseño.</li>
        <li>Verificar la construcción de las estructuras hidráulicas (bocatomas, cámaras de quiebre de presión, tanques) conforme a planos estructurales y arquitectónicos aprobados.</li>
        <li>Aprobar las pruebas de funcionamiento del sistema (prueba de presión de la red, prueba de caudal) antes de la entrega.</li>
      </ul>

      <h2>Responsabilidades legales del interventor</h2>
      <p>La Ley 1474 de 2011 establece que el interventor es solidariamente responsable con el contratista de los daños causados por ocultamiento de defectos o irregularidades en la ejecución del contrato. Esto significa que si el interventor aprueba una etapa constructiva defectuosa y esa deficiencia genera daños posteriormente, el interventor puede ser demandado junto con el contratista. Esta responsabilidad hace que la selección del interventor sea una decisión de alto impacto para la entidad contratante.</p>
      <p><strong>BIC ofrece interventoría técnica especializada en obras hidráulicas, acueductos, alcantarillados y sistemas de saneamiento básico en Colombia, con personal certificado y experiencia en proyectos financiados con recursos SGR.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'alcantarillado-pluvial-colombia': {
    title: 'Diseño de alcantarillado pluvial en Colombia: método racional, SUDS y cumplimiento RAS 2000',
    date: 'Abril 2026',
    readTime: '11 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Manual técnico de diseño de alcantarillado pluvial en Colombia: método racional, sistemas SUDS, normativa RAS Título D, caudales de diseño y estructuras de control.',
    keywords: 'alcantarillado pluvial diseño Colombia RAS 2000, método racional alcantarillado Colombia, SUDS drenaje urbano Colombia, diseño drenaje pluvial Colombia',
    body: <>
      <p>El alcantarillado pluvial —la red de colectores, sumideros y estructuras de control que recoge y conduce el agua lluvia en zonas urbanas— es una de las infraestructuras públicas más exigidas y con mayor impacto en la calidad de vida de los municipios colombianos. Cuando falla, lo hace de manera visible y costosa: inundaciones de vías, daños en edificaciones, arrastre de sedimentos y contaminación de cuerpos receptores. Cuando funciona bien, es prácticamente invisible. Este artículo describe la metodología de diseño conforme al RAS 2000 y la Resolución 0330 de 2017.</p>

      <h2>Marco normativo: RAS 2000 Título D y Resolución 0330 de 2017</h2>
      <p>El <strong>Título D del RAS 2000</strong>, actualizado por la Resolución 0330 de 2017, regula el diseño de los sistemas de alcantarillado pluvial en Colombia. Los aspectos más relevantes para el diseño son:</p>
      <ul>
        <li><strong>Período de diseño:</strong> 25 años para colectores principales; 15 años para colectores secundarios.</li>
        <li><strong>Período de retorno de diseño:</strong> mínimo 5 años para redes en zonas residenciales; 10 años para vías principales y zonas comerciales; 25–50 años para sistemas de drenaje mayor (canales, estructuras de control).</li>
        <li><strong>Sistema separado vs combinado:</strong> El RAS recomienda el sistema separado (red pluvial independiente de la red sanitaria) para nuevos desarrollos. Los sistemas combinados existentes deben rehabilitarse progresivamente hacia la separación.</li>
      </ul>

      <h2>Método racional para cálculo de caudales pluviales</h2>
      <p>El <strong>Método Racional</strong> es el procedimiento estándar del RAS 2000 para el cálculo de caudales de diseño en cuencas urbanas menores a 80 hectáreas: Q = C × I × A / 360, donde Q es el caudal pico (m³/s), C es el coeficiente de escorrentía adimensional, I es la intensidad de lluvia de diseño (mm/h) y A es el área de la cuenca (ha).</p>
      <p>Los coeficientes de escorrentía C para distintas superficies en Colombia:</p>
      <ul>
        <li><strong>Techos impermeables y pavimentos:</strong> C = 0,85–0,95</li>
        <li><strong>Andenes y zonas de parqueo:</strong> C = 0,70–0,85</li>
        <li><strong>Zonas residenciales con jardines (40% impermeabilizado):</strong> C = 0,35–0,55</li>
        <li><strong>Parques y zonas verdes:</strong> C = 0,10–0,25</li>
        <li><strong>Zonas con pendientes pronunciadas y suelo arcilloso:</strong> C puede aumentar 0,10–0,15 sobre los valores anteriores</li>
      </ul>
      <p>El tiempo de concentración —que determina la duración de lluvia de diseño en la curva IDF— se calcula por el método de Kirpich para cuencas pequeñas o por el método de la velocidad de flujo para cuencas urbanas, verificando que el tiempo mínimo de concentración no sea inferior a 10 minutos.</p>

      <h2>Diseño de la red de colectores pluviales</h2>
      <p>Los colectores pluviales son tuberías circulares o secciones abiertas (canales) que conducen el agua lluvia desde los sumideros hasta los cuerpos receptores (ríos, quebradas, canales de drenaje). Los criterios de diseño hidráulico del RAS para colectores:</p>
      <ul>
        <li><strong>Velocidad mínima:</strong> 0,9 m/s para limpiar los sólidos arrastrados por el agua lluvia.</li>
        <li><strong>Velocidad máxima:</strong> 5,0 m/s para tuberías de concreto; 4,0 m/s para PVC. Velocidades mayores requieren protección especial de la tubería.</li>
        <li><strong>Diámetro mínimo:</strong> 300 mm (12") para colectores principales; 200 mm (8") para ramales secundarios.</li>
        <li><strong>Profundidad mínima:</strong> 1,0 m de recubrimiento hasta la clave del tubo en zonas de tráfico vehicular.</li>
      </ul>

      <h2>Sistemas SUDS en el diseño colombiano</h2>
      <p>La Resolución 0330 de 2017 incorpora los <strong>Sistemas Urbanos de Drenaje Sostenible (SUDS)</strong> como complemento al alcantarillado convencional, buscando retener al menos un 25% del caudal pico generado por el desarrollo. Los SUDS más comunes en proyectos colombianos son jardines de lluvia, biorretenedores, pavimentos permeables y tanques de detención subterráneos. Su diseño se rige por la Guía Metodológica para la Formulación e Implementación de SUDS del MVCT (2022).</p>
      <p><strong>BIC diseña sistemas de alcantarillado pluvial sostenible para municipios y urbanizaciones en Colombia, integrando SUDS con la red convencional para cumplir los requisitos del RAS 2017.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'epanet-colombia-acueducto': {
    title: 'EPANET para diseño de acueductos en Colombia: guía técnica y aplicaciones prácticas',
    date: 'Abril 2026',
    readTime: '10 min',
    category: 'Software y Modelación',
    metaDesc: 'Tutorial técnico de EPANET para modelación de redes de acueducto en Colombia: calibración del modelo, análisis de presiones, pérdidas de carga y optimización según RAS 2000.',
    keywords: 'EPANET Colombia modelación acueducto, red distribución agua potable Colombia modelo hidráulico, presiones acueducto Colombia RAS, EPANET acueducto municipal Colombia',
    body: <>
      <p>EPANET es el software de modelación hidráulica de redes de distribución de agua potable más utilizado en Colombia. Desarrollado por la Agencia de Protección Ambiental de los EE.UU. (EPA), es de distribución gratuita y sus resultados son reconocidos por el Ministerio de Vivienda, las Corporaciones Autónomas y las ESPs como herramienta válida para el diseño y análisis de sistemas de acueducto. Si usted diseña redes de distribución en Colombia y no usa EPANET, está tomando decisiones con una herramienta menos potente que la disponible.</p>

      <h2>¿Por qué usar EPANET en diseño de acueductos colombianos?</h2>
      <p>Antes de EPANET, los diseñadores de redes de distribución en Colombia aplicaban métodos manuales basados en la ecuación de Hardy-Cross para redes ramificadas, o estimaciones simplificadas para redes en malla. Estos métodos son laboriosos, propensos a error y no permiten analizar escenarios de variación de demanda durante el día, condiciones de falla de tuberías o situaciones de emergencia.</p>
      <p>EPANET permite: calcular presiones en cada nodo de la red para cualquier condición de demanda; simular la variación de presiones durante 24 horas (simulación de periodo extendido); analizar la calidad del agua (tiempo de residencia, concentración de cloro residual); identificar tramos con presiones deficientes o excesivas; y optimizar el diseño de la red para cumplir los criterios del RAS 2000 con el mínimo costo de inversión.</p>

      <h2>Construcción del modelo: nodos, tuberías, depósitos y bombas</h2>
      <p>Un modelo EPANET de una red de distribución se compone de:</p>
      <ul>
        <li><strong>Nodos de demanda (junctions):</strong> Representan puntos de consumo en la red. Cada nodo tiene una coordenada geográfica (elevación sobre nivel del mar) y una demanda base (L/s o m³/h). La demanda se distribuye entre los nodos según criterios de área de influencia de cada tramo de tubería.</li>
        <li><strong>Tuberías (pipes):</strong> Representan los tramos de red con sus características: diámetro, longitud, material (a través del coeficiente de rugosidad de Hazen-Williams o Manning) y estado (abierta, cerrada, con válvula de control).</li>
        <li><strong>Depósitos (reservoirs y tanks):</strong> Los depósitos de nivel fijo (reservoirs) representan la fuente de agua o el tanque de compensación con nivel controlado. Los depósitos de nivel variable (tanks) permiten simular el llenado y vaciado de tanques de almacenamiento durante el día.</li>
        <li><strong>Bombas:</strong> Se definen mediante la curva característica H-Q (altura manométrica vs caudal). Permiten analizar la operación de sistemas por bombeo y verificar que la bomba seleccionada opera en su punto de diseño.</li>
      </ul>

      <h2>Calibración con datos de campo</h2>
      <p>Un modelo EPANET sin calibrar es de utilidad limitada para la toma de decisiones. La calibración consiste en ajustar los parámetros del modelo (rugosidades, demandas, coeficientes de pérdidas menores) hasta que los resultados del modelo reproduzcan fielmente los datos medidos en campo: presiones en puntos estratégicos de la red y caudales en tuberías principales (medidos con caudalímetros portátiles o electromagnéticos).</p>
      <p>En Colombia, la calibración de modelos EPANET es especialmente importante porque muchas redes tienen antigüedad superior a 20 años, con rugosidades internas aumentadas por incrustaciones, diámetros nominales que no corresponden al diámetro hidráulico real, y conexiones clandestinas no registradas que modifican el patrón real de demanda.</p>

      <h2>Análisis de presiones según RAS 2000</h2>
      <p>Los criterios de presión del RAS 2000 y la Resolución 0330 de 2017 que debe verificar el modelo EPANET:</p>
      <ul>
        <li><strong>Presión mínima de servicio:</strong> 10 m.c.a. (metros de columna de agua) en cualquier nodo de la red, para el caudal máximo horario de demanda.</li>
        <li><strong>Presión máxima de servicio:</strong> 60 m.c.a. para nivel de complejidad bajo (I); 70 m.c.a. para nivel II, III y IV. Presiones superiores requieren válvulas reductoras de presión (VRP) o la división de la red en zonas de presión.</li>
        <li><strong>Análisis de variación diaria:</strong> La simulación de período extendido debe mostrar que los criterios de presión se cumplen tanto en el pico nocturno de baja demanda como en el pico matutino de alta demanda.</li>
      </ul>
      <p><strong>BIC utiliza EPANET para el diseño y optimización de redes de acueducto en municipios de Colombia, con modelos calibrados y análisis de escenarios para garantizar el cumplimiento del RAS 2017.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

  'bocatoma-lateral-colombia': {
    title: 'Bocatoma lateral: diseño hidráulico y criterios para proyectos de acueducto en Colombia',
    date: 'Abril 2026',
    readTime: '12 min',
    category: 'Agua y Saneamiento',
    metaDesc: 'Guía técnica detallada para el diseño de bocatomas laterales en Colombia: criterios hidráulicos, cámara de aquietamiento, desripiador, compuertas y cálculo de caudal de captación.',
    keywords: 'diseño bocatoma lateral Colombia, bocatoma acueducto Colombia hidráulica, captación río diseño hidráulico Colombia, bocatoma acueducto rural Colombia',
    body: <>
      <p>La bocatoma lateral es la estructura de captación más común en los sistemas de acueducto de zonas andinas colombianas. Su diseño involucra consideraciones hidráulicas, sedimentológicas y geotécnicas que, cuando no se aplican correctamente, resultan en captaciones que se colmatan con sedimentos en cada creciente, que captan menos agua de la concesionada o que generan problemas de socavación en sus fundaciones. Este artículo presenta los criterios técnicos del RAS 2000 y las consideraciones prácticas aprendidas en proyectos en el Eje Cafetero.</p>

      <h2>Tipos de bocatoma: cuándo elegir lateral o frontal</h2>
      <p>La selección del tipo de captación depende de las características del río:</p>
      <ul>
        <li><strong>Bocatoma lateral:</strong> La captación se realiza a través de una abertura o rejilla en el costado de una presa de derivación. Es la más apropiada para ríos con transporte significativo de sedimentos, porque permite controlar el ingreso de material al sistema. Requiere un deflector en la presa que genere recirculación del flujo hacia la captación.</li>
        <li><strong>Bocatoma frontal o de tirolesa:</strong> La captación se realiza a través de una rejilla ubicada en la solera del canal, perpendicular al flujo. Es más compacta y adecuada para ríos pequeños de montaña con caudales bajos y poco sedimento grueso.</li>
        <li><strong>Captación sumergida:</strong> Para ríos con fluctuaciones extremas de nivel que harían impráctica una bocatoma superficial. Requiere tuberías de succión y sistema de bombeo.</li>
      </ul>

      <h2>Componentes de una bocatoma lateral y sus criterios de diseño</h2>
      <p>Una bocatoma lateral completa está compuesta por:</p>
      <ul>
        <li><strong>Presa de derivación:</strong> Estructura transversal al cauce que eleva el nivel del agua para garantizar la captación por gravedad. La altura de la presa se diseña para que en el caudal mínimo de diseño (Q97,5% del análisis de frecuencias) el nivel en el umbral de captación sea superior al nivel mínimo requerido. Materiales: concreto ciclópeo, gaviones o enrocados según la disponibilidad local y la carga de sedimentos.</li>
        <li><strong>Rejilla de captación:</strong> Controla el acceso de materiales flotantes y arrastre de fondo al canal de aducción. La separación de barras se diseña para el tamaño máximo de material que puede ingresar al sistema. El RAS 2000 recomienda: barras de 1 a 2 cm de grosor, separación de 3 a 5 cm, ángulo de inclinación de 10–20° respecto a la horizontal para facilitar el autolimpiado.</li>
        <li><strong>Canal de aducción:</strong> Conduce el agua desde la bocatoma hasta la cámara de aquietamiento. Se diseña para el caudal máximo de captación, incluyendo el caudal de purga de sedimentos. Velocidad de diseño: 0,6–1,2 m/s.</li>
        <li><strong>Cámara de aquietamiento (desripiador):</strong> Estructura de sección transversal ampliada donde se reduce la velocidad del flujo para que los sedimentos en suspensión gruesa se depositen por gravedad. Tiene un umbral de rebose que separa el agua clarificada (que pasa a la aducción) del material sedimentado (que se purga periódicamente).</li>
        <li><strong>Compuertas:</strong> Para regular el caudal captado y para facilitar la purga periódica del desripiador. El RAS 2000 requiere compuertas de aislamiento en la entrada de la bocatoma y en la salida del desripiador.</li>
      </ul>

      <h2>Análisis de transporte de sedimentos</h2>
      <p>El diseño de una bocatoma lateral debe incluir un análisis del transporte de sedimentos del río para evitar que la captación se colmate con material grueso durante crecientes. Los parámetros clave son: la concentración de sedimentos en suspensión (mg/L) en distintos caudales, la distribución granulométrica del material de fondo (determinada por muestreo en campo) y la carga de fondo estimada con la ecuación de Meyer-Peter y Müller u otras relaciones empíricas calibradas.</p>
      <p>En ríos del Eje Cafetero con alta producción de sedimentos volcánicos (Chinchiná, Campoalegre), la eficiencia de la rejilla para excluir material grueso ({'>'}2 mm) debe verificarse para caudales de creciente. Una bocatoma bien diseñada puede operar sin problemas de sedimentación durante la vida útil del sistema; una mal diseñada requiere dragados costosos cada temporada de lluvias.</p>
      <p><strong>BIC cuenta con experiencia comprobada en diseño de bocatomas en ríos andinos de alta carga sedimentaria, con estudios hidrológicos y análisis de transporte de sedimentos integrados al diseño.</strong> <strong>Contáctenos: ingenieriabernal.co | WhatsApp +57 302 477 8910</strong></p>
    </>,
  },

}

export default articlesB
