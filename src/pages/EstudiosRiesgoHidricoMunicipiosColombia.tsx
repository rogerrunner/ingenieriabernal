import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Section, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio de riesgo hidrico. Pueden cotizar?')

const seoConfig = {
  title: 'Estudios de Riesgo Hidrico Colombia — Decreto 1807 POT Planes Parciales | BIC COPNIA',
  description: 'BIC realiza estudios de riesgo hidrico por inundacion y avenidas torrenciales en Colombia. Modelacion HEC-RAS 2D, amenaza media y alta, informes para Curaduría y CAR. COPNIA 17202-313228 CLD. Propuesta en 24 horas.',
  keywords: [
    'estudios riesgo hidrico Colombia',
    'estudio amenaza hidrica inundacion Colombia',
    'estudio riesgo avenidas torrenciales Colombia',
    'estudio riesgo hidrico plan parcial Colombia',
    'estudio riesgo hidrico urbanizacion Colombia',
    'estudio riesgo inundacion HEC-RAS 2D Colombia',
    'amenaza media alta Decreto 1807 Colombia',
    'estudio riesgo hidrico CARDER CORPOCALDAS CORTOLIMA',
  ],
  canonical: 'https://ingenieriabernal.co/estudios-riesgo-hidrico-municipios-colombia',
}

const CLIENTS = [
  { t: 'Promotores y urbanizadores', d: 'Planes parciales, proyectos de vivienda o uso mixto que tienen cauces, rondas hídricas o zonas de ladera dentro del predio. BIC cuantifica la amenaza, diseña las medidas de mitigación y obtiene el aval de la CAR competente para la licencia de urbanismo.' },
  { t: 'Constructoras y propietarios de tierra', d: 'Predios de cualquier extensión cerca de ríos, quebradas o zonas de ladera donde la Curaduría exige el estudio de riesgo hídrico como requisito previo para la licencia de construcción. BIC entrega el informe listo para primera revisión sin observaciones.' },
  { t: 'Empresas industriales y comerciales', d: 'Plantas de producción, bodegas y centros logísticos ubicados en zonas de amenaza hídrica media o alta. BIC evalúa el riesgo, elabora el Plan de Gestión del Riesgo de Desastres (PGRD) interno y gestiona los permisos CAR requeridos.' },
  { t: 'Empresas de servicios públicos (ESP)', d: 'Evaluación de amenaza hídrica en infraestructura de acueducto y alcantarillado: captaciones, bocatomas, redes de conducción y plantas de tratamiento ubicadas en zonas de riesgo. Planes de contingencia ante eventos extremos de precipitación.' },
]

const FAQ = [
  { q: 'Que es un estudio de riesgo hidrico y cuando es obligatorio?', a: 'Es el análisis técnico que determina si un predio está en zona de amenaza por inundación, avenida torrencial o flujo de detritos. En Colombia, el Decreto 1807 de 2014 lo exige cuando el predio está en zona de amenaza hídrica media o alta, como condición para obtener licencia de construcción o urbanismo en municipios que han actualizado su POT.' },
  { q: 'Cuanto cuesta un estudio de riesgo hidrico en Colombia?', a: 'El costo depende del área del predio, la complejidad del cauce y el nivel de modelación requerido. Para predios menores de 2 ha con un solo cauce el costo parte de $8M COP. Estudios detallados con modelación HEC-RAS 2D en zonas de torrencialidad o predios grandes pueden llegar a $35M–$60M COP. BIC entrega propuesta técnica y económica en 24 horas.' },
  { q: 'Cuanto tiempo tarda el estudio?', a: 'Entre 3 y 8 semanas según el alcance: levantamiento topobatimétrico, procesamiento de información hidrológica, modelación HEC-RAS 2D y elaboración del informe técnico. BIC define el cronograma exacto en la propuesta y lo cumple con informes de avance.' },
  { q: 'El informe de BIC pasa la revisión de la Curaduría o la CAR sin observaciones?', a: 'Sí, en primera revisión. BIC tiene histórico de aprobaciones ante CORPOCALDAS, CARDER, CORTOLIMA, CRQ y CVC con cero observaciones. El informe incluye toda la memoria de cálculo, modelos digitales y planos en los formatos exactos que exige cada entidad.' },
  { q: 'Trabaja BIC en todo Colombia o solo en el Eje Cafetero?', a: 'BIC tiene cobertura nacional. La sede técnica está en Manizales (Caldas) y la mayor concentración de proyectos es en el Eje Cafetero, Tolima y Valle del Norte, pero BIC atiende proyectos en cualquier municipio de Colombia. Los estudios incluyen visita técnica al predio.' },
]

const SCHEMA_FAQ = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function EstudiosRiesgoHidricoMunicipiosColombia() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'schema-rh-faq'
    s.textContent = JSON.stringify(SCHEMA_FAQ); document.head.appendChild(s)
    const sb = document.createElement('script'); sb.type = 'application/ld+json'; sb.id = 'schema-rh-bc'
    sb.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Estudios Riesgo Hidrico', item: 'https://ingenieriabernal.co/estudios-riesgo-hidrico-municipios-colombia' },
      ]
    }); document.head.appendChild(sb)
    return () => { document.getElementById('schema-rh-faq')?.remove(); document.getElementById('schema-rh-bc')?.remove() }
  }, [])
  return (
    <>
      <SEOHead config={seoConfig} />
      <CTABanner service="Estudios de Riesgo Hidrico" />
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg />
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <SectionLabel color="#60A5FA">Inundacion · Avenidas torrenciales · Decreto 1807</SectionLabel>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Estudios de Riesgo Hidrico<br />en Colombia
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.75, marginBottom: 8, maxWidth: 700 }}>
            BIC evalua la amenaza hidrica de su predio con modelacion <strong style={{ color: '#60A5FA' }}>HEC-RAS 2D</strong> y entrega el informe tecnico listo para <strong style={{ color: '#fff' }}>Curaduria y CAR</strong> sin observaciones. Cumplimiento del <strong style={{ color: '#60A5FA' }}>Decreto 1807 de 2014</strong> para licencias de construccion y urbanismo.
          </p>
          <p style={{ fontSize: 15, color: '#94A3B8', marginBottom: 28 }}>COPNIA <strong style={{ color: '#60A5FA' }}>17202-313228 CLD</strong> · Aprobaciones ante CORPOCALDAS, CARDER, CORTOLIMA, CRQ y CVC · Propuesta en <strong style={{ color: '#60A5FA' }}>24 horas</strong></p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#25D366', color: '#fff', borderRadius: 10, padding: '14px 28px', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>
      <ThinLine />
      <Section style={{ background: '#F8FAFC' }}>
        <SectionLabel>Quienes contratan este servicio</SectionLabel>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Clientes que requieren estudios de riesgo hidrico</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, maxWidth: 820 }}>
          {CLIENTS.map(c => (
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, marginBottom: 32 }}>Estudios de riesgo hidrico en Colombia</h2>
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
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>Solicite su propuesta</h2>
        <p style={{ fontSize: 16, color: '#64748B', textAlign: 'center', maxWidth: 540, margin: '0 auto 36px' }}>Sin compromiso. Respuesta en 24 horas.</p>
        <QuoteFormInline />
      </Section>
      <Section>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { href: '/precio-estudios-hidraulicos-colombia', t: 'Precios Estudios Hidraulicos' },
            { href: '/estudio-decreto-1807-licencia-construccion', t: 'Decreto 1807 Licencia Construccion' },
            { href: '/promotor-urbanizacion-colombia', t: 'Servicios para Promotores' },
            { href: '/concesion-aguas-corpocaldas', t: 'Concesion Aguas CORPOCALDAS' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10, padding: '12px 18px', textDecoration: 'none', color: '#2563EB', fontWeight: 500, fontSize: 15 }}>{l.t}</a>
          ))}
        </div>
      </Section>
    </>
  )
}
