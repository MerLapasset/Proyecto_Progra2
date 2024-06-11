let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controllerProducto");
const productValidations = require('../middlewares/product-validator');
let validations = []

router.get ("/",controllerGeneral.index) 
router.get("/product/:id", controllerGeneral.producto)
router.get ("/searchResults", controllerGeneral.searchResults) 
router.get ("/productAdd", controllerGeneral.productAdd) 





module.exports = router;
