const { Router } = require("express");
const router = Router();
const {
    changePass,
} = require("../controllers/admin.controllers");
//cambiar contraseña
router.post("/cambiarContrasena", changePass);

module.exports = router;