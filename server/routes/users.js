const router = require("express").Router();
const { getUsers, createUser, getUserByrut,deleteUserByrut,updateUserByrut} = require("../database");

router.get("/user/signin", (req, res) => {
  res.render('users/signin');
});
router.get("/user/signup", (req, res) => {
  res.render("users/signup");
});
router.get("/user", getUsers); //llamada de metodos a la base de datos para obtener datos
router.post("/user", createUser); //se llama al metodo para crear usuarios en BD
router.get("/user/:rut", getUserByrut); //buscar usuarios por rut BD
router.delete("/user/:rut", deleteUserByrut);
router.put("/user/:rut", updateUserByrut);                

module.exports = router;
