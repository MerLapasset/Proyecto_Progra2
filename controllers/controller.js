const dataBase_info = require("../db/datos")



const controllers= {
    index: function (req,res) {
        console.log("database: ",dataBase_info.productos)

       
        
        return res.render('index', {listaArticulos: dataBase_info.productos})
    },
   
    registro: function (req,res) {
        return res.render ('register')
   
    },
    editarPerfil: function (req,res) {
        return res.render ('profile-edit')
   
        
    },
    resultados: function (req,res) {
        
        return res.render ('searchResults',{listaProductos: dataBase_info.productos} )
    },

    login: function (req,res) {
        return res.render ('login')
    }
    

}

module.exports= controllers
