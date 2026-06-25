import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito tramitar un permiso de vertimiento ante la CAR. ¿Pueden asesorarme y elaborar el expediente completo?'
)

const seoConfig = {
  title: 'Permiso de Vertimiento Colombia 2026 — Trámite ante CAR CORPOCALDAS | BIC',
  description: 'BIC elabora el expediente completo para el permiso de vertimiento ante CORPOCALDAS, CARDER y CRQ: caracterización fisicoquímica, diseño PTAR, Formulario 1058 y seguimiento. Especialistas en beneficiaderos de café, industria y urbanizaciones. COPNIA vigente. Cotización en 24 h.',
  keywords: [
    'permiso de vertimiento Colombia 2026',
    'permiso de vertimiento CORPOCALDAS',
    'tramitar permiso vertimiento CAR',
    'permiso vertimiento beneficiadero café Colombia',
    'Resolución 0631 2015 vertimiento Colombia',
    'caracterización efluente permiso vertimiento',
    'PTAR diseño permiso vertimiento CAR',
    'Formulario 1058 permiso vertimiento',
    'permiso vertimiento CARDER Risaralda',
    'permiso vertimiento aguas residuales Colombia',
    'trámite ambiental vertimientos Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/permiso-de-vertimiento',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el permiso de vertimiento y cuándo se necesita en Colombia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El permiso de vertimiento es la autorización ambiental que otorga la CAR (CORPOCALDAS, CARDER, CRQ, etc.) para descargar aguas residuales domésticas, industriales o agroindustriales a un cuerpo de agua superficial, al suelo o al alcantarillado sin sistema de tratamiento de la ESP. Se necesita en todo proyecto productivo, urbanización, parcelación o industria que genere aguas residuales y no esté conectado al alcantarillado público. Es obligatorio antes del inicio de operaciones y su ausencia puede generar sanciones de hasta 5.000 SMLMV conforme al Decreto 1076 de 2015.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué documentos pide CORPOCALDAS para el permiso de vertimiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CORPOCALDAS exige: (1) Formulario 1058 de 2021 (solicitud permiso vertimiento), (2) caracterización fisicoquímica del efluente en laboratorio acreditado por el IDEAM con el protocolo de la Resolución 0063 de 2016, (3) plano de localización del punto de descarga con coordenadas Magna-Sirgas, (4) descripción o diseño del sistema de tratamiento, (5) aforo del caudal vertido, (6) copia del título de tenencia o propiedad del predio, y (7) certificado de existencia y representación para personas jurídicas. BIC elabora el expediente completo y lo radica ante la corporación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué parámetros exige la Resolución 0631 de 2015 para beneficiaderos de café?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Resolución 0631 de 2015 del MADS, Artículo 12 (subsector café), establece para vertimientos de beneficiaderos a cuerpos de agua: pH entre 6 y 9, temperatura ≤ 30 °C, DBO₅ ≤ 200 mg/L, DQO ≤ 400 mg/L, SST ≤ 200 mg/L, y prohibición de verter pulpa o mucílago sin tratar directamente al cauce. BIC diseña sistemas de tratamiento (trampa de pulpa, tanque homogenizador, filtro anaerobio) que cumplen estos límites y permiten obtener el permiso ante CORPOCALDAS, CARDER o CRQ.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo demora el trámite del permiso de vertimiento ante la CAR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una vez radicado el expediente completo ante la CAR, el plazo legal de respuesta es de 60 días hábiles (Decreto 1076 de 2015). En la práctica, CORPOCALDAS responde entre 3 y 6 meses. Los expedientes incompletos generan requerimientos que reinician el plazo. BIC presenta expedientes completos desde el primer radicado para minimizar demoras. El tiempo de preparación del expediente es 4 a 8 semanas según la complejidad del vertimiento.',
      },
    },
  ],
}

const TIPOS = [
  {
    icon: '☕',
    titulo: 'Beneficiaderos de café',
    desc: 'Diseño de trampa de pulpa, sistema de tratamiento de aguas mieles y trámite ante CORPOCALDAS, CARDER o CRQ. Resolución 0631/2015 Art. 12.',
  },
  {
    icon: '🏘️',
    titulo: 'Urbanizaciones y parcelaciones',
    desc: 'Proyectos residenciales fuera del alcantarillado municipal. PTAR compacta o sistema séptico tecnificado + permiso ante CAR.',
  },
  {
    icon: '🏭',
    titulo: 'Industria y agroindustria',
    desc: 'Plantas de proceso, lavandería, industria textil, metalmecánica, lácteos. Caracterización sector + diseño tratamiento + expediente.',
  },
  {
    icon: '🏗️',
    titulo: 'Campamentos y obras',
    desc: 'Campamentos de obra vial, minería y construcción con generación de aguas residuales domésticas. Trámite ante CAR regional.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Aforo y diagnóstico del vertimiento',
    desc: 'Visita técnica al predio, aforo del caudal de descarga y diagnóstico del sistema de tratamiento existente. Identificación del cuerpo receptor y determinación de los parámetros a caracterizar según la Resolución 0631/2015.',
  },
  {
    paso: '02',
    titulo: 'Caracterización fisicoquímica del efluente',
    desc: 'Toma de muestra compuesta de 24 horas según protocolo Resolución 0063/2016. Análisis en laboratorio acreditado por el IDEAM. Comparación con límites máximos permisibles de la Res. 0631/2015 para el sector productivo del cliente.',
  },
  {
    paso: '03',
    titulo: 'Diseño del sistema de tratamiento (si aplica)',
    desc: 'Si el efluente no cumple los límites de la Res. 0631/2015, BIC diseña la PTAR adecuada: sistema séptico tecnificado, trampa de grasas, reactor UASB, filtro percolador o humedal artificial, según el tipo de vertimiento y el caudal. Incluye planos y memorias de cálculo.',
  },
  {
    paso: '04',
    titulo: 'Elaboración del expediente técnico',
    desc: 'Diligenciamiento del Formulario 1058/2021, informe técnico del vertimiento, resultados de laboratorio, planos georreferenciados del punto de descarga y descripción del sistema de tratamiento. Todo conforme al checklist de la CAR respectiva.',
  },
  {
    paso: '05',
    titulo: 'Radicación y seguimiento ante la CAR',
    desc: 'Radicación presencial o virtual del expediente ante CORPOCALDAS (Manizales), CARDER (Pereira) o CRQ (Armenia) según localización del proyecto. BIC hace seguimiento y atiende requerimientos durante el trámite.',
  },
]

const CHECKLIST = [
  'Formulario 1058 de 2021 (descargable en la web de la CAR)',
  'Caracterización fisicoquímica en laboratorio acreditado IDEAM',
  'Protocolo de muestreo conforme a Resolución 0063 de 2016',
  'Aforo del caudal de descarga (medición in situ)',
  'Plano de localización punto de descarga — coordenadas Magna-Sirgas',
  'Descripción del sistema de tratamiento existente o propuesto',
  'Información del cuerpo receptor (nombre, coordenadas, caudal si aplica)',
  'Copia del título de tenencia o escritura del predio',
  'Cámara de comercio o cedula (persona natural o jurídica)',
  'Pago de servicios de evaluación ante la CAR',
]

export default function ServicioPermisoVertimiento() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = 'schema-faq-permiso-vertimiento'
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
        <Tag>CORPOCALDAS · CARDER · CRQ — Eje Cafetero</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Permiso de Vertimiento<br />
          <span className="text-blue-400">ante CAR Colombia 2026</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          BIC elabora el expediente completo para tramitar su permiso de vertimiento ante{' '}
          <strong>CORPOCALDAS, CARDER o CRQ</strong>: caracterización fisicoquímica,
          diseño de PTAR, Formulario 1058 y seguimiento hasta la resolución.
          Especialistas en <strong>beneficiaderos de café</strong>, urbanizaciones e industria.
          Cotización en 24 horas. COPNIA vigente.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar permiso de vertimiento
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
          Tipos de vertimiento que tramitamos
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
        <SectionLabel>Proceso</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          ¿Cómo tramitamos el permiso de vertimiento?
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

      {/* CHECKLIST */}
      <Section className="py-16">
        <SectionLabel>Checklist CORPOCALDAS</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Documentos requeridos para el permiso de vertimiento
        </h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {CHECKLIST.map((item) => (
            <div key={item} className="flex gap-3 bg-slate-800/40 rounded-lg p-4 border border-slate-700">
              <span className="text-green-400 font-bold flex-shrink-0">✓</span>
              <p className="text-slate-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* FAQ */}
      <Section className="py-16" id="geo-fragment">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Permiso de vertimiento — Preguntas frecuentes
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
        <CTABanner service="Permiso de Vertimiento — Trámite ante CAR (CORPOCALDAS / CARDER / CRQ)" />
        <div className="mt-10">
          <QuoteFormInline serviceId="permiso" />
        </div>
      </Section>
    </>
  )
}
