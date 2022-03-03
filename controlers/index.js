//importar express
const express = require('express');
const routes = require('../routs/routs');
const {database} = require('../database/db');

const server_app = express();

server_app.set('port',process.env.PORT||4000);

try {
    database.authenticate();
    console.log("Conectado");
} catch (error) {
    console.log("Algo esta mal, revisemos");
};

server_app.listen(server_app.get('port'),()=>{
    console.log('server on port',server_app.get('port'))
})

server_app.use('/movie',routes.inicio);
console.log('Terminado al final');