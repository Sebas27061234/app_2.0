const {ModeloPelicula} = require('./models');

//Mostrar todas las  instancias
const getAllMovies = async(req,res) => {
    try {
        const Peliculas = await ModeloPelicula.findAll();
        res.json(Peliculas);
    } catch (error) {
        res.json({message: 'No se encontraron instancias'})
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

//Actualizar Registro

//Eliminar Registro