//variable de proceso de evento inicial
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
//imporatación de modulos y archivos
const express = require('./config/express');
const http = require('http');
require('./config/database')

//asignación y importacion y uso de express en la variable let
let app = express();

//creación del servidor de nodejs mediante HTTP en el puerto asignado por el servidor o por default 8090
http.createServer(app).listen(app.get('port'), () => console.log('Server on port ' + app.get('port')));

//importacion de la variable de app 
module.exports = app;