const { Router } = require("express");
const authController = require("../../controllers/authController");

const router = Router();

router.post("/signup", authController.signup_post);
router.post("/role-create", authController.role_create_post);
//router.get("/login", authController.login_get);
router.post("/login", authController.login_post);
router.post("/renew-access-token", authController.renew_access_token);

module.exports = router;
