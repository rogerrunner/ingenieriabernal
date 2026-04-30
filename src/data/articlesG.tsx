import QuoteFormInline from '../components/QuoteFormInline'

// Category G articles — Semana 1 calendario editorial (SILO pilar + ToFu + BoFu)
const articlesG: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'diseno-hidraulico-urbanizaciones': {
    title: 'Diseño hidráulico de urbanizaciones en Colombia: guía completa 2026',
    date: 'Mayo 2026',
    readTime: '13 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Proceso completo del diseño hidráulico para urbanizaciones en Colombia: redes de acueducto, alcantarillado pluvial y sanitario, normas RAS 2017 e ICONTEC, cálculo de demandas y entregables para la curaduría.',
    keywords: 'diseño hidráulico urbanización Colombia, redes hidrosanitarias urbanización Colombia, diseño alcantarillado pluvial urbanización, diseño acueducto urbanización Colombia, estudios hidráulicos licencia urbanismo',
    body: <>
      <p>El <strong>diseño hidráulico de una urbanización</strong> es el conjunto de estudios y planos que garantizan que el nuevo desarrollo cuente con agua potable suficiente, que las aguas residuales se evacúen de forma segura y que la lluvia no inunde las vías ni las viviendas. Sin este diseño, la curaduría urbana o la oficina de planeación municipal no otorga la licencia de urbanismo. En esta guía le explicamos el proceso completo, las normas que aplican y qué debe exigirle a su ingeniero hidráulico.</p>

      <h2>¿Qué incluye el diseño hidráulico de una urbanización?</h2>
      <p>Un diseño hidráulico completo para una urbanización en Colombia tiene tres componentes principales:</p>
      <ul>
        <li><strong>Red de acueducto (agua potable):</strong> Diseño de la red de distribución interna, dimensionamiento de tuberías, cálculo de presiones mínimas y máximas, verificación de la conexión al sistema de la empresa de servicios públicos (ESP) y definición del medidor de macro-medición. Se diseña conforme a la Resolución 0330 de 2017 (RAS) y las normas ICONTEC aplicables (NTC 1339, NTC 3722).</li>
        <li><strong>Red de alcantarillado sanitario:</strong> Recolección y conducción de las aguas residuales domésticas hasta el punto de conexión a la red pública o hasta la PTAR propia si no existe red disponible. El diseño incluye el cálculo de caudales sanitarios, el dimensionamiento de tuberías en PVC sanitario (norma ICONTEC NTC 1062) y la localización de cámaras de inspección.</li>
        <li><strong>Red de alcantarillado pluvial:</strong> Manejo de las aguas lluvia generadas en la urbanización para evitar encharcamientos y proteger los predios vecinos. Incluye el cálculo hidrológico de caudales (método racional o SCS-CN), el dimensionamiento de cunetas, sumideros, tuberías y, en muchos casos, un sistema de retención o infiltración (SUDS) conforme a la Resolución 0330/2017.</li>
      </ul>

      <h2>Normas técnicas que rigen el diseño hidráulico de urbanizaciones</h2>
      <p>En Colombia, el diseño hidráulico de urbanizaciones debe cumplir principalmente:</p>
      <ul>
        <li><strong>Resolución 0330 de 2017 (RAS actualizado):</strong> Es el reglamento técnico de agua potable y saneamiento básico. Define los criterios de diseño para acueductos, alcantarillados sanitarios y pluviales.</li>
        <li><strong>Normas ICONTEC:</strong> NTC 3722 (tuberías PVC para acueducto), NTC 1062 (tuberías PVC para alcantarillado), NTC 1328 (griferías y accesorios).</li>
        <li><strong>Decreto 1807 de 2014 y Resolución 0549 de 2015:</strong> Cuando la urbanización está cerca de una fuente hídrica o en zona de amenaza por inundación, se exige adicionalmente el estudio de amenaza por inundación con modelación HEC-RAS.</li>
        <li><strong>NSR-10 (Reglamento Colombiano de Construcción Sismo Resistente):</strong> Para el diseño de tanques de almacenamiento y estructuras hidráulicas dentro de la urbanización.</li>
        <li><strong>Normas locales del POT y la ESP:</strong> Cada municipio y cada empresa de servicios públicos tiene especificaciones complementarias sobre presiones mínimas, diámetros mínimos, materiales permitidos y puntos de conexión.</li>
      </ul>

      <h2>Proceso de diseño paso a paso</h2>
      <p>El diseño hidráulico de una urbanización sigue generalmente estas etapas:</p>
      <ul>
        <li><strong>Paso 1 — Recopilación de información:</strong> Se reúne la topografía del predio (curvas de nivel a cada metro), el diseño urbanístico aprobado o en revisión, el estudio de suelos y los factores de demanda de la ESP local. También se consulta la viabilidad de servicios con la ESP para saber si existen redes públicas cercanas y cuál es el punto de conexión autorizado.</li>
        <li><strong>Paso 2 — Cálculo de demandas y caudales:</strong> Con el número de lotes, viviendas o unidades funcionales, se calculan el caudal medio diario (Qmd), el caudal máximo diario (QMD) y el caudal máximo horario (QMH) para acueducto. Para alcantarillado sanitario se calcula el caudal de aguas residuales domésticas más el caudal de infiltración. Para el sistema pluvial se determina la intensidad de lluvia de diseño según el período de retorno exigido (Tr10 o Tr25) y el coeficiente de escorrentía del área impermeabilizada.</li>
        <li><strong>Paso 3 — Diseño de redes:</strong> Con los caudales calculados se dimensionan las tuberías: diámetro, material, pendiente y velocidades. Se verifica que las presiones estén dentro del rango admisible (10 a 60 m.c.a. para acueducto) y que las velocidades en el alcantarillado cumplan los mínimos de autolimpieza (0,45 m/s mínimo).</li>
        <li><strong>Paso 4 — Diseño de estructuras especiales:</strong> Cámaras de inspección, sumideros, tanques de almacenamiento o regulación, estaciones de bombeo (si las hay) y sistemas de retención pluvial.</li>
        <li><strong>Paso 5 — Elaboración de planos:</strong> Se dibujan los planos hidráulicos en AutoCAD: planta general de acueducto, planta y perfil de alcantarillado sanitario y pluvial, detalles de cámaras, sumideros, conexiones domiciliarias y especificaciones de materiales.</li>
        <li><strong>Paso 6 — Memoria de cálculo y presupuesto:</strong> Se redacta la memoria técnica con toda la metodología, resultados y cumplimiento normativo. Se elabora el presupuesto de las redes hidráulicas con APU (análisis de precios unitarios).</li>
      </ul>

      <h2>¿Qué entregables debe incluir el diseño hidráulico?</h2>
      <p>Antes de contratar, verifique que el alcance del servicio incluya:</p>
      <ul>
        <li>Memoria de cálculo hidrológica e hidráulica firmada por ingeniero con matrícula profesional COPNIA vigente.</li>
        <li>Planos en AutoCAD (DWG) y PDF: planta acueducto, planta y perfil alcantarillado sanitario y pluvial, detalles constructivos.</li>
        <li>Especificaciones técnicas de materiales y montaje.</li>
        <li>Presupuesto detallado con APU.</li>
        <li>Concepto de viabilidad de conexión tramitado ante la ESP (si aún no lo tiene).</li>
        <li>Carta de presentación firmada para radicación ante la curaduría.</li>
      </ul>

      <h2>Costos del diseño hidráulico para urbanizaciones en Colombia</h2>
      <p>Los costos varían según el tamaño de la urbanización y la complejidad del terreno:</p>
      <ul>
        <li><strong>Urbanizaciones pequeñas (hasta 50 lotes o viviendas):</strong> entre <strong>$4.000.000 y $12.000.000 COP</strong> por el diseño completo de las tres redes.</li>
        <li><strong>Urbanizaciones medianas (50–200 lotes):</strong> entre <strong>$12.000.000 y $30.000.000 COP</strong>.</li>
        <li><strong>Urbanizaciones grandes (+200 lotes) o con PTAR propia:</strong> desde <strong>$30.000.000 COP</strong> en adelante, dependiendo de la complejidad del sistema de tratamiento.</li>
      </ul>
      <p>Estos valores no incluyen el estudio de amenaza por inundación (si aplica) ni el estudio de suelos, que se contratan por separado.</p>

      <h2>¿Necesita el diseño hidráulico de su urbanización?</h2>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> diseñamos las redes hidráulicas de urbanizaciones y conjuntos residenciales en el Eje Cafetero y todo Colombia. Nuestros diseños son aceptados por curadurías, empresas de servicios públicos y entidades ambientales. Entregamos propuesta técnica y económica sin costo en 24 horas hábiles.</p>
      <QuoteFormInline serviceId="diseno-hidraulico-urbanizaciones" />
    </>,
  },

  'hec-ras-modelado-fluvial-introduccion': {
    title: 'HEC-RAS para ingenieros: introducción al modelado fluvial paso a paso',
    date: 'Mayo 2026',
    readTime: '14 min',
    category: 'Software y Modelación',
    metaDesc: 'Tutorial introductorio de HEC-RAS para ingenieros: cómo descargar el programa, cargar geometría, definir condiciones de contorno, correr el modelo y leer los resultados. Con ejemplos reales de ríos colombianos.',
    keywords: 'HEC-RAS tutorial Colombia, cómo usar HEC-RAS paso a paso, HEC-RAS modelado fluvial, HEC-RAS introducción español, modelación hidráulica HEC-RAS Colombia, aprender HEC-RAS',
    body: <>
      <p><strong>HEC-RAS</strong> (Hydrologic Engineering Center – River Analysis System) es el software de modelación hidráulica más usado en Colombia y en el mundo para el análisis de flujo en ríos, quebradas y canales. Es desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos (USACE) y es de <strong>distribución gratuita</strong>. Si trabaja en estudios de amenaza por inundación para el Decreto 1807, diseño de obras de cruce vial o evaluación de socavación, dominar HEC-RAS es una habilidad indispensable. En este artículo le explicamos cómo empezar desde cero.</p>

      <h2>¿Qué puede modelar con HEC-RAS?</h2>
      <p>HEC-RAS permite simular:</p>
      <ul>
        <li><strong>Flujo permanente (Steady Flow):</strong> Calcula los perfiles de lámina de agua para un caudal constante. Es el más usado para estudios de amenaza por inundación con caudales de diseño (Tr25, Tr50, Tr100).</li>
        <li><strong>Flujo no permanente (Unsteady Flow):</strong> Simula la propagación de una onda de creciente a lo largo del tiempo. Necesario para el tránsito de crecientes, rompimiento de presas y sistemas con estructuras hidráulicas complejas.</li>
        <li><strong>Transporte de sedimentos:</strong> Evaluación de socavación y deposición a lo largo del cauce. Fundamental para estudios de socavación en puentes con metodología HEC-18.</li>
        <li><strong>Calidad del agua:</strong> Modelación de parámetros fisicoquímicos a lo largo de un cauce.</li>
        <li><strong>Modelación 2D:</strong> Simulación bidimensional de zonas inundables con malla de elementos finitos o volúmenes finitos. Exigida para estudios de alta complejidad y municipios con riesgo alto.</li>
      </ul>

      <h2>Paso 1: Descarga e instalación de HEC-RAS</h2>
      <p>HEC-RAS es gratuito. Para descargarlo:</p>
      <ul>
        <li>Vaya a <strong>hec.usace.army.mil</strong>, sección Software → HEC-RAS.</li>
        <li>Descargue la versión más reciente (actualmente HEC-RAS 6.5 o superior). Para modelación 2D avanzada y RAS Mapper completo, use la versión 6.x.</li>
        <li>Instale en Windows. Requiere permisos de administrador. No necesita licencia ni activación.</li>
        <li>Instale también <strong>HEC-DSSVue</strong> para visualizar y editar archivos de series de tiempo en formato DSS, que HEC-RAS usa para condiciones de contorno en flujo no permanente.</li>
      </ul>

      <h2>Paso 2: Datos necesarios antes de empezar el modelo</h2>
      <p>Antes de abrir HEC-RAS, reúna estos datos del cauce a modelar:</p>
      <ul>
        <li><strong>Topografía del cauce:</strong> Perfil longitudinal y secciones transversales cada 50–200 m (según la complejidad del tramo). Puede provenir de levantamiento topográfico de campo, LiDAR, modelo digital de terreno (MDT) SRTM o fuentes del IGAC. Para modelación 2D necesita un MDT en formato TIF o similar.</li>
        <li><strong>Caudales de diseño:</strong> Resultado del estudio hidrológico para cada período de retorno a simular. Se expresan en m³/s.</li>
        <li><strong>Coeficiente de Manning (n):</strong> Parámetro de rugosidad del cauce y la llanura de inundación. Para ríos de montaña en Colombia: n = 0,030–0,060 en el cauce principal; n = 0,060–0,120 en riberas con vegetación.</li>
        <li><strong>Condición de borde aguas abajo:</strong> Profundidad normal (usando la pendiente del cauce), profundidad crítica, o nivel de agua conocido (aforo o curva de gasto de una estación).</li>
      </ul>

      <h2>Paso 3: Crear el proyecto y definir la geometría</h2>
      <p>Con HEC-RAS abierto:</p>
      <ul>
        <li>Cree un nuevo proyecto: <em>File → New Project</em>. Asigne nombre y carpeta.</li>
        <li>Abra el editor de geometría: <em>Edit → Geometric Data</em>. Aquí dibujará el tramo del río y cargará las secciones transversales.</li>
        <li>Dibuje el eje del río (River / Reach) de aguas arriba a aguas abajo. El flujo se procesa siempre en dirección aguas abajo.</li>
        <li>Ingrese las secciones transversales: seleccione cada sección, indique la distancia entre secciones consecutivas (LOB, Channel, ROB) y los coeficientes de contracción/expansión (0,1/0,3 para flujo subcrítico normal).</li>
        <li>Asigne el coeficiente de Manning por zonas (cauce principal y bancas izquierda y derecha).</li>
        <li>Para modelos 2D: use RAS Mapper para cargar el MDT e crear la malla de cálculo.</li>
      </ul>

      <h2>Paso 4: Definir los datos de flujo y condiciones de contorno</h2>
      <ul>
        <li>Abra <em>Edit → Steady Flow Data</em>.</li>
        <li>Ingrese los caudales para cada perfil (p.ej.: Q25 = 45,3 m³/s; Q50 = 62,1 m³/s; Q100 = 84,7 m³/s).</li>
        <li>Defina la condición de borde aguas abajo. Para régimen subcrítico (la mayoría de estudios en Colombia de montaña baja y planicie): use <em>Normal Depth</em> con la pendiente del cauce en el último tramo.</li>
        <li>Si el cauce tiene régimen mixto o supercrítico, use condiciones de borde tanto aguas arriba como aguas abajo.</li>
      </ul>

      <h2>Paso 5: Correr el modelo y revisar resultados</h2>
      <ul>
        <li>Vaya a <em>Run → Steady Flow Analysis</em>. Seleccione el plan de geometría y flujo. Ejecute.</li>
        <li>Si hay mensajes de error o advertencia, revise las secciones que los generan: pueden ser secciones con geometría inconsistente, velocidades muy altas o cambios bruscos de sección.</li>
        <li>Revise el perfil longitudinal: <em>View → Water Surface Profiles</em>. Verifique que las láminas de agua sean coherentes y que no haya saltos bruscos no justificados.</li>
        <li>Revise las secciones transversales individuales: <em>View → Cross Sections</em>. Confirme que la lámina de agua no desborde en secciones donde no debería, y que los coeficientes de Manning estén bien asignados.</li>
        <li>Exporte los resultados a RAS Mapper para generar el mapa de inundación sobre la cartografía base. Este mapa es el principal entregable del estudio de amenaza.</li>
      </ul>

      <h2>Errores frecuentes al empezar con HEC-RAS</h2>
      <ul>
        <li><strong>Secciones transversales invertidas:</strong> Las secciones deben estar orientadas mirando aguas abajo (de izquierda a derecha). Si las ingresa al revés, las áreas hidráulicas quedan en el lado equivocado.</li>
        <li><strong>Distancias entre secciones mal asignadas:</strong> Las distancias LOB, Channel y ROB son independientes porque el cauce y las bancas pueden tener longitudes diferentes en planta (cauces sinuosos).</li>
        <li><strong>Condición de borde incorrecta:</strong> Usar <em>Critical Depth</em> cuando el flujo real es subcrítico genera resultados incorrectos. Identifique el régimen con el número de Froude antes de elegir la condición.</li>
        <li><strong>Manning demasiado bajo:</strong> Muchos ingenieros usan n = 0,025 por defecto. Para cauces andinos con material grueso y vegetación, el Manning real puede ser 0,050 o más.</li>
      </ul>

      <h2>HEC-RAS en estudios colombianos: normativa vigente</h2>
      <p>En Colombia, HEC-RAS es el software de referencia para los estudios de amenaza por inundación exigidos por el <strong>Decreto 1807 de 2014</strong>. El <strong>IDEAM</strong> y la mayoría de las <strong>CAR</strong> lo aceptan como herramienta válida para la modelación 1D y 2D. Para estudios de socavación en puentes, el <strong>Manual de Diseño de Puentes INVIAS</strong> acepta HEC-RAS junto con la metodología <strong>HEC-18</strong>.</p>

      <h2>¿Necesita un modelo HEC-RAS para su proyecto?</h2>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> elaboramos modelaciones HEC-RAS 1D y 2D para estudios de amenaza por inundación, socavación en puentes y obras de cruce vial en todo Colombia. Entregamos el modelo calibrado, el informe técnico y los mapas de inundación. Solicite su propuesta sin costo.</p>
      <QuoteFormInline serviceId="hec-ras-2d" />
    </>,
  },

  'caso-red-hidrosanitaria-vivienda': {
    title: 'Caso real: diseño de red hidrosanitaria en vivienda unifamiliar (Colombia)',
    date: 'Mayo 2026',
    readTime: '11 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Caso práctico de diseño de red hidrosanitaria en vivienda unifamiliar en Colombia: cálculo de demandas, selección de tuberías, planos en AutoCAD y presupuesto real. Con valores del Eje Cafetero 2026.',
    keywords: 'red hidrosanitaria vivienda Colombia, diseño hidrosanitario casa Colombia, planos hidrosanitarios vivienda Colombia, diseño red agua potable vivienda, alcantarillado vivienda Colombia',
    body: <>
      <p>El <strong>diseño hidrosanitario de una vivienda unifamiliar</strong> es uno de los estudios técnicos más frecuentes que elaboramos en <strong>BIC – Bernal Ingeniería Consultores</strong>. Aunque muchas personas piensan que el plomero puede hacerlo sin planos técnicos, la ley colombiana exige que el diseño sea firmado por un ingeniero con matrícula profesional COPNIA para tramitar la licencia de construcción. En este artículo mostramos un caso real con los datos de cálculo, materiales seleccionados y el presupuesto.</p>

      <h2>Descripción del proyecto</h2>
      <p>Vivienda unifamiliar de dos pisos en la ciudad de Armenia (Quindío). Área construida: 180 m². Programa de necesidades: sala, comedor, cocina, lavadero, 3 habitaciones, 2 baños completos y 1 baño social. El predio cuenta con acceso a red pública de acueducto y alcantarillado de la empresa de servicios públicos local.</p>

      <h2>Paso 1: Cálculo de unidades de gasto y caudal de diseño</h2>
      <p>Para dimensionar las tuberías internas, el método colombiano (Norma ICONTEC NTC 1500 y RAS 2017) usa las <strong>unidades de gasto (UG)</strong> de cada aparato sanitario:</p>
      <ul>
        <li>Ducha: 2 UG</li>
        <li>Inodoro de tanque: 3 UG</li>
        <li>Lavamanos: 1 UG</li>
        <li>Lavaplatos cocina: 2 UG</li>
        <li>Lavadero: 3 UG</li>
        <li>Total vivienda (2 baños completos + 1 social + cocina + lavadero): <strong>22 UG</strong></li>
      </ul>
      <p>Con 22 UG y la curva de Hunter (probabilidad de uso simultáneo), se obtiene un <strong>caudal de diseño de 0,70 L/s</strong> para la red interna de agua fría.</p>

      <h2>Paso 2: Dimensionamiento de tuberías de agua fría y caliente</h2>
      <p>Usando la fórmula de Hazen-Williams y verificando velocidades entre 0,5 y 3,0 m/s:</p>
      <ul>
        <li><strong>Tubería principal de alimentación (desde medidor):</strong> DN 32 mm (1¼") en PVC NTC 3722 serie 6.</li>
        <li><strong>Distribución a baños:</strong> DN 25 mm (1") en PVC.</li>
        <li><strong>Ramales a aparatos:</strong> DN 19 mm (¾") en PVC para inodoros y duchas, DN 13 mm (½") para lavamanos y lavaplatos.</li>
        <li><strong>Red agua caliente:</strong> DN 19 mm en tubería multicapa (Tuboplex o similar) con aislamiento térmico en la central de agua caliente.</li>
      </ul>
      <p>Se verifica que la presión en el punto más desfavorable (ducha del segundo piso) sea ≥ 10 m.c.a. con la presión de la red pública disponible (presión mínima certificada por la ESP: 18 m.c.a.).</p>

      <h2>Paso 3: Red de aguas residuales (alcantarillado sanitario interno)</h2>
      <p>El sistema sanitario interno recolecta las aguas residuales de todos los aparatos y las conduce hasta el sifón de entrega al alcantarillado público:</p>
      <ul>
        <li><strong>Ramales de aparatos:</strong> DN 50 mm (2") para lavamanos y lavaplatos; DN 100 mm (4") para inodoros.</li>
        <li><strong>Columna bajante:</strong> DN 100 mm (4") en PVC sanitario NTC 1062, con pendiente mínima del 1%.</li>
        <li><strong>Ramal de evacuación hasta el empalme al alcantarillado:</strong> DN 100 mm con pendiente del 2% para garantizar velocidades de autolimpieza (≥ 0,45 m/s).</li>
        <li><strong>Ventilación:</strong> Se instala columna de ventilación DN 50 mm hasta cubierta para evitar roturas de sello hidráulico en sifones.</li>
      </ul>

      <h2>Paso 4: Manejo de aguas lluvias</h2>
      <p>Las aguas lluvias de la cubierta (área: 90 m²) se conducen por canales PVC hasta una bajante exterior DN 75 mm que las descarga al sumidero de la vía o al alcantarillado pluvial público, <strong>separada del sistema sanitario</strong> conforme al sistema separado exigido por el RAS 2017 en zonas urbanas con red dual.</p>
      <p>Para el caso de Armenia (intensidad de lluvia de diseño: I = 95 mm/h para Tr10), el caudal pluvial de la cubierta es <strong>Q = 0,0024 m³/s = 2,4 L/s</strong>, manejable con la bajante de 75 mm sin riesgo de desbordamiento.</p>

      <h2>Planos y entregables</h2>
      <p>El diseño hidrosanitario entregó a la constructora y a la curaduría:</p>
      <ul>
        <li>Plano de planta primer piso — red agua fría, caliente y sanitaria (escala 1:50).</li>
        <li>Plano de planta segundo piso — ídem.</li>
        <li>Plano de corte isométrico — visualización 3D de la red para facilitar la instalación.</li>
        <li>Plano de red de aguas lluvias — canales, bajantes y punto de entrega.</li>
        <li>Memoria de cálculo con cuadro de aparatos, UG, caudales de diseño y verificación de presiones.</li>
        <li>Especificaciones técnicas de materiales.</li>
        <li>Presupuesto detallado de instalaciones hidrosanitarias.</li>
      </ul>

      <h2>Presupuesto real del diseño y las instalaciones (Armenia, 2026)</h2>
      <ul>
        <li><strong>Diseño hidrosanitario completo (planos + memoria):</strong> $1.800.000 – $2.500.000 COP (varía según número de aparatos y complejidad).</li>
        <li><strong>Suministro e instalación de red agua fría y caliente:</strong> $4.500.000 – $7.000.000 COP para una vivienda de 180 m².</li>
        <li><strong>Suministro e instalación de red sanitaria y aguas lluvias:</strong> $3.500.000 – $5.500.000 COP.</li>
        <li><strong>Total instalaciones (sin aparatos sanitarios):</strong> $8.000.000 – $12.500.000 COP.</li>
      </ul>

      <h2>¿Necesita el diseño hidrosanitario de su vivienda o proyecto?</h2>
      <p>En <strong>BIC – Bernal Ingeniería Consultores</strong> elaboramos los diseños hidrosanitarios para viviendas, edificios y urbanizaciones en el Eje Cafetero y todo Colombia. Nuestros planos son aceptados por curadurías y ESP. Solicite propuesta sin costo en 24 horas hábiles.</p>
      <QuoteFormInline serviceId="diseno-hidraulico-urbanizaciones" />
    </>,
  },

}

export default articlesG
