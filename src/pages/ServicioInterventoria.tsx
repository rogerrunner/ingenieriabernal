import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Interventoría Técnica Hidráulica')

const seoConfig = {
  title: 'Interventoría Técnica Hidráulica Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Interventoría técnica de obras hidráulicas, acueductos, alcantarillados y redes hidrosanitarias para municipios, gobernaciones y entidades públicas en Colombia. COPNIA 17202-313228.',
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
import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito interventoría técnica para una obra. ¿Pueden asesorarme sobre el servicio y costo?')

const seoConfig = {
  title: 'Interventoría Obras Hidráulicas Colombia — SGR, Regalías y Acueductos | BIC',
  description: 'BIC presta interventoría técnica, administrativa y financiera para obras hidráulicas, acueductos, PTAR y proyectos de regalías (SGR/OCAD) en Colombia. Ley 1474/2011, Ley 80/1993, lineamientos DNP. Cobertura nacional. Cotización en 24 horas.',
  keywords: [
    'interventoría obras hidráulicas Colombia',
    'interventoría técnica acueducto Colombia',
    'supervisión obras de ingeniería Colombia',
    'interventoría proyectos regalías Colombia',
    'interventoría SGR Colombia',
    'interventoría OCAD obras Colombia',
    'interventoría técnica PTAR Colombia',
    'supervisión técnica acueducto municipio',
    'interventoría administrativa financiera SGR',
    'interventoría obras civiles Colombia',
    'control calidad obras hidráulicas Colombia',
    'interventoría Ley 80 Colombia',
    'interventoría Ley 1474 Colombia',
    'interventoría alcantarillado Colombia',
    'interventoría estudios y diseños Colombia',
    'supervisión técnica obras municipales Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/interventoria',
}

const TIPOS = [
  {
    icon: '🔍',
    tipo: 'Interventoría técnica — obras hidráulicas y sanitarias',
    subtitulo: 'Control de calidad técnica en campo y laboratorio',
    desc: 'La interventoría técnica verifica que la construcción de las obras se ejecuta conforme a los diseños aprobados, las especificaciones técnicas del contrato y las normas vigentes (NSR-10, RAS 2017, INVIAS). BIC realiza visitas periódicas de inspección en campo, verifica el control de calidad de los materiales (concreto, tuberías, acero, geomembranas), supervisa las pruebas de laboratorio (resistencia del concreto, compactación de rellenos, pruebas hidrostáticas de tuberías), revisa la correcta instalación de los equipos hidromecánicos y eléctricos, y lleva el registro fotográfico y de avance de obra. Para proyectos con exigencias de CAR, BIC verifica el cumplimiento de los condicionantes ambientales durante la construcción (manejo de escombros, protección de fuentes de agua, señalización). La interventoría técnica es la garantía de que la obra construida corresponde a lo diseñado y a lo contratado.',
    usos: ['Construcción de acueductos municipales y regionales', 'Ejecución de obras de alcantarillado sanitario y pluvial', 'Construcción de PTAR — lodos activados, FAFA, humedales', 'Obras de protección hidráulica (diques, gaviones, encauzamientos)'],
    norma: ['Ley 80/1993', 'Ley 1474/2011', 'RAS 2017 / NSR-10'],
  },
  {
    icon: '📊',
    tipo: 'Interventoría administrativa y financiera SGR/regalías',
    subtitulo: 'Para proyectos OCAD con exigencia DNP de interventoría independiente',
    desc: 'Los contratos de obra financiados con recursos del Sistema General de Regalías (SGR) están obligados por la Ley 1474 de 2011 y los lineamientos del DNP a contar con una interventoría independiente que verifique la correcta ejecución técnica, administrativa y financiera del contrato. BIC estructura el plan de interventoría según los lineamientos del Manual de Supervisión e Interventoría del DNP, elabora los informes mensuales de avance (con el informe de ejecución presupuestal, el informe de avance físico y el concepto de viabilidad de los pagos parciales), verifica el cumplimiento de los requisitos laborales (nómina, aportes parafiscales, seguridad social de los trabajadores de la obra), revisa el balance de materiales y el registro de cantidades de obra ejecutadas, y emite el concepto técnico para la aprobación de las actas de pago. En la fase de terminación, BIC elabora el informe final de interventoría y el acta de liquidación del contrato con todas las verificaciones exigidas por el OCAD.',
    usos: ['Proyectos de agua potable y saneamiento básico financiados con regalías', 'Obras de infraestructura municipal (vías, obras de urbanismo) con recursos SGR', 'Proyectos de gestión del riesgo y mitigación de amenazas con recursos FNGRD', 'Cualquier contrato de obra que la entidad territorial deba contratar interventoría independiente'],
    norma: ['Ley 1474/2011', 'Decreto 1082/2015', 'Lineamientos DNP-SGR'],
  },
  {
    icon: '🏗️',
    tipo: 'Supervisión técnica de acueductos y PTAR',
    subtitulo: 'Para ESP y proyectos con puesta en marcha de sistemas',
    desc: 'La supervisión técnica de la puesta en marcha y la operación inicial de un sistema de acueducto o una PTAR nueva requiere un conocimiento técnico especializado que va más allá de la interventoría convencional de obra civil. BIC presta la supervisión técnica especializada para verificar que el sistema funciona hidráulicamente conforme al diseño una vez construido: prueba hidráulica de la red de acueducto (caudal, presión en cada nodo, funcionamiento de válvulas y equipos de bombeo), prueba de funcionamiento de la PTAR (arranque del proceso biológico, ajuste de caudales de recirculación de lodos, calibración de los sistemas de dosificación de químicos), y verificación de la calidad del agua tratada en laboratorio para el cumplimiento de la Resolución 2115/2007 (acueducto) o la Resolución 0631/2015 (PTAR). BIC elabora el protocolo de operación y mantenimiento del sistema y capacita al personal técnico que lo operará.',
    usos: ['Puesta en marcha de acueductos municipales nuevos o ampliados', 'Arranque y ajuste operacional de PTAR (lodos activados, FAFA, humedal)', 'Verificación del funcionamiento del sistema contra-incendios de un edificio', 'Supervisión técnica de la rehabilitación de redes de distribución de agua potable'],
    norma: ['RAS 2017 Título F', 'Resolución 2115/2007', 'Resolución 0631/2015'],
  },
  {
    icon: '📐',
    tipo: 'Interventoría de estudios y diseños',
    subtitulo: 'Para verificar la calidad técnica de los diseños antes de construir',
    desc: 'Muchas entidades públicas contratan la elaboración de estudios y diseños a una firma consultora, y luego contratan una interventoría independiente para verificar la calidad técnica de esos diseños antes de autorizar el inicio de la construcción o de radicar el proyecto ante el OCAD/DNP. BIC presta el servicio de interventoría de estudios y diseños: revisa la coherencia metodológica del estudio con las normas aplicables (RAS 2017, NSR-10, Resolución 0330), verifica la suficiencia de la exploración de campo y los ensayos de laboratorio realizados, audita los cálculos hidráulicos, estructurales y geotécnicos del diseño, comprueba que los planos constructivos son completos y coordinar todas las especialidades, y emite el concepto técnico de viabilidad de los diseños con las observaciones específicas que el diseñador debe atender antes de que los planos queden aptos para licitar y construir.',
    usos: ['Revisión técnica de diseños de acueductos y alcantarillados para SGR', 'Auditoría de diseños de PTAR antes de la licitación de obras', 'Revisión de estudios geotécnicos e hidrológicos para proyectos de infraestructura', 'Concepto técnico independiente de diseños hidrosanitarios para licencia de construcción'],
    norma: ['Ley 80/1993', 'Resolución 0330/2017', 'NSR-10 / RAS 2017'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Revisión de diseños y documentos contractuales',
    desc: 'Antes de iniciar la interventoría de obra, BIC realiza la revisión técnica exhaustiva de todos los documentos del contrato: planos constructivos (verificando que estén firmados por los especialistas COPNIA correspondientes), memorias de cálculo, especificaciones técnicas generales y particulares, programa de obra y presupuesto detallado del contratista. Esta revisión previa detecta inconsistencias, contradicciones entre planos o especificaciones, y omisiones que podrían generar problemas durante la construcción. BIC elabora la lista de observaciones al contratista con las aclaraciones y correcciones que debe resolver antes del inicio de actividades, evitando que estos problemas se manifiesten en obra cuando ya es más costoso y complejo resolverlos.',
    herramientas: ['Revisión de planos (AutoCAD — verificación de geometría y coordenadas)', 'Auditoría de memorias de cálculo (RAS 2017, NSR-10, INVIAS)', 'Revisión del programa de obra (MS Project / Primavera)', 'Lista de chequeo de documentos contractuales exigidos por la norma'],
    resultado: 'Concepto técnico de revisión de diseños con observaciones y requerimientos al contratista antes del inicio de obra',
  },
  {
    paso: '02',
    titulo: 'Plan de interventoría y protocolos de inspección',
    desc: 'BIC estructura el Plan de Interventoría del proyecto: define la frecuencia y el contenido de las visitas de inspección de campo (diaria, semanal o por hito de avance), los protocolos de control de calidad de materiales y actividades de construcción (frecuencia de toma de muestras, ensayos de laboratorio requeridos por actividad), el sistema de registro de hallazgos (libro de obra digital, registro fotográfico geotagged), y los formatos de informes periódicos según los requerimientos del contratante (mensuales para el OCAD/DNP, o el formato específico de la ESP o la alcaldía contratante). El plan también establece los criterios de aprobación y rechazo de las actividades de obra, los plazos para que el contratista subsane los defectos encontrados, y el procedimiento para escalar y resolver los conflictos técnicos.',
    herramientas: ['Plan de interventoría (formato DNP para proyectos SGR)', 'Protocolos de control de calidad por actividad (concreto, rellenos, tuberías)', 'Formatos de libro de obra y registro fotográfico geotagged', 'Criterios de aceptación y rechazo por actividad (normas técnicas)'],
    resultado: 'Plan de interventoría aprobado por la entidad contratante, protocolos de inspección y cronograma de visitas',
  },
  {
    paso: '03',
    titulo: 'Seguimiento técnico en campo — inspección y control de calidad',
    desc: 'Esta es la etapa más importante de la interventoría: la presencia física en la obra para verificar que las actividades se ejecutan correctamente. BIC realiza inspecciones técnicas con la frecuencia definida en el Plan de Interventoría, verifica la ejecución de cada actividad conforme a los planos y especificaciones (cotas, dimensiones, materiales, métodos de instalación), supervisa la toma de muestras para control de calidad (cilindros de concreto para ensayo de resistencia a los 7 y 28 días, compactación de rellenos por densidad nuclear), verifica el funcionamiento de los equipos instalados (bombas, válvulas, compuertas, rejillas), y lleva el registro de todas las cantidades de obra ejecutadas para el seguimiento presupuestal. Cuando se detecta un incumplimiento técnico, BIC emite una no conformidad técnica (NCT) al contratista con el plazo para corregir.',
    herramientas: ['Inspección visual y medición en campo (cinta, nivel de burbuja, GPS)', 'Control de calidad de concreto (cilindros 7/28 días, ensayo de slump)', 'Compactación de rellenos (densímetro nuclear o Sand Cone, INVIAS INV E-161)', 'Pruebas hidrostáticas de tuberías (presión por gravedad o bomba, AWWA C600)'],
    resultado: 'Libro de obra actualizado, registro fotográfico, NCT emitidas y cerradas, control de cantidades ejecutadas',
  },
  {
    paso: '04',
    titulo: 'Informes periódicos de interventoría y aprobación de pagos',
    desc: 'BIC elabora los informes periódicos de interventoría con la periodicidad y el formato exigido por la entidad contratante: informe mensual de avance técnico (porcentaje de ejecución por capítulo de obra, programa vs. real con análisis de retrasos y causas), informe de ejecución presupuestal (cantidades ejecutadas vs. presupuestadas, valor acumulado, proyección de saldo), concepto técnico de viabilidad del pago parcial (verificación de que las cantidades de obra presentadas en el acta de cobro son reales y están conformes), y seguimiento al cumplimiento de los condicionantes ambientales del proyecto. Para proyectos SGR, los informes de interventoría deben seguir estrictamente los formatos y la periodicidad exigidos por el DNP y se cargan directamente al sistema de información de regalías (SUIFP/GESPROY-SGR).',
    herramientas: ['SUIFP / GESPROY-SGR (sistema DNP para proyectos regalías)', 'MS Excel (control presupuestal y cantidades de obra)', 'MS Word (formato informe interventoría DNP)', 'Sistema fotográfico geotagged (evidencias de avance)'],
    resultado: 'Informes mensuales de interventoría, conceptos técnicos de aprobación de pagos parciales, cargue en SUIFP/SGR',
  },
  {
    paso: '05',
    titulo: 'Acta de liquidación y cierre del contrato',
    desc: 'La fase final de la interventoría es la verificación del cumplimiento integral del contrato y la elaboración del acta de liquidación. BIC verifica que todas las actividades de obra están terminadas y conformes (recorrido final de obra con check-list de entregables), revisa que el contratista entregó todos los documentos de cierre exigidos (planos As-Built firmados, manuales de operación y mantenimiento de equipos, certificados de ensayos de laboratorio, paz y salvo de proveedores), emite el concepto técnico final para la aceptación de la obra, y elabora el acta de liquidación del contrato con el balance final de cantidades y valores ejecutados, las retenciones y garantías vigentes, y la relación de los trabajos pendientes que el contratista debe subsanar en el período de garantía. El acta de liquidación cierra formalmente el contrato y activa las garantías de estabilidad de la obra.',
    herramientas: ['Check-list de entregables de cierre (planos As-Built, manuales, garantías)', 'Acta de recibo final de obra (formato entidad contratante)', 'Balance final de cantidades ejecutadas vs. contractuales', 'Concepto técnico final y recomendaciones período de garantía'],
    resultado: 'Acta de liquidación del contrato, concepto técnico final, balance de cantidades y documentos de cierre del expediente',
  },
]

const FAQ = [
  {
    q: '¿Cuándo es obligatoria la interventoría independiente en contratos de obra en Colombia?',
    a: 'La Ley 1474 de 2011 (Estatuto Anticorrupción) y el Estatuto General de Contratación (Ley 80/1993) establecen que los contratos de obra de las entidades públicas requieren interventoría independiente cuando el valor supera ciertos umbrales o cuando así lo establezca el reglamento interno de la entidad. Específicamente para proyectos SGR: el Manual Operativo del SGR y los lineamientos del DNP establecen que todos los proyectos de inversión financiados con regalías deben contar con una interventoría técnica, administrativa y financiera contratada de forma independiente al ejecutor del proyecto. Esto aplica sin excepción para proyectos de agua potable y saneamiento básico, infraestructura vial, gestión del riesgo y cualquier otro sector de inversión elegible. La interventoría es la garantía del buen uso de los recursos públicos que exigen los OCAD y el Departamento Nacional de Planeación.',
  },
  {
    q: '¿Cuánto cuesta la interventoría técnica de una obra en Colombia?',
    a: 'El costo de la interventoría se establece generalmente como un porcentaje del valor del contrato de obra: para contratos de obras civiles en Colombia, el rango típico es entre el 5% y el 12% del valor de la obra, dependiendo de la duración del contrato, la complejidad técnica, la distancia del proyecto y si la interventoría incluye solo el componente técnico o también el administrativo y financiero. Para proyectos SGR, el DNP establece límites máximos al valor de la interventoría según el tipo y tamaño del proyecto. Para contratos de obra privados o proyectos no SGR, el costo puede pactarse también como un honorario mensual fijo según el número de visitas de interventoría requeridas. BIC envía propuesta técnica y económica detallada en menos de 24 horas.',
  },
  {
    q: '¿Cuál es la diferencia entre supervisión e interventoría en contratos públicos?',
    a: 'La diferencia es jurídica y funcional. La supervisión es ejercida directamente por la entidad contratante a través de un funcionario propio o mediante un contrato de prestación de servicios; es gratuita para la entidad pero requiere que tenga personal técnico idóneo disponible. La interventoría es ejercida por una persona natural o jurídica externa, independiente del contratista, que tiene la obligación de velar por la correcta ejecución del contrato; tiene responsabilidad solidaria con el contratista por los perjuicios causados a la entidad como consecuencia de incumplimientos del contrato que la interventoría no reportó oportunamente (Ley 1474/2011 Art. 82-84). En los proyectos SGR, el DNP exige interventoría independiente (no supervisión interna) precisamente por esta mayor responsabilidad y exigencia técnica que establece la norma.',
  },
  {
    q: '¿Qué documentos debe entregar la interventoría al final de un proyecto SGR?',
    a: 'Para proyectos financiados con recursos del SGR, la interventoría debe entregar al OCAD y al DNP el expediente completo de cierre del contrato de obra: (1) informes mensuales de interventoría de todo el período de ejecución, cargados en el sistema SUIFP/GESPROY-SGR; (2) conceptos técnicos de aprobación de cada acta de pago parcial; (3) informe final de interventoría con el balance técnico y financiero completo del proyecto; (4) acta de recibo final de obra; (5) acta de liquidación del contrato firmada por las partes; y (6) documentos de soporte de cierre del contratista (planos As-Built, manuales de operación, certificados de ensayos). BIC elabora todos estos documentos en los formatos y el sistema de información que exige el DNP para cada tipo de proyecto.',
  },
  {
    q: '¿La interventoría puede detectar problemas en los diseños que ya se están construyendo?',
    a: 'Sí, y es una situación más frecuente de lo que se piensa. Cuando la interventoría detecta un error en los diseños durante la ejecución de la obra — un dimensionamiento insuficiente, una incompatibilidad entre especialidades, o una omisión en los planos — tiene la obligación de reportarlo inmediatamente a la entidad contratante y al contratista, y de no autorizar la continuación de la actividad afectada hasta que el diseñador emita la revisión de diseño correspondiente. BIC documenta formalmente el hallazgo mediante una no conformidad técnica (NCT), coordina con el diseñador la solución técnica más adecuada, y una vez aprobada la solución, autoriza la continuación de la obra con la enmienda incorporada. Este proceso queda registrado en el libro de obra y en el informe de interventoría del período.',
  },
  {
    q: '¿BIC puede hacer interventoría de proyectos de acueducto en municipios pequeños?',
    a: 'Sí. Los proyectos de agua potable y saneamiento básico en municipios pequeños y medianos — financiados con recursos SGR, MinVivienda o presupuesto propio — son uno de los nichos principales de interventoría de BIC. Estos proyectos requieren una interventoría especializada que conozca en profundidad el RAS 2017, los lineamientos del Ministerio de Vivienda y los sistemas de registro e información del DNP (SUIFP/GESPROY-SGR). BIC tiene experiencia en interventoría de acueductos, alcantarillados, PTAR y redes de distribución de agua potable en municipios de distintos departamentos de Colombia. La distancia no es un impedimento: BIC estructura la frecuencia de visitas de campo en función de la etapa de avance de la obra y complementa con inspecciones virtuales para el seguimiento documental.',
  },
  {
    q: '¿La interventoría tiene responsabilidad legal si la obra falla después de entregada?',
    a: 'Sí. La Ley 1474 de 2011 (Art. 82-84) establece que el interventor responde solidariamente con el contratista por los perjuicios causados a la entidad contratante cuando el incumplimiento del contrato proviene de hechos o circunstancias que la interventoría haya conocido o debido conocer en el ejercicio de sus funciones. En términos prácticos, si durante la ejecución de la obra existían señales técnicas de que una actividad se estaba ejecutando mal (materiales deficientes, insuficiente compactación, aceros no conformes) y la interventoría no los detectó ni los reportó, puede ser declarada responsable solidariamente de los daños causados. Por eso la interventoría de BIC aplica protocolos sistemáticos de control de calidad y deja registro documental de cada hallazgo, observación y no conformidad: el libro de obra, el registro fotográfico y los informes son la evidencia de que la interventoría ejerció correctamente sus funciones.',
  },
  {
    q: '¿Cuánto tiempo dura la interventoría de un proyecto de acueducto o alcantarillado?',
    a: 'La duración de la interventoría corresponde al plazo de ejecución del contrato de obra más el período de garantía durante el cual la interventoría verifica que el contratista subsana los defectos detectados en la recepción de la obra. Para proyectos de acueducto y alcantarillado municipal de tamaño medio (obras principales con plazo de ejecución de 6 a 18 meses), la interventoría tiene la misma duración que el contrato de obra más 3 a 6 meses adicionales del período de garantía post-construcción. Para proyectos más complejos que incluyen PTAR, la interventoría de puesta en marcha se extiende hasta verificar que el sistema opera establemente y cumple los parámetros de la Resolución 0631/2015 durante al menos 60-90 días consecutivos. BIC ajusta el equipo de interventoría (ingeniero residente, ingeniero especialista, auxiliares técnicos) al tamaño y la fase del proyecto.',
  },
]

const CLIENTES = [
  { tipo: 'Alcaldías ejecutando contratos de obra', desc: 'Municipios que ejecutan obras de acueducto, alcantarillado, infraestructura hidráulica o gestión del riesgo con presupuesto propio o recursos SGR y requieren interventoría técnica independiente.' },
  { tipo: 'ESP con proyectos de inversión', desc: 'Empresas de servicios públicos que contratan obras de expansión o rehabilitación de sus sistemas de acueducto, alcantarillado o PTAR y necesitan interventoría especializada.' },
  { tipo: 'OCAD/SGR con exigencia de interventoría', desc: 'Proyectos de inversión aprobados por OCAD Municipales o Departamentales que requieren interventoría técnica, administrativa y financiera conforme a los lineamientos DNP.' },
  { tipo: 'Constructoras con contratos grandes', desc: 'Constructoras que necesitan una interventoría técnica para acompañar obras de gran envergadura, con presencia en campo y emisión de conceptos técnicos para los pagos parciales.' },
  { tipo: 'Entidades que contratan estudios y diseños', desc: 'Entidades públicas que contratan estudios y diseños técnicos y requieren interventoría independiente de los entregables antes de aprobar el contrato y licitar las obras.' },
  { tipo: 'Propietarios de proyectos de inversión privada', desc: 'Promotores inmobiliarios, empresas industriales y propietarios de proyectos que requieren supervisión técnica independiente para garantizar la calidad de las obras contratadas.' },
]

const NORMATIVA = [
  { codigo: 'Ley 1474/2011', descripcion: 'Estatuto Anticorrupción — Art. 82-84: responsabilidad del interventor, obligaciones de reporte y responsabilidad solidaria con el contratista por incumplimientos no reportados' },
  { codigo: 'Ley 80/1993', descripcion: 'Estatuto General de Contratación — obligaciones del interventor en contratos estatales, funciones de supervisión técnica, administrativa, financiera, contable y jurídica' },
  { codigo: 'Decreto 1082/2015', descripcion: 'Decreto Único Reglamentario Sector Administrativo de Planeación Nacional — régimen de interventoría, supervisión y seguimiento a proyectos de inversión pública' },
  { codigo: 'Lineamientos DNP-SGR', descripcion: 'Manual Operativo del SGR y Guía para la Interventoría de Proyectos SGR — formatos, informes, sistema SUIFP/GESPROY-SGR y criterios de verificación para proyectos regalías' },
  { codigo: 'RAS 2017', descripcion: 'Resolución 0330/2017 MinVivienda — norma técnica que la interventoría debe verificar en obras de acueducto, alcantarillado y PTAR municipales' },
  { codigo: 'NSR-10', descripcion: 'Norma Sismo Resistente — la interventoría verifica el cumplimiento del NSR-10 en los elementos estructurales de las obras (muros, estructuras de retención, fundaciones)' },
]

export default function ServicioInterventoria() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1E2E 0%, #1A3550 55%, #25487A 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Control de obras · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Interventoría de Obras Hidráulicas en Colombia
          </h1>
          <p style={{ color: '#7EC8F0', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Interventoría técnica, administrativa y financiera para obras de acueducto, alcantarillado, PTAR y proyectos SGR/OCAD
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores presta interventoría especializada para obras hidráulicas
            y de saneamiento básico en todo Colombia. Con dominio técnico del RAS 2017, la NSR-10
            y los lineamientos del DNP para proyectos SGR, BIC garantiza que las obras se ejecutan
            conforme a los diseños, se controla la calidad de los materiales y se cumplen
            los compromisos contractuales con la entidad contratante y los organismos de control.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar interventoría</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Ley 1474/2011','Ley 80/1993','Decreto 1082/2015','DNP-SGR','SUIFP/GESPROY','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(126,200,240,0.15)', color: '#A8D8F0', border: '1px solid rgba(126,200,240,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0f6ff', borderBottom: '1px solid #b8d0e8' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+30', label: 'contratos de interventoría ejecutados en Colombia' },
              { num: '+15 años', label: 'experiencia en interventoría de obras hidráulicas' },
              { num: 'SGR/DNP', label: 'experiencia en proyectos regalías SUIFP/GESPROY' },
              { num: 'Nacional', label: 'cobertura en municipios y departamentos de Colombia' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#0F1E2E', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de interventoría</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de interventoría necesita su contrato?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El alcance de la interventoría depende del tipo de contrato (obra, estudios y diseños, operación),
            la fuente de financiación (SGR, presupuesto propio, crédito) y las exigencias del contratante.
            BIC puede prestar la interventoría técnica solo, o el paquete completo técnico-administrativo-financiero.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #2C6FAC',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0F1E2E', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#2C6FAC', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f6ff', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#0A2A4A', marginBottom: 6 }}>USOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#444', fontSize: 13, lineHeight: 1.6 }}>
                    {t.usos.map(u => <li key={u}>{u}</li>)}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>NORMA</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {t.norma.map(n => (
                      <span key={n} style={{
                        background: '#e0eeff', color: '#0F1E2E', borderRadius: 4,
                        padding: '3px 8px', fontSize: 11, fontWeight: 600,
                      }}>{n}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo ejecuta BIC una interventoría de obra
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde la revisión de diseños y documentos contractuales hasta el acta de liquidación del contrato.
            Cada interventoría BIC cumple la Ley 1474/2011, la Ley 80/1993
            y los lineamientos DNP para proyectos SGR.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2C6FAC, #1A3550)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#b8d0e8', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#0F1E2E' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e0eeff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b8d0e8' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#0A2A4A', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #0F1E2E, #25487A)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita interventoría técnica para una obra?</p>
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
            Clientes que contratan interventoría con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con entidades públicas, empresas de servicios públicos y constructoras
            en todo Colombia que necesitan interventoría técnica independiente para garantizar
            la calidad de sus obras y el cumplimiento de los requisitos legales y normativos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f0f6ff', border: '1px solid #b8d0e8', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #2C6FAC',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0F1E2E', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige la interventoría en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC opera bajo el marco legal colombiano vigente de contratación pública y supervisión de obras.
            Conocer estas normas es esencial para los municipios, ESP y OCAD que contratan interventoría.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#0F1E2E', color: '#fff', borderRadius: 6,
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
            Otros servicios técnicos que ofrece BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño alcantarillado y PTAR', href: '/servicios/acueducto-alcantarillado' },
              { label: 'Diseño redes hidrosanitarias edificios', href: '/servicios/redes-hidrosanitarias' },
              { label: 'Estudios geotécnicos Colombia', href: '/servicios/geotecnia' },
              { label: 'Formulación proyectos SGR MGA-Web', href: '/servicios/formulation-regalias-mga' },
              { label: 'Diseño bocatomas y obras hidráulicas', href: '/bocatomas-colombia' },
              { label: 'Ingeniería ambiental — permisos CAR', href: '/servicios/ingenieria-ambiental' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f6ff', border: '1px solid #b8d0e8',
                borderRadius: 10, padding: '14px 18px', color: '#0F1E2E',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d0e8f8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f6ff')}
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
            Todo lo que necesita saber sobre interventoría en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas y legales a las preguntas reales que nos hacen alcaldías, ESP
            y constructoras antes de contratar el servicio de interventoría.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#0F1E2E', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #060F1A 0%, #1A3550 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita interventoría técnica<br />para una obra en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de obra, el municipio, el valor del contrato, la fuente de financiación
            y si el proyecto es SGR o presupuesto propio.
          </p>
          <p style={{ color: '#7EC8F0', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
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
