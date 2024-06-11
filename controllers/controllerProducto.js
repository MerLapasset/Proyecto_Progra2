const dataBase_info = require("../db/datos")
const db = require("../database/models")

const controllersproducts= {
    index: function (req, res) {
        db.Product.findAll({
            order: [['createdAt', 'DESC']],  
            limit: 3,
            include: [
                
               { association: "user"}
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
        
        const id = req.params.id
        db.Product.findByPk(id,{
            include: [
                
               { association: "user"},
               { 
                association: "comments",
                include: { association: "user" } // Incluye la información del usuario en cada comentario
            }            ]
        })
        .then((product) => {
            console.log("product", JSON.stringify(product,null,4))
            let lista_comentarios= product.comments
            console.log ("comentarios", JSON.stringify(lista_comentarios,null,4))

            return res.render('product', {product,lista_comentarios});
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });

    },
    
    productAdd: function (req,res) {
        return res.render('productAdd') 
    }
    
}

module.exports= controllersproducts
