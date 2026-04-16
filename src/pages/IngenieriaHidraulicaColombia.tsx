import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito consultoría en ingeniería hidráulica para un proyecto en Colombia')

const seoConfig = {
  title: 'Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Consultoría especializada en ingeniería hidráulica para proyectos en Colombia. Modelación HEC-RAS, diseño hidrosanitario, acueductos, riesgo hídrico. COPNIA 17202-313228. Atención nacional.',
  keywords: [
    'ingeniería hidráulica Colombia',
    'consultoría hidráulica Colombia',
    'consultor ingeniería hidráulica Colombia',
    'modelación HEC-RAS Colombia',
    'diseño hidrosanitario Colombia',
    'acueductos alcantarillados Colombia',
    'estudios riesgo hídrico Colombia',
    'gestión riesgo inundaciones Colombia',
    'ingeniero civil consultor Colombia',
    'firma consultora hidráulica Colombia',
    'BIC Bernal Ingeniería Consultores',
  ],
  canonical: 'https://ingenieriabernal.co/ingenieria-hidraulica-colombia',
}

const SERVICIOS = [
  {
    icon: '🖥️',
    titulo: 'Modelación Hidráulica HEC-RAS 1D/2D',
    desc: 'Determinación de manchas de inundación, perfiles de la superficie libre, caudales de diseño y análisis de medidas de mitigación para toda Colombia. Compatible con requisitos del Decreto 1807/2014, UNGRD, CAR y Curadurías Urbanas.',
  },
  {
    icon: '🌊',
    titulo: 'Estudios Hidrológicos — HEC-HMS',
    desc: 'Análisis de cuencas hidrográficas, curvas IDF, caudales máximos por período de retorno y tránsito de crecientes con HEC-HMS. Insumo obligatorio para modelos hidráulicos, diseño de obras de drenaje y formulación de proyectos del SGR.',
  },
  {
    icon: '🏗️',
    titulo: 'Diseño Hidrosanitario NSR-10',
    desc: 'Redes de agua fría, agua caliente, aguas residuales y aguas lluvias para edificaciones residenciales, comerciales e industriales. Memorias de cálculo, planos y especificaciones conforme a NSR-10 Título I, RAS 2017 y NTC 1500.',
  },
  {
    icon: '🔥',
    titulo: 'Sistemas Contra Incendios NSR-10',
    desc: 'Diseño de redes CI húmedas y secas, rociadores automáticos NFPA, hidrantes exteriores NTC 2301 y detección de humo para edificaciones de todo tipo. Memorias aceptadas por Bomberos en todo Colombia.',
  },
  {
    icon: '💧',
    titulo: 'Acueductos y Alcantarillados — RAS 2017',
    desc: 'Diseño de redes de distribución, colectores, plantas de tratamiento PTAP y PTAR para municipios, constructoras y ESP. Cumplimiento de la Resolución 0330/2017, Decreto 1575/2007 y CONPES 3918.',
  },
  {
    icon: '⚠️',
    titulo: 'Gestión del Riesgo Hídrico',
    desc: 'Planes municipales de gestión del riesgo (PMGR), mapas de amenaza por inundación y avenidas torrenciales, y conceptos de aptitud urbanística conforme al Decreto 1807/2014 y la Ley 1523/2012.',
  },
  {
    icon: '📋',
    titulo: 'Formulación Proyectos Regalías MGA-Web',
    desc: 'Estructuración y registro de proyectos de agua potable y saneamiento en MGA-Web del DNP para el Sistema General de Regalías (SGR). Estudios técnicos, presupuestos APU y documentación completa para OCAD.',
  },
  {
    icon: '🔍',
    titulo: 'Interventoría Técnica Hidráulica',
    desc: 'Supervisión técnica e interventoría de obras de acueducto, alcantarillado, drenaje urbano y estructuras hidráulicas para municipios, gobernaciones y entidades públicas en todo el territorio nacional.',
  },
]

const NORMATIVA = [
  { norma: 'Resolución 0330/2017', desc: 'RAS vigente — Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico' },
  { norma: 'Decreto 1807/2014', desc: 'Riesgo de inundación en instrumentos de ordenamiento territorial y licencias de urbanismo' },
  { norma: 'NSR-10 Títulos I, J, K', desc: 'Instalaciones hidráulicas, sanitarias y sistemas de protección contra incendios en edificaciones' },
  { norma: 'Ley 1523/2012', desc: 'Política nacional de gestión del riesgo de desastres y planes municipales PMGR' },
  { norma: 'NTC 1500 / 1669 / 2301', desc: 'Normas técnicas colombianas para fontanería, rociadores e hidrantes' },
  { norma: 'CONPES 3918 / Decreto 1575', desc: 'Calidad del agua potable — IRCA, SIVICAP y vigilancia sanitaria' },
]

const REGIONES = [
  { region: 'Eje Cafetero', ciudades: 'Manizales, Pereira, Armenia, Dosquebradas, Chinchiná' },
  { region: 'Bogotá y Cundinamarca', ciudades: 'Bogotá D.C., Mosquera, Facatativá, Chía, Zipaquirá' },
  { region: 'Medellín y Antioquia', ciudades: 'Medellín, Rionegro, Guarne, Envigado, Bello' },
  { region: 'Cali y Valle del Cauca', ciudades: 'Cali, Palmira, Cartago, Cerritos, Tuluá' },
  { region: 'Bucaramanga y Santander', ciudades: 'Bucaramanga, Floridablanca, Girón, Barrancabermeja' },
  { region: 'Barranquilla y Costa Caribe', ciudades: 'Barranquilla, Montería, Valledupar, Sincelejo' },
  { region: 'Boyacá y Llanos', ciudades: 'Tunja, Duitama, Sogamoso, Villavicencio, Yopal' },
  { region: 'Huila y Tolima', ciudades: 'Neiva, Ibagué, Pitalito, Honda, Mariquita' },
]

const FAQS = [
  {
    q: '¿BIC trabaja en proyectos fuera del Eje Cafetero?',
    a: 'Sí. BIC tiene proyectos verificables en Bogotá, Medellín, Cali, Puerto Boyacá, Ecuador y México. Para proyectos en otras ciudades, el equipo se desplaza o coordina el trabajo de campo con aliados locales. Los diseños, memorias de cálculo y modelos hidráulicos se elaboran en Manizales con entrega digital en todo Colombia.',
  },
  {
    q: '¿Cuánto tiempo toma una consultoría hidráulica?',
    a: 'Depende del alcance. Un estudio de amenaza por inundación para un plan parcial toma entre 3 y 6 semanas. Un diseño hidrosanitario completo para un edificio de 8 pisos toma entre 2 y 4 semanas. Una formulación MGA-Web para el SGR toma entre 4 y 8 semanas incluyendo estudios previos. El plazo exacto se define en la propuesta técnica.',
  },
  {
    q: '¿Qué credenciales tiene el equipo BIC?',
    a: 'El director técnico es Rogerio Bernal Ríos, Ingeniero Civil de la Universidad Nacional de Colombia con Especialización en Ingeniería Hidráulica y Ambiental (UNAL), matrícula profesional COPNIA 17202-313228 CLD vigente. Todos los informes están firmados por profesional legalmente habilitado para ejercer en Colombia.',
  },
  {
    q: '¿Qué software utiliza BIC para sus estudios?',
    a: 'Los proyectos hidráulicos se modelan con HEC-RAS 6.x (1D y 2D), HEC-HMS, EPANET, EPA-SWMM y cuando el proyecto lo requiere, IBER o TETIS. Los diseños se elaboran en AutoCAD Civil 3D. La cartografía se procesa en ArcGIS Pro y QGIS. Los presupuestos se estructuran con APU completas en Excel.',
  },
  {
    q: '¿Cuál es el costo de una consultoría hidráulica en Colombia?',
    a: 'El costo varía según el alcance y la complejidad. Un estudio de riesgo hídrico para un plan parcial oscila entre $15 y $40 millones COP. Un diseño hidrosanitario y CI para un edificio comercial entre $8 y $25 millones. La formulación MGA-Web de un proyecto de acueducto entre $10 y $20 millones. La primera consulta es sin costo.',
  },
]

export default function IngenieriaHidraulicaColombia() {
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
          <SectionLabel light>Consultoría Nacional</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Colombia<br />
            <span style={{ color: '#17A2B8' }}>Expertos con Presencia Nacional</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores presta servicios de consultoría en ingeniería hidráulica
            en todo el territorio colombiano. Modelación HEC-RAS 2D, diseño hidrosanitario NSR-10,
            acueductos conforme al RAS 2017, gestión del riesgo hídrico y formulación de proyectos
            del SGR para municipios, constructoras y entidades públicas. Director técnico con matrícula
            COPNIA 17202-313228 CLD vigente y más de 10 años de experiencia en Colombia, Ecuador y México.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Alcance:</span>
          {['Cobertura Nacional', 'COPNIA Vigente', 'HEC-RAS 2D', 'NSR-10', 'RAS 2017', 'Decreto 1807/2014'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionLabel>Nuestros servicios</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Servicios de Ingeniería Hidráulica en Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map((s) => (
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

      {/* ── NORMATIVA ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Normativa que Aplica en Colombia</h2>
          <ThinLine mb={16} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 720 }}>
            La ingeniería hidráulica en Colombia se rige por un cuerpo normativo riguroso que exige
            profesionales certificados y estudios técnicos documentados. BIC conoce y aplica en cada
            proyecto la normativa vigente, lo que garantiza que los entregables sean aceptados por
            Curadurías, CAR, entidades financiadoras y el Cuerpo de Bomberos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {NORMATIVA.map((n) => (
              <div key={n.norma} style={{
                padding: 20, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 13, marginBottom: 6,
                }}>{n.norma}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.55, margin: 0,
                }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── COBERTURA ── */}
      <Section bg="#F0F7FA" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Cobertura geográfica</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Regiones con Presencia Activa</h2>
          <ThinLine mb={16} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 720 }}>
            BIC tiene su sede en Manizales, Caldas, pero atiende proyectos en todo Colombia.
            El trabajo de campo y las visitas técnicas se coordinan directamente con el cliente.
            Los diseños, memorias de cálculo y modelos hidráulicos se elaboran en Manizales y se
            entregan digitalmente con todos los soportes técnicos requeridos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {REGIONES.map((r) => (
              <div key={r.region} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: 20,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F',
                  fontSize: 13, marginBottom: 6,
                }}>{r.region}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, lineHeight: 1.55, margin: 0,
                }}>{r.ciudades}</p>
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
          }}>¿Por qué Contratar BIC para su Proyecto Hidráulico?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🎓',
                titulo: 'Especialización Universitaria en Hidráulica',
                desc: 'Rogerio Bernal Ríos es Ingeniero Civil y Especialista en Ingeniería Hidráulica y Ambiental de la Universidad Nacional de Colombia — la máxima institución de educación superior del país. El nivel académico se refleja en la rigurosidad técnica de cada entregable.',
              },
              {
                icon: '📜',
                titulo: 'Matrícula COPNIA Vigente',
                desc: 'Tarjeta profesional COPNIA 17202-313228 CLD activa. Todos los informes técnicos, memorias de cálculo y planos están firmados por profesional habilitado legalmente para ejercer en Colombia. Requisito obligatorio para licencias, contratos públicos y proyectos del SGR.',
              },
              {
                icon: '🏗️',
                titulo: 'Proyectos Verificables en Colombia y el Exterior',
                desc: 'Palacio de Justicia La Dorada (Rama Judicial), Makarí Mall Dosquebradas, proyectos EPANET en Manizales, análisis de torrencialidad en 8 municipios del Eje Cafetero, proyectos en Ecuador (Guayaquil) y México. Portafolio verificable en SECOP y con clientes activos.',
              },
              {
                icon: '⚡',
                titulo: 'Propuesta y Comunicación Directa en 24 Horas',
                desc: 'Sin intermediarios ni cadenas de aprobación. El director técnico atiende directamente cada consulta, elabora la propuesta técnica y económica, y hace seguimiento personalizado hasta la aprobación del informe por la entidad competente.',
              },
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

      {/* ── FAQs ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Preguntas Frecuentes — Ingeniería Hidráulica Colombia</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 15, marginBottom: 10,
                }}>{faq.q}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.7, margin: 0,
                }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#fff" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/hec-ras-2d-modelacion-hidraulica-colombia" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Contratar modelación HEC-RAS 2D: qué debe exigirle a su consultor</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación proyectos agua potable con regalías y MGA Web</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
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
            ¿Tiene un proyecto hidráulico en Colombia?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el alcance de su proyecto — municipio, tipo de servicio requerido y entidad
            a la que debe entregar el informe. Le respondemos con propuesta técnica y presupuesto
            en menos de 24 horas. Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
            >
              📱 Chatear por WhatsApp
            </Btn>
            <Btn variant="outline" href="/contacto" style={{ borderColor: '#fff', color: '#fff' }}>
              Ver formulario de contacto
            </Btn>
          </div>
        </div>
      </Section>
    </>
  )
}
