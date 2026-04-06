import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Redes Hidrosanitarias para Edificaciones')

const seoConfig = {
  title: 'Redes Hidrosanitarias para Edificaciones | BIC Bernal Ingeniería Consultores',
  description: 'Diseño de redes hidrosanitarias para edificios residenciales, comerciales e industriales en Colombia. Agua fría, agua caliente, aguas residuales, aguas lluvias. NSR-10, RAS 2017. Director PhD.',
  keywords: [
    'redes hidrosanitarias edificaciones Colombia',
    'diseño hidrosanitario edificios',
    'redes agua fría agua caliente',
    'diseño hidrosanitario conjunto residencial',
    'redes aguas residuales edificio',
    'hidrosanitario NSR-10',
    'diseño hidrosanitario Manizales',
    'diseño hidrosanitario comercial',
    'memoria hidrosanitaria licencia construcción',
    'diseño fontanería Colombia',
    'redes hidrosanitarias industriales',
    'diseño hidrosanitario constructoras',
  ],
  canonical: 'https://www.ingenieriabernal.co/servicios/redes-hidrosanitarias',
}

const INCLUYE = [
  { icon: '🚿', titulo: 'Redes de agua fría y agua caliente', desc: 'Diseño de la red de distribución interna de agua potable fría y caliente. Cálculo de caudales simultaneos (método Hunter), diámetros, presiones en cada punto de consumo y selección de materiales (PVC, CPVC, PPR). Cumplimiento del RAS 2017 Título B.' },
  { icon: '🏗️', titulo: 'Red de aguas residuales domésticas', desc: 'Diseño de la red de desagüe de aparatos sanitarios, trampas, sifones y columnas de ventilación. Cálculo por unidades de descarga (UD), diámetros de ramales, bajantes y colectores de piso. Cumplimiento NSR-10 Título I.' },
  { icon: '🌧️', titulo: 'Red de aguas lluvias y drenaje superficial', desc: 'Cálculo de caudales pluviales por intensidad de diseño local (curvas IDF IDEAM). Diseño de canales, canaletas, bajantes exteriores, tanques de almacenamiento o reutilización de aguas lluvias.' },
  { icon: '♻️', titulo: 'Sistemas de reutilización y ahorro de agua', desc: 'Diseño de sistemas de recolección de aguas lluvias para riego, lavado y descarga de sanitarios. Sistemas de agua caliente solar o por calentadores de paso. Soluciones de eficiencia hídrica para edificios sostenibles.' },
  { icon: '📐', titulo: 'Planos y memorias para licencia de construcción', desc: 'Elaboración de planos hidráulicos (isométricos, plantas, cortes) y memorias de cálculo en formato requerido por la curaduría urbana o entidad territorial para trámite de licencia de construcción.' },
  { icon: '🔍', titulo: 'Revisión y optimización de diseños existentes', desc: 'Auditoría técnica de redes hidrosanitarias diseñadas por terceros. Identificación de deficiencias, incompatibilidades normativas y propuesta de corrección o mejora antes del inicio de obra.' },
]

const PARA_QUIEN = [
  { tipo: 'Constructoras y promotores inmobiliarios', desc: 'Diseños completos de redes hidrosanitarias para proyectos de vivienda multifamiliar, conjuntos cerrados, torres de apartamentos y urbanizaciones.' },
  { tipo: 'Propietarios y desarrolladores de edificios comerciales', desc: 'Centros comerciales, hoteles, clínicas, colegios y edificios de oficinas que requieren redes hidrosanitarias con alta eficiencia y cumplimiento normativo.' },
  { tipo: 'Constructoras de proyectos industriales', desc: 'Naves industriales, bodegas de logística, parques empresariales y plantas de producción con demandas especiales de agua industrial y disposición de aguas residuales.' },
  { tipo: 'Profesionales que tramitan licencias de construcción', desc: 'Arquitectos, ingenieros y maestros de obra que necesitan la memoria hidrosanitaria firmada por especialista para completar el expediente de licencia.' },
]

export default function ServicioRedesHidrosanitarias() {
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
            Redes Hidrosanitarias para Edificaciones<br />
            <span style={{ color: '#17A2B8' }}>Residenciales, Comerciales e Industriales</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña redes hidrosanitarias internas para todo tipo
            de edificaciones en Colombia: agua fría, agua caliente, aguas residuales domésticas,
            aguas lluvias y sistemas de reutilización. Nuestros diseños cumplen el RAS 2017, la NSR-10
            Título I y la normativa local de cada municipio, entregando planos isométricos, memorias
            de cálculo firmadas por especialista y documentación lista para trámite de licencia de
            construcción ante la curaduría urbana. Con más de 30 años de experiencia y director PhD,
            hemos diseñado las instalaciones hidrosanitarias de proyectos emblemáticos como el Makarí
            Mall en Dosquebradas y múltiples conjuntos residenciales en el Eje Cafetero y Colombia.
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
          {['NSR-10 Título I', 'RAS 2017 Título B', 'NTC 1500', 'Curva IDF IDEAM', 'Curadurías urbanas'].map(t => (
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
          }}>¿Qué incluye el diseño de redes hidrosanitarias?</h2>
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
              { icon: '🏆', titulo: 'Proyectos emblemáticos comprobados', desc: 'Diseño hidrosanitario del Makarí Mall en Dosquebradas, Risaralda, y múltiples proyectos residenciales y comerciales en el Eje Cafetero.' },
              { icon: '🎓', titulo: 'Director PhD especialista en hidráulica', desc: 'Nivel académico y técnico superior que garantiza diseños sin errores, correctamente dimensionados y aceptados por curadurías y supervisores.' },
              { icon: '⚡', titulo: 'Entrega ágil con trato directo', desc: 'Comunicación directa con el director del proyecto. Presupuesto en 24 horas. Planos y memorias en los plazos pactados sin intermediarios.' },
              { icon: '🌐', titulo: 'Cobertura en toda Colombia', desc: 'Servicios para constructoras en Bogotá, Medellín, Cali, Bucaramanga, Barranquilla y todas las capitales con desplazamientos según el alcance.' },
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
            <a href="/blog/nsr-10-sistemas-contra-incendios" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>NSR-10 Capítulos J y K: Todo sobre Sistemas Contra Incendios</span>
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
            ¿Su proyecto necesita diseño hidrosanitario?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de edificación, el número de pisos y la ubicación del proyecto.
            Le enviamos presupuesto y plazo de entrega en menos de 24 horas.
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
