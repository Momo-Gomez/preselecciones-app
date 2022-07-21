const { Router } = require("express");
const router = Router();
const {
    changePass,
} = require("../controllers/admin.controllers");
//cambiar contraseña
router.post("admin/cambiarContrasena", changePass);

module.exports = router;