const sequelize = require("sequelize");

module.exports = new sequelize("ishtehar", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});
