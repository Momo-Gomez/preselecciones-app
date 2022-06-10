const router = require("express").Router();

router.get("api/admin/signin", (req, res) => {
  res.send("ingreso a la aplicación administrador");
});
router.get("api/admin/signup", (req, res) => {
  res.send("Formulario registro administrador");
});
module.exports = router;
