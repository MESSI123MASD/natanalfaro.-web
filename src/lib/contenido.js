// Punto único para leer el contenido editable.
// Normalmente devuelve lo publicado (los JSON compilados dentro del sitio).
// En modo vista previa, main.jsx carga antes el contenido de la rama "borrador" en
// window.__BORRADOR__ y aquí se usa ese en su lugar.

import sitio from '../content/sitio.json'
import inicio from '../content/inicio.json'
import ministerios from '../content/ministerios.json'
import vidaBendecida from '../content/vida-bendecida.json'
import eventos from '../content/eventos.json'
import testimonios from '../content/testimonios.json'
import ofrenda from '../content/ofrenda.json'
import tema from '../content/tema.json'
import invitaciones from '../content/invitaciones.json'
import iglesia from '../content/iglesia.json'
import ingles from '../content/en.json'
import { enIngles } from './idioma'

export const PUBLICADO = {
  sitio,
  inicio,
  ministerios,
  'vida-bendecida': vidaBendecida,
  eventos,
  testimonios,
  ofrenda,
  tema,
  invitaciones,
  iglesia,
}

export const ARCHIVOS = [...Object.keys(PUBLICADO), 'en']

// Une la traducción al inglés sobre el texto en español: lo que no esté traducido queda en español.
function combinar(base, traduccion) {
  if (traduccion === undefined || traduccion === null || traduccion === '') return base
  if (Array.isArray(base) && Array.isArray(traduccion)) {
    return base.map((item, i) => combinar(item, traduccion[i]))
  }
  if (base && typeof base === 'object' && typeof traduccion === 'object' && !Array.isArray(traduccion)) {
    const salida = { ...base }
    Object.keys(traduccion).forEach((k) => (salida[k] = combinar(base[k], traduccion[k])))
    return salida
  }
  return typeof traduccion === typeof base || base === undefined ? traduccion : base
}

export function leer(nombre) {
  const borrador = typeof window !== 'undefined' ? window.__BORRADOR__ : null
  const base = borrador?.contenido?.[nombre] ?? PUBLICADO[nombre]
  if (!enIngles) return base
  const traduccion = borrador?.contenido?.en ?? ingles
  return combinar(base, traduccion?.[nombre])
}
