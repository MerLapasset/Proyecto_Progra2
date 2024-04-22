let express = require('express');
let router = express.Router();
let controllerUsuario= require ("../controllers/controllerUsuario")


router.get ("/register", controllerUsuario.register) 
router.get ("/login", controllerUsuario.login) 
router.get ("/profileEdit", controllerUsuario.profileEdit) 
router.get("/profile", controllerUsuario.profile, controllerUsuario.misProductos)
module.exports = router;
