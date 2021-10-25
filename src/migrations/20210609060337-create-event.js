"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Users", key: "id" }
      },
      planId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Plans", key: "id" }
      },
      activePlanId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "ActivePlans", key: "id" }
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      eventType: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: [
          "birthday",
          "anniversary",
          "promotion",
          "pregnancy",
          "wedding",
          "valentines day",
          "christmas",
          "new year",
          "teachers day",
          "childrens day",
          "farewell"
        ],
        defaultValue: "birthday"
      },
      eventDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING(13),
        allowNull: false
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Cities", key: "id" }
      },
      eventTimeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "EventTimes", key: "id" }
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable("Events");
  }
};
