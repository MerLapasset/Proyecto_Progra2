const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const profileEditValidation = [
    body("usuarioEmail")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido"),

    body("usuarioName")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),
        
    body("usuarioPassword")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .bail()
        .isStrongPassword()
        .withMessage("La contraseña debe contener al menos 8 caracteres: una minúscula, una mayúscula y un caracter especial"),
    
    body("usuarioFecha")
        .notEmpty()
        .withMessage("Debes completar con la fecha de nacimiento"),
    
    body("usuarioDni")
        .notEmpty()
        .withMessage("Debes completar tu dni"),
    
    body("usuarioFoto")
        .notEmpty()
        .withMessage("Debes completar tu foto"),

]

module.exports = profileEditValidation;