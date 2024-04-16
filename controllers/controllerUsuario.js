const dataBase_info = require("../db/datos")

const controllerUsusario= {
    profile: function(req, res) {
        const usuario = dataBase_info.usuario;
    
        return res.render('profile', { usuario });
    },

}

module.exports = controllerUsusario