/**
 * generate-static-content.tsx
 * Post-build SSG: inyecta el HTML renderizado de cada artículo del blog
 * en los archivos estáticos de dist/ dentro de un bloque <noscript>,
 * para que Google indexe el contenido real de los artículos.
 *
 * Ejecutar con: npx tsx generate-static-content.tsx
 * (después de: vite build && node generate-static.mjs)
 *
 * Por qué <noscript>: Google indexa contenido dentro de <noscript>,
 * es la técnica estándar para SPAs. No es cloaking porque el contenido
 * es idéntico al que muestra React.
 */

import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import React from 'react'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─── Importación de todos los archivos de artículos ─────────────────────────
import articles1 from './src/data/articles1'
import articlesA from './src/data/articlesA'
import articlesB from './src/data/articlesB'
import articlesC from './src/data/articlesC'
import articlesD from './src/data/articlesD'
import articlesE from './src/data/articlesE'
import articlesF from './src/data/articlesF'
import articlesG from './src/data/articlesG'
import articlesH from './src/data/articlesH'

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

    // Renderizar el body JSX a HTML. QuoteFormInline usa useState — OK con renderToStaticMarkup.
    let bodyHtml: string
    try {
      bodyHtml = renderToStaticMarkup(article.body as React.ReactElement)
    } catch (renderErr) {
      // Si falla el render completo, usar solo el metaDesc como fallback
      console.warn(`  ⚠️  Fallback render para /blog/${slug}:`, (renderErr as Error).message?.slice(0, 80))
      bodyHtml = `<p>${article.metaDesc}</p>`
    }

    // Escape básico para atributos HTML
    const safeTitle = article.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const safeCategory = article.category.replace(/</g, '&lt;')

    // Bloque noscript — Google lo indexa, usuarios con JS ven la versión React
    const noscriptBlock = `
<noscript>
<article itemscope itemtype="https://schema.org/Article" style="max-width:860px;margin:0 auto;padding:24px;font-family:sans-serif;line-height:1.7;color:#1a1a1a">
  <h1 itemprop="headline">${safeTitle}</h1>
  <p><time itemprop="datePublished">${article.date}</time> · ${article.readTime} · <span itemprop="articleSection">${safeCategory}</span></p>
  <div itemprop="articleBody">
    ${bodyHtml}
  </div>
  <p>Para consultas técnicas: <a href="https://wa.me/573024778910">+57 302 477 8910 (WhatsApp)</a> o visita <a href="https://ingenieriabernal.co">ingenieriabernal.co</a></p>
</article>
</noscript>`

    html = html.replace('</body>', `${noscriptBlock}\n</body>`)
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
console.log(`   📝 Total artículos procesados: ${Object.keys(ALL_ARTICLES).length}`)
