import React from 'react'
import img1 from "../assets/imgs/img1.webp"
import img2 from "../assets/imgs/img2.webp"
import img3 from "../assets/imgs/img3.webp"
import img4 from "../assets/imgs/img4.webp"
import img5 from "../assets/imgs/img5.webp"
import ss from "../assets/sass/Carrousel.module.css"

function Carrousel() {
  return (
    <div className={ss.galeria}>
      <h3>Fotos</h3>
      <section className={ss.carrousel}>
        <img src={img1} alt="" style={{ borderBottomLeftRadius: '10px', borderTopLeftRadius: '10px' }} />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" style={{ borderBottomRightRadius: '10px', borderTopRightRadius: '10px' }} />
      </section>
        <div id='confirmar'></div>
    </div>
  )
}

export default Carrousel
