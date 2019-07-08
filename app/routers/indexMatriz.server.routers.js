//imporatación de modulos y archivos
const servicesPhat = require('../../config/config');
const urlServices = servicesPhat.phatServices + 'indexMatriz/';
const controller = require(servicesPhat.controllerFile + 'indexMatriz' + servicesPhat.controllerTermino);
const tools = require(servicesPhat.controllerFile + 'tools' + servicesPhat.controllerTermino);

//exportación del modulo recibiendo la variable de app  
module.exports = function (app) {
    //asiganción del path para el direccionamiento de la peticion mediante los metodos GET, POST, PUT y DELETE   
    app.route(urlServices)
        //ejecución de las funciones llamados para el funcionamiento en ese PATH 
        .post(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.matrizIndex);
};