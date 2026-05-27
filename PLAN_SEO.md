# PLAN SEO / AEO — ingenieriabernal.co
**Última actualización:** 2026-05-27  
**Propósito:** Documento maestro de estrategia. Sobrevive resets de contexto. Claude debe leer esto al inicio de cada sesión SEO.

---

## 1. QUIÉN ES BIC Y A QUIÉN SE LE HABLA

**Empresa:** BIC — Bernal Ingeniería Consultores  
**Ubicación:** Manizales, Colombia (proyectos en todo el país + Ecuador + México)  
**Registro:** Firma COPNIA 17202-313228 CLD (Rogerio Bernal Ríos, Especialista Ing. Hidráulica UNAL)  
**Contacto comercial:** Rogerio Bernal (robernalri@unal.edu.co · WhatsApp: 573024778910)

**Cliente objetivo (buyer persona):**
- Promotores y desarrolladores inmobiliarios (urbanizaciones, condominios, parcelaciones)
- Constructoras medianas/grandes
- Dueños de empresas industriales/agroindustriales
- Municipios y entes territoriales (regalías SGR)
- Arquitectos con proyectos grandes (que necesitan firma)
- **NO:** estudiantes, investigadores, intermediarios, subcontratistas

**Regla de oro del contenido:**
> "Aprender no, contratar sí. Sin intermediarios. Entre más grandes mejor."

**Problema de conversión (2026-05 — REVISADO 2026-05-27):**  
20+ cotizaciones activas, CERO cierres. La causa real NO es el precio (se probó alto/justo/bajo sin resultado). La causa es el tipo de cliente que llega: intermediarios, estudiantes, profesionales buscando subcontrato. La solución no es bajar precio — es filtrar mejor desde el contenido.

**Diagnóstico confirmado (2026-05-27):**
- Manizales (ciudad base) no genera llamadas — la página regional era genérica y hablaba de "proyectos residenciales"
- Topógrafos y arquitectos que llegan buscan subcontratar a precio de subcontrato — no son el cliente objetivo
- Las páginas regionales no tenían señales de precio ($8M–$60M), lenguaje de decisor ni anti-intermediario
- SOLUCIÓN: reescritura completa de RegionalManizales + RegionalEjeCafetero con: precios visibles, lenguaje de constructora/promotor/municipio, QuoteFormInline, CTABanner, FAQPage, anti-intermediario

**Eje geográfico primario:** Eje Cafetero (Caldas, Risaralda, Quindío) → luego nacional → luego LATAM  
**Servicios de mayor rentabilidad:** modelación hidráulica, modelación hidrológica, diseño PTAP/PTAR, gestión riesgo Decreto 1807  
**Cliente objetivo real:** grandes propietarios de terreno, constructoras medianas/grandes, empresas industriales, municipios con SGR, promotores urbanísticos

---

## 2. SERVICIOS CORE (en orden de prioridad SEO/rentabilidad)

| # | Servicio | URL | Rango precio (COP) | Prioridad |
|---|---|---|---|---|
| 1 | Gestión Riesgo / Decreto 1807 | /gestion-riesgo-hidrico | $18M–$60M | 🔴 MÁX |
| 2 | Plan Parcial Colombia | /plan-parcial-colombia | incluido en riesgo | 🔴 MÁX |
| 3 | Modelación HEC-RAS 2D | /servicios/modelacion-hec-ras | $8M–$25M | 🔴 |
| 4 | Diseño Acueducto/Alcantarillado urbaniz. | /servicio-diseno-acueductos | $12M–$35M | 🔴 |
| 5 | PTAP condominios | /diseno-ptap-colombia | $8M–$35M | 🟠 |
| 6 | PTAR industria y conjuntos | /diseno-ptar-colombia | $10M–$40M | 🟠 |
| 7 | Redes Hidrosanitarias NSR-10 J/K | /servicios/redes-hidrosanitarias | $3.5M–$25M | 🟠 |
| 8 | Bocatomas y acueducto veredal | /bocatomas-colombia | incl. | 🟡 |
| 9 | Encauzamiento / Obras hidráulicas | /encauzamiento-rios | incl. | 🟡 |
| 10 | Regalías MGA-Web | /servicios/regalias-mga | $6M–$15M | 🟡 |
| 11 | Landing Pereira | /regional/pereira | CTR 19.4% → escalar | 🟡 |

**NO en foco:** topografía/geotecnia hasta 2do semestre 2026.

---

## 3. COMPETIDORES RELEVANTES (solo los que convierten digitalmente)

| Empresa | URL | Por qué es referencia |
|---|---|---|
| GMS Ingenieros | gms-ingenieros.com | 100+ fotos de proyectos → confianza visual → conversión |
| Hídrica Ingeniería | hidrica.com.co | Visibilidad BIM, presencia digital fuerte |
| **NO competidor** | Hidrológica | Segmento diferente: Hydro Boat 1500, grandes cuencas, minería |

**Estrategia vs GMS:** igualar y superar en galería visual. Ya implementado en `42400a8`.

---

## 4. INVENTARIO COMPLETO — QUÉ ESTÁ HECHO ✅ VS PENDIENTE ⏳

### 4.1 SEO TÉCNICO
| Acción | Estado | Commit |
|---|---|---|
| sitemap.xml limpiado (noindex fuera, prioridades ajustadas) | ✅ | 46cd6e6 |
| robots.txt: Allow /* + Sitemap apuntando correcto | ✅ | — |
| robots.txt: GPTBot/PerplexityBot/Claude-Web explícitamente permitidos | ✅ | robots.txt |
| 19 páginas core reescritas con buyer-intent titles + meta | ✅ | 05da4b6 |
| noindex: 13 blog slugs off-target | ✅ | fe64033 + BlogDetail |
| noindex: HydraulicEngineerEnglish.tsx | ✅ | fe64033 |
| noindex: ServicioSistemasContraIncendio.tsx | ✅ | fe64033 |
| SSR prerender: 31 páginas (16 orig + 10 servicios + 5 regionales) | ✅ | 3c5a0af |
| GSC indexing manual (solicitar indexación 10 URLs clave) | ⏳ PENDIENTE | manual usuario |
| vercel.json: HSTS + Referrer-Policy + Permissions-Policy + cache /assets/ | ✅ | vercel.json |
| SEOHead.tsx: hreflang es-CO/es/x-default + geo meta tags | ✅ | SEOHead.tsx |
| SchemaMarkup.tsx: LinkedIn sameAs + hasCredential COPNIA | ✅ | SchemaMarkup.tsx |
| llms.txt: 3 GEO fragments grandes proyectos (promotores, hidrosanitario edificios, PTAP parcelaciones) | ✅ | llms.txt |

### 4.2 AEO — ANSWER ENGINE OPTIMIZATION (Posicionamiento IA)
| Acción | Estado | Commit |
|---|---|---|
| llms.txt con 14 GEO fragments + rangos de precios | ✅ | edc9ab5 + bc9bc29 |
| FAQPage schema: GestionRiesgoHidrico | ✅ | edc9ab5 |
| FAQPage schema: PlanParcialColombia | ✅ | c3e3466 |
| FAQPage schema: ServicioModelacionHecRas | ✅ | c3e3466 |
| FAQPage schema: ServicioRedesHidrosanitarias | ✅ | 0056ea5 |
| FAQPage schema: DisenoPTAPColombia | ✅ | 0056ea5 |
| FAQPage schema: +44 páginas adicionales (incl. blogs, servicios) | ✅ | múltiples |
| GEO fragment `<section id="geo-fragment">` en 19 páginas core | ✅ | 42ab699 + bc9bc29 |
| Schema ProfessionalService + knowsAbout + areaServed en homepage | ✅ | edc9ab5 |
| PriceSpecification en páginas de servicio (18 páginas) | ✅ | múltiples |
| anti-intermediario G.3 text en 22+ páginas | ✅ | múltiples |
| robots.txt explícito para crawlers IA (OAI-SearchBot, Bingbot, Applebot + Disallow scrapers) | ✅ | robots.txt |

### 4.3 CONTENIDO / PÁGINAS
| Acción | Estado | Commit |
|---|---|---|
| Landing /manizales/ — FAQPage, schema, routing fix | ✅ | a59ffd5 |
| Landing /regional/cali/ y /regional/medellin/ | ✅ | 9dad720 |
| 3 blogs buyer-intent (costo HEC-RAS, documentos hidrosanitario, Decreto 1807) | ✅ | c8434ef |
| Fotos reales de proyectos (10 imágenes 01-10 en gbp_expert/) | ✅ | 10e459a |
| Homepage: galería portafolio visual (6 fotos) + trust bar COPNIA/UNAL | ✅ | 42400a8 |
| Landing /regional/pereira/ (CTR 19.4% — original ya existía) | ✅ | existe |
| /proyectos page: link prominente desde hero | ✅ ya estaba en Home.tsx hero | 0a134b0 |
| Página de precio fijo Wompi ("Zonificación desde $8M COP") | ⏳ PENDIENTE | — |
| Blog buyer-intent: "¿Cuánto cuesta un plan parcial en Colombia?" | ✅ | articlesR |
| Blog buyer-intent: "¿Cuánto cuesta diseño de alcantarillado Colombia?" | ✅ | articlesS |
| Blog buyer-intent: "Estudio torrencialidad Colombia: requisitos y costos" | ✅ | articlesT |
| Blog buyer-intent: "Diseño acueducto veredal bocatoma Colombia" | ✅ | articlesU |
| FAQPage + PriceSpec schema en EstudiosTorrencialidad.tsx | ✅ | este commit |

### 4.4 CONVERSIÓN (problema central: 20+ leads, pocos cierres)
| Acción | Estado |
|---|---|
| CTA WhatsApp unificado sticky en todas las páginas de servicio | ✅ FloatingQuoteButton global en App.tsx | 0a134b0 |
| QuoteFormInline en 5 páginas core (PlanParcial, Redes, PTAR, PTAP, Bocatomas) | ✅ | 0a134b0 |
| SEO title/meta GestionRiesgoHidrico mejorado para CTR | ✅ Precio + HEC-RAS + COPNIA en title | 0a134b0 |
| Botón "Propuesta en 24h" prominente arriba del fold en páginas core | ✅ FloatingQuoteButton + QuoteFormInline cubren esto |
| Trust bar homepage: COPNIA + UNAL + 50 proyectos + 24h | ✅ (`42400a8`) |
| Galería portafolio visual | ✅ (`42400a8`) |
| Testimonios de clientes reales | ⏳ PENDIENTE (requiere info de Rogerio) |
| Wompi / PSE para cierre digital de servicios empaquetados | ⏳ PENDIENTE |

### 4.5 GBP — GOOGLE BUSINESS PROFILE
| Acción | Estado |
|---|---|
| 10 fotos de proyectos subidas (gbp_expert/ 01-10) | ✅ (Rogerio lo hizo manual) |
| Agregar 12 servicios en perfil GBP | ⏳ PENDIENTE (manual Rogerio) |
| Área de cobertura: Eje Cafetero / todo Colombia | ⏳ PENDIENTE (manual Rogerio) |
| Publicaciones semanales GBP | ⏳ PENDIENTE |

---

## 5. PRÓXIMAS ACCIONES (en orden de impacto)
**Última actualización:** 2026-05-27

### ✅ PRIORIDAD 1 — CTA unificado — HECHO
FloatingQuoteButton global en App.tsx. QuoteFormInline en 5 servicios core. Commits fc985a1 + 0a134b0.

### ✅ PRIORIDAD 2 — robots.txt IA crawlers — HECHO (ya estaba)

### ✅ PRIORIDAD 3 — /proyectos page en hero — HECHO (ya estaba en Home.tsx)

### ✅ PRIORIDAD 4 — RegionalManizales + RegionalEjeCafetero + Cali + Medellín UPGRADE — HECHO (2026-05-27)
4 páginas reescritas con: precios visibles, lenguaje de decisor (constructoras/municipios/industria), FAQPage, PriceSpec, QuoteFormInline, CTABanner, GEO fragment, anti-intermediario, modelación hidráulica + hidrológica explícita.

### ✅ PRIORIDAD 5 — ModelacionHidrologicaColombia.tsx — NUEVA PÁGINA CREADA (2026-05-27)
URL: /modelacion-hidrologica-colombia | Título: "Modelación Hidrológica Colombia — HEC-HMS, Cuencas y Caudales de Diseño"
Incluye: FAQPage (6 Q&A), PriceSpec (6 tipos $5M–$28M), QuoteFormInline, CTABanner, GEO fragment Eje Cafetero, anti-intermediario.
4 páginas regionales actualizadas para enlazar a esta página (href cambió de /servicios/estudios-hidrologicos a /modelacion-hidrologica-colombia).
Sitemap actualizado: nueva página agregada, fechas regionales frescas (2026-05-27), páginas noindex (suelos, topografía) eliminadas del sitemap.

### PRIORIDAD 6 — GSC indexing manual (Rogerio lo hace)
Solicitar indexación manual en Google Search Console para estas URLs:
/regional/manizales, /regional/eje-cafetero, /regional/cali, /regional/medellin, /modelacion-hidrologica-colombia, /modelacion-hidraulica-colombia, /gestion-riesgo-hidrico, /servicios/modelacion-hec-ras

### PRIORIDAD 6 — Página precio fijo + Wompi
Crear `/servicios/estudio-basico` con precio fijo visible ($8M–$15M COP) y botón de pago Wompi. Objetivo: cierre digital sin intermediación humana para proyectos pequeños.

### PRIORIDAD 6 — Limpiar staged deletions en git index
El `git reset HEAD` está pendiente por un index.lock. Rogerio debe cerrar la ventana PowerShell del commit_now.ps1 (la que dice "Presiona Enter para cerrar"), y luego ejecutar `git reset HEAD` en Git Bash o terminal para deshacer las staged deletions de servicios/*.tsx que quedaron de un abort_rebase anterior. Esas páginas NO deben borrarse.

---

## 6. KEYWORDS PRIORITARIOS (buyer-intent)

| Keyword | Intención | Página objetivo |
|---|---|---|
| estudio riesgo inundación plan parcial | Contratar | /plan-parcial-colombia |
| estudio detallado gestión del riesgo decreto 1807 | Contratar | /gestion-riesgo-hidrico |
| modelación HEC-RAS colombia | Contratar | /servicios/modelacion-hec-ras |
| diseño acueducto urbanización colombia | Contratar | /servicio-diseno-acueductos |
| diseño alcantarillado constructora | Contratar | /diseno-alcantarillado-colombia |
| empresa ingeniería hidráulica colombia | Navegar | /ingenieria-hidraulica-colombia |
| diseño PTAR colombia | Contratar | /diseno-ptar-colombia |
| bocatoma diseño colombia | Contratar | /bocatomas-colombia |
| memorias hidrosanitarias licencia construcción | Contratar | /memorias-hidrosanitarias |
| obras hidráulicas protección río proyecto | Contratar | /obras-hidraulicas-colombia |

---

## 7. MÉTRICAS OBJETIVO

| Métrica | Actual (may 2026) | Meta |
|---|---|---|
| Impresiones/día | ~33/día (~1000/mes) | 1000/día |
| Clics/día | ~1.8/día (~55/mes) | 30/día |
| CTR promedio | 5.6% | 8-10% |
| Posición promedio | 38 | <15 |
| Leads/mes | 20+ | 50+ calificados |
| Cierres/mes | bajo | 5+ |

---

## 8. NOTAS TÉCNICAS DEL SITIO

- **Stack:** React + TypeScript + Vite + Wouter (SPA)
- **Deploy:** Vercel (auto en push a `main`)
- **SEO component:** `<SEOHead>` con `seoConfig = { title, description, keywords, canonical, noindex }`
- **Schema:** LocalBusiness + ProfessionalService + FAQPage + PriceSpecification en páginas clave
- **sitemap.xml:** en `/public/sitemap.xml` — páginas noindex deben estar FUERA
- **llms.txt:** en `/public/llms.txt` — 14 GEO fragments activos
- **robots.txt:** `/public/robots.txt` — falta agregar crawlers IA explícitos
- **SSR prerender:** `generate-ssr-pages.tsx` cubre 31 páginas

## 9. FLUJO DE TRABAJO GIT (probado y funciona)

1. Claude edita archivos directamente desde Linux mount
2. Crea/actualiza `push_now.bat` sin `pause` al final (para que CMD cierre solo)
3. Abre File Explorer → carpeta in