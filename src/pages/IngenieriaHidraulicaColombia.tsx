import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito consultoría en ingeniería hidráulica para un proyecto en Colombia')

const seoConfig = {
  title: 'Ingeniería Hidráulica Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Consultoría especializada en ingeniería hidráulica para proyectos en Colombia. Modelación HEC-RAS 2D, diseño hidrosanitario NSR-10, acueductos RAS 2017, riesgo hídrico Decreto 1807, regalías MGA-Web. COPNIA 17202-313228. Atención nacional.',
  keywords: [
    'ingeniería hidráulica Colombia',
    'consultoría hidráulica Colombia',
    'consultor ingeniería hidráulica Colombia',
    'modelación HEC-RAS Colombia',
    'diseño hidrosanitario Colombia',
    'acueductos alcantarillados Colombia',
    'estudios riesgo hídrico Colombia',
    'gestión riesgo inundaciones Colombia',
    'ingeniero civil consultor Colombia',
    'firma consultora hidráulica Colombia',
    'BIC Bernal Ingeniería Consultores',
    'ingeniero hidráulico COPNIA Colombia',
    'estudio amenaza inundación Colombia',
    'formulación proyectos regalías MGA',
    'HEC-RAS 2D Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/ingenieria-hidraulica-colombia',
}

const STATS = [
  { valor: '10+', desc: 'años de experiencia en proyectos hidráulicos en Colombia' },
  { valor: 'HEC-RAS 6.x', desc: 'modelación 1D y 2D en todos los proyectos' },
  { valor: 'COPNIA', desc: 'matrícula 17202-313228 CLD vigente' },
  { valor: '24h', desc: 'propuesta técnica y económica sin costo' },
]

const SERVICIOS = [
  {
    icon: '🖥️',
    titulo: 'Modelación Hidráulica HEC-RAS 1D/2D',
    desc: 'Determinación de manchas de inundación, perfiles de la superficie libre, caudales de diseño y análisis de medidas de mitigación. Compatible con requisitos del Decreto 1807/2014, UNGRD, CAR y Curadurías Urbanas para todo Colombia.',
    clientes: ['Alcaldías y municipios', 'Empresas constructoras', 'Promotores inmobiliarios', 'CAR y UNGRD'],
  },
  {
    icon: '🌊',
    titulo: 'Estudios Hidrológicos — HEC-HMS',
    desc: 'Análisis de cuencas hidrográficas, curvas IDF, caudales máximos por período de retorno y tránsito de crecientes con HEC-HMS. Insumo obligatorio para modelos hidráulicos, diseño de obras de drenaje y formulación de proyectos del SGR.',
    clientes: ['Constructoras de infraestructura vial', 'Entidades financiadoras SGR', 'ESP y acueductos municipales', 'CAR — permisos ambientales'],
  },
  {
    icon: '🏗️',
    titulo: 'Diseño Hidrosanitario NSR-10',
    desc: 'Redes de agua fría, agua caliente, aguas residuales y aguas lluvias para edificaciones residenciales, comerciales e industriales. Memorias de cálculo, planos y especificaciones conforme a NSR-10 Título I, RAS 2017 y NTC 1500.',
    clientes: ['Constructoras residenciales', 'Promotores inmobiliarios', 'Entidades institucionales', 'Proyectos comerciales e industriales'],
  },
  {
    icon: '🔥',
    titulo: 'Sistemas Contra Incendios NSR-10',
    desc: 'Diseño de redes CI húmedas y secas, rociadores automáticos NFPA 13, hidrantes exteriores NTC 2301 y detección de humo para edificaciones de todo tipo. Memorias aceptadas por Bomberos en todo Colombia.',
    clientes: ['Centros comerciales y malls', 'Parques industriales y bodegas', 'Hoteles e instituciones', 'Proyectos de uso especial NSR-10'],
  },
  {
    icon: '💧',
    titulo: 'Acueductos y Alcantarillados — RAS 2017',
    desc: 'Diseño de redes de distribución, colectores, PTAP y PTAR para municipios, constructoras y ESP. Cumplimiento de Resolución 0330/2017, Decreto 1575/2007 y criterios del SGR. Memorias firmadas COPNIA vigente.',
    clientes: ['Municipios y alcaldías', 'ESP y operadores de acueducto', 'Constructoras de urbanizaciones', 'Proyectos regalías SGR'],
  },
  {
    icon: '⚠️',
    titulo: 'Gestión del Riesgo Hídrico',
    desc: 'Mapas de amenaza por inundación y avenidas torrenciales, conceptos de aptitud urbanística conforme al Decreto 1807/2014, planes municipales de gestión del riesgo (PMGR) y acompañamiento en Ley 1523/2012.',
    clientes: ['Alcaldías — POT y PMGR', 'Curadurías y Planeación Municipal', 'Promotores con predios en amenaza', 'UNGRD y entidades sectoriales'],
  },
  {
    icon: '📋',
    titulo: 'Formulación Proyectos Regalías MGA-Web',
    desc: 'Estructuración y registro de proyectos de agua potable y saneamiento en MGA-Web del DNP para el Sistema General de Regalías (SGR). Estudios técnicos, presupuestos APU y documentación completa para OCAD.',
    clientes: ['Alcaldías con acceso a regalías SGR', 'Gobernaciones y entidades departamentales', 'Entidades del sector agua y saneamiento', 'Operadores ESP rurales'],
  },
  {
    icon: '🔍',
    titulo: 'Interventoría Técnica Hidráulica',
    desc: 'Supervisión técnica e interventoría de obras de acueducto, alcantarillado, drenaje urbano y estructuras hidráulicas para municipios, gobernaciones y entidades públicas en todo el territorio nacional.',
    clientes: ['Municipios en ejecución de obras', 'Gobernaciones y entidades departamentales', 'Constructoras como soporte al cliente', 'Entidades financiadoras de proyectos'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico y Propuesta Técnica',
    desc: 'BIC revisa el alcance del proyecto, identifica las restricciones técnicas y normativas específicas (POT, normas CAR, COPNIA, entidad financiadora) y elabora una propuesta técnica y económica detallada en menos de 24 horas. Sin costo para el cliente. Si el proyecto es de regalías SGR, BIC también orienta sobre el proceso de registro en MGA-Web y OCAD.',
    herramientas: ['Revisión POT y normas locales', 'Consulta mapas de amenaza', 'Verificación normativa aplicable', 'Estimación de alcance y tiempos'],
    resultado: 'Propuesta técnica y económica detallada con alcance, metodología, plazo y costo en 24 horas',
  },
  {
    paso: '02',
    titulo: 'Recopilación de Información y Campo',
    desc: 'Recopilación de información hidrológica del IDEAM (estaciones, registros pluviométricos e hidrométricos), cartografía, información de redes existentes y datos del proyecto. Visita de campo para verificación de condiciones del predio, reconocimiento del cauce y batimetría cuando aplica. Georeferenciación en MAGNA-SIRGAS.',
    herramientas: ['IDEAM — datos hidrológicos y pluviométricos', 'IGAC — cartografía y MDT', 'Levantamiento topográfico RTK/GPS', 'Datos de la empresa de servicios públicos'],
    resultado: 'Base de datos técnicos completa del proyecto: hidrología, topografía, cartografía y datos de redes',
  },
  {
    paso: '03',
    titulo: 'Análisis y Modelación Especializada',
    desc: 'Análisis hidrológico con HEC-HMS (cuencas, IDF, caudales), modelación hidráulica con HEC-RAS 1D/2D (inundación, diseño de obras), diseño de redes con EPANET y EPA-SWMM. Los resultados se validan con la normativa aplicable y se mapean en QGIS y ArcGIS Pro para generar los mapas y planos técnicos.',
    herramientas: ['HEC-HMS + HEC-RAS 6.x 1D/2D', 'EPANET / EPA-SWMM', 'QGIS / ArcGIS Pro', 'AutoCAD Civil 3D'],
    resultado: 'Modelos hidráulicos e hidrológicos calibrados, mapas de inundación y diseños hidráulicos verificados',
  },
  {
    paso: '04',
    titulo: 'Memoria de Cálculo y Planos Constructivos',
    desc: 'Documento técnico completo con toda la metodología, datos de entrada, resultados y verificaciones de diseño — firmado por el director técnico con matrícula COPNIA 17202-313228 CLD vigente. Planos en AutoCAD con escalas, detalles constructivos y cuadro de convenciones. Presupuesto con APU y especificaciones técnicas.',
    herramientas: ['Memoria de cálculo firmada COPNIA', 'Planos AutoCAD (planta, perfil, detalles)', 'APU + presupuesto de obra', 'Especificaciones técnicas generales y particulares'],
    resultado: 'Expediente técnico completo firmado — listo para licitar, obtener permisos o financiar con regalías',
  },
  {
    paso: '05',
    titulo: 'Acompañamiento hasta la Aprobación',
    desc: 'BIC atiende las observaciones técnicas que formulen la curaduría, la CAR, la empresa de servicios públicos, el OCAD o cualquier entidad revisora. Los ajustes razonables al diseño están incluidos dentro del contrato. BIC no abandona el proyecto hasta que el entregable sea aceptado por la entidad competente.',
    herramientas: ['Atención de observaciones técnicas escritas', 'Reuniones con entidades revisoras', 'Ajuste de memorias y planos', 'Comunicación directa — sin intermediarios'],
    resultado: 'Aprobación del informe o diseño por la entidad competente: curaduría, CAR, ESP o OCAD',
  },
]

const CLIENTES = [
  {
    perfil: 'Municipios y Alcaldías',
    desc: 'Estudios de riesgo hídrico para POT y PMGR, diseño de acueductos y alcantarillados, formulación de proyectos regalías SGR e interventoría de obras de saneamiento. BIC trabaja con alcaldías de todos los tamaños en Colombia.',
    ejemplo: 'Formulación proyecto acueducto rural SGR + MGA-Web para municipio de Caldas',
  },
  {
    perfil: 'Constructoras y Promotores',
    desc: 'Diseño hidrosanitario y contra incendios de edificaciones, estudios de riesgo hídrico para licencias de urbanismo, diseño de redes para conjuntos residenciales y parques industriales en todo el territorio nacional.',
    ejemplo: 'Diseño hidrosanitario + CI para conjunto residencial de 200 unidades',
  },
  {
    perfil: 'Empresas de Servicios Públicos (ESP)',
    desc: 'Diseño de bocatomas, PTAP, PTAR, redes de distribución y alcantarillados para empresas prestadoras de servicios públicos domiciliarios de agua y saneamiento. Entregables conforme a Resolución 0330/2017.',
    ejemplo: 'Diseño bocatoma + planta de tratamiento ESP municipal',
  },
  {
    perfil: 'CAR y Entidades Ambientales',
    desc: 'Estudios técnicos para permisos de ocupación de cauce, concesiones de agua, planes de manejo ambiental y conceptos de aptitud urbanística. BIC ha tramitado ante Corpocaldas, CARDER, Corantioquia y otras CAR del país.',
    ejemplo: 'Estudio técnico para permiso de ocupación de cauce y concesión de aguas',
  },
  {
    perfil: 'Entidades con Proyectos SGR',
    desc: 'Estructuración técnica de proyectos de agua potable y saneamiento para el Sistema General de Regalías. BIC elabora la prefactibilidad, factibilidad y diseños definitivos con los formatos exigidos por el DNP y el OCAD.',
    ejemplo: 'Registro proyecto acueducto veredal en MGA-Web + diseños definitivos para OCAD',
  },
  {
    perfil: 'Proyectos en Ecuador y Latinoamérica',
    desc: 'BIC ha ejecutado proyectos de ingeniería hidráulica en Ecuador (Guayaquil) y México. Para proyectos en el exterior se adaptan los entregables a la normativa local vigente (SENAGUA, TULSMA, NEC en Ecuador). Primera consulta sin costo.',
    ejemplo: 'Diseño PTAR industrial para planta agroindustrial en Ecuador',
  },
]

const NORMATIVA = [
  { norma: 'Resolución 0330/2017', desc: 'RAS vigente — Reglamento Técnico Sector Agua Potable y Saneamiento Básico' },
  { norma: 'Decreto 1807/2014', desc: 'Riesgo hídrico en instrumentos de ordenamiento territorial y licencias de urbanismo' },
  { norma: 'NSR-10 Títulos I, J, K', desc: 'Instalaciones hidráulicas, sanitarias y sistemas de protección contra incendios' },
  { norma: 'Ley 1523/2012', desc: 'Política nacional de gestión del riesgo de desastres — planes municipales PMGR' },
  { norma: 'NTC 1500 / 1669 / 2301', desc: 'Normas técnicas colombianas para fontanería, rociadores e hidrantes' },
  { norma: 'Decreto 1076/2015', desc: 'Permiso de ocupación de cauce, concesión de aguas y caudal ecológico' },
  { norma: 'Decreto 1575/2007', desc: 'Calidad del agua potable — IRCA, SIVICAP y vigilancia sanitaria' },
  { norma: 'INVIAS — Drenaje Vial', desc: 'Diseño de alcantarillas, box culvert y drenaje transversal y longitudinal en vías' },
]

const REGIONES = [
  { region: 'Eje Cafetero', ciudades: 'Manizales, Pereira, Armenia, Dosquebradas, Chinchiná, La Dorada' },
  { region: 'Bogotá y Cundinamarca', ciudades: 'Bogotá D.C., Mosquera, Facatativá, Chía, Zipaquirá' },
  { region: 'Medellín y Antioquia', ciudades: 'Medellín, Rionegro, Guarne, Envigado, Bello' },
  { region: 'Cali y Valle del Cauca', ciudades: 'Cali, Palmira, Cartago, Cerritos, Tuluá' },
  { region: 'Bucaramanga y Santander', ciudades: 'Bucaramanga, Floridablanca, Girón, Barrancabermeja' },
  { region: 'Barranquilla y Costa Caribe', ciudades: 'Barranquilla, Montería, Valledupar, Santa Marta' },
  { region: 'Boyacá y Llanos', ciudades: 'Tunja, Duitama, Sogamoso, Villavicencio, Yopal' },
  { region: 'Ecuador y Latinoamérica', desc: 'Guayaquil, Quito y otras ciudades — entregables adaptados a normativa TULSMA / SENAGUA' },
]

const FAQ = [
  {
    q: '¿BIC trabaja en proyectos fuera del Eje Cafetero?',
    a: 'Sí. BIC tiene proyectos verificables en Bogotá, Medellín, Cali, Puerto Boyacá, Ecuador y México. Para proyectos en otras ciudades, el equipo se desplaza o coordina el trabajo de campo con aliados locales. Los diseños, memorias de cálculo y modelos hidráulicos se elaboran en Manizales con entrega digital en todo Colombia y el exterior.',
  },
  {
    q: '¿Cuánto tiempo toma una consultoría hidráulica?',
    a: 'Depende del alcance. Un estudio de amenaza por inundación para un plan parcial toma entre 3 y 6 semanas. Un diseño hidrosanitario completo para un edificio de 8 pisos toma entre 2 y 4 semanas. Una formulación MGA-Web para el SGR toma entre 4 y 8 semanas incluyendo estudios previos. El plazo exacto se define en la propuesta técnica sin costo.',
  },
  {
    q: '¿Qué credenciales tiene el equipo BIC?',
    a: 'El director técnico es Rogerio Bernal Ríos, Ingeniero Civil de la Universidad Nacional de Colombia con Especialización en Ingeniería Hidráulica y Ambiental (UNAL Manizales), matrícula profesional COPNIA 17202-313228 CLD vigente. Todos los informes están firmados por profesional legalmente habilitado para ejercer en Colombia.',
  },
  {
    q: '¿Qué software utiliza BIC para sus estudios hidráulicos?',
    a: 'Los proyectos hidráulicos se modelan con HEC-RAS 6.x (1D y 2D), HEC-HMS, EPANET, EPA-SWMM. Los diseños se elaboran en AutoCAD Civil 3D. La cartografía se procesa en ArcGIS Pro y QGIS. Los presupuestos se estructuran con APU completas. Para proyectos especiales se usa SLOPE/W (geotecnia), IBER o TETIS según el caso.',
  },
  {
    q: '¿Cuál es el costo de una consultoría hidráulica en Colombia?',
    a: 'El costo varía según el alcance y la complejidad. Un estudio de riesgo hídrico para un plan parcial oscila entre $15 y $40 millones COP. Un diseño hidrosanitario y CI para un edificio comercial entre $8 y $25 millones. La formulación MGA-Web de un proyecto de acueducto entre $10 y $20 millones. La primera consulta es gratuita y la propuesta se entrega en 24 horas.',
  },
  {
    q: '¿Por qué se necesita matrícula COPNIA para firmar estudios hidráulicos en Colombia?',
    a: 'La Ley 842/2003 y el Decreto 543/2002 exigen que los estudios técnicos de ingeniería que se presentan ante entidades públicas, CAR, curadurías y financiadores de proyectos (SGR, banca multilateral) estén firmados por ingeniero con matrícula profesional vigente del COPNIA. Sin esta firma el documento no tiene validez legal en Colombia. BIC firma todos los entregables con matrícula COPNIA 17202-313228 CLD vigente.',
  },
  {
    q: '¿BIC puede formular proyectos de agua para el SGR (regalías) de un municipio?',
    a: 'Sí. BIC tiene experiencia en la formulación de proyectos de agua potable y saneamiento básico para el Sistema General de Regalías usando MGA-Web del DNP. El proceso incluye los estudios técnicos de prefactibilidad y factibilidad, el registro del proyecto en MGA-Web con todos los módulos requeridos, y los diseños definitivos del sistema para presentar al OCAD. BIC acompaña el proceso hasta la aprobación.',
  },
  {
    q: '¿Cuáles son los estudios más frecuentes que solicitan los municipios a BIC?',
    a: 'Los municipios contratan principalmente: (1) estudios de amenaza hídrica para actualización del POT o planes parciales (HEC-RAS 2D, Decreto 1807/2014); (2) planes municipales de gestión del riesgo (PMGR, Ley 1523/2012); (3) diseño de acueductos y alcantarillados rurales para proyectos de regalías; (4) interventoría técnica de obras de saneamiento; y (5) diseño de bocatomas para sistemas de agua potable. BIC atiende todos estos servicios.',
  },
]

const RELACIONADOS = [
  { href: '/servicios/modelacion-hec-ras', label: '🖥️ Modelación HEC-RAS 2D' },
  { href: '/servicios/estudios-hidrologicos', label: '🌊 Estudios hidrológicos HEC-HMS' },
  { href: '/gestion-riesgo-hidrico', label: '⚠️ Gestión del riesgo hídrico' },
  { href: '/obras-hidraulicas-colombia', label: '🔵 Obras hidráulicas — bocatomas y encauzamientos' },
  { href: '/servicios/regalias-mga', label: '📋 Proyectos regalías MGA-Web' },
  { href: '/ingenieria-hidraulica-colombia-desde-manizales', label: '📍 BIC Manizales — cobertura nacional' },
]

export default function IngenieriaHidraulicaColombia() {
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
          <SectionLabel light>Consultoría Nacional · Todo Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Ingeniería Hidráulica en Colombia<br />
            <span style={{ color: '#17A2B8' }}>Consultoría Especializada con Cobertura Nacional</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36 }}>
            BIC Bernal Ingeniería Consultores presta servicios de consultoría en ingeniería hidráulica
            en todo el territorio colombiano. Modelación HEC-RAS 2D, diseño hidrosanitario NSR-10,
            acueductos conforme al RAS 2017, gestión del riesgo hídrico y formulación de proyectos
            SGR para municipios, constructoras y entidades públicas. Director técnico con matrícula
            COPNIA 17202-313228 CLD vigente y más de 10 años de experiencia en Colombia, Ecuador y México.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Solicitar cotización</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {['Cobertura Nacional', 'COPNIA Vigente', 'HEC-RAS 2D', 'NSR-10', 'RAS 2017', 'Decreto 1807/2014'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#17A2B8', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#17A2B8', padding: '32px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {STATS.map(s => (
            <div key={s.desc} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 24, color: '#fff', lineHeight: 1 }}>{s.valor}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Nuestros servicios</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Servicios de Ingeniería Hidráulica en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            BIC cubre el espectro completo de la ingeniería hidráulica: desde la hidrología de una cuenca
            hasta el diseño detallado de la obra y la firma de la memoria de cálculo ante la entidad competente.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SERVICIOS.map(s => (
              <div key={s.titulo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 26, borderTop: '3px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{s.titulo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 10 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12 }}>
                    {s.clientes.map(c => <li key={c}>{c}</li>)}
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
            <p style={{ fontWeight: 700, fontSize: 18, color: '#002A50', marginBottom: 6 }}>¿Tiene un proyecto hidráulico en Colombia?</p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6 }}>Cuéntenos el municipio, el tipo de servicio y la entidad a la que debe entregar. Propuesta en 24 horas.</p>
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
            Proceso: del diagnóstico a la aprobación del informe
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
            Perfiles de clientes — ingeniería hidráulica en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            Desde municipios de 10.000 habitantes hasta macroproyectos inmobiliarios y obras de infraestructura financiadas con regalías.
            BIC escala su capacidad al tamaño del proyecto.
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
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 12 }}>
            Normativa que aplica en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 720 }}>
            La ingeniería hidráulica en Colombia se rige por un cuerpo normativo riguroso que exige
            profesionales certificados y estudios técnicos documentados. BIC conoce y aplica en cada
            proyecto la normativa vigente, garantizando que los entregables sean aceptados por curadurías,
            CAR, entidades financiadoras y Bomberos.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#002A50', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Norma</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Descripción y aplicación</th>
                </tr>
              </thead>
              <tbody>
                {NORMATIVA.map((n, i) => (
                  <tr key={n.norma} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                    <td style={{ padding: '11px 16px', fontWeight: 700, color: '#003B6F', whiteSpace: 'nowrap' }}>{n.norma}</td>
                    <td style={{ padding: '11px 16px', color: '#444', lineHeight: 1.5 }}>{n.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── REGIONES ── */}
      <Section>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Cobertura geográfica</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 12 }}>
            Regiones con presencia activa en Colombia y el exterior
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 720 }}>
            BIC tiene su sede en Manizales y atiende proyectos en todo Colombia. El trabajo de campo
            se coordina directamente con el cliente. Los diseños y modelos hidráulicos se elaboran
            en Manizales y se entregan digitalmente con todos los soportes técnicos.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
            {REGIONES.map(r => (
              <div key={r.region} style={{ background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 8, padding: '14px 18px' }}>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: '#002A50', marginBottom: 4 }}>{r.region}</h3>
                <p style={{ color: '#555', fontSize: 13, margin: 0 }}>{r.ciudades || r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── RELACIONADOS ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 24 }}>
            Explore los servicios especializados de BIC
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
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Preguntas Frecuentes — Ingeniería Hidráulica Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FAQ.map(faq => (
              <div key={faq.q} style={{ background: '#f8f9fa', border: '1px solid #e2e8f0', borderRadius: 10, padding: 24 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 10, color: '#002A50' }}>{faq.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#17A2B8', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16 }}>
            ¿Tiene un proyecto hidráulico en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Cuéntenos el alcance del proyecto, el municipio, el tipo de servicio requerido y la entidad
            a la que debe entregar el informe. Le respondemos con propuesta técnica y presupuesto
            en menos de 24 horas. Primera consulta sin costo.
          </p>
          <a
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '14px 36px',
              background: '#fff', color: '#17A2B8',
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
