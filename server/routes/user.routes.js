const { Router } = require("express");
const router = Router();
const {
    createUser
} = require("../controllers/user.controller");

router.get("/api/usuarios/registro", async (req, res) =>{
    res.send("saludos");
} )
router.post("/api/usuarios/registro", createUser);

module.exports = router;
