const dataBase_info = require("../db/datos")
const dataBase = dataBase_info.lista


const controllers= {
    index: function (req,res) {
        let listaArticulos = []

        for (let i = 0; i < dataBase.length; i++) {
            let v = i
            
            for (let i = 0; i < 10; i++) {
                listaArticulos.push({
                    id: dataBase.productos[i].id,
                    imagen: dataBase.productos[i].imagen,
                    nombreProducto: dataBase.productos[i].nombreProducto,
                    descripcion: dataBase.productos[i].descripcion,
                    numComentarios: dataBase.productos[i].comentarios
                }
            ) 
        }
            
        }
        
        console.log(listaArticulos);
        return res.render(listaArticulos)
    },
   
    registro: function (req,res) {
        return res.render ('register')
   
    },
    editarPerfil: function (req,res) {
        return res.render ('profile-edit')
   
        
    }

}

module.exports= controllers