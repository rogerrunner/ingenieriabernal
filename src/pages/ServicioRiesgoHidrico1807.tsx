import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import QuoteFormInline from '@/components/QuoteFormInline'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent(
  'Hola, necesito un estudio de riesgo hídrico por inundación según el Decreto 1807 de 2014. ¿Pueden elaborarlo con modelación HEC-RAS 2D?'
)

const seoConfig = {
  title: 'Estudio Riesgo Hídrico Decreto 1807 Colombia 2026 — HEC-RAS 2D | BIC',
  description: 'BIC elabora estudios de riesgo hídrico Decreto 1807 con modelación HEC-RAS 2D: estudio básico y detallado para POT, licencias urbanísticas y planes parciales. Mapas de amenaza 1:2.000, concepto de aptitud urbanística firmado COPNIA. Cotización en 24 h.',
  keywords: [
    'estudio riesgo hídrico Decreto 1807 Colombia 2026',
    'estudio amenaza inundación licencia construcción Colombia',
    'HEC-RAS 2D estudio inundación Colombia',
    'estudio básico riesgo hídrico Decreto 1807',
    'estudio detallado inundación plan parcial Colombia',
    'mapa amenaza inundación 1:2000 Colombia',
    'concepto aptitud urbanística inundación Colombia',
    'estudio riesgo hídrico curaduría urbana Colombia',
    'Decreto 1807 2014 zonas inundación Colombia',
    'gestión riesgo hídrico municipio Colombia',
    'estudio riesgo hídrico Manizales Caldas',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/estudio-riesgo-hidrico-decreto-1807',
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el estudio de riesgo hídrico del Decreto 1807 de 2014?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Decreto 1807 de 2014 (compilado en el artículo 2.2.2.2.1.3 del Decreto 1077 de 2015) obliga a los municipios de Colombia a incorporar el análisis del riesgo de inundación en sus POT y exige estudios técnicos específicos para proyectos en zonas con amenaza hídrica alta o media. Hay dos niveles: estudios básicos (para identificar zonas con condición de amenaza) y estudios detallados (para determinar la aptitud urbanística de predios concretos en amenaza alta). Los estudios detallados son los que exigen las Curadurías Urbanas para expedir licencias urbanísticas en predios con cauce o zona inundable.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo exige la Curaduría el estudio de riesgo hídrico Decreto 1807?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Curaduría Urbana exige el estudio de riesgo hídrico Decreto 1807 cuando el predio o parte de él está clasificado en el POT como zona de amenaza alta o media por inundación o avenida torrencial. En la práctica, casi todo predio cerca de ríos, quebradas o cuerpos de agua en Colombia requiere este estudio. También lo exige el OCAD para proyectos del Sistema General de Regalías (SGR) con componente de infraestructura hídrica, y las entidades financieras para due diligence de proyectos inmobiliarios en zonas de amenaza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre el estudio básico y el estudio detallado Decreto 1807?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El estudio básico aplica para municipios sin capacidad técnica y usa cartografía general (IDEAM, IGAC, POMCA) para delimitar zonas con condición de amenaza en escala 1:25.000 o 1:10.000. El estudio detallado es el que exige la Curaduría para una licencia de construcción o urbanismo específica: requiere modelación hidráulica 2D (HEC-RAS 2D), topobatimetría del cauce, caudales de diseño para tr=10, 25, 50 y 100 años, mapa de amenaza a escala 1:2.000, análisis de vulnerabilidad y concepto de aptitud urbanística firmado por ingeniero con matrícula COPNIA vigente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta y cuánto demora el estudio de riesgo hídrico Decreto 1807?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El costo depende del tamaño del predio, la complejidad del cauce y si existe LiDAR disponible. Un estudio detallado para un proyecto de vivienda mediano en Caldas o Eje Cafetero puede estar entre $15 y $60 millones COP. El plazo es de 4 a 10 semanas desde el contrato hasta la entrega. BIC entrega el expediente listo para radicación ante la Curaduría con firma COPNIA vigente. Cotización en 24 horas: WA +57 302 477 8910.',
      },
    },
  ],
}

const COMPONENTES = [
  {
    icon: '🌊',
    titulo: 'Análisis hidrológico HEC-HMS',
    desc: 'Caudales de diseño para tr = 10, 25, 50 y 100 años. Curvas IDF con datos IDEAM, parámetros de cuenca y generación de hidrogramas de diseño para cada período de retorno.',
  },
  {
    icon: '🖥️',
    titulo: 'Modelación hidráulica HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo de inundación. Determinación de manchas de inundación, profundidades máximas y velocidades para cada período de retorno. Calibración con registros históricos cuando hay información disponible.',
  },
  {
    icon: '🗺️',
    titulo: 'Cartografía SIG — escala 1:2.000',
    desc: 'Mapas de amenaza alta, media y baja en ArcGIS Pro a escala 1:2.000 (requerida por Curadurías para licencias urbanísticas) o 1:5.000 para POT/EOT. Entrega en shapefile, GeoJSON y PDF georeferenciado.',
  },
  {
    icon: '🏘️',
    titulo: 'Análisis de vulnerabilidad y riesgo',
    desc: 'Identificación de elementos expuestos: viviendas, vías, redes de servicios. Cruce cartográfico amenaza × vulnerabilidad conforme a metodología UNGRD y guías del MVCT.',
  },
  {
    icon: '📋',
    titulo: 'Concepto de aptitud urbanística',
    desc: 'Determinación de zonas aptas, condicionadas y no aptas para urbanizar. Incluye presupuesto estimado de obras de mitigación. Firmado por Ing. Rogerio Bernal Ríos — COPNIA 171202-313228.',
  },
  {
    icon: '📐',
    titulo: 'Topobatimetría del cauce',
    desc: 'Levantamiento topográfico y batimétrico del cauce y la llanura aluvial. Perfil longitudinal, secciones transversales y MDT del área de inundación. Insumo principal del modelo HEC-RAS 2D.',
  },
]

const NIVELES = [
  {
    nivel: 'Estudio Básico',
    cuando: 'POT / EOT municipal — delimitación de zonas con condición de amenaza',
    escala: '1:25.000 a 1:10.000',
    herramienta: 'Cartografía IDEAM/IGAC + HEC-RAS 1D',
    plazo: '4 a 6 semanas',
    precio: 'Desde $8M COP',
  },
  {
    nivel: 'Estudio Detallado',
    cuando: 'Licencia urbanística / plan parcial — concepto de aptitud del predio',
    escala: '1:2.000 (exigida por Curaduría)',
    herramienta: 'Topobatimetría + HEC-RAS 2D + ArcGIS Pro',
    plazo: '6 a 10 semanas',
    precio: 'Desde $15M COP',
  },
]

export default function ServicioRiesgoHidrico1807() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const id = 'schema-faq-riesgo-hidrico-1807'
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
        <Tag>Decreto 1807 de 2014 — Curaduría Urbana · POT · SGR</Tag>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
          Estudio de Riesgo Hídrico<br />
          <span className="text-blue-400">Decreto 1807 — HEC-RAS 2D</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          BIC elabora el estudio de riesgo hídrico que exige su{' '}
          <strong>Curaduría Urbana</strong> para la licencia urbanística:
          modelación <strong>HEC-RAS 2D</strong>, cartografía de amenaza a escala 1:2.000
          y concepto de aptitud urbanística firmado COPNIA.
          Para planes parciales, licencias de construcción y actualizaciones de POT.
          Cotización en 24 horas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank">
            Cotizar estudio Decreto 1807
          </Btn>
          <Btn href="tel:+573024778910" variant="outline">
            +57 302 477 8910
          </Btn>
        </div>
      </Section>

      <ThinLine />

      {/* NIVELES */}
      <Section className="py-16">
        <SectionLabel>Básico vs. Detallado</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Tipos de estudio según el Decreto 1807
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {NIVELES.map((n) => (
            <div key={n.nivel} className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/40">
              <h3 className="text-blue-400 font-bold text-xl mb-4">{n.nivel}</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-slate-400">Cuándo aplica:</span> <span className="text-white">{n.cuando}</span></p>
                <p><span className="text-slate-400">Escala cartográfica:</span> <span className="text-white">{n.escala}</span></p>
                <p><span className="text-slate-400">Herramientas:</span> <span className="text-white">{n.herramienta}</span></p>
                <p><span className="text-slate-400">Plazo:</span> <span className="text-white">{n.plazo}</span></p>
                <p><span className="text-slate-400">Desde:</span> <span className="text-green-400 font-semibold">{n.precio}</span></p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* COMPONENTES */}
      <Section className="py-16">
        <SectionLabel>¿Qué incluye?</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Componentes del estudio detallado Decreto 1807
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPONENTES.map((c) => (
            <div key={c.titulo} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="text-white font-semibold mb-2">{c.titulo}</h3>
              <p className="text-slate-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      {/* FAQ */}
      <Section className="py-16" id="geo-fragment">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 className="text-2xl font-bold text-white mb-10 text-center">
          Estudio riesgo hídrico Decreto 1807 — FAQ
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
          <h2 className="text-xl font-bold text-white mb-4">Trato directo con el deciso