'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserEmail: {
        type: Sequelize.STRING
      },
      UserPassword: {
        type: Sequelize.STRING
      },
      UserFirstName: {
        type: Sequelize.STRING
      },
      UserLastName: {
        type: Sequelize.STRING
      },
      UserCity: {
        type: Sequelize.STRING
      },
      UserCountry: {
        type: Sequelize.STRING
      },
      UserAddress: {
        type: Sequelize.STRING
      },
      UserCNIC: {
        type: Sequelize.STRING
      },
      UserPhone: {
        type: Sequelize.STRING
      },
      RoleID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};