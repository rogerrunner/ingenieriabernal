import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito tramitar permiso de vertimientos ante CARDER en Risaralda. Pueden ayudarme?')

const seoConfig = {
  title: 'Permiso de Vertimientos CARDER Risaralda — Expediente Tecnico y PTAR | BIC',
  description: 'Tramite de permiso de vertimientos ante CARDER en Risaralda y Pereira. Expediente tecnico, PSMV y diseno PTAR. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'permiso vertimientos CARDER Risaralda',
    'tramite vertimientos CARDER Pereira',
    'autorizacion ambiental vertimientos Risaralda',
    'PSMV CARDER Risaralda',
    'expediente tecnico vertimientos Pereira',
    'permiso ambiental vertimientos Risaralda Colombia',
    'PTAR diseno Risaralda CARDER',
    'ingenieria ambiental Pereira vertimientos',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-vertimientos-carder',
}

const FAQ = [
  { q: 'Quien necesita permiso de vertimientos ante CARDER en Risaralda?', a: 'Toda empresa, urbanizacion u operador que vierta aguas residuales a fuentes superficiales o al suelo en Risaralda necesita permiso de CARDER. Esto incluye proyectos en Pereira, Dosquebradas, Santa Rosa de Cabal y los demas municipios del departamento.' },
  { q: 'Que informacion necesita BIC para cotizar el tramite ante CARDER?', a: 'BIC necesita: municipio y fuente receptora del vertimiento, tipo de establecimiento (residencial, industrial, comercial), caudal estimado del vertimiento, y si ya existe un sistema de tratamiento instalado. Con esa informacion, entregamos propuesta en 24 horas.' },
  { q: 'Cuanto cuesta tramitar el permiso de vertimientos en Risaralda?', a: 'El costo depende del vertimiento: sin diseno de PTAR: $5-$12 millones COP. Con diseno de PTAR pequena (menos de 0.5 L/s): $15-$25 millones. PTAR mediana (0.5-5 L/s): $25-$40 millones. Todo incluye radicacion ante CARDER.' },
  { q: 'CARDER acepta los estudios firmados por BIC?', a: 'Si. BIC presenta estudios firmados por el Ing. Rogerio Bernal Rios con COPNIA 17202-313228 CLD. CARDER valida la idoneidad del profesional como parte del proceso de admision del expediente.' },
  { q: 'BIC puede hacer el PSMV si lo pide CARDER?', a: 'Si. El Plan de Saneamiento y Manejo de Vertimientos (PSMV) es requerido cuando el solicitante es un municipio u operador de alcantarillado. BIC elabora el PSMV con el cronograma de reduccion de cargas contaminantes exigido por la norma.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function PermisoVertimientosCarder() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-pv-carder-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-pv-carder-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Permiso de Vertimientos Colombia', item: 'https://ingenieriabernal.co/permiso-vertimientos-colombia' },
        { '@type': 'ListItem', position: 3, name: 'Permiso Vertimientos CARDER', item: 'https://ingenieriabernal.co/permiso-vertimientos-carder' },
      ],
    }); document.head.appendChild(sb)
    return () => {
      document.getElementById('schema-pv-carder-faq')?.remove()
      document.getElementById('schema-pv-carder-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Permiso de Vertimientos ante CARDER — Risaralda" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Risaralda — CARDER</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Permiso de Vertimientos ante<br />CARDER en Risaralda
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC elabora el expediente tecnico, diseña la PTAR si se requiere y gestiona el tramite
            ante <strong style={{ color: '#60A5FA' }}>CARDER</strong> — Corporacion Autonoma Regional de Risaralda.
            Firma COPNIA. Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
          </p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Cotizar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre CARDER y permiso de vertimientos</h2>
        <div style={{ display: 'grid', gap: 16, maxWidth: 820 }}>
          {FAQ.map(item => (
            <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{item.q}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para tramite ante CARDER</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section style={{ background: '#F8FAFC' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/permiso-vertimientos-colombia', t: 'Permiso de Vertimientos en Colombia' },
            { href: '/permiso-vertimientos-corpocaldas', t: 'Permiso Vertimientos CORPOCALDAS' },
            { href: '/concesion-aguas-carder', t: 'Concesion de Aguas CARDER' },
            { href: '/estudios-hidraulicos-pereira', t: 'Estudios Hidraulicos en Pereira' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
