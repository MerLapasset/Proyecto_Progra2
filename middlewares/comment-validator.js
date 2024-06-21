const { body } = require("express-validator")
const db= require("../database/models")


const commentValidation = [
    body("textoComentario")
        .notEmpty()
        .withMessage("El comentario no puede estar vacío.")
        .bail()
        .isLength({ min: 3 })
        .withMessage("El comentario debe tener al menos 3 caracteres.")
]

module.exports = commentValidation;