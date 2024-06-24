const { where } = require("sequelize");
const dataBase_info = require("../database/models");
const { validationResult } = require("express-validator");
const Op = dataBase_info.Sequelize.Op;

const controllerProducto = {
    index: function (req, res) {
        dataBase_info.Product.findAll({
            order: [['createdAt', 'DESC']],
            limit: 8,
            include: [
                { association: "user" },
                {
                    association: "comments",
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

    searchResults: function (req, res) {
        const buscador = req.query.search;
        dataBase_info.Product.findAll({
            where: {
                [Op.or]: [
                    { producto: { [Op.like]: `%${buscador}%` } },
                    { descripcion: { [Op.like]: `%${buscador}%` } },
                ]
            },
            order: [["createdAt", "DESC"]],
            include: {
                association: "user"
            }
        })
        .then(function (search) {
            return res.render("searchResults", { Product: search, buscador });
        })
        .catch((error) => {
            console.error(error);
        });
    },

    producto: {
        index: function (req, res) {
            const id = req.params.id;
            dataBase_info.Product.findByPk(id, {
                order: [['createdAt', 'DESC']],
                include: [
                    { association: "user" },
                    {
                        association: "comments",
                        separate: true,
                        order: [['createdAt', 'DESC']],
                        include: { association: "user" }
                    }
                ]
            })
            .then((product) => {
                //console.log("product", JSON.stringify(product,null,4))
                let lista_comentarios = product.comments;
                //console.log ("comentarios", JSON.stringify(lista_comentarios,null,4))
                return res.render('product', { product, lista_comentarios });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send('Internal Server Error');
            });
        },  // <--- Aquí falta el cierre del método index

        borrar: function (req, res) {
            let productoABorrar = req.params.id;

            dataBase_info.Comment.destroy({
                where: { producto_id: productoABorrar }
            })
            .then(() => {
                return dataBase_info.Product.destroy({
                    where: { id: productoABorrar }
                });
            })
            .then(() => {
                return res.redirect('/');
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error al intentar eliminar el producto y sus comentarios');
            });
        },
        comentarios: function (req, res) {
            const validationErrors = validationResult(req);

            if(req.session.user){
                if(validationErrors.isEmpty()){
                    const id = req.params.id

                    dataBase_info.Comment.create({
                        comentario: req.body.textoComentario,
                        usuario_id: req.session.user.id,
                        producto_id: req.params.id,
                })
                .then(function (data) {
                    res.redirect(`/product/${id}`)
                })
                .catch(function (error) {
                    console.log(error);
                })


            } else {
                const id = req.params.id

                dataBase_info.Product.findByPk(id, {
                    include: [
                        { association: 'user'},
                        {
                            association: "comments",
                            separate: true,
                            order: [['createdAt', 'DESC']],
                            include: { association: "user" }
                        }
                    ]

                })
                .then(function(product){
                    const lista_comentarios = product.comments
                    return res.render("product", {product, lista_comentarios, validationErrors: validationErrors.mapped(), oldData: {textoComentario: req.body.textoComentario}});                  
                })
                .catch(function (error) {
                    console.log(error);
                })
            }

        }}
    },  

    editarProducto: {
        
        index: function (req, res) {
            if (req.session.user == undefined) {
                return res.redirect("/"); // Redirige a la página de inicio si el usuario no está logueado
            } else {
                const id = req.params.id;
                dataBase_info.Product.findByPk(id)
                    .then(function (producto) {
                        if (!producto) {
                            return res.status(404).send("Producto no encontrado");
                        }
                        res.render("productEdit", { producto: producto });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        },
    
        modificar: function (req, res) {
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if (!validationErrors.isEmpty()) {
                const id = req.params.id;
                dataBase_info.Product.findByPk(id)
                    .then(function (producto) {
                        return res.render("productEdit", {
                            errors: validationErrors.mapped(),
                            oldData: req.body,
                            producto: producto
                        });
                    });
            } else {
                const id = req.params.id;

                dataBase_info.Product.update(
                    {
                        imagen: req.body.productoImagen,
                        producto: req.body.nombreProducto,
                        descripcion: req.body.descripcion
                    },
                    {
                        where: { id: id }
                    }
                )
                .then(function (result) {
                    return res.redirect(`/product/${id}`);
                })
                .catch(function (err) {
                    console.log(err);
                });
            }
        }
    },

    productAdd: {
        index: function (req, res) {
            if (req.session.user == undefined) {
                return res.redirect("/");
            } else {
                return res.render("productAdd");
            }
        },

        guardar: function (req, res) {
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.render("productAdd", {
                    errors: validationErrors.mapped(),
                    oldData: req.body
                });
            }

            let usuarioLogueadoId = req.session.user.id;

            const producto = {
                imagen: req.body.productoImagen,
                producto: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                usuario_id: usuarioLogueadoId
            };

            dataBase_info.Product.create(producto)
                .then(function () {
                    return res.redirect("/");
                })
                .catch(function (err) {
                    console.log("Error al guardar el ", err);
                });
        }
    }  // <--- Cierre del objeto productAdd
};

module.exports = controllerProducto;