const {Sequelize, DataTypes} = require('sequelize');

const {database} = require('../database/db');

//console.log(database);

const ModeloPelicula = database.define('entretenimiento',{
    title:{type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
}, {
    freezeTableName: true
})

console.log(ModeloPelicula);
//console.log(typeof(ModeloPelicula));

module.exports.ModeloPelicula = ModeloPelicula