import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar un permiso de vertimientos ante CORPOCALDAS en Manizales / Caldas. ¿Pueden ayudarme?'
)

const seoConfig = {
  title: 'Permiso de Vertimientos Manizales y Caldas | CORPOCALDAS | BIC',
  description:
    'Tramitamos permisos de vertimientos ante CORPOCALDAS en Manizales y todo Caldas. Caracterización del efluente, diseño PTAR, estudio del cuerpo receptor y expediente completo para radicación. Desde $5M COP. COPNIA vigente.',
  keywords: [
    'permiso de vertimientos Manizales',
    'permiso vertimientos CORPOCALDAS',
    'autorización vertimientos Caldas',
    'trámite vertimientos Manizales',
    'PTAR Manizales diseño',
    'caracterización efluente Caldas',
    'cuerpo receptor vertimiento Caldas',
    'Resolución 0631 2015 Caldas',
    'vertimiento aguas residuales Manizales',
    'CORPOCALDAS permiso descarga',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-vertimientos-manizales',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué empresa tramita el permiso de vertimientos ante CORPOCALDAS en Manizales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BIC — Bernal Ingeniería Consultores, con sede en Manizales, tramita permisos de vertimientos ante CORPOCALDAS para urbanizaciones, industrias, campamentos y proyectos en todo Caldas. El servicio incluye caracterización fisicoquímica del efluente, diseño de la PTAR si aplica, estudio del cuerpo receptor y expediente completo para radicación. COPNIA 171202-313228 CLD. Cotización en 24 horas: +57 302 477 8910.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el permiso de vertimientos en Caldas ante CORPOCALDAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo del permiso de vertimientos ante CORPOCALDAS en Caldas oscila entre $5 y $40 millones COP según el tipo de vertimiento, el tamaño del proyecto (caudal de descarga) y si se requiere diseño de PTAR. Un permiso simple para parcelación con sistema séptico puede costar desde $5M. Un proyecto industrial con PTAR compacta puede superar los $30M. Plazo: 6 a 16 semanas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué parámetros exige CORPOCALDAS en la caracterización del vertimiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORPOCALDAS aplica los valores máximos permisibles de la Resolución 0631 de 2015 del MADS. Para vertimientos de aguas residuales domésticas exige: DBO₅ ≤ 90 mg/L, DQO ≤ 180 mg/L, SST ≤ 90 mg/L, pH 6-9, temperatura ≤ 30 °C y grasas y aceites ≤ 20 mg/L, entre otros. Para vertimientos industriales aplican parámetros específicos según el sector productivo. BIC realiza la caracterización en laboratorio certificado IDEAM.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Toda parcelación o urbanización en Caldas necesita permiso de vertimientos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Toda urbanización, parcelación o proyecto productivo en Caldas que genere aguas residuales domésticas o industriales y no tenga acceso a alcantarillado público debe tramitar permiso de vertimientos ante CORPOCALDAS, independientemente del tamaño o del número de unidades. El permiso es un requisito previo a la licencia de construcción y al inicio de operación. BIC tramita el permiso con diseño de sistema de tratamiento incluido si aplica.',
      },
    },
  ],
}

const TIPOS = [
  {
    icon: '🏘️',
    titulo: 'Urbanizaciones y parcelaciones',
    desc: 'Proyectos residenciales fuera del alcance del alcantarillado municipal en Caldas. BIC diseña la PTAR compacta o el sistema séptico tecnificado y tramita el permiso ante CORPOCALDAS.',
  },
  {
    icon: '🏭',
    titulo: 'Industria y agroindustria',
    desc: 'Beneficiaderos de café, plantas lácteas, procesadoras de alimentos e industria general con vertimientos al suelo o a cuerpo hídrico. Caracterización + diseño de tratamiento + permiso.',
  },
  {
    icon: '🏕️',
    titulo: 'Campamentos y obras de infraestructura',
    desc: 'Obras viales, mineras, energéticas y de construcción que generan aguas residuales durante la fase constructiva. BIC tramita el permiso temporal de vertimientos ante CORPOCALDAS.',
  },
  {
    icon: '🏫',
    titulo: 'Instituciones educativas y de salud en zona rural',
    desc: 'Escuelas, colegios y centros de salud en municipios de Caldas sin red de alcantarillado. BIC diseña el sistema de tratamiento adecuado y gestiona el permiso ante CORPOCALDAS.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Caracterización fisicoquímica del efluente',
    desc: 'Análisis de laboratorio certificado por el IDEAM para determinar los parámetros fisicoquímicos y microbiológicos del vertimiento según la Resolución 0631/2015. BIC coordina la toma de muestra y el análisis.',
  },
  {
    paso: '02',
    titulo: 'Estudio del cuerpo receptor',
    desc: 'Evaluación de la capacidad de asimilación del cuerpo hídrico receptor (río o quebrada) en Caldas: caudal de la fuente, calidad de agua aguas arriba, modelación de la pluma de mezcla y verificación del índice de calidad de agua (ICA) aguas abajo.',
  },
  {
    paso: '03',
    titulo: 'Diseño del sistema de tratamiento (PTAR)',
    desc: 'Cuando el vertimiento no cumple los límites de la Resolución 0631/2015 en su estado bruto, BIC diseña la PTAR adecuada: sistema séptico tecnificado, PTAR compacta (UASB, filtro percolador, humedal artificial) o tratamiento avanzado. El diseño incluye planos, memorias de cálculo y especificaciones.',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente técnico',
    desc: 'BIC prepara el expediente completo para CORPOCALDAS: formulario de solicitud, informe técnico del vertimiento, resultados de laboratorio, memoria descriptiva del sistema de tratamiento, planos y localización georreferenciada del punto de descarga.',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento ante CORPOCALDAS',
    desc: 'Apoyo al titular en la radicación formal del expediente ante CORPOCALDAS en Manizales y seguimiento al trámite para atender requerimientos adicionales de la corporación durante la evaluación.',
  },
]

export default function PermisoVertimientosManizales() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = 'schema-faq-vertimientos-manizales'
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
        <Tag>CORPOCALDAS — Manizales y Caldas</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Permiso de Vertimientos<br />
          <span className="text-blue-400">en Manizales y Caldas</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Tramitamos permisos de vertimientos ante <strong>CORPOCALDAS</strong> para urbanizaciones,
          industrias, campamentos e instituciones en todo el departamento de Caldas.
          Caracterización del efluente, diseño de PTAR y expediente completo.
          Desde <strong>$5M COP</strong>. COPNIA vigente. Cotización en 24 horas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar permiso CORPOCALDAS
          </Btn>
          <Btn href="tel:+573024778910" variant="outline">
            +57 302 477 8910
          </Btn>
        </div>
      </Section>

      <ThinLine />

      {/* TIPOS */}
      <Section className="py-16">
        <SectionLabel>¿Para qué proyectos?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Tipos de permiso de vertimientos en Caldas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIPOS.map((t) => (
            <div key={t.titulo} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="text-white font-semibold mb-2">{t.titulo}</h3>
              <p className="text-slate-400 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* PROCESO */}
      <Section className="py-16">
        <SectionLabel>¿Cómo lo hacemos?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Proceso de tramitación ante CORPOCALDAS
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

      {/* FAQ */}
      <Section className="py-16" id="geo-fragment">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Permiso de vertimientos en Caldas — FAQ
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
        <CTABanner service="Permiso de Vertimientos — Manizales / Caldas (CORPOCALDAS)" />
        <div className="mt-10">
          <QuoteFormInline />
        </div>
      </Section>
    </>
  )
}
