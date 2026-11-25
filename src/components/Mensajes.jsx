import { useState } from 'react'
import { mensaje } from '../data/contenido'
import { redes } from '../data/site'
import Icono from './Icono'
import { t } from '../lib/idioma'
import './Mensajes.css'

// Último mensaje del canal de YouTube. El video se carga solo al pulsar "reproducir",
// así la página abre rápido y no consume datos de más en el celular.
export default function Mensajes() {
  const [activo, setActivo] = useState(false)
  if (!mensaje.youtube_lista) return null

  const youtube = redes.find((r) => r.icono === 'youtube')
  const src = `https://www.youtube-nocookie.com/embed/videoseries?list=${mensaje.youtube_lista}&autoplay=1&rel=0`

  return (
    <section id="mensajes" className="seccion seccion--alt">
      <div className="contenedor mensajes">
        <div className="mensajes__texto revelar">
          <span className="seccion__etiqueta">{mensaje.titulo || 'Mensajes'}</span>
          <h2>{t('Escucha el mensaje más reciente', 'Watch the latest message')}</h2>
          <p>{mensaje.texto}</p>
          {youtube && (
            <a href={youtube.url} target="_blank" rel="noopener noreferrer" className="boton boton--primario">
              <Icono nombre="youtube" tamano={18} /> {t('Suscribirme en YouTube', 'Subscribe on YouTube')}
            </a>
          )}
        </div>

        <div className="mensajes__video revelar" style={{ '--retraso': '120ms' }}>
          {activo ? (
            <iframe
              src={src}
              title="Últimos mensajes del Pastor Natán Alfaro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button type="button" className="mensajes__portada" onClick={() => setActivo(true)}>
              <span className="mensajes__play"><Icono nombre="play" tamano={30} /></span>
              <span className="mensajes__leyenda">{t('Reproducir los últimos mensajes', 'Play the latest messages')}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
