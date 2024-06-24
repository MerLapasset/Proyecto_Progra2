let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controllerProducto");
const productAddValidations = require('../middlewares/product-addValidator');
const commentValidation = require('../middlewares/comment-validator');

router.get ("/",controllerGeneral.index);
router.get("/product/:id", controllerGeneral.producto.index);
router.post('/product/:id', commentValidation, controllerGeneral.producto.comentarios);
router.post('/product/:id/delete', controllerGeneral.producto.borrar);
router.get ("/editarProducto/:id", controllerGeneral.editarProducto.index); 
router.post ("/editarProducto/:id",productAddValidations,controllerGeneral.editarProducto.modificar); 


router.get ("/searchResults", controllerGeneral.searchResults) 
router.get ("/productAdd", controllerGeneral.productAdd.index) 
router.post ("/productAdd", productAddValidations,controllerGeneral.productAdd.guardar) 






module.exports = router;
