"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ActivePlans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activePlanType: {
        type: Sequelize.ENUM,
        values: ["standardPlan", "customPlan"],
        defaultValue: "standardPlan",
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Users", key: "id" },
      },
      membersIncluded: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      packagePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      packageDuration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cakeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cakeWeight: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cakeImageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discountPercent: {
        type: Sequelize.INTEGER,
      },
      discountPrice: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      deliveryCharges: {
        type: Sequelize.INTEGER,
      },
      payableAmount: {
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
    await queryInterface.dropTable("ActivePlans");
  },
};
