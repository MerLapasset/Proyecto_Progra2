const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const registerValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email:value}
            })
            .then(function(userToRegister){
                if(userToRegister){
                    throw new Error("Ya existe un usuario con ese email")
                }
            })
        }
    ),

    body("name")
        .notEmpty()
        .withMessage("Debes completar tu nombre de usuario"),
        
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .bail()
        .isStrongPassword()
        .withMessage("La contraseña debe contener al menos 8 caracteres: una minúscula, una mayúscula y un caracter especial"),

]

module.exports = registerValidation;