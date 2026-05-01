import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de una PTAP en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Diseño de PTAP en Colombia — Plantas de Tratamiento Agua Potable | BIC',
  description: 'BIC diseña plantas de tratamiento de agua potable (PTAP) para municipios y acueductos en Colombia conforme al RAS 2017 y Resolución 0330. Memoria COPNIA, trámite CAR. Cotice en 24 horas.',
  keywords: [
    'diseño PTAP Colombia',
    'planta tratamiento agua potable Colombia',
    'PTAP municipal Colombia',
    'diseño PTAP RAS 2017',
    'planta potabilizadora Colombia',
    'PTAP acueducto rural Colombia',
    'diseño PTAP Manizales',
    'diseño PTAP Eje Cafetero',
    'sistema abastecimiento agua potable Colombia',
    'consultor PTAP Colombia',
    'ingeniería sanitaria agua potable',
    'potabilización agua Colombia norma',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-ptap-colombia',
}

const COMPONENTES = [
  {
    icon: '🌊',
    nombre: 'Captación y conducción',
    desc: 'Diseño de la bocatoma o pozo de captación, línea de aducción hasta la planta y canal o tubería de llegada. El diseño incluye la cámara de recolección, la derivación de caudal de diseño y el rebose de seguridad.',
  },
  {
    icon: '🔵',
    nombre: 'Pretratamiento',
    desc: 'Desarenador para remoción de sólidos gruesos, tamiz o rejilla de gruesos y, para aguas con alta turbiedad, presedimentador. El diseño incluye cámara de distribución, tolva de lodos y sistema de lavado.',
  },
  {
    icon: '💧',
    nombre: 'Coagulación-floculación',
    desc: 'Canal de mezcla rápida para dosificación de coagulante (sulfato de aluminio o policloruro de aluminio), floculadores de flujo horizontal o vertical con gradientes de velocidad calculados para favorecer la formación de flóculos.',
  },
  {
    icon: '🏗️',
    nombre: 'Sedimentación o flotación',
    desc: 'Sedimentador convencional de flujo horizontal o módulos de láminas inclinadas (Lamella) para mayor eficiencia en espacios reducidos. Para aguas con baja turbiedad: flotación por aire disuelto (DAF).',
  },
  {
    icon: '🔬',
    nombre: 'Filtración',
    desc: 'Filtros rápidos de arena y antracita con diseño de tasa de filtración, carga hidráulica, lecho filtrante y sistema de retrolavado. Para plantas pequeñas: filtros lentos de arena o filtros de flujo ascendente.',
  },
  {
    icon: '⚗️',
    nombre: 'Desinfección y almacenamiento',
    desc: 'Sistema de cloración (gas cloro, hipoclorito de sodio o dióxido de cloro), cámara de contacto con tiempo mínimo CT para inactivación de Giardia, y tanque de almacenamiento regulador con volumen calculado para compensar variaciones horarias de consumo.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico de la fuente y análisis de calidad del agua',
    desc: 'Aforo de caudales de la fuente, toma de muestras de agua cruda en laboratorio acreditado (parámetros fisicoquímicos y microbiológicos según Decreto 1575/2007) y evaluación de variabilidad de turbiedad, color y carga bacteriológica a lo largo del año.',
    herramientas: ['Aforo de caudales en campo', 'Laboratorio acreditado (Decreto 1575)', 'IDEAM (datos hidrometeorológicos)', 'Muestreo representativo (NTC 813)'],
    resultado: 'Caracterización del agua cruda + viabilidad de potabilización',
  },
  {
    paso: '02',
    titulo: 'Caudal de diseño y proyección de demanda',
    desc: 'Estimación de la población actual y proyección a 25 años según metodologías del RAS 2017 (aritmético, geométrico, exponencial). Cálculo de dotaciones por nivel de complejidad, caudal medio diario, caudal máximo diario y caudal máximo horario de diseño.',
    herramientas: ['RAS 2017 (proyección poblacional)', 'DANE (datos censo)', 'Curvas de variación horaria', 'Factores k1 y k2 según norma'],
    resultado: 'Caudales de diseño por horizonte de planificación',
  },
  {
    paso: '03',
    titulo: 'Diseño de la planta y selección tecnológica',
    desc: 'Análisis de alternativas tecnológicas, diseño hidráulico de cada unidad (dimensiones, tiempos de retención, cargas superficiales), ensayo de jarras para definir dosis de coagulante y verificación de los parámetros del efluente frente al Decreto 1575 y la Resolución 2115.',
    herramientas: ['Ensayo de jarras (laboratorio)', 'RAS 2017 (criterios de diseño)', 'Resolución 2115/2007 (calidad agua potable)', 'AutoCAD Civil 3D (planos)'],
    resultado: 'Memoria de cálculo + planos constructivos de cada unidad',
  },
  {
    paso: '04',
    titulo: 'Expediente técnico y trámites ante CAR y MinVivienda',
    desc: 'BIC elabora la memoria descriptiva completa con firmante COPNIA, planos constructivos, especificaciones técnicas, presupuesto con APU y cronograma de ejecución. Si se requiere financiación con regalías, preparamos el proyecto completo en MGA-Web del DNP.',
    herramientas: ['Firma COPNIA vigente', 'MGA-Web DNP (regalías)', 'AutoCAD (planos)', 'Presupuesto APU detallado'],
    resultado: 'Expediente completo para licitar, financiar o tramitar permisos',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector — criterios de diseño para sistemas de tratamiento de agua potable' },
  { codigo: 'Decreto 1575/2007', descripcion: 'MinProtección Social — sistema para la protección y control de la calidad del agua para consumo humano' },
  { codigo: 'Resolución 2115/2007', descripcion: 'MinProtección / MAVDT — características, instrumentos y frecuencias del sistema de control de calidad del agua' },
  { codigo: 'NSR-10', descripcion: 'Diseño estructural de tanques, sedimentadores y estructuras de concreto de la PTAP' },
  { codigo: 'Resolución 0330/2017', descripcion: 'MinVivienda — RAS actualizado con requisitos técnicos para nivel de complejidad bajo, medio y alto' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de una PTAP en Colombia?',
    a: 'El costo depende del caudal de diseño, el nivel de complejidad del sistema (bajo, medio, medio-alto o alto según RAS) y si existe información de calidad del agua disponible. Para una PTAP de nivel bajo (menos de 2 L/s para comunidades rurales), el diseño puede estar entre $12 y $25 millones COP. Para sistemas de nivel medio o alto (5 a 50 L/s para cabeceras municipales) el rango oscila entre $25 y $60 millones. BIC envía propuesta técnica y económica en menos de 24 horas.',
  },
  {
    q: '¿Qué tecnología de tratamiento es adecuada para agua de río en el Eje Cafetero?',
    a: 'Las fuentes de agua en el Eje Cafetero tienen alta variabilidad de turbiedad (especialmente en temporada de lluvias), color y carga de materia orgánica. El proceso convencional de coagulación-floculación-sedimentación-filtración-cloración es el más indicado para estas características. Para caudales menores a 1 L/s en zonas rurales, los filtros lentos de arena pueden ser una alternativa económica si la turbiedad es baja. BIC define la tecnología con base en el ensayo de jarras y la caracterización del agua cruda.',
  },
  {
    q: '¿Es posible financiar una PTAP con recursos de regalías (SGR)?',
    a: 'Sí, es uno de los proyectos más financiados con regalías en Colombia. El SGR, el SGP y el Ministerio de Vivienda tienen líneas específicas para agua potable en municipios con IRCA alto (Índice de Riesgo de Calidad del Agua) o sin sistema de tratamiento. BIC puede elaborar el proyecto completo en MGA-Web del DNP con los diseños, presupuesto y análisis de alternativas que exige el OCAD para su aprobación.',
  },
  {
    q: '¿BIC diseña PTAP para acueductos rurales con fondos comunitarios?',
    a: 'Sí. BIC diseña plantas de tratamiento para acueductos comunitarios rurales de todas las escalas — desde sistemas compactos para 50 viviendas hasta plantas para centros poblados de 2.000 habitantes. El diseño se adapta al nivel de complejidad establecido por el RAS 2017 y a la capacidad operativa de la asociación de acueducto. Para proyectos con recursos limitados, BIC puede proponer soluciones de bajo costo y fácil operación.',
  },
  {
    q: '¿Qué hace diferente a BIC en el diseño de PTAP?',
    a: 'BIC integra en un mismo equipo el diseño hidráulico de la planta, la modelación de la fuente (hidrología, aforos), los trámites ambientales ante la CAR y, si es necesario, la formulación del proyecto para financiación con regalías. Esto reduce el número de consultores que el cliente necesita contratar y garantiza coherencia técnica entre todos los componentes del proyecto. Todos los diseños son firmados por profesional COPNIA vigente con experiencia verificable.',
  },
]

const ARTICULOS = [
  { href: '/blog/estudio-hidrologico-colombia', title: 'Estudio Hidrológico en Colombia: Requisitos y Proceso' },
  { href: '/blog/diseno-canales-colombia', title: 'Diseño de Canales en Colombia' },
  { href: '/blog/bocatoma-caudal-riego-colombia', title: 'Bocatoma y Caudal para Riego en Colombia' },
]

export default function DisenoPTAPColombia() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de PTAP en Colombia — Plantas de Tratamiento Agua Potable | BIC" />

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
            Diseño de PTAP en Colombia
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Plantas de tratamiento de agua potable para municipios y acueductos — RAS 2017 y Decreto 1575
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña plantas de potabilización en Colombia desde la
            caracterización del agua cruda hasta la memoria de cálculo firmada COPNIA y el expediente
            técnico para financiación con regalías SGR o recursos del Ministerio de Vivienda.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de PTAP</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['RAS 2017','Decreto 1575','Res. 2115','COPNIA vigente','Regalías SGR','Acueducto rural'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes de la PTAP</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué unidades incluye el diseño de una PTAP?
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            {COMPONENTES.map(c => (
              <div key={c.nombre} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12,
                padding: 24, borderLeft: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{c.nombre}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
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
            Cómo diseña BIC una PTAP en Colombia
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
            Normativa para diseño de PTAP en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#003B6F', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
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
            Otras soluciones de ingeniería sanitaria e hídrica
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Canales de conducción', href: '/diseno-canal-riego-colombia' },
              { label: 'Estudios hidrológicos', href: '/servicios' },
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
            Todo sobre diseño de PTAP en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#f8f9fa', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>💧</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de una PTAP<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el caudal, la fuente de agua y la región.
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
