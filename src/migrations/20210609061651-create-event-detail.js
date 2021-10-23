"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EventDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Events", key: "id" },
        onDelete: "CASCADE",
      },
      cakeMessage: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      memberName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male",
        allowNull: true,
      },
      memberOneName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      memberTwoName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cakeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cakeImageUrl: {
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
    await queryInterface.dropTable("EventDetails");
  },
};
