const { Router } = require("express");
const router = Router();
const {
  getSubsidies,
  getSubsidiesByid,
} = require("../controllers/subsidies.controller");

router.get("/api/beneficios", getSubsidies);

router.get("/api/beneficios/:idbeneficio", getSubsidiesByid);

module.exports = router;
