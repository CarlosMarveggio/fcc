"use strict";

const cajas = document.querySelectorAll(".caja");

const verifyVisibility = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) console.log("Se ve la caja: ",entry.target.textContent);
  }
}

const options = {
  //rootMargin: "30px",      // para ver antes de tiempo o una vez que ya se ve un poco
  threshold: [1]               // trabaja con las medidas, si cuenta cuando se ve entera o una parte
}

const observer = new IntersectionObserver(verifyVisibility,options);

for (const caja of cajas) {
  observer.observe(caja)
}


