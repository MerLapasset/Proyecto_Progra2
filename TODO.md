1. En el partial de headerlogueado falta completar la etiqueta a, con el id del usuario.
2. Falta terminar el punto 10
3. Hacer el ccs de foto de perfil, para que mer deje de molestar
4. Profile: Cambiar el orden de los productos, punto 6


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


! Nombres de usuario y contraseñas:
    1. maiadolensky@gmail.com Udesa2024!
    2. juana@gmail.com Juana2024!
    3. mer@gmail.com Mer2024!
    4... misma logica

    maiadolensky@gmail.com Udesa2024!




comentarios: function (req, res) {
            const validationErrors = validationResult(req);

            if (!validationErrors.isEmpty()) {
                return res.render("product", {
                    errors: validationErrors.mapped(),
                    oldData: req.body
                });
            }
            console.log("validationErrors : ", JSON.stringify(validationErrors, null, 4));

            let usuarioLogueadoId = req.session.user.id;
            let productoId = req.params.id;

            const comentario = {
                comentario: req.body.textoComentario,
                usuario_id: usuarioLogueadoId,
                producto_id: productoId,
            };
            console.log("comentario: ", JSON.stringify(comentario, null, 4));

            dataBase_info.Comment.create(comentario)
                .then(function (comentario) {
                    return res.redirect(`/product/${productoId}`);
                })
                .catch(function (error) {
                    console.log("Error al guardar el comentario", error);
                });
        }



comentarios: function (req, res) {
            const validationErrors = validationResult(req);

            if (!validationErrors.isEmpty()) {
                const id = req.params.id

                dataBase_info.Product.findByPk(id, {
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
                    .then((data) => {
                        return res.render("product", {
                        errors: validationErrors.mapped(),
                        oldData: req.body,
                        product: product
                    })
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).send('Internal Server Error');
                    });
                

            } else {
                console.log("validationErrors : ", JSON.stringify(validationErrors, null, 4));

                let usuarioLogueadoId = req.session.user.id;
                let productoId = req.params.id;

                const comentario = {
                    comentario: req.body.textoComentario,
                    usuario_id: usuarioLogueadoId,
                    producto_id: productoId,
                };
                console.log("comentario: ", JSON.stringify(comentario, null, 4));

                dataBase_info.Comment.create(comentario)
                    .then(function (comentario) {
                        return res.redirect(`/product/${productoId}`);
                    })
                    .catch(function (error) {
                        console.log("Error al guardar el comentario", error);
                    });
            }
        }