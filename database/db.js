const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas','root','',{
    host: '127.0.0.1',
    dialect:'mysql'
});

module.exports.database = database;

/*
try {
    database.authenticate();
    console.log("Conectado");
} catch (error) {
    console.log("Algo esta mal, revisemos");
}*/