import { useState } from 'react'
import { cambiarModo, modoActual } from '../lib/tema'
import { tema } from '../data/contenido'
import Icono from './Icono'
import './BotonModo.css'

// Botón sol/luna: cada visitante elige ver el sitio oscuro o claro (se recuerda en su navegador).
export default function BotonModo() {
  const [modo, setModo] = useState(modoActual)
  if (tema.boton_modo === false) return null

  const siguiente = modo === 'oscuro' ? 'claro' : 'oscuro'
  const alternar = () => {
    cambiarModo(siguiente)
    setModo(siguiente)
  }

  return (
    <button
      type="button"
      className="boton-modo"
      onClick={alternar}
      aria-label={siguiente === 'claro' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={siguiente === 'claro' ? 'Modo claro' : 'Modo oscuro'}
    >
      <span key={modo} className="boton-modo__icono">
        <Icono nombre={modo === 'oscuro' ? 'sol' : 'luna'} tamano={20} />
      </span>
    </button>
  )
}
