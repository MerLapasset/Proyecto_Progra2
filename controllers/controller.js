const dataBase_info = require("../db/datos")



const controllers= {
    index: function (req,res) {
        console.log("database: ",dataBase_info.productos)
        let listaArticulos = []

       
        
        return res.render('index', {listaArticulos: dataBase_info.productos})
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
    },
    
    producto: function(req, res){
        let id = req.params.id
        let producto = []
        let comentarios = []

        for (let i = 0; i < dataBase.productos.length; i++) {
            
            if (id == dataBase.productos[i].id) {

                let valor = dataBase.productos[i]

                producto.push({
                    nombreProducto: dataBase.productos[i].nombreProducto,
                    descripcion: dataBase.productos[i].descripcion,
                    imagen: dataBase.productos[i].imagen,
                })

                for (let i = 0; i < valor.comentarios.length; i++) {
                    
                    comentarios.push({
                        id: valor.comentarios[i].id,
                        nombreUsuario: valor.comentarios[i].nombreUsuario,
                        comentario: valor.comentarios[i].comentario,
                        imagenPerfil: valor.comentarios[i].imagenPerfil,
                    }) 
                }
            }
            
        }
        let productoFiltrado = producto[0]
        console.log(comentarios);
        return res.render('product', {producto: productoFiltrado, comentarios})
    }
    

}

module.exports= controllers
