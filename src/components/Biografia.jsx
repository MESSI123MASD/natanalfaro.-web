import { biografia, mision } from '../data/contenido'
import Imagen from './Imagen'
import './Biografia.css'

export default function Biografia() {
  return (
    <section id="biografia" className="seccion">
      <div className="contenedor biografia">
        <Imagen
          src={biografia.imagen}
          alt="Natán y Cristina Alfaro"
          className="biografia__imagen"
        />

        <div>
          <span className="seccion__etiqueta">Biografía</span>
          <h2>{biografia.titulo}</h2>
          {biografia.parrafos.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </div>

      <div className="contenedor">
        <blockquote className="mision">{mision}</blockquote>
      </div>
    </section>
  )
}
