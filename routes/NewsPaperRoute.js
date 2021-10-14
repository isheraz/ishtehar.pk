const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

//About page
router.get("/", (req, res) => res.send("Newspaper!"));
router.get("/Publisher", (req, res) => res.send("Publisher's Details!"));

module.exports = router;
