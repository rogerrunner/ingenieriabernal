import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar un permiso de ocupación de cauce ante la CAR. ¿Pueden orientarme sobre los estudios requeridos y cotizar el servicio?'
)

const seoConfig = {
  title: 'Permiso de Ocupación de Cauce Colombia | Trámite CAR CORPOCALDAS CRQ | BIC',
  description:
    'Tramitamos permisos de ocupación de cauce ante CORPOCALDAS, CRQ y CAR en Colombia. Bocatomas, puentes, muros de contención, canales y obras en cauce. Estudio hidráulico + expediente completo. Desde $6M COP.',
  keywords: [
    'permiso ocupación de cauce Colombia',
    'permiso ocupación cauce CORPOCALDAS',
    'permiso ocupación cauce CRQ',
    'tramitar permiso ocupación cauce',
    'obra en cauce Colombia requisitos',
    'construir cerca río permiso CAR',
    'permiso bocatoma Colombia',
    'permiso puente sobre río Colombia',
    'autorización ambiental ocupación cauce',
    'Decreto 1076 ocupación cauce Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-ocupacion-cauce-colombia',
  noindex: false,
}

const TIPOS_OBRA = [
  {
    icon: '🚰',
    tipo: 'Bocatomas y captaciones',
    desc: 'Toda obra de derivación de agua superficial sobre un cauce requiere permiso de ocupación de cauce Y concesión de aguas. Aplica para acueductos rurales, sistemas de riego agrícola, captaciones industriales y mini-centrales hidroeléctricas. CORPOCALDAS y CRQ exigen planos hidráulicos firmados por especialista con matrícula COPNIA vigente.',
    aplica: 'Acueductos veredales, fincas con riego, agroindustria, turismo rural.',
  },
  {
    icon: '🌉',
    tipo: 'Puentes y pasos vehiculares',
    desc: 'Cualquier puente, box culvert o paso vehicular que cruce un cauce natural necesita permiso de ocupación de cauce ante la CAR. Se requiere modelación hidráulica (HEC-RAS) que demuestre que la obra no eleva el nivel de la lámina de agua más de lo permitido ni genera erosión aguas abajo.',
    aplica: 'Urbanizaciones, fincas, proyectos viales, desarrollos campestres.',
  },
  {
    icon: '🏗️',
    tipo: 'Muros de contención y obras de protección',
    desc: 'Muros en gaviones, concreto ciclópeo, geomallas o escolleras paralelos al cauce (encauzamiento) o transversales (diques de umbral) requieren permiso. El expediente debe incluir estudio de amenaza por inundación y torrencialidad y diseño hidráulico de la protección.',
    aplica: 'Predios con alto riesgo hídrico, urbanizaciones en zonas de inundación, vías rurales.',
  },
  {
    icon: '💧',
    tipo: 'Canales de riego y conducción',
    desc: 'Canales que cruzan o se construyen dentro del cauce activo o en la ronda hídrica requieren autorización. BIC elabora el diseño hidráulico (sección, pendiente, revestimiento) y el expediente ambiental para la CAR correspondiente.',
    aplica: 'Arroceras, ganadería intensiva, floricultura, horticultura bajo riego.',
  },
  {
    icon: '🏕️',
    tipo: 'Infraestructura turística y recreativa',
    desc: 'Cabañas, zonas de camping, balnearios, miradores y senderos sobre o adyacentes al cauce. La CAR exige que la infraestructura respete la ronda hídrica (mínimo 30 m) y que se demuestre la no alteración del cauce con un estudio hidráulico.',
    aplica: 'Proyectos ecoturísticos, glamping, balnearios rurales, zonas de recreación.',
  },
  {
    icon: '🏘️',
    tipo: 'Urbanizaciones y obras civiles en ronda hídrica',
    desc: 'Proyectos constructivos en zonas aledañas al cauce (área de influencia del Decreto 1807/2015) que requieren demostrar no afectación hidráulica. Incluye canalización de cauces en zonas urbanas en expansión.',
    aplica: 'Constructoras, planes parciales, licencias de urbanización en predios con cauces.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico y viabilidad',
    desc: 'BIC revisa el predio, el cauce y el tipo de obra para confirmar si se requiere permiso de ocupación de cauce, permiso de vertimientos, concesión de aguas o combinación. Verificamos la CARconocida (CORPOCALDAS, CRQ, CARDER, CAR, CORNARE, etc.) y la normativa departamental aplicable.',
    herramientas: ['Decreto 1076/2015 Art. 2.2.3.2', 'Decreto 1807/2015', 'SIG — cartografía IGAC', 'Visita técnica al predio'],
    resultado: 'Diagnóstico de permisos requeridos y alcance de estudios',
  },
  {
    paso: '02',
    titulo: 'Modelación hidráulica del cauce',
    desc: 'Levantamiento topobatimétrico del cauce, aforo de caudales (Q2, Q10, Q50, Q100) y modelación hidráulica HEC-RAS 1D/2D para determinar niveles de inundación existentes y los cambios que introduce la obra proyectada. Este estudio es el núcleo técnico del expediente y el documento que la CAR revisa con mayor detalle.',
    herramientas: ['HEC-RAS 6.x (1D y 2D)', 'HEC-HMS', 'TopoBatimetría estación total', 'QGIS — MDT LiDAR/dron'],
    resultado: 'Modelo hidráulico calibrado + mapas de inundación pre/pos obra',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico de la obra',
    desc: 'Diseño de la bocatoma, puente, muro, canal o protección. Dimensionamiento hidráulico, estructural y geotécnico básico. Planos constructivos en AutoCAD con firma de especialista y matrícula COPNIA vigente. BIC coordina con el diseñador estructural cuando se requiere cálculo sísmico (NSR-10).',
    herramientas: ['AutoCAD Civil 3D', 'HCanales', 'COPNIA 17202-313228 CLD', 'NSR-10 Título H si aplica'],
    resultado: 'Diseño hidráulico completo con planos constructivos y memorias de cálculo',
  },
  {
    paso: '04',
    titulo: 'Expediente ambiental para la CAR',
    desc: 'Elaboración del expediente completo según los términos de referencia de la CAR correspondiente: formularios, memorial de trámite, estudio técnico integrado (topografía, hidrología, hidráulica, diseño), coordenadas magnéticas del predio y la obra, certificado de tradición y libertad, y demás requisitos documentales.',
    herramientas: ['TdR CORPOCALDAS / CRQ / CAR', 'Res. 1484/2018 MADS', 'Decreto 1076/2015', 'Formularios CAR'],
    resultado: 'Expediente completo listo para radicación ante la CAR',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento ante la CAR',
    desc: 'BIC radica el expediente, atiende las visitas de campo de la CAR, responde los requerimientos técnicos y observaciones del funcionario a cargo. Acompañamos el proceso hasta la expedición de la Resolución de permiso de ocupación de cauce.',
    herramientas: ['VITAL CORPOCALDAS', 'STORM CRQ', 'Comunicaciones formales', 'Seguimiento PQRS'],
    resultado: 'Resolución de permiso de ocupación de cauce expedida por la CAR',
  },
]

const FAQ = [
  {
    q: '¿Qué es el permiso de ocupación de cauce en Colombia?',
    a: 'Es una autorización ambiental que otorga la Corporación Autónoma Regional (CAR) competente para intervenir, construir o ubicar obras dentro de un cauce natural o su ronda hídrica. Lo regula el Decreto 1076/2015 (Artículo 2.2.3.2) y es obligatorio para bocatomas, puentes, muros de encauzamiento, canales y cualquier obra que modifique el cauce o sus márgenes.',
  },
  {
    q: '¿Qué diferencia hay entre permiso de ocupación de cauce y concesión de aguas?',
    a: 'Son dos permisos distintos. La concesión de aguas autoriza el USO (extracción) del agua superficial. El permiso de ocupación de cauce autoriza la CONSTRUCCIÓN de una obra en el cauce o su ronda, aunque no se extraiga agua. Una bocatoma necesita ambos: concesión (para captar agua) y permiso de ocupación (para construir la obra de captación). BIC tramita los dos en paralelo para reducir tiempos.',
  },
  {
    q: '¿Cuánto cuesta tramitar el permiso de ocupación de cauce?',
    a: 'El costo depende del tipo de obra y la complejidad del cauce. En BIC, los honorarios profesionales para elaborar los estudios técnicos y el expediente parten desde $6M COP para obras menores (puentes o muros en cauces de primer orden). Obras complejas (bocatomas en ríos principales, encauzamientos urbanos) pueden estar entre $12M y $30M. La CAR cobra adicionalmente la tasa por evaluación ambiental (varía entre $800K y $4M según la CAR y la complejidad).',
  },
  {
    q: '¿Cuánto demora obtener el permiso de ocupación de cauce?',
    a: 'El proceso tiene dos etapas. BIC tarda entre 6 y 12 semanas en elaborar los estudios técnicos (topobatimetría, modelación HEC-RAS, diseño y expediente). Una vez radicado, la CAR tiene 30 días hábiles para pronunciarse (Decreto 1076/2015), pero en la práctica CORPOCALDAS demora entre 3 y 6 meses dependiendo de la carga administrativa y si hay requerimientos adicionales.',
  },
  {
    q: '¿Es obligatoria la modelación HEC-RAS para el permiso de ocupación de cauce?',
    a: 'Sí, en casi todos los casos. CORPOCALDAS, CRQ y la mayoría de CAR exigen una modelación hidráulica que demuestre que la obra no aumenta el riesgo de inundación aguas arriba ni aguas abajo, y que no genera erosión o socavación indebida. Para obras menores en cauces de primer orden la CAR puede aceptar cálculos simplificados, pero BIC recomienda siempre hacer la modelación para evitar observaciones y retrasos.',
  },
  {
    q: '¿Qué pasa si construyo sin permiso de ocupación de cauce?',
    a: 'La CAR puede imponer medidas preventivas (sellamiento de obra), medidas compensatorias (demolición) y sanciones económicas desde $1M hasta $5.000 salarios mínimos según el Decreto 2811/1974 y la Ley 1333/2009. Además, la obra no pasará la revisión de licencia de construcción, pues las curadurías exigen demostrar que no hay cauce afectado sin permiso ambiental.',
  },
  {
    q: '¿Qué pasa si mi predio tiene un cauce pero no voy a construir encima?',
    a: 'Si el proyecto está dentro de la ronda hídrica (mínimo 30 metros desde cada orilla para ríos, según el POT municipal y el Decreto 1807/2015), debes demostrar en la licencia que respetaste la ronda y puede requerirse un aval de la CAR. BIC elabora el estudio de delimitación de ronda hídrica y concepto técnico para el trámite de licencia.',
  },
  {
    q: '¿BIC puede tramitar el permiso de ocupación de cauce ante cualquier CAR de Colombia?',
    a: 'Sí. BIC opera con alcance nacional. Tenemos experiencia con CORPOCALDAS (Caldas), CRQ (Quindío), CARDER (Risaralda), CORNARE (Oriente Antioqueño) y CAR (Cundinamarca). Para otras corporaciones (CORANTIOQUIA, CVC, CDA, etc.) revisamos los términos de referencia específicos de cada CAR antes de iniciar.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BIC — Bernal Ingeniería Consultores',
  description: 'Tramitamos permisos de ocupación de cauce ante CORPOCALDAS, CRQ y CAR en Colombia.',
  url: 'https://ingenieriabernal.co/permiso-ocupacion-cauce-colombia',
  telephone: '+573024778910',
  areaServed: ['Caldas', 'Quindío', 'Risaralda', 'Antioquia', 'Colombia'],
  serviceType: 'Permiso de Ocupación de Cauce',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de tramitación permiso de ocupación de cauce',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Modelación hidráulica HEC-RAS para ocupación de cauce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño hidráulico de bocatomas, puentes y obras de protección' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Expediente ambiental para permiso de ocupación de cauce ante CAR' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acompañamiento ante CORPOCALDAS, CRQ, CARDER y otras CAR' } },
    ],
  },
}

export default function PermisoOcupacionCauceColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup schema={FAQ_SCHEMA} />
      <SchemaMarkup schema={LOCAL_BUSINESS_SCHEMA} />
      <SpeakableSchema selectors={['h1', '.speakable-summary']} />

      <BlueprintBg>
        {/* ── Hero ── */}
        <Section className="pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Tag>Trámite Ambiental CAR</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Permiso de Ocupación de Cauce en Colombia
            </h1>
            <p className="text-xl text-gray-300 mb-4 speakable-summary">
              Tramitamos el permiso de ocupación de cauce ante CORPOCALDAS, CRQ, CARDER y demás CAR en Colombia.
              Modelación HEC-RAS, diseño hidráulico y expediente completo para bocatomas, puentes,
              muros de protección y obras en ronda hídrica.
            </p>
            <p className="text-gray-400 mb-8">
              Desde el diagnóstico hasta la resolución de la CAR. Sin intermediarios, sin demoras evitables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Btn
                href={`https://wa.me/${WA}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Cotizar trámite de permiso
              </Btn>
              <Btn href="#proceso" variant="secondary">
                Ver proceso paso a paso
              </Btn>
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── ¿Qué obras lo requieren? ── */}
        <Section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <SectionLabel>¿Cuándo se necesita?</SectionLabel>
            <h2 className="text-3xl font-bold mb-4">Obras que requieren permiso de ocupación de cauce</h2>
            <p className="text-gray-400 mb-10">
              El Decreto 1076/2015 exige permiso de la CAR para cualquier intervención en cauces
              naturales o artificiales, sus rondas hídricas o zonas de manejo y preservación ambiental.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {TIPOS_OBRA.map((t) => (
                <div key={t.tipo} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{t.tipo}</h3>
                  <p className="text-gray-400 text-sm mb-3">{t.desc}</p>
                  <p className="text-xs text-blue-400 font-medium">Aplica para: {t.aplica}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── Proceso ── */}
        <Section className="py-16" id="proceso">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Metodología BIC</SectionLabel>
            <h2 className="text-3xl font-bold mb-4">Proceso de tramitación paso a paso</h2>
            <p className="text-gray-400 mb-10">
              Llevamos el proceso completo: desde la visita técnica inicial hasta la Resolución de la CAR.
            </p>
            <div className="space-y-8">
              {PROCESO.map((p) => (
                <div key={p.paso} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 font-mono font-bold text-sm">{p.paso}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{p.titulo}</h3>
                    <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.herramientas.map((h) => (
                        <span key={h} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-green-400 font-medium">✓ {p.resultado}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── Normativa ── */}
        <Section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Marco normativo</SectionLabel>
            <h2 className="text-3xl font-bold mb-8">Regulación aplicable en Colombia</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  norma: 'Decreto 1076/2015',
                  tema: 'Decreto Único Reglamentario Sector Ambiente',
                  detalle: 'Art. 2.2.3.2: Define el permiso de ocupación de cauces, plazos del trámite, documentación requerida y competencia de las CAR.',
                },
                {
                  norma: 'Decreto 1807/2015',
                  tema: 'Incorporación de la gestión del riesgo en POT',
                  detalle: 'Define la ronda hídrica, zona de manejo y preservación ambiental (ZMPA) y las restricciones constructivas para predios con cauces.',
                },
                {
                  norma: 'Ley 99/1993',
                  tema: 'Creación del SINA y las CAR',
                  detalle: 'Atribuye a las CAR la competencia para otorgar concesiones y permisos sobre el uso, aprovechamiento o afectación de recursos naturales renovables.',
                },
                {
                  norma: 'Ley 1333/2009',
                  tema: 'Régimen sancionatorio ambiental',
                  detalle: 'Establece las sanciones por infracciones ambientales: multas hasta 5.000 SMLMV, decomiso de bienes, suspensión de actividades y demolición de obras.',
                },
                {
                  norma: 'Manual de Diseño Hidráulico — INVIAS',
                  tema: 'Diseño de puentes y obras de cruce',
                  detalle: 'Guía técnica para el diseño hidráulico de obras de cruce de cauces: periodo de retorno, socavación, borde libre y efectos del cambio climático.',
                },
                {
                  norma: 'Resolución 1484/2018 MADS',
                  tema: 'Guía nacional para delimitación de cauces',
                  detalle: 'Establece la metodología para delimitar el cauce permanente, la ronda hídrica y la ZMPA. Usada en los estudios técnicos de los expedientes de permiso.',
                },
              ].map((n) => (
                <div key={n.norma} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-blue-400 font-mono font-bold text-sm mb-1">{n.norma}</div>
                  <div className="font-semibold mb-2">{n.tema}</div>
                  <p className="text-gray-400 text-sm">{n.detalle}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── Tiempos y costos ── */}
        <Section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <SectionLabel>Inversión y tiempos</SectionLabel>
            <h2 className="text-3xl font-bold mb-8">¿Cuánto cuesta y cuánto demora?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  tipo: 'Puente o box culvert simple',
                  cauce: 'Cauce < 5 m³/s',
                  honorarios: 'Desde $6M COP',
                  tiempo_bic: '6–8 semanas',
                  tiempo_car: '3–5 meses',
                },
                {
                  tipo: 'Bocatoma o muro de protección',
                  cauce: 'Cauce medio',
                  honorarios: '$10M – $18M COP',
                  tiempo_bic: '8–12 semanas',
                  tiempo_car: '4–6 meses',
                },
                {
                  tipo: 'Encauzamiento o protección compleja',
                  cauce: 'Río principal',
                  honorarios: '$20M – $35M COP',
                  tiempo_bic: '10–16 semanas',
                  tiempo_car: '5–8 meses',
                },
              ].map((c) => (
                <div key={c.tipo} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold mb-1">{c.tipo}</h3>
                  <p className="text-xs text-gray-400 mb-4">{c.cauce}</p>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Honorarios BIC</div>
                      <div className="text-blue-300 font-bold">{c.honorarios}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Estudios + expediente</div>
                      <div className="text-green-300">{c.tiempo_bic}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Trámite ante CAR</div>
                      <div className="text-yellow-300">{c.tiempo_car}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 text-center">
              * Los honorarios son orientativos y dependen del tipo de cauce, la complejidad de la obra y la CAR competente.
              La tasa de evaluación ambiental de la CAR se cobra por separado y varía entre $800K y $4M COP.
              Cotización sin costo por WhatsApp.
            </p>
          </div>
        </Section>

        <ThinLine />

        {/* ── CTA ── */}
        <Section className="py-10">
          <div className="max-w-3xl mx-auto px-6">
            <QuoteFormInline
              waNumber={WA}
              waMsg={WA_MSG}
              title="Cotiza tu permiso de ocupación de cauce"
              subtitle="Cuéntanos el tipo de obra y el cauce. Te respondemos en menos de 24 horas con un alcance y precio orientativo."
            />
          </div>
        </Section>

        <ThinLine />

        {/* ── FAQ ── */}
        <Section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="text-3xl font-bold mb-8">Permiso de ocupación de cauce en Colombia</h2>
            <div className="space-y-6">
              {FAQ.map((f) => (
                <div key={f.q} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold mb-3">{f.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* ── CARs ── */}
        <Section className="py-14">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionLabel>Cobertura nacional</SectionLabel>
            <h2 className="text-2xl font-bold mb-4">CAR donde BIC tramita permisos de ocupación de cauce</h2>
            <p className="text-gray-400 mb-8">
              Experiencia con los sistemas de información, términos de referencia y tiempos de respuesta de cada corporación.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'CORPOCALDAS — Caldas',
                'CRQ — Quindío',
                'CARDER — Risaralda',
                'CORNARE — Oriente Antioqueño',
                'CORANTIOQUIA — Antioquia',
                'CAR — Cundinamarca',
                'CORTOLIMA — Tolima',
                'CVC — Valle del Cauca',
              ].map((c) => (
                <span key={c} className="bg-blue-900/30 border border-blue-700/30 text-blue-200 text-sm px-4 py-2 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <ThinLine />

        <CTABanner
          title="¿Necesitas permiso de ocupación de cauce?"
          subtitle="Cuéntanos tu proyecto y el cauce involucrado. BIC elabora los estudios y lleva el trámite completo ante la CAR."
          waNumber={WA}
          waMsg={WA_MSG}
          ctaText="Hablar con un especialista"
        />
      </BlueprintBg>
    </>
  )
}
