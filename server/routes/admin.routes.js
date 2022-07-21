const { Router } = require("express");
const router = Router();
const {
    changePass,
    getUserPost,
} = require("../controllers/admin.controllers");
//cambiar contraseña
router.post("/cambiarContrasena", changePass);
router.get("/postulaciones",getUserPost );

module.exports = router;