import React from 'react'
import ss from "../assets/sass/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import dressWoman from "../assets/imgs/dress-woman.webp"
import dressMan from "../assets/imgs/dress-man.webp"

function Footer({ names, text }) {
  return (
    <div className={ss.main}>
      <h3 className={ss.title}>Asistencia</h3>
      <div className={ss.footer}>
        <div className={ss.info}>
          <h3>Con la bendición de Dios y mis padres</h3>
          <p>quienes estarán conmigo en este gran día, invito cordialmente a <span className={ss.name}>{names}</span> a que me acompañe en este evento tan especial para mí.</p>
        </div>
        <div className={ss.dressCode}>
          <h3>Dress Code</h3>
          <img src={dressWoman} alt="dress-code-woman" />
          <span>Mujeres: Como te sientas más cómoda</span>
          <img src={dressMan} alt="dress-code-man" />
          <span>Hombres: Como te sientas más cómodo</span>
        </div>
        <div className={ss.assist}>
          <h3>Confirmar asistencia</h3>
          <p>¡Gracias por compartir este momento conmigo!</p>
          <p>¡Te espero!</p>
          <span>Favor de confirmar asistencia antes del 10 de marzo.</span>
          <p>Muchas gracias</p>
          <a href={`https://wa.me/5493413342796?text=${text}`} target="_blank" rel="noreferrer" className={ss.btn}>
            <FontAwesomeIcon icon={faWhatsapp} className={ss.icon}/> <span className={ss.span}>Click acá!</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
