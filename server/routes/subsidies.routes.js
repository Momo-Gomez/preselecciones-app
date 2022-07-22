const { Router } = require("express");
const router = Router();
const {
  getSubsidies,
  getSituation,
} = require("../controllers/subsidies.controller");

router.get("/list", getSubsidies);
router.get("/situation", getSituation);

module.exports = router;
