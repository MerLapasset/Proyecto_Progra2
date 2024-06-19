const { where } = require("sequelize");
const dataBase_info = require("../database/models")
const {validationResult}= require ("express-validator")
const Op= dataBase_info.Sequelize.Op;

const controllerProducto= {
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
        
        const buscador = req.query.search;
        dataBase_info.Product.findAll({
            where:{
                [Op.or]:[
                    {producto: {[Op.like]: `%${buscador}%`}},
                    {descripcion: {[Op.like]: `%${buscador}%`}},                    
                ]
            },
            order: [
                ["createdAt", "DESC"]
            ],
            include: {
                association: "user"
            }
        }).then(function(search){
            return res.render("searchResults", {Product:search, buscador})
        })
        .catch((error) => {
            console.error(error);
        });
    },
    
    
    producto: {

        index: function(req, res){
        
            const id = req.params.id
            dataBase_info.Product.findByPk(id,{
                include: [
                    
                   { association: "user"},
                   { 
                    association: "comments",
                    order: [['createdAt', 'DESC']],
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
        borrar: function (req, res) {
            let libroABorrar = req.params.id;
    
    
            dataBase_info.Product.destroy({
                where: [
                    { id: libroABorrar }
                ]
            })
    
                
            const validationErrors = validationResult(req);
                  
            if(!validationErrors.isEmpty()){
                return res.render("product",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            }
    
            let usuarioLogueadoId= req.session.user.id
            let productoCambiando = req.params.id
    
            const comentario = {
                comentario: req.body.textoComentario,
                usuario_id: usuarioLogueadoId, 
                producto_id: productoCambiando,
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    
            };
    
            dataBase_info.Comment.create(comentario)
            .then(function(comentario){
                return res.redirect('/');
            })
            .catch(function(error){
                console.log("Error al guardar el ", error);
            })
        },
        
    },

    editarProducto: {

        index: function (req, res) {
            const id = req.params.id;
            dataBase_info.Product.findByPk(id)
                .then(function (producto) {
                    if (!producto) {
                        return res.status(404).send("Producto no encontrado")
                    }
                    res.render ("productEdit", {producto: producto})
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
        //ahora update
        modificar: function (req, res) {
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("productEdit",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
                      
            const id = req.params.id;
            
            dataBase_info.Product.update(
                {
                imagen: req.body.productoImagen,
                producto: req.body.nombreProducto, 
                descripcion: req.body.descripcion},
                 {
                where: {
                    id: id
                }
            })
                .then(function (result) {
                    return res.redirect(`/product/${id}`)
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
    },

    
    
    productAdd:{
        index: function(req, res) {
            if (req.session.user == !undefined){
                return res.redirect ("/")
            } else{
                return res.render("productAdd")
            }      
        },
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
            let usuarioLogueadoId= req.session.user.id

            //console.log("usuario logueado", JSON.stringify(usuarioLogueadoId,null,4))
            
            // Guardar un producto en la db
            const producto = {
                imagen: req.body.productoImagen,
                producto: req.body.nombreProducto, 
                descripcion: req.body.descripcion,
                usuario_id: usuarioLogueadoId

            };
            //console.log("producto", JSON.stringify(producto,null,4))

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

module.exports= controllerProducto
