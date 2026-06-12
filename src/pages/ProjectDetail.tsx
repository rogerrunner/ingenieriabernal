import { useRoute, Link } from 'wouter'
import { PROJECTS } from './Projects'
import SEOHead from '../components/SEOHead'
import { BlueprintBg, Tag, ThinLine, Btn, Section } from '../components/ui'

export default function ProjectDetail() {
  const [, params] = useRoute('/proyectos/:id')
  const id = params?.id ?? ''
  const project = PROJECTS.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-[var(--color-text)]">
        <SEOHead config={{ title: 'Proyecto no encontrado — BIC', description: '', canonical: `https://ingenieriabernal.co/proyectos/${id}`, noindex: true }} />
        <p className="text-xl">Proyecto no encontrado.</p>
        <Link href="/proyectos"><a className="underline text-[var(--color-accent)]">Ver portafolio</a></Link>
      </div>
    )
  }

  const { title, client, location, year, contract, value, duration, category, color, img, challenge, solution, result, skills, norms } = project

  const seoTitle = `${title} — BIC Bernal Ingeniería Consultores`
  const seoDesc = `${result.slice(0, 140)}...`

  return (
    <>
      <SEOHead config={{
        title: seoTitle,
        description: seoDesc,
        canonical: `https://ingenieriabernal.co/proyectos/${id}`,
        keywords: `${category}, ingenieria hidraulica colombia, BIC, ${skills.join(', ')}`,
      }} />
      <BlueprintBg>
        {/* Hero */}
        <Section className="pt-16 pb-8">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/proyectos">
              <a className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] mb-4 inline-block">← Portafolio</a>
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <Tag style={{ background: color, color: '#fff', border: 'none' }}>{category}</Tag>
              <span className="text-sm text-[var(--color-muted)]">{year}</span>
            </div>
            <h1 className="text-3xl font-bold text-[var(--color-heading)] mb-2 leading-tight">{title}</h1>
            <p className="text-[var(--color-muted)] text-sm">{location}</p>
          </div>
        </Section>

        <ThinLine />

        {/* Image + Info */}
        <Section className="py-8">
          <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={img}
                alt={title}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: 300 }}
                onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
            <div className="space-y-3 text-sm text-[var(--color-text)]">
              {client && <div><span className="font-semibold text-[var(--color-heading)]">Cliente:</span> {client}</div>}
              {contract && <div><span className="font-semibold text-[var(--color-heading)]">Contrato:</span> {contract}</div>}
              {value && value !== 'Proyecto municipal' && value !== 'Proyecto privado' && value !== 'Proyecto gubernamental' && (
                <div><span className="font-semibold text-[var(--color-heading)]">Valor:</span> {value}</div>
              )}
              {duration && duration !== year && <div><span className="font-semibold text-[var(--color-heading)]">Duración:</span> {duration}</div>}
              <div>
                <span className="font-semibold text-[var(--color-heading)]">Herramientas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skills.map(s => <Tag key={s} className="text-xs">{s}</Tag>)}
                </div>
              </div>
              <div>
                <span className="font-semibold text-[var(--color-heading)]">Normas:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {norms.map(n => <Tag key={n} className="text-xs">{n}</Tag>)}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* Challenge / Solution / Result */}
        <Section className="py-8">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[var(--color-heading)] mb-2">Diagnóstico</h2>
              <p className="text-[var(--color-text)] leading-relaxed">{challenge}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--color-heading)] mb-2">Solución técnica</h2>
              <p className="text-[var(--color-text)] leading-relaxed">{solution}</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--color-heading)] mb-2">Resultado</h2>
              <p className="text-[var(--color-text)] leading-relaxed">{result}</p>
            </div>
          </div>
        </Section>

        <ThinLine />

        {/* CTA */}
        <Section className="py-8 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-[var(--color-muted)] mb-4">¿Tiene un proyecto similar?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Btn href="/contacto" variant="primary">Solicitar consultoría</Btn>
              <Btn href="/proyectos" variant="secondary">Ver más proyectos</Btn>
            </div>
          </div>
        </Section>
      </BlueprintBg>
    </>
  )
}
