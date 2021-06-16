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
        includeIgnoreAttributes: false,
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
      cakeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Cakes", key: "id" },
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Items", key: "id" },
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
