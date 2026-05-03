import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito memorias de cálculo hidrosanitarias para un proyecto de construcción — licencia, curaduría o ESP. ¿Pueden elaborarlas?')

const seoConfig = {
  title: 'Memorias Hidrosanitarias Colombia — NSR-10 RAS | BIC',
  description: 'Memorias de cálculo hidrosanitarias para licencias de construcción. NSR-10, RAS 2017. Manizales y Eje Cafetero. Ing. Bernal COPNIA. Cotiza ya.',
  keywords: [
    'memorias de cálculo hidrosanitarias Colombia',
    'diseño hidrosanitario licencia construcción',
    'memoria cálculo acueducto alcantarillado',
    'redes hidrosanitarias planos constructivos',
    'diseño hidráulico edificio Colombia',
    'firma COPNIA memorias hidrosanitarias',
    'RAS 2017 diseño hidrosanitario',
    'NTC 1500 instalaciones hidrosanitarias',
    'diseño red contra incendios edificio',
    'memorias cálculo curaduría Colombia',
    'diseño hidrosanitario Manizales',
    'empresa hidrosanitaria Colombia',
    'planos hidrosanitarios constructivos',
    'diseño acueducto interno edificio Colombia',
    'instalaciones hidrosanitarias NSR-10',
  ],
  canonical: 'https://ingenieriabernal.co/memorias-hidrosanitarias-colombia',
}

const SISTEMAS = [
  {
    icon: '💧',
    tipo: 'Red de Agua Potable (Acueducto Interno)',
    subtitulo: 'Desde la acometida hasta cada punto de consumo',
    desc: 'BIC diseña la red interna de agua potable del proyecto: la acometida desde el acueducto municipal, el medidor, el tanque de almacenamiento y/o presurización si se requiere, la red de distribución principal y las derivaciones a cada punto de consumo (lavamanos, sanitarios, lavaplatos, duchas, lavaderos, equipos especiales). La memoria de cálculo incluye la dotación del proyecto, el caudal de diseño, el cálculo de presiones en todos los puntos críticos y la verificación de que la presión en los puntos más desfavorecidos cumple el mínimo exigido por la NTC 1500.',
    norma: 'NTC 1500 · RAS 2017 · Res. 0330/2017',
  },
  {
    icon: '🚿',
    tipo: 'Red de Aguas Residuales (Alcantarillado Sanitario)',
    subtitulo: 'Recolección y conducción de aguas negras y grises',
    desc: 'La red de aguas residuales recolecta las aguas negras (provenientes de sanitarios y orinales) y las aguas grises (lavamanos, duchas, lavaplatos, lavaderos) y las conduce hasta el colector público de alcantarillado o al sistema de tratamiento si no hay red pública. BIC diseña los ramales, bajantes y colectores principales, calcula los caudales de diseño conforme a la NTC 1500, verifica pendientes y velocidades dentro de los rangos admisibles y diseña las cámaras de inspección.',
    norma: 'NTC 1500 · RAS 2017 · Decreto 1076/2015',
  },
  {
    icon: '🌧️',
    tipo: 'Red de Aguas Lluvias (Drenaje Pluvial)',
    subtitulo: 'Manejo del agua lluvia en cubiertas y zonas duras',
    desc: 'La red de aguas lluvias recolecta el agua de lluvia que cae sobre cubiertas, terrazas y zonas duras del proyecto y la conduce hasta el punto de entrega al sistema público de alcantarillado pluvial o al cauce receptor. BIC diseña los bajantes de aguas lluvias, los canales de cubierta, los sumideros en zonas duras y la red de colectores pluviales con sus cámaras de inspección. La memoria de cálculo incluye el análisis hidrológico con las curvas IDF del IDEAM para el municipio.',
    norma: 'NTC 1500 · Manual INVIAS Drenaje · Curvas IDF IDEAM',
  },
  {
    icon: '🔥',
    tipo: 'Red Contra Incendios (Sistemas Hidráulicos NSR-10)',
    subtitulo: 'Sistemas de rociadores y red húmeda para la licencia',
    desc: 'Los edificios de cierta altura y uso (según el NSR-10) requieren un sistema de protección contra incendios: red húmeda con gabinetes, sistema de rociadores automáticos (sprinklers), tanque de reserva y bomba de incendio. BIC diseña el sistema hidráulico completo: el tanque de reserva de agua para incendios, la red de tuberías de distribución, la presión de trabajo del sistema, la bomba jockey y la bomba principal. El diseño cumple la NSR-10 (capítulo K), la NFPA 13 (rociadores) y la NFPA 14 (red húmeda).',
    norma: 'NSR-10 Capítulo K · NFPA 13 · NFPA 14 · RAS 2017',
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Revisión del proyecto arquitectónico y las exigencias de la curaduría',
    desc: 'BIC inicia cada proyecto con la revisión del programa arquitectónico (número de apartamentos, oficinas, locales, dotación especial), los planos arquitectónicos en AutoCAD y cualquier documento que la curaduría o la ESP ya haya enviado. Se identifican las exigencias específicas de la curaduría: si pide memoria de cálculo según la NTC 1500, planos en formato específico, o si hay condiciones especiales (predio con quebrada, zona de amenaza hídrica, planta baja inundable). Este paso define exactamente qué estudios y diseños se necesitan.',
    herramientas: ['Revisión planos arquitectónicos (DWG)', 'Consulta exigencias curaduría y ESP', 'NTC 1500 (código de fontanería)', 'RAS 2017 y Resolución 0330/2017'],
    resultado: 'Lista exacta de sistemas a diseñar y documentos a entregar para la curaduría',
  },
  {
    paso: '02',
    titulo: 'Diseño de la red de agua potable',
    desc: 'BIC calcula la dotación del proyecto conforme a la NTC 1500 (litros por habitante, por empleado, por puesto de trabajo, según el uso) y el caudal de diseño. Se diseña la red de acueducto interno: el diámetro de la acometida, el medidor, el tanque de almacenamiento si se requiere (cálculo de volumen según dotación y presión de la red pública), el sistema de bombeo si la presión del acueducto público es insuficiente, y la red de distribución hasta cada punto de consumo. Se verifica que la presión en el punto más desfavorecido sea mayor o igual a 10 m.c.a.',
    herramientas: ['NTC 1500 (dotaciones y caudales)', 'Método de Hunter (caudales simultáneos)', 'Cálculo de presiones (Hazen-Williams)', 'AutoCAD (planos de redes)'],
    resultado: 'Red de agua potable diseñada con diámetros, presiones y caudales verificados',
  },
  {
    paso: '03',
    titulo: 'Diseño de la red de aguas residuales y aguas lluvias',
    desc: 'BIC diseña la red de aguas residuales calculando los caudales de diseño (unidades de descarga por tipo de aparato, según NTC 1500), dimensionando los ramales, bajantes y colectores conforme a las tablas de la norma, verificando pendientes (mínimo 1% en horizontal) y velocidades de arrastre. Para la red de aguas lluvias, se calcula la intensidad de lluvia con las curvas IDF del IDEAM para el municipio, el área de captación de cada bajante de cubierta y el diámetro de los colectores pluviales. Se integran los dos sistemas verificando que no se mezclen.',
    herramientas: ['NTC 1500 (unidades de descarga)', 'Curvas IDF IDEAM (aguas lluvias)', 'AutoCAD (planos en planta y perfil)', 'Método racional (caudales pluviales)'],
    resultado: 'Redes de aguas residuales y aguas lluvias diseñadas y verificadas hidráulicamente',
  },
  {
    paso: '04',
    titulo: 'Diseño del sistema contra incendios (si aplica)',
    desc: 'Si el proyecto requiere sistema contra incendios (según NSR-10 Capítulo K: edificios de más de 4 pisos con uso residencial colectivo, edificios de comercio, uso industrial o de ocupación elevada), BIC diseña el sistema hidráulico completo: el volumen del tanque de reserva de agua para incendios, la red de tuberías, la presión de trabajo del sistema, la bomba jockey (de mantenimiento de presión), la bomba principal y el grupo electrógeno de respaldo. Si el proyecto requiere rociadores automáticos conforme a la NFPA 13, BIC diseña el área de operación, la densidad de descarga y el caudal requerido.',
    herramientas: ['NSR-10 Capítulo K (sistemas contra incendios)', 'NFPA 13 (rociadores) y NFPA 14 (red húmeda)', 'Cálculo hidráulico del sistema', 'AutoCAD (isometría del sistema)'],
    resultado: 'Sistema contra incendios diseñado con memoria de cálculo y planos constructivos',
  },
  {
    paso: '05',
    titulo: 'Memoria de cálculo y planos para la curaduría',
    desc: 'BIC entrega el expediente técnico completo: la memoria de cálculo hidrosanitaria (dotación, caudales de diseño, presiones, verificación de todas las redes) firmada por el ingeniero especialista con tarjeta COPNIA vigente, los planos constructivos de todas las redes en AutoCAD (plantas por piso, isometrías, detalles de conexiones), y las especificaciones técnicas de materiales y accesorios. El documento cumple el formato exigido por la curaduría y puede presentarse directamente ante la ESP para la viabilidad de conexión.',
    herramientas: ['Memoria de cálculo firmada (COPNIA)', 'Planos AutoCAD (redes en planta e isometría)', 'Especificaciones técnicas y lista de materiales', 'Formato de viabilidad para ESP'],
    resultado: 'Expediente hidrosanitario completo listo para trámite de licencia de construcción',
  },
]

const FAQ = [
  {
    q: '¿Qué es la NTC 1500 y por qué rige el diseño hidrosanitario en Colombia?',
    a: 'La NTC 1500 (Código Colombiano de Fontanería) es la norma técnica colombiana que establece los requisitos mínimos para el diseño, instalación y puesta en marcha de las instalaciones de fontanería en edificaciones: redes de agua potable, alcantarillado sanitario y aguas lluvias. Es la norma base que aplican las curaderías y las ESP para verificar que los diseños hidrosanitarios son técnicamente correctos. Todo diseño hidrosanitario para licencia de construcción en Colombia debe cumplirla. BIC diseña exclusivamente bajo la NTC 1500 y el RAS 2017.',
  },
  {
    q: '¿La curaduría pidió la memoria de cálculo hidrosanitaria. ¿Qué debe incluir exactamente?',
    a: 'La memoria de cálculo hidrosanitaria que exige la curaduría debe incluir: cálculo de la dotación del proyecto (litros por persona o unidad según el uso y la norma), caudal de diseño de cada sistema (agua potable, aguas residuales, aguas lluvias), dimensionamiento de tuberías con verificación de presiones y velocidades, diseño del tanque de almacenamiento si se requiere, verificación de la presión en el punto más desfavorecido y, si aplica, el diseño del sistema contra incendios conforme al NSR-10. La memoria va firmada por el ingeniero especialista con tarjeta COPNIA vigente. BIC entrega exactamente este documento, en el formato que acepta la curaduría de su municipio.',
  },
  {
    q: '¿Cuánto cuesta la memoria de cálculo hidrosanitaria para un proyecto de construcción?',
    a: 'El costo depende del tipo de proyecto (unifamiliar, multifamiliar, comercial, industrial), el número de pisos y unidades, y si requiere sistema contra incendios. Para un edificio de vivienda multifamiliar de 5 a 10 pisos con 20 a 40 apartamentos, la memoria de cálculo hidrosanitaria completa (agua potable, alcantarillado, aguas lluvias) con planos constructivos en AutoCAD y firma COPNIA oscila entre $8.000.000 y $22.000.000 COP. Si el proyecto requiere sistema contra incendios, el costo adicional por ese componente está entre $5.000.000 y $12.000.000 COP. BIC envía propuesta detallada en menos de 24 horas.',
  },
  {
    q: '¿El diseño hidrosanitario incluye los planos en AutoCAD?',
    a: 'Sí. La memoria de cálculo hidrosanitaria siempre incluye los planos constructivos en AutoCAD: redes de acueducto y alcantarillado en planta (por piso si es un edificio de varios niveles), isometrías de las redes principales, detalles de conexiones a aparatos sanitarios, detalle del cuarto de máquinas si hay tanque y bomba, y detalle del pozo de inspección. Los planos se entregan en formato DWG (editable) y PDF, en el sistema de coordenadas y con el sello y firma del ingeniero en el formato que requiera la curaduría.',
  },
  {
    q: '¿Cuándo es obligatorio el sistema contra incendios en un edificio en Colombia?',
    a: 'Según el NSR-10 Capítulo K, el sistema de protección contra incendios es obligatorio en Colombia en edificios con: altura mayor de 12 metros (aproximadamente 4 pisos o más) con uso de ocupación residencial colectiva; edificios de comercio o servicio con área mayor a 500 m²; edificios de uso industrial; locales de reunión pública con capacidad mayor a 50 personas; y parqueaderos cubiertos con más de 30 cupos. Si su proyecto cae en alguna de estas categorías, la curaduría exigirá el diseño del sistema contra incendios como parte de la memoria de cálculo hidrosanitaria. BIC diseña ambos componentes.',
  },
  {
    q: '¿BIC puede corregir una memoria de cálculo que rechazó la curaduría?',
    a: 'Sí. Es frecuente que los proyectos llegan a BIC porque la curaduría rechazó la memoria de cálculo hidrosanitaria por observaciones técnicas: presiones insuficientes en puntos desfavorecidos, dotaciones calculadas incorrectamente, falta de verificación del sistema contra incendios, diámetros de tuberías subdimensionados o planos incompletos. BIC revisa la memoria existente, identifica exactamente qué hay que corregir y elabora la versión corregida que supera las observaciones de la curaduría.',
  },
  {
    q: '¿Qué pasa si el proyecto no tiene acceso al acueducto público?',
    a: 'Si el proyecto está en una zona sin acueducto público, la norma (RAS 2017) permite el abastecimiento de agua desde fuentes propias: pozos profundos (si hay acuífero accesible), captación de agua lluvia en zonas con alta pluviosidad, o la conexión a un acueducto comunitario o veredal. Para los dos primeros casos, BIC diseña el sistema de captación y tratamiento del agua para que cumpla los estándares de potabilidad del Decreto 1575 de 2007. Para el vertimiento de aguas residuales, BIC diseña el sistema de tratamiento en sitio conforme al RAS 2017.',
  },
  {
    q: '¿BIC trabaja en toda Colombia?',
    a: 'Sí. BIC elabora memorias de cálculo hidrosanitarias para proyectos en cualquier municipio de Colombia. Los diseños se pueden elaborar con los planos arquitectónicos que el cliente comparte en formato digital — no se necesita presencia física en el sitio para esta etapa. Si el proyecto está en un municipio con una curaduría que tiene formatos específicos de entrega, BIC adapta el informe a esos formatos. BIC tiene experiencia con curaderías de Manizales, Pereira, Armenia, Medellín, Bogotá, Cali, Barranquilla y múltiples municipios de todo el país.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras y promotoras inmobiliarias', desc: 'Proyectos de vivienda, oficinas y comercio que necesitan la memoria hidrosanitaria para la licencia de construcción.' },
  { tipo: 'Propietarios de predios urbanos', desc: 'Personas que quieren construir o ampliar y la curaduría les exige los planos y memorias hidrosanitarias firmadas.' },
  { tipo: 'Arquitectos e ingenieros civiles', desc: 'Profesionales que diseñan el proyecto y subcontratan el componente hidrosanitario especializado con BIC.' },
  { tipo: 'Gestores de licencias de construcción', desc: 'Abogados y gestores que coordinan el trámite ante la curaduría y necesitan una firma técnica para los diseños.' },
  { tipo: 'Proyectos industriales y agroindustriales', desc: 'Plantas de producción, frigoríficos y bodegas que requieren diseño hidrosanitario industrial con cumplimiento NSR-10.' },
  { tipo: 'Entidades públicas y proyectos SGR', desc: 'Municipios y entidades que construyen equipamientos públicos (escuelas, hospitales, polideportivos) con financiación pública.' },
]

const NORMATIVA = [
  { codigo: 'NTC 1500', descripcion: 'Código Colombiano de Fontanería — norma técnica base para redes de agua potable y alcantarillado sanitario en edificaciones' },
  { codigo: 'RAS 2017', descripcion: 'Reglamento Técnico de Agua y Saneamiento — criterios de diseño para acueductos y alcantarillado' },
  { codigo: 'Res. 0330/2017', descripcion: 'MinVivienda — actualización de los criterios técnicos del RAS para sistemas de acueducto y alcantarillado' },
  { codigo: 'NSR-10 Cap. K', descripcion: 'Norma Sismo Resistente, Capítulo K — requisitos del sistema de protección contra incendios en edificaciones' },
  { codigo: 'NFPA 13 / 14', descripcion: 'Normas de la National Fire Protection Association para rociadores y red húmeda contra incendios' },
  { codigo: 'Decreto 1575/2007', descripcion: 'Sistema de Protección y Control de la Calidad del Agua — estándares de potabilidad del agua de consumo' },
]

export default function MemoriasHidrosanitarias() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)', paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Diseño hidrosanitario · Licencias · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20 }}>
            Memorias de Cálculo Hidrosanitarias para Licencias en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            Diseño de redes de agua potable, alcantarillado, aguas lluvias y contra incendios — NTC 1500, RAS 2017, firma COPNIA
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            Toda licencia de construcción en Colombia requiere una memoria de cálculo hidrosanitaria firmada por
            un especialista con tarjeta COPNIA vigente. BIC elabora los diseños completos — agua potable,
            alcantarillado sanitario, aguas lluvias y sistema contra incendios — con planos constructivos en
            AutoCAD y en el formato que acepta la curaduría de cualquier municipio del país.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar memorias hidrosanitarias</Btn>
            <Btn variant="outline" href="/servicios/redes-hidrosanitarias" dark>Redes hidrosanitarias</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NTC 1500','RAS 2017','Contra incendios','NSR-10','COPNIA','Planos AutoCAD'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+200', label: 'proyectos con diseño hidrosanitario BIC' },
              { num: '100%', label: 'de memorias aprobadas por curaduría' },
              { num: '24h', label: 'para enviar propuesta técnica' },
              { num: 'Nacional', label: 'curaderías en todo Colombia atendidas' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#002A50', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTEMAS ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Sistemas que diseña BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué sistemas incluye el diseño hidrosanitario?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            Un proyecto de construcción puede requerir varios sistemas hidrosanitarios según su uso y tamaño.
            BIC diseña todos los sistemas en un solo paquete coherente, firmado por un único especialista COPNIA.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {SISTEMAS.map(s => (
              <div key={s.tipo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 28, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#002A50', marginBottom: 4 }}>{s.tipo}</h3>
                <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{s.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ background: '#f0f9ff', borderRadius: 8, padding: '10px 14px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#003B6F', marginBottom: 3 }}>NORMA APLICABLE</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0 }}>{s.norma}</p>
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
            Cómo elabora BIC la memoria hidrosanitaria
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Del plano arquitectónico al expediente técnico listo para la curaduría.
            Memoria firmada COPNIA y planos AutoCAD incluidos.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
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
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿La curaduría le pidió la memoria hidrosanitaria?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>Compártanos los planos y en 24 horas le enviamos propuesta técnica · Primera consulta sin costo</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📱 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            Clientes de BIC en diseño hidrosanitario
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{ background: '#f8fbff', border: '1px solid #d0e8f5', borderRadius: 10, padding: 20, borderLeft: '3px solid #17A2B8' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 28 }}>
            Normativa hidrosanitaria en Colombia
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0' }}>
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
            Otros diseños y estudios de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Redes hidrosanitarias', href: '/servicios/redes-hidrosanitarias' },
              { label: 'Diseño de acueductos', href: '/servicios/diseno-acueductos' },
              { label: 'Licencia de urbanismo', href: '/licencia-de-urbanismo' },
              { label: 'Ingeniería proyectos urbanísticos', href: '/ingenieria-proyectos-urbanisticos-colombia' },
              { label: 'Tengo un lote — ¿qué estudios necesito?', href: '/tengo-un-lote-colombia' },
              { label: 'Me pidieron estudios en la CAR', href: '/me-pidieron-estudios-en-la-car' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 10, padding: '14px 18px', color: '#003B6F', fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4 }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5eef9')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0f9ff')}>
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
            Todo sobre memorias de cálculo hidrosanitarias en Colombia
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

      {/* ── CTA FINAL ── */}
      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)', padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🔧</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita la memoria de cálculo<br />hidrosanitaria para su proyecto?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Compártanos los planos arquitectónicos y el municipio del proyecto.
            BIC le envía propuesta técnica y económica en menos de 24 horas.
          </p>
          <p style={{ color: '#17A2B8', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            Primera consulta sin costo · Firma COPNIA vigente · Atención en todo Colombia
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar por WhatsApp · +57 302 477 8910
            </a>
            <a href="/contacto" style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
