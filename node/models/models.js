const {Sequelize, DataTypes} = require('sequelize');

const {database} = require('../database/db');

//console.log(database);

const ModeloPelicula = database.define('entretenimientos',{
    "title":{type: DataTypes.STRING},
    "content": {type: DataTypes.STRING}
})

//console.log(ModeloPelicula);
//console.log(typeof(ModeloPelicula));

module.exports.ModeloPelicula = ModeloPelicula