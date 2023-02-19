import React from 'react'
import ss from "../assets/sass/Invitacion.module.css"

function Invitacion(names) {
  return (
    <div className={ss.invitacion}>
      <h1>Invitación válida para:</h1>
      <h2>{names.names}</h2>
    </div>
  )
}

export default Invitacion