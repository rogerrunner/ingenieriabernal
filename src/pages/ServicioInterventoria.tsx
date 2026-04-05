import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Interventoría Técnica Hidráulica')

const seoConfig = {
  title: 'Interventoría Técnica Hidráulica Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Interventoría técnica de obras hidráulicas, acueductos, alcantarillados y redes hidrosanitarias para municipios, gobernaciones y entidades públicas en Colombia. Director PhD. +30 años.',
  keywords: [
    'interventoría técnica hidráulica Colombia',
    'interventoría obras acueducto alcantarillado',
    'interventoría proyectos hídricos',
    'supervisor técnico obras agua',
    'interventoría hidráulica municipios',
    'interventoría gobernación Colombia',
    'revisión diseños hidráulicos',
    'interventoría SGR agua saneamiento',
    'supervisión técnica redes hidrosanitarias',
    'interventoría RAS 2017',
    'control calidad obras hidráulicas',
    'interventoría Eje Cafetero',
  ],
  canonical: 'https://www.ingenieriabernal.co/servicios/interventoria',
}

const INCLUYE = [
  { icon: '📐', titulo: 'Revisión técnica de estudios y diseños', desc: 'Verificación del cumplimiento normativo de estudios hidrológicos, hidráulicos, diseños de acueducto, alcantarillado, redes hidrosanitarias y sistemas CI presentados por el contratista. Identificación de inconsistencias antes del inicio de obra.' },
  { icon: '🏗️', titulo: 'Supervisión técnica en campo', desc: 'Presencia en obra para verificar la correcta ejecución de instalaciones hidráulicas, redes de acueducto y alcantarillado, excavaciones, rellenos y pruebas hidrostáticas. Control de calidad de materiales y mano de obra.' },
  { icon: '📋', titulo: 'Informes técnicos periódicos', desc: 'Elaboración de informes de avance semanales, quincenales o mensuales según los requerimientos del contratante. Registro fotográfico, actas de visita, cuadros de cantidades ejecutadas y comparación con el programa de obra aprobado.' },
  { icon: '💰', titulo: 'Control financiero y de cantidades', desc: 'Verificación y aprobación de actas de cobro parciales y finales. Control de cantidades de obra ejecutadas, precios unitarios contractuales, adiciones y modificaciones al contrato de obra.' },
  { icon: '⚖️', titulo: 'Gestión de incumplimientos y no conformidades', desc: 'Emisión de comunicaciones de incumplimiento, órdenes de corrección y actas de suspensión cuando se detectan deficiencias técnicas o contractuales. Asesoría al contratante en decisiones de terminación anticipada o reclamaciones.' },
  { icon: '✅', titulo: 'Acta de recibo final y liquidación', desc: 'Elaboración del acta de recibo final de obra, balance de cantidades ejecutadas, relación de garantías y documentos de cierre. Acompañamiento en la liquidación del contrato de obra ante la entidad contratante.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y secretarías de obras', desc: 'Interventoría para contratos de construcción de acueductos, alcantarillados, plantas de tratamiento y obras de drenaje financiados con recursos propios o SGR.' },
  { tipo: 'Gobernaciones y entidades departamentales', desc: 'Supervisión técnica de obras de mayor escala: sistemas regionales de acueducto, defensas fluviales, canales de riego y proyectos de infraestructura hídrica departamental.' },
  { tipo: 'Empresas de Servicios Públicos (ESP)', desc: 'Control técnico de contratos de expansión de redes, reposición de tuberías, optimización de PTAP/PTAR y obras de mejoramiento de la prestación del servicio.' },
  { tipo: 'Contratistas que requieren aval técnico externo', desc: 'Revisión independiente de diseños propios o del contratante antes de ejecutar obra, para evitar reprocesos y garantizar el recibo satisfactorio de la interventoría oficial.' },
]

export default function ServicioInterventoria() {
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
            Interventoría Técnica de Obras Hidráulicas<br />
            <span style={{ color: '#17A2B8' }}>para Municipios, Gobernaciones y Entidades</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores presta servicios de interventoría técnica especializada
            en obras hidráulicas: acueductos, alcantarillados, plantas de tratamiento, redes
            hidrosanitarias y sistemas de drenaje. Verificamos el cumplimiento de los diseños
            aprobados, el RAS 2017 y la Resolución 0330/2017, controlamos la calidad de materiales
            y ejecución en campo, elaboramos informes técnicos periódicos y gestionamos las actas
            de cobro y el cierre del contrato. Nuestro director PhD con más de 30 años de experiencia
            ha ejercido interventoría en proyectos financiados por el SGR, alcaldías del Eje Cafetero
            y entidades como la Rama Judicial en La Dorada. Ofrecemos el más alto nivel técnico con
            trato directo y respuesta ágil.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Modalidades:</span>
          {['RAS 2017', 'Ley 80/1993', 'Decreto 1082/2015', 'SGR', 'Control de calidad'].map(t => (
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
          }}>¿Qué incluye la interventoría técnica?</h2>
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
              { icon: '🎓', titulo: 'Interventor PhD — máximo nivel técnico', desc: 'Director con doctorado en ingeniería. La interventoría que contratan las entidades más exigentes para garantizar que los contratistas no puedan impugnar conceptos técnicos.' },
              { icon: '📜', titulo: 'COPNIA vigente — responsabilidad profesional', desc: 'Todos los informes y actas firmados por profesional habilitado, con plena responsabilidad disciplinaria y penal ante el Estado colombiano.' },
              { icon: '⚡', titulo: 'Respuesta ágil en terreno', desc: 'Desplazamientos rápidos desde Manizales a cualquier municipio del Eje Cafetero o el país. Disponibilidad para visitas de emergencia cuando el contratista genera alertas.' },
              { icon: '🔗', titulo: 'Interventoría y diseño bajo el mismo techo', desc: 'Si se requieren ajustes técnicos durante la obra, BIC los tramita internamente sin demoras. Menor tiempo de respuesta y cero inconsistencias entre interventoría y diseño.' },
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

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita interventoría para su contrato de obra?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de obra, el valor del contrato y la fecha de inicio prevista.
            Le enviamos propuesta de honorarios y cronograma en 24 horas.
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
