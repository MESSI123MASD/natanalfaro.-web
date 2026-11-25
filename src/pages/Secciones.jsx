// Páginas internas: cada una junta las secciones de un tema.
import Biografia from '../components/Biografia'
import Trayectoria from '../components/Trayectoria'
import Mensajes from '../components/Mensajes'
import Radio from '../components/Radio'
import Ministerios from '../components/Ministerios'
import Matrimonios from '../components/Matrimonios'
import Invitaciones from '../components/Invitaciones'
import Horarios from '../components/Horarios'
import VidaBendecida from '../components/VidaBendecida'
import Testimonios from '../components/Testimonios'
import useTituloPagina from '../hooks/useTituloPagina'
import { secciones } from '../data/contenido'
import { t } from '../lib/idioma'

function Pagina({ titulo, children }) {
  useTituloPagina(titulo)
  return <div className="pagina-secciones">{children}</div>
}

export const PaginaBiografia = () => (
  <Pagina titulo={t('Biografía', 'About')}>
    <Biografia />
    {secciones.trayectoria && <Trayectoria />}
    {secciones.testimonios && <Testimonios />}
  </Pagina>
)

export const PaginaMensajes = () => (
  <Pagina titulo={t('Mensajes', 'Messages')}>
    <Mensajes />
    {secciones.radio && <Radio />}
  </Pagina>
)

export const PaginaMinisterios = () => (
  <Pagina titulo={t('Ministerios', 'Ministries')}>
    <Ministerios />
    {secciones.matrimonios && <Matrimonios />}
  </Pagina>
)

export const PaginaInvitaciones = () => (
  <Pagina titulo={t('Invitaciones y agenda', 'Invitations')}>
    <Invitaciones />
    {secciones.trayectoria && <Trayectoria />}
  </Pagina>
)

export const PaginaVisitanos = () => (
  <Pagina titulo={t('Visítanos', 'Visit us')}>
    <Horarios />
  </Pagina>
)

export const PaginaVidaBendecida = () => (
  <Pagina titulo="Vida Bendecida">
    <VidaBendecida />
  </Pagina>
)
