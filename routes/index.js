let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controllerProducto");
const productAddValidations = require('../middlewares/product-addValidator');

router.get ("/",controllerGeneral.index) 
router.get("/product/:id", controllerGeneral.producto.index)
router.post("/product/:id", controllerGeneral.producto.borrar)
router.get ("/editarProducto/:id", controllerGeneral.editarProducto.index) 
router.post ("/editarProducto/:id", controllerGeneral.editarProducto.modificar) 


router.get ("/searchResults", controllerGeneral.searchResults) 
router.get ("/productAdd", controllerGeneral.productAdd.index) 
router.post ("/productAdd", productAddValidations,controllerGeneral.productAdd.guardar) 






module.exports = router;
