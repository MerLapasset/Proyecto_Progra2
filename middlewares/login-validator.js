const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const loginValidation = [
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
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }
    ),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .bail()
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email:req.body.email}
            })
            .then(function(user){
                if(user){
                    const password = user.password;
                    const passwordBien= bcryptjs.compareSync(value,password);
                    if(!passwordBien){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
]

module.exports = loginValidation;