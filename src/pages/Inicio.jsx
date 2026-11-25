import Hero from '../components/Hero'
import Palabra from '../components/Palabra'
import Trayectoria from '../components/Trayectoria'
import Radio from '../components/Radio'
import Matrimonios from '../components/Matrimonios'
import Horarios from '../components/Horarios'
import Redes from '../components/Redes'
import Mensajes from '../components/Mensajes'
import Biografia from '../components/Biografia'
import Ministerios from '../components/Ministerios'
import Invitaciones from '../components/Invitaciones'
import VidaBendecida from '../components/VidaBendecida'
import Eventos from '../components/Eventos'
import Testimonios from '../components/Testimonios'
import useTituloPagina from '../hooks/useTituloPagina'
import { secciones } from '../data/contenido'

export default function Inicio() {
  useTituloPagina()

  return (
    <>
      <Hero />
      {secciones.redes && <Redes />}
      {secciones.palabra && <Palabra />}
      {secciones.biografia && <Biografia />}
      {secciones.trayectoria && <Trayectoria />}
      {secciones.mensajes && <Mensajes />}
      {secciones.radio && <Radio />}
      {secciones.ministerios && <Ministerios />}
      {secciones.matrimonios && <Matrimonios />}
      {secciones.invitaciones && <Invitaciones />}
      {secciones.horarios && <Horarios />}
      {secciones.vida_bendecida && <VidaBendecida />}
      {secciones.eventos && <Eventos />}
      {secciones.testimonios && <Testimonios />}
    </>
  )
}
