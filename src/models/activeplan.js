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
      // ActivePlan.belongsTo(models.Cake, { foreignKey: "cakeId", as: "cake" });
      // ActivePlan.belongsTo(models.Item, {
      //   foreignKey: "itemId",
      //   as: "item",
      // });
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
      planType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      noOfEvents: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
      },
      tenure: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ActivePlan",
    }
  );
  return ActivePlan;
};
