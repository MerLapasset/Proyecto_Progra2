const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const profileEditValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido"),

    body("name")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),
        
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .bail()
        .isStrongPassword()
        .withMessage("La contraseña debe contener al menos 8 caracteres: una minúscula, una mayúscula y un carater especial"),

]

module.exports = profileEditValidation;