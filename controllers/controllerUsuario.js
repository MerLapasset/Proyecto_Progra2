const bcryptjs = require('bcryptjs');
const dataBase_info = require("../database/models");
const {validationResult} = require("express-validator");

const controllerUsusario= {
    products: function(req,res){
        db.Product.findAll({
            where: {
                usuario_id: req.params.id
            }
        })
            .then(function(data){
                return res.render("products", { profile: data });
            })
            .catch(function(error){
                console.log(error);
            });

    },
    profile: function(req, res){
        db.User.findByPk(req.params.id)
            .then(function(data){
                return res.render("datosDelUsuario", { profile: data });
            })
            .catch(function(error){
                console.log(error);
            });

    },
    comments: function(req,res){
        db.Comment.findAll({
            where: {
                usuario_id: req.params.id
            }
        })
            .then(function(data){
                return res.render("products", { profile: data });
            })
            .catch(function(error){
                console.log(error);
            });

    }, // ver esto y ponerlo en la vista 

// Cambiar en la ruta por products y profile

    profileEliminar: function(req, res) {
        const usuario = dataBase_info.usuario;
        const productos = dataBase_info.productos
    
        return res.render('profile', { usuario, productos });
    },

       
    register: function (req,res) {
        return res.render ('register')
   
    },

    profileEdit: function (req,res) {
        const usuario = dataBase_info.usuario;
        const productos = dataBase_info.productos

        return res.render ('profileEdit', { usuario, productos });       
    },

    login:{
        index: function(req, res){
            //Mostramos el form de login
            return res.render('login')},
        general: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("login",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Buscamos el usuario que se quiere loguear.
            dataBase_info.User.findOne({
                where: [{email: req.body.email}]
            })
            .then( function ( user ) {
                //Seteamos la session con la info del usuario
                req.session.user = user;          
                //Si tildó recordame => creamos la cookie.
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
                }
                return res.redirect('/');  
                          
            })
            .catch( function(e) {
                console.log(e)
            })
        },
        
    },
    

    
    misProductos: function (req,res) {
        return res.render ('login')
    },

    logout: function(req,res){
        //Destruir la sessión

        //Destruir la coockie
        
        //redireccionar a hone
        return res.redirect('/')
    }

}

module.exports = controllerUsusario