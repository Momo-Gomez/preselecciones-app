const { Router } = require("express");
const router = Router();
const {
    userRegister,
    userSignin,
    adminSignin,
} = require("../controllers/auth.controller");
//REGISTRO USUARIO
router.post("/api/usuario/registro", userRegister);
//INGRESO USUARIO
router.post("/api/usuario/ingreso", userSignin);
//INGRESO ADMIN
router.post("/api/administrador/ingreso", adminSignin);




module.exports = router;
