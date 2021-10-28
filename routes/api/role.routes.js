const { Router } = require("express");
const roleController = require("../../controllers/roleController");

const router = Router();

router.post("/new-role", roleController.createNew);

module.exports = router;
