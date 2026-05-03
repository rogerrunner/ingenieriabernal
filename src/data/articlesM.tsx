import QuoteFormInline from '../components/QuoteFormInline'

// Batch M articles — Mayo 2026 (acueductos rurales y gestión del riesgo hídrico)
const articlesM: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'caudales-diseno-acueducto-ras-2017': {
    title: 'QMD, QMMD y QMH: cómo calcular los caudales de diseño según RAS 2017',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Acueductos / Normativa',
    metaDesc: 'Guía práctica para calcular QMD, QMMD y QMH en acueductos rurales según el RAS 2017. Fórmulas, factores de mayoración y ejemplos de cálculo para ingenieros y técnicos.',
    keywords: 'caudales de diseño acueducto RAS 2017, QMD QMMD QMH acueducto rural, factores mayoración K1 K2 Colombia',
    body: <>
      <p>Antes de dimensionar una sola tubería, un tanque o una planta de tratamiento, el diseñador de un acueducto necesita responder una pregunta fundamental: ¿cuánta agua debe suministrar el sistema? La respuesta no es una cifra única sino tres caudales interdependientes — QMD, QMMD y QMH — que el <strong>RAS 2017 (Resolución 0330)</strong> define con precisión. Calcularlos mal es la causa más frecuente de acueductos sobredimensionados (que desperdician inversión) o subdimensionados (que fallan en las horas pico). Este artículo explica el procedimiento completo con un ejemplo numérico aplicable a cualquier sistema veredal.</p>

      <h2>¿Qué son los caudales de diseño y por qué importan?</h2>
      <p>Un acueducto no consume agua de forma constante a lo largo del día ni a lo largo del año. La demanda varía: hay días en que se consume más que el promedio (verano, temporada de cosecha, fiestas) y horas del día en que el consumo se dispara (mañana temprano, mediodía). Los caudales de diseño son las estimaciones de esa demanda máxima previsible, y son los parámetros que determinan el tamaño de cada componente del sistema.</p>
      <ul>
        <li>El <strong>QMD</strong> dimensiona la fuente de abastecimiento y la concesión de aguas.</li>
        <li>El <strong>QMMD</strong> dimensiona la conducción principal (desde la captación hasta el tanque) y la PTAP.</li>
        <li>El <strong>QMH</strong> dimensiona la red de distribución y el tanque de almacenamiento.</li>
      </ul>

      <h2>Definiciones según RAS 2017</h2>
      <h3>QMD — Caudal Medio Diario</h3>
      <p>Es el caudal promedio consumido durante 24 horas en un día típico. Se calcula a partir de la dotación neta (litros por habitante por día), la población de diseño y las pérdidas del sistema:</p>
      <p><strong>QMD = (Dotación neta × Población) / (86.400 × (1 − p/100))</strong></p>
      <p>Donde <em>p</em> es el porcentaje de pérdidas admisible (máximo 25% en sistemas nuevos según el RAS 2017) y 86.400 es el número de segundos en un día.</p>

      <h3>QMMD — Caudal Máximo Diario</h3>
      <p>Es el caudal correspondiente al día de mayor consumo del año. Se obtiene mayorando el QMD con el factor <strong>K1</strong> (factor día máximo):</p>
      <p><strong>QMMD = K1 × QMD</strong></p>
      <p>El RAS 2017 establece para zonas rurales y municipios de nivel de complejidad bajo: <strong>K1 = 1.30</strong>. Para municipios con mayor complejidad (mayor a 12.500 suscriptores) el factor puede aumentar hasta 1.50 según análisis estadístico.</p>

      <h3>QMH — Caudal Máximo Horario</h3>
      <p>Es el caudal de la hora de mayor consumo del día más exigente. Se obtiene como:</p>
      <p><strong>QMH = K2 × QMD</strong></p>
      <p>El factor <strong>K2</strong> (factor hora máxima) varía entre <strong>1.6 y 2.0</strong> según el nivel de complejidad del sistema. Para acueductos veredales de nivel bajo, el RAS 2017 adopta K2 = 1.6 como valor estándar; en sistemas con menor regulación de almacenamiento puede aplicarse hasta 2.0.</p>

      <h2>Ejemplo numérico: acueducto veredal de 200 usuarios</h2>
      <p>Consideremos un acueducto veredal típico en Caldas con las siguientes características:</p>
      <ul>
        <li>Población actual: 200 usuarios (viviendas unifamiliares)</li>
        <li>Dotación neta según RAS 2017 para clima frío: <strong>100 L/hab/día</strong></li>
        <li>Promedio de 4 habitantes por vivienda: 800 habitantes</li>
        <li>Pérdidas del sistema: 20%</li>
        <li>Factores de mayoración: K1 = 1.30, K2 = 1.60</li>
      </ul>
      <p><strong>Paso 1 — QMD:</strong></p>
      <p>QMD = (100 L/hab/día × 800 hab) / (86.400 s/día × (1 − 0.20)) = 80.000 / 69.120 = <strong>1.157 L/s</strong></p>
      <p>Si se considera solo dotación sin pérdidas para verificar la concesión mínima:</p>
      <p>QMD neto = (100 × 800) / 86.400 = <strong>0.926 L/s</strong></p>
      <p><strong>Paso 2 — QMMD:</strong></p>
      <p>QMMD = 1.30 × 1.157 = <strong>1.504 L/s</strong> → Este es el caudal de diseño de la conducción y la PTAP.</p>
      <p><strong>Paso 3 — QMH:</strong></p>
      <p>QMH = 1.60 × 1.157 = <strong>1.851 L/s</strong> → Este es el caudal de diseño de la red de distribución.</p>

      <h2>¿Aplica el caudal de incendio en acueductos veredales?</h2>
      <p>No. El RAS 2017 establece que el <strong>caudal de incendio solo es obligatorio para cabeceras municipales y zonas urbanas consolidadas</strong> con más de 1.000 usuarios conectados. En acueductos veredales menores de este umbral, no se exige añadir el caudal de incendio al caudal de diseño de la red. Esto es relevante porque algunos diseñadores lo incluyen incorrectamente, generando sobredimensionamiento significativo en el sistema.</p>

      <h2>Período de diseño y proyección de población</h2>
      <p>El RAS 2017 exige diseñar para un <strong>horizonte de 25 años</strong>. Esto significa que los caudales de diseño deben calcularse con la población proyectada al año 25, no la población actual. Los métodos de proyección aceptados son: aritmético, geométrico y exponencial. El RAS recomienda usar el método geométrico para zonas rurales con crecimiento estable, aplicando la tasa de crecimiento intercensal del DANE para el municipio correspondiente.</p>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />

      <p>La correcta determinación de los caudales de diseño es la base sobre la que se sustentan todos los demás componentes del sistema. Un error en esta etapa se multiplica en cada decisión de dimensionamiento posterior. En <strong>BIC</strong> entregamos memorias de cálculo completas que incluyen la proyección de población, los caudales QMD/QMMD/QMH y la justificación técnica de cada parámetro según el RAS 2017. <strong>¿Necesita un diseño hidráulico con memorias de cálculo completas? BIC entrega en 3 semanas.</strong> Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

  'materiales-tuberia-acueducto-rural-colombia': {
    title: 'PVC, HDPE o hierro dúctil: qué tubería usar en acueductos rurales en Colombia',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Acueductos / Materiales',
    metaDesc: 'Comparación de materiales para redes de acueducto rural en Colombia: PVC, HDPE y hierro dúctil. Cuándo usar cada uno, ventajas, costos y normas aplicables RAS 2017.',
    keywords: 'materiales tubería acueducto rural Colombia, PVC HDPE hierro dúctil acueducto, tuberías RAS 2017 Colombia',
    body: <>
      <p>La selección del material de tubería en un acueducto rural no es una decisión menor. El costo de la red de conducción y distribución representa entre el 40% y el 60% del presupuesto total de un sistema veredal, y la vida útil del material seleccionado determina cuándo habrá que rehabilitarlo. En Colombia, tres materiales dominan el mercado para acueductos rurales: <strong>PVC, HDPE y hierro dúctil</strong>. Este artículo explica cuándo usar cada uno, qué dice el RAS 2017 al respecto y cuál es la recomendación práctica de BIC para los terrenos del Eje Cafetero y la región andina.</p>

      <h2>PVC — Cloruro de Polivinilo</h2>
      <p>El PVC es con diferencia el material más utilizado en acueductos rurales de Colombia. Su dominio del mercado se debe a una combinación de precio, disponibilidad y facilidad de instalación que ningún otro material iguala en el rango de presiones típico de sistemas veredales.</p>
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Económico: es el material de menor costo inicial por metro lineal instalado.</li>
        <li>Amplia disponibilidad en ferretería y distribuidores en todo el país, incluyendo zonas rurales remotas.</li>
        <li>Instalación simple: uniones de espigo y campana con anillo de caucho no requieren equipos especializados.</li>
        <li>Baja rugosidad interna (n de Manning = 0.009), lo que reduce las pérdidas de carga y permite usar diámetros menores.</li>
        <li>Resistente a la corrosión química en condiciones normales de agua potable.</li>
      </ul>
      <p><strong>Limitaciones:</strong></p>
      <ul>
        <li>Frágil al impacto: una piedra grande o maquinaria pesada en el proceso de relleno puede fracturarlo.</li>
        <li>No apto para terrenos inestables con movimientos diferenciales: las uniones rígidas no toleran deformaciones del suelo sin fisurarse.</li>
        <li>Requiere protección solar en tramos expuestos — el UV degrada el material en 3–5 años si no se entierra o recubre.</li>
      </ul>
      <p><strong>Norma aplicable:</strong> NTC 382 (tuberías y accesorios de PVC para agua potable). Presiones de trabajo disponibles: RDE 64 (baja presión), RDE 41 (media presión, más común), RDE 26 y RDE 21 (alta presión, hasta 16 bar).</p>

      <h2>HDPE — Polietileno de Alta Densidad</h2>
      <p>El HDPE es el material de elección para condiciones donde el PVC no rinde: terrenos con inestabilidad geotécnica, cruces de quebradas y zonas de alta sismicidad. Su flexibilidad es su principal ventaja técnica.</p>
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Alta flexibilidad: puede deformarse sin fracturarse en terrenos con movimientos diferenciales, avalanchas menores o subsidencias.</li>
        <li>Uniones por termofusión (soldadura a tope o electrofusión) que producen juntas tan resistentes como el tubo mismo — elimina los puntos débiles de las uniones mecánicas.</li>
        <li>Vida útil de 50 años o más en condiciones normales de enterramiento.</li>
        <li>Resistencia química superior al PVC frente a aguas con pH extremo o agresividad química.</li>
        <li>Ideal para cruces aéreos de quebradas en tramos cortos.</li>
      </ul>
      <p><strong>Limitaciones:</strong></p>
      <ul>
        <li>Mayor costo inicial: entre 30% y 60% más caro que PVC del mismo diámetro.</li>
        <li>Requiere equipo de termofusión (alquiler o compra) y operarios capacitados — en zonas muy remotas esto puede ser un problema logístico.</li>
      </ul>
      <p><strong>Norma aplicable:</strong> NTC 3722-1 (tuberías de HDPE para agua potable). Series SDR (Standard Dimension Ratio) desde SDR 11 hasta SDR 26 según la presión de trabajo requerida.</p>

      <h2>Hierro Dúctil</h2>
      <p>El hierro dúctil es el estándar en infraestructura urbana de alta presión, pero en acueductos rurales su uso se limita a situaciones específicas donde los materiales plásticos no son viables.</p>
      <p><strong>Ventajas:</strong></p>
      <ul>
        <li>Resistencia mecánica máxima: tolera cargas de tráfico pesado, vibraciones y presiones de operación superiores a 40 bar.</li>
        <li>Vida útil de 80–100 años con protección catódica adecuada.</li>
        <li>Disponible en diámetros grandes (desde 80 mm hasta 2.000 mm).</li>
      </ul>
      <p><strong>Limitaciones:</strong></p>
      <ul>
        <li>Costo muy elevado: puede ser 5–10 veces más caro que PVC por metro instalado en diámetros equivalentes.</li>
        <li>Peso y logística: requiere maquinaria pesada para transporte e instalación en zonas remotas.</li>
        <li>Requiere revestimiento interior (mortero de cemento) y exterior (polietileno o zinc) para protección catódica en suelos agresivos.</li>
      </ul>
      <p><strong>Norma aplicable:</strong> ISO 2531 (tubería de hierro dúctil para conducción de agua).</p>

      <h2>Tabla comparativa de materiales</h2>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.95rem'}}>
          <thead>
            <tr style={{background:'#EBF5F9'}}>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Material</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Costo relativo</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Vida útil</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Presión máx.</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Terrenos recomendados</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>PVC</td>
              <td style={{padding:'8px 12px'}}>Bajo</td>
              <td style={{padding:'8px 12px'}}>25–30 años</td>
              <td style={{padding:'8px 12px'}}>16 bar (RDE 21)</td>
              <td style={{padding:'8px 12px'}}>Ladera estable, suelo blando o roca fragmentada</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>HDPE</td>
              <td style={{padding:'8px 12px'}}>Medio</td>
              <td style={{padding:'8px 12px'}}>50+ años</td>
              <td style={{padding:'8px 12px'}}>20 bar (SDR 11)</td>
              <td style={{padding:'8px 12px'}}>Terrenos inestables, cruces de quebradas, zonas sísmicas</td>
            </tr>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Hierro dúctil</td>
              <td style={{padding:'8px 12px'}}>Alto</td>
              <td style={{padding:'8px 12px'}}>80–100 años</td>
              <td style={{padding:'8px 12px'}}>40+ bar</td>
              <td style={{padding:'8px 12px'}}>Cruces de vías arteriales, zonas de altísima presión</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Recomendación práctica BIC para la región andina</h2>
      <p>En los proyectos de acueductos rurales que BIC diseña en el Eje Cafetero, Caldas, Risaralda y el Cauca, la especificación de materiales sigue este criterio general:</p>
      <ul>
        <li><strong>PVC RDE 21 o RDE 26</strong> para tramos en ladera estable con cobertura de suelo uniforme y sin riesgos geotécnicos documentados.</li>
        <li><strong>HDPE SDR 11 o SDR 17</strong> para cruces de quebradas, zonas con inventario de movimientos en masa del SGC, tramos con suelos expansivos o con historial de daños por deslizamiento.</li>
        <li><strong>Hierro dúctil</strong> exclusivamente en cruces de vías arteriales (primarias o secundarias) donde la carga de tráfico supera los límites de los materiales plásticos.</li>
      </ul>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />

      <p>La especificación incorrecta de materiales es una de las causas más frecuentes de reparaciones prematuras y pérdidas de agua en acueductos rurales colombianos. <strong>BIC especifica los materiales óptimos para cada tramo según las condiciones reales del terreno</strong>, con base en el RAS 2017 y la experiencia de campo en la región. Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

  'conexiones-domiciliarias-acueducto-veredal': {
    title: 'Conexiones domiciliarias en acueductos veredales: todo lo que debe saber',
    date: 'Mayo 2026',
    readTime: '6 min',
    category: 'Acueductos / Técnico',
    metaDesc: 'Guía técnica sobre conexiones domiciliarias en acueductos rurales: componentes, diámetros, materiales, medidores y normativa RAS 2017. Para JAC, plomeros y técnicos.',
    keywords: 'conexiones domiciliarias acueducto veredal, acometida acueducto rural Colombia, medidores agua RAS 2017',
    body: <>
      <p>La conexión domiciliaria es el último eslabón del sistema de acueducto: el punto donde el agua pasa de la red pública a la instalación interna de cada vivienda. Es también uno de los componentes que más pérdidas genera cuando está mal instalado o no cuenta con medidor. En Colombia, las pérdidas de agua no contabilizada (NRW, por sus siglas en inglés) en acueductos rurales superan el 35% en promedio — y una parte significativa ocurre precisamente en las conexiones domiciliarias. Esta guía explica los requisitos técnicos y normativos que todo responsable de acueducto veredal debe conocer.</p>

      <h2>Componentes de una conexión domiciliaria completa</h2>
      <p>Una conexión domiciliaria bien diseñada según el RAS 2017 incluye los siguientes elementos en orden desde la red principal hasta la vivienda:</p>
      <ul>
        <li><strong>Collarin de derivación:</strong> pieza que perfora la tubería principal de distribución y permite la derivación sin interrumpir el servicio. Para tuberías PVC se usan collarines de polipropileno; para HDPE, accesorios de termofusión.</li>
        <li><strong>Tubería de acometida:</strong> tramo desde la red principal hasta el medidor. Diámetro mínimo: 1/2" (15 mm) para viviendas unifamiliares rurales. Material recomendado: PVC o HDPE dependiendo del terreno.</li>
        <li><strong>Llave de paso exterior (registro de corte):</strong> ubicada en la caja del medidor, permite cortar el servicio de forma independiente para cada usuario sin afectar el resto del sistema.</li>
        <li><strong>Medidor de consumo:</strong> obligatorio para facturación y para el control de pérdidas. Debe estar en caja protegida y accesible para lectura.</li>
        <li><strong>Reductor de presión (VRP):</strong> instalado después del medidor cuando la presión estática en el punto de entrega supera los límites normativos.</li>
        <li><strong>Registro de corte interior:</strong> llave dentro de la vivienda que permite aislar la instalación interna sin cortar el servicio en el medidor.</li>
      </ul>

      <h2>Presiones de servicio según RAS 2017</h2>
      <p>El RAS 2017 establece con precisión los rangos de presión admisibles en el punto de entrega al usuario:</p>
      <ul>
        <li><strong>Presión mínima:</strong> 10 m.c.a. (metros columna de agua ≈ 1 bar) en el nodo de entrega bajo condiciones de caudal máximo horario. Por debajo de este valor el usuario experimenta presión insuficiente, especialmente en segundo piso.</li>
        <li><strong>Presión máxima estática:</strong> 70 m.c.a. (≈ 7 bar). Por encima de este límite los accesorios y aparatos sanitarios de la vivienda se dañan prematuramente.</li>
        <li><strong>Presión recomendada para operación normal:</strong> entre 20 y 50 m.c.a.</li>
      </ul>

      <h2>Cuándo instalar Válvula Reductora de Presión (VRP)</h2>
      <p>En acueductos veredales de ladera — que son la mayoría en el Eje Cafetero y la región andina — las diferencias de cota entre el tanque de almacenamiento y las viviendas más bajas pueden generar presiones estáticas muy superiores a 70 m.c.a. En estos casos, la instalación de una <strong>VRP es obligatoria</strong> cuando la presión estática supera los 60 m.c.a., como medida preventiva antes de que se alcance el límite máximo.</p>
      <p>La VRP se dimensiona con la presión aguas arriba (presión de entrada) y la presión de consigna (presión reducida de salida), y debe instalarse en cámara de válvulas accesible para mantenimiento. No hacerlo genera roturas frecuentes de accesorios, fugas en uniones y deterioro acelerado de los medidores.</p>

      <h2>Medidores: tipos y normativa</h2>
      <p>La instalación de medidores en acueductos comunitarios es obligatoria bajo la <strong>Ley 142 de 1994</strong> (Ley de Servicios Públicos) y el <strong>RAS 2017</strong> para todos los sistemas que facturan el servicio. Los tipos más comunes en el sector rural son:</p>
      <ul>
        <li><strong>Medidor velocimétrico de chorro único o múltiple:</strong> es el más económico y el más utilizado en zonas rurales. Mide el caudal por la velocidad del agua sobre una turbina. Requiere agua limpia con baja turbidez para no deteriorarse. Norma: ICONTEC 1063.</li>
        <li><strong>Medidor electromagnético:</strong> no tiene partes móviles, tolera agua con sedimentos y tiene mayor vida útil, pero su costo es entre 5 y 10 veces mayor. Se recomienda en acueductos con problemas crónicos de turbidez.</li>
      </ul>
      <p>La <strong>caja del medidor</strong> debe estar enterrada a mínimo 30 cm de profundidad, con tapa de concreto o polipropileno reforzado, dimensiones suficientes para acceder a la llave de corte y reemplazar el medidor sin obras adicionales.</p>

      <h2>Errores frecuentes que generan pérdidas de agua</h2>
      <p>En los diagnósticos de acueductos veredales que BIC realiza, estos son los problemas más recurrentes en conexiones domiciliarias:</p>
      <ul>
        <li><strong>Ausencia de medidores:</strong> sin medición individual no hay forma de detectar fugas internas ni de facturar correctamente. El sistema opera "a ciegas" y las pérdidas se vuelven incontrolables.</li>
        <li><strong>Uniones con cinta o adaptadores inadecuados:</strong> uniones de PVC mal apretadas o con cinta de teflón aplicada incorrectamente son fuentes permanentes de microescapes que se acumulan en miles de litros diarios.</li>
        <li><strong>Presiones excesivas sin VRP:</strong> en sistemas de ladera sin regulación de presión, la presión estática deteriora rápidamente los medidores y genera roturas periódicas que los usuarios reportan como "daños en la tubería interna".</li>
        <li><strong>Conexiones artesanales informales:</strong> derivaciones sin collarin aprobado que perforan directamente la tubería principal con brocas, generando fugas crónicas en el punto de perforación.</li>
      </ul>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />

      <p>Las conexiones domiciliarias bien diseñadas y correctamente instaladas pueden reducir las pérdidas de agua no contabilizada hasta en un 15% desde el primer año de operación. <strong>BIC diseña el esquema completo de conexiones domiciliarias para evitar pérdidas de agua desde el inicio</strong>, con especificaciones de materiales, presiones y medidores según el RAS 2017. Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

  'irca-calidad-agua-potable-colombia': {
    title: '¿Qué es el IRCA y cómo afecta a su acueducto? Guía práctica 2026',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Calidad del agua',
    metaDesc: 'Guía completa sobre el IRCA (Índice de Riesgo de la Calidad del Agua) en Colombia: qué mide, cómo se calcula, niveles de riesgo y qué debe hacer su acueducto si está en riesgo alto.',
    keywords: 'IRCA calidad agua Colombia, Índice Riesgo Calidad Agua Resolución 2115, IRCA alto acueducto rural Colombia',
    body: <>
      <p>En Colombia, miles de acueductos rurales suministran agua que técnicamente no cumple con los estándares de potabilidad establecidos por el Ministerio de Salud — y los responsables de esos sistemas muchas veces no lo saben porque nadie les ha explicado cómo se mide esa calidad ni qué hacer cuando el resultado es malo. El <strong>IRCA (Índice de Riesgo de la Calidad del Agua para Consumo Humano)</strong> es el indicador que el Estado colombiano usa para medir ese riesgo y exigir correcciones. Esta guía explica qué es, cómo se calcula y qué acciones concretas debe tomar su acueducto según el nivel que obtenga.</p>

      <h2>¿Qué es el IRCA y cuál es su base legal?</h2>
      <p>El IRCA es un indicador numérico que expresa el riesgo de que el agua suministrada cause enfermedades relacionadas con su calidad microbiológica o fisicoquímica. Fue definido por la <strong>Resolución 2115 de 2007</strong> del Ministerio de la Protección Social, que es la norma que establece las características y los criterios de calidad del agua potable en Colombia.</p>
      <p>El IRCA es calculado por los laboratorios certificados y reportado a las secretarías departamentales y municipales de salud, que a su vez lo publican en el <strong>SIVICAP</strong> (Sistema de Información de la Vigilancia de la Calidad del Agua Potable) del Instituto Nacional de Salud (INS). Un IRCA alto puede llevar a sanciones, órdenes sanitarias y en casos extremos a la suspensión del permiso de operación del sistema.</p>

      <h2>Cómo se calcula el IRCA</h2>
      <p>El IRCA se calcula mediante una <strong>suma ponderada de 19 características fisicoquímicas y microbiológicas</strong> del agua. Cuando una característica supera el valor máximo permisible (VMP) establecido en la Resolución 2115, se suma al índice el puntaje de riesgo asignado a esa característica.</p>
      <p>La fórmula general es:</p>
      <p><strong>IRCA = (Σ puntajes de riesgo obtenidos / Σ puntajes de riesgo posibles) × 100%</strong></p>
      <p>El puntaje total posible es 100 puntos, distribuidos entre los 19 parámetros según su peso relativo en la transmisión de enfermedades. Los parámetros microbiológicos (E. coli y coliformes totales) concentran los mayores puntajes individuales.</p>

      <h2>Niveles de riesgo IRCA y su significado</h2>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.95rem'}}>
          <thead>
            <tr style={{background:'#EBF5F9'}}>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Nivel</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Rango IRCA</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Clasificación</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>1</td>
              <td style={{padding:'8px 12px'}}>0 – 5%</td>
              <td style={{padding:'8px 12px'}}>Sin riesgo — agua apta para consumo humano</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>2</td>
              <td style={{padding:'8px 12px'}}>5.1 – 14%</td>
              <td style={{padding:'8px 12px'}}>Riesgo bajo</td>
            </tr>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>3</td>
              <td style={{padding:'8px 12px'}}>14.1 – 35%</td>
              <td style={{padding:'8px 12px'}}>Riesgo medio</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>4</td>
              <td style={{padding:'8px 12px'}}>35.1 – 80%</td>
              <td style={{padding:'8px 12px'}}>Riesgo alto</td>
            </tr>
            <tr>
              <td style={{padding:'8px 12px'}}>5</td>
              <td style={{padding:'8px 12px'}}>80.1 – 100%</td>
              <td style={{padding:'8px 12px'}}>Inviable sanitariamente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Qué hacer según el nivel de IRCA</h2>
      <h3>Sin riesgo (0–5%)</h3>
      <p>El sistema opera correctamente. Mantener la frecuencia de muestreo, verificar que los dosificadores de cloro funcionen dentro del rango (cloro residual libre entre 0.3 y 2.0 mg/L) y registrar los resultados en el libro de operación del acueducto.</p>

      <h3>Riesgo bajo y medio (5.1–35%)</h3>
      <p>Acción prioritaria: revisar el proceso de desinfección. La causa más frecuente de IRCA bajo o medio es cloro residual fuera del rango o dosificación irregular. Calibrar el dosificador, verificar el hipoclorito (si es líquido, verificar la concentración, ya que se degrada con el tiempo) y tomar muestras en los puntos más alejados de la red para verificar que el cloro llega con concentración suficiente.</p>

      <h3>Riesgo alto (35.1–80%)</h3>
      <p>Acción inmediata requerida. La secretaría municipal de salud debe ser notificada. El sistema puede seguir operando con restricciones (hervir el agua antes de consumir) mientras se identifican y corrigen las causas. Las causas más frecuentes de IRCA alto son: fuente contaminada, PTAP no operativa o mal dimensionada, o contaminación en la red de distribución por conexiones cruzadas con alcantarillado.</p>

      <h3>Inviable sanitariamente (80.1–100%)</h3>
      <p>Suspender el suministro para consumo humano. Buscar fuente alternativa de agua mientras se corrige el problema estructural. Este nivel implica que el agua representa un riesgo grave para la salud y su distribución puede generar responsabilidad legal para los administradores del sistema.</p>

      <h2>Parámetros que más inciden en el IRCA</h2>
      <p>Los parámetros con mayor peso en el cálculo del IRCA, y por tanto los más críticos de controlar, son:</p>
      <ul>
        <li><strong>E. coli:</strong> indicador de contaminación fecal. Su presencia indica que el agua puede transmitir enfermedades graves. Puntaje de riesgo: 25 de 100.</li>
        <li><strong>Coliformes totales:</strong> puntaje 15 de 100.</li>
        <li><strong>Turbiedad:</strong> una turbiedad elevada reduce la eficacia de la desinfección con cloro. Puntaje: 15 de 100.</li>
        <li><strong>Color aparente:</strong> puntaje 6 de 100.</li>
        <li><strong>Cloro residual libre:</strong> ausencia de cloro residual implica que el agua no está desinfectada o que el cloro se agotó en el trayecto. Puntaje: 15 de 100.</li>
      </ul>

      <h2>Quién mide el IRCA y con qué frecuencia</h2>
      <p>El muestreo para el cálculo del IRCA debe realizarlo un <strong>laboratorio certificado por el IDEAM</strong>. La frecuencia mínima de muestreo depende del tamaño del sistema:</p>
      <ul>
        <li>Sistemas con menos de 1.000 usuarios: mínimo una muestra por mes.</li>
        <li>Sistemas con 1.001 a 2.500 usuarios: mínimo dos muestras por mes.</li>
        <li>Sistemas con más de 2.500 usuarios: mínimo una muestra por semana.</li>
      </ul>

      <h2>La solución estructural: una PTAP bien dimensionada</h2>
      <p>Las medidas operativas (ajuste de cloro, limpieza de tanques) pueden mejorar el IRCA temporalmente, pero si el problema es estructural — fuente con alta turbiedad o carga microbiana, ausencia de tratamiento físico-químico, PTAP subdimensionada — la solución requiere inversión en infraestructura. Una PTAP correctamente diseñada, con floculación, sedimentación, filtración y desinfección, es la única forma de garantizar un IRCA consistentemente en nivel sin riesgo.</p>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />

      <p><strong>BIC diseña PTAP que garantizan IRCA en nivel sin riesgo</strong>, con memorias de cálculo, planos y especificaciones aceptadas por la Secretaría de Salud y el MVCT. Solicite su evaluación técnica: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

  'mapas-inundacion-colombia-pomca-pot': {
    title: 'Mapas de inundación en Colombia: POMCA, POT y gestión del riesgo',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Gestión del riesgo / HEC-RAS',
    metaDesc: 'Para qué sirven los mapas de inundación en Colombia, cómo se elaboran con HEC-RAS, y qué relación tienen con el POMCA, el POT y las licencias ambientales.',
    keywords: 'mapas inundación Colombia HEC-RAS, POMCA POT zonas inundación, estudio inundabilidad Colombia licencia ambiental',
    body: <>
      <p>Los mapas de inundación son documentos técnicos que delimitan en el territorio las zonas que pueden verse afectadas por el desbordamiento de ríos y quebradas durante eventos de precipitación extrema. En Colombia, estos mapas son obligatorios para múltiples procesos: la formulación de POMCA, la revisión de POT, las licencias ambientales y la gestión del riesgo municipal. Sin embargo, muchos funcionarios municipales, promotores inmobiliarios y hasta profesionales de la ingeniería no tienen claro qué diferencia a un mapa de amenaza de un mapa de riesgo, ni qué exige específicamente cada norma. Este artículo aclara esas dudas con el marco legal vigente.</p>

      <h2>Marco legal que hace obligatorios los mapas de inundación</h2>
      <p>La obligatoriedad de los mapas de inundación en Colombia está sustentada en tres instrumentos normativos principales:</p>
      <ul>
        <li><strong>Ley 1523 de 2012</strong> (Política Nacional de Gestión del Riesgo de Desastres): establece que los municipios deben incorporar el análisis de riesgo en la planificación del territorio y en todos los proyectos de desarrollo. Los Consejos Municipales de Gestión del Riesgo (CMGRD) son los responsables de mantener actualizada la información de amenazas en su jurisdicción.</li>
        <li><strong>Decreto 1807 de 2014</strong> (incorporado al Decreto 1077 de 2015): exige que los POT y sus revisiones incorporen estudios de amenaza, vulnerabilidad y riesgo para inundaciones y movimientos en masa. Para licencias de urbanismo en zonas con amenaza hídrica, el estudio de detalle con modelación hidráulica es requisito previo a la expedición de la licencia por parte de la Curaduría Urbana.</li>
        <li><strong>Decreto 1076 de 2015</strong> (Decreto Único Reglamentario del Sector Ambiente): los POMCA elaborados por las CAR deben incluir la zonificación de amenaza hídrica de las cuencas priorizadas, con metodología de modelación hidráulica para las corrientes principales.</li>
      </ul>

      <h2>Relación entre POMCA, POT y mapas de inundación</h2>
      <p>La cadena normativa funciona de lo general a lo particular:</p>
      <ul>
        <li>El <strong>POMCA</strong> (Plan de Ordenación y Manejo de Cuencas Hidrográficas), elaborado por la CAR de la jurisdicción, define las zonas de amenaza hídrica para toda la cuenca a escala regional (generalmente 1:25.000 a 1:50.000). Este mapa es el insumo que los municipios deben adoptar como determinante ambiental en sus POT.</li>
        <li>El <strong>POT</strong> (Plan de Ordenamiento Territorial) municipal incorpora la zonificación del POMCA y, para zonas de expansión urbana o planes parciales, exige estudios de detalle a escala mayor (1:2.000 a 1:5.000). Estos estudios de detalle son los que requieren modelación HEC-RAS.</li>
        <li>Los municipios <strong>no pueden clasificar como suelo urbanizable</strong> las zonas que el POMCA o los estudios de detalle clasifiquen como amenaza alta, salvo que se diseñen obras de mitigación que reduzcan la amenaza a nivel aceptable, con concepto previo de la CAR.</li>
      </ul>

      <h2>Diferencia entre amenaza, vulnerabilidad y riesgo</h2>
      <p>Estos tres conceptos se usan frecuentemente como sinónimos, pero tienen significados técnicos precisos que determinan el tipo de estudio requerido:</p>
      <ul>
        <li><strong>Amenaza:</strong> es la probabilidad de que un evento físico (inundación, deslizamiento) ocurra en un lugar y tiempo determinados, con una intensidad dada. La amenaza depende exclusivamente de las condiciones naturales: hidrología, topografía, geología. Los mapas de amenaza expresan esta probabilidad para diferentes períodos de retorno.</li>
        <li><strong>Vulnerabilidad:</strong> es el grado de pérdida o daño que experimentarían los elementos expuestos (viviendas, infraestructura, personas) si el evento ocurriera. Depende de las condiciones sociales, económicas y físicas de los elementos expuestos.</li>
        <li><strong>Riesgo:</strong> es la combinación de amenaza y vulnerabilidad. Riesgo = f(Amenaza × Vulnerabilidad). Solo cuando se tienen ambos componentes se puede calcular el riesgo en términos de vidas y bienes potencialmente afectados.</li>
      </ul>
      <p>Para licencias de urbanismo bajo el Decreto 1807, lo que se exige es principalmente el mapa de amenaza con modelación hidráulica. El análisis de vulnerabilidad y riesgo completo se requiere para los PMGR y para estudios de justificación de obras de mitigación.</p>

      <h2>Cómo se elaboran los mapas de inundación con HEC-RAS</h2>
      <p>El proceso estándar para elaborar un mapa de inundación con HEC-RAS comprende las siguientes etapas:</p>
      <ul>
        <li><strong>Topografía de detalle del cauce y la llanura aluvial:</strong> levantamiento topobatimétrico con estación total y GPS RTK para secciones transversales, o modelo digital del terreno LiDAR con resolución de 1 metro o mejor. Sin topografía de calidad, el modelo no es confiable.</li>
        <li><strong>Análisis hidrológico con HEC-HMS:</strong> determinación de los caudales máximos para los períodos de retorno requeridos (generalmente 10, 25, 50 y 100 años para licencias; solo 100 años para POT en muchos municipios).</li>
        <li><strong>Configuración de la geometría en HEC-RAS:</strong> se ingresan las secciones transversales del cauce, la geometría de puentes y estructuras hidráulicas, y los coeficientes de rugosidad de Manning según el tipo de vegetación y uso del suelo.</li>
        <li><strong>Corrida del modelo y análisis de resultados:</strong> HEC-RAS calcula el perfil longitudinal del nivel del agua y, en modelos 2D, genera la mancha de inundación completa sobre el terreno con profundidades y velocidades en cada celda.</li>
        <li><strong>Exportación a SIG:</strong> los resultados se exportan a ArcGIS o QGIS para generar los shapefiles y planos de amenaza hídrica categorizados como alta, media y baja según los umbrales establecidos por la metodología adoptada.</li>
      </ul>

      <h2>Períodos de retorno exigidos por cada trámite</h2>
      <ul>
        <li><strong>POT (zonificación de amenaza):</strong> mínimo período de retorno de 100 años. Algunos POT exigen también el período de 50 años para zonificación de amenaza media.</li>
        <li><strong>Licencias ambientales y de urbanismo (Decreto 1807):</strong> los períodos más comunes solicitados por Curadurías y CAR son 25 y 100 años. El TR25 define la amenaza media y el TR100 la amenaza alta.</li>
        <li><strong>Diseño de obras de protección (diques, encauzamientos):</strong> la obra se diseña para el caudal de diseño adoptado (usualmente TR50 o TR100) con un borde libre de seguridad adicional.</li>
      </ul>

      <h2>¿Quién puede firmar un estudio de inundabilidad en Colombia?</h2>
      <p>Los estudios de amenaza por inundación son documentos técnicos de ingeniería que deben ser elaborados y firmados por un <strong>ingeniero civil o hidráulico con matrícula profesional vigente del COPNIA</strong>. Sin esta firma y el número de tarjeta profesional, el documento no tiene validez legal ante ninguna entidad pública — CAR, Curaduría, Alcaldía o Gobernación. Es un error frecuente en municipios pequeños contratar estos estudios a personas sin el respaldo profesional requerido, lo que resulta en estudios que son rechazados por las entidades revisoras y retrasan los proyectos meses o años.</p>

      <QuoteFormInline serviceId="modelacion-hec-ras" />

      <p><strong>BIC elabora estudios de inundabilidad con HEC-RAS aceptados por CAR y municipios en todo Colombia</strong>: Corpocaldas, CARDER, CRQ, Corantioquia, CDMB y otras autoridades ambientales. Nuestros estudios incluyen modelos calibrados, mapas SIG y firma COPNIA vigente. Contáctenos: <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

}

export default articlesM
