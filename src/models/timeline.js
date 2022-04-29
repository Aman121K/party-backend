"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Timeline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Timeline.belongsTo(models.Event, { as: "event" });
    }
  }
  Timeline.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "Users",
          key: "id"
        }
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
          model: "Events",
          key: "id"
        }
      },
      year: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "Timeline"
    }
  );
  return Timeline;
};
