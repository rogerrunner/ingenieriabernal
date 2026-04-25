import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero información sobre ingeniería para mi proyecto de urbanización en Colombia')

const seoConfig = {
  title: 'Ingeniería para Urbanizaciones en Colombia | BIC Bernal Ingeniería',
  description: 'BIC diseña las redes hidrosanitarias, estudios de riesgo hídrico y sistemas contra incendios para urbanizaciones en Colombia. Conjuntos residenciales, parques industriales, centros comerciales. Resolución 0330/2017, Decreto 1807/2014. Cotice en 24 horas.',
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
    'plan parcial ingeniería Colombia',
    'desarrollo inmobiliario Colombia estudios',
    'zona industrial diseño acueducto alcantarillado',
    'decreto 1807 urbanización',
  ],
  canonical: 'https://ingenieriabernal.co/urbanizacion-colombia',
}

const STATS = [
  { valor: '10+', desc: 'años en proyectos de urbanización e infraestructura' },
  { valor: '50+', desc: 'proyectos ejecutados en Colombia, Ecuador y México' },
  { valor: '24h', desc: 'propuesta técnica y económica sin costo' },
  { valor: '1', desc: 'consultor para todos los estudios — sin coordinar múltiples firmas' },
]

const TIPOS = [
  {
    tipo: 'Conjuntos Residenciales y Condominios',
    icon: '🏘️',
    desc: 'Urbanizaciones de casas, condominios campestres y conjuntos cerrados de apartamentos. Desde proyectos de 10 unidades hasta macroproyectos de cientos de viviendas. BIC diseña las redes de agua potable, alcantarillado sanitario y pluvial, estudio de riesgo hídrico si hay cuerpos de agua cercanos, y el sistema contra incendios cuando la normativa lo exige.',
    necesitan: ['Red de acueducto y alcantarillado — Res. 0330/2017', 'Sistema de manejo de aguas lluvias', 'Estudio riesgo hídrico Decreto 1807/2014 si aplica', 'Sistema CI si supera 3 pisos o 3.000 m²'],
  },
  {
    tipo: 'Parques Industriales y Zonas Francas',
    icon: '🏭',
    desc: 'Bodegas de almacenamiento, naves industriales, zonas logísticas, parques de manufactura y zonas francas. Los proyectos industriales tienen mayores exigencias en sistemas contra incendios (NFPA, NSR-10), drenaje de grandes superficies impermeables y tratamiento de aguas residuales industriales (PTAR).',
    necesitan: ['Sistema contra incendios NFPA / NSR-10 J', 'Drenaje pluvial industrial — grandes superficies', 'PTAR para aguas residuales industriales', 'Red hidrosanitaria de alta demanda'],
  },
  {
    tipo: 'Centros Comerciales y Desarrollos Mixtos',
    icon: '🏬',
    desc: 'Malls, plazas comerciales, centros de entretenimiento y proyectos mixtos (comercio + vivienda). BIC ejecutó el diseño hidrosanitario y contra incendios del Makarí Mall en Dosquebradas. La experiencia en proyectos comerciales de gran formato es demostrable con entregables verificables.',
    necesitan: ['Sistema contra incendios NSR-10 J/K obligatorio', 'Red hidrosanitaria de alta capacidad', 'Drenaje de cubiertas y áreas exteriores', 'Estudio riesgo si el predio está en zona amenaza'],
  },
  {
    tipo: 'Proyectos Institucionales',
    icon: '🏫',
    desc: 'Colegios, universidades, clínicas, hospitales, cárceles y sedes gubernamentales. Los proyectos institucionales de uso esencial (Grupo IV según NSR-10) tienen exigencias hidrosanitarias y de sistemas CI más estrictas. BIC tiene experiencia en proyectos con Rama Judicial y municipios en el Eje Cafetero.',
    necesitan: ['Sistemas CI obligatorios NSR-10 Título J', 'Red hidrosanitaria de uso intensivo', 'Estudio de suelos NSR-10', 'Gestión del riesgo si está en zona de amenaza'],
  },
  {
    tipo: 'Hoteles y Proyectos Turísticos',
    icon: '🏨',
    desc: 'Hoteles, resorts, complejos vacacionales y desarrollos ecoturísticos. Requieren sistemas hidrosanitarios de alta confiabilidad, manejo eficiente del agua, sistemas de detección y protección contra incendios y, en zonas rurales, diseño de sistemas de acueducto y tratamiento propios.',
    necesitan: ['Sistema hidrosanitario de alta confiabilidad', 'Tratamiento de agua PTAP si es fuera de red', 'Sistema CI obligatorio por uso hotelero', 'Estudio riesgo hídrico si es zona de expansión'],
  },
  {
    tipo: 'Desarrollos en Zonas de Riesgo o Expansión',
    icon: '⚠️',
    desc: 'Proyectos en suelo de expansión urbana o predios cerca de quebradas y ríos. El Decreto 1807/2014 exige estudio de amenaza y riesgo antes de urbanizar. BIC hace la modelación HEC-RAS 2D y determina qué parte del predio es urbanizable y con qué medidas de mitigación.',
    necesitan: ['Estudio inundabilidad HEC-RAS 2D obligatorio', 'Mapa de amenaza y riesgo para plan parcial', 'Medidas de mitigación (encauzamiento, dique)', 'Concepto CAR si hay cuerpos de agua cercanos'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico del Predio y Restricciones',
    desc: 'Revisión del POT municipal: uso del suelo, tratamiento urbanístico, índices de construcción e identificación de restricciones por riesgo hídrico, ambiental o normativas especiales. BIC verifica si el predio tiene amenaza alta o media por inundación o si está cerca de rondas hídricas — sin este diagnóstico no se puede planear correctamente el proyecto.',
    herramientas: ['Consulta POT y mapas de amenaza municipales', 'Verificación plano de usos del suelo', 'Revisión ronda hídrica y zonas de protección', 'Consulta disponibilidad de servicios públicos'],
    resultado: 'Diagnóstico de restricciones y lista de estudios técnicos requeridos para el proyecto específico',
  },
  {
    paso: '02',
    titulo: 'Topografía y Levantamiento del Predio',
    desc: 'Levantamiento topográfico del predio a escala adecuada para el diseño de lotes, vías internas y redes de servicios. Generación del Modelo Digital de Terreno (MDT) para diseño hidráulico de drenaje pluvial y estudio de inundabilidad. Georeferenciación en MAGNA-SIRGAS. Para predios grandes se combina levantamiento convencional con dron.',
    herramientas: ['Levantamiento topográfico RTK/GPS convencional', 'Fotogrametría con dron para predios extensos', 'Modelo Digital de Terreno — QGIS', 'Georeferenciación MAGNA-SIRGAS'],
    resultado: 'Plano topográfico georreferenciado y MDT del predio como insumo para todos los diseños',
  },
  {
    paso: '03',
    titulo: 'Estudio de Riesgo Hídrico — Decreto 1807/2014',
    desc: 'Si el predio está en zona de amenaza media o alta o limita con quebradas o ríos, BIC realiza la modelación HEC-RAS 2D para determinar las zonas inundables para períodos de retorno de 10, 25, 50 y 100 años. El mapa de amenaza define qué áreas son urbanizables y cuáles son zona de protección, información crítica para el diseño del loteo.',
    herramientas: ['HEC-RAS 2D (modelación bidimensional)', 'HEC-HMS (hidrología de cuencas)', 'QGIS / ArcGIS Pro (mapas de amenaza)', 'Datos hidrológicos IDEAM'],
    resultado: 'Mapa de amenaza hídrica T=10/25/50/100 años + áreas urbanizables + medidas de mitigación requeridas',
  },
  {
    paso: '04',
    titulo: 'Diseño de Redes Hidrosanitarias de Urbanización',
    desc: 'Diseño de la red de acueducto (cálculo de demandas, dimensionamiento de tuberías, presiones, tanques de almacenamiento), alcantarillado sanitario (colectores, pozos de inspección, conexiones domiciliarias) y alcantarillado pluvial (caudales de diseño, sumideros, colectores, punto de descarga). Memorias de cálculo conforme a Resolución 0330/2017 y RAS 2017.',
    herramientas: ['EPANET (modelación red de acueducto)', 'EPA-SWMM (alcantarillado pluvial)', 'AutoCAD Civil 3D (planos)', 'Resolución 0330/2017 + RAS 2017'],
    resultado: 'Memorias de cálculo + planos de redes en AutoCAD listos para radicación en ESP y curaduría',
  },
  {
    paso: '05',
    titulo: 'Sistemas Contra Incendios y Acompañamiento hasta la Licencia',
    desc: 'Para proyectos con obligación de sistema CI (NSR-10 Título J): diseño de rociadores, gabinetes, red de hidrantes exteriores y detección de humo. BIC responde a las observaciones técnicas que formulen la curaduría o la empresa de servicios públicos hasta la aprobación final. Un solo contrato cubre todos los estudios de ingeniería.',
    herramientas: ['NSR-10 Títulos I, J, K', 'NFPA 13 (rociadores)', 'NTC 2301 (hidrantes)', 'Acompañamiento en curaduría hasta aprobación'],
    resultado: 'Expediente técnico completo de ingeniería para radicación y aprobación de licencia de urbanismo',
  },
]

const CLIENTES = [
  {
    perfil: 'Promotores Inmobiliarios',
    desc: 'Firmas constructoras y promotores que desarrollan conjuntos residenciales, condominios campestres y urbanizaciones de casas. BIC entrega todos los estudios de ingeniería bajo un solo contrato.',
    ejemplo: 'Diseño hidrosanitario + riesgo hídrico para conjunto de 120 casas',
  },
  {
    perfil: 'Desarrolladores Industriales',
    desc: 'Promotores de parques industriales, zonas francas y centros logísticos. Proyectos con exigencias en CI, PTAR y drenaje de grandes superficies impermeables.',
    ejemplo: 'Diseño CI NFPA + redes hidrosanitarias para parque industrial',
  },
  {
    perfil: 'Constructoras de Proyectos Comerciales',
    desc: 'Constructoras que desarrollan centros comerciales, malls, plazas y proyectos mixtos. BIC ha diseñado los sistemas hidrosanitarios y CI del Makarí Mall en Dosquebradas.',
    ejemplo: 'Diseño completo CI + hidrosanitario para mall comercial',
  },
  {
    perfil: 'Municipios — Plan Parcial',
    desc: 'Municipios que deben elaborar el componente hidráulico e hídrico de planes parciales de expansión urbana. BIC elabora el estudio de riesgo y el diseño de redes para el plan.',
    ejemplo: 'Estudio riesgo hídrico + redes de servicios para plan parcial',
  },
  {
    perfil: 'Inversionistas con Terrenos',
    desc: 'Propietarios de terrenos que quieren saber qué pueden construir y qué estudios técnicos necesitan antes de desarrollar el predio. BIC hace el diagnóstico inicial sin costo.',
    ejemplo: 'Diagnóstico del predio + lista de estudios requeridos',
  },
  {
    perfil: 'Constructoras en Zona de Riesgo',
    desc: 'Proyectos en predios con quebradas, ríos o en zonas de expansión con amenaza hídrica media o alta. BIC realiza la modelación HEC-RAS 2D y diseña las obras de mitigación necesarias.',
    ejemplo: 'Estudio HEC-RAS 2D + diseño encauzamiento para urbanización en zona inundable',
  },
]

const NORMATIVA = [
  { norma: 'Resolución 0330/2017', aplicacion: 'RAS vigente — diseño de acueducto, alcantarillado sanitario y pluvial para urbanizaciones' },
  { norma: 'Decreto 1807/2014', aplicacion: 'Estudio de amenaza y riesgo hídrico obligatorio para licencias de urbanismo en zonas de amenaza' },
  { norma: 'NSR-10 Título I, J, K', aplicacion: 'Instalaciones hidráulicas y sanitarias, sistemas contra incendios para edificaciones' },
  { norma: 'NFPA 13 / NTC 2301', aplicacion: 'Diseño de rociadores automáticos e hidrantes exteriores para proyectos industriales y comerciales' },
  { norma: 'Decreto 1076/2015', aplicacion: 'Trámites ante CAR: permiso de ocupación de cauce y concesión de aguas si hay intervención hídrica' },
  { norma: 'Ley 388/1997', aplicacion: 'Ordenamiento territorial, planes parciales y licencias de urbanismo en Colombia' },
]

const FAQ = [
  {
    q: '¿Qué estudios necesita mi urbanización antes de pedir la licencia?',
    a: 'Los estudios técnicos más frecuentes son: (1) diseño de redes hidrosanitarias (acueducto, alcantarillado sanitario y pluvial) conforme a la Resolución 0330/2017 y el RAS 2017; (2) estudio de amenaza y riesgo hídrico si el predio está cerca de quebradas o ríos o en zona de amenaza según el POT; (3) topografía del predio; y (4) concepto ambiental de la CAR si hay intervención de rondas o cuerpos de agua. BIC elabora todos estos documentos bajo un solo contrato.',
  },
  {
    q: '¿Qué pasa si mi terreno está cerca de una quebrada o río?',
    a: 'Necesita un estudio de inundabilidad con modelación HEC-RAS 2D antes de tramitar cualquier licencia. El Decreto 1807/2014 lo exige cuando el predio tiene amenaza media o alta. BIC hace la modelación y le dice exactamente qué parte del terreno puede desarrollar, cuál debe ser zona verde de protección y si se necesitan obras de mitigación como encauzamiento o diques. La curaduría no expide la licencia sin el estudio en zonas de amenaza.',
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
    a: 'Depende del tipo de estudio. Para topografía y estudios de suelos es necesaria la visita de campo. Para el diseño hidrosanitario, si el promotor entrega la topografía del predio y la información de la empresa de servicios públicos, BIC puede avanzar de forma remota y hacer una visita puntual de verificación. Para proyectos en el Eje Cafetero, Caldas y Risaralda BIC siempre visita el predio; para otras regiones se coordina el desplazamiento.',
  },
  {
    q: '¿En qué regiones de Colombia trabaja BIC para urbanizaciones?',
    a: 'BIC tiene base en Manizales pero atiende proyectos en todo Colombia. Ha ejecutado proyectos en Caldas, Risaralda, Valle del Cauca, Boyacá, Cundinamarca, Magdalena y en Ecuador. Para diseños hidrosanitarios, si el cliente entrega la información base, gran parte del trabajo se hace de forma remota con visita puntual de verificación cuando el proyecto lo requiere.',
  },
  {
    q: '¿Qué pasa si la curaduría le hace observaciones técnicas a los diseños de BIC?',
    a: 'BIC incluye dentro del alcance del contrato la atención de observaciones técnicas que formule la curaduría o la empresa de servicios públicos a los diseños entregados. Si hay ajustes razonables a los diseños originales, BIC los realiza sin costo adicional hasta la aprobación de la licencia. Solo cobra adicional si el cambio obedece a una modificación del proyecto por decisión del promotor.',
  },
  {
    q: '¿La urbanización necesita sistema contra incendios obligatoriamente?',
    a: 'Depende del tipo de proyecto. Para conjuntos residenciales de casas de 1 o 2 pisos generalmente no se exige. Para edificios de apartamentos de 3 o más pisos, centros comerciales, bodegas industriales, hoteles y proyectos institucionales, el NSR-10 Título J obliga a diseñar sistemas CI. BIC le indica si su proyecto lo requiere en el diagnóstico inicial gratuito.',
  },
]

const RELACIONADOS = [
  { href: '/licencia-de-urbanismo', label: '📋 Licencia de urbanismo — estudios exigidos' },
  { href: '/gestion-riesgo-hidrico', label: '⚠️ Gestión del riesgo hídrico Decreto 1807' },
  { href: '/ingenieria-proyectos-urbanisticos-colombia', label: '🏗️ Ingeniería para proyectos urbanísticos' },
  { href: '/plan-parcial-colombia', label: '🗺️ Plan parcial en Colombia' },
  { href: '/servicios/redes-hidrosanitarias', label: '💧 Redes hidrosanitarias' },
  { href: '/servicios/acueducto-alcantarillado', label: '🔧 Acueducto y alcantarillado' },
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
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {['Res. 0330/2017','RAS 2017','Decreto 1807/2014','NSR-10 J/K','NFPA 13','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#17A2B8', padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {STATS.map(n => (
            <div key={n.desc} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28, color: '#fff', lineHeight: 1 }}>{n.valor}</div>
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
            {TIPOS.map(t => (
              <div key={t.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, borderTop: '3px solid #17A2B8' }}>
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

      {/* ── CTA MEDIO ── */}
      <section style={{ background: '#f0f9ff', padding: '40px 24px', borderTop: '1px solid #b3e0ea', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 18, color: '#002A50', marginBottom: 6 }}>¿No sabe exactamente qué estudios necesita?</p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6 }}>BIC le hace un diagnóstico inicial gratuito. Cuéntenos el predio y el tipo de proyecto.</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', flexShrink: 0 }}>
            📱 WhatsApp
          </a>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cómo trabaja BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Proceso: del diagnóstico del predio a la licencia aprobada
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, position: 'relative', paddingBottom: 32 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 13,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e2e8f0', marginTop: 8, minHeight: 24 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#e8f4f8', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#17A2B8', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#444', fontSize: 12, lineHeight: 1.6 }}>
                        {p.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#f0faf0', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#28a745', marginBottom: 6 }}>RESULTADO</p>
                      <p style={{ color: '#444', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{p.resultado}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Perfiles de clientes — urbanizaciones en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            El mayor problema que tienen los promotores al tramitar una urbanización
            es coordinar múltiples firmas de ingeniería. BIC resuelve eso: un solo contrato, todos los estudios.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {CLIENTES.map(c => (
              <div key={c.perfil} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10, padding: 22 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 8 }}>{c.perfil}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{c.desc}</p>
                <div style={{ background: '#f8f9fa', borderRadius: 6, padding: '8px 12px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 3 }}>EJEMPLO</p>
                  <p style={{ color: '#444', fontSize: 12, margin: 0 }}>{c.ejemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco normativo</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 24 }}>
            Normativa aplicable a ingeniería de urbanizaciones
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#002A50', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Norma</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Aplicación en urbanizaciones</th>
                </tr>
              </thead>
              <tbody>
                {NORMATIVA.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: '#003B6F', whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '11px 16px', color: '#444', lineHeight: 1.5 }}>{n.aplicacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── RELACIONADOS ── */}
      <Section>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Más información</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 24 }}>
            Páginas relacionadas con su proyecto
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
            {RELACIONADOS.map(l => (
              <a key={l.href} href={l.href} style={{
                display: 'block', padding: '14px 18px',
                background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 8, color: '#002A50', textDecoration: 'none',
                fontWeight: 600, fontSize: 13, lineHeight: 1.4,
              }}>{l.label}</a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Lo que más nos preguntan los promotores y constructores
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 10, padding: 24, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
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
