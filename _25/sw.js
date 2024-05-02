self.addEventListener("install",e=>{
  console.log("instalando service worker")
})

self.addEventListener("activate",e=>{
  console.log("El service worker está activo")
})

self.addEventListener("fetch",()=>{
  console.log("service worker intercepta peticion")
})

self.addEventListener("message",e=>{
  console.log("Se recibio el mensaje del script: ");
  console.log(e.data);
  e.source.postMessage("Todo bien!")
})

