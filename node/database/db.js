const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas','root','sebas1234martin',{
    host: '127.0.0.1',
    port:'3307',
    dialect:'mysql'
});

module.exports.database = database;

try {
    database.authenticate();
    console.log("Conectado");
} catch (error) {
    console.log("Algo esta mal, revisemos");
}