const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about/subsidio1", (req, res) => {
  res.send("Subsidio 1");
});
module.exports = router;
