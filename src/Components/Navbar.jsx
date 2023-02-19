import React from 'react'
import ss from '../assets/sass/Navbar.module.css'

function Navbar() {
  return (
    <div className={ss.nav}>
      <div className={ss.items}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#donde">Dónde</a></li>
          <li><a href="#galeria">Galería</a></li>
          <li><a href="#confirmar">Confirmar Asistencia</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar