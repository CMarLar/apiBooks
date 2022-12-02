const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");


// router.get('/alumnos', studentCtrl.getStudents);

// router.get('/profesional', profCtrl.getProfessional);
//este tiene que ser la misma función que professionals, pero para sacar a un estudiante

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/registro', userCtrl.postUser);

router.post('/login', userCtrl.login);

// //comenta estas hasta que estén
// router.get('/libros',userCtrl.getlibros);//hay 2 gets? Mira enunciado
// router.post('/libros',userCtrl.postLibros);
// router.put('/libros',userCtrl.putLibros);
// router.delete('/libros',userCtrl.deleteLibros);


module.exports = router;