//imporatación de modulos y archivos
const mysql = require('mysql2/promise');

//configuración para los accesos del modulo de mysql para el acceso de la base de datos
let pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'UkigjKnCyz',
    password: '97mYna1ete',
    database: 'UkigjKnCyz',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//conección a la base de datos y contemplando los diferenetes errores a la conección
pool.getConnection(async (err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) await connection.beginTransaction();
    return
});

//retorna la conección el la variables pool 
module.exports = pool;