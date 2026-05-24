import React from 'react'

// Batch T -- Blog buyer-intent: estudio torrencialidad Colombia (1 articulo, mayo 2026)
const articlesT: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'estudio-torrencialidad-colombia': {
    title: 'Estudio de Torrencialidad en Colombia: requisitos, costos y diferencias con HEC-RAS',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Gestión del Riesgo',
    metaDesc: 'Qué es un estudio de torrencialidad en Colombia, cuándo es obligatorio según el Decreto 1807, costos reales 2026 ($15M–$45M COP), diferencia con modelación HEC-RAS y qué entregan FLO-2D y RAMMS. Guía para constructoras y municipios.',
    keywords: 'estudio de torrencialidad Colombia, amenaza torrencial Colombia 2026, cuando es obligatorio estudio torrencialidad, costo estudio torrencialidad Colombia, diferencia torrencialidad inundacion HEC-RAS, FLO-2D Colombia plan parcial, retiro quebrada Colombia Decreto 1807',
    body: <>
      <p>En Colombia, el <strong>estudio de torrencialidad</strong> es uno de los estudios técnicos más frecuentemente exigidos por las Curadurías, las CAR y los municipios — y uno de los menos comprendidos por quienes los solicitan. La confusión más común: creer que torrencialidad es lo mismo que inundación, o que el modelo HEC-RAS que ya se tiene cubre también la amenaza torrencial. No es así. Este artículo aclara qué es, cuándo es obligatorio, qué software se usa y cuánto cuesta en el mercado colombiano en 2026.</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> elabora estudios de torrencialidad en Colombia: mapa de amenaza torrencial Decreto 1807, modelación FLO-2D / RAMMS, delimitación de retiros para CAR y curaduría, e informe técnico firmado COPNIA 17202-313228 CLD. Honorarios desde $15 millones COP. Propuesta en 24 horas sin costo: +57 302 477 8910.
      </p>

      <h2>¿Qué es la torrencialidad y por qué es diferente de la inundación?</h2>
      <p>La <strong>torrencialidad</strong> describe el comportamiento de quebradas y ríos de montaña que, en eventos de lluvia intensa, transportan no solo agua sino también sedimentos gruesos: gravas, bloques de roca, troncos y lodo. Este flujo bifásico — agua más sólidos — tiene propiedades radicalmente distintas a una inundación de agua limpia:</p>
      <ul>
        <li><strong>Velocidad de propagación:</strong> los flujos torrenciales pueden superar los 10 m/s en tramos encañonados, mientras que una creciente de agua limpia en llanura rara vez supera los 3 m/s.</li>
        <li><strong>Presión de impacto:</strong> la presión sobre estructuras (muros, pilares, viviendas) es varias veces mayor que la de una inundación convencional, porque incluye la componente de impacto de los sólidos.</li>
        <li><strong>Área de afectación:</strong> al llegar a la zona plana, los flujos torrenciales se dispersan en un abanico y depositan material lejos del cauce, afectando áreas que un modelo HEC-RAS no señalaría como inundables.</li>
        <li><strong>Software requerido:</strong> HEC-RAS modela agua limpia en flujo 1D o 2D. Para flujos torrenciales con sedimentos se usan FLO-2D o RAMMS (módulo DEBRISFLOW), que incorporan la concentración volumétrica de sedimentos y la viscosidad dinámica del flujo.</li>
      </ul>
      <p>En Colombia, la mayor parte del territorio con quebradas en zona de montaña — Eje Cafetero, Antioquia, Nariño, Santander, Boyacá — está expuesto a amenaza torrencial. Los eventos de noviembre de 1985 (Armero), 1999 (Eje Cafetero) y múltiples eventos recientes en Manizales y Villavicencio ilustran la magnitud del riesgo.</p>

      <h2>¿Cuándo es obligatorio el estudio de torrencialidad en Colombia?</h2>
      <p>El Decreto 1807 de 2014 (artículos 5, 6 y 8) establece los casos en los que el estudio de torrencialidad es obligatorio:</p>
      <ul>
        <li><strong>Revisión o formulación de POT / EOT:</strong> los municipios deben incorporar el componente de amenaza torrencial en los estudios básicos para la revisión del Plan de Ordenamiento. Si hay quebradas o ríos de montaña en el territorio, la amenaza torrencial debe cartografiarse.</li>
        <li><strong>Planes parciales en zona de expansión con cauces:</strong> cuando el polígono del plan parcial tiene quebradas o torrentes adyacentes, el estudio de detalle de gestión del riesgo debe incluir el análisis torrencial — no solo la modelación HEC-RAS de inundación por agua limpia.</li>
        <li><strong>Licencias de urbanismo en suelo suburbano:</strong> proyectos en áreas rurales o suburbanas (condominios, parcelaciones, urbanizaciones campestres) cerca de quebradas de montaña requieren delimitar el retiro efectivo según la dinámica torrencial, que puede ser mayor al retiro genérico del Decreto 1076/2015.</li>
        <li><strong>Infraestructura vial:</strong> vías, puentes y box-culverts en corredores de montaña requieren el diseño hidráulico para flujo hiperconcentrado o flujo de escombros, con presiones de impacto que difieren completamente del cálculo para agua limpia.</li>
        <li><strong>Requerimiento de la CAR:</strong> para otorgar el permiso de ocupación de cauce (para obras dentro o junto a quebradas), muchas Corporaciones Autónomas Regionales exigen el estudio de torrencialidad como insumo del concepto de licencia ambiental.</li>
      </ul>
      <p>Una señal práctica: si el predio está en la parte media o alta de una cuenca con pendiente del terreno superior al 15%, si hay quebradas con régimen torrencial y si el POT municipal señala amenaza torrencial en el área, el estudio es casi siempre obligatorio.</p>

      <h2>¿Cuánto cuesta un estudio de torrencialidad en Colombia 2026?</h2>
      <p>Los honorarios varían principalmente por la longitud del tramo del cauce analizado, la disponibilidad de topobatimetría y si se requiere modelación bidimensional completa o solo mapa de amenaza con metodología empírica. Los rangos orientativos para el mercado colombiano en 2026 son:</p>

      <h3>Mapa de amenaza torrencial básico (metodología geomorfológica)</h3>
      <p><strong>Rango: $15 a $25 millones COP</strong></p>
      <p>Aplica para predios o polígonos de plan parcial con un solo cauce de influencia y área menor de 10 ha. Incluye análisis morfométrico del torrente, delimitación del cono aluvial, estimación de volúmenes de material, mapa de amenaza alta/media/baja y retiro técnico recomendado. No incluye modelación FLO-2D. Muchos municipios y curadurías del Eje Cafetero aceptan este nivel de detalle para proyectos de escala pequeña. Plazo: 3 a 5 semanas.</p>

      <h3>Modelación FLO-2D o RAMMS para plan parcial o POT</h3>
      <p><strong>Rango: $25 a $45 millones COP</strong></p>
      <p>Incluye levantamiento topobatimétrico del cauce (si no existe), caracterización del material del lecho, modelación bidimensional con FLO-2D o RAMMS DEBRISFLOW, manchas de depositación para Tr 100 y 500 años, y cartografía SIG entregable ante la CAR y la Secretaría de Planeación. Para polígonos con varios cauces o con pendientes mayores de 30%, el costo puede superar los $45 millones. Plazo: 5 a 10 semanas.</p>

      <h3>Estudio combinado torrencialidad + inundación (Decreto 1807 completo)</h3>
      <p><strong>Rango: $35 a $70 millones COP</strong></p>
      <p>Cuando el predio tiene tanto riesgo de inundación (río principal, agua limpia, modelación HEC-RAS) como riesgo torrencial (quebradas de montaña, flujos con sedimentos, FLO-2D), ambos estudios deben realizarse e integrarse en un solo informe de gestión del riesgo. BIC ofrece este estudio integrado como un solo servicio, lo que es más eficiente y económico que contratarlos por separado. Plazo: 6 a 12 semanas.</p>

      <h2>¿Qué incluye el informe técnico?</h2>
      <p>Un estudio de torrencialidad completo para Colombia incluye:</p>
      <ul>
        <li>Caracterización morfométrica del torrente: pendiente, longitud, área de cuenca, curvatura longitudinal del perfil.</li>
        <li>Estimación de caudales líquidos y sólidos para períodos de retorno Tr 10, 100 y 500 años.</li>
        <li>Determinación de la concentración volumétrica de sedimentos Cv y el régimen del flujo (hiperconcentrado, flujo de escombros o flujo de lodo).</li>
        <li>Modelación hidrodinámica con FLO-2D o RAMMS: profundidades, velocidades, depósito de material por período de retorno.</li>
        <li>Mapa de amenaza torrencial alta/media/baja en SIG (shapefile + GeoJSON), georreferenciado en MAGNA-SIRGAS.</li>
        <li>Delimitación del retiro técnico recomendado, diferenciado por tramo de cauce.</li>
        <li>Medidas de gestión del riesgo: diseño conceptual de obras de contención, disipadores, diques deflectores o revegetalización del corredor.</li>
        <li>Informe técnico completo firmado por especialista con matrícula COPNIA vigente, aceptado por la CAR y las curadurías urbanas.</li>
      </ul>

      <h2>Diferencia práctica entre torrencialidad e inundación: ¿cuál necesito?</h2>
      <p>La siguiente tabla resume las diferencias prácticas para determinar qué estudio corresponde:</p>
      <ul>
        <li><strong>Río de llanura o valle amplio (Magdalena, Cauca, Sogamoso):</strong> modelación HEC-RAS 1D o 2D para inundación por agua limpia. Torrencialidad generalmente no aplica.</li>
        <li><strong>Quebrada de montaña en zona andina (Eje Cafetero, Antioquia, Nariño):</strong> estudio de torrencialidad obligatorio si el cauce tiene pendiente mayor de 5% y cuenca montañosa.</li>
        <li><strong>Río de pie de montaña con llanura de inundación y cauces laterales torrenciales:</strong> estudio combinado (HEC-RAS para el río + FLO-2D para las quebradas).</li>
        <li><strong>Predio solo en llanura, lejos de cauces:</strong> ni HEC-RAS ni torrencialidad son necesarios — verificar en el mapa de amenazas del POT municipal.</li>
      </ul>
      <p>BIC evalúa sin costo cuál es el estudio correcto para el predio específico, basándose en la localización, el POT municipal y las condiciones topográficas. Muchos propietarios llegan con un requerimiento de la curaduría que dice "estudio de gestión del riesgo Decreto 1807" sin especificar si es inundación, torrencialidad o ambos — BIC determina el alcance técnico exacto antes de enviar la propuesta.</p>

      <p><strong>¿Su predio o proyecto tiene quebradas de montaña cercanas?</strong> BIC determina en la primera consulta si requiere estudio de torrencialidad, qué software aplica y cuánto cuesta. <a href="/estudios-torrencialidad-colombia" style={{color:"#2E75B6",fontWeight:600}}>Ver servicio de torrencialidad →</a> o contactar por <strong>WhatsApp +57 302 477 8910</strong> — propuesta técnica en 24 horas sin costo.</p>
    </>,
    faqItems: [
      {
        q: '¿Cuándo es obligatorio el estudio de torrencialidad en Colombia?',
        a: 'El estudio de torrencialidad es obligatorio según el Decreto 1807 de 2014 en: (1) revisión o formulación de POT/EOT cuando hay quebradas de montaña en el territorio; (2) planes parciales con cauces torrenciales adyacentes al polígono; (3) licencias de urbanismo en suelo suburbano o de expansión cerca de quebradas con régimen torrencial; (4) obras de infraestructura vial en corredores de montaña; (5) permisos de ocupación de cauce ante la CAR. La señal práctica: si el predio está cerca de quebradas andinas con pendiente del terreno mayor al 15%, el estudio es probable que sea requerido.',
      },
      {
        q: '¿Cuál es la diferencia entre un estudio de torrencialidad y una modelación HEC-RAS?',
        a: 'HEC-RAS modela el comportamiento de agua limpia en flujo 1D o 2D — aplica para inundaciones en ríos de llanura o valles anchos. El estudio de torrencialidad analiza flujos bifásicos (agua + sedimentos gruesos) en quebradas de montaña, usando FLO-2D o RAMMS DEBRISFLOW. Los flujos torrenciales son más rápidos, más densos y ejercen mayor presión sobre estructuras que una inundación de agua limpia. En zonas andinas colombianas, muchos predios requieren ambos estudios porque tienen a la vez un río de llanura y quebradas de montaña.',
      },
      {
        q: '¿Cuánto cuesta un estudio de torrencialidad en Colombia en 2026?',
        a: 'El rango de honorarios depende de la complejidad: mapa de amenaza básico (método geomorfológico, sin FLO-2D) entre $15 y $25 millones COP; modelación FLO-2D o RAMMS completa para plan parcial o POT entre $25 y $45 millones; estudio combinado torrencialidad + inundación HEC-RAS entre $35 y $70 millones. El factor que más impacta el precio es si ya existe topobatimetría del cauce o si hay que levantarla.',
      },
      {
        q: '¿Qué software se usa para estudios de torrencialidad en Colombia?',
        a: 'Los más utilizados son FLO-2D (herramienta desarrollada por el FEMA estadounidense, reconocida en Colombia por la UNGRD y el MVCT) y RAMMS módulo DEBRISFLOW (desarrollado por el WSL suizo, usado para flujos con alta concentración de sólidos). Ambos calculan el comportamiento bidimensional del flujo torrencial, incluyendo profundidades de depositación, velocidades y presiones de impacto. BIC trabaja con ambas herramientas y selecciona la más adecuada según las características del cauce y las exigencias de la entidad que revisa el estudio.',
      },
      {
        q: '¿BIC puede hacer el estudio de torrencialidad si el predio está en una zona rural fuera del Eje Cafetero?',
        a: 'Sí. BIC ha realizado estudios de torrencialidad en municipios de Caldas, Risaralda, Cundinamarca, Boyacá, Nariño, Santander y Meta. El trabajo de campo (reconocimiento del cauce, levantamiento topobatimétrico) se coordina con aliados locales en la zona o el equipo se desplaza. La modelación y el informe se elaboran en Manizales y se entregan digitalmente. La propuesta técnica se envía en 24 horas con el alcance y el cronograma según las condiciones específicas del predio.',
      },
    ],
  },

}

export default articlesT
