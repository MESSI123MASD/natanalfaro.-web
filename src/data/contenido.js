// Textos de las secciones del inicio. Se editan en src/content/*.json
// (o desde el panel de edición en https://app.pagescms.org).
import { leer } from '../lib/contenido'

const inicio = leer('inicio')
export const tema = leer('tema')

export const portada = inicio.portada
export const biografia = inicio.biografia
export const mision = inicio.mision
export const mensaje = inicio.mensaje || {}

// Secciones que el panel (Diseño) puede ocultar. Si falta el dato, se muestra.
export const secciones = {
  redes: true,
  biografia: true,
  mensajes: true,
  ministerios: true,
  invitaciones: true,
  vida_bendecida: true,
  eventos: true,
  testimonios: true,
  ...(tema.secciones || {}),
}

// Campos vacíos del panel se tratan como "no hay": así no aparecen botones sin enlace.
export const ministerios = leer('ministerios').map((m) => ({ ...m, enlace: m.enlace || undefined }))
export const vidaBendecida = leer('vida-bendecida')
export const eventos = leer('eventos').filter((e) => e.titulo && e.fecha)
export const testimonios = leer('testimonios').filter((t) => t.nombre && t.texto)
export const invitaciones = leer('invitaciones') || {}
