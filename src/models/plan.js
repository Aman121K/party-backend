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
    }
  }
  Plan.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      members: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      validity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      price: { type: DataTypes.DECIMAL, allowNull: false },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
