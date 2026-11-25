import { useEffect, useState } from 'react'
import { iglesia } from '../data/contenido'
import { estaEnVivo } from '../lib/enVivo'
import { t } from '../lib/idioma'
import './EnVivo.css'

// Franja dorada arriba de todo mientras el pastor transmite en vivo
export default function EnVivo() {
  const [vivo, setVivo] = useState(() => estaEnVivo(iglesia))
  const [cerrado, setCerrado] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setVivo(estaEnVivo(iglesia)), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const visible = vivo && !cerrado && iglesia.en_vivo?.url
  useEffect(() => {
    document.documentElement.classList.toggle('con-en-vivo', Boolean(visible))
  }, [visible])

  if (!visible) return null

  return (
    <div className="en-vivo" role="status">
      <a href={iglesia.en_vivo.url} target="_blank" rel="noopener noreferrer" className="en-vivo__enlace">
        <span className="en-vivo__punto" aria-hidden="true" />
        <strong>{t('EN VIVO', 'LIVE')}</strong>
        <span className="en-vivo__texto">{iglesia.en_vivo.texto}</span>
        <span className="en-vivo__accion">{t('Ver ahora', 'Watch now')} →</span>
      </a>
      <button type="button" className="en-vivo__cerrar" onClick={() => setCerrado(true)} aria-label={t('Cerrar aviso', 'Close')}>
        ×
      </button>
    </div>
  )
}
