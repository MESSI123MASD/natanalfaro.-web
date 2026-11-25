// Deduce el ícono por el nombre de la red si el panel no indicó uno
export function iconoPorNombre(nombre = '') {
  const n = nombre.toLowerCase()
  if (n.includes('whats')) return 'whatsapp'
  if (n.includes('face')) return 'facebook'
  if (n.includes('insta')) return 'instagram'
  if (n.includes('you')) return 'youtube'
  if (n.includes('telegram')) return 'telegram'
  if (n.includes('spotify') || n.includes('sound') || n.includes('podcast')) return 'audio'
  if (n === 'x' || n.includes('twitter') || n.startsWith('x ')) return 'x'
  if (n.includes('correo') || n.includes('mail')) return 'correo'
  return 'web'
}

