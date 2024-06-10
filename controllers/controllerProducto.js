const dataBase_info = require("../db/datos")
const db = require("../database/models")

const controllersproducts= {
    index: function (req, res) {
        db.Product.findAll({
            order: [['createdAt', 'DESC']],  
            limit: 3,
            include: [
                { association: "usuario_id",
                    include: [ {association: 'user'}]
                }
            ]
        })
        .then((products) => {
            console.log("products", JSON.stringify(products,null,4))
            return res.render('home', { products });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
    },


    searchResults: function (req,res) {
        
        return res.render ('searchResults', {listaProductos: dataBase_info.productos} )
    },

    
    producto: function(req, res){
        const usuario = dataBase_info.usuario;
        let id = req.params.id
        let producto = []

        for (let i = 0; i < dataBase_info.productos.length; i++) {
            
            if (id == dataBase_info.productos[i].id) {

                let valor = dataBase_info.productos[i]

                producto.push({
                    id: dataBase_info.productos[i].id,
                    nombreProducto: dataBase_info.productos[i].nombreProducto,
                    descripcion: dataBase_info.productos[i].descripcion,
                    imagen: dataBase_info.productos[i].imagen,
                    comentarios: dataBase_info.productos[i].comentarios
                })

                
            }
            
        }
        let productoFiltrado = producto[0]

        return res.render('product', {producto: productoFiltrado, usuario})
    },
    
    productAdd: function (req,res) {
        return res.render('productAdd') 
    },
    
}

module.exports= controllersproducts
