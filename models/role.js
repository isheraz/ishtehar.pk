"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Role.hasMany(models.User);
    }
  }
  Role.init(
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: false,
      //   allowNull: false,
      //   defaultValue: DataTypes.INTEGER,
      // },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    // {
    //   freezeTableName: true,
    //   tableName: "Roles",
    // },
    {
      sequelize,
      modelName: "Role",
      tableName: "Roles",
    }
  );
  return Role;
};
