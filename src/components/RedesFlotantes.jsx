import { useEffect, useState } from 'react'
import { redesDestacadas } from '../data/site'
import Icono from './Icono'
import './RedesFlotantes.css'

// Botón flotante: al tocarlo muestra las redes principales. Aparece al bajar de la portada.
export default function RedesFlotantes() {
  const [visible, setVisible] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!abierto) return
    const onKey = (e) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [abierto])

  if (redesDestacadas.length === 0) return null

  return (
    <div className={`flotante ${visible || abierto ? 'is-visible' : ''} ${abierto ? 'is-abierto' : ''}`}>
      <ul className="flotante__lista" id="redes-rapidas" aria-hidden={!abierto}>
        {redesDestacadas.map((r, i) => (
          <li key={r.nombre} style={{ '--i': redesDestacadas.length - i }}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flotante__red"
              tabIndex={abierto ? 0 : -1}
              onClick={() => setAbierto(false)}
            >
              <span>{r.nombre}</span>
              <Icono nombre={r.icono} tamano={20} />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="flotante__boton"
        aria-expanded={abierto}
        aria-controls="redes-rapidas"
        aria-label={abierto ? 'Cerrar redes' : 'Abrir redes sociales'}
        onClick={() => setAbierto(!abierto)}
      >
        <span className="flotante__mas" aria-hidden="true" />
        <span className="flotante__etiqueta">Redes</span>
      </button>
    </div>
  )
}
