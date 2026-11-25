// Datos generales del sitio. Los textos se editan en src/content/sitio.json
// (o desde el panel de edición). Aquí solo se preparan para los componentes.
import { leer } from '../lib/contenido'
import { iconoPorNombre } from '../lib/iconos'
import { t } from '../lib/idioma'

const datos = leer('sitio')

export const sitio = {
  nombre: datos.nombre,
  lema: datos.lema,
  descripcion: datos.descripcion || '',
  url: 'https://natanalfaro.org',
}

const soloDigitos = (t) => String(t || '').replace(/\D/g, '')

export const contacto = {
  direccion: datos.contacto.direccion,
  telefono: datos.contacto.telefono,
  telefonoLink: `tel:+${soloDigitos(datos.contacto.telefono)}`,
  whatsapp: `https://wa.me/${soloDigitos(datos.contacto.whatsapp)}`,
  email: datos.contacto.email,
}

// Redes: el panel puede indicar el ícono; si no, se deduce del nombre.
// "destacada" = aparece en los accesos rápidos (portada y botón flotante).
export const redes = (datos.redes || [])
  .filter((r) => r.nombre && r.url)
  .map((r) => ({ ...r, icono: r.icono || iconoPorNombre(r.nombre) }))

export const redesDestacadas = redes.filter((r) => r.destacada)

// Enlaces del menú (los maneja desarrollo): cada uno es una página.
export const navegacion = [
  { texto: t('Biografía', 'About'), ruta: '/biografia' },
  { texto: t('Mensajes', 'Messages'), ruta: '/mensajes' },
  { texto: t('Ministerios', 'Ministries'), ruta: '/ministerios' },
  { texto: t('Invitaciones', 'Invitations'), ruta: '/invitaciones' },
  { texto: t('Visítanos', 'Visit us'), ruta: '/visitanos' },
  { texto: 'Vida Bendecida', ruta: '/vida-bendecida' },
  { texto: t('Ofrenda', 'Give'), ruta: '/ofrenda' },
]
