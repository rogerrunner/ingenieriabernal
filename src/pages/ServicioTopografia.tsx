import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un levantamiento topográfico. ¿Pueden asesorarme sobre el alcance y el costo?')

const seoConfig = {
  title: 'Levantamiento Topográfico Colombia — Estación Total Drone | BIC',
  description: 'Levantamientos topográficos con estación total y drone en Colombia. Planimetría, altimetría, curvas de nivel. Proyectos hídricos y construcción. COPNIA. Cotiza.',
  keywords: [
    'levantamiento topográfico Colombia',
    'topografía Colombia estación total',
    'topografía drone Colombia',
    'levantamiento topográfico obras hidráulicas',
    'planimetría altimetría Colombia',
    'curvas de nivel Colombia',
    'MAGNA-SIRGAS Colombia topografía',
    'topografía acueducto alcantarillado Colombia',
    'batimetría ríos Colombia',
    'ortofoto MDT Colombia drone',
    'topografía licencia construcción Colombia',
    'levantamiento topográfico Eje Cafetero',
    'firma topografía COPNIA Colombia',
    'AutoCAD Civil 3D planos topográficos',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/topografia',
  noindex: true,
}

const FAQ = [
  {
    q: '¿El levantamiento topográfico sirve para trámites ante el IGAC o la notaría?',
    a: 'Sí. Los planos de localización y cabida con coordenadas MAGNA-SIRGAS son documentos válidos para escrituración, registro catastral y VUR. Incluyen firma de ingeniero COPNIA y coordenadas georreferenciadas.',
  },
  {
    q: '¿Pueden hacer topografía en zonas de difícil acceso (selva, montaña)?',
    a: 'Sí. Utilizamos combinación de GPS diferencial y fotogrametría con drone para zonas de acceso limitado. Tenemos experiencia en proyectos en el Eje Cafetero, Putumayo y Caldas en terrenos de alta pendiente.',
  },
  {
    q: '¿Cuánto tarda el levantamiento y la entrega del plano?',
    a: 'Depende del área y la complejidad del terreno. Un predio urbano típico se entrega en 3–5 días hábiles. Proyectos más grandes (acueductos, canales) toman 1–3 semanas.',
  },
  {
    q: '¿Los entregables son compatibles con AutoCAD y ArcGIS?',
    a: 'Sí. BIC entrega archivos .dwg (AutoCAD), .shp (shapefile GIS) y PDF, más el modelo de alturas en formato compatible con Civil 3D.',
  },
]

export default function ServicioTopografia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Levantamiento Topográfico Colombia — Estación Total Drone | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Levantamiento Topográfico en Colombia"
        serviceDesc={seoConfig.description}
        serviceUrl="/servicios/topografia"
        faqItems={FAQ}
        priceSpecification={[
          { name: 'Levantamiento topográfico estación total / GPS', minPrice: 1500000, maxPrice: 4500000, priceCurrency: 'COP', description: 'Planimetría, altimetría, curvas de nivel — MAGNA-SIRGAS, AutoCAD Civil 3D' },
          { name: 'Levantamiento fotogramétrico Drone RTK', minPrice: 9500000, maxPrice: 25000000, priceCurrency: 'COP', description: 'Ortofoto, MDT de alta densidad, vuelo con drone RTK GNSS — entregables Civil 3D y GIS' },
        ]}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 60%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Topografía · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Levantamiento Topográfico en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Estación total, GPS diferencial y drone — MAGNA-SIRGAS — AutoCAD Civil 3D — COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza levantamientos topográficos en todo Colombia:
            planimetría, altimetría, curvas de nivel, batimetrías de cauces y vuelos fotogramétricos
            con drone. Entregables en MAGNA-SIRGAS y AutoCAD Civil 3D. Firmados por especialista
            con tarjeta profesional COPNIA vigente y válidos ante curadurías, IGAC y entidades ambientales.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar levantamiento</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Estudios Hidrológicos</Btn>
          </div>
          <div style={{ marginBottom: 16 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)',
              borderRadius: 100, padding: '7px 16px',
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
              color: '#4ADE80', fontSize: 13,
            }}>
              ✓ Topografía Drone RTK — Desde $9.500.000 COP
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Estación total','GPS diferencial','Drone fotogramétrico','MAGNA-SIRGAS','Civil 3D','Todo Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '28px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
            {[
              { num: '+80', label: 'levantamientos topográficos realizados' },
              { num: '5 tipos', label: 'de levantamiento disponibles' },
              { num: '3-5 días', label: 'entrega predio urbano típico' },
              { num: '100%', label: 'en MAGNA-SIRGAS y CAD' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '12px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#002A50' }}>{num}</div>
                <div style={{ color: '#555', fontSize: 12, lineHeight: 1.4, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Fundamentos</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué incluye un levantamiento topográfico profesional?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 12 }}>
            {[
              'Planimetría: posición horizontal de elementos naturales y artificiales',
              'Altimetría: curvas de nivel, perfiles longitudinales y transversales',
              'Cartografía digital: entregables CAD (AutoCAD Civil 3D) y GIS',
              'Control geodésico: amarre a sistema MAGNA-SIRGAS (IGAC)',
              'Registro fotográfico y libreta de campo',
            ].map(item => (
              <div key={item} style={{ background: '#f0f9ff', borderRadius: 10, padding: '14px 18px', borderLeft: '3px solid #17A2B8' }}>
                <p style={{ color: '#002A50', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIPOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Catálogo técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Tipos de levantamiento topográfico BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 780 }}>
            Cada modalidad está diseñada para un propósito técnico o normativo específico.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                num: '1', titulo: 'Levantamiento de predios y linderos',
                items: [
                  'Plano de localización y cabida',
                  'Coordenadas MAGNA-SIRGAS para IGAC/catastro',
                  'Requerido para escrituración, compraventa, VUR',
                ],
              },
              {
                num: '2', titulo: 'Topografía para diseño hidráulico y sanitario',
                items: [
                  'Perfiles de acueductos y alcantarillados',
                  'Batimetrías y perfiles de cauces (ríos, quebradas)',
                  'Curvas de nivel para diseño de canales y obras de drenaje',
                ],
              },
              {
                num: '3', titulo: 'Topografía para construcción',
                items: [
                  'Replanteo de obras: ejes, cotas y puntos de control',
                  'Volumetría de corte y relleno',
                  'Control durante la construcción',
                ],
              },
              {
                num: '4', titulo: 'Vuelos fotogramétricos con drone (UAV)',
                items: [
                  'Ortofoto en alta resolución (hasta 2 cm/px GSD)',
                  'Modelo Digital de Terreno (MDT) y Modelo Digital de Superficie (MDS)',
                  'Nube de puntos (LAS/LAZ) procesada con Agisoft Metashape o Pix4D',
                  'Levantamientos de grandes áreas a bajo costo',
                ],
              },
              {
                num: '5', titulo: 'Batimetría de ríos y embalses',
                items: [
                  'Medición de secciones transversales con ecosonda',
                  'Modelos de fondo para estudios de sedimentos y crecientes',
                ],
              },
            ].map(t => (
              <div key={t.num} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '20px 24px', display: 'grid', gridTemplateColumns: '36px 1fr', gap: 16, alignItems: 'start' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 700, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{t.num}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.titulo}</h3>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.7 }}>
                    {t.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 24 }}>
            Normativa y referencias
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { norma: 'IGAC', desc: 'Sistema de referencia MAGNA-SIRGAS (GRS80, proyección Colombia Bogotá)' },
              { norma: 'INVIAS', desc: 'Especificaciones para topografía en proyectos viales' },
              { norma: 'RAS 2017', desc: 'Requisitos topográficos para acueductos y alcantarillados' },
              { norma: 'NSR-10', desc: 'Levantamientos para estudios de microzonificación sísmica' },
            ].map(n => (
              <div key={n.norma} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: '16px 20px', borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 13, color: '#002A50', marginBottom: 5 }}>{n.norma}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EQUIPOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tecnología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 24 }}>
            Equipos y software
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {[
              { eq: 'Estación Total TOPCON (1" de precisión angular)', desc: 'Medición milimétrica en campo para levantamientos urbanos y de ladera' },
              { eq: 'Nivel electrónico y miras', desc: 'Nivelación geométrica de alta precisión para cotas de proyecto' },
              { eq: 'GPS diferencial (control geodésico)', desc: 'Posicionamiento MAGNA-SIRGAS con precisión subcentimétrica RTK' },
              { eq: 'Drone DJI (fotogrametría RGB)', desc: 'Ortofoto hasta 2 cm/px GSD para grandes áreas y zonas de difícil acceso' },
              { eq: 'AutoCAD Civil 3D', desc: 'Procesamiento de datos y entrega de planos, perfiles y MDT' },
              { eq: 'QGIS', desc: 'Análisis geoespacial y cartografía para integración con SIG institucional' },
            ].map(e => (
              <div key={e.eq} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: '16px 20px', borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 13, color: '#002A50', marginBottom: 5 }}>{e.eq}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un levantamiento topográfico?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>Propuesta técnica en 24 horas · Primera consulta sin costo · Todo Colombia</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Propuesta en 24 h — sin costo
          </a>
        </div>
      </section>

      {/* ── PRECIOS 2026 ── */}
      <section style={{ background: '#f0f9ff', padding: '52px 24px', borderTop: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Inversión 2026</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 8, color: '#002A50' }}>
            Precios orientativos 2026
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 680 }}>
            Rangos referenciales para proyectos estándar. El precio exacto depende del área, el tipo de terreno y los entregables requeridos.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {[
              { nombre: 'Levantamiento predio urbano (hasta 1 ha)', rango: '$1.5M – $3M COP' },
              { nombre: 'Topografía proyecto hidráulico (1 km de eje)', rango: '$3M – $6M COP' },
              { nombre: 'Vuelo drone ortofoto (área rural, hasta 50 ha)', rango: '$4M – $9M COP' },
              { nombre: 'Batimetría de cauce (500 m de río)', rango: '$4M – $8M COP' },
            ].map(p => (
              <div key={p.nombre} style={{
                background: '#fff', border: '1px solid #b3e0ea', borderLeft: '4px solid #17A2B8',
                borderRadius: 10, padding: '16px 22px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
              }}>
                <p style={{ fontWeight: 600, color: '#002A50', fontSize: 14, margin: 0 }}>{p.nombre}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: '#17A2B8', margin: 0 }}>{p.rango}</p>
              </div>
            ))}
          </div>
          <p style={{ color: '#666', fontSize: 13, lineHeight: 1.65, marginBottom: 24 }}>
            Tiempos: 3–10 días hábiles según extensión y terreno.
          </p>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '13px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Propuesta en 24 h — sin costo
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — Levantamiento Topográfico en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Estudios hidrológicos', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Diseño de acueductos', href: '/servicios/diseno-acueductos' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Obras hidráulicas Colombia', href: '/obras-hidraulicas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea',
                borderRadius: 10, padding: '14px 18px', color: '#003B6F',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📐</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita un levantamiento topográfico<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el área del predio o proyecto, el municipio y el uso del levantamiento (licencia, diseño hidráulico, escrituración).
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Propuesta en 24 h — sin costo
            </a>
            <a href="/contacto"
              style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
