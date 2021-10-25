"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.hasOne(models.EventDetail, {
        foreignKey: "eventId",
        as: "details"
      });
      Event.hasMany(models.EventUtilities, {
        as: "utilities"
      });
      Event.belongsTo(models.City, { foreignKey: "cityId", as: "city" });
      Event.belongsTo(models.EventTime, {
        foreignKey: "eventTimeId",
        as: "eventTime"
      });
      Event.belongsTo(models.Plan, { foreignKey: "planId", as: "planDetails" });
    }
  }
  Event.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Plans", key: "id" }
      },
      activePlanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "ActivePlans", key: "id" }
      },
      eventType: {
        type: DataTypes.ENUM,
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
        type: DataTypes.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        allowNull: false
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Cities", key: "id" }
      },
      eventTimeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "EventTimes", key: "id" }
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },

    {
      sequelize,
      modelName: "Event"
    }
  );
  return Event;
};
