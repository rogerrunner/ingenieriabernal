import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito tramitar un permiso de ocupacion de cauce. Pueden cotizar?')

const seoConfig = {
  title: 'Permiso de Ocupacion de Cauce Colombia — CORPOCALDAS CARDER CVC | BIC COPNIA',
  description: 'BIC gestiona permisos de ocupacion de cauce ante CORPOCALDAS, CARDER, CRQ, CORTOLIMA y CVC. Modelacion HEC-RAS 2D, hidrologica y documentacion completa. COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'permiso ocupacion de cauce Colombia',
    'tramite permiso ocupacion cauce CAR Colombia',
    'permiso ocupacion cauce CORPOCALDAS',
    'permiso ocupacion cauce CARDER Risaralda',
    'permiso ocupacion cauce CVC Valle del Cauca',
    'permiso ocupacion cauce puente muro contencion',
    'estudio hidrologico hidraulico ocupacion cauce',
  ],
  canonical: 'https://ingenieriabernal.co/permiso-ocupacion-cauce-colombia',
}

const CUANDO = [
  { t: 'Puentes y pasos vehiculares', d: 'Cualquier cruce vehicular o peatonal sobre un cauce natural requiere permiso de ocupacion ante la CAR competente, sin importar la longitud del vano. BIC realiza el estudio hidrologico-hidraulico y elabora la documentacion completa.' },
  { t: 'Muros de contencion y box culverts', d: 'Obras de encauzamiento, muros de gavion, box culverts y estructuras de proteccion de ribera que impliquen modificacion del cauce natural o de su ronda hidrica.' },
  { t: 'Captaciones y bocatomas', d: 'Obras de captacion de agua superficial (bocatomas, derivaciones, azudes) que requieren tanto la concesion de aguas como el permiso de ocupacion de cauce para la estructura fisica.' },
  { t: 'Urbanizaciones y planes parciales', d: 'Proyectos de urbanizacion que encauzan quebradas, instalan colectores pluviales o realizan cualquier intervencion dentro de la ronda hidrica. Requisito previo a la licencia de urbanismo.' },
]

const FAQ = [
  { q: 'Que es el permiso de ocupacion de cauce y quien lo necesita?', a: 'Es la autorizacion de la CAR competente para construir, ampliar o modificar obras dentro del cauce natural de un rio o quebrada o en su ronda hidrica. Lo requiere cualquier persona natural o juridica que vaya a construir puentes, muros de contencion, bocatomas, box culverts, o que realice encauzamientos dentro de proyectos de urbanizacion.' },
  { q: 'Cuanto cuesta el tramite de permiso de ocupacion de cauce?', a: 'El costo de los estudios tecnicos (hidrologico-hidraulico, diseno de la obra, modelacion HEC-RAS 2D) oscila entre $12M y $40M COP segun la complejidad de la obra y el cauce. Los derechos de tramite ante la CAR son adicionales y los define cada corporacion. BIC entrega propuesta en 24 horas.' },
  { q: 'Cuanto tiempo tarda el permiso de ocupacion de cauce?', a: 'El tramite ante la CAR dura entre 4 y 10 meses. La etapa previa de estudios tecnicos tarda entre 6 y 14 semanas. BIC hace seguimiento permanente al expediente y responde los requerimientos de informacion adicional sin costo extra.' },
  { q: 'El permiso de ocupacion va junto con la concesion de aguas?', a: 'Generalmente si, cuando se trata de bocatomas y captaciones: se requiere tanto la concesion de aguas (para usar el recurso hidrico) como el permiso de ocupacion (para la estructura fisica). BIC gestiona los dos tramites en paralelo ante la misma CAR.' },
  { q: 'BIC tramita el permiso de ocupacion ante cualquier CAR de Colombia?', a: 'Si. BIC gestiona permisos ante CORPOCALDAS, CARDER, CRQ, CORTOLIMA, CVC, CORANTIOQUIA y otras corporaciones. La experiencia en varias CAR permite anticipar los criterios tecnicos de cada entidad y evitar observaciones.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function PermisoOcupacionCauce() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-poc-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-poc-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Permiso Ocupacion Cauce', item: 'https://ingenieriabernal.co/permiso-ocupacion-cauce-colombia' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-poc-faq')?.remove(); document.getElementById('schema-poc-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Permiso de Ocupacion de Cauce" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">CORPOCALDAS · CARDER · CRQ · CORTOLIMA · CVC</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Permiso de Ocupacion<br />de Cauce en Colombia
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC gestiona el permiso de ocupacion de cauce ante la CAR competente: <strong style={{ color: '#fff' }}>estudio hidrologico-hidraulico</strong>, modelacion <strong style={{ color: '#60A5FA' }}>HEC-RAS 2D</strong>, diseno de la obra y seguimiento hasta la resolucion. Para puentes, bocatomas, muros de contencion y urbanizaciones.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Tramites aprobados ante 5 CAR · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Cuando se requiere</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Obras que requieren permiso de ocupacion de cauce</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, maxWidth: 820 }}>
          {CUANDO.map(c => (
            <div key={c.t} style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{c.t}</h3>
              <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <ThinLine />
      <Section>
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Permiso de ocupacion de cauce en Colombia</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite cotizacion para su tramite</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion Aguas CORPOCALDAS' },
            { href: '/permiso-vertimientos-corpocaldas', t: 'Permiso Vertimientos' },
            { href: '/concesion-aguas-carder', t: 'Tramites CARDER' },
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
