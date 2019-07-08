//imporatación de modulos y archivos
const servicesPhat = require('../../config/config');
const urlServices = servicesPhat.phatServices + 'newUser/';
const urlServicesToken = servicesPhat.phatServices + 'verifyToken/';
const urlServicesLogin = servicesPhat.phatServices + 'login/';
const controller = require(servicesPhat.controllerFile + 'user' + servicesPhat.controllerTermino);
const crud = require(servicesPhat.controllerFile + 'crud' + servicesPhat.controllerTermino);
const tools = require(servicesPhat.controllerFile + 'tools' + servicesPhat.controllerTermino);

//exportación del modulo recibiendo la variable de app  
module.exports = function (app) {
      //asiganción del path para el direccionamiento de la peticion mediante los metodos GET, POST, PUT y DELETE
      app.route(urlServices)
            .post(controller.createUser,//ejecución de las funciones llamados para el funcionamiento en ese PATH 
                  crud.createUserBD,
                  crud.createCredentialBD,
                  crud.createToken);

      app.route(urlServicesToken)
            .get(tools.isAuthenticated,
                  tools.mustBeAuthorizedUser);

      app.route(urlServicesLogin)
            .post(controller.userAuthentication,
                  crud.createToken)

};