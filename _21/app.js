"use strict";

if (!('Notification' in window)){
  console.log("notif no disponibles")
}

Notification.requestPermission(()=>{
  if(Notification.permission == "granted"){
    new Notification("Permiso concedido")
  }
})


