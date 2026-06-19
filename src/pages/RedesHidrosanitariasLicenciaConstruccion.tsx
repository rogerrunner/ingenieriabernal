import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import SpeakableSchema from '@/components/SpeakableSchema'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag, CTABanner } from '@/components/ui'
import QuoteFormInline from '@/components/QuoteFormInline'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, necesito el diseño de redes hidrosanitarias para tramitar la licencia de construcción. ¿Pueden cotizar el servicio?')

const seoConfig = {
  title: 'Diseño de Redes Hidrosanitarias para Licencia de Construcción en Colombia',
  description: 'Diseño de redes hidrosanitarias (agua potable, aguas residuales, aguas lluvias y contra incendio NSR-10) requerido por la curaduría urbana para la licencia de construcción. BIC entrega memorias de cálculo y planos firmados COPNIA.',
  canonical: 'https://ingenieriabernal.co/redes-hidrosanitarias-licencia-construccion',
  noindex: false,
  keywords: [
    'diseño redes hidrosanitarias licencia construcción Colombia',
    'memoria hidráulica NSR-10 licencia construcción',
    'qué pide la curaduría para redes hidráulicas',
    'diseño instalaciones hidráulicas edificio Colombia',
    'redes hidrosanitarias NSR-10 Título J',
    'contra incendio NSR-10 licencia construcción',
    'diseño hidrosanitario planos AutoCAD firma COPNIA',
    'instalaciones hidráulicas edificio multifamiliar Colombia',
  ],
}

const FAQ = [
  {
    q: '¿Qué documentos de redes hidrosanitarias exige la curaduría para la licencia de construcción?',
    a: 'La curaduría urbana exige: (1) planos de redes de agua potable (AP), aguas residuales domésticas (AR) y aguas lluvias (AL) en AutoCAD, firmados por ingeniero con matrícula COPNIA vigente; (2) memoria de cálculo hidráulico con caudales, presiones, velocidades y selección de materiales conforme a NSR-10 Título J y RAS 2017; (3) para edificaciones con más de 1.000 m² construidos o más de 100 ocupantes: planos de la red contra incendio (CI) firmados según NSR-10 Título K y NFPA 13. BIC elabora todos estos documentos.',
  },
  {
    q: '¿Qué normativa aplica al diseño de redes hidrosanitarias en Colombia?',
    a: 'El diseño de instalaciones hidráulicas y sanitarias en Colombia se rige por: NSR-10 Título J (instalaciones hidráulicas, sanitarias y de gas); RAS 2017 (Resolución 0330 del MVCT) para los criterios hidráulicos; normas técnicas ICONTEC (NTC 1500 para instalaciones de fontanería, NTC 4113 para tuberías de PVC), y el Reglamento Técnico del operador de la red (EAAB en Bogotá, EPM en Medellín, etc.) para las condiciones de conexión al sistema público.',
  },
  {
    q: '¿Cuándo es obligatoria la red contra incendio (CI) según NSR-10?',
    a: 'La red CI es obligatoria para edificaciones con área total construida mayor a 1.000 m², más de 100 ocupantes simultáneos, o que alberguen usos de alto riesgo (bodegas, industrias, cocinas industriales, auditorios, hospitales). NSR-10 Título K y NFPA 13 determinan el sistema requerido: gabinetes manguera, rociadores automáticos, tanque de reserva CI, bomba principal y bomba jockey. BIC diseña el sistema completo.',
  },
  {
    q: '¿Cuál es la diferencia entre el diseño que presenta el arquitecto y el que elabora BIC?',
    a: 'Los planos arquitectónicos definen la ubicación de baños, cocinas y puntos de consumo, pero no incluyen el cálculo hidráulico técnico. BIC elabora el diseño de ingeniería: dimensionamiento de diámetros, cálculo de presiones y pérdidas de carga, velocidades, puntos de conexión a la red pública, diseño de tanques de almacenamiento, bombas de presurización y, si aplica, la red CI. El producto de BIC es el documento técnico que firma el ingeniero responsable del diseño hidráulico.',
  },
  {
    q: '¿BIC puede elaborar el diseño sin los planos arquitectónicos definitivos?',
    a: 'No. El diseño hidrosanitario se realiza sobre los planos arquitectónicos definitivos en AutoCAD. BIC necesita los planos de cada nivel (planta, cortes y fachadas) con las cotas de nivel, la ubicación de baños, cocinas, área de máquinas y conexión a la red pública. Una vez recibidos los planos, BIC puede entregar el diseño en 15 a 30 días hábiles dependiendo de la complejidad del proyecto.',
  },
  {
    q: '¿BIC firma los planos con matrícula COPNIA para la curaduría?',
    a: 'Sí. Ing. Rogerio Bernal Ríos firma todos los documentos con su matrícula profesional COPNIA 17202-313228 CLD (Caldas), válida en todo el territorio nacional. La firma COPNIA del ingeniero responsable del diseño hidráulico es requisito indispensable de la curaduría urbana y del Consejo Profesional Nacional de Ingeniería para la radicación de licencias de construcción.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const SISTEMAS = [
  { ico: '🚰', titulo: 'Red de Agua Potable (AP)', desc: 'Diseño de la red de distribución interna: puntos de consumo, cálculo de caudales de diseño, dimensionamiento de tuberías, presiones disponibles, tanque de almacenamiento y bomba de presurización si aplica. Conforme a NSR-10 Título J y RAS 2017.' },
  { ico: '🔄', titulo: 'Red de Aguas Residuales (AR)', desc: 'Sistema de recolección de aguas residuales domésticas por gravedad: colectores por niveles, cámaras de inspección y conexión al alcantarillado del operador local. Trampa de grasas para cocinas. Cálculo de pendientes, velocidades y diámetros conforme a RAS Título D.' },
  { ico: '🌧️', titulo: 'Red de Aguas Lluvias (AL)', desc: 'Recolección de aguas de cubiertas y zonas exteriores: bajantes, canaletas, sumideros y conexión a la red pluvial. Cálculo de intensidades de lluvia (curvas IDF) y caudales de escorrentía por nivel conforme a RAS 2000 §D y normas del operador local.' },
  { ico: '🔥', titulo: 'Red Contra Incendio (CI)', desc: 'Cuando aplica por área o uso (NSR-10 Título K + NFPA 13): diseño completo de gabinetes manguera, rociadores automáticos, tanque de reserva CI, bomba principal y jockey, red de distribución a presión, isometrías y detalles del cuarto de bombas. BIC diseña el sistema aprobable por la curaduría.' },
  { ico: '📐', titulo: 'Memorias de cálculo', desc: 'Documento técnico con metodología, caudales, presiones, velocidades, pérdidas de carga, dimensionamiento de todos los componentes y selección de materiales. Es el documento central que evalúa la curaduría y que respalda la firma COPNIA del ingeniero.' },
  { ico: '📁', titulo: 'Planos en AutoCAD y PDF', desc: 'Plantas por nivel con trazado de todas las redes, cortes isométricos, detalles de conexiones especiales, cuarto de bombas y tanques. Entrega en DWG (AutoCAD) y PDF firmado digitalmente. Formato exigido por curadurías y revisores de proyecto.' },
]

const PROCESO = [
  { paso: '01', titulo: 'Recibo de planos arquitectónicos en AutoCAD', desc: 'BIC recibe los planos definitivos del proyecto arquitectónico en AutoCAD (.dwg): plantas por nivel, cortes, fachadas con cotas y uso de cada espacio. Sin planos definitivos no puede iniciarse el diseño.' },
  { paso: '02', titulo: 'Revisión de normas locales y condiciones del operador', desc: 'Verificación de las condiciones de conexión al sistema público (presión disponible, caudal mínimo, normativa del operador: EAAB, EPM, EMCALI, etc.) y de los requisitos específicos de la curaduría urbana de la ciudad.' },
  { paso: '03', titulo: 'Diseño hidráulico y cálculo de las redes', desc: 'Dimensionamiento de tuberías, cálculo de caudales y presiones en cada punto de consumo, verificación de velocidades y pérdidas de carga. Para CI: selección de sistema, bomba y rociadores conforme a NFPA 13.' },
  { paso: '04', titulo: 'Elaboración de planos y memorias de cálculo', desc: 'Producción de planos de cada red en AutoCAD por nivel, isometrías de instalaciones especiales, detalles de conexiones y redacción de la memoria de cálculo hidráulico con todos los parámetros de diseño.' },
  { paso: '05', titulo: 'Revisión interna y ajuste con el arquitecto', desc: 'BIC revisa la interferencia de las redes con la estructura y la arquitectura, coordina ajustes de pendientes y trazados con el arquitecto del proyecto, y entrega la versión final lista para presentar a la curaduría.' },
  { paso: '06', titulo: 'Entrega firmada y radicación en la curaduría', desc: 'BIC entrega los planos y memorias firmados con matrícula COPNIA vigente en DWG y PDF. Si la curaduría formula observaciones técnicas al diseño hidráulico, BIC las responde sin costo adicional.' },
]

const NORMATIVA = [
  { codigo: 'NSR-10 Título J', descripcion: 'Reglamento Colombiano de Construcción Sismo Resistente — Instalaciones hidráulicas, sanitarias y de gas. Define los requisitos de diseño de todas las redes internas de agua potable y saneamiento.' },
  { codigo: 'NSR-10 Título K', descripcion: 'Sistemas de prevención y protección contra incendios. Establece cuándo es obligatoria la red CI, criterios de diseño de gabinetes, rociadores, tanque de reserva y bombas.' },
  { codigo: 'RAS 2017 (Res. 0330)', descripcion: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico del MVCT. Criterios hidráulicos de diseño para redes de distribución y alcantarillado.' },
  { codigo: 'NFPA 13', descripcion: 'National Fire Protection Association — Estándar para la instalación de sistemas de rociadores automáticos. Complementa NSR-10 Título K para el diseño de redes CI en edificaciones colombianas.' },
]

export default function RedesHidrosanitariasLicenciaConstruccion() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const s = document.createElement('script')
    s.type = 'application/ld+json'
    s.id = 'schema-hidrosanitarias-faq'
    s.textContent = JSON.stringify(FAQ_SCHEMA)
    document.head.appendChild(s)
    const bc = document.createElement('script')
    bc.type = 'application/ld+json'
    bc.id = 'schema-hidrosanitarias-bc'
    bc.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://ingenieriabernal.co' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://ingenieriabernal.co/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Redes Hidrosanitarias Licencia Construcción', item: 'https://ingenieriabernal.co/redes-hidrosanitarias-licencia-construccion' },
      ],
    })
    document.head.appendChild(bc)
    return () => {
      document.getElementById('schema-hidrosanitarias-faq')?.remove()
      document.getElementById('schema-hidrosanitarias-bc')?.remove()
    }
  }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SpeakableSchema name="Diseño de Redes Hidrosanitarias para Licencia de Construcción en Colombia | BIC" />
      <SchemaMarkup
        type="service"
        serviceName="Diseño de Redes Hidrosanitarias para Licencia de Construcción — NSR-10"
        serviceDesc={seoConfig.description}
        serviceUrl="/redes-hidrosanitarias-licencia-construccion"
        faqItems={FAQ}
      />

      <CTABanner service="Diseño hidrosanitario para licencia de construcción — NSR-10 J y K, firma COPNIA, planos AutoCAD" />

      <section style={{
        background: 'linear-gradient(135deg, #001A33 0%, #002A50 55%, #003B6F 100%)',
        paddingTop: 120, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Instalaciones hidráulicas · Colombia</SectionLabel>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(24px, 4vw, 44px)', lineHeight: 1.2, marginBottom: 20 }}>
            Diseño de Redes Hidrosanitarias<br />para Licencia de Construcción en Colombia
          </h1>
          <p style={{ color: '#17A2B8', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            NSR-10 Títulos J y K · Planos AutoCAD · Firma COPNIA · Curaduría urbana
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: 760 }}>
            La curaduría urbana exige los planos de redes hidrosanitarias firmados por ingeniero con matrícula COPNIA para expedir
            la licencia de construcción. BIC elabora el diseño completo de las redes AP, AR, AL y CI, con memorias de cálculo
            y planos en AutoCAD listos para radicación.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 Cotizar diseño — enviar planos arquitectónicos</Btn>
            <Btn variant="outline" href="/servicios/redes-hidrosanitarias" dark>Ver servicio hidrosanitarios</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['NSR-10 Título J','NSR-10 Título K','NFPA 13','Planos AutoCAD','Firma COPNIA','Curaduría urbana'].map(t => (
              <Tag key={t} style={{ background: 'rgba(23,162,184,0.15)', color: '#7FDBEA', border: '1px solid rgba(23,162,184,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      <Section style={{ background: '#f0f9ff', borderBottom: '1px solid #b3e0ea' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Qué exige la curaduría</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 16 }}>
            ¿Qué documentos hidráulicos pide la curaduría para la licencia de construcción?
          </h2>
          <ThinLine mb={24} />
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, marginBottom: 16, maxWidth: 820 }}>
            El <strong>Decreto 1077/2015</strong> y el <strong>NSR-10</strong> establecen que toda licencia de construcción para
            edificaciones de uso residencial, comercial o institucional debe incluir el diseño de las instalaciones hidráulicas y
            sanitarias firmado por un <strong>ingeniero con matrícula COPNIA</strong>. La curaduría urbana verifica que los planos
            cumplan la normativa antes de expedir el permiso de construcción.
          </p>
          <p style={{ color: '#333', fontSize: 15, lineHeight: 1.85, maxWidth: 820 }}>
            El diseño debe cubrir la <strong>red de agua potable (AP)</strong>, la <strong>red de aguas residuales domésticas (AR)</strong>
            y la <strong>red de aguas lluvias (AL)</strong>. Para edificaciones que superen 1.000 m² construidos o 100 ocupantes
            simultáneos, también es obligatorio el diseño de la <strong>red contra incendio (CI)</strong> conforme al NSR-10 Título K y la NFPA 13.
          </p>
        </div>
      </Section>

      <section style={{ background: '#EFF6FF', borderBottom: '1px solid #BFDBFE' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }} id="geo-fragment">
          <p style={{ color: '#1e40af', fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            <strong>BIC — Bernal Ingeniería Consultores</strong> diseña redes hidrosanitarias (AP, AR, AL y CI) para licencias de
            construcción en todo Colombia: edificios residenciales, colegios, hospitales, centros comerciales, plantas industriales y
            urbanizaciones. Planos AutoCAD y memorias de cálculo firmados COPNIA — listos para curaduría en 15 a 30 días hábiles.
            Ing. Rogerio Bernal Ríos — COPNIA 17202-313228 CLD. Propuesta en 24 h: +57 302 477 8910.
          </p>
        </div>
      </section>

      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Sistemas diseñados por BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            ¿Qué incluye el diseño hidrosanitario para licencia?
          </h2>
          <ThinLine mb={32} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {SISTEMAS.map(e => (
              <div key={e.titulo} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 26, borderTop: '4px solid #17A2B8' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{e.ico}</div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#002A50', marginBottom: 10 }}>{e.titulo}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Proceso de diseño</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Cómo trabaja BIC para entregar el diseño listo para curaduría
          </h2>
          <ThinLine mb={36} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESO.map((p, i) => (
              <div key={p.paso} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, position: 'relative', paddingBottom: 28 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg, #17A2B8, #0d8fa3)', color: '#fff', fontWeight: 900, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.paso}</div>
                  {i < PROCESO.length - 1 && <div style={{ width: 2, flex: 1, background: '#d0e8f0', marginTop: 8, minHeight: 28 }} />}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: '#002A50' }}>{p.titulo}</h3>
                  <p style={{ color: '#555', lineHeight: 1.75, fontSize: 14, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Normativa aplicable</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Normas que rigen el diseño hidrosanitario en Colombia
          </h2>
          <ThinLine mb={28} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NORMATIVA.map(n => (
              <div key={n.codigo} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 16, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 20px', border: '1px solid #e2e8f0' }}>
                <div style={{ background: '#003B6F', color: '#fff', borderRadius: 6, padding: '6px 10px', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>{n.codigo}</div>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{n.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 8 }}>
            Todo sobre el diseño hidrosanitario para licencia de construcción
          </h2>
          <ThinLine mb={32} />
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

      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Servicios relacionados</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(20px, 3vw, 30px)', marginBottom: 24 }}>
            Otros diseños técnicos de BIC
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Permiso de vertimiento Colombia', href: '/tramitar-permiso-vertimiento-colombia' },
              { label: 'Diseño de PTAR Colombia', href: '/diseno-ptar-colombia' },
              { label: 'Concesión de aguas superficiales', href: '/concesion-aguas-superficiales-tramite' },
              { label: 'Estudio inundación Decreto 1807', href: '/estudio-detallado-inundacion-decreto-1807' },
              { label: 'Diseño acueducto para ESP', href: '/diseno-acueducto-entrega-esp' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{ display: 'block', background: '#f0f9ff', border: '1px solid #b3e0ea', borderRadius: 10, padding: '14px 18px', color: '#003B6F', fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4 }}>{s.label} →</a>
            ))}
          </div>
        </div>
      </Section>

      <Section><QuoteFormInline /></Section>

      <section style={{ background: 'linear-gradient(135deg, #001A33 0%, #003B6F 100%)', padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🏗️</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25 }}>
            ¿Necesita el diseño hidrosanitario<br />para su licencia de construcción?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Envíenos los planos arquitectónicos en AutoCAD (.dwg), el uso del proyecto y la ciudad.
            BIC le cotiza el diseño completo de redes AP, AR, AL y CI (si aplica) en menos de 24 horas.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Cotizar — enviar planos por WhatsApp
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
