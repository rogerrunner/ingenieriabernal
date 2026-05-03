import React from 'react'
import QuoteFormInline from '../components/QuoteFormInline'

// Batch N articles — Mayo 2026 (interventoría, PTAP, POMCA, edificabilidad, RAS 2017)
const articlesN: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'interventoria-obras-hidraulicas-colombia': {
    title: 'Interventoría de obras hidráulicas en Colombia: obligaciones, costos y entregables',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Interventoría / Normativa',
    metaDesc: 'Guía completa sobre interventoría de obras hidráulicas en Colombia: qué es, obligaciones del interventor según Ley 80/93, diferencia con supervisión, entregables y rangos de costo (3–8% del valor de obra).',
    keywords: 'interventoría obras hidráulicas Colombia, interventor de obra Colombia Ley 80, interventoría acueducto alcantarillado, costo interventoría obras Colombia',
    body: <>
      <p>En todo proyecto de infraestructura hídrica financiado con recursos públicos — acueductos, alcantarillados, plantas de tratamiento, canales de riego o sistemas de drenaje — la <strong>interventoría</strong> no es opcional: es un requisito legal que protege los intereses del Estado y garantiza que las obras se ejecuten conforme al contrato, a las normas técnicas y a los plazos pactados. Sin embargo, muchos alcaldes, gerentes de ESP y funcionarios de planeación confunden interventoría con supervisión, o desconocen cuáles son los entregables mínimos exigibles. Este artículo despeja esas dudas con base en la normativa vigente.</p>

      <h2>¿Qué es la interventoría técnica de obras hidráulicas?</h2>
      <p>La interventoría es el <strong>conjunto de actividades de seguimiento, verificación y control</strong> que ejerce un tercero independiente (el interventor) sobre la ejecución de un contrato de obra. Para obras hidráulicas, eso significa vigilar que las excavaciones se realicen a las cotas correctas, que los materiales cumplan las especificaciones del RAS 2017, que los ensayos de laboratorio arrojen los resultados requeridos y que el avance físico corresponda al avance financiero.</p>
      <p>El interventor no dirige la obra — eso lo hace el contratista. El interventor <em>controla</em> que lo que se construye coincide con lo que se contrató. Es la diferencia entre el árbitro y el jugador.</p>

      <h2>Marco legal: Ley 80 de 1993 y Decreto 1082 de 2015</h2>
      <p>La <strong>Ley 80 de 1993 (Estatuto General de Contratación)</strong> establece en su artículo 32 que los contratos de consultoría incluyen los de interventoría. El artículo 83 de la misma ley — modificado por la Ley 1474 de 2011 — hace obligatoria la interventoría en todos los contratos de obra pública cuyo valor supere el 20% de la menor cuantía de la entidad.</p>
      <p>El <strong>Decreto 1082 de 2015</strong> (que compiló el Decreto 734 y demás normas reglamentarias) define las responsabilidades del interventor y establece que responde solidariamente con el contratista ante fallas constructivas cuando esas fallas pudieran haberse detectado mediante una interventoría diligente. Esta responsabilidad solidaria dura hasta cinco años después de la liquidación del contrato.</p>
      <p>Para obras de agua potable y saneamiento básico financiadas con regalías SGR, la <strong>Resolución OCAD</strong> correspondiente suele exigir interventoría externa como condición para el desembolso de los recursos.</p>

      <h2>Diferencia entre interventoría y supervisión</h2>
      <p>Confundir estos dos conceptos tiene consecuencias jurídicas y financieras:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Aspecto</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Interventoría</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Supervisión</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>¿Quién la ejerce?</td>
            <td style={{padding:'8px 12px'}}>Persona natural o jurídica externa contratada</td>
            <td style={{padding:'8px 12px'}}>Funcionario o empleado de la entidad contratante</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Base legal</td>
            <td style={{padding:'8px 12px'}}>Ley 80/93, art. 83; Ley 1474/2011</td>
            <td style={{padding:'8px 12px'}}>Ley 80/93, art. 84; D. 1082/2015</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Responsabilidad</td>
            <td style={{padding:'8px 12px'}}>Solidaria con el contratista (civil y disciplinaria)</td>
            <td style={{padding:'8px 12px'}}>Disciplinaria y fiscal del funcionario público</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Cuándo es obligatoria</td>
            <td style={{padding:'8px 12px'}}>&gt; 20% menor cuantía o contratos complejos</td>
            <td style={{padding:'8px 12px'}}>Siempre, como mínimo, en cualquier contrato</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Independencia</td>
            <td style={{padding:'8px 12px'}}>Alta — contrato separado con entidad diferente</td>
            <td style={{padding:'8px 12px'}}>Media — depende orgánicamente de la entidad</td>
          </tr>
        </tbody>
      </table>
      <p>La regla práctica: si la obra es de cierta envergadura (un acueducto veredal de $800M en adelante), contratar una interventoría externa protege a la entidad contratante de señalamientos posteriores de la Contraloría.</p>

      <h2>Obligaciones del interventor de obras hidráulicas</h2>
      <p>Un interventor diligente en proyectos de acueducto, alcantarillado o sistemas de tratamiento debe cumplir, como mínimo, las siguientes obligaciones:</p>
      <ul>
        <li><strong>Verificar replanteo topográfico:</strong> confirmar que las cotas y trazados coinciden con los planos de diseño antes de iniciar excavaciones.</li>
        <li><strong>Controlar calidad de materiales:</strong> exigir fichas técnicas, certificados de ensayos de laboratorio para tubería PVC o HDPE (ensayo de presión hidrostática, rigidez anular), concretos (resistencia a los 28 días) y acero de refuerzo.</li>
        <li><strong>Vigilar pruebas hidráulicas:</strong> supervisar pruebas de presión en redes de acueducto (mínimo 1.5 veces la presión de trabajo durante 2 horas) y pruebas de infiltración/exfiltración en alcantarillado.</li>
        <li><strong>Control presupuestal:</strong> revisar actas de avance de obra, aprobación de cantidades ejecutadas y verificación de precios unitarios pactados.</li>
        <li><strong>Acta de vecindad:</strong> documentar el estado previo de predios e infraestructura aledaña antes de iniciar trabajos, para evitar reclamaciones posteriores.</li>
        <li><strong>Informes periódicos:</strong> elaborar informes semanales o quincenales según lo exija el contrato, con registro fotográfico, avance físico vs. financiero y alertas sobre desviaciones.</li>
        <li><strong>Control ambiental y social:</strong> verificar que el contratista cumpla con el Plan de Manejo Ambiental (PMA) y con las medidas de señalización y manejo de tráfico.</li>
        <li><strong>Acta de liquidación:</strong> suscribir el acta de recibo final una vez verificado que la obra cumple con los planos record (as-built) y las pruebas de funcionamiento.</li>
      </ul>

      <h2>Entregables típicos de una interventoría hidráulica</h2>
      <p>El contrato de interventoría debe especificar claramente qué documentos debe producir el interventor. Los entregables estándar incluyen:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Entregable</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Periodicidad</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Contenido mínimo</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Informe de inicio</td>
            <td style={{padding:'8px 12px'}}>Única vez</td>
            <td style={{padding:'8px 12px'}}>Verificación de permisos, pólizas, personal y equipos</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Informe de avance</td>
            <td style={{padding:'8px 12px'}}>Semanal o quincenal</td>
            <td style={{padding:'8px 12px'}}>% avance físico/financiero, fotos, no conformidades</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Acta de vecindad</td>
            <td style={{padding:'8px 12px'}}>Antes del inicio</td>
            <td style={{padding:'8px 12px'}}>Estado de predios aledaños con registro fotográfico</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Actas de recibo parcial</td>
            <td style={{padding:'8px 12px'}}>Según avances</td>
            <td style={{padding:'8px 12px'}}>Cantidades verificadas, aprobación de pago parcial</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Informe final</td>
            <td style={{padding:'8px 12px'}}>Al concluir la obra</td>
            <td style={{padding:'8px 12px'}}>Resumen total, no conformidades resueltas, planos as-built</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Acta de liquidación</td>
            <td style={{padding:'8px 12px'}}>Al cierre del contrato</td>
            <td style={{padding:'8px 12px'}}>Balance económico final, paz y salvo de garantías</td>
          </tr>
        </tbody>
      </table>

      <h2>¿Cuánto cuesta la interventoría de una obra hidráulica?</h2>
      <p>El honorario de interventoría se expresa usualmente como un porcentaje del valor del contrato de obra vigilado. Los rangos habituales en Colombia para obras de acueducto y alcantarillado son:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Valor de la obra</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>% interventoría típico</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Observación</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Hasta $500M COP</td>
            <td style={{padding:'8px 12px'}}>6–8%</td>
            <td style={{padding:'8px 12px'}}>Proyectos veredales, alto esfuerzo relativo</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>$500M – $2.000M COP</td>
            <td style={{padding:'8px 12px'}}>4–6%</td>
            <td style={{padding:'8px 12px'}}>Acueductos municipales medianos</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>$2.000M – $10.000M COP</td>
            <td style={{padding:'8px 12px'}}>3–5%</td>
            <td style={{padding:'8px 12px'}}>Obras de mayor complejidad y plazo</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Más de $10.000M COP</td>
            <td style={{padding:'8px 12px'}}>3–4%</td>
            <td style={{padding:'8px 12px'}}>Economías de escala, equipo amplio</td>
          </tr>
        </tbody>
      </table>
      <p>Estos porcentajes incluyen el equipo profesional (residente, especialista hidráulico, laboratorista), los desplazamientos, los ensayos de laboratorio necesarios y la elaboración de todos los informes. Costos adicionales como ensayos especiales (CCTV de tuberías, calicatas de inspección) pueden pactarse por separado.</p>

      <h2>Errores frecuentes que la interventoría debe prevenir</h2>
      <ul>
        <li>Uso de tubería PVC sin clase de presión adecuada para la zona de baja presión del sistema.</li>
        <li>Compactación insuficiente del relleno en zanjas, que genera asentamientos diferenciales.</li>
        <li>Falta de anclajes en cambios de dirección en redes de presión.</li>
        <li>Plantas de tratamiento entregadas sin pruebas de arranque con agua real.</li>
        <li>Obras sin planos record actualizados, lo que impide operación y mantenimiento posterior.</li>
      </ul>

      <h2>Conclusión</h2>
      <p>La interventoría no es un gasto burocrático: es la principal defensa técnica y jurídica de la entidad que invierte en infraestructura hídrica. Una interventoría bien ejecutada previene reprocesos costosos, detecta deficiencias antes de que se conviertan en fallas de servicio y genera la trazabilidad documental que exige la Contraloría. El costo del 3 al 8% del valor de obra es una inversión que protege el 100% restante.</p>

      <QuoteFormInline serviceId="interventoria" />
    </>
  },

  'presupuesto-diseno-ptap-veredal-colombia-2026': {
    title: '¿Cuánto cuesta el diseño de una PTAP veredal en Colombia? (2026)',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'PTAP / Costos',
    metaDesc: 'Rangos de precio reales para diseño de PTAP veredal en Colombia 2026. Qué factores determinan el costo, tabla por capacidad (500–2000 personas), qué incluye el diseño completo y fondos disponibles SGR y MinVivienda.',
    keywords: 'cuánto cuesta diseño PTAP veredal Colombia, precio diseño planta tratamiento agua potable rural, costo PTAP rural Colombia 2026',
    body: <>
      <p>Una de las preguntas más frecuentes que reciben los consultores de ingeniería hidráulica en Colombia es: <em>"¿Cuánto vale el diseño de una planta de tratamiento de agua potable para nuestra vereda?"</em> La respuesta honesta es que el precio varía enormemente — desde $12 millones hasta más de $60 millones de pesos — dependiendo de factores que muchos proponentes desconocen. Este artículo explica esos factores y entrega rangos reales basados en proyectos ejecutados en el Eje Cafetero y otras regiones de Colombia.</p>

      <h2>¿Por qué varía tanto el costo del diseño de una PTAP veredal?</h2>
      <p>El diseño de una Planta de Tratamiento de Agua Potable (PTAP) para zonas rurales no es un producto estándar. Cada proyecto parte de condiciones particulares que aumentan o reducen el trabajo del ingeniero consultor:</p>
      <ul>
        <li><strong>Caudal de diseño:</strong> una PTAP para 500 personas exige un caudal de diseño de aproximadamente 0,5 L/s, mientras que una para 2.000 personas puede requerir 2,0 L/s o más. Mayor caudal implica mayor complejidad hidráulica y estructuras de mayor tamaño.</li>
        <li><strong>Tecnología de tratamiento:</strong> no es lo mismo diseñar un sistema convencional de coagulación-floculación-sedimentación-filtración que una planta de filtración lenta en arena (FLA) o un sistema de filtros gruesos dinámicos (FGDi). Las tecnologías más complejas demandan más memorias de cálculo y mayor especificidad en los planos.</li>
        <li><strong>Calidad del agua cruda:</strong> si el análisis fisicoquímico y microbiológico del agua de la fuente arroja parámetros fuera de los rangos típicos (turbidez muy alta, presencia de hierro o manganeso, contaminación bacteriológica severa), el diseño debe incluir etapas adicionales de tratamiento.</li>
        <li><strong>Topografía del terreno:</strong> un lote plano con acceso vehicular facilita la implantación. Un terreno con pendientes pronunciadas en zona de ladera obliga a estudios geotécnicos adicionales y a diseños estructurales más elaborados.</li>
        <li><strong>Acceso y logística:</strong> proyectos en zonas de difícil acceso (sin carretera destapada, a varias horas de caminata) encarecen los reconocimientos de campo y las visitas de seguimiento.</li>
        <li><strong>Exigencias del financiador:</strong> los proyectos que se presentan ante el SGR o ante el programa Agua para la Prosperidad de MinVivienda deben cumplir requisitos documentales adicionales (Ficha EBI, MGA, conceptos de viabilidad CAR) que aumentan el alcance del consultor.</li>
      </ul>

      <h2>Tabla de rangos de precio por capacidad (2026)</h2>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Población a servir</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Caudal aprox.</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Rango precio diseño (COP)</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Condición</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>200–500 personas</td>
            <td style={{padding:'8px 12px'}}>0,2–0,5 L/s</td>
            <td style={{padding:'8px 12px'}}>$15M – $25M</td>
            <td style={{padding:'8px 12px'}}>Tecnología FLA o FGDi, acceso normal</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>500–1.000 personas</td>
            <td style={{padding:'8px 12px'}}>0,5–1,0 L/s</td>
            <td style={{padding:'8px 12px'}}>$25M – $45M</td>
            <td style={{padding:'8px 12px'}}>Sistema convencional o FLA, con análisis de agua</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>1.000–2.000 personas</td>
            <td style={{padding:'8px 12px'}}>1,0–2,0 L/s</td>
            <td style={{padding:'8px 12px'}}>$40M – $70M</td>
            <td style={{padding:'8px 12px'}}>Convencional, incluye diseño estructural detallado</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Más de 2.000 personas</td>
            <td style={{padding:'8px 12px'}}>&gt; 2,0 L/s</td>
            <td style={{padding:'8px 12px'}}>Consultar</td>
            <td style={{padding:'8px 12px'}}>Diseño a medida, varía por tecnología y alcance SGR</td>
          </tr>
        </tbody>
      </table>
      <p><em>Nota: Los rangos corresponden a diseños completos con análisis de agua cruda, topografía básica y documentación para presentación ante CAR o ente financiador. Proyectos en zonas de difícil acceso o con requerimientos especiales pueden superar estos rangos.</em></p>

      <h2>¿Qué incluye un diseño completo de PTAP veredal?</h2>
      <p>Un diseño completo — apto para ser usado como soporte de una licitación de obra — debe contener al menos los siguientes componentes:</p>
      <ul>
        <li><strong>Memorias hidráulicas:</strong> cálculo del caudal de diseño (QMD, QMMD y QMH según RAS 2017 Título B), dimensionamiento hidráulico de cada unidad de tratamiento (cámara de mezcla rápida, floculadores, sedimentador, filtros, desinfección), cálculo de pérdidas de carga y perfil hidráulico de la planta.</li>
        <li><strong>Diseño estructural:</strong> memorias de cálculo estructural de las estructuras en concreto reforzado (tanques, canales, cajas), conforme a NSR-10. Muchos diseños veredales omiten este componente y eso impide obtener licencia de construcción.</li>
        <li><strong>Planos completos:</strong> planta general, plantas y cortes de cada unidad, detalles de tuberías y accesorios, esquema isométrico del proceso, planos de instalaciones eléctricas y de control.</li>
        <li><strong>Especificaciones técnicas:</strong> descripción detallada de materiales, métodos constructivos y pruebas de aceptación para cada actividad de obra.</li>
        <li><strong>Análisis de precios unitarios (APU):</strong> desglose del costo de cada ítem de obra con mano de obra, materiales, equipos y AIU. Es indispensable para la presupuestación del proyecto.</li>
        <li><strong>Presupuesto oficial de obra:</strong> estimativo total con el costo de la PTAP construida, necesario para la formulación MGA en proyectos SGR.</li>
        <li><strong>Manual de operación y mantenimiento:</strong> instrucciones para el operador de la planta, frecuencias de limpieza, dosificación de productos químicos y protocolo de muestreo para IRCA.</li>
      </ul>

      <h2>Fondos disponibles para financiar PTAP veredales</h2>
      <p>El diseño es solo la primera inversión — la obra puede financiarse con varios mecanismos:</p>
      <ul>
        <li><strong>Sistema General de Regalías (SGR):</strong> a través de los OCAD municipales y departamentales. El proyecto debe formularse en MGA Web y contar con viabilidad técnica y ambiental. El diseño previo es requisito obligatorio para la presentación.</li>
        <li><strong>Agua para la Prosperidad — MinVivienda:</strong> programa que cofinancia proyectos de agua potable en municipios de categoría 4, 5 y 6. Exige estudios y diseños completos como parte del paquete de elegibilidad.</li>
        <li><strong>Sistema General de Participaciones (SGP) — Agua Potable:</strong> los municipios pueden destinar recursos del SGP Sector Agua a estudios y obras en zonas rurales.</li>
        <li><strong>Recursos propios del municipio o la JAC:</strong> para proyectos de menor escala, las juntas de acción comunal con personería jurídica pueden contratar directamente el diseño y la obra.</li>
      </ul>

      <h2>Proceso para contratar un diseño de PTAP veredal</h2>
      <p>La secuencia recomendada para avanzar desde la necesidad hasta tener el diseño en mano es:</p>
      <ol>
        <li>Realizar aforo de la fuente hídrica y análisis de calidad del agua cruda.</li>
        <li>Elaborar el censo de la población a servir y proyección a 25 años.</li>
        <li>Contratar el levantamiento topográfico del área donde se ubicará la planta.</li>
        <li>Solicitar cotizaciones a mínimo tres firmas consultoras con experiencia demostrada en PTAP rurales.</li>
        <li>Evaluar la propuesta técnica (metodología, equipo profesional) junto con el precio.</li>
        <li>Firmar contrato con actas de entrega parcial bien definidas.</li>
      </ol>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />
    </>
  },

  'modelacion-hidraulica-pomca-colombia': {
    title: 'Modelación hidráulica en POMCA: qué exige la normativa y cómo se hace',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Hidráulica / POMCA',
    metaDesc: 'Qué modelación hidráulica exige un POMCA en Colombia: Decreto 1640/2012, herramientas HEC-HMS y HEC-RAS, mapas de amenaza por inundación (TR 2.33, 10, 100 años) y entregables para las CAR.',
    keywords: 'modelación hidráulica POMCA Colombia, HEC-RAS POMCA zonificación ambiental, mapas amenaza inundación POMCA Colombia',
    body: <>
      <p>El <strong>Plan de Ordenación y Manejo de Cuenca Hidrográfica (POMCA)</strong> es el instrumento de planificación ambiental de mayor jerarquía para el manejo del agua en Colombia. Su formulación exige una componente técnica robusta: la <strong>modelación hidráulica</strong> que permite determinar cuáles zonas de la cuenca están en amenaza por inundación, en qué grado y con qué frecuencia. Entender qué modelos se usan, cómo se integran al POMCA y qué exigen las Corporaciones Autónomas Regionales (CAR) es fundamental para los consultores, alcaldías y gestores ambientales que participan en estos procesos.</p>

      <h2>Marco normativo del POMCA</h2>
      <p>El <strong>Decreto 1076 de 2015</strong> (que compiló el Decreto 1640 de 2012) regula la formulación y actualización de los POMCA. En su artículo 2.2.3.1.5.3 establece que la fase de diagnóstico debe incluir la caracterización hidrológica e hidráulica de la cuenca, con identificación de áreas en riesgo de inundación. La <strong>Resolución 0421 de 2014 del MADS (Ministerio de Ambiente y Desarrollo Sostenible)</strong> precisa que los POMCA deben generar mapas de amenaza hidrológica para períodos de retorno de al menos 10 y 100 años, con metodologías validadas científicamente.</p>
      <p>Adicionalmente, la <strong>Guía Técnica para la Formulación de los POMCA</strong> publicada por el MADS y el IDEAM establece los estándares mínimos de calidad para la modelación hidrológica e hidráulica, incluyendo requisitos de datos de entrada, calibración de modelos y formatos de entregables.</p>

      <h2>Tipos de modelos utilizados en un POMCA</h2>
      <h3>Modelación hidrológica: HEC-HMS</h3>
      <p>El modelo <strong>HEC-HMS (Hydrologic Modeling System)</strong> del Cuerpo de Ingenieros del Ejército de Estados Unidos es el estándar de facto en Colombia para la modelación hidrológica de cuencas. En el contexto de un POMCA, HEC-HMS permite:</p>
      <ul>
        <li>Transformar la lluvia en escorrentía utilizando el método del Número de Curva (CN) del SCS o el método de Green-Ampt.</li>
        <li>Calcular hidrogramas de diseño para diferentes períodos de retorno (TR): 2.33 años (caudal medio anual), 10, 25, 50 y 100 años.</li>
        <li>Modelar el tránsito de crecientes a través de embalses o tramos de cauce mediante el método de Muskingum-Cunge.</li>
        <li>Analizar el efecto de cambios en el uso del suelo (deforestación, urbanización) sobre el régimen de caudales.</li>
      </ul>

      <h3>Modelación hidráulica: HEC-RAS</h3>
      <p>Los hidrogramas generados por HEC-HMS se convierten en el dato de entrada del modelo hidráulico <strong>HEC-RAS (River Analysis System)</strong>, que simula cómo fluye el agua a lo largo del cauce y calcula las llanuras de inundación. Para POMCA, generalmente se utiliza HEC-RAS en modalidad 2D (bidimensional), que ofrece mayor precisión en la delimitación de áreas inundadas en llanuras amplias y zonas urbanas.</p>
      <p>La modelación HEC-RAS para un POMCA requiere:</p>
      <ul>
        <li><strong>Modelo digital de terreno (MDT):</strong> preferiblemente obtenido por LiDAR con resolución de 0,5–1,0 m. En zonas sin LiDAR se acepta MDT de 5–10 m derivado de imágenes de satélite, con el correspondiente análisis de incertidumbre.</li>
        <li><strong>Batimetría de cauces:</strong> levantamiento de secciones transversales del cauce principal y caños tributarios, especialmente en zonas urbanas y de alta exposición.</li>
        <li><strong>Coeficientes de rugosidad (Manning):</strong> calibrados con eventos históricos medidos por el IDEAM o las CAR.</li>
        <li><strong>Condiciones de borde:</strong> caudales de entrada obtenidos de HEC-HMS para cada período de retorno.</li>
      </ul>

      <h2>Integración de la modelación en el diagnóstico y zonificación del POMCA</h2>
      <p>La modelación hidráulica alimenta directamente dos fases del POMCA:</p>
      <p><strong>1. Diagnóstico:</strong> se identifican las zonas históricamente afectadas por inundaciones, se contrastan con los resultados de la modelación y se genera el <em>mapa de amenaza base</em> de la cuenca. Este diagnóstico considera también los eventos extremos registrados (inundaciones históricas, reportes del FNGRD) para validar los resultados del modelo.</p>
      <p><strong>2. Zonificación ambiental:</strong> los mapas de amenaza hidrológica (inundación lenta, inundación súbita y avenida torrencial) se cruzan con los mapas de vulnerabilidad (densidad poblacional, infraestructura expuesta, capacidad adaptativa) para generar el mapa de <em>riesgo hidrológico integrado</em> de la cuenca. Este mapa es vinculante para los POT municipales de los municipios dentro del área de la cuenca.</p>

      <h2>Mapas de amenaza por inundación: períodos de retorno</h2>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Período de retorno</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Probabilidad anual</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Uso en POMCA</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>TR = 2,33 años</td>
            <td style={{padding:'8px 12px'}}>43%</td>
            <td style={{padding:'8px 12px'}}>Caudal dominante (moldea el cauce activo)</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>TR = 10 años</td>
            <td style={{padding:'8px 12px'}}>10%</td>
            <td style={{padding:'8px 12px'}}>Amenaza media — define ronda hídrica mínima</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>TR = 25 años</td>
            <td style={{padding:'8px 12px'}}>4%</td>
            <td style={{padding:'8px 12px'}}>Complementario para zonificación</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>TR = 100 años</td>
            <td style={{padding:'8px 12px'}}>1%</td>
            <td style={{padding:'8px 12px'}}>Amenaza alta — determina zonas de exclusión o restricción</td>
          </tr>
        </tbody>
      </table>

      <h2>Entregables que exigen las CAR para la componente hidráulica</h2>
      <p>Aunque cada CAR tiene sus propios términos de referencia, los entregables mínimos aceptados por la mayoría para la componente hidráulica de un POMCA son:</p>
      <ul>
        <li>Informe técnico de modelación hidrológica con archivos HEC-HMS (.hms, .met, .control) para verificación.</li>
        <li>Informe de calibración del modelo hidráulico con al menos un evento histórico documentado.</li>
        <li>Archivos de proyecto HEC-RAS (.prj, .g*, .f*, .p*) para revisión de la CAR.</li>
        <li>Mapas de inundación en formato shapefile o GeoTIFF para cada período de retorno (TR 10, 25, 50 y 100 años), referenciados en el sistema oficial MAGNA-SIRGAS.</li>
        <li>Memoria metodológica que justifique la elección de parámetros y la fuente de datos hidrometeorológicos.</li>
        <li>Análisis de incertidumbre del modelo, especialmente cuando no hay datos de aforo para calibración.</li>
      </ul>

      <h2>Retos comunes en la modelación hidráulica para POMCA</h2>
      <p>La experiencia en proyectos POMCA en el Eje Cafetero y la región Andina revela varios retos recurrentes:</p>
      <ul>
        <li><strong>Escasez de datos hidrométricos:</strong> muchas cuencas no tienen estaciones de aforo operativas. La solución es calibrar con eventos históricos documentados fotográficamente o con marcas de inundación en estructuras.</li>
        <li><strong>MDT de baja resolución:</strong> en zonas sin cobertura LiDAR, la delimitación de llanuras de inundación tiene alta incertidumbre. Es necesario documentar esta limitación y proponer la adquisición futura de LiDAR.</li>
        <li><strong>Cauces con obstrucciones:</strong> puentes, alcantarillas y obras de encauzamiento crean discontinuidades hidráulicas que requieren modelación detallada de estructuras en HEC-RAS.</li>
        <li><strong>Cambio de uso del suelo:</strong> la deforestación reciente modifica los coeficientes CN del HEC-HMS. Los modelos deben usar imágenes de uso del suelo recientes (no anteriores a 5 años).</li>
      </ul>

      <QuoteFormInline serviceId="modelacion-hec-ras" />
    </>
  },

  'indice-edificabilidad-colombia-calculo-ejemplo': {
    title: 'Índice de edificabilidad básico en Colombia: definición, fórmula y ejemplo de cálculo',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Urbanismo / POT',
    metaDesc: 'Qué es el índice de edificabilidad básico en Colombia según la Ley 388/1997 y el POT, fórmula de cálculo, diferencia entre IE básico, máximo y en altura, ejemplo para Manizales y qué hacer si el proyecto lo supera.',
    keywords: 'índice de edificabilidad básico Colombia, índice edificabilidad POT Colombia, calcular índice edificabilidad lote Colombia',
    body: <>
      <p>Si usted está pensando en construir o desarrollar un lote en Colombia, uno de los primeros parámetros que debe verificar en el Plan de Ordenamiento Territorial (POT) del municipio es el <strong>índice de edificabilidad</strong>. Este indicador determina cuánta área construida puede levantarse sobre un predio y es, junto con el índice de ocupación, el parámetro urbanístico que más condiciona la viabilidad de un proyecto inmobiliario. Entenderlo correctamente puede ser la diferencia entre un proyecto rentable y una licencia de construcción negada.</p>

      <h2>Definición legal: Ley 388 de 1997 y POT</h2>
      <p>La <strong>Ley 388 de 1997 (Ley de Desarrollo Territorial)</strong> establece el ordenamiento territorial como un conjunto de acciones político-administrativas que orientan el desarrollo físico del territorio. Su artículo 15 define los <em>tratamientos urbanísticos</em> y permite a los municipios regular la intensidad de uso del suelo mediante índices de edificabilidad.</p>
      <p>El Decreto 1077 de 2015 (que compiló el Decreto 1469 de 2010 sobre licencias urbanísticas) precisa que el índice de edificabilidad es una norma urbanística de carácter estructural que los POT deben definir para cada zona o tratamiento del suelo. En la práctica, el IE básico aparece en las fichas normativas del POT para cada polígono de tratamiento urbanístico.</p>

      <h2>Fórmula del índice de edificabilidad</h2>
      <p>El índice de edificabilidad (IE) se calcula de la siguiente manera:</p>
      <div style={{background:'#EBF5F9',borderLeft:'4px solid #17A2B8',padding:'1rem 1.5rem',borderRadius:4,margin:'1rem 0',fontFamily:'monospace',fontSize:15}}>
        <strong>IE = Área construida total (m²) / Área del predio (m²)</strong>
      </div>
      <p>Donde el <em>área construida total</em> es la suma de todas las plantas del edificio (incluidas plantas de parqueaderos si están sobre el nivel de terreno), descontando las áreas no computables que el POT defina (como sótanos o terrazas abiertas según la normativa local).</p>
      <p>Por ejemplo: si un predio de 500 m² tiene un IE básico de 3,0, el proyecto puede tener hasta 1.500 m² de área construida computada.</p>

      <h2>Diferencia entre índice básico, máximo e índice en altura</h2>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Tipo</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Definición</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>¿Requiere trámite adicional?</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>IE básico</td>
            <td style={{padding:'8px 12px'}}>Aprovechamiento que puede obtenerse por derecho propio, sin cesión adicional</td>
            <td style={{padding:'8px 12px'}}>No — se obtiene con licencia de construcción ordinaria</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>IE máximo</td>
            <td style={{padding:'8px 12px'}}>Aprovechamiento máximo permitido por el POT, condicionado a cesiones o cargas</td>
            <td style={{padding:'8px 12px'}}>Sí — requiere plan parcial o compensación urbanística</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Índice en altura (pisos)</td>
            <td style={{padding:'8px 12px'}}>Número máximo de pisos sobre el nivel del terreno</td>
            <td style={{padding:'8px 12px'}}>Complementario al IE — puede ser más restrictivo</td>
          </tr>
        </tbody>
      </table>
      <p>La diferencia entre el IE básico y el IE máximo define el <em>potencial de edificabilidad adicional</em> que puede obtenerse mediante mecanismos de reparto equitativo de cargas y beneficios — típicamente a través de un plan parcial.</p>

      <h2>Ejemplo de cálculo para un lote en suelo urbano en Manizales</h2>
      <p>Suponga un lote de <strong>500 m²</strong> ubicado en un polígono de tratamiento de <em>Consolidación con Densificación Moderada</em> en Manizales, con los siguientes parámetros urbanísticos según el POT vigente:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Parámetro</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Área del predio</td>
            <td style={{padding:'8px 12px'}}>500 m²</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Índice de ocupación (IO)</td>
            <td style={{padding:'8px 12px'}}>0,60 → área de planta primer piso = 300 m²</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>IE básico</td>
            <td style={{padding:'8px 12px'}}>2,4</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>IE máximo</td>
            <td style={{padding:'8px 12px'}}>3,6</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Altura máxima</td>
            <td style={{padding:'8px 12px'}}>6 pisos</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Cálculo del área máxima construida con IE básico:</strong></p>
      <div style={{background:'#EBF5F9',borderLeft:'4px solid #17A2B8',padding:'1rem 1.5rem',borderRadius:4,margin:'1rem 0',fontFamily:'monospace',fontSize:15}}>
        Área construida máxima (IE básico) = 2,4 × 500 m² = <strong>1.200 m²</strong><br/>
        Con un área de planta de 300 m²: número de pisos necesarios = 1.200 / 300 = <strong>4 pisos</strong>
      </div>
      <p>Este proyecto (4 pisos, 1.200 m² construidos) cumple con el IE básico y la altura máxima, por lo que puede tramitar licencia de construcción directamente sin plan parcial.</p>

      <h2>¿Qué pasa si el proyecto supera el IE básico?</h2>
      <p>Si la propuesta arquitectónica supera el IE básico pero está por debajo del IE máximo, el promotor tiene dos opciones principales:</p>
      <ul>
        <li><strong>Plan parcial obligatorio:</strong> cuando se trata de suelo de expansión urbana o cuando el POT así lo exige expresamente, se debe formular un plan parcial que incluya el reparto equitativo de cargas y beneficios. El plan parcial define la distribución de cesiones (vías, parques, equipamientos) entre los propietarios del polígono.</li>
        <li><strong>Compensación urbanística o transferencia de derechos de construcción:</strong> algunos POT permiten pagar una compensación económica para acceder al IE adicional sin plan parcial, siempre que el predio cumpla con los demás parámetros urbanísticos.</li>
      </ul>
      <p>Si el proyecto supera el IE máximo, no hay mecanismo ordinario que lo permita — se requiere una modificación del POT, lo que implica un proceso de concertación con la CAR y el Consejo Territorial de Planeación.</p>

      <h2>Cómo afecta el IE a la licencia de construcción</h2>
      <p>El curador urbano o la autoridad de licencias verifica el cumplimiento del IE como parte de la revisión de viabilidad urbanística. Los planos arquitectónicos deben incluir el cuadro de áreas con el cálculo explícito del IE del proyecto. Si el IE calculado supera el básico y no hay plan parcial aprobado, la licencia será negada.</p>
      <p>Por eso, antes de contratar el diseño arquitectónico, el primer paso es verificar los parámetros urbanísticos del lote en la ficha normativa del POT, que se puede consultar en la Secretaría de Planeación del municipio o, en muchos casos, en las plataformas de datos abiertos como el geoportal de Manizales.</p>

      <QuoteFormInline serviceId="plan-parcial" />
    </>
  },

  'normas-tecnicas-diseno-acueductos-colombia-ras-2017': {
    title: 'Normas técnicas para diseño de acueductos en Colombia: RAS 2017 y otras referencias',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Acueductos / Normativa',
    metaDesc: 'Resumen del RAS 2017 Título B para diseño de acueductos en Colombia: qué regula, niveles de complejidad, dotaciones, coeficientes de variación, presiones y diferencias con el RAS 2000. Incluye otras normas aplicables.',
    keywords: 'normas técnicas diseño acueductos Colombia RAS 2017, RAS 2017 Título B acueductos Colombia, Resolución 0330 diseño acueducto',
    body: <>
      <p>En Colombia, el diseño de sistemas de acueducto no puede hacerse de manera empírica ni basarse únicamente en el criterio del ingeniero. Existe un <strong>marco normativo técnico obligatorio</strong> que define los parámetros mínimos de diseño, los niveles de servicio exigibles y los estándares de calidad de los materiales. El centro de ese marco es el <strong>RAS 2017 (Resolución 0330 de 2017 del Ministerio de Vivienda)</strong>, pero no es la única norma que aplica. Este artículo resume lo que todo diseñador de acueductos en Colombia debe conocer.</p>

      <h2>¿Qué es el RAS 2017 y qué regula?</h2>
      <p>El <strong>Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico — RAS 2017</strong>, adoptado mediante la <strong>Resolución 0330 del 8 de junio de 2017</strong> del Ministerio de Vivienda, Ciudad y Territorio, es el documento técnico que establece los requisitos mínimos que deben cumplir los proyectos de infraestructura de agua potable y saneamiento básico en Colombia.</p>
      <p>El <strong>Título B</strong> del RAS 2017 corresponde específicamente a los <em>sistemas de acueducto</em> y regula:</p>
      <ul>
        <li>Criterios generales de diseño (período de diseño, nivel de complejidad, dotaciones netas y brutas).</li>
        <li>Diseño hidráulico de fuentes de abastecimiento y obras de captación.</li>
        <li>Sistemas de conducción (tuberías, canales, sifones).</li>
        <li>Plantas de tratamiento de agua potable (PTAP).</li>
        <li>Redes de distribución y almacenamiento.</li>
        <li>Conexiones domiciliarias y medición de consumos.</li>
      </ul>

      <h2>Clasificación por nivel de complejidad del sistema</h2>
      <p>Una de las principales innovaciones del RAS respecto a normativas anteriores es la clasificación del sistema según el <strong>nivel de complejidad</strong>, que determina los parámetros de diseño aplicables:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Nivel de complejidad</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Población (habitantes)</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Capacidad económica</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Bajo</td>
            <td style={{padding:'8px 12px'}}>&lt; 2.500</td>
            <td style={{padding:'8px 12px'}}>Baja</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Medio</td>
            <td style={{padding:'8px 12px'}}>2.500 – 12.500</td>
            <td style={{padding:'8px 12px'}}>Baja</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Medio alto</td>
            <td style={{padding:'8px 12px'}}>12.500 – 60.000</td>
            <td style={{padding:'8px 12px'}}>Media</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Alto</td>
            <td style={{padding:'8px 12px'}}>&gt; 60.000</td>
            <td style={{padding:'8px 12px'}}>Alta</td>
          </tr>
        </tbody>
      </table>
      <p>El nivel de complejidad del sistema define directamente los parámetros de diseño: a mayor complejidad, mayor dotación neta permitida, coeficientes más conservadores y período de diseño más largo.</p>

      <h2>Parámetros clave del RAS 2017 Título B</h2>
      <h3>Dotación neta según nivel de complejidad</h3>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Nivel</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Dotación neta mínima (L/hab·día)</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Dotación neta máxima (L/hab·día)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Bajo</td>
            <td style={{padding:'8px 12px'}}>100</td>
            <td style={{padding:'8px 12px'}}>150</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Medio</td>
            <td style={{padding:'8px 12px'}}>120</td>
            <td style={{padding:'8px 12px'}}>175</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Medio alto</td>
            <td style={{padding:'8px 12px'}}>130</td>
            <td style={{padding:'8px 12px'}}>200</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Alto</td>
            <td style={{padding:'8px 12px'}}>150</td>
            <td style={{padding:'8px 12px'}}>250</td>
          </tr>
        </tbody>
      </table>

      <h3>Coeficientes de variación de consumo</h3>
      <p>Sobre la dotación media diaria (QMD) se aplican los siguientes coeficientes para obtener los caudales de diseño:</p>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Coeficiente</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Nivel bajo</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Nivel medio</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Nivel medio alto / alto</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>K₁ (día máximo / QMD)</td>
            <td style={{padding:'8px 12px'}}>1,30</td>
            <td style={{padding:'8px 12px'}}>1,30</td>
            <td style={{padding:'8px 12px'}}>1,20</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>K₂ (hora máxima / QMMD)</td>
            <td style={{padding:'8px 12px'}}>1,60</td>
            <td style={{padding:'8px 12px'}}>1,50</td>
            <td style={{padding:'8px 12px'}}>1,40</td>
          </tr>
        </tbody>
      </table>
      <p>Estos coeficientes pueden ajustarse cuando se dispone de curvas de consumo medido con medidores totalizadores. El RAS 2017 permite usar valores propios si están debidamente soportados con datos estadísticos.</p>

      <h3>Presiones en la red de distribución</h3>
      <p>El RAS 2017 establece que la presión en cualquier punto de la red de distribución debe estar dentro del siguiente rango:</p>
      <ul>
        <li><strong>Presión mínima de servicio:</strong> 10 m.c.a. (metros de columna de agua) en el punto de conexión domiciliaria más desfavorable.</li>
        <li><strong>Presión máxima de servicio:</strong> 60 m.c.a. — por encima de este valor deben instalarse válvulas reductoras de presión.</li>
      </ul>
      <p>Para zonas con topografía pronunciada (frecuentes en el Eje Cafetero y la región Andina), el sistema debe dividirse en zonas de presión, cada una con su propio tanque o punto de quiebre de presión, para garantizar que ningún sector supere los 60 m.c.a.</p>

      <h2>Comparación RAS 2000 vs. RAS 2017: principales cambios</h2>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:14,marginBottom:'1.2rem'}}>
        <thead>
          <tr style={{background:'#003B6F',color:'#fff'}}>
            <th style={{padding:'8px 12px',textAlign:'left'}}>Aspecto</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>RAS 2000</th>
            <th style={{padding:'8px 12px',textAlign:'left'}}>RAS 2017 (Res. 0330)</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Dotaciones netas</td>
            <td style={{padding:'8px 12px'}}>Rangos más amplios, sin distinción clara</td>
            <td style={{padding:'8px 12px'}}>Rangos más acotados por nivel de complejidad</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Período de diseño</td>
            <td style={{padding:'8px 12px'}}>20–25 años (general)</td>
            <td style={{padding:'8px 12px'}}>Diferenciado por componente (captación 20 a, redes 25 a)</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>PTAP</td>
            <td style={{padding:'8px 12px'}}>Normativa básica</td>
            <td style={{padding:'8px 12px'}}>Requisitos más detallados para tecnologías alternativas</td>
          </tr>
          <tr>
            <td style={{padding:'8px 12px'}}>Medición</td>
            <td style={{padding:'8px 12px'}}>Recomendada</td>
            <td style={{padding:'8px 12px'}}>Obligatoria para sistemas con &gt; 100 usuarios</td>
          </tr>
          <tr style={{background:'#F0F7FB'}}>
            <td style={{padding:'8px 12px'}}>Macromedición</td>
            <td style={{padding:'8px 12px'}}>Opcional</td>
            <td style={{padding:'8px 12px'}}>Obligatoria para controlar pérdidas de agua</td>
          </tr>
        </tbody>
      </table>

      <h2>Otras normas técnicas que aplican en el diseño de acueductos</h2>
      <p>El RAS 2017 no actúa solo — debe complementarse con las siguientes normas:</p>
      <ul>
        <li><strong>NSR-10 (Reglamento Colombiano de Construcción Sismo Resistente):</strong> aplica al diseño estructural de tanques de almacenamiento, cámaras y estructuras de la planta. Título D (concreto), Título E (mampostería) y Título A (cargas y combinaciones) son los más relevantes.</li>
        <li><strong>NTC 1462 (ICONTEC):</strong> especificaciones para válvulas de compuerta y mariposa en sistemas de acueducto. Regula materiales, pruebas de presión y dimensiones de empalme.</li>
        <li><strong>NTC 3722-1 (ICONTEC):</strong> requisitos para tubería de polietileno de alta densidad (HDPE) para conducción de agua potable. Especifica dimensiones, presiones de trabajo y métodos de ensayo.</li>
        <li><strong>NTC 382 (ICONTEC):</strong> tubería de PVC para acueductos — clases de presión, dimensiones y tolerancias.</li>
        <li><strong>Decreto 1575 de 2007 y Resolución 2115 de 2007:</strong> definen las características del agua potable (parámetros físicos, químicos y microbiológicos) que la PTAP debe garantizar en el efluente.</li>
        <li><strong>Normas AWWA (American Water Works Association):</strong> referencia internacional utilizada para el diseño de grandes conducciones, válvulas especiales y equipos de bombeo cuando las normas colombianas no tienen especificaciones suficientes.</li>
      </ul>

      <h2>¿Por qué contratar un consultor especializado en RAS 2017?</h2>
      <p>La aplicación correcta del RAS 2017 no es mecánica. Un diseñador experimentado debe:</p>
      <ul>
        <li>Seleccionar la dotación neta adecuada según el contexto socioeconómico de la comunidad.</li>
        <li>Justificar el nivel de complejidad del sistema cuando los parámetros poblacionales están en el límite entre niveles.</li>
        <li>Elegir la tecnología de tratamiento apropiada para la calidad del agua cruda, considerando las capacidades de operación locales.</li>
        <li>Dimensionar el almacenamiento considerando las variaciones de consumo horario y los cortes programados de servicio.</li>
        <li>Garantizar que los planos y memorias cumplan los requisitos documentales de la CAR y del ente financiador (SGR, MinVivienda).</li>
      </ul>
      <p>Un diseño que no cumple el RAS 2017 no obtiene concepto de viabilidad de la CAR ni aprobación del ente financiador — lo que significa que el tiempo y dinero invertidos en la formulación del proyecto quedan en el aire.</p>

      <QuoteFormInline serviceId="diseno-acueductos" />
    </>
  },

}

export default articlesN
