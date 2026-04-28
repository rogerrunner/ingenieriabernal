import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito información sobre encauzamiento de ríos o protección fluvial. ¿Pueden asesorarme?')

const seoConfig = {
  title: 'Encauzamiento de Ríos y Quebradas en Colombia — Ingeniería Fluvial | BIC',
  description: 'BIC diseña obras de encauzamiento fluvial en Colombia: rectificación de cauces, muros laterales, espigones y revestimientos. Modelación HEC-RAS 2D, permiso CAR. Para municipios con ríos en zona urbana, vías y predios ribereños.',
  keywords: [
    'encauzamiento de ríos Colombia',
    'encauzamiento fluvial Colombia ingeniería',
    'rectificación de cauce Colombia',
    'protección fluvial Colombia diseño',
    'obra encauzamiento Colombia',
    'muro de encauzamiento río Colombia',
    'espigón fluvial Colombia',
    'revestimiento cauce Colombia',
    'obras corrección torrente Colombia',
    'empresa encauzamiento ríos Colombia',
    'permiso CAR ocupación cauce Colombia',
    'encauzamiento quebrada Colombia',
    'diseño encauzamiento HEC-RAS',
    'protección ribereña Colombia',
    'socavación cauce Colombia diseño',
  ],
  canonical: 'https://ingenieriabernal.co/encauzamiento-rios-colombia',
}

const TIPOS_OBRA = [
  {
    icon: '🧱',
    nombre: 'Muros de Encauzamiento',
    desc: 'Estructuras rígidas en las márgenes del río (muros en concreto, gaviones o mampostería) que definen la sección de flujo y evitan el desbordamiento lateral. Son la solución más frecuente en zonas urbanas donde el río cruza áreas pobladas y no se puede permitir la migración lateral del cauce. BIC diseña el muro con el cálculo de presiones hidrostáticas, subpresión, estabilidad al deslizamiento y volteo, y verifica el comportamiento hidráulico con modelación HEC-RAS 2D para garantizar que la sección encauzada pasa el caudal de diseño sin desbordamiento.',
    aplicacion: 'Ríos en zona urbana, cruces con vías, protección de edificaciones en margen ribereña.',
  },
  {
    icon: '🪨',
    nombre: 'Gaviones y Colchonetas',
    desc: 'Estructuras flexibles de malla metálica rellenas con piedra que actúan como muro de encauzamiento permeable. La ventaja sobre el concreto: la flexibilidad amortigua los asentamientos del terreno, la permeabilidad elimina la subpresión y la rugosidad favorece la disipación de energía. Las colchonetas de gavión se usan para revestir el fondo del cauce y protegerlo de la socavación. BIC diseña la altura, el espesor de la cesta, el tipo y tamaño de la piedra, y la longitud de protección del fondo, todo verificado con el cálculo del esfuerzo cortante hidráulico.',
    aplicacion: 'Ríos con variación de nivel, cauces en ladera, zonas con disponibilidad de material pétreo.',
  },
  {
    icon: '🔺',
    nombre: 'Espigones y Deflectores',
    desc: 'Estructuras transversales al flujo que se proyectan desde una margen hacia el centro del cauce para desviar el hilo de agua hacia el centro del río y proteger la margen opuesta de la erosión. Son más económicos que los muros de encauzamiento completos cuando solo se necesita proteger tramos puntuales. BIC diseña la longitud, la pendiente y el ángulo del espigón respecto al flujo mediante modelación HEC-RAS 2D, para garantizar que el deflector funciona sin generar socavación al pie de la estructura ni en la margen opuesta.',
    aplicacion: 'Curvas de ríos con erosión en margen exterior, tramos con migración lateral del cauce.',
  },
  {
    icon: '🌊',
    nombre: 'Rectificación de Cauce',
    desc: 'Cuando un río ha desarrollado meandros que generan riesgo para infraestructura o predios, se puede rectificar el trazado del cauce para crear un canal con menor longitud y mayor pendiente. La rectificación acelera el flujo, reduce los desbordamientos laterales y permite recuperar predios inundables. BIC diseña la nueva sección del cauce rectificado, verifica la estabilidad hidráulica con HEC-RAS, proyecta las obras de estabilización del fondo (umbrales, colchonetas) y gestiona el permiso de ocupación de cauce ante la CAR.',
    aplicacion: 'Ríos con meandros problemáticos, zonas con alta migración lateral, predios con inundación recurrente.',
  },
  {
    icon: '⚓',
    nombre: 'Obras de Control de Socavación',
    desc: 'La socavación — la erosión del fondo del cauce bajo las estructuras hidráulicas — es la causa principal de falla de puentes, alcantarillas y obras en zonas fluviales. BIC calcula la profundidad de socavación general, local y de contracción según los métodos HEC-18 y HEC-20, y diseña las obras de protección: escollera de piedra al pie de pilas, colchonetas de gavión en el lecho, umbrales de consolidación de fondo y pantallas de corte. Es trabajo preventivo que evita colapsos de infraestructura.',
    aplicacion: 'Puentes y viaductos en zonas fluviales, alcantarillas en cauces activos, cualquier estructura fundada en suelo aluvial.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico del Cauce y el Problema Hidráulico',
    desc: 'Todo proyecto de encauzamiento empieza con un diagnóstico del estado actual del río: visita de campo, levantamiento topográfico del cauce y la llanura de inundación, análisis del comportamiento histórico del río (registros de desbordamientos, fotos, informes de emergencia), caracterización del tipo de cauce (trenzado, meándrico, recto) y determinación de la causa del problema (¿el río creció porque la cuenca se deforestó?, ¿porque se construyó muy cerca del cauce?, ¿porque alguien hizo obras sin diseño aguas arriba?). Sin diagnóstico correcto, el encauzamiento puede solucionar el síntoma pero no la causa.',
    herramientas: ['Levantamiento topográfico batimétrico', 'Análisis de imágenes satelitales históricas', 'Registros IDEAM de caudales', 'Análisis granulométrico del lecho'],
    resultado: 'Informe de diagnóstico: causa del problema, magnitud, soluciones recomendadas',
  },
  {
    paso: '02',
    titulo: 'Análisis Hidrológico: Los Caudales que Definen el Diseño',
    desc: 'El encauzamiento debe resistir los caudales extremos del río para los períodos de retorno de diseño. BIC calcula los caudales de diseño mediante análisis de frecuencia con los registros de la estación hidrométrica del IDEAM más cercana (o mediante modelación hidrológica con HEC-HMS si no hay registro). Los períodos de retorno típicos son: 10 años para encauzamientos de drenaje menor, 25-50 años para protección de zonas residenciales, 100 años para infraestructura crítica. Este caudal define la sección del canal encauzado.',
    herramientas: ['HEC-HMS (modelación hidrológica)', 'Análisis de frecuencia Log-Pearson III', 'Estaciones IDEAM', 'Curvas IDF para caudales de tormenta'],
    resultado: 'Caudales de diseño para T=10, 25, 50 y 100 años',
  },
  {
    paso: '03',
    titulo: 'Modelación HEC-RAS 2D del Comportamiento Hidráulico',
    desc: 'BIC modela el comportamiento hidráulico del río en el tramo afectado: la modelación bidimensional con HEC-RAS 2D produce la distribución de velocidades, los niveles de inundación y los esfuerzos cortantes sobre el lecho para los caudales de diseño, tanto en la condición actual (sin obras) como en la condición futura (con las obras de encauzamiento propuestas). Esto permite verificar que el encauzamiento cumple su objetivo (el agua pasa sin desbordamiento), que no genera problemas aguas arriba (remanso) o aguas abajo (incremento de velocidades), y que la sección es hidráulicamente estable.',
    herramientas: ['HEC-RAS 2D (modelación bidimensional)', 'QGIS / ArcGIS (mapeo de inundación)', 'Modelo digital de elevación (DEM)', 'Batimetría del cauce'],
    resultado: 'Mapas de inundación, perfiles hidráulicos, velocidades y esfuerzos validados',
  },
  {
    paso: '04',
    titulo: 'Diseño de las Obras de Encauzamiento',
    desc: 'Con la hidráulica validada, BIC dimensiona las obras: altura y geometría de los muros o gaviones, profundidad de cimentación (considerando socavación de diseño HEC-18), longitud del tramo a encauzar, tipo y tamaño de la escollera de protección del pie, diseño de las obras de estabilización del fondo (umbrales de gravedad o pantallas de corte) y cualquier obra de arte necesaria (pasos de vía, alcantarillas, disipadores). Para muros de concreto se hace el diseño estructural según NSR-10.',
    herramientas: ['Cálculo de socavación HEC-18', 'Diseño estructural NSR-10', 'AutoCAD Civil 3D (planos)', 'Diseño de escollera (esfuerzo cortante)'],
    resultado: 'Dimensiones definitivas, diseño estructural, especificaciones de materiales',
  },
  {
    paso: '05',
    titulo: 'Permiso de Ocupación de Cauce ante la CAR',
    desc: 'Toda obra en el cauce de un río o quebrada en Colombia requiere un permiso de ocupación de cauce otorgado por la Corporación Autónoma Regional competente (CARDER, CORPOCALDAS, CRQ, CAR Cundinamarca, etc.), según el Decreto 1076 de 2015. BIC elabora todos los estudios técnicos que exige la CAR para este trámite: memoria descriptiva del proyecto, estudio hidrológico, modelación hidráulica antes y después de las obras, y análisis de impacto sobre el régimen natural del cauce. La radicación la hace el propietario del proyecto pero BIC atiende los requerimientos técnicos de la entidad.',
    herramientas: ['Memoria descriptiva para CAR', 'Modelación antes/después (HEC-RAS)', 'Formularios Decreto 1076/2015', 'Planos para radicación ambiental'],
    resultado: 'Expediente de permiso ambiental listo para radicar ante la CAR correspondiente',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de un encauzamiento de río en Colombia?',
    a: 'El costo varía principalmente por la longitud del tramo a encauzar, el tipo de obra (gaviones vs muro de concreto), si se requiere levantamiento topográfico del cauce y la complejidad del permiso ambiental. Para un tramo urbano de 200 a 500 metros con muros de gavión o concreto, el diseño completo — hidrología, modelación HEC-RAS 2D, diseño de muros, planos constructivos y memoria para la CAR — oscila entre $25.000.000 y $70.000.000 COP. Para tramos más cortos o problemáticas puntuales (espigones, protección de pie) el costo es menor. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Cuál es la diferencia entre encauzamiento y canalización de un río?',
    a: 'Son soluciones distintas con implicaciones ambientales y técnicas muy diferentes. El encauzamiento conforma el río dentro de una sección definida usando obras en las márgenes (muros, gaviones, espigones) pero preserva el lecho natural del cauce — el fondo sigue siendo tierra y piedra, el río mantiene cierta sinuosidad y el ecosistema fluvial se preserva parcialmente. La canalización, en cambio, reemplaza completamente el cauce natural por un canal artificial de concreto: sección rectangular o trapezoidal, fondo revestido, sin vegetación ribereña. La canalización es más eficiente hidráulicamente pero genera mayor impacto ambiental y las CAR la aprueban con más restricciones. En zonas urbanas densas se usa canalización; en zonas periurbanas y rurales, encauzamiento. BIC diseña ambas, recomendando según el contexto.',
  },
  {
    q: '¿Qué es la socavación y por qué es peligrosa para puentes y edificaciones?',
    a: 'La socavación es la erosión del fondo del cauce causada por las altas velocidades del agua durante crecientes. Hay tres tipos: socavación general (baja el fondo en toda la sección durante la creciente), socavación de contracción (cuando el cauce se estrecha, el agua acelera y erosiona más profundo) y socavación local (la más peligrosa: alrededor de pilas de puentes y estribos, donde las turbulencias generan vórtices que excavan el suelo bajo la cimentación). La socavación local es la principal causa de colapso de puentes en Colombia. BIC calcula la profundidad de socavación según HEC-18 y diseña las obras de protección necesarias para cualquier estructura fundada en zona fluvial.',
  },
  {
    q: '¿Se puede encauzar un río sin permiso de la CAR?',
    a: 'No. Cualquier obra en el cauce de un río o quebrada — incluyendo muros, gaviones, espigones, colchonetas de escollera y rectificaciones — requiere un permiso de ocupación de cauce otorgado por la Corporación Autónoma Regional. Este trámite está regulado por el Artículo 2.2.3.2.18.1 del Decreto 1076 de 2015. Construir sin este permiso expone al propietario a sanciones administrativas (multas), orden de demolición de las obras y responsabilidad por daños a terceros causados por las obras ilegales. Los municipios que hacen obras de emergencia deben regularizar el permiso dentro de los 30 días siguientes a la emergencia. BIC acompaña todo el proceso de tramitación.',
  },
  {
    q: '¿BIC trabaja con alcaldías y entidades públicas en proyectos de encauzamiento?',
    a: 'Sí, y es uno de los principales tipos de cliente de BIC en obras fluviales. Las alcaldías contratan encauzamientos cuando los ríos urbanos generan inundaciones recurrentes, cuando hay emergencias por crecientes, o como obras de prevención en el marco de los Planes Municipales de Gestión del Riesgo (PMGRD). BIC elabora el diseño técnico completo y toda la documentación necesaria para procesos de licitación pública o contratación directa, cumpliendo con los requisitos del SECOP y los organismos de control.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de un encauzamiento?',
    a: 'Para un tramo de encauzamiento de 200 a 500 metros en zona urbana o periurbana, el plazo típico de diseño es de 6 a 10 semanas. El plazo depende principalmente de si existe topografía reciente del cauce (si no, hay que levantar, lo que agrega 2-3 semanas) y de la complejidad del permiso ambiental (trámites ante la CAR pueden tomar de 2 a 6 meses adicionales dependiendo de la corporación). BIC puede entregar avances parciales del diseño para que el proceso de permiso comience antes de que el diseño esté completamente finalizado.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y Alcaldías', desc: 'Ríos urbanos con desbordamientos recurrentes, proyectos PMGRD y emergencias por crecientes.' },
  { tipo: 'UNGRD y Gobernaciones', desc: 'Atención de emergencias y obras de prevención de riesgo a nivel departamental.' },
  { tipo: 'Constructoras e INVIAS', desc: 'Protección de puentes, vías y obras de infraestructura en zonas fluviales.' },
  { tipo: 'Propietarios Ribereños', desc: 'Predios rurales y urbanos afectados por erosión de márgenes o desbordamiento.' },
  { tipo: 'Empresas con Infraestructura', desc: 'Plantas, bodegas o instalaciones industriales ubicadas en zonas de amenaza fluvial.' },
  { tipo: 'CAR y Entidades Ambientales', desc: 'Proyectos de restauración fluvial y mejora de condiciones ambientales del cauce.' },
]

export default function EncauzamientoRios() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería fluvial · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Encauzamiento de Ríos y Quebradas en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Muros, gaviones, espigones, rectificación de cauces — con modelación HEC-RAS 2D y permiso ante la CAR
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña obras de encauzamiento fluvial en todo Colombia:
            muros de encauzamiento, gaviones, espigones, colchonetas de escollera y rectificación de cauces.
            Cada proyecto parte de la modelación hidráulica bidimensional con HEC-RAS 2D y culmina con el
            expediente técnico para el permiso de ocupación de cauce ante la CAR competente.
            Municipios, constructoras, propietarios ribereños y entidades de gestión del riesgo.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar mi caso</Btn>
            <Btn variant="outline" href="/obras-hidraulicas-colombia" dark>Ver todas las obras hidráulicas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 2D','Muros de gavión','Espigones','Permiso CAR','Socavación HEC-18','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE OBRA ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de obra</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Obras de encauzamiento que diseña BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            La solución correcta depende del tipo de río, la magnitud del problema y el contexto (urbano o rural).
            BIC selecciona y diseña la obra que resuelve el problema al menor costo de ciclo de vida.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {TIPOS_OBRA.map(t => (
              <div key={t.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, alignItems: 'start',
              }}>
                <div style={{ fontSize: 36, paddingTop: 4 }}>{t.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, color: '#002A50', marginBottom: 8 }}>{t.nombre}</h3>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.8, marginBottom: 10 }}>{t.desc}</p>
                  <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '8px 12px', display: 'inline-block' }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#003B6F' }}>APLICACIÓN: </span>
                    <span style={{ fontSize: 13, color: '#444' }}>{t.aplicacion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Del diagnóstico del río al permiso de construcción
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            BIC sigue un proceso técnico riguroso en 5 etapas que garantiza que el encauzamiento
            resuelve el problema real, es hidráulicamente estable, recibe los permisos ambientales y puede construirse.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Su municipio, predio o infraestructura tiene un río problemático?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC evalúa el caso y envía propuesta en 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan encauzamiento fluvial
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 24 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — Encauzamiento de ríos en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ENLACES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Canales de riego y conducción', href: '/diseno-canal-riego-colombia' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Estudios hidrológicos', href: '/servicios/estudios-hidrologicos' },
              { label: 'Todas las obras hidráulicas', href: '/obras-hidraulicas-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Tiene un río o quebrada que genera<br />problemas en su proyecto o municipio?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el problema, la ubicación y si tiene antecedentes de desbordamiento o erosión.
            BIC evalúa el caso y le dice qué tipo de obra necesita.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Propuesta técnica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto"
              style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
