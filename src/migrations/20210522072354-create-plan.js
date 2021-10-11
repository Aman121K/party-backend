"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      planName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      basePrice: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      baseYears: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      baseEvents: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable("Plans");
  },
};
