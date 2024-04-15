const dataBase = require("../db/datos")

const controllers= {
    index: function (req,res) {
        let listaArticulos = []

        for (let i = 0; i < dataBase.productos.length; i++) {
            listaArticulos.push({
                
                id: dataBase.productos[i].id,
                imagen: dataBase.productos[i].imagen,
                nombreProducto: dataBase.productos[i].nombreProducto,
                descripcion: dataBase.productos[i].descripcion,
                numComentarios: dataBase.productos[i].comentarios.length
                

        })}
        console.log(listaArticulos);
        return res.render('index', {listaArticulos})
    },
   
    registro: function (req,res) {
        return res.render ('register')
   
    },
    editarPerfil: function (req,res) {
        return res.render ('profile-edit')
   
        
    },
    resultados: function (req,res) {
        return res.render ('search-results', )
    },

    login: function (req,res) {
        return res.render ('login')
    }
    

}

module.exports= controllers
