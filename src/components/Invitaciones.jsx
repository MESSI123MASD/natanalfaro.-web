import { useState } from 'react'
import { invitaciones as datos } from '../data/contenido'
import { contacto } from '../data/site'
import Icono from './Icono'
import './Invitaciones.css'

const TIPOS_EVENTO = ['Conferencia o congreso', 'Culto o servicio especial', 'Capacitación de líderes', 'Entrevista o medios', 'Otro']

// Invitaciones y agenda: el formulario arma el mensaje y lo abre en WhatsApp (o correo).
// No guarda nada en el sitio: la invitación llega directo al equipo del pastor.
export default function Invitaciones() {
  const [f, setF] = useState({ nombre: '', organizacion: '', tipo: TIPOS_EVENTO[0], fecha: '', lugar: '', detalles: '' })
  const [aviso, setAviso] = useState('')
  const cambiar = (e) => setF({ ...f, [e.target.name]: e.target.value })

  const whatsapp = String(datos.whatsapp || contacto.whatsapp).replace(/\D/g, '')
  const email = datos.email || contacto.email

  const mensaje = () =>
    [
      'Hola, quiero invitar al Pastor Natán Alfaro.',
      '',
      `Nombre: ${f.nombre}`,
      `Iglesia u organización: ${f.organizacion}`,
      `Tipo de evento: ${f.tipo}`,
      `Fecha: ${f.fecha ? new Date(f.fecha + 'T12:00').toLocaleDateString('es-NI', { dateStyle: 'long' }) : 'Por definir'}`,
      `Ciudad y país: ${f.lugar}`,
      f.detalles.trim() ? `Detalles: ${f.detalles.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n')

  const valido = f.nombre.trim() && f.organizacion.trim() && f.lugar.trim()

  const enviar = (e) => {
    e.preventDefault()
    if (!valido) return setAviso('Completa tu nombre, la organización y la ciudad.')
    setAviso('')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje())}`, '_blank', 'noopener')
  }

  const porCorreo = () => {
    if (!valido) return setAviso('Completa tu nombre, la organización y la ciudad.')
    setAviso('')
    const asunto = `Invitación para el Pastor Natán Alfaro — ${f.organizacion}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje())}`
  }

  return (
    <section id="invitaciones" className="seccion invitaciones">
      <div className="invitaciones__brillo" aria-hidden="true" />
      <div className="contenedor invitaciones__grid">
        <div className="invitaciones__info revelar">
          <span className="seccion__etiqueta">Invitaciones y agenda</span>
          <h2>{datos.titulo || 'Invita al Pastor Natán'}</h2>
          <p className="invitaciones__texto">{datos.texto}</p>

          <ul className="invitaciones__tipos">
            {(datos.tipos || []).map((t, i) => (
              <li key={t.nombre} className="revelar" style={{ '--retraso': `${i * 80}ms` }}>
                <span className="invitaciones__icono"><Icono nombre={t.icono || 'calendario'} tamano={20} /></span>
                <span>
                  <strong>{t.nombre}</strong>
                  <small>{t.texto}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="invitaciones__form revelar" style={{ '--retraso': '120ms' }} onSubmit={enviar} noValidate>
          <div className="invitaciones__cabecera">
            <Icono nombre="calendario" tamano={22} />
            <div>
              <strong>Solicitar fecha</strong>
              <small>Te respondemos por WhatsApp o correo</small>
            </div>
          </div>

          <div className="campos">
            <label className="campo">
              <span>Tu nombre *</span>
              <input name="nombre" value={f.nombre} onChange={cambiar} autoComplete="name" required />
            </label>
            <label className="campo">
              <span>Iglesia u organización *</span>
              <input name="organizacion" value={f.organizacion} onChange={cambiar} autoComplete="organization" required />
            </label>
            <label className="campo">
              <span>Tipo de evento</span>
              <select name="tipo" value={f.tipo} onChange={cambiar}>
                {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="campo">
              <span>Fecha tentativa</span>
              <input type="date" name="fecha" value={f.fecha} onChange={cambiar} />
            </label>
            <label className="campo campo--ancho">
              <span>Ciudad y país *</span>
              <input name="lugar" value={f.lugar} onChange={cambiar} placeholder="Ej. León, Nicaragua" required />
            </label>
            <label className="campo campo--ancho">
              <span>Detalles del evento</span>
              <textarea name="detalles" value={f.detalles} onChange={cambiar} rows={3} placeholder="Tema, asistentes esperados, horario..." />
            </label>
          </div>

          {aviso && <p className="invitaciones__aviso" role="alert">{aviso}</p>}

          <div className="invitaciones__acciones">
            <button type="submit" className="boton boton--primario">
              <Icono nombre="whatsapp" tamano={18} /> Enviar por WhatsApp
            </button>
            <button type="button" className="boton boton--secundario" onClick={porCorreo}>
              <Icono nombre="correo" tamano={18} /> Por correo
            </button>
          </div>
          {datos.nota && <p className="invitaciones__nota">{datos.nota}</p>}
        </form>
      </div>
    </section>
  )
}
