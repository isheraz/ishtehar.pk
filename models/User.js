const Sequelize = require("sequelize");

const db = require("../config/database").default;

const User = db.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
  },

  user_email: {
    type: Sequelize.STRING,
  },
  user_address: {
    type: Sequelize.STRING,
  },
  user_cnic: {
    type: Sequelize.STRING,
  },
  user_city: {
    type: Sequelize.STRING,
  },
  user_country: {
    type: Sequelize.STRING,
  },
  user_first_name: {
    type: Sequelize.STRING,
  },
  user_last_name: {
    type: Sequelize.STRING,
  },
  user_password: {
    type: Sequelize.STRING,
  },
  user_phone: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
