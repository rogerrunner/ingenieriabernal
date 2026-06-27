import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar una concesión de aguas ante la CVC. Tengo el predio y quiero cotizar directamente.')

const seoConfig = {
  title: 'Concesion de Aguas Superficiales CVC Valle del Cauca — Tramite COPNIA | BIC',
  description: 'Tramite de concesion de aguas superficiales ante la CVC en el Valle del Cauca. Estudio hidrologico, requisitos y gestion completa. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'concesion aguas superficiales CVC',
    'tramite concesion aguas Valle del Cauca',
    'concesion aguas CVC Cali',
    'permiso aprovechamiento hidrico Valle del Cauca',
    'CVC concesion aguas superficiales requisitos',
    'estudio hidrologico CVC Valle',
    'ingenieria hidrologica Valle del Cauca',
    'concesion aguas norte Valle del Cauca',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-cvc',
}

const FAQ = [
  { q: 'Que es la CVC y que permisos hidricos otorga?', a: 'La CVC — Corporacion Autonoma Regional del Valle del Cauca — es la autoridad ambiental competente en el Valle del Cauca para otorgar concesiones de aguas superficiales y subterraneas, permisos de vertimientos y permisos de ocupacion de cauce.' },
  { q: 'Cuanto cuesta el estudio hidrologico para concesion ante la CVC?', a: 'Entre $4 y $15 millones COP segun el tipo de fuente y si se requiere aforo en campo. Para cuencas del norte del Valle con influencia del Eje Cafetero, BIC tiene ventaja por su conocimiento de la region. Propuesta en 24 horas.' },
  { q: 'BIC puede tramitar concesiones ante la CVC desde el Eje Cafetero?', a: 'Si. BIC atiende proyectos en el norte del Valle del Cauca: Cartago, Zarzal, La Victoria, Obando, Toro, Versalles, Alcala, Ulloa — municipios fronterizos con Risaralda y Quindio donde tenemos mayor presencia. En el resto del Valle trabajamos de forma remota.' },
  { q: 'Cuanto tiempo tarda la CVC en resolver una concesion de aguas?', a: 'El proceso ante la CVC suele tardar entre 8 y 14 meses desde la radicacion del expediente completo, uno de los plazos mas largos entre las CAR del pais. BIC hace seguimiento permanente al expediente.' },
  { q: 'Que diferencia hay entre tramitar ante la CVC vs CORPOCALDAS?', a: 'El proceso es similar en requisitos: formulario, estudio hidrologico, memoria descriptiva y plano de localizacion. La diferencia esta en los formatos propios de cada corporacion, los plazos de respuesta y el caudal ecologico exigido, que varia segun la reglamentacion de cada cuenca.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function ConcesionAguasCvc() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-ca-cvc'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-ca-cvc-bc'
    sb.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
      { '@type': 'ListItem', position: 2, name: 'Concesion Aguas Colombia', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia' },
      { '@type': 'ListItem', position: 3, name: 'Concesion Aguas CVC', item: 'https://ingenieriabernal.co/concesion-aguas-cvc' },
    ] }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-ca-cvc')?.remove(); document.getElementById('schema-ca-cvc-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Concesion de Aguas ante CVC — Valle del Cauca" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Valle del Cauca — CVC</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Concesion de Aguas Superficiales<br />ante la CVC en el Valle del Cauca
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC elabora el estudio hidrologico y gestiona el tramite completo de concesion de aguas ante la <strong style={{ color: '#60A5FA' }}>CVC</strong>. COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong>. Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>CVC y concesion de aguas en el Valle del Cauca</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para tramite ante la CVC</h2>
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
            { href: '/concesion-aguas-superficiales-colombia', t: 'Concesion Aguas Colombia' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion CORPOCALDAS' },
            { href: '/concesion-aguas-carder', t: 'Concesion CARDER Risaralda' },
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
