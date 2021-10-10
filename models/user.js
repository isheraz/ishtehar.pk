"use strict";
const { Model } = require("sequelize");
var validator = require("validator");
const expValid = require("express-validator");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User belong to Role
      User.belongsTo(models.Role, {
        foreignKey: "id",
        constraints: false,
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        required: [true, "Please Enter an Email"],
        unique: true,
        lowercase: true,
      },
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      address: DataTypes.STRING,
      CNIC: DataTypes.STRING,
      phone: DataTypes.STRING,
      roleID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  // Sequelize.post("save", function (doc, next) {
  //   next();
  // });

  return User;
};
