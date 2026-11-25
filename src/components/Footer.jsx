import { Link } from 'react-router-dom'
import { contacto, navegacion, redes, sitio } from '../data/site'
import { t } from '../lib/idioma'
import './Footer.css'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__grid">
        <div>
          <p className="footer__nombre">{sitio.nombre}</p>
          <p className="footer__lema">{sitio.lema}</p>
        </div>

        <div>
          <h3 className="footer__titulo">{t('Páginas', 'Pages')}</h3>
          <ul className="footer__redes">
            {navegacion.map((n) => (
              <li key={n.ruta}><Link to={n.ruta}>{n.texto}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__titulo">{t('Contacto', 'Contact')}</h3>
          <address className="footer__contacto">
            <p>{contacto.direccion}</p>
            <p><a href={contacto.telefonoLink}>{contacto.telefono}</a></p>
            <p><a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
          </address>
        </div>

        <div>
          <h3 className="footer__titulo">{t('Síguenos', 'Follow us')}</h3>
          <ul className="footer__redes">
            {redes.map((red) => (
              <li key={red.nombre}>
                <a href={red.url} target="_blank" rel="noopener noreferrer">{red.nombre}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__base">
        <div className="contenedor">
          <span>© {anio} {sitio.nombre}. {t('Todos los derechos reservados.', 'All rights reserved.')}</span>
          <span className="footer__version">v{__APP_VERSION__}</span>
        </div>
      </div>
    </footer>
  )
}
