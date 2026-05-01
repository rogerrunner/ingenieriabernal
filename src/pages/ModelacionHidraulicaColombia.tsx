import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar una modelación hidráulica en Colombia. ¿Pueden ayudarme?')

const seoConfig = {
  title: 'Modelación Hidráulica en Colombia — HEC-RAS 1D y 2D | BIC Ingeniería',
  description: 'BIC realiza modelación hidráulica con HEC-RAS 1D y 2D para estudios de inundación, licencias de urbanismo y Decreto 1807 en Colombia. Resultados verificables. Cotice en 24 horas.',
  keywords: [
    'modelación hidráulica Colombia',
    'HEC-RAS 2D Colombia',
    'HEC-RAS 1D Colombia',
    'estudio inundación Colombia',
    'modelación HEC-RAS Manizales',
    'modelación hidráulica Decreto 1807',
    'modelo hidráulico bidimensional Colombia',
    'HEC-HMS Colombia',
    'estudio amenaza hídrica Colombia',
    'ingeniería hidráulica computacional',
    'modelación ríos Colombia',
    'licencia urbanismo inundación',
  ],
  canonical: 'https://ingenieriabernal.co/modelacion-hidraulica-colombia',
}

const SERVICIOS = [
  {
    icon: '🌊',
    titulo: 'Modelación HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo superficial para determinar profundidades, velocidades y extensión de la mancha de inundación. Requerida por Decreto 1807/2014 para licencias de urbanismo en zonas con amenaza hídrica media o alta.',
  },
  {
    icon: '📏',
    titulo: 'Modelación HEC-RAS 1D',
    desc: 'Análisis de flujo en cauces encauzados con sección transversal definida. Ideal para diseño de estructuras hidráulicas (puentes, boxcúlverts, bordillos) y verificación de capacidad de canales y colectores.',
  },
  {
    icon: '🌧️',
    titulo: 'Modelación Hidrológica HEC-HMS',
    desc: 'Cálculo de hidrogramas de diseño para cuencas hidrográficas. Determina los caudales pico para períodos de retorno de 10, 25, 50 y 100 años que alimentan los modelos hidráulicos.',
  },
  {
    icon: '🗺️',
    titulo: 'Mapas de Amenaza y Riesgo Hídrico',
    desc: 'Cartografía SIG de zonas de amenaza alta, media y baja conforme al Decreto 1807/2014. Escala 1:2000 o 1:5000 según requerimiento de la Curaduría Urbana o la CAR. Entregables en ArcGIS y QGIS.',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Recopilación de información y análisis hidrológico',
    desc: 'Levantamiento de datos topobatimétricos del cauce, recopilación de información hidrometeorológica del IDEAM y caracterización morfométrica de la cuenca. Con HEC-HMS se calculan los hidrogramas de diseño para múltiples períodos de retorno.',
    herramientas: ['HEC-HMS', 'IDEAM (datos hidrológicos)', 'GPS RTK + estación total', 'Curvas IDF regionales'],
    resultado: 'Caudales de diseño por período de retorno',
  },
  {
    paso: '02',
    titulo: 'Construcción del modelo hidráulico',
    desc: 'Se define la geometría del modelo: malla de cálculo 2D a partir de MDT LiDAR o levantamiento propio, secciones transversales del cauce, condiciones de contorno y coeficientes de Manning por uso del suelo.',
    herramientas: ['HEC-RAS 6.x (versión vigente)', 'MDT LiDAR 1m', 'ArcGIS / QGIS', 'AutoCAD Civil 3D'],
    resultado: 'Modelo hidráulico calibrado y listo para corrida',
  },
  {
    paso: '03',
    titulo: 'Corrida del modelo y resultados',
    desc: 'HEC-RAS genera mapas de profundidad máxima, velocidad máxima y extensión de la mancha de inundación para cada período de retorno. Los resultados se exportan a SIG para la elaboración de la cartografía de amenaza.',
    herramientas: ['HEC-RAS 2D solver', 'Post-procesamiento RAS Mapper', 'ArcGIS Pro', 'Georreferenciación'],
    resultado: 'Mapas de profundidad, velocidad y mancha de inundación',
  },
  {
    paso: '04',
    titulo: 'Cartografía y concepto de aptitud urbanística',
    desc: 'Con los resultados del modelo se clasifican las zonas en amenaza alta, media y baja según la metodología del Decreto 1807/2014. Se elabora el concepto de aptitud urbanística con las restricciones y medidas de mitigación requeridas para el proyecto.',
    herramientas: ['ArcGIS Pro / QGIS', 'AutoCAD (planos)', 'Informe técnico Decreto 1807', 'Firma COPNIA vigente'],
    resultado: 'Mapa de amenaza + concepto de aptitud urbanística',
  },
]

const FAQ = [
  {
    q: '¿Cuándo se requiere modelación hidráulica HEC-RAS 2D en Colombia?',
    a: 'La modelación 2D es necesaria cuando el proyecto se ubica en zona con amenaza hídrica media o alta, el área supera 5 hectáreas, la llanura de inundación tiene ancho mayor a 100 metros, o cuando la Curaduría Urbana o la CAR exigen mapas separados de profundidad y velocidad del flujo. Para licencias de urbanismo bajo Decreto 1807/2014, las Curadurías de Manizales, Pereira y Armenia exigen el modelo 2D como estándar.',
  },
  {
    q: '¿Cuánto cuesta una modelación HEC-RAS 2D en Colombia?',
    a: 'El costo depende del tamaño de la cuenca, la disponibilidad de MDT LiDAR o levantamiento topobatimétrico, el número de períodos de retorno requeridos y los entregables exigidos por la Curaduría o la CAR. Para un plan parcial de 10-50 ha en el Eje Cafetero, el estudio completo (hidrología + modelo HEC-RAS 2D + mapa de amenaza + concepto Decreto 1807) oscila entre $15 y $40 millones COP. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿Qué diferencia hay entre HEC-RAS 1D y HEC-RAS 2D?',
    a: 'El modelo 1D simula el flujo a lo largo de secciones transversales predefinidas del cauce — es preciso para ríos encauzados con sección bien definida y sin desbordamiento lateral significativo. El modelo 2D resuelve las ecuaciones de flujo en toda la llanura aluvial, generando mapas de profundidad y velocidad con resolución métrica. Para licencias de urbanismo en zonas con posible desbordamiento, el 2D es el estándar requerido. BIC realiza ambos tipos según el proyecto.',
  },
  {
    q: '¿BIC tramita los permisos ante la CAR para estudios de riesgo?',
    a: 'BIC elabora toda la documentación técnica requerida por la CAR (CORPOCALDAS, CARDER, CRQ, CDMB, CAR Cundinamarca, etc.): memoria descriptiva, modelación hidráulica, mapas de amenaza, concepto de aptitud urbanística y medidas de mitigación propuestas. El radicado formal lo realiza el cliente, pero BIC acompaña el proceso respondiendo observaciones técnicas de la autoridad ambiental.',
  },
  {
    q: '¿Cuánto tiempo toma una modelación HEC-RAS 2D?',
    a: 'El plazo típico es de 6 a 12 semanas, dependiendo de si existe información topobatimétrica del cauce (si no, hay que levantarla en campo), la disponibilidad de datos hidrométricos del IDEAM y la complejidad del área de inundación. Para proyectos urgentes, BIC puede entregar resultados preliminares en 3-4 semanas para no bloquear la radicación de la licencia.',
  },
  {
    q: '¿BIC realiza modelaciones en todo Colombia o solo en el Eje Cafetero?',
    a: 'BIC trabaja en todo el territorio nacional. La mayor parte del trabajo de modelación se realiza con información remota (MDT, datos IDEAM, imágenes satelitales), con visitas de campo para levantamientos topobatimétricos cuando es necesario. Contamos con experiencia en proyectos en Caldas, Risaralda, Quindío, Antioquia, Cundinamarca, Boyacá, Valle del Cauca y Ecuador.',
  },
]

const ARTICULOS = [
  { href: '/blog/hec-ras-1d-vs-2d-colombia', title: 'HEC-RAS 1D vs 2D: ¿Cuál elegir para tu proyecto?' },
  { href: '/blog/hec-ras-2d-colombia', title: 'Modelación HEC-RAS 2D en Colombia: Guía Práctica' },
  { href: '/blog/modelacion-1d-2d-colombia', title: 'Modelación 1D y 2D en Colombia' },
]

export default function ModelacionHidraulicaColombia() {
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
          <SectionLabel light>Modelación computacional · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Modelación Hidráulica en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            HEC-RAS 1D y 2D para estudios de inundación, licencias de urbanismo y Decreto 1807/2014
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores realiza modelaciones hidráulicas con HEC-RAS en todo Colombia.
            Cada estudio incluye análisis hidrológico con HEC-HMS, modelo hidráulico calibrado y mapas de
            amenaza para licencias de urbanismo, planes parciales y revisiones de POT.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar modelación hidráulica</Btn>
            <Btn variant="outline" href="/servicios/estudios-hidrologicos" dark>Ver estudios hidrológicos</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['HEC-RAS 2D','HEC-HMS','ArcGIS','Decreto 1807','LiDAR','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+80', label: 'modelos HEC-RAS ejecutados en Colombia' },
              { num: '2D', label: 'modelación bidimensional estándar' },
              { num: 'Decreto 1807', label: 'compatible con licencias de urbanismo' },
              { num: '24h', label: 'para enviar propuesta técnica' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Modelaciones hidráulicas que realiza BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Desde la determinación de los caudales de diseño hasta la cartografía de amenaza hídrica
            para Curadurías Urbanas y CAR. BIC integra hidrología, hidráulica y SIG en un único estudio.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#002A50', marginBottom: 10 }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
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
            Cómo realiza BIC una modelación HEC-RAS 2D
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

      {/* ── CTA INTERMEDIO ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita un estudio de inundación?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica en menos de 24 horas · Primera consulta sin costo</p>
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

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <section style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '8px', margin: '0 0 2rem' }}>
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
            Otros servicios de ingeniería hidráulica en Colombia
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Gestión del riesgo hídrico', href: '/gestion-riesgo-hidrico' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Concesión de aguas Colombia', href: '/concesion-aguas-colombia' },
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
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Preguntas sobre modelación hidráulica HEC-RAS en Colombia
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌊</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita modelación hidráulica<br />en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, la región y lo que requiere la entidad (Curaduría, CAR, DNP).
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica en menos de 24 horas · Primera consulta sin costo.
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
