// Vista previa del borrador: carga el contenido de la rama "borrador" directamente desde
// GitHub, sin compilar ni publicar nada. Se activa abriendo el sitio con ?vista-previa
// y se mantiene al navegar hasta pulsar "Salir".
import { REPO } from '../config'
import { ARCHIVOS } from './contenido'

const CLAVE = 'vistaPrevia'

function guardar(valor) {
  try {
    if (valor) sessionStorage.setItem(CLAVE, '1')
    else sessionStorage.removeItem(CLAVE)
  } catch {
    /* navegación privada: la vista previa dura solo esta carga */
  }
}

export function vistaPreviaActiva() {
  const params = new URLSearchParams(window.location.search)
  if (params.has('salir-vista-previa')) {
    guardar(false)
    return false
  }
  if (params.has('vista-previa')) {
    guardar(true)
    return true
  }
  try {
    return sessionStorage.getItem(CLAVE) === '1'
  } catch {
    return false
  }
}

export function salirDeVistaPrevia() {
  guardar(false)
  window.location.href = window.location.pathname + '?salir-vista-previa'
}

// Las fotos subidas al borrador aún no están en el servidor: se piden a GitHub.
function reescribirImagenes(valor, base) {
  if (typeof valor === 'string') return valor.startsWith('/img/') ? `${base}/public${valor}` : valor
  if (Array.isArray(valor)) return valor.map((v) => reescribirImagenes(v, base))
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, reescribirImagenes(v, base)]))
  }
  return valor
}

export async function cargarBorrador() {
  const { dueno, nombre, ramaBorrador } = REPO
  // 1) Último cambio de la rama (siempre fresco, sin caché)
  const r = await fetch(`https://api.github.com/repos/${dueno}/${nombre}/commits/${ramaBorrador}`, {
    headers: { Accept: 'application/vnd.github+json' },
    cache: 'no-store',
  })
  if (!r.ok) throw new Error(r.status === 404 ? 'No existe la rama "borrador" en GitHub.' : `GitHub respondió ${r.status}.`)
  const commit = await r.json()
  const sha = commit.sha
  const base = `https://raw.githubusercontent.com/${dueno}/${nombre}/${sha}`

  // 2) Contenido de esa versión exacta (URLs inmutables: nunca muestran una copia vieja)
  const contenido = {}
  await Promise.all(
    ARCHIVOS.map(async (archivo) => {
      const res = await fetch(`${base}/src/content/${archivo}.json`)
      if (res.ok) contenido[archivo] = reescribirImagenes(await res.json(), base)
    }),
  )

  return {
    contenido,
    sha: sha.slice(0, 7),
    mensaje: commit.commit?.message?.split('\n')[0] || '',
    autor: commit.commit?.author?.name || '',
    fecha: commit.commit?.author?.date || '',
  }
}
