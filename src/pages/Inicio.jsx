import Hero from '../components/Hero'
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
      {secciones.biografia && <Biografia />}
      {secciones.mensajes && <Mensajes />}
      {secciones.ministerios && <Ministerios />}
      {secciones.invitaciones && <Invitaciones />}
      {secciones.vida_bendecida && <VidaBendecida />}
      {secciones.eventos && <Eventos />}
      {secciones.testimonios && <Testimonios />}
    </>
  )
}
