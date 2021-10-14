const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

//About page
router.get("/", (req, res) => res.send("All Notices of ishtehar.pk!"));

module.exports = router;
