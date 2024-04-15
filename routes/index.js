let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controller")

router.get ("/",controllerGeneral.index) // en vez del controller redirige direct a el ejs
//router.get("/product", controllerGeneral.product)

router.get ("/register",controllerGeneral.registro) // en vez del controller redirige direct a el ejs
router.get ("/editarPerfil",controllerGeneral.editarPerfil) // en vez del controller redirige direct a el ejs
router.get ("/resultadosBusqueda",controllerGeneral.resultados) // en vez del controller redirige direct a el ejs
router.get ("/login",controllerGeneral.login) 




module.exports = router;
