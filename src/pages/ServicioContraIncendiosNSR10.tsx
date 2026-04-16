import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Sistema Contra Incendios NSR-10 J y K')

const seoConfig = {
  title: 'Sistemas Contra Incendios NSR-10 Títulos J y K Colombia | BIC',
  description: 'Diseño de sistemas contra incendios NSR-10 Títulos J y K para edificios, centros comerciales e industria en Colombia. Rociadores NFPA 13, hidrantes NFPA 14, detección NFPA 72. COPNIA 17202-313228.',
  keywords: [
    'sistemas contra incendios NSR-10 Colombia',
    'diseño sistema contra incendio NSR-10',
    'NSR-10 Título J contra incendios',
    'NSR-10 Título K protección especial',
    'rociadores automáticos NFPA 13 Colombia',
    'red hidrantes NFPA 14 Colombia',
    'diseño CI centro comercial Colombia',
    'diseño CI edificio Colombia',
    'memoria CI licencia construcción',
    'diseño sistema extinción Colombia',
    'NFPA Colombia ingeniería',
    'sistema detección incendio NFPA 72',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/contra-incendios-nsr10',
}

const SISTEMAS = [
  {
    icon: '🚿',
    titulo: 'Rociadores automáticos — NFPA 13',
    desc: 'Diseño hidráulico del sistema de rociadores: clasificación de peligro (ordinario, extra), densidad de aplicación, área de operación, presiones residuales y caudales de diseño. Selección de rociadores (colgantes, laterales, ocultos) y trazado de ramales, alimentadores y tubería principal según NFPA 13 y NSR-10 Título J.',
  },
  {
    icon: '🏗️',
    titulo: 'Red de hidrantes internos y externos — NFPA 14',
    desc: 'Diseño de la red de gabinetes de manguera (BIE) para uso de bomberos. Cálculo de caudal de diseño (250 GPM por gabinete simultáneo), presiones mínimas en boca de salida (100 psi) y trazado de tuberías. Hidrantes externos según exigencias de bomberos y curadurías. Cumplimiento NFPA 14 y NSR-10 Título J.',
  },
  {
    icon: '⚡',
    titulo: 'Sistema de detección y alarma — NFPA 72',
    desc: 'Diseño de la red de detectores de humo y/o calor, pulsadores manuales, sirenas y panel de control de incendio conforme a NFPA 72. Integración con la central de monitoreo y los sistemas de evacuación del edificio. Cálculo de cobertura de detectores según el uso del espacio.',
  },
  {
    icon: '💧',
    titulo: 'Cuarto de bombas — NFPA 20',
    desc: 'Diseño del cuarto de bombas CI: bomba principal (eléctrica o diésel), bomba jockey de mantenimiento de presión y bomba de reserva. Cálculo de capacidad (GPM) y presión (PSI), selección de equipos certificados FM o UL, y trazado de tuberías de succión y descarga conforme a NFPA 20.',
  },
  {
    icon: '🏭',
    titulo: 'Sistemas especiales de extinción — NSR-10 Título K',
    desc: 'Para cocinas industriales (sistemas Ansul), áreas de servidores (CO₂ o gases limpios FK-5-1-12, Novec 1230) y bodegas de materias peligrosas. Diseño conforme a NFPA 17A, NFPA 2001 y el Título K de la NSR-10. Integración con el sistema de detección general del edificio.',
  },
  {
    icon: '📐',
    titulo: 'Memorias, planos y especificaciones',
    desc: 'Entrega completa: memoria hidráulica de diseño con cálculos en hoja de cálculo y modelación hydraulic, planos isométricos de tuberías CI (DWG y PDF), especificaciones técnicas de materiales y equipos, lista de cantidades y presupuesto APU. Documentación lista para radicación en curadurías urbanas y Subsecretaría de Despacho del Sector CI (SDSCJ).',
  },
]

const PROYECTOS_TIPOS = [
  { tipo: 'Centros comerciales y grandes superficies', desc: 'Diseño CI completo para locales, área de parqueaderos y bodegas logísticas. Makarí Mall Dosquebradas como referencia ejecutada.' },
  { tipo: 'Edificios residenciales multifamiliares', desc: 'Torres de apartamentos que requieren sistemas CI por altura (más de 4 pisos) o por área construida según la NSR-10.' },
  { tipo: 'Plantas industriales y bodegas logísticas', desc: 'Almacenamiento de mercancías clasificadas, naves de producción y plantas de alimentos con niveles de peligro extra o especiales.' },
  { tipo: 'Hoteles, clínicas y hospitales', desc: 'Edificios de alta ocupación con rutas de evacuación críticas y exigencias reforzadas por la autoridad de bomberos y la entidad habilitadora.' },
  { tipo: 'Colegios y universidades', desc: 'Instalaciones educativas con aulas, laboratorios y cocinas que requieren sistemas de detección diferenciados por zona.' },
]

const NORMATIVA_CI = [
  { norma: 'NSR-10 Título J', aplica: 'Protección contra incendios — sistemas activos generales' },
  { norma: 'NSR-10 Título K', aplica: 'Sistemas especiales de extinción (CO₂, gases limpios, espuma)' },
  { norma: 'NFPA 13', aplica: 'Instalación de sistemas de rociadores automáticos' },
  { norma: 'NFPA 14', aplica: 'Instalación de sistemas de tuberías verticales y mangueras' },
  { norma: 'NFPA 20', aplica: 'Instalación de bombas centrífugas estacionarias para protección contra incendios' },
  { norma: 'NFPA 72', aplica: 'Código nacional de alarmas de incendio y señalización' },
  { norma: 'NFPA 17A', aplica: 'Sistemas de extinción por agentes húmedos (cocinas industriales)' },
  { norma: 'NFPA 2001', aplica: 'Sistemas de extinción por agentes limpios (salas eléctricas, servidores)' },
]

export default function ServicioContraIncendiosNSR10() {
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
            Sistemas Contra Incendios NSR-10<br />
            <span style={{ color: '#17A2B8' }}>Títulos J y K · NFPA para Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas contra incendios completos conforme a
            la NSR-10 Títulos J y K y las normas NFPA para edificios residenciales, centros
            comerciales, plantas industriales, hoteles, clínicas y bodegas en Colombia. Entregamos
            memorias hidráulicas, planos isométricos, especificaciones de equipos y presupuestos
            APU listos para radicación en curadurías urbanas. Rogerio Bernal Ríos, Especialista en
            Ingeniería Hidráulica y Ambiental (UNAL, COPNIA 17202-313228), ha diseñado los sistemas
            CI del Makarí Mall en Dosquebradas y múltiples proyectos en el Eje Cafetero y Colombia.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              Solicitar cotización
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
          {['NSR-10 Título J', 'NSR-10 Título K', 'NFPA 13', 'NFPA 14', 'NFPA 20', 'NFPA 72'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SISTEMAS QUE DISEÑAMOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Sistemas que diseñamos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SISTEMAS.map((s) => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{s.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── MARCO NORMATIVO ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa aplicable a sistemas CI en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Lato', sans-serif" }}>
              <thead>
                <tr style={{ background: '#003B6F', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Norma</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'Montserrat', sans-serif", fontSize: 13 }}>Aplicación</th>
                </tr>
              </thead>
              <tbody>
                {NORMATIVA_CI.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#17A2B8', fontSize: 14, whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: 14 }}>{n.aplica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── PARA QUIÉN ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos que atendemos</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS_TIPOS.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
                border: '1px solid #E2E8F0', borderLeftWidth: 3,
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

      {/* ── FAQ ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas sobre sistemas contra incendios NSR-10</h2>
          <ThinLine mb={40} />
          {[
            {
              q: '¿Cuándo es obligatorio el sistema contra incendios según la NSR-10?',
              a: 'La NSR-10 Título J establece que los sistemas CI son obligatorios según el uso, el área construida y la altura del edificio. En términos generales: edificios de uso comercial con más de 1.500 m² de área total, edificios residenciales de más de 4 pisos de altura, edificios industriales o de almacenamiento con materiales combustibles, hoteles con más de 4 pisos, y centros hospitalarios o educativos de más de 3.000 m². La curaduría urbana es la entidad que verifica el cumplimiento durante el trámite de licencia de construcción.',
            },
            {
              q: '¿Qué diferencia hay entre NSR-10 Título J y Título K?',
              a: 'El Título J de la NSR-10 regula los sistemas activos de protección contra incendios de uso general: rociadores automáticos, red de hidrantes con mangueras, sistemas de detección y alarma, y cuartos de bombas. El Título K regula los sistemas especiales de extinción que usan agentes distintos al agua: CO₂, gases limpios (FM-200, Novec 1230) y espuma para áreas con riesgos específicos como salas de servidores, equipos eléctricos de alta tensión y bodegas con líquidos inflamables. Un proyecto puede requerir cumplimiento de ambos títulos.',
            },
            {
              q: '¿Qué es la densidad de diseño en un sistema de rociadores?',
              a: 'La densidad de diseño es la cantidad de agua (en mm/min o GPM/ft²) que debe aplicarse sobre un área determinada de operación del sistema de rociadores para controlar el incendio. La NFPA 13 establece curvas de densidad/área según la clasificación del peligro del edificio: peligro ordinario Grupo 1 y 2 para uso comercial típico, y peligro extra Grupo 1 y 2 para almacenamiento de alto riesgo. Una densidad más alta o un área de operación mayor resulta en tuberías de mayor diámetro y mayor capacidad del cuarto de bombas.',
            },
            {
              q: '¿Por qué la curaduría exige memoria firmada por especialista para el sistema CI?',
              a: 'La NSR-10 exige que las memorias de diseño de sistemas contra incendios sean elaboradas y firmadas por un ingeniero civil o mecánico con tarjeta profesional COPNIA vigente y experiencia acreditable en el área. El sistema CI es un sistema de seguridad vital: un error de diseño puede resultar en fallo del sistema durante un incendio real o en activación accidental que cause daños millonarios. Las curadurías urbanas rechazan los expedientes de licencia de construcción que no incluyan la memoria CI firmada por especialista.',
            },
            {
              q: '¿Cuánto tiempo tarda el diseño de un sistema CI y cuál es el costo aproximado?',
              a: 'El plazo típico es de 2 a 5 semanas según la complejidad: un edificio residencial de 8 pisos puede resolverse en 2-3 semanas; un centro comercial con múltiples usos y sistemas especiales puede requerir 4-6 semanas. El costo varía según el área del proyecto, el número de sistemas a diseñar y si se requieren sistemas especiales (Título K). Para obtener un presupuesto ajustado, comparta los planos arquitectónicos y el uso del edificio — respondemos con propuesta en menos de 24 horas.',
            },
          ].map(({ q, a }) => (
            <details key={q} style={{
              borderBottom: '1px solid #E2E8F0', paddingBottom: 20, marginBottom: 20,
            }}>
              <summary style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                fontSize: 15, cursor: 'pointer', paddingBottom: 12, listStyle: 'none',
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
            <a href="/blog/nsr-10-sistemas-contra-incendios" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>NSR-10 Títulos J y K: Todo sobre Sistemas Contra Incendios en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/costos-obras-hidraulicas-colombia-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Costos de Obras Hidráulicas en Colombia 2026</span>
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
            ¿Su proyecto necesita sistema CI NSR-10?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Comparta el uso del edificio, el número de pisos, el área construida y la ciudad.
            Le enviamos presupuesto y plazo de entrega en menos de 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
