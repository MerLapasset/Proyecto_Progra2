let express = require('express');
let router = express.Router();
let controllerUsuario= require ("../controllers/controllerUsuario");
const loginValidation = require ('../middlewares/login-validator');
const registerValidation = require ('../middlewares/register-validator')


router.get ("/register", controllerUsuario.register.index) ;
router.post("/register", registerValidation, controllerUsuario.register.guardar);

router.get ("/login", controllerUsuario.login.index); 

router.post('/login', loginValidation, controllerUsuario.login.general);
router.get ("/profileEdit", controllerUsuario.profileEdit); 
router.get("/profile/:id", controllerUsuario.profile,);

router.post('/logout', controllerUsuario.logout);

module.exports = router;