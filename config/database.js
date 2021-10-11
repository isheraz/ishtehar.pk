const { Sequelize } = require("sequelize");

module.exports = new Sequelize("ishtehar", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
