import QuoteFormInline from '../components/QuoteFormInline'

// Category F: Advanced hydraulic/hydrological expertise articles (3 articles: F-01 to F-03)
// Target: AI search positioning + high-intent Colombian engineering queries
const articlesF: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  /* ─────────────────────────────────────────────────────────────────────────
     F-01: Socavación de puentes con HEC-18 en Colombia
  ───────────────────────────────────────────────────────────────────────── */
  'socavacion-puentes-hec18-colombia': {
    title: 'Análisis de socavación en puentes con HEC-18 en Colombia: metodología y costos 2026',
    date: 'Abril 2026',
    readTime: '14 min',
    category: 'Ingeniería de Puentes',
    metaDesc: 'Guía completa sobre el análisis de socavación en puentes en Colombia: metodología HEC-18, HEC-RAS, normativa INVIAS, tipos de socavación y costos del estudio en el Eje Cafetero.',
    keywords: 'socavación puentes Colombia, análisis socavación HEC-18, estudio socavación puente Colombia, socavación general y local Colombia, HEC-18 INVIAS Colombia, consultor socavación puente',
    body: <>
      <p>En Colombia, el <strong>35% de los colapsos de puentes documentados entre 1996 y 2020</strong> fue causado directamente por socavación del lecho, según datos del INVIAS. Puentes que soportaron décadas de carga viva colapsaron en pocas horas durante eventos de creciente porque sus cimientos perdieron el soporte del suelo por erosión hidráulica. Este artículo explica qué es la socavación, cómo se calcula con la metodología HEC-18 y por qué BIC realiza estos estudios para proyectos de infraestructura vial en todo el país.</p>

      <h2>¿Qué es la socavación en puentes y por qué es tan peligrosa?</h2>
      <p>La socavación es la remoción de material del lecho y las márgenes de un río por acción del flujo durante una creciente. Cuando el agua pasa por debajo de un puente, la sección del cauce se contrae — porque los estribos y las pilas ocupan parte del ancho disponible — y la velocidad del flujo aumenta. A mayor velocidad, mayor capacidad de arrastre de sedimentos. El lecho se erosiona hasta que la velocidad del flujo se reduce nuevamente por el aumento del área hidráulica: ese es el nivel final de socavación.</p>
      <p>Lo que hace peligrosa a la socavación es su invisibilidad: ocurre bajo el agua, en minutos o pocas horas durante el pico de la creciente, y puede dejar las pilas o estribos del puente "flotando" sobre un hoyo vacío sin que se note desde arriba. Cuando la creciente baja, el lecho puede rellenarse parcialmente, borrando la evidencia de la erosión máxima.</p>

      <h2>Tipos de socavación que analiza el HEC-18</h2>
      <p>La metodología HEC-18 (Hydraulic Engineering Circular No. 18, FHWA), adoptada por el INVIAS como referencia técnica para el diseño de puentes en Colombia, distingue tres componentes de socavación que deben calcularse por separado y luego sumarse para determinar la profundidad total de diseño de la cimentación:</p>

      <h3>1. Socavación general del cauce</h3>
      <p>Es la bajada general del lecho a lo largo de un tramo del río, sin relación directa con el puente. Puede ser progresiva (el río se está encajando por extracción de material, urbanización de la cuenca o cambios en la pendiente de equilibrio) o cíclica (asociada a eventos de creciente extrema). Se calcula a partir del balance de sedimentos en transporte: si el río lleva más material del que deposita, el lecho baja. En Colombia, los ríos andinos con cuencas en proceso de deforestación y los ríos de la Depresión Momposina muestran tasas de socavación general significativas que se deben cuantificar.</p>

      <h3>2. Socavación por contracción</h3>
      <p>Se produce porque los estribos y las pilas del puente reducen el ancho efectivo del cauce, acelerando el flujo. La metodología HEC-18 aplica las ecuaciones de Laursen para cauces con lecho de arenas o gravas, calculando la profundidad de equilibrio a partir de la relación entre el ancho libre bajo el puente y el ancho natural del cauce. Es la componente más fácil de estimar pero a menudo la de mayor magnitud en ríos de planicie.</p>

      <h3>3. Socavación local en pilas y estribos</h3>
      <p>Es la erosión localizada en torno a cada pila o estribo del puente, causada por los vórtices de herradura que el obstáculo genera en el flujo. La profundidad de socavación local puede superar los 3–5 metros en ríos con lecho de arena y eventos de diseño con caudales de período de retorno 200–500 años (Tr200–Tr500). HEC-18 propone ecuaciones basadas en los resultados de investigación de Colorado State University (ecuación de Richardson-Davis): <strong>ys = 2.0 × K1 × K2 × K3 × K4 × a^0.65 × Fr1^0.43</strong>, donde ys es la profundidad de socavación local, a es el ancho de la pila y Fr1 es el número de Froude del flujo de aproximación.</p>

      <h2>Rol del HEC-RAS en el análisis de socavación</h2>
      <p>HEC-RAS incluye módulos específicos para el cálculo de socavación conforme a la metodología HEC-18. El análisis se realiza en dos fases:</p>
      <p><strong>Fase 1 — Modelación hidráulica:</strong> Se construye el modelo 1D del tramo del río que incluye el puente. El módulo "Bridge Hydraulics" de HEC-RAS permite modelar el puente con su geometría real (sección transversal del tablero, posición de pilas, cotas de estribos). HEC-RAS calcula la velocidad del flujo de aproximación a la pila, el tirante hidráulico y el número de Froude para cada período de retorno analizado.</p>
      <p><strong>Fase 2 — Cálculo de socavación:</strong> Con los resultados hidráulicos, HEC-RAS aplica automáticamente las ecuaciones HEC-18 para cada componente. El usuario debe ingresar los datos geotécnicos (D50, D84, D16 del material del lecho y los estribos) y especificar el tipo de flujo (en vivo o con transporte de sedimentos en suspensión). Los resultados incluyen la profundidad de socavación para cada Tr y la cota mínima segura de la base de la cimentación.</p>

      <h2>Marco normativo en Colombia: INVIAS y el Manual de Drenaje</h2>
      <p>El Manual de Drenaje para Carreteras del INVIAS (actualización 2009, vigente hasta nueva edición) establece que todo diseño de puente debe incluir:</p>
      <ul>
        <li>Caudales de diseño para período de retorno mínimo de <strong>Tr 100 años</strong> en el diseño hidráulico general y <strong>Tr 500 años</strong> para el análisis de socavación de la cimentación.</li>
        <li>Aplicación de la metodología HEC-18 para los tres tipos de socavación.</li>
        <li>Profundidad mínima de la cimentación que exceda en al menos 1 metro la profundidad total de socavación calculada para Tr 500 años.</li>
        <li>Análisis de estabilidad del talud de los estribos considerando la reducción de soporte por la socavación.</li>
      </ul>
      <p>Para puentes sobre vías primarias, el estudio de socavación debe estar firmado por un <strong>ingeniero civil con tarjeta profesional COPNIA</strong> vigente y con experiencia demostrable en hidráulica fluvial.</p>

      <h2>Información de campo necesaria para el estudio</h2>
      <p>Un estudio de socavación en puentes requiere los siguientes insumos:</p>
      <ul>
        <li><strong>Topobatimetría del cauce:</strong> levantamiento del perfil longitudinal y secciones transversales del río en un tramo de al menos 500 metros aguas arriba y aguas abajo del puente, incluyendo la sección bajo el tablero. En BIC realizamos esta topobatimetría con estación total, GNSS y en cauces profundos con ecosonda.</li>
        <li><strong>Granulometría del lecho:</strong> muestreos del material del fondo del cauce para determinar la curva granulométrica (D50, D84, D16). Diferenciamos entre el material del lecho activo y el material de los bancos y planicies.</li>
        <li><strong>Caudales de diseño:</strong> análisis hidrológico de la cuenca para calcular los caudales de creciente para Tr 2, 5, 10, 25, 50, 100 y 500 años, usando análisis estadístico de caudales del IDEAM o modelación HEC-HMS cuando no hay estación hidrométrica.</li>
        <li><strong>Geometría del puente:</strong> planos del puente existente (si hay) o diseño propuesto, con dimensiones de pilas, estribos, tablero y cotas de cimentación.</li>
      </ul>

      <h2>Socavación en ríos de montaña colombianos: particularidades</h2>
      <p>Los ríos andinos del Eje Cafetero, Antioquia y la zona cafetera presentan características que diferencian el análisis de socavación respecto a ríos de planicie:</p>
      <ul>
        <li><strong>Lecho con material grueso heterogéneo:</strong> Los ríos de montaña tienen lechos de grava y cantos rodados con D50 entre 50 y 200 mm. En estos sustratos, la socavación máxima es menor porque el material es más resistente, pero ocurren en eventos de mayor energía (avenidas torrenciales).</li>
        <li><strong>Flujo supercrítico:</strong> En tramos de alta pendiente, el flujo puede ser supercrítico (Fr &gt; 1), lo que cambia las condiciones de borde del modelo hidráulico y las ecuaciones aplicables de HEC-18. La profundidad crítica reemplaza a la ecuación de Laursen para socavación por contracción.</li>
        <li><strong>Transporte de sedimentos gruesos y flujos hiperconcentrados:</strong> En eventos de avenida torrencial, el flujo puede transportar bloques de roca de varios toneladas que impactan directamente las pilas, generando daños estructurales que van más allá de la socavación convencional.</li>
      </ul>

      <h2>¿Cuánto cuesta un estudio de socavación en Colombia?</h2>
      <p>El costo depende de la longitud del tramo a modelar, el número de pilas y estribos del puente, la disponibilidad de datos del IDEAM y si se requiere topobatimetría de campo. Los rangos orientativos en Colombia en 2026 son:</p>
      <ul>
        <li><strong>Puente de 1 pila + 2 estribos, con información hidrológica disponible:</strong> $9–$16 millones COP</li>
        <li><strong>Puente con múltiples pilas, sin estación hidrométrica cercana:</strong> $18–$30 millones COP (incluye análisis hidrológico completo)</li>
        <li><strong>Estudio integral con topobatimetría de campo + granulometría + modelación:</strong> $25–$45 millones COP</li>
      </ul>

      <h2>Preguntas frecuentes sobre socavación en puentes</h2>
      <h3>¿Cuándo es obligatorio el estudio de socavación en Colombia?</h3>
      <p>Es obligatorio para cualquier puente nuevo sobre vía primaria o secundaria según el Manual de Drenaje del INVIAS. Para vías terciarias y puentes artesanales, no hay norma que lo exija explícitamente, pero es una buena práctica de ingeniería y puede ser requerido por la interventoría. También es obligatorio para puentes existentes cuando se detectan signos de socavación activa o cuando se va a ampliar el tablero.</p>
      <h3>¿El HEC-RAS calcula automáticamente la socavación?</h3>
      <p>Sí, HEC-RAS tiene un módulo de socavación integrado que aplica las ecuaciones HEC-18. Sin embargo, el ingeniero debe ingresar correctamente los parámetros geotécnicos del lecho y verificar que los resultados son coherentes con las condiciones de campo. No es un cálculo automático que pueda realizarse sin criterio técnico especializado.</p>
      <h3>¿Qué diferencia hay entre socavación y erosión?</h3>
      <p>La erosión es el proceso general de desgaste del suelo por acción del agua. La socavación es un tipo específico de erosión localizada en el lecho de un cauce, asociada al aumento de velocidad del flujo. La socavación en puentes es erosión hidráulica acelerada por la presencia de la estructura.</p>
      <h3>¿Puede revertirse la socavación?</h3>
      <p>La socavación activa puede frenarse con obras de protección: colchones de roca (riprap), gaviones, fundas de enrocado en pilas y estribos, o umbral de fondo aguas abajo del puente. Sin embargo, el material ya removido no regresa naturalmente. En algunos ríos con alto transporte de sedimentos, el hoyo de socavación puede rellenarse parcialmente cuando baja la creciente, pero esto no significa que la cimentación esté segura para la próxima creciente.</p>

      <QuoteFormInline serviceId="socavacion" />
    </>,
  },

  /* ─────────────────────────────────────────────────────────────────────────
     F-02: Condición de aguas abajo HEC-RAS
  ───────────────────────────────────────────────────────────────────────── */
  'condicion-aguas-abajo-hec-ras': {
    title: 'Condición de aguas abajo en HEC-RAS: guía completa para régimen subcrítico y supercrítico',
    date: 'Abril 2026',
    readTime: '13 min',
    category: 'Software y Modelación',
    metaDesc: 'Qué es la condición de borde aguas abajo en HEC-RAS, cómo elegirla según el régimen de flujo (subcrítico o supercrítico), opciones disponibles y errores comunes en proyectos colombianos.',
    keywords: 'condición aguas abajo HEC-RAS, condición de borde HEC-RAS Colombia, régimen subcrítico HEC-RAS, pendiente normal HEC-RAS, condición de contorno HEC-RAS, HEC-RAS tutorial Colombia',
    body: <>
      <p>Una de las preguntas más frecuentes entre ingenieros que usan HEC-RAS por primera vez —o que llevan tiempo usándolo pero encuentran resultados inconsistentes— es: <strong>¿qué condición de aguas abajo debo usar en mi modelo?</strong> La elección correcta de la condición de borde aguas abajo es crítica para que los resultados del perfil hidráulico sean realistas. Una condición mal seleccionada puede sobrestimar o subestimar significativamente los tirantes hidráulicos en todo el tramo modelado, afectando directamente los mapas de inundación y el diseño de obras hidráulicas.</p>

      <h2>¿Qué es una condición de borde en HEC-RAS?</h2>
      <p>En hidráulica de canales a superficie libre, el flujo de agua en un cauce es un problema gobernado por una ecuación diferencial que necesita <strong>condiciones de borde</strong> para poder resolverse. Sin ellas, el sistema de ecuaciones tiene infinitas soluciones. HEC-RAS resuelve las ecuaciones de Saint-Venant (régimen no permanente) o la ecuación de energía (régimen permanente) integrando el cálculo desde las secciones transversales donde se conoce el estado del flujo hacia las secciones donde se desconoce.</p>
      <p>La <strong>condición de borde aguas abajo</strong> le dice al modelo cuál es el tirante hidráulico (profundidad del agua) en la sección más baja del tramo modelado. A partir de ese dato conocido, HEC-RAS calcula el perfil hacia arriba (en flujo subcrítico) o hacia abajo (en flujo supercrítico).</p>

      <h2>Régimen subcrítico vs supercrítico: ¿cuál tiene su cauce?</h2>
      <p>El régimen de flujo determina en qué dirección se propagan las perturbaciones hidráulicas y, por tanto, dónde se necesitan condiciones de borde:</p>
      <ul>
        <li><strong>Régimen subcrítico (Fr &lt; 1, lento):</strong> Las perturbaciones aguas abajo se propagan hacia arriba. Por eso, la condición de borde necesaria está <strong>aguas abajo</strong>. El cálculo va de abajo hacia arriba. Es el régimen más común en ríos de planicie y cauces urbanos con pendiente suave (&lt;0.5%). También aplica a ríos de montaña en tramos de baja pendiente o en zonas de remanso (aguas arriba de una presa, confluencia o cambio de sección).</li>
        <li><strong>Régimen supercrítico (Fr &gt; 1, rápido):</strong> Las perturbaciones no pueden propagarse hacia arriba. La condición de borde necesaria está <strong>aguas arriba</strong>. El cálculo va de arriba hacia abajo. Es el régimen de torrentes de montaña en tramos de alta pendiente (&gt;2–3%).</li>
        <li><strong>Régimen mixto (crítico o con transiciones):</strong> El flujo cambia de subcrítico a supercrítico (en un punto de control: cambio de pendiente, resalto hidráulico) o viceversa (en un resalto hidráulico). HEC-RAS puede manejar flujo mixto, pero el modelo necesita condiciones de borde en ambos extremos y el usuario debe interpretar cuidadosamente los resultados en los puntos de transición.</li>
      </ul>
      <p>Para saber el régimen de su cauce, calcule el número de Froude en la sección de interés: <strong>Fr = V / √(g × y)</strong>, donde V es la velocidad media, g es la aceleración gravitacional (9.81 m/s²) y y es el tirante hidráulico. Si Fr &lt; 1: subcrítico. Si Fr &gt; 1: supercrítico.</p>

      <h2>Opciones de condición de borde aguas abajo en HEC-RAS</h2>

      <h3>1. Profundidad normal (Normal Depth)</h3>
      <p>Es la opción más usada y la más apropiada cuando el tramo modelado termina en un cauce con pendiente uniforme, lejos de cualquier estructura o confluencia que genere remanso. HEC-RAS necesita que el usuario ingrese la <strong>pendiente de la línea de energía</strong> (que en flujo uniforme es igual a la pendiente del fondo del cauce). El programa calcula la profundidad normal con la ecuación de Manning.</p>
      <p><strong>Cuándo usarla:</strong> El tramo termina en un río con pendiente relativamente uniforme, sin estructuras aguas abajo que puedan elevar el nivel. Es la opción "por defecto" más robusta para ríos de Colombia cuando el extremo del modelo está suficientemente lejos del área de interés.</p>
      <p><strong>Error frecuente:</strong> Usar la pendiente media del cauce completo en lugar de la pendiente local en la sección aguas abajo. En ríos con cambios de pendiente, esto puede generar tirantes iniciales incorrectos que afectan el perfil en varios kilómetros hacia arriba.</p>

      <h3>2. Profundidad crítica (Critical Depth)</h3>
      <p>HEC-RAS calcula automáticamente la profundidad crítica en la sección aguas abajo (la profundidad para la que el número de Froude es exactamente 1). Es útil cuando el modelo termina en un salto o caída libre — el borde de una cascada, la cresta de un vertedero, la salida de un canal hacia un río mucho más grande — donde el flujo supera el estado crítico.</p>
      <p><strong>Cuándo usarla:</strong> El tramo termina en un punto de control real (salto, caída), o cuando no se tiene información del nivel aguas abajo y se quiere una condición conservadora (la profundidad crítica suele ser la mínima posible para flujo subcrítico).</p>
      <p><strong>Precaución:</strong> No use profundidad crítica en cauces con régimen claramente subcrítico donde hay remanso. El resultado será un perfil de tirantes subestimado con inundaciones menores a las reales.</p>

      <h3>3. Elevación de la lámina de agua conocida (Known Water Surface)</h3>
      <p>Se ingresa directamente la cota de la lámina de agua en la sección aguas abajo, medida en campo (aforo con instrumento de nivel) o obtenida de un modelo de mayor escala. Es la condición más precisa cuando se tiene el dato.</p>
      <p><strong>Cuándo usarla:</strong> El tramo desemboca en un embalse con nivel conocido, o en un río principal del que se tiene un registro de niveles calibrado. También se usa en HEC-RAS para modelar el efecto de remanso de una presa aguas abajo del tramo.</p>
      <p><strong>Aplicación en Colombia:</strong> Para ríos que desembocan en el río Magdalena, Cauca o en embalses regulados (Betania, Miel I, Salvajina), la cota de la lámina del cuerpo receptor puede obtenerse del operador de la regulación o del modelo hídrico del IDEAM.</p>

      <h3>4. Curva de gasto o relación caudal-tirante (Rating Curve)</h3>
      <p>Se ingresa una tabla de pares (Q, y) — caudal vs. tirante — medida en la sección aguas abajo. HEC-RAS interpola en la tabla para obtener el tirante correspondiente al caudal de cada perfil de cálculo. Es la condición más representativa de la realidad cuando se dispone de una curva de aforo calibrada para la estación hidrométrica más cercana al límite del modelo.</p>
      <p><strong>Cuándo usarla:</strong> Hay una estación hidrométrica del IDEAM cerca del extremo aguas abajo del modelo, con curva de aforo publicada. También se puede construir una curva de gasto sintética usando Manning para la sección transversal del río en el extremo del modelo.</p>

      <h2>Condiciones de borde en HEC-RAS régimen no permanente (Unsteady Flow)</h2>
      <p>En el módulo de flujo no permanente (Unsteady Flow Analysis), las condiciones de borde cambian de naturaleza: en lugar de definir un tirante o una pendiente, se definen series de tiempo. Las opciones más usadas son:</p>
      <ul>
        <li><strong>Hidrograma de caudal aguas arriba:</strong> Serie de tiempo Q(t) en la sección aguas arriba. Es la condición de entrada principal de la creciente.</li>
        <li><strong>Hidrograma de nivel aguas abajo:</strong> Serie de tiempo h(t) en la sección aguas abajo. Útil cuando el cauce desemboca en un estuario con mareas o en un embalse con nivel variable.</li>
        <li><strong>Curva de gasto (Rating Curve):</strong> También válida para no permanente cuando el nivel aguas abajo depende del caudal en tiempo real.</li>
        <li><strong>Pendiente normal:</strong> Válida también para no permanente como condición de salida en tramos que se extienden suficientemente hacia el cauce receptor.</li>
      </ul>
      <p>En Colombia, para estudios de amenaza por inundación (Decreto 1807), lo más frecuente es usar el módulo de no permanente con hidrograma aguas arriba (calculado con HEC-HMS) y pendiente normal o curva de gasto aguas abajo.</p>

      <h2>¿Qué pasa si la condición de borde aguas abajo es incorrecta?</h2>
      <p>El efecto de una condición de borde incorrecta se "propaga" hacia arriba a lo largo de varios kilómetros del modelo. Si la condición aguas abajo es demasiado alta (sobreestima el tirante), el perfil completo se levantará artificialmente, generando manchas de inundación mayores a las reales. Si es demasiado baja (subestima el tirante), el perfil será más bajo de lo real y la inundación parecerá menor. Por esta razón, se recomienda que el extremo aguas abajo del modelo esté suficientemente lejos del área de interés (al menos 3–5 veces el tirante normal del cauce), para que el error de la condición de borde se amortigüe antes de llegar a la zona de análisis.</p>

      <h2>Ejemplo práctico: condición aguas abajo para un tramo urbano en Manizales</h2>
      <p>Suponga que se modela un tramo de 2 km de la quebrada El Guamo en Manizales para un estudio de amenaza por inundación según el Decreto 1807. El tramo termina en la confluencia con el río Chinchiná. ¿Cuál es la condición de borde aguas abajo correcta?</p>
      <p>Opciones analizadas: (1) Profundidad normal: la pendiente media del río Chinchiná en ese punto es 0.6%; se calcula la profundidad normal usando Manning con la sección del Chinchiná. Válida si el Chinchiná no genera remanso significativo sobre la quebrada. (2) Rating curve del Chinchiná: si el IDEAM tiene una estación en el Chinchiná cercana a la confluencia, se puede usar su curva de gasto. (3) Known Water Surface: si el modelo del Chinchiná (realizado aparte) entrega el nivel en la confluencia para cada Tr, se puede usar ese valor.</p>
      <p>En este caso, BIC usaría la profundidad normal calibrada con datos del IDEAM y verificaría que el nivel en la confluencia es coherente con los niveles históricos de creciente registrados. Si existe un modelo del Chinchiná disponible, se usaría como condición de borde conocida para mayor precisión.</p>

      <h2>Preguntas frecuentes sobre condición de borde en HEC-RAS</h2>
      <h3>¿Puedo usar profundidad normal en todos los modelos?</h3>
      <p>Para la mayoría de modelos de ríos colombianos en régimen subcrítico, sí. Siempre que el extremo del modelo esté suficientemente alejado del área de interés y la pendiente del cauce sea razonablemente uniforme en esa zona. No es adecuada si el tramo termina justo aguas arriba de una confluencia importante, un embalse o una estructura de control.</p>
      <h3>¿Qué pendiente uso para la profundidad normal?</h3>
      <p>Use la pendiente de la línea de energía en la sección de salida, que en flujo uniforme equivale a la pendiente del fondo del cauce. Calcúlela midiendo la diferencia de cotas del fondo entre dos secciones transversales en la zona de salida, dividida por la distancia entre ellas. No use la pendiente media de toda la cuenca o del tramo completo.</p>
      <h3>¿Por qué HEC-RAS da el aviso "Critical Depth used at downstream"?</h3>
      <p>Este mensaje aparece cuando HEC-RAS no logra converger con la condición de borde especificada y cae a profundidad crítica como solución de respaldo. Generalmente indica que la condición de borde es inconsistente con el régimen de flujo calculado (por ejemplo, se especificó profundidad normal para flujo subcrítico pero el flujo calculado en esa sección es supercrítico). Revise la pendiente del cauce y el tipo de régimen antes de proceder.</p>
      <h3>¿Qué condición de borde usar en flujo mixto?</h3>
      <p>En flujo mixto, HEC-RAS necesita condiciones en ambos extremos. Use "Mixed Flow Regime" en la configuración del plan y defina tanto la condición aguas arriba (para la porción supercrítica) como la aguas abajo (para la porción subcrítica). HEC-RAS identifica el punto de control (profundidad crítica) y calcula el perfil desde ambos extremos hacia el centro.</p>

      <QuoteFormInline serviceId="hec-ras-1d" />
    </>,
  },

  /* ─────────────────────────────────────────────────────────────────────────
     F-03: Modelación de avenidas torrenciales en Colombia
  ───────────────────────────────────────────────────────────────────────── */
  'modelacion-avenidas-torrenciales-colombia': {
    title: 'Modelación de avenidas torrenciales en Colombia: metodología, herramientas y zonificación de amenaza',
    date: 'Abril 2026',
    readTime: '15 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Guía técnica sobre modelación de avenidas torrenciales en Colombia: diferencias con inundación convencional, metodología SGC, software RAMMS y HEC-RAS, y zonificación de amenaza para el Eje Cafetero.',
    keywords: 'avenidas torrenciales Colombia, modelación flujos detritos Colombia, zonificación amenaza torrencial Colombia, flujos de detritos Eje Cafetero, modelación torrencial HEC-RAS, avenida torrencial Manizales Colombia',
    body: <>
      <p>Colombia tiene una de las densidades más altas de eventos de avenidas torrenciales en América del Sur. El Eje Cafetero, la región de Nariño, los flancos de la Sierra Nevada y las cuencas andinas de Antioquia registran decenas de eventos al año, algunos de ellos con consecuencias catastróficas. La tragedia de Armero en 1985 (25.000 muertos), los flujos del 2017 en Mocoa (329 muertos) y los eventos recurrentes en Manizales, Pereira y Armenia demuestran que <strong>modelar y zonificar la amenaza por avenidas torrenciales no es una tarea académica: es una necesidad urgente para salvar vidas y orientar el ordenamiento territorial.</strong></p>

      <h2>¿Qué es una avenida torrencial y en qué se diferencia de una inundación convencional?</h2>
      <p>Una avenida torrencial es un evento de flujo rápido en quebradas y ríos de montaña caracterizado por una <strong>mezcla de agua, sedimentos, rocas, troncos y material orgánico</strong> que se moviliza como un flujo altamente denso (densidades de 1.400–2.200 kg/m³ frente a los 1.000 kg/m³ del agua limpia). Su velocidad puede superar los 10 m/s en tramos con pendiente alta y su frente de onda llega sin previo aviso en cuestión de minutos.</p>
      <p>Las diferencias clave con una inundación convencional son:</p>
      <ul>
        <li><strong>Densidad y viscosidad:</strong> Los flujos de detritos se comportan como un fluido no newtoniano (plástico de Bingham), con alta resistencia interna y capacidad de transportar clastos de varios metros cúbicos. Una inundación convencional es agua limpia o con baja concentración de sedimentos.</li>
        <li><strong>Velocidad:</strong> Las avenidas torrenciales pueden viajar a 5–20 m/s en el canal principal. Las inundaciones convencionales raramente superan 2–3 m/s en terrenos planos.</li>
        <li><strong>Tiempo de concentración:</strong> Cuencas torrenciales de 1–20 km² pueden responder en 15–60 minutos a una lluvia de alta intensidad. Cuencas grandes tienen tiempos de respuesta de horas o días.</li>
        <li><strong>Depósito:</strong> Al reducir la pendiente, las avenidas torrenciales depositan abanicos de material grueso que pueden enterrar edificaciones y cambiar radicalmente la morfología del cauce.</li>
      </ul>

      <h2>Cuencas torrenciales en Colombia: factores de susceptibilidad</h2>
      <p>No todas las quebradas son torrenciales. Los factores que hacen a una cuenca susceptible a generar avenidas torrenciales son:</p>
      <ul>
        <li><strong>Pendiente media de la cuenca superior a 25°:</strong> Las cuencas andinas del Eje Cafetero con pendientes de 40–70% en sus cabeceras generan flujos con alta energía gravitacional.</li>
        <li><strong>Disponibilidad de material sedimentario:</strong> Suelos residuales derivados de cenizas volcánicas (predominantes en Caldas, Risaralda, Quindío y Nariño) tienen alta erodibilidad cuando se saturan.</li>
        <li><strong>Cubierta vegetal degradada:</strong> La deforestación y los pastizales en laderas empinadas eliminan la interceptación de lluvia y la cohesión radicular, facilitando la movilización de suelo.</li>
        <li><strong>Historial de eventos:</strong> Quebradas con registros de avenidas anteriores (visible en depósitos de abanico torrencial en el cono de deyección) tienen mayor probabilidad de recurrencia.</li>
        <li><strong>Lluvias de alta intensidad:</strong> Los registros del IDEAM muestran que en el Eje Cafetero pueden ocurrir lluvias de hasta 80–100 mm en una hora, suficiente para desencadenar flujos en cuencas susceptibles.</li>
      </ul>

      <h2>Metodología del SGC para zonificación de amenaza por avenidas torrenciales</h2>
      <p>El Servicio Geológico Colombiano publicó en 2016 la <em>Guía Metodológica para la Zonificación de la Amenaza por Avenidas Torrenciales</em>, el instrumento técnico oficial para estudios de amenaza en Colombia. Esta guía establece una metodología en cuatro niveles de detalle:</p>

      <h3>Nivel 1 — Inventario histórico de eventos</h3>
      <p>Recopilación sistemática de eventos de avenida torrencial registrados en el área de estudio: fotografías aéreas, noticias históricas, informes del IGAC, CORPOCALDAS, CARDER o UNGRD, testimonios de habitantes locales. El inventario permite determinar el área máxima afectada por eventos pasados y calibrar los modelos.</p>

      <h3>Nivel 2 — Análisis morfométrico de la cuenca</h3>
      <p>Determinación de indicadores morfométricos que permiten clasificar la cuenca según su potencial torrencial: índice de torrencialidad (relación área/longitud del cauce principal), índice de forma (circular vs. alargada), relación de bifurcación de la red de drenaje. Las cuencas con alto potencial torrencial tienen índice de torrencialidad mayor a 2.0 y tiempo de concentración menor a 1 hora.</p>

      <h3>Nivel 3 — Modelación del flujo de detritos</h3>
      <p>Simulación numérica del comportamiento del flujo de detritos mediante software especializado. Los modelos más usados en Colombia son:</p>
      <ul>
        <li><strong>RAMMS (Rapid Mass Movements Simulation):</strong> Desarrollado por el Instituto Federal de Investigación de Bosques, Nieve y Paisaje de Suiza (WSL). Es el modelo de referencia para avenidas torrenciales en Colombia y el adoptado por el SGC. Usa la reología de Voellmy (combinación de fricción de Coulomb y resistencia turbulenta). Requiere datos de volumen de masa potencialmente movilizable y parámetros reológicos calibrados para suelos locales.</li>
        <li><strong>FLO-2D:</strong> Modelo bifásico (agua + sedimentos) ampliamente usado en estudios INVIAS y planes de contingencia. Permite simular inundaciones convencionales y flujos hiperconcentrados con el mismo modelo.</li>
        <li><strong>HEC-RAS con transporte de sedimentos:</strong> La versión 6.x de HEC-RAS incluye módulos de transporte de sedimentos no cohesivos que permiten modelar eventos de alta carga sedimentaria, aunque con menos precisión que RAMMS para flujos de detritos propiamente dichos.</li>
      </ul>

      <h3>Nivel 4 — Mapas de amenaza y zonificación</h3>
      <p>Los mapas de amenaza resultantes de la modelación clasifican el territorio en tres zonas según la combinación de magnitud del evento (profundidad × velocidad) y probabilidad de ocurrencia:</p>
      <ul>
        <li><strong>Amenaza alta (rojo):</strong> Zona de impacto directo del flujo de detritos. Profundidades superiores a 0.5 m con velocidades &gt; 3 m/s. Inapta para construcción. Requiere evaluación de obras de mitigación de alto costo.</li>
        <li><strong>Amenaza media (naranja):</strong> Zona de abanico de deposición con impacto moderado. Profundidades de 0.2–0.5 m. Puede permitirse construcción con restricciones especiales de diseño estructural y sistemas de alerta temprana.</li>
        <li><strong>Amenaza baja (amarillo):</strong> Zona marginal con impacto ocasional solo en eventos de alta recurrencia. Requiere medidas preventivas básicas.</li>
      </ul>

      <h2>Obras de mitigación de avenidas torrenciales</h2>
      <p>El análisis de amenaza por avenidas torrenciales no solo sirve para determinar zonas de exclusión: también orienta el diseño de obras de mitigación que permiten reducir el riesgo en zonas ya ocupadas. Las obras más frecuentes en el Eje Cafetero son:</p>
      <ul>
        <li><strong>Diques de retención (check dams):</strong> Estructuras transversales en el cauce que retienen el material sólido del flujo. Se diseñan en serie, de mayor a menor altura, para acumular los sedimentos y reducir la capacidad erosiva del flujo.</li>
        <li><strong>Deflectores y muros de encauzamiento:</strong> Estructuras longitudinales que dirigen el flujo por el cauce y evitan que se desborde hacia zonas urbanizadas. Combinan gaviones, concreto reforzado y enrocado.</li>
        <li><strong>Obras de control en cabecera:</strong> Estabilización de laderas con sistemas de drenaje, revegetalización y muros de contención que reducen el volumen de material potencialmente movilizable.</li>
        <li><strong>Sistemas de alerta temprana (SAT):</strong> Redes de pluviómetros con umbral de activación que alertan a las comunidades cuando la lluvia supera el nivel crítico que ha desencadenado avenidas históricamente. El IDEAM y las CAR han implementado SAT en varias cuencas del Eje Cafetero.</li>
      </ul>

      <h2>Avenidas torrenciales y el Eje Cafetero: la experiencia de BIC</h2>
      <p>BIC ha realizado estudios de amenaza por avenidas torrenciales en cuencas de Caldas, Risaralda y Quindío, incluyendo quebradas en los municipios de Manizales, Villamaría, Chinchiná, Viterbo y La Dorada. La zona presenta las condiciones de mayor susceptibilidad del país: suelos derivados de cenizas volcánicas del Volcán Nevado del Ruiz, pendientes medias de cuenca de 40–65%, intensidades de lluvia que superan los 60 mm/h en eventos extremos y un historial documentado de avenidas desde 1902.</p>
      <p>Nuestros estudios combinan: inventario histórico con fotografías aéreas del IGAC desde 1950, análisis morfométrico con SIG (QGIS + ArcGIS), modelación con RAMMS calibrado con eventos históricos documentados, y cartografía de amenaza para incorporación en POT, estudios de factibilidad de planes parciales y diseño de obras de mitigación.</p>

      <h2>Marco normativo en Colombia para avenidas torrenciales</h2>
      <ul>
        <li><strong>Ley 1523 de 2012:</strong> Establece la política nacional de gestión del riesgo de desastres. Obliga a los municipios a incorporar el riesgo por avenidas torrenciales en sus planes municipales de gestión del riesgo (PMGRD).</li>
        <li><strong>Decreto 1807 de 2014:</strong> Exige estudios detallados de amenaza por avenidas torrenciales para zonas de expansión urbana y planes parciales en municipios con este tipo de amenaza identificada en el POT.</li>
        <li><strong>Guía SGC 2016:</strong> Metodología oficial para zonificación de amenaza por avenidas torrenciales. Es el referente técnico que deben seguir los estudios presentados ante las corporaciones autónomas y curadurías.</li>
        <li><strong>Guía MVCT 2022:</strong> El Ministerio de Vivienda publicó la guía de estudios básicos de amenaza por avenidas torrenciales para su incorporación en POT, complementaria a la guía del SGC.</li>
      </ul>

      <h2>¿Cuánto cuesta un estudio de amenaza por avenidas torrenciales en Colombia?</h2>
      <ul>
        <li><strong>Estudio básico (cuenca &lt;10 km², metodología SGC niveles 1–3):</strong> $14–$25 millones COP</li>
        <li><strong>Estudio de detalle con RAMMS (cuenca 10–50 km²):</strong> $25–$50 millones COP</li>
        <li><strong>Estudio integral con diseño de obras de mitigación:</strong> $40–$90 millones COP</li>
        <li><strong>Incorporación de resultados en instrumento de POT o plan parcial:</strong> $8–$15 millones COP adicionales</li>
      </ul>

      <h2>Preguntas frecuentes sobre avenidas torrenciales en Colombia</h2>
      <h3>¿Qué diferencia una avenida torrencial de un flujo de lodo?</h3>
      <p>Los flujos de lodo (mudflows) tienen una proporción alta de arcillas y limos finos con agua, mientras que las avenidas torrenciales incluyen material más grueso (gravas, bloques) movilizado por el caudal líquido. En Colombia, los eventos de cuencas con cenizas volcánicas (Eje Cafetero, Nariño) suelen ser flujos hiperconcentrados con características intermedias entre ambos tipos.</p>
      <h3>¿Una avenida torrencial puede ocurrir con lluvia moderada?</h3>
      <p>Sí. Lo determinante no es solo la intensidad de la lluvia, sino la condición previa de saturación del suelo. Un suelo ya saturado por lluvias de días anteriores puede desencadenar un flujo de detritos con una lluvia relativamente moderada (20–30 mm en una hora). Por eso los SAT en Colombia evalúan tanto la lluvia instantánea como la lluvia acumulada en las últimas 24–72 horas.</p>
      <h3>¿Puede prevenirse completamente una avenida torrencial?</h3>
      <p>No completamente. La amenaza torrencial es un proceso natural que ocurre en montañas con determinadas condiciones geológicas y climáticas. Lo que sí puede hacerse es: (1) zonificar el territorio para evitar construir en zonas de impacto directo; (2) diseñar obras de mitigación que reduzcan la magnitud del impacto en zonas ya ocupadas; (3) implementar SAT para reducir el tiempo de exposición de las personas al evento.</p>
      <h3>¿El seguro de inmuebles cubre daños por avenida torrencial en Colombia?</h3>
      <p>Depende de la póliza. Muchas aseguradoras excluyen explícitamente "movimientos en masa" y "flujos de lodo". Una póliza de daños por "inundación" puede no cubrir avenidas torrenciales. Se recomienda revisar el texto completo de la póliza con el asegurador. BIC puede elaborar informes técnicos para procesos de reclamación ante aseguradoras que requieran conceptos de ingeniería sobre la naturaleza del evento.</p>

      <QuoteFormInline serviceId="hec-ras-2d" />
    </>,
  },

}

export default articlesF
