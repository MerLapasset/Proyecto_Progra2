let express = require('express');
let router = express.Router();
let controllerUsuario= require ("../controllers/controllerUsuario");
const loginValidation = require ('./middlewares/login-validator');


router.get ("/register", controllerUsuario.register) ;
router.get ("/login", controllerUsuario.login); 
router.post('/login', loginValidation, controllerUsuario.login);
router.get ("/profileEdit", controllerUsuario.profileEdit); 
router.get("/profile/:id", controllerUsuario.profile, controllerUsuario.misProductos);

module.exports = router;