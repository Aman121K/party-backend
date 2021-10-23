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
      Plan.belongsToMany(models.Utility, {
        through: "PlanUtility", as: "utilities"
      });
      Plan.belongsToMany(models.Cake, {
        through: "PlanCake", as: "cakes"
      });
      Plan.hasMany(models.Event, { as: "events" })
    }
  }
  Plan.init(
    {
      planName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      basePrice: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      baseYears: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      baseEvents: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "Plan",
    }
  );
  return Plan;
};
