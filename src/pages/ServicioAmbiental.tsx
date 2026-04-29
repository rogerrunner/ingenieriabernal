import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar Estudios Ambientales e IRCA')

const seoConfig = {
  title: 'Estudios Ambientales e IRCA Colombia | BIC Bernal Ingeniería Consultores',
  description: 'Estudios ambientales, cálculo IRCA, permisos de vertimientos, concesiones de agua y trámites ante CAR para proyectos hídricos en Colombia. COPNIA 17202-313228. Eje Cafetero.',
  keywords: [
    'estudios ambientales Colombia',
    'IRCA Colombia agua potable',
    'cálculo IRCA acueducto',
    'permisos vertimientos CAR Colombia',
    'concesión de aguas Colombia',
    'trámites ambientales hídricos',
    'estudio de impacto ambiental agua',
    'ingeniería ambiental Colombia',
    'plan de manejo ambiental',
    'permisos ambientales constructoras',
    'CORPOCALDAS permisos agua',
    'Decreto 2811 Código recursos naturales',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/ambiental',
}

const INCLUYE = [
  { icon: '💧', titulo: 'Cálculo y análisis del IRCA', desc: 'Determinación del Índice de Riesgo de Calidad del Agua (IRCA) para sistemas de acueducto municipal conforme a la Resolución 2115/2007 del Ministerio de la Protección Social. Análisis fisicoquímico y microbiológico, clasificación del nivel de riesgo y formulación de medidas correctivas.' },
  { icon: '🏭', titulo: 'Permisos de vertimientos', desc: 'Elaboración del expediente para permiso de vertimientos ante la Corporación Autónoma Regional (CAR) competente: caracterización del efluente, modelación de la capacidad de dilución del cuerpo receptor, plan de manejo de vertimientos y protocolo de monitoreo conforme al Decreto 1076/2015.' },
  { icon: '🌊', titulo: 'Concesión de aguas superficiales y subterráneas', desc: 'Tramitación de la concesión de agua ante la CAR para captación de ríos, quebradas, embalses y acuíferos. Elaboración del estudio de disponibilidad hídrica, balance oferta-demanda y documentación técnica exigida por el MADS y las CAR.' },
  { icon: '🌿', titulo: 'Plan de Manejo Ambiental (PMA)', desc: 'Diseño del PMA para obras de infraestructura hídrica: medidas de manejo de residuos, control de sedimentos, revegetalización de taludes, protección de márgenes hídricas y monitoreo ambiental durante la construcción y operación.' },
  { icon: '📋', titulo: 'Diagnóstico ambiental de alternativas (DAA)', desc: 'Evaluación ambiental preliminar de alternativas de localización de obras hidráulicas, PTAP, PTAR y sistemas de captación. Soporte técnico ambiental para obtener la definición de estudios ante la Autoridad Nacional de Licencias Ambientales (ANLA).' },
  { icon: '🔍', titulo: 'Trámites ante CAR y ANLA', desc: 'Representación técnica ante CORPOCALDAS, CARDER, CVC, CAR Cundinamarca, CDMB, CAS, Corporinoquia y demás CAR. Atención de requerimientos, visitas técnicas, subsanación de documentos y seguimiento hasta la obtención del permiso.' },
]

const PARA_QUIEN = [
  { tipo: 'Alcaldías y empresas de servicios públicos', desc: 'Cálculo del IRCA, gestión de permisos de captación y vertimientos para sistemas de acueducto y alcantarillado municipal. Cumplimiento de obligaciones ante la Superintendencia de Servicios Públicos (SSPD).' },
  { tipo: 'Constructoras y promotores de proyectos', desc: 'Permisos ambientales para obras lineales, plantas industriales, proyectos de vivienda con afectación de cauces y cualquier intervención que requiera manejo de agua o vertimientos.' },
  { tipo: 'Entidades públicas con proyectos de infraestructura', desc: 'PMA y trámites ambientales para obras de INVÍAS, gobernaciones, municipios y entidades del orden nacional que ejecutan proyectos hídricos o de infraestructura con componente ambiental.' },
  { tipo: 'Operadores de sistemas de agua y saneamiento', desc: 'Monitoreo de calidad del agua, elaboración de informes de calidad para la Secretaría de Salud, gestión del IRCA y formulación de planes de mejoramiento de la prestación del servicio.' },
]

export default function ServicioAmbiental() {
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
          <SectionLabel light>Servicio especializado</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(28px, 5vw, 44px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Estudios Ambientales e IRCA<br />
            <span style={{ color: '#17A2B8' }}>para Proyectos Hídricos en Colombia</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)',
            fontSize: 17, lineHeight: 1.75, maxWidth: 720, marginBottom: 36,
          }}>
            BIC Bernal Ingeniería Consultores realiza estudios ambientales especializados para
            proyectos del sector agua potable y saneamiento básico en Colombia: cálculo y análisis
            del IRCA conforme a la Resolución 2115/2007, trámite de permisos de vertimientos y
            concesiones de agua ante las CAR, elaboración de Planes de Manejo Ambiental y soporte
            técnico en procesos ante la ANLA. Combinamos el conocimiento hidráulico con el ambiental
            para entregar expedientes técnicos sólidos que superan la revisión de CORPOCALDAS,
            CARDER, CVC y cualquier otra autoridad ambiental regional. Rogerio Bernal Ríos, Especialista
            UNAL (COPNIA 17202-313228), conoce en profundidad los criterios técnicos de cada CAR
            del Eje Cafetero y otras regiones donde BIC tiene proyectos activos.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>
              📱 Solicitar cotización
            </Btn>
            <Btn variant="outline" href="/servicios" dark>
              Ver todos los servicios
            </Btn>
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <div style={{ background: '#0A2540', padding: '14px 24px', borderBottom: '1px solid rgba(23,162,184,0.15)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.5)', marginRight: 4 }}>Normativa:</span>
          {['Res. 2115/2007', 'Decreto 1076/2015', 'CAR / ANLA', 'Ley 99/1993', 'MADS'].map(t => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* ── QUÉ INCLUYE ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Alcance del servicio</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Qué incluye el servicio ambiental?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {INCLUYE.map((item) => (
              <div key={item.titulo} style={{
                background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4,
                padding: 28, borderTop: '3px solid #17A2B8',
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#001A33',
                  fontSize: 14, marginBottom: 10,
                }}>{item.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.65,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PARA QUIÉN ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Clientes objetivo</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Para quién es este servicio?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PARA_QUIEN.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#F8FAFC',
                borderLeft: '3px solid #17A2B8', borderRadius: '0 4px 4px 0',
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50',
                  fontSize: 14, marginBottom: 8,
                }}>{p.tipo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: '#475569', fontSize: 14, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── POR QUÉ BIC ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Diferenciadores</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>¿Por qué BIC?</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { icon: '🌿', titulo: 'Ambiental + hidráulico integrados', desc: 'BIC combina el conocimiento ambiental con la ingeniería hidráulica: los expedientes de vertimientos y concesiones de agua son más sólidos cuando el consultor entiende el comportamiento hídrico del cauce receptor.' },
              { icon: '🎓', titulo: 'Especialista UNAL · COPNIA vigente', desc: '+10 años de proyectos con CORPOCALDAS, CARDER, CVC y otras corporaciones. Rogerio Bernal Ríos (COPNIA 17202-313228) conoce los criterios técnicos internos que hacen que un expediente sea aprobado o devuelto.' },
              { icon: '⚡', titulo: 'Agilidad en trámites ambientales', desc: 'Expedientes bien sustentados técnicamente reducen el número de requerimientos y aceleran los tiempos de respuesta de las CAR. Menos viajes, menos reprocesos, más velocidad.' },
              { icon: '📜', titulo: 'Responsabilidad profesional plena', desc: 'Informes firmados por profesional con COPNIA vigente y registro ante la entidad ambiental competente. Respaldo legal y técnico ante cualquier requerimiento posterior.' },
            ].map(d => (
              <div key={d.titulo} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <div style={{ fontSize: 30, marginBottom: 12 }}>{d.icon}</div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 14, marginBottom: 8,
                }}>{d.titulo}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ARTÍCULOS RELACIONADOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '48px 24px' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Artículos relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/blog/irca-municipio-colombia" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Cómo bajar el IRCA de un municipio en Colombia</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
            <a href="/blog/mga-web-regalias-agua-potable" style={{ flex: '1 1 260px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 15, display: 'block', lineHeight: 1.3 }}>Formulación de proyectos de agua potable con regalías y MGA Web</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Leer artículo →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      <Section bg="#EFF6FB" style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#003B6F', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            Servicios relacionados
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/servicios/diseno-acueductos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de sistemas de agua potable RAS 2017 — base técnica para concesiones</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/acueducto-alcantarillado" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Diseño de acueducto y alcantarillado conforme RAS 2017 y Resolución 0330</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/estudios-hidrologicos" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Estudios hidrológicos para disponibilidad hídrica — balance oferta-demanda</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
            <a href="/servicios/regalias-mga" style={{ flex: '1 1 220px', background: '#fff', border: '1px solid #E2E8F0', borderRadius: 4, padding: '18px 20px', textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#003B6F', fontSize: 14, display: 'block', lineHeight: 1.35 }}>Formulación de proyectos ambientales e hídricos en MGA-Web para el SGR</span>
              <span style={{ fontFamily: "'Lato', sans-serif", color: '#17A2B8', fontSize: 12, marginTop: 8, display: 'block' }}>Ver servicio →</span>
            </a>
          </div>
        </div>
      </Section>

      {/* ── CTA FINAL ── */}
      <Section bg="#17A2B8" style={{ padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 34px)', marginBottom: 16,
          }}>
            ¿Necesita permisos ambientales o cálculo del IRCA?
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)',
            fontSize: 16, lineHeight: 1.7, marginBottom: 32,
          }}>
            Indíquenos el tipo de trámite (vertimientos, concesión, IRCA, PMA),
            la CAR competente y el municipio del proyecto.
            Le respondemos con propuesta y tiempos estimados en 24 horas.
          </p>
          <Btn
            href={`https://wa.me/${WA}?text=${WA_MSG}`}
            style={{ background: '#fff', color: '#17A2B8', fontSize: 15, padding: '14px 36px' }}
          >
            📱 Chatear por WhatsApp
          </Btn>
        </div>
      </Section>
    </>
  )
}
import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito un estudio ambiental o licencia ambiental. ¿Pueden asesorarme sobre el alcance y costo?')

const seoConfig = {
  title: 'Estudios Ambientales y Licencia Ambiental en Colombia — EIA, PMA, DAA | BIC',
  description: 'BIC realiza estudios de impacto ambiental (EIA), planes de manejo ambiental (PMA), diagnóstico ambiental de alternativas (DAA) y PSMV en Colombia. Licencias ante ANLA y CAR. Decreto 2041/2014, Decreto 1076/2015, Ley 99/1993. Cotización en 24 horas.',
  keywords: [
    'estudio ambiental Colombia',
    'licencia ambiental CAR Colombia',
    'plan de manejo ambiental Colombia',
    'estudio de impacto ambiental Colombia',
    'diagnóstico ambiental alternativas Colombia',
    'licencia ambiental ANLA Colombia',
    'EIA Colombia ingeniería ambiental',
    'PMA obras civiles Colombia',
    'PSMV municipio Colombia',
    'trámite licencia ambiental Colombia',
    'estudio ambiental constructora Colombia',
    'licencia ambiental vías y puentes',
    'plan saneamiento manejo vertimientos',
    'línea base ambiental Colombia',
    'matrices Leopold CONESA Colombia',
    'estudio impacto ambiental minería Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/servicios/ambiental',
}

const TIPOS = [
  {
    icon: '🔍',
    tipo: 'Diagnóstico Ambiental de Alternativas (DAA)',
    subtitulo: 'Paso previo obligatorio para proyectos ante la ANLA',
    desc: 'El DAA es el estudio que la ANLA exige antes de iniciar el EIA para proyectos de gran escala: se presentan varias alternativas de localización o tecnología del proyecto y la autoridad define cuál es ambientalmente viable y debe desarrollarse en el EIA completo. BIC elabora el DAA con caracterización de los componentes biótico, abiótico y socioeconómico de cada alternativa, análisis comparativo de impactos potenciales, identificación de áreas de manejo especial (páramos, humedales, resguardos) y evaluación de factibilidad ambiental según la Resolución 1415/2012 de la ANLA.',
    cuando: 'Requerido para proyectos de energía (plantas >100 MW), vías primarias nacionales, puertos marítimos, grandes proyectos mineros y cualquier proyecto que la ANLA determine mediante auto.',
    aplica: ['Proyectos hidroeléctricos y termoeléctricas', 'Vías primarias nacionales (INVIAS/ANI)', 'Puertos, aeropuertos, presas y embalses', 'Minería a gran escala (carbón, oro, níquel)'],
  },
  {
    icon: '📋',
    tipo: 'Estudio de Impacto Ambiental (EIA)',
    subtitulo: 'Para licencia ambiental ante CAR o ANLA',
    desc: 'El EIA es el documento técnico central para obtener la licencia ambiental. BIC realiza el EIA completo: caracterización del área de influencia directa e indirecta (línea base abiótica, biótica y socioeconómica), identificación y evaluación de impactos con matrices Leopold y CONESA (importancia, magnitud, reversibilidad, sinergia, persistencia), Plan de Manejo Ambiental del EIA con medidas de prevención, mitigación, corrección y compensación, programa de seguimiento y monitoreo, y plan de contingencia. El EIA se elabora siguiendo los términos de referencia sectoriales del MADS y la Guía Técnica de la ANLA para el sector específico del proyecto.',
    cuando: 'Obligatorio para todo proyecto que requiera licencia ambiental: rellenos sanitarios, plantas de beneficio mineral, sistemas de alcantarillado con descarga a cuerpos de agua, vías terciarias con afectación de corrientes, proyectos urbanísticos en zonas de protección.',
    aplica: ['Constructoras: urbanizaciones >100 ha o que afecten corrientes', 'Rellenos sanitarios y plantas de residuos', 'Empresas mineras y de hidrocarburos', 'Proyectos de infraestructura con afectación hídrica'],
  },
  {
    icon: '🌿',
    tipo: 'Plan de Manejo Ambiental (PMA)',
    subtitulo: 'Para proyectos menores, permisos CAR, antenas y vías',
    desc: 'El PMA es el instrumento de gestión ambiental para proyectos que no requieren licencia ambiental plena pero sí deben tramitar permisos ante la CAR (concesiones de agua, ocupación de cauce, aprovechamiento forestal, vertimientos) o presentar un plan ante la autoridad ambiental como condición para operar. BIC diseña el PMA estructurado por programas: manejo de aguas superficiales y subterráneas, manejo de residuos sólidos y especiales, control de emisiones atmosféricas y ruido, revegetalización y restauración, manejo del componente social y comunicación con las comunidades. Cada programa incluye fichas de manejo con descripción de la medida, indicadores de seguimiento, responsable y cronograma de ejecución.',
    cuando: 'Pozos de agua, antenas de telecomunicaciones, vías terciarias, pequeñas explotaciones mineras, plantas de beneficio agrícola, proyectos viales departamentales y obras de drenaje que requieren permiso de ocupación de cauce ante la CAR.',
    aplica: ['Municipios con obras de infraestructura menor', 'Empresas con pozos de agua o captaciones superficiales', 'Constructoras de vías terciarias y secundarias', 'Operadores de redes de telecomunicaciones'],
  },
  {
    icon: '🚰',
    tipo: 'Plan de Saneamiento y Manejo de Vertimientos (PSMV)',
    subtitulo: 'Para municipios con alcantarillado — Decreto 3930/2010',
    desc: 'El PSMV es el instrumento que obliga el Decreto 3930 de 2010 (recopilado en el Decreto 1076/2015) a todos los municipios que vierten aguas residuales a cuerpos de agua superficiales sin tratamiento o con tratamiento insuficiente. Es el plan que presenta el municipio o la ESP ante la CAR para comprometerse a reducir progresivamente la carga contaminante de los vertimientos hasta cumplir las normas de calidad del efluente. BIC elabora el PSMV completo: diagnóstico del sistema de alcantarillado (cobertura, estado de la infraestructura, caudal y carga de DBO5, DQO, SST generados), identificación de puntos de vertimiento, caracterización de la calidad del agua del cuerpo receptor aguas arriba y abajo, evaluación de la capacidad de autodepuración del cauce, y propuesta de obras e inversiones priorizadas con cronograma de ejecución y metas de reducción de carga contaminante.',
    cuando: 'Todo municipio o ESP que vierte aguas residuales sin el tratamiento que exige la norma está obligado a contar con PSMV ante la CAR. La SSPD y la CAR pueden imponer sanciones y suspender permisos si el municipio no tiene PSMV vigente o no cumple el cronograma del plan.',
    aplica: ['Alcaldías y ESP con alcantarillado sin PTAR o PTAR insuficiente', 'Municipios con requerimientos de la CAR por vertimientos', 'ESP que van a construir PTAR y necesitan el PSMV como instrumento', 'Municipios que acceden a recursos SGR para saneamiento'],
  },
]

const PROCESO = [
  {
    paso: '01',
    titulo: 'Diagnóstico y caracterización de la línea base ambiental',
    desc: 'La línea base es la fotografía del estado del ambiente antes de que llegue el proyecto — es la referencia contra la cual se miden los impactos. BIC caracteriza los tres componentes: el abiótico (clima, hidrología, geología, geomorfología, calidad del aire y del agua, niveles de ruido), el biótico (flora y fauna: inventario florístico con metodología de transectos, inventario de fauna con cámara trampa, redes de niebla y transectos de avifauna; ecosistemas estratégicos: páramos, humedales, corredores biológicos) y el socioeconómico (demografía, actividades económicas, infraestructura existente, presencia de comunidades étnicas y territorios colectivos). La línea base de un EIA exige trabajo de campo: BIC realiza las visitas técnicas necesarias, contrata los análisis de laboratorio (análisis fisicoquímico y microbiológico del agua, análisis de suelos, muestreos de aire) y georreferencia todos los datos con GPS.',
    herramientas: ['IDEAM (series meteorológicas e hidrológicas)', 'IGAC (cartografía, suelos, cobertura CORINE Land Cover)', 'SGC (geología, amenazas geológicas)', 'IAVH (lista de flora y fauna CITES y Libro Rojo)', 'QGIS/ArcGIS (cartografía y análisis SIG)'],
    resultado: 'Documento de línea base ambiental con cartografía SIG, resultados de laboratorio y registro fotográfico georreferenciado',
  },
  {
    paso: '02',
    titulo: 'Identificación y valoración de impactos ambientales',
    desc: 'Con la línea base definida, BIC identifica todos los impactos que el proyecto puede generar sobre cada componente ambiental en cada fase del proyecto (construcción, operación, abandono). La identificación se estructura en una matriz de interacción (filas = componentes ambientales; columnas = actividades del proyecto) que señala cuáles interacciones generan impacto significativo. Para cada impacto identificado se aplica el método de valoración: BIC usa la metodología CONESA (Importancia del Impacto = 3i + 2Ex + Mo + Pe + Rv + Si + Ac + Ef + Pr + Mc) que genera un índice de importancia ambiental clasificado en moderado (IA < 50), severo (50 ≤ IA < 75) o crítico (IA ≥ 75). Paralelamente se aplica la matriz de Leopold para visualizar la red de causalidad entre las acciones del proyecto y los factores ambientales afectados, con calificación de magnitud (1-10) y valoración de importancia (1-10).',
    herramientas: ['Metodología CONESA (índice de importancia ambiental)', 'Matriz de Leopold (magnitud × importancia)', 'Árbol de causas y efectos (análisis de impactos indirectos)', 'SIG para mapeo de impactos espaciales'],
    resultado: 'Matrices de identificación y valoración de impactos (Leopold + CONESA), mapa de impactos ambientales significativos',
  },
  {
    paso: '03',
    titulo: 'Formulación del Plan de Manejo Ambiental',
    desc: 'El PMA es la respuesta operativa a cada impacto identificado. Para cada impacto significativo, BIC diseña una ficha de manejo ambiental que especifica: la medida de manejo (prevención, mitigación, corrección o compensación), la descripción técnica de cómo se ejecuta (con diseños cuando aplica: obras de control de sedimentos, sistemas de tratamiento de aguas residuales de construcción, diseño de taludes con revegetalización), el indicador de seguimiento con la meta cuantificable, el responsable de la ejecución, el cronograma y el costo estimado. El PMA se estructura en programas: manejo del recurso hídrico (control de sedimentos, manejo de aguas lluvias, tratamiento de agua residual doméstica e industrial de la construcción), manejo de residuos sólidos y especiales, manejo del componente biótico (rescate de flora, translocación de fauna, restauración de ecosistemas), manejo del componente atmosférico y acústico, y programa de seguimiento y monitoreo con indicadores ICA (Índice de Calidad del Agua), IRCA y parámetros DBO5/DQO/SST para cuerpos de agua receptores.',
    herramientas: ['Fichas de manejo ambiental (formato ANLA/CAR)', 'Diseño de obras de control ambiental (SMCA, trampa sedimentos)', 'Protocolo de monitoreo ICA, IRCA, DBO5, DQO', 'Software de gestión ambiental y cronograma'],
    resultado: 'Plan de Manejo Ambiental completo con fichas, indicadores, costos y cronograma de ejecución',
  },
  {
    paso: '04',
    titulo: 'Elaboración del EIA o PMA definitivo con firma COPNIA',
    desc: 'BIC integra todos los componentes del estudio en el documento final: la línea base, la evaluación de impactos, el PMA, los planes complementarios (contingencia, abandono y restauración, monitoreo) y los anexos (resultados de laboratorio, registros fotográficos, cartografía SIG, modelos matemáticos cuando aplica). Para EIA ante la ANLA, el documento sigue estrictamente el formato y la estructura definidos en la Guía para la elaboración y presentación de estudios ambientales del MADS (actualizada 2022). Para PMA y PSMV ante la CAR, el documento sigue el formato exigido por la corporación territorial competente (Corpocaldas, CARDER, CRQ, CAR Cundinamarca, etc.). El estudio completo es firmado por Rogerio Bernal Ríos con tarjeta profesional COPNIA 17202-313228 CLD vigente. BIC entrega los archivos digitales (PDF y DWG/SHP para cartografía) y los físicos cuando la CAR los exige.',
    herramientas: ['Estructura EIA según Guía MADS 2022', 'Formatos ANLA (EIA, DAA, Plan de Seguimiento)', 'Formatos CAR territoriales (Corpocaldas, CARDER, CRQ, etc.)', 'Firma COPNIA 17202-313228 CLD vigente'],
    resultado: 'Expediente ambiental completo (EIA/PMA/PSMV) con firma COPNIA, cartografía SIG y anexos, listo para radicar',
  },
  {
    paso: '05',
    titulo: 'Socialización, radicación y seguimiento ante ANLA/CAR',
    desc: 'La socialización del estudio con las comunidades del área de influencia es obligatoria para EIA ante la ANLA (Decreto 2041/2014) y recomendable para PMA ante la CAR. BIC prepara y acompaña la reunión de socialización: elabora los materiales de comunicación (cartillas, presentaciones en lenguaje accesible, mapas de afectación), sistematiza los pronunciamientos de la comunidad y los incorpora en el documento final. Una vez aprobado el expediente, BIC lo radica ante la ANLA o la CAR correspondiente y hace el seguimiento del trámite: atención de requerimientos de información adicional, visitas técnicas con los funcionarios de la autoridad ambiental, subsanación de observaciones y respuesta a los autos de trámite hasta obtener la resolución de licencia o permiso. BIC también elabora los informes de cumplimiento ambiental (ICA) durante la fase de construcción cuando el contrato lo incluye.',
    herramientas: ['Decreto 2041/2014 (proceso licencia ambiental)', 'Ventanilla VITAL ANLA (radicación en línea)', 'Sistema de gestión documental CAR territorial', 'Informes de Cumplimiento Ambiental (ICA)'],
    resultado: 'Licencia ambiental o permiso CAR obtenido + acompañamiento durante la construcción si el contrato lo incluye',
  },
]

const FAQ = [
  {
    q: '¿Cuándo necesito un EIA y cuándo es suficiente con un PMA?',
    a: 'La diferencia clave es si el proyecto está en la lista de actividades que requieren licencia ambiental según el Decreto 1076/2015 (artículos 2.2.2.3.1.1 y siguientes). Si el proyecto está en esa lista (rellenos sanitarios, grandes proyectos mineros, proyectos de hidrocarburos, vías primarias, aeropuertos, etc.), necesita EIA y licencia ambiental ante la ANLA o la CAR. Si el proyecto no está en esa lista pero sí requiere un permiso ambiental puntual (concesión de agua, permiso de vertimientos, ocupación de cauce, aprovechamiento forestal), el instrumento es un PMA que sustenta técnicamente la solicitud de ese permiso. El PSMV es obligatorio para municipios con alcantarillado que vierten aguas residuales. BIC hace el diagnóstico inicial sin costo para determinar qué instrumento aplica a su proyecto específico.',
  },
  {
    q: '¿Cuánto cuesta un estudio ambiental y cuánto tarda?',
    a: 'El costo depende principalmente del tipo de instrumento, la extensión del área de influencia, el número de componentes ambientales a caracterizar y si hay trabajo de campo intensivo (inventarios de flora y fauna, muestreos de agua, análisis de laboratorio). Un PMA básico para una concesión de aguas o permiso de vertimientos puede costar entre $8.000.000 y $20.000.000 COP con un plazo de 4-6 semanas. Un PMA completo para obra civil mediana oscila entre $15.000.000 y $45.000.000 COP con un plazo de 6-10 semanas. Un EIA completo ante la CAR o la ANLA para un proyecto mediano (relleno sanitario pequeño, vía terciaria larga, planta de beneficio) puede costar entre $60.000.000 y $180.000.000 COP con un plazo de 3-6 meses para el estudio (sin contar el tiempo de trámite ante la autoridad). BIC envía propuesta detallada en 24 horas.',
  },
  {
    q: '¿Qué es el DAA y cuándo lo exige la ANLA?',
    a: 'El Diagnóstico Ambiental de Alternativas (DAA) es el estudio previo al EIA que la ANLA exige para proyectos de gran impacto potencial donde existen múltiples alternativas de localización o tecnología que deben evaluarse antes de decidir cuál se desarrolla. El DAA presenta al menos dos alternativas, caracteriza el estado ambiental del área de cada una (con una línea base simplificada), evalúa los impactos potenciales de cada alternativa y propone cuál es la más viable ambientalmente. La ANLA revisa el DAA mediante un auto de inicio del trámite de licencia y emite el concepto de Definición de Estudios, que le dice al proponente cuál alternativa debe desarrollar en el EIA y cuáles son los alcances específicos que debe cumplir. La Resolución 1415/2012 del MADS establece los términos de referencia del DAA por sector (energía, vías, hidrocarburos, etc.).',
  },
  {
    q: '¿Qué incluye la línea base ambiental de un EIA?',
    a: 'La línea base es la caracterización detallada del estado del entorno antes de que llegue el proyecto. Incluye tres componentes principales. El componente abiótico: clima (precipitación, temperatura, vientos, índices de aridez), hidrología (régimen de caudales de las corrientes cercanas, calidad del agua: pH, DBO5, DQO, SST, coliformes, metales pesados), geología y geomorfología (litología, procesos morfodinámicos activos), suelos (clasificación IGAC, uso actual vs. potencial) y calidad del aire (material particulado PM10 y PM2.5, ruido en dB(A)). El componente biótico: cobertura vegetal (clasificación CORINE Land Cover), inventario florístico con metodología de cuadrantes o transectos (familias botánicas, especies CITES y Resolución 1912/2017 del MADS), inventario de fauna (mamíferos, aves, reptiles, anfibios, peces, macroinvertebrados acuáticos) e identificación de ecosistemas estratégicos (páramos, humedales, bosques secos). El componente socioeconómico: demografía, actividades económicas, infraestructura, servicios públicos, organizaciones sociales y presencia de comunidades étnicas que requieran consulta previa.',
  },
  {
    q: '¿Cómo funciona el proceso de licencia ambiental ante la ANLA?',
    a: 'El proceso ante la ANLA para licencia ambiental tiene cinco etapas. (1) Solicitud de pronunciamiento de competencia: el proponente consulta a la ANLA si el proyecto requiere licencia ante ella o ante la CAR. (2) Solicitud de DAA (cuando aplica): presentación del diagnóstico de alternativas y espera del concepto de Definición de Estudios (plazo legal: 30 días hábiles para la ANLA). (3) Presentación del EIA: una vez aprobado el DAA o definido que no aplica, se radica el EIA completo a través de la Ventanilla Integral de Trámites Ambientales en Línea (VITAL). (4) Evaluación por la ANLA: el equipo técnico de la ANLA revisa el EIA, puede emitir requerimientos de información adicional (auto de requerimiento) y realiza visita de campo. El plazo legal para pronunciarse es 90 días hábiles, pero en la práctica puede tomar 6-18 meses dependiendo de la complejidad. (5) Resolución de licencia o negación: la ANLA emite la resolución que otorga o niega la licencia, con las obligaciones y condicionantes del PMA. BIC acompaña todas las etapas.',
  },
  {
    q: '¿El estudio ambiental sirve para proyectos viales y de puentes?',
    a: 'Sí, y es uno de los tipos de proyectos más frecuentes. El alcance del instrumento ambiental para un proyecto vial depende de la categoría de la vía: vías primarias de competencia nacional (INVIAS/ANI) requieren EIA ante la ANLA; vías secundarias y terciarias de competencia departamental o municipal generalmente requieren PMA ante la CAR territorial. Los impactos más relevantes en proyectos viales que deben evaluarse son: afectación de corrientes de agua (puentes y obras de drenaje transversal), remoción de cobertura vegetal y aprovechamiento forestal, movimientos de tierra con potencial de erosión y sedimentación, y afectación de comunidades locales. BIC tiene experiencia específica en los estudios ambientales para vías y puentes que afectan corrientes de agua, incluyendo el diseño hidráulico de los cruces y el permiso de ocupación de cauce ante la CAR, que es el trámite más común en este tipo de proyectos.',
  },
  {
    q: '¿Qué pasa si construyo o ejecuto un proyecto sin licencia ambiental?',
    a: 'Construir o ejecutar un proyecto que requiere licencia ambiental sin haberla obtenido es una infracción ambiental grave según la Ley 1333 de 2009 (régimen sancionatorio ambiental). Las consecuencias pueden ser: multas de hasta 5.000 salarios mínimos mensuales legales vigentes (SMLMV), que en 2026 equivalen aproximadamente a $290.000.000 COP; decomiso de equipos y maquinaria; suspensión inmediata de la obra o actividad mediante medida preventiva; y en casos graves, arresto o prisión para el representante legal de la empresa responsable. Además, la obra ejecutada sin licencia puede ser ordenada a demoler o restaurar a costa del infractor. La autoridad ambiental (ANLA o CAR) tiene hasta 20 años para investigar infracciones ambientales y las multas se actualizan con los intereses moratorios. BIC asesora tanto en proyectos nuevos que necesitan licencia como en la regularización de situaciones donde ya se inició la obra sin permiso.',
  },
  {
    q: '¿BIC hace seguimiento post-licencia y elabora los informes ICA?',
    a: 'Sí. Muchos proyectos requieren que el titular de la licencia ambiental presente periódicamente (semestral o anualmente) ante la ANLA o la CAR un Informe de Cumplimiento Ambiental (ICA) que demuestra que se están ejecutando las medidas del PMA y que los indicadores de monitoreo están dentro de los rangos establecidos en la licencia. BIC elabora los ICA para sus clientes: realiza el muestreo de los puntos de monitoreo (calidad del agua, calidad del aire, niveles de ruido, estado de la revegetalización), consolida los resultados en el informe, compara con las metas del PMA y elabora el informe en el formato exigido por la autoridad ambiental. El seguimiento post-licencia es también una oportunidad para ajustar las medidas del PMA si los impactos reales son diferentes a los proyectados en el EIA.',
  },
]

const CLIENTES = [
  { tipo: 'Constructoras y promotores inmobiliarios', desc: 'Urbanizaciones, conjuntos residenciales y proyectos comerciales que afectan corrientes de agua o requieren permiso de ocupación de cauce ante la CAR.' },
  { tipo: 'Municipios y alcaldías', desc: 'PSMV, PMA para obras de infraestructura, licencias ambientales para rellenos sanitarios y gestión de vertimientos ante la CAR territorial.' },
  { tipo: 'Empresas de servicios públicos (ESP)', desc: 'Licencias para captaciones (concesión de aguas), vertimientos de PTAR (permiso de vertimientos), y PMA para rehabilitación o ampliación de sistemas.' },
  { tipo: 'Empresas mineras y de hidrocarburos', desc: 'EIA y DAA ante la ANLA, seguimiento de planes de manejo en etapa de operación e ICA periódicos para cumplimiento de la licencia ambiental.' },
  { tipo: 'Proyectos viales y de infraestructura', desc: 'PMA para vías terciarias y secundarias que afectan corrientes, permisos de ocupación de cauce para puentes y box culverts ante la CAR.' },
  { tipo: 'Operadores de rellenos y gestores de residuos', desc: 'EIA para nuevos rellenos sanitarios, ampliaciones de vida útil, plantas de transferencia y aprovechamiento de residuos con componente hídrico o ambiental relevante.' },
]

const NORMATIVA = [
  { codigo: 'Ley 99/1993', descripcion: 'Ley del Medio Ambiente — crea el SINA, el MADS, las CAR y la ANLA; establece el principio de precaución y el régimen de licencias ambientales' },
  { codigo: 'Decreto 1076/2015', descripcion: 'Decreto Único Reglamentario del Sector Ambiente — compila toda la normativa ambiental incluyendo licencias, permisos, concesiones y vertimientos' },
  { codigo: 'Decreto 2041/2014', descripcion: 'Reglamenta el título VIII de la Ley 99 en materia de licencias ambientales — define proyectos que requieren licencia, el proceso del EIA y el trámite ante ANLA/CAR' },
  { codigo: 'Resolución 1415/2012', descripcion: 'MADS — términos de referencia para el Diagnóstico Ambiental de Alternativas (DAA) por sector de proyecto' },
  { codigo: 'Ley 1333/2009', descripcion: 'Régimen sancionatorio ambiental en Colombia — multas, medidas preventivas y sanciones por infracciones ambientales' },
  { codigo: 'Decreto 3930/2010', descripcion: 'Recopilado en Decreto 1076/2015 — regula los vertimientos de aguas residuales y obliga a municipios al PSMV ante la CAR' },
]

export default function ServicioAmbiental() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F0F 0%, #143620 55%, #1E5030 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Ingeniería ambiental · Colombia</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Estudios Ambientales y Licencia Ambiental en Colombia
          </h1>
          <p style={{ color: '#52B788', fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 600, marginBottom: 20 }}>
            EIA, PMA, DAA y PSMV — trámites ante ANLA y CAR con firma COPNIA vigente
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            BIC Bernal Ingeniería Consultores elabora estudios de impacto ambiental (EIA),
            planes de manejo ambiental (PMA), diagnósticos ambientales de alternativas (DAA) y
            planes de saneamiento y manejo de vertimientos (PSMV) para constructoras, municipios,
            ESP, empresas mineras y proyectos de infraestructura en todo Colombia. Cada estudio
            incluye línea base ambiental, matrices Leopold y CONESA, plan de manejo estructurado
            por programas y acompañamiento hasta la resolución de licencia o permiso ante la CAR o la ANLA.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar estudio ambiental</Btn>
            <Btn variant="outline" href="/servicios" dark>Ver todos los servicios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['EIA','DAA','PMA','PSMV','ANLA','CAR','Decreto 1076/2015','COPNIA vigente'].map(t => (
              <Tag key={t} style={{ background: 'rgba(82,183,136,0.15)', color: '#74D9A5', border: '1px solid rgba(82,183,136,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#f0faf4', borderBottom: '1px solid #b3dfc5' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '32px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            {[
              { num: '+15 años', label: 'experiencia en trámites ante CAR y ANLA' },
              { num: '100%', label: 'de expedientes radicados sin rechazo por forma' },
              { num: 'Nacional', label: 'cobertura: todas las CAR y la ANLA' },
              { num: 'COPNIA', label: 'firma vigente — 17202-313228 CLD activa' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#143620', marginBottom: 4 }}>{num}</div>
                <div style={{ color: '#555', fontSize: 13, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS DE ESTUDIO ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Tipos de instrumento ambiental</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué estudio ambiental necesita su proyecto?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            El tipo de instrumento ambiental depende de la categoría del proyecto, la autoridad ambiental
            competente (ANLA o CAR) y si el proyecto está en la lista de actividades que requieren licencia
            ambiental según el Decreto 1076/2015. BIC hace el diagnóstico inicial sin costo.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TIPOS.map(t => (
              <div key={t.tipo} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: 28, borderTop: '4px solid #52B788',
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0A1F0F', marginBottom: 4 }}>{t.tipo}</h3>
                <p style={{ color: '#52B788', fontWeight: 600, fontSize: 13, marginBottom: 12 }}>{t.subtitulo}</p>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>{t.desc}</p>
                <div style={{ background: '#f0faf4', borderRadius: 8, padding: '12px 14px', marginBottom: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#143620', marginBottom: 4 }}>CUÁNDO APLICA</p>
                  <p style={{ fontSize: 13, color: '#444', margin: 0, lineHeight: 1.6 }}>{t.cuando}</p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 6 }}>CLIENTES TÍPICOS</p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', color: '#555', fontSize: 13, lineHeight: 1.6 }}>
                    {t.aplica.map(r => <li key={r}>{r}</li>)}
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
          <SectionLabel>Metodología</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo elabora BIC un estudio ambiental en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 760 }}>
            Desde la línea base hasta la resolución de licencia o permiso ambiental.
            Cada estudio BIC cumple con el Decreto 1076/2015, el Decreto 2041/2014,
            la Ley 99/1993 y los términos de referencia sectoriales del MADS y la ANLA.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((m, i) => (
              <div key={m.paso} style={{ display: 'grid', gridTemplateColumns: '68px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #52B788, #2D6A4F)',
                    color: '#fff', fontWeight: 900, fontSize: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{m.paso}</div>
                  {i < PROCESO.length - 1 && (
                    <div style={{ width: 2, flex: 1, background: '#b3dfc5', marginTop: 8, minHeight: 28 }} />
                  )}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#0A1F0F' }}>{m.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 8, padding: '10px 14px', border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6 }}>HERRAMIENTAS</p>
                      <ul style={{ margin: 0, padding: '0 0 0 14px', color: '#555', fontSize: 12, lineHeight: 1.7 }}>
                        {m.herramientas.map(h => <li key={h}>{h}</li>)}
                      </ul>
                    </div>
                    <div style={{ background: '#f0faf4', borderRadius: 8, padding: '10px 14px', border: '1px solid #b3dfc5' }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: '#143620', marginBottom: 6 }}>ENTREGABLE</p>
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
      <section style={{ background: 'linear-gradient(90deg, #143620, #2D6A4F)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>¿Necesita licencia ambiental o permiso CAR?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>BIC envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo</p>
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

      {/* ── CLIENTES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>¿Quién nos contrata?</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Clientes que contratan estudios ambientales con BIC
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            BIC trabaja con entidades públicas, empresas privadas y constructoras en todo Colombia
            que necesitan un estudio ambiental bien hecho — uno que la CAR o la ANLA apruebe sin
            reprocesos y que proteja al cliente de sanciones ambientales futuras.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
            {CLIENTES.map(c => (
              <div key={c.tipo} style={{
                background: '#f5faf7', border: '1px solid #c8e6d4', borderRadius: 10, padding: 20,
                borderLeft: '3px solid #52B788',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0A1F0F', marginBottom: 6 }}>{c.tipo}</h3>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── NORMATIVA ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Marco legal y técnico</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normativa que rige los estudios ambientales en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 28, maxWidth: 760 }}>
            BIC elabora cada estudio bajo el marco normativo ambiental colombiano vigente. Conocer
            la norma aplicable evita rechazos por las CAR, la ANLA y los organismos financiadores (SGR, FINDETER).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 16, alignItems: 'center',
                background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  background: '#143620', color: '#fff', borderRadius: 6,
                  padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12,
                }}>{n.codigo}</div>
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
            Otros servicios de ingeniería e ingeniería ambiental de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Diseño de acueductos y PTAP', href: '/servicios/diseno-acueductos' },
              { label: 'Formulación proyectos regalías SGR', href: '/servicios/regalias-mga' },
              { label: 'Estudios hidrológicos Colombia', href: '/servicios/estudios-hidrologicos' },
              { label: 'Encauzamiento de ríos y quebradas', href: '/encauzamiento-rios-colombia' },
              { label: 'Diseño de bocatomas Colombia', href: '/bocatomas-colombia' },
              { label: 'Estudios de torrencialidad', href: '/estudios-torrencialidad-colombia' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#f0faf4', border: '1px solid #b3dfc5',
                borderRadius: 10, padding: '14px 18px', color: '#143620',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d5f0e0')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f0faf4')}
              >
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
            Todo lo que necesita saber sobre estudios ambientales en Colombia
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 32, maxWidth: 760 }}>
            Respuestas técnicas a las preguntas reales que nos hacen constructoras, municipios
            y empresas antes de contratar el estudio ambiental o iniciar el trámite de licencia.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#0A1F0F', lineHeight: 1.4 }}>
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
        background: 'linear-gradient(135deg, #0A1F0F 0%, #1E5030 100%)',
        padding: '72px 24px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌿</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            ¿Necesita un estudio ambiental<br />o licencia ambiental en Colombia?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Cuéntenos el tipo de proyecto, el municipio, la autoridad ambiental competente
            (CAR o ANLA) y si ya tiene inicio del trámite o está comenzando desde cero.
          </p>
          <p style={{ color: '#74D9A5', fontWeight: 600, fontSize: 15, marginBottom: 32 }}>
            BIC le envía propuesta técnica y económica en menos de 24 horas · Primera consulta sin costo.
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
