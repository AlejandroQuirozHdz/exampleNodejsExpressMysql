//imporatación de modulos y archivos
const path = require('path');

//exportación del modulo recibiendo la variable de app  
module.exports = function (app) {

    //retorna en la dirección principal de la peticon del servidor el html asignado
    app.all('/', (req, res, next) => {
        res.sendFile(path.resolve('./public/index/index.html'));

    });

}