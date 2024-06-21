const { body } = require("express-validator")
const db= require("../database/models")


const productAddValidation = [
    body("productoImagen")
        .notEmpty()
        .withMessage("Debes subir una foto")
        .bail(),

    body("nombreProducto")
        .notEmpty()
        .withMessage("Debes subir un nombre para el producto")
        .bail(),


    body("descripcion")
        .notEmpty()
        .withMessage("Debes subir una descripcion para el producto")


]

module.exports = productAddValidation;