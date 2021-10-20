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
    }
  }
  NoticesMetadata.init(
    {
      NoticesKey: DataTypes.STRING,
      NoticesValue: DataTypes.STRING,
      NoticesID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NoticesMetadata",
    }
  );
  return NoticesMetadata;
};
