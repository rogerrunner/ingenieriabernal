import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar una concesión de aguas superficiales ante la CAR. ¿BIC puede elaborar el estudio hidrológico y el PUEAA?'
)

const seoConfig = {
  title: 'Concesión de Aguas Superficiales Colombia 2026 — Trámite ante CAR | BIC',
  description: 'BIC tramita concesiones de aguas superficiales ante CORPOCALDAS, CARDER y CRQ: estudio hidrológico, PUEAA Decreto 1090/2018, aforo y expediente completo. Para riego, acueducto rural e industria. COPNIA vigente. Cotización en 24 h.',
  keywords: [
    'concesión de aguas superficiales Colombia 2026',
    'tramitar concesión aguas CORPOCALDAS',
    'concesión aguas superficiales CAR Colombia',
    'PUEAA Plan Uso Eficiente Ahorro Agua Colombia',
    'concesión aguas riego Colombia',
    'concesión aguas acueducto rural Colombia',
    'Decreto 1076 concesión aguas Colombia',
    'estudio hidrológico concesión aguas Colombia',
    'FUN formulario concesión aguas Colombia',
    'concesión aguas CARDER Risaralda',
    'concesión aguas CRQ Quindío',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/concesion-de-aguas',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la concesión de aguas superficiales y quién la necesita en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La concesión de aguas superficiales es la autorización que otorga la CAR para captar agua de un río, quebrada, canal o laguna para uso doméstico, agrícola, pecuario, industrial o de acueducto. La necesita cualquier persona natural o jurídica que use aguas superficiales sin contar con conexión a un acueducto autorizado o que capture directamente de fuente hídrica para riego, beneficio de café, ganadería, industria o abastecimiento comunitario. Se tramita ante la CAR del departamento donde está ubicada la fuente: CORPOCALDAS, CARDER o CRQ en el Eje Cafetero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué documentos exige CORPOCALDAS para la concesión de aguas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORPOCALDAS exige: (1) Formulario Único Nacional (FUN) de solicitud de concesión, (2) Plan de Uso Eficiente y Ahorro del Agua (PUEAA) conforme al Decreto 1090 de 2018, (3) estudio hidrológico que acredite disponibilidad de caudal respetando el caudal ecológico (mínimo 25% del caudal medio mensual multianual según Decreto 3930), (4) aforo in situ del punto de captación, (5) plano de localización con coordenadas Magna-Sirgas del punto de captación, (6) descripción del uso del agua y obras de captación propuestas, y (7) documentos de identidad y título de tenencia del predio. BIC elabora el expediente completo y acompaña la radicación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el PUEAA y por qué es obligatorio para la concesión de aguas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Plan de Uso Eficiente y Ahorro del Agua (PUEAA) es un documento técnico obligatorio desde el Decreto 1090 de 2018 para todos los que soliciten concesión de aguas. Debe describir: el sistema de captación y distribución, el caudal requerido con justificación técnica, las pérdidas estimadas y su reducción, las medidas de uso eficiente y ahorro del agua, y el programa de seguimiento. La CAR evalúa el PUEAA como parte del proceso de aprobación de la concesión. BIC elabora el PUEAA conforme a la guía del MADS y al formato específico de cada CAR.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo demora la concesión de aguas ante CORPOCALDAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo legal es de 30 días hábiles para caudales menores a 0.1 m³/s (Decreto 1076/2015). En la práctica, CORPOCALDAS resuelve entre 4 y 8 meses cuando el expediente entra completo. Si hay correcciones o requerimientos, el trámite puede extenderse a 12-18 meses. El tiempo de preparación del expediente en BIC es 3 a 6 semanas según disponibilidad de información hidrológica de la fuente. Cotización en 24 h: WA +57 302 477 8910.',
      },
    },
  ],
}

const USOS = [
  {
    icon: '🌱',
    titulo: 'Riego agrícola y cafetero',
    desc: 'Captación para sistemas de riego tecnificado en fincas cafeteras, ganaderas y hortofrutícolas. PUEAA con balance hídrico del cultivo y plan de riego.',
  },
  {
    icon: '🏘️',
    titulo: 'Acueducto rural y veredal',
    desc: 'Abastecimiento comunitario de acueductos veredales, parcelaciones y condominios campestres sin conexión a acueducto municipal.',
  },
  {
    icon: '🏭',
    titulo: 'Uso industrial y agroindustrial',
    desc: 'Beneficiaderos de café, plantas de proceso, piscicultura y extractivas que requieren agua superficial para sus procesos productivos.',
  },
  {
    icon: '🏗️',
    titulo: 'Obras y campamentos',
    desc: 'Captación temporal para campamentos de obra vial, minería e ingeniería con alta demanda de agua en zonas sin infraestructura de acueducto.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Visita de campo y aforo',
    desc: 'Reconocimiento del punto de captación propuesto, aforo del caudal disponible (método molinete o sección-velocidad) y registro fotográfico georeferenciado. Verificación de caudal ecológico requerido.',
  },
  {
    paso: '02',
    titulo: 'Estudio hidrológico',
    desc: 'Análisis de caudales medios mensuales de la fuente con datos IDEAM o generación sintética. Verificación de disponibilidad de caudal para el uso solicitado respetando el caudal ecológico (Decreto 3930/2010). Generación del balance hídrico.',
  },
  {
    paso: '03',
    titulo: 'Plan de Uso Eficiente y Ahorro del Agua (PUEAA)',
    desc: 'Elaboración del PUEAA conforme al Decreto 1090 de 2018 y al formato exigido por la CAR: descripción de la obra de captación, caudal justificado técnicamente, pérdidas estimadas, medidas de ahorro y programa de seguimiento con indicadores.',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente técnico',
    desc: 'Diligenciamiento del Formulario Único Nacional (FUN), informe técnico con estudio hidrológico, PUEAA, planos de la obra de captación georeferenciados y todos los anexos requeridos por la CAR. Revisión de requisitos ante CORPOCALDAS, CARDER o CRQ según localización.',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento ante la CAR',
    desc: 'Radicación del expediente ante la CAR correspondiente y seguimiento durante el proceso de evaluación. BIC atiende requerimientos técnicos adicionales de la corporación y gestiona la resolución de otorgamiento o las correcciones necesarias.',
  },
]

export default function ServicioConcesionAguas() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = 'schema-faq-concesion-aguas'
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
        <Tag>CORPOCALDAS · CARDER · CRQ — Eje Cafetero y Colombia</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Concesión de Aguas Superficiales<br />
          <span className="text-blue-400">Trámite ante CAR Colombia 2026</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          BIC tramita concesiones de aguas superficiales ante{' '}
          <strong>CORPOCALDAS, CARDER y CRQ</strong>: estudio hidrológico,
          aforo del punto de captación, <strong>PUEAA</strong> (Decreto 1090/2018)
          y expediente completo para radicación. Para riego, acueducto rural e industria.
          Cotización en 24 horas. COPNIA vigente.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar concesión de aguas
          </Btn>
          <Btn href="tel:+573024778910" variant="outline">
            +57 302 477 8910
          </Btn>
        </div>
      </Section>

      <ThinLine />

      {/* USOS */}
      <Section className="py-16">
        <SectionLabel>¿Para qué usos?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Concesiones de aguas que tramitamos
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
        <SectionLabel>Proceso</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          ¿Cómo tramitamos la concesión de aguas?
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
          Concesión de aguas superficiales — FAQ
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

      {/* ANTI-INTERMEDIARIO */}
      <Section style={{ background: 'rgba(0,0,0,0.25)', padding: '48px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="text-xl font-bold text-white mb-4">Trato directo con el decisor técnico — sin 