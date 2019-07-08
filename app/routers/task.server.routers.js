//imporatación de modulos y archivos
const servicesPhat = require('../../config/config');
const urlServices = servicesPhat.phatServices + 'task/';
const urlServicesSearch = servicesPhat.phatServices + 'taskSearch/';
const urlServicesUserTask = servicesPhat.phatServices + 'userTask/';
const controller = require(servicesPhat.controllerFile + 'task' + servicesPhat.controllerTermino);
const crud = require(servicesPhat.controllerFile + 'crud' + servicesPhat.controllerTermino);
const tools = require(servicesPhat.controllerFile + 'tools' + servicesPhat.controllerTermino);

//exportación del modulo recibiendo la variable de app  
module.exports = function (app) {
    //asiganción del path para el direccionamiento de la peticion mediante los metodos GET, POST, PUT y DELETE
    app.route(urlServices)
        .get(tools.isAuthenticated,//ejecución de las funciones llamados para el funcionamiento en ese PATH 
            tools.mustBeAuthorizedUser,
            controller.listTask,
            crud.listTaskBD)
        .post(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.createTask,
            crud.createTaskBD);

    app.route(urlServicesSearch)
        .post(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.searchTask,
            crud.searchTaskBD);

    app.route(urlServicesUserTask)
        .post(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.relationTaskUser,
            crud.addRelationTaskUser)

    app.route(urlServices + ":id")
        .get(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.taskOne,
            crud.oneTaskBD)
        .put(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.updateTask,
            crud.updateTaskBD)
        .delete(tools.isAuthenticated,
            tools.mustBeAuthorizedUser,
            controller.deleteTask,
            crud.deleteTaskBD);

};    