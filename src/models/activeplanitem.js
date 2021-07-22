"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ActivePlanItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivePlanItem.init(
    {
      activePlanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "ActivePlans",
          key: "id",
        },
      },
      itemName: {
        type: DataTypes.STRING,
      },
      itemDescription: {
        type: DataTypes.STRING,
      },
      itemPrice: {
        type: DataTypes.DECIMAL,
      },
      itemImageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "ActivePlanItem",
    }
  );
  return ActivePlanItem;
};
