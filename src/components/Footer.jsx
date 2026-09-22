import { contacto, redes, sitio } from '../data/site'
import './Footer.css'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__grid">
        <div>
          <h3 className="footer__titulo">{sitio.nombre}</h3>
          <p className="footer__lema">{sitio.lema}</p>
        </div>

        <div>
          <h3 className="footer__titulo">Contacto</h3>
          <address className="footer__contacto">
            <p>{contacto.direccion}</p>
            <p><a href={contacto.telefonoLink}>{contacto.telefono}</a></p>
            <p><a href={`mailto:${contacto.email}`}>{contacto.email}</a></p>
          </address>
        </div>

        <div>
          <h3 className="footer__titulo">Síguenos</h3>
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
        <div className="contenedor">© {anio} {sitio.nombre}. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
