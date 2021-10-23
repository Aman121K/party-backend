"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cakes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      planId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "Plans", key: "id"
        }
      },
      cakeName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      cakeImageUrl: {
        type: Sequelize.STRING,
      },
      cakeWeight: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cakePrice: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("Cakes");
  },
};
