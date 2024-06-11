Controller usuarios
=> Cambiar la ruta para que usuarios tenga un id

const Op = db.Sequelize.Op
=> esta linea de codigo se agrega para usar .like, .gt, .lt, .lte
const db = require("../database/models);

const usuarioController = {
    comentarios: function(req, res) {
        db.alias.findAll()
            .then(function(data){
                res.render("listadoComentarios", {peliculas: peliculas})
            })
    },

    detail: function(req, res) {
        db.alias.findByPk(req.params.id)
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    elquetengoqusar: function(req, res) {
        db.alias.findAll({
            where: {
                usuario_id: req.params.id
            }
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    elquetengoqusar: function(req, res) {
        db.alias.findAll({
            where: {
                apellido:{ [Op.lie]: '%s%'} => busca los apellidos que tengan la letra s
            }
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    usandotambienORDER: function(req, res) {
        db.alias.findAll({
            where: {
                apellido:{ [Op.lie]: '%s%'} => busca los apellidos que tengan la letra s
            },
            order: [
                ["title", "DESC"] => Que columna queremos ordenar y si asendente o desendetnte
            ]
            ,
            limit: 5 => limitas que se cargen 5 resultados (tambien esta offset)
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },
        
    
}


---
IMPORTANTE

findAll() => simpre trae un array
findOne() => un solo objeto

Denro de la tabla de comentarios, tengo que usar el id del usuario y con usuario_id me traigo todos sus comentarios

licho@gmail.com password: Dolensky19! 