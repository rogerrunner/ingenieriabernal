import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre ingeniería para mi proyecto de urbanización en Colombia')

const seoConfig = {
  title: 'Ingeniería para Urbanizaciones en Colombia | BIC Bernal',
  description: 'BIC diseña las redes de servicios, estudios de riesgo y sistemas técnicos para urbanizaciones residenciales, comerciales e industriales en Colombia. Desde el plan parcial hasta la licencia. Cotice hoy.',
  keywords: [
    'urbanización Colombia ingeniería',
    'cómo hacer una urbanización en Colombia',
    'qué estudios necesita una urbanización',
    'ingeniería para urbanización residencial Colombia',
    'urbanización comercial Colombia ingeniería',
    'parque industrial Colombia diseño técnico',
    'redes servicios públicos urbanización',
    'diseño hidrosanitario conjunto residencial',
    'diseño hidrosanitario urbanización Colombia',
    'ingeniero para urbanización Colombia',
    'permisos técnicos urbanización Colombia',
    'conjunto cerrado diseño hidráulico Colombia',
    'conjunto residencial diseño Colombia',
    'plan parcial ingeniería Colombia',
    'desarrollo inmobiliario Colombia estudios',
    'zona industrial diseño acueducto alcantarillado',
  ],
  canonical: 'https://ingenieriabernal.co/urbanizacion-colombia',
}

const TIPOS_PROYECTO = [
  {
    tipo: 'Conjuntos Residenciales y Condominios',
    icon: '🏘️',
    desc: 'Urbanizaciones de casas, condominios campestres y conjuntos cerrados de apartamentos. Desde proyectos de 10 unidades hasta macroproyectos de cientos de viviendas. BIC diseña las redes de agua, alcantarillado sanitario y pluvial, estudio de riesgo hídrico si hay cuerpos de agua cercanos, y el sistema contra incendios cuando la normativa lo exige.',
    necesitan: ['Red de acueducto y alcantarillado', 'Sistema de manejo de aguas lluvias', 'Estudio riesgo hídrico si aplica', 'Sistema CI si supera 3 pisos'],
  },
  {
    tipo: 'Parques Industriales y Zonas Francas',
    icon: '🏭',
    desc: 'Bodegas de almacenamiento, naves industriales, zonas logísticas, parques de manufactura y zonas francas. Los proyectos industriales tienen mayores exigencias en sistemas contra incendios (NFPA), drenaje de grandes superficies impermeables y tratamiento de aguas residuales industriales (PTAR).',
    necesitan: ['Sistema contra incendios NFPA / NSR-10', 'Drenaje pluvial industrial', 'PTAR para aguas residuales industriales', 'Red hidrosanitaria de alta demanda'],
  },
  {
    tipo: 'Centros Comerciales y Desarrollos Mixtos',
    icon: '🏬',
    desc: 'Malls, plazas comerciales, centros de entretenimiento y proyectos mixtos (comercio + vivienda). BIC ejecutó el diseño hidrosanitario y contra incendios del Makarí Mall en Dosquebradas — uno de los proyectos comerciales más grandes del Eje Cafetero. La experiencia en proyectos de gran formato es demostrable.',
    necesitan: ['Sistema contra incendios NSR-10 J/K', 'Red hidrosanitaria de alta capacidad', 'Drenaje de cubiertas y áreas exteriores', 'Estudio riesgo si el predio lo requiere'],
  },
  {
    tipo: 'Proyectos Institucionales',
    icon: '🏫',
    desc: 'Colegios, universidades, clínicas, hospitales, cárceles y sedes gubernamentales. Los proyectos institucionales de uso esencial (Grupo IV según NSR-10) tienen exigencias estructurales, hidrosanitarias y de sistemas CI más estrictas. BIC tiene experiencia en proyectos con Rama Judicial y municipios.',
    necesitan: ['Sistemas CI obligatorios NSR-10 Título J', 'Red hidrosanitaria de uso intensivo', 'Estudio de suelos NSR-10', 'Gestión del riesgo si está en zona de amenaza'],
  },
  {
    tipo: 'Hoteles y Proyectos Turísticos',
    icon: '🏨',
    desc: 'Hoteles, resorts, complejos vacacionales y desarrollos ecoturísticos. Requieren sistemas hidrosanitarios de alta confiabilidad, manejo eficiente del agua, sistemas de detección y protección contra incendios y, en zonas rurales, diseño de sistemas de acueducto y tratamiento de agua propios.',
    necesitan: ['Sistema hidrosanitario de alta confiabilidad', 'Tratamiento de agua (PTAP si es fuera de red)', 'Sistema CI obligatorio por uso hotelero', 'Estudio riesgo hídrico si es zona de expansión'],
  },
  {
    tipo: 'Desarrollos en Zonas de Riesgo o Expansión',
    icon: '⚠️',
    desc: 'Proyectos en suelo de expansión urbana, zonas de transición rural-urbana o predios cerca de quebradas y ríos. El Decreto 1807/2014 exige estudio de amenaza y riesgo antes de urbanizar. BIC hace la modelación HEC-RAS 2D y determina qué parte del predio es urbanizable y con qué medidas de mitigación.',
    necesitan: ['Estudio inundabilidad HEC-RAS 2D obligatorio', 'Mapa de amenaza y riesgo para plan parcial', 'Medidas de mitigación (encauzamiento, dique)', 'Concepto CAR si hay cuerpos de agua'],
  },
]

const QUE_HACE_BIC = [
  {
    icon: '💧',
    servicio: 'Diseño de Redes Hidrosanitarias',
    desc: 'Red de acueducto, alcantarillado sanitario y alcantarillado pluvial para la totalidad del proyecto. Cálculo de caudales de demanda y diseño por sectores. Memorias de cálculo según RAS 2017 y Resolución 0330/2017. Planos en AutoCAD para radicación ante la empresa de servicios públicos y la curaduría.',
  },
  {
    icon: '⚠️',
    servicio: 'Estudio de Riesgo Hídrico — Decreto 1807/2014',
    desc: 'Modelación HEC-RAS 2D para determinar zonas de amenaza alta, media y baja dentro del predio. Mapas de profundidad y velocidad de inundación para períodos de retorno de 10, 25, 50 y 100 años. El mapa de amenaza define qué áreas son urbanizables y cuáles son zona de protección.',
  },
  {
    icon: '🔥',
    servicio: 'Sistemas Contra Incendios — NSR-10 J/K y NFPA',
    desc: 'Diseño de sistemas de detección, extinción y protección: rociadores automáticos, red húmeda y seca, gabinetes, extintores. Cumplimiento de NSR-10 Capítulos J y K y normas NFPA aplicables. BIC es especialista exclusivo en sistemas CI para proyectos comerciales e industriales en el Eje Cafetero.',
  },
  {
    icon: '🔧',
    servicio: 'Diseño de Acueducto y Alcantarillado Municipal',
    desc: 'Para urbanizaciones fuera de la red pública existente: diseño de sistema de captación (bocatoma), planta de tratamiento de agua potable (PTAP), red de distribución y sistema de alcantarillado con planta de tratamiento de aguas residuales (PTAR). Proyectos financiados con regalías o recursos propios.',
  },
  {
    icon: '📐',
    servicio: 'Topografía y Levantamientos',
    desc: 'Levantamiento topográfico del predio para diseño de lotes, vías internas y redes. Modelo Digital de Terreno para diseño hidráulico. Batimetría de cauces cuando hay cuerpos de agua en el predio. Georeferenciación en MAGNA-SIRGAS.',
  },
  {
    icon: '🌿',
    servicio: 'Trámites Ambientales ante CAR',
    desc: 'Elaboración de los estudios técnicos requeridos por la Corporación Autónoma Regional para permisos de ocupación de cauce, concesión de aguas y sustracción de ronda hídrica. BIC prepara los documentos para Corpocaldas, CARDER, CAR Cundinamarca, Corantioquia y otras CAR.',
  },
]

const FAQ = [
  {
    q: '¿Qué estudios necesita mi urbanización antes de pedir la licencia?',
    a: 'Para la licencia de urbanismo los estudios técnicos más frecuentes son: (1) diseño de redes hidrosanitarias (acueducto, alcantarillado sanitario y pluvial) conforme al RAS 2017; (2) estudio de amenaza y riesgo hídrico si el predio está cerca de quebradas, ríos o en zonas de amenaza según el POT; (3) topografía del predio; y (4) concepto ambiental de la CAR si hay intervención de rondas o cuerpos de agua. BIC elabora todos estos documentos bajo un solo contrato.',
  },
  {
    q: '¿Qué pasa si mi terreno está cerca de una quebrada o río?',
    a: 'Necesita un estudio de inundabilidad con modelación HEC-RAS 2D antes de tramitar cualquier licencia. El Decreto 1807/2014 lo exige cuando el predio tiene amenaza media o alta. BIC hace la modelación y le dice exactamente qué parte del terreno puede desarrollar, cuál debe ser zona verde de protección y si se necesitan obras de mitigación como encauzamiento o diques. Esto no es un trámite opcional — la curaduría no expide la licencia sin el estudio en zonas de amenaza.',
  },
  {
    q: '¿BIC puede diseñar las redes de toda una urbanización de 200 casas?',
    a: 'Sí. BIC diseña proyectos de cualquier escala, desde conjuntos de 10 unidades hasta desarrollos de cientos de viviendas. Para proyectos grandes, BIC divide el diseño en fases y coordina con la empresa de servicios públicos para obtener la viabilidad de servicios antes de iniciar el diseño detallado. La memoria de cálculo y los planos cumplen los requisitos del RAS 2017 y la empresa prestadora.',
  },
  {
    q: '¿Cuánto cuesta el diseño hidrosanitario de un conjunto residencial?',
    a: 'El costo depende del número de unidades, el área total, la configuración del predio y la distancia a las redes públicas. Para un conjunto de 30–80 casas, el diseño de redes hidrosanitarias puede oscilar entre $15.000.000 y $40.000.000 COP. Para desarrollos de 200+ unidades o proyectos comerciales e industriales, BIC prepara una propuesta técnica detallada con costos por cada estudio. Cotización en menos de 24 horas, sin costo.',
  },
  {
    q: '¿Necesito que BIC venga al predio o puede trabajar a distancia?',
    a: 'Depende del tipo de estudio. Para topografía y estudios de suelos es necesaria la visita de campo. Para el diseño hidrosanitario, si el promotor entrega la topografía del predio y la información de la empresa de servicios públicos, BIC puede avanzar de forma remota y hacer una visita puntual de verificación. Para proyectos en el Eje Cafetero, Caldas, Risaralda y zonas cercanas BIC siempre visita el predio. Para otras regiones, se coordina el desplazamiento según el alcance.',
  },
  {
    q: '¿En qué regiones de Colombia trabaja BIC?',
    a: 'BIC tiene base en Manizales pero atiende proyectos en todo Colombia. Ha ejecutado proyectos en Caldas, Risaralda, Valle del Cauca, Boyacá, Cundinamarca, Magdalena y en Ecuador. Para proyectos de infraestructura mayor y obras hidráulicas, BIC se desplaza según el proyecto. Para diseños hidrosanitarios, si el cliente entrega la información base, gran parte del trabajo se puede hacer de forma remota.',
  },
]

const NUMEROS = [
  { valor: '10+', desc: 'años de experiencia en proyectos de urbanización e infraestructura' },
  { valor: '50+', desc: 'proyectos ejecutados en Colombia, Ecuador y México' },
  { valor: '24h', desc: 'tiempo máximo de respuesta con propuesta técnica y económica' },
  { valor: '1', desc: 'consultor para todos los estudios técnicos — sin coordinar múltiples firmas' },
]

export default function UrbanizacionColombia() {
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
          <SectionLabel light>Residencial · Comercial · Industrial · Todo Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería para su Urbanización<br />
            <span style={{ color: '#17A2B8' }}>en Colombia: Estudios, Diseños y Trámites Técnicos</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            Si va a desarrollar un lote o predio — ya sea para construir casas, bodegas, locales comerciales o
            un conjunto residencial — necesita estudios técnicos de ingeniería. BIC prepara todos los documentos
            que exige la curaduría bajo un solo contrato: diseño hidrosanitario, estudio de riesgo, topografía,
            sistemas contra incendios y gestión ambiental.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre mi proyecto</Btn>
            <Btn variant="outline" href="/licencia-de-urbanismo" dark>¿Qué es la licencia de urbanismo?</Btn>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS ── */}
      <section style={{ background: '#17A2B8', padding: '40px 24px' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24,
        }}>
          {NUMEROS.map(n => (
            <div key={n.desc} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 36, color: '#fff', lineHeight: 1 }}>{n.valor}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 6 }}>{n.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPOS DE PROYECTO ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Su tipo de proyecto</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            ¿Qué tipo de urbanización quiere desarrollar?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 740 }}>
            BIC trabaja con todos los tipos de desarrollo urbano. Cada proyecto tiene necesidades
            técnicas distintas — aquí están los estudios que generalmente requiere cada uno.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
            {TIPOS_PROYECTO.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{t.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>ESTUDIOS TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 12 }}>
                    {t.necesitan.map(n => <li key={n} style={{ marginBottom: 2 }}>{n}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── QUÉ HACE BIC ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Un solo consultor para todos los estudios técnicos
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            El mayor problema que tienen los promotores inmobiliarios y constructores al tramitar una urbanización
            es coordinar múltiples firmas de ingeniería. BIC resuelve eso: un solo contrato para todos los estudios.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {QUE_HACE_BIC.map(s => (
              <div key={s.servicio} style={{
                background: '#fff', borderRadius: 10, padding: 22,
                display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16, alignItems: 'start',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{ fontSize: 26 }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{s.servicio}</h3>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Lo que más nos preguntan los promotores y constructores
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#f8f9fa', borderRadius: 10, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── LINKS INTERNOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Más información</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 24 }}>
            Páginas relacionadas con su proyecto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
            {[
              { href: '/licencia-de-urbanismo', label: '📋 Licencia de urbanismo — qué estudios exige' },
              { href: '/gestion-riesgo-hidrico', label: '⚠️ Gestión del riesgo hídrico — Decreto 1807' },
              { href: '/obras-hidraulicas-colombia', label: '🌊 Obras hidráulicas — bocatomas y encauzamientos' },
              { href: '/estudio-de-inundabilidad-manizales', label: '🗺️ Estudio de inundabilidad en Manizales' },
              { href: '/servicios/acueducto-alcantarillado', label: '🔧 Acueducto y alcantarillado' },
              { href: '/servicios/contra-incendios-nsr10', label: '🔥 Sistemas contra incendios NSR-10' },
            ].map(l => (
              <a key={l.href} href={l.href} style={{
                display: 'block', padding: '14px 18px',
                background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 8, color: '#002A50', textDecoration: 'none',
                fontWeight: 600, fontSize: 13, lineHeight: 1.4,
                transition: 'border-color 0.2s',
              }}>{l.label}</a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{
        background: 'linear-gradient(135deg, #002A50, #004F96)',
        padding: '64px 24px', textAlign: 'center',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Tiene un terreno que quiere desarrollar?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Cuéntenos el municipio, el área aproximada y el tipo de proyecto.
            BIC le indica qué estudios necesita, qué restricciones tiene el predio y
            le envía una propuesta técnica y económica en menos de 24 horas.
            Primera consulta sin costo.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '14px 32px',
              background: '#25D366', color: '#fff',
              borderRadius: 8, fontWeight: 700, fontSize: 16,
              textDecoration: 'none',
            }}
          >
            📱 Chatear por WhatsApp · +57 302 477 8910
          </a>
        </div>
      </section>
    </>
  )
}
