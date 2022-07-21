const { Router } = require("express");
const router = Router();
const {
    userRegister,
    userSignin,
    adminSignin,
} = require("../controllers/auth.controller");
//REGISTRO USUARIO
router.post("/usuario/registro", userRegister);
//INGRESO USUARIO
router.post("/usuario/ingreso", userSignin);
//INGRESO ADMIN
router.post("/administrador/ingreso", adminSignin);




module.exports = router;
