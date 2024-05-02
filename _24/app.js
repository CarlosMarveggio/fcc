"use strict";

caches.open("archivos-estaticos").then(cache => {
  console.log(cache)
  cache.addAll(["index.html","estilo.css","app.js"])
});

