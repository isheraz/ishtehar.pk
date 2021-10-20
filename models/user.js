"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      UserEmail: DataTypes.STRING,
      UserPassword: DataTypes.STRING,
      UserFirstName: DataTypes.STRING,
      UserLastName: DataTypes.STRING,
      UserCity: DataTypes.STRING,
      UserCountry: DataTypes.STRING,
      UserAddress: DataTypes.STRING,
      UserCNIC: DataTypes.STRING,
      UserPhone: DataTypes.STRING,
      RoleID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
