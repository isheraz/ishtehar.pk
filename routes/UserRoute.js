const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");

//Home Page route
router.get("/", (req, res) => res.send("Hello User!"));

module.exports = router;
