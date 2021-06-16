"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plan.hasMany(models.PlanItem, { foreignKey: "planId", as: "items" });
    }
  }
  Plan.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      members: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      validity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      price: { type: DataTypes.DECIMAL, allowNull: false },
      cakeWeight: { type: DataTypes.STRING, allowNull: true },
      cakeName: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
