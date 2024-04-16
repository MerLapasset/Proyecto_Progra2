let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controllerProducto")
let controllerUsuario= require ("../controllers/controllerUsuario")

router.get ("/",controllerGeneral.index) 
router.get("/product/:id", controllerGeneral.producto)


router.get ("/register", controllerGeneral.register) 
router.get ("/login", controllerGeneral.login) 
router.get ("/profileEdit", controllerGeneral.profileEdit) 
router.get ("/searchResults", controllerGeneral.searchResults) 
router.get ("/productAdd", controllerGeneral.productAdd) 

router.get("/profile", controllerUsuario.profile)




module.exports = router;
