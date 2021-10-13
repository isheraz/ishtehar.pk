const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');

//Role Page
router.get("/", (req, res) => res.send("Roles of Users!"));

module.exports = router;

