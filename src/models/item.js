"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      itemName: { type: DataTypes.STRING, allowNull: false },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: "Categories", key: "id" },
      },
      itemImageUrl: { type: DataTypes.STRING, allowNull: true },
      itemDescription: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
