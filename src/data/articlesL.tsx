import QuoteFormInline from '../components/QuoteFormInline'

// Category L articles — Mayo 2026 (costo HEC-RAS, documentos acueducto veredal)
const articlesL: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
}> = {

  'costo-estudio-hec-ras-colombia-2026': {
    title: '¿Cuánto cuesta un estudio HEC-RAS en Colombia? (2026)',
    date: 'Mayo 2026',
    readTime: '8 min',
    category: 'Estudios Técnicos',
    metaDesc: 'Rangos de precio reales para estudios de inundabilidad con HEC-RAS en Colombia 2026. Qué incluye, qué factores afectan el costo y cómo cotizar correctamente.',
    keywords: 'cuánto cuesta estudio HEC-RAS, precio modelación HEC-RAS Colombia, costo estudio inundabilidad Colombia',
    body: <>
      <p>Cuando alguien busca cuánto cuesta un estudio HEC-RAS en Colombia, generalmente ya tiene un proyecto en marcha, un trámite ante la CAR o una licencia de urbanismo que no puede avanzar sin ese estudio. Es decir: ya tomó la decisión de contratar, solo necesita saber en qué rango de precios moverse. Este artículo responde esa pregunta con cifras reales de 2026 y explica qué factores determinan el costo final. En <strong>BIC — Bernal Ingeniería Consultores</strong> elaboramos presupuestos personalizados con respuesta en 24 horas.</p>

      <h2>¿Qué es un estudio HEC-RAS y para qué sirve?</h2>
      <p><strong>HEC-RAS</strong> es el software de modelación hidráulica desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos (USACE). Modela el comportamiento del flujo de agua en ríos, quebradas y canales tanto en una dimensión (perfil longitudinal del cauce, modelo 1D) como en dos dimensiones (mapa de inundación sobre el terreno, modelo 2D). En Colombia es el estándar de facto para estudios de inundabilidad, con aplicaciones en:</p>
      <ul>
        <li><strong>POMCA</strong> (Planes de Ordenación y Manejo de Cuencas): zonificación de amenaza hídrica requerida por las CAR.</li>
        <li><strong>Licencias ambientales y de urbanismo</strong>: el Decreto 1807 de 2014 exige estudios de amenaza por inundación con modelación hidráulica para proyectos en zonas con amenaza hídrica.</li>
        <li><strong>Gestión del riesgo municipal</strong>: mapas de inundación para períodos de retorno 10, 25, 50 y 100 años que alimentan el PMGR y el POT.</li>
        <li><strong>Diseño de obras de protección</strong>: diques, muros de encauzamiento, espigones — el modelo verifica que la obra funcione sin generar problemas aguas arriba o abajo.</li>
      </ul>

      <h2>Factores que determinan el costo</h2>
      <p>No existe un precio único para un estudio HEC-RAS porque el alcance varía enormemente entre proyectos. Los factores que más inciden en el costo son:</p>
      <ul>
        <li><strong>Longitud del tramo a modelar (km lineales):</strong> un tramo de 2 km en una quebrada urbana es radicalmente diferente a 30 km de un río principal. Más kilómetros implican más levantamiento topobatimétrico, mayor trabajo de preparación del modelo y más tiempo de calibración.</li>
        <li><strong>Tipo de modelo — 1D vs. 2D:</strong> el modelo HEC-RAS 1D trabaja con secciones transversales del cauce y produce perfiles longitudinales del nivel del agua. Es más económico y suficiente para cauces bien definidos en zonas rurales. El modelo 2D genera manchas de inundación sobre un terreno digitalizado, es obligatorio para el Decreto 1807/2014 en zonas urbanas y tiene un costo significativamente mayor por la malla de cálculo que requiere.</li>
        <li><strong>Disponibilidad de información topográfica:</strong> si existe un vuelo LiDAR reciente del área, el costo del modelo 2D baja considerablemente. Si hay que contratar un levantamiento topobatimétrico convencional o un levantamiento con dron + batimetría, ese costo se suma al del modelo.</li>
        <li><strong>Número de escenarios a modelar:</strong> los períodos de retorno estándar son 2, 5, 10, 25, 50 y 100 años. Un municipio que necesita el mapa de amenaza completo requiere al menos cuatro escenarios (10, 25, 50 y 100 años). Más escenarios = más trabajo de modelación y postprocesamiento SIG.</li>
        <li><strong>Entregables requeridos:</strong> hay diferencia entre entregar solo el informe técnico con el modelo, versus informe + planos hidráulicos + shapefiles de manchas de inundación en SIG listos para integrar al POT o al POMCA.</li>
      </ul>

      <h2>Rangos de precio orientativos en Colombia (2026)</h2>
      <p>Con base en proyectos ejecutados en el Eje Cafetero y el resto del país, los rangos típicos para 2026 son:</p>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.95rem'}}>
          <thead>
            <tr style={{background:'#EBF5F9'}}>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Tipo de estudio</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Tramo</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Rango orientativo (COP)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>HEC-RAS 1D básico</td>
              <td style={{padding:'8px 12px'}}>&lt; 5 km</td>
              <td style={{padding:'8px 12px'}}>$8M – $15M</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>HEC-RAS 1D completo</td>
              <td style={{padding:'8px 12px'}}>5 – 20 km</td>
              <td style={{padding:'8px 12px'}}>$15M – $30M</td>
            </tr>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>HEC-RAS 2D con LiDAR</td>
              <td style={{padding:'8px 12px'}}>Cualquier tramo</td>
              <td style={{padding:'8px 12px'}}>$25M – $60M+</td>
            </tr>
            <tr style={{background:'#f9f9f9'}}>
              <td style={{padding:'8px 12px'}}>Estudio para POMCA (múltiples quebradas)</td>
              <td style={{padding:'8px 12px'}}>Variable</td>
              <td style={{padding:'8px 12px'}}>Desde $40M</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{fontSize:'0.85rem',color:'#666',marginTop:'0.5rem'}}><em>Precios orientativos. El valor exacto depende del alcance específico, disponibilidad de datos y entregables requeridos. Solicite presupuesto personalizado.</em></p>

      <h2>¿Qué debe incluir un estudio bien hecho?</h2>
      <p>Un estudio HEC-RAS que cumple con los requisitos de la CAR, la curaduría y el MVCT debe entregar como mínimo:</p>
      <ul>
        <li><strong>Memoria de cálculo con modelos calibrados:</strong> el modelo HEC-RAS debe calibrarse con al menos un evento histórico medido para verificar que reproduce correctamente las condiciones del cauce real. Un modelo sin calibración es observado por las entidades revisoras.</li>
        <li><strong>Mapas de inundación en SIG</strong> (shapefiles o KMZ) para el período de retorno de 100 años como mínimo, con categorización de amenaza alta, media y baja según la metodología IDEAM o la adoptada por la entidad territorial.</li>
        <li><strong>Informe técnico apto para radicación ante la CAR y el municipio:</strong> con la firma y número de tarjeta COPNIA del ingeniero responsable. Sin esta firma, el documento no tiene validez legal ante ninguna entidad pública.</li>
        <li><strong>Recomendaciones de obras de protección o franja de retiro:</strong> el estudio no es solo un diagnóstico — debe incluir las medidas de mitigación que el municipio o el promotor del proyecto puede adoptar para reducir la amenaza.</li>
      </ul>

      <h2>¿Cuándo necesita un estudio HEC-RAS?</h2>
      <p>Las situaciones más frecuentes en Colombia que requieren un estudio HEC-RAS son:</p>
      <ul>
        <li>Su municipio está <strong>formulando o actualizando el POMCA</strong> y necesita la zonificación de amenaza hídrica de las quebradas del área de influencia.</li>
        <li>Necesita una <strong>licencia ambiental para una obra</strong> (vial, urbana, industrial) ubicada cerca de una fuente hídrica.</li>
        <li>Quiere <strong>definir la franja de retiro</strong> de una quebrada para un POT, un plan parcial o una licencia de urbanismo.</li>
        <li>Hay una <strong>amenaza de inundación</strong> documentada y el municipio o la CAR requieren un mapa técnico de riesgo para gestionar el territorio.</li>
      </ul>

      <QuoteFormInline serviceId="modelacion-hec-ras" />

      <p>En <strong>BIC realizamos estudios HEC-RAS 1D y 2D</strong> con entregables listos para radicación ante la autoridad ambiental. Nuestros modelos incluyen calibración con eventos históricos, mapas de inundación en SIG y memoria de cálculo firmada COPNIA. Solicite su presupuesto personalizado — respuesta en 24 horas: <strong>ingenieriabernal.co</strong> / <strong>+57 302 477 8910</strong> / <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

  'documentos-para-contratar-diseno-acueducto-veredal': {
    title: 'Documentos para contratar diseño de acueducto veredal en Colombia',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Diseño de Acueductos',
    metaDesc: 'Lista completa de documentos necesarios para contratar un diseño de acueducto veredal en Colombia. Topografía, análisis de agua, censo y más — guía práctica para JAC y alcaldías.',
    keywords: 'documentos diseño acueducto veredal, requisitos acueducto rural Colombia, qué necesito para diseño acueducto',
    body: <>
      <p>Cada mes recibimos consultas de Juntas de Acción Comunal y alcaldías en Colombia que quieren contratar el diseño de su acueducto veredal pero no saben por dónde empezar: qué documentos reunir, en qué orden gestionarlos, cuál tarda más. Esta guía es la respuesta directa a esa pregunta. Si tiene algunos de estos documentos y quiere saber si puede empezar, escríbanos — evaluamos su caso sin costo.</p>

      <h2>Documentos técnicos obligatorios</h2>

      <h3>1. Topografía del área de servicio</h3>
      <p>Es el documento técnico más fundamental. Consiste en un <strong>levantamiento planimétrico y altimétrico</strong> de la zona del acueducto: el área de captación, el trazado de la conducción, el sitio de la planta de tratamiento (PTAP), el tanque de almacenamiento y la red de distribución. La precisión mínima exigida por el <strong>RAS 2017 (Resolución 0330)</strong> para sistemas de nivel de complejidad bajo y medio requiere al menos curvas de nivel cada metro en el área de la PTAP y las estructuras hidráulicas.</p>
      <p>Normalmente la contrata el municipio o la JAC antes de iniciar el diseño, y se entrega al consultor como insumo base. Sin topografía, el diseñador no puede dimensionar la conducción, calcular las presiones de servicio ni ubicar el tanque correctamente.</p>

      <h3>2. Análisis fisicoquímico y microbiológico de la fuente</h3>
      <p>Una muestra de agua tomada de la fuente hídrica (río, quebrada, nacimiento) y analizada en un <strong>laboratorio certificado por el IDEAM</strong>. Los parámetros mínimos que debe incluir el análisis son: pH, turbiedad, color aparente, sólidos suspendidos totales (SST), demanda bioquímica de oxígeno (DBO5), coliformes totales y coliformes fecales. Estos resultados son los que el diseñador usa para seleccionar el tipo de tratamiento de la PTAP: si el agua es muy turbia o tiene alta carga microbiana, se necesita una planta de mayor complejidad.</p>
      <p>El costo del análisis básico está entre $300.000 y $600.000 COP dependiendo del laboratorio, y el tiempo de entrega es de 1 a 2 semanas.</p>

      <h3>3. Concesión de aguas vigente</h3>
      <p>Este es el documento que más tiempo tarda en obtenerse y el que más proyectos retrasa. La <strong>concesión de aguas</strong> es el acto administrativo expedido por la Corporación Autónoma Regional (CAR) de la jurisdicción que autoriza al acueducto a captar un caudal determinado de la fuente hídrica, conforme al <strong>Decreto 1076 de 2015</strong>. Sin concesión vigente, el diseño de acueducto no puede radicarse ante la CAR ni ante el MVCT, y los proyectos del SGR no son viables.</p>
      <p>El tiempo de tramitación varía entre <strong>2 y 6 meses</strong> según la CAR (Corpocaldas, CARDER, CRQ, Corantioquia, etc.) y la complejidad de la solicitud. Por eso es fundamental iniciar este trámite al mismo tiempo que se contrata el diseño, no después.</p>

      <h3>4. Censo de usuarios o proyección de población</h3>
      <p>Un listado del número de viviendas actuales a beneficiar con el acueducto, más la proyección de crecimiento a <strong>25 años</strong> (período de diseño estándar según el RAS 2017). Esta información define el caudal de diseño del sistema: a mayor número de usuarios proyectado, mayor diámetro de tuberías, mayor capacidad del tanque y mayor tamaño de la PTAP. El censo puede ser un formato simple elaborado por la JAC con nombre del beneficiario, número predial y uso (residencial, comercial, productivo).</p>

      <h2>Documentos administrativos</h2>
      <ul>
        <li><strong>Escritura o documento que acredite la fuente hídrica:</strong> certificado de que el predio donde se ubicará la captación es de dominio público o que existe una servidumbre de paso formalizada, para evitar conflictos legales durante la construcción.</li>
        <li><strong>Acta de constitución de la JAC o personería jurídica del acueducto comunitario:</strong> documento que acredita que la entidad que contrata el diseño existe legalmente y puede actuar como operador del sistema una vez construido.</li>
        <li><strong>Certificado de existencia y representación legal</strong> (si la asociación está registrada en Cámara de Comercio): requerido para firmar contratos y radicar documentos ante entidades públicas.</li>
      </ul>

      <h2>Documentos opcionales que aceleran el proceso</h2>
      <ul>
        <li><strong>Estudios geotécnicos del área:</strong> aunque no siempre son obligatorios para el diseño, conocer las características del suelo en el trazado de zanjas y en la zona de captación evita sorpresas costosas durante la construcción.</li>
        <li><strong>Fotografías de la fuente y del área de servicio:</strong> permiten al diseñador hacer una evaluación preliminar de condiciones antes de la visita técnica, optimizando el tiempo de campo.</li>
        <li><strong>Información catastral de los predios del trazado:</strong> facilita la identificación de propietarios para gestionar servidumbres antes de la obra.</li>
      </ul>

      <h2>Resumen: ¿qué consigue quién y en cuánto tiempo?</h2>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.95rem'}}>
          <thead>
            <tr style={{background:'#EBF5F9'}}>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Documento</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Obligatorio</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Quién lo consigue</th>
              <th style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid #003B6F'}}>Tiempo estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Topografía</td>
              <td style={{padding:'8px 12px'}}>Sí</td>
              <td style={{padding:'8px 12px'}}>JAC / municipio</td>
              <td style={{padding:'8px 12px'}}>2 – 4 semanas</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Análisis de agua (laboratorio)</td>
              <td style={{padding:'8px 12px'}}>Sí</td>
              <td style={{padding:'8px 12px'}}>JAC</td>
              <td style={{padding:'8px 12px'}}>1 – 2 semanas</td>
            </tr>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Concesión de aguas (CAR)</td>
              <td style={{padding:'8px 12px'}}>Sí</td>
              <td style={{padding:'8px 12px'}}>JAC / municipio</td>
              <td style={{padding:'8px 12px'}}>2 – 6 meses</td>
            </tr>
            <tr style={{background:'#f9f9f9',borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Censo de usuarios</td>
              <td style={{padding:'8px 12px'}}>Sí</td>
              <td style={{padding:'8px 12px'}}>JAC</td>
              <td style={{padding:'8px 12px'}}>1 semana</td>
            </tr>
            <tr style={{borderBottom:'1px solid #ddd'}}>
              <td style={{padding:'8px 12px'}}>Escritura / acreditación fuente</td>
              <td style={{padding:'8px 12px'}}>Sí</td>
              <td style={{padding:'8px 12px'}}>JAC</td>
              <td style={{padding:'8px 12px'}}>Variable</td>
            </tr>
            <tr style={{background:'#f9f9f9'}}>
              <td style={{padding:'8px 12px'}}>Estudios geotécnicos</td>
              <td style={{padding:'8px 12px'}}>Recomendable</td>
              <td style={{padding:'8px 12px'}}>JAC / municipio</td>
              <td style={{padding:'8px 12px'}}>3 – 4 semanas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>¿Qué pasa si no tenemos todos los documentos?</h2>
      <p>En BIC podemos <strong>iniciar con los documentos disponibles</strong> y hacer un diagnóstico de viabilidad técnica del proyecto. Si la fuente no tiene concesión, asesoramos a la JAC o al municipio en el proceso de solicitud ante la CAR: qué documentos presentar, qué estudio hidrológico adjuntar y cómo redactar el memorial de solicitud. El diseño final se entrega una vez que todos los documentos obligatorios estén completos, pero el trabajo técnico puede avanzar en paralelo con los trámites administrativos, reduciendo significativamente los tiempos totales del proyecto.</p>

      <QuoteFormInline serviceId="acueducto-alcantarillado" />

      <p>¿Tiene algunos de estos documentos y quiere saber si puede empezar? Escríbanos — evaluamos su caso sin costo y le decimos exactamente en qué punto del proceso puede iniciarse el diseño. Contáctenos en <strong>ingenieriabernal.co</strong>, al <strong>+57 302 477 8910</strong> o a <strong>rogerio@ingenieriabernal.co</strong>.</p>
    </>,
  },

}

export default articlesL
