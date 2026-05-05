/**
 * generate-static-content.tsx
 * Post-build SSG: inyecta el HTML renderizado de cada artículo del blog
 * directamente en <div id="root"> de los archivos estáticos de dist/,
 * para que Google indexe el contenido real de los artículos desde el primer crawl.
 *
 * Ejecutar con: npx tsx generate-static-content.tsx
 * (después de: vite build && node generate-static.mjs)
 */

import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import React from 'react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Importación de TODOS los archivos de artículos ─────────────────────────
import articles1 from './src/data/articles1'
import articlesA from './src/data/articlesA'
import articlesB from './src/data/articlesB'
import articlesC from './src/data/articlesC'
import articlesD from './src/data/articlesD'
import articlesE from './src/data/articlesE'
import articlesF from './src/data/articlesF'
import articlesG from './src/data/articlesG'
import articlesH from './src/data/articlesH'
import articlesI from './src/data/articlesI'
import articlesJ from './src/data/articlesJ'
import articlesK from './src/data/articlesK'
import articlesL from './src/data/articlesL'
import articlesM from './src/data/articlesM'
import articlesN from './src/data/articlesN'
import articlesO from './src/data/articlesO'

const ALL_ARTICLES = {
  ...articles1,
  ...articlesA,
  ...articlesB,
  ...articlesC,
  ...articlesD,
  ...articlesE,
  ...articlesF,
  ...articlesG,
  ...articlesH,
  ...articlesI,
  ...articlesJ,
  ...articlesK,
  ...articlesL,
  ...articlesM,
  ...articlesN,
  ...articlesO,
}

const distDir = join(__dirname, 'dist')
let injected = 0
let skipped = 0
let errors = 0

console.log(`\n🔄 SSG content injection — ${Object.keys(ALL_ARTICLES).length} artículos encontrados...\n`)

for (const [slug, article] of Object.entries(ALL_ARTICLES)) {
  const htmlFile = join(distDir, 'blog', slug, 'index.html')

  if (!existsSync(htmlFile)) {
    console.warn(`  ⚠️  Sin ruta estática: /blog/${slug}`)
    skipped++
    continue
  }

  try {
    let html = readFileSync(htmlFile, 'utf-8')

    // Renderizar el body JSX a HTML estático
    let bodyHtml: string
    try {
      bodyHtml = renderToStaticMarkup(article.body as React.ReactElement)
    } catch (renderErr) {
      console.warn(`  ⚠️  Fallback render para /blog/${slug}:`, (renderErr as Error).message?.slice(0, 80))
      bodyHtml = `<p>${article.metaDesc}</p>`
    }

    const safeTitle = article.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const safeCategory = article.category.replace(/</g, '&lt;')

    // Inyectar contenido DIRECTAMENTE en <div id="root"> para indexación inmediata
    // React (createRoot) reemplazará este contenido cuando hidrate — no hay problema
    // El crawler ve el HTML completo sin necesidad de ejecutar JS
    const staticContent = `<article itemscope itemtype="https://schema.org/Article" style="max-width:860px;margin:0 auto;padding:24px 16px;font-family:Georgia,serif;line-height:1.75;color:#1a2b3c">
  <header style="margin-bottom:32px;padding-bottom:24px;border-bottom:1px solid #e2e8f0">
    <h1 itemprop="headline" style="font-size:clamp(1.4rem,3vw,2rem);font-weight:700;color:#003B6F;margin:0 0 12px">${safeTitle}</h1>
    <p style="margin:0;color:#64748b;font-size:0.9rem">
      <time itemprop="datePublished">${article.date}</time>
      &nbsp;·&nbsp;${article.readTime}
      &nbsp;·&nbsp;<span itemprop="articleSection">${safeCategory}</span>
    </p>
  </header>
  <div itemprop="articleBody" style="font-size:1rem">
    ${bodyHtml}
  </div>
  <footer style="margin-top:40px;padding-top:24px;border-top:1px solid #e2e8f0;font-size:0.875rem;color:#475569">
    <p>¿Necesita asesoría técnica? Contáctenos en <a href="https://ingenieriabernal.co/contacto">ingenieriabernal.co/contacto</a> o al <a href="https://wa.me/573024778910">+57 302 477 8910</a></p>
    <p><a href="https://ingenieriabernal.co">BIC — Bernal Ingeniería Civil</a> · COPNIA 17202-313228</p>
  </footer>
</article>`

    // Reemplazar <div id="root">...</div> con el contenido estático
    // Patrón flexible que captura el contenido actual del root (puede tener el placeholder original)
    html = html.replace(
      /<div id="root"[^>]*>[\s\S]*?<\/div>/,
      `<div id="root">${staticContent}</div>`
    )

    writeFileSync(htmlFile, html, 'utf-8')
    console.log(`  ✅ /blog/${slug}`)
    injected++
  } catch (err) {
    console.error(`  ❌ Error en /blog/${slug}:`, (err as Error).message?.slice(0, 120))
    errors++
  }
}

console.log(`\n📊 Resultado SSG content injection:`)
console.log(`   ✅ Inyectados:  ${injected}`)
console.log(`   ⚠️  Sin ruta:    ${skipped}`)
console.log(`   ❌ Errores:     ${errors}`)
console.log(`   📝 Total artículos en data: ${Object.keys(ALL_ARTICLES).length}`)
