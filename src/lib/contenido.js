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

export const PUBLICADO = {
  sitio,
  inicio,
  ministerios,
  'vida-bendecida': vidaBendecida,
  eventos,
  testimonios,
  ofrenda,
  tema,
}

export const ARCHIVOS = Object.keys(PUBLICADO)

export function leer(nombre) {
  const borrador = typeof window !== 'undefined' ? window.__BORRADOR__ : null
  return borrador?.contenido?.[nombre] ?? PUBLICADO[nombre]
}
