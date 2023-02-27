import { useState, useEffect } from "react";
import "./assets/sass/Reset.css"
import ss from "./assets/sass/Popup.module.css"
import "./assets/sass/App.css"
import music from "./assets/music/Promises.mp3"
//components
import Navbar from './Components/Navbar';
import Banner from "./Components/Banner";
import Invitacion from "./Components/Invitacion";
import Frase from "./Components/Frase";
import DondeCuando from "./Components/DondeCuando";
import Itinerario from "./Components/Itinerario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// fontawesome
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Carrousel from "./Components/Carrousel";
import Footer from "./Components/Footer";

function App() {

  const [names, setNames] = useState("");
  const [button, setButton] = useState(false);

  const handleNames = (e) => {
    setNames(e.target.value);
  }

  const handleButton = () => {
    setButton(!button);
  }

  //convert the first letter of each word to uppercase, if the word begins with an ñ, it is converted too
  if (names.length >= 5) {
    var namesToUpperCase = names.toLowerCase().replace(/(^|\s)[a-z\u00C0-\u00FF]/g, l => l.toUpperCase());
  }

  //if the page is being executed on a desktop, show an alert
  useEffect(() => {
    if (window.innerWidth > 768) {
      alert("¡Hola! Te recomiendo que ingreses desde un dispositivo móvil para una mejor experiencia. ¡Gracias!")
    }
  }, [])

  if (!button) {
    return (
      <div className={ss.popup}>
        <div className={ss.popup__content}>
          <h1>¡Bienvenidos a la invitación de mi cumpleaños!</h1>
          <h2>Por favor ingresá tu nombre y apellido para continuar</h2>
          <form className={ss.popup__form}>
            <input type="text" placeholder="Nombre y apellido" onChange={handleNames} maxLength="30" minLength="3" className={ss.form__input} />
            {
              // if all validations are correct, the button is enabled
              names.length >= 5 && names.match(/^[a-zA-Z\s\u00C0-\u00FF]*$/) ? <button className={ss.form__button} onClick={handleButton}>Continuar</button> : <button className={ss.form__button} disabled>Continuar</button>
            }
          </form>
          <div className={ss.popup__content__errors}>
            {
              //if the input is not empty validate if only contains letters
              names.length < 5 ? <p className={ss.error__letters}>*Ingresá solo letras</p> : names.match(/^[a-zA-Z\s\u00C0-\u00FF]*$/) ? <p className={ss.good__letters}>*Ingresá solo letras</p> : <p className={ss.error__letters}>*Ingresá solo letras</p>
            }
            {
              //validate if the input is empty
              names === "" ? <p className={ss.error__names}>*Ingresá tu nombre y apellido</p> : <p className={ss.good__names}>*Ingresá tu nombre y apellido</p>
            }
            {
              //validate if the input has less than 3 characters
              names.length < 5 ? <p className={ss.error__minChr}>*Ingresá al menos 5 caracteres</p> : <p className={ss.good__minChr}>*Ingresá al menos 5 caracteres</p>
            }
          </div>
        </div>
      </div>
    );
  } else {
    var audio = new Audio(music)
    audio.loop = true;
    audio.play();
    audio.volume = 0.2
    const toggleVolume = () => {
      var btnUp = document.getElementById("btnUp");
      var btnMute = document.getElementById("btnMute");

      if (btnUp.style.display === "block") {
        btnUp.style.display = "none";
        btnMute.style.display = "block";
        audio.muted = true;
      } else {
        btnUp.style.display = "block";
        btnMute.style.display = "none";
        audio.muted = false;
      }
    }
    var text = `Hola! Soy ${namesToUpperCase} y quiero confirmar mi asistencia al cumpleaños de Ana.`
    return (
      <div id="inicio" className={ss.main}>
        <Navbar />
        <Banner />
        <Frase />
        <DondeCuando />
        <Itinerario />
        <Carrousel />
        <Invitacion names={namesToUpperCase} />
        <Footer names={namesToUpperCase} text={text} />
        <button className="volumeUp volume" id="btnUp" style={{ display: "block" }} onClick={toggleVolume}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
        <button className="volumeMute volume" id="btnMute" style={{ display: "none" }} onClick={toggleVolume}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </button>
      </div>
    )
  }
}

export default App;