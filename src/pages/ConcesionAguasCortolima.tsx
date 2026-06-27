import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar una concesión de aguas ante CORTOLIMA. Tengo el predio y quiero cotizar directamente.')

const seoConfig = {
  title: 'Concesion de Aguas Superficiales CORTOLIMA Tolima — Tramite COPNIA | BIC',
  description: 'Tramite de concesion de aguas superficiales ante CORTOLIMA en el Tolima e Ibague. Estudio hidrologico, requisitos y gestion completa. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'concesion aguas superficiales CORTOLIMA',
    'tramite concesion aguas Tolima',
    'concesion aguas CORTOLIMA Ibague',
    'permiso aprovechamiento hidrico Tolima',
    'solicitud concesion aguas CORTOLIMA requisitos',
    'concesion aguas acueducto Tolima',
    'CORTOLIMA tramite hidrico Ibague',
    'ingenieria hidrologica Tolima concesion',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-cortolima',
}

const FAQ = [
  { q: 'Que documentos exige CORTOLIMA para tramitar concesion de aguas?', a: 'CORTOLIMA exige formulario de solicitud, estudio hidrologico con calculo del caudal ecologico, memoria descriptiva del uso del agua, plano de localizacion con coordenadas del punto de captacion y documento de tenencia del predio. El estudio debe ser firmado por ingeniero COPNIA.' },
  { q: 'Cuanto tarda CORTOLIMA en otorgar la concesion de aguas?', a: 'El tramite ante CORTOLIMA puede durar entre 6 y 12 meses desde la radicacion del expediente completo. BIC realiza seguimiento permanente y atiende los requerimientos de informacion adicional que formule la corporacion.' },
  { q: 'Cuanto cuesta el estudio para concesion de aguas ante CORTOLIMA?', a: 'El estudio hidrologico para tramite ante CORTOLIMA cuesta entre $4 y $12 millones COP segun el tipo de fuente y si se requiere aforo en campo. BIC entrega propuesta exacta en 24 horas.' },
  { q: 'BIC trabaja en todo el Tolima o solo en Ibague?', a: 'BIC atiende proyectos en todo el Tolima: Ibague, Espinal, Chaparral, Honda, Fresno, Mariquita, Villahermosa y todos los municipios del departamento. Gestion del expediente de forma remota; visita de campo en el norte del Tolima.' },
  { q: 'Que es el caudal ecologico y por que lo pide CORTOLIMA?', a: 'El caudal ecologico es el caudal minimo que debe permanecer en la fuente para sostener el ecosistema acuatico. CORTOLIMA exige que sea al menos el 25% del caudal medio mensual minimo. BIC lo calcula con metodos estadisticos y series historicas del IDEAM.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function ConcesionAguasCortolima() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-ca-cortolima'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-ca-cortolima-bc'
    sb.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
      { '@type': 'ListItem', position: 2, name: 'Concesion Aguas Colombia', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia' },
      { '@type': 'ListItem', position: 3, name: 'Concesion Aguas CORTOLIMA', item: 'https://ingenieriabernal.co/concesion-aguas-cortolima' },
    ] }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-ca-cortolima')?.remove(); document.getElementById('schema-ca-cortolima-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Concesion de Aguas ante CORTOLIMA — Tolima" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Tolima — CORTOLIMA</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Concesion de Aguas Superficiales<br />ante CORTOLIMA en el Tolima
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC gestiona el tramite completo ante <strong style={{ color: '#60A5FA' }}>CORTOLIMA</strong> — estudio hidrologico, expediente y seguimiento hasta la resolucion. COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong>. Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>CORTOLIMA y concesion de aguas en el Tolima</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para tramite ante CORTOLIMA</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '44px 24px' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(16px, 2.2vw, 22px)', color: '#fff', marginBottom: 12 }}>
            Solo con quien tiene el predio y puede contratar directamente
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.80)', fontSize: 14, lineHeight: 1.8, maxWidth: 660, margin: '0 auto 8px' }}>
            BIC tramita concesiones para <strong style={{ color: '#17A2B8' }}>propietarios, empresarios y proyectos privados</strong> que necesitan el permiso de captación — no con intermediarios ni con ingenieros buscando referencias de precio.
            Si usted es el contratante directo y tiene el proyecto activo, la propuesta llega en 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.30)', fontSize: 11 }}>
            ¿Colega buscando precio o asesoría? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />


      <Section style={{ background: '#F8FAFC' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/concesion-aguas-superficiales-colombia', t: 'Concesion de Aguas en Colombia' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion CORPOCALDAS' },
            { href: '/concesion-aguas-carder', t: 'Concesion CARDER Risaralda' },
            { href: '/estudios-hidraulicos-ibague', t: 'Estudios Hidraulicos en Ibague' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
