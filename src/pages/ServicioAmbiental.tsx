import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Ambientales e IRCA')

const seoConfig = {
  title: 'Estudios Ambientales e IRCA Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Estudios ambientales, cálculo IRCA, permisos de vertimientos, concesiones de agua y trámites ante CAR para proyectos hídricos en Colombia. Director PhD. +30 años. Eje Cafetero.',
  keywords: [
    'estudios ambientales Colombia',
    'IRCA Colombia agua potable',
    'cálculo IRCA acueducto',
    'permisos vertimientos CAR Colombia',
    'concesión de aguas Colombia',
    'trámites ambientales hídricos',
    'estudio de impacto ambiental agua',
    'ingeniería ambiental Colombia',
    'plan de manejo ambiental',
    'permisos ambientales constructoras',
    'CORPOCALDAS permisos agua',
    'Decreto 2811 Código recursos naturales',
  ],
  canonical: 'https://www.ingenieriabernal.co/servicios/ambiental',
}

const INCLUYE = [
  { icon: '💧', titulo: 'Cálculo y análisis del IRCA', desc: 'Determinación del Índice de Riesgo de Calidad del Agua (IRCA) para sistemas de acueducto municipal conforme a la Resolución 2115/2007 del Ministerio de la Protección Social. Análisis fisicoquímico y microbiológico, clasificación del nivel de riesgo y formulación de medidas correctivas.' },
  { icon: '🏭', titulo: 'Permisos de vertimientos', desc: 'Elaboración del expediente para permiso de vertimientos ante la Corporación Autónoma Regional (CAR) competente: caracterización del efluente, modelación de la capacidad de dilución del cuerpo receptor, plan de manejo de vertimientos y protocolo de monitoreo conforme al Decreto 1076/2015.' },
  { icon: '🌊', titulo: 'Concesión de aguas superficiales y subterráneas', desc: 'Tramitación de la concesión de agua ante la CAR para captación de ríos, quebradas, embalses y acuíferos. Elaboración del estudio de disponibilidad hídrica, balance oferta-demanda y documentación técnica exigida por el MADS y las CAR.' },
  { icon: '🌿', titulo: 'Plan de Manejo Ambiental (PMA)', desc: 'Diseño del PMA para obras de infraestructura hídrica: medidas de manejo de residuos, control de sedimentos, revegetalización de taludes, protección de márgenes hídricas y monitoreo ambiental durante la construcción y operación.' },
  { icon: '📋', titulo: 'Diagnóstico ambiental de alternativas (DAA)', desc: 'Evaluación ambiental preliminar de alternativas de localización de obras hidráulicas, PTAP, PTAR y sistemas de captación. Soporte técnico ambiental para obtener la definición de estudios ante la Autoridad Nacional de Licencias Ambientales (ANLA).' },
  { icon: '🔍', titulo: 'Trámites ante CAR y ANLA', desc: 'Representación técnica ante CORPOCALDAS, CARDER, CVC, CAR Cundinamarca, CDMB, CAS, Corporinoquia y demás CAR. Atención de requerimientos, visitas técnicas, subsanación de documentos y seguimiento hasta la obtención del permiso.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y empresas de servicios públicos', desc: 'Cálculo del IRCA, gestión de permisos de captación y vertimientos para sistemas de acueducto y alcantarillado municipal. Cumplimiento de obligaciones ante la Superintendencia de Servicios Públicos (SSPD).' },
  { tipo: 'Constructoras y promotores de proyectos', desc: 'Permisos ambientales para obras lineales, plantas industriales, proyectos de vivienda con afectación de cauces y cualquier intervención que requiera manejo de agua o vertimientos.' },
  { tipo: 'Entidades públicas con proyectos de infraestructura', desc: 'PMA y trámites ambientales para obras de INVÍAS, gobernaciones, municipios y entidades del orden nacional que ejecutan proyectos hídricos o de infraestructura con componente ambiental.' },
  { tipo: 'Operadores de sistemas de agua y saneamiento', desc: 'Monitoreo de calidad del agua, elaboración de informes de calidad para la Secretaría de Salud, gestión del IRCA y formulación de planes de mejoramiento de la prestación del servicio.' },
]

export default function ServicioAmbiental() {
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
            Estudios Ambientales e IRCA<br />
            <span style={{ color: '#17A2B8' }}>para Proyectos Hídricos en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios ambientales especializados para
            proyectos del sector agua potable y saneamiento básico en Colombia: cálculo y análisis
            del IRCA conforme a la Resolución 2115/2007, trámite de permisos de vertimientos y
            concesiones de agua ante las CAR, elaboración de Planes de Manejo Ambiental y soporte
            técnico en procesos ante la ANLA. Combinamos el conocimiento hidráulico con el ambiental
            para entregar expedientes técnicos sólidos que superan la revisión de CORPOCALDAS,
            CARDER, CVC y cualquier otra autoridad ambiental regional. Nuestro director PhD con más
            de 30 años de experiencia conoce en profundidad los criterios técnicos de cada CAR
            del Eje Cafetero y otras regiones donde BIC tiene proyectos activos.
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
          {['Res. 2115/2007', 'Decreto 1076/2015', 'CAR / ANLA', 'Ley 99/1993', 'MADS'].map(t => (
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
          }}>¿Qué incluye el servicio ambiental?</h2>
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
              { icon: '🌿', titulo: 'Ambiental + hidráulico integrados', desc: 'BIC combina el conocimiento ambiental con la ingeniería hidráulica: los expedientes de vertimientos y concesiones de agua son más sólidos cuando el consultor entiende el comportamiento hídrico del cauce receptor.' },
              { icon: '🎓', titulo: 'Director PhD — relación con las CAR', desc: '+30 años de proyectos con CORPOCALDAS, CARDER, CVC, CAR Cundinamarca y otras corporaciones. Conocimiento de los criterios técnicos internos que hacen que un expediente sea aprobado o devuelto.' },
              { icon: '⚡', titulo: 'Agilidad en trámites ambientales', desc: 'Expedientes bien sustentados técnicamente reducen el número de requerimientos y aceleran los tiempos de respuesta de las CAR. Menos viajes, menos reprocesos, más velocidad.' },
              { icon: '📜', titulo: 'Responsabilidad profesional plena', desc: 'Informes firmados por profesional con COPNIA vigente y registro ante la entidad ambiental competente. Respaldo legal y técnico ante cualquier requerimiento posterior.' },
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
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo bajar el IRCA de un municipio en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación de proyectos de agua potable con regalías y MGA Web</span>
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
            ¿Necesita permisos ambientales o cálculo del IRCA?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el tipo de trámite (vertimientos, concesión, IRCA, PMA),
            la CAR competente y el municipio del proyecto.
            Le respondemos con propuesta y tiempos estimados en 24 horas.
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
