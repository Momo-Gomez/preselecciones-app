const { Router } = require("express");
const router = Router();
const {
    changePass,
} = require("../controllers/admin.controllers");
//cambiar contraseña
router.post("/api/admin/cambiarContrasena", changePass);

module.exports = router;