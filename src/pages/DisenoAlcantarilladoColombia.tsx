import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de alcantarillado en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de Alcantarillado Colombia | Redes Sanitarias y Pluviales | BIC',
  description: 'Diseño de redes de alcantarillado sanitario y pluvial en Colombia. Cumplimiento RAS 2017, NTC 1339. Memoria de cálculo, planos AutoCAD, EPANET. Ing. Rogerio Bernal — Manizales.',
  keywords: [
    'diseño de alcantarillado Colombia',
    'alcantarillado sanitario Colombia',
    'alcantarillado pluvial Colombia',
    'diseño redes sanitarias Colombia',
    'diseño alcantarillado RAS 2017',
    'diseño alcantarillado Manizales',
    'diseño alcantarillado Eje Cafetero',
    'colectores aguas residuales Colombia',
    'SWMM alcantarillado Colombia',
    'método racional caudal pluvial Colombia',
    'diseño pozos inspección Colombia',
    'ingeniería sanitaria Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-alcantarillado-colombia',
}

const TIPOS = [
  {
    icon: '🏘️',
    tipo: 'Alcantarillado para Urbanizaciones',
    desc: 'Diseño completo de redes de alcantarillado sanitario y pluvial para conjuntos residenciales, parcelaciones y urbanizaciones. Incluye cálculo de caudales de aguas residuales domésticas, diseño de colectores, pozos de inspección, cajas de paso y descole al sistema municipal. Se verifica la pendiente mínima y la velocidad de autolimpieza (≥0,6 m/s) en todos los tramos.',
    aplica: 'Constructoras, promotores inmobiliarios, urbanizadoras, conjuntos residenciales rurales.',
  },
  {
    icon: '🏗️',
    tipo: 'Alcantarillado Municipal',
    desc: 'Diseño de redes de alcantarillado para municipios, cabeceras municipales y centros poblados. Se realiza el análisis de la proyección de población (Método Geométrico DANE), cálculo de dotaciones y caudales de diseño conforme al RAS 2017 Título D. El diseño contempla la red de colectores principales, colectores secundarios, emisario final y conexión a la PTAR.',
    aplica: 'Alcaldías, Empresas de Servicios Públicos (ESP), asociaciones comunitarias de acueducto.',
  },
  {
    icon: '🌧️',
    tipo: 'Alcantarillado Pluvial',
    desc: 'Diseño de sistemas de drenaje pluvial para zonas urbanas, parques industriales, vías y proyectos de expansión. Se calculan los caudales de diseño por el método racional (Q = CIA) con curvas IDF para períodos de retorno de 10, 25 y 100 años según el RAS 2017 Título D. Se diseñan colectores, cunetas, box culverts y estructuras de disipación de energía.',
    aplica: 'Municipios con problemas de inundación urbana, parques industriales, desarrollos viales y urbanísticos.',
  },
  {
    icon: '🔄',
    tipo: 'Diagnóstico y Rehabilitación',
    desc: 'Evaluación técnica de redes de alcantarillado existentes con déficit de capacidad, problemas de olores, colmatación de colectores o conexiones erradas. BIC realiza el diagnóstico hidráulico con modelación SWMM, identifica los tramos críticos y propone alternativas de rehabilitación o ampliación con presupuesto APU.',
    aplica: 'Municipios con infraestructura obsoleta, ESP con reclamos de usuarios, proyectos de densificación urbana.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Levantamiento topográfico y caracterización de la red',
    desc: 'Levantamiento planimétrico y altimétrico del área de drenaje, identificación de cotas de rasante y cotas de fondo de pozos existentes, delimitación de subcuencas de drenaje y determinación de las áreas tributarias a cada colector. Esta información es indispensable para calcular la pendiente disponible y los caudales de diseño.',
    herramientas: ['Topografía con estación total', 'Levantamiento GPS RTK', 'Cartografía IGAC', 'AutoCAD Civil 3D'],
    resultado: 'Plano topográfico + delimitación de subcuencas de drenaje',
  },
  {
    paso: '02',
    titulo: 'Cálculo de caudales de diseño',
    desc: 'Para alcantarillado sanitario: proyección de la población (Método Geométrico), cálculo del caudal medio diario, caudal máximo horario (factor de mayoración) y caudal de aguas infiltradas según el RAS 2017 Título D. Para alcantarillado pluvial: método racional con curvas IDF del IDEAM para el período de retorno exigido. Se verifican los criterios de autolimpieza (V ≥ 0,6 m/s) y no erosión (V ≤ 3,0 m/s).',
    herramientas: ['Curvas IDF IDEAM', 'RAS 2017 Título D', 'Proyección DANE', 'SWMM / EPA-Net'],
    resultado: 'Caudales de diseño sanitarios y pluviales por tramo',
  },
  {
    paso: '03',
    titulo: 'Diseño hidráulico de colectores y estructuras',
    desc: 'Diseño de cada tramo de colector con la fórmula de Manning, selección del diámetro nominal (mínimo 200 mm sanitario, 300 mm pluvial), pendiente, material (PVC, gres, concreto reforzado) y profundidad de la clave. Se dimensionan pozos de inspección (distancias máximas, geometría), cajas de paso, aliviaderos y conexiones domiciliarias. Todo se verifica con la condición de flujo a sección parcialmente llena (relación Q/Qll).',
    herramientas: ['AutoCAD Civil 3D (perfiles)', 'Fórmula de Manning', 'NTC 1339 (tubería PVC)', 'RAS 2017 Título D'],
    resultado: 'Memoria de cálculo hidráulico + planos de planta y perfil',
  },
  {
    paso: '04',
    titulo: 'Memorias de cálculo y planos constructivos',
    desc: 'BIC entrega los documentos exigidos por curadurías, ESP y entidades financiadoras: memoria de cálculo hidráulico firmada por especialista COPNIA vigente, planos constructivos en AutoCAD (planta, perfiles longitudinales, detalles de pozos y acometidas), especificaciones técnicas de materiales y presupuesto APU por ítem.',
    herramientas: ['AutoCAD (planos constructivos)', 'Pliego especificaciones INVIAS', 'APU materiales 2026', 'Informe COPNIA'],
    resultado: 'Expediente técnico completo para licencia o contratación de obra',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector de Agua Potable — Título D: criterios de diseño para alcantarillado sanitario y pluvial' },
  { codigo: 'NTC 1339', descripcion: 'Norma Técnica Colombiana — Tubería PVC para alcantarillado sanitario y pluvial: dimensiones y especificaciones' },
  { codigo: 'NTC 4002', descripcion: 'Pozos de inspección para alcantarillado: geometría, materiales y cotas mínimas de instalación' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — requisitos para el vertimiento de aguas residuales al alcantarillado y cuerpos de agua' },
  { codigo: 'Resolución 0631/2015', descripcion: 'MADS — parámetros y valores límite para vertimientos puntuales en alcantarillado y cuerpos de agua superficiales' },
  { codigo: 'NSR-10 (Título D)', descripcion: 'Diseño estructural de pozos, cámaras de inspección y estructuras de concreto del sistema de alcantarillado' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de un sistema de alcantarillado en Colombia?',
    a: 'El costo depende del tipo de alcantarillado (sanitario, pluvial o combinado), el número de viviendas o la extensión del área a drenar, la topografía del terreno y los entregables requeridos. Para una urbanización de 50 a 200 viviendas, el diseño completo con memorias de cálculo, perfiles longitudinales y planos constructivos oscila entre $8 y $20 millones COP. Para redes municipales el costo varía según el alcance del proyecto. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué norma rige el diseño de alcantarillado en Colombia?',
    a: 'El diseño de alcantarillado en Colombia se rige principalmente por el RAS 2017 (Resolución 0330 del MVCT), específicamente el Título D que establece los criterios para sistemas de recolección y evacuación de aguas residuales y aguas lluvias. Complementariamente se aplican la NTC 1339 para tuberías PVC, la NTC 4002 para pozos de inspección y el Decreto 1076/2015 para el régimen de vertimientos. Cada ESP municipal puede tener criterios adicionales que BIC verifica antes del diseño.',
  },
  {
    q: '¿Se puede diseñar el alcantarillado pluvial y sanitario por separado?',
    a: 'Sí, y en Colombia el RAS 2017 recomienda los sistemas separados (sanitario y pluvial independientes) para nuevas urbanizaciones y desarrollos, porque los sistemas combinados generan problemas de capacidad hidráulica en eventos de lluvia intensa. Sin embargo, en municipios con red existente combinada, BIC analiza la viabilidad técnica de conectarse a la red existente o diseñar una solución separada según los criterios de la ESP local. Para urbanizaciones nuevas, siempre se diseñan sistemas separados.',
  },
]

const ARTICULOS = [
  { href: '/blog/alcantarillado-pluvial-colombia', title: 'Diseño de Alcantarillado Pluvial en Colombia: Normativa y Cálculo' },
  { href: '/blog/calcular-caudal-diseno-alcantarillado', title: 'Cómo calcular el caudal de diseño para alcantarillado en Colombia' },
  { href: '/blog/estudio-hidraulico-urbanizacion', title: '¿Qué incluye un estudio hidráulico para urbanización en Colombia?' },
]

export default function DisenoAlcantarilladoColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
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
            Diseño de Alcantarillado en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Redes sanitarias y pluviales para urbanizaciones, parcelaciones y municipios — RAS 2017
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña redes de alcantarillado sanitario y pluvial en Colombia
            conforme al RAS 2017 Título D y la NTC 1339. Entregamos memorias de cálculo hidráulico firmadas,
            planos constructivos en AutoCAD (planta, perfiles, detalles) y especificaciones técnicas
            aceptadas por curadurías y ESP en todo el país.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de alcantarillado</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017 Título D','NTC 1339','Método racional','SWMM','Civil 3D','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de alcantarillado</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de alcantarillado necesita su proyecto?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>APLICA PARA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.aplica}</p>
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
            Cómo diseña BIC un alcantarillado en Colombia
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#002A50' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#e6f7ff', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3e0ea' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 6 }}>ENTREGABLE</p>
                      <p style={{ color: '#333', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa para el diseño de alcantarillado en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 11,
                }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1a3c5e', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Artículos relacionados</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {ARTICULOS.map(a => (
                <li key={a.href}>
                  <a href={a.href} style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500', fontSize: 15 }}>→ {a.title}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros servicios relacionados con saneamiento y urbanismo
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de acueducto Colombia', href: '/servicios/acueducto-alcantarillado' },
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Urbanizaciones Colombia', href: '/urbanizacion-colombia' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Bocatomas Colombia', href: '/bocatomas-colombia' },
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

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño de alcantarillado en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏗️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de alcantarillado<br />para su proyecto en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el número de viviendas o el área a drenar y la región.
            BIC le envía propuesta técnica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Atención en todo Colombia.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '15px 36px',
                background: '#25D366', color: '#fff',
                borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none',
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
