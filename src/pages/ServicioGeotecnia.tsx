import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Estudio Geotécnico / Estudio de Suelos. ¿Me pueden asesorar sobre el alcance y el costo?')

const seoConfig = {
  title: 'Estudios Geotécnicos Colombia 2026 — Desde $8M | NSR-10 Título H | BIC',
  description: 'Estudios geotécnicos y de suelos en Colombia desde $8M COP: capacidad portante, estabilidad de taludes, SPT, NSR-10 Título H — Categorías Baja, Media y Alta. Firma COPNIA. Propuesta en 24 horas. Eje Cafetero y todo el país.',
  keywords: [
    'estudios geotécnicos Colombia',
    'estudio de suelos Colombia',
    'capacidad portante suelo',
    'estabilidad de taludes Colombia',
    'NSR-10 Título H',
    'exploración del subsuelo Colombia',
    'ensayos geotécnicos Colombia',
    'estudio geotécnico constructoras',
    'estudio suelos licencia construcción',
    'geotecnia Eje Cafetero',
    'análisis de asentamientos',
    'SPT Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/geotecnia',
}

const FAQ_GEO = [
  { q: '¿Cuánto cuesta un estudio geotécnico en Colombia en 2026?', a: 'El costo depende de la categoría NSR-10 y del tamaño del proyecto. Para una vivienda unifamiliar o edificio hasta 5 pisos (Cat. Baja o Media), un estudio básico con apiques y laboratorio oscila entre $8M y $20M COP. Para edificios de 6–12 pisos o conjuntos con sótano, el rango sube a $20M–$45M COP. Para proyectos de Categoría Alta (>12 pisos, centros comerciales, hoteles) con exploración profunda, geofísica y diseño de pilotes, el rango es $80M–$120M COP. BIC envía propuesta detallada en menos de 24 horas sin costo.' },
  { q: '¿Cuándo es obligatorio el estudio de suelos para licencia de construcción?', a: 'En Colombia es obligatorio para toda edificación que requiera licencia de construcción ante la curaduría urbana (NSR-10 Título H). Para viviendas unifamiliares en zonas de amenaza sísmica baja puede aplicarse el procedimiento simplificado. Para edificios de más de 2 pisos, proyectos de más de 500 m², o predios en zonas de ladera o amenaza sísmica media-alta, el estudio geotécnico completo es siempre exigido.' },
  { q: '¿Qué diferencia hay entre Categoría Baja, Media y Alta en la NSR-10?', a: 'La NSR-10 clasifica las edificaciones según su altura, uso y zona sísmica. Categoría Baja: hasta 2 pisos en zonas de amenaza baja. Categoría Media: edificios hasta 5 pisos o usos especiales. Categoría Alta: edificios de 6 o más pisos, centros comerciales, hospitales, hoteles o cualquier edificación en zona de amenaza sísmica alta independiente de su altura. La categoría define la profundidad de exploración, el número de sondeos y los ensayos de laboratorio requeridos.' },
  { q: '¿Cuánto tiempo toma un estudio geotécnico?', a: 'Para proyectos de Categoría Baja o Media, el tiempo total (campo + laboratorio + informe) es de 3 a 5 semanas. Para Categoría Alta con exploración profunda y geofísica, el proceso completo toma entre 6 y 10 semanas. BIC coordina directamente con el operador de campo y el laboratorio para optimizar tiempos sin sacrificar calidad.' },
]

const INCLUYE = [
  { icon: '🔩', titulo: 'Exploración del subsuelo', desc: 'Programación y supervisión de sondeos de penetración estándar (SPT), apiques, perforaciones con recuperación de muestras inalteradas y ensayos de penetración estática (CPT) según la NSR-10 Título H y el NSR-10 A.10.' },
  { icon: '🧪', titulo: 'Ensayos de laboratorio geotécnico', desc: 'Interpretación de ensayos sobre muestras: clasificación USCS, límites de Atterberg, granulometría, humedad natural, densidad, compresión simple, consolidación y corte directo. Correlaciones empíricas con parámetros de diseño.' },
  { icon: '🏗️', titulo: 'Capacidad portante y diseño de cimentaciones', desc: 'Cálculo de la capacidad portante admisible del suelo. Recomendación del tipo de cimentación (superficial o profunda), presiones de diseño, asentamientos diferenciales y medidas de mejoramiento. Cumplimiento NSR-10 Título H.' },
  { icon: '⛰️', titulo: 'Análisis de estabilidad de taludes', desc: 'Evaluación de la estabilidad de cortes y terraplenes mediante métodos de equilibrio límite (Bishop, Morgenstern-Price, Spencer). Determinación del factor de seguridad estático y seudoestático. Propuesta de obras de estabilización.' },
  { icon: '🌊', titulo: 'Geotecnia para obras hidráulicas', desc: 'Estudios geotécnicos específicos para diques, presas de tierra, canales, defensas fluviales y obras de control de erosión. Análisis de filtraciones, tubificación y estabilidad hidráulica de terraplenes.' },
  { icon: '📋', titulo: 'Informe geotécnico completo', desc: 'Informe técnico con descripción del subsuelo, resultados de ensayos, parámetros de diseño, recomendaciones de cimentación, modelo geotécnico y conclusiones. Firmado por especialista para trámite de licencia de construcción.' },
]

const PARA_QUIEN = [
  { tipo: 'Constructoras y promotores de vivienda', desc: 'Estudio de suelos obligatorio para trámite de licencia de construcción ante la curaduría urbana. Recomendación de cimentación para edificios de hasta 5 pisos y proyectos mayores con NSR-10 Título H.' },
  { tipo: 'Alcaldías y entidades públicas', desc: 'Estudios geotécnicos para diseño de obras de infraestructura: alcantarillados profundos, defensas fluviales, accesos viales y equipamientos municipales sobre suelos blandos o en zonas de ladera.' },
  { tipo: 'Empresas de infraestructura e industria', desc: 'Geotecnia para plantas industriales, bodegas, tanques de almacenamiento, redes de servicios enterradas y cimentaciones de maquinaria pesada o estructuras especiales.' },
  { tipo: 'Interventores y revisores técnicos', desc: 'Revisión de estudios geotécnicos presentados por contratistas. Verificación de la exploración mínima requerida, ensayos realizados y parámetros utilizados en el diseño de cimentaciones.' },
]

export default function ServicioGeotecnia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Estudios Geotécnicos y de Suelos — NSR-10 Título H"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/geotecnia"
        faqItems={FAQ_GEO}
        priceSpecification={[
          { name: 'Estudio geotécnico Cat. Baja/Media (hasta 5 pisos)', minPrice: 8000000, maxPrice: 20000000, description: 'Apiques, laboratorio básico, capacidad portante, cimentación superficial' },
          { name: 'Estudio geotécnico Cat. Media-Alta (6–12 pisos)', minPrice: 20000000, maxPrice: 45000000, description: 'SPT, laboratorio completo, asentamientos, diseño de cimentación' },
          { name: 'Estudio geotécnico Cat. Alta (>12 pisos / comercial)', minPrice: 80000000, maxPrice: 120000000, description: 'SPT/barreno, geofísica MASW/SEV, triaxiales, diseño de pilotes y muros' },
        ]}
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
            Estudios Geotécnicos y de Suelos<br />
            <span style={{ color: '#17A2B8' }}>para Constructoras, Municipios y Obras en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios geotécnicos y de suelos para proyectos
            de construcción, obras hidráulicas e infraestructura en Colombia. Supervisamos sondeos
            SPT, interpretamos ensayos de laboratorio, calculamos capacidad portante, analizamos
            estabilidad de taludes y recomendamos soluciones de cimentación bajo la NSR-10 Título H.
            Nuestros informes geotécnicos están firmados por especialista con COPNIA vigente y están
            diseñados para superar la revisión técnica de curadurías urbanas, supervisores de obra y
            entidades financiadoras. Rogerio Bernal Ríos, Especialista en Ingeniería Hidráulica y
            Ambiental (UNAL), integra la geotecnia con la hidráulica fluvial en proyectos donde el
            comportamiento del suelo es crítico: zonas de ladera, suelos blandos y cauces activos.
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
          {['NSR-10 Título H', 'ASTM', 'INVIAS', 'SPT / CPT', 'Bishop / Spencer'].map(t => (
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
          }}>¿Qué incluye el estudio geotécnico?</h2>
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
            ¿Cuánto cuesta un estudio geotécnico en Colombia?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 20 }}>
            {[
              { cat: 'Cat. Baja / Media', sub: 'Hasta 5 pisos · Vivienda', precio: '$8M – $20M COP', detalle: 'Apiques, SPT básico, laboratorio estándar, capacidad portante, cimentación superficial.' },
              { cat: 'Cat. Media / Alta', sub: '6–12 pisos · Conjuntos', precio: '$20M – $45M COP', detalle: 'SPT profundo, laboratorio completo, asentamientos, diseño de cimentación profunda.' },
              { cat: 'Cat. Alta', sub: '>12 pisos · Comercial · SGR', precio: '$80M – $120M COP', detalle: 'Barreno, MASW, SEV, triaxiales CU, análisis sísmico, diseño pilotes y muros.' },
            ].map(r => (
              <div key={r.cat} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderTop: '3px solid #17A2B8', borderRadius: 4, padding: '20px 22px' }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33', fontSize: 13, marginBottom: 2 }}>{r.cat}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 12, marginBottom: 12 }}>{r.sub}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#17A2B8', fontSize: 20, marginBottom: 10 }}>{r.precio}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{r.detalle}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#64748B', fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
            Rangos referenciales. El precio exacto depende de la categoría NSR-10, el número de sondeos requeridos, la profundidad de exploración y la complejidad del proyecto. <strong>BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.</strong>
          </p>
          <div style={{ marginTop: 20 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Solicitar cotización gratuita en 24 h</Btn>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section bg="#F8FAFC" style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33', fontSize: 'clamp(22px, 4vw, 30px)', marginBottom: 8 }}>
            Preguntas frecuentes sobre estudios geotécnicos
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQ_GEO.map((faq, i) => (
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
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: 'Rogerio Bernal Ríos integra la geotecnia con la ingeniería hidráulica y la gestión del riesgo: fundamental para proyectos en zonas de ladera, cauces y amenaza torrencial. COPNIA 17202-313228.' },
              { icon: '🌊', titulo: 'Geotecnia + hidráulica en un solo consultor', desc: 'BIC combina el estudio geotécnico con análisis hidrológico e hidráulico, eliminando inconsistencias entre disciplinas y reduciendo costos de coordinación para el cliente.' },
              { icon: '📜', titulo: 'COPNIA vigente — firma profesional válida', desc: 'Todos los informes geotécnicos firmados por profesional legalmente habilitado. Válido para curadurías, INVÍAS, gobernaciones y cualquier entidad territorial o financiadora.' },
              { icon: '⚡', titulo: 'Propuesta en 24 horas', desc: 'Respuesta directa del director técnico. Planificación de campo coordinada con laboratorios aliados en el Eje Cafetero y otras regiones del país.' },
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
            <a href="/blog/riesgo-hidraulico-ciudades-densas" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Riesgo Hidráulico en Ciudades Densas: Estrategias Técnicas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/cambios-normativos-ingenieria-hidraulica-2026" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cambios Normativos en Ingeniería Hidráulica 2026</span>
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
            <a href="/servicios/modelacion-hec-ras" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Modelación HEC-RAS 2D para socavación local y estabilidad de orillas</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos complementarios para análisis de filtración y tubificación</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/gestion-riesgo-hidrico" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Gestión del riesgo hídrico en zonas de ladera y torrencialidad</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/interventoria" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Interventoría técnica de obras hidráulicas y civiles en suelos blandos</span>
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
            ¿Su proyecto necesita estudio de suelos?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Compártanos el tipo de obra, el área del terreno y el municipio de ubicación.
            Le enviamos propuesta técnica y económica en menos de 24 horas.
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
