import React, { useState } from 'react'
import ss from "../assets/sass/DondeCuando.module.css"
import mapPreview from "../assets/imgs/map-preview.webp"

function DondeCuando() {

  function showMap() {
    var map = document.getElementById('map')
    var btn = document.getElementById('verMapa')
    var closeBtn = document.getElementById('close')

    if (btn.innerText === 'Ver mapa') {
      map.style.display = 'block'
      document.body.style.overflow = 'hidden'
    }

    closeBtn.addEventListener('click', () => {
      map.style.display = 'none'
      document.body.style.overflow = 'auto'
    })
  }

  return (
    <div className={ss.dondeCuando} id='itinerario'>
      <h3>Itinerario</h3>
      <div className={ss.main}>
        <img src={mapPreview} alt="campo-de-dios-iepe" width="100%" className={ss.img} style={{ borderRadius: '8px' }} />
      </div>
      <div id='galeria'></div>
    </div>
  )
}

export default DondeCuando
