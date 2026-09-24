import Hero from '../components/Hero'
import Biografia from '../components/Biografia'
import Ministerios from '../components/Ministerios'
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
      {secciones.biografia && <Biografia />}
      {secciones.ministerios && <Ministerios />}
      {secciones.vida_bendecida && <VidaBendecida />}
      {secciones.eventos && <Eventos />}
      {secciones.testimonios && <Testimonios />}
    </>
  )
}
