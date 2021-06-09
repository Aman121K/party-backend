"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EventDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventDetail.init(
    {
      eventId: { type: DataTypes.INTEGER },
      memberName: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male",
      },
      memberOneName: {
        type: DataTypes.STRING,
      },
      memberTwoName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "EventDetail",
    }
  );
  return EventDetail;
};
