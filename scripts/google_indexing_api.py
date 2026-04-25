#!/usr/bin/env python3
"""
BIC — Google Indexing API: envío masivo de URLs al índice de Google
====================================================================
Submits all URLs from public/sitemap.xml to Google's Indexing API.
This forces Google to crawl and index pages within hours instead of weeks.

SETUP (one-time):
1. Go to: https://console.cloud.google.com/
2. Create project "BIC-SEO" → Enable "Web Search Indexing API"
3. Create Service Account → Download JSON key as 'google-service-account.json'
4. Add service account email as Owner in Google Search Console:
   https://search.google.com/search-console/ → Settings → Users and Permissions

USAGE:
    pip install google-auth requests --break-system-packages
    python google_indexing_api.py                    # Submit all sitemap URLs
    python google_indexing_api.py --url /contacto    # Submit single URL
    python google_indexing_api.py --status           # Check submission history

QUOTA: 200 URLs/day per project. Script auto-batches to stay under limit.
"""

import json, os, sys, time, datetime, xml.etree.ElementTree as ET
try:
    import requests
    from google.oauth2 import service_account
    from google.auth.transport.requests import Request
    HAS_DEPS = True
except ImportError:
    HAS_DEPS = False

# ─────────────────────────────────────────────────────────────────────────────
SITEMAP_PATH  = os.path.join(os.path.dirname(__file__), "..", "public", "sitemap.xml")
CREDS_FILE    = os.path.join(os.path.dirname(__file__), "google-service-account.json")
STATE_FILE    = os.path.join(os.path.dirname(__file__), "indexing_estado.json")
BASE_URL      = "https://ingenieriabernal.co"
SCOPES        = ["https://www.googleapis.com/auth/indexing"]
INDEXING_URL  = "https://indexing.googleapis.com/v3/urlNotifications:publish"
DAILY_LIMIT   = 190  # Stay 10 under 200 quota to be safe
DELAY_SECONDS = 1    # Between requests to avoid rate limiting

# ─────────────────────────────────────────────────────────────────────────────
def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE) as f:
            return json.load(f)
    return {"submitted": {}, "batches": []}

def save_state(state):
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2, ensure_ascii=False)

def parse_sitemap():
    """Extract all URLs from sitemap.xml."""
    if not os.path.exists(SITEMAP_PATH):
        print(f"❌ Sitemap not found at: {SITEMAP_PATH}")
        return []
    tree = ET.parse(SITEMAP_PATH)
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for loc in root.findall(".//sm:loc", ns):
        url = loc.text.strip()
        if url:
            urls.append(url)
    return urls

def get_credentials():
    """Load Google service account credentials."""
    if not os.path.exists(CREDS_FILE):
        return None
    creds = service_account.Credentials.from_service_account_file(
        CREDS_FILE, scopes=SCOPES
    )
    creds.refresh(Request())
    return creds

def submit_url(url, creds, notification_type="URL_UPDATED"):
    """Submit a single URL to the Indexing API."""
    headers = {
        "Authorization": f"Bearer {creds.token}",
        "Content-Type": "application/json",
    }
    body = {"url": url, "type": notification_type}
    resp = requests.post(INDEXING_URL, headers=headers, json=body, timeout=15)
    return resp.status_code, resp.json()

def count_today_submissions(state):
    today = datetime.date.today().isoformat()
    return sum(
        1 for info in state["submitted"].values()
        if info.get("date", "")[:10] == today
    )

def print_summary(state):
    total = len(state["submitted"])
    today_count = count_today_submissions(state)
    success = sum(1 for v in state["submitted"].values() if v.get("ok"))
    errors = total - success
    print(f"\n{'─'*55}")
    print(f"  ESTADO INDEXACIÓN GOOGLE")
    print(f"{'─'*55}")
    print(f"  Total enviadas:    {total}")
    print(f"  Exitosas:          {success} ✅")
    print(f"  Errores:           {errors} ❌")
    print(f"  Hoy ({datetime.date.today()}): {today_count}/{DAILY_LIMIT}")
    if errors > 0:
        print(f"\n  URLs con error:")
        for url, info in state["submitted"].items():
            if not info.get("ok"):
                print(f"    ❌ {url} — {info.get('error', 'unknown')}")

def main():
    if not HAS_DEPS:
        print("❌ Faltan dependencias. Instala con:")
        print("   pip install google-auth requests --break-system-packages")
        return

    state = load_state()

    if "--status" in sys.argv:
        print_summary(state)
        return

    # Single URL mode
    if "--url" in sys.argv:
        idx = sys.argv.index("--url")
        if idx + 1 < len(sys.argv):
            path = sys.argv[idx + 1]
            url = BASE_URL + path if not path.startswith("http") else path
            urls = [url]
        else:
            print("Uso: python google_indexing_api.py --url /ruta")
            return
    else:
        urls = parse_sitemap()
        print(f"  📄 {len(urls)} URLs encontradas en sitemap.xml")

    if not urls:
        print("❌ No hay URLs para enviar.")
        return

    # Check for credentials
    if not os.path.exists(CREDS_FILE):
        print("\n⚠️  CONFIGURACIÓN NECESARIA")
        print("─" * 55)
        print("Para usar la Google Indexing API necesitas:")
        print()
        print("  1. Ve a: https://console.cloud.google.com/")
        print("  2. Crea un proyecto llamado 'BIC-SEO'")
        print("  3. Habilita: 'Web Search Indexing API'")
        print("  4. Ve a: IAM → Service Accounts → Create")
        print("     Nombre: bic-indexing-bot")
        print("  5. Descarga la clave JSON → guárdala como:")
        print(f"     {CREDS_FILE}")
        print("  6. En Google Search Console:")
        print("     Settings → Users → Add user → [email del service account] → Owner")
        print()
        print("Quota gratuita: 200 URLs/día. Suficiente para indexar todas las páginas de BIC.")
        print()

        # Offer manual GSC alternative
        print("─" * 55)
        print("ALTERNATIVA MANUAL (sin API key):")
        print("Abre Google Search Console y pide indexación manual para estas URLs:")
        print("  https://search.google.com/search-console/inspect")
        print()
        # Print top priority pages
        top_pages = [
            "/construir-cerca-rio-quebrada-colombia",
            "/me-pidieron-estudios-en-la-car",
            "/tengo-un-lote-colombia",
            "/gestion-riesgo-taludes-colombia",
            "/ingenieria-hidraulica-colombia-desde-manizales",
            "/ingenieria-proyectos-urbanisticos-colombia",
            "/obras-civiles-hidraulicas-colombia",
            "/estudios-hidrologicos-vias-colombia",
            "/memorias-hidrosanitarias-colombia",
        ]
        print("URLs prioritarias para indexar primero (Batch 6 + nuevas):")
        for p in top_pages:
            print(f"  {BASE_URL}{p}")
        return

    creds = get_credentials()
    if not creds:
        print("❌ No se pudo cargar credenciales. Verifica google-service-account.json")
        return

    # Filter already submitted and successful
    pending = [u for u in urls if not state["submitted"].get(u, {}).get("ok")]
    today_count = count_today_submissions(state)
    remaining_quota = DAILY_LIMIT - today_count

    if remaining_quota <= 0:
        print(f"⚠️  Quota diaria agotada ({today_count}/{DAILY_LIMIT}). Vuelve mañana.")
        return

    to_submit = pending[:remaining_quota]
    skipped = len(pending) - len(to_submit)

    print(f"\n{'='*55}")
    print(f"  BIC — Google Indexing API")
    print(f"{'='*55}")
    print(f"  Pendientes: {len(pending)} URLs")
    print(f"  Quota hoy:  {today_count}/{DAILY_LIMIT} usada")
    print(f"  A enviar:   {len(to_submit)} URLs")
    if skipped:
        print(f"  Mañana:     {skipped} URLs restantes")
    print()

    ok_count = 0
    err_count = 0

    for i, url in enumerate(to_submit, 1):
        status, resp = submit_url(url, creds)
        ok = status == 200
        if ok:
            ok_count += 1
            print(f"  ✅ [{i}/{len(to_submit)}] {url}")
        else:
            err_count += 1
            error_msg = resp.get("error", {}).get("message", str(resp))
            print(f"  ❌ [{i}/{len(to_submit)}] {url}")
            print(f"          Error: {error_msg}")

        state["submitted"][url] = {
            "ok": ok,
            "date": datetime.datetime.now().isoformat(),
            "status": status,
            "error": resp.get("error", {}).get("message", "") if not ok else "",
        }

        if i < len(to_submit):
            time.sleep(DELAY_SECONDS)

    # Save batch record
    state["batches"].append({
        "date": datetime.datetime.now().isoformat(),
        "sent": len(to_submit),
        "ok": ok_count,
        "errors": err_count,
    })
    save_state(state)

    print(f"\n{'─'*55}")
    print(f"  ✅ Enviadas: {ok_count}  ❌ Errores: {err_count}")
    if skipped:
        print(f"  ⏭️  {skipped} URLs restantes — ejecuta de nuevo mañana")
    print(f"{'─'*55}")

if __name__ == "__main__":
    main()
