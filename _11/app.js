const http= require('http');

const servidor = http.createServer((req, res) =>{
  res.end('Hola Guacha, puerto: 3000');
});

const PUERTO = 3000;

servidor.listen(PUERTO, ()=>{
  console.log(`El servidor escucha el puerto ${PUERTO}`);
});

//iniciar con el comando nodemon app.js pero en la linea de comandos