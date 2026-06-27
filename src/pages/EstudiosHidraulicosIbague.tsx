import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizacion para estudios hidraulicos en Ibague, Tolima. Pueden ayudarme?')

const seoConfig = {
  title: 'Estudios Hidraulicos en Ibague — Decreto 1807, HEC-RAS 2D y Tramites CAR | BIC',
  description: 'Estudios hidrologicos e hidraulicos en Ibague, Tolima. Decreto 1807 para licencias, concesiones de aguas y permisos ante CORTOLIMA. COPNIA 17202-313228 CLD. Propuesta en 24h.',
  keywords: [
    'estudios hidraulicos Ibague Tolima',
    'estudio Decreto 1807 Ibague',
    'HEC-RAS Ibague Colombia',
    'concesion aguas Ibague CORTOLIMA',
    'permiso vertimientos Ibague Tolima',
    'ingeniero hidraulico Ibague',
    'estudio riesgo hidrico Tolima',
    'CORTOLIMA concesion aguas Ibague',],
  canonical: 'https://ingenieriabernal.co/estudios-hidraulicos-ibague',
}

const FAQ = [
  { q: 'Cual es la autoridad ambiental para tramites hidricos en Ibague?', a: 'En Ibague y el Tolima la autoridad ambiental competente es CORTOLIMA — Corporacion Autonoma Regional del Tolima. BIC tramita concesiones de aguas y permisos de vertimientos ante CORTOLIMA.' },
  { q: 'BIC realiza estudios Decreto 1807 en Ibague y el Tolima?', a: 'Si. BIC elabora estudios de riesgo hidrico para licencias urbanisticas en Ibague y municipios del Tolima con modelacion HEC-RAS 2D aceptada por curadurias urbanas y CORTOLIMA.' },
  { q: 'Cuanto cuesta un estudio hidraulico en Ibague?', a: 'Entre $6 y $22 millones COP segun el predio y la complejidad. BIC entrega propuesta exacta en 24 horas.' },
  { q: 'BIC trabaja en todo el Tolima?', a: 'Si. BIC atiende proyectos en Ibague, Espinal, Chaparral, Honda, La Dorada-limite y municipios aledanos al Tolima. Trabajo remoto en todo el departamento y visita de campo en el norte del Tolima.' },
  { q: 'Que es el permiso de concesion de aguas ante CORTOLIMA?', a: 'Es la autorizacion que otorga CORTOLIMA para captar agua de una fuente superficial o subterranea en el Tolima. Requiere estudio hidrologico firmado por ingeniero COPNIA. BIC elabora el estudio y gestiona el tramite completo.' },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function EstudiosHidraulicosIbague() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'; s.id = 'schema-ibague-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA); document.head.appendChild(s)
    const sb = document.createElement('script')
    sb.type = 'application/ld+json'; sb.id = 'schema-ibague-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Hidraulicos Ibague', item: 'https://ingenieriabernal.co/estudios-hidraulicos-ibague' },
      ],
    }); document.head.appendChild(sb)
    const sl = document.createElement('script')
    sl.type = 'application/ld+json'; sl.id = 'schema-ibague-local'
    sl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Estudios Hidrologicos e Hidraulicos en Ibague',
      provider: { '@type': 'Organization', name: 'Bernal Ingenieria Consultores', url: 'https://ingenieriabernal.co' },
      areaServed: { '@type': 'City', name: 'Ibague', containedInPlace: { '@type': 'State', name: 'Tolima' } },
      description: 'Estudios hidrologicos e hidraulicos, Decreto 1807, modelacion HEC-RAS 2D, concesiones de aguas y permisos de vertimientos ante CORTOLIMA.',
    }); document.head.appendChild(sl)
    return () => {
      document.getElementById('schema-ibague-faq')?.remove()
      document.getElementById('schema-ibague-bc')?.remove()
      document.getElementById('schema-ibague-local')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios Hidraulicos en Ibague" />

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Tolima — CORTOLIMA</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios Hidraulicos<br />en Ibague
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 24, maxWidth: 700 }}>
            BIC realiza estudios hidrologicos e hidraulicos en <strong style={{ color: '#60A5FA' }}>Ibague</strong>:
            Decreto 1807 para licencias, modelacion HEC-RAS 2D, concesiones de aguas y permisos de vertimientos
            ante <strong style={{ color: '#60A5FA' }}>CORTOLIMA</strong>.
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
        <SectionLabel>Servicios en Ibague</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 12 }}>Estudios y tramites disponibles en Ibague</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, marginTop: 24 }}>
          {[
            { t: 'Estudio Decreto 1807', d: 'Estudio detallado de inundacion y/o movimientos en masa para licencia urbanistica ante curaduria urbana.', href: '/gestion-riesgo-hidrico' },
            { t: 'Modelacion HEC-RAS 2D', d: 'Simulacion de llanura de inundacion con mapas de amenaza para periodos de retorno TR 10, 50 y 100 anos.', href: '/modelacion-hidraulica-colombia' },
            { t: 'Concesion de Aguas', d: 'Estudio hidrologico y tramite completo ante CORTOLIMA.', href: '/concesion-aguas-superficiales-colombia' },
            { t: 'Permiso de Vertimientos', d: 'Expediente tecnico, PSMV si aplica y diseno de PTAR para tramite ante CORTOLIMA.', href: '/permiso-vertimientos-colombia' },
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Preguntas sobre estudios hidraulicos en Ibague</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta para Ibague</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Propuesta en 24 horas habiles. Sin compromiso.</p>
        <QuoteFormInline />
      </Section>

      <Section style={{ background: '#F8FAFC' }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Paginas relacionadas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos Colombia' },
            { href: '/concesion-aguas-superficiales-colombia', t: 'Concesion de Aguas CORTOLIMA' },
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
