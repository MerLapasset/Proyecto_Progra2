let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controllerProducto")
let controllerUsuario= require ("../controllers/controllerUsuario")

router.get ("/",controllerGeneral.index) 
router.get("/product/:id", controllerGeneral.producto)


router.get ("/register", controllerUsuario.register) 
router.get ("/login", controllerUsuario.login) 
router.get ("/profileEdit", controllerUsuario.profileEdit) 
router.get ("/searchResults", controllerGeneral.searchResults) 
router.get ("/productAdd", controllerGeneral.productAdd) 

router.get("/profile", controllerUsuario.profile, controllerUsuario.misProductos)




module.exports = router;
