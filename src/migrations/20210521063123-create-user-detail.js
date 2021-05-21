"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: "Users", key: "id" },
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      lastName: {
        allowNull: false,

        type: Sequelize.STRING(40),
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male",
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      city: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { model: "Cities", key: "id" },
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      pincode: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("UserDetails");
  },
};
