"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ActivePlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ActivePlan.belongsTo(models.Cake, { foreignKey: "cakeId", as: "cake" });
      ActivePlan.belongsTo(models.Item, {
        foreignKey: "itemId",
        as: "item",
      });
      ActivePlan.belongsToMany(models.Event, {
        through: "ActivePlanEvents",
      });
    }
  }
  ActivePlan.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Users", key: "id" },
      },
      activePlanType: {
        type: DataTypes.ENUM,
        values: ["standardPlan", "customPlan"],
        defaultValue: "standardPlan",
        allowNull: false,
      },
      membersIncluded: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      packagePrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      packageDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cakeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cakeWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cakeImageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discountPercent: {
        type: DataTypes.INTEGER,
      },
      discountPrice: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      deliveryCharges: {
        type: DataTypes.INTEGER,
      },
      payableAmount: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ActivePlan",
    }
  );
  return ActivePlan;
};
