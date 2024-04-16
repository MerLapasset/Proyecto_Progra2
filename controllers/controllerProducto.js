const dataBase_info = require("../db/datos")



const controllersproducts= {
    index: function (req,res) {
        console.log("database: ",dataBase_info.productos)

        return res.render('index', {listaArticulos: dataBase_info.productos})
    },

    searchResults: function (req,res) {
        
        return res.render ('searchResults', {listaProductos: dataBase_info.productos} )
    },

    
    producto: function(req, res){
        let id = req.params.id
        let producto = []

        for (let i = 0; i < dataBase_info.productos.length; i++) {
            
            if (id == dataBase_info.productos[i].id) {

                let valor = dataBase_info.productos[i]

                producto.push({
                    nombreProducto: dataBase_info.productos[i].nombreProducto,
                    descripcion: dataBase_info.productos[i].descripcion,
                    imagen: dataBase_info.productos[i].imagen,
                    comentarios: dataBase_info.productos[i].comentarios
                })

                
            }
            
        }
        let productoFiltrado = producto[0]
        return res.render('product', {producto: productoFiltrado})
    },
    
    productAdd: function (req,res) {
        return res.render('productAdd') 
    },
    
}

module.exports= controllersproducts
