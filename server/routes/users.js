const router = require("express").Router();
const {getUsers, createUser, getUserByrut,deleteUserByrut,updateUserByrut} = require("../models/user");
// Registro
router.post("/signin", createUser); //se llama al metodo para crear usuarios en BD;

module.exports = router;








/**Ingreso
router.get("/user/signup", (req, res) => {
  res.render("users/signup");
});

router.get("/user", getUsers); //llamada de metodos a la base de datos para obtener datos
router.get("/user/:rut", getUserByrut); //buscar usuarios por rut BD
router.delete("/user/:rut", deleteUserByrut);
router.put("/user/:rut", updateUserByrut); */               


