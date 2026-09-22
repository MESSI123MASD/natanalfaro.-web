import { vidaBendecida } from '../data/contenido'
import './VidaBendecida.css'

export default function VidaBendecida() {
  return (
    <section id="vida-bendecida" className="seccion vida">
      <span className="vida__brillo" aria-hidden="true" />
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--centro revelar">
          <span className="seccion__etiqueta">Vida Bendecida</span>
          <h2>Una palabra para tu día</h2>
          <p>{vidaBendecida.intro}</p>
        </div>

        <div className="vida__canales">
          {vidaBendecida.canales.map((c, i) => (
            <div key={c.nombre} className="vida__canal revelar" style={{ '--retraso': `${i * 100}ms` }}>
              <h3>{c.nombre}</h3>
              <p>{c.texto}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="boton boton--secundario">
                {c.boton}
              </a>
            </div>
          ))}
        </div>

        <p className="vida__redes revelar">
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
