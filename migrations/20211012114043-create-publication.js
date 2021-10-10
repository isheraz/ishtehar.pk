"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Publications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      noticesID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Notices",
          },
          key: "id",
        },
      },
      newspaperID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Newspapers",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Publications");
  },
};
