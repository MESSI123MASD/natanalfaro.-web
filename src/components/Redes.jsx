import { redes } from '../data/site'
import Icono from './Icono'
import './Redes.css'

// Todas sus redes, con su usuario, a un clic
export default function Redes() {
  if (redes.length === 0) return null

  return (
    <section id="redes" className="seccion redes">
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--centro revelar">
          <span className="seccion__etiqueta">Conéctate</span>
          <h2>Sígueme en redes</h2>
          <p>Mensajes, reflexiones y transmisiones en vivo cada semana.</p>
        </div>

        <ul className="redes__lista">
          {redes.map((r, i) => (
            <li key={r.nombre} className="revelar" style={{ '--retraso': `${(i % 3) * 80}ms` }}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="red">
                <span className="red__icono"><Icono nombre={r.icono} tamano={22} /></span>
                <span className="red__texto">
                  <strong>{r.nombre}</strong>
                  {r.usuario && <small>{r.usuario}</small>}
                </span>
                <Icono nombre="flecha" tamano={18} className="red__flecha" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
