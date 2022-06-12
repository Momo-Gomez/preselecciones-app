const { Router } = require("express");
const router = Router();
const {
    createUser
} = require("../controllers/user.controller");
//REGISTRO
router.post("/api/usuarios/registro", createUser);


module.exports = router;
