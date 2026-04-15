import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero asesoría técnica para mi licencia de construcción en Manizales')

const seoConfig = {
  title: 'Licencia de Construcción Manizales: Documentos Técnicos | BIC',
  description: 'BIC prepara todos los estudios técnicos para su licencia de construcción en Manizales: suelos, estructural y planos. +57 302 477 8910',
  keywords: [
    'licencia de construcción Manizales',
    'documentos técnicos licencia construcción',
    'curaduría Manizales',
    'Curaduría 1 Manizales',
    'Curaduría 2 Manizales',
    'estudio de suelos licencia Manizales',
    'diseño estructural NSR-10 Manizales',
    'planos arquitectónicos licencia',
    'consultor licencia construcción Manizales',
    'trámite licencia urbanismo Caldas',
    'memoria de cálculo estructural',
    'revisor técnico independiente NSR-10',
  ],
  canonical: 'https://ingenieriabernal.co/licencia-de-construccion-manizales/',
}

const DOCUMENTOS_CURIA = [
  {
    grupo: 'Documentos prediales y legales',
    items: [
      'Certificado de libertad y tradición vigente (no mayor a 30 días)',
      'Fotocopia del documento de identidad del solicitante o representante legal',
      'Poder notarial o autorización (si aplica)',
      'Certificado catastral del predio',
    ],
  },
  {
    grupo: 'Documentos urbanísticos',
    items: [
      'Consulta de norma urbanística del predio (uso del suelo, índices, aislamientos)',
      'Plano de loteo o urbanismo aprobado (si el predio hace parte de una urbanización)',
      'Certificado de afectaciones (vías, redes, rondas hídricas)',
      'Estudio de amenaza y riesgo (Decreto 1807/2014) si el predio está en zona de amenaza media o alta',
    ],
  },
  {
    grupo: 'Documentos técnicos — ingeniería y arquitectura',
    items: [
      'Planos arquitectónicos firmados por arquitecto matriculado (plantas, fachadas, cortes)',
      'Estudio de suelos o informe geotécnico firmado por especialista COPNIA',
      'Diseño estructural con memoria de cálculo según NSR-10 (sismorresistencia)',
      'Diseño hidrosanitario (red de agua potable, aguas residuales y aguas lluvias)',
      'Diseño de sistemas contra incendio (para edificaciones que lo requieran por NSR-10 Títulos I y J)',
      'Presupuesto de obra o cuantía estimada',
    ],
  },
]

const QUE_HACE_BIC = [
  {
    icon: '🔩',
    titulo: 'Estudio de suelos (informe geotécnico)',
    desc: 'Perforaciones SPT, ensayos de laboratorio y análisis de capacidad portante según NSR-10 Título H. Firmado por especialista. Compatible con los requisitos de las Curadurías 1 y 2 de Manizales. Integración con microzonificación sísmica de Manizales.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño estructural y memoria de cálculo',
    desc: 'Diseño del sistema estructural del edificio (pórticos, muros de carga, cimentaciones) bajo NSR-10. Memoria de cálculo completa con análisis de cargas, análisis sísmico, dimensionamiento de elementos y planos estructurales. El diseño integra los parámetros sísmicos del espectro de Manizales.',
  },
  {
    icon: '💧',
    titulo: 'Diseño hidrosanitario (redes internas)',
    desc: 'Diseño de redes de agua fría, agua caliente, aguas residuales y aguas lluvias para la edificación según NSR-10 Título I y RAS 2017. Cálculo de caudales, diámetros de tuberías, presiones y puntos de conexión a la red pública. Planos de instalaciones en planta y esquema isométrico.',
  },
  {
    icon: '🔥',
    titulo: 'Sistema contra incendio (cuando aplica)',
    desc: 'Para edificaciones comerciales, industriales o residenciales de altura que lo requieren por NSR-10 Títulos J y K: diseño del sistema de detección, extinción y evacuación. Red húmeda, rociadores, extintores y señalización según NFPA. Planos y memorias de cálculo.',
  },
  {
    icon: '🗺️',
    titulo: 'Estudio de inundabilidad (si el predio lo requiere)',
    desc: 'Para predios en zona de amenaza hídrica media o alta según el POT de Manizales, BIC realiza el estudio de inundabilidad con modelación HEC-RAS 2D requerido por el Decreto 1807/2014 antes de tramitar la licencia de construcción ante la curaduría.',
  },
  {
    icon: '📋',
    titulo: 'Acompañamiento en el trámite',
    desc: 'BIC asesora al propietario o constructor en la revisión de los documentos antes de la radicación ante la curaduría, resuelve las observaciones técnicas que la curaduría pueda formular y coordina ajustes a planos o estudios cuando sea necesario hasta la aprobación de la licencia.',
  },
]

const TIEMPOS = [
  { etapa: 'Estudio de suelos', duracion: '2–4 semanas', nota: 'Desde campo hasta informe final. Depende del número de sondeos y disponibilidad del laboratorio.' },
  { etapa: 'Diseño estructural + memoria', duracion: '3–6 semanas', nota: 'Varía según la complejidad del proyecto: vivienda unifamiliar vs. edificio multifamiliar.' },
  { etapa: 'Diseño hidrosanitario', duracion: '1–3 semanas', nota: 'Para edificaciones residenciales estándar. Proyectos industriales o comerciales pueden requerir más tiempo.' },
  { etapa: 'Revisión y ajustes curaduría', duracion: '2–8 semanas', nota: 'Una vez radicado, la curaduría tiene plazos legales para revisar y expedir o negar la licencia.' },
  { etapa: 'Plazo total estimado', duracion: '8–20 semanas', nota: 'Desde el encargo a BIC hasta la licencia en mano. Depende del tipo de proyecto y la carga de la curaduría.' },
]

const TIPOS_PROYECTOS = [
  { tipo: 'Vivienda unifamiliar', desc: 'Casa de 1 a 3 pisos en lote individual. Requiere estudio de suelos, diseño estructural y diseño hidrosanitario. Trámite ante Curaduría 1 o 2 según la localización del predio en Manizales.' },
  { tipo: 'Edificio multifamiliar', desc: 'Apartamentos en edificio de 4 a 15+ pisos. Requiere estudio de suelos profundo, diseño estructural con análisis sísmico completo, hidrosanitario y sistema CI si aplica. BIC gestiona todos los estudios.' },
  { tipo: 'Comercio y oficinas', desc: 'Locales comerciales, centros de servicios y edificios de oficinas. Requieren sistemas contra incendio cuando superan cierta área y altura según NSR-10 Título J. BIC integra todos los diseños.' },
  { tipo: 'Bodegas e industria', desc: 'Naves industriales y bodegas logísticas en zonas industriales de Manizales (La Enea, Maltería, Uribe). Requieren diseño hidrosanitario industrial y sistemas CI para el riesgo de incendio según NFPA.' },
  { tipo: 'Institucional (colegios, clínicas)', desc: 'Edificaciones de uso público con exigencias especiales de la NSR-10 (grupo de uso IV — esenciales). Diseño estructural con mayor ductilidad, sistemas CI y planos de evacuación.' },
  { tipo: 'Ampliaciones y reformas', desc: 'Modificación de edificaciones existentes que requieren licencia de modificación. BIC revisa la estructura existente, complementa los estudios faltantes y prepara la documentación para la curaduría.' },
]

const FAQ = [
  {
    q: '¿Qué es la licencia de construcción y quién la expide en Manizales?',
    a: 'La licencia de construcción es el acto administrativo que autoriza la realización de obras de edificación en un predio. En Manizales la expiden las Curadurías Urbanas: la Curaduría 1 y la Curaduría 2, con jurisdicción dividida por sectores del municipio. Sin licencia aprobada no se puede construir legalmente. La licencia requiere la presentación de planos arquitectónicos y todos los estudios técnicos de ingeniería.',
  },
  {
    q: '¿Cuál es la diferencia entre la Curaduría 1 y la Curaduría 2 de Manizales?',
    a: 'Ambas curadurías tienen la misma competencia para expedir licencias de construcción en Manizales, pero atienden distintos sectores del municipio. La asignación depende de la dirección del predio. BIC conoce los requisitos técnicos específicos y los formatos exigidos por cada curaduría para garantizar que los estudios entregados cumplan con lo solicitado en cada despacho.',
  },
  {
    q: '¿Puede BIC encargarse de todos los documentos técnicos que exige la curaduría?',
    a: 'Sí. BIC ofrece el servicio integral de preparación de documentos técnicos para licencia de construcción en Manizales: estudio de suelos, diseño estructural con memoria de cálculo NSR-10, diseño hidrosanitario, diseño de sistemas contra incendio (si aplica) y estudio de inundabilidad (si el predio está en zona de amenaza). El propietario o constructor solo coordina con un consultor en lugar de contratar múltiples firmas.',
  },
  {
    q: '¿Es necesario contratar un revisor técnico independiente?',
    a: 'Para proyectos de cierta magnitud (generalmente edificios de más de 3 pisos o con un área construida superior a los umbrales de la NSR-10), la norma exige la intervención de un revisor técnico independiente que valide el diseño estructural. BIC puede coordinar este requisito con profesionales aliados que ejercen como revisores en Manizales, o preparar los documentos para ser revisados por el revisor que designe el propietario.',
  },
  {
    q: '¿Cuánto cuesta preparar los documentos técnicos para la licencia?',
    a: 'El costo total depende del tipo de proyecto, número de pisos, área construida y los estudios específicos requeridos. Para una vivienda unifamiliar de 2 pisos, el conjunto de estudios técnicos (suelos, estructural e hidrosanitario) puede oscilar entre $8.000.000 y $18.000.000 COP. Para un edificio multifamiliar de 8 pisos el costo es significativamente mayor. BIC envía cotización detallada por estudio dentro de las 24 horas.',
  },
  {
    q: '¿BIC firma los planos y estudios o solo hace la consultoría?',
    a: 'BIC elabora y firma los estudios técnicos de ingeniería (suelos, estructural, hidrosanitario) con matrícula COPNIA vigente. Para los planos arquitectónicos, BIC trabaja en coordinación con el arquitecto del propietario o puede recomendar arquitectos aliados en Manizales que completan el conjunto documental para la curaduría.',
  },
]

export default function LicenciaConstruccionManizales() {
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
          <SectionLabel light>Servicio especializado · Manizales</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Licencia de Construcción en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Asesoría Técnica y Documentación</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores prepara todos los estudios técnicos de ingeniería
            que exigen las Curadurías 1 y 2 de Manizales para el trámite de licencia de
            construcción: estudio de suelos NSR-10, diseño estructural con memoria de cálculo,
            diseño hidrosanitario y — cuando el predio lo requiere — estudio de inundabilidad
            según el Decreto 1807/2014. Un solo consultor, todos los documentos.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar asesoría
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
          {['NSR-10', 'Curaduría Manizales', 'Decreto 1807/2014', 'RAS 2017', 'NFPA'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ DOCUMENTOS EXIGE LA CURADURÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Requisitos del trámite</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué documentos exige la curaduría para la licencia de construcción?</h2>
          <ThinLine mb={32} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Para obtener la licencia de construcción en Manizales se deben radicar ante la
            Curaduría Urbana correspondiente los documentos legales, urbanísticos y técnicos
            que establece la Ley 400/1997, el Decreto 1203/2017 y el POT de Manizales.
            Los documentos técnicos de ingeniería son los que con mayor frecuencia generan
            observaciones y demoras en el trámite, por lo que es fundamental prepararlos
            correctamente desde el inicio.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {DOCUMENTOS_CURIA.map((grupo) => (
              <div key={grupo.grupo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderLeft: '4px solid #17A2B8',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 16,
                }}>{grupo.grupo}</h3>
                <ul style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.9, paddingLeft: 20, margin: 0 }}>
                  {grupo.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CURADURÍA 1 vs 2 ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Curadurías de Manizales</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Curaduría 1 vs Curaduría 2 de Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div style={{
              background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
              padding: 28, borderTop: '3px solid #17A2B8',
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                fontSize: 15, marginBottom: 12,
              }}>Curaduría Urbana N.° 1 de Manizales</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7 }}>
                Atiende solicitudes de licencias urbanísticas y de construcción en sectores
                específicos del municipio de Manizales asignados por el sistema de distribución
                de cargas de trabajo entre curadurías. Para conocer qué curaduría corresponde a
                un predio específico, se consulta la dirección en el sistema de las curadurías
                o directamente en la Secretaría de Planeación del municipio. BIC conoce los
                formatos y exigencias técnicas particulares de este despacho.
              </p>
            </div>
            <div style={{
              background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
              padding: 28, borderTop: '3px solid #17A2B8',
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                fontSize: 15, marginBottom: 12,
              }}>Curaduría Urbana N.° 2 de Manizales</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7 }}>
                Segunda curaduría del municipio con igual competencia para expedir licencias
                de construcción, urbanismo, subdivisión y parcelación. Los estudios técnicos
                exigidos son los mismos en ambas curadurías. La diferencia está en el sector
                del municipio que atiende cada despacho. BIC prepara los documentos técnicos
                cumpliendo los requisitos de ambas curadurías de Manizales.
              </p>
            </div>
            <div style={{
              background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4,
              padding: 28, borderTop: '3px solid #17A2B8',
            }}>
              <h3 style={{
                fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                fontSize: 15, marginBottom: 12,
              }}>Proyectos en Villamaría (municipio contiguo)</h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7 }}>
                Villamaría, municipio contiguo a Manizales con alta actividad constructiva,
                tiene su propia curaduría o despacho de planeación que expide las licencias.
                BIC atiende proyectos en Villamaría con el mismo estándar técnico que en
                Manizales, incluyendo el uso de la microzonificación sísmica correspondiente.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── QUÉ HACE BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Servicios BIC</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué hace BIC para su licencia de construcción?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {QUE_HACE_BIC.map(d => (
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

      {/* ── TIEMPOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Plazos del proceso</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Cuánto tarda el trámite de licencia en Manizales?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TIEMPOS.map((t) => (
              <div key={t.etapa} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: '20px 24px', display: 'grid',
                gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center',
              }}>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 14, margin: '0 0 4px' }}>{t.etapa}</p>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, lineHeight: 1.5, margin: 0 }}>{t.nota}</p>
                </div>
                <div style={{
                  background: '#17A2B8', color: '#fff', padding: '6px 14px',
                  borderRadius: 4, fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap',
                }}>{t.duracion}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, lineHeight: 1.6, marginTop: 20 }}>
            * Los plazos de la curaduría están regulados por ley. BIC no puede garantizar el plazo
            de resolución de la curaduría, pero sí puede garantizar que los documentos técnicos
            presentados minimicen las observaciones y re-radicaciones.
          </p>
        </div>
      </Section>

      {/* ── TIPOS DE PROYECTOS ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Tipos de proyecto</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos que BIC atiende en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {TIPOS_PROYECTOS.map((p) => (
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

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>FAQ — Licencia de construcción en Manizales</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map((item) => (
              <div key={item.q} style={{
                background: '#fff', border: '1px solid #E2E8F0',
                borderRadius: 4, padding: '24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 10,
                }}>{item.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7,
                  margin: 0,
                }}>{item.a}</p>
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
            ¿Necesita los documentos técnicos para su licencia en Manizales?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el tipo de proyecto, el número de pisos y la dirección del predio.
            BIC le indica qué estudios necesita y le envía una cotización completa
            en menos de 24 horas.
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
