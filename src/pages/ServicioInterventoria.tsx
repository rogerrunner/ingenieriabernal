import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito interventoría técnica para una obra hidráulica. ¿Me asesoran sobre el alcance y el costo?')

const seoConfig = {
  title: 'Interventoría Obras Hidráulicas Colombia 2026 — Desde $5M | COPNIA | BIC',
  description: 'Interventoría técnica de obras hidráulicas en Colombia desde $5M COP: acueductos, alcantarillados, PTAP y redes hidrosanitarias. Ing. Rogerio Bernal, COPNIA vigente. Informe ejecutivo semanal. Propuesta en 24 h.',
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
  canonical: 'https://ingenieriabernal.co/servicios/interventoria',
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

const FAQ_INT = [
  { q: '¿Cuánto cuesta la interventoría de obras hidráulicas en Colombia?', a: 'El costo de la interventoría depende del valor de la obra y su duración. Para contratos públicos, la interventoría suele representar entre el 5% y el 10% del valor del contrato de obra. Para una obra de $200M–$500M COP (acueducto rural o alcantarillado municipal), la interventoría técnica oscila entre $12M y $40M COP. Para obras menores o revisiones puntuales, los honorarios pueden partir desde $5M COP. BIC envía propuesta en 24 horas.' },
  { q: '¿Qué hace un interventor técnico en una obra hidráulica?', a: 'El interventor técnico verifica que la obra se ejecute conforme a los diseños, las especificaciones técnicas y las normas colombianas (RAS 2017, NSR-10, INVIAS). Sus funciones incluyen: revisión de materiales, supervisión de pruebas hidrostáticas, control de avance físico y financiero, elaboración de actas de avance, verificación de ensayos de laboratorio y concepto técnico para pago de actas parciales y acta de recibo final.' },
  { q: '¿Cuándo es obligatoria la interventoría en obras públicas de agua potable?', a: 'En Colombia, la Ley 1474 de 2011 (Estatuto Anticorrupción) y la Ley 80 de 1993 establecen que los contratos de obra pública superiores a 5.000 SMMLV (aproximadamente $720M COP en 2026) requieren obligatoriamente interventoría externa contratada de forma independiente. Para contratos menores, la entidad puede designar un supervisor interno, aunque muchas alcaldías prefieren contratar interventoría externa especializada para obras hidráulicas.' },
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
            de cobro y el cierre del contrato. Rogerio Bernal Ríos, Especialista UNAL (COPNIA 17202-313228),
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

      {/* ── INVERSIÓN REFERENCIAL ── */}
      <Section bg="#fff" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Inversión referencial</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 30px)', marginBottom: 8 }}>
            ¿Cuánto cuesta la interventoría de obras hidráulicas?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 20 }}>
            {[
              { cat: 'Revisión técnica / obra menor', precio: '$5M – $15M COP', detalle: 'Supervisión puntual, informes técnicos y actas de entrega. Ideal para contratos de hasta $200M COP.' },
              { cat: 'Acueducto / alcantarillado municipal', precio: '$15M – $50M COP', detalle: 'Supervisión permanente en campo, informes semanales, control de materiales y pruebas hidrostáticas.' },
              { cat: 'Contratos SGR (grandes obras)', precio: 'Desde $30M COP', detalle: 'Interventoría técnica, financiera y administrativa. Obligatoria para contratos > 5.000 SMMLV.' },
            ].map(r => (
              <div key={r.cat} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderTop: '3px solid #17A2B8', borderRadius: 4, padding: '18px 20px' }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 13, marginBottom: 10 }}>{r.cat}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 18, marginBottom: 8 }}>{r.precio}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{r.detalle}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, lineHeight: 1.6 }}>
            El costo de interventoría suele representar el 5–10% del valor del contrato de obra. <strong>BIC envía propuesta técnica y económica en menos de 24 horas sin costo.</strong>
          </p>
          <div style={{ marginTop: 20 }}><Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Solicitar cotización de interventoría</Btn></div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 30px)', marginBottom: 8 }}>
            Preguntas frecuentes sobre interventoría técnica
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQ_INT.map((faq: any, i: number) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 14, margin: '0 0 8px', lineHeight: 1.4 }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
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
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL, COPNIA 17202-313228). La interventoría que contratan las entidades más exigentes para garantizar conceptos técnicos inimpugnables.' },
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/cambios-normativos-ingenieria-hidraulica-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cambios Normativos en Ingeniería Hidráulica 2026</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/costos-obras-hidraulicas-colombia-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Costos de Obras Hidráulicas en Colombia 2026: APU y Tendencias</span>
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
            <a href="/servicios/acueducto-alcantarillado" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto y alcantarillado conforme RAS 2017 que supervisamos</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de sistemas de agua potable RAS 2017 — verificamos cumplimiento normativo</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Revisión técnica de modelaciones HEC-RAS 2D entregadas por contratistas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/sistemas-contra-incendio" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Revisión técnica de sistemas CI NSR-10 — verificación NFPA ante curadurías</span>
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
