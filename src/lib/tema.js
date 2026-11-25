// Aplica el "Diseño" editable (src/content/tema.json) al sitio: colores, fuentes, tamaño,
// esquinas y animaciones. Todo se traduce a variables CSS en <html>, así que ningún
// componente necesita saber de dónde vienen los valores.

// ---------- Paletas aprobadas (el panel ofrece estas; "personalizada" usa los colores libres)
export const PALETAS = {
  // Paleta oficial: negro, dorado, beige y gris
  clasica: {
    acento: '#d1ad66',
    fondoOscuro: '#0d0c0a',
    fondoClaro: '#f3ecdf',
    tituloOscuro: '#f4ebdc',
    textoOscuro: '#e4dccd',
    tituloClaro: '#15130f',
    textoClaro: '#3a3631',
    elevadoClaro: '#fbf7f0',
  },
  dorado: { acento: '#d9b25f', fondoOscuro: '#0a0a0a', fondoClaro: '#faf8f4' },
  champana: { acento: '#e3c9a0', fondoOscuro: '#0c0b0a', fondoClaro: '#fbf8f3' },
  bronce: { acento: '#c28a4e', fondoOscuro: '#0d0a08', fondoClaro: '#faf6f1' },
  esmeralda: { acento: '#4fb98a', fondoOscuro: '#070b09', fondoClaro: '#f5f9f6' },
  lavanda: { acento: '#a996e0', fondoOscuro: '#0a0911', fondoClaro: '#f8f6fc' },
  plata: { acento: '#c9ced6', fondoOscuro: '#0a0b0d', fondoClaro: '#f7f8fa' },
}

// ---------- Fuentes probadas (se cargan desde Google Fonts solo las que se usan)
export const FUENTES = {
  // Fuentes de la marca. Si la computadora o el sitio tienen la fuente original (con licencia), se usa;
  // si no, se carga una alternativa libre muy parecida de Google Fonts.
  'Trajan Pro': { familia: 'Trajan Pro', google: 'Cinzel', pesos: '400;500;600;700', respaldo: 'Georgia, serif', clasica: true },
  Avenir: { familia: 'Avenir', google: 'Nunito Sans', pesos: '400;600;700;800', respaldo: 'system-ui, sans-serif' },
  'ITC Eras': { familia: 'ITC Eras Std', google: 'Didact Gothic', pesos: '400', respaldo: 'system-ui, sans-serif' },
  Montserrat: { familia: 'Montserrat', pesos: '400;500;600;700;800', respaldo: 'system-ui, sans-serif' },
  Poppins: { familia: 'Poppins', pesos: '400;500;600;700;800', respaldo: 'system-ui, sans-serif' },
  Raleway: { familia: 'Raleway', pesos: '400;500;600;700;800', respaldo: 'system-ui, sans-serif' },
  'DM Sans': { familia: 'DM Sans', pesos: '400;500;600;700', respaldo: 'system-ui, sans-serif' },
  Inter: { familia: 'Inter', pesos: '400;500;600;700;800', respaldo: 'system-ui, sans-serif' },
  'Source Sans 3': { familia: 'Source Sans 3', pesos: '400;600;700', respaldo: 'system-ui, sans-serif' },
  'Playfair Display': { familia: 'Playfair Display', pesos: '400;500;600;700;800', respaldo: 'Georgia, serif' },
  'Cormorant Garamond': { familia: 'Cormorant Garamond', pesos: '400;500;600;700', respaldo: 'Georgia, serif' },
  Lora: { familia: 'Lora', pesos: '400;500;600;700', respaldo: 'Georgia, serif' },
  Merriweather: { familia: 'Merriweather', pesos: '400;700', respaldo: 'Georgia, serif' },
}

const TAMANOS = { pequeno: '93.75%', normal: '100%', grande: '106.25%', 'muy-grande': '112.5%' }
const ESQUINAS = {
  redondeadas: { radio: '16px', boton: '999px' },
  suaves: { radio: '8px', boton: '10px' },
  rectas: { radio: '0px', boton: '0px' },
}

// ---------- utilidades de color
const esHex = (c) => typeof c === 'string' && /^#?[0-9a-f]{6}$/i.test(c.trim())
const aRgb = (hex) => {
  const h = hex.trim().replace('#', '')
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
}
const aHex = (rgb) => '#' + rgb.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')
const mezclar = (a, b, t) => aHex(aRgb(a).map((v, i) => v + (aRgb(b)[i] - v) * t))
const rgba = (hex, a) => `rgba(${aRgb(hex).join(', ')}, ${a})`
const luminancia = (hex) => {
  const [r, g, b] = aRgb(hex).map((v) => {
    const c = v / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
export const contraste = (a, b) => {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

// Calcula todas las variables a partir de pocas decisiones del panel
export function calcularVariables(tema = {}) {
  const claro = tema.modo === 'claro'
  const paleta = PALETAS[tema.paleta] || PALETAS.clasica
  const personalizada = tema.paleta === 'personalizada'

  const acento = personalizada && esHex(tema.color_acento) ? '#' + tema.color_acento.trim().replace('#', '') : paleta.acento
  const fondoPedido = personalizada && esHex(tema.color_fondo) ? '#' + tema.color_fondo.trim().replace('#', '') : null
  const fondo = fondoPedido || (claro ? paleta.fondoClaro : paleta.fondoOscuro)

  const blanco = '#ffffff'
  const negro = '#000000'
  const hacia = claro ? negro : blanco // hacia dónde se aclaran/oscurecen los tonos derivados

  const titulo = claro ? paleta.tituloClaro || '#111111' : paleta.tituloOscuro || blanco
  const texto = claro ? paleta.textoClaro || '#1f1f1f' : paleta.textoOscuro || '#ededed'
  const textoSuave = mezclar(texto, fondo, 0.42)
  const textoTenue = mezclar(texto, fondo, 0.6)

  // En modo claro, un acento muy claro no se lee sobre fondo claro: se oscurece para textos
  let acentoTexto = acento
  if (claro) {
    for (let t = 0; t < 0.7 && contraste(acentoTexto, fondo) < 3; t += 0.05) acentoTexto = mezclar(acento, negro, t)
  }

  const esquinas = ESQUINAS[tema.esquinas] || ESQUINAS.redondeadas

  return {
    '--fondo': fondo,
    '--fondo-elevado': claro ? paleta.elevadoClaro || blanco : mezclar(fondo, hacia, 0.04),
    '--fondo-alt': mezclar(fondo, hacia, claro ? 0.025 : 0.02),
    '--borde': mezclar(fondo, hacia, claro ? 0.1 : 0.09),
    '--borde-fuerte': mezclar(fondo, hacia, claro ? 0.18 : 0.16),
    '--capa-1': claro ? 'rgba(0, 0, 0, 0.025)' : 'rgba(255, 255, 255, 0.035)',
    '--capa-2': claro ? 'rgba(0, 0, 0, 0.01)' : 'rgba(255, 255, 255, 0.01)',
    '--vidrio': rgba(fondo, 0.78),
    '--titulo': titulo,
    '--texto': texto,
    '--texto-suave': textoSuave,
    '--texto-tenue': textoTenue,
    '--tema-titulo': titulo,
    '--tema-texto': texto,
    '--tema-texto-suave': textoSuave,
    '--acento': claro ? acentoTexto : acento,
    '--acento-portada': acento,
    '--portada-fondo': paleta.fondoOscuro,
    '--beige': paleta.tituloOscuro || '#f4ebdc', // la portada siempre es oscura: usa el acento sin oscurecer
    '--acento-claro': mezclar(acento, blanco, 0.35),
    '--acento-glow': rgba(acento, 0.18),
    '--acento-texto': contraste(claro ? acentoTexto : acento, '#0a0a0a') >= 4.5 ? '#0a0a0a' : '#ffffff',
    '--radio': esquinas.radio,
    '--radio-boton': esquinas.boton,
    '--fuente-titulos': fuenteCss(tema.fuente_titulos, 'Trajan Pro'),
    '--fuente-texto': fuenteCss(tema.fuente_texto, 'Avenir'),
    '--fuente-detalles': fuenteCss(tema.fuente_detalles || tema.fuente_texto, 'ITC Eras'),
    '--espaciado-titulos': FUENTES[tema.fuente_titulos]?.clasica ? '0.02em' : '-0.02em',
  }
}

function fuenteCss(nombre, porDefecto) {
  const f = FUENTES[nombre] || FUENTES[porDefecto]
  return [`'${f.familia}'`, f.google && `'${f.google}'`, f.respaldo].filter(Boolean).join(', ')
}

function cargarFuentes(tema) {
  const nombres = [
    FUENTES[tema.fuente_titulos] ? tema.fuente_titulos : 'Trajan Pro',
    FUENTES[tema.fuente_texto] ? tema.fuente_texto : 'Avenir',
    FUENTES[tema.fuente_detalles] ? tema.fuente_detalles : 'ITC Eras',
  ]
  const familias = [...new Set(nombres.map((n) => FUENTES[n].google || FUENTES[n].familia))]
    .map((familia) => {
      const f = Object.values(FUENTES).find((x) => (x.google || x.familia) === familia)
      return `family=${encodeURIComponent(familia).replace(/%20/g, '+')}:wght@${f.pesos}`
    })
    .join('&')
  const href = `https://fonts.googleapis.com/css2?${familias}&display=swap`
  let link = document.getElementById('fuentes-tema')
  if (!link) {
    link = document.createElement('link')
    link.id = 'fuentes-tema'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  if (link.href !== href) link.href = href
}

function meta(nombre, valor) {
  let m = document.querySelector(`meta[name="${nombre}"]`)
  if (!m) {
    m = document.createElement('meta')
    m.name = nombre
    document.head.appendChild(m)
  }
  m.content = valor
}

// ---------- Modo elegido por el visitante (botón sol/luna). Se guarda solo en su navegador.
const CLAVE_MODO = 'natanalfaro-modo'
let temaBase = {}

export function modoGuardado() {
  try {
    const m = localStorage.getItem(CLAVE_MODO)
    return m === 'claro' || m === 'oscuro' ? m : null
  } catch {
    return null
  }
}

export const modoActual = () => modoGuardado() || (temaBase.modo === 'claro' ? 'claro' : 'oscuro')

export function cambiarModo(modo) {
  const raiz = document.documentElement
  raiz.classList.add('cambiando-modo')
  setTimeout(() => raiz.classList.remove('cambiando-modo'), 500)
  try {
    localStorage.setItem(CLAVE_MODO, modo)
  } catch {
    /* navegador sin almacenamiento: cambia solo mientras está abierta la página */
  }
  pintar({ ...temaBase, modo })
}

// Aplica el diseño del panel; si el visitante eligió un modo con el botón, ese manda.
export function aplicarTema(tema = {}) {
  temaBase = tema
  const modo = tema.boton_modo === false ? tema.modo : modoGuardado() || tema.modo
  pintar({ ...tema, modo })
}

function pintar(tema) {
  const raiz = document.documentElement
  const vars = calcularVariables(tema)
  Object.entries(vars).forEach(([k, v]) => raiz.style.setProperty(k, v))
  raiz.style.fontSize = TAMANOS[tema.tamano_texto] || TAMANOS.normal
  // "only ..." le dice al teléfono que la página ya tiene su propio modo: no debe recolorearla
  raiz.style.colorScheme = tema.modo === 'claro' ? 'only light' : 'only dark'
  raiz.dataset.modo = tema.modo === 'claro' ? 'claro' : 'oscuro'
  raiz.classList.toggle('sin-animaciones', tema.animaciones === false)
  meta('theme-color', vars['--fondo'])
  meta('color-scheme', tema.modo === 'claro' ? 'only light' : 'only dark')
  cargarFuentes(tema)
}
