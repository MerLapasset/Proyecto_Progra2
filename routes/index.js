let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controller")

router.get ("/",controllerGeneral.index) 
router.get("/:id", controllerGeneral.producto)


router.get ("/register",controllerGeneral.registro) 
router.get ("/editarPerfil",controllerGeneral.editarPerfil) 
router.get ("/searchResults",controllerGeneral.resultados) 
router.get ("/productAdd",controllerGeneral.addProduct) 




module.exports = router;
