const { Router } = require("express");
const router = Router();
const {
  createForm,
} = require("../controllers/files.controllers");

router.post("/upload", createForm);

module.exports = router;
