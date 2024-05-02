"use strict";

if(navigator.serviceWorker){
  navigator.serviceWorker.register("sw.js")
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("Hola!!"));

navigator.serviceWorker.addEventListener("message",e=>{
  console.log("Se recibio mensaje del service worker: ");
  console.log(e.data);
})


