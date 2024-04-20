const cursos = require('./cursos.js');

function manejarSolicitudGET(req, res) {
  const path = req.url;
  if (path === '/') {
    return res.end('Bienvenidos a mi primer servidor y API creados con NODE Js');
  } else if (path === '/cursos') {
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else if (path === '/cursos/matematicas') {
    return res.end(JSON.stringify(cursos.infoCursos.matematicas));
  }else{
    res.statusCode = 404;
    return res.end('El recurso no existe');
  }
}
exports.manejarSolicitudGET = manejarSolicitudGET;
