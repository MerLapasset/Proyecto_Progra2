const dataBase_info = require("../database/models")
const {validationResult}= require ("express-validator")

const controllersproducts= {
    index: function (req, res) {
        dataBase_info.Product.findAll({
            order: [['createdAt', 'DESC']],  
            limit: 8,
            include: [
                
               { association: "user"},
               {association: "comments",
                include: { association: "user" }
               },

            ]
        })
        .then((productos) => {
            return res.render('index', { productos });
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
        dataBase_info.Product.findByPk(id,{
            include: [
                
               { association: "user"},
               { 
                association: "comments",
                include: { association: "user" } // Incluye la información del usuario en cada comentario
            }            ]
        })
        .then((product) => {
            //console.log("product", JSON.stringify(product,null,4))
            let lista_comentarios= product.comments
            //console.log ("comentarios", JSON.stringify(lista_comentarios,null,4))

            return res.render('product', {product,lista_comentarios});
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });

    },
    
    productAdd:{
        index: function(req, res){
            
            return res.render('productAdd')},
        guardar: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("productAdd",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Guardar un producto en la db
            const producto = {
                imagen: req.body.productoImagen,
                producto:req.body.nombreProducto, 
                descripcion: req.body.descripcion,

            };
            //creamos el producto
            dataBase_info.Product
                .create(producto)
                .then(function (producto) {
                    return res.redirect("/");
                })
                .catch(function (err) {
                    console.log("Error al guardar el ", err);
                });            
            },

    
    } 
    
    
}

module.exports= controllersproducts
