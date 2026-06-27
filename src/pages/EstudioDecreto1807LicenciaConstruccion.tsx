import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio de riesgo hidrico Decreto 1807 para tramitar mi licencia de construccion. Pueden cotizar?')

const seoConfig = {
  title: 'Estudio Decreto 1807 para Licencia de Construccion Colombia — BIC COPNIA',
  description: 'Estudio de riesgo hidrico Decreto 1807 para licencia de construccion. Requisito de Curaduria Urbana en Colombia. BIC — COPNIA 17202-313228 CLD — propuesta en 24 horas. HEC-RAS 2D. $8M–$35M COP.',
  keywords: [
    'estudio Decreto 1807 licencia construccion',
    'estudio riesgo hidrico licencia urbanismo Colombia',
    'Decreto 1807 Curaduria Urbana requisito',
    'estudio hidrologico licencia construccion Colombia',
    'como tramitar Decreto 1807 Colombia',
    'cuanto cuesta estudio Decreto 1807',
    'riesgo hidrico licencia urbanismo Colombia 2026',
    'HEC-RAS 2D Colombia licencia construccion',
  ],
  canonical: 'https://ingenieriabernal.co/estudio-decreto-1807-licencia-construccion',
}

const STEPS = [
  { n: 1, t: 'Revision preliminar del predio', d: 'Verificamos en cartografia oficial si el predio tiene afectacion de ronda hidrica, zona de amenaza o restriccion por cauce. En 24 horas le decimos si requiere estudio detallado y a que nivel de complejidad.' },
  { n: 2, t: 'Levantamiento de campo', d: 'Visita tecnica para levantamiento topografico del terreno, identificacion del cauce mas cercano, registro fotografico y recoleccion de datos de campo para la modelacion hidraulica.' },
  { n: 3, t: 'Modelacion hidraulica HEC-RAS 2D', d: 'Corremos el modelo bidimensional HEC-RAS 2D para calcular las manchas de inundacion para periodos de retorno de 10, 50 y 100 anos. Este es el mismo software que usa el IDEAM y las Curadurías Urbanas para verificar los estudios.' },
  { n: 4, t: 'Informe tecnico y entregables', d: 'Elaboramos el informe tecnico completo con zonificacion de amenaza hidrica, mapas, perfiles hidraulicos y recomendaciones tecnicas. El informe cumple con todos los requisitos del Decreto 1807/2014 para radicacion en Curaduria Urbana.' },
]

const FAQ = [
  { q: 'Cuando exige la Curaduria Urbana el estudio Decreto 1807?', a: 'La Curaduria Urbana exige el estudio cuando el predio se encuentra a menos de 30 metros de un cauce, en zona de amenaza hidrica segun el POT municipal, o en ladera con pendiente superior al 30%. Si hay duda, la Curaduria lo pide como requisito previo a la licencia de construccion.' },
  { q: 'Cuanto cuesta el estudio Decreto 1807 para una licencia de construccion?', a: 'El costo depende de la complejidad del predio: predios pequenos en zona de amenaza baja cuestan entre $8M y $15M COP; predios medianos o con cauce activo entre $15M y $35M COP. BIC entrega propuesta exacta en 24 horas con el costo total sin costos ocultos.' },
  { q: 'Cuanto tiempo tarda el estudio Decreto 1807?', a: 'El proceso completo tarda entre 3 y 6 semanas: 3–5 dias para revision preliminar y propuesta, 1 semana para levantamiento de campo, 2–3 semanas para modelacion HEC-RAS 2D y redaccion del informe. Para predios simples podemos reducir el plazo.' },
  { q: 'El estudio de BIC pasa la revision de la Curaduria?', a: 'Si. BIC disenamos los informes para que pasen la revision tecnica de la Curaduria Urbana sin observaciones de fondo. En caso de observaciones formales de formato, las resolvemos sin costo adicional. El objetivo es que su licencia avance sin retrasos.' },
  { q: 'BIC puede hacer el estudio para cualquier municipio de Colombia?', a: 'Si. BIC realiza estudios Decreto 1807 en todo el territorio nacional. Tenemos mayor presencia en el Eje Cafetero (Caldas, Risaralda, Quindio), Tolima y Valle del Cauca Norte, pero atendemos proyectos en todo el pais de forma remota con visita de campo cuando se requiere.' },
  { q: 'Que diferencia hay entre amenaza alta, media y baja en el Decreto 1807?', a: 'La amenaza alta corresponde a zonas que se inundan en periodos de retorno de 10 anos o menos — estas areas tienen restricciones severas para construccion. La amenaza media aplica para 50 anos y la baja para 100 anos. En amenaza media y baja pueden construirse con medidas de mitigacion especificas que el mismo informe recomienda.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

const SCHEMA_HOWTO = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: 'Como tramitar el estudio Decreto 1807 para licencia de construccion en Colombia',
  description: 'Proceso paso a paso para obtener el estudio de riesgo hidrico exigido por la Curaduria Urbana bajo el Decreto 1807 de 2014',
  totalTime: 'P6W',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'COP', minValue: 8000000, maxValue: 35000000 },
  step: STEPS.map(s => ({ '@type': 'HowToStep', position: s.n, name: s.t, text: s.d })),
}

const SCHEMA_BC = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
    { '@type': 'ListItem', position: 3, name: 'Estudio Decreto 1807', item: 'https://ingenieriabernal.co/estudio-decreto-1807-licencia-construccion' },
  ],
}

export default function EstudioDecreto1807LicenciaConstruccion() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const ids = ['schema-d1807', 'schema-d1807-hw', 'schema-d1807-bc']
    const schemas = [SCHEMA_FAQ, SCHEMA_HOWTO, SCHEMA_BC]
    ids.forEach((id, i) => {
      const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = id
      s.textContent = JSON.stringify(schemas[i]); document.head.appendChild(s)
    })
    return () => ids.forEach(id => document.getElementById(id)?.remove())
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudio Decreto 1807 para Licencia de Construccion" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Licencias de Construccion — Curaduria Urbana</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudio de Riesgo Hidrico<br />Decreto 1807 para su Licencia
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            El Decreto 1807 de 2014 exige un <strong style={{ color: '#fff' }}>estudio de riesgo hidrico</strong> para obtener licencia de construccion en predios cerca de cauces o en zonas de amenaza. BIC elabora el informe con <strong style={{ color: '#60A5FA' }}>HEC-RAS 2D</strong> y lo presentamos ante la Curaduria Urbana.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong> · Desde <strong style={{ color: '#60A5FA' }}>$8M COP</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Proceso paso a paso</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Como tramitamos su estudio Decreto 1807</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
          {STEPS.map(s => (
            <div key={s.n} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0', display: 'flex', gap: 20 }}>
              <div style={{ minWidth: 40, height: 40, background: '#1E40AF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 18 }}>{s.n}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Decreto 1807 y licencias de construccion</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
          {FAQ.map(item => (
            <div key={item.q} style={{ background: '#F8FAFC', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para estudio Decreto 1807</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion Aguas CORPOCALDAS' },
            { href: '/estudios-hidraulicos-pereira', t: 'Estudios Hidraulicos Pereira' },
            { href: '/estudios-hidraulicos-ibague', t: 'Estudios Hidraulicos Ibague' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
