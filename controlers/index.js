//importar express
const express = require('express');
const routes = require('../routs/routs')

const server_app = express();

server_app.set('port',process.env.PORT||4000)

server_app.listen(server_app.get('port'),()=>{
    console.log('server on port',server_app.get('port'))
})

server_app.use(routes.inicio);