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
      eventId: { type: DataTypes.INTEGER, onDelete: "CASCADE" },
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
      cakeMessage: {
        type: DataTypes.STRING(50),
      },
      memberTwoName: {
        type: DataTypes.STRING,
      },
      cakeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cakeImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "EventDetail",
    }
  );
  return EventDetail;
};
