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
    }
  }
  Cake.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      cakeImageUrl: { type: DataTypes.STRING, allowNull: false },
      cakeWeight: { type: DataTypes.STRING, allowNull: false },
      cakePrice: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Cake",
    }
  );
  return Cake;
};
