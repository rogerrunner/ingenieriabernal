import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito consultoría en obras hidráulicas: bocatoma / canal / encauzamiento / protección fluvial')

const seoConfig = {
  title: 'Obras Hidráulicas Colombia: Bocatomas, Canales, Encauzamiento | BIC',
  description: 'BIC diseña obras hidráulicas en Colombia: bocatomas, canales de conducción, encauzamientos, diques y protección fluvial. Modelación HEC-RAS 2D, memorias de cálculo firmadas COPNIA. Municipios, ESP, constructoras y proyectos regalías SGR.',
  keywords: [
    'obras hidráulicas Colombia',
    'diseño bocatoma Colombia',
    'diseño canal de conducción Colombia',
    'encauzamiento río Colombia',
    'obra de protección fluvial Colombia',
    'dique protección inundación Colombia',
    'estructura hidráulica Colombia',
    'obras control torrencial Colombia',
    'gaviones Colombia diseño',
    'ingeniero hidráulico obras Colombia',
    'consultor bocatoma acueducto Colombia',
    'estudio hidrológico obra hidráulica',
    'diseño disipador energía hidráulica',
    'obras río Colombia ingeniería',
    'HEC-RAS diseño obra hidráulica',
    'box culvert diseño Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/obras-hidraulicas-colombia',
}

const STATS = [
  { valor: '10+', desc: 'años diseñando obras hidráulicas en Colombia' },
  { valor: 'HEC-RAS 2D', desc: 'modelación bidimensional en todos los proyectos' },
  { valor: 'COPNIA', desc: 'matrícula 17202-313228 CLD vigente' },
  { valor: '24 h', desc: 'propuesta técnica y económica sin costo' },
]

const TIPOS = [
  {
    icon: '🔵',
    tipo: 'Bocatomas y Captaciones',
    desc: 'Diseño hidráulico de bocatomas laterales, de fondo (Tyrolean) y sumergidas para acueductos municipales, distritos de riego e industria. Incluye análisis de sedimentos, rejilla de captación, cámara de aquietamiento, desarenador y estructura de control de caudal. Memoria de cálculo conforme al RAS 2017 y Resolución 0330/2017. Acompañamiento en concesión de aguas ante la CAR.',
    clientes: ['Empresas de acueducto y alcantarillado (ESP)', 'Alcaldías y municipios', 'Distritos de riego', 'Proyectos regalías SGR'],
  },
  {
    icon: '〰️',
    tipo: 'Canales de Conducción y Drenaje',
    desc: 'Diseño de canales abiertos, cubiertos y entubados para conducción de agua potable, riego, drenaje agrícola y manejo de aguas lluvias en urbanizaciones. Cálculo de sección hidráulica óptima, pendientes, revestimientos y obras de arte: caídas, rápidas, aforadores y disipadores de energía. Modelación con HEC-RAS 1D y EPANET.',
    clientes: ['Empresas agropecuarias y distritos riego', 'Municipios con proyectos de drenaje', 'Constructoras de infraestructura vial', 'Promotores inmobiliarios'],
  },
  {
    icon: '🌊',
    tipo: 'Encauzamiento y Corrección de Torrentes',
    desc: 'Diseño de obras de encauzamiento para ríos y quebradas: muros de encauzamiento en concreto y gavión, rectificaciones de cauce, obras de consolidación de fondo y control de socavación local. Modelación HEC-RAS 2D para verificar el comportamiento hidráulico con y sin obras propuestas. Permiso de ocupación de cauce ante CAR incluido en el alcance.',
    clientes: ['Municipios con ríos en zona urbana', 'Constructoras en obras lineales', 'Empresas de infraestructura vial', 'CAR y UNGRD'],
  },
  {
    icon: '🛡️',
    tipo: 'Diques, Jarillones y Protección Fluvial',
    desc: 'Diseño de jarillones, diques de tierra compactada y estructuras de protección fluvial para reducir el riesgo de inundación en zonas urbanas, rurales e industriales. Análisis de estabilidad del dique, diseño de filtros y drenes, y modelación HEC-RAS 2D para verificar la eficacia de la protección para períodos de retorno T=10, 25, 50 y 100 años.',
    clientes: ['Alcaldías y Unidades de Gestión del Riesgo', 'Propietarios de predios en zonas inundables', 'Empresas con infraestructura en zona hídrica', 'Constructoras'],
  },
  {
    icon: '🪨',
    tipo: 'Gaviones, Muros y Estabilización de Cauce',
    desc: 'Diseño de estructuras de gaviones, muros de contención hídrica y obras de estabilización de taludes en zonas de erosión fluvial o amenaza por remoción en masa. Integración del análisis hidrológico con el geotécnico. Especialmente indicado para obras en zonas de ladera con corrientes de agua en el Eje Cafetero, Andes y zonas de alta torrencialidad.',
    clientes: ['Municipios con problemas de erosión de cauce', 'Constructoras viales en ladera', 'Propietarios de predios ribereños', 'CAR y UNGRD'],
  },
  {
    icon: '⚡',
    tipo: 'Disipadores, Alcantarillas y Box Culvert',
    desc: 'Diseño de disipadores de energía (trampolines, cuencos amortiguadores, rápidas escalonadas), alcantarillas hidráulicas y box culvert para pasos de vía, obras de drenaje transversal y estructuras de control. Dimensionamiento hidráulico conforme a criterios INVIAS, cálculo estructural y planos constructivos en AutoCAD listos para licitar.',
    clientes: ['Constructoras de obras hidráulicas', 'Empresas de infraestructura vial', 'Proyectos de infraestructura SGR', 'Municipios con obras de drenaje'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Análisis Hidrológico de la Cuenca',
    desc: 'Caracterización morfométrica de la cuenca, análisis de información pluviométrica del IDEAM, cálculo de caudales de diseño para períodos de retorno de 10, 25, 50 y 100 años mediante HEC-HMS, método racional y curvas IDF. Esta etapa define los caudales con los que se dimensiona y verifica cada componente de la obra.',
    herramientas: ['HEC-HMS (modelación hidrológica)', 'Curvas IDF — IDEAM', 'Análisis frecuencia Log-Pearson III', 'Método racional modificado'],
    resultado: 'Caudales de diseño por período de retorno para dimensionamiento y verificación de la obra',
  },
  {
    paso: '02',
    titulo: 'Topografía Batimétrica del Cauce',
    desc: 'Levantamiento topográfico del tramo de cauce y la llanura de inundación adyacente. Batimetría de secciones transversales para caracterizar la geometría del río. Generación del Modelo Digital de Terreno (MDT) en QGIS o ArcGIS Pro como base para la modelación hidráulica 2D. Georeferenciación en MAGNA-SIRGAS para entrega oficial.',
    herramientas: ['Levantamiento topográfico RTK/GPS', 'Batimetría de secciones transversales', 'Generación MDT — QGIS / ArcGIS Pro', 'Imágenes satelitales y LiDAR cuando hay disponibilidad'],
    resultado: 'Modelo Digital de Terreno del cauce y llanura de inundación listo para modelación',
  },
  {
    paso: '03',
    titulo: 'Modelación Hidráulica HEC-RAS 2D',
    desc: 'Simulación bidimensional del flujo en el cauce y la llanura de inundación con HEC-RAS 6.x en régimen no permanente. Escenario base (sin obras) y escenario con obras propuestas para verificar que la estructura cumple el objetivo de diseño: encauzamiento, protección contra inundación, conducción o captación. Los resultados se mapean en QGIS.',
    herramientas: ['HEC-RAS 6.x (2D — régimen no permanente)', 'QGIS / ArcGIS Pro (mapeo)', 'Calibración con datos históricos IDEAM', 'Análisis de socavación (HEC-RAS 1D/2D)'],
    resultado: 'Perfiles hidráulicos, mapas de inundación, velocidades, esfuerzos cortantes — escenarios base y con obras',
  },
  {
    paso: '04',
    titulo: 'Diseño Hidráulico y Estructural de la Obra',
    desc: 'Dimensionamiento de la sección hidráulica de la obra, cálculo de velocidades, fuerzas hidrostáticas e hidrodinámicas, análisis de estabilidad (deslizamiento, volteo, subpresión) y verificación de la capacidad de conducción o protección. Para gaviones y muros se integra el análisis geotécnico. Para bocatomas se diseña el barraje, rejilla, cámara y canal de aducción.',
    herramientas: ['AutoCAD Civil 3D (diseño y planos)', 'Cálculo estructural conforme NSR-10', 'RAS 2017 para obras de captación', 'INVIAS para drenaje vial'],
    resultado: 'Geometría final de la obra, análisis de estabilidad, especificación de materiales y detalles constructivos',
  },
  {
    paso: '05',
    titulo: 'Memoria de Cálculo, Planos y Permisos Ambientales',
    desc: 'Documento técnico completo con toda la metodología, datos de entrada, resultados numéricos y verificaciones de diseño — firmado por ingeniero especialista COPNIA vigente. Planos constructivos en AutoCAD: planta, cortes, detalles y armado. Presupuesto con APU. Para obras en cauce se elaboran los estudios para el permiso de ocupación de cauce y concesión de aguas ante la CAR.',
    herramientas: ['Memoria de cálculo completa firmada COPNIA', 'Planos AutoCAD (planta, cortes, detalles)', 'Especificaciones técnicas + APU + presupuesto', 'Documentos permiso ocupación de cauce CAR'],
    resultado: 'Expediente técnico completo: memoria, planos, presupuesto y documentos de trámite ambiental',
  },
]

const CLIENTES = [
  {
    perfil: 'Municipios y Alcaldías',
    desc: 'Obras de encauzamiento, protección fluvial, bocatomas y canales de acueducto municipal. BIC elabora el diseño técnico completo y acompaña los procesos de licitación y contratación directa con el municipio.',
    ejemplo: 'Encauzamiento de quebrada en zona urbana, bocatoma de acueducto rural',
  },
  {
    perfil: 'Empresas de Servicios Públicos (ESP)',
    desc: 'Diseño de captaciones para acueductos, rehabilitación de bocatomas existentes, diseño de canales de conducción. Entregables bajo Resolución 0330/2017 y RAS 2017 para radicación ante la Superintendencia de Servicios Públicos.',
    ejemplo: 'Bocatoma nueva + canal de aducción para ESP municipal',
  },
  {
    perfil: 'Constructoras de Infraestructura',
    desc: 'Diseño de box culvert, alcantarillas, disipadores de energía y estructuras de paso de vía como soporte técnico especializado a constructoras en obras lineales (carreteras, vías secundarias, infraestructura logística).',
    ejemplo: 'Box culvert en vía secundaria, alcantarillas en proyecto vial',
  },
  {
    perfil: 'Proyectos con Regalías SGR',
    desc: 'Diseño técnico de obras de agua y saneamiento financiadas con recursos del SGR (MGA-Web). BIC elabora los estudios de prefactibilidad, factibilidad y diseños definitivos exigidos por el OCAD. Matrícula COPNIA vigente para firmar el expediente técnico.',
    ejemplo: 'Bocatoma + PTAP + redes de distribución rural, regalías SGR',
  },
  {
    perfil: 'CAR y Entidades Ambientales',
    desc: 'Estudios técnicos para permisos de ocupación de cauce, concesiones de agua y planes de manejo ambiental relacionados con obras hidráulicas. BIC prepara los informes técnicos que la CAR exige para otorgar el permiso ambiental.',
    ejemplo: 'Estudios técnicos para permiso de ocupación de cauce ante Corpocaldas',
  },
  {
    perfil: 'Propietarios en Zonas de Riesgo Hídrico',
    desc: 'Propietarios de predios, fincas o industrias ubicadas en zonas de inundación o con ríos y quebradas en el lindero. BIC realiza el estudio de amenaza y diseña las obras de protección: diques, gaviones o encauzamientos para proteger la infraestructura.',
    ejemplo: 'Diseño de dique de protección para planta industrial en zona inundable',
  },
]

const NORMATIVA = [
  { norma: 'RAS 2017 — Res. 0330/2017', aplicacion: 'Diseño de bocatomas, captaciones, canales de conducción y obras de acueducto' },
  { norma: 'Decreto 1076/2015', aplicacion: 'Permiso de ocupación de cauce, concesión de aguas, caudal ecológico y trámites CAR' },
  { norma: 'Manual INVIAS — Drenaje Vial', aplicacion: 'Diseño de alcantarillas, box culvert y drenaje transversal y longitudinal en vías' },
  { norma: 'NSR-10 — Título A, C, D', aplicacion: 'Diseño estructural de obras en concreto: barrajes, muros de encauzamiento, cámaras' },
  { norma: 'Ley 1523/2012', aplicacion: 'Gestión del riesgo en municipios — obras de protección contra inundaciones y torrentes' },
  { norma: 'Decreto 1807/2014', aplicacion: 'Estudios de amenaza hídrica para licencias de urbanismo con obras de mitigación' },
]

const FAQ = [
  {
    q: '¿Qué es una bocatoma y cuándo se necesita un ingeniero para diseñarla?',
    a: 'Una bocatoma es la estructura hidráulica que capta agua directamente de un río o quebrada para conducirla a un sistema de abastecimiento, riego o uso industrial. Se necesita un ingeniero especialista cuando se va a construir o rehabilitar el sistema de captación, cuando la bocatoma ha fallado o es insuficiente, cuando se requiere ampliar la capacidad, o cuando la CAR exige estudios técnicos para renovar la concesión de aguas. BIC diseña bocatomas para acueductos municipales y sistemas industriales con modelación hidráulica incluida.',
  },
  {
    q: '¿BIC diseña obras hidráulicas para municipios pequeños y proyectos de regalías SGR?',
    a: 'Sí. BIC tiene experiencia directa en formulación de proyectos de agua y saneamiento con recursos del SGR (regalías) usando el MGA-Web del DNP. Los proyectos de obras hidráulicas financiados con regalías requieren diseños técnicos detallados y memorias de cálculo firmadas por profesional COPNIA como parte del expediente técnico. BIC elabora el diseño completo y la documentación técnica necesaria para radicar el proyecto ante el OCAD.',
  },
  {
    q: '¿Qué diferencia hay entre un encauzamiento y una canalización?',
    a: 'Técnicamente son distintos. El encauzamiento dirige el flujo de un río o quebrada dentro de una sección definida usando obras de borde (muros, diques, gaviones) sin impermeabilizar el fondo, preservando el ecosistema fluvial. La canalización reemplaza el cauce natural por una sección artificial (generalmente en concreto) eliminando la morfología natural. El encauzamiento es más aceptado ambientalmente y exigido por las CAR para obras urbanas. BIC diseña ambos según lo que requiera el proyecto y los permisos ambientales.',
  },
  {
    q: '¿Cuánto cuesta el diseño de una bocatoma o un encauzamiento en Colombia?',
    a: 'El costo depende de la magnitud del cauce, la longitud de la obra, la disponibilidad de información topográfica e hidrológica y la complejidad de los permisos ambientales. Para una bocatoma de acueducto municipal de tamaño medio, el diseño puede oscilar entre $18.000.000 y $45.000.000 COP. Para un encauzamiento en zona urbana el rango es más amplio dependiendo de la longitud. BIC envía propuesta técnica y económica detallada en menos de 24 horas sin costo.',
  },
  {
    q: '¿BIC tramita los permisos ante la CAR para las obras hidráulicas?',
    a: 'BIC elabora los estudios técnicos requeridos por la CAR para los permisos de ocupación de cauce y concesiones de agua: estudio hidrológico, modelación hidráulica y memoria descriptiva del proyecto. La radicación y el seguimiento del trámite ante la entidad lo realiza el propietario del proyecto (empresa, alcaldía, particular), pero BIC asesora y atiende los requerimientos técnicos que la CAR formule.',
  },
  {
    q: '¿Qué es el permiso de ocupación de cauce y cuándo se necesita?',
    a: 'Es la autorización ambiental que emite la Corporación Autónoma Regional para construir cualquier obra dentro o en los bordes de un cauce natural: muros de encauzamiento, gaviones, barrajes, diques, box culvert en cauces, captaciones. Sin este permiso no se puede iniciar la obra legalmente. BIC elabora el estudio técnico — hidrológico e hidráulico — que exige la CAR para tramitar el permiso de ocupación de cauce.',
  },
  {
    q: '¿Por qué se necesita modelación HEC-RAS 2D y no basta con un cálculo manual?',
    a: 'Las CAR, curadurías y financiadores de proyectos públicos exigen modelación hidráulica bidimensional (HEC-RAS 2D) porque el cálculo manual no puede representar la distribución real del flujo, las zonas de remanso, los efectos de las obras sobre el cauce aguas arriba y aguas abajo, ni los mapas de inundación necesarios para licencias de urbanismo y gestión del riesgo. HEC-RAS 2D es el estándar técnico aceptado por todas las entidades ambientales de Colombia.',
  },
  {
    q: '¿En qué regiones de Colombia trabaja BIC para obras hidráulicas?',
    a: 'BIC tiene base en Manizales y atiende proyectos en todo el territorio colombiano. Ha ejecutado proyectos en Caldas, Risaralda, Valle del Cauca, Boyacá, Cundinamarca, Magdalena y en Ecuador. Para proyectos que requieren visita de campo, BIC coordina el desplazamiento directamente con el cliente. Los diseños, memorias de cálculo y modelos hidráulicos se elaboran en Manizales y se entregan digitalmente con todos los soportes técnicos.',
  },
]

const RELACIONADOS = [
  { href: '/bocatomas-colombia', label: '🔵 Diseño de bocatomas en Colombia' },
  { href: '/diseno-canal-riego-colombia', label: '〰️ Diseño de canales de riego' },
  { href: '/encauzamiento-rios-colombia', label: '🌊 Encauzamiento de ríos y quebradas' },
  { href: '/gestion-riesgo-hidrico', label: '⚠️ Gestión del riesgo hídrico' },
  { href: '/estudios-torrencialidad-colombia', label: '⛰️ Estudios de torrencialidad' },
  { href: '/servicios/modelacion-hec-ras', label: '🖥️ Modelación HEC-RAS 2D' },
]

export default function ObrasHidraulicasColombia() {
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
          <SectionLabel light>Infraestructura hídrica · Todo Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Obras Hidráulicas en Colombia:<br />
            <span style={{ color: '#17A2B8' }}>Bocatomas, Canales, Encauzamientos y Protección Fluvial</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            BIC Bernal Ingeniería Consultores diseña obras hidráulicas mayores con modelación HEC-RAS 2D,
            memorias de cálculo firmadas por especialista COPNIA y planos constructivos en AutoCAD.
            Municipios, empresas de servicios públicos, constructoras y proyectos de regalías SGR
            en todo el territorio nacional.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Consultar sobre mi proyecto</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
            {['HEC-RAS 2D','HEC-HMS','EPANET','AutoCAD Civil 3D','QGIS','COPNIA vigente'].map(t => (
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
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28, color: '#fff', lineHeight: 1 }}>{s.valor}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPOS DE OBRAS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Líneas de servicio</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 12 }}>
            Tipos de obras hidráulicas que diseña BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde la captación de agua hasta su conducción, control y protección contra inundaciones.
            Cada diseño parte de un análisis hidrológico real con datos del IDEAM y modelación bidimensional.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 24 }}>
            {TIPOS.map(o => (
              <div key={o.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 26, borderTop: '3px solid #17A2B8' }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{o.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#002A50' }}>{o.tipo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, marginBottom: 14 }}>{o.desc}</p>
                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13 }}>
                    {o.clientes.map(c => <li key={c}>{c}</li>)}
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
            <p style={{ fontWeight: 700, fontSize: 18, color: '#002A50', marginBottom: 6 }}>¿Sabe qué tipo de obra hidráulica necesita?</p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.6 }}>BIC le da un diagnóstico técnico inicial sin costo. Cuéntenos el municipio y el problema.</p>
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
          <SectionLabel>Proceso técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 32px)', marginBottom: 32 }}>
            Metodología BIC: de la hidrología al plano constructivo
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, position: 'relative', paddingBottom: 32 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)',
                    color: '#fff', fontWeight: 900, fontSize: 13,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#e2e8f0', marginTop: 8, minHeight: 24 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.7, fontSize: 14, marginBottom: 14 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#e8f4f8', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#17A2B8', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#444', fontSize: 12, lineHeight: 1.6 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#f0faf0', borderRadius: 8, padding: '10px 14px' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#28a745', marginBottom: 6 }}>RESULTADO</p>
                      <p style={{ color: '#444', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{m.resultado}</p>
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
            Perfiles de clientes que contratan diseño de obras hidráulicas
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 740 }}>
            Los proyectos de obras hidráulicas con financiación pública requieren diseños técnicos
            con firma de especialista COPNIA. BIC elabora el expediente técnico completo.
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
            Normativa colombiana aplicable a obras hidráulicas
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#002A50', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Norma</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 700 }}>Aplicación en obras hidráulicas</th>
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
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 28px)', marginBottom: 24 }}>
            Explore más sobre obras e ingeniería hidráulica
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
            FAQ — Obras hidráulicas en Colombia
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
            ¿Tiene un proyecto de obra hidráulica?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
            Cuéntenos el tipo de obra, la región y el estado del proyecto.
            BIC le envía una propuesta técnica y económica en menos de 24 horas.
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
