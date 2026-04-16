import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Acueducto y Alcantarillado')

const seoConfig = {
  title: 'Diseño Acueducto y Alcantarillado Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Diseño de acueductos y alcantarillados para municipios y constructoras en Colombia. RAS 2017, Resolución 0330/2017. Redes de distribución, colectores, PTAP, PTAR. Especialista UNAL. COPNIA 17202-313228.',
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
            aprobación ante el Ministerio de Vivienda. Rogerio Bernal Ríos, Especialista en
            Ingeniería Hidráulica y Ambiental (UNAL) con matrícula COPNIA 17202-313228, ha diseñado
            sistemas de agua en más de 20 municipios del Eje Cafetero y otras regiones de Colombia.
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
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL), con +10 años de experiencia verificable en más de 20 municipios colombianos. Matrícula COPNIA 17202-313228 CLD activa.' },
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

      {/* ── FAQ ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas sobre diseño de acueducto y alcantarillado</h2>
          <ThinLine mb={40} />
          {[
            {
              q: '¿Qué normativa aplica para el diseño de acueductos en Colombia?',
              a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico (RAS 2017), adoptado mediante la Resolución 0330 de 2017 del Ministerio de Vivienda, Ciudad y Territorio, es la norma principal. Complementariamente aplican la Ley 142 de 1994 (servicios públicos domiciliarios) y las guías técnicas del MVCT para diseño de PTAP y PTAR. En zonas rurales aplica la Resolución 844 de 2018.',
            },
            {
              q: '¿Qué diferencia hay entre un acueducto urbano y un acueducto rural?',
              a: 'Los acueductos urbanos sirven poblaciones superiores a 2.500 habitantes con presiones de servicio, medición individual y continuidad del servicio conforme al RAS 2017 Título B. Los acueductos rurales atienden corregimientos y veredas con dotaciones menores, sistemas de distribución más simples y, en muchos casos, fuente de agua superficial o subterránea de menor caudal. La Resolución 844 de 2018 regula los sistemas rurales de agua potable.',
            },
            {
              q: '¿Cuándo se requiere diseño de PTAP o PTAR?',
              a: 'Una Planta de Tratamiento de Agua Potable (PTAP) es obligatoria cuando la fuente de captación no cumple los criterios de agua lista para consumo humano del Decreto 1575 de 2007. Una PTAR es obligatoria cuando el efluente del sistema de alcantarillado descarga a una fuente hídrica y debe cumplir los límites de la Resolución 631 de 2015 del MADS. Todo proyecto de saneamiento financiado con recursos públicos o regalías debe incluir el tratamiento correspondiente.',
            },
            {
              q: '¿Cuánto tiempo tarda el diseño de un sistema de acueducto municipal?',
              a: 'Para un municipio pequeño (hasta 5.000 usuarios), el proceso típicamente toma entre 6 y 10 semanas: 2 semanas de recopilación de datos y visita de campo, 3-4 semanas de cálculos hidráulicos y modelación, y 2-3 semanas de elaboración de planos, memorias y presupuesto. Proyectos que requieren PTAP o diseños de PTAR tienen plazos adicionales de 4-6 semanas por la complejidad del dimensionamiento de unidades de tratamiento.',
            },
            {
              q: '¿Qué documentos entrega BIC al finalizar el diseño?',
              a: 'La entrega incluye: (1) Memoria hidráulica de cálculo en PDF y Excel, con todo el dimensionamiento documentado; (2) Planos constructivos en DWG y PDF (planimetría general, perfiles de redes, detalles de obras especiales); (3) Especificaciones técnicas de construcción; (4) Presupuesto con análisis de precios unitarios (APU); (5) Programa de obra; (6) Informe técnico ejecutivo con justificación de alternativas. Toda la documentación está firmada y sellada con tarjeta COPNIA.',
            },
          ].map(({ q, a }) => (
            <details key={q} style={{
              borderBottom: '1px solid #E2E8F0', paddingBottom: 20, marginBottom: 20,
            }}>
              <summary style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                fontSize: 15, cursor: 'pointer', paddingBottom: 12, listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                {q}
              </summary>
              <p style={{
                fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15,
                lineHeight: 1.75, marginTop: 8,
              }}>{a}</p>
            </details>
          ))}
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

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de sistemas de acueducto conforme RAS 2017 y Resolución 0330/2017</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/redes-hidrosanitarias" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Redes hidrosanitarias para edificaciones — método Hunter, NSR-10 Título I</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos con HEC-HMS para caudales de diseño</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/ambiental" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Permisos ambientales, IRCA y concesión de aguas ante CAR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
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
