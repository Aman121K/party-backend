"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CakeVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CakeVariant.init(
    {
      cakeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "Cakes",
          key: "id",
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CakeVariant",
    }
  );
  return CakeVariant;
};
