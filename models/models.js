const {Sequelize, DataTypes} = require('sequelize');

const {database} = require('../database/db');

//console.log(database);

const ModeloPelicula = database.define
('Pelicula',{
    title:{type: DataTypes.STRING},
    content: {tyoe: DataTypes.STRING}
})

console.log(ModeloPelicula);
console.log(typeof(ModeloPelicula));

module.exports.ModeloPelicula = ModeloPelicula