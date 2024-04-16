const dataBase_info = require("../db/datos")

const controllerUsusario= {
    profile: function(req, res) {
        const usuario = dataBase_info.usuario;
        const productos = dataBase_info.productos
    
        return res.render('profile', { usuario, productos });
    },

       
    register: function (req,res) {
        return res.render ('register')
   
    },
    profileEdit: function (req,res) {
        return res.render ('profileEdit')
   
        
    },

    login: function (req,res) {
        return res.render ('login')
    },



}

module.exports = controllerUsusario