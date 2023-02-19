import React from 'react'
import ss from "../assets/sass/Banner.module.css"

function Banner() {

  // countdown timer to a specific date
  const countDownDate = new Date("mar 10, 2023 18:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="count"
    document.getElementById("count").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, display "finalizado"
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("count").innerHTML = "Finalizado";
    }
  });

  return (
    <div className={ss.banner}>
      <div className={ss.img}></div>
      <div className={ss.countdown}>
        <p className={ss.text}>¿Cuánto falta para mis XV años?</p>
        <p className={ss.count} id="count"></p>
      </div>
    </div>
  )
}

export default Banner