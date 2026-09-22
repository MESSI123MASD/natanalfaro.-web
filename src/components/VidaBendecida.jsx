import { vidaBendecida } from '../data/contenido'
import './VidaBendecida.css'

export default function VidaBendecida() {
  return (
    <section id="vida-bendecida" className="seccion vida">
      <div className="contenedor">
        <div className="seccion__encabezado">
          <span className="seccion__etiqueta">Vida Bendecida</span>
          <h2 className="vida__titulo">Una palabra para tu día</h2>
          <p>{vidaBendecida.intro}</p>
        </div>

        <div className="vida__canales">
          {vidaBendecida.canales.map((c) => (
            <div key={c.nombre} className="vida__canal">
              <h3>{c.nombre}</h3>
              <p>{c.texto}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="boton boton--primario">
                {c.boton}
              </a>
            </div>
          ))}
        </div>

        <p className="vida__redes">
          También en:{' '}
          {vidaBendecida.redes.map((r, i) => (
            <span key={r.nombre}>
              <a href={r.url} target="_blank" rel="noopener noreferrer">{r.nombre}</a>
              {i < vidaBendecida.redes.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
