1. En el partial de headerlogueado falta completar la etiqueta a, con el id del usuario.
2. Falta terminar el punto 10


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