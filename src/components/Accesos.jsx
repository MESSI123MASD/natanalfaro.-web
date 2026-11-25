import { Link } from 'react-router-dom'
import { t } from '../lib/idioma'
import Icono from './Icono'
import './Accesos.css'

// Tarjetas del inicio que llevan a cada página
const ACCESOS = [
  { ruta: '/biografia', icono: 'usuarios', titulo: t('Biografía', 'About'), texto: t('Su historia, su familia y más de 30 años de ministerio.', 'His story, his family and more than 30 years of ministry.') },
  { ruta: '/mensajes', icono: 'play', titulo: t('Mensajes', 'Messages'), texto: t('Prédicas en YouTube y el programa Faro del Espíritu.', 'Sermons on YouTube and the Faro del Espíritu program.') },
  { ruta: '/ministerios', icono: 'iglesia', titulo: t('Ministerios', 'Ministries'), texto: t('Iglesias, proyectos y el ministerio de matrimonios.', 'Churches, projects and the marriage ministry.') },
  { ruta: '/invitaciones', icono: 'calendario', titulo: t('Invitaciones', 'Invitations'), texto: t('Invita al pastor a tu iglesia, congreso o evento.', 'Invite the pastor to your church, congress or event.') },
  { ruta: '/visitanos', icono: 'ubicacion', titulo: t('Visítanos', 'Visit us'), texto: t('Horarios de culto y cómo llegar a Casa de Mi Gloria.', 'Service times and directions to Casa de Mi Gloria.') },
  { ruta: '/vida-bendecida', icono: 'whatsapp', titulo: 'Vida Bendecida', texto: t('Recibe una palabra cada día en tu celular.', 'Receive a word every day on your phone.') },
]

export default function Accesos() {
  return (
    <section className="seccion seccion--alt accesos">
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--centro revelar">
          <span className="seccion__etiqueta">{t('Explora', 'Explore')}</span>
          <h2>{t('Conoce más', 'Learn more')}</h2>
        </div>
        <ul className="accesos__grid">
          {ACCESOS.map((a, i) => (
            <li key={a.ruta} className="revelar" style={{ '--retraso': `${(i % 3) * 90}ms` }}>
              <Link to={a.ruta} className="acceso">
                <span className="acceso__icono"><Icono nombre={a.icono} tamano={22} /></span>
                <strong>{a.titulo}</strong>
                <span className="acceso__texto">{a.texto}</span>
                <span className="acceso__ir">{t('Entrar', 'Open')} <Icono nombre="flecha" tamano={16} /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
