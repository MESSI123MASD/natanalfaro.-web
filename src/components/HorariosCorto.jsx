import { Link } from 'react-router-dom'
import { iglesia } from '../data/contenido'
import { t } from '../lib/idioma'
import Icono from './Icono'
import './HorariosCorto.css'

// Franja del inicio con los horarios de culto y enlace a "Visítanos"
export default function HorariosCorto() {
  const h = (iglesia.horarios || []).find((x) => x.dia && x.horas?.length)
  if (!h) return null
  return (
    <section className="horarios-corto">
      <div className="contenedor">
        <div className="horarios-corto__franja revelar">
          <div className="horarios-corto__texto">
            <span className="horarios-corto__icono"><Icono nombre="iglesia" tamano={22} /></span>
            <div>
              <strong>{t('Te esperamos cada', 'Join us every')} {h.dia.toLowerCase()}</strong>
              <span>{h.horas.join(' · ')} — Casa de Mi Gloria, Managua</span>
            </div>
          </div>
          <Link to="/visitanos" className="boton boton--secundario">
            {t('Cómo llegar', 'Get directions')} <Icono nombre="flecha" tamano={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
