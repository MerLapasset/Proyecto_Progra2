const dataBase = require("../db/datos")

const controllers= {
    index: function (req,res) {
        let listaArticulos = []

        for (let i = 0; i < dataBase.productos.length; i++) {

            //console.log(dataBase.productos[i].nombreProducto);

            listaArticulos.push({
                
                id: dataBase.productos[i].id,
                nombreProducto: dataBase.productos[i].nombreProducto,


        })
            
            
        }
 
        console.log(listaArticulos);
        return res.render(listaArticulos)
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
