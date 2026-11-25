import Hero from '../components/Hero'
import Redes from '../components/Redes'
import Palabra from '../components/Palabra'
import Accesos from '../components/Accesos'
import Mensajes from '../components/Mensajes'
import HorariosCorto from '../components/HorariosCorto'
import Eventos from '../components/Eventos'
import Testimonios from '../components/Testimonios'
import useTituloPagina from '../hooks/useTituloPagina'
import { secciones } from '../data/contenido'

// Inicio corto: portada, redes, palabra del día, accesos a cada página, último mensaje y horarios.
// El detalle de cada tema vive en su propia página (Biografía, Mensajes, Ministerios...).
export default function Inicio() {
  useTituloPagina()

  return (
    <>
      <Hero />
      {secciones.redes && <Redes />}
      {secciones.palabra && <Palabra />}
      <Accesos />
      {secciones.mensajes && <Mensajes />}
      {secciones.eventos && <Eventos />}
      {secciones.horarios && <HorariosCorto />}
      {secciones.testimonios && <Testimonios />}
    </>
  )
}
