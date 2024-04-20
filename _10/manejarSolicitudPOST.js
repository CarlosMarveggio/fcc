const { json } = require("stream/consumers");

function manejarSolicitudPOST(req, res) {
  const path = req.url;

  if (path === '/cursos/programacion') {

    let cuerpo = '';
    req.on('data', contenido=>{
      cuerpo += contenido.toString();
    });
    
    req.on('end', ()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);

      cuerpo = JSON.parse(cuerpo);

      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);

      return res.end(`El servidor recibio una solicitud POST en ${path}`);
    })


    //return res.end(`El servidor recibio una solicitud POST en ${path}`);
  }
}
exports.manejarSolicitudPOST = manejarSolicitudPOST;
