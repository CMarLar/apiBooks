const {Router} = require('express');
const router = Router();
const userCtrl = require("../controller/user.controller");


// router.get('/alumnos', studentCtrl.getStudents);

// router.get('/profesional', profCtrl.getProfessional);
//este tiene que ser la misma función que professionals, pero para sacar a un estudiante

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/registro', userCtrl.postUser);
router.post('/login', userCtrl.login);

router.get('/libros',userCtrl.getBooks);
router.get('/libro',userCtrl.getOneBook);//cambio de endpoint de libros a libro O NO FUNCIONA
router.post('/libros',userCtrl.addNewBook);
router.put('/libros',userCtrl.modifyBooks);
router.delete('/libros',userCtrl.deleteBook);


module.exports = router;