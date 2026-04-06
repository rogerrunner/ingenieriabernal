import { useState } from 'react'
import { Link } from 'wouter'
import { BlueprintBg, Tag, ThinLine, SectionLabel, Btn, Section, useInView } from '../components/ui'
import SEOHead from '../components/SEOHead'

const seoConfig = {
  title: 'Blog de Ingeniería Hidráulica en Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Artículos técnicos sobre normativa hidráulica, costos de obra, modelación HEC-RAS 2D, SUDS y formulación de proyectos de regalías para municipios colombianos. Guías para ingenieros, alcaldes y constructoras del Eje Cafetero.',
  keywords: ['blog ingeniería hidráulica Colombia', 'artículos técnicos hidráulica', 'normativa RAS 2017', 'HEC-RAS 2D Colombia', 'regalías agua potable municipios'],
  canonical: 'https://www.ingenieriabernal.co/blog',
}

const POSTS = [
    {
          slug: 'suds-sistemas-drenaje-sostenible-colombia',
              title: 'SUDS en Colombia: Drenaje Sostenible para Ciudades de Montaña',
                  excerpt: 'Cómo los Sistemas Urbanos de Drenaje Sostenible (SUDS) reducen inundaciones en ciudades colombianas de montaña. Marco normativo vigente, tipologías aplicables y casos reales en el Eje Cafetero.',
                      category: 'Riesgo Hídrico',
                          date: 'Marzo 2026',
                              readTime: '8 min',
                                  color: '#0077B6',
                                    },
                                    {
    slug: 'cambios-normativos-ingenieria-hidraulica-2026',
    title: 'Cambios Normativos en Ingeniería Hidráulica 2026: Oportunidades para Consultores',
    excerpt: 'Análisis de las actualizaciones recientes a la Resolución 0330/2017 y el RAS 2017, y cómo impactan los proyectos de acueducto y saneamiento en Colombia.',
    category: 'Normativa',
    date: 'Febrero 2026',
    readTime: '7 min',
    color: '#17A2B8',
  },
  {
    slug: 'costos-obras-hidraulicas-colombia-2026',
    title: 'Costos de Obras Hidráulicas en Colombia 2026: APU y Tendencias del Mercado',
    excerpt: 'Análisis de precios unitarios actualizados para obras hidrosanitarias, redes CI y estructuras hidráulicas en el Eje Cafetero y Colombia en general.',
    category: 'Costos y presupuestos',
    date: 'Enero 2026',
    readTime: '9 min',
    color: '#003B6F',
  },
  {
    slug: 'riesgo-hidraulico-ciudades-densas',
    title: 'Riesgo Hidráulico en Ciudades Densas: Oportunidad para Desarrollos Sostenibles',
    excerpt: 'Cómo la correcta evaluación del riesgo por inundación transforma proyectos urbanísticos inviables en desarrollos sostenibles y económicamente rentables.',
    category: 'Riesgo Hídrico',
    date: 'Diciembre 2025',
    readTime: '8 min',
    color: '#E63946',
  },
  {
    slug: 'hec-ras-2d-colombia',
    title: 'HEC-RAS 2D en Colombia: Guía Práctica para Consultores Hidráulicos',
    excerpt: 'Paso a paso para implementar modelación HEC-RAS 2D en estudios de amenaza por inundación requeridos por el Decreto 1807/2014 y licencias urbanísticas.',
    category: 'Software y Modelación',
    date: 'Noviembre 2025',
    readTime: '11 min',
    color: '#0077B6',
  },
  {
    slug: 'proyectos-regalias-agua-saneamiento',
    title: 'Cómo Formular Proyectos de Agua y Saneamiento con Recursos de Regalías',
    excerpt: 'Guía completa para la formulación en MGA-Web (DNP) de proyectos de inversión en agua potable y saneamiento básico para municipios colombianos.',
    category: 'Sector Público',
    date: 'Octubre 2025',
    readTime: '12 min',
    color: '#7B2D8B',
  },
  {
    slug: 'nsr-10-sistemas-contra-incendios',
    title: 'NSR-10 Capítulos J y K: Todo sobre Sistemas Contra Incendios en Colombia',
    excerpt: 'Guía técnica completa sobre los requisitos NSR-10 para sistemas de protección contra incendios en edificaciones colombianas. NTC 1500, 1669 y 2301.',
    category: 'Contra Incendios',
    date: 'Septiembre 2025',
    readTime: '10 min',
    color: '#B5451B',
  },
  {
    slug: 'irca-municipio-colombia',
    title: 'Cómo bajar el IRCA de un municipio en Colombia: guía técnica para alcaldes y ESP',
    excerpt: 'Qué es el IRCA, por qué sube, cuáles son las causas más comunes en municipios colombianos y qué pasos concretos puede tomar para reducirlo con respaldo normativo.',
    category: 'Agua y Saneamiento',
    date: 'Abril 2026',
    readTime: '10 min',
    color: '#0077B6',
  },
  {
    slug: 'mga-web-regalias-agua-potable',
    title: 'Formulación de proyectos de agua potable con regalías y MGA Web: cómo no perder el cupo',
    excerpt: 'Guía práctica para alcaldes, secretarios de planeación y gestores del SGR sobre cómo formular proyectos de acueducto en la MGA Web sin cometer los errores que hacen devolver los proyectos.',
    category: 'Regalías SGR',
    date: 'Abril 2026',
    readTime: '11 min',
    color: '#7B2D8B',
  },
  {
    slug: 'hec-ras-2d-modelacion-hidraulica-colombia',
    title: 'Contratar modelación hidráulica HEC-RAS 2D en Colombia: qué debe exigirle a su consultor',
    excerpt: 'Guía técnica para constructoras, promotores e ingenieros sobre qué es la modelación HEC-RAS 2D, cuándo es obligatoria en Colombia y qué debe incluir un modelo bien hecho.',
    category: 'Software y Modelación',
    date: 'Abril 2026',
    readTime: '12 min',
    color: '#17A2B8',
  },
]

export default function Blog() {
  const [cat, setCat] = useState('Todos')
  const { ref, inView } = useInView(0.05)

  const cats = ['Todos', ...Array.from(new Set(POSTS.map(p => p.category)))]
  const filtered = cat === 'Todos' ? POSTS : POSTS.filter(p => p.category === cat)

  return (
    <>
      <SEOHead config={seoConfig} />
      <section style={{ background: '#003B6F', padding: '120px 40px 64px', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div className="container" style={{ position: 'relative' }}>
          <SectionLabel>Blog técnico</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(30px, 4.5vw, 52px)', lineHeight: 1.15 }}>
            Ingeniería hidráulica<br /><span style={{ color: '#17A2B8' }}>aplicada y actualizada.</span>
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 16, marginTop: 20, maxWidth: 540, lineHeight: 1.75 }}>
            Artículos técnicos sobre normativa, software de modelación, costos de obra y gestión de proyectos hidráulicos en Colombia.
          </p>
        </div>
      </section>

      <section ref={ref} style={{ background: '#F8FAFC', padding: '64px 40px' }}>
        <div className="container">
          {/* Filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '7px 16px', borderRadius: 2, cursor: 'pointer',
                border: `1px solid ${cat === c ? '#17A2B8' : '#E2E8F0'}`,
                background: cat === c ? '#17A2B8' : '#fff',
                color: cat === c ? '#fff' : '#475569',
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12,
                transition: 'all 0.2s',
              }}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {cat === 'Todos' && (
            <div style={{
              background: POSTS[0].color, borderRadius: 4, padding: '40px 44px',
              marginBottom: 32, position: 'relative', overflow: 'hidden',
              opacity: inView ? 1 : 0,
              animation: inView ? 'fadeSlideUp 0.55s ease forwards' : 'none',
            }}>
              <BlueprintBg opacity={0.1} />
              <div style={{ position: 'relative', maxWidth: 680 }}>
                <Tag style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>Artículo destacado</Tag>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 28, marginTop: 14, lineHeight: 1.3 }}>
                  {POSTS[0].title}
                </h2>
                <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: 15, marginTop: 14, lineHeight: 1.7 }}>
                  {POSTS[0].excerpt}
                </p>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 24 }}>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
                    {POSTS[0].date} · {POSTS[0].readTime} de lectura
                  </span>
                  <button style={{
                    background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 2, padding: '8px 18px', cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: '#fff',
                  }}>
                    Leer artículo → <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>(próximamente)</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.slice(cat === 'Todos' ? 1 : 0).map((p, i) => (
              <Link href={`/blog/${p.slug}`} style={{ textDecoration: "none", display: "block" }}><div key={p.slug} style={{
                background: '#fff', borderRadius: 4, overflow: 'hidden',
                border: '1px solid #E2E8F0', transition: 'all 0.25s ease',
                opacity: inView ? 1 : 0,
                animation: inView ? `fadeSlideUp 0.5s ease ${i * 0.08}s forwards` : 'none',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,59,111,0.09)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ height: 6, background: p.color }} />
                <div style={{ padding: '20px' }}>
                  <Tag style={{ background: p.color + '1A', color: p.color, border: '1px solid ' + p.color + '44' }}>{p.category}</Tag>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 17, marginTop: 12, lineHeight: 1.35 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: '#475569', marginTop: 10, lineHeight: 1.65 }}>
                    {p.excerpt.slice(0, 110)}...
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 14, borderTop: '1px solid #F1F5F9' }}>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 11, color: '#94A3B8' }}>
                      {p.date} · {p.readTime}
                    </span>
                    <button style={{
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: 12, color: p.color,
                    }}>
                      Leer →
                    </button>
                  </div>
                </div>
              </div></Link>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#94A3B8', fontSize: 14, marginBottom: 16 }}>
              Nuevos artículos cada mes. Sígueme en LinkedIn para no perderte ninguno.
            </p>
            <Btn href="/contacto" variant="outline">Suscribirme por email</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
