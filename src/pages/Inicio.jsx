import Hero from '../components/Hero'
import Biografia from '../components/Biografia'
import Ministerios from '../components/Ministerios'
import VidaBendecida from '../components/VidaBendecida'
import Eventos from '../components/Eventos'
import Testimonios from '../components/Testimonios'
import useTituloPagina from '../hooks/useTituloPagina'

export default function Inicio() {
  useTituloPagina()

  return (
    <>
      <Hero />
      <Biografia />
      <Ministerios />
      <VidaBendecida />
      <Eventos />
      <Testimonios />
    </>
  )
}
