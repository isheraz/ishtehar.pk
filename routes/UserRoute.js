const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const authController = require("./controllers/authcontroller");

//Home Page route
router.get("/", (req, res) => res.send("Hello User!"));

router.get("/Cetagories", (req, res) => res.send("Cetogries of User"));

router.get("/signup", authController.signup_get);
router.get("/signup", authController.signup_post);
router.get("/login", authController.login_get);
router.get("/login", authController.login_post);
module.exports = router;
