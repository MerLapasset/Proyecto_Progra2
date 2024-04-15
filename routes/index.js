let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controller")
router.get ("/",controllerGeneral.index) 
//router.get("/product", controllerGeneral.product)

router.get ("/register",controllerGeneral.registro) 
router.get ("/editarPerfil",controllerGeneral.editarPerfil) 
router.get ("/resultadosBusqueda/:producto",controllerGeneral.resultados)  


module.exports = router;
