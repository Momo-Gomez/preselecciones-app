const { Router } = require("express");
const router = Router();
const {
    changePass,
} = require("../controllers/user.controller");
//cambiar contraseña
router.post("/api/usuario/cambiarContrasena", changePass);

module.exports = router;
