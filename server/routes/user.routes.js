const { Router } = require("express");
const router = Router();
const {
    changePass,
} = require("../controllers/user.controller");
//cambiar contraseña
router.post("/usuario/cambiarContrasena", changePass);

module.exports = router;
