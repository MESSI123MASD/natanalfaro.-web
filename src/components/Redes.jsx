import { redes } from '../data/site'
import Icono from './Icono'
import { t } from '../lib/idioma'
import './Redes.css'

// Todas sus redes, con su usuario, a un clic
export default function Redes() {
  if (redes.length === 0) return null

  return (
    <section id="redes" className="seccion redes">
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--centro revelar">
          <span className="seccion__etiqueta">{t('Conéctate', 'Connect')}</span>
          <h2>{t('Sígueme en redes', 'Follow me')}</h2>
          <p>{t('Mensajes, reflexiones y transmisiones en vivo cada semana.', 'Messages, reflections and live streams every week.')}</p>
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
