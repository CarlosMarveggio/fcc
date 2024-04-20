const http = require('http');
const { manejarSolicitudGET } = require('./manejarSolicitudGET.js');
const { manejarSolicitudPOST } = require('./manejarSolicitudPOST.js');

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo ${method} no puede ser manejado por el servidor`);
  }
});

PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});

