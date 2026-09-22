// Datos generales del sitio. Editar aquí cambia header, footer y contacto.

export const sitio = {
  nombre: 'Pastor Natán Alfaro',
  lema: 'Hoy es el primer día del resto de tu vida bendecida',
  url: 'https://natanalfaro.org',
}

export const contacto = {
  direccion: 'Rotonda Universitaria 200 mts. abajo, Managua, Nicaragua',
  telefono: '+505 8881 8881',
  telefonoLink: 'tel:+50588818881',
  whatsapp: 'https://wa.me/50588818881',
  email: 'pastor@casademigloria.org',
}

export const redes = [
  { nombre: 'Facebook', url: 'https://www.facebook.com/PastorNatanAlfaro' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/natanalfaro/' },
  { nombre: 'YouTube', url: 'https://www.youtube.com/channel/UCtJO0gSt8SCOkijxKb264Cg' },
  { nombre: 'X (Twitter)', url: 'https://twitter.com/NatanAlfaro' },
  { nombre: 'Spotify', url: 'https://open.spotify.com/show/6vP6JmsFBu0Xil3Nv8FmMA' },
  { nombre: 'SoundCloud', url: 'https://soundcloud.com/pastor-nat-n-alfaro' },
]

// Enlaces del menú. Los que empiezan con "/#" llevan a una sección del inicio.
export const navegacion = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Biografía', ruta: '/#biografia' },
  { texto: 'Ministerios', ruta: '/#ministerios' },
  { texto: 'Vida Bendecida', ruta: '/#vida-bendecida' },
  { texto: 'Ofrenda y Diezmo', ruta: '/ofrenda' },
]
