const { Router } = require("express");
const categoryController = require("../../controllers/categoryController");
const { verifyToken } = require("../../middleware/auth");

const router = Router();

router.get("/category-list", categoryController.categoryList_get);

module.exports = router;
