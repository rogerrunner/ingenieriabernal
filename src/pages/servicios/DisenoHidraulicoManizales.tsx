import { useEffect } from 'react'
import SEOHead from '@/components/SEOHead'
import { BlueprintBg, ThinLine, SectionLabel, Btn, Section, Tag } from '@/components/ui'

const WA = '573024778910'
const WA_MSG = encodeURIComponent('Hola, quiero cotizar un Diseño Hidráulico en Manizales')

const seoConfig = {
  title: 'Diseño Hidráulico Manizales para Industrias, Alcaldías y Grandes Promotores | BIC',
  description: 'Diseño hidráulico en Manizales para parques industriales, alcaldías, ESP y grandes promotores: acueducto, alcantarillado, PTAR y canales. RAS 2017 / COPNIA. +57 302 477 8910',
  keywords: [
    'diseño hidráulico Manizales',
    'redes acueducto Manizales',
    'alcantarillado pluvial Manizales',
    'diseño hidráulico Caldas',
    'RAS 2000 Manizales',
    'EPANET Manizales',
    'HEC-RAS canales Caldas',
    'diseño alcantarillado sanitario Manizales',
    'estructuras hidráulicas Colombia',
    'ingeniería hidráulica Manizales',
    'Resolución 0330 2017 Colombia',
    'AutoCAD Civil 3D redes',
    'SewerGEMS alcantarillado',
    'memorias de cálculo hidráulico',
  ],
  canonical: 'https://ingenieriabernal.co/diseno-hidraulico-manizales',
}

const SERVICIOS_HIDRAULICOS = [
  {
    icon: '💧',
    titulo: 'Redes de acueducto y distribución de agua potable',
    desc: 'Diseño de redes de distribución de agua potable en sistema mallado y ramificado. Modelación hidráulica con EPANET para verificar presiones, velocidades y caudales en condiciones estáticas y de incendio. Aplicación del RAS 2000 (Resolución 0330 de 2017) y las normas técnicas de Aguas de Manizales para proyectos en el área urbana.',
  },
  {
    icon: '🌧️',
    titulo: 'Alcantarillado pluvial y sanitario',
    desc: 'Diseño de redes de alcantarillado sanitario, pluvial y combinado. Cálculo de caudales de diseño mediante el método racional modificado y curvas IDF de Manizales. Modelación con SewerGEMS para verificar capacidad de colectores, pozos de inspección, estructuras de unión y conexión a la red pública de Aguas de Manizales.',
  },
  {
    icon: '🏞️',
    titulo: 'Canales y estructuras de conducción',
    desc: 'Diseño hidráulico de canales trapezoidales, rectangulares y circulares para conducción de aguas lluvia o riego. Cálculo de Manning, análisis de flujo crítico y lámina libre. Diseño de estructuras de caída, disipadores de energía, transiciones y estructuras de control compatibles con el sistema de drenaje urbano de Manizales y Caldas.',
  },
  {
    icon: '🔧',
    titulo: 'Estructuras hidráulicas especiales',
    desc: 'Diseño de estructuras de captación, vertederos, aforadores Parshall, cámaras de quiebre, tanques de almacenamiento y sistemas de bombeo. Cálculo hidráulico detallado con selección de bombas centrífugas, curvas del sistema y verificación del golpe de ariete para sistemas con impulsión.',
  },
]

const SOFTWARE = [
  { nombre: 'EPANET', uso: 'Modelación de redes de acueducto a presión. Análisis estatico y dinámico de presiones y caudales en nodos y tuberías.' },
  { nombre: 'SewerGEMS / OpenFlows', uso: 'Diseño y modelación de redes de alcantarillado a superficie libre y a presión. Verificación de capacidad hidráulica bajo lluvia de diseño.' },
  { nombre: 'HEC-RAS', uso: 'Análisis de flujo en canales y cauces naturales en régimen permanente y no permanente. Cálculo de lámina de agua y perfil hidráulico.' },
  { nombre: 'AutoCAD Civil 3D', uso: 'Modelación del terreno (MDT), diseño de perfiles de red, generación de planos en planta y perfil para acueducto y alcantarillado.' },
]

const NORMATIVA = [
  {
    norma: 'RAS 2000 — Resolución 0330 de 2017',
    desc: 'Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico. Establece criterios de diseño para acueductos, alcantarillados, plantas de tratamiento y disposición de aguas residuales. BIC aplica el RAS 2000 actualizado en todos los proyectos de infraestructura hídrica.',
  },
  {
    norma: 'NSR-10 (estructuras hidráulicas)',
    desc: 'Norma colombiana de diseño y construcción sismo resistente aplicada a estructuras hidráulicas como tanques elevados, estructuras de retención, muros de contención y obras de paso. El NSR-10 rige el diseño estructural de las obras que el RAS define hidráulicamente. BIC aplica NSR-10 cuando la obra requiere cálculo de cargas sísmicas, revisión de estabilidad o diseño de elementos de concreto reforzado en proyectos de agua potable y saneamiento.',
  },
  {
    q: '¿Cuándo necesito un diseño hidráulico en Manizales?',
    a: 'Necesita diseño hidráulico en cualquiera de estos casos: (1) proyecto de urbanización o plan parcial que requiere diseño de redes domiciliarias para radicación en AMAC; (2) edificio multifamiliar o comercial que debe conectarse a las redes públicas de acueducto y alcantarillado; (3) obra de infraestructura vial con alcantarillas y canales de drenaje; (4) proyecto industrial con vertimientos que requiere planta de tratamiento; (5) obra de protección de cauces o manejo de aguas lluvias exigida por la Alcaldía de Manizales o Corpocaldas.',
  },
  {
    q: '¿Qué pasa si no cumplo el RAS 2000 en mi proyecto?',
    a: 'El incumplimiento del RAS 2000 puede generar: rechazo de la documentación técnica por parte de AMAC o la Alcaldía, lo que retrasa la licencia; problemas operativos como presiones insuficientes, taponamiento de colectores o fallas por golpe de ariete; responsabilidad legal del diseñador y constructor ante daños a terceros o al sistema público. Además, las entidades financiadoras (gobernaciones, SGP, Ministerio de Vivienda) exigen cumplimiento del RAS para girar recursos a proyectos de infraestructura.',
  },
  {
    q: '¿Cuánto cuesta un diseño hidráulico en Manizales?',
    a: 'El costo depende del tipo de proyecto, el número de unidades habitacionales o la extensión de la red, la complejidad topográfica y los entregables requeridos. Para un parque industrial o un proyecto de infraestructura municipal, el rango típico está entre $12.000.000 y $45.000.000 COP según el alcance y los entregables requeridos. BIC envía propuesta detallada tras revisar la información básica del proyecto (plano topográfico, uso del suelo y capacidad instalada).',
  },
  {
    q: '¿Pueden diseñar redes en municipios fuera de Manizales?',
    a: 'Sí. BIC tiene experiencia en proyectos de acueducto y alcantarillado en varios municipios de Caldas: Villamaría, Chinchiná, Palestina, La Dorada, Riosucio y otros. También atendemos proyectos en Risaralda, Quindío y otras regiones del país. Para municipios fuera del área metropolitana de Manizales, coordinamos con la empresa de servicios públicos local y la Alcaldía el cumplimiento de los requisitos particulares de cada entidad.',
  },
  {
    q: '¿BIC tramita los permisos ante Aguas de Manizales?',
    a: 'BIC elabora toda la documentación técnica requerida para la radicación ante AMAC: memorias de cálculo, planos en planta y perfil, especificaciones técnicas y formularios de solicitud. El trámite de aprobación formal lo adelanta el propietario o constructor ante AMAC, aunque BIC acompaña el proceso respondiendo consultas técnicas de los revisores de la empresa de servicios públicos hasta obtener el visto bueno.',
  },
]

export default function DisenoHidraulicoManizales() {
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
          <SectionLabel light>Servicio especializado · Manizales · Caldas</SectionLabel>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(26px, 4.5vw, 42px)', lineHeight: 1.2, marginBottom: 24,
          }}>
            Diseño Hidráulico en Manizales:<br />
            <span style={{ color: '#17A2B8' }}>Redes, Canales y Estructuras Hidráulicas</span>
          </h1>
          <p style={{
            fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8"�r��f��E6��S�r�Ɩ�T�V�v�C��sR���v�GF��s#��&v��&�GF�Ӣ3b�����$�2F�6\;6�7FV�2��G,:VƖ6�2&'VW2��GW7G&��W2��6�L:�2�U5�w&�FW2&���F�&W0�V��旦�W2�6�F3�&VFW2FR7VVGV7F���6�F&���F��6��W2FRG&V��R���F2FP�G&F֖V�F��V�G&Vv��2�V��&�2FR<:�7V������2f�&�F�2�6��;֖V�F��FR�2���27W&GW,:�2�7F&�&6�;6��&Vv�7G&�4��s#"�33##�4�B�����F�b7G��S׷�F�7���vf�W�r�v�"�f�W�w&�ww&r����'F��&Vc׶�GG3���v��R�G�t��FW�C�G�t��4w���	�;&�VW7FV�#B�(	B6��6�7F���'F���'F�f&��C�&�WFƖ�R"�&Vc�"�6W'f�6��2"F&��fW"F�F�2��26W'f�6��0���'F����F�c���F�c���6V7F���ࠢ��)H)HDu2)H)H��Т�F�b7G��S׷�&6�w&�V�C�r3#SCr�FF��s�sG�#G�r�&�&FW$&�GF�Ӣs�6�ƖB&v&�#2�c"��B��R�r����F�b7G��S׷���v�GF�����&v��sWF�r�F�7���vf�W�r�v���f�W�w&�ww&r�Ɩv�FV�3�v6V�FW"r����7�7G��S׷�f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��E6��S��6���#�w&v&�#SR�#SR�#SR��R�r��&v��&�v�C�B�����&�F�f���7����u$2#r�u&W6��V6�;6�33�#rr�t�5"�r�tU�UBr�u6WvW$tT�2r�t�T2�$2r�twV2FR�旦�W2u����B�����Fr�W�׷G��G���Fs���Т��F�c���F�cࠢ��)H)H\8���4�U�R)H)H��Т�6V7F���&s�"4c�dd2"7G��S׷�FF��s�ss'�#G�r����F�b7G��S׷���v�GF�����&v��sWF�r����6V7F����&V���6�6RFV�6W'f�6����6V7F����&V��ƃ"7G��S׷��f��Df֖Ǔ�"u��f�"F�7��r�6W&�b"�f��EvV�v�C�s�6���#�r332r��f��E6��S�v6���#'��Ggr�3'��r��&v��&�GF�Ӣ������+�\:���6�W�RV�F�6\;���G,:VƖ6�����#��F���Ɩ�R�#׳C����F�b7G��S׷�F�7���vw&�Br�w&�EFV��FT6��V��3�w&WVB�WF��f�B�֖����#���g"��r�v�#B����4U%d�4��5�E$TĔ4�2�����FVҒ�����F�b�W�׶�FV��F�GV���7G��S׷��&6�w&�V�C�r6ffbr�&�&FW#�s�6�ƖB4S$S�cr�&�&FW%&F�W3�B��FF��s�#��&�&FW%F��s7�6�ƖB3t$#�r������F�b7G��S׷�f��E6��S�#���&v��&�GF�Ӣ"��綗FV��6�����F�c�ƃ27G��S׷��f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r332r��f��E6��S�B��&v��&�GF�Ӣ����綗FV��F�GV������3��7G��S׷��f��Df֖Ǔ�"t�F�r�6�2�6W&�b"�6���#�r3CsSSc�r�f��E6��S�B�Ɩ�T�V�v�C��cR����綗FV��FW67������F�c���Т��F�c���F�c���6V7F���ࠢ��)H)H��$�D�d)H)H��Т�6V7F���&s�"6ffb"7G��S׷�FF��s�ss'�#G�r����F�b7G��S׷���v�GF�����&v��sWF�r����6V7F����&V���&6���&�F�f���6V7F����&V��ƃ"7G��S׷��f��Df֖Ǔ�"u��f�"F�7��r�6W&�b"�f��EvV�v�C�s�6���#�r332r��f��E6��S�v6���#'��Ggr�3'��r��&v��&�GF�Ӣ��������&�F�fƖ6F�$2#��5"��t�%3���#��F���Ɩ�R�#׳C����F�b7G��S׷�F�7���vw&�Br�w&�EFV��FT6��V��3�w&WVB�WF��f�B�֖����#���g"��r�v�#B������$�D�d�����FVҒ�����F�b�W�׶�FV����&��7G��S׷��FF��s�#B�&6�w&�V�C�r4c�dd2r��&�&FW$�VgC�s7�6�ƖB3t$#�r�&�&FW%&F�W3�sG�G�r��&�&FW#�s�6�ƖB4S$S�cr�����ƃ27G��S׷��f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r3$Sr��f��E6��S�2��&v��&�GF�Ӣ����綗FV����&�����3��7G��S׷��f��Df֖Ǔ�"t�F�r�6�2�6W&�b"�6���#�r3CsSSc�r�f��E6��S�B�Ɩ�T�V�ht: 1.65,
                  margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── SOFTWARE ── */}
      <Section bg="#001A33" style={{ padding: '72px 24px' }}>
        <BlueprintBg opacity={0.05} />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
          <SectionLabel light>Herramientas de modelación</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#fff',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Software utilizado: EPANET, SewerGEMS, HEC-RAS y Civil 3D</h2>
          <ThinLine mb={40} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {SOFTWARE.map(s => (
              <div key={s.nombre} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(23,162,184,0.2)',
                borderRadius: 4, padding: 28,
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#17A2B8',
                  fontSize: 15, marginBottom: 10,
                }}>{s.nombre}</h3>
                <p style={{
                  fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.65,
                }}>{s.uso}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TIPOS DE PROYECTOS ── */}
      <Section bg="#F8FAFC" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Experiencia local</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
            fontSize: 'clamp(22px, 4vw, 32px)', marginBottom: 8,
          }}>Tipos de proyectos en Manizales y Caldas</h2>
          <ThinLine mb={40} />
          <div style={{ marginBottom: 36, padding: '20px 24px', background: '#EBF8FF', borderLeft: '4px solid #17A2B8', borderRadius: '0 4px 4px 0' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#002A50', fontSize: 13, marginBottom: 12 }}>
              Proyectos que atendemos:
            </p>
            <ul style={{ fontFamily: "'Lato', sans-serif", color: '#334155', fontSize: 14, lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Parques industriales, bodegas y naves logísticas</li>
              <li>Alcaldías y ESP con proyectos SGR o Plan de Inversiones</li>
              <li>Grandes promotores en zonas de expansión urbana</li>
              <li>Proyectos agroindustriales e infraestructura vial</li>
              <li>Predios de más de 5 ha que requieren estudios de drenaje</li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PROYECTOS.map((p) => (
              <div key={p.tipo} style={{
                padding: 24, background: '#fff',
                borderLeft: '3px solid #17A2B8',
                border: '1px solid #E2E8F0', borderRadius: '0 4px 4px 0',
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

      {/* ── QUÉ ENTREGA BIC ── */}
      <Section bg="#fff" style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionLabel>Entregables</SectionLabel>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#001A33',
        f��E6��S�v6���#'��Ggr�3'��r��&v��&�GF�Ӣ������+�\:�V�G&Vv$�3��V��&�2����2�W7V6�f�66���W3���#��F���Ɩ�R�#׳C����F�b7G��S׷�F�7���vw&�Br�w&�EFV��FT6��V��3�w&WVB�WF��f�B�֖����#C��g"��r�v�#B����T�E$Tt2���B�����F�b�W�׶B�F�GV���7G��S׷��&6�w&�V�C�r4c�dd2r�&�&FW#�s�6�ƖB4S$S�cr��&�&FW%&F�W3�B�FF��s�#��&�&FW%F��s7�6�ƖB3t$#�r������F�b7G��S׷�f��E6��S�3��&v��&�GF�Ӣ"���B�6�����F�c�ƃ27G��S׷��f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r3$Sr��f��E6��S�B��&v��&�GF�Ӣ������B�F�GV������3��7G��S׷��f��Df֖Ǔ�"t�F�r�6�2�6W&�b"�6���#�r3CsSSc�r�f��E6��S�B�Ɩ�T�V�v�C��cR�����B�FW67������F�c���Т��F�c���F�c���6V7F���ࠢ��)H)Hd)H)H��Т�6V7F���&s�"4c�dd2"7G��S׷�FF��s�ss'�#G�r����F�b7G��S׷���v�GF���c��&v��sWF�r����6V7F����&V��&VwV�F2g&V7VV�FW3��6V7F����&V��ƃ"7G��S׷��f��Df֖Ǔ�"u��f�"F�7��r�6W&�b"�f��EvV�v�C�s�6���#�r332r��f��E6��S�v6���#'��Ggr�3'��r��&v��&�GF�Ӣ������d(	BF�6\;���G,:VƖ6�V��旦�W3���#��F���Ɩ�R�#׳C����F�b7G��S׷�F�7���vf�W�r�f�W�F�&V7F���v6��V��r�v�#����d�����FVҒ�����F�b�W�׶�FV���7G��S׷��&6�w&�V�C�r6ffbr�&�&FW#�s�6�ƖB4S$S�cr��&�&FW%&F�W3�B�FF��s�s#G�#��r�����ƃ27G��S׷��f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r3$Sr��f��E6��S�B��&v��&�GF�Ӣ����綗FV������3��7G��S׷��f��Df֖Ǔ�"t�F�r�6�2�6W&�b"�6���#�r3CsSSc�r�f��E6��S�B�Ɩ�T�V�v�C��r���&v������綗FV��������F�c���Т��F�c���F�c���6V7F���ࠢ��)H)H5Dd���)H)H��Т�6V7F���&s�"3t$#�"7G��S׷�FF��s�scG�#G�r�FW�DƖv�v6V�FW"r����F�b7G��S׷���v�GF��c���&v��sWF�r���ƃ"7G��S׷��f��Df֖Ǔ�"u��f�"F�7��r�6W&�b"�f��EvV�v�C�s�6���#�r6ffbr��f��E6��S�v6���#'��Ggr�3G��r��&v��&�GF�Ӣb�����+��V6W6�FF�6\;���G,:VƖ6�V��旦�W3����#��F�b7G��S׷��&v��&�GF�Ӣ3"����F�b7G��S׷�F�7���vf�W�r�v�b�f�W�w&�ww&r��W7F�g�6��FV�C�v6V�FW"r��&v��&�GF�Ӣ#����7�7G��S׷�&6�w&�V�C�w&v&�#SR�#SR�#SR��R�r�&�&FW%&F�W3�B�FF��s�s��g�r�f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r6ffbr�f��E6��S�2�����fW'6�;6�FW6FRC2�T�4�6V|;���6�6P���7���7�7G��S׷�&6�w&�V�C�w&v&�#SR�#SR�#SR��R�r�&�&FW%&F�W3�B�FF��s�s��g�r�f��Df֖Ǔ�"t���G6W'&Br�6�2�6W&�b"�f��EvV�v�C�s�6���#�r6ffbr�f��E6��S�2������2B6V��2FW6FRV��F�6��FV�SP���7����F�c��7G��S׷�f��Df֖Ǔ�"t�F�r�6�2�6W&�b"�6���#�w&v&�#SR�#SR�#SR�㒒r�f��E6��S�R�Ɩ�T�V�v�C��r��&v�����+�GRV�&W6��6�L:��&��V7F�&WV�W&RF�6\;���G,:VƖ6�V��旦�W2�6�F3�6�Ɩ6�FGR&�VW7FL:�6�6(	B&Wf�6��2V��6�6R6��6�7F�������F�c��'F��&Vc׶�GG3���v��R�G�t��FW�C�G�t��4w�Т7G��S׷�&6�w&�V�C�r6ffbr�6���#�r3t$#�r�f��E6��S�R�FF��s�sG�3g�r�Т�	�;&�VW7FV�#B�(	B6��6�7F���'F����F�c���6V7F����������
