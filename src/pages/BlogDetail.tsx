import { useEffect } from 'react'
import { useRoute } from 'wouter'
import articles1 from '../data/articles1'
import articlesB from '../data/articlesB'
import articlesC from '../data/articlesC'
import articlesD from '../data/articlesD'
import articlesE from '../data/articlesE'
import articlesF from '../data/articlesF'
import SEOHead from '../components/SEOHead'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section } from '../components/ui'
import { SEOConfig } from '../lib/seo'

const WA = '573024778910'

// ─── ARTICLE CONTENT ────────────────────────────────────────────────────────
const ARTICLES: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

    'suds-sistemas-drenaje-sostenible-colombia': {
          title: 'SUDS en Colombia: Drenaje Sostenible para Ciudades de Montaña',
              date: 'Marzo 2026',
                  readTime: '8 min',
                      category: 'Riesgo Hídrico',
                          metaDesc: 'Conozca cómo los Sistemas Urbanos de Drenaje Sostenible (SUDS) reducen inundaciones en ciudades colombianas de montaña. Marco normativo, tipologías y casos reales.',
                              keywords: 'sistemas urbanos de drenaje sostenible Colombia, SUDS Manizales, drenaje pluvial urbano, control inundaciones ciudades montaña',
                                  body: <>
                                        <p>Colombia recibe en promedio más de 3.000 mm de lluvia al año, pero esa abundancia hídrica es también una de las principales causas de emergencias en sus ciudades. Solo en febrero de 2026, lluvias atípicas en Córdoba afectaron 17 municipios. En ciudades de montaña como Manizales, donde llueve aproximadamente 258 días al año, la gestión del agua lluvia es un desafío estructural que no puede seguir resolviéndose con soluciones del siglo pasado.</p>
                                              <p>Los <strong>Sistemas Urbanos de Drenaje Sostenible (SUDS)</strong> representan un cambio de paradigma en la ingeniería hidráulica: en lugar de evacuar el agua lo más rápido posible hacia los cuerpos receptores, buscan retenerla, infiltrarla, tratarla y reutilizarla, imitando el ciclo hidrológico natural.</p>
                                                    <h2>¿Qué son los SUDS y por qué Colombia los necesita?</h2>
                                                          <p>Los SUDS son un conjunto de técnicas de gestión del agua lluvia que buscan reproducir el comportamiento hidrológico natural en ambientes urbanos. Su principio fundamental es reducir y retrasar el volumen de escorrentía que llega a la red de drenaje convencional, disminuyendo el riesgo de inundación, la erosión en cauces y la contaminación de cuerpos de agua.</p>
                                                                <p>En Colombia, el acelerado proceso de urbanización ha impermeabilizado grandes superficies que antes absorbían el agua lluvia, incrementando exponencialmente los picos de caudal en las redes de alcantarillado. El cambio climático está intensificando los eventos de precipitación extrema: temporadas de lluvias más largas, aguaceros de mayor intensidad y fenómenos de La Niña más severos son ya una realidad documentada.</p>
                                                                      <h2>Marco Normativo Vigente en Colombia</h2>
                                                                            <p>La <strong>Resolución 330 de 2017</strong> (RAS actualizado) introduce por primera vez el enfoque de drenaje sostenible a nivel nacional, recomendando retener el agua lluvia y amortiguar el caudal pico en al menos un <strong>25%</strong>. La <strong>Resolución 0799 de 2021</strong> precisó los criterios técnicos para diseño e implementación de SUDS. El Ministerio de Vivienda publicó en 2022 la <strong>Guía Metodológica para la Formulación e Implementación de SUDS</strong>, principal instrumento técnico vigente. El DNP incluye los SUDS dentro de sus Proyectos Tipo para municipios.</p>
                                                                                  <h2>Tipologías de SUDS Aplicables en Colombia</h2>
                                                                                        <ul>
                                                                                                <li><strong>Pavimentos Permeables:</strong> superficies que permiten la infiltración del agua hacia capas sub-base filtrantes. Ideales para estacionamientos y vías locales.</li>
                                                                                                        <li><strong>Zanjas y Trincheras de Infiltración:</strong> excavaciones lineales rellenas de material granular para almacenar e infiltrar gradualmente el agua lluvia.</li>
                                                                                                                <li><strong>Cunetas Verdes (Bioswales):</strong> canales poco profundos con vegetación que conducen el agua reduciendo velocidad y favoreciendo infiltración.</li>
                                                                                                                        <li><strong>Jardines de Lluvia y Biorretención:</strong> depresiones vegetadas que reciben y retienen agua de superficies impermeables adyacentes.</li>
                                                                                                                                <li><strong>Tanques de Detención:</strong> estructuras que retienen temporalmente grandes volúmenes durante picos de tormenta.</li>
                                                                                                                                        <li><strong>Alcorques Inundables:</strong> espacios de arborización urbana adaptados para recibir y retener agua lluvia de calles y andenes.</li>
                                                                                                                                              </ul>
                                                                                                                                                    <h2>SUDS en Ciudades de Montaña: El Caso de Manizales</h2>
                                                                                                                                                          <p>Investigaciones de la <strong>Universidad Nacional de Colombia</strong> en Manizales identificaron inundaciones pluviales recurrentes en al menos 14 barrios entre 1953 y 2019. Los resultados son contundentes: combinaciones de SUDS pueden lograr una <strong>reducción del caudal pico superior al 80%</strong> para períodos de retorno de 5 a 100 años.</p>
                                                                                                                                                                <p>En ciudades de montaña, la infiltración masiva no siempre es deseable: los suelos saturados en taludes inestables pueden desencadenar movimientos en masa. Por ello se privilegian las <strong>soluciones de detención y conducción controlada</strong>, y se requiere análisis geotécnico integrado al diseño hidráulico.</p>
                                                                                                                                                                      <h2>Aplicaciones Prácticas para Colombia</h2>
                                                                                                                                                                            <p><strong>Nuevos desarrollos urbanísticos:</strong> diseñar con criterios SUDS desde el inicio reduce costos de infraestructura y cumple con el RAS. <strong>Rehabilitación de redes combinadas:</strong> incorporar SUDS reduce la carga sobre redes que mezclan aguas residuales y lluvias. <strong>Espacio público:</strong> parques, plazas y corredores viales son oportunidades para integrar soluciones con doble beneficio ambiental y paisajístico. <strong>POT y POMCA:</strong> la incorporación de lineamientos SUDS en instrumentos de planificación territorial es la vía para una transformación sistémica.</p>
                                                                                                                                                                                  <h2>Conclusión</h2>
                                                                                                                                                                                        <p>Los eventos de inundación de 2026 son un recordatorio urgente de que los sistemas de drenaje convencional no son suficientes. La normativa colombiana ya provee el soporte técnico y jurídico necesario. En <strong>BIC – Bernal Ingeniería Consultores</strong> contamos con la experiencia técnica para acompañar a municipios, constructores y entidades públicas en el diseño y consultoría de proyectos SUDS en el Eje Cafetero y Colombia.</p>
                                                                                                                                                                                            </>,
                                                                                                                                                                                              },
                                                                                                                                                                                              'costos-obras-hidraulicas-colombia-2026': {
    title: 'Costos de Obras Hidráulicas en Colombia 2026: Análisis de Precios Unitarios para el Eje Cafetero',
    date: 'Marzo 2026', readTime: '9 min', category: 'Costos y presupuestos',
    metaDesc: 'Guía actualizada de costos unitarios para redes de acueducto, alcantarillado, drenaje urbano y CI en Manizales y el Eje Cafetero 2026.',
    keywords: 'costos obras hidráulicas Colombia 2026, APU acueducto alcantarillado Manizales',
    body: <>
      <p>Conocer los costos unitarios actualizados es fundamental para elaborar presupuestos realistas en proyectos de infraestructura hidráulica. En el Eje Cafetero, los precios varían según el municipio, el tipo de suelo, la accesibilidad y la complejidad normativa. Este análisis presenta datos reales de proyectos ejecutados por BIC en Caldas y Risaralda durante 2024–2026.</p>
      <h2>Costos unitarios redes de acueducto</h2>
      <p>Las redes de distribución bajo Resolución 0330/2017 y RAS 2017 incluyen excavación, suministro e instalación de tubería, compactación y pruebas hidrostáticas. Precios por metro lineal en el Eje Cafetero:</p>
      <ul>
        <li><strong>Tubería PVC 2" (50mm):</strong> $45.000–$65.000/ml</li>
        <li><strong>Tubería PVC 4" (100mm):</strong> $75.000–$95.000/ml</li>
        <li><strong>Tubería PVC 6" (150mm):</strong> $120.000–$150.000/ml</li>
        <li><strong>Válvulas de control:</strong> $2.500.000–$5.000.000/unidad</li>
        <li><strong>Cajas de inspección:</strong> $1.200.000–$1.800.000/unidad</li>
      </ul>
      <h2>Costos unitarios alcantarillado</h2>
      <ul>
        <li><strong>Tubería PVC 6":</strong> $85.000–$110.000/ml</li>
        <li><strong>Tubería PVC 8":</strong> $130.000–$160.000/ml</li>
        <li><strong>Tubería PVC 12":</strong> $200.000–$260.000/ml</li>
        <li><strong>Cámara de inspección:</strong> $1.500.000–$2.200.000/unidad</li>
      </ul>
      <h2>Costos drenaje urbano y SUDS</h2>
      <ul>
        <li><strong>Cunetas y canales revestidos:</strong> $150.000–$250.000/ml</li>
        <li><strong>Sumideros:</strong> $800.000–$1.200.000/unidad</li>
        <li><strong>Tuberías drenaje subterráneo:</strong> $95.000–$130.000/ml</li>
        <li><strong>Sistemas SUDS (jardines de lluvia):</strong> $500.000–$1.000.000/m²</li>
      </ul>
      <h2>Costos sistemas contra incendios NSR-10</h2>
      <ul>
        <li><strong>Tubería acero galvanizado 2.5":</strong> $85.000–$120.000/ml</li>
        <li><strong>Tubería acero galvanizado 4":</strong> $140.000–$180.000/ml</li>
        <li><strong>Rociador automático:</strong> $180.000–$280.000/unidad</li>
        <li><strong>Hidrante exterior:</strong> $3.500.000–$5.500.000/unidad</li>
        <li><strong>Detector de humo:</strong> $150.000–$350.000/unidad</li>
      </ul>
      <h2>Factores que afectan el presupuesto</h2>
      <ul>
        <li><strong>Suelo rocoso:</strong> +30–50% sobre suelo blando</li>
        <li><strong>Profundidad mayor a 3m:</strong> +20–35%</li>
        <li><strong>Zona urbana densa:</strong> +15–25%</li>
        <li><strong>Materiales desde Medellín o Bogotá:</strong> +15–20%</li>
        <li><strong>Imprevistos recomendados:</strong> 10–15% del subtotal</li>
      </ul>
      <h2>Presupuesto estimado por tipo de proyecto</h2>
      <p><strong>Proyecto residencial 100 viviendas (2 hectáreas):</strong></p>
      <ul>
        <li>Red acueducto 1.500ml × $70.000 = $105.000.000</li>
        <li>Red alcantarillado 1.500ml × $120.000 = $180.000.000</li>
        <li>Drenaje pluvial = $350.000.000</li>
        <li>Conexiones domiciliarias 100 × $3.000.000 = $300.000.000</li>
        <li><strong>Total con imprevistos 10%: ~$1.030.000.000 COP</strong></li>
      </ul>
      <p><strong>Proyecto comercial con CI (5.000 m²):</strong></p>
      <ul>
        <li>Red hidrosanitaria interna = $180.000.000</li>
        <li>Sistema CI completo NSR-10 = $320.000.000</li>
        <li><strong>Total con imprevistos 15%: ~$575.000.000 COP</strong></li>
      </ul>
      <h2>Conclusión</h2>
      <p>Un diseño técnico riguroso desde la prefactibilidad puede optimizar el presupuesto entre 10–20% antes de iniciar obra. La clave está en seleccionar diámetros correctos con EPANET y SewerGEMs, aplicar RAS 2017 desde el inicio y coordinar hidrosanitario, drenaje y CI en un solo diseño integrado. En BIC realizamos presupuestos con APU detalladas para proyectos de cualquier escala en el Eje Cafetero y Colombia.</p>
    </>
  },

  'riesgo-hidraulico-ciudades-densas': {
    title: 'Gestión del Riesgo Hídrico en Ciudades del Eje Cafetero: Estrategias Técnicas y Casos de Éxito',
    date: 'Febrero 2026', readTime: '8 min', category: 'Riesgo Hídrico',
    metaDesc: 'Estrategias técnicas para gestión del riesgo hídrico en Manizales, Dosquebradas y Pereira. Modelación HEC-RAS, Decreto 1807, sistemas SUDS. Casos reales.',
    keywords: 'gestión riesgo hídrico Eje Cafetero, inundaciones Dosquebradas, Decreto 1807 plan parcial Colombia',
    body: <>
      <p>El Eje Cafetero enfrenta una paradoja técnica: es la región más dinámica en construcción de Colombia media, y al mismo tiempo una de las más vulnerables a inundaciones y avenidas torrenciales. Manizales, Dosquebradas y los municipios del corredor cafetero tienen cuencas con pendientes pronunciadas, suelos volcánicos y una frecuencia de eventos extremos que crece con el cambio climático. Esto hace que la gestión del riesgo hídrico sea un componente técnico obligatorio — no opcional — en cualquier proyecto de desarrollo urbano.</p>
      <h2>El marco normativo que lo hace obligatorio</h2>
      <p>El Decreto 1807 de 2014 establece que cualquier licencia de urbanismo en zonas con amenaza hídrica debe ir precedida de un estudio de amenaza, vulnerabilidad y riesgo. Sin ese estudio, la Curaduría Urbana no emite la licencia. En la práctica, esto significa que cada uno de los 22 planes parciales activos en Cerritos (Pereira), cada urbanización en las zonas de expansión de Manizales y cada proyecto industrial en Dosquebradas necesita este análisis técnico antes de poder construir.</p>
      <h2>Metodología de análisis: del levantamiento a los mapas de riesgo</h2>
      <p>Un estudio de riesgo hídrico riguroso bajo el Decreto 1807 sigue esta secuencia:</p>
      <ul>
        <li><strong>Levantamiento topobatimétrico:</strong> secciones transversales de quebradas y ríos con estación total y GPS RTK</li>
        <li><strong>Análisis hidrológico con HEC-HMS:</strong> caudales máximos para períodos de retorno de 10, 25, 50 y 100 años</li>
        <li><strong>Modelación hidráulica HEC-RAS 2D:</strong> simulación del flujo, profundidades máximas y velocidades</li>
        <li><strong>Cartografía SIG en ArcGIS:</strong> mapas de amenaza alta, media y baja a escala 1:2000 o 1:5000</li>
        <li><strong>Concepto de aptitud urbanística:</strong> qué zonas son aptas para construir y con qué condiciones</li>
      </ul>
      <h2>Caso de éxito: Makarí Mall, Dosquebradas</h2>
      <p>El centro comercial Makarí Mall, ubicado en Dosquebradas, presentaba un reto específico: construir en una zona con riesgo de inundación sin comprometer la seguridad del proyecto ni la de la infraestructura circundante. BIC diseñó el sistema de drenaje integral con estos componentes:</p>
      <ul>
        <li>Análisis hidrológico de la cuenca aportante (45 hectáreas)</li>
        <li>Modelación HEC-RAS 2D del flujo superficial en el área del proyecto</li>
        <li>Tanques de retención subterráneos de 5.000 m³ para evento de 100 años</li>
        <li>Sistemas SUDS integrados en 8.000 m² de áreas verdes</li>
        <li>Bombeo de emergencia con capacidad de 500 L/s</li>
      </ul>
      <p>Resultado: el proyecto obtuvo su licencia, se construyó y opera sin ningún incidente de inundación. Inversión total en el sistema de drenaje: $2.800 millones COP.</p>
      <h2>Cuánto cuesta un estudio de riesgo hídrico</h2>
      <p>El costo de un estudio de riesgo hídrico para un plan parcial o urbanización en el Eje Cafetero oscila entre $15 y $40 millones COP, dependiendo del tamaño del área, la complejidad de la cuenca y los entregables requeridos por la Curaduría o la CAR. Comparado con el costo de un evento de inundación — que puede superar los $500 millones en daños — la inversión en prevención tiene un retorno evidente.</p>
      <h2>Conclusión</h2>
      <p>La gestión del riesgo hídrico en el Eje Cafetero no es un gasto — es un requisito técnico y legal, y una inversión con retorno demostrable. BIC realiza estudios de riesgo compatibles con los requerimientos de CORPOCALDAS, CARDER, CRQ y las Curadurías Urbanas de Manizales, Pereira y Armenia.</p>
    </>
  },

  'hec-ras-2d-colombia': {
    title: 'HEC-RAS 2D en Colombia: Guía Práctica para Estudios de Inundación y Licencias de Urbanismo',
    date: 'Enero 2026', readTime: '11 min', category: 'Software y Modelación',
    metaDesc: 'Guía técnica HEC-RAS 2D para estudios de amenaza por inundación exigidos por el Decreto 1807/2014 en Colombia. Metodología, casos reales y ventajas sobre el modelo 1D.',
    keywords: 'HEC-RAS 2D Colombia, modelación hidráulica inundaciones, Decreto 1807 estudio riesgo',
    body: <>
      <p>HEC-RAS 2D es hoy el estándar de facto para los estudios de amenaza por inundación exigidos por el Decreto 1807 de 2014 en Colombia. Mientras el modelo 1D tradicional solo simula el flujo a lo largo de secciones transversales predefinidas, el modelo 2D resuelve las ecuaciones de flujo superficial en toda la llanura aluvial, generando mapas de profundidad y velocidad con precisión de metros. Esta diferencia es crítica cuando se trata de determinar qué zonas son aptas para urbanizar y cuáles no.</p>
      <h2>¿Cuándo se requiere HEC-RAS 2D?</h2>
      <p>Según el Decreto 1807/2014 y las guías del IDEAM, la modelación 2D es necesaria cuando:</p>
      <ul>
        <li>El proyecto tiene área mayor a 5 hectáreas en zona con amenaza hídrica</li>
        <li>La llanura de inundación tiene ancho mayor a 100 metros</li>
        <li>Existen estructuras de control hidráulico (puentes, boxcúlverts) que afectan el flujo</li>
        <li>La Curaduría o la CAR exigen mapas de profundidad y velocidad por separado</li>
        <li>El proyecto requiere evaluación de medidas de mitigación estructurales</li>
      </ul>
      <h2>Metodología de modelación HEC-RAS 2D</h2>
      <p><strong>Paso 1 — Insumos topográficos:</strong> El modelo 2D requiere un modelo digital del terreno (MDT) de alta resolución. La mejor fuente son levantamientos LiDAR a 1 metro de resolución o levantamientos topobatimétricos propios con estación total y GPS RTK. Sin un MDT de calidad, el modelo genera resultados poco confiables.</p>
      <p><strong>Paso 2 — Análisis hidrológico con HEC-HMS:</strong> Antes del modelo hidráulico, se determina el hidrograma de diseño para los períodos de retorno requeridos (generalmente 10, 25, 50 y 100 años) usando HEC-HMS con datos de precipitación del IDEAM y parámetros de la cuenca.</p>
      <p><strong>Paso 3 — Configuración del modelo 2D:</strong> Se define la malla de cálculo 2D, las condiciones de contorno (caudal entrante, nivel de agua aguas abajo) y los coeficientes de rugosidad de Manning según el uso del suelo.</p>
      <p><strong>Paso 4 — Corrida del modelo y resultados:</strong> HEC-RAS 2D genera mapas de: profundidad máxima de inundación, velocidad máxima del flujo, tiempo de concentración y extensión de la mancha de inundación por período de retorno.</p>
      <h2>Caso real: análisis de torrencialidad en 8 municipios del Eje Cafetero</h2>
      <p>En 2021–2022, BIC realizó para EJE GROUP S.A.S. el análisis de torrencialidad de 8 municipios del Eje Cafetero usando HEC-RAS 2D con superficies LiDAR. Resultados clave:</p>
      <ul>
        <li>12 zonas críticas de riesgo alto identificadas</li>
        <li>Profundidades máximas de inundación: 2.5–4.0 metros</li>
        <li>Velocidades máximas: 1.5–3.5 m/s</li>
        <li>Tiempos de concentración: 15–45 minutos por subcuenca</li>
        <li>Propuestas de mitigación estructural por $81 millones COP</li>
      </ul>
      <h2>HEC-RAS 1D vs 2D: ¿cuál usar?</h2>
      <p>El modelo 1D sigue siendo válido para ríos encauzados con sección bien definida y ausencia de desbordamiento lateral significativo. El modelo 2D es obligatorio cuando el flujo tiene componentes laterales importantes — urbanizaciones en llanura aluvial, zonas industriales en planicie de inundación, o cualquier área donde el agua se dispersa libremente al desbordar el cauce.</p>
      <p>En la práctica, para licencias de urbanismo en el Eje Cafetero, la mayoría de Curadurías y las CAR locales exigen modelación 2D como estándar. Un modelo 1D para estos casos puede generar observaciones que retrasen la aprobación.</p>
      <h2>Conclusión</h2>
      <p>BIC ha realizado modelaciones HEC-RAS 2D en proyectos en Caldas, Risaralda y Ecuador. Si tu proyecto requiere estudio de amenaza por inundación para licencia de urbanismo, plan parcial o revisión de POT, la consulta inicial es sin costo.</p>
    </>
  },

  'proyectos-regalias-agua-saneamiento': {
    title: 'Cómo Formular Proyectos de Agua Potable con Regalías en Colombia — Guía MGA-Web 2026',
    date: 'Diciembre 2025', readTime: '10 min', category: 'Regalías SGR',
    metaDesc: 'Guía paso a paso para formular proyectos de agua potable y saneamiento en MGA-Web del DNP para el SGR. Errores comunes, requisitos y casos reales aprobados.',
    keywords: 'formulación proyectos regalías agua MGA-Web Colombia, SGR acueducto alcantarillado municipios',
    body: <>
      <p>Cada año, municipios de Caldas, Boyacá, Tolima y decenas de departamentos de Colombia tienen recursos asignados del Sistema General de Regalías (SGR) para proyectos de agua potable y saneamiento básico — y los dejan sin ejecutar porque no encuentran profesionales técnicos que formulen correctamente los proyectos en la plataforma MGA-Web del DNP. Es uno de los vacíos técnicos más costosos del sector público colombiano. Este artículo explica el proceso completo, los errores más frecuentes y cómo BIC puede ayudar.</p>
      <h2>¿Qué es el SGR y cómo funciona para agua?</h2>
      <p>El Sistema General de Regalías distribuye los recursos provenientes de la explotación de recursos naturales (petróleo, carbón, níquel, entre otros) entre municipios, departamentos y fondos de desarrollo regional. Para acceder a esos recursos, el municipio o entidad ejecutora debe formular un proyecto en la plataforma MGA-Web del Departamento Nacional de Planeación (DNP) y presentarlo ante el OCAD (Órgano Colegiado de Administración y Decisión) correspondiente.</p>
      <h2>Paso a paso en MGA-Web para proyectos de agua</h2>
      <p><strong>Módulo 1 — Identificación:</strong> nombre del proyecto, sector (agua potable / saneamiento básico), localización, población beneficiada y diagnóstico del problema. Este módulo parece simple pero es donde más proyectos son devueltos por diagnósticos incompletos o mal justificados.</p>
      <p><strong>Módulo 2 — Preparación:</strong> estudios de prefactibilidad, análisis de alternativas técnicas y financieras, y selección de la alternativa óptima. El DNP exige que se comparen mínimo dos alternativas con criterios técnicos, económicos y sociales.</p>
      <p><strong>Módulo 3 — Evaluación:</strong> diseños técnicos completos (memorias de cálculo, planos, especificaciones técnicas), presupuesto detallado con APU, cronograma de ejecución y análisis costo-beneficio. Este es el módulo más exigente técnicamente.</p>
      <p><strong>Módulo 4 — Programación:</strong> fuentes de financiación, indicadores de producto y resultado, y plan de sostenibilidad post-ejecución.</p>
      <h2>Los 5 errores más comunes que hacen rechazar el proyecto</h2>
      <ul>
        <li><strong>Error 1: Diagnóstico sin datos:</strong> afirmar que "el municipio no tiene agua potable" sin mostrar datos de cobertura, calidad y demanda. El DNP exige cifras verificables del DANE y del prestador del servicio.</li>
        <li><strong>Error 2: Diseños sin estudios previos:</strong> presentar planos de acueducto sin topografía, sin estudio de suelos y sin análisis de calidad del agua fuente. Estos estudios son la base técnica del diseño.</li>
        <li><strong>Error 3: Presupuesto sin APU:</strong> el presupuesto debe tener análisis de precios unitarios (APU) con insumos, rendimientos y administración bien detallados. Un global price sin APU no pasa el filtro del evaluador.</li>
        <li><strong>Error 4: Indicadores no medibles:</strong> poner "mejorar la calidad de vida" como indicador de resultado. El DNP exige indicadores cuantificables: número de personas con acceso a agua potable, cobertura en %, reducción de IRCA, etc.</li>
        <li><strong>Error 5: Sin análisis de sostenibilidad:</strong> el proyecto debe demostrar que el sistema puede operar y mantenerse después de construido, con tarifas suficientes y capacidad institucional del prestador.</li>
      </ul>
      <h2>Caso real: Alcaldía de Puerto Boyacá — Contrato 621/2021</h2>
      <p>BIC formuló proyectos de inversión pública para la Alcaldía de Puerto Boyacá en 44 días (Contrato 621/2021, $10.5 millones COP). Los proyectos incluyeron estudios de diagnóstico, diseños técnicos de acueducto, presupuestos APU y diligenciamiento completo en MGA-Web. Proyecto verificable en el SECOP.</p>
      <h2>¿Cuánto cuesta formular un proyecto de regalías?</h2>
      <p>La formulación completa de un proyecto de agua potable para el SGR, incluyendo estudios previos y MGA-Web, tiene un costo típico entre $8 y $20 millones COP según la complejidad y los estudios técnicos requeridos. Comparado con el valor del proyecto (que puede ser de $500 millones a $5.000 millones), es una inversión menor con retorno enorme.</p>
      <h2>Conclusión</h2>
      <p>BIC tiene experiencia verificable en formulación MGA-Web para el SGR. Si tu municipio tiene regalías asignadas para agua y saneamiento, podemos ayudarte a formular el proyecto correctamente para que sea aprobado. Primera consulta sin costo.</p>
    </>
  },

  'nsr-10-sistemas-contra-incendios': {
    title: 'NSR-10 Capítulos J y K: Guía Técnica para Sistemas Contra Incendios en Colombia',
    date: 'Noviembre 2025', readTime: '9 min', category: 'Normativa CI',
    metaDesc: 'Guía técnica completa sobre NSR-10 Caps. J y K para sistemas contra incendios en edificaciones colombianas. NTC 1500, 1669, 2301. Casos reales.',
    keywords: 'sistemas contra incendios NSR-10 Colombia, NTC 1500 1669 2301 diseño CI edificios',
    body: <>
      <p>Los sistemas contra incendios en Colombia están regulados por la NSR-10 (Norma Sismo Resistente) en sus Capítulos J (requisitos de protección contra incendios) y K (instalaciones hidráulicas y sanitarias), complementados por las normas técnicas colombianas NTC 1500 (Código Colombiano de Fontanería), NTC 1669 (rociadores automáticos) y NTC 2301 (hidrantes). El incumplimiento de estas normas es causal de no expedición de licencia de construcción, de clausura por el Cuerpo de Bomberos y de responsabilidad civil y penal en caso de siniestro.</p>
      <h2>¿Qué edificaciones requieren sistema CI?</h2>
      <p>Según la NSR-10, requieren sistema de protección contra incendios:</p>
      <ul>
        <li><strong>Edificios de uso comercial o de oficinas</strong> con área mayor a 1.000 m²</li>
        <li><strong>Hospitales, clínicas y centros de salud</strong> de cualquier tamaño</li>
        <li><strong>Hoteles y lugares de hospedaje</strong> con más de 30 habitaciones</li>
        <li><strong>Bodegas e industrias</strong> según categoría de riesgo de incendio</li>
        <li><strong>Edificios de vivienda multifamiliar</strong> de más de 5 pisos</li>
        <li><strong>Parqueaderos</strong> con capacidad mayor a 10 vehículos</li>
      </ul>
      <h2>Componentes del sistema CI bajo NSR-10</h2>
      <p><strong>Red húmeda (gabinetes CI):</strong> tubería siempre con agua a presión, conectada al acueducto o a un tanque de reserva con bomba. Incluye gabinetes con manguera, válvula angular y pitón. Requiere presión mínima de 45 psi en el gabinete más desfavorable.</p>
      <p><strong>Red seca:</strong> tubería sin agua permanente, se conecta al camión de bomberos desde el exterior. Obligatoria en edificios donde la red húmeda no puede garantizar presión suficiente.</p>
      <p><strong>Rociadores automáticos (sprinklers):</strong> activación automática por temperatura. Exigidos según NSR-10 Cap. J y NTC 1669 en edificios de alto riesgo, bodegas y centros comerciales. El cálculo hidráulico debe demostrar densidad de aplicación mínima de 0.10 gal/min/ft² en el área de operación.</p>
      <p><strong>Sistema de detección y alarma:</strong> detectores de humo, calor o gas, central de monitoreo y alarma audible y visual. Interconectado con el sistema de supresión y con los ascensores (para desactivación de emergencia).</p>
      <p><strong>Hidrantes exteriores:</strong> para uso de bomberos, instalados según NTC 2301 con separación máxima de 150 metros entre hidrantes. Requieren presión mínima de 20 psi y caudal de 500 gpm.</p>
      <h2>El proceso de diseño CI bajo BIC</h2>
      <p>Un diseño de sistemas CI completo incluye: memoria de cálculo hidráulico con EPANET para la red de distribución interna, isométrico de tuberías, planos de planta y cortes en AutoCAD con diámetros y presiones, especificaciones técnicas de equipos y materiales, y presupuesto APU.</p>
      <p>El diseño debe ser revisado y aprobado por el Cuerpo de Bomberos antes de iniciar la instalación — en muchos municipios este trámite demora 2–4 semanas. BIC entrega el diseño con todos los soportes técnicos necesarios para esa aprobación.</p>
      <h2>Caso real: Makarí Mall, Dosquebradas</h2>
      <p>BIC diseñó el sistema CI completo del Makarí Mall (Dosquebradas, 2022): red húmeda de 4.500 metros lineales de tubería en acero galvanizado, 340 rociadores automáticos, 18 gabinetes CI, sistema de detección con 280 detectores de humo y central de monitoreo, y 4 hidrantes exteriores bajo NTC 2301. Diseño aprobado por Bomberos de Dosquebradas sin observaciones.</p>
      <h2>Conclusión</h2>
      <p>El diseño de sistemas CI es una especialidad técnica que requiere dominio de la NSR-10, las NTC aplicables y el software de cálculo hidráulico. Es uno de los servicios más escasos en el Eje Cafetero — la mayoría de firmas consultoras no lo ofrecen. En BIC tenemos los proyectos ejecutados para demostrarlo.</p>
    </>
  },

  'cambios-normativos-ingenieria-hidraulica-2026': {
    title: 'Cambios Normativos en Ingeniería Hidráulica 2026: Oportunidades para Consultores y Desarrolladores',
    date: 'Febrero 2026', readTime: '7 min', category: 'Normativa',
    metaDesc: 'Análisis de actualizaciones normativas en ingeniería hidráulica Colombia 2026. Resolución 0330, RAS 2017, Decreto 1807. Impacto en proyectos y oportunidades.',
    keywords: 'normativa ingeniería hidráulica Colombia 2026, Resolución 0330 2017 actualización, RAS 2017 cambios',
    body: <>
      <p>La normativa de ingeniería hidráulica en Colombia ha tenido ajustes importantes en los últimos años que impactan directamente los proyectos de acueducto, alcantarillado, drenaje urbano y gestión del riesgo. Entender estos cambios es fundamental tanto para consultores técnicos como para desarrolladores inmobiliarios, constructoras y entidades públicas. Este artículo resume los aspectos más relevantes y sus implicaciones prácticas.</p>
      <h2>Resolución 0330 de 2017 — RAS vigente</h2>
      <p>La Resolución 0330 del Ministerio de Vivienda, que adopta el Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017), sigue siendo la norma de referencia para todos los proyectos de agua y saneamiento en Colombia. Los aspectos más exigentes que los diseñadores frecuentemente subestiman:</p>
      <ul>
        <li><strong>Presión mínima de servicio:</strong> 20 m.c.a. en cualquier punto de la red de distribución — no en la salida de la planta sino en el nodo más desfavorable de la red</li>
        <li><strong>Velocidad máxima en tuberías:</strong> 5 m/s en condiciones de emergencia; en operación normal máximo 3 m/s para evitar golpe de ariete</li>
        <li><strong>Período de diseño:</strong> 25 años para el horizonte de planificación, con proyección de población por método aritmético, geométrico y exponencial</li>
        <li><strong>Pérdidas técnicas máximas permitidas:</strong> 25% en sistemas nuevos; sistemas existentes deben reducir pérdidas progresivamente</li>
      </ul>
      <h2>Decreto 1807 de 2014 — Riesgo y licencias de urbanismo</h2>
      <p>El Decreto 1807/2014 sigue siendo el instrumento normativo que más impacto tiene en los proyectos de desarrollo urbano. Su aplicación ha generado un mercado permanente de estudios de amenaza y riesgo hídrico para licencias de urbanismo. Los aspectos clave para 2026:</p>
      <ul>
        <li>La escala mínima de los mapas de amenaza para planes parciales es 1:2000 — no se acepta 1:5000 para polígonos menores a 50 hectáreas</li>
        <li>El concepto de aptitud urbanística debe incluir medidas de mitigación con presupuesto estimado</li>
        <li>Las Curadurías de Manizales, Pereira y Armenia exigen modelación HEC-RAS 2D para áreas con amenaza media o alta</li>
      </ul>
      <h2>NSR-10 y sistemas CI — Tendencias 2026</h2>
      <p>La NSR-10 no ha tenido modificaciones mayores desde su adopción, pero la interpretación y la exigencia de los Cuerpos de Bomberos sí ha aumentado. En ciudades como Manizales y Pereira, los Bomberos están exigiendo revisión de proyectos CI antes de emitir concepto favorable a la licencia — proceso que puede tomar 3–6 semanas si el diseño tiene observaciones. Esto hace que contar con un diseño técnico sólido desde el inicio sea más importante que nunca.</p>
      <h2>Ley 1523 de 2012 — Gestión del riesgo a nivel municipal</h2>
      <p>La Ley 1523 obliga a todos los municipios de Colombia a tener un Plan Municipal de Gestión del Riesgo (PMGR) actualizado y un Consejo Municipal de Gestión del Riesgo activo. En la práctica, muchos municipios del Eje Cafetero tienen PMGR desactualizados, lo que representa una oportunidad directa para consultores especializados en riesgo hídrico.</p>
      <h2>Oportunidades para desarrolladores en 2026</h2>
      <p>El panorama normativo de 2026 crea oportunidades específicas: los municipios con POT en proceso de revisión (segunda generación en Risaralda, actualización en Caldas) necesitan estudios de riesgo hídrico como insumo técnico obligatorio. Las constructoras con planes parciales en Cerritos, Rionegro y la Sabana Norte deben tener los estudios Decreto 1807 listos antes de solicitar la licencia. BIC puede realizar estos estudios con los plazos y entregables que requiere cada proceso.</p>
      <h2>Conclusión</h2>
      <p>La normativa hidráulica en Colombia es estable pero su aplicación es cada vez más rigurosa. Los proyectos que no cumplen con RAS 2017, Decreto 1807 y NSR-10 desde el diseño enfrentan observaciones, retrasos en licencias y sobrecostos en obra. Invertir en consultoría técnica de calidad desde la prefactibilidad es la forma más eficiente de evitar estos problemas.</p>
    </>
  },
  ...articles1,
  ...articlesB,
  ...articlesC,
  ...articlesD,
  ...articlesE,
  ...articlesF,
}

// ─── SERVICE LINKS PER ARTICLE ──────────────────────────────────────────────
const SERVICE_LINKS: Record<string, { label: string; href: string }> = {
  'suds-sistemas-drenaje-sostenible-colombia':       { label: 'Estudios Hidrológicos e Hidráulicos',    href: '/servicios/estudios-hidrologicos' },
  'cambios-normativos-ingenieria-hidraulica-2026':   { label: 'Ver todos nuestros servicios',           href: '/servicios' },
  'costos-obras-hidraulicas-colombia-2026':          { label: 'Ver todos nuestros servicios',           href: '/servicios' },
  'riesgo-hidraulico-ciudades-densas':               { label: 'Estudios Hidrológicos e Hidráulicos',    href: '/servicios/estudios-hidrologicos' },
  'hec-ras-2d-colombia':                             { label: 'Modelación Hidráulica HEC-RAS 2D',       href: '/servicios/modelacion-hec-ras' },
  'proyectos-regalias-agua-saneamiento':             { label: 'Formulación MGA / Regalías SGR',         href: '/servicios/regalias-mga' },
  'nsr-10-sistemas-contra-incendios':                { label: 'Sistemas Contra Incendio NSR-10',        href: '/servicios/sistemas-contra-incendio' },
  'irca-municipio-colombia':                         { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'mga-web-regalias-agua-potable':                   { label: 'Formulación MGA / Regalías SGR',         href: '/servicios/regalias-mga' },
  'hec-ras-2d-modelacion-hidraulica-colombia':       { label: 'Modelación Hidráulica HEC-RAS 2D',       href: '/servicios/modelacion-hec-ras' },
  // articlesB
  'acueducto-rural-colombia':                        { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'ptap-colombia':                                   { label: 'PTAP y PTAR',                            href: '/servicios' },
  'redes-hidrosanitarias-colombia':                  { label: 'Redes Hidrosanitarias NSR-10',           href: '/servicios/redes-hidrosanitarias' },
  'sistemas-contra-incendio-nsr10':                  { label: 'Sistemas Contra Incendio NSR-10',        href: '/servicios/sistemas-contra-incendio' },
  'interventoria-hidraulica-colombia':               { label: 'Residencia e Interventoría',             href: '/servicios/interventoria' },
  'alcantarillado-pluvial-colombia':                 { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'epanet-colombia-acueducto':                       { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'bocatoma-lateral-colombia':                       { label: 'Diseño de Bocatomas en Colombia',        href: '/bocatomas-colombia' },
  // articlesC
  'ras-2000-colombia':                               { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'ley-1523-riesgo-colombia':                        { label: 'Gestión del Riesgo Hídrico',             href: '/gestion-riesgo-hidrico' },
  'nsr10-titulo-j-incendios-colombia':               { label: 'Sistemas Contra Incendio NSR-10',        href: '/servicios/sistemas-contra-incendio' },
  'pomca-colombia':                                  { label: 'Gestión del Riesgo Hídrico',             href: '/gestion-riesgo-hidrico' },
  'decreto-1575-agua-colombia':                      { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'licencia-ambiental-anla-colombia':                { label: 'Ingeniería Ambiental',                   href: '/servicios/ambiental' },
  'contratacion-publica-ingenieria-colombia':        { label: 'Formulación Regalías MGA-Web',           href: '/servicios/regalias-mga' },
  // articlesD
  'riesgo-inundacion-eje-cafetero':                  { label: 'Gestión del Riesgo Hídrico',             href: '/gestion-riesgo-hidrico' },
  'estabilidad-taludes-eje-cafetero':                { label: 'Gestión del Riesgo de Taludes',          href: '/gestion-riesgo-taludes-colombia' },
  'regalias-acueducto-colombia':                     { label: 'Formulación Regalías MGA-Web',           href: '/servicios/regalias-mga' },
  'caso-estudio-acueducto-rural':                    { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'plan-mejoramiento-irca-colombia':                 { label: 'Acueducto y Alcantarillado',             href: '/servicios/acueducto-alcantarillado' },
  'contratar-consultoria-hidraulica-colombia':       { label: 'Ver todos nuestros servicios',           href: '/servicios' },
  // articlesE
  'bocatoma-caudal-riego-colombia':                  { label: 'Diseño de Bocatomas y Obras Hidráulicas', href: '/servicios/obras-hidraulicas' },
  'estudio-hidrologico-decreto-1807':                { label: 'Estudios Hidrológicos e Hidráulicos',     href: '/servicios/estudios-hidrologicos' },
  'hec-ras-1d-vs-2d-colombia':                       { label: 'Modelación Hidráulica HEC-RAS',           href: '/servicios/estudios-hidrologicos' },
  'ptar-industrial-colombia':                        { label: 'Diseño de PTAR y Saneamiento',            href: '/servicios/ptar-aguas-residuales' },
  'ingeniero-hidraulico-para-mi-proyecto':           { label: 'Contratar consultoría BIC',               href: '/contacto' },
  'retiro-quebrada-construccion-colombia':            { label: 'Estudios Hidrológicos Decreto 1807',      href: '/servicios/estudios-hidrologicos' },
  'que-necesito-para-urbanizar-un-lote-colombia':    { label: 'Memorias Hidrosanitarias',                href: '/servicios/memorias-hidrosanitarias' },
  'estudios-car-corpocaldas-colombia':               { label: 'Trámites ante CAR y estudios técnicos',   href: '/servicios/estudios-hidrologicos' },
  // articlesF
  'cuanto-cuesta-estudio-hidrologico':               { label: 'Estudios Hidrológicos e Hidráulicos',     href: '/servicios/estudios-hidrologicos' },
  'requisitos-ptar-licencia-construccion':           { label: 'Diseño de Acueducto y Alcantarillado',    href: '/servicios/acueducto-alcantarillado' },
  'estudio-hidraulico-urbanizacion':                 { label: 'Memorias Hidrosanitarias',                href: '/memorias-hidrosanitarias-colombia' },
  'calcular-caudal-diseno-alcantarillado':           { label: 'Diseño de Acueducto y Alcantarillado',    href: '/servicios/acueducto-alcantarillado' },
  'diseno-ptap-municipio-costos':                    { label: 'Acueducto y Alcantarillado',               href: '/servicios/acueducto-alcantarillado' },
  'modelacion-hec-ras-colombia':                     { label: 'Modelación Hidráulica HEC-RAS 2D',         href: '/servicios/modelacion-hec-ras' },
  'plan-manejo-aguas-lluvias-colombia':              { label: 'Diseño de Acueducto y Alcantarillado',    href: '/servicios/acueducto-alcantarillado' },
  'diferencias-ptar-ptap':                           { label: 'Acueducto y Alcantarillado',               href: '/servicios/acueducto-alcantarillado' },
  'permiso-vertimientos-colombia':                   { label: 'Ingeniería Ambiental',                     href: '/servicios/ambiental' },
  'estudio-amenaza-inundacion':                      { label: 'Gestión del Riesgo Hídrico',               href: '/gestion-riesgo-hidrico' },
}

// ─── LAYOUT COMPONENTS ──────────────────────────────────────────────────────
function ArticleBody({ body }: { body: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, lineHeight: 1.85, color: '#2C3E50' }}>
      <style>{`
        .ab h2 { font-family: 'Playfair Display',serif; font-weight:700; color:#003B6F; font-size:1.4rem; margin:2rem 0 1rem; padding-bottom:.4rem; border-bottom:2px solid #EBF5F9; }
        .ab h3 { font-family: 'Montserrat',sans-serif; font-weight:700; color:#003B6F; font-size:1.05rem; margin:1.5rem 0 .6rem; }
        .ab p { margin-bottom:1.1rem; }
        .ab ul { padding-left:1.5rem; margin-bottom:1.1rem; }
        .ab li { margin-bottom:.4rem; }
        .ab strong { color:#003B6F; }
      `}</style>
      <div className="ab">{body}</div>
    </div>
  )
}

export default function BlogDetail() {
  const [, params] = useRoute('/blog/:slug')
  const slug = params?.slug || ''
  const article = ARTICLES[slug]

  // SEO configuration for the article
  const seoConfig: SEOConfig | null = article ? {
    title: `${article.title} — BIC Bernal Ingeniería Consultores`,
    description: article.metaDesc,
    keywords: article.keywords.split(', '),
    ogType: 'article',
    canonical: `https://ingenieriabernal.co/blog/${slug}`
  } : null

  useEffect(() => {
    if (article) {
      // BlogPosting JSON-LD
      const existingSchema = document.getElementById('blog-schema')
      if (existingSchema) existingSchema.remove()
      const schema = document.createElement('script')
      schema.id = 'blog-schema'
      schema.type = 'application/ld+json'
      schema.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': article.title,
        'description': article.metaDesc,
        'keywords': article.keywords,
        'url': `https://ingenieriabernal.co/blog/${slug}`,
        'datePublished': article.date,
        'dateModified': article.date,
        'inLanguage': 'es-CO',
        'author': {
          '@type': 'Person',
          '@id': 'https://ingenieriabernal.co/#rogerio',
          'name': 'Rogerio Bernal Ríos',
          'url': 'https://ingenieriabernal.co',
          'jobTitle': 'Ingeniero Civil — Especialista en Ingeniería Hidráulica y Ambiental',
        },
        'publisher': {
          '@type': 'LocalBusiness',
          '@id': 'https://ingenieriabernal.co/#firma',
          'name': 'BIC Bernal Ingeniería Consultores',
          'url': 'https://ingenieriabernal.co',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://ingenieriabernal.co/favicon.svg',
          },
        },
        'isPartOf': {
          '@type': 'Blog',
          'name': 'Blog Técnico — BIC Bernal Ingeniería Consultores',
          'url': 'https://ingenieriabernal.co/blog',
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://ingenieriabernal.co/blog/${slug}`,
        },
      })
      document.head.appendChild(schema)
    }

    return () => {
      const schema = document.getElementById('blog-schema')
      if (schema) schema.remove()
    }
  }, [article, slug])

  const title = article?.title || 'Artículo Técnico — BIC Bernal Ingeniería Consultores'
  const date = article?.date || 'Marzo 2026'
  const readTime = article?.readTime || '8 min'
  const category = article?.category || 'Ingeniería Hidráulica'

  return (
    <>
      {/* SEO Head */}
      {seoConfig && <SEOHead config={seoConfig} />}

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #002A50 0%, #003B6F 100%)', padding: '120px 40px 56px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative', maxWidth: 780 }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{category}</Tag>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{date} · {readTime} de lectura</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(20px, 3.5vw, 38px)', lineHeight: 1.2, marginBottom: 24 }}>
            {title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', border: '2px solid #17A2B8', background: 'rgba(23,162,184,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 13 }}>RB</div>
            <div>
              <p style={{ color: '#fff', fontWeight: 600, fontSize: 13, margin: 0 }}>Rogerio Bernal Ríos</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, margin: 0 }}>Director General BIC · UNAL · COPNIA 17202-313228</p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <Section bg="#fff" style={{ padding: '56px 40px' }}>
        <div className="container" style={{ maxWidth: 780 }}>
          {article
            ? <ArticleBody body={article.body} />
            : <p style={{ color: '#475569', fontSize: 15 }}>Artículo en preparación. Contáctanos para consultas sobre este tema.</p>
          }

          {/* Servicio relacionado */}
          {article && SERVICE_LINKS[slug] && (
            <div style={{ background: '#EBF5F9', borderRadius: 8, padding: '1.25rem 1.5rem', marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, margin: '0 0 2px' }}>Servicio relacionado</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, margin: 0 }}>{SERVICE_LINKS[slug].label}</p>
              </div>
              <a href={SERVICE_LINKS[slug].href} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Ver servicio →
              </a>
            </div>
          )}

          {/* Autor */}
          <div style={{ background: '#f0f7fa', borderRadius: 12, padding: '1.5rem 2rem', marginTop: '3rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', border: '2px solid #17A2B8', background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 14, flexShrink: 0 }}>RB</div>
            <div>
              <p style={{ fontWeight: 700, color: '#003B6F', margin: '0 0 3px', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Rogerio Bernal Ríos</p>
              <p style={{ color: '#17A2B8', fontSize: 11, margin: '0 0 8px' }}>Director General · BIC Bernal Ingeniería Consultores · UNAL · COPNIA 17202-313228</p>
              <p style={{ color: '#475569', fontSize: 13, margin: 0, lineHeight: 1.6 }}>10+ años de experiencia en consultoría hidráulica en Colombia, Ecuador y México. HEC-RAS 2D, NSR-10, regalías MGA-Web, gestión del riesgo hídrico y topobatimetría.</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: '#003B6F', borderRadius: 12, padding: '2rem', marginTop: '1.5rem', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontWeight: 700, fontSize: '1.2rem', margin: '0 0 10px' }}>
              ¿Necesitas consultoría técnica para tu proyecto?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, margin: '0 0 20px' }}>
              BIC opera en todo Colombia. Primera consulta sin costo. Respuesta en menos de 24 horas.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Btn href={`https://wa.me/${WA}?text=${encodeURIComponent('Hola, leí el artículo en ingenieriabernal.co y necesito consultoría técnica.')}`}>
                📱 Consultar por WhatsApp
              </Btn>
              <Btn href="/blog" variant="outline" dark>← Todos los artículos</Btn>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
