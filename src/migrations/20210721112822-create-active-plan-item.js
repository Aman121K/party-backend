"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ActivePlanItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activePlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "ActivePlans",
          key: "id",
        },
      },
      itemName: {
        type: Sequelize.STRING,
      },
      itemDescription: {
        type: Sequelize.STRING,
      },
      itemPrice: {
        type: Sequelize.DECIMAL,
      },
      itemImageUrl: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("ActivePlanItems");
  },
};
