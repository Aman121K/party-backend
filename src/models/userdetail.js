"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetail.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreigKey: true,
        references: { model: "User", key: "id" },
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(40),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(40),
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Other"],
        defaultValue: "Male",
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "UserDetail",
    }
  );
  return UserDetail;
};
