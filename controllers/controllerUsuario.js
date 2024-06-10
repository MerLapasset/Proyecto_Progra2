const dataBase_info = require("../db/datos")

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

    login: function (req,res) {
        return res.render ('login')
    },
    misProductos: function (req,res) {
        return res.render ('login')
    },



}

module.exports = controllerUsusario