import { useState } from 'react'
import { iglesia } from '../data/contenido'
import { contacto } from '../data/site'
import { t } from '../lib/idioma'
import Icono from './Icono'
import './Horarios.css'

// Visítanos: horarios de culto, dirección y mapa (el mapa se carga al tocarlo)
export default function Horarios() {
  const [mapa, setMapa] = useState(false)
  const horarios = (iglesia.horarios || []).filter((h) => h.dia && h.horas?.length)
  if (horarios.length === 0) return null

  const busqueda = encodeURIComponent(iglesia.mapa || iglesia.direccion || 'Casa de Mi Gloria, Managua')
  const comoLlegar = `https://www.google.com/maps/search/?api=1&query=${busqueda}`

  return (
    <section id="visitanos" className="seccion seccion--alt">
      <div className="contenedor visitanos">
        <div className="revelar">
          <span className="seccion__etiqueta">{t('Visítanos', 'Visit us')}</span>
          <h2>{iglesia.titulo}</h2>
          <p className="visitanos__texto">{iglesia.texto}</p>

          {horarios.map((h) => (
            <div key={h.dia} className="horario">
              <div className="horario__dia">
                <strong>{h.dia}</strong>
                {h.nota && <small>{h.nota}</small>}
              </div>
              <ul className="horario__horas">
                {h.horas.map((hora) => <li key={hora}>{hora}</li>)}
              </ul>
            </div>
          ))}

          {iglesia.direccion && (
            <p className="visitanos__direccion">
              <Icono nombre="ubicacion" tamano={18} /> {iglesia.direccion}
            </p>
          )}

          <div className="visitanos__acciones">
            <a href={comoLlegar} target="_blank" rel="noopener noreferrer" className="boton boton--primario">
              {t('Cómo llegar', 'Get directions')}
            </a>
            <a
              href={`${contacto.whatsapp}?text=${encodeURIComponent(t('Hola, quiero visitar Casa de Mi Gloria.', 'Hello, I would like to visit Casa de Mi Gloria.'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="boton boton--secundario"
            >
              <Icono nombre="whatsapp" tamano={18} /> {t('Escríbenos', 'Message us')}
            </a>
          </div>
        </div>

        <div className="visitanos__mapa revelar" style={{ '--retraso': '120ms' }}>
          {mapa ? (
            <iframe
              title={t('Mapa de Casa de Mi Gloria', 'Map of Casa de Mi Gloria')}
              src={`https://maps.google.com/maps?q=${busqueda}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <button type="button" className="visitanos__ver-mapa" onClick={() => setMapa(true)}>
              <span className="visitanos__pin" aria-hidden="true" />
              <span>{t('Ver el mapa', 'Show the map')}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
