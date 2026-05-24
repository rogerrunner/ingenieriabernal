import React from 'react'

// Batch U -- Blog buyer-intent: diseno acueducto veredal bocatoma Colombia (1 articulo, mayo 2026)
const articlesU: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'diseno-acueducto-veredal-colombia': {
    title: 'Diseño de acueducto veredal en Colombia: bocatoma, línea de conducción y PTAP',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Acueducto y Alcantarillado',
    metaDesc: 'Cómo se diseña un acueducto veredal en Colombia: bocatoma, línea de conducción, tanque de almacenamiento, PTAP y redes de distribución. Costos 2026, normas RAS 2017, requisitos CAR y qué estudios previos necesita. BIC.',
    keywords: 'diseño acueducto veredal Colombia, bocatoma diseño Colombia, acueducto rural Colombia diseño, costo acueducto veredal Colombia 2026, diseño bocatoma captacion aguas colombia, requisitos acueducto veredal CAR Colombia, RAS 2017 acueducto rural',
    body: <>
      <p>Un <strong>acueducto veredal</strong> es el sistema que lleva agua potable desde una fuente natural (río, quebrada, manantial) hasta las viviendas de una comunidad rural en Colombia. A diferencia de un acueducto urbano, el veredal suele tener un caudal más pequeño, una topografía irregular, una fuente hídrica sin tratamiento previo y una comunidad dispersa en el territorio. El diseño requiere experiencia en hidráulica rural, conocimiento de las normas de la CAR competente y manejo del Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017).</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> diseña acueductos veredales en Colombia: bocatoma de derivación o captación directa, línea de conducción por gravedad o bombeo, tanque de almacenamiento, PTAP compacta y red de distribución. Cumplimiento RAS 2017 y concesión de aguas ante la CAR. Honorarios desde $8 millones COP. Firma COPNIA 17202-313228 CLD. Propuesta en 24 horas sin costo: +57 302 477 8910.
      </p>

      <h2>Componentes de un acueducto veredal</h2>
      <p>Un sistema de acueducto rural completo tiene cinco componentes principales. El diseño debe abordar cada uno según las condiciones específicas del terreno, la fuente y la comunidad:</p>
      <ul>
        <li><strong>Bocatoma o captación:</strong> la obra que toma el agua de la fuente natural. Puede ser una bocatoma de fondo o lateral (para quebradas y ríos con variación estacional), un manantial protegido (caja de afloramiento) o una captación por bombeo en fuente profunda. La bocatoma debe diseñarse para el caudal de concesión autorizado por la CAR.</li>
        <li><strong>Aducción y desarenador:</strong> la tubería que lleva el agua desde la bocatoma hasta el tanque de almacenamiento o la planta de tratamiento, pasando por un desarenador que retira partículas gruesas (arenas y gravas) antes de que entren al sistema.</li>
        <li><strong>Planta de Tratamiento de Agua Potable (PTAP):</strong> proceso de potabilización que convierte el agua cruda en agua apta para consumo humano. Para acueductos veredales con presupuesto limitado, las PTAP compactas (filtración lenta o filtración en múltiples etapas) son la solución más frecuente. En fuentes con alta turbiedad se requiere coagulación, floculación y sedimentación previos.</li>
        <li><strong>Tanque de almacenamiento:</strong> reserva de agua tratada que regula las variaciones de demanda durante el día. El volumen se calcula como 1/3 del consumo diario máximo según el RAS 2017.</li>
        <li><strong>Red de distribución:</strong> red de tuberías que lleva el agua desde el tanque de almacenamiento hasta cada vivienda. En zonas montañosas se aprovecha la gravedad; en zonas planas puede requerir una estación de bombeo.</li>
      </ul>

      <h2>Bocatoma: tipos y cuándo usa cada uno</h2>
      <p>La <strong>bocatoma</strong> es la estructura más crítica del acueducto veredal porque de ella depende la continuidad del suministro en todo el sistema. En Colombia se usan principalmente tres tipos:</p>

      <h3>Bocatoma de fondo (tirolesa)</h3>
      <p>Se construye sobre el lecho del cauce con una reja horizontal que permite la captación continua incluso en épocas de estiaje. Es la más adecuada cuando la quebrada o río tiene lecho pedregoso, fluctuaciones estacionales importantes y no hay sedimentos finos en suspensión. El diseño debe incluir cámara de recolección, compuertas de control y obra de encauzamiento lateral para proteger la estructura en eventos de creciente. El RAS 2017 (sección B.6) define los criterios hidráulicos para su dimensionamiento.</p>

      <h3>Bocatoma lateral</h3>
      <p>Capta el agua desde uno de los costados del cauce mediante una ventana de captación. Es más económica que la de fondo y apropiada cuando el cauce tiene una margen estable y la fuente tiene caudal suficiente en estiaje. Requiere obra de protección del muro de encauzamiento para evitar que crecidas la destruyan. Es la más frecuente en acueductos veredales del Eje Cafetero y la región Andina.</p>

      <h3>Captación en manantial (caja de afloramiento)</h3>
      <p>Cuando la fuente es un manantial (agua subterránea que aflora naturalmente), se construye una caja de concreto que protege el afloramiento, permite la recolección del caudal disponible y evita la contaminación. Es la opción más económica y requiere menos mantenimiento que una bocatoma en cauce. La CAR puede otorgar la concesión de aguas subterráneas por un proceso diferente al de aguas superficiales.</p>

      <h2>Requisitos de la CAR para un acueducto veredal</h2>
      <p>Para construir y operar un acueducto veredal en Colombia se necesitan dos trámites ante la Corporación Autónoma Regional competente:</p>
      <ul>
        <li><strong>Concesión de aguas:</strong> autoriza a la comunidad a tomar un caudal específico de la fuente durante un período de tiempo (generalmente 10 años, renovable). Se tramita presentando el estudio hidrológico que demuestra la disponibilidad del recurso hídrico, el caudal ecológico que debe mantenerse en el cauce y la demanda real del sistema. Sin la concesión, la bocatoma no puede construirse legalmente.</li>
        <li><strong>Permiso de ocupación de cauce:</strong> autoriza la construcción de la bocatoma y las obras de adecuación del cauce. Requiere el diseño estructural e hidráulico de la bocatoma y el análisis de impacto sobre el cauce receptor.</li>
      </ul>
      <p>BIC elabora ambos estudios y acompaña el trámite ante la CAR. Los tiempos de respuesta varían por corporación: Corpocaldas y Carder suelen tardar entre 3 y 6 meses; otras CAR pueden tomar hasta un año.</p>

      <h2>¿Cuánto cuesta el diseño de un acueducto veredal?</h2>
      <p>Los honorarios del diseño dependen principalmente del número de suscriptores (viviendas) a servir, la longitud de la red de distribución y si se requiere o no PTAP. Los rangos orientativos para el mercado colombiano en 2026 son:</p>

      <h3>Sistema pequeño (hasta 50 viviendas, red menor de 3 km)</h3>
      <p><strong>Rango: $8 a $18 millones COP</strong></p>
      <p>Diseño completo: bocatoma, línea de aducción, desarenador, tanque de almacenamiento y red de distribución. Incluye memorias de cálculo hidráulico, planos de construcción y especificaciones técnicas. No incluye PTAP (si la fuente no requiere tratamiento) ni estudios previos de topografía y calidad del agua. Plazo: 4 a 8 semanas.</p>

      <h3>Sistema mediano (50 a 200 viviendas) con PTAP compacta</h3>
      <p><strong>Rango: $18 a $45 millones COP</strong></p>
      <p>Aplica cuando la comunidad supera las 50 viviendas o cuando la fuente requiere tratamiento (turbiedad, color, microbiología). Incluye diseño de la PTAP (filtración lenta, filtración en múltiples etapas o sistema compacto prefabricado), el sistema de desinfección y el tanque de almacenamiento dimensionado para el nivel de servicio requerido. Plazo: 6 a 10 semanas.</p>

      <h3>Estudios para concesión de aguas + diseño</h3>
      <p><strong>Rango adicional: $8 a $20 millones COP</strong></p>
      <p>Estudio hidrológico de la fuente (cálculo de caudales, análisis de frecuencia, caudal ecológico mínimo) y memoria técnica para el trámite de concesión ante la CAR. Es independiente del diseño del sistema, pero generalmente se contrata en conjunto para optimizar costos y tiempos.</p>

      <h2>Normas que rigen el diseño (RAS 2017)</h2>
      <p>El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017, Resolución 0330 del Ministerio de Vivienda) es la norma técnica que define los criterios mínimos de diseño para acueductos en Colombia. Para sistemas veredales son particularmente relevantes:</p>
      <ul>
        <li>Nivel de complejidad del sistema: los acueductos veredales con menos de 2.500 suscriptores se clasifican en nivel bajo o medio-bajo, con requisitos técnicos adaptados a comunidades pequeñas.</li>
        <li>Caudal de diseño: se calcula con base en la dotación neta (litros/habitante/día según nivel de complejidad) y el número de habitantes proyectado a 25 años.</li>
        <li>Presiones en la red: mínimo 10 m.c.a. en cualquier punto de la red y máximo 50 m.c.a. para proteger las conexiones domiciliarias.</li>
        <li>Calidad del agua: el agua entregada debe cumplir la Resolución 2115/2007 del Ministerio de Protección Social en parámetros físicos, químicos y microbiológicos.</li>
      </ul>

      <h2>Proyectos de acueducto veredal con regalías SGR</h2>
      <p>Muchos acueductos veredales en Colombia se financian con recursos del Sistema General de Regalías (SGR). Para acceder a estos recursos, el municipio debe formular el proyecto en MGA-Web (Metodología General Ajustada) y presentarlo ante el OCAD (Órgano Colegiado de Administración y Decisión) del departamento. BIC elabora el diseño técnico del acueducto y apoya la formulación del proyecto en MGA-Web, incluyendo los estudios de pre-inversión (diagnóstico de la fuente, alternativas de solución, evaluación financiera y social) que son requisito del DNP para aprobar la financiación.</p>

      <p><strong>¿Tiene un proyecto de acueducto veredal?</strong> BIC evalúa la fuente hídrica, define el sistema más adecuado y envía propuesta técnica con presupuesto en 24 horas sin costo. <a href="/bocatomas-colombia" style={{color:"#2E75B6",fontWeight:600}}>Ver servicio de bocatomas y acueductos →</a> o contactar por <strong>WhatsApp +57 302 477 8910</strong>.</p>
    </>,
    faqItems: [
      {
        q: '¿Cuánto cuesta el diseño de un acueducto veredal en Colombia?',
        a: 'El costo del diseño depende del número de viviendas y la longitud de la red. Para sistemas pequeños (hasta 50 viviendas, red menor de 3 km) los honorarios oscilan entre $8 y $18 millones COP. Para sistemas medianos (50 a 200 viviendas) con PTAP compacta, entre $18 y $45 millones. Si además se requiere el estudio hidrológico para la concesión de aguas ante la CAR, se suman $8 a $20 millones adicionales. BIC envía propuesta con precio fijo en 24 horas.',
      },
      {
        q: '¿Qué permisos necesita un acueducto veredal en Colombia?',
        a: 'Se necesitan dos permisos ante la CAR competente: (1) concesión de aguas superficiales o subterráneas, que autoriza tomar el caudal requerido de la fuente; y (2) permiso de ocupación de cauce, que autoriza construir la bocatoma y las obras en el cauce. Ambos requieren estudios técnicos previos: estudio hidrológico de disponibilidad del recurso y diseño estructural e hidráulico de la bocatoma. Sin la concesión no se puede construir legalmente. BIC elabora los estudios y acompaña el trámite.',
      },
      {
        q: '¿Cuánto tiempo tarda el diseño de un acueducto veredal?',
        a: 'Si se cuenta con topografía del terreno y análisis de calidad del agua de la fuente, el diseño completo (bocatoma, línea de conducción, tanque, red) toma entre 4 y 10 semanas según el tamaño del sistema. El trámite de concesión de aguas ante la CAR toma entre 3 y 12 meses adicionales dependiendo de la corporación. BIC puede entregar el diseño mientras se adelanta el trámite ante la CAR para no perder tiempo.',
      },
      {
        q: '¿Qué tipo de bocatoma es mejor para una quebrada de montaña?',
        a: 'Para quebradas de montaña con variaciones estacionales importantes, la bocatoma de fondo (tirolesa) es generalmente la más confiable porque capta continuamente incluso en estiaje. La bocatoma lateral es más económica y funciona bien si la quebrada tiene un caudal estable. BIC analiza el caudal histórico de la fuente, la geología del cauce y la variación estacional para recomendar el tipo de obra más adecuado antes de enviar la propuesta.',
      },
      {
        q: '¿BIC puede diseñar el acueducto si el proyecto se financia con regalías SGR?',
        a: 'Sí. BIC elabora el diseño técnico del acueducto conforme al RAS 2017 y apoya la formulación del proyecto en MGA-Web para presentación ante el OCAD departamental. Los estudios de pre-inversión, el diagnóstico de la fuente y la evaluación de alternativas que exige el DNP forman parte del alcance. Esto es especialmente relevante para municipios de categoría 5 y 6 que dependen del SGR para financiar la infraestructura de agua potable rural.',
      },
    ],
  },

}

export default articlesU
