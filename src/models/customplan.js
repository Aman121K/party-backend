"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomPlan.belongsTo(models.Event, { foreigKey: "eventId", as: "event" });
      CustomPlan.hasMany(models.CustomPlanItem, {
        foreignKey: "customPlanId",
        as: "items",
      });
    }
  }
  CustomPlan.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Users", key: "id" },
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Events", key: "id" },
      },
      cakeName: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "CustomPlan",
    }
  );
  return CustomPlan;
};
