import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import SchemaMarkup from '@/components/SchemaMarkup'
import { BlueprintBg, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hello, I am interested in hydraulic engineering consulting services in Colombia. Can you provide more information and a quote?')

const seoConfig = {
  title: 'Hydraulic Engineering Consulting Colombia — BIC | Ing. Bernal',
  description: 'Expert hydraulic engineering consulting for water infrastructure projects in Colombia. COPNIA-certified. Aqueducts, WWTP, drainage. English-speaking team. Get a quote.',
  keywords: [
    'hydraulic engineering consulting Colombia',
    'civil engineer Colombia',
    'water infrastructure Colombia',
    'engineering consulting Colombia',
    'WWTP design Colombia',
    'aqueduct design Colombia',
    'contractor Colombia',
    'environmental engineer Colombia',
    'project management consulting Colombia',
    'Colombian diaspora engineering',
    'hydraulic engineer English Colombia',
    'COPNIA certified engineer Colombia',
    'water treatment plant Colombia',
    'flood risk analysis Colombia',
  ],
  canonical: 'https://ingenieriabernal.co/hydraulic-engineering-consulting',
}

const SERVICES = [
  { icon: '🏗️', title: 'Aqueduct & Water Supply Design', desc: 'Complete design of water supply systems under Colombian technical standard RAS 2017. Includes hydraulic modeling with EPANET, PTAP design, intake structures, and storage tanks.' },
  { icon: '🌊', title: 'Wastewater Treatment Plant (WWTP) Design', desc: 'PTAR design for municipalities, industry, and residential developments. Biological, physical, and chemical treatment systems. RAS 2017 and environmental permit compliance.' },
  { icon: '📊', title: 'Hydraulic Studies & Flood Risk Analysis', desc: 'Flood mapping, inundation studies, and hydrological reports using HEC-HMS and HEC-RAS 2D. Required for construction permits near rivers and under Decree 1807/2014.' },
  { icon: '💧', title: 'Hydrogeological Studies & Water Sourcing', desc: 'Groundwater studies, surface water concessions, and water rights applications before environmental authorities (CAR). Decree 1076/2015 compliance.' },
  { icon: '🔥', title: 'Fire Protection System Design (NSR-10 Chapter J)', desc: 'Fire suppression and detection systems for commercial, industrial, and residential buildings. Full compliance with Colombian seismic building code NSR-10.' },
  { icon: '🔍', title: 'Construction Supervision & Technical Oversight', desc: 'Resident engineer and technical supervision services for water infrastructure projects. COPNIA-certified professional accountability throughout construction.' },
  { icon: '🗺️', title: 'Topographic Surveys & Soil Studies', desc: 'Topographic surveys with total station and drone photogrammetry. Geotechnical studies, soil bearing capacity, and slope stability analysis.' },
]

const ADVANTAGES = [
  { label: 'COPNIA-Certified', detail: 'Professional engineer registration 17202-313228 — required for all technical documents in Colombia' },
  { label: 'English proficiency', detail: 'TOEFL iBT 98/120 — direct communication, reports and meetings in English or Spanish' },
  { label: '30+ years experience', detail: 'Water infrastructure projects across Caldas, Risaralda, Antioquia and nationwide' },
  { label: 'Competitive pricing', detail: 'International clients benefit from favorable COP/USD exchange rates' },
  { label: 'Remote-friendly', detail: 'Full service via WhatsApp, Zoom, email — no on-site visit required for most studies' },
  { label: 'Nationwide coverage', detail: 'Projects delivered across all Colombian departments — not limited to local area' },
]

const FAQ = [
  {
    q: 'Do you work with clients based in the United States?',
    a: 'Yes. BIC regularly serves US-based clients including Colombian diaspora investors with property in Colombia, US developers bidding on Colombian infrastructure projects, and international companies needing COPNIA-certified engineering for Colombian regulatory compliance. All communication, documents, and meetings can be conducted in English.',
  },
  {
    q: 'What is COPNIA and why does it matter?',
    a: 'COPNIA (Consejo Profesional Nacional de Ingeniería) is the Colombian professional engineering council. All technical engineering documents submitted to Colombian government entities — including construction permits, environmental permits, and public project bids — must be signed and stamped by a COPNIA-registered professional engineer. Ing. Rogerio Bernal Ríos holds active COPNIA registration 17202-313228.',
  },
  {
    q: 'Can BIC handle projects in any Colombian city?',
    a: 'Yes. BIC provides hydraulic engineering consulting services nationwide. While our physical base is in Manizales (Caldas), we have executed projects in Bogotá, Medellín, Cali, Barranquilla, the Eje Cafetero, Antioquia, and remote municipalities. Most technical work — studies, designs, reports — is delivered remotely. Site visits are scheduled when required.',
  },
  {
    q: 'How do I get a quote?',
    a: 'The fastest way is via WhatsApp (+57 302 477 8910) or email (rogeriobernal@ingenieriabernal.co). Share your project location, scope, and any permit requirements you have received. BIC responds in English or Spanish, typically within 24 hours, with a free preliminary assessment and a formal proposal within 48 hours.',
  },
  {
    q: 'What currencies and payment methods do you accept?',
    a: 'BIC invoices in Colombian Pesos (COP). International clients benefit from the favorable COP/USD exchange rate — Colombian engineering fees are highly competitive compared to US or European rates for the same professional standard. Payment via international wire transfer.',
  },
]

export default function HydraulicEngineerEnglish() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEOHead config={seoConfig} />
      <SchemaMarkup
        type="service"
        serviceName="Hydraulic Engineering Consulting Colombia — BIC"
        serviceDesc={seoConfig.description}
        serviceUrl="/hydraulic-engineering-consulting"
        faqItems={FAQ}
      />

      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A3A6B 60%, #2E5599 100%)',
        paddingTop: 120, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.07} />
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <SectionLabel light>Water Infrastructure · Colombia · English-speaking team</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 46px)', lineHeight: 1.2, marginBottom: 20,
          }}>
            Hydraulic Engineering Consulting in Colombia
          </h1>
          <p style={{ color: '#90CDF4', fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, marginBottom: 20 }}>
            COPNIA-certified · English-speaking · 30+ years experience
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, lineHeight: 1.85, marginBottom: 32, maxWidth: 760 }}>
            BIC (Bernal Ingeniería Consultores) provides expert hydraulic engineering consulting services across Colombia.
            Led by Ing. Rogerio Bernal Ríos (UNAL Manizales, COPNIA 17202-313228), we serve Colombian diaspora investors,
            international developers, and public entities requiring technical expertise for water infrastructure projects.
            We communicate and deliver reports in <strong style={{ color: '#fff' }}>English and Spanish</strong>.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
            <Btn href={`https://wa.me/${WA}?text=${WA_MSG}`}>📱 WhatsApp: +57 302 477 8910</Btn>
            <Btn variant="outline" href="mailto:rogeriobernal@ingenieriabernal.co" dark>Email a quote request</Btn>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['COPNIA 17202-313228','TOEFL iBT 98/120','RAS 2017','NSR-10','HEC-RAS 2D','Nationwide Colombia'].map(t => (
              <Tag key={t} style={{ background: 'rgba(144,205,244,0.15)', color: '#90CDF4', border: '1px solid rgba(144,205,244,0.3)', fontSize: 11 }}>{t}</Tag>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL STRIP ── */}
      <section style={{ background: '#F0F7FF', borderBottom: '2px solid #BFDBFE' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
          {[
            { label: 'Engineer', value: 'Rogerio Bernal Ríos' },
            { label: 'University', value: 'UNAL Manizales' },
            { label: 'COPNIA Registration', value: '17202-313228' },
            { label: 'English Proficiency', value: 'TOEFL iBT 98/120' },
            { label: 'Experience', value: '30+ years' },
          ].map(c => (
            <div key={c.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 11, color: '#1E40AF', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.label}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#1A3A6B', margin: '2px 0 0' }}>{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <Section>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>What we do</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Our Services
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            BIC covers the full spectrum of hydraulic and water engineering for Colombian projects — from feasibility to construction supervision.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: 24,
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1A3A6B', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── WHY BIC ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Why choose BIC</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 12 }}>
            Why Work With BIC?
          </h2>
          <p style={{ color: '#555', lineHeight: 1.75, marginBottom: 36, maxWidth: 780 }}>
            International clients need a Colombian engineering partner who understands both the technical requirements and the regulatory landscape — and can communicate clearly in English.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {ADVANTAGES.map(a => (
              <div key={a.label} style={{
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: '20px 22px',
                display: 'flex', flexDirection: 'column', gap: 6,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2E75B6, #1A3A6B)', flexShrink: 0,
                  }} />
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#1A3A6B' }}>{a.label}</span>
                </div>
                <p style={{ color: '#555', fontSize: 14, lineHeight: 1.65, margin: 0, paddingLeft: 20 }}>{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INTERNATIONAL CLIENTS ── */}
      <Section>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>International clients & diaspora</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 20 }}>
            For International Clients & Colombian Diaspora
          </h2>
          <p style={{ color: '#444', fontSize: 16, lineHeight: 1.85, marginBottom: 24 }}>
            Many of our international clients fall into one of these categories — and BIC has served all of them:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                title: 'US-based Colombians with property or investment in Colombia',
                desc: 'If you own land in Colombia and want to develop it, or need to resolve permit issues, BIC can handle the technical studies, engineering designs, and permit applications — communicating with you in English throughout the process.',
              },
              {
                title: 'US developers & contractors bidding on Colombian infrastructure',
                desc: 'Colombian public contracts require COPNIA-certified local engineering sign-off. BIC provides the technical expertise and regulatory compliance that international bidders need to qualify and execute projects.',
              },
              {
                title: 'Latin American companies requiring Colombian engineering certification',
                desc: 'For projects that cross borders or require Colombian regulatory approval, BIC provides COPNIA-certified technical documents, studies, and expert review services.',
              },
            ].map(c => (
              <div key={c.title} style={{
                background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: 14,
                padding: '22px 26px',
              }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#1A3A6B', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ color: '#444', fontSize: 14, lineHeight: 1.8, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: 'linear-gradient(90deg, #1A3A6B, #2E5599)', padding: '36px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, margin: 0 }}>Ready to start your Colombia project?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, margin: '4px 0 0' }}>We respond in English and Spanish · Free preliminary consultation</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '12px 28px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
            📱 WhatsApp us now
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <Section style={{ background: '#f8f9fa' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Frequently asked questions</SectionLabel>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(22px, 3vw, 34px)', marginBottom: 32 }}>
            FAQ — International Clients
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {FAQ.map(item => (
              <div key={item.q} style={{ background: '#fff', borderRadius: 12, padding: 26, border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 12, color: '#1A3A6B', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ color: '#555', lineHeight: 1.8, fontSize: 14, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── GET IN TOUCH ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A3A6B 100%)',
        padding: '72px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🌎</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            color: '#fff', fontSize: 'clamp(22px, 3.5vw, 36px)', marginBottom: 16, lineHeight: 1.25,
          }}>
            Get in Touch
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, lineHeight: 1.8, marginBottom: 8 }}>
            Request a free consultation via WhatsApp or email. We respond in <strong style={{ color: '#90CDF4' }}>English and Spanish</strong>.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 32 }}>
            Email: rogeriobernal@ingenieriabernal.co · WhatsApp: +57 302 477 8910
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '15px 36px', background: '#25D366', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              📱 Request a free consultation
            </a>
            <a href="mailto:rogeriobernal@ingenieriabernal.co"
              style={{ display: 'inline-block', padding: '15px 36px', background: 'transparent', color: '#fff', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)' }}>
              Send an email
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <Section>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <SectionLabel>Explore more</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {[
              { label: 'Hydraulic engineering Colombia', href: '/ingenieria-hidraulica-colombia' },
              { label: 'Aqueduct & wastewater design', href: '/servicios/acueducto-alcantarillado' },
              { label: 'WWTP design (PTAR)', href: '/diseno-ptar-colombia' },
              { label: 'Flood risk studies', href: '/gestion-riesgo-hidrico' },
              { label: 'HEC-RAS hydraulic modeling', href: '/servicios/modelacion-hec-ras' },
              { label: 'About Ing. Bernal', href: '/sobre-mi' },
            ].map(s => (
              <a key={s.label} href={s.href} style={{
                display: 'block', background: '#EEF2FF', border: '1px solid #C7D2FE',
                borderRadius: 10, padding: '14px 18px', color: '#1A3A6B',
                fontWeight: 600, fontSize: 14, textDecoration: 'none', lineHeight: 1.4,
              }}>
                {s.label} →
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
