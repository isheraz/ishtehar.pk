const { Router } = require("express");
const roleController = require("../../controllers/roleController");

const router = Router();

router.post("/new-role", roleController.createNew);
router.get("/role-list", roleController.roleList_get);

module.exports = router;
