"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here

      User.hasOne(models.UserDetail, {
        foreignKey: "userId",
      });
      User.hasOne(models.ActivePlan, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      phone: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          len: {
            args: [10, 13],
            msg: "Invalid Phone Number",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
