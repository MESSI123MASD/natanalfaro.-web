import { useState } from 'react'
import { invitaciones as datos } from '../data/contenido'
import { contacto } from '../data/site'
import Icono from './Icono'
import { enIngles, t } from '../lib/idioma'
import './Invitaciones.css'

const TIPOS_EVENTO = enIngles
  ? ['Conference or congress', 'Service or special event', 'Leadership training', 'Interview or media', 'Other']
  : ['Conferencia o congreso', 'Culto o servicio especial', 'Capacitación de líderes', 'Entrevista o medios', 'Otro']

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
      t('Hola, quiero invitar al Pastor Natán Alfaro.', 'Hello, I would like to invite Pastor Natán Alfaro.'),
      '',
      `${t('Nombre', 'Name')}: ${f.nombre}`,
      `${t('Iglesia u organización', 'Church or organization')}: ${f.organizacion}`,
      `${t('Tipo de evento', 'Event type')}: ${f.tipo}`,
      `${t('Fecha', 'Date')}: ${f.fecha ? new Date(f.fecha + 'T12:00').toLocaleDateString(t('es-NI', 'en-US'), { dateStyle: 'long' }) : t('Por definir', 'To be defined')}`,
      `${t('Ciudad y país', 'City and country')}: ${f.lugar}`,
      f.detalles.trim() ? `${t('Detalles', 'Details')}: ${f.detalles.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join('\n')

  const valido = f.nombre.trim() && f.organizacion.trim() && f.lugar.trim()

  const enviar = (e) => {
    e.preventDefault()
    if (!valido) return setAviso(t('Completa tu nombre, la organización y la ciudad.', 'Please fill in your name, organization and city.'))
    setAviso('')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje())}`, '_blank', 'noopener')
  }

  const porCorreo = () => {
    if (!valido) return setAviso(t('Completa tu nombre, la organización y la ciudad.', 'Please fill in your name, organization and city.'))
    setAviso('')
    const asunto = `${t('Invitación para el Pastor Natán Alfaro', 'Invitation for Pastor Natán Alfaro')} — ${f.organizacion}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje())}`
  }

  return (
    <section id="invitaciones" className="seccion invitaciones">
      <div className="invitaciones__brillo" aria-hidden="true" />
      <div className="contenedor invitaciones__grid">
        <div className="invitaciones__info revelar">
          <span className="seccion__etiqueta">{t('Invitaciones y agenda', 'Invitations and schedule')}</span>
          <h2>{datos.titulo || t('Invita al Pastor Natán', 'Invite Pastor Natán')}</h2>
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
              <strong>{t('Solicitar fecha', 'Request a date')}</strong>
              <small>{t('Te respondemos por WhatsApp o correo', 'We will reply by WhatsApp or email')}</small>
            </div>
          </div>

          <div className="campos">
            <label className="campo">
              <span>{t('Tu nombre', 'Your name')} *</span>
              <input name="nombre" value={f.nombre} onChange={cambiar} autoComplete="name" required />
            </label>
            <label className="campo">
              <span>{t('Iglesia u organización', 'Church or organization')} *</span>
              <input name="organizacion" value={f.organizacion} onChange={cambiar} autoComplete="organization" required />
            </label>
            <label className="campo">
              <span>{t('Tipo de evento', 'Event type')}</span>
              <select name="tipo" value={f.tipo} onChange={cambiar}>
                {TIPOS_EVENTO.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label className="campo">
              <span>{t('Fecha tentativa', 'Tentative date')}</span>
              <input type="date" name="fecha" value={f.fecha} onChange={cambiar} />
            </label>
            <label className="campo campo--ancho">
              <span>{t('Ciudad y país', 'City and country')} *</span>
              <input name="lugar" value={f.lugar} onChange={cambiar} placeholder={t('Ej. León, Nicaragua', 'e.g. Dallas, Texas')} required />
            </label>
            <label className="campo campo--ancho">
              <span>{t('Detalles del evento', 'Event details')}</span>
              <textarea name="detalles" value={f.detalles} onChange={cambiar} rows={3} placeholder={t('Tema, asistentes esperados, horario...', 'Topic, expected attendance, schedule...')} />
            </label>
          </div>

          {aviso && <p className="invitaciones__aviso" role="alert">{aviso}</p>}

          <div className="invitaciones__acciones">
            <button type="submit" className="boton boton--primario">
              <Icono nombre="whatsapp" tamano={18} /> {t('Enviar por WhatsApp', 'Send via WhatsApp')}
            </button>
            <button type="button" className="boton boton--secundario" onClick={porCorreo}>
              <Icono nombre="correo" tamano={18} /> {t('Por correo', 'By email')}
            </button>
          </div>
          {datos.nota && <p className="invitaciones__nota">{datos.nota}</p>}
        </form>
      </div>
    </section>
  )
}
