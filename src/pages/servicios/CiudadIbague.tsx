import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar una consultoría hidráulica en Ibagué')

const seoConfig = {
  title: 'Consultoría hidráulica en Ibagué — Ingeniería Bernal',
  description: 'Consultoría hidráulica en Ibagué y Tolima: estudios hidrológicos río Combeima y Coello, riesgo hídrico POT, diseño acueductos, alcantarillado y trámites CORTOLIMA. BIC · COPNIA · UNAL.',
  keywords: [
    'consultoría hidráulica Ibagué',
    'ingeniería hidráulica Ibagué',
    'estudios hidrológicos Tolima',
    'río Combeima Ibagué',
    'río Coello Tolima',
    'CORTOLIMA permisos hidráulicos',
    'diseño acueducto Ibagué',
    'riesgo hídrico POT Ibagué',
    'HEC-RAS Tolima',
    'planes parciales Ibagué',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/ibague',
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BIC – Bernal Ingeniería Consultores',
  description: 'Consultoría en ingeniería hidráulica en Ibagué y el Tolima: río Combeima, río Coello, riesgo hídrico POT y diseño de infraestructura hídrica.',
  url: 'https://ingenieriabernal.co',
  telephone: '+573024778910',
  email: 'rogeriobernal@ingenieriabernal.co',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ibagué',
    addressRegion: 'Tolima',
    addressCountry: 'CO',
  },
  areaServed: ['Ibagué', 'Tolima', 'Norte del Tolima', 'Sur del Tolima'],
  founder: {
    '@type': 'Person',
    name: 'Rogerio Bernal Ríos',
    jobTitle: 'Director General · Especialista Ingeniería Hidráulica y Ambiental UNAL',
  },
  knowsAbout: [
    'Ingeniería Hidráulica', 'Hidrología', 'Río Combeima', 'Río Coello',
    'CORTOLIMA', 'Riesgo Hídrico POT', 'HEC-RAS', 'Acueductos y Alcantarillado',
  ],
}

const SERVICIOS = [
  {
    nombre: 'Estudios hidrológicos río Combeima y Coello',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Análisis de caudales, curvas IDF y modelación de crecientes del río Combeima, Coello y afluentes tolimenses para estudios de amenaza hídrica, planes POT y obras de protección ribereña.',
  },
  {
    nombre: 'Modelación HEC-RAS ríos tolimenses',
    href: '/servicios/modelacion-hec-ras',
    desc: 'Modelación hidráulica 1D/2D del río Combeima a su paso por Ibagué, y del río Coello en la zona del triángulo del sur del Tolima, para manchas de inundación y gestión del riesgo.',
  },
  {
    nombre: 'Riesgo hídrico para POT y licencias',
    href: '/servicios/estudios-hidrologicos',
    desc: 'Estudios de amenaza, vulnerabilidad y riesgo hídrico bajo Decreto 1807/2014 para planes parciales y licencias urbanísticas en Ibagué y municipios del Tolima.',
  },
  {
    nombre: 'Diseño acueducto y alcantarillado',
    href: '/servicios/acueducto-alcantarillado',
    desc: 'Diseño de sistemas de agua potable y saneamiento bajo Res. 0330/2017 para municipios y proyectos privados en el Tolima, coordinando con IBAL Ibagué y ESP municipales.',
  },
  {
    nombre: 'Redes hidrosanitarias y NSR-10',
    href: '/servicios/redes-hidrosanitarias',
    desc: 'Diseño de instalaciones hidrosanitarias y sistemas contra incendios NSR-10 para proyectos residenciales, comerciales e industriales en Ibagué y la región del norte del Tolima.',
  },
  {
    nombre: 'Estudios ambientales CORTOLIMA',
    href: '/servicios/ambiental',
    desc: 'Concesiones de agua, permisos de vertimientos y trámites ante CORTOLIMA para proyectos en el Tolima. Acompañamiento técnico completo hasta la obtención del permiso.',
  },
]

const PROYECTOS = [
  {
    tipo: 'Riesgo hídrico río Combeima',
    desc: 'El río Combeima a su paso por Ibagué genera demanda permanente de estudios hidráulicos para la gestión del riesgo, el POT municipal y proyectos de expansión urbana en las márgenes del cauce.',
  },
  {
    tipo: 'Triangulo del Tolima — río Coello',
    desc: 'El valle aluvial del río Coello entre Ibagué, El Espinal y Flandes concentra actividad agroindustrial, vial e inmobiliaria que requiere estudios hidrológicos e hidráulicos para obras y licencias.',
  },
  {
    tipo: 'Planes parciales norte de Ibagué',
    desc: 'Las zonas de expansión norte de Ibagué (comunas 1 y 2) requieren estudios de riesgo hídrico exigidos por la Secretaría de Planeación antes de aprobar licencias de urbanismo y planes parciales.',
  },
  {
    tipo: 'Acueductos municipales Tolima',
    desc: 'Formulación y diseño de sistemas de abastecimiento de agua para municipios del Tolima con recursos SGR y MVCT, coordinando con CORTOLIMA y la Gobernación del Tolima.',
  },
]

export default function CiudadIbague() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'schema-local-ibague'
    script.textContent = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    return () => { document.getElementById('schema-local-ibague')?.remove() }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Cobertura nacional · Ibagué, Tolima</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Consultoría hidráulica en Ibagué<br />
            <span style={{ color: '#17A2B8' }}>— Ingeniería Bernal</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC realiza consultoría hidráulica en Ibagué y el Tolima: estudios hidrológicos del
            río Combeima y el Coello, riesgo hídrico para POT y planes parciales, diseño de
            acueductos y alcantarillado, y trámites ante CORTOLIMA.
            Director: Rogerio Bernal Ríos (UNAL) · COPNIA 17202-313228.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización en Ibagué
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Especialidades:</span>
          {['Río Combeima', 'Río Coello', 'CORTOLIMA', 'HEC-RAS', 'POT Ibagué', 'Decreto 1807', 'Planes parciales'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Servicios en Ibagué</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué proyectos ejecutamos en Ibagué y el Tolima?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICIOS.map(s => (
              <a key={s.href + s.nombre} href={s.href} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                  padding: 24, borderTop: '3px solid #17A2B8', height: '100%',
                }}>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 14, marginBottom: 8,
                  }}>{s.nombre}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6, marginBottom: 12,
                  }}>{s.desc}</p>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 13 }}>
                    Ver servicio →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROYECTOS TÍPICOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Contexto regional</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Proyectos típicos en Ibagué y el Tolima</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map(p => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '64px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Por qué BIC en Ibagué</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Experiencia en la región Eje Cafetero–Tolima</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏔️', tit: 'Cuencas andinas del centro', txt: 'Experiencia en cuencas de la Cordillera Central — eje BIC desde el Eje Cafetero hasta el Tolima, conociendo el régimen hidrológico de ríos como el Combeima y el Coello.' },
              { icon: '🎓', tit: 'Especialista UNAL · COPNIA', txt: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental UNAL. Matrícula COPNIA 17202-313228 para firma de estudios y planos.' },
              { icon: '🌊', tit: 'Riesgo hídrico POT', txt: 'Producción de estudios de amenaza y riesgo hídrico compatibles con el POT de Ibagué y los requerimientos de la Secretaría de Planeación del Tolima.' },
              { icon: '⚡', tit: 'Propuesta en 24 horas', txt: 'Enviamos propuesta técnica y económica en menos de 24 horas para proyectos en Ibagué y municipios del Tolima.' },
            ].map(d => (
              <div key={d.tit} style={{
                padding: 24, background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(23,162,184,0.2)', borderRadius: 4,
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.tit}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6,
                }}>{d.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Tiene un proyecto hidráulico en Ibagué o el Tolima?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto (estudio río Combeima, plan parcial, acueducto municipal,
            riesgo POT) y la ubicación en el Tolima. Le enviamos propuesta técnica en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </Btn>
        </div>
      </Section>
    </>
  )
}
