"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notice.belongsTo(models.User, {
        foreignKey: "id",
        constraints: false,
      });

      Notice.belongsTo(models.Categories, {
        foreignKey: "id",
        constraints: false,
      });
    }
  }
  Notice.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userID: DataTypes.INTEGER,
      categoryID: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Notice",
      tableName: "Notices",
    }
  );
  return Notice;
};
