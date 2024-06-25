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
        .custom((value, { req }) => {
            if (req.body.usuarioPassword && req.body.usuarioPassword.trim() !== '') {
                if (!req.body.usuarioPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
                    throw new Error('La contraseña debe contener al menos 8 caracteres: una minúscula, una mayúscula, un número y un caracter especial');
                }
            }
            return true;
        })
]

module.exports = profileEditValidation;