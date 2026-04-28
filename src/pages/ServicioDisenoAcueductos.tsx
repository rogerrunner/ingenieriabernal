import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Diseño de Acueducto — sistema de agua potable')

const seoConfig = {
  title: 'Diseño de Acueductos Colombia | Sistema Agua Potable RAS 2017 | BIC',
  description: 'Diseño de sistemas de acueducto para municipios, ESP y constructoras en Colombia. Captación, PTAP, redes de distribución. RAS 2017, Resolución 0330/2017. COPNIA 17202-313228.',
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

export default function ServicioDisenoAcueductos() {
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
import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito diseñar un acueducto o sistema de agua potable. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Diseño de Acueductos en Colombia — PTAP, Redes de Distribución, RAS 2000 | BIC',
  description: 'BIC diseña acueductos rurales y urbanos en Colombia: captación, PTAP, redes de distribución modeladas con EPANET. RAS 2000, Resolución 0330/2017, Decreto 1575/2007. Cobertura nacional. Cotización en 24 horas.',
  keywords: [
    'diseño acueducto Colombia',
    'diseño sistema de acueducto rural Colombia',
    'diseño PTAP Colombia',
    'diseño red de distribución agua potable',
    'RAS 2000 Colombia',
    'diseño acueducto municipal Colombia',
    'EPANET modelación red agua potable',
    'diseño PTAP municipios pequeños',
    'acueducto rural veredal Colombia',
    'Resolución 0330 2017 acueducto',
    'IRCA acueducto Colombia mejoramiento',
    'diseño sistema agua potable ESP',
    'optimización acueducto existente Colombia',
    'ingeniero diseño acueducto Eje Cafetero',
    'acueducto regalías SGR Colombia',
    'diseño PTAP coagulación floculación Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/diseno-acueductos',
}

const TIPOS = [
  {
    icon: '🏡',
    tipo: 'Acueducto Rural Veredal',
    subtitulo: 'Captación + conducción + PTAP + red para comunidades rurales',
    desc: 'El sistema de acueducto rural parte de una fuente superficial o subterránea y lleva agua potable hasta los domicilios de una comunidad veredal o corregimiento. BIC diseña el sistema completo conforme al RAS 2000 Título B (sistemas de distribución) y Título D (plantas de tratamiento): bocatoma o captación de manantial, línea de aducción por gravedad o con bombeo, desarenador, planta de tratamiento simplificada (filtración lenta o en múltiples etapas + desinfección con cloro), tanque de almacenamiento y red de distribución hasta las acometidas domiciliarias. El diseño incluye la proyección de la población beneficiada a 25 años, el caudal de diseño por nivel de complejidad del sistema (bajo o medio) y las presiones mínimas y máximas exigidas por la Resolución 0330/2017. Los acueductos rurales financiados con SGR o recursos del Ministerio de Vivienda deben cumplir adicionalmente la Resolución 844/2018 del MVCT.',
    cuando: 'Comunidades rurales sin servicio de agua potable, acueductos veredales deteriorados que necesitan rehabilitación, nuevos centros poblados en suelo rural, proyectos financiados con SGR para el sector rural.',
    aplica: ['Juntas de acción comunal y acueductos veredales', 'Municipios con déficit de agua potable en zona rural', 'Alcaldías que van a presentar proyectos al OCAD (SGR)', 'Constructoras de urbanizaciones en suelo suburbano o rural'],
  },
  {
    icon: '🏭',
    tipo: 'Diseño de PTAP',
    subtitulo: 'Plantas de tratamiento para municipios pequeños y medianos',
    desc: 'La Planta de Tratamiento de Agua Potable (PTAP) es el componente del sistema que transforma el agua cruda (superficial o subterránea) en agua apta para consumo humano conforme a la Resolución 2115/2007 del MPS. BIC diseña el tren de tratamiento adecuado a la calidad del agua de la fuente: si el agua tiene turbiedad alta (>10 UNT) y color aparente se requiere coagulación-floculación-sedimentación antes de la filtración; si el agua es relativamente clara, puede aplicarse filtración directa o filtración lenta. Para fuentes con contaminación bacteriológica elevada (coliformes fecales > 200 UFC/100 ml) se dimensiona el sistema de desinfección con cloro gas o hipoclorito, calculando el tiempo de contacto Ct y la dosis de cloro residual libre mínima de 0.3 mg/L en el punto de entrega. BIC dimensiona cada unidad: floculadores (mezcla lenta con tiempo de retención 20-30 min), sedimentadores de alta tasa o convencionales, filtros de arena de flujo descendente (tasa de filtración 120-180 m³/m²/día), y sistema de lavado a contracorriente.',
    cuando: 'Municipios con PTAP obsoleta o de capacidad insuficiente para la demanda actual, acueductos con IRCA en nivel de riesgo medio o alto, proyectos nuevos de acueducto que capten agua superficial.',
    aplica: ['Municipios con IRCA > 5% o en nivel de riesgo según SIVICAP', 'ESP con PTAP que ya no cumple el caudal de diseño actualizado', 'Proyectos nuevos de acueducto que requieren tratamiento', 'Constructoras que deben instalar PTAP en urbanizaciones sin red municipal'],
  },
  {
    icon: '🕸️',
    tipo: 'Red de Distribución Urbana',
    subtitulo: 'Modelación EPANET, sectorización y presiones',
    desc: 'La red de distribución es la infraestructura de tuberías que lleva el agua desde el tanque de almacenamiento hasta las acometidas domiciliarias. BIC diseña redes en malla cerrada o ramificada con modelación hidráulica en EPANET 2.2 (software de dominio público de la EPA): simula el flujo en cada tubería, las presiones en cada nodo y la calidad del agua (concentración de cloro residual) para las condiciones de máximo consumo diario (Kd = 1.2-1.4) y máximo consumo horario (Kh = 1.6-2.0 para sistemas de nivel de complejidad medio). El diseño garantiza la presión residual mínima de 10 mPa (≈ 10 m.c.a.) en todos los nodos en condición crítica y la presión máxima de 60 m.c.a. para evitar fugas. BIC entrega el modelo EPANET calibrado como parte de los entregables, lo que permite al operador del sistema simular escenarios futuros sin necesidad de volver a contratar el diseño.',
    cuando: 'Municipios con red de distribución con alta presión de pérdidas (IANC > 30%), expansión de la red a nuevas áreas, rehabilitación de redes envejecidas, sistemas que tienen presiones deficientes en los sectores más altos o más alejados.',
    aplica: ['ESP con redes de distribución envejecidas o insuficientes', 'Constructoras de urbanizaciones que entregan la red a la ESP municipal', 'Municipios que amplían la cobertura a barrios periféricos', 'Proyectos de reducción del índice de agua no contabilizada (IANC)'],
  },
  {
    icon: '🔧',
    tipo: 'Optimización y Rehabilitación de Sistemas Existentes',
    subtitulo: 'Diagnóstico, plan maestro y rediseño de sistemas deteriorados',
    desc: 'Muchos acueductos municipales fueron diseñados hace 20-40 años para poblaciones menores, con tecnologías ya superadas y materiales (asbesto cemento, hierro fundido, PVC sin presión) que han superado su vida útil. BIC hace el diagnóstico técnico del sistema existente: inventario de la infraestructura (captación, conducción, PTAP, tanques, redes), evaluación de la capacidad hidráulica actual vs. la demanda actual y proyectada, análisis del IRCA (indicador de calidad del agua conforme a la Resolución 2115/2007), medición del IANC (índice de agua no contabilizada, idealmente < 25%), identificación de los tramos con mayor presión de fugas (presión > 60 m.c.a.) y evaluación del estado físico de la PTAP (unidades colmatadas, equipos obsoletos, capacidad insuficiente). Con el diagnóstico, BIC elabora el Plan Maestro de Acueducto: priorización de las inversiones de rehabilitación y expansión, cronograma de implementación a 10-25 años y estimación de costos por etapa.',
    cuando: 'Sistemas de acueducto con IRCA persistentemente alto a pesar de operar la PTAP, con IANC > 25%, con insuficiencia de presiones en sectores altos, con fugas visibles frecuentes o con capacidad de la PTAP ya superada por la demanda actual.',
    aplica: ['ESP con planes de modernización o que van a concesionar el servicio', 'Municipios que preparan proyectos SGR de rehabilitación', 'Interventorías técnicas de sistemas de acueducto', 'Alcaldías con fallos en la prestación del servicio que deben reportar a la SSPD'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico de la fuente y proyección de la demanda',
    desc: 'El diseño correcto de un acueducto comienza por saber cuánta agua hay disponible y cuánta se va a necesitar. BIC realiza el estudio de la fuente de abastecimiento: para fuentes superficiales, analiza los registros hidrométricos del IDEAM de las estaciones más cercanas a la cuenca, calcula los caudales característicos (Q medio, Q mínimo mensual multianual, Q máximo con períodos de retorno de 5-25 años para el diseño de la bocatoma) y verifica si la fuente está en un POMCA que establezca caudal ecológico (Decreto 1076/2015: generalmente el 25% del caudal mínimo). Para fuentes subterráneas, revisa el estudio geológico e hidrogeológico y el aforo del pozo (prueba de bombeo). La caracterización físicoquímica y microbiológica del agua de la fuente (pH, turbiedad, color aparente, DBO5, coliformes totales y fecales, nitratos, metales pesados) define el tren de tratamiento necesario. La demanda se proyecta a 25 años según la Resolución 0330/2017: se estima la población futura con los métodos del RAS 2000 (geométrico, aritmético, Wappaus) y se calcula el caudal de diseño aplicando la dotación neta del nivel de complejidad del sistema, el IANC asumido y los factores de consumo máximo diario (Kd) y máximo horario (Kh).',
    herramientas: ['IDEAM (series hidrológicas estaciones cercanas a la cuenca)', 'DANE (censos y proyecciones de población)', 'Laboratorio acreditado IDEAM (análisis fisicoquímico y microbiológico)', 'Resolución 0330/2017 (dotaciones y factores de diseño por nivel de complejidad)', 'POMCA CAR territorial (caudal ecológico)'],
    resultado: 'Informe de caracterización de la fuente (caudales + calidad del agua), proyección de población y demanda a 25 años, caudal de diseño del sistema',
  },
  {
    paso: '02',
    titulo: 'Diseño hidráulico de la captación y conducción',
    desc: 'Con el caudal de diseño definido, BIC dimensiona la captación y la línea de conducción. Para bocatomas (el elemento más crítico del sistema): se calcula el caudal de diseño de captación con factor de seguridad según la variabilidad de la fuente, se dimensiona el umbral o barraje de captación (cota de la cresta, longitud, coeficiente de descarga), la ventana de captación (área, coeficiente de paso, velocidad de entrada < 0.5 m/s para evitar arrastre de sólidos) y la cámara de recolección. La línea de aducción se diseña como tubería a presión o canal abierto según la topografía: para tubería a presión se calcula el diámetro con la ecuación de Darcy-Weisbach, se verifica la presión máxima en los puntos bajos (< 70 m.c.a. para PVC, < 100 m.c.a. para acero) y se diseñan los accesorios especiales (cámaras rompe-presión cuando la presión supera el límite de la tubería, ventosas en los puntos altos para purga de aire, purgas en los puntos bajos). El desarenador se dimensiona para retener partículas > 0.1 mm, con velocidad horizontal de sedimentación < 0.3 m/s y tiempo de retención mínimo de 20 minutos.',
    herramientas: ['AutoCAD Civil 3D (diseño y planos de la captación y conducción)', 'Levantamiento topográfico con planimetría y altimetría (si no existe)', 'Cálculo hidráulico de tuberías a presión (Darcy-Weisbach, Hazen-Williams)', 'RAS 2000 Título B (criterios de diseño de conducción)'],
    resultado: 'Diseño de la captación (bocatoma o manantial) y la línea de conducción hasta la PTAP, con planos constructivos y memoria de cálculo',
  },
  {
    paso: '03',
    titulo: 'Diseño de la PTAP y tanque de almacenamiento',
    desc: 'El diseño de la Planta de Tratamiento de Agua Potable es el componente más técnico del sistema. BIC selecciona el tren de tratamiento según la calidad del agua de la fuente y dimensiona cada unidad. Para aguas con turbiedad variable y color aparente alto (frecuente en ríos andinos): coagulación (mezcla rápida de 10-20 s con número de Camp G > 700 s⁻¹), floculación (mezcla lenta en tres cámaras con tiempo total 20-30 min, G entre 20-80 s⁻¹), sedimentación de alta tasa (módulos laminares con velocidad ascensional 1-2 m/h) y filtración rápida de arena (tasa 120-180 m³/m²/día con lecho de arena 0.5-1.0 m de profundidad y granulometría d10 = 0.45-0.55 mm). Para aguas con baja turbiedad y buena calidad: filtración lenta (tasa 0.1-0.3 m³/m²/día) con menor costo de operación. En todos los casos, desinfección con cloro (gas o hipoclorito) calculando la dosis para residual libre mínimo de 0.3 mg/L en punto más alejado de la red. El tanque de almacenamiento se dimensiona para el volumen de regulación (variación del consumo en 24 horas, generalmente 15-25% del Qmd × 86400 s), el volumen de reserva para incendio (según la NFPA 1142 para sistemas rurales) y el volumen de reserva para emergencias (2-3 horas de Qmd). BIC dimensiona la geometría del tanque (circular o rectangular, enterrado, semienterrado o elevado según la topografía) y calcula la cota de fondo del tanque para garantizar presión mínima en los puntos críticos de la red.',
    herramientas: ['RAS 2000 Título D (diseño de PTAP)', 'Manual de diseño de plantas de tratamiento (CINARA-Univalle)', 'Cálculo hidráulico de unidades de tratamiento', 'AutoCAD Civil 3D (planos de la planta y el tanque)'],
    resultado: 'Diseño completo de la PTAP (tren de tratamiento según calidad de la fuente) y el tanque de almacenamiento, con planos constructivos y especificaciones de equipos',
  },
  {
    paso: '04',
    titulo: 'Modelación hidráulica de la red de distribución con EPANET',
    desc: 'La red de distribución se diseña y verifica con el software EPANET 2.2 (EPA). BIC construye el modelo de la red: define los nodos de consumo con su elevación (del levantamiento topográfico o del DEM oficial del IGAC), asigna la demanda base a cada nodo (proporcional al número de usuarios del sector), define las tuberías con su diámetro, longitud, material y rugosidad (coeficiente de Hazen-Williams: 150 para PVC nuevo, 120 para PVC envejecido, 100 para hierro fundido), e ingresa el tanque de almacenamiento como nodo de nivel fijo. El modelo se calibra comparando las presiones calculadas con mediciones de campo en los puntos donde existen medidores o donde se puede tomar lectura con manómetro de aguja. BIC simula tres condiciones de análisis: consumo promedio diario (verificación de presiones en condición normal), consumo máximo horario (condición crítica para presiones mínimas, garantizando ≥ 10 m.c.a. o ≥ 10 mPa) y demanda cero con tanque lleno (verificación de presiones máximas, garantizando ≤ 60 m.c.a.). La sectorización de la red (división en zonas de presión y caudal medido) se diseña para reducir el IANC y facilitar la gestión operativa de fugas.',
    herramientas: ['EPANET 2.2 (EPA) — modelación hidráulica de la red de distribución', 'Levantamiento topográfico de la red existente o diseño de la red nueva', 'Medición de presiones de campo para calibración (manómetro de aguja)', 'QGIS (trazado de la red sobre cartografía del municipio)'],
    resultado: 'Modelo EPANET calibrado de la red de distribución, análisis de presiones en condición crítica, diseño de sectorización y ubicación de válvulas y accesorios',
  },
  {
    paso: '05',
    titulo: 'Memorias de cálculo, planos constructivos y presupuesto',
    desc: 'BIC entrega el expediente técnico completo que necesita el municipio, la ESP o la entidad financiadora (SGR, MVCT, FINDETER) para licitar, aprobar y construir el sistema: memoria de cálculo completa con toda la metodología, los datos de entrada, los resultados numéricos y las verificaciones de diseño, firmada por Rogerio Bernal Ríos con tarjeta profesional COPNIA 17202-313228 CLD vigente; planos constructivos en AutoCAD DWG de planta, perfil, cortes de la PTAP, detalles estructurales del tanque y de las obras de captación, plano de la red de distribución con coordenadas georreferenciadas; especificaciones técnicas generales y particulares (materiales, equipos, procesos constructivos y pruebas de aceptación); y presupuesto de obra con análisis de precios unitarios (APU) referenciados a los precios del MVCT/SICE o a precios de mercado del departamento. El expediente está estructurado para presentar ante el banco de proyectos del SGR, el Ministerio de Vivienda o la interventoría sin observaciones por forma.',
    herramientas: ['Memoria de cálculo completa (firma COPNIA 17202-313228)', 'Planos AutoCAD DWG (captación, PTAP, tanque, red de distribución)', 'Especificaciones técnicas generales y particulares', 'APU y presupuesto de obra (precios MVCT/SICE o mercado departamental)'],
    resultado: 'Expediente técnico completo: memoria de cálculo + planos DWG + especificaciones + APU + modelo EPANET, listo para licitación o presentación ante el MVCT/SGR',
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de un acueducto en Colombia?',
    a: 'El costo depende principalmente del tamaño del sistema (número de usuarios y caudal de diseño), si el proyecto es nuevo o es rehabilitación de uno existente, si existe información topográfica actualizada y si incluye o no el diseño de la PTAP. Para un acueducto rural veredal de nivel de complejidad bajo que sirve a 100-500 usuarios (captación + conducción + PTAP simplificada + red de distribución), el diseño completo con memorias de cálculo, planos constructivos, especificaciones y APU oscila entre $25.000.000 y $60.000.000 COP. Para un acueducto municipal de nivel de complejidad medio o alto que incluye PTAP de coagulación-floculación-sedimentación-filtración con modelación EPANET de la red, el diseño puede estar entre $60.000.000 y $150.000.000 COP. BIC envía propuesta técnica y económica detallada en 24 horas sin costo — el alcance y el precio se ajustan exactamente a la magnitud del proyecto.',
  },
  {
    q: '¿Cuánto tiempo toma el diseño de un sistema de acueducto?',
    a: 'El plazo típico depende de la disponibilidad de información de base. Si existe topografía actualizada del área del proyecto y datos hidrométricos del IDEAM, el plazo para un diseño completo de acueducto rural es de 8-12 semanas. Si hay que levantamiento topográfico (acueductos en zonas montañosas donde no hay DEM de alta resolución disponible), el plazo se extiende a 12-18 semanas. Para acueductos municipales medianos con modelación EPANET y diseño detallado de la PTAP, el plazo típico es de 12-20 semanas. BIC puede estructurar entregas parciales para no bloquear el proceso de aprobación o licitación: primero la memoria de hidrología y el caudal de diseño (semanas 4-6), luego el diseño de la captación y conducción (semanas 8-10), y finalmente la PTAP, el tanque y la red con el modelo EPANET (semanas 14-18).',
  },
  {
    q: '¿Qué diferencia hay entre un acueducto rural y uno urbano en términos de diseño?',
    a: 'La diferencia fundamental está en el nivel de complejidad del sistema según la Resolución 0330/2017, que define los criterios de diseño (dotaciones, factores de simultaneidad, presiones) según el número de usuarios y la capacidad económica del municipio. Un sistema de nivel de complejidad bajo (< 2.500 usuarios) tiene dotación neta máxima de 100 L/hab/día y se diseña con parámetros más conservadores, con tecnologías de menor costo de operación (filtración lenta, cloración simple). Un sistema de nivel de complejidad alto (> 12.500 usuarios o capital de departamento) tiene dotaciones de hasta 140 L/hab/día, requiere mayor factor de Kh (hasta 2.0), mayores presiones de diseño y tecnologías de tratamiento más sofisticadas (PTAP con sedimentación de alta tasa, sistemas SCADA). En la práctica, los acueductos rurales tienen cuencas pequeñas, fuentes superficiales de montaña con alta variabilidad, y redes de distribución ramificadas en terreno irregular, mientras que los urbanos tienen redes en malla con mayor complejidad de sectorización.',
  },
  {
    q: '¿Qué es el IRCA y cómo afecta al diseño de la PTAP?',
    a: 'El IRCA (Índice de Riesgo de Calidad del Agua para Consumo Humano) es el indicador definido en la Resolución 2115/2007 del Ministerio de la Protección Social para medir qué tan lejos está el agua distribuida de cumplir los valores máximos aceptables de los parámetros de calidad. Se calcula como la suma ponderada de las penalizaciones por incumplimiento de cada parámetro controlado (físicos, químicos y microbiológicos), con una escala de 0 (agua sin riesgo) a 100 (inviable sanitariamente). Un IRCA entre 0% y 5% es sin riesgo; entre 5.1% y 14% es bajo; entre 14.1% y 35% es medio; entre 35.1% y 80% es alto; y > 80% es inviable. El IRCA de un municipio está disponible en el SIVICAP del Instituto Nacional de Salud. Para el diseño de la PTAP, el IRCA de la fuente indica cuáles parámetros están fallando: si el problema es turbiedad y coliformes (lo más frecuente en ríos andinos), se dimensiona la coagulación-floculación y la desinfección; si hay metales pesados, se dimensiona la oxidación-precipitación o la adsorción en carbón activado. BIC recomienda el análisis del agua de la fuente antes de definir el tren de tratamiento.',
  },
  {
    q: '¿BIC diseña PTAP para municipios pequeños con poco presupuesto?',
    a: 'Sí, y es uno de los enfoques más frecuentes de BIC. Los municipios pequeños (nivel de complejidad bajo) no necesitan PTAP convencional de coagulación-floculación-sedimentación-filtración, que tiene costos de construcción y operación altos. Existen tecnologías alternativas adecuadas para agua de buena calidad base: filtración lenta en arena (FLA), que puede eliminar hasta el 99.9% de los coliformes con operación manual y costo de construcción muy bajo; filtros multimedios para aguas con baja turbiedad; y sistemas de ultrafiltración por membrana para comunidades pequeñas con electricidad. BIC selecciona la tecnología de tratamiento que maximiza la reducción del IRCA con el menor costo de construcción y operación posible para el municipio específico, considerando la capacidad técnica del operador local y la disponibilidad de insumos (hipoclorito, sulfato de aluminio) en la región.',
  },
  {
    q: '¿El diseño de acueducto incluye los trámites ante la CAR?',
    a: 'El diseño técnico del acueducto (bocatoma, PTAP, red) y los trámites ante la Corporación Autónoma Regional son servicios complementarios pero separados. El trámite de concesión de aguas (autorización para captar el caudal de diseño) y el permiso de ocupación de cauce (para construir la bocatoma en el cauce) son procedimientos ante la CAR que requieren estudios técnicos específicos: estudio de oferta y demanda hídrica, análisis del caudal ecológico (Decreto 1076/2015) y memoria descriptiva del proyecto. BIC puede realizar tanto el diseño del sistema como los estudios para los trámites ante la CAR, integrando los dos servicios en un solo contrato para garantizar coherencia técnica. Si el municipio ya tiene la concesión de aguas vigente y solo necesita actualizar o ampliar el diseño, los trámites no son necesarios.',
  },
  {
    q: '¿BIC trabaja en municipios de toda Colombia?',
    a: 'Sí. BIC opera en todo el territorio nacional colombiano. La firma tiene su base de operaciones en Manizales (Eje Cafetero) y tiene proyectos ejecutados en Caldas, Risaralda, Quindío, Antioquia, Boyacá, Santander, Casanare, Nariño y la región Caribe. La mayor parte del trabajo de diseño (hidrología, análisis de calidad del agua, memorias de cálculo, modelación EPANET) se realiza con información remota y datos oficiales del IDEAM, el IGAC y el DANE, de manera que la ubicación geográfica del proyecto no limita la capacidad de diseño. Para el levantamiento topográfico del área del proyecto (cuando no existe información actualizada) BIC coordina con topógrafos locales certificados o programa visitas técnicas al sitio. Los planos y memorias se entregan en formato digital y físico con la calidad suficiente para cualquier entidad financiadora del país.',
  },
  {
    q: '¿Qué software usa BIC para el diseño de acueductos?',
    a: 'BIC usa una combinación de herramientas especializadas para cada componente del diseño: EPANET 2.2 (EPA, dominio público) para la modelación hidráulica de la red de distribución, simulando presiones, caudales y calidad del agua bajo condiciones de demanda máxima; AutoCAD Civil 3D para los planos constructivos de todas las obras (captación, conducción, PTAP, tanque, red de distribución) con generación de perfiles longitudinales automáticos y cubicación de movimiento de tierras; HEC-HMS y análisis de series hidrológicas del IDEAM para el estudio de la fuente de abastecimiento; y hojas de cálculo propias para el dimensionamiento hidráulico de las unidades de la PTAP (floculadores, sedimentadores, filtros) conforme a los criterios del RAS 2000 Título D. Todos los modelos y archivos de cálculo se entregan al cliente como parte del expediente técnico, lo que le permite verificar los resultados y hacer ajustes en el futuro.',
  },
]

const CLIENTES = [
  { tipo: 'Municipios y alcaldías', desc: 'Diseño de sistemas nuevos o rehabilitación de acueductos municipales. Proyectos financiados con SGR, PDA o presupuesto municipal. Diseños para presentar ante el MVCT y el banco de proyectos del DNP.' },
  { tipo: 'Empresas de servicios públicos (ESP)', desc: 'Diseño de expansión de redes de distribución, modernización de PTAP, mejoramiento del IRCA y reducción del IANC. Estudios para la reestructuración tarifaria ante la SSPD.' },
  { tipo: 'Constructoras de urbanizaciones', desc: 'Diseño de la infraestructura de agua potable para urbanizaciones en suelo urbano o rural que deben entregar el sistema a la ESP o a la Junta de Acción Comunal.' },
  { tipo: 'Juntas de acueducto veredal', desc: 'Diseño o rediseño de acueductos veredales con captación, conducción, PTAP simplificada y red de distribución. Proyectos presentados al MVCT (Resolución 844/2018) o al SGR.' },
  { tipo: 'Interventorías y supervisores de obra', desc: 'Revisión y validación de diseños de acueducto elaborados por otros consultores. Conceptos técnicos para contratos de interventoría de obras de agua potable.' },
  { tipo: 'Entidades financiadoras', desc: 'FINDETER, Ministerio de Vivienda y entidades de cooperación que requieren diseños verificados por ingenieros especializados antes de desembolsar los recursos del proyecto.' },
]

const NORMATIVA = [
  { codigo: 'RAS 2000 Títulos A-D', descripcion: 'Reglamento Técnico del Sector de Agua Potable — norma base de diseño para captaciones, conducción, PTAP y distribución de agua potable en Colombia' },
  { codigo: 'Resolución 0330/2017', descripcion: 'MVCT — reglamento técnico que adopta y actualiza el RAS; define dotaciones, factores de diseño y criterios de presión para cada nivel de complejidad del sistema' },
  { codigo: 'Decreto 1575/2007', descripcion: 'Sistema para la protección y control de la calidad del agua para consumo humano — establece el IRCA y los parámetros de calidad que debe cumplir el agua en el punto de entrega' },
  { codigo: 'Resolución 2115/2007', descripcion: 'MPS — define los valores máximos aceptables de los parámetros fisicoquímicos y microbiológicos del agua potable y la metodología de cálculo del IRCA' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — regula las concesiones de aguas y el caudal ecológico que debe respetarse en la fuente de captación (al menos el 25% del caudal mínimo)' },
  { codigo: 'Resolución 844/2018', descripcion: 'MVCT — reglamento técnico para sistemas de agua potable en zonas rurales y pequeñas poblaciones; tecnologías apropiadas, dotaciones mínimas y criterios de sostenibilidad' },
]

export default function ServicioDisenoAcueductos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001830 0%, #002A50 55%, #003A70 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería sanitaria · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Acueductos en Colombia
          </h1>
          <p style={{ color: '#00B4D8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Acueductos rurales y urbanos — captación, PTAP, modelación EPANET — conforme al RAS 2000 y la Resolución 0330/2017
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores diseña sistemas completos de agua potable en todo Colombia:
            bocatomas y captaciones de manantial, líneas de conducción, plantas de tratamiento (PTAP)
            con coagulación-floculación-sedimentación-filtración o filtración lenta, tanques de
            almacenamiento y redes de distribución modeladas con EPANET. Cada diseño incluye memoria
            de cálculo firmada por especialista COPNIA, planos constructivos DWG, especificaciones
            técnicas y presupuesto APU listo para licitar o presentar ante el SGR o el Ministerio de Vivienda.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de acueducto</Btn>
            <Btn variant="outline" href="/bocatomas-colombia" dark>Ver diseño de bocatomas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['EPANET','RAS 2000','Res. 0330/2017','PTAP','IRCA','IANC','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(0,180,216,0.15)', color: '#60D3E8', border: '1px solid rgba(0,180,216,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#e8f7fc', borderBottom: '1px solid #9ed9ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+20 años', label: 'experiencia en diseño de acueductos en Colombia' },
              { num: '+40', label: 'sistemas de acueducto diseñados o rehabilitados' },
              { num: 'EPANET', label: 'modelación hidráulica de la red de distribución' },
              { num: 'COPNIA', label: 'firma vigente — 17202-313228 CLD activa' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#001830', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE SERVICIO ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de sistema</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué sistema de acueducto necesita diseñar?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El alcance del diseño depende del tipo de sistema (rural o urbano), el nivel de complejidad
            definido por la Resolución 0330/2017 y si es un sistema nuevo o la rehabilitación de uno
            existente. BIC hace el diagnóstico inicial sin costo para definir el alcance correcto.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #00B4D8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#001830', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#00B4D8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#e8f7fc', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#00374A', marginBottom: 4 }}>CUÁNDO SE DISEÑA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.6 }}>
                    {t.aplica.map(r => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC un sistema de acueducto en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el diagnóstico de la fuente hasta el expediente listo para licitar o presentar ante el SGR.
            Cada diseño BIC cumple el RAS 2000, la Resolución 0330/2017, el Decreto 1575/2007
            y la Resolución 2115/2007.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00B4D8, #007A96)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#9ed9ea', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#001830' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e8f7fc', borderRadius: 8, padding: '10px 14px', border: '1px solid #9ed9ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#00374A', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #001830, #003A70)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita diseñar un acueducto en Colombia?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
          </div>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '12px 28px',
              background: '#25D366', color: '#fff', borderRadius: 8,
              fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan diseño de acueductos con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con entidades públicas, empresas privadas y operadores de servicios en
            todo Colombia que necesitan un diseño de acueducto sólido — uno que cumpla el RAS,
            baje el IRCA y sea aprobado por el Ministerio de Vivienda o el banco de proyectos del SGR.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f0f9fc', border: '1px solid #b3dce8', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #00B4D8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#001830', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal y técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige el diseño de acueductos en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC diseña bajo las normas colombianas vigentes. Conocer el marco normativo evita
            rechazos por parte del MVCT, el banco de proyectos del SGR, la SSPD y las interventorías.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#001830', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios de ingeniería hídrica y sanitaria de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Formulación proyectos regalías SGR', href: '/servicios/regalias-mga' },
              { label: 'Estudios ambientales y licencia ambiental', href: '/servicios/ambiental' },
              { label: 'Canales de riego Colombia', href: '/obras-hidraulicas-colombia' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#e8f7fc', border: '1px solid #9ed9ea',
                borderRadius: 10, padding: '14px 18px', color: '#001830',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#c0ecf5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#e8f7fc')}
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo lo que necesita saber sobre diseño de acueductos en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen municipios, ESP
            y constructoras antes de contratar el diseño del sistema de acueducto.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#001830', lineHeight: 1.4 }}>
                  {item.q}
                </h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001830 0%, #003A70 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de un acueducto<br />o sistema de agua potable en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de sistema (rural o urbano), el municipio y departamento,
            la fuente disponible, el número de usuarios y la fuente de financiación (SGR, MVCT, municipal).
          </p>
          <p style={{ color: '#60D3E8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none',
              }}
            >
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a
              href="/contacto"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: 'transparent', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16,
                textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
