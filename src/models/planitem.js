"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlanItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlanItem.belongsTo(models.Item, { foreignKey  : "itemId", as : "item"});
    }
  }
  PlanItem.init(
    {
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Plans", key: "id" },
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Items", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "PlanItem",
    }
  );
  return PlanItem;
};
