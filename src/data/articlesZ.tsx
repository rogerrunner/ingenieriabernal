import React from 'react'

// Category Z: Articulos buyer-intent — precios, tramites CAR, comparativas
const articlesZ: Record<string, {
  title: string; date: string; readTime: string; category: string
  metaDesc: string; keywords: string; body: React.ReactNode
  faqItems?: Array<{ q: string; a: string }>
}> = {

  'como-tramitar-concesion-aguas-superficiales-corpocaldas-2026': {
    title: 'Como tramitar la concesion de aguas superficiales ante CORPOCALDAS en 2026',
    date: 'Junio 2026',
    readTime: '9 min',
    category: 'Tramites CAR',
    metaDesc: 'Guia practica para tramitar concesion de aguas superficiales ante CORPOCALDAS en Caldas. Requisitos, documentos, tiempos y costos reales. Actualizado 2026.',
    keywords: 'concesion aguas superficiales CORPOCALDAS, tramite concesion aguas Caldas 2026, requisitos concesion aguas CORPOCALDAS, documentos concesion aguas Caldas, costo concesion aguas CORPOCALDAS',
    body: (
      <>
        <p>
          Tramitar una concesion de aguas superficiales ante CORPOCALDAS en 2026 requiere estudio hidrologico firmado por ingeniero COPNIA,
          expediente tecnico completo y gestion directa ante la corporacion. El proceso puede tardar entre 6 y 12 meses desde la radicacion,
          pero la preparacion del expediente —si se tiene un profesional experimentado— puede completarse en 3 a 6 semanas.
          Esta guia presenta los pasos reales con tiempos y costos basados en tramites recientes en Caldas.
        </p>

        <h2>Que es CORPOCALDAS y cuando hay que acudir a ella</h2>
        <p>
          CORPOCALDAS — Corporacion Autonoma Regional de Caldas — es la autoridad ambiental competente para otorgar
          concesiones de aguas en todos los municipios del departamento: Manizales, Chinchina, Villamaria, Neira,
          La Dorada, Belalcazar, Viterbo, Supía, Riosucio, entre otros.
        </p>
        <p>
          Necesita concesion de aguas superficiales si su proyecto capta agua directamente de un rio, quebrada,
          canal de riego o cualquier fuente hidrica superficial para: consumo humano, acueducto veredal, riego agricola,
          uso industrial, piscicultura o cualquier actividad economica.
        </p>

        <h2>Documentos requeridos por CORPOCALDAS (actualizados 2026)</h2>
        <ul>
          <li><strong>Formulario de solicitud CORPOCALDAS</strong> — disponible en la sede de la corporacion o en su portal web.</li>
          <li><strong>Estudio hidrologico</strong> — calculos del caudal disponible, caudal ecologico minimo (caudal ambiental) y caudal solicitado. Debe estar firmado por ingeniero civil o agricola con tarjeta COPNIA vigente.</li>
          <li><strong>Memoria descriptiva del uso</strong> — descripcion del sistema de captacion, conduccion y distribucion; uso que se dara al recurso y lugar de captacion con coordenadas geograficas.</li>
          <li><strong>Plano de localizacion</strong> — plano con la ubicacion del predio y el punto de captacion. Escala minima 1:25.000.</li>
          <li><strong>Documento de tenencia del predio</strong> — escritura publica o contrato de arrendamiento.</li>
          <li><strong>Pago de la tasa de tramitacion</strong> — monto variable segun el caudal solicitado; CORPOCALDAS lo liquida una vez revisado el expediente.</li>
        </ul>

        <h2>Proceso paso a paso ante CORPOCALDAS</h2>
        <ol>
          <li><strong>Contrate el estudio hidrologico</strong> — con un ingeniero COPNIA que conozca las cuencas de Caldas. Tiempo: 3-6 semanas.</li>
          <li><strong>Prepare el expediente completo</strong> — formulario, estudio, memoria descriptiva, planos, escritura.</li>
          <li><strong>Radique ante CORPOCALDAS</strong> — en la sede de Manizales o en las oficinas regionales. CORPOCALDAS asigna numero de radicado.</li>
          <li><strong>Admision y visita de campo</strong> — CORPOCALDAS revisa el expediente y puede programar visita tecnica a la fuente. Tiempo: 1-3 meses.</li>
          <li><strong>Resolucion de concesion</strong> — CORPOCALDAS emite la resolucion que otorga o niega la concesion. Tiempo: 6-12 meses desde la radicacion.</li>
          <li><strong>Pago de la tasa de uso del agua</strong> — una vez otorgada la concesion, el beneficiario debe pagar la tasa de uso que cobra CORPOCALDAS anualmente.</li>
        </ol>

        <h2>Cuanto cuesta el estudio hidrologico para CORPOCALDAS</h2>
        <p>
          El costo del estudio hidrologico depende del tipo de fuente y la informacion disponible:
        </p>
        <ul>
          <li><strong>Captacion simple en quebrada sin aforo:</strong> $4 a $7 millones COP. Aplica cuando hay estaciones del IDEAM cercanas que permiten estimar caudales sin visita de campo.</li>
          <li><strong>Captacion en rio mediano con aforo:</strong> $7 a $12 millones COP. Requiere visita de campo para medicion directa del caudal.</li>
          <li><strong>Acueducto veredal con balance hidrico completo:</strong> $10 a $15 millones COP. Incluye estudio de la demanda actual y proyectada del sistema.</li>
        </ul>
        <p>
          <strong>BIC — Bernal Ingenieria Consultores, COPNIA 17202-313228 CLD</strong> — entrega propuesta en 24 horas habiles.
          Llame o escriba al WhatsApp +57 302 477 8910, o complete el formulario en ingenieriabernal.co.
        </p>

        <h2>Errores frecuentes que demoran el tramite</h2>
        <ul>
          <li>Presentar estudio hidrologico sin firma COPNIA — CORPOCALDAS lo devuelve sin admitirlo.</li>
          <li>Calcular caudal ecologico incorrectamente — la norma exige al menos el 25% del caudal medio mensual minimo.</li>
          <li>No indicar las coordenadas del punto de captacion en el plano — es requisito obligatorio.</li>
          <li>No adjuntar la escritura del predio — sin ella CORPOCALDAS no puede verificar que el solicitante es el titular.</li>
          <li>Radicar expedientes incompletos para "ganar tiempo" — CORPOCALDAS suspende el termino hasta que el expediente este completo.</li>
        </ul>

        <h2>Preguntas frecuentes sobre concesiones en Caldas</h2>
        <p><strong>¿La concesion de CORPOCALDAS tiene vigencia?</strong> Si, el plazo maximo es de 10 anos para usos diferentes al consumo humano, y hasta 50 anos para sistemas de acueducto. Es renovable antes de su vencimiento.</p>
        <p><strong>¿Que pasa si capto agua sin concesion?</strong> CORPOCALDAS puede imponer multas y ordenar la suspension de la captacion. Las sanciones van desde 1 hasta 5.000 salarios minimos segun el impacto ambiental.</p>
        <p><strong>¿BIC puede hacer el tramite en todo Caldas?</strong> Si. BIC atiende proyectos en todos los municipios de Caldas. Visita de campo en radio 200 km desde Manizales; gestion del expediente de forma remota en todo el departamento.</p>

        <p><strong>Contacto BIC:</strong> ingenieriabernal.co | WhatsApp +57 302 477 8910 | Propuesta en 24 horas.</p>
      </>
    ),
    faqItems: [
      { q: 'Cuanto cuesta tramitar concesion de aguas ante CORPOCALDAS?', a: 'El estudio hidrologico para concesion ante CORPOCALDAS cuesta entre $4 y $15 millones COP segun el tipo de fuente y si se requiere aforo. BIC entrega propuesta exacta en 24 horas.' },
      { q: 'Cuanto tarda CORPOCALDAS en otorgar la concesion de aguas?', a: 'Entre 6 y 12 meses desde la radicacion, dependiendo de la complejidad y la carga de la corporacion. BIC hace seguimiento al expediente.' },
      { q: 'Que es el caudal ecologico y por que lo pide CORPOCALDAS?', a: 'El caudal ecologico es el caudal minimo que debe quedar en la fuente para mantener el ecosistema acuatico. CORPOCALDAS exige que sea al menos el 25% del caudal medio mensual minimo de la fuente.' },
    ],
  },

  'decreto-1807-colombia-estudios-riesgo-hidrico-cuanto-cuesta-2026': {
    title: 'Decreto 1807 Colombia 2026: Que estudios exige y cuanto cuestan',
    date: 'Junio 2026',
    readTime: '10 min',
    category: 'Precios y Costos',
    metaDesc: 'Todo lo que necesita saber sobre el Decreto 1807 de 2014 en Colombia: que estudios exige para licencias y POT, quien los puede firmar y cuanto cuestan en 2026. Precios reales de BIC.',
    keywords: 'decreto 1807 colombia estudios, cuanto cuesta estudio decreto 1807, precio estudio riesgo hidrico colombia, estudios riesgo inundacion licencia construccion decreto 1807, quien firma estudio decreto 1807',
    body: (
      <>
        <p>
          El Decreto 1807 de 2014 obliga a cualquier proyecto urbanistico, parcelacion o licencia de construccion
          en zona de riesgo a presentar estudios tecnicos detallados de inundacion o movimientos en masa.
          Sin este estudio, la curaduria urbana no puede otorgar la licencia. En 2026, el costo de un estudio
          Decreto 1807 en Colombia oscila entre <strong>$6 y $22 millones COP</strong> segun el tamano del predio
          y la complejidad de la cuenca. Esta guia explica que exige la norma, quien puede firmarlo y como cotizar.
        </p>

        <h2>Que exige el Decreto 1807 de 2014</h2>
        <p>
          El Decreto 1807 de 2014 — hoy compilado en el Decreto Unico Reglamentario 1077 de 2015 — establece
          que para expedir licencias urbanisticas en terrenos con condicion de amenaza o riesgo no mitigable,
          el solicitante debe presentar estudios tecnicos de detalle que determinen:
        </p>
        <ul>
          <li><strong>Zonificacion de amenaza por inundacion:</strong> cartografia de amenaza alta, media y baja para periodos de retorno de 25, 50 y 100 anos. Escala 1:2.000 a 1:5.000 en suelo urbano.</li>
          <li><strong>Analisis de vulnerabilidad:</strong> evaluacion de la infraestructura expuesta a la amenaza.</li>
          <li><strong>Mapa de riesgo:</strong> superposicion de amenaza y vulnerabilidad para definir el riesgo residual.</li>
          <li><strong>Medidas de mitigacion:</strong> si el riesgo es mitigable, el estudio debe proponer las obras de proteccion necesarias y su costo estimado.</li>
        </ul>
        <p>
          La amenaza por movimientos en masa sigue los mismos principios pero incluye analisis geotecnico y
          cartografia de pendientes. Muchos proyectos en el Eje Cafetero y regiones de ladera requieren
          ambas amenazas (inundacion + movimientos en masa) en el mismo estudio.
        </p>

        <h2>Quien puede firmar un estudio Decreto 1807</h2>
        <p>
          Los estudios de riesgo hidrico para Decreto 1807 deben ser firmados por un <strong>Ingeniero Civil o Agricola
          con tarjeta COPNIA vigente</strong>, con experiencia en modelacion hidrologica e hidraulica.
          La curaduria urbana verifica el numero de tarjeta antes de admitir el estudio.
        </p>
        <p>
          BIC — Bernal Ingenieria Consultores — firma estudios Decreto 1807 con el registro
          <strong> COPNIA 17202-313228 CLD</strong>. Los estudios de BIC han sido aceptados en
          Manizales, Chinchina, Viterbo, Belalcazar y otros municipios de Caldas, Risaralda y Tolima.
        </p>

        <h2>Cuanto cuesta un estudio Decreto 1807 en Colombia en 2026</h2>
        <p>
          Los precios que se presentan a continuacion estan basados en proyectos reales ejecutados por BIC entre 2022 y 2025:
        </p>
        <ul>
          <li><strong>Predio pequeno (menos de 1 ha), una cuenca:</strong> $6 a $10 millones COP. Aplica para casas individuales, lotes urbanos y proyectos de hasta 20 viviendas en zonas con informacion hidrologica disponible.</li>
          <li><strong>Proyecto mediano (1 a 5 ha), una o dos cuencas:</strong> $10 a $16 millones COP. Parcelaciones, conjuntos cerrados, proyectos comerciales en zona periurbana.</li>
          <li><strong>Proyecto grande (mas de 5 ha) o sin informacion IDEAM:</strong> $16 a $22 millones COP. Urbanizaciones, planes parciales, proyectos industriales en cuencas sin estaciones hidrometeorologicas cercanas.</li>
          <li><strong>Estudio Decreto 1807 + movimientos en masa:</strong> suma entre $4 y $8 millones adicionales sobre el precio del estudio de inundacion.</li>
        </ul>
        <p>
          BIC entrega propuesta con valor exacto en <strong>24 horas habiles</strong> sin costo.
        </p>

        <h2>Que metodologia utiliza BIC para estudios Decreto 1807</h2>
        <ul>
          <li><strong>Modelacion hidrologica HEC-HMS</strong> — calculo de caudales de diseno para TR 25, 50 y 100 anos con curvas IDF calibradas para la region.</li>
          <li><strong>Modelacion hidraulica HEC-RAS 2D</strong> — simulacion de la llanura de inundacion con modelo digital de elevacion (DEM) de alta resolucion. Mapas de profundidad, velocidad y energia cinetica.</li>
          <li><strong>Cartografia en ArcGIS</strong> — mapas de amenaza, vulnerabilidad y riesgo a la escala requerida por la curaduria (1:2.000 o 1:5.000).</li>
          <li><strong>Informe tecnico completo</strong> — memorias de calculo, planos, tablas de resultados y propuesta de medidas de mitigacion si aplica.</li>
        </ul>

        <h2>Preguntas sobre el Decreto 1807 que BIC responde en la propuesta</h2>
        <p><strong>¿El estudio Decreto 1807 caduca?</strong> Los estudios no tienen fecha de vencimiento expresa, pero algunas curadorias exigen que el estudio no tenga mas de 2-3 anos de elaboracion para aceptarlo en un tramite nuevo.</p>
        <p><strong>¿Que pasa si construyo sin el estudio en zona de riesgo?</strong> La curaduria no otorga la licencia. Si hay construccion sin licencia en zona de riesgo, el municipio puede ordenar la demolicion.</p>
        <p><strong>¿BIC trabaja en todo Colombia?</strong> Si. Visita de campo en radio 200 km desde Manizales. Trabajo remoto con topografia existente en cualquier ciudad de Colombia.</p>

        <p><strong>Contacto:</strong> WhatsApp +57 302 477 8910 | ingenieriabernal.co | Propuesta en 24 horas.</p>
      </>
    ),
    faqItems: [
      { q: 'Cuanto cuesta un estudio Decreto 1807 en Colombia en 2026?', a: 'Entre $6 y $22 millones COP segun el tamano del predio y la complejidad de la cuenca. BIC entrega propuesta exacta en 24 horas.' },
      { q: 'Quien puede firmar un estudio Decreto 1807?', a: 'Un Ingeniero Civil o Agricola con tarjeta COPNIA vigente y experiencia en modelacion hidrologica e hidraulica. BIC firma con COPNIA 17202-313228 CLD.' },
      { q: 'Cuanto tarda BIC en entregar un estudio Decreto 1807?', a: 'Entre 3 y 8 semanas segun la complejidad. Proyectos con informacion disponible: 3-4 semanas. Cuencas sin datos o grandes: 6-8 semanas.' },
    ],
  },

  'permiso-ocupacion-cauce-colombia-guia-2026': {
    title: 'Permiso de Ocupacion de Cauce en Colombia: guia completa 2026',
    date: 'Junio 2026',
    readTime: '8 min',
    category: 'Tramites CAR',
    metaDesc: 'Guia practica del permiso de ocupacion de cauce en Colombia: cuando se necesita, documentos, costos ($12M-$40M COP) y tiempos reales. CORPOCALDAS, CARDER, CVC, CORTOLIMA.',
    keywords: 'permiso ocupacion de cauce Colombia, tramite permiso ocupacion cauce CAR, permiso ocupacion cauce puente Colombia, permiso ocupacion cauce urbanizacion, costo permiso ocupacion cauce',
    body: (
      <>
        <p>
          El permiso de ocupacion de cauce es la autorizacion que otorga la CAR competente para construir o modificar
          obras dentro del cauce de un rio o quebrada, o en su ronda hidrica. Es diferente a la concesion de aguas
          (que autoriza el uso del recurso hidrico) y se requiere cuando hay una <strong>intervencion fisica del cauce</strong>:
          puentes, bocatomas, muros de contencion, box culverts, canales de drenaje o cualquier encauzamiento en proyectos
          de urbanizacion.
        </p>

        <h2>Cuando es obligatorio el permiso de ocupacion de cauce</h2>
        <p>El articulo 132 del Decreto 1076 de 2015 establece que se requiere permiso de ocupacion de cauce para:</p>
        <ul>
          <li><strong>Puentes y pasos vehiculares o peatonales</strong> sobre cauces naturales, sin importar la longitud del vano.</li>
          <li><strong>Muros de gavion, escollera o concreto</strong> dentro de la ronda hidrica o en el cauce activo.</li>
          <li><strong>Box culverts y alcantarillas</strong> que cruzan o encauzan quebradas en proyectos de urbanizacion.</li>
          <li><strong>Bocatomas y captaciones</strong> — la obra fisica requiere el permiso de ocupacion; el uso del agua requiere la concesion.</li>
          <li><strong>Obras de proteccion de ribera</strong> y estructuras de disipacion de energia hidraulica.</li>
        </ul>
        <p>
          Los proyectos de urbanizacion que encauzan quebradas o instalan colectores pluviales dentro de la ronda hidrica
          deben tramitar el permiso de ocupacion ante la CAR como requisito previo a la licencia de urbanismo.
          La Curaduría verifica que el permiso este vigente antes de expedir la licencia.
        </p>

        <h2>Documentos requeridos por las CAR en Colombia</h2>
        <p>
          Aunque cada CAR tiene su propio formulario, los documentos tecnicos exigidos son equivalentes en
          CORPOCALDAS, CARDER, CRQ, CORTOLIMA y CVC:
        </p>
        <ul>
          <li><strong>Memoria de calculo hidrologica</strong> — caudales de diseno para TR 2, 5, 10, 25, 50 y 100 anos.</li>
          <li><strong>Memoria de calculo hidraulica</strong> — modelacion HEC-RAS (1D o 2D segun complejidad) del tramo afectado y de la obra proyectada.</li>
          <li><strong>Planos topograficos y batimetricos</strong> — levantamiento del cauce en el tramo de intervencion.</li>
          <li><strong>Diseno de la obra</strong> — planos estructurales o hidraulicos de la intervencion firmados por ingeniero COPNIA.</li>
          <li><strong>Descripcion del proyecto</strong> — memoria descriptiva del uso del suelo, finalidad de la obra y medidas de manejo ambiental.</li>
          <li><strong>Certificado de tradicion</strong> del predio o autorizacion del propietario.</li>
        </ul>
        <p>
          BIC prepara todos los documentos tecnicos, acompana la radicacion y responde los requerimientos de
          informacion adicional de la CAR sin costo extra.
        </p>

        <h2>Cuanto cuesta el permiso de ocupacion de cauce en Colombia</h2>
        <p>El costo se divide en dos componentes:</p>
        <ul>
          <li>
            <strong>Estudios tecnicos (BIC):</strong> entre $12M y $40M COP segun la complejidad de la obra y el cauce.
            Una bocatoma pequena con caudal menor de 10 L/s cuesta entre $12M y $18M. Un encauzamiento de quebrada
            en un plan parcial de mas de 5 ha puede costar entre $25M y $40M.
          </li>
          <li>
            <strong>Derechos de tramite (CAR):</strong> los define cada corporacion segun el caudal o la longitud
            de la intervencion. Generalmente entre $500.000 y $3.000.000 COP.
          </li>
        </ul>
        <p>BIC entrega propuesta con valor exacto en 24 horas sin costo.</p>

        <h2>Cuanto tarda el tramite</h2>
        <p>
          La preparacion del expediente tecnico tarda entre 6 y 14 semanas. El tramite ante la CAR
          (desde la radicacion hasta la resolucion) tarda entre 4 y 10 meses segun la CAR y la complejidad
          de la solicitud. CORPOCALDAS y CARDER tienen tiempos historicamente de 5 a 7 meses para expedientes bien preparados.
        </p>
        <p>
          BIC hace seguimiento permanente al expediente y atiende los requerimientos de la CAR dentro de los
          plazos legales, evitando el archivo del expediente por silencio administrativo.
        </p>

        <h2>Diferencia entre permiso de ocupacion de cauce y concesion de aguas</h2>
        <p>
          Son dos tramites distintos ante la misma CAR. La <strong>concesion de aguas</strong> autoriza <em>usar</em> el
          recurso hidrico (captar agua para consumo, riego o uso industrial). El <strong>permiso de ocupacion de cauce</strong>
          autoriza <em>construir</em> una obra fisica en el cauce o en su ronda. En proyectos de captacion como bocatomas,
          se tramitan los dos en paralelo. BIC gestiona ambos tramites con un solo equipo tecnico.
        </p>

        <p><strong>Contacto:</strong> WhatsApp +57 302 477 8910 | ingenieriabernal.co | Propuesta en 24 horas.</p>
      </>
    ),
    faqItems: [
      { q: 'Que es el permiso de ocupacion de cauce y cuando se necesita?', a: 'Es la autorizacion de la CAR para construir obras dentro del cauce o la ronda hidrica de un rio o quebrada. Se necesita para puentes, bocatomas, muros de contencion, box culverts y encauzamientos en urbanizaciones.' },
      { q: 'Cuanto cuesta tramitar el permiso de ocupacion de cauce?', a: 'Los estudios tecnicos cuestan entre $12M y $40M COP segun complejidad. Los derechos ante la CAR son adicionales ($500K-$3M COP). BIC da propuesta exacta en 24 horas.' },
      { q: 'Cuanto tarda el permiso de ocupacion de cauce?', a: 'Preparacion del expediente: 6-14 semanas. Tramite ante la CAR: 4-10 meses. BIC hace seguimiento permanente hasta la resolucion.' },
    ],
  },

  'estudio-hidraulico-plan-parcial-colombia-2026': {
    title: 'Estudio hidraulico para plan parcial en Colombia: que incluye y cuanto cuesta 2026',
    date: 'Junio 2026',
    readTime: '9 min',
    category: 'Planes Parciales',
    metaDesc: 'Todo lo que debe incluir el componente hidraulico de un plan parcial en Colombia: modelacion HEC-RAS 2D, ronda hidrica, drenaje pluvial, permisos CAR. Costos reales 2026.',
    keywords: 'estudio hidraulico plan parcial Colombia, componente hidraulico plan parcial, modelacion HEC-RAS plan parcial, ronda hidrica plan parcial Colombia, costo estudio hidraulico urbanizacion Colombia',
    body: (
      <>
        <p>
          El componente hidraulico es el requisito tecnico mas complejo y determinante en la viabilidad de un plan parcial
          en Colombia cuando el predio tiene cauces, rondas hidricas o zonas de ladera. Sin el concepto favorable de la CAR
          competente sobre el manejo hidrico del proyecto, la licencia de urbanismo no puede expedirse.
          Esta guia explica que debe incluir el estudio, cuanto cuesta y como afecta el diseno del plan parcial.
        </p>

        <h2>Que es el componente hidraulico de un plan parcial</h2>
        <p>
          Es el conjunto de estudios tecnicos que determina como el proyecto de urbanizacion maneja el agua:
          delimitacion de rondas hidricas, calculo de caudales de diseno para el drenaje pluvial, modelacion
          de inundabilidad de los cauces aferentes, diseno de canales y colectores, y tramites de permisos
          ante la CAR (concesiones, vertimientos, ocupacion de cauce).
        </p>

        <h2>Que estudios incluye el componente hidraulico de un plan parcial</h2>
        <ul>
          <li>
            <strong>Estudio hidrologico</strong> — calculo de caudales de diseno con TR 2, 5, 10, 25, 50 y 100 anos
            usando HEC-HMS. Base para el diseno del sistema de drenaje pluvial y para la modelacion hidraulica.
          </li>
          <li>
            <strong>Modelacion hidraulica HEC-RAS 2D</strong> — simulacion de la llanura de inundacion de los cauces
            que atraviesan o colindan con el predio. Define la ronda hidrica reglamentaria y determina las zonas
            aptas para urbanizar.
          </li>
          <li>
            <strong>Estudio Decreto 1807</strong> — si el predio tiene amenaza hidrica media o alta, la Curaduría
            exige este estudio como requisito previo a la licencia de urbanismo. BIC lo integra al componente
            hidraulico para no duplicar la modelacion.
          </li>
          <li>
            <strong>Diseno del sistema de drenaje pluvial</strong> — calculo y diseno de colectores, cunetas,
            canales de drenaje y estructuras de control de caudales pico para el area urbanizable.
          </li>
          <li>
            <strong>Tramites CAR</strong> — concesion de aguas (si hay captacion), permiso de vertimientos
            (si hay descarga al cauce) y permiso de ocupacion de cauce (si hay intervenciones fisicas en el cauce).
          </li>
        </ul>

        <h2>Como afecta el componente hidraulico al diseno del plan parcial</h2>
        <p>
          La ronda hidrica calculada en HEC-RAS define el area de cesion obligatoria al municipio — no puede construirse
          en ella. Los colectores pluviales deben diseñarse para el caudal de diseno TR 10 (RAS 2000) y las estructuras
          de control para TR 100. Un plan parcial bien estudiado maximiza el area neta urbanizable respetando estas restricciones.
        </p>
        <p>
          BIC trabaja en coordinacion directa con el arquitecto y el urbanista del plan parcial para que el componente
          hidraulico no restrinja el aprovechamiento sino que lo optimice.
        </p>

        <h2>Cuanto cuesta el componente hidraulico de un plan parcial</h2>
        <p>El costo depende principalmente del area del predio y la cantidad de cauces:</p>
        <ul>
          <li><strong>Plan parcial 2-5 ha, un cauce:</strong> $15M a $25M COP (estudios tecnicos, sin tramites CAR).</li>
          <li><strong>Plan parcial 5-20 ha, uno o dos cauces:</strong> $25M a $45M COP.</li>
          <li><strong>Plan parcial mayor de 20 ha o predios con tributarios multiples:</strong> desde $45M COP.</li>
          <li><strong>Tramites CAR adicionales</strong> (ocupacion de cauce, concesion, vertimientos): $12M a $25M COP por tramite.</li>
        </ul>
        <p>
          BIC entrega propuesta desglosada con valor exacto en 24 horas. El componente hidraulico se puede contratar
          de forma independiente del resto del plan parcial.
        </p>

        <h2>Cuanto tiempo toma el componente hidraulico</h2>
        <p>
          Los estudios tecnicos (hidrologico, hidraulico, Decreto 1807, diseno de drenaje) tardan entre 6 y 14 semanas.
          Los tramites ante la CAR se inician en paralelo y pueden extenderse de 4 a 8 meses. BIC coordina los cronogramas
          para que el expediente tecnico y los permisos CAR esten listos al tiempo que el equipo de urbanismo completa
          las memorias del plan parcial.
        </p>

        <p><strong>Contacto:</strong> WhatsApp +57 302 477 8910 | ingenieriabernal.co | Propuesta en 24 horas.</p>
      </>
    ),
    faqItems: [
      { q: 'Que incluye el componente hidraulico de un plan parcial en Colombia?', a: 'Estudio hidrologico, modelacion HEC-RAS 2D, estudio Decreto 1807, diseno de drenaje pluvial y tramites CAR (concesion, vertimientos, ocupacion de cauce).' },
      { q: 'Cuanto cuesta el estudio hidraulico de un plan parcial?', a: 'Entre $15M y $45M COP segun el area y la cantidad de cauces. Los tramites CAR adicionales cuestan $12M-$25M por tramite. BIC da propuesta en 24 horas.' },
      { q: 'BIC puede hacer el componente hidraulico del plan parcial por separado?', a: 'Si. BIC contrata el componente hidraulico de forma independiente y trabaja en coordinacion con el equipo de urbanismo y arquitectura del promotor.' },
    ],
  },

}

export default articlesZ
