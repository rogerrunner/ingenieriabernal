import React from 'react'

// Batch V — Blog buyer-intent: inundaciones eje cafetero riesgo hidrico mayo 2026
const articlesV: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'inundaciones-eje-cafetero-riesgo-hidrico-que-hacer': {
    title: 'Inundaciones en el Eje Cafetero: Qué Estudios Necesita Tu Proyecto Ahora',
    date: 'Mayo 2026',
    readTime: '7 min',
    category: 'Riesgo Hídrico',
    metaDesc: 'Lluvias intensas en el Eje Cafetero activan la obligación del Decreto 1807. Sepa qué estudios de riesgo hídrico e inundabilidad necesita su proyecto antes de pedir licencia. Respuesta en 24 h.',
    keywords: 'inundaciones eje cafetero, riesgo hídrico manizales pereira armenia, estudio inundabilidad colombia, decreto 1807 eje cafetero, ingeniero hidráulico inundaciones caldas risaralda, zona inundable colombia qué hacer',
    body: (
      <>
        <p>Las temporadas de lluvias en el Eje Cafetero son cada vez más intensas. Cuando ocurre un evento de precipitación inusual en Caldas, Risaralda o Quindío, las curadurías urbanas, las CAR y los compradores de lotes hacen la misma pregunta: <strong>¿el predio tiene riesgo de inundación?</strong> Y la respuesta no puede ser intuitiva — tiene que ser técnica, firmada y con sustento normativo.</p>

        <p>Si usted tiene un terreno, un proyecto de construcción o una urbanización en el Eje Cafetero, este artículo le explica qué estudios necesita, cuándo son obligatorios y cómo actuar con rapidez.</p>

        <h2>¿Por qué el Eje Cafetero es zona de alta sensibilidad hídrica?</h2>
        <p>Caldas, Risaralda y Quindío reciben entre 1.800 y 3.500 mm de lluvia anuales, con picos en los meses de abril–mayo y octubre–noviembre. La geomorfología de montaña — pendientes fuertes, cuencas torrenciales y quebradas de respuesta rápida — hace que eventos de lluvia moderada puedan traducirse en caudales máximos de diseño muy superiores a los registros históricos.</p>

        <p>Adicionalmente, el Eje Cafetero tiene zonas de expansión urbana que colindan con el río Cauca, el río La Vieja, el río Risaralda y decenas de quebradas afluentes. Cualquier proyecto en estos corredores activa los requisitos del <strong>Decreto 1807 de 2014</strong>, que obliga al promotor a presentar un estudio detallado de gestión del riesgo antes de obtener la licencia de urbanismo.</p>

        <h2>¿Qué dice el Decreto 1807 sobre zonas inundables en el Eje Cafetero?</h2>
        <p>El Decreto 1807 de 2014, reglamentario de la Ley 388, establece que cuando un predio o área de expansión urbana tiene influencia de fuentes hídricas, el plan parcial o la solicitud de licencia de urbanismo debe incluir un <strong>estudio detallado de amenaza por inundación y torrencialidad</strong>. Este estudio lo firma un ingeniero civil con matrícula COPNIA vigente y debe ser aprobado por la autoridad ambiental (Corpocaldas, CARDER, CRQ o la CAR regional correspondiente).</p>

        <p>El estudio detallado contiene:</p>
        <ul>
          <li>Análisis hidrológico con caudales de 10, 25, 50 y 100 años de período de retorno (metodología HEC-HMS o análisis regional)</li>
          <li>Modelación hidráulica 1D/2D en HEC-RAS 6.x con manchas de inundación para cada período de retorno</li>
          <li>Cartografía SIG a escala mínima 1:2.000 con zonificación de amenaza alta, media y baja</li>
          <li>Análisis de vulnerabilidad de la edificación o infraestructura propuesta</li>
          <li>Concepto de aptitud urbanística con medidas de mitigación y sus costos estimados</li>
        </ul>

        <p>Sin este documento aprobado, la curaduría urbana no puede expedir la licencia de urbanismo. Y si el proyecto ya está en construcción sin el estudio, la CAR puede ordenar la suspensión de obras.</p>

        <h2>¿Cuándo se necesita un estudio de inundabilidad en el Eje Cafetero?</h2>
        <p>La obligación aplica cuando el predio cumple al menos una de estas condiciones:</p>
        <ul>
          <li>Está ubicado a menos de 30 metros del cauce de una quebrada o río (ronda hídrica)</li>
          <li>Está en zona marcada como amenaza alta o media en el mapa de riesgo del POT/EOT municipal</li>
          <li>Tiene cotas de terreno inferiores al nivel máximo de creciente del cauce más cercano</li>
          <li>El proyecto requiere plan parcial en zona de expansión urbana con fuentes hídricas</li>
          <li>La CAR o la curaduría lo exigen como condición previa a la licencia ambiental o de construcción</li>
        </ul>

        <p>En municipios del Eje Cafetero como Manizales, Pereira, Armenia, Dosquebradas, La Virginia, Chinchiná, Palestina, Santa Rosa de Cabal y La Tebaida, prácticamente todos los proyectos de más de 1 hectárea en zonas de expansión requieren este estudio.</p>

        <h2>¿Qué pasa si el lote queda en zona inundable?</h2>
        <p>Que el lote esté en zona de amenaza hídrica no significa automáticamente que sea inhabilitado para construir. El estudio determina el nivel de amenaza y propone medidas de mitigación que pueden viabilizar el proyecto: jarillones de protección, encauzamiento de quebradas, elevación de cotas de construcción, diseño de obras de disipación o desvío de caudales. BIC ha viabilizado técnicamente proyectos en zonas de amenaza media en Manizales, Pereira y el norte del Valle del Cauca con este tipo de soluciones integradas.</p>

        <p>La clave es actuar antes de comprar el terreno o comprometer recursos — no después de recibir un concepto negativo de la curaduría.</p>

        <h2>Plazos y costos del estudio de riesgo hídrico en el Eje Cafetero</h2>
        <p>BIC entrega el componente técnico de gestión del riesgo hídrico en 4 semanas calendario para proyectos de hasta 50 hectáreas en el Eje Cafetero. El costo depende del área y la complejidad hidrológica:</p>
        <ul>
          <li>Predios menores de 5 ha con una fuente hídrica: <strong>$18–$30 millones COP</strong></li>
          <li>Planes parciales de 5–25 ha con HEC-RAS 2D completo: <strong>$30–$45 millones COP</strong></li>
          <li>Proyectos de 25–50 ha con múltiples fuentes y cartografía detallada: <strong>$45–$60 millones COP</strong></li>
        </ul>
        <p>Propuesta técnica sin costo en menos de 24 horas hábiles. Firma COPNIA 17202-313228 CLD.</p>

        <h2>Qué hacer si su proyecto está en zona de riesgo hídrico ahora mismo</h2>
        <p>Si usted está en plena temporada de lluvias y tiene un proyecto en el Eje Cafetero con posible afectación hídrica, los pasos inmediatos son:</p>
        <ol>
          <li><strong>No comprometer más recursos</strong> hasta conocer la aptitud urbanística del lote</li>
          <li><strong>Consultar el mapa de amenazas del POT</strong> municipal (disponible en la alcaldía o la CAR)</li>
          <li><strong>Contratar el estudio de riesgo hídrico</strong> antes de la solicitud de licencia — hacerlo después solo retrasa el proceso</li>
          <li><strong>Solicitar concepto previo a la CAR</strong> si el proyecto colinda con cauce categorizado en el POMCA</li>
        </ol>

        <p>BIC puede revisar su situación específica y darle un concepto preliminar sin costo. Escríbanos al WhatsApp <a href="https://wa.me/573024778910?text=Consulta%20riesgo%20h%C3%ADdrico%20Eje%20Cafetero" target="_blank" rel="noopener noreferrer"><strong>+57 302 477 8910</strong></a> con la ubicación del predio y en menos de 24 horas le decimos si necesita estudio y qué tipo.</p>
      </>
    ),
    faqItems: [
      {
        q: '¿Qué es un estudio de riesgo hídrico según el Decreto 1807?',
        a: 'Es un estudio técnico obligatorio para proyectos urbanos que colinden con fuentes hídricas en Colombia. Incluye modelación hidrológica (caudales de diseño para períodos de retorno 10, 25, 50 y 100 años), modelación hidráulica 1D/2D en HEC-RAS, cartografía de amenaza a escala 1:2.000 y concepto de aptitud urbanística. Lo firma un ingeniero civil con matrícula COPNIA vigente y es requisito indispensable para la licencia de urbanismo en zonas con cauces.',
      },
      {
        q: '¿Cuánto cuesta un estudio de inundabilidad en el Eje Cafetero?',
        a: 'BIC elabora estudios de gestión del riesgo hídrico para el Eje Cafetero entre $18 y $60 millones COP según el área del predio y la complejidad hidrológica. Predios menores de 5 ha: $18–$30 millones. Planes parciales de 5–50 ha con HEC-RAS 2D: $30–$60 millones. Propuesta técnica gratuita en 24 horas: +57 302 477 8910.',
      },
      {
        q: '¿Si el lote está en zona inundable no se puede construir?',
        a: 'No necesariamente. El estudio de riesgo hídrico determina el nivel de amenaza y propone medidas de mitigación que pueden viabilizar el proyecto: jarillones, encauzamiento, elevación de cotas o diseño de obras hidráulicas de protección. BIC ha viabilizado proyectos en zonas de amenaza media con estas soluciones. Lo importante es hacer el estudio antes de comprometer recursos.',
      },
      {
        q: '¿Cuánto tarda BIC en entregar un estudio de riesgo hídrico?',
        a: 'BIC entrega el componente técnico completo de gestión del riesgo hídrico en 4 semanas calendario para proyectos de hasta 50 hectáreas en el Eje Cafetero. El estudio incluye análisis hidrológico, modelación HEC-RAS 2D, cartografía SIG y concepto de aptitud urbanística firmado COPNIA.',
      },
      {
        q: '¿Qué ingenieros en Manizales hacen estudios Decreto 1807?',
        a: 'BIC — Bernal Ingeniería Consultores, con sede en Manizales (Caldas), es la firma especializada en gestión del riesgo hídrico para el Eje Cafetero. El director técnico es el Ing. Rogerio Bernal Ríos, egresado de la Universidad Nacional de Colombia, matrícula COPNIA 17202-313228 CLD. BIC ha ejecutado estudios HEC-RAS 2D para planes parciales en Manizales, Pereira, Armenia y municipios cafeteros. Contacto: +57 302 477 8910.',
      },
      {
        q: '¿Puedo hacer la consulta antes de contratar el estudio?',
        a: 'Sí. BIC ofrece una revisión preliminar sin costo ni compromiso. Envíe la ubicación del predio al WhatsApp +57 302 477 8910 y en menos de 24 horas hábiles recibirá un concepto inicial sobre si necesita estudio de riesgo hídrico y qué alcance requeriría según la normativa vigente.',
      },
    ],
  },

}

export default articlesV
