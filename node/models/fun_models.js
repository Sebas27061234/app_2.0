const {ModeloPelicula} = require('./models');

//Mostrar todas las  instancias
const getAllMovies = async(req,res) => {
    try {
        const Peliculas = await ModeloPelicula.findAll({attributes:['id_pelidula','title','content']});
        res.json(Peliculas);
    } catch (error) {
        res.json({message: 'No se encontró la instancia'})
    }
}

//Mostrar solo 1 instancia
const getOneMovie = async(req,res) => {
    try {
        const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    } catch (error) {
        res.json({message: 'No se encontró la instancia'})
    }
}

//Crear Registro
const createOneMovie = async(req,res) => {
    try {
        await ModeloPelicula.create(req.body)
        res.json({message:'Registro creado satisfactoriamente'})
    } catch (error) {
        res.json({message: 'No se ha realizado ningún registro'})
    }
}

//Actualizar Registro
const updateOneMovie = async(req,res) => {
    try {
        await ModeloPelicula.update(req.body({where: {id: req.params.id}}));
        res.json({message: "Registro actualizado"})
    } catch (error) {
        res.json({message: "No se ha podido actualizar el registro"});
    }
}

//Eliminar Registro
const deleteOneMovie = async(req,res) =>{
    try {
        await ModeloPelicula.destroy({where: {id: req.params.id}})
        res.json({message: "Eliminado correctamente"})
    } catch (error) {
        res.json({message: "No se pudo eliminar"})
    }
}

module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie};