import { eventos } from '../data/contenido'
import { t } from '../lib/idioma'
import './Eventos.css'

const formatoFecha = new Intl.DateTimeFormat(t('es-NI', 'en-US'), { day: 'numeric', month: 'long', year: 'numeric' })

export default function Eventos() {
  // Solo eventos de hoy en adelante, ordenados por fecha
  const hoy = new Date().toISOString().slice(0, 10)
  const proximos = eventos.filter((e) => e.fecha >= hoy).sort((a, b) => a.fecha.localeCompare(b.fecha))

  if (proximos.length === 0) return null

  return (
    <section id="eventos" className="seccion">
      <div className="contenedor">
        <div className="seccion__encabezado revelar">
          <span className="seccion__etiqueta">{t('Agenda', 'Schedule')}</span>
          <h2>{t('Próximos eventos', 'Upcoming events')}</h2>
        </div>

        <ul className="eventos">
          {proximos.map((e) => (
            <li key={e.titulo + e.fecha} className="evento revelar">
              <time dateTime={e.fecha} className="evento__fecha">
                {formatoFecha.format(new Date(`${e.fecha}T12:00:00`))}
              </time>
              <div>
                <h3>{e.titulo}</h3>
                {e.lugar && <p className="evento__lugar">{e.lugar}</p>}
                {e.descripcion && <p>{e.descripcion}</p>}
                {e.enlace && <a href={e.enlace}>{t('Más información', 'More information')} →</a>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
