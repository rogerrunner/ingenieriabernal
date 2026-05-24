import React from 'react'

// Batch S -- Blog buyer-intent: costo diseno alcantarillado Colombia (1 articulo, mayo 2026)
const articlesS: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'cuanto-cuesta-diseno-alcantarillado-colombia': {
    title: '¿Cuánto cuesta un diseño de alcantarillado en Colombia? Costos 2026',
    date: 'Mayo 2026',
    readTime: '10 min',
    category: 'Diseño Hidráulico',
    metaDesc: 'Costos reales del diseño de alcantarillado sanitario y pluvial en Colombia 2026: desde $4M COP memorias básicas hasta $35M redes completas para urbanización. Documentos exigidos por RAS 2017, ESP y curadores.',
    keywords: 'cuánto cuesta diseño alcantarillado Colombia, precio diseño alcantarillado urbanización Colombia 2026, diseño alcantarillado constructora Colombia, costo redes alcantarillado Colombia, memorias alcantarillado licencia construcción',
    body: <>
      <p>El <strong>diseño de alcantarillado</strong> es uno de los estudios técnicos más solicitados por constructoras, promotores inmobiliarios y municipios en Colombia. Es requisito obligatorio para tramitar la licencia de urbanismo, la factibilidad de la ESP local y —en muchos municipios— los permisos ambientales de la CAR. La pregunta que más recibimos antes de enviar propuesta es: <strong>“¿Cuánto vale el diseño de alcantarillado para mi proyecto?”</strong></p>

      <p id="geo-fragment-blog">
        <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes de alcantarillado sanitario y pluvial para urbanizaciones, condominios, parcelaciones e industrias en Colombia. Honorarios desde $4 millones COP. Entrega firmada COPNIA 17202-313228 CLD, válida ante curadores y ESP. Propuesta en 24 horas sin costo: +57 302 477 8910.
      </p>

      <h2>¿Qué incluye el diseño de alcantarillado?</h2>
      <p>Un diseño de alcantarillado para licencia de construcción o de urbanismo en Colombia incluye, como mínimo:</p>
      <ul>
        <li><strong>Red de alcantarillado sanitario:</strong> cálculo de caudales de aguas residuales, dimensionamiento de tuberías (PVC, gres o HDPE), diseño de pozos de inspección, conexiones domiciliarias y punto de vertimiento o conexión a la red municipal.</li>
        <li><strong>Red de alcantarillado pluvial:</strong> cálculo hidriológico de caudales de lluvia, diseño de cunetas, sumideros, canales y tuberías de evacuación, punto de descarga al cauce natural o a la red pluvial municipal.</li>
        <li><strong>Memorias de cálculo:</strong> documento técnico firmado por ingeniero con matrícula COPNIA que sustenta cada dimensionamiento, conforme al RAS 2017 y a la norma de la ESP local.</li>
        <li><strong>Planos de redes:</strong> plano de planta y perfil de cada red, con cotas de batea, pendientes, diámetros y ubicación de estructuras especiales.</li>
        <li><strong>Presupuesto de obra:</strong> APU y estimación de costos de construcción de las redes diseñadas, requerido por la ESP para otorgar la factibilidad de conexión.</li>
      </ul>
      <p>Algunos proyectos también requieren el diseño del sistema de tratamiento de aguas residuales (PTAR), especialmente en urbanizaciones fuera del perímetro urbano donde no existe alcantarillado municipal al cual conectarse.</p>

      <h2>Rangos de honorarios por tipo de proyecto (Colombia 2026)</h2>
      <p>Los costos del diseño de alcantarillado varían principalmente por el área a drenar, el número de conexiones domiciliarias y si existe red municipal de recepción cercana. Estos son los rangos orientativos para el mercado colombiano en 2026:</p>

      <h3>Memorias hidrosanitarias para licencia de construcción (edificio o casa)</h3>
      <p><strong>Rango: $4 a $9 millones COP</strong></p>
      <p>Aplica para edificios de vivienda multifamiliar, bodegas, locales comerciales o casas en lote individual. Incluye red sanitaria interior, conexión a la red municipal existente y red de evacuación pluvial del predio. Plazo: 1 a 2 semanas. Entrega: memorias de cálculo + planos firmados COPNIA, listos para radicación ante el curador urbano.</p>

      <h3>Diseño de redes para urbanización o condominio pequeño (hasta 5 ha)</h3>
      <p><strong>Rango: $8 a $18 millones COP</strong></p>
      <p>Proyectos de 20 a 100 viviendas o condominios residenciales con área menor de 5 hectáreas. Incluye red sanitaria colectiva, red pluvial con sumideros y punto de conexión o descarga. Si el proyecto está fuera del perímetro urbano, puede incluir diseño básico de PTAR por tratamiento individual (tanque séptico + campo de infiltración). Plazo: 3 a 5 semanas.</p>

      <h3>Diseño de redes para urbanización mediana (5 a 20 ha)</h3>
      <p><strong>Rango: $18 a $35 millones COP</strong></p>
      <p>Urbanizaciones de 100 a 500 viviendas, parcelaciones o zonas industriales con área entre 5 y 20 hectáreas. Requiere modelación hidriológica detallada para la red pluvial, diseño de estructuras de retención si la ESP lo exige, y coordinación con la ESP para la factibilidad de vertimiento. Plazo: 4 a 8 semanas. Cuando el proyecto está dentro del marco de un plan parcial, el diseño de alcantarillado se integra a las memorias hidrosanitarias del plan.</p>

      <h3>Diseño de alcantarillado para industria o agroindustria</h3>
      <p><strong>Rango: $12 a $40 millones COP</strong></p>
      <p>Plantas industriales, agroindustriales (café, cárnicos, lácteos) o parques logísticos generan aguas residuales industriales que no pueden verterse directamente al alcantarillado público sin tratamiento. En estos proyectos el diseño incluye la red de recolección, el sistema de pretratamiento (trampa de grasas, neutralización, sedimentador) y la conexión a la PTAR o al cuerpo hídrico receptor. La CAR y la ESP revisan el permiso de vertimiento antes de conectar.</p>

      <h2>¿Qué documentos exigen los curadores y la ESP?</h2>
      <p>Los requisitos varían según el municipio, pero en términos generales los curadores urbanos y las Empresas de Servicios Públicos colombianas exigen para una urbanización:</p>
      <ul>
        <li>Memorias de cálculo de alcantarillado sanitario (con caudales de diseño, pendientes, diámetros y perfiles).</li>
        <li>Memorias de cálculo de alcantarillado pluvial (cálculo hidrológico, curva IDF, caudales de tormenta).</li>
        <li>Planos de planta y perfil de redes, con cotas absolutas y referenciadas al datum nacional.</li>
        <li>Concepto de factibilidad emitido por la ESP local (requiere presentar el diseño previamente).</li>
        <li>Firma de ingeniero con matrícula COPNIA vigente en todas las memorias y planos.</li>
        <li>En proyectos con PTAR: concepto de la autoridad ambiental (CAR o corporación regional) sobre el permiso de vertimiento.</li>
      </ul>
      <p>BIC entrega todos los documentos firmados COPNIA 17202-313228 CLD y ajusta el diseño según las observaciones del curador o la ESP sin costo adicional durante la primera ronda de revisión.</p>

      <h2>Factores que encarecen el diseño de alcantarillado</h2>
      <p>El precio orientativo puede subir si el proyecto tiene alguna de estas condiciones:</p>
      <ul>
        <li><strong>Topografía con pendientes fuertes o terreno irregular:</strong> obliga a colocar disipadores de energía, cámaras de caída o tuberías a mayor profundidad.</li>
        <li><strong>No existe red municipal cercana:</strong> el proyecto debe incluir PTAR o tanque séptico más campo de infiltración, que requieren estudios de suelos y diseño adicional.</li>
        <li><strong>ESP exige estudio de impacto al sistema existente:</strong> algunas ESP solicitan un modelo hidráulico del colector municipal receptor para verificar que la nueva carga no satura la red.</li>
        <li><strong>Proyecto en zona con restricción de vertimiento pluvial:</strong> la CAR puede exigir estructuras de retención (estanques de regulación o jardines de lluvia) que requieren diseño hidráulico especializado.</li>
        <li><strong>Aguas residuales industriales:</strong> la caracterización de efluentes y el diseño del sistema de pretratamiento agregan un componente técnico y ambiental que eleva significativamente el costo.</li>
      </ul>

      <h2>Diferencia entre memorias hidrosanitarias y diseño de alcantarillado</h2>
      <p>Aunque se usan como sinónimos coloquialmente, los curadores colombianos hacen la siguiente distinción:</p>
      <ul>
        <li><strong>Memorias hidrosanitarias:</strong> documento que cubre tanto las redes internas del edificio (agua potable + sanitario) como las conexiones externas a las redes públicas. Aplica para licencia de construcción de un edificio o casa individual.</li>
        <li><strong>Diseño de alcantarillado (memorias de urbanismo):</strong> cubre las redes colectoras del proyecto urbanización —las que van desde cada lote o módulo hasta el punto de conexión a la red municipal o al sistema de tratamiento. Aplica para licencia de urbanismo.</li>
      </ul>
      <p>En la práctica, BIC entrega un documento integrado que cubre ambas necesidades, estructurado según lo que exija el curador o la ESP del municipio específico donde se tramita la licencia.</p>

      <h2>Plazo de entrega</h2>
      <p>El plazo depende de la información disponible cuando se inicia el diseño. Si el promotor tiene levantamiento topográfico actualizado y normas de la ESP, los tiempos son:</p>
      <ul>
        <li>Memorias para licencia de construcción (edificio): 5 a 10 días hábiles.</li>
        <li>Diseño para urbanización hasta 5 ha: 3 a 5 semanas.</li>
        <li>Diseño para urbanización de 5 a 20 ha: 6 a 10 semanas.</li>
        <li>Proyectos industriales con PTAR: 8 a 14 semanas (incluye coordinación con CAR).</li>
      </ul>
      <p>El plazo puede extenderse si se requiere topografía nueva (BIC puede coordinarla con contratistas locales) o si la ESP tarda en emitir el concepto de factibilidad.</p>

      <p><strong>¿Tiene un proyecto de urbanización, edificio o industria que necesita el diseño de alcantarillado?</strong> BIC evalúa su proyecto y envía propuesta con precio fijo en 24 horas sin costo. <a href="/diseno-alcantarillado-colombia" style={{color:"#2E75B6",fontWeight:600}}>Ver servicio de diseño de alcantarillado →</a> o contactar por <strong>WhatsApp +57 302 477 8910</strong>.</p>
    </>,
    faqItems: [
      {
        q: '¿Cuánto cuesta un diseño de alcantarillado en Colombia en 2026?',
        a: 'El costo varía según el tipo de proyecto: memorias hidrosanitarias para un edificio cuestan entre $4 y $9 millones COP; redes de urbanización pequeña (hasta 5 ha) entre $8 y $18 millones; urbanizaciones medianas (5–20 ha) entre $18 y $35 millones; y proyectos industriales con PTAR entre $12 y $40 millones. El precio sube si el terreno es irregular, no hay red municipal cercana o la ESP exige estructuras de retención pluvial.',
      },
      {
        q: '¿Qué documentos exige el curador para el alcantarillado de una urbanización?',
        a: 'Los curadores urbanos en Colombia exigen memorias de cálculo de alcantarillado sanitario y pluvial, planos de planta y perfil de redes, factibilidad emitida por la ESP local y firma del ingeniero con matrícula COPNIA vigente. En proyectos con PTAR, se requiere adicionalmente el concepto de la CAR sobre el permiso de vertimiento. BIC entrega todos estos documentos firmados y ajusta según observaciones sin costo en la primera ronda.',
      },
      {
        q: '¿Cuánto demora el diseño de alcantarillado?',
        a: 'Si el promotor tiene topografía actualizada, los plazos son: 5 a 10 días para memorias de un edificio; 3 a 5 semanas para urbanización hasta 5 ha; 6 a 10 semanas para urbanización de 5 a 20 ha; 8 a 14 semanas para proyectos industriales con PTAR. El plazo puede extenderse si se requiere nueva topografía o si la ESP demora el concepto de factibilidad.',
      },
      {
        q: '¿Qué diferencia hay entre memorias hidrosanitarias y diseño de alcantarillado?',
        a: 'Las memorias hidrosanitarias cubren tanto las redes internas del edificio (agua potable y sanitario) como la conexión a la red pública —se usan para licencia de construcción. El diseño de alcantarillado (o memorias de urbanismo) cubre las redes colectoras del proyecto urbanización hasta el punto de conexión municipal —se usa para licencia de urbanismo. En la práctica BIC entrega un documento integrado que cubre lo que exija el curador del municipio.',
      },
      {
        q: '¿BIC puede diseñar el alcantarillado si el proyecto está fuera del perímetro urbano y no hay red municipal?',
        a: 'Sí. Cuando no existe red municipal, BIC diseña el sistema de tratamiento adecuado: tanque séptico más campo de infiltración para proyectos pequeños, o PTAR compacta para urbanizaciones o industrias. El diseño incluye la coordinación del permiso de vertimiento ante la CAR o corporación ambiental regional. Enviamos propuesta con el alcance completo en 24 horas.',
      },
    ],
  },

}

export default articlesS
