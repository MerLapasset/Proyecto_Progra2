Controller usuarios
=> Cambiar la ruta para que usuarios tenga un id

const Op = db.Sequelize.Op
=> esta linea de codigo se agrega para usar .like, .gt, .lt, .lte
---
const db = require("../database/models);

const usuarioController = {
    comentarios: function(req, res) {
        db.alias.findAll()
            .then(function(data){
                res.render("listadoComentarios", {peliculas: peliculas})
            })
    },

    detail: function(req, res) {
        db.alias.findByPk(req.params.id)
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    elquetengoqusar: function(req, res) {
        db.alias.findAll({
            where: {
                usuario_id: req.params.id
            }
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    elquetengoqusar: function(req, res) {
        db.alias.findAll({
            where: {
                apellido:{ [Op.lie]: '%s%'} => busca los apellidos que tengan la letra s
            }
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },

    usandotambienORDER: function(req, res) {
        db.alias.findAll({
            where: {
                apellido:{ [Op.lie]: '%s%'} => busca los apellidos que tengan la letra s
            },
            order: [
                ["title", "DESC"] => Que columna queremos ordenar y si asendente o desendetnte
            ]
            ,
            limit: 5 => limitas que se cargen 5 resultados
        })
            .then(function(pelicula){
                res.render("detallePelcula, {pelicula:pelicula})
            })
    },
        
    
}


---








IMPORTANTE
todo lo que estaba en controller usuarios, lo pego por si borro algo de alg

---
// ver esto y ponerlo en la vista 

// Cambiar en la ruta por products y profile

    profileEliminar: function(req, res) {
        const usuario = dataBase_info.usuario;
        const productos = dataBase_info.productos
    
        return res.render('profile', { usuario, productos });
    },

       
    register: {
        index: function(req, res){
            //Mostramos el form de login
            return res.render('register')},
        guardar: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("register",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Guardar un usuario en la db
            const user = {
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password), 
                fecha: req.body.fechaNacimiento,
                dni: req.body.nroDocumento,
                foto: req.body.fotoPerfil
            };
            //creamos el usuario
            dataBase_info.User
                .create(user)
                .then(function (user) {
                    return res.redirect("/users/login");
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err);
                });            
            },

    },

    profileEdit: function (req,res) {
        const usuario = dataBase_info.usuario;
        const productos = dataBase_info.productos

        return res.render ('profileEdit', { usuario, productos });       
    },

    login:{
        index: function(req, res){
            //Mostramos el form de login
            return res.render('login')},
        general: function(req, res){
            //obtenemos los restultados de las validaciones       
            const validationErrors = validationResult(req);
            console.log("validationErrors : ", validationErrors)
            // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo q venia en el body       
            if(!validationErrors.isEmpty()){
                return res.render("login",{
                    errors: validationErrors.mapped(),
                    oldData:req.body
                })
            } 
            // Buscamos el usuario que se quiere loguear.
            dataBase_info.User.findOne({
                where: [{email: req.body.email}]
            })
            .then( function ( user ) {
                //Seteamos la session con la info del usuario
                req.session.user = user;          
                //Si tildó recordame => creamos la cookie.
                if(req.body.rememberme != undefined){
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
                }
                return res.redirect('/');  
                          
            })
            .catch( function(e) {
                console.log(e)
            })
        },
        
    },
    

    
    misProductos: function (req,res) {
        return res.render ('login')
    },

    logout: function(req,res){
        //Destruir la sessión

        //Destruir la coockie
        
        //redireccionar a hone
        return res.redirect('/')
    }
---







