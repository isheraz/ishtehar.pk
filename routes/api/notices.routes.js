const { Router } = require("express");
const noticesController = require("../../controllers/noticesController");

const router = Router();

router.get("/all-notices", noticesController.all_notices);

module.exports = router;
