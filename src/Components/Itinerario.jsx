import React from 'react'
import ss from "../assets/sass/Itinerario.module.css"

function Itinerario() {

  return (
    <div className={ss.main}>
      <h3>Itinerario</h3>
      <div className={ss.card}>
        <div className={ss.info}></div>
      </div>
      <div id='galeria'></div>
    </div>
  )
}

export default Itinerario
