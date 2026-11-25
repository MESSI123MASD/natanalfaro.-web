import { matrimonios } from '../data/contenido'
import { contacto } from '../data/site'
import { enIngles, t } from '../lib/idioma'
import Icono from './Icono'
import './Matrimonios.css'

const fecha = (f) =>
  new Date(`${f}T12:00:00`).toLocaleDateString(enIngles ? 'en-US' : 'es-NI', { day: 'numeric', month: 'long', year: 'numeric' })

// Congreso Enamorados y Defensores del Pacto
export default function Matrimonios() {
  if (matrimonios.ministerios.length === 0) return null
  const hoy = new Date().toISOString().slice(0, 10)

  return (
    <section id="matrimonios" className="seccion matrimonios">
      <div className="contenedor">
        <div className="seccion__encabezado seccion__encabezado--centro revelar">
          <span className="seccion__etiqueta">{t('Matrimonios', 'Marriage')}</span>
          <h2>{matrimonios.titulo}</h2>
          <p>{matrimonios.texto}</p>
        </div>

        <div className="matrimonios__grid">
          {matrimonios.ministerios.map((m, i) => {
            const proxima = m.fecha && m.fecha >= hoy
            const texto = t(`Hola, quiero información sobre ${m.nombre}.`, `Hello, I would like information about ${m.nombre}.`)
            return (
              <article key={m.nombre} className="pareja revelar" style={{ '--retraso': `${i * 120}ms` }}>
                <span className="pareja__anillos" aria-hidden="true"><span /><span /></span>
                <h3>{m.nombre}</h3>
                <p>{m.texto}</p>
                {proxima && (
                  <p className="pareja__fecha">
                    <Icono nombre="calendario" tamano={18} />
                    {fecha(m.fecha)}
                    {m.lugar && ` · ${m.lugar}`}
                  </p>
                )}
                <a
                  href={`${contacto.whatsapp}?text=${encodeURIComponent(texto)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="boton boton--secundario"
                >
                  <Icono nombre="whatsapp" tamano={18} /> {m.boton || t('Más información', 'More information')}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
