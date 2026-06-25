import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar un permiso de ocupacion de cauce ante la CAR. Pueden orientarme sobre los estudios requeridos y cotizar el servicio?'
)

const seoConfig = {
  title: 'Permiso de Ocupación de Cauce Colombia 2026 — Trámite CAR CORPOCALDAS | BIC',
  description:
    'BIC tramita permisos de ocupación de cauce ante CORPOCALDAS, CRQ y CAR en Colombia: bocatomas, puentes, muros de protección y obras en ronda hídrica. Modelación HEC-RAS + expediente completo. Desde $6M COP. COPNIA vigente. Cotización en 24 h.',
  keywords: [
    'permiso ocupación de cauce Colombia 2026',
    'permiso ocupación cauce CORPOCALDAS',
    'permiso ocupación cauce CRQ',
    'tramitar permiso ocupación cauce',
    'obra en cauce Colombia requisitos',
    'construir cerca río permiso CAR',
    'permiso bocatoma Colombia',
    'permiso puente sobre río Colombia',
    'autorización ambiental ocupación cauce',
    'Decreto 1076 ocupación cauce Colombia',
    'modelación HEC-RAS permiso cauce Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-ocupacion-cauce-colombia',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el permiso de ocupación de cauce en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una autorización ambiental que otorga la CAR competente para intervenir, construir o ubicar obras dentro de un cauce natural o su ronda hídrica. Lo regula el Decreto 1076/2015 (Artículo 2.2.3.2) y es obligatorio para bocatomas, puentes, muros de encauzamiento, canales y cualquier obra que modifique el cauce o sus márgenes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre permiso de ocupación de cauce y concesión de aguas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son dos permisos distintos. La concesión de aguas autoriza el USO (extracción) del agua superficial. El permiso de ocupación de cauce autoriza la CONSTRUCCIÓN de una obra en el cauce o su ronda, aunque no se extraiga agua. Una bocatoma necesita ambos: concesión (para captar agua) y permiso de ocupación (para construir la obra de captación). BIC tramita los dos en paralelo para reducir tiempos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta tramitar el permiso de ocupación de cauce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo depende del tipo de obra y la complejidad del cauce. En BIC, los honorarios profesionales para elaborar los estudios técnicos y el expediente parten desde $6M COP para obras menores (puentes o muros en cauces de primer orden). Obras complejas (bocatomas en ríos principales, encauzamientos urbanos) pueden estar entre $12M y $30M. La CAR cobra adicionalmente la tasa por evaluación ambiental.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto demora obtener el permiso de ocupación de cauce ante CORPOCALDAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BIC tarda entre 6 y 12 semanas en elaborar los estudios técnicos (topobatimetría, modelación HEC-RAS, diseño y expediente). Una vez radicado, la CAR tiene 30 días hábiles para pronunciarse (Decreto 1076/2015), pero CORPOCALDAS demora en la práctica entre 3 y 6 meses dependiendo de la carga administrativa.',
      },
    },
  ],
}

const TIPOS_OBRA = [
  {
    icon: '🚰',
    tipo: 'Bocatomas y captaciones',
    desc: 'Toda obra de derivación de agua superficial requiere permiso de ocupación de cauce Y concesión de aguas. Aplica para acueductos rurales, riego, agroindustria y mini-centrales hidroeléctricas.',
    aplica: 'Acueductos veredales, fincas con riego, agroindustria.',
  },
  {
    icon: '🌉',
    tipo: 'Puentes y pasos vehiculares',
    desc: 'Cualquier puente, box culvert o paso vehicular sobre un cauce natural necesita permiso. Se requiere modelación HEC-RAS que demuestre que la obra no eleva niveles ni genera erosión aguas abajo.',
    aplica: 'Urbanizaciones, fincas, proyectos viales.',
  },
  {
    icon: '🏗️',
    tipo: 'Muros de contención y protección',
    desc: 'Muros en gaviones, concreto ciclópeo, escolleras o geomallas paralelos o transversales al cauce requieren permiso. El expediente debe incluir diseño hidráulico de la protección.',
    aplica: 'Predios con riesgo hídrico, urbanizaciones, vías rurales.',
  },
  {
    icon: '💧',
    tipo: 'Canales de riego y conducción',
    desc: 'Canales dentro del cauce activo o en la ronda hídrica requieren autorización. BIC elabora el diseño hidráulico y el expediente ambiental para la CAR correspondiente.',
    aplica: 'Arroceras, ganadería intensiva, floricultura bajo riego.',
  },
  {
    icon: '🏕️',
    tipo: 'Infraestructura turística en ronda',
    desc: 'Cabañas, balnearios, senderos sobre o adyacentes al cauce. La CAR exige que la infraestructura respete la ronda hídrica (mínimo 30 m) con estudio hidráulico de no afectación.',
    aplica: 'Proyectos ecoturísticos, glamping, balnearios rurales.',
  },
  {
    icon: '🏘️',
    tipo: 'Urbanizaciones en ronda hídrica',
    desc: 'Proyectos constructivos en zonas aledañas al cauce que requieren demostrar no afectación hidráulica. Incluye canalización de cauces en zonas urbanas en expansión.',
    aplica: 'Constructoras, planes parciales, licencias con cauces.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico y viabilidad',
    desc: 'Revisión del predio, el cauce y el tipo de obra para confirmar si se requiere permiso de ocupación de cauce, permiso de vertimientos, concesión de aguas o combinación. Verificación de la CAR competente (CORPOCALDAS, CRQ, CARDER, CORNARE, etc.).',
  },
  {
    paso: '02',
    titulo: 'Modelación hidráulica HEC-RAS',
    desc: 'Levantamiento topobatimétrico del cauce, aforo de caudales (Q2, Q10, Q50, Q100) y modelación HEC-RAS 1D/2D para determinar niveles de inundación existentes y los cambios que introduce la obra proyectada. Es el núcleo técnico del expediente.',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico de la obra',
    desc: 'Diseño de la bocatoma, puente, muro, canal o protección. Dimensionamiento hidráulico, planos constructivos en AutoCAD con firma de especialista COPNIA vigente. BIC coordina con el diseñador estructural si se requiere cálculo sísmico NSR-10.',
  },
  {
    paso: '04',
    titulo: 'Expediente ambiental para la CAR',
    desc: 'Elaboración del expediente completo según los términos de referencia de la CAR: formularios, informe técnico integrado (topografía, hidrología, hidráulica, diseño), coordenadas del predio y la obra, certificado de tradición y demás requisitos documentales.',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento ante la CAR',
    desc: 'BIC radica el expediente, atiende las visitas de campo de la CAR, responde los requerimientos técnicos y acompañamos el proceso hasta la expedición de la Resolución de permiso.',
  },
]

export default function PermisoOcupacionCauceColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = 'schema-faq-permiso-cauce'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.type = 'application/ld+json'
      s.text = JSON.stringify(schemaFAQ)
      document.head.appendChild(s)
    }
    return () => { document.getElementById(id)?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <BlueprintBg />

      {/* HERO */}
      <Section className="pt-28 pb-16 text-center">
        <Tag>Trámite Ambiental CAR — CORPOCALDAS · CRQ · CARDER</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Permiso de Ocupación de Cauce<br />
          <span className="text-blue-400">Colombia 2026 — Trámite ante CAR</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          BIC tramita el permiso de ocupación de cauce ante <strong>CORPOCALDAS, CRQ, CARDER</strong> y demás CAR en Colombia.
          Modelación <strong>HEC-RAS</strong>, diseño hidráulico de la obra y expediente completo para
          bocatomas, puentes, muros de protección y obras en ronda hídrica.
          Desde <strong>$6M COP</strong>. COPNIA vigente. Cotización en 24 horas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar permiso de cauce
          </Btn>
          <Btn href="tel:+573024778910" variant="outline">
            +57 302 477 8910
          </Btn>
        </div>
      </Section>

      <ThinLine />

      {/* TIPOS */}
      <Section className="py-16">
        <SectionLabel>¿Cuándo se necesita?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Obras que requieren permiso de ocupación de cauce
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIPOS_OBRA.map((t) => (
            <div key={t.tipo} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="text-white font-semibold mb-2">{t.tipo}</h3>
              <p className="text-slate-400 text-sm mb-2">{t.desc}</p>
              <p className="text-xs text-blue-400">Aplica para: {t.aplica}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* PROCESO */}
      <Section className="py-16">
        <SectionLabel>Proceso BIC</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Tramitación paso a paso
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {PROCESO.map((p) => (
            <div key={p.paso} className="flex gap-5 bg-slate-800/40 rounded-xl p-5 border border-slate-700">
              <div className="text-3xl font-black text-blue-500 flex-shrink-0 w-10">{p.paso}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{p.titulo}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* NORMATIVA */}
      <Section className="py-16">
        <SectionLabel>Marco normativo</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Regulación aplicable</h2>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[
            { norma: 'Decreto 1076/2015 Art. 2.2.3.2', desc: 'Define el permiso de ocupación de cauces, plazos del trámite, documentación requerida y competencia de las CAR.' },
            { norma: 'Decreto 1807/2015', desc: 'Define la ronda hídrica y la ZMPA. Restricciones constructivas para predios con cauces.' },
            { norma: 'Ley 99/1993', desc: 'Atribuye a las CAR la competencia para otorgar permisos sobre el uso y afectación de recursos naturales renovables.' },
            { norma: 'Resolución 1484/2018 MADS', desc: 'Guía nacional para delimitación de cauces. Metodología para delimitar cauce permanente, ronda hídrica y ZMPA.' },
            { norma: 'Manual de Diseño Hidráulico INVIAS', desc: 'Guía técnica para diseño hidráulico de puentes y obras de cruce: período de retorno, socavación y borde libre.' },
            { norma: 'Ley 1333/2009', desc: 'Régimen sancionatorio ambiental: multas hasta 5.000 SMLMV, demolición de obras y suspensión de actividades.' },
          ].map((n) => (
            <div key={n.norma} className="bg-slate-800/40 rounded-xl p-5 border border-slate-700">
              <div className="text-blue-400 font-mono font-bold text-sm mb-1">{n.norma}</div>
              <p className="text-slate-400 text-sm">{n.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* FAQ */}
      <Section className="py-16" id="geo-fragment">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Permiso de ocupación de cauce — FAQ
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {schemaFAQ.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
              <h3 className="text-white font-semibold mb-2">{faq.name}</h3>
              <p className="text-slate-300 text-sm">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* CTA */}
      <Section className="py-16">
        <CTABanner service="Permiso de Ocupación de Cauce — Trámite ante CORPOCALDAS / CRQ / CARDER" />
        <div className="mt-10">
          <QuoteFormInline serviceId="permiso" />
        </div>
      </Section>
    </>
  )
}
