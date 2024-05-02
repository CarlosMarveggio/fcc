"use strict";

const worker = new Worker("worker.js");

document.querySelector(".button").addEventListener("click",()=>ejecutarBucle())
worker.addEventListener("message",e=>{
  console.log(e.data)
})

const ejecutarBucle = ()=>{
  worker.postMessage("Script: Saluda al worker");
  setTimeout(() => {
    worker.terminate();
    console.log("worker cerrado");
  }, 5000);
}

