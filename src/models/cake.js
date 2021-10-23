"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cake extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cake.hasMany(models.CakeVariant, {
        as: "variants",
      });
    }
  }
  Cake.init(
    {
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "Plans", key: "id"
        }
      },
      cakeName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      cakeImageUrl: {
        type: DataTypes.STRING,
      },
      cakeWeight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cakePrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cake",
    }
  );
  return Cake;
};
