import { useEffect } from 'react'

interface SpeakableSchemaProps {
  name: string
  cssSelectors?: string[]
}

export default function SpeakableSchema({
  name,
  cssSelectors = ['.servicio-intro', '.faq-item'],
}: SpeakableSchemaProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'WebPage',
      name,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: cssSelectors,
      },
    }

    const existing = document.getElementById('speakable-schema')
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.id = 'speakable-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.getElementById('speakable-schema')?.remove()
    }
  }, [name, cssSelectors])

  return null
}
