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
    <div className={ss.dondeCuando}>
      <h3 id='popup'>¿Dónde?¿Cuándo?</h3>
      <div className={ss.main}>
        <div className={ss.map} id='map' style={{ display: 'none' }}>
          <div className={ss.map__card}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.489065606953!2d-60.73526098481181!3d-33.01724348090003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7adc561e3bcf1%3A0xec37ff6474a9cd4!2sCAMPO%20DE%20DIOS%20IGLESIA%20EVANGELICA%20PUEBLO%20ELEGIDO!5e0!3m2!1ses-419!2sar!4v1676815213949!5m2!1ses-419!2sar" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" title='CAMPO DE DIOS IGLESIA EVANGELICA PUEBLO ELEGIDO'></iframe>
            <div className={ss.map__footer}>
              <p className={ss.lugar}>El Campo de Dios</p>
              <div className={ss.info}>
                <p><span>Cúando:</span> 10 de Marzo de 2023 a las 18hs</p>
                <p><span>Dirección:</span> Calle Venezuela, zona rural, Soldini, Rosario, Santa Fe</p>
              </div>
              <hr />
              <button id='close'>Cerrar</button>
            </div>
          </div>
        </div>
        <h4 className={ss.title}>Recepción</h4>
        <img src={mapPreview} alt="campo-de-dios-iepe" width="100%" className={ss.img} style={{ borderRadius: '8px' }} />
        <p className={ss.lugar}>El Campo de Dios</p>
        <div className={ss.info}>
          <p><span>Cúando:</span> 10 de Marzo de 2023 a las 18hs</p>
          <p><span>Dirección:</span> Calle Venezuela, zona rural, Soldini, Rosario, Santa Fe</p>
        </div>
        <div className={ss.btns}>
          <a href='#popup' id='verMapa' onClick={showMap}>Ver mapa</a>
          <a id='itinerario' target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MmRoaTByOTAydTgxbGYxMDVkZWs1dGlzdDAgNTllZmYwMmU4NmM3M2NiNjA1NmQwMTVjM2Y3N2E3Y2M3ZTEyZWJmZTJmYzQ3NTU5NjNlMDRlZGQxNDk1NGY5ZkBn&amp;tmsrc=59eff02e86c73cb6056d015c3f77a7cc7e12ebfe2fc4755963e04edd14954f9f%40group.calendar.google.com" rel="noopener noreferrer">Añadir a mi calendario</a>
        </div>
      </div>
    </div>
  )
}

export default DondeCuando
