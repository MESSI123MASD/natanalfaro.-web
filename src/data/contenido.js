// Textos de las secciones del inicio. Se editan en src/content/*.json
// (o desde el panel de edición en https://app.pagescms.org).
import inicio from '../content/inicio.json'
import listaMinisterios from '../content/ministerios.json'
import vida from '../content/vida-bendecida.json'
import listaEventos from '../content/eventos.json'
import listaTestimonios from '../content/testimonios.json'

export const portada = inicio.portada
export const biografia = inicio.biografia
export const mision = inicio.mision

// Campos vacíos del panel se tratan como "no hay": así no aparecen botones sin enlace.
export const ministerios = listaMinisterios.map((m) => ({ ...m, enlace: m.enlace || undefined }))
export const vidaBendecida = vida
export const eventos = listaEventos.filter((e) => e.titulo && e.fecha)
export const testimonios = listaTestimonios.filter((t) => t.nombre && t.texto)
