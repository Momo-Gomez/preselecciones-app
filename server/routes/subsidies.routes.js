const {Router} = require ("express")
const router = Router();
const {getSubsidies} = require("../controllers/subsidies.controller");

router.get("/beneficios",getSubsidies);

router.get("/beneficios/:idbeneficio",getSubsidiesByid);

module.exports = router