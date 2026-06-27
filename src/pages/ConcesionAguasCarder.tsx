import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar una concesión de aguas ante la CARDER. Tengo el predio y quiero cotizar directamente con BIC.')

const seoConfig = {
  title: 'Concesion de Aguas Superficiales CARDER Risaralda — Tramite COPNIA | BIC',
  description: 'Tramite de concesion de aguas superficiales ante CARDER en Risaralda y Pereira. Estudio hidrologico, requisitos y gestion completa. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'concesion aguas superficiales CARDER',
    'tramite concesion aguas Risaralda',
    'concesion aguas CARDER Pereira',
    'permiso aprovechamiento hidrico Risaralda',
    'solicitud concesion aguas CARDER requisitos',
    'concesion aguas superficiales Pereira Colombia',
    'CARDER concesion acueducto rural Risaralda',
    'tramite ambiental Risaralda agua',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-carder',
}

const FAQ = [
  { q: 'Cuales son los requisitos para concesion de aguas ante CARDER en Risaralda?', a: 'CARDER — Corporacion Autonoma Regional de Risaralda — exige formulario de solicitud, estudio hidrologico con calculo de caudal ecologico, memoria descriptiva del uso, plano de localizacion y documentos de propiedad. BIC elabora el expediente completo y lo radica ante CARDER.' },
  { q: 'Cuanto tiempo demora CARDER en resolver una concesion de aguas?', a: 'El termino legal es 30 dias habiles, pero CARDER puede tardar entre 6 y 12 meses segun la carga institucional. BIC hace seguimiento al expediente e informa sobre el avance del tramite.' },
  { q: 'Cuanto cuesta el estudio hidrologico para concesion de aguas en Risaralda?', a: 'El estudio hidrologico para tramite ante CARDER cuesta entre $4 y $12 millones COP. Proyectos con aforo en campo o cuencas sin informacion IDEAM cerca: hasta $15 millones. Propuesta exacta en 24 horas.' },
  { q: 'BIC trabaja en Pereira y Santa Rosa de Cabal?', a: 'Si. BIC atiende proyectos en todo Risaralda: Pereira, Dosquebradas, Santa Rosa de Cabal, Belen de Umbria, La Virginia. Radio de accion de campo: 200 km desde Manizales. Para tramites ante CARDER, trabajamos de forma remota y presencial segun se requiera.' },
  { q: 'Para que usos se puede solicitar una concesion de aguas en Risaralda?', a: 'CARDER otorga concesiones para: consumo humano y domestico, acueductos veredales, riego agricola, uso industrial, uso recreativo y actividades de bajo impacto ambiental. El tipo de uso determina el plazo de la concesion (hasta 10 anos renovables).' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ConcesionAguasCarder() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-ca-carder-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-ca-carder-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Concesion de Aguas en Colombia', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia' },
        { '@type': 'ListItem', position: 3, name: 'Concesion de Aguas CARDER', item: 'https://ingenieriabernal.co/concesion-aguas-carder' },
      ],
    }); document.head.appendChild(sb)
    return () => {
      document.getElementById('schema-ca-carder-faq')?.remove()
      document.getElementById('schema-ca-carder-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Concesion de Aguas ante CARDER — Risaralda" />

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Risaralda — CARDER</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Concesion de Aguas Superficiales<br />ante CARDER en Risaralda
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC gestiona el tramite completo de concesion de aguas superficiales ante <strong style={{ color: '#60A5FA' }}>CARDER</strong>
            — Corporacion Autonoma Regional de Risaralda —
            con estudio hidrologico, gestion del expediente y seguimiento hasta la resolucion.
            Ingenieros con <strong style={{ color: '#60A5FA' }}>COPNIA 17202-313228 CLD</strong>.
            Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ThinLine />

      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre CARDER y concesion de aguas</h2>
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
        <SectionLabel>Cotizacion sin costo</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Propuesta para tramite ante CARDER</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Respuesta en 24 horas habiles. Sin compromiso.</p>
        <QuoteFormInline />
      </Section>

      {/* ── ANTI-INTERMEDIARIO ENHANCED ── */}
      <Section style={{ background: '#001A33', padding: '52px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', color: '#fff', marginBottom: 16 }}>
            Solo con quien tiene el predio y puede contratar directamente
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)', fontSize: 15, lineHeight: 1.85, maxWidth: 700, margin: '0 auto 12px' }}>
            BIC tramita concesiones de aguas para <strong style={{ color: '#17A2B8' }}>hoteles, haciendas, acueductos veredales, industrias y parcelaciones</strong> con el predio y la fuente hídrica — propietarios con la decisión de contratar directamente.
            No cotizamos a intermediarios ni respondemos consultas de colegas ingenieros que buscan precios de referencia o asesoría técnica para sus propios proyectos.
            Si usted es el contratante directo, la propuesta llega en menos de 24 horas.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>
            ¿Colega ingeniero o consultor buscando cotización comparativa? No es el canal.
          </p>
        </div>
      </Section>

      <ThinLine />


      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Tramites relacionados</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/concesion-aguas-superficiales-colombia', t: 'Concesion de Aguas en Colombia' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion de Aguas CORPOCALDAS' },
            { href: '/permiso-vertimientos-carder', t: 'Permiso de Vertimientos CARDER' },
            { href: '/estudios-hidraulicos-pereira', t: 'Estudios Hidraulicos en Pereira' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
