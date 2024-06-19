const bcryptjs = require('bcryptjs');
const db = require("../database/models");
const {validationResult} = require("express-validator");

const controllerUsuario= {
    
    profile: function(req, res){
        db.User.findByPk(req.params.id, {

            include: [
                
                {association: "products",
                    include: { association: "comments" },
                    order: [['createdAt', 'DESC']]
                   },
 
             ]
        })
            .then(function(data){
                return res.render("profile", { profile: data });
            })
            .catch(function(error){
                console.log(error);
            });

    },

    // Parte vieja del proyecto

    profileEliminar: function(req, res) {
        const usuario = db.usuario;
        const productos = db.productos
    
        return res.render('profile', { usuario, productos });
    },

       
    register: {
        index: function(req, res){
            if (req.session.user != undefined){
                return res.redirect ("/")
            } else{
                return res.render("register")
            }
        },    
        guardar: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("register",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Guardar un usuario en la db
            const user = {
                email: req.body.email,
                name: req.body.name,
                password: bcryptjs.hashSync(req.body.password), 
                fecha: req.body.fechaNacimiento,
                dni: req.body.nroDocumento,
                foto: req.body.fotoPerfil
            };
            //creamos el usuario
            db.User
                .create(user)
                .then(function (user) {
                    return res.redirect("/users/login");
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err);
                });            
            },

    },

    profileEdit: function (req,res) {
        const usuario = db.usuario;
        const productos = db.productos

        return res.render ('profileEdit', { usuario, productos });       
    },

    login:{
        index: function(req, res) {
            if (req.session.user != undefined){
                return res.redirect ("/")
            } else{
                return res.render("login")
            }      
        },
        general: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            //console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("login",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Buscamos el usuario que se quiere loguear.
            db.User.findOne({
                where: [{email: req.body.email}]
            })
            .then( function ( user ) {
                //Seteamos la session con la info del usuario
                req.session.user = user;          
                //Si tildó recordame => creamos la cookie.
                if(req.body.recordarme === "ok"){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
                } else {
                    res.clearCookie("userId")
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

    logout: function(req, res) {
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
        res.clearCookie("userId");

        //redireccionar a home
        res.redirect("/");
    },
}

module.exports = controllerUsuario