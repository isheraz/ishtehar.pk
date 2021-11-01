const { Router } = require("express");
const userController = require("../../controllers/userController");
const { verifyToken } = require("../../middleware/auth");

const router = Router();

// router.get("/signupuser", userController.signupuser_get);
// router.post("/signupuser", userController.signupuser_post);
// router.post("/sign-in", userController.signin_post);
// router.get("/updateNotice", auth, userController.updateNotice);
router.post("/add-notice", verifyToken, userController.add_notice_post);
router.post("/add-categories", verifyToken, userController.add_categories_post);
router.post("/add-newspaper", verifyToken, userController.add_newspaper_post);
router.post("/update-profile", verifyToken, userController.updateUser_post);

module.exports = router;
