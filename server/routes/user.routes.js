const { Router } = require("express");
const router = Router();
const {
    register,
    signin
} = require("../controllers/user.controller");
//REGISTRO
router.post("/api/usuario/registro", register);
//INGRESO
router.post("/api/usuario/ingreso", signin);




module.exports = router;
