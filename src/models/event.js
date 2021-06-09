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
      Event.hasOne(models.EventDetail, { foreignKey: "eventId", as:"details" });
      Event.belongsTo(models.City, {foreignKey : "cityId", as:"city"});
    }
  }
  Event.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventType: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["birthday", "anniversary"],
        defaultValue: "birthday",
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Event",
    }
  );
  return Event;
};
