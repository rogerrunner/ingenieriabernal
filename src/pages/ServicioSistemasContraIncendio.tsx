import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Sistema Contra Incendio NSR-10')

const seoConfig = {
  title: 'Sistemas Contra Incendio NSR-10 Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Diseño de sistemas contra incendio NSR-10 Títulos J y K para edificios, centros comerciales, plantas industriales y bodegas en Colombia. NFPA, rociadores, hidrantes. COPNIA 17202-313228.',
  keywords: [
    'sistemas contra incendio NSR-10 Colombia',
    'diseño sistema contra incendio Colombia',
    'NSR-10 Título J sistemas contra incendio',
    'NSR-10 Título K protección especial',
    'rociadores automáticos NFPA',
    'diseño rociadores edificio Colombia',
    'sistema hidrantes NSR-10',
    'extinción automática industria',
    'diseño CI centro comercial',
    'sistema CI bodega logística',
    'memoria sistema contra incendio licencia',
    'NFPA 13 Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/sistemas-contra-incendio',
}

const INCLUYE = [
  { icon: '🔥', titulo: 'Clasificación de ocupación y riesgo de incendio', desc: 'Evaluación del riesgo de incendio según NSR-10 Títulos J y K. Clasificación de la edificación (ordinario, intermedio o extra), determinación de la demanda de agua y selección del sistema de extinción adecuado.' },
  { icon: '💧', titulo: 'Diseño de red de rociadores automáticos', desc: 'Diseño hidráulico del sistema de rociadores por el método de cálculo de densidad-área (NFPA 13). Selección de tipo de rociador (estándar, de respuesta rápida, ESFR), diámetros de red, central de abastecimiento y bomba de incendio.' },
  { icon: '🚒', titulo: 'Sistema de hidrantes internos y externos', desc: 'Diseño de gabinetes de manguera, bocatomas de bomberos, hidrantes de patio y red de hidrantes para acceso de carro de bomberos. Presiones residuales y caudales conforme a NSR-10 Título J y normativa local.' },
  { icon: '⚡', titulo: 'Detección, alarma y control', desc: 'Coordinación del diseño con el sistema de detección de incendios (paneles, detectores de humo y temperatura, pulsadores manuales). Integración con rociadores y sistemas de extinción especiales.' },
  { icon: '🏭', titulo: 'Sistemas especiales de extinción', desc: 'Diseño de sistemas de extinción por gas (FM-200, Novec 1230, CO₂) para salas eléctricas, centros de datos, archivos y cuartos de equipos. Sistemas de espuma para plantas de almacenamiento de hidrocarburos.' },
  { icon: '📋', titulo: 'Planos, memorias y presupuesto para licencia', desc: 'Elaboración de planos isométricos, planos en planta, memorias de cálculo hidráulico, especificaciones técnicas y presupuesto. Documentación firmada por especialista para trámite de licencia de construcción o permiso de ocupación.' },
]

const PARA_QUIEN = [
  { tipo: 'Constructoras y promotores de edificios', desc: 'Diseño integral del sistema CI para proyectos de vivienda de altura, edificios de oficinas, hoteles y proyectos de uso mixto que superan las alturas mínimas de NSR-10.' },
  { tipo: 'Desarrolladores de centros comerciales e industria', desc: 'Sistemas CI para grandes superficies, bodegas de almacenamiento, centros de distribución logística y parques industriales con cargas de fuego elevadas.' },
  { tipo: 'Entidades públicas y hospitales', desc: 'Instituciones educativas, hospitales, clínicas, entidades gubernamentales y equipamientos colectivos que requieren cumplimiento estricto de NSR-10 Título J para su licencia de funcionamiento.' },
  { tipo: 'Interventores y revisores de licencias', desc: 'Revisión técnica de diseños CI presentados ante la curaduría. Verificación de cumplimiento normativo NSR-10 y NFPA antes de la aprobación del permiso de construcción.' },
]

export default function ServicioSistemasContraIncendio() {
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
            Sistemas Contra Incendio NSR-10<br />
            <span style={{ color: '#17A2B8' }}>para Edificios, Industria y Entidades en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas contra incendio bajo la normativa NSR-10
            Títulos J y K y las normas NFPA aplicables para edificios residenciales, comerciales,
            industriales y equipamientos colectivos en Colombia. Abarcamos rociadores automáticos,
            red de hidrantes, sistemas de detección y sistemas especiales de extinción. Nuestros
            diseños están firmados por especialista certificado, incluyen memorias hidráulicas detalladas
            y documentación completa para trámite ante curadurías urbanas, SDSCJ o cualquier entidad
            competente. Rogerio Bernal Ríos, Especialista UNAL con COPNIA 17202-313228, ha diseñado
            los sistemas CI de proyectos como el Makarí Mall en Dosquebradas y múltiples edificios en el Eje Cafetero.
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
          {['NSR-10 Título J', 'NSR-10 Título K', 'NFPA 13', 'NFPA 14', 'NFPA 72'].map(t => (
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
          }}>¿Qué incluye el diseño del sistema CI?</h2>
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
              { icon: '🏆', titulo: 'Proyecto Makarí Mall ejecutado', desc: 'Diseño CI verificado en un centro comercial de gran escala en Dosquebradas, Risaralda. Referencia disponible para inspección por parte del contratante.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA 17202-313228', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL), tarjeta COPNIA activa y amplio conocimiento de la NSR-10 Títulos J y K y sus referencias NFPA.' },
              { icon: '📋', titulo: 'Documentación para cualquier curaduría', desc: 'Planos, memorias y especificaciones en formato y detalle requeridos por las 10 principales curadurías urbanas de Colombia.' },
              { icon: '🔗', titulo: 'Diseño integrado con hidrosanitarios', desc: 'BIC diseña simultáneamente las redes hidrosanitarias y el sistema CI, evitando interferencias, optimizando el abastecimiento de agua y reduciendo costos.' },
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
            <a href="/blog/nsr-10-sistemas-contra-incendios" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>NSR-10 Capítulos J y K: Todo sobre Sistemas Contra Incendios en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/costos-obras-hidraulicas-colombia-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Costos de Obras Hidráulicas en Colombia 2026: APU y Tendencias</span>
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
            ¿Su proyecto requiere sistema CI NSR-10?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el uso de la edificación, el número de pisos y la ciudad.
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
