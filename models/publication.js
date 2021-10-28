"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publication.belongsTo(models.Newspaper, {
        foreignKey: "id",
        constraints: false,
      });
      Publication.belongsTo(models.Notice, {
        foreignKey: "id",
        constraints: false,
      });
    }
  }
  Publication.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      noticesID: DataTypes.INTEGER,
      newspaperID: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Publication",
      tableName: "Publications",
    }
  );
  return Publication;
};
