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
    },
    
    producto: function(req, res){
        let id = req.params.id
        let producto = []
        let comentarios = []

        for (let i = 0; i < dataBase_info.productos.length; i++) {
            
            if (id == dataBase_info.productos[i].id) {

                let valor = dataBase_info.productos[i]

                producto.push({
                    nombreProducto: dataBase_info.productos[i].nombreProducto,
                    descripcion: dataBase_info.productos[i].descripcion,
                    imagen: dataBase_info.productos[i].imagen,
                })

                for (let i = 0; i < valor.comentarios.length; i++) {
                    
                    comentarios.push({
                        id: valor.comentarios[i].id,
                        nombreUsuario: valor.comentarios[i].nombreUsuario,
                        comentario: valor.comentarios[i].comentario,
                        imagenPerfil: valor.comentarios[i].imagenPerfil,
                    }) 
                }
                console.log(comentarios);
            }
            
        }
        let productoFiltrado = producto[0]
        console.log(comentarios);
        return res.render('product', {producto: productoFiltrado, comentarios})
    }
    

}

module.exports= controllers