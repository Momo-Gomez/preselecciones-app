const { Router } = require("express");
const router = Router();
const { createForm, UploadFiles } = require("../controllers/files.controllers");

router.post("/createForm", createForm);
router.post("/upload", UploadFiles)

module.exports = router;
