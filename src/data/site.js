// Datos generales del sitio. Los textos se editan en src/content/sitio.json
// (o desde el panel de edición). Aquí solo se preparan para los componentes.
import datos from '../content/sitio.json'

export const sitio = {
  nombre: datos.nombre,
  lema: datos.lema,
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

export const redes = datos.redes || []

// Enlaces del menú (los maneja desarrollo). Los que empiezan con "/#" llevan a una sección del inicio.
export const navegacion = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Biografía', ruta: '/#biografia' },
  { texto: 'Ministerios', ruta: '/#ministerios' },
  { texto: 'Vida Bendecida', ruta: '/#vida-bendecida' },
  { texto: 'Ofrenda y Diezmo', ruta: '/ofrenda' },
]
