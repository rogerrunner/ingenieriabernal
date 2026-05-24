import React from 'react'

// Batch R — Blog buyer-intent: costo plan parcial Colombia (1 artículo, mayo 2026)
const articlesR: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  // ─── BLOG: ¿Cuánto cuesta un plan parcial en Colombia? ──────────────────────

  'cuanto-cuesta-plan-parcial-colombia': {
    title: '¿Cuánto cuesta un plan parcial en Colombia? Honorarios y etapas 2026',
    date: 'Mayo 2026',
    readTime: '9 min',
    category: 'Plan Parcial',
    metaDesc: 'Costos reales de un plan parcial en Colombia 2026: desde $15M COP el diagnóstico hasta $120M la formulación completa con estudio Decreto 1807. Etapas, honorarios por tipo de terreno y qué incluye cada fase.',
    keywords: 'cuánto cuesta un plan parcial Colombia, costo plan parcial Colombia 2026, honorarios plan parcial Colombia, precio plan parcial urbanización Colombia',
    body: <>
      <p>El <strong>plan parcial</strong> es el instrumento de planificación que todo promotor o propietario de suelo de expansión o suelo suburbano en Colombia debe tramitar antes de iniciar una urbanización. La pregunta que nos hacen con más frecuencia antes de enviar propuesta es: <strong>"¿Cuánto cuesta hacer un plan parcial?"</strong> La respuesta depende del área del predio, la complejidad normativa del municipio y los estudios técnicos que ya existen. Este artículo da cifras reales del mercado colombiano para 2026.</p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> formula planes parciales en Colombia: diagnóstico, formulación, estudio de gestión del riesgo Decreto 1807, memorias hidrosanitarias y acompañamiento ante Planeación municipal. Honorarios desde $15 millones COP. Firma COPNIA 17202-313228 CLD. Propuesta en 24 horas: +57 302 477 8910.
      </p>

      <h2>¿Qué estudios técnicos requiere un plan parcial?</h2>
      <p>Un plan parcial no es solo un documento urbanístico — requiere un conjunto de estudios técnicos obligatorios que deben presentarse ante la Secretaría de Planeación del municipio. Los más frecuentes son:</p>
      <ul>
        <li><strong>Diagnóstico técnico del predio:</strong> análisis de norma urbanística aplicable (POT/EOT), linderos, áreas de cesión, cargas y beneficios, factibilidad de servicios públicos.</li>
        <li><strong>Estudio de gestión del riesgo (Decreto 1807):</strong> obligatorio cuando el polígono está en zona de amenaza hídrica o de movimientos en masa según el POT. Incluye modelación HEC-RAS y zonificación de amenaza.</li>
        <li><strong>Memorias hidrosanitarias:</strong> diseño de redes de acueducto, alcantarillado sanitario y pluvial, conforme al RAS 2017 y al esquema de la ESP local.</li>
        <li><strong>Estudio de movilidad:</strong> en municipios grandes (Bogotá, Medellín, Cali y otros que lo exigen) se requiere estudio de movilidad vial integrado al plan.</li>
        <li><strong>Documento de formulación:</strong> el documento maestro que integra la norma urbanística, los mapas, los estudios y las fichas normativas del plan parcial, apto para radicación y concertación ante Planeación.</li>
      </ul>

      <h2>Rangos de honorarios por etapa (Colombia 2026)</h2>
      <p>Los honorarios de un plan parcial se dividen típicamente en etapas. Estos son los rangos orientativos para el mercado colombiano en 2026, basados en proyectos ejecutados por BIC en Caldas, Risaralda, Cundinamarca y el Eje Cafetero:</p>

      <h3>Etapa 1 — Diagnóstico y viabilidad (sin compromiso)</h3>
      <p><strong>Rango: $3 a $8 millones COP</strong></p>
      <p>Revisión de la norma urbanística aplicable (POT/EOT), verificación de afectaciones, factibilidad de servicios públicos y estimación de áreas de cesión. El diagnóstico permite al promotor saber si el predio tiene viabilidad para el plan parcial antes de comprometer la inversión completa. Plazo: 2 a 3 semanas. BIC puede emitir un concepto preliminar sin costo si el promotor tiene la información básica del predio.</p>

      <h3>Etapa 2 — Estudio de gestión del riesgo Decreto 1807</h3>
      <p><strong>Rango: $18 a $60 millones COP</strong></p>
      <p>Este es el estudio técnico de mayor costo dentro del plan parcial cuando el predio tiene amenaza hídrica. Incluye análisis hidrológico HEC-HMS, modelación hidráulica HEC-RAS 1D o 2D, mapa de zonificación de amenaza (alta/media/baja), medidas de mitigación y concepto de aptitud urbanística firmado COPNIA. Es el estudio que Planeación y la CAR revisan con mayor rigor. Para polígonos menores de 5 ha, el costo oscila entre $18 y $30 millones. Para polígonos de 5 a 20 ha con HEC-RAS 2D, entre $30 y $60 millones.</p>

      <h3>Etapa 3 — Memorias hidrosanitarias</h3>
      <p><strong>Rango: $8 a $25 millones COP</strong></p>
      <p>Diseño de las redes de acueducto, alcantarillado sanitario y pluvial para el polígono del plan parcial, según el RAS 2017 y los lineamientos de la ESP local. Incluye planos de redes, memorias de cálculo y estimación de costos de construcción de las obras de urbanismo. Estas memorias son también el insumo para que la ESP otorgue la factibilidad de conexión.</p>

      <h3>Etapa 4 — Formulación del plan parcial</h3>
      <p><strong>Rango: $15 a $45 millones COP</strong></p>
      <p>Elaboración del documento de formulación completo: fichas normativas, esquema básico de ordenamiento, cuadro de áreas, cargas y beneficios, mapas urbanísticos y el expediente completo para radicación ante Planeación municipal. Incluye los ajustes posteriores a las observaciones de Planeación durante la concertación. El plazo depende de la complejidad normativa del municipio: entre 3 y 9 meses.</p>

      <h3>Etapa 5 — Acompañamiento hasta decreto municipal (opcional)</h3>
      <p><strong>Rango: $5 a $20 millones COP adicionales</strong></p>
      <p>Seguimiento ante la Secretaría de Planeación, respuesta a observaciones técnicas, coordinación con el Concejo o el Alcalde para la expedición del decreto de adopción del plan parcial. Algunos municipios son ágiles (4 a 8 meses desde radicación hasta decreto), otros toman más de un año. BIC ofrece este acompañamiento como etapa adicional cuando el promotor lo requiere.</p>

      <h2>¿Cuánto cuesta un plan parcial completo?</h2>
      <p>Sumando todas las etapas, el costo total de formulación de un plan parcial en Colombia oscila entre <strong>$45 millones y $120 millones COP</strong> para un predio típico de 5 a 30 hectáreas en zona de expansión con amenaza hídrica media. Los factores que más mueven el precio hacia arriba son:</p>
      <ul>
        <li><strong>Área del polígono:</strong> a mayor área, mayor complejidad de los estudios técnicos y mayor extensión de redes.</li>
        <li><strong>Presencia de cauces o amenaza hídrica:</strong> el estudio Decreto 1807 representa el 30–50% del costo total del plan parcial en predios con cauce adyacente.</li>
        <li><strong>Complejidad normativa del municipio:</strong> algunos municipios tienen POT con normas detalladas que simplifican la formulación; otros tienen vacíos normativos que requieren mayor trabajo de interpretación y concertación.</li>
        <li><strong>Número de propietarios del polígono:</strong> cuando el plan parcial involucra varios predios de diferentes propietarios, la coordinación jurídica y técnica es más compleja.</li>
        <li><strong>Existencia de estudios previos:</strong> si el promotor ya tiene topobatimetría, estudio de suelos o diseños preliminares, los costos técnicos se reducen significativamente.</li>
      </ul>

      <h2>¿Cuánto tiempo tarda un plan parcial en Colombia?</h2>
      <p>El plazo total desde diagnóstico hasta decreto de adopción varía mucho según el municipio y la complejidad del predio. Un rango realista para 2026 es:</p>
      <ul>
        <li><strong>Diagnóstico + estudios técnicos:</strong> 3 a 6 meses</li>
        <li><strong>Formulación y radicación:</strong> 2 a 4 meses</li>
        <li><strong>Concertación con Planeación municipal:</strong> 4 a 18 meses (depende del municipio)</li>
        <li><strong>Expedición del decreto:</strong> 1 a 3 meses adicionales</li>
      </ul>
      <p>En total: entre <strong>10 meses y 3 años</strong> desde el inicio del proceso hasta el decreto de adopción. Municipios del Eje Cafetero como Manizales, Pereira y Armenia tienen procesos más previsibles que los de grandes ciudades con mayor congestión de expedientes.</p>

      <h2>¿Qué pasa si compro un lote y ya hay un plan parcial adoptado?</h2>
      <p>Si el predio ya tiene un plan parcial adoptado mediante decreto municipal, el promotor no necesita formular uno nuevo — solo debe desarrollar el proyecto cumpliendo las fichas normativas del plan aprobado. En este caso, los estudios técnicos necesarios son menores y los honorarios de consultoría son sustancialmente más bajos. BIC puede revisar el decreto de adopción y determinar qué documentos técnicos aún faltan para iniciar la licencia de urbanismo.</p>

      <p><strong>¿Tiene un predio en zona de expansión o suelo suburbano?</strong> BIC determina en la primera consulta si su predio requiere plan parcial, cuáles estudios son obligatorios y emite concepto preliminar sin costo. <a href="/plan-parcial-colombia" style={{color:'#2E75B6', fontWeight:600}}>Ver servicio de planes parciales →</a> o contáctenos por <strong>WhatsApp +57 302 477 8910</strong> — propuesta técnica en 24 horas sin costo.</p>
    </>,
    faqItems: [
      {
        q: '¿Cuánto cuesta un plan parcial en Colombia en 2026?',
        a: 'El costo total de un plan parcial en Colombia oscila entre $45 y $120 millones COP para predios de 5 a 30 ha en zona de expansión con amenaza hídrica. El rango incluye diagnóstico ($3–$8M), estudio de gestión del riesgo Decreto 1807 ($18–$60M), memorias hidrosanitarias ($8–$25M) y formulación completa ($15–$45M). El factor que más impacta el precio es la presencia de cauces o amenaza hídrica en el predio.',
      },
      {
        q: '¿Cuánto tiempo tarda la aprobación de un plan parcial en Colombia?',
        a: 'Desde diagnóstico hasta decreto de adopción, el plazo realista es de 10 meses a 3 años. Los estudios técnicos toman 3 a 6 meses; la formulación y radicación, 2 a 4 meses adicionales; la concertación con Planeación municipal puede tomar de 4 a 18 meses según el municipio. El Eje Cafetero (Manizales, Pereira, Armenia) tiene procesos más previsibles que las grandes ciudades.',
      },
      {
        q: '¿El estudio Decreto 1807 siempre es obligatorio para un plan parcial?',
        a: 'El estudio de gestión del riesgo Decreto 1807 es obligatorio cuando el polígono del plan parcial está en zona de amenaza alta o media según el mapa del POT municipal, o cuando existen cauces, quebradas o zonas de inundación dentro o adyacentes al predio. Si el predio no tiene amenaza hídrica según el POT, el estudio detallado puede no ser exigido, aunque algunos municipios lo solicitan de todas formas como verificación.',
      },
      {
        q: '¿Qué diferencia hay entre plan parcial y licencia de urbanismo?',
        a: 'El plan parcial es el instrumento de planificación que define los usos del suelo, las cargas y beneficios, y las normas urbanísticas para un polígono de suelo de expansión o suelo suburbano. Una vez aprobado el plan parcial mediante decreto municipal, el promotor puede solicitar la licencia de urbanismo ante el curador, que es el permiso para ejecutar las obras. El plan parcial se tramita antes y es condición previa para la licencia de urbanismo.',
      },
      {
        q: '¿BIC puede encargarse de todo el plan parcial, incluyendo el estudio Decreto 1807?',
        a: 'Sí. BIC ofrece el servicio integral de plan parcial: diagnóstico, estudio de gestión del riesgo Decreto 1807 (con modelación HEC-RAS 2D), memorias hidrosanitarias, formulación completa y acompañamiento ante Planeación municipal. Todos los documentos van firmados COPNIA 17202-313228 CLD. Enviamos propuesta técnica y económica en 24 horas sin costo.',
      },
    ],
  },

}

export default articlesR
