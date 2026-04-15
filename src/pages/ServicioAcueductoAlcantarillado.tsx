import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Acueducto y Alcantarillado')

const seoConfig = {
  title: 'Diseño Acueducto y Alcantarillado Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Diseño de acueductos y alcantarillados para municipios y constructoras en Colombia. RAS 2017, Resolución 0330/2017. Redes de distribución, colectores, PTAP, PTAR. Director PhD. +30 años.',
  keywords: [
    'diseño acueducto alcantarillado Colombia',
    'diseño acueducto municipal Colombia',
    'diseño alcantarillado sanitario Colombia',
    'RAS 2017 acueducto',
    'Resolución 0330 2017',
    'redes distribución agua potable',
    'colectores alcantarillado',
    'diseño PTAP Colombia',
    'diseño PTAR Colombia',
    'acueducto rural Colombia',
    'alcantarillado pluvial',
    'ingeniería sanitaria Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/acueducto-alcantarillado',
}

const INCLUYE = [
  { icon: '💧', titulo: 'Diseño del sistema de acueducto', desc: 'Captación, conducción, almacenamiento y red de distribución. Cálculo de caudales de diseño, dotación, variaciones de consumo y presiones de servicio. Cumplimiento pleno del RAS 2017 Título B y la Resolución 0330/2017 del Ministerio de Vivienda.' },
  { icon: '🔩', titulo: 'Diseño de red de alcantarillado sanitario', desc: 'Trazado hidráulico de colectores y emisarios finales. Cálculo de caudales de diseño, velocidades de auto-limpieza, diámetros, pendientes y obras especiales (cámaras, sifones, aliviadores). RAS 2017 Título D.' },
  { icon: '🌧️', titulo: 'Sistema de alcantarillado pluvial y SUDS', desc: 'Diseño del sistema de drenaje superficial y subterráneo para aguas lluvias. Integración de Sistemas Urbanos de Drenaje Sostenible (SUDS): cunetas, sumideros, canales de alivio y estructuras de retención.' },
  { icon: '🏭', titulo: 'Diseño de PTAP y PTAR', desc: 'Plantas de tratamiento de agua potable y aguas residuales domésticas e industriales. Selección de procesos, dimensionamiento de unidades, cálculo estructural básico y especificaciones técnicas de equipos.' },
  { icon: '📐', titulo: 'Memorias de cálculo y planos constructivos', desc: 'Documentación técnica completa: memoria hidráulica, planos planimetría y altimetría, perfiles de redes, detalles constructivos y especificaciones técnicas aprobables ante el Ministerio de Vivienda y Territorio.' },
  { icon: '📋', titulo: 'Presupuesto, programación y pliegos', desc: 'Estimación de cantidades de obra, análisis de precios unitarios (APU), presupuesto oficial, programación de obra y especificaciones técnicas para licitación o contratación directa.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y empresas de servicios públicos (ESP)', desc: 'Diseños para proyectos de inversión municipal, expansión de redes, optimización de sistemas existentes y cumplimiento de planes de saneamiento.' },
  { tipo: 'Constructoras y urbanizadores', desc: 'Redes internas de acueducto y alcantarillado para proyectos de vivienda, urbanizaciones, conjuntos residenciales y zonas industriales.' },
  { tipo: 'Gobernaciones y entidades territoriales', desc: 'Estudios y diseños para proyectos de agua potable y saneamiento básico financiados con regalías SGR o recursos FINDETER/Minvivienda.' },
  { tipo: 'Interventores y supervisores técnicos', desc: 'Revisión de diseños y memorias de cálculo entregados por terceros. Verificación de cumplimiento normativo RAS 2017 y Resolución 0330.' },
]

export default function ServicioAcueductoAlcantarillado() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño de Acueducto y Alcantarillado<br />
            <span style={{ color: '#17A2B8' }}>para Municipios y Constructoras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas de acueducto y alcantarillado para
            municipios, constructoras y entidades públicas con cumplimiento total del RAS 2017 y la
            Resolución 0330/2017. Desde la captación hasta la planta de tratamiento, desde los colectores
            sanitarios hasta el emisario final, entregamos documentación técnica completa —memorias,
            planos, presupuestos y especificaciones— apta para licitación, contratación directa y
            aprobación ante el Ministerio de Vivienda. Nuestro director PhD con más de 30 años de
            experiencia ha diseñado sistemas de agua en más de 20 municipios del Eje Cafetero y
            otras regiones de Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['RAS 2017', 'Resolución 0330/2017', 'Ley 142/1994', 'SUDS', 'PTAP / PTAR'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el diseño de acueducto y alcantarillado?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INCLUYE.map((item) => (
              <div key={item.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{item.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PARA QUIÉN ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para quién es este servicio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PARA_QUIEN.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
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
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: '+30 años diseñando sistemas de agua', desc: 'Experiencia directa en más de 20 municipios colombianos con proyectos ejecutados y verificables de acueducto, alcantarillado y saneamiento básico.' },
              { icon: '📜', titulo: 'RAS 2017 y Res. 0330 sin observaciones', desc: 'Diseños estructurados desde el inicio para pasar la revisión técnica del Ministerio de Vivienda, SSPD y entidades financiadoras sin reprocesos.' },
              { icon: '🗺️', titulo: 'Cobertura nacional desde el Eje Cafetero', desc: 'Base en Manizales con desplazamientos a todo el país. Proyectos en Caldas, Risaralda, Quindío, Cundinamarca, Santander, Boyacá y más departamentos.' },
              { icon: '📊', titulo: 'Entrega integral lista para contratar', desc: 'Documentación completa: memorias, planos DWG/PDF, presupuesto con APU, programa de obra y especificaciones técnicas listas para pliegos o acta de inicio.' },
            ].map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/costos-obras-hidraulicas-colombia-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Costos de Obras Hidráulicas en Colombia 2026: APU y Tendencias</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo bajar el IRCA de un municipio en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            Cuéntenos su proyecto de agua y saneamiento
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, la población a servir y la fuente de financiación prevista.
            Le enviamos propuesta técnica y económica en 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
