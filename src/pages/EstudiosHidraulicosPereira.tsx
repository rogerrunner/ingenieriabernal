import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizacion para estudios hidraulicos en Pereira, Risaralda. Pueden ayudarme?')

const seoConfig = {
  title: 'Estudios Hidraulicos en Pereira — Decreto 1807, HEC-RAS 2D y Tramites CAR | BIC',
  description: 'Estudios hidrologicos e hidraulicos en Pereira, Risaralda. Decreto 1807 para licencias, concesiones de aguas y permisos ante CARDER. COPNIA 17202-313228 CLD. Propuesta en 24h.',
  keywords: [
    'estudios hidraulicos Pereira',
    'estudio Decreto 1807 Pereira',
    'HEC-RAS Pereira Risaralda',
    'concesion aguas Pereira CARDER',
    'permiso vertimientos Pereira',
    'ingeniero hidraulico Pereira Colombia',
    'estudio riesgo inundacion Pereira',
    'estudio hidrologico Pereira Risaralda',],
  canonical: 'https://ingenieriabernal.co/estudios-hidraulicos-pereira',
}

const FAQ = [
  { q: 'Que estudios hidraulicos se requieren en Pereira para licencia de construccion?', a: 'Para licencias urbanisticas en Pereira se requieren estudios Decreto 1807/2014 cuando el predio esta en zona con amenaza hidrica o de movimientos en masa. BIC elabora estos estudios con modelacion HEC-RAS 2D aceptada por la Curaduria Urbana de Pereira y la Secretaria de Planeacion.' },
  { q: 'Cual es la autoridad ambiental en Pereira para concesiones y permisos?', a: 'La autoridad ambiental en Pereira y todo Risaralda es CARDER — Corporacion Autonoma Regional de Risaralda. BIC tramita concesiones de aguas superficiales y permisos de vertimientos ante CARDER.' },
  { q: 'BIC tiene experiencia en proyectos en Pereira y Dosquebradas?', a: 'Si. BIC ha ejecutado estudios en el area metropolitana de Pereira incluyendo Dosquebradas y Santa Rosa de Cabal. Nuestra sede opera en el Eje Cafetero con radio de accion de 200 km desde Manizales.' },
  { q: 'Cuanto cuesta un estudio Decreto 1807 en Pereira?', a: 'El costo oscila entre $6 y $20 millones COP segun el tamano del predio y las cuencas involucradas. BIC entrega propuesta con valor exacto en 24 horas sin costo.' },
  { q: 'Como contratar a BIC desde Pereira?', a: 'Por WhatsApp +57 302 477 8910 o desde el formulario de ingenieriabernal.co. BIC trabaja de forma remota y con visitas de campo en Pereira segun se requiera. Propuesta en 24 horas.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function EstudiosHidraulicosPereira() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-pereira-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-pereira-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Hidraulicos Pereira', item: 'https://ingenieriabernal.co/estudios-hidraulicos-pereira' },
      ],
    }); document.head.appendChild(sb)
    const sl = document.createElement('script')
    sl.type = 'application/ld+json'; sl.id = 'schema-pereira-local'
    sl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Estudios Hidrologicos e Hidraulicos en Pereira',
      provider: { '@type': 'Organization', name: 'Bernal Ingenieria Consultores', url: 'https://ingenieriabernal.co' },
      areaServed: { '@type': 'City', name: 'Pereira', containedInPlace: { '@type': 'State', name: 'Risaralda' } },
      description: 'Estudios hidrologicos e hidraulicos, Decreto 1807, modelacion HEC-RAS 2D, concesiones de aguas y permisos de vertimientos ante CARDER.',
    }); document.head.appendChild(sl)
    return () => {
      document.getElementById('schema-pereira-faq')?.remove()
      document.getElementById('schema-pereira-bc')?.remove()
      document.getElementById('schema-pereira-local')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios Hidraulicos en Pereira" />

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Risaralda — CARDER</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios Hidraulicos<br />en Pereira
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC realiza estudios hidrologicos e hidraulicos en <strong style={{ color: '#60A5FA' }}>Pereira</strong>:
            Decreto 1807 para licencias, modelacion HEC-RAS 2D, concesiones de aguas y permisos de vertimientos
            ante <strong style={{ color: '#60A5FA' }}>CARDER</strong>.
            Ingeniero con <strong style={{ color: '#60A5FA' }}>COPNIA 17202-313228 CLD</strong>.
            Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong>.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Cotizar por WhatsApp
            </a>
            <a href="/precio-estudios-hidraulicos-colombia"
              style={{ display: 'inline-block', background: 'transparent', color: '#60A5FA', border: '2px solid #60A5FA', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              Ver precios
            </a>
          </div>
        </div>
      </section>

      <ThinLine />

      <Section>
        <SectionLabel>Servicios en Pereira</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 12 }}>Estudios y tramites disponibles en Pereira</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 24 }}>
          {[
            { t: 'Estudio Decreto 1807', d: 'Estudio detallado de inundacion y/o movimientos en masa para licencia urbanistica ante curaduria urbana.', href: '/gestion-riesgo-hidrico' },
            { t: 'Modelacion HEC-RAS 2D', d: 'Simulacion de llanura de inundacion con mapas de amenaza para periodos de retorno TR 10, 50 y 100 anos.', href: '/modelacion-hidraulica-colombia' },
            { t: 'Concesion de Aguas', d: 'Estudio hidrologico y tramite completo ante CARDER.', href: '/concesion-aguas-superficiales-colombia' },
            { t: 'Permiso de Vertimientos', d: 'Expediente tecnico, PSMV si aplica y diseno de PTAR para tramite ante CARDER.', href: '/permiso-vertimientos-colombia' },
            { t: 'Diseno de PTAR', d: 'Diseno conceptual y basico de plantas de tratamiento de aguas residuales segun RAS 2017.', href: '/diseno-ptar-colombia' },
            { t: 'Redes Hidrosanitarias', d: 'Diseno de redes AP, AR, aguas lluvias y sistema contra incendio para licencia de construccion.', href: '/servicios' },
          ].map(s => (
            <a key={s.t} href={s.href} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: 22, textDecoration: 'none', display: 'block' }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#003B6F', marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0, lineHeight: 1.6 }}>{s.d}</p>
            </a>
          ))}
        </div>
      </Section>

      <ThinLine />

      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre estudios hidraulicos en Pereira</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para Pereira</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Propuesta en 24 horas habiles. Sin compromiso.</p>
        <QuoteFormInline />
      </Section>

      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Paginas relacionadas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos Colombia' },
            { href: '/concesion-aguas-carder', t: 'Concesion de Aguas CARDER' },
            { href: '/gestion-riesgo-hidrico', t: 'Gestion del Riesgo Hidrico — Decreto 1807' },
            { href: '/servicios', t: 'Todos los Servicios BIC' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
