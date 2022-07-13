const { Router } = require("express");
const router = Router();
const {
  getSubsidies,
  getSubsidiesByid,
} = require("../controllers/subsidies.controller");

router.get("/api/beneficios/lista", getSubsidies);

module.exports = router;
