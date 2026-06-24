import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar una concesión de aguas superficiales en Manizales / Caldas ante CORPOCALDAS. ¿Pueden ayudarme?'
)

const seoConfig = {
  title: 'Concesión de Aguas Superficiales Manizales y Caldas | CORPOCALDAS | BIC',
  description:
    'Tramitamos concesiones de aguas superficiales ante CORPOCALDAS en Manizales, Chinchiná, La Dorada, Villamaría y todo Caldas. Estudio hidrológico, aforo, balance hídrico y radicación completa. Desde $4M COP. COPNIA vigente.',
  keywords: [
    'concesión aguas superficiales Manizales',
    'concesión hídrica CORPOCALDAS',
    'permiso captación agua Caldas',
    'trámite concesión aguas Manizales',
    'concesión agua río quebrada Caldas',
    'aforo hídrico Manizales',
    'estudio oferta hídrica Caldas',
    'concesión aguas Chinchiná',
    'concesión aguas La Dorada Caldas',
    'CORPOCALDAS trámite concesión hídrica',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-superficiales-manizales',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué empresa tramita la concesión de aguas superficiales ante CORPOCALDAS en Manizales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BIC — Bernal Ingeniería Consultores, con sede en Manizales, tramita concesiones de aguas superficiales ante CORPOCALDAS para proyectos en todo el departamento de Caldas. El servicio incluye aforo de la fuente, estudio hidrológico de oferta hídrica, balance oferta-demanda, memoria técnica y expediente completo para radicación. COPNIA 171202-313228 CLD. Cotización en 24 horas: +57 302 477 8910.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta tramitar la concesión de aguas superficiales en Caldas ante CORPOCALDAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo de la concesión de aguas superficiales ante CORPOCALDAS en Caldas oscila entre $4 y $12 millones COP según el tipo de fuente, el uso (acueducto, riego, industria) y la complejidad del estudio hidrológico requerido. BIC incluye el aforo de campo, el estudio de oferta hídrica y el expediente completo. Plazo: 4 a 10 semanas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son los requisitos para pedir una concesión de aguas en CORPOCALDAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORPOCALDAS exige para la concesión de aguas: formulario de solicitud diligenciado, certificado de uso del suelo, estudio hidrológico de oferta hídrica con aforo de la fuente, balance oferta-demanda, descripción del sistema de captación y evidencia del caudal ecológico mínimo remanente (10% del caudal medio mensual multianual según Decreto 1076/2015). BIC prepara todos estos documentos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se demora CORPOCALDAS en otorgar la concesión de aguas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORPOCALDAS tiene un plazo legal de 60 días hábiles para pronunciarse sobre la solicitud de concesión de aguas una vez radicado el expediente completo. En la práctica, el tiempo varía entre 3 y 8 meses dependiendo de la complejidad del caso y la carga de trabajo de la corporación. BIC prepara el expediente de la forma más completa posible para evitar requerimientos de información adicional que dilaten el trámite.',
      },
    },
  ],
}

const USOS = [
  {
    icon: '🏠',
    titulo: 'Acueductos veredales y parcelaciones',
    desc: 'La concesión de aguas es el requisito previo para operar legalmente un acueducto con captación en río o quebrada. BIC tramita la concesión ante CORPOCALDAS y diseña la bocatoma o captación asociada.',
  },
  {
    icon: '🌾',
    titulo: 'Riego agrícola y cafetero',
    desc: 'Para captar agua de fuentes superficiales para riego de café, pastos, cultivos de pan coger o agroindustria en Caldas. BIC elabora el balance hídrico con dotaciones FAO y el balance oferta-demanda que CORPOCALDAS exige.',
  },
  {
    icon: '🏭',
    titulo: 'Industria y beneficio de café',
    desc: 'Beneficiaderos húmedos, plantas de transformación y procesos industriales que requieren captación de agua superficial en Caldas. BIC justifica la demanda hídrica del proceso ante CORPOCALDAS.',
  },
  {
    icon: '🏫',
    titulo: 'Instituciones en zona rural sin acueducto',
    desc: 'Escuelas, hospitales y centros comunitarios en zonas rurales de Caldas sin red de acueducto que requieren captación propia con concesión de aguas ante CORPOCALDAS.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Aforo e inventario de la fuente en campo',
    desc: 'BIC realiza el aforo del caudal disponible en la fuente superficial (río o quebrada) en Caldas mediante correntómetro o molinete. Se complementa con datos hidrométricos del IDEAM disponibles para estaciones en la cuenca.',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico de oferta hídrica',
    desc: 'Análisis de la cuenca aportante, balance hídrico mensual, estimación del caudal medio multianual y el caudal mínimo disponible. Se verifica el caudal ecológico mínimo requerido por CORPOCALDAS (Decreto 1076/2015).',
  },
  {
    paso: '03',
    titulo: 'Balance oferta-demanda y caudal solicitado',
    desc: 'Justificación técnica del volumen de agua solicitado en concesión según el uso (dotaciones RAS 2017 para acueductos, módulos FAO para riego, consumos de proceso para industria). Balance que demuestra disponibilidad hídrica sin afectar usos aguas abajo.',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente para CORPOCALDAS',
    desc: 'BIC prepara el formulario de solicitud SISTEMA (ventanilla CORPOCALDAS), la memoria técnica descriptiva, los planos de localización del sistema de captación, el certificado de uso del suelo del POT municipal y los soportes del aforo.',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento',
    desc: 'Apoyo al titular en la radicación formal ante CORPOCALDAS y seguimiento al trámite para atender cualquier requerimiento de información adicional de la corporación.',
  },
]

export default function ConcesionAguasManizales() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup schema={schemaFAQ} />
      <BlueprintBg />

      {/* HERO */}
      <Section className="pt-28 pb-16 text-center">
        <Tag>CORPOCALDAS — Manizales y Caldas</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Concesión de Aguas Superficiales<br />
          <span className="text-blue-400">en Manizales y Caldas</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Tramitamos concesiones de aguas superficiales ante <strong>CORPOCALDAS</strong> para acueductos,
          riego, industria e instituciones en todo el departamento de Caldas.
          Estudio hidrológico, aforo de campo, balance hídrico y expediente completo.
          Desde <strong>$4M COP</strong>. COPNIA vigente. Cotización en 24 horas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar concesión CORPOCALDAS
          </Btn>
          <Btn href="tel:+573024778910" variant="outline">
            +57 302 477 8910
          </Btn>
        </div>
      </Section>

      <ThinLine />

      {/* USOS */}
      <Section className="py-16">
        <SectionLabel>¿Para qué se usa?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Tipos de concesión de aguas en Caldas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USOS.map((u) => (
            <div key={u.titulo} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <div className="text-3xl mb-3">{u.icon}</div>
              <h3 className="text-white font-semibold mb-2">{u.titulo}</h3>
              <p className="text-slate-400 text-sm">{u.desc}</p>
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
          Concesión de aguas superficiales en Caldas — FAQ
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

      {/* CTA + FORM */}
      <Section className="py-16">
        <CTABanner
          title="¿Necesita tramitar una concesión de aguas en Caldas?"
          subtitle="BIC es la firma de consultoría hidráulica de referencia en Manizales. Propuesta técnica en 24 horas, sin costo ni compromiso."
          cta="Cotizar ante CORPOCALDAS"
          href={`https://wa.me/${WA}?text=${WA_MSG}`}
        />
        <div className="mt-10">
          <QuoteFormInline
            serviceName="Concesión de Aguas Superficiales — Manizales / Caldas"
            waNumber={WA}
          />
        </div>
      </Section>
    </>
  )
}
