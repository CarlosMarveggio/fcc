let version = "version 1";

self.addEventListener("install",e=>{
  console.log("instalando service worker")
  caches.open(version).then(cache=>{
    cache.add("index.html").then(res=>{
      console.log("Informacion caheada");
    }).catch(e=>{
      console.log(e);
    })
  })
})

self.addEventListener("activate",()=>{
  caches.keys().then(key=>{
    return Promise.all(
      key.map(cache=>{
        if (cache !== version) {
          console.log("Caché antiguo eliminado")
          return caches.delete(cache);
        }
      })
    )
  })
})

self.addEventListener("fetch",(e)=>{
  e.respondWith(async ()=>{
    const respuestaEnCache = await caches.match(e.request);
    if (respuestaEnCache) return respuestaEnCache;
    return e.request;
  });
})

// self.addEventListener("fetch",e=>{
//   e.respondWith(
//     fetch(e.request).then(res=>{
//       console.log("todo salió bien")
//     }).catch(e=>{
//       caches.match(e.request)
//     })
//   );
// })

