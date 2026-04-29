import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Formulación de Proyectos de Regalías MGA-Web')

const seoConfig = {
  title: 'Formulación Proyectos Regalías MGA-Web Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Formulación de proyectos de inversión para el Sistema General de Regalías (SGR) en MGA-Web. Agua potable, saneamiento básico, gestión del riesgo. COPNIA 17202-313228. Eje Cafetero.',
  keywords: [
    'formulación proyectos regalías MGA-Web Colombia',
    'formulación proyectos SGR agua saneamiento',
    'MGA-Web Colombia municipios',
    'proyectos inversión agua potable SGR',
    'BPIN proyectos regalías',
    'formulación proyectos alcaldías Colombia',
    'proyectos regalías acueducto alcantarillado',
    'DNP MGA-Web formulación',
    'fichas técnicas proyectos SGR',
    'SECOP proyectos regalías agua',
    'formulación proyectos gestión riesgo SGR',
    'MGA Colombia municipios 2025',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/regalias-mga',
}

const INCLUYE = [
  { icon: '📊', titulo: 'Formulación completa en MGA-Web', desc: 'Registro y diligenciamiento integral del proyecto en la plataforma MGA-Web del DNP: identificación del problema, análisis de alternativas, preparación y evaluación. Generación del BPIN y ficha EBI aprobable por el OCAD correspondiente.' },
  { icon: '🔬', titulo: 'Estudios técnicos de soporte', desc: 'Elaboración o compilación de los estudios técnicos requeridos: estudio de necesidades, diagnóstico de la infraestructura existente, diseños básicos del sistema de agua o saneamiento, estudio de amenaza y vulnerabilidad, y análisis de alternativas.' },
  { icon: '💰', titulo: 'Presupuesto y programación de inversión', desc: 'Estimación detallada de costos de inversión, operación y mantenimiento. Análisis costo-eficiencia o costo-beneficio según la tipología del proyecto. Cronograma físico-financiero coherente con el flujo de recursos del SGR.' },
  { icon: '📋', titulo: 'Fichas técnicas sectoriales y CONPES', desc: 'Elaboración de fichas técnicas sectoriales de agua potable y saneamiento básico, gestión del riesgo o infraestructura, alineadas con los CONPES vigentes y los criterios del DNP para elegibilidad y priorización del gasto.' },
  { icon: '🏛️', titulo: 'Acompañamiento ante el OCAD', desc: 'Preparación de la presentación técnica ante el Órgano Colegiado de Administración y Decisión (OCAD). Atención de observaciones, subsanación de requerimientos y ajustes necesarios hasta lograr la aprobación del proyecto.' },
  { icon: '📌', titulo: 'Seguimiento y registro en Gesproy-SGR', desc: 'Una vez aprobado el proyecto, acompañamiento en el registro del contrato de ejecución en Gesproy-SGR y apoyo en la elaboración de los primeros informes de seguimiento (SSIFP) exigidos por el DNP.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y secretarías de planeación', desc: 'Municipios con recursos asignados de regalías directas que necesitan formular proyectos de agua potable, saneamiento, gestión del riesgo o infraestructura para tramitarlos ante el OCAD Municipal o Departamental.' },
  { tipo: 'Gobernaciones y entidades departamentales', desc: 'Proyectos de mayor inversión para sistemas regionales de acueducto, optimización de PTAP/PTAR y planes departamentales de agua que requieren aprobación del OCAD Departamental.' },
  { tipo: 'Gestores de proyectos del SGR', desc: 'Profesionales contratados por alcaldías o gobernaciones que necesitan soporte técnico especializado en los componentes de agua, hidráulica y riesgo de proyectos MGA en tramitación.' },
  { tipo: 'Entidades públicas con regalías indirectas', desc: 'Universidades públicas, hospitales y otras entidades beneficiarias de regalías para ciencia, tecnología e innovación que formulan proyectos con componente hídrico o ambiental.' },
]

export default function ServicioRegaliasMga() {
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
            Formulación de Proyectos de Regalías MGA-Web<br />
            <span style={{ color: '#17A2B8' }}>Agua, Saneamiento y Gestión del Riesgo en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores formula proyectos de inversión para el Sistema General
            de Regalías (SGR) en la plataforma MGA-Web del DNP: acueductos, alcantarillados, plantas
            de tratamiento, defensas fluviales y gestión del riesgo hídrico. Registramos el BPIN,
            elaboramos fichas técnicas sectoriales, calculamos indicadores costo-eficiencia y
            acompañamos el proceso ante el OCAD hasta la aprobación. Rogerio Bernal Ríos, Especialista
            UNAL (COPNIA 17202-313228), ha formulado proyectos aprobados en municipios de Caldas,
            Boyacá, Santander y los Llanos, acumulando un historial verificable de proyectos
            financiados que superaron la revisión técnica del DNP, las contralorías departamentales
            y los OCAD sectoriales.
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
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Plataformas:</span>
          {['MGA-Web DNP', 'Gesproy-SGR', 'BPIN', 'SECOP II', 'OCAD'].map(t => (
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
          }}>¿Qué incluye la formulación MGA-Web?</h2>
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
              { icon: '✅', titulo: 'Proyectos aprobados verificables', desc: 'Historial real de proyectos aprobados por OCAD en Caldas, Boyacá, Santander y Llanos. Referencias disponibles con contactos de las alcaldías contratantes.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y Ambiental (UNAL), garantiza que los análisis técnicos, la valoración de alternativas y los indicadores económicos superen la revisión del banco de proyectos del DNP.' },
              { icon: '⚡', titulo: 'Proceso ágil orientado a aprobación', desc: 'Conocemos los criterios de elegibilidad del DNP y los requerimientos de cada OCAD. Formulamos para que el proyecto sea aprobado en el primer ciclo, sin reprocesos costosos.' },
              { icon: '🔗', titulo: 'Diseños y formulación bajo el mismo techo', desc: 'BIC realiza tanto los estudios técnicos de soporte (hidrología, hidráulica, diseños) como la formulación MGA-Web, garantizando coherencia total entre los componentes del proyecto.' },
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
            <a href="/blog/proyectos-regalias-agua-saneamiento" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo Formular Proyectos de Agua y Saneamiento con Recursos de Regalías</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación de proyectos con regalías y MGA Web: cómo no perder el cupo</span>
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
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos como soporte técnico obligatorio al SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico para proyectos de inversión pública y SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/acueducto-alcantarillado" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto y saneamiento básico — entregable técnico del proyecto SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/ambiental" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Permisos ambientales y CAR para proyectos de infraestructura hídrica</span>
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
            ¿Su municipio tiene regalías sin formular?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Cuéntenos el sector (agua, saneamiento, riesgo), el monto disponible y la fecha del
            próximo OCAD. Le enviamos propuesta de honorarios y plan de trabajo en 24 horas.
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
const WA_MSG = encodeURIComponent('Hola, necesito formular un proyecto para regalías SGR. ¿Pueden asesorarme sobre el proceso y el costo?')

const seoConfig = {
  title: 'Formulación Proyectos Regalías SGR — MGA Web y OCAD Colombia | BIC',
  description: 'BIC formula proyectos de inversión para el Sistema General de Regalías (SGR) en MGA Web Colombia: acueductos, alcantarillados, gestión del riesgo. BPIN, OCAD, Decreto 1082/2015. Municipios de toda Colombia. Cotización en 24 horas.',
  keywords: [
    'formulación proyectos regalías Colombia',
    'MGA Web Colombia',
    'banco de proyectos OCAD Colombia',
    'proyectos SGR Colombia',
    'formulación BPIN Colombia',
    'proyectos regalías acueducto Colombia',
    'MGA Web agua potable saneamiento',
    'OCAD municipal departamental Colombia',
    'formulación proyectos alcaldías Colombia',
    'SGR agua saneamiento municipios',
    'DNP MGA Web formulación 2025',
    'proyectos regalías gestión riesgo',
    'BPIN proyectos inversión Colombia',
    'Gesproy SGR seguimiento',
    'formulación proyectos ESP Colombia',
    'regalías directas municipios Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/regalias-mga',
}

const TIPOS = [
  {
    icon: '🔬',
    tipo: 'Diagnóstico y Prefactibilidad del Proyecto',
    subtitulo: 'El punto de partida: ¿es elegible y viable?',
    desc: 'Antes de invertir tiempo en la MGA Web, hay que asegurarse de que el proyecto es elegible para el SGR, que la necesidad está bien documentada y que la solución propuesta es técnica y financieramente viable. BIC realiza el diagnóstico de necesidad con trabajo de campo: visita las instalaciones existentes (acueducto, alcantarillado, vía), mide el déficit real del servicio (cobertura, continuidad, calidad del agua por IRCA, estado estructural de la infraestructura), identifica la población afectada con datos del DANE y proyecta la demanda futura. Con este diagnóstico se determina si el proyecto es costo-eficiente (indicador clave para el DNP), si el monto es coherente con los precios de referencia del sector y si el municipio tiene la capacidad institucional para ejecutarlo.',
    cuando: 'Antes de iniciar la formulación MGA. Es el insumo que define el tipo de proyecto, el monto estimado y el OCAD ante el que se presenta.',
    aplica: ['Alcaldías que identificaron una necesidad pero no saben si aplica al SGR', 'Municipios con regalías directas pendientes de comprometer', 'ESP que necesitan inversión y quieren saber si pueden acceder al fondo de SGR', 'Secretarías de planeación que van a presentar al próximo OCAD'],
  },
  {
    icon: '💻',
    tipo: 'Formulación MGA Web (BPIN)',
    subtitulo: 'Registro completo del proyecto en la plataforma del DNP',
    desc: 'La MGA Web (Metodología General Ajustada) es la plataforma oficial del DNP donde se registran y evalúan todos los proyectos de inversión pública del país que buscan financiación con regalías del SGR. BIC diligencia el proyecto completo en la MGA Web: la identificación del problema central con árbol de problemas y árbol de objetivos (metodología de marco lógico); el análisis de alternativas con su comparación técnica y financiera; la preparación del proyecto con los estudios técnicos, el presupuesto detallado por componentes (inversión, operación y mantenimiento), el cronograma de ejecución y los indicadores de producto y resultado; y la evaluación del proyecto con el análisis costo-eficiencia o costo-beneficio que exige el DNP para el sector. Al finalizar, se genera el BPIN (Banco de Proyectos de Inversión Nacional) que es el código de identificación oficial del proyecto.',
    cuando: 'Una vez definida la necesidad y el tipo de proyecto, antes de presentar al OCAD. La MGA Web es el requisito mínimo para que el OCAD pueda evaluar y aprobar el proyecto.',
    aplica: ['Todo proyecto que requiera recursos del SGR debe estar en MGA Web', 'Municipios con regalías directas asignadas por la ANH o el DANE', 'Alcaldías que quieren presentar al OCAD Departamental o Municipal', 'Proyectos de agua potable, saneamiento, gestión del riesgo e infraestructura'],
  },
  {
    icon: '📐',
    tipo: 'Estructuración Técnica y Financiera',
    subtitulo: 'Diseños, presupuestos y cronograma para el expediente OCAD',
    desc: 'Un proyecto que llega al OCAD sin estudios técnicos suficientes es rechazado o viabilizado con condicionantes que retrasan la ejecución meses. BIC elabora los estudios de soporte técnico que el OCAD y el banco de proyectos del DNP exigen: estudios de preinversión (prefactibilidad o factibilidad según el monto del proyecto), diseños básicos o detallados del sistema de acueducto, alcantarillado, PTAP, PTAR u obra de gestión del riesgo (según aplique), presupuesto de obra con análisis de precios unitarios (APU) coherentes con los precios de referencia del MVCT o del INVIAS, especificaciones técnicas generales y particulares, y plan operativo de inversión (POI) con cronograma físico-financiero. Para proyectos >$3.000 millones COP, el DNP exige que los estudios sean de nivel factibilidad, con diseños detallados y presupuesto a partir de planos constructivos.',
    cuando: 'Simultáneo a la formulación MGA o después de que el diagnóstico confirme la viabilidad del proyecto. Sin estudios técnicos de soporte, el proyecto no pasa la revisión del banco de proyectos.',
    aplica: ['Proyectos de acueducto o alcantarillado con monto >$500 millones', 'Obras de reducción del riesgo (defensas fluviales, reubicaciones)', 'Proyectos de construcción de PTAP o PTAR', 'Cualquier proyecto donde el OCAD exija estudios de detalle previos a la aprobación'],
  },
  {
    icon: '🏛️',
    tipo: 'Acompañamiento ante el OCAD y Banco de Proyectos',
    subtitulo: 'Radicación, viabilización y aprobación del proyecto',
    desc: 'Formular el proyecto en la MGA Web es solo el primer paso — el proceso ante el OCAD puede tomar meses y exige atención técnica constante. BIC acompaña todas las etapas: la radicación del proyecto ante el banco de proyectos de la entidad territorial (secretaría de planeación departamental o municipal), la atención de observaciones técnicas del banco de proyectos (que revisa el proyecto antes de enviarlo al OCAD), la preparación de la presentación técnica ante el OCAD (presentación de máximo 20 minutos donde el proponente defiende el proyecto ante los miembros del OCAD: gobernación, alcaldía, corporaciones y representantes del Gobierno Nacional), la atención de los requerimientos de los delegados del DNP y del Ministerio sectorial, y la subsanación de observaciones hasta la aprobación final. BIC también acompaña el registro del proyecto aprobado en Gesproy-SGR y la elaboración de los primeros informes SSIFP (Sistema de Seguimiento a Proyectos de Inversión).',
    cuando: 'Después de que el proyecto está en MGA Web con estudios de soporte completos y ha pasado la revisión del banco de proyectos. El OCAD se reúne periódicamente (cada 2-3 meses en promedio) y los proyectos deben estar listos con al menos 4 semanas de anticipación.',
    aplica: ['Alcaldías que ya tienen el proyecto formulado pero no saben cómo navegarlo en el OCAD', 'Municipios que han tenido proyectos rechazados en OCAD anteriores', 'Secretarías de planeación con poco personal técnico para el seguimiento', 'ESP que presentan proyectos de inversión ante el OCAD Regional'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico de la necesidad y elegibilidad SGR',
    desc: 'El punto de partida es documentar bien el problema que el proyecto va a resolver — y verificar que el SGR puede financiarlo. BIC realiza el diagnóstico de necesidad con datos duros: para acueductos, mide cobertura del servicio (% de viviendas conectadas), continuidad (horas/día de servicio), calidad del agua (IRCA del SIVICAP de la Secretaría de Salud), estado de la infraestructura (edad, material de tuberías, capacidad de la PTAP vs. demanda actual). Para alcantarillado: porcentaje de viviendas sin conexión, descarga de aguas residuales sin tratar a fuentes (PSMV ante la CAR), estado de colectores. Para gestión del riesgo: eventos torrenciales o de inundación registrados en el SIMMA (SGC) y el SIGPAD (UNGRD), población en zona de amenaza alta según POMCA o estudios municipales. Con estos datos se construye el árbol de problemas que es la base de toda la MGA Web y se verifica que el proyecto cumple los criterios de elegibilidad del Acuerdo 051/2021 del OCAD de Paz y los lineamientos DNP.',
    herramientas: ['DANE (proyecciones de población y datos socioeconómicos)', 'SIVICAP-INS (calidad del agua y IRCA por municipio)', 'SIMMA-SGC y SIGPAD-UNGRD (eventos de riesgo)', 'Visita técnica de campo (inventario infraestructura existente)', 'Precios de referencia MVCT e INVIAS (validación del monto)'],
    resultado: 'Diagnóstico de necesidad cuantificado, árbol de problemas documentado, verificación de elegibilidad SGR y estimación preliminar del monto del proyecto',
  },
  {
    paso: '02',
    titulo: 'Identificación de la fuente SGR y tipo de OCAD',
    desc: 'El SGR no es un fondo único: tiene múltiples fuentes (regalías directas, Fondo de Compensación Regional, Fondo de Desarrollo Regional, Fondo de Ciencia, Tecnología e Innovación, OCAD de Paz) y múltiples órganos de decisión (OCAD Municipal, OCAD Departamental, OCAD Regional, OCAD Paz, OCAD Nacional de CTeI). Elegir la fuente incorrecta es uno de los errores más frecuentes y más costosos — puede implicar reformular todo el proyecto. BIC identifica qué fuente del SGR corresponde al municipio (basado en el monto de las asignaciones directas publicadas por el DNP y la ANH, la categoría del municipio y el sector del proyecto), qué OCAD tiene competencia para aprobarlo, cuáles son los criterios de priorización del OCAD territorial y cuándo es la próxima sesión programada. También se verifica si el proyecto puede apalancarse con otras fuentes (FINDETER, PDA, Ministerio de Vivienda, UNGRD) para aumentar el alcance.',
    herramientas: ['Sistema de información SGR (DNP — mapa de asignaciones)', 'Acuerdos OCAD vigentes (criterios de priorización por departamento)', 'Lineamientos DNP por sector (agua, saneamiento, riesgo)', 'Calendario de sesiones OCAD (publicado por Secretaría Técnica del OCAD)'],
    resultado: 'Fuente SGR identificada, OCAD competente definido, calendario del próximo ciclo OCAD, estrategia de presentación',
  },
  {
    paso: '03',
    titulo: 'Formulación en MGA Web con estudios técnicos de soporte',
    desc: 'Con el diagnóstico completo y la fuente definida, BIC formula el proyecto en la MGA Web: registra la cadena de valor del proyecto (actividades → productos → resultados → impactos), el presupuesto desagregado por componente con referencia a los precios del MVCT o INVIAS, el cronograma de ejecución con actividades de preconstrucción (licencias, permisos), construcción y puesta en marcha, los indicadores de producto (e.g., "X metros de red construida", "Y personas con acceso mejorado al agua potable"), los indicadores de gestión y resultado y el análisis de alternativas. Paralelamente BIC elabora o adapta los estudios técnicos de soporte que el banco de proyectos revisará: diseños básicos del sistema, topografía de referencia, memoria técnica descriptiva, especificaciones y APU del presupuesto. Todo debe ser coherente entre la MGA Web y los estudios — una inconsistencia entre el presupuesto del APU y el de la MGA es causal de devolución inmediata.',
    herramientas: ['MGA Web versión vigente (plataforma DNP)', 'Metodología de marco lógico (árbol problemas/objetivos, matriz de planificación)', 'APU con precios de referencia MVCT/INVIAS (sector correspondiente)', 'Diseños básicos o factibilidad según monto del proyecto'],
    resultado: 'Proyecto registrado en MGA Web con BPIN generado, estudios técnicos de soporte completos, presupuesto y cronograma coherentes',
  },
  {
    paso: '04',
    titulo: 'Revisión del banco de proyectos y atención de observaciones',
    desc: 'Antes de llegar al OCAD, el proyecto pasa por la revisión del banco de proyectos de la entidad territorial (secretaría de planeación departamental o municipal). Los revisores del banco verifican que el proyecto cumple los requisitos formales y técnicos: coherencia del diagnóstico con los indicadores de base, suficiencia de los estudios técnicos, coherencia entre el presupuesto de la MGA y el APU, pertinencia de los indicadores y metas, documentación legal del proponente. BIC atiende todos los requerimientos del banco de proyectos: elabora las respuestas técnicas con los argumentos necesarios, actualiza la MGA Web y los estudios según las observaciones, y realiza las subsanaciones en los plazos que establece el banco. Esta fase puede tomar 2-8 semanas dependiendo de la complejidad del proyecto y la capacidad del banco de proyectos territorial.',
    herramientas: ['Sistema de gestión documental del banco de proyectos territorial', 'MGA Web (actualización y versiones del proyecto)', 'Matriz de respuesta a observaciones (formato técnico)', 'Estudios técnicos actualizados según observaciones'],
    resultado: 'Proyecto con concepto de viabilidad técnica del banco de proyectos, listo para presentar al OCAD',
  },
  {
    paso: '05',
    titulo: 'Presentación ante el OCAD y aprobación',
    desc: 'La sesión del OCAD es el momento decisivo. El proponente (alcalde o su delegado) presenta el proyecto ante los miembros del OCAD: la gobernación (secretaría de planeación), la alcaldía, los representantes del Gobierno Nacional (Ministerio sectorial y DNP) y los representantes de las corporaciones autónomas regionales cuando aplica. BIC prepara la presentación técnica del proyecto (diapositivas con síntesis de diagnóstico, solución, presupuesto, indicadores e impacto esperado) y acompaña al equipo municipal en la sesión para responder las preguntas técnicas de los delegados del DNP y del Ministerio. En algunos OCAD, el delegado del DNP puede condicionar la aprobación a ajustes técnicos específicos — BIC los resuelve en tiempo real si es posible, o en el plazo que fija el OCAD. Una vez aprobado, el proyecto se registra en Gesproy-SGR y BIC acompaña la contratación y los primeros informes de ejecución.',
    herramientas: ['Presentación técnica ante el OCAD (síntesis ejecutiva del proyecto)', 'Respuesta a preguntas DNP/Ministerio sectorial en sesión', 'Gesproy-SGR (registro y seguimiento post-aprobación)', 'Informes SSIFP (seguimiento financiero y físico del proyecto)'],
    resultado: 'Acuerdo OCAD de aprobación del proyecto, registro en Gesproy-SGR, proyecto listo para contratar',
  },
]

const FAQ = [
  {
    q: '¿Qué tipos de proyectos se pueden financiar con regalías del SGR?',
    a: 'El Sistema General de Regalías (SGR) financia proyectos de inversión pública en todos los sectores — no solo agua y saneamiento. Los sectores más frecuentes en municipios pequeños son: agua potable y saneamiento básico (construcción, ampliación y mejoramiento de acueductos, alcantarillados, PTAP y PTAR); gestión del riesgo de desastres (obras de mitigación, reubicación de viviendas en zona de riesgo no mitigable, planes municipales de gestión del riesgo); vías terciarias y secundarias (pavimentación, mejoramiento, puentes); deporte e infraestructura; salud y educación. La Ley 1530/2012 y sus modificaciones (Acto Legislativo 05/2019) definen las destinaciones permitidas por fuente. Lo que no puede financiarse con regalías son gastos de funcionamiento del municipio, pago de deudas o proyectos que ya tienen financiación de otra fuente para el mismo objeto.',
  },
  {
    q: '¿Qué es la MGA Web y cómo funciona?',
    a: 'La MGA Web (Metodología General Ajustada versión Web) es la plataforma en línea del DNP donde todos los proyectos de inversión pública en Colombia deben registrarse para ser financiados con recursos del Presupuesto General de la Nación, el SGR o el Sistema General de Participaciones (SGP). En la MGA Web se documenta el proyecto siguiendo la metodología de marco lógico: el problema central que se va a resolver (con árbol de causas y efectos), el objetivo del proyecto (árbol de medios y fines), las alternativas de solución evaluadas, la alternativa seleccionada con su justificación técnica y financiera, el presupuesto desagregado, el cronograma, los indicadores de producto y resultado y el análisis costo-eficiencia o costo-beneficio. Al registrar el proyecto, la plataforma genera el BPIN (código del banco de proyectos), que es el identificador único que acompaña el proyecto durante toda su vida en el SGR. Sin BPIN no hay aprobación en el OCAD.',
  },
  {
    q: '¿Cuánto cuesta la formulación de un proyecto para el SGR?',
    a: 'El costo de la formulación depende del monto del proyecto, del sector y de si BIC debe elaborar también los estudios técnicos de soporte (diseños, topografía, análisis de laboratorio) o solo la formulación MGA Web con estudios que el municipio ya tiene. Para un proyecto de acueducto o alcantarillado de $500 millones a $2.000 millones COP, la formulación MGA Web con estudios básicos de soporte oscila entre $12.000.000 y $30.000.000 COP. Para proyectos de $2.000 millones a $5.000 millones con diseños de factibilidad, el costo puede estar entre $30.000.000 y $70.000.000 COP. Para proyectos mayores, el costo se cotiza por componente. BIC envía propuesta detallada en 24 horas sin costo y sin compromiso.',
  },
  {
    q: '¿Cuánto tarda el proceso completo desde la formulación hasta la aprobación del OCAD?',
    a: 'El tiempo total depende de tres variables: el tiempo de formulación y elaboración de estudios (6-12 semanas para un proyecto mediano), el tiempo de revisión del banco de proyectos (2-8 semanas según la corporación territorial) y la periodicidad de las sesiones del OCAD (en promedio cada 2-3 meses, aunque hay OCAD que se reúnen mensualmente y otros con menor frecuencia). En un escenario favorable donde todo está listo y el próximo OCAD es próximo, el proceso puede tomar 4-6 meses desde el inicio de la formulación. En un escenario con múltiples rondas de observaciones y un OCAD de poca frecuencia, puede tomar 12-18 meses. BIC trabaja alineado con el calendario del OCAD: si hay un OCAD en 8 semanas, planificamos para que el proyecto esté listo para esa sesión.',
  },
  {
    q: '¿Qué municipios pueden acceder al Sistema General de Regalías?',
    a: 'Todos los municipios de Colombia tienen acceso al SGR, aunque con diferentes fuentes y montos. Los municipios productores de petróleo, gas o carbón reciben regalías directas proporcionales a su producción. Los municipios no productores y los portuarios acceden al Fondo de Compensación Regional (para municipios con NBI alto) y al Fondo de Desarrollo Regional (para proyectos de impacto regional). El OCAD de Paz tiene recursos específicos para los municipios más afectados por el conflicto armado (PDET). Adicionalmente, desde 2020 el 7% de las regalías se destina al Fondo de Ciencia, Tecnología e Innovación (CTeI) a través del OCAD-Paz y el OCAD CTeI. BIC verifica cuáles son las asignaciones vigentes del municipio en el Sistema de Información del SGR (siDNP) antes de definir la estrategia de formulación.',
  },
  {
    q: '¿Qué pasa si el proyecto no es viabilizado por el OCAD?',
    a: 'Si el OCAD no aprueba el proyecto, existen tres posibilidades: que el OCAD apruebe con condicionantes técnicos (el proponente debe subsanar las observaciones en el plazo que fije el OCAD y volver a presentar), que el OCAD no apruebe y devuelva el proyecto (en este caso se puede reformular y presentar al siguiente ciclo), o que el OCAD no lo considere elegible (en cuyo caso puede reformularse con otra fuente o para otro OCAD). La no aprobación en primera instancia no es infrecuente — en proyectos complejos, una o dos rondas de ajustes son parte del proceso normal. BIC acompaña las subsanaciones y la reformulación sin costo adicional si el rechazo es por observaciones técnicas que se pudieron haber previsto en la formulación. La clave es presentar proyectos bien fundamentados desde el inicio para minimizar este riesgo.',
  },
  {
    q: '¿BIC formula proyectos de acueducto y alcantarillado con regalías?',
    a: 'Sí, es el sector donde BIC tiene mayor experiencia acumulada. Los proyectos de agua potable y saneamiento básico (sector AP-SB) son los más frecuentes en el SGR para municipios pequeños y medianos, y BIC los formula con los estudios técnicos de soporte que el MVCT y el DNP exigen: diagnóstico del sistema existente con cálculo del IRCA, diseño del sistema propuesto (bocatoma, PTAP, red de distribución para acueductos; colectores, PTAR para alcantarillados) según el RAS 2017 y la Resolución 0330/2017, análisis costo-eficiencia con el indicador costo por persona beneficiada que el DNP compara con los rangos sectoriales de referencia. BIC realiza tanto los diseños técnicos del sistema como la formulación MGA, garantizando coherencia total entre los estudios y el registro en la plataforma.',
  },
  {
    q: '¿BIC formula proyectos en municipios de todo Colombia?',
    a: 'Sí. BIC opera en todo el territorio nacional. La mayor parte del trabajo de formulación (diagnóstico de necesidades, formulación MGA Web, análisis financiero) se puede hacer de forma remota con información oficial del DANE, el SIVICAP, el SIMMA y el sistema de información del SGR del DNP. Para el componente de estudios técnicos de campo (topografía, caracterización de la fuente de agua, levantamiento de la infraestructura existente), BIC coordina visitas técnicas a la zona o trabaja con profesionales locales certificados bajo su supervisión directa. BIC tiene experiencia en proyectos formulados en municipios de Caldas, Risaralda, Quindío, Boyacá, Santander, Casanare, Nariño y la región Caribe — en contextos tan distintos como municipios cafeteros de montaña y municipios ganaderos de llanura.',
  },
]

const CLIENTES = [
  { tipo: 'Alcaldías con regalías directas', desc: 'Municipios productores o con asignaciones del Fondo de Compensación Regional que necesitan formular proyectos para comprometer los recursos antes de que el OCAD los redistribuya.' },
  { tipo: 'Secretarías de planeación municipal', desc: 'Equipos técnicos municipales con poca capacidad para formular proyectos complejos en la MGA Web o para estructurar los estudios técnicos de soporte que exige el banco de proyectos.' },
  { tipo: 'Gobernaciones y proyectos regionales', desc: 'Sistemas regionales de acueducto o saneamiento que requieren formulación en el OCAD Departamental con estudios de factibilidad completos.' },
  { tipo: 'Empresas de servicios públicos (ESP)', desc: 'ESP rurales o municipales que necesitan formulación de proyectos de inversión para mejoramiento o ampliación de sus sistemas de agua o saneamiento con recursos SGR.' },
  { tipo: 'Municipios PDET y zonas de paz', desc: 'Municipios priorizados en el OCAD de Paz con acceso a recursos adicionales del SGR para proyectos de agua, saneamiento y gestión del riesgo.' },
  { tipo: 'Entidades con proyectos rechazados', desc: 'Alcaldías cuyos proyectos fueron rechazados o devueltos por el OCAD en ciclos anteriores y que necesitan reformulación con soporte técnico especializado.' },
]

const NORMATIVA = [
  { codigo: 'Ley 1530/2012', descripcion: 'Ley del Sistema General de Regalías — define las fuentes, los fondos, los OCAD y las reglas de distribución de los recursos de regalías en Colombia' },
  { codigo: 'Acto Legislativo 05/2019', descripcion: 'Reforma constitucional al SGR — amplía destinos, crea el OCAD de Paz y modifica las reglas de distribución entre las fuentes del SGR' },
  { codigo: 'Decreto 1082/2015', descripcion: 'DUR del Sector de Planeación Nacional — compila la reglamentación del SGR, incluyendo el proceso de formulación y aprobación de proyectos' },
  { codigo: 'MGA Web versión vigente', descripcion: 'Plataforma del DNP — metodología de formulación y evaluación de proyectos de inversión pública para el SGR y el PGN' },
  { codigo: 'Resolución OCAD regional vigente', descripcion: 'Cada OCAD emite acuerdos que definen criterios de priorización, requisitos técnicos y calendarios de sesiones para su jurisdicción' },
  { codigo: 'Lineamientos DNP por sector', descripcion: 'El DNP publica precios de referencia, indicadores de costo-eficiencia y guías técnicas sectoriales (agua potable, saneamiento, gestión del riesgo) para validar los proyectos' },
]

export default function ServicioRegaliasMga() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #162447 55%, #1F3272 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Proyectos de inversión · SGR Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Formulación de Proyectos de Regalías SGR en Colombia
          </h1>
          <p style={{ color: '#FFB627', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            MGA Web, BPIN, OCAD — formulación completa con estudios técnicos de soporte para agua, saneamiento y gestión del riesgo
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores formula proyectos de inversión para el Sistema General de
            Regalías (SGR) en la plataforma MGA Web del DNP: acueductos, alcantarillados, plantas de
            tratamiento, defensas fluviales y gestión del riesgo hídrico. BIC realiza el diagnóstico de
            necesidad, elabora los estudios técnicos de soporte, registra el proyecto en la MGA Web y
            acompaña el proceso ante el banco de proyectos y el OCAD hasta la aprobación del acuerdo de financiación.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar formulación SGR</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['MGA Web','BPIN','OCAD','Gesproy-SGR','Ley 1530/2012','DNP','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(255,182,39,0.15)', color: '#FFD17A', border: '1px solid rgba(255,182,39,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f8f5e9', borderBottom: '1px solid #e8d8a0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+30', label: 'proyectos aprobados por OCAD en Colombia' },
              { num: 'Nacional', label: 'cobertura: todos los OCAD y departamentos' },
              { num: 'MGA Web', label: 'formulación con estudios técnicos de soporte' },
              { num: 'COPNIA', label: 'firma vigente — estudios que supera la revisión DNP' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#0D1B3E', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE SERVICIO ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué servicio de formulación necesita su municipio?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El alcance del servicio depende de en qué etapa está el proyecto: si es una idea nueva
            que hay que evaluar y formular desde cero, o si ya tiene estudios técnicos y solo necesita
            la formulación MGA y el acompañamiento ante el OCAD. BIC hace el diagnóstico inicial sin costo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #FFB627',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0D1B3E', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#C88B00', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#fdf8ec', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#7A5900', marginBottom: 4 }}>CUÁNDO SE USA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>APLICA PARA</p>
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
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo lleva BIC un proyecto desde la idea hasta el acuerdo OCAD
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el diagnóstico de la necesidad hasta el registro en Gesproy-SGR.
            Cada proyecto BIC cumple con la Ley 1530/2012, el Decreto 1082/2015, los lineamientos
            sectoriales del DNP y los criterios de priorización del OCAD territorial.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FFB627, #D4900A)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e8d8a0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#0D1B3E' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#fdf8ec', borderRadius: 8, padding: '10px 14px', border: '1px solid #e8d8a0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#7A5900', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #0D1B3E, #1F3272)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Su municipio tiene regalías sin formular?</p>
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
            Clientes que formulan proyectos SGR con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con municipios, gobernaciones y ESP en todo Colombia que necesitan
            formular proyectos para el SGR de forma sólida — proyectos que superen la revisión
            técnica del banco de proyectos y sean aprobados en el OCAD sin reprocesos costosos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#fdf8ec', border: '1px solid #e8d8a0', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #FFB627',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0D1B3E', marginBottom: 6 }}>{c.tipo}</h3>
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
            Normativa del Sistema General de Regalías en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC formula cada proyecto bajo el marco normativo del SGR vigente. Conocer las reglas
            del sistema evita rechazos por el banco de proyectos y los delegados del DNP en el OCAD.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#0D1B3E', color: '#fff', borderRadius: 6,
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
            Otros servicios técnicos de BIC para proyectos SGR
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de acueductos y PTAP', href: '/servicios/diseno-acueductos' },
              { label: 'Estudios ambientales y licencia ambiental', href: '/servicios/ambiental' },
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Estudios de torrencialidad y riesgo', href: '/estudios-torrencialidad-colombia' },
              { label: 'Encauzamiento de ríos y quebradas', href: '/encauzamiento-rios-colombia' },
              { label: 'Ingeniería hidráulica Colombia', href: '/ingenieria-hidraulica-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#fdf8ec', border: '1px solid #e8d8a0',
                borderRadius: 10, padding: '14px 18px', color: '#0D1B3E',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5e9c0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fdf8ec')}
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
            Todo lo que necesita saber sobre proyectos de regalías SGR
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen alcaldías, secretarías de
            planeación y ESP antes de contratar la formulación de un proyecto para el SGR.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#0D1B3E', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #0D1B3E 0%, #1F3272 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏛️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita formular un proyecto<br />para regalías SGR en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el sector del proyecto (agua, saneamiento, riesgo, vías),
            el municipio, el monto estimado disponible y el OCAD ante el que va a presentar.
          </p>
          <p style={{ color: '#FFD17A', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
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
