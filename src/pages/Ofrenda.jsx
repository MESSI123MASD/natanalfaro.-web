import { ofrenda } from '../data/ofrenda'
import { contacto } from '../data/site'
import useTituloPagina from '../hooks/useTituloPagina'
import './Ofrenda.css'

export default function Ofrenda() {
  useTituloPagina(ofrenda.titulo)
  const sinMetodos = ofrenda.cuentas.length === 0 && ofrenda.enLinea.length === 0

  return (
    <section className="seccion">
      <div className="contenedor ofrenda">
        <span className="seccion__etiqueta">Sembrar en la obra</span>
        <h1>{ofrenda.titulo}</h1>
        <p className="ofrenda__intro">{ofrenda.intro}</p>

        <blockquote className="ofrenda__versiculo">
          “{ofrenda.versiculo.texto}” <cite>{ofrenda.versiculo.cita}</cite>
        </blockquote>

        {ofrenda.enLinea.length > 0 && (
          <div className="ofrenda__bloque">
            <h2>En línea</h2>
            <div className="ofrenda__botones">
              {ofrenda.enLinea.map((m) => (
                <a key={m.nombre} href={m.url} target="_blank" rel="noopener noreferrer" className="boton boton--primario">
                  Ofrendar con {m.nombre}
                </a>
              ))}
            </div>
          </div>
        )}

        {ofrenda.cuentas.length > 0 && (
          <div className="ofrenda__bloque">
            <h2>Transferencia bancaria</h2>
            <div className="ofrenda__cuentas">
              {ofrenda.cuentas.map((c) => (
                <dl key={c.banco + c.cuenta} className="cuenta">
                  <dt>Banco</dt><dd>{c.banco}</dd>
                  <dt>Titular</dt><dd>{c.titular}</dd>
                  <dt>Cuenta</dt><dd>{c.cuenta}</dd>
                  <dt>Moneda</dt><dd>{c.moneda}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}

        <div className="ofrenda__bloque ofrenda__ayuda">
          <h2>{sinMetodos ? '¿Cómo ofrendar?' : '¿Tienes dudas?'}</h2>
          <p>
            {sinMetodos
              ? 'Escríbenos y con gusto te compartimos las opciones disponibles para ofrendar.'
              : 'Escríbenos y te ayudamos con tu ofrenda.'}
          </p>
          <a
            href={`${contacto.whatsapp}?text=${encodeURIComponent('Hola, quiero información para ofrendar')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="boton boton--primario"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
