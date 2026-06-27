import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, soy propietario/empresario y necesito tramitar una concesión de aguas ante CORPOCALDAS. Tengo el predio y quiero cotizar directamente con BIC.')

const seoConfig = {
  title: 'Concesion de Aguas Superficiales CORPOCALDAS — Tramite con Ingeniero COPNIA | BIC',
  description: 'Tramite de concesion de aguas superficiales ante CORPOCALDAS en Caldas. Estudio hidrologico, documentos requeridos y gestion completa. BIC — COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'concesion aguas superficiales CORPOCALDAS',
    'tramite concesion aguas Caldas',
    'concesion aguas CORPOCALDAS Manizales',
    'permiso aprovechamiento hidrico Caldas',
    'solicitud concesion aguas CORPOCALDAS requisitos',
    'ingenieria hidrologica Caldas concesion',
    'concesion aguas acueducto CORPOCALDAS',
    'tramite ambiental Caldas agua superficial',
  ],
  canonical: 'https://ingenieriabernal.co/concesion-aguas-corpocaldas',
}

const FAQ = [
  { q: 'Cuales son los requisitos para tramitar una concesion de aguas ante CORPOCALDAS?', a: 'CORPOCALDAS exige: formulario de solicitud, estudio hidrologico con calculo de caudal ecologico, plano de localizacion, memoria descriptiva del uso, fotocopia de la escritura del predio y pago de la tasa de tramitacion. BIC elabora el estudio hidrologico y gestiona el expediente completo.' },
  { q: 'Cuanto tarda CORPOCALDAS en resolver una concesion de aguas?', a: 'El termino legal es 30 dias habiles, pero en la practica CORPOCALDAS tarda entre 6 y 12 meses dependiendo de la complejidad del proyecto y la carga de la entidad. BIC realiza seguimiento permanente al expediente.' },
  { q: 'Cuanto cuesta el estudio para concesion de aguas en Caldas?', a: 'El estudio hidrologico para concesion de aguas ante CORPOCALDAS cuesta entre $4 y $12 millones COP segun el tipo de fuente y el caudal solicitado. BIC entrega propuesta en 24 horas con alcance y valor exacto.' },
  { q: 'BIC ha tramitado concesiones ante CORPOCALDAS con exito?', a: 'Si. BIC ha presentado estudios para concesiones de aguas en Caldas —Manizales, Chinchina, Viterbo, Belalcazar— con tramites aprobados ante CORPOCALDAS. El ingeniero responsable cuenta con el registro COPNIA 17202-313228 CLD.' },
  { q: 'La concesion de aguas aplica tambien para acueductos veredales en Caldas?', a: 'Si. Las comunidades rurales de Caldas que operan acueductos veredales deben obtener concesion de aguas ante CORPOCALDAS. BIC tiene experiencia en estudios para sistemas de abastecimiento rural con captacion en quebradas y rios del Eje Cafetero.' },
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

export default function ConcesionAguasCorpocaldas() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-ca-corpocaldas-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-ca-corpocaldas-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Concesion de Aguas en Colombia', item: 'https://ingenieriabernal.co/concesion-aguas-superficiales-colombia' },
        { '@type': 'ListItem', position: 3, name: 'Concesion de Aguas CORPOCALDAS', item: 'https://ingenieriabernal.co/concesion-aguas-corpocaldas' },
      ],
    }); document.head.appendChild(sb)
    return () => {
      document.getElementById('schema-ca-corpocaldas-faq')?.remove()
      document.getElementById('schema-ca-corpocaldas-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Concesion de Aguas Superficiales ante CORPOCALDAS" />

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Caldas — CORPOCALDAS</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Concesion de Aguas Superficiales<br />ante CORPOCALDAS
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC gestiona el tramite completo de concesion de aguas ante <strong style={{ color: '#60A5FA' }}>CORPOCALDAS</strong> —
            estudio hidrologico, aforo si se requiere, memoria descriptiva, radicacion y seguimiento.
            Ingenieros con <strong style={{ color: '#60A5FA' }}>COPNIA 17202-313228 CLD</strong>, experiencia en cuencas de Caldas,
            propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Cotizar por WhatsApp
            </a>
            <a href="/concesion-aguas-superficiales-colombia" style={{ display: 'inline-block', background: 'transparent', color: '#60A5FA', border: '2px solid #60A5FA', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Ver info general Colombia
            </a>
          </div>
        </div>
      </section>

      <ThinLine />

      <Section>
        <SectionLabel>CORPOCALDAS — Requisitos</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 12 }}>Requisitos para concesion de aguas en Caldas</h2>
        <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.7, marginBottom: 32, maxWidth: 720 }}>
          CORPOCALDAS — Corporacion Autonoma Regional de Caldas — es la autoridad ambiental competente
          para otorgar concesiones de aguas superficiales en el departamento de Caldas. Los requisitos
          principales son:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {[
            { n: '01', t: 'Formulario de solicitud CORPOCALDAS', d: 'Formato oficial de la corporacion con datos del solicitante, predio, fuente hidrica y uso del agua.' },
            { n: '02', t: 'Estudio hidrologico', d: 'Calculo del caudal disponible, caudal solicitado y caudal ecologico minimo de la corriente. Firmado por ingeniero COPNIA.' },
            { n: '03', t: 'Memoria descriptiva del uso', d: 'Descripcion detallada del uso que se dara al recurso hidrico (consumo humano, riego, industrial, caudal para PTAR).' },
            { n: '04', t: 'Planos de localizacion', d: 'Plano con la ubicacion de la fuente, el punto de captacion y el predio beneficiado. Coordenadas geograficas.' },
            { n: '05', t: 'Documentos de propiedad', d: 'Escritura o documento de tenencia del predio donde se ubica la captacion y la zona de uso.' },
            { n: '06', t: 'Pago de tasa de tramitacion', d: 'Tasa ambiental que cobra CORPOCALDAS por el tramite. BIC informa el monto actualizado.' },
          ].map(r => (
            <div key={r.n} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: 22 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ background: '#003B6F', color: '#fff', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{r.n}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1E293B', margin: '0 0 6px' }}>{r.t}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', margin: 0, lineHeight: 1.6 }}>{r.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ThinLine />

      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre concesion de aguas en Caldas</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para CORPOCALDAS</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Propuesta en 24 horas habiles. Sin compromiso.</p>
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
            { href: '/concesion-aguas-carder', t: 'Concesion de Aguas CARDER (Risaralda)' },
            { href: '/permiso-vertimientos-corpocaldas', t: 'Permiso de Vertimientos CORPOCALDAS' },
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios de Estudios Hidraulicos' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
