"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NoticesMetadata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NoticesMetadata.belongsTo(models.Notice, {
        foreignKey: "id",
        constraints: false,
      });
    }
  }
  NoticesMetadata.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      key: DataTypes.STRING,
      value: DataTypes.STRING,
      noticesID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NoticesMetadata",
      tableName: "NoticesMetadata",
    }
  );
  return NoticesMetadata;
};
