import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito cotizar el diseño de un canal de riego o conducción. ¿Pueden asesorarme?')

const seoConfig = {
  title: 'Diseño de Canales de Riego en Colombia — Ingeniería Hidráulica | BIC',
  description: 'BIC diseña canales de riego, conducción y drenaje en Colombia. Canales revestidos, en tierra y entubados con cálculo hidráulico, obras de arte y memoria COPNIA. Distritos de riego, municipios y agroindustria. Cotización en 24 horas.',
  keywords: [
    'diseño canal de riego Colombia',
    'canal de conducción Colombia ingeniería',
    'diseño canal hidráulico Colombia',
    'canal riego agrícola Colombia',
    'canal revestido Colombia',
    'diseño canal drenaje Colombia',
    'obras de arte hidráulicas Colombia',
    'canal riego Eje Cafetero',
    'distrito de riego diseño Colombia',
    'canal irrigación Colombia ingeniería',
    'diseño canal conducción agua potable',
    'firma ingeniería canales Colombia',
    'consultor canales riego Colombia',
    'canal aforo Colombia diseño',
    'cálculo sección hidráulica canal Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-canal-riego-colombia',
}

const TIPOS = [
  {
    icon: '🌾',
    tipo: 'Canal de Riego Agrícola',
    subtitulo: 'Desde la bocatoma hasta el predio',
    desc: 'Diseño del sistema de distribución de agua para riego de cultivos: canal principal de conducción, canales secundarios o distribuidores y canales terciarios o surcos. Incluye el cálculo de la demanda hídrica de los cultivos (módulo de riego), la capacidad del canal para el caudal de diseño y las estructuras de control y medición del caudal distribuido a cada predio (compuertas, aforadores Parshall o de pared delgada).',
    cuando: 'Para distritos de riego, asociaciones de usuarios del agua y proyectos agroindustriales que necesitan distribuir agua desde una fuente superficial hasta zonas de cultivo.',
    clientes: ['Distritos y asociaciones de riego', 'Empresas agroindustriales', 'Municipios con proyectos productivos', 'Propietarios de fincas con más de 10 Ha'],
  },
  {
    icon: '💧',
    tipo: 'Canal de Conducción de Agua Potable',
    subtitulo: 'Del río al tanque de almacenamiento',
    desc: 'Diseño del canal o tubería de aducción que conduce el agua captada en la bocatoma hasta la planta de tratamiento o el tanque de almacenamiento del acueducto. El cálculo incluye la sección hidráulica óptima (velocidades entre 0.3 y 3 m/s), la verificación de la energía específica, las pérdidas de carga y el diseño de las obras de arte necesarias (caídas, rápidas, sifones, alcantarillas de cruce). Cumple RAS 2017 y Resolución 0330.',
    cuando: 'Componente de todo sistema de acueducto nuevo o ampliación. Cuando la bocatoma queda lejos del tanque de almacenamiento y el agua debe conducirse por gravedad o bombeo.',
    clientes: ['Municipios y alcaldías', 'Empresas de servicios públicos ESP', 'Proyectos con financiación SGR', 'Constructoras de infraestructura'],
  },
  {
    icon: '🏗️',
    tipo: 'Canal de Drenaje Urbano y Agrícola',
    subtitulo: 'Control de aguas lluvias y escorrentía',
    desc: 'Diseño de canales abiertos para el drenaje de zonas urbanizadas, vías, terrenos agrícolas y áreas industriales. Incluye el análisis de frecuencia de lluvias (curvas IDF del IDEAM), el cálculo de caudales de diseño por el método racional, el dimensionamiento de la sección del canal y la verificación de que las velocidades no causan erosión ni sedimentación en el fondo. Para zonas urbanas se diseña con base en el Plan de Ordenamiento Territorial y la norma municipal de drenaje.',
    cuando: 'Cuando una zona urbanizada, vial o agrícola tiene problemas de inundación frecuente o no tiene sistema de drenaje dimensionado para las lluvias de la región.',
    clientes: ['Constructoras de urbanizaciones', 'Alcaldías con programas de drenaje', 'Empresas de vías e infraestructura', 'Propietarios de predios industriales'],
  },
  {
    icon: '⛰️',
    tipo: 'Canal de Ladera y Control de Erosión',
    subtitulo: 'Canales de coronación y interceptores',
    desc: 'Diseño de canales de coronación en ladera para interceptar la escorrentía superficial y evitar que el agua de lluvia sature los taludes y genere movimientos en masa. También incluye canales interceptores en carreteras, zanjas de infiltración y estructuras de disipación de energía al pie de ladera. Es una obra de gestión del riesgo por remoción en masa reconocida por las corporaciones ambientales.',
    cuando: 'En taludes inestables, cortes de vía, zonas de ladera con antecedentes de deslizamientos o terrenos con alta pendiente donde la escorrentía no tiene manejo.',
    clientes: ['INVIAS y gobernaciones', 'Constructoras viales', 'Municipios en zonas de riesgo', 'Propietarios de predios en ladera'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Análisis de la Demanda Hídrica y Caudal de Diseño',
    desc: 'El primer paso es determinar cuánta agua debe transportar el canal. Para riego: se calcula la demanda hídrica de los cultivos según el módulo de riego (L/s por hectárea) y el área total a irrigar. Para acueducto: el caudal de diseño según la población proyectada a 25 años, dotación RAS y factor de simultaneidad. Para drenaje: análisis de frecuencia pluviométrica (IDF-IDEAM), tiempo de concentración y método racional. Este caudal define el tamaño del canal.',
    herramientas: ['HEC-HMS (hidrología de cuenca)', 'Curvas IDF IDEAM', 'Módulos de riego FAO-56', 'Cálculo RAS 2017 (acueductos)'],
    resultado: 'Caudal de diseño validado para dimensionar el canal',
  },
  {
    paso: '02',
    titulo: 'Diseño de la Sección Hidráulica Óptima',
    desc: 'Con el caudal definido, BIC calcula la sección transversal óptima del canal: forma (rectangular, trapezoidal, circular), dimensiones (base, altura, taludes), pendiente longitudinal y revestimiento. La sección óptima es la que conduce el caudal de diseño con la velocidad adecuada — suficientemente rápida para no sedimentar, suficientemente lenta para no erosionar el canal. Para canales en tierra: velocidades entre 0.5 y 1.5 m/s. Para canales revestidos en concreto: hasta 4 m/s.',
    herramientas: ['Ecuación de Manning', 'Criterios de estabilidad de canales (FSC)', 'HEC-RAS (verificación)', 'AutoCAD Civil 3D'],
    resultado: 'Sección hidráulica final: forma, base, altura, pendiente, revestimiento',
  },
  {
    paso: '03',
    titulo: 'Diseño de Obras de Arte',
    desc: 'Un canal no es solo una zanja larga — requiere obras complementarias para salvar desniveles, cruzar vías o quebradas, controlar el caudal y medir el flujo. BIC diseña las obras de arte necesarias: caídas verticales y rápidas para bajar el nivel energético del agua en tramos de alta pendiente, sifones para cruzar quebradas o vías bajo el nivel del canal, acueductos para cruzar sobre obstáculos, compuertas de control de caudal, aforadores (Parshall, de pared delgada, de garganta larga) y estructuras de disipación de energía al final de las rápidas.',
    herramientas: ['Diseño hidráulico de caídas y rápidas', 'Manual de hidráulica aplicada', 'AutoCAD (planos de obras de arte)', 'Norma NSR-10 (concreto)'],
    resultado: 'Diseño completo de todas las obras de arte del canal',
  },
  {
    paso: '04',
    titulo: 'Diseño Estructural y Especificación de Materiales',
    desc: 'Para canales revestidos en concreto, BIC calcula el espesor mínimo del revestimiento, el armado de acero (si aplica), las juntas de construcción y expansión, y las especificaciones de resistencia del concreto. Para canales en tierra, define la estabilidad del talud, el coeficiente de rugosidad de Manning y las condiciones de mantenimiento. Para canales entubados, selecciona el diámetro, clase y material de la tubería (PVC, concreto, PEAD) según la presión de trabajo y las condiciones del suelo.',
    herramientas: ['NSR-10 (diseño estructural)', 'Normas ICONTEC (materiales)', 'RAS 2017 (tuberías y presiones)', 'AutoCAD (planos constructivos)'],
    resultado: 'Especificaciones técnicas completas, materiales, armado, juntas',
  },
  {
    paso: '05',
    titulo: 'Memoria de Cálculo, Planos y Presupuesto',
    desc: 'BIC entrega el expediente técnico completo del canal: memoria de cálculo con toda la metodología firmada por especialista COPNIA, planos constructivos en AutoCAD (planta general a escala 1:2000, perfiles longitudinales a escala 1:500/1:100, secciones transversales típicas y de obras de arte a escala 1:50/1:25), APU (análisis de precios unitarios) y presupuesto total de la obra. Este expediente es suficiente para licitar, obtener financiación SGR y construir.',
    herramientas: ['Memoria de cálculo (firma COPNIA)', 'Planos AutoCAD completos', 'Presupuesto con APU', 'Especificaciones técnicas generales'],
    resultado: 'Expediente técnico listo para licitar, gestionar permisos y construir',
  },
]

const COMPONENTES = [
  { nombre: 'Canal principal', desc: 'Conducción del caudal desde la bocatoma hasta el primer punto de distribución' },
  { nombre: 'Canales secundarios', desc: 'Distribución hacia zonas o módulos de riego' },
  { nombre: 'Caídas y rápidas', desc: 'Disipación de energía en tramos de alta pendiente' },
  { nombre: 'Sifones', desc: 'Paso del canal bajo quebradas, vías o estructuras existentes' },
  { nombre: 'Aforadores', desc: 'Medición del caudal distribuido en cada punto de entrega' },
  { nombre: 'Compuertas', desc: 'Control y regulación del caudal en derivaciones y cierre del sistema' },
  { nombre: 'Disipadores de energía', desc: 'Reducción de velocidades al final de tramos rápidos' },
  { nombre: 'Tanques de quiebre', desc: 'Restauración de la presión y el nivel de energía en cambios de régimen' },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta el diseño de un canal de riego en Colombia?',
    a: 'El costo depende de la longitud del canal, el número de obras de arte (caídas, sifones, aforadores), la disponibilidad de levantamiento topográfico previo y si el canal requiere diseño estructural detallado (revestimiento en concreto) o es un canal en tierra. Para un canal principal de 500 metros con 3-4 obras de arte y memoria completa, el diseño oscila entre $15.000.000 y $35.000.000 COP. Para sistemas más complejos (canal principal + secundarios + aforadores en un distrito de riego de 50 Ha) el rango es de $40.000.000 a $100.000.000 COP. BIC envía propuesta económica detallada en menos de 24 horas.',
  },
  {
    q: '¿Cuál es la diferencia entre un canal revestido y un canal en tierra?',
    a: 'Un canal revestido tiene las paredes y el fondo cubiertos con concreto, geomembrana o mampostería. Sus ventajas: menor rugosidad (coeficiente de Manning más bajo), mayores velocidades permisibles, menores pérdidas por infiltración (10-15% vs 40-60% en tierra) y menor mantenimiento. Su desventaja: mayor costo de construcción. Un canal en tierra es más económico de construir pero pierde más agua por infiltración y requiere velocidades controladas para evitar erosión. BIC recomienda el revestimiento cuando el suelo es muy permeable, el agua es escasa o el costo del agua justifica reducir pérdidas.',
  },
  {
    q: '¿Qué es una obra de arte hidráulica y para qué sirve?',
    a: 'Las obras de arte son las estructuras complementarias que permiten que el canal funcione a lo largo de un trazado con variaciones de terreno: caídas verticales para bajar el nivel del canal en tramos de alta pendiente (evitando que el agua erosione el canal), rápidas para conducir el agua por tramos muy inclinados con velocidades controladas, sifones para cruzar bajo quebradas o vías, aforadores para medir cuánta agua está pasando en cada punto, y compuertas para controlar el caudal derivado hacia cada usuario. Un canal bien diseñado contempla todas las obras de arte necesarias desde el trazado.',
  },
  {
    q: '¿Se necesita permiso de la CAR para construir un canal de riego?',
    a: 'Depende del origen del agua. Si el canal conduce agua captada de un río o quebrada, ya se tiene o se debe tramitar la concesión de aguas ante la CAR (que autoriza la captación). La construcción del canal en sí no siempre requiere un permiso adicional, pero si implica obras sobre cauces naturales (cruzar quebradas con sifones o acueductos, hacer cortes en ladera) puede requerir un permiso de ocupación de cauce o licencia ambiental según la magnitud. BIC evalúa los requerimientos legales específicos de cada proyecto y acompaña en el proceso.',
  },
  {
    q: '¿BIC diseña canales de riego para proyectos financiados con regalías (SGR)?',
    a: 'Sí. Los sistemas de riego y los canales de conducción de agua potable son dos de las líneas de inversión más comunes del Sistema General de Regalías en municipios rurales. BIC elabora el diseño técnico completo que requiere el expediente del OCAD: memoria de cálculo, planos constructivos, presupuesto con APU, especificaciones técnicas y la documentación de soporte del RAS 2017 y la Resolución 0330 de 2017. El diseño viene firmado por el ingeniero especialista con COPNIA vigente.',
  },
  {
    q: '¿Cuánto tiempo tarda el diseño de un canal de riego?',
    a: 'Para un canal de longitud media (500 a 2.000 metros) con obras de arte estándar, el plazo típico es de 4 a 8 semanas desde el inicio hasta la entrega del expediente completo. El plazo depende principalmente de si existe levantamiento topográfico del trazado (si no existe, hay que levantarlo, lo que agrega 2 semanas) y de la complejidad de las obras de arte. BIC puede hacer entregas parciales — diseño hidráulico preliminar y sección del canal — mientras se completa el diseño de obras de arte, para no bloquear la gestión de permisos.',
  },
]

const NORMATIVA = [
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico del Sector de Agua y Saneamiento — criterios de diseño para canales de acueducto' },
  { codigo: 'Res. 0330/2017', descripcion: 'MinVivienda — requisitos mínimos de diseño para sistemas de acueducto y alcantarillado' },
  { codigo: 'NSR-10', descripcion: 'Norma de Diseño Sismo Resistente — diseño estructural del revestimiento en concreto' },
  { codigo: 'Decreto 1076/2015', descripcion: 'DUR Sector Ambiente — concesiones de agua para canales de riego y uso agrícola' },
  { codigo: 'FAO-56 / AgroHidrología', descripcion: 'Metodología de cálculo de evapotranspiración y demanda hídrica de cultivos (riego)' },
  { codigo: 'Manual IDEAM', descripcion: 'Análisis de frecuencia pluviométrica y caudales mínimos para diseño de canales' },
]

export default function DisenoCanalesRiego() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Canales de Riego en Colombia — Ingeniería Hidráulica | BIC" />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Obras hidráulicas · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Diseño de Canales de Riego y Conducción en Colombia
          </h1>
          <p className="servicio-intro" style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            Canales revestidos, en tierra y entubados — con cálculo hidráulico completo, obras de arte y memoria COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            BIC Bernal Ingeniería Consultores diseña canales de riego agrícola, conducción de agua potable
            y drenaje en todo Colombia. Cada diseño incluye análisis de demanda hídrica, cálculo de la sección
            hidráulica óptima, diseño de todas las obras de arte (caídas, sifones, aforadores, compuertas)
            y memoria de cálculo firmada por especialista COPNIA. Listo para licitar, financiar con SGR y construir.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño de canal</Btn>
            <Btn variant="outline" href="/obras-hidraulicas-colombia" dark>Ver todas las obras hidráulicas</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Riego agrícola','Conducción agua potable','Drenaje urbano','Obras de arte','RAS 2017','COPNIA'].map(t => (
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
              { num: '+80 km', label: 'de canales diseñados en Colombia' },
              { num: '4 tipos', label: 'de canales y sistemas de riego' },
              { num: '24h', label: 'para cotizar su proyecto' },
              { num: 'SGR', label: 'expedientes técnicos completos' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '12px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#002A50' }}>{num}</div>
                <div style={{ color: '#555', fontSize: 12, lineHeight: 1.4, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de canal</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué tipo de canal necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            BIC diseña canales para todos los usos: riego agrícola, conducción de agua potable, drenaje
            de zonas urbanizadas y control de erosión en ladera. El tipo correcto depende del caudal,
            la pendiente, el uso del agua y las condiciones del suelo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 12px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#003B6F', marginBottom: 4 }}>CUÁNDO SE USA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.65 }}>
                    {t.clientes.map(c => <li key={c}>{c}</li>)}
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
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo diseña BIC un canal hidráulico en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde el análisis de la demanda de agua hasta el expediente técnico completo listo para construcción.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, paddingBottom: 28 }}>
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

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(90deg, #002A50, #004F96)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Tiene un proyecto de canal de riego o conducción?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>Propuesta técnica y económica en 24 horas · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── COMPONENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Componentes que diseña BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Un sistema de canal completo incluye más que el canal
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 780 }}>
            BIC diseña todos los componentes del sistema, no solo la sección del canal. Un diseño completo
            garantiza que el agua llegue donde debe llegar, en el caudal correcto, sin pérdidas ni daños.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {COMPONENTES.map(c => (
              <div key={c.nombre} style={{
                background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: '18px 20px',
                borderLeft: '3px solid #17A2B8',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 6 }}>{c.nombre}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Normativa colombiana para diseño de canales
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 13 }}>{n.codigo}</div>
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
            Otras obras hidráulicas que diseña BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Bocatomas y captaciones', href: '/bocatomas-colombia' },
              { label: 'Encauzamiento de ríos', href: '/encauzamiento-rios-colombia' },
              { label: 'Protección contra inundaciones', href: '/obras-hidraulicas-colombia' },
              { label: 'Estudios hidrológicos', href: '/servicios/estudios-hidrologicos' },
              { label: 'Modelación HEC-RAS 2D', href: '/servicios/modelacion-hec-ras' },
              { label: 'Diseño de acueductos', href: '/servicios/diseno-acueductos' },
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — Diseño de canales de riego y conducción
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} className="faq-item" style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#002A50', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
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
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌾</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita el diseño de un canal<br />de riego o conducción en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el uso del canal (riego, acueducto, drenaje), la longitud aproximada y la región.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar por WhatsApp · +57 302 477 8910
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
