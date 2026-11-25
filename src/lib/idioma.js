// Idioma del sitio: español (por defecto) o inglés. Cada visitante lo elige con el botón ES/EN;
// también se puede compartir un enlace directo en inglés con ?lang=en
const CLAVE = 'natanalfaro-idioma'

function detectar() {
  try {
    const pedido = new URLSearchParams(window.location.search).get('lang')
    if (pedido === 'en' || pedido === 'es') {
      localStorage.setItem(CLAVE, pedido)
      return pedido
    }
    const guardado = localStorage.getItem(CLAVE)
    if (guardado === 'en' || guardado === 'es') return guardado
  } catch {
    /* sin almacenamiento: español */
  }
  return 'es'
}

export const idioma = typeof window !== 'undefined' ? detectar() : 'es'
export const enIngles = idioma === 'en'

// Texto fijo del diseño en los dos idiomas: t('Hola', 'Hello')
export const t = (es, en) => (enIngles && en ? en : es)

export function cambiarIdioma(nuevo) {
  try {
    localStorage.setItem(CLAVE, nuevo)
  } catch {
    /* sigue funcionando con el parámetro de la dirección */
  }
  const url = new URL(window.location.href)
  url.searchParams.set('lang', nuevo)
  window.location.href = url.toString()
}
