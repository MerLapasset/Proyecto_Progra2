let express = require('express');
let router = express.Router();
let controllerGeneral= require ("../controllers/controller")
router.get ("/",controllerGeneral.index) // en vez del controller redirige direct a el ejs

router.get ("/registro",controllerGeneral.registro) // en vez del controller redirige direct a el ejs


module.exports = router;
