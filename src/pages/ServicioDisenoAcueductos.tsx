import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Acueducto — sistema de agua potable')

const seoConfig = {
  title: 'Diseño de Acueductos Rurales y Veredales · BIC Colombia',
  description: 'Diseño de sistemas de acueducto rural según RAS 2017. Ing. Bernal — Manizales, Caldas. Proyectos en Eje Cafetero y SGR. ¡Cotice hoy!',
  keywords: [
    'diseño acueducto Colombia',
    'diseño sistema acueducto municipal',
    'diseño acueducto rural Colombia',
    'RAS 2017 diseño acueducto',
    'Resolución 0330 2017 acueducto',
    'diseño red distribución agua potable',
    'diseño PTAP Colombia',
    'captación bocatoma diseño',
    'diseño acueducto Eje Cafetero',
    'sistema agua potable municipal Colombia',
    'consultoría acueducto municipal',
    'ingeniero acueducto Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/diseno-acueductos',
}

const ETAPAS = [
  {
    num: '01',
    titulo: 'Diagnóstico de la fuente y demanda',
    desc: 'Caracterización de la fuente de abastecimiento (superficial o subterránea), aforo de caudales, análisis de calidad del agua (físico-química y bacteriológica) y proyección de demanda poblacional a 25 años conforme al RAS 2017 Capítulo B.3.',
  },
  {
    num: '02',
    titulo: 'Diseño de obras de captación',
    desc: 'Dimensionamiento de bocatoma lateral, de fondo o captación de manantial según el tipo de fuente. Cálculo de caudal de diseño con periodo de retorno apropiado, diseño hidráulico de estructuras y obras de control de sedimentos.',
  },
  {
    num: '03',
    titulo: 'Línea de aducción y conducción',
    desc: 'Diseño de la tubería que conduce el agua desde la captación hasta el sistema de tratamiento. Cálculo de diámetros, presiones, pérdidas de carga, selección de material (acero, ductil, HDPE) y estructuras especiales (cámaras rompe-presión, ventosas, purgas).',
  },
  {
    num: '04',
    titulo: 'Diseño de planta de tratamiento PTAP',
    desc: 'Selección del tren de tratamiento según la calidad de la fuente: coagulación-floculación, sedimentación, filtración lenta o rápida, desinfección. Dimensionamiento de unidades, cálculo estructural básico y especificaciones de equipos conforme al RAS 2017 Título E.',
  },
  {
    num: '05',
    titulo: 'Tanque de almacenamiento',
    desc: 'Cálculo del volumen de regulación (variación horaria de consumo), volumen de reserva (incendio y emergencias) y diseño geométrico del tanque elevado o semienterrado. Verificación de presiones mínimas y máximas en la red conforme a la Resolución 0330/2017.',
  },
  {
    num: '06',
    titulo: 'Red de distribución de agua potable',
    desc: 'Diseño en malla cerrada o ramificada con modelación EPANET. Selección de diámetros garantizando presión mínima de 15 m.c.a. y máxima de 60 m.c.a. en todos los nodos de consumo. Localización de válvulas de seccionamiento, hidrantes y medidores sectoriales.',
  },
]

const NORMATIVA = [
  { norma: 'RAS 2017 Título B', desc: 'Sistemas de acueducto — captación, conducción, distribución' },
  { norma: 'RAS 2017 Título E', desc: 'Plantas de tratamiento de agua potable (PTAP)' },
  { norma: 'Resolución 0330/2017', desc: 'Reglamento técnico para el sector APS — MVCT' },
  { norma: 'Resolución 2115/2007', desc: 'Calidad del agua para consumo humano' },
  { norma: 'Decreto 1575/2007', desc: 'Sistema para la protección y control de calidad del agua' },
  { norma: 'Resolución 844/2018', desc: 'Sistemas de agua potable rurales — MVCT' },
]

const FAQ_ACUEDUCTOS = [
  {
    q: '¿Cuánto cuesta el diseño de un acueducto rural en Colombia?',
    a: 'El costo de un diseño de acueducto rural varía entre $15 millones y $45 millones COP según el número de usuarios, la longitud de la red y la complejidad de la fuente. BIC entrega presupuesto personalizado sin costo en 24 horas.',
  },
  {
    q: '¿Qué norma rige el diseño de acueductos en Colombia?',
    a: 'El Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico — RAS 2017 (Resolución 0330 de 2017) es la norma vigente para el diseño de acueductos en Colombia.',
  },
  {
    q: '¿Cuánto tiempo demora el diseño de un acueducto veredal?',
    a: 'BIC entrega diseños de acueductos veredales en 3 a 4 semanas una vez firmado el contrato y recibidos los datos de campo (topografía y análisis de agua).',
  },
]

export default function ServicioDisenoAcueductos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Acueductos Rurales y Veredales"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/diseno-acueductos"
        faqItems={FAQ_ACUEDUCTOS}
      />

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
            Diseño de Sistemas de Acueducto<br />
            <span style={{ color: '#17A2B8' }}>para Municipios, ESP y Constructoras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores diseña sistemas completos de agua potable conforme al
            RAS 2017 y la Resolución 0330/2017: desde la captación y la línea de conducción hasta la
            planta de tratamiento (PTAP), el tanque de almacenamiento y la red de distribución en
            malla. Entregamos memorias de cálculo, modelos EPANET, planos constructivos DWG y
            presupuestos APU listos para licitación, interventoría y aprobación ante el Ministerio
            de Vivienda. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental
            (UNAL), COPNIA 17202-313228, ha diseñado sistemas de agua en más de 20 municipios
            del Eje Cafetero, Boyacá y los Llanos.
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
          {['RAS 2017', 'Resolución 0330/2017', 'EPANET', 'Resolución 2115/2007', 'PTAP'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── METODOLOGÍA ── */}
      <Section bg="#F8FAFC" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Etapas del diseño de acueducto</h2>
          <ThinLine mb={48} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {ETAPAS.map((e) => (
              <div key={e.num} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: 52, height: 52, borderRadius: '50%',
                  background: '#003B6F', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8', fontSize: 15,
                  flexShrink: 0,
                }}>
                  {e.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                    fontSize: 15, marginBottom: 8,
                  }}>{e.titulo}</h3>
                  <p style={{
                    fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 15, lineHeight: 1.75,
                  }}>{e.desc}</p>
                </div>
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
          }}>Normativa aplicable al diseño de acueductos</h2>
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
                {NORMATIVA.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#17A2B8', fontSize: 14, whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '12px 16px', color: '#475569', fontSize: 14 }}>{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          }}>¿Por qué BIC para el diseño de su acueducto?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL). Diseños firmados con matrícula COPNIA 17202-313228 CLD activa, válidos ante cualquier entidad territorial o financiadora.' },
              { icon: '🔬', titulo: 'Modelación EPANET en red de distribución', desc: 'Cada diseño de red de distribución se calibra con EPANET, verificando presiones mínimas (15 m.c.a.) y máximas (60 m.c.a.) en condiciones de máximo consumo diario y horario.' },
              { icon: '📜', titulo: 'Cero observaciones ante el MVCT', desc: 'Diseños estructurados para superar la revisión técnica del Ministerio de Vivienda sin reprocesos. Experiencia en proyectos financiados con regalías SGR y FINDETER.' },
              { icon: '🗺️', titulo: 'Cobertura nacional desde el Eje Cafetero', desc: 'Base en Manizales. Proyectos ejecutados en Caldas, Risaralda, Quindío, Boyacá, Santander y Llanos. Desplazamientos a todo el país según el alcance del proyecto.' },
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
          }}>Preguntas sobre diseño de acueductos</h2>
          <ThinLine mb={40} />
          {[
            {
              q: '¿Qué diferencia hay entre RAS 2017 y Resolución 0330/2017?',
              a: 'La Resolución 0330 de 2017 del Ministerio de Vivienda, Ciudad y Territorio es el reglamento que adopta el RAS 2017 como norma técnica obligatoria para el sector de agua potable y saneamiento básico en Colombia. El RAS 2017 es el documento técnico con los criterios de diseño (caudales, presiones, materiales), mientras que la Resolución 0330 es el instrumento jurídico que le da fuerza legal. Ambos deben citarse en las memorias de diseño de acueducto.',
            },
            {
              q: '¿Cuándo es obligatorio diseñar una PTAP?',
              a: 'El diseño de una Planta de Tratamiento de Agua Potable (PTAP) es obligatorio cuando la calidad del agua de la fuente de captación no cumple los valores máximos aceptables del Decreto 1575/2007 y la Resolución 2115/2007 sin tratamiento. Todo proyecto de acueducto que capte agua superficial requiere tratamiento. Los acueductos que capten agua subterránea (pozos) pueden requerir solo desinfección si el agua cumple los parámetros físico-químicos requeridos, previa verificación con la autoridad ambiental.',
            },
            {
              q: '¿Qué es la dotación neta y cómo se calcula?',
              a: 'La dotación neta es el volumen de agua consumido por habitante por día, expresada en litros/habitante/día (L/hab/día). La Resolución 0330/2017 establece valores según el nivel de complejidad del sistema (bajo, medio, medio alto, alto) y la zona climática. Para sistemas de nivel de complejidad alto en clima cálido, la dotación neta máxima es 140 L/hab/día. A esta se le aplica el Índice de Agua No Contabilizada (IANC) para obtener la dotación bruta, que es el caudal de diseño del sistema.',
            },
            {
              q: '¿Cuál es el periodo de diseño recomendado para un acueducto?',
              a: 'La Resolución 0330/2017 establece periodos de diseño según el nivel de complejidad y el componente del sistema: para redes de distribución el periodo mínimo es 20 años; para estructuras de captación, conducción y plantas de tratamiento, el periodo es de 25 años. Esto significa que el sistema debe ser capaz de abastecer la demanda proyectada con esos horizontes de tiempo. La proyección de población se realiza según los métodos definidos en el RAS 2017.',
            },
            {
              q: '¿Qué es el modelo EPANET y por qué se usa en diseño de acueductos?',
              a: 'EPANET es un software de dominio público desarrollado por la EPA de los Estados Unidos para modelar el comportamiento hidráulico y la calidad del agua en redes de distribución a presión. Permite simular los caudales en tuberías, presiones en nodos y la variación de calidad del agua en todo el sistema bajo diferentes condiciones de demanda. El RAS 2017 recomienda su uso para el análisis y diseño de redes de distribución, especialmente en sistemas de nivel de complejidad alto. BIC incluye el modelo EPANET como entregable en todos sus diseños de redes de distribución.',
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
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo bajar el IRCA de un municipio en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>MGA-Web y Regalías: Cómo formular un proyecto de agua potable</span>
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
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de alcantarillado sanitario, pluvial y plantas de tratamiento PTAP/PTAR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos para caudales de captación y diseño de bocatomas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/ambiental" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Concesión de aguas y permisos de vertimientos ante CAR y ANLA</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras de acueducto y plantas de tratamiento</span>
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
            Cuéntenos su proyecto de acueducto
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el municipio, la población a servir, la fuente disponible y la fuente de
            financiación. Le enviamos propuesta técnica y económica en 24 horas.
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
