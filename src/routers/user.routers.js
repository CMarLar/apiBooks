const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");


// router.get('/alumnos', studentCtrl.getStudents);

// router.get('/profesional', profCtrl.getProfessional);
//este tiene que ser la misma función que professionals, pero para sacar a un estudiante

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/registro', userCtrl.postUser);

router.post('/login', userCtrl.login);

module.exports = router;