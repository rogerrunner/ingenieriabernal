#!/usr/bin/env python3
"""
BIC — Script supervisado de registro en directorios y citas locales
====================================================================
Abre automáticamente cada directorio no completado con los datos de BIC
prellenados en el portapapeles. El operador solo pega (Ctrl+V) y confirma.

Uso:
    python backlinks_directorios.py               # Modo interactivo
    python backlinks_directorios.py --list        # Ver estado de todos
    python backlinks_directorios.py --reset       # Resetear un directorio (pide cual)
    python backlinks_directorios.py --pending     # Solo los pendientes
"""

import json, os, sys, subprocess, webbrowser, datetime

# ─────────────────────────────────────────────────────────────────────────────
# DATOS BIC — editar aquí para actualizar en todos los directorios
# ─────────────────────────────────────────────────────────────────────────────
BIC = {
    "nombre":       "BIC Bernal Ingeniería Consultores",
    "nombre_corto": "Bernal Ingeniería Consultores",
    "direccion":    "Calle 65A #23B-24, Guayacanes",
    "ciudad":       "Manizales",
    "departamento": "Caldas",
    "pais":         "Colombia",
    "cod_postal":   "170001",
    "telefono":     "+57 302 477 8910",
    "email":        "rbernalr01@gmail.com",
    "web":          "https://ingenieriabernal.co",
    "whatsapp":     "https://wa.me/573024778910",
    "descripcion_corta": (
        "Consultoría en ingeniería hidráulica, hidrosanitaria, ambiental y "
        "gestión del riesgo. Manizales, Colombia. COPNIA 17202-313228."
    ),
    "descripcion_larga": (
        "BIC Bernal Ingeniería Consultores es una firma colombiana de "
        "consultoría especializada en ingeniería hidráulica, hidrosanitaria "
        "(NSR-10), diseño de acueductos y alcantarillado (Res. 0330/2017), "
        "modelación HEC-RAS, gestión del riesgo hídrico (Decreto 1807/2014), "
        "PTAP y PTAR, formulación de proyectos de regalías (MGA-Web/SGR) e "
        "ingeniería ambiental (CAR/CORPOCALDAS). Fundada por el Ing. Rogerio "
        "Bernal Ríos, egresado UNAL Manizales. COPNIA 17202-313228. "
        "Más de 10 años de experiencia. Proyectos en Colombia, Ecuador y México."
    ),
    "categoria_principal": "Consultoría en Ingeniería Civil e Hidráulica",
    "categorias": [
        "Ingeniería Hidráulica", "Ingeniería Civil", "Consultoría Técnica",
        "Gestión del Riesgo", "Acueductos y Alcantarillado",
        "Ingeniería Ambiental", "Diseño Hidrosanitario",
    ],
    "horario": "Lunes–Viernes 8:00–18:00, Sábados 9:00–13:00",
    "matricula": "COPNIA 17202-313228",
    "universidad": "Universidad Nacional de Colombia – Sede Manizales",
    "anio_fundacion": "2015",
    "palabras_clave": (
        "ingeniería hidráulica Colombia, consultoría hidrosanitaria Manizales, "
        "diseño acueductos alcantarillado, modelación HEC-RAS, gestión riesgo hídrico, "
        "PTAP PTAR Colombia, regalías MGA-Web SGR, ingeniería ambiental CAR"
    ),
}

# ─────────────────────────────────────────────────────────────────────────────
# DIRECTORIOS — URL de registro + prioridad SEO (1=alta, 2=media, 3=baja)
# ─────────────────────────────────────────────────────────────────────────────
DIRECTORIOS = [
    # ── ALTA PRIORIDAD — autoridad SEO ────────────────────────────────────
    {"id": "google_business",     "nombre": "Google Business Profile",       "prio": 1, "url": "https://business.google.com/create", "nota": "El más importante. Verificar con código postal."},
    {"id": "bing_places",         "nombre": "Bing Places for Business",      "prio": 1, "url": "https://www.bingplaces.com/",         "nota": "Sincroniza con Google Business automáticamente."},
    {"id": "waze",                "nombre": "Waze for Business",             "prio": 1, "url": "https://business.waze.com/",          "nota": "Muy usado en Colombia."},
    {"id": "apple_maps_connect",  "nombre": "Apple Maps Connect",            "prio": 1, "url": "https://mapsconnect.apple.com/",      "nota": "Importante para usuarios iPhone/Mac."},
    {"id": "linkedin_page",       "nombre": "LinkedIn — Página empresa",     "prio": 1, "url": "https://www.linkedin.com/company/setup/new/", "nota": "Perfil empresa BIC. Backlink de altísima autoridad."},

    # ── COLOMBIA — directorios profesionales ──────────────────────────────
    {"id": "copnia_directorio",   "nombre": "COPNIA — Directorio profesionales", "prio": 1, "url": "https://www.copnia.gov.co/",        "nota": "Verificar matrícula 17202-313228. Ya registrado."},
    {"id": "sci_colombia",        "nombre": "SCI — Sociedad Colombiana Ingenieros", "prio": 1, "url": "https://sci.org.co/",           "nota": "Directorio de firmas afiliadas."},
    {"id": "camara_manizales",    "nombre": "Cámara Comercio Manizales",     "prio": 1, "url": "https://ccmpc.org.co/servicios/registro-mercantil/", "nota": "Registro mercantil digital."},
    {"id": "rues",                "nombre": "RUES — Registro Único Empresarial", "prio": 1, "url": "https://www.rues.org.co/",         "nota": "Verificar y actualizar datos."},
    {"id": "construdata",         "nombre": "Construdata Colombia",           "prio": 1, "url": "https://www.construdata.com/",        "nota": "Directorio de proveedores construcción. Muy relevante."},
    {"id": "inconstructora",      "nombre": "InConstrucción / Camacol",      "prio": 1, "url": "https://camacol.co/",                 "nota": "Camacol — Cámara Colombiana Construcción."},

    # ── DIRECTORIOS GENERALES COLOMBIA ───────────────────────────────────
    {"id": "paginas_amarillas",   "nombre": "Páginas Amarillas Colombia",    "prio": 2, "url": "https://www.paginasamarillas.com.co/", "nota": "Alta autoridad de dominio."},
    {"id": "cylex_co",            "nombre": "Cylex Colombia",                "prio": 2, "url": "https://www.cylex.com.co/",           "nota": ""},
    {"id": "kompass_co",          "nombre": "Kompass Colombia",              "prio": 2, "url": "https://co.kompass.com/",             "nota": "Directorio empresarial B2B internacional."},
    {"id": "hotfrog_co",          "nombre": "Hotfrog Colombia",              "prio": 2, "url": "https://www.hotfrog.com.co/",         "nota": ""},
    {"id": "whereis_co",          "nombre": "Empresa.com.co",               "prio": 2, "url": "https://www.empresa.com.co/",         "nota": ""},
    {"id": "golocal247",          "nombre": "GoLocal247 Colombia",           "prio": 2, "url": "https://www.golocal247.com/",         "nota": ""},
    {"id": "infobel_co",          "nombre": "Infobel Colombia",              "prio": 2, "url": "https://www.infobel.com/co",          "nota": ""},
    {"id": "foursquare",          "nombre": "Foursquare for Business",       "prio": 2, "url": "https://foursquare.com/add-place",    "nota": ""},
    {"id": "yelp_co",             "nombre": "Yelp Colombia",                 "prio": 2, "url": "https://biz.yelp.com/",              "nota": ""},
    {"id": "tripadvisor_biz",     "nombre": "TripAdvisor — B2B listing",     "prio": 3, "url": "https://www.tripadvisor.com/Owners", "nota": "Solo si tiene relevancia de servicios."},

    # ── DIRECTORIOS INGENIERÍA / CONSTRUCCIÓN ────────────────────────────
    {"id": "arco_colombia",       "nombre": "ArCo — Arquitectos Constructores", "prio": 2, "url": "https://www.arco.com.co/",         "nota": "Directorio sector construcción Colombia."},
    {"id": "habitat_co",          "nombre": "Habitat Colombia",              "prio": 2, "url": "https://www.habitat.com.co/",        "nota": "Directorio inmobiliario y constructoras."},
    {"id": "fincaraiz_empresa",   "nombre": "FincaRaíz — Empresa",          "prio": 2, "url": "https://www.fincaraiz.com.co/",      "nota": "Perfil empresa en portal inmobiliario."},
    {"id": "construguia",         "nombre": "ConstruGuía Colombia",          "prio": 2, "url": "https://www.construguia.com.co/",    "nota": "Guía de proveedores construcción."},
    {"id": "construpages",        "nombre": "ConstrPages",                   "prio": 2, "url": "https://www.construpages.com/",      "nota": "Directorio de constructores y proveedores."},
    {"id": "obra365",             "nombre": "Obra365 Colombia",              "prio": 2, "url": "https://www.obra365.com/",           "nota": "Cotizaciones y directorio de obra."},
    {"id": "ingenierosenlinea",   "nombre": "Ingenieros en Línea",          "prio": 2, "url": "https://www.ingenierosenlinea.com/", "nota": "Red de profesionales ingeniería Colombia."},
    {"id": "civilgeeks_dir",      "nombre": "CivilGeeks — Directorio",      "prio": 3, "url": "https://civilgeeks.com/",            "nota": "Comunidad y recursos ingeniería civil."},

    # ── INTERNACIONALES CON COBERTURA LATAM ──────────────────────────────
    {"id": "manta_co",            "nombre": "Manta.com Colombia",            "prio": 2, "url": "https://www.manta.com/",            "nota": ""},
    {"id": "brown_book",          "nombre": "Brown Book",                    "prio": 2, "url": "https://www.brownbook.net/",        "nota": ""},
    {"id": "clutch_co",           "nombre": "Clutch.co — B2B Reviews",       "prio": 1, "url": "https://clutch.co/profile/signup", "nota": "Alta autoridad. Perfil de reseñas B2B."},
    {"id": "goodfirms",           "nombre": "GoodFirms",                     "prio": 2, "url": "https://www.goodfirms.co/",        "nota": "Directorio empresas servicio B2B."},
    {"id": "trustpilot",          "nombre": "Trustpilot",                    "prio": 2, "url": "https://www.trustpilot.com/",      "nota": "Reseñas de clientes."},

    # ── MAPAS Y DATOS ESTRUCTURADOS ─────────────────────────────────────
    {"id": "openstreetmap",       "nombre": "OpenStreetMap",                 "prio": 2, "url": "https://www.openstreetmap.org/",   "nota": "Agregar negocio al mapa libre."},
    {"id": "mapbox",              "nombre": "Mapbox — Add Place",            "prio": 3, "url": "https://www.mapbox.com/",          "nota": ""},
    {"id": "here_maps",           "nombre": "HERE Maps",                     "prio": 2, "url": "https://mapcreator.here.com/",     "nota": "Proveedor de mapas para muchos sistemas GPS."},

    # ── REDES PROFESIONALES ──────────────────────────────────────────────
    {"id": "researchgate",        "nombre": "ResearchGate",                  "prio": 2, "url": "https://www.researchgate.net/",   "nota": "Perfil académico/profesional. Backlink de autoridad."},
    {"id": "academia_edu",        "nombre": "Academia.edu",                  "prio": 2, "url": "https://www.academia.edu/",       "nota": "Publicar artículos técnicos cortos."},
    {"id": "slideshare",          "nombre": "SlideShare (LinkedIn)",         "prio": 2, "url": "https://www.slideshare.net/",     "nota": "Subir presentaciones técnicas."},

    # ── FOROS Y COMUNIDADES ──────────────────────────────────────────────
    {"id": "quora_profile",       "nombre": "Quora — Perfil experto",        "prio": 2, "url": "https://es.quora.com/",           "nota": "Responder preguntas de ingeniería con enlace a web."},
    {"id": "reddit_profile",      "nombre": "Reddit — r/ingenieria",         "prio": 2, "url": "https://www.reddit.com/r/Ingenieria/", "nota": "Participar con respuestas expertas."},

    # ── CALDAS / MANIZALES LOCALES ──────────────────────────────────────
    {"id": "manizales_com",       "nombre": "Manizales.com — Empresas",      "prio": 2, "url": "https://www.manizales.com/",      "nota": ""},
    {"id": "caldas_gov_empresa",  "nombre": "Gobernación Caldas — Empresas", "prio": 2, "url": "https://www.caldas.gov.co/",      "nota": "Directorio empresarial regional."},
    {"id": "lapatria",            "nombre": "La Patria — Directorio Caldas", "prio": 2, "url": "https://www.lapatria.com/",       "nota": "Periódico regional. Avisos/directorio."},

    # ── DATOS ABIERTOS / GOV ────────────────────────────────────────────
    {"id": "procolombia",         "nombre": "ProColombia — Exportadores",    "prio": 2, "url": "https://www.procolombia.co/",     "nota": "Registro para servicios de exportación (Ecuador/México)."},
    {"id": "secop_proveedor",     "nombre": "SECOP II — Proveedor",          "prio": 1, "url": "https://community.secop.gov.co/", "nota": "Registro para contratar con Estado. MUY IMPORTANTE."},
    {"id": "colombia_compra",     "nombre": "Colombia Compra Eficiente",     "prio": 1, "url": "https://www.colombiacompra.gov.co/", "nota": "Relacionado con SECOP. Proveedor contratación pública."},
]

# ─────────────────────────────────────────────────────────────────────────────
STATE_FILE = os.path.join(os.path.dirname(__file__), "backlinks_estado.json")

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE) as f:
            return json.load(f)
    return {}

def save_state(state):
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2, ensure_ascii=False)

def copy_to_clipboard(text):
    """Copia texto al portapapeles (Windows/Linux/Mac)."""
    try:
        if sys.platform == "win32":
            subprocess.run("clip", input=text.encode("utf-8"), check=True)
        elif sys.platform == "darwin":
            subprocess.run("pbcopy", input=text.encode("utf-8"), check=True)
        else:
            subprocess.run(["xclip", "-selection", "clipboard"], input=text.encode("utf-8"), check=True)
        return True
    except Exception:
        return False

def get_clipboard_text(directorio):
    """Genera el texto de descripción para pegar en el directorio."""
    return (
        f"Nombre: {BIC['nombre']}\n"
        f"Teléfono: {BIC['telefono']}\n"
        f"Web: {BIC['web']}\n"
        f"Email: {BIC['email']}\n"
        f"Dirección: {BIC['direccion']}, {BIC['ciudad']}, {BIC['departamento']}, {BIC['pais']}\n"
        f"Categoría: {BIC['categoria_principal']}\n"
        f"Horario: {BIC['horario']}\n\n"
        f"Descripción:\n{BIC['descripcion_larga']}\n\n"
        f"Palabras clave: {BIC['palabras_clave']}"
    )

def print_status(state):
    total = len(DIRECTORIOS)
    done = sum(1 for d in DIRECTORIOS if state.get(d["id"], {}).get("completado"))
    pct = done * 100 // total if total else 0
    print(f"\n{'─'*60}")
    print(f"  PROGRESO: {done}/{total} directorios ({pct}%)")
    print(f"{'─'*60}")
    for prio in [1, 2, 3]:
        items = [d for d in DIRECTORIOS if d["prio"] == prio]
        label = ["🔴 ALTA", "🟡 MEDIA", "⚪ BAJA"][prio - 1]
        print(f"\n  {label} PRIORIDAD ({len(items)} directorios):")
        for d in items:
            s = state.get(d["id"], {})
            icon = "✅" if s.get("completado") else "⬜"
            fecha = f"  ({s.get('fecha', '')})" if s.get("completado") else ""
            print(f"    {icon} {d['nombre']}{fecha}")

def run_interactive(state, pending_only=False):
    directorios = DIRECTORIOS
    if pending_only:
        directorios = [d for d in DIRECTORIOS if not state.get(d["id"], {}).get("completado")]

    if not directorios:
        print("\n✅ ¡Todos los directorios están completados!")
        return

    print(f"\n{'='*60}")
    print(f"  BIC — Script de citas locales y backlinks")
    print(f"  {len(directorios)} directorios {'pendientes' if pending_only else 'totales'}")
    print(f"{'='*60}")
    print("\nInstrucciones:")
    print("  1. Para cada directorio, se abrirá el formulario de registro.")
    print("  2. Los datos de BIC se copian al portapapeles automáticamente.")
    print("  3. Pega con Ctrl+V en los campos correspondientes.")
    print("  4. Cuando termines cada uno, vuelve aquí y presiona Enter.")
    print("  5. Escribe 's' para marcar como completado, 'n' para saltar.")
    print("\nPresiona Enter para comenzar...")
    input()

    for idx, d in enumerate(directorios, 1):
        s = state.get(d["id"], {})
        if s.get("completado"):
            continue

        print(f"\n{'─'*60}")
        print(f"  [{idx}/{len(directorios)}] {d['nombre']}")
        print(f"  Prioridad: {'🔴 ALTA' if d['prio']==1 else '🟡 MEDIA' if d['prio']==2 else '⚪ BAJA'}")
        if d.get("nota"):
            print(f"  Nota: {d['nota']}")
        print(f"  URL: {d['url']}")

        # Copiar datos al portapapeles
        clip_text = get_clipboard_text(d)
        ok = copy_to_clipboard(clip_text)
        if ok:
            print("\n  ✅ Datos de BIC copiados al portapapeles (Ctrl+V para pegar)")
        else:
            print("\n  ⚠️  No se pudo copiar al portapapeles — copia manualmente:")
            print(f"\n{BIC['nombre']} | {BIC['telefono']} | {BIC['web']}")

        # Abrir navegador
        print(f"\n  🌐 Abriendo: {d['url']}")
        try:
            webbrowser.open(d["url"])
        except Exception as e:
            print(f"  Error abriendo navegador: {e}")

        print("\n  ¿Completaste el registro? [s=sí / n=saltar / q=salir]")
        respuesta = input("  > ").strip().lower()

        if respuesta == "q":
            print("\n  Guardando progreso y saliendo...")
            save_state(state)
            break
        elif respuesta == "s":
            state[d["id"]] = {
                "completado": True,
                "fecha": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
                "nombre": d["nombre"],
            }
            save_state(state)
            print(f"  ✅ {d['nombre']} marcado como completado")
        else:
            print(f"  ⏭️  Saltando {d['nombre']}")

    print_status(state)

def main():
    state = load_state()

    if "--list" in sys.argv:
        print_status(state)
        return

    if "--reset" in sys.argv:
        print("\nDirectorios completados:")
        completados = [d for d in DIRECTORIOS if state.get(d["id"], {}).get("completado")]
        for i, d in enumerate(completados, 1):
            print(f"  {i}. {d['nombre']}")
        print("\n¿Cuál resetear? (número, o Enter para cancelar): ", end="")
        sel = input().strip()
        if sel.isdigit():
            idx = int(sel) - 1
            if 0 <= idx < len(completados):
                did = completados[idx]["id"]
                del state[did]
                save_state(state)
                print(f"  ✅ {completados[idx]['nombre']} reseteado")
        return

    pending_only = "--pending" in sys.argv
    run_interactive(state, pending_only)

if __name__ == "__main__":
    main()
